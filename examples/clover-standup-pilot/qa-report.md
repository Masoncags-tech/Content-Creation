# Clover Standup Pilot QA Report

## Run

- Date: 2026-05-26
- Final local render: `renders/2026-05-26-clover-cartoon-pilot/clover-standup-pilot-15s.mp4`
- Duration: 15.19 seconds
- Resolution: 1080 x 1920
- Codecs: H.264 video, AAC audio
- Contact sheet: `renders/2026-05-26-clover-cartoon-pilot/clover-standup-pilot-15s-contact-sheet.jpg`

## Gate Results

| Gate | Result | Notes |
| --- | --- | --- |
| First two seconds | pass | Shot opens on a lively standup tableau, not a dead static frame. |
| Character consistency | pass visual review | Clover bodies, palette, room, and agent roles stay coherent across all three shots. |
| Voice plan | pass process review | Each agent has a distinct ElevenLabs voice direction and separate line timing. |
| Lip-sync risk | partial | The clips were generated against per-shot audio beds. Final mouth-sync still needs human listening review. |
| Scene logic | pass | Standup status leads to taste conflict, then an improved concept payoff. |
| Transition logic | pass visual review | Cuts happen at dialogue beat boundaries between storyboarded shots. |
| Generated media defects | pass visual review | Contact sheet shows no obvious weird face gear, extra characters, or fake app screens. |
| Readable text policy | pass visual review | Background boards remain abstract enough for this pilot pass. |
| Taste gate | pass for first cartoon pilot | This direction is materially stronger than the live-action UGC attempt and should be the active Clover IP lane. |

## What Worked

- Native image generation produced a high-taste cartoon world faster than Higgsfield still-image exploration.
- Splitting into 5-second shots solved the all-in-one generation failure.
- The character lineup has clearer IP potential than generic service-business UGC.
- Shot 2 carries the strongest comedic acting: Codex judging the bland concept and Tiny Clover reacting.
- Final stitch preserves a clean 9:16 social format.

## Remaining Risks

- Human listening review is still required for exact voice quality and mouth-sync feel.
- The model may not perfectly assign every voice to the intended character in crowded shots.
- Future versions should consider isolating speaking characters in tighter close-ups for stronger mouth sync.
- The recurring cast needs a locked character sheet before scaling episode production.

## Next Iteration

- Create individual character reference sheets for Hermes, Bighoss, Derek, Codex, and Tiny Clover.
- Use tighter shot design: speaker close-up, listener reaction, object insert, payoff group shot.
- Keep the same ElevenLabs voice map, but test more exaggerated cartoon delivery for Tiny Clover and Codex.
- Add deterministic captions only after the animation passes the visual and voice gates.
