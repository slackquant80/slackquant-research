#!/usr/bin/env python3
"""Stage one Git-tree-only four-system review PR and (with explicit consent)
promote via the existing Pages workflow. No financial compute or rights issuance.
"""
import argparse
import base64
import hashlib
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

def gh(path, method="GET", data=None):
    cmd=["gh","api","--method",method,path]
    if data is not None: cmd+=["--input","-"]
    try:
        p=subprocess.run(cmd, input=json.dumps(data) if data is not None else None,
                         capture_output=True,text=True,timeout=60,check=False)
    except (OSError,subprocess.TimeoutExpired) as e:
        raise Hold("GITHUB_CLI_UNAVAILABLE") from e
    if p.returncode:
        raise Hold("GITHUB_API_HOLD "+path+" "+p.stderr[-160:])
    return json.loads(p.stdout) if p.stdout.strip() else {}

def pull(repo,number): return gh(f"repos/{repo}/pulls/{number}")

def files(repo,number):
    result=[]
    for page in range(1,11):
        part=gh(f"repos/{repo}/pulls/{number}/files?per_page=100&page={page}")
        result+=list(x["filename"] for x in part)
        if len(part)<100: return result
    raise Hold("PR_CHANGED_FILE_LIST_TRUNCATED")

def tree(repo,commit):
    obj=gh(f"repos/{repo}/git/trees/{commit}?recursive=1")
    if obj.get("truncated"): raise Hold("SOURCE_TREE_TRUNCATED")
    return {x["path"]:x["sha"] for x in obj["tree"] if x["type"]=="blob"}

def open_pulls():
    result=gh(f"repos/{HOST}/pulls?state=open&per_page=100")
    if len(result)==100: raise Hold("OPEN_PR_CENSUS_TRUNCATED")
    return result

def source_inputs(args):
    main=gh(f"repos/{HOST}/git/ref/heads/main")["object"]["sha"]
    pds=pull(HOST,args.pds_adaa_pr)
    if (pds["state"]!="open" or pds["base"]["sha"]!=main or
        pds["base"]["ref"]!="main"):
        raise Hold("PDS_ADAA_REVIEW_BASE_DRIFT")
    pds_files=set(files(HOST,args.pds_adaa_pr))
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
    f2r_file=gh(f"repos/{F2R}/contents/{F2R_SOURCE}?ref={f2r_main}")
    if f2r_file["encoding"]!="base64":
        raise Hold("F2R_CANONICAL_BYTES_UNAVAILABLE")
    f2r_bytes=base64.b64decode(f2r_file["content"])
    doc=json.loads(f2r_bytes)
    if (doc.get("schema_version")!="2.0" or
        doc.get("completed_performance",{}).get("as_of_date")!=
        doc.get("completed_performance",{}).get("support_end") or
        len(doc.get("live_state",{}).get("official",{}).get("holdings",[]))!=4):
        raise Hold("F2R_RELEASE_DATA_CONTRACT_HOLD")
    candidates=[x for x in open_pulls() if x["title"].startswith(
        "Review Equity Alpha seven-file hosted candidate:")]
    if len(candidates)!=1:
        raise Hold("EQUITY_APPROVED_SOURCE_CLOCK_RIGHTS_REVIEW_MISSING_OR_AMBIGUOUS")
    eq=pull(HOST,candidates[0]["number"])
    if (eq["base"]["sha"]!=main or eq["state"]!="open" or
        eq.get("user",{}).get("login")!="github-actions[bot]"):
        raise Hold("EQUITY_SOURCE_OWNED_INTAKE_PROVENANCE_HOLD")
    if ("Exact source prerelease:" not in (eq.get("body") or "") or
        "ZIP SHA256:" not in (eq.get("body") or "")):
        raise Hold("EQUITY_PRIVATE_RECEIPT_REVIEW_REFERENCE_MISSING")
    eq_files=set(files(HOST,eq["number"]))
    if (not eq_files or not eq_files.issubset(EQUITY_PATHS) or
        EQUITY+"data/live_overlay.js" not in eq_files or
        eq_files.intersection(pds_files) or F2R_TARGET in pds_files):
        raise Hold("SOURCE_FILE_SET_CONFLICT_OR_EQUITY_INCOMPLETE")
    eq_tree=tree(HOST,eq["head"]["sha"])
    identity={"platform_main":main,
              "pds_adaa":{"pr":pds["number"],"head":pds["head"]["sha"]},
              "f2r":{"pr":args.f2r_pr,"main":f2r_main,"blob":f2r_tree[F2R_SOURCE]},
              "equity":{"pr":eq["number"],"head":eq["head"]["sha"]}}
    return main,pds,eq_files,eq_tree,f2r_bytes,identity

def stage(args):
    main,pds,eq_files,eq_tree,f2r_bytes,identity=source_inputs(args)
    ident=hashlib.sha256(json.dumps(identity,sort_keys=True).encode()).hexdigest()[:16]
    branch="review/four-system-one-pages-"+ident
    matches=[x for x in open_pulls() if x["head"]["ref"]==branch]
    if len(matches)>1: raise Hold("DUPLICATE_COMBINED_RELEASE")
    if matches:
        combined=pull(HOST,matches[0]["number"])
        if (combined["base"]["sha"]!=main or
            MARKER not in (combined.get("body") or "")):
            raise Hold("EXISTING_COMBINED_REVIEW_BASE_OR_PROVENANCE_HOLD")
        return combined,identity,False
    if not args.stage:
        raise Hold("SOURCE_READY_NO_NEW_PR_REQUESTED")
    b=gh(f"repos/{HOST}/git/blobs","POST",
         {"content":base64.b64encode(f2r_bytes).decode(),"encoding":"base64"})["sha"]
    updates=[{"path":x,"mode":"100644","type":"blob","sha":eq_tree[x]}
             for x in sorted(eq_files)]
    updates.append({"path":F2R_TARGET,"mode":"100644","type":"blob","sha":b})
    pds_commit=gh(f"repos/{HOST}/git/commits/{pds['head']['sha']}")
    tr=gh(f"repos/{HOST}/git/trees","POST",
          {"base_tree":pds_commit["tree"]["sha"],"tree":updates})["sha"]
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
        p=subprocess.run(["gh","pr","ready",str(combined["number"]),"--repo",HOST],
                         capture_output=True,text=True,timeout=40,check=False)
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

def main():
    p=argparse.ArgumentParser()
    p.add_argument("--pds-adaa-pr",type=int,default=75)
    p.add_argument("--f2r-pr",type=int,default=15)
    p.add_argument("--stage",action="store_true")
    p.add_argument("--publish",action="store_true")
    p.add_argument("--approved-head",default="")
    p.add_argument("--wait-seconds",type=int,default=900)
    a=p.parse_args()
    if a.publish and (not a.stage or not HEX40.fullmatch(a.approved_head)):
        p.error("publishing requires --stage and exact approved-head SHA")
    if not 60<=a.wait_seconds<=3600: p.error("bad wait")
    try:
        combined,identity,created=stage(a)
        report={"status":"DRAFT_REVIEW_ONLY","pr":combined["number"],
                "head":combined["head"]["sha"],"created":created,
                "provenance":identity,"public_deployment":False}
        if a.publish: report=publish(a,combined)
        print(json.dumps(report,sort_keys=True))
        return 0 if a.publish else 3
    except Hold as e:
        print(json.dumps({"status":"HOLD","reason":str(e),
                          "public_deployment_certified":False},sort_keys=True))
        return 2

if __name__=="__main__":
    sys.exit(main())
