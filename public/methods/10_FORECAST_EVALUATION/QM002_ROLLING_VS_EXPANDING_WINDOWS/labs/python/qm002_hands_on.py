"""Reader-facing QM002 lab: compare expanding and rolling estimation windows."""

from __future__ import annotations
from pathlib import Path
import argparse
import numpy as np
import pandas as pd

ROOT = Path(__file__).resolve().parents[2]
DATA = ROOT / "figures" / "source_data" / "qm002_series.csv"
BREAK_T = 220
MIN_TRAIN = 80


def fit_ar1(y: np.ndarray, start: int, end_exclusive: int) -> np.ndarray:
    target = y[start + 1:end_exclusive]
    lag = y[start:end_exclusive - 1]
    x = np.column_stack([np.ones(target.size), lag])
    return np.linalg.lstsq(x, target, rcond=None)[0]


def rmse(actual: np.ndarray, forecast: np.ndarray) -> float:
    return float(np.sqrt(np.mean((actual - forecast) ** 2)))


def evaluate(window: int) -> dict[str, float]:
    y = pd.read_csv(DATA)["actual"].to_numpy(float)
    rows = []
    for t in range(MIN_TRAIN, len(y)):
        beta_e = fit_ar1(y, 0, t)
        start = max(0, t - window - 1)
        beta_r = fit_ar1(y, start, t)
        rows.append((t, y[t], beta_e[0] + beta_e[1] * y[t-1], beta_r[0] + beta_r[1] * y[t-1]))
    d = pd.DataFrame(rows, columns=["t","actual","expanding","rolling"])
    post = d["t"] >= BREAK_T
    early = (d["t"] >= BREAK_T) & (d["t"] < BREAK_T + window)
    out = {
        "window": float(window),
        "post_rmse_expanding": rmse(d.loc[post,"actual"].to_numpy(), d.loc[post,"expanding"].to_numpy()),
        "post_rmse_rolling": rmse(d.loc[post,"actual"].to_numpy(), d.loc[post,"rolling"].to_numpy()),
        "early_post_rmse_expanding": rmse(d.loc[early,"actual"].to_numpy(), d.loc[early,"expanding"].to_numpy()),
        "early_post_rmse_rolling": rmse(d.loc[early,"actual"].to_numpy(), d.loc[early,"rolling"].to_numpy()),
    }
    out["post_rolling_vs_expanding_pct"] = 100*(out["post_rmse_rolling"]/out["post_rmse_expanding"]-1)
    return out


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--window", type=int, default=60)
    args = parser.parse_args()
    if args.window < 20:
        raise SystemExit("--window must be at least 20 for this exercise.")
    out = evaluate(args.window)
    print(f"Rolling window: {args.window}")
    print(f"Post-break RMSE — expanding: {out['post_rmse_expanding']:.3f}")
    print(f"Post-break RMSE — rolling:   {out['post_rmse_rolling']:.3f}")
    print(f"Rolling vs expanding:        {out['post_rolling_vs_expanding_pct']:+.1f}%")
    for k,v in out.items():
        print(f"QM002_LAB_METRIC {k}={v:.12g}")


if __name__ == "__main__":
    main()
