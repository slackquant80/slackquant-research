#!/usr/bin/env node
import { chmodSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const MARKER = "SLACKQUANT_MANAGED_PRE_PUSH_V1";

function git(args) {
  const r = spawnSync("git", args, { cwd: ROOT, encoding: "utf8", shell: false });
  if (r.error || r.status !== 0) return "";
  return (r.stdout || "").trim();
}

const gitDir = git(["rev-parse", "--git-dir"]);
if (!gitDir) {
  console.log("[hooks] No Git working tree detected; skipping local hook installation.");
  process.exit(0);
}

const hookPathRaw = git(["rev-parse", "--git-path", "hooks/pre-push"]);
if (!hookPathRaw) {
  console.error("[hooks] Could not resolve Git pre-push hook path.");
  process.exit(1);
}
const hookPath = resolve(ROOT, hookPathRaw);

if (existsSync(hookPath)) {
  const current = readFileSync(hookPath, "utf8");
  if (!current.includes(MARKER)) {
    console.error(`[hooks] Existing unmanaged pre-push hook found at ${hookPath}. Refusing to overwrite it.`);
    process.exit(1);
  }
}

mkdirSync(dirname(hookPath), { recursive: true });
const hook = `#!/bin/sh
# ${MARKER}
exec node scripts/pre-push-release-gate.mjs
`;
writeFileSync(hookPath, hook, { encoding: "utf8", mode: 0o755 });
try { chmodSync(hookPath, 0o755); } catch {}

console.log(`[hooks] ${MARKER} installed: ${hookPath}`);
