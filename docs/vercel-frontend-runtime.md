# Vercel Frontend Runtime

Status: production demo runtime active
Last updated: 2026-05-18

## FIRST PRINCIPLE

Scarce resource: shareable demo access without exposing private project
materials.

Vercel is used only as the frontend runtime host for the synthetic clickable
demo. It is not a clinical backend, data-processing environment, ASR service,
HIS / EMR / FHIR integration point, or patient-data store.

## Production Runtime

Current production deployment:

```text
https://ai-triage-kiosk-demo-3f64jx3kx-jasonln0711s-projects.vercel.app/
```

Demo route:

```text
https://ai-triage-kiosk-demo-3f64jx3kx-jasonln0711s-projects.vercel.app/app/triage-kiosk/
```

Vercel project:

```text
ai-triage-kiosk-demo
```

Project ID:

```text
prj_VfX4XA6EmqnUFGWxtOGELZozt4ZN
```

Latest verified deployment:

```text
dpl_AB6bEXG6SLd92BpC7CbLwjYmtxKC
```

## Deploy Scope

Vercel deploys only the `dist/` build output:

```text
dist/
  index.html
  app/
  core/
  demo/fixtures/
```

These folders must not be deployed:

```text
source/
handoff/
docs/
planning-bridge/
decisions/
data/
workstreams/
```

## Local Verification

Run before relying on a deployment:

```bash
npm run demo:ready
```

The build command is:

```bash
npm run build
```

The expected output directory is:

```text
dist
```

## Online Verification

The 2026-05-18 production deployment was checked with Vercel access:

- `/app/triage-kiosk/` returned `200 OK`;
- `/handoff/patent/2026-05-22-ai-triage-patent-disclosure-draft.md` returned
  `404 Not Found`.

## Boundary

Do not add environment variables, backend functions, API endpoints, logging, or
patient-data capture to this Vercel project unless a separate privacy,
security, clinical, and product decision clears that scope.
