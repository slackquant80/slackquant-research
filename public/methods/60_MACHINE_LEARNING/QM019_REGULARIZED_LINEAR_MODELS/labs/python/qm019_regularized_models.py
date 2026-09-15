from __future__ import annotations
import numpy as np
from sklearn.linear_model import ElasticNet, Lasso, Ridge
from sklearn.metrics import mean_squared_error
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler


def make_data(n: int = 240, rho: float = 0.9, seed: int = 19):
    rng = np.random.default_rng(seed)
    z = rng.normal(size=n)
    x1 = z + rng.normal(scale=np.sqrt(max(1e-12, 1-rho**2)), size=n)
    x2 = rho * z + rng.normal(scale=np.sqrt(max(1e-12, 1-rho**2)), size=n)
    x3 = rng.normal(size=n)
    X = np.column_stack([x1, x2, x3])
    y = 0.8*x1 + 0.8*x2 + rng.normal(scale=1.0, size=n)
    return X, y


def fit_models(X_train, y_train):
    return {
        "ridge": make_pipeline(StandardScaler(), Ridge(alpha=5.0)),
        "lasso": make_pipeline(StandardScaler(), Lasso(alpha=0.10, max_iter=20_000)),
        "elastic_net": make_pipeline(StandardScaler(), ElasticNet(alpha=0.10, l1_ratio=0.5, max_iter=20_000)),
    }


def run_demo():
    X, y = make_data()
    cut = 180
    models = fit_models(X[:cut], y[:cut])
    out = {}
    for name, model in models.items():
        model.fit(X[:cut], y[:cut])
        pred = model.predict(X[cut:])
        out[name] = float(mean_squared_error(y[cut:], pred))
    return out


if __name__ == "__main__":
    for name, mse in run_demo().items():
        print(f"{name}: holdout MSE={mse:.4f}")
