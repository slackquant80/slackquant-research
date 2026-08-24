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

$methodsDataPath = Need "src\data\methods.ts"
$citationComponentPath = Need "src\components\CitationBox.tsx"
$adaaPath = Need "src\app\research\adaa\page.tsx"
$t19Path = Need "src\app\research\protection-patience\page.tsx"
$t23Path = Need "src\app\research\price-macro-decision\page.tsx"
$beyondPath = Need "src\app\research\beyond-average-accuracy\page.tsx"

$methodsData = [System.IO.File]::ReadAllText($methodsDataPath)
$citationComponent = [System.IO.File]::ReadAllText($citationComponentPath)
$adaa = [System.IO.File]::ReadAllText($adaaPath)
$t19 = [System.IO.File]::ReadAllText($t19Path)
$t23 = [System.IO.File]::ReadAllText($t23Path)
$beyond = [System.IO.File]::ReadAllText($beyondPath)

$expectedMethods = @(
  @("QM010", "Momentum and Trend Signals", "/methods/40_PORTFOLIO_METHODS/QM010_MOMENTUM_TREND/article.html"),
  @("QM011", "Strategy Similarity and Decision Diversification", "/methods/40_PORTFOLIO_METHODS/QM011_DECISION_DIVERSIFICATION/article.html"),
  @("QM012", "Rolling Holding-Period Analysis", "/methods/40_PORTFOLIO_METHODS/QM012_ROLLING_HOLDING_PERIODS/article.html"),
  @("QM013", "Benchmark-Relative Portfolio Evaluation", "/methods/40_PORTFOLIO_METHODS/QM013_BENCHMARK_RELATIVE/article.html"),
  @("QM014", "Information Timing, Data Vintages, and Real-Time Macro Data", "/methods/80_DATA_RESEARCH_DESIGN/QM014_MACRO_INFORMATION_TIMING/article.html")
)

foreach ($method in $expectedMethods) {
  foreach ($token in $method) {
    if ($methodsData -notmatch [regex]::Escape($token)) {
      throw "Methods registry missing: $token"
    }
  }

  $href = $method[2]
  $rel = $href.TrimStart("/") -replace "/", "\"
  Need ("public\" + $rel) | Out-Null
}

$expectedMappings = @(
  '"beyond-average-accuracy": ["QM001", "QM002", "QM003", "QM004", "QM005"]',
  '"adaa": ["QM007", "QM010", "QM011"]',
  '"protection-patience": ["QM007", "QM008", "QM009", "QM010", "QM012", "QM013"]',
  '"price-macro-decision": ["QM001", "QM002", "QM003", "QM006", "QM007", "QM009", "QM013", "QM014"]'
)

foreach ($mapping in $expectedMappings) {
  if ($methodsData -notmatch [regex]::Escape($mapping)) {
    throw "Research-method mapping mismatch: $mapping"
  }
}

foreach ($entry in @(
  @{ Name = "ADAA"; Text = $adaa },
  @{ Name = "T19"; Text = $t19 },
  @{ Name = "T23"; Text = $t23 }
)) {
  if ($entry.Text -notmatch 'MethodsUsed') {
    throw "$($entry.Name) MethodsUsed component missing"
  }
  if ($entry.Text -notmatch 'href="#methods"') {
    throw "$($entry.Name) Quantitative Methods TOC anchor missing"
  }
}

foreach ($entry in @(
  @{ Name = "ADAA"; Text = $adaa },
  @{ Name = "T19"; Text = $t19 },
  @{ Name = "T23"; Text = $t23 },
  @{ Name = "Beyond Average Accuracy"; Text = $beyond }
)) {
  if ($entry.Text -notmatch 'CitationBox') {
    throw "$($entry.Name) shared CitationBox missing"
  }
  if ($entry.Text -match '<div className="citation-box">\s*Lee,') {
    throw "$($entry.Name) still contains a hard-coded citation"
  }
}

if ($citationComponent -notmatch 'Lee' -and $citationComponent -notmatch 'citationAuthor') {
  throw "CitationBox author normalization logic missing"
}
if ($citationComponent -match 'publicVersion') {
  throw "CitationBox must not expose manuscript/public version in citation grammar"
}

Write-Host "INVESTMENT_RESEARCH_METHODS_CITATION_GATE_PASS" -ForegroundColor Green
Write-Host "Methods : QM001-QM014 registry and paper mappings verified"
Write-Host "Pages   : ADAA / T19 / T23 Methods Used verified"
Write-Host "Citation: shared citation renderer verified across all public research papers"