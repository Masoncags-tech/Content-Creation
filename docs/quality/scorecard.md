# Video Scorecard

Use this before showing a clip.

Scores are 0-5.

| Category | Question | Score |
| --- | --- | --- |
| Hook | Does something physical happen in the first two seconds? |  |
| Clarity | Can a muted viewer understand the premise? |  |
| Transition | Does every cut have a reason? |  |
| Performance | Does the performer/character act instead of pose? |  |
| Audio | Does the voice/room/foley feel native? |  |
| Defects | Are hands, faces, UI, and text clean? |  |
| Share | Is there a clear reason to send/save/comment? |  |
| Brand | Does it fit the brand world and claim boundaries? |  |

## Thresholds

- `36-40`: publish candidate.
- `30-35`: iterate one issue and retest.
- `24-29`: useful prototype, not postable.
- `<24`: restart from format/hook.

## Predictor Integration

When a predictor score is available, log it separately. Do not average it into the human scorecard.

Predictor use:

- low hook score -> change first-second visual
- low sustain -> cut dead air
- low engagement -> simplify premise or increase physical specificity

