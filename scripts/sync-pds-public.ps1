param(
  [string]$ResearchRoot = "",
  [string]$AsOfDate = (Get-Date -Format 'yyyy-MM-dd')
)

$ErrorActionPreference = "Stop"
$AppRoot = Split-Path -Parent $PSScriptRoot
$ProjectRoot = Split-Path -Parent $AppRoot

function Resolve-PdsResearchRoot {
  param(
    [string]$RequestedRoot,
    [string]$StartPath
  )

  if (-not [string]::IsNullOrWhiteSpace($RequestedRoot)) {
    $resolved = (Resolve-Path $RequestedRoot).Path
    if (-not (Test-Path (Join-Path $resolved '02_RESEARCH_SYSTEMS'))) {
      throw "Specified ResearchRoot does not contain 02_RESEARCH_SYSTEMS: $resolved"
    }
    return $resolved
  }

  $cursor = (Resolve-Path $StartPath).Path
  for ($i = 0; $i -lt 8; $i++) {
    if (Test-Path (Join-Path $cursor '02_RESEARCH_SYSTEMS')) {
      return $cursor
    }
    $parent = Split-Path -Parent $cursor
    if ([string]::IsNullOrWhiteSpace($parent) -or $parent -eq $cursor) {
      break
    }
    $cursor = $parent
  }

  throw "Could not locate the Research root containing 02_RESEARCH_SYSTEMS from platform path: $StartPath"
}

$ResearchRoot = Resolve-PdsResearchRoot -RequestedRoot $ResearchRoot -StartPath $ProjectRoot

$PdsRoot = Join-Path $ResearchRoot '02_RESEARCH_SYSTEMS'
$PdsVersionFile = Join-Path $PdsRoot 'VERSION'
$Rs03VersionFile = Join-Path $PdsRoot 'RS-03_PORTFOLIO_DECISION_SYSTEM\VERSION'
$PdsExporterRunner = Join-Path $PdsRoot '90_INTERNAL_RUNNERS\BUILD_PDS_PUBLIC_SAFE_EXPORT.ps1'
$StateRoot = Join-Path $ResearchRoot '_LOCAL_PRIVATE_DATA\RS03\operational'
$StatePath = Join-Path $StateRoot 'state.json'
$ExportRoot = Join-Path $ResearchRoot '_LOCAL_PRIVATE_DATA\RS03\publication\pds_public_safe_latest'
$Binder = Join-Path $PSScriptRoot 'bind-pds-public-export.py'

Write-Host "Research root: $ResearchRoot" -ForegroundColor DarkGray

foreach ($p in @($PdsVersionFile,$Rs03VersionFile,$PdsExporterRunner,$StatePath,$Binder)) {
  if (-not (Test-Path $p)) { throw "Required PDS publication input not found: $p" }
}

$ProgramVersion = ([System.IO.File]::ReadAllText($PdsVersionFile)).Trim()
$Rs03Version = ([System.IO.File]::ReadAllText($Rs03VersionFile)).Trim()
$State = Get-Content -Raw -Encoding UTF8 $StatePath | ConvertFrom-Json
$PrivateDashboard = [string]$State.dashboard.html_path
if ([string]::IsNullOrWhiteSpace($PrivateDashboard)) {
  $PrivateDashboard = Join-Path $StateRoot 'dashboard\Portfolio_Decision_Lab.html'
}
if (-not (Test-Path $PrivateDashboard)) { throw "Private PDS dashboard not found: $PrivateDashboard" }

Write-Host "PDS public synchronization" -ForegroundColor Cyan
Write-Host "Source : $ProgramVersion / RS-03 $Rs03Version"
Write-Host "As of  : $AsOfDate"
Write-Host "Policy : completed holding month / protected current state"
Write-Host "Alias  : ADAA + F2R"

& powershell -NoProfile -ExecutionPolicy Bypass -File $PdsExporterRunner -PrivateDashboard $PrivateDashboard -OutputRoot $ExportRoot -AsOfDate $AsOfDate
if ($LASTEXITCODE -ne 0) { throw "Source-owned PDS public export failed. ExitCode: $LASTEXITCODE" }

python $Binder --export-root $ExportRoot --app-root $AppRoot
if ($LASTEXITCODE -ne 0) { throw "SlackQuant PDS public binding failed. ExitCode: $LASTEXITCODE" }

Write-Host "PDS_PUBLIC_SYNC_PASS" -ForegroundColor Green
Write-Host "Bound only source-approved public export files; private/operator state remains outside the platform tree."
