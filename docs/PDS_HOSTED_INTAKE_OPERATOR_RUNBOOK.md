# PDS hosted intake — minimum operator contract

Status: **STAGED / NOT RELEASED**. This is a constrained transport path under
GIT-TOPOLOGY-001 v1.4, not a replacement for the running PDS Windows [3].
Keep the existing PDS publisher until source-vs-hosted and live-site gates pass.

## Ownership and safety

- Source: private `slackquant80/research-multiasset` generates and source-audits
  the **16** compatibility files and **3** canonical public-mirror files.
- Transport: `pds_hosted_release_bundle.py` makes a content-addressed,
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

## Long-lived, least-privilege GitHub authentication (preferred)

The repository-owned platform receiver can read private source Release assets
without repeatedly renewing a personal access token:

1. Create a **private GitHub App** owned by `slackquant80`; enable only
   Repository `Contents: Read-only` and required `Metadata: Read-only`.
   Disable Webhooks; no OAuth login or user authorization is needed.
2. Install that App on **Only select repositories: research-multiasset**.
   Do not grant it write permission on any repo and do not install on the
   public platform repository.
3. Generate an App private key (.pem) in the App settings. In
   `slackquant-research` Actions repository variables set
   `PDS_APP_CLIENT_ID` (the App Client ID). In the platform Actions Secrets
   set `PDS_APP_PRIVATE_KEY` to the exact multiline PEM contents.
   NEVER upload the PEM to GitHub code, chat, a release, or screenshots.
4. The manual intake workflow runs `actions/create-github-app-token@v3`
   to mint a **1-hour, Contents:read, research-multiasset-only** installation
   token for each execution. App private keys do not automatically expire,
   but must be revoked/rotated if compromised.
5. Until the first actual source Release read, ZIP hash comparison, draft PR,
   CI, and parity review pass with the App, keep the existing secret
   `PDS_SOURCE_READ_TOKEN` as a temporary fallback. **After verified
   cutover, delete the old PAT secret and revoke that PAT** to remove
   periodic manual renewal.

The GitHub App is restricted to source reads. The platform's built-in
`GITHUB_TOKEN` remains responsible for a scoped branch push and **DRAFT PR
creation only**, using repository Actions permissions. A GitHub Actions-created
PR may not automatically trigger all downstream PR events with
`GITHUB_TOKEN`; review the staged workflow's own full release validation
and explicitly check any required PR checks before approval.

## Current operational boundary (2026-10-11)

The workflow files are now present on `slackquant-research/main`, and the
previous infrastructure-only deployment CI passed. This is not a hosted
production PDS cutover. The old Windows PDS `[3]` remains operational.

The calculation host keeps the only necessary private runtime. The source
`research-multiasset` repo provides `SEND_PDS_HOSTED_INTAKE.ps1`:
its default mode is **READ ONLY**; with explicit `-Send` it takes the
already-validated 16 compatibility + 3 canonical mirror files, freezes and
audits a public-safe transport ZIP, uploads it to a **private prerelease**,
downloads it again to confirm SHA256, and triggers the manual platform
review workflow. No model refresh, local platform clone, Git Push, or public
Pages deployment is part of this source handoff.

## Candidate transport (manual until end-to-end cutover approval)

1. On the calculation host, use the source-owned, default READ-ONLY
   `SEND_PDS_HOSTED_INTAKE.ps1` to audit the current already validated
   snapshot. Only use explicit `-Send` after local audit PASS; the output
   is **not** a publication approval.
2. The source helper writes the ZIP into an OS temporary directory, creates
   the **private prerelease** in `research-multiasset`, downloads the exact
   release asset and verifies its SHA256 before triggering the receiver.
   It checks the platform's App variable/key pair or legacy PAT secret name
   but does not expose credentials.
3. After confirming App read permission and the frozen source ZIP, run
   `pds-hosted-intake-stage-pr.yml` in `slackquant-research`
   with `source_release_tag` and the **exact independent lowercase 64-digit**
   `expected_sha256`. The workflow fetches only the pinned private asset,
   verifies the hash, applies the bundle in an isolated GitHub runner,
   executes the established `npm run validate:release` and exact changed-file
   boundary, then creates a **DRAFT PR** if changes exist.
4. Review the draft PR; approve its PR-triggered CI if GitHub requests
   approval. Compare the same frozen source snapshot against the
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
