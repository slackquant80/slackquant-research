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

  Write-Host "PDS_SYSTEM_PUBLICATION_GATE_PASS" -ForegroundColor Green
  Write-Host "System   : /systems/pds/ | Portfolio Decision & Operating System | flagship"
  Write-Host "Boundary : open architecture / delayed history / protected current decision state"
  Write-Host "Binding  : governed source export -> SlackQuant public read model"
}
finally {
  Pop-Location
}
