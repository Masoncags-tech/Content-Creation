# Tool Routing

## Core Rule

Use AI generation for footage, texture, motion, and acted variants. Use deterministic tooling for final text, captions, UI, layout, and exports when precision matters.

## Video Routes

| Use case | Preferred route | Notes |
| --- | --- | --- |
| UGC/product-in-life short | Higgsfield Marketing Studio | Best current route for fast native-feeling creator clips. |
| Physical mascot action | Kling | Best for body/object movement once keyframes are good. |
| Identity/reference consistency | Seedance | Use for controlled variants and character consistency. |
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

## Predictor Notes

Use Virality Predictor when it works, but treat it as a diagnostic layer.

Known issue on 2026-05-26:

`Cannot read properties of undefined (reading 'type')`

This occurred on new generated jobs, confirmed uploads, and a previously successful media ID. When predictor create fails, use mechanical QA and retry later.

## Remotion

Use for:

- final assembly
- captions synced to speech rhythm
- contact sheets
- loopable cuts
- cutdowns
- deterministic UI/product inserts

## ElevenLabs / Voice

Use for stable character voices and sound effects after the script is locked.

For longer clips, voice must be planned before final video generation. A long silent video with a pasted voice track usually feels fake.

