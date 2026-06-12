# Seedance Prompt Blocks (tested)

Reusable prompt grammar from the runs that worked. Copy the block, replace the bracketed
parts, keep the capitalized directives — the emphasis is load-bearing. Full working examples:
`prompts/clover-demo-ep3/motion-15s-v2.txt`, `prompts/clover-v01-launch/motion-12s-v2.txt`.

## Multi-shot skeleton (the single-gen recipe)

Open with the world, then number the shots with timestamps and explicit HARD CUTs:

> [style line: world, cast, render quality]. ONE continuous [N]-second comedy sequence in
> THREE SHOTS with TWO clean hard cuts, all inside the same coherent scene — same office,
> same cast, same [lighting state] throughout.
>
> SHOT 1 (0 to X seconds) — [one camera behavior for the whole shot]: [beats in order]...
>
> HARD CUT to SHOT 2 (X to Y seconds): [framing], [who is in frame], [single beat]...
>
> HARD CUT to SHOT 3 (Y to N seconds): [framing], [payoff beat], [button]...

Rules that held across runs:

- Timestamps are guidance — the model retimes to performance. Order is what it obeys.
- One camera behavior per shot ("one unbroken gliding steadicam push, no cuts inside this
  shot"). Naming the move ("settles on", "glides past") choreographs who is on screen when.
- End the prompt with the continuity line: *"cinematic continuity across the cuts (matched
  lighting, matched set, matched color grade), no readable text, no captions, no logos,
  no extra characters."*

## One-mouth-at-a-time (multi-speaker cartoon scenes)

Stage speaking turns as a physical consequence — each character speaks AS THE CAMERA REACHES
THEM — and close with the explicit rule:

> CRITICAL DIALOGUE TIMING — only ONE character's mouth moves at any moment, never two at
> once; each character lip-syncs only their own line and every other mouth stays fully closed.

Per-beat phrasing: *"[NAME] speaks the first line, only his mouth moves."*

## Dialogue lock (MANDATORY for photoreal human speakers)

Without this, Seedance replaces the audio bed's dialogue with self-written lines. Prepend:

> DIALOGUE LOCK — the [character] speaks EXACTLY and ONLY the words in the provided audio
> track, in that exact voice: first line "[line 1 verbatim]" and second line "[line 2
> verbatim]". Never invent new dialogue, never replace or re-voice the provided lines, never
> add narration. The provided audio track is the complete and final dialogue.

Quoting the lines also gives the model the text to lip-sync against. Cartoon-only casts have
never needed this; add it anyway when a human speaks.

## Presence, not entrances

The model resists characters ENTERING mid-shot (skipped twice on Ep. 3 v1). Direct presence:

> [NAME] IS ALREADY IN FRAME from the first instant of this shot, [position], clearly visible.

## Hybrid photoreal + animated character (Paddington integration)

State the boundary twice — once per side, and once as a closing rule:

> PHOTOREALISTIC live-action cinematic footage with ONE animated VFX character. A real human
> [description] — true-to-life skin texture, natural eye movement, handheld documentary feel,
> [lens/light/grain]. The [MASCOT] is the ONLY animated element: a [size] Pixar-quality 3D
> character ([design ref details]), integrated like a movie VFX character — Paddington style:
> matched lighting, accurate contact shadows on the [surface], subtle [color] bounce light.
>
> ...
>
> The human stays fully photorealistic at all times — never cartoon, never stylized; the
> [mascot] stays a 3D animated character at all times — never realistic, never flat.

The start frame must already show the hybrid (same boundary language works on gpt-image-2,
plus the brand avatar as `--ref`). The motion model preserves what the still establishes.

## Product abilities as physical comedy (no UI shots)

Show the product through object interaction; keep all screens abstract:

> [screen] glowing with abstract green light only (NO readable interface, no icons, no text)

Working ability beats: tap the phone → buzzing stops, "glossy abstract speech-bubble shapes
whoosh up and dissolve (no text on them)"; sweep receipts → "squaring them into one neat tidy
stack taller than himself"; "flicks a small translucent floating calendar card into place."
Caveat: at 1080p std, print-like props can grow pseudo-text that 480p drafts hide — zoom-QA.

## Lighting as a pinned state

Declare lighting once, as a state with a scripted change tied to a story beat:

> ONE CONSISTENT LIGHTING STATE: [state] that persists through SHOT 1 and SHOT 2 and all of
> SHOT 3 until [story beat], when it [change].

Expect the model to take one directorial liberty anyway (Ep. 3 gave Tiny Clover a sunny calm
bubble against the alarm-red chaos — twice, independently). If the liberty is coherent and
motion-continuous, judge it as a choice, not a defect.

## Audio bed contract

- Bed length = generation duration exactly. Lines placed with adelay/amix; hook beat
  (0.8-1.0s) stays silent for the physical gag.
- Leave wordless gaps deliberately — Seedance fills them with scene-true SFX and room tone.
- The bed survives verbatim for cartoon casts; for humans, only with the dialogue lock.
- Verify with whisper verbose transcription on EVERY roll, draft included.

## Performed-voice extraction (when TTS sounds like a dub)

TTS reads lines; sync-sound is performed in the room — when a client says the voice "sounds
generated," this is usually the gap. Recipe (proven on `clover-wywo`):

1. Roll a 480p draft with NO audio bed; quote the lines in the prompt with voice direction
   ("natural tired-but-warm real human morning voice, performed live in the room, natural
   breaths, slightly imperfect delivery"). Seedance performs them.
2. whisper word-timestamps → cut each line from the draft's audio (pad ~0.15s).
3. ElevenLabs `/v1/audio-isolation` to strip baked SFX (min 4.6s input — isolate the whole
   dialogue region in one call, then cut).
4. Rebuild the deterministic bed at the model's OWN native line timing (it edits well).
5. Re-roll with the bed + DIALOGUE LOCK. The model lip-syncs its own performance.

The extracted lines become the character's reusable voice (clone via ElevenLabs IVC for
future episodes).

## Solid props, one character (anti-ghost)

"It EXPANDS into a floating card" invites scale hallucinations (giant translucent ghost
mascot, duplicated props). Direct prop physics tactilely and close with the rule:

> [character] GRABS the small [tile] and SETS IT DOWN on the desk — where it becomes a small
> SOLID [prop], physical and opaque... STRICT SCALE AND SOLIDITY: every prop stays small and
> physical; NO translucent overlays, NO giant projections, NO holograms, NO ghost copies or
> duplicates of [character] — there is exactly ONE [character], [size], at all times.

For prop faces that attract pseudo-text (calendars, receipts, labels): "PURE BLANK WHITE
face — no grid, no dots, no marks of any kind" — and zoom-QA the 1080p anyway.

## State continuity across a time jump

A state that must persist (sleeping character, dead screen, tidy desk) gets all three:
the state, its start, and its negation: "already curled up FAST ASLEEP from the moment the
sunrise begins — STAYS asleep for the entire rest of the video, never stands, never wakes;
his ONLY movement is the final sleepy arm-reach." Screens: "DARK and OFF — no glow, no
interface — until its single soft ding."

## Engine routing (hybrid mascot lane)

- `seedance_2_0`: the hybrid workhorse. Holds the mascot design, obeys the dialogue lock,
  has the 1.5cr/s draft tier.
- `marketing_studio_video`: strong photoreal humans + native voice, but CANNOT hold a
  cartoon character design (melted-toy mascot), ad-libs beyond the script, no real draft
  tier (480p=52.5, 1080p=150 flat). Pure-human ad variants only.
