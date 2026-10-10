# PDS hosted intake — minimum operator contract

Status: **STAGED / NOT RELEASED**. This is a constrained transport path under
GIT-TOPOLOGY-001 v1.4, not a replacement for the running PDS Windows [3].
Keep the existing PDS publisher until source-vs-hosted and live-site gates pass.

## Ownership and safety

- Source: private `slackquant80/research-multiasset` generates and source-audits
  the **16** compatibility files and **3** canonical public-mirror files.
- Transport: `pds_hosted_release_bundle.py` makes a signed-by-content
  SHA256-indexed, **review-only** ZIP; it has **no publication authority**.
- Receiver: `scripts/receive-pds-hosted-intake.py --bundle <path>`
  validates manifest, exact paths, SHA256, independent receipts, Official /
  holding / market-through clocks, legacy delayed clock, provenance and
  public boundary. Without `--apply-reviewed`, **no files are written**.
- The optional `--apply-reviewed` mode must run **only in a disposable
  review branch / GitHub Actions workspace**. It calls the existing platform
  PDS compatibility binder, canonical summary binder and PDS validator,
  and updates the iframe cache key. It never refreshes a strategy or pushes.
- Standalone ADAA/F2R live-evidence files are **not included** in the PDS
  transport. Preserve them; explicitly verify their freshness and the
  cross-system publication boundary before a live release.

## One-time restricted GitHub setup

1. Give the platform repository Actions permission to create pull requests
   only for the governed PDS staging workflow, subject to normal repo review.
   Confirm the workflow's `contents: write` and `pull-requests: write`
   permissions are allowed; do not elevate access across unrelated repos.
2. Store a GitHub fine-grained token in **platform repository Actions secret**
   `PDS_SOURCE_READ_TOKEN`. Grant it **Contents: read** on the **private
   `slackquant80/research-multiasset` repository only**. Do not include it
   in a workflow log, URL, ZIP, public release or platform source.
3. The normal Pages workflow remains `deploy-pages.yml`. Staging NEVER
   calls it or pushes `main`. Normal Pages activation occurs only after
   separately approved PR merge, followed by independent live-site checks.

## Candidate transport (manual until end-to-end cutover approval)

1. On the calculation host, run the current source-owned PDS
   `pds_hosted_release_bundle.py` against the already validated export and
   canonical mirror. Use `--output-zip PDS_HOSTED_INTAKE_PROPOSAL.zip` only
   after the source-owned audit passes. The output is **not** an approval.
2. Compute independent SHA256 of the ZIP. Upload it as the single asset named
   `PDS_HOSTED_INTAKE_PROPOSAL.zip` in an explicitly named **private
   pre-release** in `research-multiasset`. Use the GitHub CLI release API
   on the calculation PC if needed; no local deployment-repo checkout,
   Git commit or Git Push is necessary. Verify the release tag and digest.
3. Manually run `pds-hosted-intake-stage-pr.yml` in `slackquant-research`
   with `source_release_tag` and the **exact independent lowercase 64-digit**
   `expected_sha256`. The workflow fetches only the pinned private asset,
   verifies the hash, applies the bundle in an isolated GitHub runner,
   executes the established `npm run validate:release` and exact changed-file
   boundary, then creates a **DRAFT PR** if changes exist.
4. Review the draft PR. Compare the same frozen source snapshot against the
   old Windows production result and the staged site: Official/Preview,
   first-business-day execution, FX paths/accounting, period/weights, HTML,
   XLSX, provider evidence and cache key. Do not merge merely because CI
   reports PASS.
5. After approval and an explicit controlled cutover, merge; GitHub Pages
   publishes from `main`. Verify the actual URL and exact live artifact
   fingerprint, including rollback readiness. Only then consider removing
   the local platform Git Push/publisher step.

### Explicitly NOT done by the current staged workflow

- No private data refresh, model execution, ADAA/F2R live-evidence transfer,
  monthly rollover simulation, public URL verification, rollback, or automatic
  merging.
- Existing local production PDS [3], public site, Google/GitHub secrets
  and system architecture are unchanged by simply adding these source files.
- The first real private-release transfer has **not** been tested; treat
  workflow success on existing public fixture as receiver/contract QA, not
  as proof of a production migration.
