from __future__ import annotations

import argparse
import math
import sys
from dataclasses import dataclass

MODEL_ID_DEFAULT = "amazon/chronos-2"
PREDICTION_LENGTH_DEFAULT = 12


@dataclass(frozen=True)
class DemoContract:
    context_n: int
    holdout_n: int
    frequency: str
    forecast_origin: str
    first_forecast_timestamp: str
    last_forecast_timestamp: str


def build_synthetic_series(n: int = 132, seed: int = 25):
    import numpy as np
    import pandas as pd

    if n < 48:
        raise ValueError("n must be at least 48")
    rng = np.random.default_rng(seed)
    t = np.arange(n, dtype=float)
    seasonal = 2.0 * np.sin(2.0 * np.pi * t / 12.0)
    target = 20.0 + 0.06 * t + seasonal + rng.normal(scale=0.55, size=n)
    timestamps = pd.date_range("2015-01-01", periods=n, freq="MS")
    return pd.DataFrame({"item_id": "synthetic_monthly", "timestamp": timestamps, "target": target})


def split_context_holdout(df, prediction_length: int):
    if not 1 <= prediction_length < len(df):
        raise ValueError("prediction_length must be positive and shorter than the series")
    context = df.iloc[:-prediction_length].copy()
    holdout = df.iloc[-prediction_length:].copy()
    return context, holdout


def contract_summary(context, holdout) -> DemoContract:
    return DemoContract(
        context_n=len(context),
        holdout_n=len(holdout),
        frequency="MS",
        forecast_origin=context["timestamp"].iloc[-1].date().isoformat(),
        first_forecast_timestamp=holdout["timestamp"].iloc[0].date().isoformat(),
        last_forecast_timestamp=holdout["timestamp"].iloc[-1].date().isoformat(),
    )


def seasonal_naive(context, prediction_length: int):
    import numpy as np

    values = context["target"].to_numpy(dtype=float)
    if len(values) < 12:
        raise ValueError("seasonal-naive baseline requires at least 12 context observations")
    return np.resize(values[-12:], prediction_length)


def rmse(y_true, y_pred) -> float:
    import numpy as np

    return float(np.sqrt(np.mean((np.asarray(y_true) - np.asarray(y_pred)) ** 2)))


def mae(y_true, y_pred) -> float:
    import numpy as np

    return float(np.mean(np.abs(np.asarray(y_true) - np.asarray(y_pred))))


def resolve_device(requested: str) -> str:
    if requested != "auto":
        return requested
    try:
        import torch
    except ImportError:
        return "cpu"
    return "cuda" if torch.cuda.is_available() else "cpu"


def run_chronos2(context, holdout, model_id: str, revision: str, device: str):
    try:
        import chronos
        from chronos import BaseChronosPipeline
    except ImportError as exc:
        raise RuntimeError(
            "Chronos runtime is not installed. Run: pip install -r requirements-chronos2.txt"
        ) from exc

    resolved_device = resolve_device(device)
    pipeline = BaseChronosPipeline.from_pretrained(
        model_id,
        revision=revision,
        device_map=resolved_device,
    )
    pred_df = pipeline.predict_df(
        context,
        prediction_length=len(holdout),
        quantile_levels=[0.1, 0.5, 0.9],
        id_column="item_id",
        timestamp_column="timestamp",
        target="target",
        freq="MS",
    )
    if "predictions" not in pred_df.columns:
        raise RuntimeError("Chronos-2 output is missing the expected 'predictions' column")
    pred = pred_df["predictions"].to_numpy(dtype=float)
    if len(pred) != len(holdout):
        raise RuntimeError(f"Chronos-2 returned {len(pred)} rows; expected {len(holdout)}")
    version = getattr(chronos, "__version__", "unknown")
    return pred_df, pred, resolved_device, version


def parse_args() -> argparse.Namespace:
    ap = argparse.ArgumentParser(description="QM025 actual Chronos-2 zero-shot inference lab")
    ap.add_argument("--model-id", default=MODEL_ID_DEFAULT)
    ap.add_argument("--revision", default="main", help="Hugging Face revision; pin a commit for governed studies")
    ap.add_argument("--device", choices=["auto", "cpu", "cuda"], default="auto")
    ap.add_argument("--prediction-length", type=int, default=PREDICTION_LENGTH_DEFAULT)
    ap.add_argument("--seed", type=int, default=25)
    ap.add_argument(
        "--check-only",
        action="store_true",
        help="Validate the offline data/information contract without loading or downloading the model",
    )
    return ap.parse_args()


def main() -> int:
    args = parse_args()
    df = build_synthetic_series(seed=args.seed)
    context, holdout = split_context_holdout(df, args.prediction_length)
    contract = contract_summary(context, holdout)
    print("QM025 retrospective-technology demo")
    print(f"context observations={contract.context_n}; holdout observations={contract.holdout_n}")
    print(f"forecast origin={contract.forecast_origin}; forecast window={contract.first_forecast_timestamp}..{contract.last_forecast_timestamp}")
    print("claim boundary=RETROSPECTIVE_TECHNOLOGY_COUNTERFACTUAL_NOT_HISTORICAL_REAL_TIME_OOS")
    print(f"model_id={args.model_id}; requested_revision={args.revision}")

    if args.check_only:
        expected_first = (context["timestamp"].iloc[-1] + __import__("pandas").offsets.MonthBegin(1)).date().isoformat()
        if expected_first != contract.first_forecast_timestamp:
            raise RuntimeError("forecast timestamp contract mismatch")
        print("QM025_CHRONOS2_CONTRACT_CHECK_PASS model_download=SKIPPED")
        return 0

    try:
        pred_df, pred, device, chronos_version = run_chronos2(
            context=context,
            holdout=holdout,
            model_id=args.model_id,
            revision=args.revision,
            device=args.device,
        )
    except Exception as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2

    baseline = seasonal_naive(context, len(holdout))
    y_true = holdout["target"].to_numpy(dtype=float)
    print(f"chronos_version={chronos_version}; device={device}")
    print(f"chronos2 RMSE={rmse(y_true, pred):.4f}; MAE={mae(y_true, pred):.4f}")
    print(f"seasonal-naive RMSE={rmse(y_true, baseline):.4f}; MAE={mae(y_true, baseline):.4f}")
    if "0.1" in pred_df.columns and "0.9" in pred_df.columns:
        covered = ((y_true >= pred_df["0.1"].to_numpy()) & (y_true <= pred_df["0.9"].to_numpy())).mean()
        print(f"toy 80% interval empirical coverage={covered:.3f}")
    print("Interpretation: one synthetic holdout is a usage demonstration, not evidence of model superiority.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
