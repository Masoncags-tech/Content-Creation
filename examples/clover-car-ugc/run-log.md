# Clover Car UGC Proof Run

## Metadata

- Date: 2026-05-26
- Brand: Clover Digital
- Format: car-founder-ugc-proof
- Tool route: Higgsfield Marketing Studio, UGC mode, in-car setting, random-object-mic hook

## Winning Direction

Real creator UGC with one physical prop gag and one product proof insert.

## Best Current Prompt

```text
Tighter native TikTok/Reels UGC, no generated captions or end-card text. First frame is already active: parked car dash selfie, phone in mount vibrating with generic unreadable notification bubbles, coffee cup wobbling. A coffee lid drops into the founder's hand and she uses it like a tiny microphone. She says in-scene, with iPhone mic audio and car cabin sound: "I missed the call. Clover didn't." Quick insert: phone calendar UI with green check icons only, no readable words. Back to her: tiny relieved laugh, "That is the whole pitch." Realistic creator lighting, dash-mounted iPhone, slight mount wobble, natural mouth sync, no polished ad voice, no subtitles, no readable fake text except the Clover logo if needed. Keep it under 10 seconds, first physical action before second one, one clean cut to the phone insert, then back.
```

## Candidates

| Variant | Job ID | Read |
| --- | --- | --- |
| Car founder, 15s | `a1f63e22-e1b1-4911-a9b1-1b5be4a20d02` | Good structure, bad generated end-card typo. |
| Office sticky-note, 15s | `254fbb64-f0d1-4cb3-bef4-69f945757ff2` | Strong visual hook, too much generated text/UI risk. |
| Car short no-text, 10s | `f659c2ba-d72d-4d7f-b1d9-f6d7277151ae` | Best current direction. Cleaner hook, cleaner continuity, fewer artifacts. |

## QA Read

What worked:

- Physical prop hook makes the first second feel alive.
- In-car setting feels native to social.
- Product proof insert gives the ad a reason to cut.
- Shorter runtime reduced drift.

What still needs work:

- Phone UI can still generate weird labels.
- Need playback QA for audio/mouth sync.
- Script can get sharper for service-business owners.

## Next Iteration

Replace generated phone UI with a deterministic Remotion/HTML phone insert, then rerun the same structure with:

> I missed the call. Clover booked it.

