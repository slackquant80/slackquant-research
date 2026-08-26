param(
  [Parameter(Mandatory = $true)]
  [string]$MethodsRoot,

  [string]$PlatformRoot = (Get-Location).Path,

  [switch]$SkipRender
)

$ErrorActionPreference = "Stop"

$MethodsRoot = (Resolve-Path $MethodsRoot).Path
$PlatformRoot = (Resolve-Path $PlatformRoot).Path

$methodsConfig = Join-Path $MethodsRoot "_quarto.yml"
$platformPackage = Join-Path $PlatformRoot "package.json"
$renderedSite = Join-Path $MethodsRoot "95_BUILD\site"
$target = Join-Path $PlatformRoot "public\methods"

if (-not (Test-Path $methodsConfig)) {
  throw "MethodsRoot does not contain _quarto.yml: $MethodsRoot"
}
if (-not (Test-Path $platformPackage)) {
  throw "PlatformRoot does not look like the SlackQuant Research repository (package.json missing): $PlatformRoot"
}

if (-not $SkipRender) {
  $quarto = Get-Command quarto -ErrorAction SilentlyContinue
  if (-not $quarto) {
    throw "Quarto CLI is not available on PATH. Install Quarto or rerun with -SkipRender only if 95_BUILD/site is already current."
  }

  Write-Host "Rendering canonical Quantitative Methods site..." -ForegroundColor Cyan
  Push-Location $MethodsRoot
  try {
    & quarto render
    if ($LASTEXITCODE -ne 0) { throw "quarto render failed with exit code $LASTEXITCODE" }
  }
  finally {
    Pop-Location
  }
}

$renderedIndex = Join-Path $renderedSite "index.html"
if (-not (Test-Path $renderedIndex)) {
  throw "Rendered Methods index not found: $renderedIndex"
}

Write-Host "Synchronizing generated site to platform public/methods..." -ForegroundColor Cyan
if (Test-Path $target) {
  Remove-Item $target -Recurse -Force
}
New-Item -ItemType Directory -Path $target -Force | Out-Null
Copy-Item (Join-Path $renderedSite "*") $target -Recurse -Force

$targetIndex = Join-Path $target "index.html"
if (-not (Test-Path $targetIndex)) {
  throw "Sync failed: $targetIndex is missing"
}

$articleChecks = @(
  "10_FORECAST_EVALUATION\QM001_OUT_OF_SAMPLE_EVALUATION\article.html",
  "10_FORECAST_EVALUATION\QM002_ROLLING_VS_EXPANDING_WINDOWS\article.html",
  "80_DATA_RESEARCH_DESIGN\QM003_LOOK_AHEAD_BIAS_DATA_LEAKAGE\article.html",
  "10_FORECAST_EVALUATION\QM004_DIEBOLD_MARIANO_TEST\article.html",
  "10_FORECAST_EVALUATION\QM005_MODEL_CONFIDENCE_SET\article.html",
  "20_STATISTICAL_INFERENCE\QM006_BLOCK_BOOTSTRAP\article.html",
  "40_PORTFOLIO_METHODS\QM007_PORTFOLIO_BACKTESTING_REBALANCING\article.html",
  "40_PORTFOLIO_METHODS\QM008_DRAWDOWN_UNDERWATER_DURATION_RECOVERY\article.html",
  "40_PORTFOLIO_METHODS\QM009_TURNOVER_COSTS\article.html",
  "40_PORTFOLIO_METHODS\QM010_MOMENTUM_TREND\article.html",
  "40_PORTFOLIO_METHODS\QM011_DECISION_DIVERSIFICATION\article.html",
  "40_PORTFOLIO_METHODS\QM012_ROLLING_HOLDING_PERIODS\article.html",
  "40_PORTFOLIO_METHODS\QM013_BENCHMARK_RELATIVE\article.html",
  "80_DATA_RESEARCH_DESIGN\QM014_MACRO_INFORMATION_TIMING\article.html",
  "10_FORECAST_EVALUATION\QM015_MULTIVARIATE_PROBABILISTIC_EVALUATION\article.html",
  "30_TIME_SERIES\QM016_EWMA_T_SCENARIO_SIMULATION\article.html",
  "40_PORTFOLIO_METHODS\QM017_SCENARIO_STRESS_TESTING\article.html",
  "80_DATA_RESEARCH_DESIGN\QM018_STRESS_ARCHETYPES_GEOMETRY\article.html"
)
foreach ($rel in $articleChecks) {
  $p = Join-Path $target $rel
  if (-not (Test-Path $p)) {
    throw "Expected rendered article is missing after sync: $p"
  }
}

Write-Host "METHODS_PLATFORM_SYNC_PASS" -ForegroundColor Green
Write-Host "Source : $renderedSite"
Write-Host "Target : $target"
Write-Host "Next   : npm run build"
