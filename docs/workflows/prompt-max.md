# Prompt Max Workflow

## Purpose

Prompt Max is the pre-production pass that prevents AI video slop before generation starts.

It is venture-agnostic. The brand, product, character, and audience change. The logic does not:

- one viewer
- one visible problem
- one physical hook
- one scene contract
- one proof method
- one payoff

If the scene cannot be explained as a real filmed moment, do not generate it.

## Source Signals

- TikTok recommends native vertical creative, people on camera, a hook in the first 6 seconds, and the content proposition in the first 3 seconds.
- Runway recommends image-to-video prompts focus on motion, reduce ambiguity, use camera + subject action structure, and check that requested motion does not contradict the input frame.
- Google's Veo prompt guide breaks video prompts into subject, action, scene/context, camera angle, camera movement, lighting/style, and audio.
- FTC endorsement guidance requires clear disclosure when there is a material relationship and warns against claims that need proof the advertiser does not have.

See `docs/reference/research-source-notes.md`.

## The Prompt Max Stack

Work in this order:

1. Script contract
2. Scene contract
3. Motion contract
4. Prop and UI contract
5. Audio contract
6. Negative prompt ledger
7. QA forecast

Do not write the model prompt until all seven are filled.

## 1. Script Contract

The script should fit in one breath per shot.

Required:

- `viewer`: exact audience segment
- `pain`: one recognizable moment
- `first_visible_event`: what happens before the viewer understands the words
- `spoken_trigger`: why the performer speaks now
- `proof_question`: what skepticism appears mid-clip
- `payoff`: one remembered line or reaction

Hard rule: if a spoken line does not cause a visible change, cut it or rewrite the shot.

## 2. Scene Contract

Define the scene like a production designer:

| Field | Requirement |
| --- | --- |
| Location | Specific, plausible, and matched to the use case. |
| Time | Time of day and lighting source. |
| Camera | Who is holding it, where it sits, why it moves. |
| Performer | Who they are and why they care. |
| Starting frame | Already active, not idle. |
| Ending frame | Clear hold, reaction, or insert target. |
| Continuity | Wardrobe, props, camera position, and light stay consistent. |

Bad: "founder in a car talking about AI automation."

Better: "Parked service van after a missed-call notification. Dash-mounted phone camera, late afternoon light through windshield, coffee in cupholder, owner still wearing job-site hoodie."

## 3. Motion Contract

Describe motion, not decoration.

Use:

```text
The camera [camera motion] as [subject] [specific action]. Then [second action]. The shot stays continuous unless a cut is explicitly required.
```

Rules:

- One primary action per shot.
- Use timestamps only when the sequence needs control.
- Do not ask for motion that contradicts the image or pose.
- For talking shots, pair stressed words with gesture, blink, head turn, prop movement, or expression.
- For longer clips, generate short shots and join them in edit instead of asking one model call to handle everything.

## 4. Prop And UI Contract

Every object needs a reason to exist.

For each prop, write:

- where it starts
- who touches it
- what it does
- why it matters
- where it ends

Generated models may invent text, logos, buttons, fake apps, and impossible interfaces. Treat readable generated UI as unsafe by default.

UI policy:

- If text must be correct, render it in post with deterministic tooling.
- If the model must show a device, keep the screen turned away, black, blurred, reflected, or icon-only.
- Do not ask the model to generate real app screens, dashboards, calendars, receipts, or DMs with readable content.
- Proof inserts should be screen recordings, designed overlays, icon states, physical objects, or deliberately unreadable background UI.

## 5. Audio Contract

Audio must belong to the room.

Required:

- room tone before speech
- source of voice: in-scene dialogue, phone call, headset, speaker, or narrator
- foley tied to visible actions
- no generic robotic voice
- no loose voiceover carrying a dead visual

For character/mascot work, define the voice as a performance target:

- age and energy
- texture
- emotional lane
- pacing
- mouth shape target
- words that should land on visible expression changes

## 6. Negative Prompt Ledger

Maintain a reusable list per format.

Default negatives:

```text
no generated captions, no end-card text, no readable fake UI text, no fake logos, no impossible phone apps, no random props appearing, no extra hands, no warped fingers, no dead first frame, no static face, no loose voiceover, no stock ad acting, no sci-fi AI visuals, no purple AI gradients, no abstract flashing boxes, no unrelated transitions
```

Add format-specific negatives only when they protect the scene. Do not use the negative prompt as a junk drawer.

## 7. QA Forecast

Before generation, predict the top three failure modes.

Examples:

- phone screen may invent apps
- hand may not touch the prop cleanly
- mouth may underperform the line
- cut may reset the location
- proof insert may look like a fake dashboard

Write the mitigation before you generate.

## Prompt Max Output

Each generation should save:

- creative brief
- scene design prompt
- proof insert spec
- performance map
- negative prompt ledger
- QA forecast
- generated job IDs
- contact sheet
- final QA report

If any piece is missing, the run is not locked.

