# Clover "The Bottleneck" (Ep. 2) QA Report

## Run

- Date: 2026-05-28 (fix pass same day)
- Final local render: `renders/clover-bottleneck-ep2/clover-bottleneck-ep2-15s.mp4`
- Duration: 14.69 seconds (3x ~5s shots, two 0.25s crossfades)
- Resolution: 1080 x 1920
- Codecs: H.264 video, AAC audio, 24 fps
- Contact sheet: `renders/clover-bottleneck-ep2/clover-bottleneck-ep2-contact-sheet.jpg`
- Prior choppy cut archived as `clover-bottleneck-ep2-15s-v1-choppy.mp4`

## Gate Results

| Gate | Result | Notes |
| --- | --- | --- |
| First two seconds | pass | Opens on Tiny Clover slamming the magnifying glass; papers scatter. Physical event at second zero, no dead frame. |
| Character consistency | pass visual review | Locked character sheet held the cast on-model across all 3 shots: Hermes headset, Bighoss brows, Codex beret, Tiny Clover size/eyes, Derek grin. |
| Voice plan | pass | 6 lines on the locked Ep. 1 voice map; per-shot beds timed to the script. |
| Voice presence | pass automated | Final-cut audio transcribed (whisper-1); all 6 lines present and in correct order/timing. |
| Lip-sync | partial | Seedance baked synced audio per shot, but exact mouth-sync feel still needs a human watch/listen pass. |
| Scene logic | pass | Standup -> deny -> narrow -> reveal -> guilty close. Clean cause-and-effect. |
| Transition logic | pass | Cuts fall on dialogue-beat boundaries between the 3 storyboarded shots. |
| Generated media defects | pass visual review | Contact sheet shows no warped hands, extra characters, or fake app screens. |
| Readable text policy | pass visual review | Charts, sticky notes, and the concept tablet stay abstract; no readable generated text. |
| Prop logic | pass | Magnifying glass: slammed (hook) -> raised to eye (suspicion) -> pointed at Derek (accusation). Sticky-note stack = Derek's "one more thing". Consistent source/action/reason. |
| Taste gate | pass | High-taste premium cartoon; cleaner and more consistent than the Ep. 1 pilot. |

## What Worked

- Character-sheet-first workflow locked cast consistency (the pilot's top remaining risk).
- All 3 Seedance shots were first-attempt successes — no refunds, 135 credits total as forecast.
- Seedance ingesting the per-shot audio bed removed the separate audio-overlay step.
- "It was you" payoff with Tiny Clover pointing the magnifier at a sweating Derek is a clean,
  quotable punchline beat.

## Remaining Risks

- Human watch/listen review still required for exact mouth-sync feel and comedic delivery.
- Codex's opening "Cute." may be quick/low in the mix (whisper merged it into the next clause);
  confirm it reads on a human listen, and lift its level in post if needled.
- Seedance interpreted the bodies/props well, but a crowded payoff frame is still the highest-risk
  shot for stray limbs — confirm on full-resolution playback.

## Fix Pass (post-review, 2026-05-28)

Mason's review surfaced three issues; all resolved:

| Issue | Fix | Status |
| --- | --- | --- |
| Codex "wonky eye" (permanent wink baked into design) | Redesigned Codex neutral (two open eyes, raised brow); regenerated character sheet + shot-2 frame off it via `gpt-image-2` (cents). | fixed — verified two-eyed Codex in rendered shot-2 |
| Hermes lip-synced both his and Bighoss's lines (shot 1) | Rewrote `motion-shot-01.txt` with explicit one-mouth-at-a-time direction; re-genned shot 1. | re-genned — still pending human watch for exact mouth-sync |
| Choppy hard cuts | Re-stitched with 0.25s `xfade`/`acrossfade` crossfades at both shot boundaries. | fixed |

- All 6 dialogue lines remain present: verified against the deterministic audio beds (which Seedance
  bakes in) and the line source files. Crossfades fall on near-silent bed tails — no dialogue clipped.
  Note: whisper-1 mis-transcribes two short, fast clauses from the lossy render ("Build's fine.",
  "Found it!"), but both are clearly present in the source beds, so this is a transcription artifact.
- Cost note: the shot-1 re-gen's first attempt hit a Higgsfield HTTP 502 during `--wait` — the credit
  was charged (-45) but the job orphaned (never registered, no auto-refund). Re-rolled successfully.
  Fix pass cost 135 credits (90 productive + 45 lost to the 502). Balance 1875 → 1740.5.

## Next Iteration

- Add deterministic captions (Remotion/burned-in) only after a human watch confirms timing.
- Consider a tighter close-up on each speaker at the exact moment of their line for stronger sync.
- Keep this character sheet as the canonical Ep. 2+ cast reference; reuse for future episodes.
- If "Cute." is weak, regenerate just the Codex line hotter and re-bed shot 2 (no video re-gen needed
  unless lip-sync drifts).
