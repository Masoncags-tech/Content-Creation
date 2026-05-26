import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const requiredFiles = [
  "README.md",
  "docs/workflows/short-form-video.md",
  "docs/workflows/scriptwriting.md",
  "docs/workflows/tool-routing.md",
  "docs/quality/qa-gates.md",
  "docs/quality/scorecard.md",
  "docs/reference/pilot-findings.md",
  "docs/reference/format-library.md",
  "prompts/higgsfield-marketing-studio.md",
  "prompts/voice-direction.md",
  "templates/creative-brief.md",
  "templates/script.md",
  "templates/performance-map.md",
  "templates/run-log.md",
  "templates/qa-report.md",
  "examples/clover-car-ugc/run-log.md",
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
]) {
  assert.ok(qa.includes(gate), `QA gates missing: ${gate}`);
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
]) {
  assert.ok(prompt.includes(guardrail), `Prompt library missing guardrail: ${guardrail}`);
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
