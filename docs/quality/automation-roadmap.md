# Automation Roadmap

## Purpose

Manual taste is still required, but mechanical defects should be caught automatically whenever possible.

## Near-Term Checks

| Check | Goal | Tooling |
| --- | --- | --- |
| `prompt-lint` | Catch missing scene contracts, undefined props, fake UI risk, and overloaded actions before generation. | Node markdown parser. |
| `qa:contact-sheet` | Review first/mid/end frames and frames around cuts. | FFmpeg or browser frame extraction. |
| `qa:freeze` | Fail static first frames and dead footage. | FFmpeg `freezedetect` or frame-diff script. |
| `qa:ocr` | Detect generated readable text outside approved overlay masks. | OCR pass on raw generated footage. |
| `qa:safezone` | Check that faces, captions, proof, and CTAs survive TikTok/Reels/Shorts UI. | Overlay platform chrome on contact sheet. |
| `qa:audio` | Detect silence, bad loudness, and missing room tone. | FFmpeg `silencedetect` and loudness filters. |
| `render:proof-insert` | Render exact UI/proof from JSON. | Remotion or HTML/CSS capture. |
| `render:proof-overlay` | Replace risky generated proof sections with code-owned icon/text layers while preserving audio. | Browser canvas capture. |

## Prompt-Lint Rules

Fail when:

- first visible event is missing
- performer motivation is missing
- prop ledger is empty while props are mentioned
- generated readable UI is allowed
- proof insert has no deterministic source
- action contract has more than two primary actions
- camera source is not physical
- negative prompt ledger does not cover fake UI/text

## Video QA Rules

Fail when:

- first 0.5 seconds are effectively static
- raw generated footage contains readable app/dashboard/calendar text
- a prop appears after a cut without prior source
- audio starts too cleanly without room tone
- foley is more than a few frames away from the visible action
- captions cover face, hands, product, proof, or platform UI

## Ownership Boundary

Generated video models own:

- bodies
- faces
- camera language
- physical scene motion
- environment texture
- performance variants

Deterministic post-production owns:

- captions
- exact UI
- exact text
- charts
- metrics
- claims
- logos
- proof inserts
- final export

Core rule: models perform the scene; code tells the truth.
