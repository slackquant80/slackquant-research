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

function assertCanonicalReleaseContract() {
  const pkg = JSON.parse(readFileSync(requireFile("package.json"), "utf8"));
  if (pkg?.scripts?.["validate:release"] !== "node scripts/validate-release.mjs") {
    fail("package.json must map validate:release to scripts/validate-release.mjs");
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

  for (const rel of [
    "scripts/normalize-methods-navigation.ps1",
    "scripts/validate-pds-publication.py",
    "scripts/validate-methods-ui-integrity.py",
    "scripts/validate-f2r-documentation.py",
    "scripts/validate-platform-full-audit.py",
    "scripts/validate-three-systems-surface.py",
  ]) {
    requireFile(rel);
  }
}

console.log("SLACKQUANT_CANONICAL_RELEASE_GATE_V1");
assertCanonicalReleaseContract();

runPowerShell("Normalize rendered Methods shell", "scripts/normalize-methods-navigation.ps1", ["-PlatformRoot", "."]);

// Source-level gates. System-specific contracts are checked before the broad platform audit
// so failures identify the owning surface first.
runPython("PDS publication source audit", "scripts/validate-pds-publication.py");
runPython("Methods UI source audit", "scripts/validate-methods-ui-integrity.py");
runPython("F2R documentation source audit", "scripts/validate-f2r-documentation.py");
runPython("Platform source audit", "scripts/validate-platform-full-audit.py");

runNpm("Typecheck", "typecheck");
runNpm("Build static site", "build");

// Built-output gates. These run against the exact out/ tree that GitHub Pages will upload.
runPython("Platform built-output audit", "scripts/validate-platform-full-audit.py", ["--require-build"]);
runPython("Methods UI built-output audit", "scripts/validate-methods-ui-integrity.py", ["--require-build"]);
runPython("F2R documentation built-output audit", "scripts/validate-f2r-documentation.py", ["--require-build"]);
runPython("Consolidated systems / methods / indexability gate", "scripts/validate-three-systems-surface.py", ["--require-build"]);

console.log("\nRELEASE_VALIDATION_PASS");
