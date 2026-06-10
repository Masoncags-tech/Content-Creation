# Clover v0.1 Launch — "The New Hire" QA Report

## Run

- Date: 2026-06-09
- Final render: `renders/clover-v01-launch/clover-v01-launch-12s.mp4`
- 12.05s, 1080x1920, h264 + aac — ONE Seedance generation, no local stitching

## Gate results

| Gate | Result | Notes |
| --- | --- | --- |
| First two seconds | pass | Receipt avalanche + rattling phone at second zero. |
| Hybrid integrity (THE experiment) | pass | Human fully photoreal and mascot fully cartoon-3D in every checked frame across both drafts and final — zero style bleed in either direction. Contact shadows + matched lighting on the mascot throughout. |
| Dialogue fidelity | pass automated | whisper-1: both lines VERBATIM at bed timing (0-4.4s, 9.4-11.4s). Required the v2 DIALOGUE LOCK — draft #1 proved Seedance rewrites photoreal-human dialogue without it. |
| Ability beats | pass | iMessage: phone tap → buzzing stops, green bubble shapes whoosh away (icon glyphs only, no text). Bookkeeping: receipts swept into one squared stack. Scheduling: floating calendar card settles with glow. |
| Readable-text policy | pass with one flag | Phone screens abstract green blocks everywhere. FLAG: floating calendar card (~8s, ~1.5s on screen) renders plausible-but-non-sequential digits — reads as a calendar at speed; freeze-frame would notice. See risks. |
| Scene logic | pass | Mess → tap → sweep → schedule → calm founder + thumbs-up + sip. Would make sense with no camera present. |
| Prop logic | pass | Receipts: avalanche (source) → swept (action) → squared stack (destination). Phone: buzzing (problem) → tapped silent (resolution) → final ding tapped without looking (button). Mug: brand callback to Ep. 3. |
| Generated media defects | pass visual review | Founder's hands natural in checked frames (receipt-pile hotspot held). No extra characters, no warped limbs. |
| Taste gate | pass | The 11.5s button frame (founder arms-crossed wry smile + mascot sipping tiny mug) is the launch-page hero shot. |

## Flagged for human watch

1. **Calendar digits** (≈7.5-9.0s): non-sequential numbers on the floating card. Options if it
   bothers on playback: re-roll next credit cycle with "blank abstract calendar grid" directed,
   or blur/replace the card region in post deterministically.
2. Founder lip-sync feel on both lines (automated checks confirm presence/timing, not feel).
3. Whether the wordless 4.6-9.4s montage holds attention without VO (SFX-only carry).

## Verification methods

- whisper-1 verbose transcription (both lines verbatim, timed).
- Frame extraction at 8 beats + 2 zoom crops (calendar, receipts).
- ffprobe: 1080x1920 h264+aac, 12.05s, single continuous file.
