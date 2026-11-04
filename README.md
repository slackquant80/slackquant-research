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
/systems/adaa/dashboard/
/systems/f2r/
/systems/f2r/dashboard/
/systems/equity-alpha/
/systems/scenario-stress-lab/
/methods/
```

## PDS publication boundary

PDS publication has two current reader-facing outputs. The validated PDS dashboard is transformed into a public-safe dashboard artifact, and `scripts/bind-pds-canonical-summary.py` extracts the current reader-safe operating summary used by the PDS System page and Systems index. SlackQuant publishes validated outputs from the source-owned PDS system; it does not recalculate the strategy inside the platform repository.

`src/data/pdsPublicSnapshot.ts` is retained only as a legacy compatibility binding for older delayed-output consumers. Reader-facing code under `src/app` and `src/components` must not import or depend on that module; source and built-output audits enforce this boundary.

After a governed PDS sync has updated this repository, use the canonical release gate below. Do not replace the release gate with a hand-picked subset of validators.

## F2R static public dashboard

The F2R System page links the first-party, serverless static reader at `/systems/f2r/dashboard/`. It reads the bounded, source-owned public-safe F2R snapshot `public/data/systems/f2r/public_state.json` and performs no model forecasting, portfolio computation, vendor pricing, or operating execution. The legacy deployment `https://f2r-forecast-to-rank-allocation.streamlit.app` is retained as a rollback.

After the source-owned public-release review, use `python scripts/sync-f2r-static-state.py --source <approved-public-state.json> --check` and then `--write` to update only the F2R static data artifact. Completed-performance evidence is updated through the existing importer separately; the release gate requires both completed cutoffs to agree before publishing. Other systems and shared platform code remain unchanged during routine F2R refreshes.

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

## Canonical release validation — single source of truth

There is exactly one release gate for this repository. Local pre-push validation and GitHub Actions both execute the same orchestrator: `scripts/validate-release.mjs`.

On the Windows operator machine, run:

```powershell
.\00_VALIDATE_RELEASE.cmd
```

or equivalently:

```powershell
npm.cmd run validate:release
```

GitHub Actions runs the same gate as:

```bash
npm run validate:release
```

Do **not** reconstruct the release checklist manually from individual validator commands. The canonical gate performs, in order:

1. rendered Methods navigation normalization;
2. PDS publication source audit;
3. Methods UI source audit;
4. F2R documentation source audit;
5. full platform source audit;
6. TypeScript typecheck;
7. production static build;
8. platform, Methods, and F2R built-output audits; and
9. the consolidated Systems / Methods / indexability gate against the built output.

The orchestrator also verifies that the GitHub Pages workflow delegates to `npm run validate:release` rather than maintaining a second, drifting copy of the validation sequence. A failure means **do not push/deploy** until the owning contract is reconciled.

### Validator ownership rule

System-specific mutable publication contracts belong in the corresponding system validator (for example, PDS reader-facing publication semantics in `scripts/validate-pds-publication.py`). Broad platform validators should enforce cross-system structure and safety, not become a second manually maintained release checklist. When a validator is added to the canonical release process, add it to `scripts/validate-release.mjs`; do not add a separate CI-only step.

## Build output

`npm run build` creates a static export in `out/`. That directory is reconstructible deployment output and is not canonical source.

## Automatic push guard

The canonical release gate is not dependent on an operator or assistant remembering to run it manually.

This repository installs a managed Git `pre-push` hook. Every normal `git push` automatically runs the same canonical release validation used by GitHub Actions. The hook requires a clean working tree before and after validation so the checked files exactly match the commit being pushed.

Installation is automatic through the package `prepare` script whenever `npm install` or `npm ci` runs. To install or repair it explicitly:

```powershell
npm.cmd run install:hooks
```

`00_VALIDATE_RELEASE.cmd` remains available as a manual preflight tool, but it is no longer the only local safeguard.

The local hook may be bypassed deliberately with Git's `--no-verify`; that is not an approved SlackQuant release path. Even if the local hook is bypassed or unavailable, GitHub Pages deployment remains fail-closed behind the same `npm run validate:release` CI gate.


## System publication boundary

Routine system/dashboard releases follow the repository ownership contract in `docs/SYSTEM_PUBLICATION_BOUNDARIES.md`. Shared platform source is edited in this repository; strategy projects publish only governed, bounded artifacts.
