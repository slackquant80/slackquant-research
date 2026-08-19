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


# METHODS_HARD_NAVIGATION_GATE
# Quarto Methods pages live under public/methods rather than the Next.js route
# tree. Next Link can hand these destinations to the client router and produce
# the app-level not-found page. All crossings into /methods/ therefore use
# ordinary <a> navigation.
$methodsUsedSource = Get-Content (Join-Path $PlatformRoot "src\components\MethodsUsed.tsx") -Raw

foreach ($entry in @(
  @{ Name = "SiteHeader"; Text = $header },
  @{ Name = "HomePage"; Text = $homePage },
  @{ Name = "ResearchPage"; Text = $research },
  @{ Name = "MethodsUsed"; Text = $methodsUsedSource }
)) {
  if ($entry.Text -match '(?s)<Link[^>]*href="/methods/"') {
    throw "$($entry.Name) routes /methods/ through next/link; use a plain anchor for the static Quarto subtree"
  }
}

if ($methodsUsedSource -match '<Link[^>]*method-used-row') {
  throw "Research-to-Methods rows must use plain anchors, not next/link"
}
if ($methodsUsedSource -notmatch '<a[^>]*method-used-row[^>]*href=\{method\.href\}') {
  throw "Research-to-Methods hard-navigation anchor missing"
}

$hrefMatches = [regex]::Matches($methodsData, 'href:\s*"(?<href>/methods/[^"]+)"')
if ($hrefMatches.Count -lt 6) {
  throw "Expected Quantitative Methods href mappings were not found"
}
foreach ($match in $hrefMatches) {
  $href = $match.Groups['href'].Value
  $rel = $href.TrimStart('/') -replace '/', '\'
  $publicPath = Join-Path $PlatformRoot ("public\" + $rel)
  if (-not (Test-Path $publicPath)) {
    throw "Mapped Methods destination does not exist in public/: $href"
  }
}
Write-Host "METHODS_PLATFORM_INTEGRATION_VALIDATION_PASS" -ForegroundColor Green

