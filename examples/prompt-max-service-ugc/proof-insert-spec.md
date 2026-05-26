# Proof Insert Spec

## Purpose

Show that the follow-up happened without asking the video model to invent a phone app, calendar, dashboard, or fake customer message.

## Proof Question

- What skepticism appears in the viewer's mind? Did anything actually happen, or is this just a claim?
- What proof answers it? A deterministic icon-only status card showing an inbound item moved to handled.
- Why does the proof belong at this exact timestamp? It appears immediately after the owner says the work was already handled.

## Insert Type

- deterministic overlay

## Timing

| Time | Visual | Audio | Reason |
| --- | --- | --- | --- |
| 6.5-8.5s | Icon-only card: incoming dot moves to green check | room tone continues, soft tap | answers skepticism without fake UI |

## Design Rules

- Aspect ratio: 9:16
- Safe zones: keep all proof above bottom platform UI
- Font: none unless evidence-backed copy is approved
- Colors: neutral surface, green check, one accent
- Logo use: optional small brand mark only if clean asset exists
- Text max: none for first test
- Motion: one dot moves to check, no flashing
- Accessibility: high contrast icon states

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

- Does the insert answer the exact skepticism? yes
- Is every readable word intentionally designed? yes, none are used
- Could a viewer mistake illustrative data for real data? low risk because no data is shown
- Does the insert create or fix a continuity issue? fixes fake UI risk
- Does the proof support the claim without overpromising? yes, it shows one handled item

