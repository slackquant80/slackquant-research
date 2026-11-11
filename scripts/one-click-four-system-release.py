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
    if item.get("encoding")!="base64" or not HEX40.fullmatch(item.get("sha","")):
        raise Hold("SOURCE_OWNED_PUBLIC_FILE_PIN_UNAVAILABLE: "+path)
    data=base64.b64decode(item["content"])
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
    equity_path=EQUITY+"data/live_overlay.js"
    if pds_path not in pds_tree or equity_path not in eq_tree:
        raise Hold("REQUIRED_DATED_PUBLIC_RECEIPT_MISSING")
    try:
        pds=json.loads(pinned_git_blob_bytes(HOST,pds_tree[pds_path]))
        f2r=json.loads(f2r_bytes)
        ea=pinned_git_blob_bytes(HOST,eq_tree[equity_path]).decode("utf-8-sig").strip()
        match=re.fullmatch(r"window\.EA_LIVE_OVERLAY\s*=\s*(\{.*\})\s*;",ea,re.S)
        if not match: raise Hold("EQUITY_PUBLIC_OVERLAY_INVALID")
        equity=json.loads(match.group(1))
        if pds.get("status")!="PDS_SLACKQUANT_PUBLIC_BINDING_PASS":
            raise Hold("PDS_SOURCE_RECEIPT_NOT_PASS")
        if equity.get("meta",{}).get("benchmark")!="ACWI":
            raise Hold("EQUITY_PUBLIC_BENCHMARK_INVALID")
        mtd=f2r["live_state"]["current_mtd"]
        preview=f2r["live_state"]["preview"]
        if not mtd.get("available") or not preview.get("available"):
            raise Hold("F2R_CURRENT_OR_PREVIEW_NOT_AVAILABLE")
        clocks={"PDS":pds["public_as_of_date"],
                "F2R_MTD":mtd["as_of_date"],
                "F2R_PREVIEW":preview["market_cutoff_date"],
                "EQUITY":equity["meta"]["marketDataThrough"]}
        for name, value in clocks.items():
            if not isinstance(value,str) or not re.fullmatch(
                    r"20\d{2}-\d{2}-\d{2}",value):
                raise Hold("PUBLIC_SOURCE_CLOCK_INVALID_"+name)
        floor=clocks["PDS"]
        for name in ("F2R_MTD","F2R_PREVIEW","EQUITY"):
            if clocks[name]<floor:
                raise Hold("PUBLIC_SOURCE_STALE_"+name+"_BELOW_PDS_"+floor)
    except (KeyError,ValueError,UnicodeError,TypeError) as exc:
        raise Hold("PUBLIC_SOURCE_CLOCK_PARSE_HOLD") from exc
    return clocks


def await_equity_draft_review(wait_seconds):
    """Wait for the already-dispatched source-owned Equity workflow to stage ONE PR.

    No model computation, workflow dispatch, review creation or source mutation.
    Duplicate drafts are ambiguous and must never be arbitrarily selected.
    """
    if wait_seconds < 0:
        raise Hold("EQUITY_NEGATIVE_REVIEW_WAIT")
    deadline = time.monotonic() + wait_seconds
    while True:
        matches = [x for x in open_pulls() if x["title"].startswith(
            "Review Equity Alpha seven-file hosted candidate:")]
        if len(matches) > 1:
            raise Hold("EQUITY_MULTIPLE_SOURCE_OWNED_REVIEW_DRAFTS")
        if len(matches) == 1:
            return matches[0]
        if time.monotonic() >= deadline:
            raise Hold("EQUITY_SOURCE_OWNED_DRAFT_NOT_YET_STAGED_NO_MODEL_RERUN")
        time.sleep(min(15.0, max(0.0, deadline - time.monotonic())))


def source_inputs(args):
    main=gh(f"repos/{HOST}/git/ref/heads/main")["object"]["sha"]
    pds=pull(HOST,args.pds_adaa_pr)
    if pds["state"]!="open" or pds["base"]["ref"]!="main":
        raise Hold("PDS_ADAA_REVIEW_NOT_OPEN_ON_MAIN")
    pds_files=set(files(HOST,args.pds_adaa_pr))
    source_base_compatible(pds["base"]["sha"],main,pds_files)
    if ("public/assets/systems/adaa/snapshot.js" not in pds_files or
        not any(x.startswith("public/data/systems/pds/") for x in pds_files)):
        raise Hold("PDS_ADAA_COMBINED_REVIEW_MISSING")
    pds_tree=tree(HOST,pds["head"]["sha"])
    f2r_pr=pull(F2R,args.f2r_pr)
    if f2r_pr["state"]!="closed" or not f2r_pr.get("merged"):
        raise Hold("F2R_SOURCE_REVIEW_NOT_APPROVED_OR_MERGED")
    f2r_main=gh(f"repos/{F2R}/git/ref/heads/main")["object"]["sha"]
    f2r_tree=tree(F2R,f2r_main)
    proposed_f2r=tree(F2R,f2r_pr["head"]["sha"])
    if f2r_tree.get(F2R_SOURCE)!=proposed_f2r.get(F2R_SOURCE):
        raise Hold("F2R_MERGED_PUBLIC_SOURCE_CHANGED")
    f2r_bytes=pinned_public_file(F2R,F2R_SOURCE,f2r_main)
    doc=json.loads(f2r_bytes)
    if (doc.get("schema_version")!="2.0" or
        doc.get("completed_performance",{}).get("as_of_date")!=
        doc.get("completed_performance",{}).get("support_end") or
        len(doc.get("live_state",{}).get("official",{}).get("holdings",[]))!=4):
        raise Hold("F2R_RELEASE_DATA_CONTRACT_HOLD")
    # Sender 125 dispatches the existing hosted Equity review workflow
    # asynchronously. Without this wait the very same single-button run
    # races its own approved candidate and always reports a false HOLD.
    equity_review=await_equity_draft_review(args.wait_seconds if args.stage else 0)
    eq=pull(HOST,equity_review["number"])
    if (eq["state"]!="open" or eq["base"]["ref"]!="main" or
        eq.get("user",{}).get("login")!="github-actions[bot]"):
        raise Hold("EQUITY_SOURCE_OWNED_INTAKE_PROVENANCE_HOLD")
    if ("Exact source prerelease:" not in (eq.get("body") or "") or
        "ZIP SHA256:" not in (eq.get("body") or "")):
        raise Hold("EQUITY_PRIVATE_RECEIPT_REVIEW_REFERENCE_MISSING")
    eq_files=set(files(HOST,eq["number"]))
    source_base_compatible(eq["base"]["sha"],main,eq_files)
    if (not eq_files or not eq_files.issubset(EQUITY_PATHS) or
        EQUITY+"data/live_overlay.js" not in eq_files or
        eq_files.intersection(pds_files) or F2R_TARGET in pds_files):
        raise Hold("SOURCE_FILE_SET_CONFLICT_OR_EQUITY_INCOMPLETE")
    eq_tree=tree(HOST,eq["head"]["sha"])
    identity={"platform_main":main,
              "pds_adaa":{"pr":pds["number"],"head":pds["head"]["sha"]},
              "f2r":{"pr":args.f2r_pr,"main":f2r_main,"blob":f2r_tree[F2R_SOURCE]},
              "equity":{"pr":eq["number"],"head":eq["head"]["sha"]}}
    if any(path not in pds_tree for path in pds_files):
        raise Hold("PDS_ADAA_DELETED_SOURCE_FILE_REFUSED")
    if any(path not in eq_tree for path in eq_files):
        raise Hold("EQUITY_DELETED_SOURCE_FILE_REFUSED")
    # The source-owned PUBLIC_SAFE sync is mandatory, not an ad-hoc JSON copy.
    f2r_bytes=validated_f2r_bytes(f2r_bytes,main)
    assert_common_market_clock(pds_tree,eq_tree,f2r_bytes)
    return main,pds,pds_files,pds_tree,eq_files,eq_tree,f2r_bytes,identity

def stage(args):
    main,pds,pds_files,pds_tree,eq_files,eq_tree,f2r_bytes,identity=source_inputs(args)
    ident=hashlib.sha256(json.dumps(identity,sort_keys=True).encode()).hexdigest()[:16]
    branch="review/four-system-one-pages-"+ident
    matches=[x for x in open_pulls() if x["head"]["ref"]==branch]
    if len(matches)>1: raise Hold("DUPLICATE_COMBINED_RELEASE")
    if matches:
        combined=pull(HOST,matches[0]["number"])
        if (combined["base"]["sha"]!=main or
            MARKER not in (combined.get("body") or "") or
            json.dumps(identity,sort_keys=True) not in (combined.get("body") or "")):
            raise Hold("EXISTING_COMBINED_REVIEW_BASE_OR_PROVENANCE_HOLD")
        return combined,identity,False
    if not args.stage:
        raise Hold("SOURCE_READY_NO_NEW_PR_REQUESTED")
    b=gh(f"repos/{HOST}/git/blobs","POST",
         {"content":base64.b64encode(f2r_bytes).decode(),"encoding":"base64"})["sha"]
    updates=[{"path":x,"mode":"100644","type":"blob","sha":pds_tree[x]}
             for x in sorted(pds_files)]
    updates += [{"path":x,"mode":"100644","type":"blob","sha":eq_tree[x]}
                for x in sorted(eq_files)]
    updates.append({"path":F2R_TARGET,"mode":"100644","type":"blob","sha":b})
    # NEVER use the historical source PR tree as the full base: source-only
    # Governance/Pages commits can have advanced main in the meantime.
    # Overlay only the independently reviewed changed blobs onto CURRENT main.
    base_commit=gh(f"repos/{HOST}/git/commits/{main}")
    tr=gh(f"repos/{HOST}/git/trees","POST",
          {"base_tree":base_commit["tree"]["sha"],"tree":updates})["sha"]
    commit=gh(f"repos/{HOST}/git/commits","POST",
              {"message":"Stage four reviewed systems; no publication",
               "tree":tr,"parents":[main]})["sha"]
    gh(f"repos/{HOST}/git/refs","POST",{"ref":"refs/heads/"+branch,"sha":commit})
    body=(MARKER+"\nPinned sources: "+json.dumps(identity,sort_keys=True)+
          "\nDRAFT ONLY: requires exact final owner authorization, combined CI and "
          "automatic postdeploy Pages data/browser QA. No model execution.")
    combined=gh(f"repos/{HOST}/pulls","POST",
                {"title":"Combined reviewed four-system Pages release "+ident,
                 "head":branch,"base":"main","body":body,"draft":True})
    return combined,identity,True

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
        if builds and all(x["status"]=="completed" and
                          x["conclusion"]=="success" for x in builds):
            break
        time.sleep(15)
    else: raise Hold("RELEASE_CI_UNCONFIRMED_NO_MERGE")
    merged=gh(f"repos/{HOST}/pulls/{combined['number']}/merge","PUT",
              {"sha":head,"merge_method":"squash",
               "commit_title":"Publish approved four-system Pages release"})
    if not merged.get("merged"): raise Hold("GITHUB_REFUSED_APPROVED_MERGE")
    commit=merged["sha"]
    end=time.monotonic()+args.wait_seconds
    while time.monotonic()<end:
        runs=gh(f"repos/{HOST}/actions/workflows/deploy-pages.yml/runs"+
                f"?head_sha={commit}&per_page=30").get("workflow_runs",[])
        exact=[x for x in runs if x.get("head_sha")==commit and
               x.get("event")=="push"]
        if len(exact)==1 and exact[0]["status"]=="completed":
            if exact[0]["conclusion"]!="success":
                raise Hold("PAGES_DEPLOY_OR_POSTDEPLOY_QA_FAILED")
            return {"status":"PAGES_PUBLIC_AND_BROWSER_QA_PASS",
                    "commit":commit,"run":exact[0]["id"]}
        time.sleep(15)
    raise Hold("PAGES_POSTDEPLOY_QA_NOT_YET_CERTIFIED")


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
    p.add_argument("--wait-seconds",type=int,default=900)
    a=p.parse_args()
    if a.publish and not a.stage:
        p.error("publishing requires --stage")
    if a.approved_head and not HEX40.fullmatch(a.approved_head):
        p.error("bad approved head SHA")
    if not 60<=a.wait_seconds<=3600: p.error("bad wait")
    try:
        combined,identity,created=stage(a)
        report={"status":"DRAFT_REVIEW_ONLY","pr":combined["number"],
                "head":combined["head"]["sha"],"created":created,
                "provenance":identity,"public_deployment":False}
        if a.publish:
            if a.standing_operator_consent:
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
