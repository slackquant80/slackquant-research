#!/usr/bin/env python3
from __future__ import annotations

import argparse
import csv
import importlib.util
import json
import math
from pathlib import Path

import numpy as np
import pandas as pd

SCHEMA = "SLACKQUANT_STRESS_LIVE_EVIDENCE_V1"
ARTIFACT = "MULTI_ASSET_SCENARIO_STRESS_LAB_PUBLIC_RELEASE"


def discover_public_root(research_root: Path, explicit: Path | None) -> Path:
    if explicit is not None:
        root = explicit.resolve()
        manifest = root / "public_manifest.json"
        if not manifest.is_file():
            raise FileNotFoundError(f"Stress Lab public manifest missing: {manifest}")
        return root

    preferred = (
        research_root
        / "Public replication repository"
        / "multi-asset-scenario-stress-lab"
    )
    if (preferred / "public_manifest.json").is_file():
        return preferred

    hits = []
    for manifest in research_root.rglob("public_manifest.json"):
        if manifest.parent.name != "multi-asset-scenario-stress-lab":
            continue
        try:
            payload = json.loads(manifest.read_text(encoding="utf-8-sig"))
        except Exception:
            continue
        if payload.get("artifact") == ARTIFACT:
            hits.append(manifest.parent)

    if len(hits) != 1:
        raise RuntimeError(
            "Could not uniquely resolve Stress Lab public deployment clone. "
            f"Candidates={len(hits)}. Use --stress-public-root."
        )
    return hits[0]


def load_stress_module(root: Path):
    source = root / "src" / "dashboard" / "stress_lab.py"
    if not source.is_file():
        raise FileNotFoundError(f"Stress Lab source module missing: {source}")

    spec = importlib.util.spec_from_file_location(
        "slackquant_stress_lab_public_source", source
    )
    if spec is None or spec.loader is None:
        raise RuntimeError("Could not load Stress Lab source module")

    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def pct_metrics(raw: dict) -> dict:
    keys = [
        "median_return",
        "q05_return",
        "es05",
        "q05_mdd",
        "share_le_minus5",
    ]
    out = {}
    for key in keys:
        value = float(raw[key])
        if not math.isfinite(value):
            raise RuntimeError(f"Non-finite Stress Lab metric: {key}={value}")
        out[key] = value
    return out


def build_payload(public_root: Path) -> dict:
    manifest_path = public_root / "public_manifest.json"
    manifest = json.loads(manifest_path.read_text(encoding="utf-8-sig"))

    if manifest.get("artifact") != ARTIFACT:
        raise RuntimeError(
            f"Unexpected Stress Lab artifact: {manifest.get('artifact')}"
        )

    version = str(manifest.get("canonical_version") or "")
    manifest_date = str(manifest.get("data_as_of_date") or "")
    run_id = str(manifest.get("run_id_internal_binding") or "")

    if not version or not manifest_date or not run_id:
        raise RuntimeError("Stress Lab public manifest is incomplete")

    run_dir = public_root / "08_OUTPUTS" / "shadow_runs" / run_id
    audit_path = run_dir / "run_audit.json"
    bundle_path = run_dir / "scenario_bundle.npz"

    if not audit_path.is_file() or not bundle_path.is_file():
        raise FileNotFoundError(
            f"Current Stress Lab public run is incomplete: {run_dir}"
        )

    audit = json.loads(audit_path.read_text(encoding="utf-8-sig"))
    data_as_of = str(audit["data_as_of_date"])
    horizon = int(audit["horizon_trading_days"])
    n_paths = int(audit["scenario_count_per_model"])

    if data_as_of != manifest_date:
        raise RuntimeError(
            f"Manifest/audit date mismatch: {manifest_date} vs {data_as_of}"
        )

    mod = load_stress_module(public_root)

    expected_universe = list(manifest.get("scenario_universe") or [])
    if expected_universe != list(mod.TICKERS):
        raise RuntimeError(
            f"Stress Lab universe mismatch: manifest={expected_universe}, "
            f"source={list(mod.TICKERS)}"
        )

    with np.load(bundle_path, allow_pickle=False) as bundle:
        if "B1_EWMA_T" not in bundle.files:
            raise RuntimeError("Current public bundle has no B1_EWMA_T")
        b1_paths = np.asarray(bundle["B1_EWMA_T"], dtype=np.float64)

    snapshot_rel = str(audit.get("operational_snapshot_path") or "")
    if not snapshot_rel:
        raise RuntimeError("Stress Lab audit has no operational snapshot binding")

    snapshot = public_root / snapshot_rel
    if not snapshot.is_file():
        raise FileNotFoundError(
            f"Stress Lab operational snapshot missing: {snapshot}"
        )

    df = pd.read_parquet(snapshot)
    df.index = pd.DatetimeIndex(df.index)
    df = df.sort_index().loc[: pd.Timestamp(data_as_of)]

    logcols = [f"{t}_logret" for t in mod.TICKERS]
    missing = [c for c in logcols if c not in df.columns]
    if missing:
        raise RuntimeError(
            f"Stress Lab operational snapshot missing log returns: {missing}"
        )

    history = df[logcols].dropna()
    if len(history) < max(80, horizon + 1):
        raise RuntimeError(
            f"Stress Lab operational history too short: {len(history)}"
        )

    hist_sd = history.tail(60).std(ddof=1).to_numpy(dtype=float)
    if np.any(~np.isfinite(hist_sd)) or np.any(hist_sd <= 0):
        raise RuntimeError("Stress Lab trailing-60 scale is invalid")

    b0_paths, _ = mod.bootstrap_paths(
        history.to_numpy(dtype=float),
        n_paths,
        horizon,
        mod.stable_seed(f"B0_OPERATIONAL|{run_id}"),
    )

    b1_tail = mod.tail_records(b1_paths, hist_sd)
    b0_tail = mod.tail_records(b0_paths, hist_sd)

    b1_shares = mod.family_shares(b1_tail)
    b0_shares = mod.family_shares(b0_tail)

    dominant = max(mod.FAMILIES, key=lambda f: b1_shares[f])

    weights = np.ones(len(mod.TICKERS), dtype=float) / len(mod.TICKERS)
    current_metrics = pct_metrics(mod.portfolio_metrics(b1_paths, weights))
    historical_metrics = pct_metrics(mod.portfolio_metrics(b0_paths, weights))

    family_rows = []
    for family in mod.FAMILIES:
        current = float(b1_shares[family])
        historical = float(b0_shares[family])
        family_rows.append(
            {
                "key": family,
                "label": str(mod.FAMILY_LABELS[family]),
                "current": current,
                "historical": historical,
                "gap": current - historical,
            }
        )

    # IMPORTANT:
    # run_id, internal paths, local paths and private diagnostics are intentionally
    # consumed only for binding and are never emitted to the public payload.
    return {
        "schema": SCHEMA,
        "system": "SCENARIO_STRESS_LAB",
        "sourceAuthority": "Stress Lab current public deployment artifact",
        "canonicalVersion": version,
        "dataAsOf": data_as_of,
        "horizonTradingDays": horizon,
        "scenarioCount": n_paths,
        "currentModel": "B1 EWMA-t",
        "historicalComparator": "B0 block bootstrap",
        "portfolioLabel": "Equal-weight 8 assets",
        "dominantFamily": {
            "key": dominant,
            "label": str(mod.FAMILY_LABELS[dominant]),
            "currentShare": float(b1_shares[dominant]),
            "historicalShare": float(b0_shares[dominant]),
        },
        "familyShares": family_rows,
        "distributionMetrics": {
            "current": current_metrics,
            "historical": historical_metrics,
        },
        "boundary": (
            "Current conditional scenario evidence from the reviewed public "
            "Stress Lab snapshot. Stress-family shares are generated-scenario "
            "frequencies, not calibrated event probabilities. These outputs "
            "support stress analysis, not market timing, crash prediction, "
            "portfolio optimization, or an automated trading signal."
        ),
    }


def render(payload: dict) -> str:
    return json.dumps(payload, ensure_ascii=False, indent=2) + "\n"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--research-root", type=Path, required=True)
    ap.add_argument("--repo-root", type=Path, default=Path.cwd())
    ap.add_argument("--stress-public-root", type=Path)
    ap.add_argument("--check", action="store_true")
    args = ap.parse_args()

    research_root = args.research_root.resolve()
    repo_root = args.repo_root.resolve()

    public_root = discover_public_root(
        research_root,
        args.stress_public_root,
    )

    payload = build_payload(public_root)

    target = (
        repo_root
        / "public"
        / "data"
        / "systems"
        / "scenario-stress-lab"
        / "live_evidence.json"
    )

    text = render(payload)
    current = target.read_text(encoding="utf-8") if target.exists() else None

    if current == text:
        print("SLACKQUANT_STRESS_LIVE_EVIDENCE_CURRENT")
        return 0

    rel = target.relative_to(repo_root).as_posix()
    print("SLACKQUANT_STRESS_LIVE_EVIDENCE_DELTA=" + rel)

    if args.check:
        return 10

    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(text, encoding="utf-8", newline="\n")
    print("SLACKQUANT_STRESS_LIVE_EVIDENCE_SYNC_PASS")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
