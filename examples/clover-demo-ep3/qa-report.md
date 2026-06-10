# Clover "The Demo" (Ep. 3) QA Report

## Run

- Date: 2026-06-09
- Final render: `renders/clover-demo-ep3/clover-demo-ep3-15s.mp4`
- 15.07s, 1080x1920, h264 + aac, 24fps — ONE Seedance generation, no local stitching
- Contact sheet: `renders/clover-demo-ep3/clover-demo-ep3-contact-sheet.jpg`

## Gate results

| Gate | Result | Notes |
| --- | --- | --- |
| First two seconds | pass | Opens mid-meltdown: papers flying, red alarm lamp, Derek sprint; no dead frame. |
| Single-generation seamlessness | pass | All cuts rendered in-generation; matched set/world across shots. This was the run's core experiment. |
| Character consistency | pass visual review | Cast on-model in all checked frames: Hermes headset, Bighoss brows + smoking laptop, Codex beret + stylus, Tiny Clover size/eyes, Derek panic-sprint. |
| Voice presence | pass automated | whisper-1 + silencedetect: all 7 lines present, in order. "They signed" isolated at 13.6–14.45s. |
| Shot structure | pass | 3 shots confirmed in frames: oner push (0→~10.5), Hermes two-shot (~10.5→11.8, confirmed at 11.5s), payoff single (~11.8→15). Cuts ran ~1.5s later than scripted — model retimed to performance. |
| Lip-sync | partial | One-mouth-at-a-time staging held in checked frames (speaker mouth open at 4.0s Bighoss beat). Exact sync feel needs a human watch — same caveat as Ep. 1/2. |
| Lighting continuity | pass with note | Red alarm wash present in shots 1 (chaos zone), 2, and 3, dying on "They signed" as directed. NOTE: the settle on Tiny Clover (8.7–10.5s) plays sunny-bright with no red wash — both rolls chose this independently; reads as her "calm bubble" vs. the alarm-red chaos, kept as the model's directorial choice. |
| Payoff beats | pass | 14.8s frame: alarm dead → warm light, cast frozen staring, single paper floating down. All three direction beats in one frame. |
| Generated media defects | pass visual review | No warped hands, no extra characters, no fake UI/readable text in any QA frame. |
| Prop logic | pass | Tiny mug: sipped through chaos (hook of her calm) → held through question → lowered for reveal. Papers: scattered by sprint (source: Derek's stack) → one floats down as the button. |
| Taste gate | pass | Premium look; 12.0s reverse-angle frame (serene foreground, red-washed frozen chaos behind) is the strongest single image the show has produced. |

## Deviations accepted (and why)

1. **Cut timing ~1.5s late vs. script** — Seedance retimed dialogue/cuts to the performance,
   including stretching the reveal's internal pause to ~1s. The comedy timing it chose is
   arguably better than the bed's. Lines stay in script order.
2. **Sunny settle (no red wash) on Tiny Clover's desk** — visual metaphor (her bubble vs.
   their fire), consistent across both rolls, motion-continuous within the oner so it cannot
   read as a stitch seam.
3. **Tiny Clover color reads warm/peachy at 8.7–10.0s** — rim-lit by the bright window behind
   her; returns clearly mint at 11.5/12.0/14.8. Should read as lighting in motion; flag for
   human watch.

## Remaining risks (human watch required)

- Exact mouth-sync feel during the question (off-screen start?) and reveal.
- Whether the wide settle holds attention 8.7→10.5s (≈1.8s of no dialogue mid-video).
- Whisper mis-renders short clauses from the lossy track ("Builds on fire", "Clover ran it?")
  — confirmed present in the source bed; transcription artifact only (same as Ep. 2).

## Next iteration

- If the sunny-settle bothers on watch: re-roll with the red wash explicitly directed over
  Tiny Clover's desk in shot 1's settle (budget allows: 150.25 credits ≥ one 1080p roll + draft).
- Deterministic burned-in captions only after a human watch confirms timing.
- Keep prompt v2's "ALREADY IN FRAME from the first instant" pattern — it is what got Hermes
  into shot 2 after v1's entrance direction failed.
