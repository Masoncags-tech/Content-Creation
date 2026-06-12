# Clover v0.1 Launch #3 — "While You Were Out" Run Log

## Metadata

- Run date: 2026-06-11 → 06-12
- Format: Hybrid New Hire sequel — night-to-morning, same founder as "The New Hire"
- Final render: `renders/clover-wywo/clover-wywo-15s.mp4` (1080x1920, h264+aac, 15.09s)
- Contact sheet: `renders/clover-wywo/clover-wywo-contact-sheet.jpg`
- First run with Mason reviewing drafts live in the Higgsfield player (7 drafts + 1 engine
  probe before the final — the loop's deepest iteration to date)

## The voice saga (this run's biggest lesson)

Mason's bar: the founder must sound HUMAN. Path walked:
1. ElevenLabs multilingual_v2 (Chris) — too robotic.
2. ElevenLabs `eleven_v3` (Chris) — better, still a read, not a performance.
3. ElevenLabs library voice (Creator plan upgrade) — still "something missing."
4. **Seedance performed the lines itself** (draft #5, no audio bed, lines quoted in prompt)
   — the missing thing was sync-sound: speech performed IN the room. Voice won immediately.
5. But #5's visuals regressed badly (no bed = no scaffolding).
6. **The merge (the new recipe): extract the performed lines from draft #5's track
   (whisper word-timestamps → ffmpeg cuts → ElevenLabs audio-isolation, min 4.6s per call so
   isolate the whole region then cut), rebuild the deterministic bed at the model's own
   native timing, re-roll with the dialogue lock.** Human voice + bed discipline. Draft #6/7
   and the final all kept the performance verbatim.

NOTE: ElevenLabs free tier is NOT licensed for commercial use — Mason upgraded to Creator
mid-run, which also retroactively covers the earlier videos' TTS and unlocked audio-isolation.

## Mason's notes (draft #1) and their fixes

| Note | Fix | Landed |
| --- | --- | --- |
| Voice too generated | performed-voice extraction (above) | draft #6 |
| Chair turns on its own ("haunted house") | "nothing in the room moves except the mascot" | draft #2 |
| Phone must be a realistic iPhone | start-frame v2: titanium frame, frosted iOS banner stack, unreadable smudges | draft #2 |
| Bubbles → app icons; calendar should come FROM the calendar icon | tap → three icon tiles (bubble/calendar/folder); grab calendar tile → desk calendar; folder zips back (= "and filed it") | draft #3 |
| "and filed it" line fix | re-recorded | draft #2 |
| Night→day should be a sunrise + founder walking in | time-lapse sunrise sweep + walk-in mid-sentence (pre-lap) | draft #2 |

## Defects my gates caught between drafts

- Ghost giant translucent mascot + duplicated calendar + readable "May" (draft #2's "tile
  EXPANDS in the air" direction) → fixed with solid-prop physics: grab tile, SET IT DOWN,
  grows into small SOLID prop + "NO translucent overlays, NO giant projections, NO ghost
  copies — exactly ONE mascot."
- Calendar digit-grid gibberish (recurring) → "PURE BLANK WHITE face — no grid, no dots, no
  marks" finally held at 1080p (zoom-verified).
- Morning phone grew a pseudo calendar-app UI (draft #5) → "iPhone screen is DARK and OFF
  until its single soft ding."
- Sleeping-button continuity (draft #6: mascot awake in morning) → "already asleep from the
  moment the sunrise begins; never stands, never wakes; ONLY movement is the final sleepy
  arm-reach."

## Marketing Studio probe (Mason's suggestion, 52.5 credits)

`marketing_studio_video` mode=ugc, founder image as input, native audio. Verdict (Mason):
"sucks tbh — the clover looks terrible." Confirmed: human/voice quality is real, but it
cannot hold the mascot's character design (melted-toy render), ad-libbed an extra phrase
beyond the script, and staged an undirected phone-selfie pose. **Engine verdict: MS is OFF
the hybrid-mascot lane; possible future use for pure-human ad variants only.** No cheap
draft tier (480p = 52.5, 1080p = 150). Avatar create via CLI rejects upload-domain URLs.

## Higgsfield jobs

| Roll | Model | Credits | Outcome |
| --- | --- | --- | --- |
| draft 1 | seedance fast 480p | 22.5 | Mason's 6 notes |
| draft 2 | seedance fast 480p | 22.5 | 5 notes fixed; ghost-mascot defect |
| draft 3 | seedance fast 480p | 22.5 | solid-prop fix clean |
| draft 4 | seedance fast 480p | 22.5 | calendar blank, tidy morning |
| draft 5 (no bed) | seedance fast 480p | 22.5 | VOICE WIN, visuals regressed |
| draft 6 (merged) | seedance fast 480p | 22.5 | closest; sleep-button broke |
| MS probe | marketing_studio 480p | 52.5 | engine rejected |
| draft 7 | seedance fast 480p | 22.5 | all fixes landed |
| FINAL | seedance std 1080p | 135 | passed all gates |
| **Total** | | **345** | balance 1006.25 → 593.75 |

## QA summary (final)

- Dialogue verbatim (whisper segments: 0-9.6 / 9.6-12.9 / 12.9-14.8), Seedance-performed
  voice preserved.
- Calendar + icon tiles: zero text at 1080p (zoom-verified). One mascot throughout.
- Sleeping button intact through both morning checkpoints; sleepy-tap motion needs the
  human watch as always.
- Macro shot 2's background blurs to a generic dark room vs the office wide — hidden by
  DOF, accepted.
- Assets: prompts v1-v7 + ms-probe in `prompts/clover-wywo/`, voice pipeline in
  `assets/audio/clover-wywo/seedance-voice/`.
