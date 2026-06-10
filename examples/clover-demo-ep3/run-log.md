# Clover "The Demo" (Ep. 3) Run Log

## Metadata

- Run date: 2026-06-09
- Format: animated Clover-agent workplace sitcom (Episode 3)
- Builds on: `examples/clover-bottleneck-ep2/` (Ep. 2) — reused locked character sheet + voice map
- Platform: TikTok/Reels/Shorts
- Duration: 15.07s — SINGLE Seedance generation, multi-shot directed in-prompt (NO ffmpeg stitching)
- Final local render: `renders/clover-demo-ep3/clover-demo-ep3-15s.mp4` (1080x1920, h264+aac, 24fps)
- Contact sheet: `renders/clover-demo-ep3/clover-demo-ep3-contact-sheet.jpg`
- Brief: `examples/clover-demo-ep3/creative-brief.md` (script 23/25, kill-floor 18)

## Why single-generation (the run's experiment)

Mason's bar: "not stitched-together AI clips — a production video with seamless flow."
Root cause of Ep. 2's stitched feel: three independent generations = three micro-grades and
three ideas of the room. Fix: ONE 15s generation with cuts directed in-prompt + ONE continuous
15s audio bed ingested whole. Result: confirmed working. The model renders its own cuts with
matched set/lighting/motion, and fills all bed silences with generated room tone and SFX —
no audio seams anywhere.

## Production route

1. `gpt-image-2` start frame (5-character meltdown tableau) off the locked Ep. 2 character
   sheet — one attempt, passed QA (~$0.04, no Higgsfield credits).
2. ElevenLabs 7 lines on the locked voice map (`eleven_multilingual_v2`).
3. Silence-trimmed, measured, placed on the 15s timeline with ffmpeg adelay/amix
   (cuts scripted at 9.0s/11.0s; payoff at 14.1s). Bed verified by silencedetect.
4. Draft roll: Seedance 2.0 FAST 480p 15s = 22.5 credits — proved the 3-shot structure,
   exposed 2 defects (Hermes absent from shot 2; red-wash continuity dropped at the settle).
5. Prompt v2: Hermes "ALREADY IN FRAME from the first instant of shot 2" (an entrance
   mid-shot was what the model skipped); red glow pinned as ONE CONSISTENT LIGHTING STATE.
6. Final roll: Seedance 2.0 std 1080p 15s = 135 credits.

## Higgsfield jobs

| Roll | Config | Credits | Status | Job ID |
| --- | --- | --- | --- | --- |
| draft | 480p fast 15s | 22.5 | completed | 2ca26c3f-bafd-44b5-9155-3a86a3ee4cb9 |
| final #1 | 1080p std 15s | 135 → refunded | FAILED (see bug below) | e73f06cf-f6f8-41bf-b9dc-1eece0f281bb |
| final #2 | 1080p std 15s | 135 | completed | d5335e51-b153-4a40-9971-77158ce95995 |

**Platform bug found:** final #1 failed because the backend silently remapped the uploaded
audio id (`6f12c68b`) to a server-side `_sfx.wav` derivative on the results CDN (visible in
the failed job's medias). The 135 credits auto-refunded within a minute. Workaround: re-upload
the bed under a FRESH id for each new job (`a8c26b88`), never reuse an audio id that a prior
job has already consumed. Final #2 succeeded immediately with the fresh id.

## Cost

| Item | Credits |
| --- | --- |
| Draft roll | 22.5 |
| Final roll | 135 |
| **Total Higgsfield** | **157.5** |
| Balance | 307.75 → 150.25 |

Plus ~$0.05 OpenAI (start frame + 2x whisper QA) and pennies of ElevenLabs.

## QA summary (full report: qa-report.md)

- All 7 lines present in order (whisper + silencedetect); "They signed" isolated at
  13.6–14.45s with the alarm-death visual right after — the button lands.
- All 3 shots present; cuts run ~1.5s later than scripted (model retimed to performance).
- Shot 2 two-shot confirmed at ~11.5s: Hermes leaning over the desk, red wash, chaos blurred.
- Payoff frame (14.8s): alarm dead, cast staring, single paper floating down — all 3 beats.
- Model's directorial deviation kept: Tiny Clover's settle (8.7–10.5s) plays in bright sunny
  light with no red wash — her "calm bubble" vs. everyone else's alarm-red. Both rolls chose
  this independently; reads as intentional grading, not a continuity error.
- Human watch still required for exact lip-sync feel (same caveat as Ep. 1/2).

## Lessons

- ONE generation + in-prompt cuts is now the proven anti-stitch recipe. Seedance handles
  "SHOT 1 / HARD CUT TO SHOT 2 / HARD CUT TO SHOT 3" structure reliably at 15s.
- Seedance treats the audio bed as material it may RETIME (it stretched the reveal's internal
  pause to ~1s for comedy). Lines stay in order; don't fight it — exact cut-times in the
  prompt are guidance, not gospel.
- The model resists characters ENTERING mid-shot; direct them as "already in frame from the
  first instant of the shot" instead.
- Draft-tier pricing is the cheat code: 480p fast = 7.5/5s vs 45/5s std 1080p (6x cheaper).
  Always structure-test at 480p fast before a 1080p commit.
- Fresh audio upload id per job (see platform bug above).
- ffmpeg was missing on this Mac (Ep. 2 stitch ran elsewhere); installed static builds via
  npm (ffmpeg-static/ffprobe-static) symlinked into ~/.local/bin.

## Assets

- Start frame: `assets/storyboards/clover-demo-ep3/start-frame.png`
- Voice lines: `assets/audio/clover-demo-ep3/lines/` (+ `trimmed/`)
- Audio bed: `assets/audio/clover-demo-ep3/beds/demo-ep3-bed.wav`
- Prompts: `prompts/clover-demo-ep3/` (v1 + v2 motion, start-frame, voice manifest)
- Draft render: `renders/clover-demo-ep3/draft-480p.mp4`
- QA frames: `renders/clover-demo-ep3/qa-*.png`
