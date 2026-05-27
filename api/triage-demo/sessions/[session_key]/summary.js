const {
  errorResult,
  getSessionSummary,
  sendResult,
  setCorsHeaders
} = require("../../../lib/triage-demo-contract");

function sessionKeyFromRequest(req) {
  if (req.query && req.query.session_key) return req.query.session_key;
  const match = String(req.url || "").match(/\/api\/triage-demo\/sessions\/([^/?#]+)\/summary/);
  return match ? decodeURIComponent(match[1]) : null;
}

module.exports = async function handler(req, res) {
  setCorsHeaders(req, res);
  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }
  if (req.method !== "GET") {
    sendResult(res, errorResult(405, {}, "method_not_allowed", "Use GET /api/triage-demo/sessions/{session_key}/summary.", { retryable: false }));
    return;
  }

  sendResult(res, getSessionSummary(sessionKeyFromRequest(req), {}));
};
