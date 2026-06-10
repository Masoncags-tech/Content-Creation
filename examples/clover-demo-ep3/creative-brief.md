# Clover "The Demo" (Ep. 3) Creative Brief

## Metadata

- Run date: 2026-06-09
- Format: animated Clover-agent workplace sitcom (Episode 3)
- Builds on: `examples/clover-bottleneck-ep2/` (Ep. 2) — locked character sheet + voice map
- Platform: TikTok/Reels/Shorts
- Duration: 15 seconds — SINGLE Seedance generation, multi-shot directed in-prompt
- Aspect ratio: 9:16

## Why single-generation

Mason's quality bar for this run: "not stitched-together AI clips — a production video with
seamless flow." Ep. 2's residual weakness was exactly the stitch: three independent
generations have three micro-grades and three ideas of the room, and crossfades can't hide it.
Fix at the source: ONE 15s generation with the cuts directed inside the prompt, so both sides
of every cut share the same world, lighting, and motion continuity — plus ONE continuous 15s
audio bed ingested whole, so dialogue flows across cuts with no per-shot audio seams.

## Premise

The biggest client demo of the quarter is in five minutes and the office is in full meltdown.
A continuous camera push tours the chaos — each agent lands one panicked beat as the camera
passes — and settles on Tiny Clover, dead calm, sipping from a tiny mug. Why so calm?
The demo was an hour ago. Clover ran it. They signed.

## Script (23/25)

| Time | Character | Line | Beat |
| --- | --- | --- | --- |
| 0.0-0.8s | (hook) | Derek sprints through frame, papers scatter, red alarm glow | physical second-zero |
| 0.8-2.6s | Hermes | Demo's in five minutes. Status. | calm COO under pressure |
| 2.9-4.4s | Bighoss | Build's on fire. | gruff bad news |
| 4.7-6.9s | Codex | Correction. The fire is on fire. | judging escalation |
| 7.2-8.4s | Derek | I'll stall them! | panic spike |
| 8.4-9.0s | (visual) | camera settles on Tiny Clover serenely sipping | calm reveal |
| 9.2-10.7s | Hermes | Why are you calm. | deadpan question (CUT 1 at ~9.0s) |
| 11.2-13.6s | Tiny Clover | The demo was an hour ago. Clover ran it. | reveal (CUT 2 at ~11.0s) |
| 14.0-15.0s | Tiny Clover | They signed. | quotable payoff |

Script score: Recognition 5 (demo-day panic is universal), Physicality 4 (sprint, smoke,
alarm, sip), Compression 5, Specificity 4 ("the fire is on fire", "they signed"),
Payoff 5 = 23/25 (kill-floor 18).

## Shot grammar (in-prompt, one generation)

1. SHOT 1 (0-9s): continuous steadicam push through the office — Derek sprint hook, then
   each speaker lands their line AS THE CAMERA PASSES THEM (staging enforces
   one-mouth-at-a-time), settling on Tiny Clover sipping.
2. CUT 1 (9s): close two-shot at Tiny Clover's desk — Hermes leans in, asks flatly.
3. CUT 2 (11s): clean medium on Tiny Clover — payoff; alarm glow dies on "They signed,"
   cast freezes mid-panic, one paper floats down.

## Voice map (locked from Ep. 1/2)

| Character | ElevenLabs Voice | voice_id |
| --- | --- | --- |
| Hermes | Sarah | EXAVITQu4vr4xnSDxMaL |
| Bighoss | Callum | N2lVS1w4EtoT3dr4eOWO |
| Codex | Jessica | cgSgspJ2msm6clMCkdW9 |
| Tiny Clover | Laura | FGY2WhTYpPnrIDTdsKH5 |
| Derek | Liam | TX3LPaxmHKxFdv7VOQHJ |

## Budget (balance 307.75 at run start)

| Step | Credits |
| --- | --- |
| Draft roll — 15s 480p fast | 22.5 |
| Final roll — 15s 1080p std | 135 |
| Committed | 157.5 |
| Reserve (covers exactly one 1080p re-roll) | 150.25 |

Known risk: single generation is all-or-nothing — no per-shot re-rolls. Mitigation: cheap
draft pass to tune choreography; reserve sized to one full final re-roll. Use
create-then-wait (capture job_id up front) — Ep. 2 lost 45 credits to a 502 during `--wait`.

## Gates

- Mason waived the human taste gate for this run ("rip it") — artifacts still go to disk
  first, stills + bed still precede motion, QA still runs before delivery.
