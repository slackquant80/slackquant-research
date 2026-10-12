#!/usr/bin/env node
/**
 * Governed review-only ADAA artifact branch publisher.
 * No main push, PR merge, or public release.
 * The existing managed pre-push hook rechecks the canonical full release gate.
 */
import { existsSync, readFileSync, lstatSync } from "node:fs";
import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

function fail(reason) { throw new Error("ADAA_GOVERNED_DRAFT_HOLD: " + reason); }
function need(ok, reason) { if (!ok) fail(reason); }
function sorted(xs) { return [...xs].sort().join("\n"); }
function sha256(buf) { return createHash("sha256").update(buf).digest("hex"); }
const e=process.env;
const branch="review/adaa-hosted-" + (e.GITHUB_RUN_ID || "");
const allow=[
  "public/assets/systems/adaa/index.html",
  "public/assets/systems/adaa/adaa-theme.css",
  "public/assets/systems/adaa/dashboard.js",
  "public/assets/systems/adaa/snapshot.js",
  "public/assets/systems/adaa/ADAA_Portfolio_Target_History.xlsx",
  "src/app/systems/adaa/dashboard/page.tsx"
];
const assets={
  "index.html":"www/index.html",
  "adaa-theme.css":"www/adaa-theme.css",
  "dashboard.js":"www/dashboard.js",
  "snapshot.js":"www/snapshot.js",
  "ADAA_Portfolio_Target_History.xlsx":"www/ADAA_Portfolio_Target_History.xlsx"
};
function git(args, override) {
  const r=spawnSync("git",args,{
    cwd:process.cwd(),encoding:"utf8",stdio:["ignore","pipe","pipe"],
    env:override || e
  });
  if(r.error || r.status!==0) fail("git " + args[0] + " failed: " +
    ((r.stderr || r.error?.message || String(r.status)).slice(-1200)));
  return (r.stdout || "").trim();
}
function check() {
  need(e.GITHUB_ACTIONS==="true" && e.GITHUB_EVENT_NAME==="workflow_dispatch",
       "not manually dispatched GitHub Actions");
  need(e.GITHUB_WORKFLOW==="Stage ADAA validated source assets as Draft PR",
       "unexpected workflow owner");
  need(e.GITHUB_REPOSITORY==="slackquant80/slackquant-research" &&
       e.GITHUB_REF==="refs/heads/main", "unexpected repository/branch");
  need(/^[0-9]{6,20}$/.test(e.GITHUB_RUN_ID || "") &&
       e.REVIEW_BRANCH===branch,"run-unique review branch mismatch");
  need(/^[a-f0-9]{40}$/.test(e.GITHUB_SHA || "") &&
       /^[a-f0-9]{64}$/.test(e.SOURCE_SHA256 || ""), "missing source pins");
  need(!!e.ADAA_ASSETS &&
       resolve(e.ADAA_ASSETS)==="/home/runner/work/_temp/adaa-assets",
       "private asset directory not pinned to runner temp");
  need(git(["branch","--show-current"])==="main" &&
       git(["rev-parse","HEAD"])===e.GITHUB_SHA, "staging origin not at run HEAD");
  need(git(["ls-remote","origin","refs/heads/main"]).split(/\s+/)[0]===e.GITHUB_SHA,
       "main has moved: no stale review branch publish");
  need(/github\.com[:/]slackquant80\/slackquant-research(?:\.git)?$/.test(
       git(["remote","get-url","origin"])), "wrong remote destination");
  const privateManifest=resolve(e.ADAA_ASSETS,"ADAA_HOSTED_INTAKE_PROPOSAL.json");
  need(existsSync(privateManifest),"source owned manifest missing");
  const raw=readFileSync(privateManifest);
  need(sha256(raw)===e.SOURCE_SHA256,"private manifest SHA mismatch");
  const meta=JSON.parse(raw.toString("utf8"));
  need(meta.contract==="ADAA_HOSTED_INTAKE_PROPOSAL_V1" &&
       meta.source_owner==="slackquant80/research-multiasset" &&
       meta.stage==="INTAKE_REVIEW_ONLY" &&
       meta.release_authorized===false &&
       meta.public_deployment_authorized===false,
       "wrong private artifact boundary");
  for(const [flat,key] of Object.entries(assets)) {
    const path=resolve("public/assets/systems/adaa",flat);
    need(existsSync(path) && lstatSync(path).isFile() &&
         !lstatSync(path).isSymbolicLink(),"missing or linked asset: "+flat);
    const src=meta.files?.[key];
    need(!!src && src.bytes===lstatSync(path).size &&
         src.sha256===sha256(readFileSync(path)),
         "public artifact differs from validated private manifest: "+flat);
  }
  const route=resolve("src/app/systems/adaa/dashboard/page.tsx");
  need(existsSync(route) && lstatSync(route).isFile() &&
       readFileSync(route,"utf8").includes('src="/assets/systems/adaa/index.html"'),
       "static review route contract mismatch");
  need(existsSync(resolve("scripts/pre-push-release-gate.mjs")),
       "canonical Git pre-push guard absent");
}
function publishBoundedReviewBranch() {
  git(["add","--",...allow]);
  const staged=git(["diff","--cached","--name-only"]).split("\n").filter(Boolean);
  need(sorted(staged)===sorted(allow),
       "staged files not exactly six allowed ADAA draft paths");
  need(!git(["diff","--name-only"]) &&
       !git(["ls-files","--others","--exclude-standard"]),
       "unvalidated working-tree changes present");
  git(["switch","-c",branch]);
  git(["commit","-m","Stage validated ADAA 2026-10-09 candidate for Draft PR review"]);
  need(!git(["status","--porcelain=v1","--untracked-files=all"]),
       "post-commit working tree not clean");
  // The managed hook is NOT disabled. This governed transaction gives it
  // its existing opt-in and it re-runs canonical release validation.
  git(["push","origin",branch],{...e,SQ_GOVERNED_GIT_PUSH:"1"});
  console.log("ADAA_GOVERNED_DRAFT_BRANCH_PUSH_PASS");
  console.log("REVIEW_BRANCH="+branch);
  console.log("NO_MAIN_PUSH_NO_MERGE_NO_DEPLOYMENT=TRUE");
}
try { check(); publishBoundedReviewBranch(); }
catch (err) { console.error(err?.message || String(err)); process.exit(2); }
