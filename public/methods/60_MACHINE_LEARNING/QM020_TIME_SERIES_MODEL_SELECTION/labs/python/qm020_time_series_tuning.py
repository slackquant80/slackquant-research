from __future__ import annotations
import numpy as np
from sklearn.linear_model import Ridge
from sklearn.metrics import mean_squared_error
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler


def make_series(n=260, seed=20):
    rng = np.random.default_rng(seed)
    x = rng.normal(size=(n, 3))
    beta = np.zeros((n, 3))
    beta[:170] = [0.8, 0.2, 0.0]
    beta[170:] = [0.3, 0.7, 0.0]
    y = np.sum(x * beta, axis=1) + rng.normal(scale=0.8, size=n)
    return x, y


def expanding_splits(n, min_train=80, val_size=20, gap=0):
    end = min_train
    while end + gap + val_size <= n:
        train = np.arange(0, end)
        val = np.arange(end + gap, end + gap + val_size)
        yield train, val
        end += val_size


def select_alpha(X, y, alphas=(0.1, 1.0, 10.0, 100.0), gap=0):
    scores = {}
    for alpha in alphas:
        losses = []
        for tr, va in expanding_splits(len(y), gap=gap):
            model = make_pipeline(StandardScaler(), Ridge(alpha=alpha))
            model.fit(X[tr], y[tr])
            losses.append(mean_squared_error(y[va], model.predict(X[va])))
        scores[alpha] = float(np.mean(losses))
    return min(scores, key=scores.get), scores


def run_demo():
    X, y = make_series()
    hist_end = 220
    alpha, scores = select_alpha(X[:hist_end], y[:hist_end])
    model = make_pipeline(StandardScaler(), Ridge(alpha=alpha))
    model.fit(X[:hist_end], y[:hist_end])
    mse = mean_squared_error(y[hist_end:], model.predict(X[hist_end:]))
    return alpha, scores, float(mse)


if __name__ == "__main__":
    alpha, scores, mse = run_demo()
    print("inner scores:", scores)
    print(f"selected alpha={alpha}")
    print(f"outer holdout MSE={mse:.4f}")
