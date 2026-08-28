param(
  [string]$PlatformRoot = (Get-Location).Path
)

$ErrorActionPreference = "Stop"
$PlatformRoot = (Resolve-Path $PlatformRoot).Path
$normalizer = Join-Path $PlatformRoot "scripts\normalize-methods-navigation.ps1"

if (-not (Test-Path $normalizer)) {
  throw "Missing Methods navigation normalizer: $normalizer"
}

& powershell -ExecutionPolicy Bypass -File $normalizer -PlatformRoot $PlatformRoot -CheckOnly
if ($LASTEXITCODE -ne 0) {
  throw "Methods platform navigation validation failed with exit code $LASTEXITCODE"
}

Write-Host "METHODS_PLATFORM_NAVIGATION_GATE_PASS" -ForegroundColor Green