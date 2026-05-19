# Changelog

## v0.2.0 - 2026-05-19

- Added automated version manifest and version check / bump scripts.
- Added two-phase question-flow design: pre-vital intake during measurement,
  vitals-ready payload, post-vital follow-up, and staff-review summary.
- Added API v0.2 draft fields for session state, retry/idempotency,
  measurement quality, staff-only summary visibility, handoff flags, and stable
  error behavior.
- Added runtime/API forbidden-phrase smoke check for expert-reviewed wording
  boundaries.

## v0.1.0 - 2026-05-18

- Initial synthetic-data clickable kiosk demo baseline.
- Choice-only governed question flow with staff-review summary boundary.
