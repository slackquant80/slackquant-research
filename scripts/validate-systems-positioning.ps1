param(
  [string]$PlatformRoot = (Get-Location).Path
)

$ErrorActionPreference = "Stop"
$PlatformRoot = (Resolve-Path $PlatformRoot).Path

function Need([string]$Rel) {
  $p = Join-Path $PlatformRoot $Rel
  if (-not (Test-Path $p)) { throw "Missing required artifact: $Rel" }
  return $p
}

$systemsData = [System.IO.File]::ReadAllText((Need "src\data\systems.ts"))
$systemsIndex = [System.IO.File]::ReadAllText((Need "src\app\systems\page.tsx"))
$systemCard = [System.IO.File]::ReadAllText((Need "src\components\SystemCard.tsx"))
$css = [System.IO.File]::ReadAllText((Need "src\app\globals.css"))

foreach ($token in @(
  '"portfolio-decision"',
  '"portfolio-strategy"',
  '"risk-scenario"',
  'Portfolio Decision & Operating Systems',
  'Portfolio Strategy Systems',
  'Risk & Scenario Systems',
  'systemGroup: "portfolio-strategy"',
  'systemGroup: "risk-scenario"'
)) {
  if ($systemsData -notmatch [regex]::Escape($token)) {
    throw "Systems registry/taxonomy missing: $token"
  }
}

$decisionPos = $systemsData.IndexOf('key: "portfolio-decision"')
$strategyPos = $systemsData.IndexOf('key: "portfolio-strategy"')
$riskPos = $systemsData.IndexOf('key: "risk-scenario"')
if ($decisionPos -lt 0 -or $strategyPos -lt 0 -or $riskPos -lt 0 -or -not ($decisionPos -lt $strategyPos -and $strategyPos -lt $riskPos)) {
  throw "Systems group ordering must reserve the highest public layer for portfolio-decision systems"
}

foreach ($token in @(
  'Operational systems organized by decision role',
  'systemGroupDefinitions.map',
  'item.systemGroup === group.key',
  'if (!items.length) return null'
)) {
  if ($systemsIndex -notmatch [regex]::Escape($token)) {
    throw "Systems landing hierarchy contract missing: $token"
  }
}

if ($systemCard -notmatch [regex]::Escape('item.prominence === "flagship"')) {
  throw "SystemCard does not support flagship presentation"
}
if ($css -notmatch [regex]::Escape('.system-card-flagship')) {
  throw "Flagship system visual class missing"
}

Write-Host "SYSTEMS_POSITIONING_GATE_PASS" -ForegroundColor Green
Write-Host "Layers   : portfolio decision / portfolio strategy / risk & scenario"
Write-Host "Current  : empty groups hidden; no PDS placeholder required"
Write-Host "Future   : portfolio-decision + flagship presentation prepared for PDS"
