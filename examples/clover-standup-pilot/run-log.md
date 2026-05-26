# Clover Standup Pilot Run Log

## Metadata

- Run date: 2026-05-26
- Format: animated Clover-agent workplace sitcom
- Platform: TikTok/Reels/Shorts
- Duration target: 15 seconds
- Aspect ratio: 9:16
- Final local render: `renders/2026-05-26-clover-cartoon-pilot/clover-standup-pilot-15s.mp4`
- Final contact sheet: `renders/2026-05-26-clover-cartoon-pilot/clover-standup-pilot-15s-contact-sheet.jpg`

## Creative Goal

Make the Clover Digital agents feel like a real recurring cast inside a high-taste animated startup workplace show.

The creative lane is not generic AI mascot content. The target is a premium cartoon world with cute recurring agent personalities, real office tension, quick dialogue, and enough taste that the characters can become Clover IP.

## Script

| Time | Character | Line | Purpose |
| --- | --- | --- | --- |
| 0.30s | Hermes | Standup check. Ops are green. | Establish calm COO energy. |
| 3.20s | Bighoss | Build is blocked by taste. | Introduce conflict from the builder. |
| 6.00s | Codex | Correct. This feels a little generic. | Define the taste bar. |
| 9.35s | Tiny Clover | Excuse you?! | Give the scene a cute reaction spike. |
| 11.20s | Derek | Relax. New version has sauce. Ship it. | Close with sales confidence and motion. |

## Voice Map

| Character | Voice Direction | ElevenLabs Base |
| --- | --- | --- |
| Hermes | Calm, reassuring COO with a headset voice. | Sarah |
| Bighoss | Dry, husky builder, mildly annoyed. | Callum |
| Codex | Bright, cute creative director, discerning but playful. | Jessica |
| Tiny Clover | Excited mascot reaction voice, pitched up. | Laura |
| Derek | Charming, upbeat sales closer. | Liam |

## Production Route

1. Native ChatGPT image generation created three storyboard anchors.
2. Storyboard frames were copied into `assets/storyboards/clover-standup-pilot/`.
3. ElevenLabs generated individual character lines.
4. Local audio assembly built a locked 15-second voice bed plus three 5-second shot beds.
5. Wan 2.7 was preflighted because it advertises synchronized audio and character consistency, but it rejected audio references with a generic error.
6. A single all-in-one Seedance 2.0 1080p attempt using all three storyboards plus the full audio bed failed server-side and was refunded.
7. The successful route split the pilot into three 5-second Seedance 2.0 1080p shots, each with one storyboard frame and one matching audio segment.
8. The three completed shots were stitched locally with FFmpeg into one 15-second MP4.

## Higgsfield Jobs

| Shot | Job ID | Model | Cost | Status |
| --- | --- | --- | --- | --- |
| all-in-one test | `61a3c946-5d58-4da1-be02-9d586b17094c` | Seedance 2.0 1080p | 135 refunded | failed |
| shot 1 | `2e01ab06-62d7-4e31-b5ff-e24cc042b9d1` | Seedance 2.0 1080p | 45 | completed |
| shot 2 | `473489df-6678-44e9-8811-aa2cda088767` | Seedance 2.0 1080p | 45 | completed |
| shot 3 | `e762b39f-0c6b-4d28-9647-5213cbe7c6d7` | Seedance 2.0 1080p | 45 | completed |

## Lesson

For multi-character cartoon dialogue, do not rely on one long generation. Split the video into short, audio-led shots, each with one visual anchor and a small number of voices. Then assemble deterministically.
