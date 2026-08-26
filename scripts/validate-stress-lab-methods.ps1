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

$methodsData = [System.IO.File]::ReadAllText((Need "src\data\methods.ts"))
$methodsUsed = [System.IO.File]::ReadAllText((Need "src\components\MethodsUsed.tsx"))
$stressPage = [System.IO.File]::ReadAllText((Need "src\app\systems\scenario-stress-lab\page.tsx"))

$expectedMethods = @(
  @("QM015", "Multivariate Probabilistic Forecast Evaluation", "/methods/10_FORECAST_EVALUATION/QM015_MULTIVARIATE_PROBABILISTIC_EVALUATION/article.html"),
  @("QM016", "EWMA-t Scenario Simulation", "/methods/30_TIME_SERIES/QM016_EWMA_T_SCENARIO_SIMULATION/article.html"),
  @("QM017", "Scenario-Based Portfolio Stress Testing", "/methods/40_PORTFOLIO_METHODS/QM017_SCENARIO_STRESS_TESTING/article.html"),
  @("QM018", "Stress Archetypes and Representative Scenario Geometry", "/methods/80_DATA_RESEARCH_DESIGN/QM018_STRESS_ARCHETYPES_GEOMETRY/article.html")
)

foreach ($method in $expectedMethods) {
  foreach ($token in $method) {
    if ($methodsData -notmatch [regex]::Escape($token)) {
      throw "Stress Lab Methods registry missing: $token"
    }
  }

  $href = $method[2]
  $rel = $href.TrimStart("/") -replace "/", "\"
  Need ("public\" + $rel) | Out-Null
}

$mapping = '"scenario-stress-lab": ["QM001", "QM003", "QM006", "QM015", "QM016", "QM017", "QM018"]'
if ($methodsData -notmatch [regex]::Escape($mapping)) {
  throw "Stress Lab Methods mapping mismatch"
}

if ($stressPage -notmatch 'MethodsUsed') {
  throw "Stress Lab MethodsUsed component missing"
}
if ($stressPage -notmatch 'href="#methods"') {
  throw "Stress Lab Quantitative Methods TOC anchor missing"
}
if ($stressPage -notmatch 'context="system"') {
  throw "Stress Lab MethodsUsed system-context label missing"
}
if ($methodsUsed -notmatch 'Methods used in this system') {
  throw "MethodsUsed system heading support missing"
}

$mappingLine = [regex]::Match($methodsData, '"scenario-stress-lab": \[[^\]]+\]').Value
foreach ($excluded in @("QM007", "QM008", "QM014")) {
  if ($mappingLine -match $excluded) {
    throw "Excluded method appears in Stress Lab core mapping: $excluded"
  }
}

Write-Host "STRESS_LAB_METHODS_INTEGRATION_PASS" -ForegroundColor Green
Write-Host "Mapping : QM001 / QM003 / QM006 / QM015 / QM016 / QM017 / QM018"
Write-Host "Excluded: QM007 / QM008 / QM014"
Write-Host "Page    : Methods used in this system"
