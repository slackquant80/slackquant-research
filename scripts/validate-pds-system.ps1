param(
  [string]$PlatformRoot = ""
)

$ErrorActionPreference = "Stop"

if ([string]::IsNullOrWhiteSpace($PlatformRoot)) {
  $PlatformRoot = Split-Path -Parent $PSScriptRoot
}
$PlatformRoot = (Resolve-Path $PlatformRoot).Path

$validator = Join-Path $PlatformRoot "scripts\validate-pds-publication.py"
if (-not (Test-Path $validator)) {
  throw "Missing PDS publication validator: $validator"
}

Push-Location $PlatformRoot
try {
  python $validator
  if ($LASTEXITCODE -ne 0) {
    throw "PDS publication validator failed. ExitCode: $LASTEXITCODE"
  }


# PDS_PERFORMANCE_CLOCK_GATE_V1_0
$ClockValidator = Join-Path $PSScriptRoot "validate-pds-performance-clock.py"
if (-not (Test-Path $ClockValidator)) { throw "PDS performance-clock validator missing: $ClockValidator" }
& python $ClockValidator
if ($LASTEXITCODE -ne 0) { throw "PDS performance-clock validation failed" }
# PDS_PERFORMANCE_CLOCK_GATE_V1_0_END

  Write-Host "PDS_SYSTEM_PUBLICATION_GATE_PASS" -ForegroundColor Green
  Write-Host "System   : /systems/pds/ | Portfolio Decision & Operating System | flagship"
  Write-Host "Dashboard: /systems/pds/dashboard/ | current Core / Adaptive / Preview / Dynamic FX"
  Write-Host "Boundary : reader-facing system state public / machine-specific infrastructure private"
  Write-Host "Binding  : current PDS public dashboard -> SlackQuant platform summary"
}
finally {
  Pop-Location
}
