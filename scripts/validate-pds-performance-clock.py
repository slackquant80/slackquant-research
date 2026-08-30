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
    disclosure_path = data / "public_disclosure_state.json"

    for p in (raw_path, perf_path, cal_path, disclosure_path):
        if not p.is_file():
            raise RuntimeError(f"PDS clock gate missing artifact: {p}")

    raw = read_csv(raw_path)
    perf = read_csv(perf_path)
    cal = read_csv(cal_path)
    disclosure = json.loads(disclosure_path.read_text(encoding="utf-8"))

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
        key = (sid, signal)
        if key not in raw_map:
            raise RuntimeError(f"Performance row missing raw signal-key lineage: {key}")
        if abs(float(r["net_return"]) - raw_map[key]) > 1e-12:
            raise RuntimeError(f"Performance return differs from raw lineage: {key}")
        seen.add(key)

    if seen != set(raw_map):
        raise RuntimeError("Raw/performance lineage key sets differ")

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

    by_series = {}
    for r in raw:
        by_series.setdefault(r["series_id"], {})[r["period"]] = float(r["net_return"])
    if all(x in by_series for x in ("PDS_ACTIVE_CORE", "ADAA", "F2R")):
        c = by_series["PDS_ACTIVE_CORE"]
        a = by_series["ADAA"]
        f = by_series["F2R"]
        common = sorted(set(c) & set(a) & set(f))
        maxdiff = max(abs(c[p] - 0.5 * a[p] - 0.5 * f[p]) for p in common)
        if maxdiff > 1e-12:
            raise RuntimeError(f"PDS Active Core 50/50 raw identity failed: {maxdiff}")

    print("PDS_PERFORMANCE_CLOCK_GATE_PASS")
    print("Clock       : signal/origin month -> realized holding month +1")
    print(f"Holding max : {holding_cutoff}")
    print("Annual      : compounded by holding year")
    print("Raw lineage : preserved by signal/origin key")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
