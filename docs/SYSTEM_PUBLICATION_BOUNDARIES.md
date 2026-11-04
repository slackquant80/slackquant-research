# SlackQuant System Publication Boundaries

Status: **CANONICAL**  
Date: **2026-10-01**

SlackQuant is the presentation/deployment repository. Strategy and system projects own their calculations and governed public artifacts; they do not own shared SlackQuant source.

## Routine publication pattern

`system calculation -> validated public artifact -> bounded artifact sync -> npm run validate:release -> commit/push`

Reader-facing System pages remain SlackQuant-owned source. Completed-performance evidence is supplied through dedicated public-safe data artifacts; a routine evidence refresh must never copy a project-local `page.tsx`, registry, CSS, component, or editorial template into SlackQuant.

Shared repository source (`src/data/systems.ts`, `src/data/methods.ts`, shared CSS/components, platform validators, navigation, sitemap, CI) is edited directly in SlackQuant and never copied from a strategy-local handoff during a routine data/dashboard refresh.

## Current system boundaries

- **PDS:** source-owned PDS controller; PDS artifacts only. The SlackQuant `publish-pds-public.ps1` file is a compatibility delegate to that controller, not a second release implementation.
- **Equity Alpha:** routine strategy publish may replace only `public/dashboards/equity-alpha/**`; the system page and shared source are SlackQuant-owned.
- **F2R:** source-owned ML/Chronos computation remains private and independent. The first-party static public viewer at `/systems/f2r/dashboard/` reads only the existing approved F2R PUBLIC_SAFE `public_state.json` snapshot. Routine F2R publication updates only `public/data/systems/f2r/public_state.json` and, when completed history changes, the separately validated `live_evidence.json`. It must not mutate any SlackQuant page, component, stylesheet, registry, or other provider artifact. The prior standalone Streamlit deployment remains a rollback, not a second calculation authority. Use the bounded `scripts/sync-f2r-static-state.py` after the source-owned public-release review; the canonical release gate validates current Official/weights and cutoff parity.
- **ADAA:** source-owned private ADAA computation and validated PUBLIC_THIN snapshot feed a SHA256-pinned private Release, scoped platform Draft PR, independent canonical CI and GitHub Pages. The public operating dashboard is `/systems/adaa/dashboard/`; routine refreshes may modify only the reviewed static ADAA assets, not shared System-page code. The prior standalone Shiny deployment is a retained rollback until separately approved dependency/retirement gates. Its governed `PUBLIC_VIEW_SNAPSHOT` remains the distinct source for platform-owned **completed-month-only** performance evidence.
- **Scenario Stress Lab:** standalone Streamlit deployment repository. SlackQuant synchronization is a separate repository-owned editorial step after material qualified releases.

This separation prevents a dashboard refresh for one system from reverting newer platform work for another system.


## Live completed-performance evidence

The platform-owned `scripts/sync-live-system-evidence.py` imports only completed, public-safe ADAA/F2R performance evidence into `public/data/systems/<system>/live_evidence.json`. PDS publication may invoke this importer after its source-owned provider refresh because PDS is already the canonical SlackQuant release path for the integrated portfolio surface. The importer is data-only: page/editorial source remains outside the mutation boundary. Current MTD and Preview are intentionally excluded from the System-page evidence blocks.
