# Video Creation

This repo is the operating system for making high-quality short-form AI-assisted video without drifting into slop.

The goal is simple: ship native social clips that feel filmed, performed, edited, and worth sharing. The system starts with Clover Digital, but the process is built to work across brands.

## Current Clover Creative Decision

For Clover growth content, the strongest lane right now is:

**Real creator UGC + one physical prop gag + one product proof insert.**

The Clover mascot is still useful IP, especially for recurring character/show content. But the best current growth-video structure opens like a real person caught a real business moment. Clover becomes the payoff: the thing that quietly handled the work.

## Production Loop

1. Define the viewer, pain, and share reason.
2. Pick a proven format, not a blank canvas.
3. Run Prompt Max before touching a generator.
4. Write the hook as a physical event in the first 1-2 seconds.
5. Build a timed script, scene design prompt, proof insert spec, and performance map.
6. Generate 2-4 meaningfully different variants.
7. QA motion, transitions, audio, mouth/body performance, prop logic, UI logic, and fake text.
8. Score with a predictor when available, but do not let the metric override obvious quality.
9. Save the run log, prompt, result IDs, contact sheet, and next change.

## Repo Map

- `docs/workflows/` - repeatable production workflows.
- `docs/quality/` - gates, scorecards, and review rules.
- `docs/reference/` - findings from prior experiments.
- `templates/` - copyable briefs, scripts, shotlists, QA reports, and run logs.
- `prompts/` - tested prompt blocks for video, voice, and post-production.
- `examples/` - example run logs and decision records.
- `scripts/` - repo validation checks.

## Non-Negotiables

- Something physical must happen in the first two seconds.
- The scene must pass the "would this still make sense if no camera were present?" test.
- Every prop must have a source, action, reason, and destination.
- Every cut needs a story reason.
- Voice must belong to the scene, not sit on top as a loose dub.
- Generated fake text is treated as a defect.
- Final captions, layout, and UI text should be rendered with deterministic tooling when precision matters.
- A good mascot is not brainrot. Flashing boxes, random captions, and abstract motion with no scene are brainrot.

## First Example Format

The first example format to harden is:

`car-founder-ugc-proof`

Structure:

1. `0.0-1.0s`: physical prop gag already happening.
2. `1.0-5.5s`: one clean in-scene line.
3. `5.5-7.5s`: product proof insert with icon-only UI.
4. `7.5-10.0s`: reaction/payoff line.

See `examples/clover-car-ugc/run-log.md`.

For reusable process examples, see `examples/prompt-max-service-ugc/`.
