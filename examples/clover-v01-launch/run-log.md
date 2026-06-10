# Clover v0.1 Launch — "The New Hire" Run Log

## Metadata

- Run date: 2026-06-09
- Format: hybrid live-action UGC + animated mascot (Paddington/Roger Rabbit integration) — FIRST of its kind in this repo
- Purpose: Clover agent v0.1 launch content — abilities: iMessage, bookkeeping, scheduling (shown as physical comedy, no UI text)
- Final render: `renders/clover-v01-launch/clover-v01-launch-12s.mp4` (1080x1920, h264+aac, 12.05s)
- Contact sheet: `renders/clover-v01-launch/clover-v01-launch-contact-sheet.jpg`
- Brief: `examples/clover-v01-launch/creative-brief.md` (script 22/25)
- Mascot ref: official brand avatar `clover-digital-site/assets/clover-profile-avatar-v1-C1Vc0UPw.png`

## Production route

1. `gpt-image-2` hybrid start frame: photoreal founder + dimensional 3D render of the brand
   mascot (headset per brand's working-Clover), matched lighting + contact shadow. First
   attempt passed QA.
2. ElevenLabs founder lines (Chris voice, iP95p4xoKVk53GoZ742B), 12s bed, lines at 1.0s/9.4s.
3. Draft #1 (480p fast, 18 cr): aesthetic HELD (no style bleed either direction) but exposed
   **the dialogue-rewrite failure mode**: with a photoreal human speaker, Seedance replaced the
   scripted setup line with self-written dialogue ("I swear, this paperwork was multiplying
   while I blinked"). Payoff line survived at bed timing.
4. Prompt v2 = DIALOGUE LOCK prepended: founder speaks EXACTLY the provided audio track, both
   lines quoted verbatim in the prompt.
5. Draft #2 (18 cr): dialogue verbatim ✓, aesthetic still held ✓.
6. Final (1080p std, 108 cr): dialogue verbatim at bed timing (0-4.4s / 9.4-11.4s ✓).

## Higgsfield jobs

| Roll | Config | Credits | Status | Job ID |
| --- | --- | --- | --- | --- |
| draft #1 | 480p fast 12s | 18 | completed | 7d0016d3-36c2-497c-8041-fd9ed2354d38 |
| draft #2 (dialogue lock) | 480p fast 12s | 18 | completed | 5cd6293b-8bb5-48f5-8d2e-306607cc8340 |
| final | 1080p std 12s | 108 | completed | da8ea8d8-c22b-44e9-be36-1fb184a934cc |

Fresh audio upload id used for every job (Ep. 3 remap-bug rule). 12s pricing confirmed linear
(9 cr/s at 1080p std, 1.5 cr/s at 480p fast).

## Cost

| Item | Credits |
| --- | --- |
| Two drafts | 36 |
| Final | 108 |
| **Total** | **144** |
| Balance | 150.25 → 6.25 (month's credits effectively spent, per Mason's directive) |

## QA summary (qa-report.md)

- Hybrid integrity: human photoreal in every checked frame, mascot cartoon-3D in every checked
  frame, contact shadows present — the core bet of the video, confirmed at all three tiers.
- Dialogue verbatim + timed; Seedance filled the 4.8s work-montage gap with generated SFX.
- All 3 ability beats render: phone tap → iMessage-style bubbles with icon glyphs (no text),
  receipt sweep → squared stack, calendar card ding.
- FLAGGED for human watch: floating calendar card shows plausible-but-non-sequential digits
  (~1.5s on screen, shallow DOF; reads fine at speed, freeze-frame would notice). No budget
  remained for a re-roll; if it bothers, fix next cycle or blur the card region in post.

## Lessons (CRITICAL for future hybrid runs)

- **Photoreal human + audio bed = dialogue-rewrite risk.** Seedance will re-voice a photoreal
  human with self-written dialogue unless the prompt contains a DIALOGUE LOCK quoting the
  exact lines. Cartoon casts (Ep. 1-3) never triggered this; humans do.
- The hybrid aesthetic itself is LOW risk — both drafts and the final held the
  photoreal/cartoon boundary with zero style bleed. The start frame carries it.
- 1080p std upgrades VFX-prop fidelity vs 480p fast (orbs → proper bubble shapes), which also
  RAISES text-artifact risk on print-like props (calendar digits appeared only at 1080p).
  Keep prop print abstract in prompts, or expect to flag it.
- Mute mascot + speaking human is the right risk split: human lip-sync is Seedance's
  strength, cartoon lip-sync was always the weak point.

## Assets

- Start frame: `assets/storyboards/clover-v01-launch/start-frame.png`
- Voice: `assets/audio/clover-v01-launch/` (lines/, trimmed/, beds/)
- Prompts: `prompts/clover-v01-launch/` (motion-12s.txt, motion-12s-v2.txt = +dialogue lock)
- Drafts: `renders/clover-v01-launch/draft-480p.mp4`, `draft2-480p.mp4`
- QA frames + zooms: `renders/clover-v01-launch/qa-*.png`
