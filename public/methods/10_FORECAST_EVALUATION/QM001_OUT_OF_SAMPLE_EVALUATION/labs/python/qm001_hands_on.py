"""QM001 hands-on lab: development fit versus held-out forecast performance.

Run this script from any working directory. It reads the versioned synthetic data
shipped with QM001 and walks through the model-development and evaluation steps.
"""
from __future__ import annotations

from pathlib import Path
import argparse
import numpy as np
import pandas as pd

HERE = Path(__file__).resolve()
QM_ROOT = HERE.parents[2]
DATA_FILE = QM_ROOT / "figures" / "source_data" / "qm001_simulation.csv"


def rmse(actual: np.ndarray, forecast: np.ndarray) -> float:
    return float(np.sqrt(np.mean((actual - forecast) ** 2)))


def fit_ols(x: np.ndarray, y: np.ndarray) -> np.ndarray:
    return np.linalg.lstsq(x, y, rcond=None)[0]


def main() -> None:
    parser = argparse.ArgumentParser(description="Run the QM001 hands-on forecasting lab.")
    parser.add_argument(
        "--n-search",
        type=int,
        default=80,
        help="Number of candidate noise predictors to search (default: 80).",
    )
    args = parser.parse_args()
    n_search = args.n_search

    data = pd.read_csv(DATA_FILE)
    train = data["sample"].eq("training").to_numpy()
    test = data["sample"].eq("test").to_numpy()

    noise_cols = [c for c in data.columns if c.startswith("noise_") and c.endswith("_lag")]
    if not 1 <= n_search <= len(noise_cols):
        raise ValueError(f"--n-search must be between 1 and {len(noise_cols)}")
    search_cols = noise_cols[:n_search]

    y_train = data.loc[train, "actual"].to_numpy(float)
    y_test = data.loc[test, "actual"].to_numpy(float)
    lag_train = data.loc[train, "lag_y"].to_numpy(float)
    lag_test = data.loc[test, "lag_y"].to_numpy(float)

    # Step 1: fit the AR(1) benchmark on development data only.
    xa_train = np.column_stack([np.ones(train.sum()), lag_train])
    beta_a = fit_ols(xa_train, y_train)
    fit_a_train = xa_train @ beta_a
    residual_a = y_train - fit_a_train

    # Step 2: search candidate predictors using development residuals only.
    correlations = {
        name: float(np.corrcoef(data.loc[train, name].to_numpy(float), residual_a)[0, 1])
        for name in search_cols
    }
    selected = max(correlations, key=lambda name: abs(correlations[name]))

    # Step 3: fit Model B on the same development observations.
    xb_train = np.column_stack(
        [np.ones(train.sum()), lag_train, data.loc[train, selected].to_numpy(float)]
    )
    beta_b = fit_ols(xb_train, y_train)
    fit_b_train = xb_train @ beta_b

    # Step 4: apply both fixed models to the held-out targets.
    xa_test = np.column_stack([np.ones(test.sum()), lag_test])
    xb_test = np.column_stack(
        [np.ones(test.sum()), lag_test, data.loc[test, selected].to_numpy(float)]
    )
    forecast_a_test = xa_test @ beta_a
    forecast_b_test = xb_test @ beta_b

    train_a = rmse(y_train, fit_a_train)
    train_b = rmse(y_train, fit_b_train)
    test_a = rmse(y_test, forecast_a_test)
    test_b = rmse(y_test, forecast_b_test)
    train_change = 100.0 * (train_b / train_a - 1.0)
    test_change = 100.0 * (test_b / test_a - 1.0)

    summary = pd.DataFrame(
        [
            ["Development", train_a, train_b, train_change],
            ["Held-out", test_a, test_b, test_change],
        ],
        columns=["Sample", "Model A RMSE", "Model B RMSE", "Model B vs. A (%)"],
    )

    print("QM001 hands-on lab")
    print(f"Candidate predictors searched: {n_search}")
    print(f"Selected predictor: {selected}")
    print(f"Development residual correlation: {correlations[selected]:.4f}")
    print()
    print(summary.to_string(index=False, formatters={
        "Model A RMSE": lambda x: f"{x:.3f}",
        "Model B RMSE": lambda x: f"{x:.3f}",
        "Model B vs. A (%)": lambda x: f"{x:+.1f}%",
    }))
    print()
    if n_search == 80:
        print("Baseline interpretation: Model B fits the development sample better but performs worse on the held-out targets.")
    else:
        print("Exploration run: compare this result with the 80-predictor baseline rather than treating one draw as a general rule.")

    # Print the baseline metrics in a stable text format.
    if n_search == 80:
        metrics = {
            "selected_noise_predictor": int(selected.split("_")[1]),
            "train_rmse_model_a": train_a,
            "train_rmse_model_b": train_b,
            "test_rmse_model_a": test_a,
            "test_rmse_model_b": test_b,
            "train_rmse_change_b_vs_a_pct": train_change,
            "test_rmse_change_b_vs_a_pct": test_change,
        }
        for key, value in metrics.items():
            print(f"QM001_LAB_METRIC {key}={value:.15g}")


if __name__ == "__main__":
    main()
