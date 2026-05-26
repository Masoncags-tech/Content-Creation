# QA Report

## Run

- Date: 2026-05-26
- Completed job: `1a3b6579-cde1-464f-a4b8-9364daaa68ba`
- Rejected job: `09483c34-3fa0-413c-944c-f3448230604a`
- Rejected motion candidate: `024afb0c-368b-4dfd-8a02-237e03137d4a`
- Duration: 15.04 seconds
- Resolution: 1080 x 1916
- Codecs: H.264 video, AAC audio
- Local review file: `renders/2026-05-26-prompt-max-service-ugc/prompt-max-service-ugc-kling.mp4`
- Contact sheet: `renders/2026-05-26-prompt-max-service-ugc/prompt-max-service-ugc-kling-contact-sheet.jpg`

## Gate Results

| Gate | Result | Notes |
| --- | --- | --- |
| First two seconds | pass | Hand is already moving toward the phone in the first frame. |
| Scene reality | pass visual review | The workshop/back-office frame, wardrobe, table, window light, and handheld angle stay coherent. |
| Prop logic | pass | Phone, pen, and notebook are established and remain in-scene. |
| UI logic | pass | Phone remains face down/hidden in the contact sheet; no app screens, dashboards, captions, or fake UI are visible. |
| Transition logic | pass | One continuous shot avoids the prior hard-cut/insert problem. |
| Native audio | partial | AAC audio is present. Voice quality, line accuracy, and lip feel still need human listening review. |
| Generated media defects | pass visual review | No readable fake apps, dashboards, captions, logos, or end-card text visible in contact sheet. |
| Claim logic | pass | Claim is scoped to one handled item; no metrics or guaranteed results. |
| Taste gate | fail | The clip avoided fake UI but the output quality was not good enough. Constraint success is not audience-ready quality. |

## Visual Review

What worked:

- No fake app screens.
- No generated text.
- First frame is not dead.
- The same location and wardrobe carry through the clip.
- Prop list stayed restrained.
- The phone stays face down instead of inventing a screen.

Remaining risks:

- Contact sheet cannot prove the exact spoken line.
- Phone buzz and pen-tap foley need listening review.
- Overall render quality is too generic/AI-looking for release.
- Lip sync and voice tone need human review before any future version could be considered.
- A production version can still add deterministic captions or proof UI in post if needed.

## Decision

Kling output is rejected. It passes some constraint gates but fails the output-quality gate.

Marketing Studio output was rejected for this run because the phone screen became visibly UI-like in the contact sheet. Even though it avoided readable copy, it violated the stricter hidden/black/blurred/icon-only device-screen policy.

Grok output was rejected because the image quality and overall taste are not competitive enough for the creative bar.

Kling 3.0 image-to-video preserved the approved native ChatGPT start frame, avoided fake UI, kept prop logic intact, and produced a continuous performance instead of a jarring transition. Mason still rejected the output quality, so this should not be used as a creative baseline.

Next iteration should use:

- locked voice generation
- deterministic proof insert rendered in post
- high-quality start/end frames before animation
- Kling, Cinema Studio, or Veo-style image-to-video routing instead of Grok text-to-video
- transcript check against approved script
- OCR pass once the tooling is added

## Credit Use

Ultra plan is active with 3,000 credits as of 2026-05-26. The rejected Kling motion candidate cost 37.5 credits, leaving 2,962.5 credits after the run.

Optimization rule: preserve model quality and reduce waste through better start frames, tighter scene contracts, cost preflight, and review after every paid motion attempt. Do not downgrade to weak models merely to save credits if the weaker model lowers the chance of a usable cut. Do not count a visually weak output as a baseline just because it avoided fake UI.

## Routing Correction

Future concept/start frames should use native ChatGPT image generation first. Higgsfield image generation is reserved for cases where the still must be ingested as a Higgsfield-native reference or Mason explicitly wants that model.
