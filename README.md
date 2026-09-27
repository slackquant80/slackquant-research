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

After a governed PDS sync has updated this repository, use the canonical release gate below. Do not replace the release gate with a hand-picked subset of validators.

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
