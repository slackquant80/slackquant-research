from __future__ import annotations

import argparse
import numpy as np


def constrained_sum_to_one_weights(errors: np.ndarray) -> np.ndarray:
    """Minimum in-sample error-variance weights with sum(w)=1; negative weights allowed."""
    cov = np.cov(errors, rowvar=False, ddof=1)
    inv = np.linalg.pinv(cov)
    ones = np.ones(cov.shape[0])
    w = inv @ ones
    return w / (ones @ w)


def make_controlled_forecasts(
    n: int = 300,
    seed: int = 24,
    common_scale: float = 0.4,
    idio_scales: tuple[float, float, float] = (0.8, 0.9, 1.0),
):
    """Synthetic target plus three forecast columns with controlled correlated errors.

    This is intentionally an error-covariance experiment. The forecast columns are not
    estimated from predictors; they isolate the combination-weight problem.
    """
    rng = np.random.default_rng(seed)
    y = rng.normal(size=n)
    common = rng.normal(scale=common_scale, size=n)
    loadings = np.array([1.0, 0.6, -0.2])
    idio = np.column_stack([rng.normal(scale=s, size=n) for s in idio_scales])
    errors = common[:, None] * loadings[None, :] + idio
    forecasts = y[:, None] + errors
    return y, forecasts, errors


def mse(y: np.ndarray, pred: np.ndarray) -> float:
    return float(np.mean((y - pred) ** 2))


def run_demo(
    cut: int = 180,
    window: int = 180,
    seed: int = 24,
    common_scale: float = 0.4,
):
    y, forecasts, errors = make_controlled_forecasts(seed=seed, common_scale=common_scale)
    if not 60 <= cut < len(y):
        raise ValueError("cut must leave at least 60 pre-holdout observations and a non-empty holdout")
    if not 30 <= window <= cut:
        raise ValueError("window must be between 30 and cut")

    train_start = cut - window
    train_errors = errors[train_start:cut]
    w_est = constrained_sum_to_one_weights(train_errors)
    w_eq = np.full(forecasts.shape[1], 1 / forecasts.shape[1])
    test = slice(cut, None)
    component_mse = [mse(y[test], forecasts[test, j]) for j in range(forecasts.shape[1])]
    corr = np.corrcoef(train_errors, rowvar=False)
    cov = np.cov(train_errors, rowvar=False, ddof=1)

    return {
        "cut": cut,
        "estimation_window": window,
        "common_error_scale": common_scale,
        "training_error_correlation": corr,
        "training_error_cov_condition_number": float(np.linalg.cond(cov)),
        "estimated_weights": w_est,
        "equal_weights": w_eq,
        "component_holdout_mse": component_mse,
        "equal_weight_mse": mse(y[test], forecasts[test] @ w_eq),
        "estimated_weight_mse": mse(y[test], forecasts[test] @ w_est),
    }


def parse_args() -> argparse.Namespace:
    ap = argparse.ArgumentParser(description="QM024 forecast-combination hands-on lab")
    ap.add_argument("--cut", type=int, default=180, help="Start index of the holdout")
    ap.add_argument("--window", type=int, default=180, help="Past error window used to estimate weights")
    ap.add_argument("--common-scale", type=float, default=0.4, help="Scale of the shared forecast-error shock")
    ap.add_argument("--seed", type=int, default=24)
    return ap.parse_args()


def main() -> None:
    args = parse_args()
    out = run_demo(cut=args.cut, window=args.window, seed=args.seed, common_scale=args.common_scale)
    print(f"estimation window={out['estimation_window']} holdout_start={out['cut']}")
    print("training error correlation matrix:")
    print(np.round(out["training_error_correlation"], 3))
    print(f"error-covariance condition number={out['training_error_cov_condition_number']:.3f}")
    print("component holdout MSE:", np.round(out["component_holdout_mse"], 4))
    print("equal weights:", np.round(out["equal_weights"], 4))
    print("estimated weights:", np.round(out["estimated_weights"], 4))
    print(f"equal-weight holdout MSE={out['equal_weight_mse']:.4f}")
    print(f"estimated-weight holdout MSE={out['estimated_weight_mse']:.4f}")


if __name__ == "__main__":
    main()
