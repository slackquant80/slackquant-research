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
$pdsPage = [System.IO.File]::ReadAllText((Need "src\app\systems\pds\page.tsx"))
$f2rPage = [System.IO.File]::ReadAllText((Need "src\app\systems\f2r\page.tsx"))

foreach ($token in @(
  '"portfolio-decision"',
  '"portfolio-strategy"',
  '"risk-scenario"',
  'Portfolio Decision & Operating Systems',
  'Portfolio Strategy Systems',
  'Risk & Scenario Systems',
  'slug: "pds"',
  'systemGroup: "portfolio-decision"',
  'prominence: "flagship"',
  'slug: "adaa"',
  'slug: "f2r"',
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
  throw "Systems group ordering must keep portfolio-decision above portfolio-strategy above risk-scenario"
}

foreach ($token in @(
  'Operational systems organized by role in the investment process',
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

foreach ($token in @('ADAA + F2R','Protected until release gate','PDS is provider-agnostic and is not defined by any particular pair of strategies','Current provider configuration within a broader operating architecture','Historical operating state','not the definition of PDS','/systems/adaa/','/systems/f2r/')) {
  if ($pdsPage -notmatch [regex]::Escape($token)) { throw "PDS hierarchy/disclosure page contract missing: $token" }
}
foreach ($forbidden in @('Active Core architecture','Latest released strategy mix','Two independent Portfolio Strategy Systems')) {
  if ($pdsPage -match [regex]::Escape($forbidden)) { throw "PDS fixed-blend narrative regression: $forbidden" }
}
foreach ($token in @('Forecast-to-Rank Allocation (F2R)','Independent strategy system','current PDS Active Core provider','current operating state, not the definition of PDS','/systems/pds/')) {
  if ($f2rPage -notmatch [regex]::Escape($token)) { throw "F2R relationship contract missing: $token" }
}

Write-Host "SYSTEMS_POSITIONING_GATE_PASS" -ForegroundColor Green
Write-Host "Layers   : PDS operating layer > ADAA / F2R strategy layer > risk & scenario layer"
Write-Host "Flagship : PDS is public in portfolio-decision with flagship presentation"
Write-Host "Boundary : hierarchy reflects operating scope, not performance ranking"
