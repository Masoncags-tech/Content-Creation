# Clover "The Bottleneck" (Ep. 2) Run Log

## Metadata

- Run date: 2026-05-28
- Format: animated Clover-agent workplace sitcom (Episode 2)
- Builds on: `examples/clover-standup-pilot/` (Ep. 1)
- Platform: TikTok/Reels/Shorts
- Duration target: 15 seconds (3 x 5s shots)
- Aspect ratio: 9:16
- Final local render: `renders/clover-bottleneck-ep2/clover-bottleneck-ep2-15s.mp4`

## Creative Goal

Second episode of the Clover workplace sitcom, executing the pilot's QA "next iteration":
lock a character sheet, then use tighter shot grammar (hook -> judging close-up -> group payoff)
to fix the pilot's crowded-shot / mouth-sync weakness. Same recurring cast, same voice map.

Premise: a standup hunts for the bottleneck clogging the pipeline. The cast denies and narrows
it down until Tiny Clover points the magnifying glass at Derek — the bottleneck was the guy who
kept "adding one more thing."

## Script (22/25)

| Time | Character | Line | Beat |
| --- | --- | --- | --- |
| 0.0-0.6s | (hook) | Tiny Clover slams a magnifying glass on the desk, charts scatter | physical second-zero |
| 0.6-3.0s | Hermes | Tickets are piling up. Something's clogging the pipe. | calm COO sets problem |
| 3.0-5.0s | Bighoss | Build's fine. It's not me. | deny |
| 5.0-7.5s | Codex | Cute. It's not the code. It's the asks. | judging narrow |
| 7.5-9.5s | Tiny Clover | Found it! | reaction spike |
| 9.5-12.0s | Tiny Clover | The bottleneck. It was you. | quotable payoff |
| 12.0-14.5s | Derek | I was just adding one more thing. | guilty sales close |

Script score: Recognition 5, Physicality 4, Compression 5, Specificity 3, Payoff 5 = 22/25 (kill-floor 18).

## Voice Map (locked from Ep. 1)

| Character | ElevenLabs Voice | voice_id |
| --- | --- | --- |
| Hermes | Sarah | EXAVITQu4vr4xnSDxMaL |
| Bighoss | Callum | N2lVS1w4EtoT3dr4eOWO |
| Codex | Jessica | cgSgspJ2msm6clMCkdW9 |
| Tiny Clover | Laura | FGY2WhTYpPnrIDTdsKH5 |
| Derek | Liam | TX3LPaxmHKxFdv7VOQHJ |

## Production Route

1. ChatGPT imagegen-2 (`gpt-image-2`, OpenAI Images API) generated a locked character sheet from
   the Ep. 1 pilot frame as style reference. Called directly from Command Deck — the Codex CLI is a
   ChatGPT-OAuth coding agent and cannot emit images, so routing through it was not viable. Direct
   `gpt-image-2` hits the same goal (no Higgsfield image credits) for cents per image.
2. Human taste gate on the character sheet -> locked the Ep. 2 cast.
3. `gpt-image-2` generated 3 storyboard start-frames off the approved sheet (+ matching Ep. 1 pilot
   frame) as references for world consistency. Human taste gate -> locked.
4. ElevenLabs generated the 6 dialogue lines (`eleven_multilingual_v2`) on the locked voice map.
5. Silence-trimmed the lines and assembled three exact 5.0s per-shot audio beds with ffmpeg
   (adelay + amix), placing each line on the script's timing.
6. Higgsfield Seedance 2.0 (1080p, 9:16, genre=comedy, duration=5) generated 3 shots, each with one
   start-frame + its matching audio bed.
7. Stitched the 3 shots into one 15s 9:16 MP4 with ffmpeg; built a contact sheet.

## Higgsfield Jobs

| Shot | Model | Cost | Status | Job ID |
| --- | --- | --- | --- | --- |
| shot 1 (hook) | Seedance 2.0 1080p | 45 | completed | 78025954-6665-41c2-b71e-e2204877a204 |
| shot 2 (judge) | Seedance 2.0 1080p | 45 | completed | 0ba3125e-6f2e-48d9-ac73-f3d9720dd644 |
| shot 3 (payoff) | Seedance 2.0 1080p | 45 | completed | 30f263f8-c466-44a4-9607-3685c315917b |

Preflight cost confirmed 45 credits/shot (135 total). All 3 first-attempt successes, no refunds.
Seedance ingested each per-shot audio bed (`audio_input`) and baked synced audio into the
returned 1080p clips — no separate audio overlay needed at stitch.

## Fix Pass (2026-05-28, post-review)

Mason's review flagged three issues; all three were addressed at the source rather than in post:

1. **Codex "wonky eye"** — root cause was a permanent wink baked into the character-sheet design.
   Fixed by redesigning Codex neutral (both eyes open, raised brow, smirk) and regenerating the
   character sheet + shot-02 start frame off it (`gpt-image-2`, cents, no Higgsfield credits). Old
   sheet kept as `character-sheet-v1-wink.png`. Verified two-eyed Codex in the rendered shot-2.
2. **Shot-1 dual lip-sync** (Hermes mouthed Bighoss's line too) — `motion-shot-01.txt` rewritten with
   explicit one-mouth-at-a-time direction: Hermes speaks first while Bighoss stays closed-mouth, then
   Hermes closes and only Bighoss's mouth moves. Shot re-genned. (Exact mouth-sync feel still needs a
   human watch — a still can't confirm which mouth animates.)
3. **Choppy hard cuts** — re-stitched with 0.25s crossfades (video `xfade=fade` + audio `acrossfade`,
   matched offsets at 4.81s and 9.62s). Final is now 14.69s. Crossfades land on near-silent bed tails,
   so no dialogue is clipped (verified: "Cute." and all shot-boundary lines survive).

### Fix-pass Higgsfield jobs

| Shot | Job ID | Result | Credits |
| --- | --- | --- | --- |
| shot 2 (judge, two-eyed Codex) | 2f5f7b60-da89-4675-926c-1d9d51ed61fd | completed | 45 |
| shot 1 (one-mouth-at-a-time), 1st attempt | (orphaned) | HTTP 502 during `--wait`; charged but job never registered in `generate list`, no auto-refund | 45 (wasted) |
| shot 1 re-roll | e4e13e69-ad7a-4436-87bc-42c1bdcb37e5 | completed | 45 |

Fix-pass cost = 135 credits (90 productive + 45 lost to a Higgsfield 502). Account 1875 → 1740.5.
The 502 charged a credit but returned an empty job handle (`[]`), so the job was unrecoverable;
re-rolled with create-then-`generate wait` (capture job_id up front) to survive transient wait errors.
Watch for a possible auto-refund of the orphaned 19:51:16 charge.

## Verification

- Final cut: 15.21s, 1080x1920, h264 + aac, 24fps.
- Audio transcribed back (OpenAI whisper-1) to confirm the embedded dialogue matches the script
  on timing: Hermes 0-3s, Bighoss 3-5s, Codex 5-8s, Tiny Clover "Found it!" 8-10s,
  "The bottleneck. It was you." 10-12s, Derek 12-15s. All lines present and in order.

## Assets

- Character sheet: `assets/storyboards/clover-bottleneck-ep2/character-sheet.png`
- Storyboards: `assets/storyboards/clover-bottleneck-ep2/shot-0{1,2,3}-*.png`
- Voice lines: `assets/audio/clover-bottleneck-ep2/lines/` (+ `trimmed/`)
- Audio beds: `assets/audio/clover-bottleneck-ep2/beds/shot-{1,2,3}-bed.wav`
- Prompts: `prompts/clover-bottleneck-ep2/`

## Lesson

- A locked character sheet generated first, then reused as the reference for every storyboard
  frame, held the cast far more consistent than the pilot's per-frame generation.
- `gpt-image-2` direct from the Images API is the cheapest path to imagegen-2-quality stills; the
  Codex CLI cannot emit images (ChatGPT-OAuth coding agent), so don't route image work through it.
- Seedance 2.0 will ingest a per-shot audio bed and return a clip with synced audio baked in, so
  the deterministic audio bed should be built and timed before generation, not bolted on after.
- Tighter shot grammar (single-focus hook, two-shot judge, group payoff) is easier to keep on-model
  than one crowded ensemble frame.
