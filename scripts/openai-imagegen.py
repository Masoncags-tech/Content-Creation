#!/usr/bin/env python3
"""Generate stills with OpenAI gpt-image-2 (ChatGPT imagegen-2 class).

Key is read from $OPENAI_API_KEY, else pulled from 1Password item
"OpenAI" field api_key via the `op` CLI so it never lands on disk.

Usage:
  openai-imagegen.py --prompt-file P --out OUT.png [--size 1024x1536]
                     [--ref REF.png ...] [--model gpt-image-2]
"""
import argparse, base64, json, os, subprocess, sys, urllib.request, urllib.error

OP_ITEM = "jjex2a6wd6dwqfa7emx7fczuki"  # 1Password "OpenAI"


def get_key() -> str:
    k = os.environ.get("OPENAI_API_KEY")
    if k:
        return k
    out = subprocess.run(
        ["op", "item", "get", OP_ITEM, "--fields", "api_key", "--reveal"],
        capture_output=True, text=True,
    )
    k = out.stdout.strip()
    if not k:
        sys.exit("could not resolve OpenAI key from env or 1Password")
    return k


def post_multipart(url, key, fields, files):
    boundary = "----imagegenboundary7e1f"
    body = bytearray()
    for name, val in fields.items():
        body += f"--{boundary}\r\n".encode()
        body += f'Content-Disposition: form-data; name="{name}"\r\n\r\n'.encode()
        body += f"{val}\r\n".encode()
    for name, path in files:
        fn = os.path.basename(path)
        body += f"--{boundary}\r\n".encode()
        body += (
            f'Content-Disposition: form-data; name="{name}"; filename="{fn}"\r\n'
            f"Content-Type: image/png\r\n\r\n"
        ).encode()
        with open(path, "rb") as f:
            body += f.read()
        body += b"\r\n"
    body += f"--{boundary}--\r\n".encode()
    req = urllib.request.Request(url, data=bytes(body), method="POST")
    req.add_header("Authorization", f"Bearer {key}")
    req.add_header("Content-Type", f"multipart/form-data; boundary={boundary}")
    return req


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--prompt-file", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--size", default="1024x1536")
    ap.add_argument("--model", default="gpt-image-2")
    ap.add_argument("--ref", action="append", default=[])
    ap.add_argument("--quality", default="high")
    args = ap.parse_args()

    key = get_key()
    with open(args.prompt_file) as f:
        prompt = f.read().strip()

    if args.ref:
        url = "https://api.openai.com/v1/images/edits"
        fields = {"model": args.model, "prompt": prompt,
                  "size": args.size, "quality": args.quality}
        files = [("image[]", r) for r in args.ref]
        req = post_multipart(url, key, fields, files)
    else:
        url = "https://api.openai.com/v1/images/generations"
        payload = {"model": args.model, "prompt": prompt,
                   "size": args.size, "quality": args.quality}
        req = urllib.request.Request(
            url, data=json.dumps(payload).encode(), method="POST")
        req.add_header("Authorization", f"Bearer {key}")
        req.add_header("Content-Type", "application/json")

    try:
        with urllib.request.urlopen(req, timeout=300) as resp:
            data = json.load(resp)
    except urllib.error.HTTPError as e:
        sys.exit(f"HTTP {e.code}: {e.read().decode()[:500]}")

    b64 = data["data"][0]["b64_json"]
    os.makedirs(os.path.dirname(os.path.abspath(args.out)), exist_ok=True)
    with open(args.out, "wb") as f:
        f.write(base64.b64decode(b64))
    usage = data.get("usage", {})
    print(f"saved {args.out}  usage={usage}")


if __name__ == "__main__":
    main()
