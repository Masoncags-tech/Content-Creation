import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const requiredFiles = [
  "README.md",
  "docs/workflows/short-form-video.md",
  "docs/workflows/scriptwriting.md",
  "docs/workflows/prompt-max.md",
  "docs/workflows/tool-routing.md",
  "docs/creative/script-lab.md",
  "docs/creative/creative-elements.md",
  "docs/quality/qa-gates.md",
  "docs/quality/scene-sanity-check.md",
  "docs/quality/automation-roadmap.md",
  "docs/quality/deterministic-video-qa.md",
  "docs/quality/scorecard.md",
  "docs/reference/research-source-notes.md",
  "docs/reference/character-account-mechanics.md",
  "docs/reference/pilot-findings.md",
  "docs/reference/format-library.md",
  "prompts/higgsfield-marketing-studio.md",
  "prompts/voice-direction.md",
  "templates/creative-brief.md",
  "templates/script.md",
  "templates/scene-design-prompt.md",
  "templates/proof-insert-spec.md",
  "templates/prop-continuity-ledger.md",
  "templates/performance-map.md",
  "templates/run-log.md",
  "templates/qa-report.md",
  "examples/clover-car-ugc/run-log.md",
  "examples/clover-car-ugc/script-options.md",
  "examples/prompt-max-service-ugc/scene-design-prompt.md",
  "examples/prompt-max-service-ugc/proof-insert-spec.md",
  "examples/prompt-max-service-ugc/run-log.md",
  "examples/prompt-max-service-ugc/qa-report.md",
  "examples/clover-standup-pilot/run-log.md",
  "examples/clover-standup-pilot/qa-report.md",
];

function read(file) {
  const absolute = path.join(root, file);
  assert.ok(fs.existsSync(absolute), `Missing required file: ${file}`);
  return fs.readFileSync(absolute, "utf8");
}

for (const file of requiredFiles) {
  const body = read(file);
  assert.ok(body.trim().length > 80, `${file} is too thin to be useful`);
}

const readme = read("README.md");
const readmeLower = readme.toLowerCase();
for (const phrase of [
  "physical prop gag",
  "product proof insert",
  "Something physical must happen",
  "mascot",
]) {
  const haystack = phrase === "Something physical must happen" ? readme : readmeLower;
  const needle = phrase === "Something physical must happen" ? phrase : phrase.toLowerCase();
  assert.ok(haystack.includes(needle), `README is missing key phrase: ${phrase}`);
}

const qa = read("docs/quality/qa-gates.md");
for (const gate of [
  "First Two Seconds",
  "Transition Logic",
  "Native Audio",
  "Generated Media Defects",
  "Share Reason",
  "Every visible prop has a source",
]) {
  assert.ok(qa.includes(gate), `QA gates missing: ${gate}`);
}

const promptMax = read("docs/workflows/prompt-max.md");
for (const phrase of [
  "Script contract",
  "Scene contract",
  "Motion contract",
  "Prop and UI contract",
  "Negative prompt ledger",
  "Generated models may invent text",
]) {
  assert.ok(promptMax.includes(phrase), `Prompt Max missing: ${phrase}`);
}

const sceneSanity = read("docs/quality/scene-sanity-check.md");
for (const phrase of [
  "Action Logic",
  "Prop Logic",
  "UI Logic",
  "Would this exact moment still make sense if no camera were present?",
]) {
  assert.ok(sceneSanity.includes(phrase), `Scene sanity check missing: ${phrase}`);
}

const scriptTemplate = read("templates/script.md");
for (const col of ["Time", "Visual", "Spoken line", "Action", "Audio/SFX"]) {
  assert.ok(scriptTemplate.includes(col), `Script template missing column: ${col}`);
}

const prompt = read("prompts/higgsfield-marketing-studio.md");
for (const guardrail of [
  "no generated captions",
  "no readable fake text",
  "First frame is already active",
  "invented app screens",
  "Prop logic",
]) {
  assert.ok(prompt.includes(guardrail), `Prompt library missing guardrail: ${guardrail}`);
}

const sceneTemplate = read("templates/scene-design-prompt.md");
for (const phrase of ["Scene Contract", "Motion Contract", "Prop Contract", "UI/Text Contract", "QA Forecast"]) {
  assert.ok(sceneTemplate.includes(phrase), `Scene design template missing: ${phrase}`);
}

const proofTemplate = read("templates/proof-insert-spec.md");
for (const phrase of ["Generated readable UI is not trusted", "No invented app screens", "Handoff To Video Prompt"]) {
  assert.ok(proofTemplate.includes(phrase), `Proof insert spec missing: ${phrase}`);
}

const automation = read("docs/quality/automation-roadmap.md");
for (const phrase of ["prompt-lint", "qa:ocr", "render:proof-overlay", "models perform the scene; code tells the truth"]) {
  assert.ok(automation.includes(phrase), `Automation roadmap missing: ${phrase}`);
}

const deterministicQa = read("docs/quality/deterministic-video-qa.md");
for (const phrase of ["Generated footage is reviewed as performance", "Contact Sheet", "OCR / Text Policy", "Transition QA"]) {
  assert.ok(deterministicQa.includes(phrase), `Deterministic video QA missing: ${phrase}`);
}

const characterMechanics = read("docs/reference/character-account-mechanics.md");
for (const phrase of ["recurring world", "One object causes the whole scene", "Do not copy", "Premise Density"]) {
  assert.ok(characterMechanics.includes(phrase), `Character mechanics missing: ${phrase}`);
}

const scriptLab = read("docs/creative/script-lab.md");
for (const phrase of ["I missed the call. Clover didn't.", "Hook Before Script", "Rewrite Ladder"]) {
  assert.ok(scriptLab.includes(phrase), `Script lab missing: ${phrase}`);
}

const creativeElements = read("docs/creative/creative-elements.md");
for (const phrase of ["Physical Hooks", "Proof Inserts", "The mascot works when it has a job"]) {
  assert.ok(creativeElements.includes(phrase), `Creative elements missing: ${phrase}`);
}

const filesWithBadClaims = requiredFiles.filter((file) => {
  const riskyLines = read(file)
    .split("\n")
    .map((line) => line.trim().toLowerCase())
    .filter((line) => line && !line.startsWith("- no ") && !line.startsWith("no "));

  return riskyLines.some((line) => line.includes("guaranteed roi") || line.includes("fully autonomous business"));
});
assert.deepEqual(filesWithBadClaims, [], `Unsafe claims found in: ${filesWithBadClaims.join(", ")}`);

console.log(`Validated ${requiredFiles.length} process files.`);
