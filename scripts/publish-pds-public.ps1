param(
  [string]$ResearchRoot = "",
  [string]$AsOfDate = (Get-Date -Format 'yyyy-MM-dd')
)
$ErrorActionPreference = "Stop"
# PDS_SOURCE_OWNED_RELEASE_DELEGATE_V1
# Compatibility entry only. Routine PDS publication authority lives in
# 02_RESEARCH_SYSTEMS/90_INTERNAL_RUNNERS/PDS_RELEASE.ps1.

$AppRoot = Split-Path -Parent $PSScriptRoot
$ProjectRoot = Split-Path -Parent $AppRoot

function Resolve-PdsResearchRoot([string]$RequestedRoot,[string]$StartPath) {
  if (-not [string]::IsNullOrWhiteSpace($RequestedRoot)) {
    $resolved=(Resolve-Path $RequestedRoot).Path
    if (-not (Test-Path (Join-Path $resolved '02_RESEARCH_SYSTEMS'))) { throw "Specified ResearchRoot does not contain 02_RESEARCH_SYSTEMS: $resolved" }
    return $resolved
  }
  $cursor=(Resolve-Path $StartPath).Path
  for ($i=0; $i -lt 8; $i++) {
    if (Test-Path (Join-Path $cursor '02_RESEARCH_SYSTEMS')) { return $cursor }
    $parent=Split-Path -Parent $cursor
    if ([string]::IsNullOrWhiteSpace($parent) -or $parent -eq $cursor) { break }
    $cursor=$parent
  }
  throw "Could not locate the Research root containing 02_RESEARCH_SYSTEMS from platform path: $StartPath"
}

$ResearchRoot=Resolve-PdsResearchRoot $ResearchRoot $ProjectRoot
$ProgramRoot=Join-Path $ResearchRoot '02_RESEARCH_SYSTEMS'
$Controller=Join-Path $ProgramRoot '90_INTERNAL_RUNNERS\PDS_RELEASE.ps1'
if (-not (Test-Path $Controller)) { throw "Canonical source-owned PDS release controller is missing: $Controller" }
Write-Host "PDS publication is delegated to the source-owned unified production controller." -ForegroundColor Cyan
Write-Host "Research root: $ResearchRoot" -ForegroundColor DarkGray
Write-Host "Compatibility AsOfDate argument is no longer a separate publication clock: $AsOfDate" -ForegroundColor DarkGray
& powershell -NoProfile -ExecutionPolicy Bypass -File $Controller -ProgramRoot $ProgramRoot -Action refresh-publish
exit $LASTEXITCODE
