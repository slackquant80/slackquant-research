from __future__ import annotations

import csv
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "qm009_three_asset_case.csv"
INITIAL_WEIGHTS = [0.50, 0.30, 0.20]


def run(cost_bps: float) -> tuple[float, float, float]:
    with DATA.open(newline="", encoding="utf-8") as f:
        rows = list(csv.DictReader(f))

    weights = INITIAL_WEIGHTS[:]
    wealth = 100.0
    cumulative_full_l1 = 0.0
    cumulative_one_way = 0.0

    for row in rows:
        returns = [float(row["r_A"]), float(row["r_B"]), float(row["r_C"])]
        gross_factor = sum(w * (1 + r) for w, r in zip(weights, returns))
        pre_cost_wealth = wealth * gross_factor
        drifted = [w * (1 + r) / gross_factor for w, r in zip(weights, returns)]

        if int(row["rebalance"]) == 1:
            target = [float(row["target_A"]), float(row["target_B"]), float(row["target_C"])]
            full_l1 = sum(abs(t - d) for t, d in zip(target, drifted))
            one_way = 0.5 * full_l1
            kappa = (cost_bps / 10_000.0) * full_l1
            wealth = pre_cost_wealth * (1 - kappa)
            weights = target
            cumulative_full_l1 += full_l1
            cumulative_one_way += one_way
        else:
            wealth = pre_cost_wealth
            weights = drifted

    return wealth, cumulative_full_l1, cumulative_one_way


def main() -> None:
    cost_bps = float(sys.argv[1]) if len(sys.argv) > 1 else 10.0
    wealth, full_l1, one_way = run(cost_bps)
    print(f"cost_bps={cost_bps:g}")
    print(f"terminal_net_wealth={wealth:.6f}")
    print(f"cumulative_full_l1={full_l1:.6f}")
    print(f"cumulative_one_way={one_way:.6f}")


if __name__ == "__main__":
    main()
