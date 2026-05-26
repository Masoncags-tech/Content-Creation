# Research Source Notes

## TikTok Creative Best Practices

Source: https://ads.tiktok.com/help/article/creative-best-practices?lang=en

Useful signals:

- Build for TikTok first: vertical 9:16, sound/music, safe zones, creator/employee/customer presence, DIY or not overly polished feel.
- Use a hook, unique selling points, and CTA.
- Prioritize the hook in the first 6 seconds.
- Introduce the content proposition in the first 3 seconds.
- Test materially different creatives instead of tiny copy swaps.

How this maps to our system:

- The first frame needs a physical hook.
- Variants must change the first-second visual.
- Scripts must show proposition early without sounding like an ad deck.

## Google Veo Prompt Guide

Source: https://cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide

Useful signals:

- Prompts should specify subject, action, scene/context, camera angle, camera movement, visual style, and audio.
- Subject specificity reduces generic output.
- Action should describe the verb of the video: movement, interaction, expression, or task.
- Audio can include sound effects, ambient noise, and dialogue, described in separate sentences.
- Cinematic terms like jump cut and match cut can be used when the edit needs them.

How this maps to our system:

- Scene prompts need separate contracts for subject, action, context, camera, style, and audio.
- Dialogue prompts should tell the model who says the line and what sounds exist around it.

## Runway Image-To-Video Prompting

Source: https://help.runwayml.com/hc/en-us/articles/48324313115155-Image-to-Video-Prompting-Guide

Useful signals:

- Image-to-video prompts should focus mostly on motion.
- Start simple, then add detail to refine.
- Useful structure: "The camera [motion] as the subject [action]."
- Sequential prompting can use natural language order or timestamps.
- For longer sequences, use the last frame from one generation as the next input, then combine clips in edit.
- If the image has motion cues that contradict the prompt, results degrade.
- If unwanted cuts appear, use a longer duration or explicit continuous-shot language.

How this maps to our system:

- Each shot should have one primary motion contract.
- Do not ask one model call to handle too many beats.
- Reference frames must not contain visual cues that fight the requested motion.

## FTC Influencer Disclosures

Source: https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers

Useful signals:

- Disclose financial, employment, personal, family, or value-exchange relationships.
- Disclosures should be hard to miss and attached to the endorsement message.
- In video, disclosure should be in the video, not only the description.
- Do not use vague shorthand such as "sp" or "collab."
- Do not claim experience with a product you have not tried.
- Do not make claims that need proof the advertiser does not have.

How this maps to our system:

- Commercial trust is part of QA, not legal cleanup at the end.
- Claims must be scoped to visible proof.
- If the account or actor has a material relationship, disclosure must be planned as creative, not hidden.

## YouTube Paid Promotion Policy

Source: https://support.google.com/youtube/answer/154235?hl=en

Useful signals:

- Creators must flag paid product placements, endorsements, sponsorships, or other content requiring disclosure.
- Creators and brands are responsible for following local disclosure law.
- Paid promotions must follow platform ad policies and community guidelines.

How this maps to our system:

- Platform disclosure fields belong in the run log.
- Paid or affiliate clips need a publishing checklist separate from creative QA.

