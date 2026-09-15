from __future__ import annotations
import numpy as np


def constrained_sum_to_one_weights(errors: np.ndarray) -> np.ndarray:
    """Minimum in-sample error-variance weights with sum(w)=1; negative weights allowed."""
    cov = np.cov(errors, rowvar=False, ddof=1)
    inv = np.linalg.pinv(cov)
    ones = np.ones(cov.shape[0])
    w = inv @ ones
    return w / (ones @ w)


def make_data(n=300, seed=24):
    rng = np.random.default_rng(seed)
    y = rng.normal(size=n)
    common = rng.normal(scale=0.4, size=n)
    errors = np.column_stack([
        common + rng.normal(scale=0.8, size=n),
        0.6*common + rng.normal(scale=0.9, size=n),
        -0.2*common + rng.normal(scale=1.0, size=n),
    ])
    forecasts = y[:, None] + errors
    return y, forecasts


def mse(y, pred):
    return float(np.mean((y-pred)**2))


def run_demo():
    y, forecasts = make_data()
    cut = 180
    train_errors = forecasts[:cut] - y[:cut, None]
    w_est = constrained_sum_to_one_weights(train_errors)
    w_eq = np.full(forecasts.shape[1], 1/forecasts.shape[1])
    test = slice(cut, None)
    return {
        "estimated_weights": w_est,
        "equal_weight_mse": mse(y[test], forecasts[test] @ w_eq),
        "estimated_weight_mse": mse(y[test], forecasts[test] @ w_est),
    }


if __name__ == "__main__":
    out = run_demo()
    print("estimated weights:", np.round(out["estimated_weights"], 4))
    print(f'equal-weight holdout MSE={out["equal_weight_mse"]:.4f}')
    print(f'estimated-weight holdout MSE={out["estimated_weight_mse"]:.4f}')
