from __future__ import annotations

import argparse
import numpy as np
from sklearn.linear_model import ElasticNet, Lasso, Ridge
from sklearn.metrics import mean_squared_error
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler


def make_data(n: int = 240, rho: float = 0.9, seed: int = 19):
    """Create predictors whose population Corr(x1, x2) is rho."""
    if not -0.999 < rho < 0.999:
        raise ValueError("rho must be strictly between -0.999 and 0.999")
    rng = np.random.default_rng(seed)
    z1 = rng.normal(size=n)
    z2 = rng.normal(size=n)
    x1 = z1
    x2 = rho * z1 + np.sqrt(1.0 - rho**2) * z2
    x3 = rng.normal(size=n)
    X = np.column_stack([x1, x2, x3])
    y = 0.8 * x1 + 0.8 * x2 + rng.normal(scale=1.0, size=n)
    return X, y


def fit_models(
    ridge_alpha: float = 5.0,
    lasso_alpha: float = 0.10,
    elastic_alpha: float = 0.10,
    elastic_l1_ratio: float = 0.5,
):
    return {
        "ridge": make_pipeline(StandardScaler(), Ridge(alpha=ridge_alpha)),
        "lasso": make_pipeline(StandardScaler(), Lasso(alpha=lasso_alpha, max_iter=20_000)),
        "elastic_net": make_pipeline(
            StandardScaler(),
            ElasticNet(alpha=elastic_alpha, l1_ratio=elastic_l1_ratio, max_iter=20_000),
        ),
    }


def coefficient_instability(
    X: np.ndarray,
    y: np.ndarray,
    model_name: str,
    endpoints: tuple[int, ...],
    **model_kwargs,
) -> float:
    """L2 norm of coefficient standard deviations across expanding endpoints."""
    coefs = []
    for end in endpoints:
        models = fit_models(**model_kwargs)
        model = models[model_name]
        model.fit(X[:end], y[:end])
        coefs.append(np.asarray(model[-1].coef_, dtype=float))
    coef_matrix = np.vstack(coefs)
    return float(np.linalg.norm(np.std(coef_matrix, axis=0, ddof=1)))


def run_demo(
    rho: float = 0.9,
    cut: int = 180,
    seed: int = 19,
    ridge_alpha: float = 5.0,
    lasso_alpha: float = 0.10,
    elastic_alpha: float = 0.10,
    elastic_l1_ratio: float = 0.5,
):
    X, y = make_data(rho=rho, seed=seed)
    if not 120 <= cut < len(y):
        raise ValueError("cut must leave at least 120 training observations and a non-empty holdout")
    model_kwargs = dict(
        ridge_alpha=ridge_alpha,
        lasso_alpha=lasso_alpha,
        elastic_alpha=elastic_alpha,
        elastic_l1_ratio=elastic_l1_ratio,
    )
    models = fit_models(**model_kwargs)
    endpoints = tuple(range(max(80, cut - 60), cut + 1, 20))
    if len(endpoints) < 3:
        endpoints = (cut - 40, cut - 20, cut)

    out = {
        "requested_rho": float(rho),
        "sample_corr_x1_x2": float(np.corrcoef(X[:, 0], X[:, 1])[0, 1]),
        "train_n": int(cut),
        "holdout_n": int(len(y) - cut),
        "models": {},
    }
    for name, model in models.items():
        model.fit(X[:cut], y[:cut])
        pred = model.predict(X[cut:])
        out["models"][name] = {
            "holdout_mse": float(mean_squared_error(y[cut:], pred)),
            "standardized_coefficients": np.asarray(model[-1].coef_, dtype=float).tolist(),
            "coefficient_instability": coefficient_instability(
                X, y, name, endpoints, **model_kwargs
            ),
        }
    return out


def parse_args() -> argparse.Namespace:
    ap = argparse.ArgumentParser(description="QM019 regularization hands-on lab")
    ap.add_argument("--rho", type=float, default=0.9, help="Population correlation of x1 and x2")
    ap.add_argument("--cut", type=int, default=180, help="Training/holdout split index")
    ap.add_argument("--seed", type=int, default=19)
    ap.add_argument("--ridge-alpha", type=float, default=5.0)
    ap.add_argument("--lasso-alpha", type=float, default=0.10)
    ap.add_argument("--elastic-alpha", type=float, default=0.10)
    ap.add_argument("--elastic-l1-ratio", type=float, default=0.5)
    return ap.parse_args()


def main() -> None:
    args = parse_args()
    out = run_demo(
        rho=args.rho,
        cut=args.cut,
        seed=args.seed,
        ridge_alpha=args.ridge_alpha,
        lasso_alpha=args.lasso_alpha,
        elastic_alpha=args.elastic_alpha,
        elastic_l1_ratio=args.elastic_l1_ratio,
    )
    print(f"requested rho={out['requested_rho']:.3f}")
    print(f"sample Corr(x1,x2)={out['sample_corr_x1_x2']:.4f}")
    print(f"train_n={out['train_n']} holdout_n={out['holdout_n']}")
    for name, stats in out["models"].items():
        coef = np.array(stats["standardized_coefficients"])
        print(
            f"{name}: holdout MSE={stats['holdout_mse']:.4f}; "
            f"coef={np.round(coef, 4)}; "
            f"coefficient-instability={stats['coefficient_instability']:.4f}"
        )


if __name__ == "__main__":
    main()
