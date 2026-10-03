#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const GOVERNED_PUSH_ENV = "SQ_GOVERNED_GIT_PUSH";

function assertGovernedPushInvocation() {
  if (process.env[GOVERNED_PUSH_ENV] !== "1") {
    console.error("\n[PRE-PUSH GUARD FAIL] Direct git push is disabled for this repository.");
    console.error("[PRE-PUSH GUARD FAIL] Use 00_GOVERNED_RELEASE.ps1 so validation, whitelist, commit, and push stay coupled.");
    process.exit(1);
  }
}

function capture(args) {
  const r = spawnSync("git", args, { cwd: ROOT, encoding: "utf8", shell: false });
  if (r.error || r.status !== 0) {
    console.error(`[PRE-PUSH GUARD FAIL] git ${args.join(" ")} failed`);
    process.exit(1);
  }
  return (r.stdout || "").trim();
}

function ensureClean(label) {
  const dirty = capture(["status", "--porcelain=v1", "--untracked-files=all"]);
  if (dirty) {
    console.error(`\n[PRE-PUSH GUARD FAIL] ${label}`);
    console.error("The working tree must be clean so the validated files exactly match the commit being pushed.");
    console.error(dirty.split("\n").slice(0, 20).join("\n"));
    process.exit(1);
  }
}

assertGovernedPushInvocation();

const beforeHead = capture(["rev-parse", "HEAD"]);
ensureClean("Uncommitted or untracked files detected before release validation.");

console.log("\n[SlackQuant] Automatic pre-push release validation");
console.log(`[SlackQuant] HEAD ${beforeHead}`);

const result = spawnSync(process.execPath, ["scripts/validate-release.mjs"], {
  cwd: ROOT,
  stdio: "inherit",
  env: process.env,
  shell: false,
});
if (result.error || result.status !== 0) {
  console.error("\n[PRE-PUSH GUARD FAIL] Release validation failed. Push blocked.");
  process.exit(result.status ?? 1);
}

const afterHead = capture(["rev-parse", "HEAD"]);
if (afterHead !== beforeHead) {
  console.error("\n[PRE-PUSH GUARD FAIL] HEAD changed during validation. Push blocked.");
  process.exit(1);
}
ensureClean("Release validation changed the working tree. Commit the generated/normalized changes and push again.");

console.log("\nPRE_PUSH_RELEASE_GATE_PASS");
