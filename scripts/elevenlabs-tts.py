#!/usr/bin/env python3
"""Generate ElevenLabs TTS lines from a JSON manifest.

Key from $ELEVENLABS_API_KEY else 1Password item "elevenlabs API" notesPlain.

Manifest: [{"id","voice_id","text","stability"?,"style"?}]
Writes <outdir>/<id>.mp3 for each line.
"""
import argparse, json, os, subprocess, sys, urllib.request, urllib.error

OP_ITEM = "fjoypdbkhkajs7wlh6kwuincra"  # 1Password "elevenlabs API"
MODEL = "eleven_multilingual_v2"


def get_key() -> str:
    k = os.environ.get("ELEVENLABS_API_KEY")
    if k:
        return k
    out = subprocess.run(
        ["op", "item", "get", OP_ITEM, "--fields", "notesPlain", "--reveal"],
        capture_output=True, text=True)
    k = out.stdout.strip()
    if not k:
        sys.exit("could not resolve ElevenLabs key")
    return k


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--manifest", required=True)
    ap.add_argument("--outdir", required=True)
    args = ap.parse_args()
    key = get_key()
    os.makedirs(args.outdir, exist_ok=True)
    with open(args.manifest) as f:
        lines = json.load(f)
    for ln in lines:
        url = f"https://api.elevenlabs.io/v1/text-to-speech/{ln['voice_id']}"
        payload = {
            "text": ln["text"],
            "model_id": MODEL,
            "voice_settings": {
                "stability": ln.get("stability", 0.4),
                "similarity_boost": ln.get("similarity_boost", 0.8),
                "style": ln.get("style", 0.5),
                "use_speaker_boost": True,
            },
        }
        req = urllib.request.Request(url, data=json.dumps(payload).encode(),
                                     method="POST")
        req.add_header("xi-api-key", key)
        req.add_header("Content-Type", "application/json")
        req.add_header("Accept", "audio/mpeg")
        out = os.path.join(args.outdir, f"{ln['id']}.mp3")
        try:
            with urllib.request.urlopen(req, timeout=120) as resp:
                with open(out, "wb") as o:
                    o.write(resp.read())
        except urllib.error.HTTPError as e:
            sys.exit(f"HTTP {e.code} on {ln['id']}: {e.read().decode()[:300]}")
        print(f"saved {out}  ({ln['id']}: \"{ln['text']}\")")


if __name__ == "__main__":
    main()
