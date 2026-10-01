#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const IS_WINDOWS = process.platform === "win32";
const PYTHON = process.env.PYTHON || (IS_WINDOWS ? "python" : "python3");
const POWERSHELL = IS_WINDOWS ? "powershell.exe" : "pwsh";
const CMD = process.env.ComSpec || "cmd.exe";

function fail(message) {
  console.error(`\n[RELEASE GATE FAIL] ${message}`);
  process.exit(1);
}

function requireFile(rel) {
  const path = resolve(ROOT, rel);
  if (!existsSync(path)) fail(`Missing required release-gate file: ${rel}`);
  return path;
}

function requireText(rel, tokens) {
  const text = readFileSync(requireFile(rel), "utf8");
  for (const token of tokens) {
    if (!text.includes(token)) fail(`${rel} is missing release contract token: ${token}`);
  }
  return text;
}

function capture(command, args) {
  const result = spawnSync(command, args, {
    cwd: ROOT,
    encoding: "utf8",
    env: process.env,
    shell: false,
  });
  if (result.error || result.status !== 0) return "";
  return (result.stdout || "").trim();
}

function run(label, command, args) {
  console.log(`\n=== ${label} ===`);
  const result = spawnSync(command, args, {
    cwd: ROOT,
    stdio: "inherit",
    env: process.env,
    shell: false,
  });
  if (result.error) fail(`${label}: ${result.error.message}`);
  if (result.status !== 0) process.exit(result.status ?? 1);
}

function runPython(label, script, extra = []) {
  requireFile(script);
  run(label, PYTHON, [script, ...extra]);
}

function runNpm(label, script) {
  if (IS_WINDOWS) {
    run(label, CMD, ["/d", "/s", "/c", `npm.cmd run ${script}`]);
  } else {
    run(label, "npm", ["run", script]);
  }
}

function runPowerShell(label, script, extra = []) {
  requireFile(script);
  const args = IS_WINDOWS
    ? ["-NoProfile", "-ExecutionPolicy", "Bypass", "-File", script, ...extra]
    : ["-NoProfile", "-File", script, ...extra];
  run(label, POWERSHELL, args);
}

function assertManagedPrePushHook() {
  const hookPath = capture("git", ["rev-parse", "--git-path", "hooks/pre-push"]);
  if (!hookPath) fail("Git pre-push hook path is unavailable.");
  const absoluteHook = resolve(ROOT, hookPath);
  if (!existsSync(absoluteHook)) {
    fail("Managed pre-push guard is not installed. Run: npm run install:hooks");
  }
  const hook = readFileSync(absoluteHook, "utf8");
  if (!hook.includes("SLACKQUANT_MANAGED_PRE_PUSH_V1")) {
    fail("pre-push hook is not the SlackQuant managed release guard.");
  }
}

function assertCanonicalReleaseContract() {
  const pkg = JSON.parse(readFileSync(requireFile("package.json"), "utf8"));
  if (pkg?.scripts?.["validate:release"] !== "node scripts/validate-release.mjs") {
    fail("package.json must map validate:release to scripts/validate-release.mjs");
  }
  if (pkg?.scripts?.["install:hooks"] !== "node scripts/install-git-hooks.mjs") {
    fail("package.json must map install:hooks to scripts/install-git-hooks.mjs");
  }
  if (pkg?.scripts?.prepare !== "node scripts/install-git-hooks.mjs") {
    fail("package.json prepare must auto-install the managed Git pre-push guard.");
  }

  const workflow = requireText(".github/workflows/deploy-pages.yml", [
    "run: npm run validate:release",
  ]);
  const forbiddenDirectCiSteps = [
    "scripts/validate-platform-full-audit.py",
    "scripts/validate-methods-ui-integrity.py",
    "scripts/validate-f2r-documentation.py",
    "scripts/validate-pds-publication.py",
    "scripts/validate-three-systems-surface",
    "run: npm run typecheck",
    "run: npm run build",
  ];
  for (const token of forbiddenDirectCiSteps) {
    if (workflow.includes(token)) {
      fail(`CI duplicates canonical release logic instead of delegating to validate:release: ${token}`);
    }
  }

  requireText("00_VALIDATE_RELEASE.cmd", ["npm.cmd run validate:release"]);
  requireFile("scripts/install-git-hooks.mjs");
  requireFile("scripts/pre-push-release-gate.mjs");

  for (const rel of [
    "scripts/normalize-methods-navigation.ps1",
    "scripts/validate-pds-publication.py",
    "scripts/validate-methods-ui-integrity.py",
    "scripts/validate-f2r-documentation.py",
    "scripts/validate-platform-full-audit.py",
    "scripts/validate-three-systems-surface.py",
    "scripts/validate-system-publication-boundaries.py",
  ]) {
    requireFile(rel);
  }

  // This turns the local guard into part of the release contract rather than a remembered convention.
  assertManagedPrePushHook();
}

console.log("SLACKQUANT_CANONICAL_RELEASE_GATE_V2");
assertCanonicalReleaseContract();

runPowerShell("Normalize rendered Methods shell", "scripts/normalize-methods-navigation.ps1", ["-PlatformRoot", "."]);

runPython("System publication boundary audit", "scripts/validate-system-publication-boundaries.py");
runPython("PDS publication source audit", "scripts/validate-pds-publication.py");
runPython("Methods UI source audit", "scripts/validate-methods-ui-integrity.py");
runPython("F2R documentation source audit", "scripts/validate-f2r-documentation.py");
runPython("Platform source audit", "scripts/validate-platform-full-audit.py");

runNpm("Typecheck", "typecheck");
runNpm("Build static site", "build");

runPython("Platform built-output audit", "scripts/validate-platform-full-audit.py", ["--require-build"]);
runPython("Methods UI built-output audit", "scripts/validate-methods-ui-integrity.py", ["--require-build"]);
runPython("F2R documentation built-output audit", "scripts/validate-f2r-documentation.py", ["--require-build"]);
runPython("Consolidated systems / methods / indexability gate", "scripts/validate-three-systems-surface.py", ["--require-build"]);

console.log("\nRELEASE_VALIDATION_PASS");
