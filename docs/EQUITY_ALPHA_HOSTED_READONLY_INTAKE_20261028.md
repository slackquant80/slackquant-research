# Equity Alpha hosted receiver — read-only preflight branch

Review-only, source-only artifact; DO NOT deploy or connect to any current GitHub Actions workflow in October 2026.
Hosted owner: slackquant80/slackquant-research. Private source: slackquant80/research-equity-alpha.

The existing public dashboard has seven exact files under public/dashboards/equity-alpha/. This review source does not stage or modify them.
scripts/receive-equity-alpha-intake.py requires an exact candidate ZIP SHA256, source-owner commit SHA and separately approved rights-evidence SHA256. It reads exactly 7 file payloads + the manifest; rejects unknown/duplicate ZIP paths, symlinks, oversized data, malformed JS, absent or inconsistent Official/Preview/ACWI/unified-cost bindings, stale candidate relative to hosted baseline, manifest payload SHA or size drift and unauthorized rights evidence hash.
Read-only output: PASS_NO_MATERIAL_DELTA or PASS_REVIEW_READY_NOT_STAGED with exactly changed file paths. A data-date equality is not treated as proof of content equality: changed bytes are reported for review; zero-delta will avoid unnecessary PR and Pages deploy.

WARNING: right-evidence-hash matching is an integrity link only, not rights approval. An external authorized reviewer still must establish license/publication entitlement. The hosted GitHub workflow and authenticated private Release download, exact source/host commit binding, materiality policy, canonical Git line-ending normalization, PR/CI/approval, rollback and exact live site verification are all unimplemented. No automatic file apply is exposed.
Production rollout prerequisites: compare actual owner-PC installed source with reviewed GitHub, preserve existing 75/20/5 strategy, Official/MTD/Preview/cost/ACWI clocks and public Excel; allowlist only 7 dashboard paths; complete protected CI in November within the zero-extra-spend budget; user approve Draft PR and inspect real hosted build before retiring any working publisher. Historical deleted deployment clone must NOT be rebuilt.

Tests: scripts/test-receive-equity-alpha-intake.py contains synthetic fixture negative cases and no market/private data, Git/network or deployment invocation.

Source branch only. No PR, merge, Actions, live changes or operating installation.
