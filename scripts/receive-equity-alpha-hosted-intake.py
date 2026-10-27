#!/usr/bin/env python3
"""Read-only Equity Alpha reviewed-hosted-artifact intake. Never publishes or writes."""
from __future__ import annotations

import argparse
from datetime import date
import hashlib
import io
import json
import os
from pathlib import Path
import re
import stat
import sys
import zipfile

CONTRACT = "EQUITY_ALPHA_HOSTED_INTAKE_REVIEW_V1"
MANIFEST = "EQUITY_ALPHA_HOSTED_INTAKE_PROPOSAL.json"
FILES = frozenset({
    "index.html",
    "assets/app.js", "assets/styles.css", "assets/holdings-view.js",
    "data/dashboard_data.js", "data/live_overlay.js",
    "exports/Global_Equity_Alpha_Full_History.xlsx",
})
DIRECTORIES = {
    "assets": {"app.js", "styles.css", "holdings-view.js"},
    "data": {"dashboard_data.js", "live_overlay.js"},
    "exports": {"Global_Equity_Alpha_Full_History.xlsx"},
}
BAD_MARKERS = (
    b"c:\\sk_main", b"c:/sk_main", b"_local_private_data",
    b"_local_private_archive", b"_local_runtime", b"github_token",
    b"ghp_", b"fred_api_key", b"aws_secret_access_key",
)
MAX_FILE = 16 * 1024 * 1024
MAX_TOTAL = 32 * 1024 * 1024
SHA = re.compile(r"[0-9a-f]{64}\Z")
GIT_SHA = re.compile(r"[0-9a-f]{40}\Z")
MONTH = re.compile(r"20[0-9]{2}-(0[1-9]|1[0-2])\Z")
DAY = re.compile(r"20[0-9]{2}-[0-9]{2}-[0-9]{2}\Z")


def need(condition, message):
    if not condition:
        raise ValueError("EQUITY_INTAKE_HOLD: " + message)


def sha256(data):
    return hashlib.sha256(data).hexdigest()


def ordinary(path, directory=False):
    info = path.lstat()
    need(not stat.S_ISLNK(info.st_mode), "linked path: " + str(path))
    need(not (getattr(info, "st_file_attributes", 0)
              & getattr(stat, "FILE_ATTRIBUTE_REPARSE_POINT", 0x400)),
         "reparse point: " + str(path))
    need(stat.S_ISDIR(info.st_mode) if directory else stat.S_ISREG(info.st_mode),
         "unexpected file type: " + str(path))


def no_duplicate_pairs(items):
    result = {}
    for key, value in items:
        need(key not in result, "duplicate JSON key: " + key)
        result[key] = value
    return result


def invalid_constant(value):
    raise ValueError("nonfinite JSON value: " + value)


def parse_json(data):
    obj = json.loads(data.decode("utf-8-sig"),
                     object_pairs_hook=no_duplicate_pairs,
                     parse_constant=invalid_constant)
    need(isinstance(obj, dict), "JSON object required")
    return obj


def day(value):
    need(isinstance(value, str) and DAY.fullmatch(value), "invalid ISO day")
    date.fromisoformat(value)
    return value


def month(value):
    need(isinstance(value, str) and MONTH.fullmatch(value), "invalid ISO month")
    return value


def next_month(value):
    year, mon = map(int, month(value).split("-"))
    return f"{year + (mon == 12):04d}-{(mon % 12) + 1:02d}"


def js_assignment(data, var):
    text = data.decode("utf-8-sig")
    match = re.fullmatch(r"\s*window\." + re.escape(var)
                         + r"\s*=\s*(\{.*\})\s*;\s*", text, re.S)
    need(match is not None, "invalid JS data assignment: " + var)
    return parse_json(match.group(1).encode("utf-8"))


def files_from_dir(root):
    ordinary(root, directory=True)
    expected = set(DIRECTORIES) | {"index.html", MANIFEST}
    need({p.name for p in root.iterdir()} == expected,
         "candidate root contains missing or undeclared entries")
    records = {}
    total = 0
    for dirname, children in DIRECTORIES.items():
        folder = root / dirname
        ordinary(folder, directory=True)
        need({p.name for p in folder.iterdir()} == children,
             "undeclared entries in " + dirname)
    for rel in sorted(FILES | {MANIFEST}):
        item = root / rel
        ordinary(item)
        size = item.stat().st_size
        need(0 < size <= MAX_FILE, "missing/empty/oversize: " + rel)
        total += size
        need(total <= MAX_TOTAL, "oversize candidate aggregate")
        records[rel] = item.read_bytes()
    return records


def workbook_check(data):
    need(data[:4] == b"PK\x03\x04", "XLSX ZIP header missing")
    with zipfile.ZipFile(io.BytesIO(data)) as zf:
        entries = zf.infolist()
        names = [entry.filename for entry in entries]
        need(len(names) == len(set(names)), "duplicate XLSX member")
        need("[Content_Types].xml" in names and "xl/workbook.xml" in names,
             "XLSX required members absent")
        need(sum(item.file_size for item in entries) <= MAX_TOTAL,
             "XLSX expanded-size limit")
        for info in entries:
            name = info.filename.lower()
            need(not name.startswith("/") and "\\" not in name and
                 all(part not in ("", ".", "..") for part in name.split("/")
                     if part or not name.endswith("/")),
                 "XLSX unsafe path")
            need("vbaproject" not in name and not name.endswith((".exe", ".dll", ".js")),
                 "XLSX contains executable content")
            need(((info.external_attr >> 16) & 0o170000) not in (0o120000,),
                 "XLSX symlink member")
        need(zf.testzip() is None, "XLSX CRC failure")


def weights(rows, name):
    need(isinstance(rows, list) and bool(rows), "empty holdings: " + name)
    numbers = []
    for row in rows:
        need(isinstance(row, dict), "holdings row is not an object")
        value = row.get("targetWeight")
        need(type(value) in (int, float) and 0 <= value <= 1,
             "invalid target weight: " + name)
        numbers.append(value)
    need(abs(sum(numbers) - 1) <= 1e-9, "weights do not total 100%: " + name)


def validate_candidate(records, manifest, previous_records, allow_same_clock=False):
    need(manifest.get("contract") == CONTRACT and
         manifest.get("source_owner") == "slackquant80/research-equity-alpha" and
         manifest.get("stage") == "INTAKE_REVIEW_ONLY" and
         manifest.get("publication_authorized") is False and
         manifest.get("release_authorized") is False,
         "manifest cannot grant publication authority")
    need(isinstance(manifest.get("source_commit"), str)
         and GIT_SHA.fullmatch(manifest["source_commit"]),
         "source commit not pinned")
    entries = manifest.get("files")
    need(isinstance(entries, dict) and set(entries) == FILES,
         "manifest exact seven-file boundary")
    for rel in FILES:
        item = entries[rel]
        need(isinstance(item, dict) and set(item) == {"sha256", "bytes"} and
             type(item["bytes"]) is int and item["bytes"] == len(records[rel]) and
             isinstance(item["sha256"], str) and
             SHA.fullmatch(item["sha256"]) and
             item["sha256"] == sha256(records[rel]),
             "SHA256/byte mismatch: " + rel)
        if rel.endswith((".html", ".js", ".css")):
            low = records[rel].lower()
            # JSON encodes Windows backslashes as \\; inspect both raw and
            # normalized representations so a published path cannot evade this gate.
            normalized = low.replace(b"\\\\", b"\\")
            need(not any(marker in normalized for marker in BAD_MARKERS) and
                 re.search(rb"(?i)\b[a-z]:\\", normalized) is None,
                 "local/private/credential marker in " + rel)
    workbook_check(records["exports/Global_Equity_Alpha_Full_History.xlsx"])

    history = js_assignment(records["data/dashboard_data.js"], "EA_HISTORY_DATA")
    live = js_assignment(records["data/live_overlay.js"], "EA_LIVE_OVERLAY")
    hmeta, lmeta = history.get("meta", {}), live.get("meta", {})
    need(isinstance(hmeta, dict) and isinstance(lmeta, dict), "metadata missing")
    need(hmeta.get("status") == "PUBLIC LIVE" and
         hmeta.get("version") == "v1.5.0.93-PRODUCTION" and
         lmeta.get("status") == "PUBLIC_LIVE" and
         lmeta.get("productionAuthority") == "v1.5.0.93",
         "production version and status mismatch")
    arch = (history.get("model") or {}).get("globalProductArchitecture") or {}
    iw = arch.get("internalWeights") or {}
    need(isinstance(iw, dict) and
         all(type(iw.get(k)) in (int, float) and abs(iw[k] - v) <= 1e-12
             for k, v in (("A0", .75), ("Regional_QRET60", .20),
                           ("SelectiveAlpha_MG080_F020", .05))),
         "frozen 75/20/5 architecture mismatch")

    market = day(lmeta.get("marketDataThrough"))
    cutoff = day(lmeta.get("completedCloseCutoff"))
    execution = day(lmeta.get("executionDate"))
    signal = month(lmeta.get("signalMonth"))
    holding = month(lmeta.get("holdingMonth"))
    need(signal == cutoff[:7] and holding == next_month(signal)
         and cutoff < execution <= market
         and day(lmeta.get("mtdBaselineDate")) == cutoff,
         "Official/execution/MTD clock contract mismatch")
    need(hmeta.get("latestSignalMonth") == signal and
         hmeta.get("performanceThroughCompletedDate") == cutoff and
         hmeta.get("performanceThroughHoldingMonth") == signal,
         "history/Official clock mismatch")

    preview = live.get("preview") or {}
    pmeta = preview.get("meta") or {}
    need(pmeta.get("status") == "PREVIEW" and
         pmeta.get("previewAsOf") == market and
         pmeta.get("officialSignalMonth") == signal and
         pmeta.get("officialHoldingMonth") == holding,
         "synchronized Preview clock mismatch")
    weights(live.get("currentHoldings"), "Official")
    weights(preview.get("holdings"), "Preview")
    completed_daily = history.get("globalFinalDaily") or []
    mtd_daily = live.get("daily") or []
    need(completed_daily and mtd_daily and
         day(completed_daily[-1].get("date")) == cutoff and
         day(mtd_daily[0].get("date")) == cutoff and
         day(mtd_daily[-1].get("date")) == market,
         "daily-first completed/MTD endpoints mismatch")
    cost = live.get("currentCost") or {}
    need(cost.get("accounting") == "UNIFIED_FINAL_PORTFOLIO" and
         type(cost.get("costBpsPerSide")) in (int, float) and
         abs(cost["costBpsPerSide"] - 10) < 1e-12,
         "final portfolio cost/accounting contract mismatch")
    need(type(cost.get("finalPortfolioCost")) in (int, float) and
         type(cost.get("totalAlphaPeriodCost")) in (int, float) and
         cost["finalPortfolioCost"] >= 0 and
         abs(cost["finalPortfolioCost"] - cost["totalAlphaPeriodCost"]) <= 1e-12,
         "unified current period cost mismatch")

    html = records["index.html"].decode("utf-8-sig")
    for token in ("assets/app.js", "assets/styles.css", "assets/holdings-view.js",
                  "data/dashboard_data.js", "data/live_overlay.js"):
        need(token in html, "missing dashboard script/style binding: " + token)

    for key, value in (("market_data_through", market),
                       ("official_signal_month", signal),
                       ("holding_month", holding),
                       ("completed_close_cutoff", cutoff),
                       ("execution_date", execution),
                       ("preview_as_of", market)):
        need(manifest.get(key) == value, "manifest clock mismatch: " + key)

    prior = js_assignment(previous_records["data/live_overlay.js"],
                          "EA_LIVE_OVERLAY")
    old = prior.get("meta") or {}
    prior_market = day(old.get("marketDataThrough"))
    prior_signal = month(old.get("signalMonth"))
    need(market >= prior_market and signal >= prior_signal,
         "public market/Official clock regression")
    unchanged = all(records[k] == previous_records[k] for k in FILES)
    if market == prior_market and not unchanged:
        need(allow_same_clock, "same-clock changed assets require separate review flag")
    return {
        "status": ("NO_DELTA" if unchanged else
                   "SAME_CLOCK_REVIEW_ONLY" if market == prior_market else
                   "NEW_CLOCK_REVIEW_ONLY"),
        "market_data_through": market,
        "official_signal_month": signal,
        "holding_month": holding,
        "files": len(FILES),
        "source_commit": manifest["source_commit"],
        "publication_authorized": False,
    }


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--candidate-dir", type=Path, required=True)
    parser.add_argument("--published-root", type=Path, required=True)
    parser.add_argument("--allow-same-clock-review", action="store_true",
                        help="Allows staging review only; never a publication waiver")
    args = parser.parse_args(argv)
    try:
        incoming = files_from_dir(args.candidate_dir)
        manifest = parse_json(incoming.pop(MANIFEST))
        public = args.published_root
        ordinary(public, directory=True)
        old = {}
        for name in FILES:
            path = public / name
            ordinary(path)
            old[name] = path.read_bytes()
        result = validate_candidate(incoming, manifest, old,
                                    args.allow_same_clock_review)
    except (OSError, ValueError, UnicodeError, zipfile.BadZipFile,
            KeyError, TypeError, IndexError) as exc:
        print("EQUITY_ALPHA_HOSTED_INTAKE_REVIEW_HOLD:", exc, file=sys.stderr)
        return 2
    print("EQUITY_ALPHA_HOSTED_INTAKE_READ_ONLY_PASS",
          json.dumps(result, ensure_ascii=False, sort_keys=True))
    print("NO_GIT_WRITE_NO_SOURCE_REFRESH_NO_PUBLICATION=TRUE")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
