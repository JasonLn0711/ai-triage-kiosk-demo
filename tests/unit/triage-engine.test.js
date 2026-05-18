const assert = require("node:assert/strict");
const test = require("node:test");

const engine = require("../../core/triage_engine");

test("chest case ranks breathing or chest follow-up early", () => {
  const state = engine.createInitialState("chest-pain-high-bp-low-spo2");
  const ranked = engine.rankQuestions(state).slice(0, 4).map((item) => item.question.id);
  assert.ok(ranked.includes("breathing"));
  assert.ok(ranked.includes("chest-details"));
});

test("fever urinary case ranks fever and urinary context", () => {
  const state = engine.createInitialState("fever-urinary");
  const ranked = engine.rankQuestions(state).slice(0, 5).map((item) => item.question.id);
  assert.ok(ranked.includes("fever-details"));
  assert.ok(ranked.includes("urinary-details"));
});

test("staff summary preserves demo-only safety boundary", () => {
  let state = engine.createInitialState("chest-pain-high-bp-low-spo2");
  state = engine.recordAnswer(state, "breathing", "Yes");
  const summary = engine.buildStaffSummary(state);
  assert.equal(summary.requiresStaffReview, true);
  assert.match(summary.boundary, /not diagnosis/);
  assert.match(summary.forbiddenOutput, /No final ESI level/);
});
