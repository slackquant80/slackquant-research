#!/usr/bin/env python3
"""Stage one Git-tree-only four-system review PR and (with explicit consent)
promote via the existing Pages workflow. No financial compute or rights issuance.
"""
import argparse
import base64
import hashlib
import os
from pathlib import Path
import tempfile
import json
import re
import subprocess
import sys
import time

HOST="slackquant80/slackquant-research"
F2R="slackquant80/f2r-forecast-to-rank-allocation"
F2R_SOURCE="src/dashboard/public_data/f2r_public_state.json"
F2R_TARGET="public/data/systems/f2r/public_state.json"
RAMA_TARGET="public/assets/systems/rama/index.html"
RAMA_RECEIVER="scripts/sync-rama-public-candidate.py"
EQUITY="public/dashboards/equity-alpha/"
EQUITY_PATHS={EQUITY+x for x in ("index.html","assets/app.js","assets/holdings-view.js",
 "assets/styles.css","data/dashboard_data.js","data/live_overlay.js",
 "exports/Global_Equity_Alpha_Full_History.xlsx")}
HEX40=re.compile(r"^[a-f0-9]{40}$")
MARKER="SLACKQUANT_ONE_PAGES_FOUR_SYSTEM_V1"

class Hold(Exception): pass

def _utf8_output(raw, operation):
    """Never let Windows cp949/locale decode GitHub's UTF-8 CLI output.

    subprocess's implicit Windows text decoder can fail inside its reader
    thread and return stdout=None, even when gh itself succeeded.
    """
    if not isinstance(raw, bytes):
        raise Hold(operation + "_OUTPUT_NOT_BYTES")
    try:
        return raw.decode("utf-8-sig", errors="strict")
    except UnicodeError as exc:
        raise Hold(operation + "_UTF8_DECODE_HOLD") from exc


def gh(path, method="GET", data=None):
    cmd=["gh","api","--method",method,path]
    if data is not None: cmd+=["--input","-"]
    stdin = (json.dumps(data, ensure_ascii=False).encode("utf-8")
             if data is not None else None)
    try:
        # Bytes mode is mandatory. Avoid implicit cp949 in all IO threads.
        p=subprocess.run(cmd, input=stdin, capture_output=True,
                         text=False,timeout=60,check=False)
    except (OSError,subprocess.TimeoutExpired) as exc:
        raise Hold("GITHUB_CLI_UNAVAILABLE") from exc
    if p.returncode:
        err = p.stderr.decode("utf-8", errors="replace") if isinstance(p.stderr,bytes) else ""
        raise Hold("GITHUB_API_HOLD "+path+" "+err[-160:])
    output=_utf8_output(p.stdout,"GITHUB_API")
    if not output.strip():
        return {}
    try:
        return json.loads(output)
    except ValueError as exc:
        raise Hold("GITHUB_API_INVALID_JSON_HOLD "+path) from exc

def pull(repo,number): return gh(f"repos/{repo}/pulls/{number}")

def files(repo,number):
    result=[]
    for page in range(1,11):
        part=gh(f"repos/{repo}/pulls/{number}/files?per_page=100&page={page}")
        result+=list(x["filename"] for x in part)
        if len(part)<100: return result
    raise Hold("PR_CHANGED_FILE_LIST_TRUNCATED")

def tree(repo,commit):
    if not HEX40.fullmatch(commit): raise Hold("INVALID_SOURCE_COMMIT_SHA")
    c=gh(f"repos/{repo}/git/commits/{commit}")
    obj=gh(f"repos/{repo}/git/trees/{c['tree']['sha']}?recursive=1")
    if obj.get("truncated"): raise Hold("SOURCE_TREE_TRUNCATED")
    return {x["path"]:x["sha"] for x in obj["tree"] if x["type"]=="blob"}

def open_pulls():
    result=gh(f"repos/{HOST}/pulls?state=open&per_page=100")
    if len(result)==100: raise Hold("OPEN_PR_CENSUS_TRUNCATED")
    return result


# A historic reviewed financial PR may be based on a slightly older main.
# Only approved SOURCE-ONLY coordinator updates may advance the shared base;
# all financial/site changes force a fresh review rather than a guessed rebase.
SOURCE_ONLY_MAIN_CHANGES={
    ".github/workflows/deploy-pages.yml",
    "scripts/four-system-release-readiness.py",
    "scripts/one-click-four-system-release.py",
    "scripts/test-one-click-four-system-release.py",
    "scripts/test-four-system-release-readiness.py",
    "scripts/sync-f2r-static-state.py",
    # Reviewed source-only standing policy + receiver verification updates.
    "scripts/equity-standing-publication-policy.json",
    "scripts/test-equity-standing-policy.py",
    "scripts/verify_equity_intake_release.py",
    "scripts/sync-rama-public-candidate.py",
}
def source_base_compatible(source_base,current_main,source_paths):
    if source_base==current_main: return True
    if not HEX40.fullmatch(source_base) or not HEX40.fullmatch(current_main):
        raise Hold("SOURCE_BASE_SHA_INVALID")
    delta=gh(f"repos/{HOST}/compare/{source_base}...{current_main}")
    if (delta.get("behind_by")!=0 or delta.get("status")!="ahead" or
        delta.get("too_large") is True):
        raise Hold("SOURCE_PR_BASE_NOT_ANCESTOR_OF_MAIN")
    changed={x["filename"] for x in delta.get("files",[])}
    if not changed or not changed.issubset(SOURCE_ONLY_MAIN_CHANGES) or \
       changed.intersection(source_paths):
        raise Hold("MATERIAL_MAIN_CHANGE_SINCE_SOURCE_REVIEW")
    return True


def pinned_public_file(repo, path, commit):
    """Require exact Git blob identity, never a mutable working-tree file."""
    item=gh(f"repos/{repo}/contents/{path}?ref={commit}")
    if not HEX40.fullmatch(item.get("sha","")):
        raise Hold("SOURCE_OWNED_PUBLIC_FILE_PIN_UNAVAILABLE: "+path)
    # Derived RAMA history will eventually exceed the Contents API's 1 MB
    # inline payload limit. Preserve exact Git blob identity, not a download URL.
    payload=item if item.get("encoding")=="base64" else gh(f"repos/{repo}/git/blobs/{item['sha']}")
    if payload.get("encoding")!="base64":
        raise Hold("SOURCE_OWNED_PUBLIC_FILE_PIN_UNAVAILABLE: "+path)
    data=base64.b64decode(payload["content"])
    actual=hashlib.sha1(b"blob "+str(len(data)).encode()+b"\x00"+data).hexdigest()
    if actual!=item["sha"]:
        raise Hold("SOURCE_OWNED_PUBLIC_GIT_BLOB_MISMATCH: "+path)
    return data


def validated_f2r_bytes(raw, platform_main):
    """Run the canonical sync-f2r-static-state.py --check and --write offline.
    Temp directory only. Retain source exact bytes for Pages postdeploy parity.
    """
    script="scripts/sync-f2r-static-state.py"
    state=F2R_TARGET
    evidence="public/data/systems/f2r/live_evidence.json"
    with tempfile.TemporaryDirectory(prefix="sq_f2r_release_") as work:
        root=Path(work)
        for name in (script,state,evidence):
            target=root/name
            target.parent.mkdir(parents=True,exist_ok=True)
            target.write_bytes(pinned_public_file(HOST,name,platform_main))
        approved=root/"source-approved-f2r-public-state.json"
        approved.write_bytes(raw)
        for action in ("--check","--write"):
            try:
                result=subprocess.run([sys.executable,str(root/script),"--source",
                     str(approved),action],capture_output=True,text=False,
                     cwd=root,timeout=35,check=False)
            except (OSError,subprocess.TimeoutExpired) as exc:
                raise Hold("F2R_OFFICIAL_SOURCE_SYNC_UNAVAILABLE") from exc
            if result.returncode:
                # Failure diagnostics are best effort; never skip failing validation.
                details=(result.stderr or result.stdout or b"")
                reason=details.decode("utf-8",errors="replace") if isinstance(details,bytes) else ""
                raise Hold("F2R_OFFICIAL_"+action[2:].upper()+"_HOLD: "+reason[-220:])
        output=(root/state).read_bytes()
        if output!=raw:
            raise Hold("F2R_OFFICIAL_OUTPUT_DIFFERS_FROM_APPROVED_SOURCE_BYTES")
        return output



def pinned_git_blob_bytes(repo, sha):
    if not HEX40.fullmatch(sha):
        raise Hold("PUBLIC_CANDIDATE_BLOB_SHA_INVALID")
    item=gh(f"repos/{repo}/git/blobs/{sha}")
    if item.get("encoding")!="base64" or item.get("sha")!=sha:
        raise Hold("PUBLIC_CANDIDATE_GIT_BLOB_UNAVAILABLE")
    raw=base64.b64decode(item["content"])
    if hashlib.sha1(b"blob "+str(len(raw)).encode()+b"\x00"+raw).hexdigest()!=sha:
        raise Hold("PUBLIC_CANDIDATE_GIT_BLOB_CHANGED")
    return raw


def assert_common_market_clock(pds_tree, eq_tree, f2r_bytes):
    """Fail before PR creation when source-owned approved snapshots have stale clocks."""
    pds_path="public/data/systems/pds/PDS_PUBLIC_BINDING_RECEIPT.json"
    pds_mark_path="public/assets/systems/pds/PDS_PUBLIC_DASHBOARD_RECEIPT.json"
    equity_path=EQUITY+"data/live_overlay.js"
    if (pds_path not in pds_tree or pds_mark_path not in pds_tree
        or equity_path not in eq_tree):
        raise Hold("REQUIRED_DATED_PUBLIC_RECEIPT_MISSING")
    try:
        pds=json.loads(pinned_git_blob_bytes(HOST,pds_tree[pds_path]))
        pds_mark=json.loads(pinned_git_blob_bytes(HOST,pds_tree[pds_mark_path]))
        f2r=json.loads(f2r_bytes)
        ea=pinned_git_blob_bytes(HOST,eq_tree[equity_path]).decode("utf-8-sig").strip()
        match=re.fullmatch(r"window\.EA_LIVE_OVERLAY\s*=\s*(\{.*\})\s*;",ea,re.S)
        if not match: raise Hold("EQUITY_PUBLIC_OVERLAY_INVALID")
        equity=json.loads(match.group(1))
        if (pds.get("status")!="PDS_SLACKQUANT_PUBLIC_BINDING_PASS"
            or pds_mark.get("status")!="PASS"):
            raise Hold("PDS_SOURCE_RECEIPTS_NOT_PASS")
        if equity.get("meta",{}).get("benchmark")!="ACWI":
            raise Hold("EQUITY_PUBLIC_BENCHMARK_INVALID")
        mtd=f2r["live_state"]["current_mtd"]
        preview=f2r["live_state"]["preview"]
        if not mtd.get("available") or not preview.get("available"):
            raise Hold("F2R_CURRENT_OR_PREVIEW_NOT_AVAILABLE")
        # PDS public_as_of_date is the KST PUBLICATION DATE (2026-11-11),
        # NOT the last completed NYSE close. Its immutable source-owned
        # dashboard receipt official_mark_through is the MARKET CLOCK (11-10).
        clocks={"PDS":pds_mark["official_mark_through"],
                "PDS_PUBLIC_AS_OF":pds["public_as_of_date"],
                "F2R_MTD":mtd["as_of_date"],
                "F2R_PREVIEW":preview["market_cutoff_date"],
                "EQUITY":equity["meta"]["marketDataThrough"]}
        for name, value in clocks.items():
            if not isinstance(value,str) or not re.fullmatch(
                    r"20\d{2}-\d{2}-\d{2}",value):
                raise Hold("PUBLIC_SOURCE_CLOCK_INVALID_"+name)
        floor=clocks["PDS"]
        if clocks["PDS_PUBLIC_AS_OF"] < floor:
            raise Hold("PDS_PUBLICATION_DATE_PRECEDES_SOURCE_MARK")
        for name in ("F2R_MTD","F2R_PREVIEW","EQUITY"):
            if clocks[name]<floor:
                raise Hold("PUBLIC_SOURCE_STALE_"+name+"_BELOW_PDS_"+floor)
    except (KeyError,ValueError,UnicodeError,TypeError) as exc:
        raise Hold("PUBLIC_SOURCE_CLOCK_PARSE_HOLD") from exc
    return clocks



# These are the ONLY public paths the multi-system release may overlay.
PDS_MARK="public/assets/systems/pds/PDS_PUBLIC_DASHBOARD_RECEIPT.json"
PDS_BINDING="public/data/systems/pds/PDS_PUBLIC_BINDING_RECEIPT.json"
ADAA_SNAPSHOT="public/assets/systems/adaa/snapshot.js"
EQUITY_OVERLAY=EQUITY+"data/live_overlay.js"


def _review_kind(title):
    """Categorize source-owned staged artifacts, never historical PR numbers."""
    if title.startswith("Review PDS hosted intake:"):
        return ("pds",)
    if title.startswith("ADAA ") and "Thin source candidate" in title:
        return ("adaa",)
    if title.startswith("Combined PDS + ADAA "):
        return ("pds","adaa")
    if title.startswith("Review Equity Alpha seven-file hosted candidate:"):
        return ("equity",)
    return ()


def _market_clock_from_blob(path, blob):
    if path == PDS_MARK:
        data=json.loads(pinned_git_blob_bytes(HOST,blob))
        if data.get("status")!="PASS":
            raise Hold("PDS_REVIEW_RECEIPT_NOT_PASS")
        return data.get("official_mark_through","")
    if path == ADAA_SNAPSHOT:
        raw=pinned_git_blob_bytes(HOST,blob).decode("utf-8-sig").strip()
        matched=re.fullmatch(r"window\.ADAA_SNAPSHOT\s*=\s*(\{.*\})\s*;",raw,re.S)
        if not matched:
            raise Hold("ADAA_REVIEW_SNAPSHOT_UNREADABLE")
        obj=json.loads(matched.group(1))
        meta=obj.get("snapshot_meta",{})
        if (meta.get("validation_status")!="PASS_RAW_PARITY" or
            meta.get("canonical_calculation_source")!="CANONICAL_ADAA_CALCULATION_AUTHORITY" or
            meta.get("final_decision_asset_count")!=18):
            raise Hold("ADAA_REVIEW_SOURCE_PARITY_HOLD")
        return meta.get("market_data_through","")
    if path == EQUITY_OVERLAY:
        data=pinned_git_blob_bytes(HOST,blob).decode("utf-8-sig").strip()
        matched=re.fullmatch(r"window\.EA_LIVE_OVERLAY\s*=\s*(\{.*\})\s*;",data,re.S)
        if not matched:
            raise Hold("EQUITY_REVIEW_OVERLAY_UNREADABLE")
        obj=json.loads(matched.group(1))
        if obj.get("meta",{}).get("benchmark")!="ACWI":
            raise Hold("EQUITY_REVIEW_BENCHMARK_HOLD")
        return obj["meta"].get("marketDataThrough","")
    raise Hold("UNRECOGNIZED_MARKET_CLOCK_FILE")


def _accepted_review_paths(kind, changed):
    if not changed:
        return False
    if kind=="pds":
        return (PDS_MARK in changed and PDS_BINDING in changed and
                all(x.startswith(("public/data/systems/pds/",
                                  "public/assets/systems/pds/",
                                  "src/app/systems/pds/",
                                  "src/data/pds")) for x in changed))
    if kind=="adaa":
        return ADAA_SNAPSHOT in changed and all(
            x.startswith("public/assets/systems/adaa/") for x in changed)
    if kind=="equity":
        return EQUITY_OVERLAY in changed and set(changed).issubset(EQUITY_PATHS)
    return False


def _review_public_snapshot(kind, pr, current):
    """Source PR is an exact allowlisted overlay, not its full historical tree.

    An old open PR whose file blobs are ALREADY on main is inert, regardless
    of how many new releases occurred since its original PR base.
    A materially conflicting source-base target is never silently overwritten.
    """
    if pr.get("state")!="open" or pr["base"].get("ref")!="main":
        raise Hold("SOURCE_REVIEW_NOT_OPEN_ON_MAIN")
    if kind in ("pds","adaa") and (pr.get("user") or {}).get("login")!="github-actions[bot]":
        # Existing source-owned receivers create these reviews, not arbitrary
        # manually titled PRs. Never promote unknown HTML or portfolio data.
        return None
    modified=gh(f"repos/{HOST}/pulls/{pr['number']}/files?per_page=100")
    if len(modified)>=100:
        raise Hold("SOURCE_REVIEW_FILE_LIST_TRUNCATED")
    paths={f["filename"] for f in modified
           if f.get("status") in ("modified","added")}
    if len(paths)!=len(modified) or not _accepted_review_paths(kind,paths):
        return None
    proposed=tree(HOST,pr["head"]["sha"])
    if any(x not in proposed for x in paths):
        raise Hold("SOURCE_REVIEW_DELETED_BLOB_HOLD")
    desired={x:proposed[x] for x in paths}
    delta={x:v for x,v in desired.items() if current.get(x)!=v}
    if not delta:
        return None
    stamp_path={"pds":PDS_MARK,"adaa":ADAA_SNAPSHOT,
                "equity":EQUITY_OVERLAY}.get(kind)
    if stamp_path:
        incoming=_market_clock_from_blob(stamp_path,desired[stamp_path])
        existing=_market_clock_from_blob(stamp_path,current[stamp_path])
        if not re.fullmatch(r"20\d{2}-\d{2}-\d{2}",incoming):
            raise Hold("SOURCE_REVIEW_MARKET_CLOCK_INVALID")
        if incoming<existing:
            # Old unmerged draft from a previous period is not a new candidate.
            return None
    else:
        incoming=""
    # A PR based on an earlier publication is acceptable only if none of
    # the files it proposes to CHANGE were modified since its own base.
    source_base=tree(HOST,pr["base"]["sha"])
    for path in delta:
        if current.get(path)!=source_base.get(path):
            if kind=="adaa" or (kind in ("pds","equity") and incoming<=existing):
                # A superseded open review with the same/older MARKET clock
                # cannot override newly published blobs. Historical PRs #69,
                # #73, #83 must not block validated current PDS PR #91.
                # A genuinely later-clock review with changed target stays HOLD.
                return None
            raise Hold("SOURCE_REVIEW_TARGET_CHANGED_SINCE_BASE: "+path)
    if kind=="equity":
        if (pr.get("user") or {}).get("login")!="github-actions[bot]" or \
           "Exact source prerelease:" not in (pr.get("body") or "") or \
           "ZIP SHA256:" not in (pr.get("body") or ""):
            raise Hold("EQUITY_REVIEW_INTAKE_PROVENANCE_HOLD")
    return {"pr":pr["number"],"head":pr["head"]["sha"],
            "clock":incoming,"delta":delta,"paths":sorted(paths),
            "created_at":pr.get("created_at") or ""}


def reviewed_overlay(kind, current, reviews):
    """Use current source-owned vintage, never combine distinct same-close data.

    PDS/ADAA bot reviews are full snapshots. Repeated owner refreshes can
    legitimately re-vintage Yahoo adjusted closes during the same session.
    Supersede earlier bot-created source reviews ONLY at the same dated
    market close, with the same reviewed path set and source provenance;
    retain old PRs as unmerged evidence. Equity rights remain stricter.
    """
    choices=[]
    for item in reviews:
        if kind not in _review_kind(item.get("title","")):
            continue
        pr=pull(HOST,item["number"])
        review=_review_public_snapshot(kind,pr,current)
        if review:
            choices.append(review)
    if not choices:
        return {},[]
    newest=max(x["clock"] for x in choices)
    fresh=[x for x in choices if x["clock"]==newest]
    if len(fresh)>1 and kind in ("pds","adaa"):
        paths={tuple(x["paths"]) for x in fresh}
        if len(paths)!=1:
            raise Hold("SOURCE_REVIEW_SUPERSESSION_PATH_SET_CHANGED_"+kind.upper())
        # GitHub PR timestamps are server-owned; PR number is a stable tie-breaker.
        # Never mix rows/receipts from different immutable source revisions.
        chosen=max(fresh,key=lambda x:(x["created_at"],x["pr"]))
        return dict(chosen["delta"]),[{"pr":chosen["pr"],"head":chosen["head"],
            "superseded_prs":sorted(x["pr"] for x in fresh if x is not chosen)}]
    combined={}
    for x in fresh:
        for path,sha in x["delta"].items():
            if path in combined and combined[path]!=sha:
                raise Hold("CONFLICTING_CURRENT_REVIEW_CANDIDATES: "+path)
            combined[path]=sha
    # Older candidates for the same asset at earlier dates are ignored only
    # when they cannot replace current data with an obsolete market snapshot.
    if kind=="equity" and any(x["delta"]!=fresh[0]["delta"] for x in fresh):
        raise Hold("MULTIPLE_EQUITY_CANDIDATES_NOT_IDENTICAL")
    return combined,[{"pr":x["pr"],"head":x["head"]} for x in fresh]


def latest_merged_f2r_source(main_blob):
    """Source main must be linked to a merged, reviewed F2R public-state PR.

    Existing approved bytes can be reused without a new PR. For new bytes,
    require source-owner PR history; never accept arbitrary unreviewed main.
    """
    recent=gh(f"repos/{F2R}/pulls?state=closed&per_page=100")
    if len(recent)>=100:
        raise Hold("F2R_MERGED_REVIEW_CENSUS_TRUNCATED")
    for item in recent:
        if not item.get("merged_at"):
            continue
        number=item["number"]
        if F2R_SOURCE not in files(F2R,number):
            continue
        proposed=tree(F2R,item["head"]["sha"])
        if proposed.get(F2R_SOURCE)==main_blob:
            return number
    raise Hold("F2R_LATEST_SOURCE_PUBLIC_STATE_NOT_APPROVED")



# Only the existing source-owner bot intake and its exact independent CI may
# advance F2R main under the operator's explicit routine release confirmation.
F2R_REVIEW_FILES={F2R_SOURCE,"release_manifest.json",
                  "src/dashboard/static/release_identity.json"}

def f2r_market_floor(raw):
    try:
        state=json.loads(raw)
        live=state["live_state"]
        mtd=live["current_mtd"]
        preview=live["preview"]
        dates=(mtd["as_of_date"],preview["market_cutoff_date"])
        if not mtd["available"] or not preview["available"]:
            return ""
        if not all(isinstance(d,str) and re.fullmatch(r"20\d{2}-\d{2}-\d{2}",d)
                   for d in dates):
            raise ValueError("invalid F2R clock")
        return min(dates)
    except (KeyError,ValueError,TypeError) as exc:
        raise Hold("F2R_SOURCE_CLOCK_PARSE_HOLD") from exc

def f2r_exact_independent_ci(head, branch):
    response=gh(f"repos/{F2R}/actions/workflows/f2r-public-review.yml/runs"
                f"?event=workflow_dispatch&head_sha={head}&per_page=100")
    runs=response.get("workflow_runs",[])
    if len(runs)>=100 or response.get("total_count",0)>len(runs):
        raise Hold("F2R_INDEPENDENT_CI_CENSUS_TRUNCATED")
    exact=[x for x in runs if x.get("head_sha")==head
           and x.get("head_branch")==branch
           and x.get("event")=="workflow_dispatch"
           and x.get("path")==".github/workflows/f2r-public-review.yml"
           and (x.get("actor") or {}).get("login")=="github-actions[bot]"]
    if not exact:
        return False
    if any(x.get("status")!="completed" for x in exact):
        return False
    latest=max(exact,key=lambda x:(x.get("run_number",0),x.get("run_attempt",0)))
    if latest.get("conclusion")!="success":
        raise Hold("F2R_INDEPENDENT_CI_FAILED")
    jobs=gh(f"repos/{F2R}/actions/runs/{latest['id']}/jobs?filter=latest&per_page=100")
    rows=jobs.get("jobs",[])
    if len(rows)>=100 or jobs.get("total_count",0)>len(rows):
        raise Hold("F2R_INDEPENDENT_JOB_CENSUS_TRUNCATED")
    verified=[j for j in rows if j.get("name")=="frozen-release"
              and j.get("head_sha")==head and j.get("conclusion")=="success"
              and any(s.get("name")=="If release files change, require exact live-identity and accounting contract"
                      and s.get("conclusion")=="success" for s in j.get("steps",[]))]
    if len(verified)!=1:
        raise Hold("F2R_STRICT_RELEASE_JOB_NOT_VERIFIED")
    return True

def ready_f2r_source(args, platform_main, required, deadline):
    """Read-only unless a standing, dated, verified source release needs promotion."""
    while True:
        source_main=gh(f"repos/{F2R}/git/ref/heads/main")["object"]["sha"]
        raw=pinned_public_file(F2R,F2R_SOURCE,source_main)
        if f2r_market_floor(raw)>=required:
            return source_main
        if not (getattr(args,"stage",False) and getattr(args,"publish",False)
                and getattr(args,"standing_operator_consent",False)
                and getattr(args,"expected_market_close","")):
            return source_main
        assert_standing_operator_authority()
        reviews=gh(f"repos/{F2R}/pulls?state=open&per_page=100")
        if len(reviews)>=100:
            raise Hold("F2R_OPEN_PR_CENSUS_TRUNCATED")
        current=[]
        for item in reviews:
            if not item.get("title","").startswith("Review F2R frozen public intake:"):
                continue
            pr=pull(F2R,item["number"])
            if ((pr.get("user") or {}).get("login")!="github-actions[bot]"
                or pr.get("state")!="open" or pr["base"]["ref"]!="main"
                or pr["base"]["sha"]!=source_main
                or (pr["head"].get("repo") or {}).get("full_name")!=F2R
                or not re.fullmatch(r"release/f2r-reviewed-\d+-\d+",pr["head"]["ref"])
                or not re.search(r"Private candidate ZIP SHA256: [a-f0-9]{64}(?:\s|$)",
                                 pr.get("body") or "")):
                continue
            head=pr["head"]["sha"]
            if not HEX40.fullmatch(head):
                raise Hold("F2R_REVIEW_HEAD_INVALID")
            modified=gh(f"repos/{F2R}/pulls/{pr['number']}/files?per_page=100")
            if (len(modified)!=len(F2R_REVIEW_FILES)
                or {x["filename"] for x in modified}!=F2R_REVIEW_FILES
                or any(x.get("status")!="modified" for x in modified)):
                raise Hold("F2R_REVIEW_FILE_SCOPE_HOLD")
            proposed=pinned_public_file(F2R,F2R_SOURCE,head)
            if f2r_market_floor(proposed)==required:
                current.append((pr,proposed))
        if len(current)>1:
            raise Hold("F2R_MULTIPLE_CURRENT_SOURCE_CANDIDATES")
        if current:
            pr,proposed=current[0]
            head=pr["head"]["sha"]
            if f2r_exact_independent_ci(head,pr["head"]["ref"]):
                # Same source-owned sync guard as the later Pages overlay.
                validated_f2r_bytes(proposed,platform_main)
                if pr["draft"]:
                    proc=subprocess.run(["gh","pr","ready",str(pr["number"]),
                                         "--repo",F2R],capture_output=True,
                                        text=False,timeout=40,check=False)
                    if proc.returncode:
                        raise Hold("F2R_PR_READY_PERMISSION_HOLD")
                now=pull(F2R,pr["number"])
                if (now["head"]["sha"]!=head or now["base"]["sha"]!=source_main
                    or now.get("draft") or now.get("state")!="open"
                    or now.get("mergeable") is not True
                    or gh(f"repos/{F2R}/git/ref/heads/main")["object"]["sha"]!=source_main):
                    raise Hold("F2R_REVIEW_HEAD_OR_BASE_CHANGED")
                assert_standing_operator_authority()
                merged=gh(f"repos/{F2R}/pulls/{pr['number']}/merge","PUT",
                          {"sha":head,"merge_method":"squash",
                           "commit_title":"Release reviewed F2R "+required})
                if not merged.get("merged"):
                    raise Hold("F2R_REVIEW_MERGE_REFUSED")
                new_main=gh(f"repos/{F2R}/git/ref/heads/main")["object"]["sha"]
                if (new_main!=merged.get("sha") or
                    pinned_public_file(F2R,F2R_SOURCE,new_main)!=proposed):
                    raise Hold("F2R_MERGED_SOURCE_IDENTITY_HOLD")
                print("F2R_REVIEWED_SOURCE_PROMOTED "+new_main,flush=True)
                return new_main
        if time.monotonic()>=deadline:
            raise Hold("F2R_CURRENT_REVIEW_NOT_READY_"+required)
        time.sleep(min(15.0,max(0,deadline-time.monotonic())))

def choose_current_inputs(args):
    main=gh(f"repos/{HOST}/git/ref/heads/main")["object"]["sha"]
    main_tree=tree(HOST,main)
    for path in (PDS_MARK,PDS_BINDING,ADAA_SNAPSHOT,EQUITY_OVERLAY,F2R_TARGET):
        if path not in main_tree:
            raise Hold("CURRENT_PUBLIC_SNAPSHOT_INCOMPLETE: "+path)
    expected=getattr(args,"expected_market_close","") or ""
    if expected and not re.fullmatch(r"20\d{2}-\d{2}-\d{2}",expected):
        raise Hold("OPERATOR_REQUIRED_MARKET_CLOCK_INVALID")
    # The source-owned PDS/ADAA/Equity review workflows run asynchronously.
    # If owner Windows has validated a NEW common US close, do not quietly
    # report NO_CHANGE while the public bot review is still being staged.
    deadline=time.monotonic()+(args.wait_seconds if args.stage else 0)
    published_eq_clock=_market_clock_from_blob(EQUITY_OVERLAY,main_tree[EQUITY_OVERLAY])
    while True:
        reviews=open_pulls()
        pds, rp=reviewed_overlay("pds",main_tree,reviews)
        adaa, ra=reviewed_overlay("adaa",main_tree,reviews)
        if set(pds).intersection(adaa):
            raise Hold("PDS_ADAA_CANDIDATE_PATH_CONFLICT")
        desired_floor=_market_clock_from_blob(
            PDS_MARK,pds.get(PDS_MARK,main_tree[PDS_MARK]))
        adaa_close=_market_clock_from_blob(
            ADAA_SNAPSHOT,adaa.get(ADAA_SNAPSHOT,main_tree[ADAA_SNAPSHOT]))
        if adaa_close<desired_floor:
            raise Hold("ADAA_SOURCE_STALE_BELOW_PDS_MARK_"+desired_floor)
        eq, equity_reviews=reviewed_overlay("equity",main_tree,reviews)
        desired_eq=_market_clock_from_blob(
            EQUITY_OVERLAY,eq.get(EQUITY_OVERLAY,main_tree[EQUITY_OVERLAY]))
        needed=(expected and (desired_floor<expected or desired_eq<expected))
        waiting=(needed or desired_floor>desired_eq)
        if not waiting:
            break
        if time.monotonic()>=deadline:
            raise Hold("CURRENT_SOURCE_OWNED_REVIEW_NOT_READY_FOR_MARKET_CLOSE: "+
                       (expected or desired_floor))
        time.sleep(min(15.0,max(0,deadline-time.monotonic())))
    f2r_main=ready_f2r_source(args,main,max(expected,desired_floor),deadline)
    f2r_tree=tree(F2R,f2r_main)
    source_blob=f2r_tree.get(F2R_SOURCE)
    if not source_blob:
        raise Hold("F2R_SOURCE_PUBLIC_STATE_MISSING")
    # An already-public identical F2R blob needs no historical source PR scan.
    # A new blob MUST be evidenced by a source-owned merged review PR.
    source_approved=(None if main_tree[F2R_TARGET]==source_blob
                     else latest_merged_f2r_source(source_blob))
    raw=(pinned_public_file(HOST,F2R_TARGET,main) if source_approved is None
         else pinned_public_file(F2R,F2R_SOURCE,f2r_main))
    state=json.loads(raw)
    if (state.get("schema_version")!="2.0" or
        state.get("completed_performance",{}).get("support_end")!=
        state.get("completed_performance",{}).get("as_of_date") or
        len(state.get("live_state",{}).get("official",{}).get("holdings",[]))!=4):
        raise Hold("F2R_SOURCE_PUBLIC_CONTRACT_HOLD")
    merged_pds={**main_tree,**pds,**adaa}
    merged_eq={**main_tree,**eq}
    # This audited source-owned sync is invoked only for a new F2R blob,
    # otherwise reuse existing Pages bytes without cost or unnecessary writes.
    if main_tree[F2R_TARGET]!=source_blob:
        raw=validated_f2r_bytes(raw,main)
    else:
        raw=pinned_public_file(HOST,F2R_TARGET,main)
    clocks=assert_common_market_clock(merged_pds,merged_eq,raw)
    if expected:
        for key in ("PDS","F2R_MTD","F2R_PREVIEW","EQUITY"):
            if clocks[key]<expected:
                raise Hold("CANDIDATE_BELOW_OPERATOR_REQUIRED_CLOSE_"+key+
                           ": required="+expected+" observed="+clocks[key])
    identity={"platform_main":main,
       "pds":rp,"adaa":ra,
       "f2r":{"review":source_approved,"source_main":f2r_main,"blob":source_blob},
       "equity":equity_reviews,
    }
    changed={**pds,**adaa,**eq}
    if source_blob!=main_tree[F2R_TARGET]:
        changed[F2R_TARGET]=source_blob
    return main,main_tree,changed,identity


def rama_options(args):
    values=[getattr(args,k,None) for k in
            ("rama_candidate","rama_approval","rama_approval_sha256")]
    requested=getattr(args,"rama_only",False) or getattr(args,"rama_operator_consent",False)
    if (any(values) or requested) and not all(values):
        raise Hold("RAMA_EXACT_APPROVAL_ARGUMENTS_REQUIRED")
    if all(values) and not getattr(args,"rama_operator_consent",False):
        raise Hold("RAMA_PER_RUN_OPERATOR_CONSENT_REQUIRED")
    return values if all(values) else None


def validated_rama_bytes(args, main, minimum):
    """Use the existing exact-hash receiver; no model computation or rights issuance."""
    import runpy
    values=rama_options(args)
    if values is None: raise Hold("RAMA_APPROVED_CANDIDATE_REQUIRED")
    candidate,approval,approval_sha=values
    if not re.fullmatch(r"[a-f0-9]{64}",approval_sha):
        raise Hold("RAMA_APPROVAL_HASH_INVALID")
    try:
        with tempfile.TemporaryDirectory(prefix="sq_rama_release_") as tmp:
            receiver=Path(tmp)/"receiver.py"
            receiver.write_bytes(pinned_public_file(HOST,RAMA_RECEIVER,main))
            ns=runpy.run_path(str(receiver))
            old=ns["validate_state"](ns["embedded"](pinned_public_file(HOST,RAMA_TARGET,main)))
            raw,state=ns["approved"](Path(candidate),Path(approval),approval_sha,existing_model_refresh=True)
            if state["through"]<old["through"] or state["execution"]<old["execution"]:
                raise Hold("RAMA_PUBLIC_CLOCK_REGRESSION")
            if minimum and state["through"]<minimum:
                raise Hold("RAMA_BELOW_REQUIRED_MARKET_CLOSE")
            ident={"blob":hashlib.sha1(b"blob "+str(len(raw)).encode()+b"\x00"+raw).hexdigest(),
                   "sha256":hashlib.sha256(raw).hexdigest(),
                   "approvalSha256":approval_sha,"marketThrough":state["through"],
                   "completedThrough":state["execution"]}
            return raw,ident
    except Hold: raise
    except Exception as exc:
        raise Hold("RAMA_EXACT_RECEIVER_HOLD "+type(exc).__name__+": "+str(exc)[:160]) from exc


def source_inputs(args):
    """Existing four-system selection plus an optional separately approved RAMA overlay."""
    if not rama_options(args): return choose_current_inputs(args)
    # Validate RAMA before incumbent source promotion to avoid a known early HOLD.
    main=gh(f"repos/{HOST}/git/ref/heads/main")["object"]["sha"]
    raw,rama=validated_rama_bytes(args,main,getattr(args,"expected_market_close","") or "")
    if getattr(args,"rama_only",False):
        selected=main
        main_tree=tree(HOST,main)
        updates={}
        identity={"platform_main":main,"mode":"RAMA_ONLY"}
    else:
        selected,main_tree,updates,identity=choose_current_inputs(args)
    if selected!=main or RAMA_TARGET not in main_tree or PDS_MARK not in main_tree:
        raise Hold("RAMA_PLATFORM_BASE_CHANGED_OR_INITIAL_RELEASE_MISSING")
    # Existing choose_current_inputs establishes the current PDS market floor.
    floor=_market_clock_from_blob(PDS_MARK,updates.get(PDS_MARK,main_tree[PDS_MARK]))
    if rama["marketThrough"]<floor: raise Hold("RAMA_BELOW_PDS_MARK")
    identity["rama"]=rama
    if main_tree[RAMA_TARGET]!=rama["blob"]:
        updates[RAMA_TARGET]=rama["blob"]
    return selected,main_tree,updates,identity


def stage(args):
    main,main_tree,updates,identity=source_inputs(args)
    if not updates:
        # Explicit no-op: no PR, no new Actions and no Pages deployment.
        return None,identity,False
    ident=hashlib.sha256(json.dumps(identity,sort_keys=True).encode()).hexdigest()[:16]
    branch=("review/rama-one-pages-" if getattr(args,"rama_only",False)
            else "review/four-system-one-pages-")+ident
    matches=[x for x in open_pulls() if x["head"]["ref"]==branch]
    if len(matches)>1: raise Hold("DUPLICATE_COMBINED_RELEASE")
    if matches:
        combined=pull(HOST,matches[0]["number"])
        if (combined["base"]["sha"]!=main or
            MARKER not in (combined.get("body") or "") or
            json.dumps(identity,sort_keys=True) not in (combined.get("body") or "")):
            raise Hold("EXISTING_COMBINED_REVIEW_BASE_OR_PROVENANCE_HOLD")
        if "rama" in identity:
            reviewed=tree(HOST,combined["head"]["sha"])
            actual={k:v for k,v in reviewed.items() if main_tree.get(k)!=v}
            if actual!=updates or set(main_tree)-set(reviewed):
                raise Hold("RAMA_EXISTING_COMBINED_REVIEW_TREE_HOLD")
        return combined,identity,False
    if not args.stage:
        raise Hold("SOURCE_READY_NO_NEW_PR_REQUESTED")
    # Git blob IDs are content-addressed but GitHub repositories have distinct
    # object stores. An approved F2R source SHA cannot be used in the platform
    # tree until its exact source-owned public bytes are imported here.
    # Import only after all source gates and no-change/PR reuse checks; never
    # recompute, reserialize, or substitute F2R portfolio data.
    if F2R_TARGET in updates:
        f2r=identity["f2r"]
        if (not f2r.get("review") or
            updates[F2R_TARGET]!=f2r.get("blob")):
            raise Hold("F2R_REVIEWED_BLOB_IDENTITY_HOLD")
        approved=pinned_public_file(F2R,F2R_SOURCE,f2r["source_main"])
        expected=hashlib.sha1(b"blob "+str(len(approved)).encode()+
                              b"\x00"+approved).hexdigest()
        if expected!=updates[F2R_TARGET]:
            raise Hold("F2R_SOURCE_BYTES_VS_GIT_BLOB_HOLD")
        imported=gh(f"repos/{HOST}/git/blobs","POST",{
            "content":base64.b64encode(approved).decode("ascii"),
            "encoding":"base64"})
        if imported.get("sha")!=expected:
            raise Hold("F2R_PLATFORM_GIT_BLOB_IMPORT_PARITY_HOLD")
    if RAMA_TARGET in updates:
        raw,rama=validated_rama_bytes(args,main,getattr(args,"expected_market_close","") or "")
        if rama!=identity.get("rama") or rama["blob"]!=updates[RAMA_TARGET]:
            raise Hold("RAMA_APPROVED_BYTES_CHANGED")
        imported=gh(f"repos/{HOST}/git/blobs","POST",{
            "content":base64.b64encode(raw).decode("ascii"),"encoding":"base64"})
        if imported.get("sha")!=rama["blob"]:
            raise Hold("RAMA_PLATFORM_GIT_BLOB_IMPORT_PARITY_HOLD")
    base_commit=gh(f"repos/{HOST}/git/commits/{main}")
    elements=[{"path":x,"mode":"100644","type":"blob","sha":sha}
              for x,sha in sorted(updates.items())]
    candidate_tree=gh(f"repos/{HOST}/git/trees","POST",
        {"base_tree":base_commit["tree"]["sha"],"tree":elements})["sha"]
    commit=gh(f"repos/{HOST}/git/commits","POST",
        {"message":("Stage source-owned RAMA data only" if getattr(args,"rama_only",False)
                    else "Stage source-owned current five-system data only" if "rama" in identity
                    else "Stage source-owned current four-system data only"),
         "tree":candidate_tree,"parents":[main]})["sha"]
    gh(f"repos/{HOST}/git/refs","POST",{"ref":"refs/heads/"+branch,"sha":commit})
    body=(MARKER+"\nPinned, current source evidence: "+json.dumps(identity,sort_keys=True)+
       "\nDRAFT: original source reviews, exact current clocks and one Pages CI "
       "MUST PASS prior to one public release. No model compute.")
    combined=gh(f"repos/{HOST}/pulls","POST",
         {"title":("Reviewed current RAMA one-Pages release " if getattr(args,"rama_only",False)
                   else "Reviewed current five-system one-Pages release " if "rama" in identity
                   else "Reviewed current four-system one-Pages release ")+ident,
          "head":branch,"base":"main","body":body,"draft":True})
    return combined,identity,True


def _release_build_checks_satisfied(builds):
    """Require a completed successful build; ignore only superseded SKIPPED copies.

    Multiple pull_request runs may attach same-name build checks to one commit.
    A skipped duplicate is neither a successful build nor a veto when another
    completed build is SUCCESS. Pending, failed, cancelled, or unknown checks
    must never authorize publication.
    """
    return (bool(builds)
        and all(x.get("status")=="completed" and
                x.get("conclusion") in ("success","skipped") for x in builds)
        and any(x.get("conclusion")=="success" for x in builds))


PAGES_WORKFLOW="deploy-pages.yml"
PAGES_TRIGGER_GRACE_SECONDS=120
PAGES_REQUIRED_DEPLOY_STEPS={
    "Deploy to GitHub Pages",
    "Verify live 4-system data bytes and source evidence (read-only)",
    "Verify RAMA public artifact byte parity (read-only)",
    "Public desktop/mobile browser QA after actual deployment",
}


def pages_runs(commit):
    result=gh(f"repos/{HOST}/actions/workflows/{PAGES_WORKFLOW}/runs"
              f"?head_sha={commit}&per_page=30")
    rows=result.get("workflow_runs")
    if not isinstance(rows,list) or len(rows)>=30 or result.get("total_count",len(rows))>len(rows):
        raise Hold("PAGES_RUN_CENSUS_INCOMPLETE")
    return [x for x in rows if x.get("head_sha")==commit and
            x.get("event") in ("push","workflow_dispatch")]


def pages_certified(run,commit):
    if run.get("head_sha")!=commit or run.get("status")!="completed" or run.get("conclusion")!="success":
        raise Hold("PAGES_DEPLOY_OR_POSTDEPLOY_QA_FAILED")
    result=gh(f"repos/{HOST}/actions/runs/{run['id']}/jobs?per_page=100")
    jobs=result.get("jobs")
    if not isinstance(jobs,list) or len(jobs)>=100 or result.get("total_count",len(jobs))>len(jobs):
        raise Hold("PAGES_JOB_CENSUS_INCOMPLETE")
    for name in ("build","deploy"):
        exact=[x for x in jobs if x.get("name")==name]
        if len(exact)!=1 or exact[0].get("status")!="completed" or exact[0].get("conclusion")!="success":
            raise Hold("PAGES_REQUIRED_JOB_NOT_CERTIFIED:"+name)
        if name=="deploy":
            steps=exact[0].get("steps",[])
            if any(len([x for x in steps if x.get("name")==step and
                        x.get("conclusion")=="success"])!=1 for step in PAGES_REQUIRED_DEPLOY_STEPS):
                raise Hold("PAGES_REQUIRED_DEPLOY_STEPS_NOT_CERTIFIED")
    return {"status":"PAGES_PUBLIC_AND_BROWSER_QA_PASS","commit":commit,
            "run":run["id"],"event":run["event"]}


def wait_for_pages(commit,wait_seconds,*,clock=None,pause=None):
    """Only the fresh, approved merge may invoke this one-shot fallback.

    Do not dispatch on an existing/pending/failed run, ambiguous API response,
    changed main, or an old no-change request. An audit-only run cannot certify
    deployment. A late push can race the fallback; never initiate a second one.
    """
    if not HEX40.fullmatch(commit):raise Hold("PAGES_MERGE_SHA_INVALID")
    clock=clock or time.monotonic;pause=pause or time.sleep
    start=clock();deadline=start+wait_seconds
    dispatched=False
    def lease():
        if gh(f"repos/{HOST}/git/ref/heads/main")["object"]["sha"]!=commit:
            raise Hold("PAGES_MAIN_CHANGED_AFTER_MERGE")
    while clock()<deadline:
        lease()
        runs=pages_runs(commit)
        if len(runs)>1:raise Hold("PAGES_MULTIPLE_EXACT_RUNS_REVIEW_REQUIRED")
        if runs:
            if runs[0].get("status")=="completed":
                result=pages_certified(runs[0],commit);lease();return result
        elif not dispatched and clock()-start>=PAGES_TRIGGER_GRACE_SECONDS:
            # Recheck absence and main immediately before the single normal
            # workflow dispatch. No new PR/commit or redundant retry.
            lease()
            if not pages_runs(commit):
                dispatched=True
                print("PAGES_MISSING_PUSH_TRIGGER_FALLBACK "+commit,flush=True)
                gh(f"repos/{HOST}/actions/workflows/{PAGES_WORKFLOW}/dispatches",
                   "POST",{"ref":"main","inputs":{"audit_only":"false"}})
                lease()
                deadline=max(deadline,clock()+wait_seconds)
        pause(15)
    raise Hold("PAGES_POSTDEPLOY_QA_NOT_YET_CERTIFIED")


def publish(args,combined):
    head=combined["head"]["sha"]
    if args.approved_head!=head:
        raise Hold("NO_EXACT_HEAD_PUBLIC_RELEASE_APPROVAL")
    if combined["state"]!="open":
        raise Hold("RELEASE_PR_NOT_OPEN")
    if combined["draft"]:
        try:
            p=subprocess.run(["gh","pr","ready",str(combined["number"]),"--repo",HOST],
                             capture_output=True,text=False,timeout=40,check=False)
        except (OSError,subprocess.TimeoutExpired) as exc:
            raise Hold("PR_READY_CLI_UNAVAILABLE") from exc
        if p.returncode: raise Hold("PR_READY_OR_PERMISSION_HOLD")
    end=time.monotonic()+args.wait_seconds
    while time.monotonic()<end:
        now=pull(HOST,combined["number"])
        main=gh(f"repos/{HOST}/git/ref/heads/main")["object"]["sha"]
        if (now["head"]["sha"]!=head or now["base"]["sha"]!=main or
            now["draft"] or now.get("mergeable") is False):
            raise Hold("SOURCE_OR_BASE_CHANGED_NO_MERGE")
        checks=gh(f"repos/{HOST}/commits/{head}/check-runs?per_page=100")
        run=checks.get("check_runs",[])
        if len(run)>=100: raise Hold("RELEASE_CI_CENSUS_TRUNCATED")
        builds=[x for x in run if x.get("name")=="build"]
        if any(x.get("conclusion") in ("failure","cancelled","timed_out",
                                      "action_required") for x in run):
            raise Hold("RELEASE_CI_FAILURE")
        if _release_build_checks_satisfied(builds):
            break
        time.sleep(15)
    else: raise Hold("RELEASE_CI_UNCONFIRMED_NO_MERGE")
    merged=gh(f"repos/{HOST}/pulls/{combined['number']}/merge","PUT",
              {"sha":head,"merge_method":"squash",
               "commit_title":"Publish approved four-system Pages release"})
    if not merged.get("merged"): raise Hold("GITHUB_REFUSED_APPROVED_MERGE")
    commit=merged["sha"]
    return wait_for_pages(commit,args.wait_seconds)


def assert_standing_operator_authority():
    """One unified operator confirmation covers routine releases under policy.
    All dated source QC, seven-file Equity private receiver and Pages CI remain.
    """
    current=gh(f"repos/{HOST}/git/ref/heads/main")["object"]["sha"]
    raw=pinned_public_file(HOST,"scripts/equity-standing-publication-policy.json",current)
    p=json.loads(raw)
    if (p.get("schema")!="SLACKQUANT_EQUITY_STANDING_PUBLICATION_V1"
        or p.get("status")!="ACTIVE"
        or p.get("scope")!="public/dashboards/equity-alpha/**"
        or p.get("receipt_basis")!="STANDING_OWNER_POLICY_V1"
        or p.get("max_public_files")!=7):
        raise Hold("STANDING_OPERATOR_PUBLICATION_AUTHORITY_NOT_ACTIVE")
    return True

def main():
    p=argparse.ArgumentParser()
    p.add_argument("--pds-adaa-pr",type=int,default=75)
    p.add_argument("--f2r-pr",type=int,default=15)
    p.add_argument("--stage",action="store_true")
    p.add_argument("--publish",action="store_true")
    p.add_argument("--standing-operator-consent",action="store_true",
                   help="Existing one-button Y authorizes routine release under ACTIVE owner policy")
    p.add_argument("--approved-head",default="")
    p.add_argument("--rama-candidate",type=Path)
    p.add_argument("--rama-approval",type=Path)
    p.add_argument("--rama-approval-sha256")
    p.add_argument("--rama-operator-consent",action="store_true")
    p.add_argument("--rama-only",action="store_true")
    p.add_argument("--wait-seconds",type=int,default=900)
    p.add_argument("--expected-market-close",default="",
                   help="Source-owned PDS validated completed US market close")
    a=p.parse_args()
    if a.publish and not a.stage:
        p.error("publishing requires --stage")
    if a.approved_head and not HEX40.fullmatch(a.approved_head):
        p.error("bad approved head SHA")
    if not 60<=a.wait_seconds<=3600: p.error("bad wait")
    try:
        combined,identity,created=stage(a)
        if combined is None:
            print(json.dumps({"status":"NO_CHANGE_ALREADY_PUBLISHED",
                  "provenance":identity,"model_refreshed":False,
                  "actions_dispatched":False,"public_deployment":False},sort_keys=True))
            return 0
        report={"status":"DRAFT_REVIEW_ONLY","pr":combined["number"],
                "head":combined["head"]["sha"],"created":created,
                "provenance":identity,"public_deployment":False}
        if a.publish:
            if a.rama_only:
                rama_options(a)
                a.approved_head=combined["head"]["sha"]
                print("RAMA_PER_RUN_OWNER_SCOPE "+a.approved_head,flush=True)
            elif a.standing_operator_consent:
                assert_standing_operator_authority()
                a.approved_head=combined["head"]["sha"]
                print("STANDING_OWNER_SCOPE_WITH_ONE_OPERATOR_CONFIRMATION "+
                      a.approved_head,flush=True)
            elif not a.approved_head:
                print("PUBLIC_RELEASE_REQUEST pr="+str(combined["number"])+
                      " pinned_head="+combined["head"]["sha"],flush=True)
                response=input("Type PUBLISH to authorize public Pages merge after CI: ").strip()
                if response!="PUBLISH": raise Hold("PUBLIC_RELEASE_NOT_AUTHORIZED")
                a.approved_head=combined["head"]["sha"]
            report=publish(a,combined)
        print(json.dumps(report,sort_keys=True))
        return 0 if a.publish else 3
    except Hold as e:
        print(json.dumps({"status":"HOLD","reason":str(e),
                          "public_deployment_certified":False},sort_keys=True))
        return 2

if __name__=="__main__":
    sys.exit(main())
