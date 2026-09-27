# SlackQuant Research Dashboard — Application

## Status

**Public application source — current**

Next.js App Router + React + TypeScript static export.

## Current routes

```text
/
/about/
/research/
/research/adaa/
/research/protection-patience/
/research/price-macro-decision/
/research/beyond-average-accuracy/
/research/second-opinion-portfolio/
/systems/
/systems/pds/
/systems/pds/dashboard/
/systems/adaa/
/systems/f2r/
/systems/equity-alpha/
/systems/scenario-stress-lab/
/systems/scenario-stress-lab/guide/
/methods/
```

## PDS publication boundary

PDS publication has two current reader-facing outputs. The validated PDS dashboard is transformed into a public-safe dashboard artifact, and `scripts/bind-pds-canonical-summary.py` extracts the current reader-safe operating summary used by the PDS System page and Systems index. SlackQuant publishes validated outputs from the source-owned PDS system; it does not recalculate the strategy inside the platform repository.

`src/data/pdsPublicSnapshot.ts` is retained only as a legacy compatibility binding for older delayed-output consumers. Reader-facing code under `src/app` and `src/components` must not import or depend on that module; source and built-output audits enforce this boundary.

Use the project-root `00_PUBLISH_PDS_PUBLIC.cmd` for the governed sync + local release QA workflow.

## F2R standalone public deployment

The F2R System page links the independently deployed public dashboard at `https://f2r-forecast-to-rank-allocation.streamlit.app` and its public deployment repository at `slackquant80/f2r-forecast-to-rank-allocation`.

The deployment repository is a public-safe artifact generated from the source-owned F2R operational system. It is not a second canonical calculation or state source. The SlackQuant platform links the live surface and related evidence; it does not recalculate F2R.

## Important boundaries

- GitHub remains the public code destination.
- Public system pages document operational products, but private/operator runtimes remain separate unless a governed public output is explicitly released.
- No database, CMS, authentication, or public calculation API is included.
- No placeholder public link is rendered as a real artifact.

## Development

```powershell
npm install
npm run typecheck
npm run build
```

The production build creates the static export in `out/`. On Windows, use the repository's native Node dependencies; do not copy a platform-specific `node_modules` directory between operating systems.

## Consolidated 3-System / Methods / indexability gate

Run the source/static gate before release:

```powershell
.\scripts\validate-three-systems-surface.ps1
```

The gate checks PDS / ADAA / F2R identity and dashboard policy, System ↔ Method integration, Method article destinations and reverse usage, sitemap/canonical/robots contracts, repository semantics, stale operational wording, and the PDS public disclosure boundary. After `npm run build`, rerun with the build requirement enabled:

```powershell
.\scripts\validate-three-systems-surface.ps1 -RequireBuild
```

Use `-Live` only for the remote link gate; transient network/provider failures are reported separately from structural source failures.

## Build output

`npm run build` creates a static export in `out/`. That directory is reconstructible deployment output and is not canonical source.
