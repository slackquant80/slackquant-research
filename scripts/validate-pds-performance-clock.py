#!/usr/bin/env python3
from __future__ import annotations

import csv
import json
from pathlib import Path


def read_csv(path: Path):
    with path.open("r", encoding="utf-8-sig", newline="") as f:
        return list(csv.DictReader(f))


def add_month(period: str, n: int = 1) -> str:
    y, m = map(int, period[:7].split("-"))
    z = y * 12 + (m - 1) + n
    return f"{z // 12:04d}-{z % 12 + 1:02d}"


def compound(vals):
    w = 1.0
    for v in vals:
        w *= 1.0 + float(v)
    return w - 1.0


def main() -> int:
    repo = Path(__file__).resolve().parents[1]
    data = repo / "public" / "data" / "systems" / "pds"
    raw_path = data / "public_core_monthly_returns.csv"
    perf_path = data / "public_core_performance_path.csv"
    cal_path = data / "public_core_calendar_returns.csv"
    weights_path = data / "public_active_core_strategy_weights.csv"
    disclosure_path = data / "public_disclosure_state.json"
    manifest_path = data / "public_export_manifest.json"

    for p in (raw_path, perf_path, cal_path, weights_path, disclosure_path, manifest_path):
        if not p.is_file():
            raise RuntimeError(f"PDS clock gate missing artifact: {p}")

    raw = read_csv(raw_path)
    perf = read_csv(perf_path)
    cal = read_csv(cal_path)
    weights = read_csv(weights_path)
    disclosure = json.loads(disclosure_path.read_text(encoding="utf-8"))
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))

    if manifest.get("performance_clock") != "REALIZED_HOLDING_MONTH":
        raise RuntimeError("Public monthly-return artifact is not declared on realized holding-month clock")
    if manifest.get("active_core_policy") != "F2R_25_ADAA_75_FIXED_ALL_HISTORY":
        raise RuntimeError("PDS public Core policy is not canonical fixed 25/75")

    # public_core_monthly_returns.period is the realized holding month. The performance
    # path preserves the source signal/origin month separately and must map it +1 into
    # that holding month; do not relabel the public monthly file as a signal-month file.
    raw_map = {(r["series_id"], r["period"]): float(r["net_return"]) for r in raw}
    holding_cutoff = str(disclosure["completed_holding_month_cutoff"])

    seen = set()
    for r in perf:
        signal = str(r["signal_period"])
        holding = str(r["holding_month"])
        sid = str(r["series_id"])
        if not signal:
            raise RuntimeError(f"Blank signal_period in performance path: {r}")
        expected_holding = add_month(signal, 1)
        if holding != expected_holding:
            raise RuntimeError(f"Holding clock mismatch {sid} {signal}: {holding} != {expected_holding}")
        if holding > holding_cutoff:
            raise RuntimeError(f"Performance path exceeds completed holding cutoff: {sid} {holding} > {holding_cutoff}")
        key = (sid, holding)
        if key not in raw_map:
            raise RuntimeError(f"Performance row missing realized holding-month lineage: {key}")
        if abs(float(r["net_return"]) - raw_map[key]) > 1e-12:
            raise RuntimeError(f"Performance return differs from realized holding-month source: {key}")
        seen.add(key)

    if seen != set(raw_map):
        raise RuntimeError("Monthly-return/performance holding-month key sets differ")

    for r in cal:
        sid = str(r["series_id"])
        year = str(r["year"])
        vals = [
            float(x["net_return"])
            for x in perf
            if x["series_id"] == sid and str(x["holding_month"]).startswith(year)
        ]
        if not vals:
            raise RuntimeError(f"Calendar row has no holding-month source rows: {sid} {year}")
        expected = compound(vals)
        if abs(expected - float(r["annual_return"])) > 1e-12:
            raise RuntimeError(f"Holding-year annual compounding mismatch: {sid} {year}")

    for i, r in enumerate(weights, start=2):
        signal = str(r["signal_period"])
        holding = str(r["holding_month"])
        if holding != add_month(signal, 1):
            raise RuntimeError(f"Core weight clock mismatch row {i}: {signal} -> {holding}")
        if abs(float(r["f2r_weight"]) - 0.25) > 1e-12 or abs(float(r["adaa_weight"]) - 0.75) > 1e-12:
            raise RuntimeError(f"Fixed 25/75 Core policy drift at row {i}")
        if r.get("weight_basis") != "FIXED_25_75_CANONICAL_ALL_HISTORY":
            raise RuntimeError(f"Core weight-basis drift at row {i}")

    print("PDS_PERFORMANCE_CLOCK_GATE_PASS")
    print("Clock       : source signal/origin month -> realized holding month +1")
    print(f"Holding max : {holding_cutoff}")
    print("Monthly file: period is realized holding month")
    print("Annual      : compounded by realized holding year")
    print("Core policy : F2R 25% / ADAA 75% fixed target history")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
