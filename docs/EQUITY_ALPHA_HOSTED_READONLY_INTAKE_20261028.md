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

## Cross-platform identity, monotonicity and proposed future staging

The existing private producer has `* -text` in its Git attributes; the hosted repo has no root Git attributes. For the six expected UTF-8 HTML/JS/CSS inputs, a difference **solely due to CRLF vs LF** is reported separately as `eol_only_equivalent_paths` and does not open a deployment change. Unknown UTF-8 or a bare CR fails closed. No trimming, JSON restructuring, CSS optimization or JavaScript rendering changes are hidden. The Excel `.xlsx` file **never** receives newline conversion or any semantic comparison. The original ZIP-member SHA256 remains byte-exact. `proposed_text_lf_or_binary_exact_sha256` records the receiving canonical-text proposal, not an applied Git blob.

The receiver now rejects regressions independently in `marketDataThrough`, `completedCloseCutoff`, `executionDate` and `signalMonth` compared with the hosted baseline, in addition to the candidate's embedded Official/Preview/benchmark/accounting contract. New source tests are synthetic only; GitHub CI has **not** run, and an unchanged candidate does not authorize a deploy.

Before future implementation of the write-capable staging receiver: verify the candidate source commit against the authenticated private repository; independently authorize rights and qualified compute receipts; compare original SHA plus explicit reviewed canonical effective bytes; stage ONLY the seven allowlisted files into a fresh protected **review branch** in the EXISTING hosted repository. For each changed text path choose, document and independently verify a deterministic Git clean/filter identity; require an exact reviewed staging diff and anti-symlink/traversal checks. A no-material-delta result creates no PR/no Pages build. A real change requires full Pages validation, Draft PR, review/explicit merge, live date/hash/chart/Excel/route check and rollback proof. A public `main` push or automatic approval is not authorized by this spec.

Do not create a permanent Windows publish clone or turn this read-only script into the operator; until accepted, old source-owned operating code remains unchanged and possible stale published clocks are honestly reported as HOLD.

## 2026-10-29 source-only isolated review staging added

Existing hosted review branch now includes `scripts/stage-equity-alpha-intake.py` and
`scripts/test-stage-equity-alpha-intake.py`. This **does not** install or authorize a
public hosted intake workflow. The new stager is a bounded *source-only candidate*
to close the gap between authenticated preflight and eventual manual Draft PR staging.

Its only permitted filesystem write is to **already tracked, existing regular files**
within the exact seven-path `public/dashboards/equity-alpha/**` allowlist, and only in
an **already-created clean isolated Git review branch** named
`review/equity-hosted-intake-*`. It refuses `main`, worktree/index dirt,
nontracked/symlink targets, unexpected changed paths and stale hosted-main commit.
`HEAD`, `origin/main` and the independently supplied pinned expected hosted
base SHA must match before writing. The upstream private Release tag is queried
via the existing scoped-source-token attestor, source tag and exact rights/compute
receipt bindings are rechecked, and the existing seven-file receiver/clock
preflight reruns. CRLF→LF canonicalization is limited to six text files, XLSX
bytes stay exact. It checks resulting Git path delta and `git diff --check`,
restoring prior review file bytes if validation fails.

There is **no** `git add`, commit, push, pull request, workflow dispatch,
publication or deployment in the stager; a no-material-delta candidate does not
write anything or request a PR. A subsequent **separately reviewed workflow**
must still perform approved private Release retrieval, independently qualify
publication rights, stage/validate the exact intended Git diff, run canonical
platform QA, open a Draft PR, obtain explicit approval, and verify live
site/clock/Excel with rollback before retiring the old publisher.

Local isolated synthetic-Git smoke tests checked one-file bounded staging, denial
on `main`, stale base and dirty worktree with inert fake attestor/receiver.
The new repo test module adds exact hosted fixture no-delta and rollback cases,
but **full repository fixture test execution, authenticated private Release,
workflow integration, human approval and hosted publication remain HOLD**.
No old Windows SlackQuant clone may be recreated to run this source.
