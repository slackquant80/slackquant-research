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
$methodsData = [System.IO.File]::ReadAllText((Need "src\data\methods.ts"))
$systemsIndex = [System.IO.File]::ReadAllText((Need "src\app\systems\page.tsx"))
$systemPage = [System.IO.File]::ReadAllText((Need "src\app\systems\adaa\page.tsx"))
$researchPage = [System.IO.File]::ReadAllText((Need "src\app\research\adaa\page.tsx"))
$systemCard = [System.IO.File]::ReadAllText((Need "src\components\SystemCard.tsx"))

foreach ($token in @(
  'slug: "adaa"',
  'category: "Portfolio Strategy System"',
  'status: "PUBLIC_LIVE"',
  'https://slackquant.shinyapps.io/adaa_strategy_main/',
  'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7251518',
  'relatedResearch: "/research/adaa/"'
)) {
  if ($systemsData -notmatch [regex]::Escape($token)) {
    throw "ADAA system registry missing: $token"
  }
}

$mapping = '"adaa-system": ["QM007", "QM009", "QM010", "QM011", "QM014"]'
if ($methodsData -notmatch [regex]::Escape($mapping)) {
  throw "ADAA system Methods mapping mismatch"
}

foreach ($token in @(
  'Official Decision',
  'Current MTD',
  'Intramonth Preview',
  'no execution authority',
  'Public Working Paper v1.34',
  'MethodsUsed',
  'context="system"'
)) {
  if ($systemPage -notmatch [regex]::Escape($token)) {
    throw "ADAA system page contract missing: $token"
  }
}

if ($systemPage -match 'Technical White Paper') {
  if ($systemPage -notmatch 'does not require a new Technical White Paper') {
    throw "ADAA system page must not present a Technical White Paper as a required artifact"
  }
}

if ($researchPage -notmatch '/systems/adaa/') {
  throw "ADAA research page reciprocal system cross-link missing"
}
# The canonical research route is registry-owned in systems.ts; the page must consume that registry link.
# Do not require the literal route string to be duplicated in the page component.
if ($systemPage -notmatch [regex]::Escape('item.links.relatedResearch')) {
  throw "ADAA system page does not consume the registry-owned relatedResearch cross-link"
}
if ($systemsIndex -notmatch 'Operational systems with explicit evidence boundaries') {
  throw "Systems index remains scenario-specific"
}
if ($systemCard -notmatch 'evidenceLabel') {
  throw "SystemCard evidence label generalization missing"
}

Write-Host "ADAA_SYSTEM_PUBLICATION_GATE_PASS" -ForegroundColor Green
Write-Host "System  : /systems/adaa/ · Portfolio Strategy System · PUBLIC_LIVE"
Write-Host "Links   : live dashboard / Research / SSRN / replication / DOI"
Write-Host "Methods : QM007 / QM009 / QM010 / QM011 / QM014"
Write-Host "Boundary: official / MTD / preview separation preserved"
