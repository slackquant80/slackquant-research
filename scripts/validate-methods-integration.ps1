param(
  [string]$PlatformRoot = (Get-Location).Path
)

$ErrorActionPreference = "Stop"
$PlatformRoot = (Resolve-Path $PlatformRoot).Path

$required = @(
  "src\components\SiteHeader.tsx",
  "src\components\MethodsUsed.tsx",
  "src\data\methods.ts",
  "src\app\page.tsx",
  "src\app\research\page.tsx",
  "src\app\research\beyond-average-accuracy\page.tsx",
  "src\app\about\page.tsx",
  "src\app\sitemap.ts",
  "public\methods\index.html",
  "public\methods\10_FORECAST_EVALUATION\QM001_OUT_OF_SAMPLE_EVALUATION\article.html",
  "public\methods\10_FORECAST_EVALUATION\QM002_ROLLING_VS_EXPANDING_WINDOWS\article.html",
  "public\methods\80_DATA_RESEARCH_DESIGN\QM003_LOOK_AHEAD_BIAS_DATA_LEAKAGE\article.html",
  "public\methods\10_FORECAST_EVALUATION\QM004_DIEBOLD_MARIANO_TEST\article.html",
  "public\methods\10_FORECAST_EVALUATION\QM005_MODEL_CONFIDENCE_SET\article.html",
  "public\methods\20_STATISTICAL_INFERENCE\QM006_BLOCK_BOOTSTRAP\article.html"
)

foreach ($rel in $required) {
  $p = Join-Path $PlatformRoot $rel
  if (-not (Test-Path $p)) { throw "Missing required integration artifact: $rel" }
}

$homePage = Get-Content (Join-Path $PlatformRoot "src\app\page.tsx") -Raw
$header = Get-Content (Join-Path $PlatformRoot "src\components\SiteHeader.tsx") -Raw
$research = Get-Content (Join-Path $PlatformRoot "src\app\research\page.tsx") -Raw
$beyond = Get-Content (Join-Path $PlatformRoot "src\app\research\beyond-average-accuracy\page.tsx") -Raw
$methodsUsedSource = Get-Content (Join-Path $PlatformRoot "src\components\MethodsUsed.tsx") -Raw
$methodsData = Get-Content (Join-Path $PlatformRoot "src\data\methods.ts") -Raw
$methodsIndex = Get-Content (Join-Path $PlatformRoot "public\methods\index.html") -Raw
$methodArticle = Get-Content (Join-Path $PlatformRoot "public\methods\10_FORECAST_EVALUATION\QM002_ROLLING_VS_EXPANDING_WINDOWS\article.html") -Raw

# Main-platform surface checks.
if ($header -notmatch '/methods/') { throw "Header Methods link missing" }
if ($homePage -notmatch 'Cross-cutting methods library') { throw "Home Methods layer copy missing" }
if ($research -notmatch 'Cross-cutting methods layer') { throw "Research-page Methods bridge missing" }
if ($beyond -notmatch 'MethodsUsed') { throw "Beyond Average Accuracy Methods bridge missing" }
foreach ($id in @('QM001','QM002','QM003','QM004','QM005')) {
  if ($methodsData -notmatch $id) { throw "Research-method mapping missing: $id" }
}

# Next.js -> Quarto boundary: use hard browser navigation, not next/link.
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
if ($methodsUsedSource -notmatch '<a[^>]*className="method-used-row"[^>]*href=\{method\.href\}') {
  throw "Research-to-Methods hard-navigation anchor missing"
}

# Every mapped method href must exist under public/.
$hrefMatches = [regex]::Matches($methodsData, 'href:\s*"(?<href>/methods/[^"]+)"')
if ($hrefMatches.Count -lt 6) { throw "Expected Quantitative Methods href mappings were not found" }
foreach ($match in $hrefMatches) {
  $href = $match.Groups['href'].Value
  $rel = $href.TrimStart('/') -replace '/', '\'
  $publicPath = Join-Path $PlatformRoot ("public\" + $rel)
  if (-not (Test-Path $publicPath)) { throw "Mapped Methods destination does not exist in public/: $href" }
}

# Quarto -> Next.js boundary: generated navbar must preserve absolute canonical
# URLs. Root-relative links are rewritten by Quarto inside /methods/ and can
# produce a first-click 404 such as /methods/.../research/.
$methodsHtmlFiles = Get-ChildItem (Join-Path $PlatformRoot "public\methods") -Filter "*.html" -Recurse
$navbarPagesChecked = 0
foreach ($file in $methodsHtmlFiles) {
  $html = Get-Content $file.FullName -Raw
  if ($html -notmatch 'navbar-title') { continue }
  $navbarPagesChecked++
  if ($html -notmatch 'href="https://research\.slackquant\.com/research/"') {
    throw "Generated Methods navbar is missing the canonical absolute Research URL: $($file.FullName)"
  }
  if ($html -notmatch 'href="https://research\.slackquant\.com/about/"') {
    throw "Generated Methods navbar is missing the canonical absolute About URL: $($file.FullName)"
  }
  if ($html -match 'href="(?:\./|\.\./|/)(?:research|about)/"') {
    throw "Generated Methods navbar contains a relative Research/About URL: $($file.FullName)"
  }
}
if ($navbarPagesChecked -lt 13) { throw "Too few rendered Methods navbar pages were validated: $navbarPagesChecked" }

# Global Methods header labels and generic UI controls.
foreach ($label in @('Research','Methods','About','GitHub')) {
  if ($methodsIndex -notmatch $label) { throw "Methods global header label missing: $label" }
}
$visibleSearchPatterns = @(
  'id=["'']quarto-search["'']',
  'class=["''][^"'']*quarto-search-button',
  'aria-label=["'']Search["''][^>]*class=["''][^"'']*quarto-search'
)
foreach ($pattern in $visibleSearchPatterns) {
  if ($methodsIndex -match $pattern) { throw "Methods search UI should be disabled" }
}
if ($methodArticle -match 'quarto-code-tools') { throw "Generic Quarto Code tools should be disabled" }

# Header identity: verify the compiled Methods stylesheet contains the same
# desktop geometry and brand type values as the Next.js platform.
#
# Sass/Bootstrap compilation may legally normalize CSS numbers, e.g.
# -0.025em -> -.025em, and may insert/remove whitespace. Validation therefore
# checks semantic-equivalent declaration forms instead of one literal spelling.
$bootstrapCssFiles = Get-ChildItem (Join-Path $PlatformRoot "public\methods\site_libs\bootstrap") -Filter "*.css"
$bootstrapCss = ($bootstrapCssFiles | ForEach-Object { Get-Content $_.FullName -Raw }) -join "`n"

$headerIdentityChecks = @(
  @{ Name = "max width";      Pattern = 'max-width\s*:\s*1180px' },
  @{ Name = "header height";  Pattern = 'height\s*:\s*72px' },
  @{ Name = "brand size";     Pattern = 'font-size\s*:\s*19px' },
  @{ Name = "brand weight";   Pattern = 'font-weight\s*:\s*720' },
  @{ Name = "brand tracking"; Pattern = 'letter-spacing\s*:\s*-0?\.025em' },
  @{ Name = "brand font stack"; Pattern = 'Inter[^;{}]*ui-sans-serif[^;{}]*system-ui[^;{}]*Segoe UI[^;{}]*Arial' }
)
foreach ($check in $headerIdentityChecks) {
  if ($bootstrapCss -notmatch $check.Pattern) {
    throw "Compiled Methods header identity check failed: $($check.Name)"
  }
}

# Related Methods render consistency.
$articlePaths = @(
  "public\methods\10_FORECAST_EVALUATION\QM001_OUT_OF_SAMPLE_EVALUATION\article.html",
  "public\methods\10_FORECAST_EVALUATION\QM002_ROLLING_VS_EXPANDING_WINDOWS\article.html",
  "public\methods\80_DATA_RESEARCH_DESIGN\QM003_LOOK_AHEAD_BIAS_DATA_LEAKAGE\article.html",
  "public\methods\10_FORECAST_EVALUATION\QM004_DIEBOLD_MARIANO_TEST\article.html",
  "public\methods\10_FORECAST_EVALUATION\QM005_MODEL_CONFIDENCE_SET\article.html",
  "public\methods\20_STATISTICAL_INFERENCE\QM006_BLOCK_BOOTSTRAP\article.html"
)
foreach ($rel in $articlePaths) {
  $html = Get-Content (Join-Path $PlatformRoot $rel) -Raw
  $headingCount = ([regex]::Matches($html, '>Related Methods</h1>')).Count
  if ($headingCount -ne 1) { throw "Expected exactly one Related Methods heading in $rel; found $headingCount" }
  if ($html -notmatch 'related-methods') { throw "Related Methods house class missing in $rel" }
  if ($html -match 'Relationship to QM004 and QM005') { throw "Obsolete duplicate relationship section remains in $rel" }
}

Write-Host "METHODS_PLATFORM_INTEGRATION_VALIDATION_PASS" -ForegroundColor Green
