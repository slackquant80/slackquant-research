# SlackQuant Research Dashboard — Application

## Status

**Public application source — current**

Next.js App Router + React + TypeScript static export.

## Current routes

```text
/
/research/
/research/adaa/
/research/protection-patience/
/research/price-macro-decision/
/research/beyond-average-accuracy/
/systems/
/systems/pds/
/systems/pds/dashboard/
/systems/adaa/
/systems/f2r/
/systems/scenario-stress-lab/
/systems/scenario-stress-lab/guide/
/methods/
/about/
```

## PDS publication boundary

The public PDS page does not read or copy the private operator dashboard. `scripts/sync-pds-public.ps1` invokes the source-owned PDS whitelist exporter and binds only its approved delayed outputs.

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
