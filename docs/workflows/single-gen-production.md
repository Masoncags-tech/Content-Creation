# Single-Generation Production (Baseline)

This is the baseline process as of 2026-06-09. It produced `clover-demo-ep3` (sitcom) and
`clover-v01-launch` (hybrid live-action + mascot) in one night on 301.5 credits total, both
first-final-attempt successes. Follow it unless a run has a reason not to.

## Core Rule

**One video = one Seedance generation.** Cuts are directed inside the prompt, never assembled
in ffmpeg. Stitching separate generations produces three micro-grades and three ideas of the
room, and no crossfade hides it. When the model renders its own cuts, both sides of every cut
share the same world, lighting, and motion. This supersedes the per-shot stitch+crossfade
approach used through Ep. 2.

Same rule for audio: **one continuous dialogue bed** for the full duration, ingested whole.
Seedance fills every silent gap with generated room tone and SFX — the soundscape never seams.

## The Loop

1. **Brief + timed script on disk first** (`templates/creative-brief.md`). Score the script
   (kill-floor 18/25). Cuts get scripted timestamps, but treat them as guidance — Seedance
   retimes to performance (keeps line order, stretches pauses; its comedy timing is usually
   better than the bed's).
2. **Start frame** via `gpt-image-2` (`scripts/openai-imagegen.py`), always with a reference
   image: the locked character sheet for sitcom episodes, the brand avatar for mascot work.
   Cents per attempt, zero Higgsfield credits — iterate here, never in motion. The start frame
   carries the aesthetic; the motion model animates what it sees.
3. **Voice lines** via ElevenLabs (`scripts/elevenlabs-tts.py`) on the locked voice map, then:
   silence-trim → measure with ffprobe → place on the timeline with adelay/amix → verify
   placement with silencedetect. The bed must be exactly the generation duration.
4. **Preflight cost** with `higgsfield generate cost` (free, accepts the full job config).
   Pricing is linear: 9 cr/s at 1080p std, 1.5 cr/s at 480p fast. Confirm before every create.
5. **Draft roll at 480p fast** (1/6 the price). This is a structure test, not a quality test:
   shot count and cut placement, character/aesthetic integrity, dialogue fidelity, ability
   beats present. Transcribe the audio (whisper) — drafts catch dialogue rewrites that no
   frame check can see.
6. **Fix at the source, draft again if the fix is unverified.** An 18-credit draft that
   verifies a prompt fix beats gambling a 108-credit final on it. Never fire a final whose
   failure mode you cannot afford to re-roll — size the reserve to one full final, and if the
   budget can't, draft until the risk is closed.
7. **Final roll at 1080p std.** Same prompt structure, same start frame, fresh audio upload.
8. **QA before delivery** (`docs/quality/qa-gates.md` still applies): frame extraction at
   script beats, zoom crops on any print-like prop, whisper verbose transcription vs script,
   contact sheet. Classify deviations accept/flag/fix — the model takes directorial liberties
   (lighting metaphors, retimed cuts); judge them on craft, don't auto-reject.
9. **Run log + QA report on disk** (`templates/run-log.md`), including job IDs, per-roll
   credits, and lessons.

## CLI Operational Rules (learned the expensive way)

- **Create-then-wait, never `--wait` on create.** Capture the job id from `generate create
  --json` first; a 502 during a blocking wait orphaned a charge with no refund (Ep. 2).
- **Fresh audio upload id for every job.** The backend silently remaps a consumed audio id to
  a `_sfx.wav` derivative and the job fails (Ep. 3). Re-upload the bed before each create.
- Failed jobs auto-refund within ~1 minute; orphaned 502 charges do not. Check
  `higgsfield account transactions` after any failure.
- `hf model get <model>` is the param source of truth; job-JSON params like `generate_audio`
  and `multi_shots` are server-set and not CLI-controllable.

## Casting Risk Rules

- **Cartoon cast speaking:** fine — stage one-mouth-at-a-time (see prompt blocks).
- **Photoreal human speaking:** Seedance will REWRITE the supplied dialogue with its own
  unless the prompt carries a DIALOGUE LOCK quoting every line verbatim. Drafts must be
  transcribed to verify. (Found on `clover-v01-launch` draft #1.)
- **Hybrid photoreal + cartoon:** low risk when the start frame establishes it. Split the
  risk: human carries all dialogue (Seedance's lip-sync strength), mascot stays mute
  (cartoon lip-sync was always the weak point).
- Print-like props (calendars, receipts, documents) are a 1080p-only text-artifact risk —
  480p drafts are too soft to show it. Direct them abstract, zoom-QA them in the final.

## Budget Shape (per ~150-credit run)

| Step | Cost |
| --- | --- |
| Stills + VO + beds | ~$0.10 cash, 0 credits |
| Draft(s) at 480p fast | 18-45 |
| Final at 1080p std | 9 x seconds |
| Reserve | one full final re-roll, or keep drafting until the risk is closed |

Duration is the budget lever: 12s fits a draft+final cycle in 126 credits; 15s needs 157.5.

## Living Examples

- `examples/clover-demo-ep3/` — sitcom, 15s, 3 shots, 5 speaking cartoon characters.
- `examples/clover-v01-launch/` — hybrid live-action UGC + mute mascot, 12s, dialogue lock.
- Prompt grammar that produced both: `prompts/seedance-prompt-blocks.md`.
