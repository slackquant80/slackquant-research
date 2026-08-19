param(
  [string]$PlatformRoot = (Get-Location).Path
)

$ErrorActionPreference = "Stop"
$PlatformRoot = (Resolve-Path $PlatformRoot).Path
$required = @(
  "src\\components\\SiteHeader.tsx",
  "src\\components\\MethodsUsed.tsx",
  "src\\data\\methods.ts",
  "src\\app\\page.tsx",
  "src\\app\\research\\page.tsx",
  "src\\app\\research\\beyond-average-accuracy\\page.tsx",
  "src\\app\\about\\page.tsx",
  "src\\app\\sitemap.ts",
  "public\\methods\\index.html",
  "public\\methods\\10_FORECAST_EVALUATION\\QM002_ROLLING_VS_EXPANDING_WINDOWS\\article.html"
)
foreach ($rel in $required) {
  $p = Join-Path $PlatformRoot $rel
  if (-not (Test-Path $p)) { throw "Missing required integration artifact: $rel" }
}

$homePage = Get-Content (Join-Path $PlatformRoot "src\\app\\page.tsx") -Raw
$header = Get-Content (Join-Path $PlatformRoot "src\\components\\SiteHeader.tsx") -Raw
$research = Get-Content (Join-Path $PlatformRoot "src\\app\\research\\page.tsx") -Raw
$beyond = Get-Content (Join-Path $PlatformRoot "src\\app\\research\\beyond-average-accuracy\\page.tsx") -Raw
$methodsData = Get-Content (Join-Path $PlatformRoot "src\\data\\methods.ts") -Raw
$methodsIndex = Get-Content (Join-Path $PlatformRoot "public\\methods\\index.html") -Raw
$methodArticle = Get-Content (Join-Path $PlatformRoot "public\\methods\\10_FORECAST_EVALUATION\\QM002_ROLLING_VS_EXPANDING_WINDOWS\\article.html") -Raw

if ($header -notmatch '/methods/') { throw "Header Methods link missing" }
if ($homePage -notmatch 'Cross-cutting methods library') { throw "Home Methods layer copy missing" }
if ($research -notmatch 'Cross-cutting methods layer') { throw "Research-page Methods bridge missing" }
if ($beyond -notmatch 'MethodsUsed') { throw "Beyond Average Accuracy Methods bridge missing" }
foreach ($id in @('QM001','QM002','QM003','QM004','QM005')) {
  if ($methodsData -notmatch $id) { throw "Research-method mapping missing: $id" }
}
foreach ($label in @('Research','Methods','About','GitHub')) {
  if ($methodsIndex -notmatch $label) { throw "Methods global header label missing: $label" }
}
# Search is disabled at the Quarto website level. Do not fail merely because
# generated HTML or bundled assets contain the token "quarto-search".
# Fail only when a visible Quarto search control is actually rendered.
$visibleSearchPatterns = @(
  'id=["'']quarto-search["'']',
  'class=["''][^"'']*quarto-search-button',
  'aria-label=["'']Search["''][^>]*class=["''][^"'']*quarto-search'
)
foreach ($pattern in $visibleSearchPatterns) {
  if ($methodsIndex -match $pattern) { throw "Methods search UI should be disabled" }
}
if ($methodArticle -match 'quarto-code-tools') { throw "Generic Quarto Code tools should be disabled" }

Write-Host "METHODS_PLATFORM_INTEGRATION_VALIDATION_PASS" -ForegroundColor Green
