@echo off
setlocal
cd /d "%~dp0"

echo [SlackQuant] Canonical release validation

where npm.cmd >nul 2>nul
if errorlevel 1 (
  echo [FAIL] Node.js/npm is not available on PATH.
  exit /b 1
)

if not exist "node_modules\.bin\tsc.cmd" (
  echo [INFO] node_modules is missing or incomplete. Installing from package-lock.json...
  call npm.cmd ci --no-audit --no-fund
  if errorlevel 1 exit /b %errorlevel%
)

call npm.cmd run validate:release
set RC=%ERRORLEVEL%
if not "%RC%"=="0" (
  echo [FAIL] Canonical release validation failed. Do not push.
  exit /b %RC%
)

echo [PASS] RELEASE_VALIDATION_PASS
exit /b 0
