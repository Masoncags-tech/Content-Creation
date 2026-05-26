# Deterministic Video QA

## Purpose

Generated footage is reviewed as performance. Deterministic layers are reviewed as truth.

This QA pass separates those responsibilities so exact text, UI, data, captions, logos, and claims are never left to a video model.

## Required Artifacts

Every production run should keep:

- `brief`
- `scene-design-prompt`
- `generation-prompt`
- `raw-generated-video`
- `proof-insert-spec`
- `overlay-source`
- `contact-sheet`
- `qa-report`
- `final-video`

## Raw Generated Footage Checks

Pass only if:

- first frame is already active
- first 0.5 seconds are not effectively static
- location, wardrobe, face, and prop state remain stable
- every visible object has a ledger entry
- no readable generated UI appears
- no fake app names, fake dashboards, fake receipts, or fake calendar text appears
- hands and object interactions are usable
- mouth/body movement matches the line energy
- the final frame is usable for a hold, cut, or loop

## Contact Sheet

Every raw clip should be reviewed with:

- `0.0s`
- `0.5s`
- `1.0s`
- midpoint of each beat
- every cut boundary
- final frame

Review for:

- static opening
- face drift
- wardrobe drift
- prop teleporting
- fake text
- fake UI
- hand defects
- scene reset
- bad end frame

## OCR / Text Policy

Generated footage:

- should have no readable text unless the prompt and QA explicitly allow it
- should fail if OCR or human review finds app labels, dashboard labels, calendar entries, fake logos, or gibberish text

Deterministic overlays:

- must match approved source text
- must be stored beside the run
- must be re-renderable
- must not imply unverified metrics, clients, claims, or results

## Audio QA

Pass only if:

- audio stream exists
- room tone starts before speech
- voice source is plausible in scene
- foley aligns to visible actions
- loudness is comfortable for social playback
- speech matches the approved script or intentional improv
- no loose voiceover carries unrelated footage

For dialogue/lip-sync:

- short controlled shots beat long monologues
- forward-facing face reads better than profile motion
- avoid overlapping dialogue
- pair stressed words with visible expression or gesture

## Transition QA

Every cut must have one reason:

- reveal
- reaction
- proof
- time compression
- new speaker
- new action
- punchline

Fail if:

- flash/zoom blur hides discontinuity
- a new location appears without setup
- the second shot repeats the first shot's information
- a prop state changes without visible cause
- audio and picture feel pasted together

## Run Folder Shape

Recommended structure:

```text
runs/<run_id>/
  brief.md
  scene-design-prompt.md
  prompt.txt
  generation-result.json
  raw.mp4
  inserts/
    proof-insert-spec.md
    overlay-source.html
    overlay-render.png
  frames/
  contact-sheet.png
  qa-report.md
  final.mp4
```

## Acceptance Rule

The run is not audience-ready until both are true:

1. Raw generated footage feels like a plausible filmed scene.
2. Deterministic post-production carries every exact word, UI element, data point, and proof claim.

