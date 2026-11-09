#!/usr/bin/env python3
"""Read-only post-Pages check for source bytes and independently published clocks.

Run after the Pages publish. Does NOT refresh models, call vendor APIs, write
files, merge PRs, or assert browser pixel/interactivity QA.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import os
import time
import urllib.error
import urllib.request
from pathlib import Path

BASE = "https://research.slackquant.com"
F2R_SOURCE = ("https://raw.githubusercontent.com/slackquant80/"
              "f2r-forecast-to-rank-allocation/main/src/dashboard/public_data/f2r_public_state.json")
PUBLIC_FILES = {
    "pds": "assets/systems/pds/PDS_PUBLIC_DASHBOARD_RECEIPT.json",
    "adaa": "assets/systems/adaa/snapshot.js",
    "adaa_evidence": "data/systems/adaa/live_evidence.json",
    "f2r": "data/systems/f2r/public_state.json",
    "f2r_evidence": "data/systems/f2r/live_evidence.json",
    "equity_live": "dashboards/equity-alpha/data/live_overlay.js",
    "equity_history": "dashboards/equity-alpha/data/dashboard_data.js",
    "equity_ui": "dashboards/equity-alpha/assets/app.js",
}


def require(valid: bool, why: str) -> None:
    if not valid:
        raise RuntimeError(why)


def digest(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def js_object(data: bytes, binding: str) -> dict:
    value = data.decode("utf-8-sig").strip()
    prefix = "window." + binding + " ="
    require(value.startswith(prefix) and value.endswith(";"), "BAD_JS_BINDING_" + binding)
    result = json.loads(value[len(prefix):-1].strip())
    require(isinstance(result, dict), "BAD_JS_OBJECT_" + binding)
    return result


def json_object(data: bytes) -> dict:
    result = json.loads(data.decode("utf-8-sig"))
    require(isinstance(result, dict), "BAD_JSON_OBJECT")
    return result


def fetch(url: str) -> bytes:
    request = urllib.request.Request(
        url, headers={"User-Agent": "SlackQuant-release-live-byte-parity/1",
                      "Cache-Control": "no-cache", "Pragma": "no-cache"})
    with urllib.request.urlopen(request, timeout=25) as response:
        require(response.status == 200, "HTTP_BAD_STATUS_" + str(response.status))
        body = response.read(33_000_001)
    require(0 < len(body) <= 33_000_000, "UNEXPECTED_PAYLOAD_SIZE")
    return body


def parity_fetch(path: str, expected: bytes, version: str) -> bytes:
    url = BASE + "/" + path + "?source_commit=" + version
    for attempt in range(4):
        try:
            found = fetch(url)
            if digest(found) == digest(expected):
                return found
            why = "LIVE_RELEASE_BYTE_DRIFT_" + path
        except (OSError, RuntimeError) as exc:
            why = "LIVE_HTTP_HOLD_" + path + ": " + str(exc)
        if attempt < 3:
            time.sleep(3)
    raise RuntimeError(why)


def audit(raw: dict[str, bytes], source_f2r: bytes) -> dict:
    pds = json_object(raw["pds"])
    adaa = js_object(raw["adaa"], "ADAA_SNAPSHOT")
    ae = json_object(raw["adaa_evidence"])
    f2r = json_object(raw["f2r"])
    fe = json_object(raw["f2r_evidence"])
    equity = js_object(raw["equity_live"], "EA_LIVE_OVERLAY")
    history = js_object(raw["equity_history"], "EA_HISTORY_DATA")

    require(pds.get("status") == "PASS" and
            pds.get("official_mark_through"), "PDS_PUBLIC_RECEIPT_HOLD")
    require(pds.get("preview_source_through") and
            pds["preview_source_through"] <= pds["official_mark_through"],
            "PDS_PREVIEW_SOURCE_CLOCK_HOLD")

    am, ac = adaa["snapshot_meta"], adaa["decision_clock"]
    require(am["validation_status"] == "PASS_RAW_PARITY" and
            am["market_data_through"] == ac["market_data_through"],
            "ADAA_PUBLIC_PARITY_OR_MARK_HOLD")
    require(ac["canonical_performance_support_end"] == ae["completedThrough"],
            "ADAA_PUBLIC_COMPLETED_EVIDENCE_DRIFT")
    adaa_rows = adaa["portfolio_state"]
    require(len(adaa_rows) == len({x["Asset"] for x in adaa_rows}) and
            abs(sum(float(x["Official_Target"]) for x in adaa_rows) - 1.0) < 1e-8,
            "ADAA_OFFICIAL_WEIGHTS_INVALID")
    require(abs(sum(float(x["Preview_Target"]) for x in adaa_rows) - 1.0) < 1e-8,
            "ADAA_PREVIEW_WEIGHTS_INVALID")

    require(raw["f2r"] == source_f2r,
            "F2R_SOURCE_AND_SLACKQUANT_FALLBACK_BYTE_DRIFT")
    official, preview, mtd = (f2r["live_state"][name]
                              for name in ("official", "preview", "current_mtd"))
    require(f2r.get("schema_version") == "2.0" and
            len(official["holdings"]) == 4 and
            len({h["asset"] for h in official["holdings"]}) == 4 and
            abs(sum(float(h["target_weight"]) for h in official["holdings"]) - 1.0) < 1e-8,
            "F2R_TOP4_OR_SCHEMA_HOLD")
    require(f2r["completed_performance"]["as_of_date"] == fe["completedThrough"],
            "F2R_PUBLIC_COMPLETED_EVIDENCE_DRIFT")
    if mtd["available"]:
        require(mtd["as_of_date"] >= fe["completedThrough"], "F2R_MTD_STALE")
    if preview["available"]:
        require(preview["market_cutoff_date"] >= fe["completedThrough"],
                "F2R_PREVIEW_STALE")

    em, hm = equity["meta"], history["meta"]
    require(em["benchmark"] == "ACWI" and
            em["signalMonth"] == hm["latestSignalMonth"] and
            em["completedCloseCutoff"] == hm["performanceThroughCompletedDate"],
            "EQUITY_SIGNAL_OR_COMPLETED_HISTORY_DRIFT")
    require(em["marketDataThrough"] >= em["completedCloseCutoff"],
            "EQUITY_MARK_PRECEDES_COMPLETED")
    require(len(equity["currentHoldings"]) > 0 and
            abs(sum(float(x["targetWeight"]) for x in equity["currentHoldings"]) - 1.0) < 1e-8,
            "EQUITY_OFFICIAL_TARGETS_INVALID")
    if equity.get("preview", {}).get("meta", {}).get("status") == "PREVIEW":
        require(abs(sum(float(x["targetWeight"]) for x in equity["preview"]["holdings"]) - 1.0) < 1e-8,
                "EQUITY_PREVIEW_TARGETS_INVALID")
    require(b"Current YTD" in raw["equity_ui"] and
            b"Completed YTD" in raw["equity_ui"],
            "EQUITY_CURRENT_COMPLETED_YTD_LABEL_HOLD")

    return {
        "status": "PASS_FOUR_SYSTEM_POSTDEPLOY_BYTE_AND_DATA_CONTRACT",
        "pds": pds["official_mark_through"],
        "adaa": am["market_data_through"],
        "f2r_current_mtd": mtd["as_of_date"] if mtd["available"] else "not published",
        "equity_alpha": em["marketDataThrough"],
        "completed": {"adaa": ae["completedThrough"],
                      "f2r": fe["completedThrough"],
                      "equity": em["completedCloseCutoff"]},
        "f2r_source_backup_exact": True,
        "scope": "HTTP bytes, clocks and source provenance; browser rendering not certified",
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", type=Path, default=Path(__file__).resolve().parents[1])
    parser.add_argument("--source-sha", default=os.getenv("GITHUB_SHA", "manual"))
    parser.add_argument("--self-test", action="store_true")
    args = parser.parse_args()

    if args.self_test:
        assert digest(b"a") != digest(b"b")
        assert js_object(b'window.TEST = {"ok": true};', "TEST")["ok"]
        try:
            js_object(b'window.BAD = {"ok":true};', "TEST")
            raise AssertionError("binding mismatch accepted")
        except RuntimeError:
            pass
        print("PASS_PUBLIC_POSTDEPLOY_AUDIT_OFFLINE_TEST")
        return 0
    raw: dict[str, bytes] = {}
    for name, path in PUBLIC_FILES.items():
        file = (args.root / "public" / path)
        require(file.is_file(), "LOCAL_PUBLIC_ASSET_NOT_FOUND_" + path)
        raw[name] = parity_fetch(path, file.read_bytes(), args.source_sha)
        print("LIVE_BYTE_SHA256_PASS", name, digest(raw[name]))
    source_f2r = fetch(F2R_SOURCE + "?audit=" + args.source_sha)
    report = audit(raw, source_f2r)
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
