# Tool Routing

## Core Rule

Use AI generation for footage, texture, motion, and acted variants. Use deterministic tooling for final text, captions, UI, layout, and exports when precision matters.

Models perform the scene. Code tells the truth.

Use native ChatGPT image generation for concept frames, taste exploration, storyboard frames, and first-pass start frames before spending Higgsfield credits on still images. Spend Higgsfield credits on motion, reference animation, virality prediction, and platform-specific video generation unless a still must be ingested into Higgsfield as a native reference.

Ultra credits are a quality budget, not a reason to brute-force. Optimize by improving briefs, start frames, shot contracts, and QA gates before generation; do not downgrade model quality just to save credits when the weaker model lowers the chance of an audience-ready cut.

Passing constraint QA is not enough. A clip can avoid fake UI, preserve props, and still fail because the render looks cheap, generic, or obviously synthetic. Treat that as a failed paid attempt, not a baseline.

AI video models own:

- bodies
- faces
- camera movement
- environment texture
- physical action
- performance variants

Deterministic post-production owns:

- exact UI
- readable text
- captions
- dashboards
- charts
- receipts
- claims
- proof inserts
- final export

## Video Routes

| Use case | Preferred route | Notes |
| --- | --- | --- |
| Concept and taste frames | Native ChatGPT image generation | Fast first pass before spending Higgsfield credits. |
| UGC/product-in-life short | Higgsfield Marketing Studio | Best current route for fast native-feeling creator clips. |
| High-taste production start frames | Native ChatGPT image generation, then Higgsfield only if ingestion requires it | Build the frame before motion when visual taste matters. |
| Physical mascot action | Kling | Best for body/object movement once keyframes are good. |
| Identity/reference consistency | Seedance | Use for controlled variants and character consistency. |
| Production image-to-video | Kling / Cinema Studio / Veo | Use after the first frame passes taste, prop, and UI gates. |
| Premium live-action fidelity | Veo / Minimax 1080 / Seedance 1080 | Use fewer shorter shots and edit when one long generation looks synthetic. |
| Audio-led character performance | Audio-reference video model | Build script/voice/performance map first. |
| Final edit/captions | Remotion | Truth layer for timing, captions, foley, room tone, and exports. |
| Static layouts/one-pagers | HTML/CSS/React | Do not rely on image generation for precise text. |

## Higgsfield Marketing Studio

Use when:

- we need native UGC
- a product/site should appear in a real-life context
- we need a hook preset or setting preset
- we need quick iteration on performance mechanics

Best prompt shape:

1. "Native TikTok/Reels..."
2. exact first-frame physical action
3. spoken in-scene line
4. one proof insert
5. explicit audio/room tone
6. negative constraints: no generated captions, no end cards, no readable fake text

Disqualify if:

- it renders a visible phone/app UI when the screen policy says hidden, black, blurred, reflected, or icon-only
- it makes the image feel like a generic AI stock ad
- it overrides the intended prop list
- it ignores the first-frame physical hook

## Text-To-Video Fallbacks

Use text-to-video only for rough mechanics, not final creative, unless the visual quality clears the same taste gate as reference-driven routes.

Disqualify if:

- the image quality feels generic
- the performer looks like a stock character
- the scene lacks a recognizable taste point
- the output is only "technically correct"

## Image Model Routing

Default order:

1. Native ChatGPT image generation for taste and composition.
2. Human/taste gate on the still frame.
3. Upload or recreate the approved frame only if a motion model needs a Higgsfield-native input.
4. Animate with the strongest video route available.

Avoid spending Higgsfield credits on still-image exploration when native ChatGPT image generation can answer the creative question.

## Higgsfield Credit Budget

Before spending credits, classify the run:

| Tier | Max attempts before review | Use |
| --- | --- | --- |
| Exploration | 0-1 paid attempts | Only if free/native tools cannot answer the question. |
| Mechanic test | 1 paid attempt | Validate motion, lip sync, or transition mechanics. |
| Production candidate | 2-3 paid attempts | Only after script, scene contract, start frame, and QA forecast are locked. |
| Batch exploration | explicit approval | When generating many variants or high-credit model runs. |

Rules:

- Preflight cost when available.
- Do not pay for still-image exploration if native ChatGPT image generation can do it.
- Keep the quality floor high; choose fewer strong runs over many cheap weak runs.
- If a 15-second single-shot run looks synthetic, switch to 4-10 second premium shots and edit them together.
- Stop after a failed paid attempt and write why it failed before trying again.
- Prefer one strong reference-driven motion attempt over multiple blind text-to-video attempts.
- Reuse approved start frames, reference elements, voices, and proof inserts.
- Spend credits on motion, audio sync, high-quality video routes, and scoring.

## Predictor Notes

Use Virality Predictor when it works, but treat it as a diagnostic layer.

Known issue on 2026-05-26:

`Cannot read properties of undefined (reading 'type')`

This occurred on new generated jobs, confirmed uploads, and a previously successful media ID. When predictor create fails, use mechanical QA and retry later.

## Remotion

Use for:

- final assembly
- captions synced to speech rhythm
- exact UI and proof inserts
- contact sheets
- loopable cuts
- cutdowns
- deterministic UI/product inserts

## ElevenLabs / Voice

Use for stable character voices and sound effects after the script is locked.

For longer clips, voice must be planned before final video generation. A long silent video with a pasted voice track usually feels fake.
