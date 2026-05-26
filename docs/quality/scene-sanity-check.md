# Scene Sanity Check

## Purpose

This is the no-slop review before any prompt goes into a video model.

The reviewer should be able to answer "why is this happening?" for every visible action, prop, cut, and sound. If not, the scene is not ready.

## Action Logic

Pass only if:

- The performer has a reason to be in the location.
- The performer has a reason to speak at that second.
- The first action is already happening in frame one.
- Each action causes the next action.
- The payoff is caused by what happened earlier.

Fail if:

- The scene starts with an idle person waiting to talk.
- A prop or notification appears only because the script needs it.
- The performer reacts to something the viewer cannot see or infer.
- The ending is a tagline instead of a result, reaction, or reveal.

## Prop Logic

Every prop gets a job.

| Prop | Starts Where | Touched By | Action | Reason | Ends Where |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |

Fail if a prop has no row.

## UI Logic

Readable generated UI is a defect unless it was designed outside the video model.

Pass options:

- screen recording
- deterministic overlay
- icon-only status card
- blurred or reflected device screen
- physical proof object
- readable text added in post

Fail options:

- generated calendar text
- fake app grid
- fake dashboard numbers
- fake customer DMs
- fake logos
- text that morphs or misspells

## Camera Logic

Pass only if:

- The camera has a physical source: handheld phone, dash mount, tripod, CCTV, laptop webcam, or screen recording.
- Camera movement is motivated by the scene.
- The cut moves the story forward.
- The second shot answers skepticism or lands the payoff.

Fail if:

- The camera randomly floats.
- The edit uses a flash/blur to hide discontinuity.
- The first frame after a cut repeats the same information.
- A new location appears without setup.

## Audio Logic

Pass only if:

- The room tone fits the location.
- Speech source is visible or implied.
- Foley lines up with visible action.
- The voice fits the character and scene.
- Captions, if used, follow the rhythm of speech.

Fail if:

- A polished voiceover sits on top of an otherwise candid scene.
- Lip movement does not match the energy of the line.
- Sound effects occur without matching physical action.
- The voice implies a different person or age than the character.

## Claim Logic

Pass only if:

- The claim is specific, modest, and supportable.
- The proof appears when skepticism appears.
- Any material relationship can be disclosed clearly.
- The CTA matches the trust earned.

Fail if:

- The scene promises universal outcomes.
- The proof is decorative.
- The result cannot follow from the shown action.
- The video implies typical results without evidence.

## Final Question

Would this exact moment still make sense if no camera were present?

If the answer is no, rewrite the scene.

