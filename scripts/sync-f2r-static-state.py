#!/usr/bin/env python3
"""Data-only F2R static viewer update from an already approved PUBLIC_SAFE F2R release.

Example:
    python scripts/sync-f2r-static-state.py --source /path/to/f2r_public_state.json --check
    python scripts/sync-f2r-static-state.py --source /path/to/f2r_public_state.json --write

No models, vendor APIs, GitHub Actions, cross-system refreshes, or deployments are invoked.
The source file must first pass the source-owned release review.
"""
import argparse
import json
import math
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
TARGET = ROOT / "public/data/systems/f2r/public_state.json"
EVIDENCE = ROOT / "public/data/systems/f2r/live_evidence.json"

def validate(data, evidence):
    if data.get("schema_version") != "2.0" or data.get("system", {}).get("short_name") != "F2R":
        raise ValueError("unexpected F2R source-owned public snapshot")
    perf = data.get("completed_performance") or {}
    cutoff = evidence["completedThrough"]
    if perf.get("support_end") != perf.get("as_of_date") or cutoff != perf.get("support_end"):
        raise ValueError("F2R standalone and SlackQuant completed cutoffs differ; sync validated completed evidence first")
    official = (data.get("live_state") or {}).get("official") or {}
    holdings = official.get("holdings") or []
    if len(holdings) != 4 or len({h.get("asset") for h in holdings}) != 4:
        raise ValueError("F2R official Top-4 target invalid")
    weights = [float(h.get("target_weight", 0)) for h in holdings]
    if not all(math.isfinite(x) and x >= 0 for x in weights) or abs(sum(weights) - 1) > 1e-8:
        raise ValueError("F2R official weights do not sum to 1")
    if not official.get("signal_period", "") < official.get("holding_month", ""):
        raise ValueError("invalid F2R signal/holding clock")
    for field in ("growth_series", "drawdown_series"):
        if len(perf.get(field) or []) < 100:
            raise ValueError("incomplete F2R " + field)
    if not data.get("issued_at_utc"):
        raise ValueError("missing public issuance timestamp")
    return cutoff

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", type=Path, required=True, help="Approved source-owned public-state JSON file")
    action = parser.add_mutually_exclusive_group(required=True)
    action.add_argument("--check", action="store_true", help="Validate but never write")
    action.add_argument("--write", action="store_true", help="Validate then replace F2R artifact only")
    args = parser.parse_args()
    raw = args.source.read_bytes()
    data = json.loads(raw.decode("utf-8-sig"))
    evidence = json.loads(EVIDENCE.read_text(encoding="utf-8-sig"))
    cutoff = validate(data, evidence)
    current = json.loads(TARGET.read_text(encoding="utf-8-sig")) if TARGET.exists() else None
    if current and current.get("issued_at_utc", "") > data["issued_at_utc"]:
        raise ValueError("refusing to roll back to an older source issue timestamp")
    changed = not TARGET.exists() or TARGET.read_bytes() != raw
    if args.write and changed:
        # Preserve EXACT reviewed source bytes: the live four-system parity gate
        # compares hosted JSON to source-owned public state byte-for-byte.
        TARGET.write_bytes(raw)
    print(f"F2R_STATIC_PUBLIC_STATE_PASS mode={'WRITE' if args.write else 'CHECK'} delta={'CHANGED' if changed else 'NO_CHANGE'} completed={cutoff} issued={data['issued_at_utc']}")

if __name__ == "__main__":
    try:
        main()
    except (OSError, ValueError, KeyError) as exc:
        sys.exit("F2R_STATIC_PUBLIC_STATE_FAIL: " + str(exc))
