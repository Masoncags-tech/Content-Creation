# Prompt Max Service UGC Run Log

## Metadata

- Run date: 2026-05-26
- Format: product-in-life UGC
- Platform: TikTok/Reels/Shorts
- Duration target: 15 seconds
- Aspect ratio: 9:16
- Tool: native ChatGPT image generation + Higgsfield Kling 3.0
- Primary model job: `09483c34-3fa0-413c-944c-f3448230604a`
- Backup model job: `1a3b6579-cde1-464f-a4b8-9364daaa68ba`
- Production motion job: `024afb0c-368b-4dfd-8a02-237e03137d4a`
- Start frame jobs: `6fb4c3c2-9e65-45dd-96e2-9714c0742f57`, `48b10faa-479a-45ee-aad5-f3da68e99730`
- Native ChatGPT start frame: `~/.codex/generated_images/019dda26-3078-7c71-b195-697ac52c6d10/ig_074cb9dbbb852081016a15ee348a84819b95afc371d558da17.png`
- Uploaded native start frame media: `ddd2d245-4487-429e-9172-86824fbff05e`

## Goal

Demonstrate the Prompt Max process on a service-business workflow without allowing the model to invent phone apps, dashboards, readable UI, fake metrics, or random props.

## Scene Contract

- Viewer: service-business owner/operator
- Pain: customer inquiry arrives while the owner is busy
- First visible event: phone buzzes face down on a workbench while the owner reaches toward it
- Spoken trigger: the buzz interrupts the owner
- Proof question: did the follow-up actually happen?
- Payoff: owner realizes the work was already handled

## Prop Contract

| Prop | Origin | Owner | Action | Reason | End State |
| --- | --- | --- | --- | --- | --- |
| phone | face down on workbench | owner | buzzes, owner reaches, screen stays hidden | creates interruption without fake UI | still on workbench |
| pen | beside notebook | owner | tapped once at end | gives tactile payoff motion | beside notebook |
| notebook | workbench | owner | background prop only | makes setting believable | stays on workbench |

## UI Policy

- Model may show only hidden, black, reflected, blurred, or icon-only screen states.
- No readable app text, app grids, calendar text, dashboard text, messages, logos, or generated captions.
- Proof insert must be icon-only in this test.
- Any future exact proof UI should be deterministic post-production.

## Generation Prompt

```text
Native TikTok/Reels UGC, 15 seconds, 9:16. Scene is a small service-business back office, late afternoon, handheld iPhone camera, practical room tone.

First frame is already active: a phone buzzes face down on a workbench while an owner in a plain work hoodie reaches toward it. The phone screen stays hidden, black, reflected, blurred, or icon-only; no readable app text, no app grid, no calendar text, no dashboard text. Only props are phone, pen, and notebook. The phone starts face down on the workbench, the owner reaches because it buzzed, then stops because the follow-up is already handled. The pen starts beside the notebook, the owner taps it once at the end.

In-scene dialogue, close iPhone mic, not voiceover: "I was about to answer that. It was already handled."

Cut once to an icon-only proof insert: a clean neutral card with an incoming dot moving into a green check. No words, no numbers, no logos, no fake UI.

Cut back to owner tapping the pen once and nodding, relieved. Natural mouth movement, small facial reaction, subtle handheld wobble. Audio: office room tone, phone buzz, pen tap, no music.

Avoid generated captions, end cards, readable fake UI text, fake logos, invented app screens, random props appearing, warped hands, extra fingers, stock ad acting, abstract flashing boxes, sci-fi AI visuals.
```

## QA Forecast

- Fake phone UI: mitigated by face-down/hidden/blurred screen instruction.
- Random props: mitigated by explicit only-props list.
- Static first frame: mitigated by "first frame is already active" and buzzing/reaching action.
- Loose voiceover: mitigated by in-scene dialogue, close iPhone mic, room tone.
- Proof hallucination: mitigated by icon-only proof insert, no words/numbers/logos.

## QA Result

Visual QA passed as process proof-of-work. See `qa-report.md`.

## Iteration Notes

- Primary Marketing Studio job stayed queued longer than expected.
- Backup route started with the same scene contract through a text-to-video model so the process could keep moving.
- Both routes preserve the same no-readable-UI and prop-continuity constraints.
- Completed backup output: `https://d8j0ntlcm91z4.cloudfront.net/user_3CjMm3xTj7IIAXHEPNWv8ovjy0Z/hf_20260526_183204_1a3b6579-cde1-464f-a4b8-9364daaa68ba.mp4`
- Primary Marketing Studio output completed later but was rejected because the phone screen became visibly UI-like instead of hidden/black/blurred/icon-only.
- Backup Grok output was rejected for final creative because the image quality/taste bar is too low, even though it avoided fake UI.
- Better route selected: approved high-taste start frame first, then animate with Kling/Cinema/Veo-style image-to-video.
- Credit blocker resolved after Ultra upgrade; Kling 3.0 animation submitted as one paid motion attempt.
- Routing correction: concept/start frames should be generated with native ChatGPT image generation first, not Higgsfield still-image credits.
- Native ChatGPT output produced a better concept frame for the approved lane; one alternate native output failed the no-text/no-UI gate, so the QA gate still applies to native images too.
- Ultra plan is active with 3,000 credits as of 2026-05-26; spend credits on approved motion attempts, not exploratory stills.
- Production motion attempt cost preflight: 37.5 credits.
- Remaining credits after production motion attempt: 2,962.5.
- Completed Kling output: `https://d8j0ntlcm91z4.cloudfront.net/user_3CjMm3xTj7IIAXHEPNWv8ovjy0Z/hf_20260526_191346_024afb0c-368b-4dfd-8a02-237e03137d4a.mp4`
- Local Kling output: `renders/2026-05-26-prompt-max-service-ugc/prompt-max-service-ugc-kling.mp4`
- Local Kling contact sheet: `renders/2026-05-26-prompt-max-service-ugc/prompt-max-service-ugc-kling-contact-sheet.jpg`
- Visual QA: constraint gates passed, but Mason rejected output quality. The phone stays face down, no fake UI/text appears, prop logic holds, and the continuous shot avoids the transition failure in earlier tests, but this is not a creative baseline.
- Remaining QA: human listening review for exact line, lip sync, voice tone, phone buzz, and pen tap.

## Next Animation Prompt

```text
Use the provided image as the exact first frame. Premium native TikTok/Reels UGC, realistic handheld iPhone footage in a small service-business workshop/back office, late afternoon warm light.

Continue the moment naturally: the face-down phone buzzes on the workbench, the owner finishes reaching toward it but does not pick it up. The phone screen remains hidden/black the entire time. He glances at the phone, then back toward the camera with a small relieved expression and says in-scene: "I was about to answer that. It was already handled." Natural mouth movement, subtle eyebrow reaction, realistic hand motion. He then taps the pen once beside the notebook and nods.

One continuous shot, no scene change, no visible phone UI, no readable text, no app screens, no dashboards, no captions, no logos, no extra props. Keep the exact wardrobe, room, phone, pen, notebook, and lighting from the start frame. Slight handheld micro-wobble, iPhone mic room tone, phone buzz, pen tap, no music. Avoid warped hands, extra fingers, static face, stock ad acting, generated text, fake apps, abstract graphics.
```
