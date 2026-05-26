# Proof Insert Spec

## Purpose

Use this when the clip needs a phone, dashboard, calendar, receipt, testimonial, message, metric, or product proof.

Generated readable UI is not trusted. If proof needs precision, it must be deterministic.

## Proof Question

- What skepticism appears in the viewer's mind?
- What proof answers it?
- Why does the proof belong at this exact timestamp?

## Insert Type

Choose one:

- screen recording
- deterministic overlay
- icon-only status card
- physical proof object
- blurred device with post-rendered text
- before/after visual
- product demonstration

## Timing

| Time | Visual | Audio | Reason |
| --- | --- | --- | --- |
|  |  |  |  |

## Design Rules

- Aspect ratio:
- Safe zones:
- Font:
- Colors:
- Logo use:
- Text max:
- Motion:
- Accessibility:

## Data Rules

- No fake metrics.
- No fake clients.
- No fake DMs.
- No invented app screens.
- Use anonymized or synthetic-example labels when needed.
- If claim needs evidence, link evidence in the run log.

## Handoff To Video Prompt

The model prompt should say:

```text
When a device appears, the screen is turned away, black, blurred, reflected, or icon-only. Do not generate readable app text, dashboard text, calendar text, message text, or fake logos. The precise proof insert will be added in post.
```

## QA

- Does the insert answer the exact skepticism?
- Is every readable word intentionally designed?
- Could a viewer mistake illustrative data for real data?
- Does the insert create or fix a continuity issue?
- Does the proof support the claim without overpromising?

