#!/usr/bin/env python3
from __future__ import annotations

import json
import math
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

DATA = ROOT / "public/data/systems/scenario-stress-lab/live_evidence.json"
PAGE = ROOT / "src/app/systems/scenario-stress-lab/page.tsx"
HELPER = ROOT / "src/lib/liveStressEvidence.ts"
SYNC = ROOT / "scripts/sync-live-stress-evidence.py"


def fail(msg: str) -> None:
    raise RuntimeError(msg)


def require_file(p: Path) -> str:
    if not p.is_file():
        fail(f"missing required Stress Lab live-evidence file: {p.relative_to(ROOT)}")
    return p.read_text(encoding="utf-8-sig")


def finite(x, label: str) -> float:
    try:
        y = float(x)
    except Exception:
        fail(f"non-numeric {label}: {x!r}")
    if not math.isfinite(y):
        fail(f"non-finite {label}: {y}")
    return y


def main() -> int:
    raw = require_file(DATA)
    page = require_file(PAGE)
    helper = require_file(HELPER)
    sync = require_file(SYNC)

    data = json.loads(raw)

    # --------------------------------------------------------
    # Identity / schema
    # --------------------------------------------------------
    if data.get("schema") != "SLACKQUANT_STRESS_LIVE_EVIDENCE_V1":
        fail("Stress Lab live-evidence schema mismatch")

    if data.get("system") != "SCENARIO_STRESS_LAB":
        fail("Stress Lab live-evidence system identity mismatch")

    for key in (
        "sourceAuthority",
        "canonicalVersion",
        "dataAsOf",
        "currentModel",
        "historicalComparator",
        "portfolioLabel",
        "boundary",
    ):
        if not str(data.get(key) or "").strip():
            fail(f"Stress Lab live-evidence missing field: {key}")

    horizon = int(data.get("horizonTradingDays") or 0)
    scenarios = int(data.get("scenarioCount") or 0)

    if horizon <= 0:
        fail("Stress Lab horizon must be positive")
    if scenarios <= 0:
        fail("Stress Lab scenario count must be positive")

    # --------------------------------------------------------
    # Family-share integrity
    # --------------------------------------------------------
    rows = data.get("familyShares")
    if not isinstance(rows, list) or len(rows) != 6:
        fail("Stress Lab must expose exactly six stress-family rows")

    keys = set()
    current_sum = 0.0
    historical_sum = 0.0

    for i, row in enumerate(rows):
        key = str(row.get("key") or "")
        label = str(row.get("label") or "")
        if not key or not label:
            fail(f"Stress family row {i} missing identity")
        if key in keys:
            fail(f"duplicate Stress family key: {key}")
        keys.add(key)

        current = finite(row.get("current"), f"{key}.current")
        historical = finite(row.get("historical"), f"{key}.historical")
        gap = finite(row.get("gap"), f"{key}.gap")

        if not (0.0 <= current <= 1.0):
            fail(f"{key}.current outside [0,1]")
        if not (0.0 <= historical <= 1.0):
            fail(f"{key}.historical outside [0,1]")
        if abs((current - historical) - gap) > 1e-10:
            fail(f"{key}.gap inconsistent")

        current_sum += current
        historical_sum += historical

    if abs(current_sum - 1.0) > 1e-8:
        fail(f"current family shares do not sum to 1: {current_sum}")
    if abs(historical_sum - 1.0) > 1e-8:
        fail(f"historical family shares do not sum to 1: {historical_sum}")

    dominant = data.get("dominantFamily") or {}
    dominant_key = str(dominant.get("key") or "")

    max_row = max(rows, key=lambda r: float(r["current"]))
    if dominant_key != str(max_row["key"]):
        fail("dominant family does not match maximum current share")

    if abs(
        finite(dominant.get("currentShare"), "dominant.currentShare")
        - float(max_row["current"])
    ) > 1e-10:
        fail("dominant current share mismatch")

    if abs(
        finite(dominant.get("historicalShare"), "dominant.historicalShare")
        - float(max_row["historical"])
    ) > 1e-10:
        fail("dominant historical share mismatch")

    # --------------------------------------------------------
    # Distribution-metric integrity
    # --------------------------------------------------------
    dist = data.get("distributionMetrics") or {}

    for side in ("current", "historical"):
        d = dist.get(side) or {}
        required = (
            "median_return",
            "q05_return",
            "es05",
            "q05_mdd",
            "share_le_minus5",
        )
        vals = {k: finite(d.get(k), f"{side}.{k}") for k in required}

        if not (0.0 <= vals["share_le_minus5"] <= 1.0):
            fail(f"{side}.share_le_minus5 outside [0,1]")

        # Expected-shortfall loss must not be less severe than the 5% quantile.
        if vals["es05"] > vals["q05_return"] + 1e-12:
            fail(f"{side}.es05 is inconsistent with q05_return")

        if vals["q05_mdd"] > 1e-12:
            fail(f"{side}.q05_mdd must be non-positive")

    # --------------------------------------------------------
    # Public-safety boundary
    # --------------------------------------------------------
    forbidden_payload_tokens = (
        "run_id",
        "runId",
        "_LOCAL_",
        "C:\\\\",
        "C:/",
        "shadow_runs",
        "operational_snapshot_path",
    )
    for token in forbidden_payload_tokens:
        if token in raw:
            fail(f"private/internal token leaked into public Stress evidence: {token}")

    # --------------------------------------------------------
    # Reader / page / importer binding
    # --------------------------------------------------------
    helper_required = (
        "SLACKQUANT_STRESS_LIVE_EVIDENCE_V1",
        "getLiveStressEvidence",
        "scenario-stress-lab",
        "live_evidence.json",
        "familyShares.length !== 6",
    )
    for token in helper_required:
        if token not in helper:
            fail(f"Stress live-evidence helper missing contract token: {token}")

    page_required = (
        'getLiveStressEvidence',
        'id="live-evidence"',
        'Live operational evidence',
        'Current Conditional Stress Snapshot',
        'Stress-family structure ? current B1 vs historical B0',
        'Open Full Stress Lab Dashboard ?',
        'id="frozen-evidence"',
        'Frozen research snapshot',
        'Published Stage-D evidence remains citable and unchanged',
    )
    for token in page_required:
        if token not in page:
            fail(f"Stress System page missing live/frozen contract token: {token}")

    sync_required = (
        "SLACKQUANT_STRESS_LIVE_EVIDENCE_V1",
        "public_manifest.json",
        "B1_EWMA_T",
        "bootstrap_paths",
        "family_shares",
        "operational_snapshot_path",
        "live_evidence.json",
    )
    for token in sync_required:
        if token not in sync:
            fail(f"Stress evidence synchronizer missing source-binding token: {token}")

    print(
        "STRESS_LIVE_EVIDENCE_VALIDATION_PASS "
        f"version={data['canonicalVersion']} "
        f"data_as_of={data['dataAsOf']} "
        f"horizon={horizon} "
        f"scenarios={scenarios} "
        f"dominant={dominant_key}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
