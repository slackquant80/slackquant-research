# Private Equity Alpha Release provenance gate (source review only)

Status: REVIEW-ONLY, NO GitHub Actions workflow, NO verified actual private Release, NO PR, NO deployment.
Existing repo: slackquant80/slackquant-research. Exact intended source: slackquant80/research-equity-alpha.

New `scripts/verify_equity_intake_release.py` deliberately adds a **separate** trust boundary to `scripts/receive-equity-alpha-intake.py`. The existing receiver checks transport ZIP and 7 original member hashes and current-vs-proposed market clocks. The new helper additionally checks that the private `equity-intake-*` prerelease tag, as authenticated via a scoped source GitHub App token in `GH_TOKEN`, resolves to precisely the claimed source commit, and it checks SHA256 + source commit + publication scope + market clock of the separate rights receipt and full validator compute receipt. Both receipts must be downloaded from the *same* authenticated private source Release by the future runner. It will not access or modify the source or public production files.

IMPORTANT: receipt status strings, even with matching SHA, **do not constitute independent rights permission**, and an authenticated source tag does not prove parity with the installed owner-PC operator. A human review and separately verified legal/rights authority are still mandatory; this script does not authorize publishing.

Prospective Release assets to agree on, not yet generated/uploaded: `EQUITY_ALPHA_HOSTED_INTAKE_PROPOSAL.zip`, `EQUITY_ALPHA_RIGHTS_EVIDENCE.json`, `EQUITY_ALPHA_COMPUTE_RECEIPT.json`. Receipt schema now requires matching `source_commit` and `market_data_through`; compute receipt also includes `production_authority`, `status=GLOBAL_EQUITY_ALPHA_PRODUCTION_GATE_PASS`. Producer source now requires the same rights source/clock binding.

Do not build a new permanent local source/publish clone. A future manually dispatched, no-extra-cost GitHub workflow must mint existing App read-only scoped token, verify all three assets against explicit independent SHA/source tag, run this helper plus existing receiver, then stage exactly seven public dashboard files only if material, run full platform release validation, open Draft PR and require separate approval/live hash/clock/Excel/rollback checks. No automatic merge.

Tests `scripts/test-verify-equity-intake-release.py` are 8 offline synthetic cases and executed successfully outside Github. No Actions or actual private Release verification has occurred.
