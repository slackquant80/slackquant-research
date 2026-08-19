"""Reader-facing QM003 lab: compare clean and future-aware features."""

from __future__ import annotations
from pathlib import Path
import argparse
import numpy as np
import pandas as pd

ROOT = Path(__file__).resolve().parents[2]
DATA = ROOT / "figures" / "source_data" / "qm003_series.csv"
TRAIN_END = 220


def fit_ols(feature: np.ndarray, target: np.ndarray, train_mask: np.ndarray) -> tuple[np.ndarray, np.ndarray]:
    x = np.column_stack([np.ones(train_mask.sum()), feature[train_mask]])
    beta = np.linalg.lstsq(x, target[train_mask], rcond=None)[0]
    forecast = beta[0] + beta[1] * feature
    return beta, forecast


def rmse(actual: np.ndarray, forecast: np.ndarray) -> float:
    return float(np.sqrt(np.mean((actual - forecast) ** 2)))


def build_features(series: pd.DataFrame) -> tuple[np.ndarray, np.ndarray, dict[str, np.ndarray]]:
    x = series["x"].to_numpy(float)
    y = series["y"].to_numpy(float)
    origins = np.arange(1, len(series) - 1)
    target = y[origins + 1]
    features = {
        "clean": x[origins],
        "centered": (x[origins - 1] + x[origins] + x[origins + 1]) / 3.0,
        "future": x[origins + 1],
    }
    return origins, target, features


def evaluate(name: str, origins: np.ndarray, target: np.ndarray, feature: np.ndarray) -> dict[str, float]:
    train = origins < TRAIN_END
    test = ~train
    _, forecast = fit_ols(feature, target, train)
    return {
        "development_rmse": rmse(target[train], forecast[train]),
        "held_out_rmse": rmse(target[test], forecast[test]),
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--feature", choices=["all", "clean", "centered", "future"], default="all")
    args = parser.parse_args()

    series = pd.read_csv(DATA)
    origins, target, features = build_features(series)
    names = ["clean", "centered", "future"] if args.feature == "all" else [args.feature]

    results = {name: evaluate(name, origins, target, features[name]) for name in names}
    print("Feature comparison")
    for name in names:
        r = results[name]
        print(f"{name:>8} — development RMSE {r['development_rmse']:.3f}; held-out RMSE {r['held_out_rmse']:.3f}")
        for key, value in r.items():
            print(f"QM003_LAB_METRIC {name}_{key}={value:.12g}")

    if "clean" in results and "centered" in results:
        pct = 100.0 * (results["centered"]["held_out_rmse"] / results["clean"]["held_out_rmse"] - 1.0)
        print(f"Centered vs clean held-out RMSE: {pct:+.1f}%")
        print(f"QM003_LAB_METRIC centered_vs_clean_held_out_pct={pct:.12g}")


if __name__ == "__main__":
    main()
