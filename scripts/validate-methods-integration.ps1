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
  "src\app\research\protection-patience\page.tsx",
  "src\app\about\page.tsx",
  "src\app\sitemap.ts",
  "public\methods\index.html",
  "public\methods\10_FORECAST_EVALUATION\QM001_OUT_OF_SAMPLE_EVALUATION\article.html",
  "public\methods\10_FORECAST_EVALUATION\QM002_ROLLING_VS_EXPANDING_WINDOWS\article.html",
  "public\methods\80_DATA_RESEARCH_DESIGN\QM003_LOOK_AHEAD_BIAS_DATA_LEAKAGE\article.html",
  "public\methods\10_FORECAST_EVALUATION\QM004_DIEBOLD_MARIANO_TEST\article.html",
  "public\methods\10_FORECAST_EVALUATION\QM005_MODEL_CONFIDENCE_SET\article.html",
  "public\methods\20_STATISTICAL_INFERENCE\QM006_BLOCK_BOOTSTRAP\article.html",
  "public\methods\40_PORTFOLIO_METHODS\QM007_PORTFOLIO_BACKTESTING_REBALANCING\article.html",
  "public\methods\40_PORTFOLIO_METHODS\QM008_DRAWDOWN_UNDERWATER_DURATION_RECOVERY\article.html",
  "public\methods\40_PORTFOLIO_METHODS\QM009_TURNOVER_COSTS\article.html"
)

foreach ($rel in $required) {
  $p = Join-Path $PlatformRoot $rel
  if (-not (Test-Path $p)) { throw "Missing required integration artifact: $rel" }
}

$homePage = Get-Content (Join-Path $PlatformRoot "src\app\page.tsx") -Raw
$header = Get-Content (Join-Path $PlatformRoot "src\components\SiteHeader.tsx") -Raw
$research = Get-Content (Join-Path $PlatformRoot "src\app\research\page.tsx") -Raw
$beyond = Get-Content (Join-Path $PlatformRoot "src\app\research\beyond-average-accuracy\page.tsx") -Raw
$protection = Get-Content (Join-Path $PlatformRoot "src\app\research\protection-patience\page.tsx") -Raw
$methodsUsedSource = Get-Content (Join-Path $PlatformRoot "src\components\MethodsUsed.tsx") -Raw
$methodsData = Get-Content (Join-Path $PlatformRoot "src\data\methods.ts") -Raw
$methodsIndex = Get-Content (Join-Path $PlatformRoot "public\methods\index.html") -Raw
$methodArticle = Get-Content (Join-Path $PlatformRoot "public\methods\10_FORECAST_EVALUATION\QM002_ROLLING_VS_EXPANDING_WINDOWS\article.html") -Raw
$qm007Article = Get-Content (Join-Path $PlatformRoot "public\methods\40_PORTFOLIO_METHODS\QM007_PORTFOLIO_BACKTESTING_REBALANCING\article.html") -Raw
$qm008Article = Get-Content (Join-Path $PlatformRoot "public\methods\40_PORTFOLIO_METHODS\QM008_DRAWDOWN_UNDERWATER_DURATION_RECOVERY\article.html") -Raw
$qm009Article = Get-Content (Join-Path $PlatformRoot "public\methods\40_PORTFOLIO_METHODS\QM009_TURNOVER_COSTS\article.html") -Raw

# Main-platform surface checks.
if ($header -notmatch '/methods/') { throw "Header Methods link missing" }
# Integration must not depend on one frozen marketing sentence. v1.0.8-v1.0.9
# deliberately refined the public Methods copy while preserving the bridge.
if ($homePage -notmatch 'Quantitative Methods' -or $homePage -notmatch 'href="/methods/"') {
  throw "Home Methods bridge missing"
}
if ($research -notmatch 'Quantitative Methods' -or $research -notmatch 'href="/methods/"') {
  throw "Research-page Methods bridge missing"
}
if ($beyond -notmatch 'MethodsUsed') { throw "Beyond Average Accuracy Methods bridge missing" }
if ($protection -notmatch 'MethodsUsed' -or $protection -notmatch 'href="#methods"') {
  throw "Protection / Patience Methods bridge missing"
}
foreach ($id in @('QM001','QM002','QM003','QM004','QM005')) {
  if ($methodsData -notmatch $id) { throw "Research-method mapping missing: $id" }
}
if ($methodsData -notmatch 'QM007' -or $methodsData -notmatch 'QM008' -or
    $methodsData -notmatch '"protection-patience"\s*:\s*\["QM007",\s*"QM008"\]') {
  throw "Protection / Patience -> QM007/QM008 mapping missing"
}
if ($qm007Article -notmatch 'https://research.slackquant.com/research/protection-patience/') {
  throw "QM007 -> Protection / Patience research link missing"
}
if ($qm008Article -notmatch 'https://research.slackquant.com/research/protection-patience/') {
  throw "QM008 -> Protection / Patience research link missing"
}
if ($methodsIndex -notmatch 'Investment Methods' -or
    $methodsIndex -notmatch 'QM007' -or
    $methodsIndex -notmatch 'QM008' -or
    $methodsIndex -notmatch 'QM009') {
  throw "QM007/QM008/QM009 Investment Methods index entries missing"
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
if ($hrefMatches.Count -lt 9) { throw "Expected nine Quantitative Methods href mappings were not found" }
foreach ($match in $hrefMatches) {
  $href = $match.Groups['href'].Value
  $rel = $href.TrimStart('/') -replace '/', '\'
  $publicPath = Join-Path $PlatformRoot ("public\" + $rel)
  if (-not (Test-Path $publicPath)) { throw "Mapped Methods destination does not exist in public/: $href" }
}

# Methods -> main-platform boundary: every rendered Methods page must carry the
# shared raw platform header and absolute canonical URLs. Quarto navbar markup
# is intentionally disabled in v1.0.6.
$methodsHtmlFiles = Get-ChildItem (Join-Path $PlatformRoot "public\methods") -Filter "*.html" -Recurse
$sharedHeaderPagesChecked = 0
foreach ($file in $methodsHtmlFiles) {
  $html = Get-Content $file.FullName -Raw

  # Only count actual rendered Methods pages that include the shared header.
  if ($html -notmatch 'class=["'']sq-platform-header["'']') { continue }
  $sharedHeaderPagesChecked++

  if ($html -notmatch 'id=["'']sq-header-relocator["'']') {
    throw "Methods header relocator missing: $($file.FullName)"
  }

  foreach ($url in @(
    'https://research.slackquant.com/research/',
    'https://research.slackquant.com/methods/',
    'https://research.slackquant.com/about/'
  )) {
    if ($html -notmatch [regex]::Escape($url)) {
      throw "Rendered Methods shared header is missing canonical URL $url : $($file.FullName)"
    }
  }

  if ($html -match 'href=["''](?:\./|\.\./|/)(?:research|about)/["'']') {
    throw "Rendered Methods shared header contains a relative Research/About URL: $($file.FullName)"
  }

  if ($html -match 'id=["'']quarto-header["'']' -or
      $html -match 'navbar-toggler' -or
      $html -match 'navbar-collapse') {
    throw "Obsolete Quarto navbar markup remains in rendered Methods page: $($file.FullName)"
  }
}
if ($sharedHeaderPagesChecked -lt 19) {
  throw "Too few rendered Methods shared-header pages were validated: $sharedHeaderPagesChecked"
}

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


# METHODS_SHARED_PLATFORM_HEADER_GATE
# Methods now uses an isolated raw header rather than Quarto/Bootstrap navbar
# markup. This removes cross-framework pixel drift and must remain structural.
if ($methodsIndex -notmatch 'class=["'']sq-platform-header["'']') {
  throw "Methods shared platform header missing"
}
if ($methodsIndex -notmatch 'class=["'']sq-platform-shell sq-platform-nav["'']') {
  throw "Methods shared shell/navigation row missing"
}
if ($methodsIndex -notmatch 'class=["'']sq-platform-brand["''][^>]*>SlackQuant Research<') {
  throw "Methods shared platform brand missing"
}
if ($methodsIndex -notmatch 'class=["'']sq-platform-nav-links["'']') {
  throw "Methods shared navigation links missing"
}
if ($methodsIndex -match 'id=["'']quarto-header["'']' -or $methodsIndex -match 'navbar-toggler') {
  throw "Quarto navbar markup must not be rendered in Methods"
}
foreach ($url in @(
  'https://research.slackquant.com/research/',
  'https://research.slackquant.com/methods/',
  'https://research.slackquant.com/about/'
)) {
  if ($methodsIndex -notmatch [regex]::Escape($url)) {
    throw "Methods shared header URL missing: $url"
  }
}

$bootstrapCssDir = Join-Path $PlatformRoot "public\methods\site_libs\bootstrap"
if (-not (Test-Path $bootstrapCssDir)) {
  throw "Rendered Methods Bootstrap/CSS directory missing: $bootstrapCssDir"
}
$bootstrapCssFiles = Get-ChildItem $bootstrapCssDir -Filter "*.css"
if ($bootstrapCssFiles.Count -lt 1) {
  throw "No compiled Methods CSS files were found under: $bootstrapCssDir"
}
$compiledMethodsCss = ($bootstrapCssFiles | ForEach-Object { Get-Content $_.FullName -Raw }) -join "`n"

# Normalize compiled CSS before structural checks. Quarto/Sass may emit either
# minified or pretty-printed CSS, so whitespace must never decide PASS/FAIL.
$compiledMethodsCssNormalized = [regex]::Replace(
  $compiledMethodsCss,
  '/\*.*?\*/',
  '',
  [System.Text.RegularExpressions.RegexOptions]::Singleline
)
$compiledMethodsCssNormalized = [regex]::Replace($compiledMethodsCssNormalized, '\s+', '')

$sharedHeaderChecks = @(
  @{ Name = "sticky header"; Pattern = '\.sq-platform-header\{[^}]*position:sticky' },
  @{ Name = "Quarto nav-fixed reset"; Pattern = 'body\.nav-fixed\{[^}]*padding-top:0!important' },
  @{ Name = "desktop content clearance"; Pattern = '#quarto-content>main\.content\{[^}]*margin-top:0[^}]*padding-top:64px' },
  @{ Name = "shell width"; Pattern = '\.sq-platform-shell\{[^}]*max-width:1180px' },
  @{ Name = "desktop shell padding"; Pattern = '\.sq-platform-shell\{[^}]*padding:0(?:px)?30px' },
  @{ Name = "row height"; Pattern = '\.sq-platform-nav\{[^}]*height:72px' },
  @{ Name = "space between"; Pattern = '\.sq-platform-nav\{[^}]*justify-content:space-between' },
  @{ Name = "brand size"; Pattern = '\.sq-platform-brand\{[^}]*font-size:19px' },
  @{ Name = "brand weight"; Pattern = '\.sq-platform-brand\{[^}]*font-weight:720' },
  @{ Name = "brand tracking"; Pattern = '\.sq-platform-brand\{[^}]*letter-spacing:-0?\.025em' },
  @{ Name = "nav gap"; Pattern = '\.sq-platform-nav-links\{[^}]*gap:28px' },
  @{ Name = "nav size"; Pattern = '\.sq-platform-nav-links\{[^}]*font-size:14px' },
  @{ Name = "mobile breakpoint"; Pattern = '@media\(max-width:620px\)' },
  @{ Name = "mobile brand size"; Pattern = '@media\(max-width:620px\)\{.*?\.sq-platform-brand\{[^}]*font-size:18px' },
  @{ Name = "mobile nav gap"; Pattern = '@media\(max-width:620px\)\{.*?\.sq-platform-nav-links\{[^}]*gap:20px' }
)
foreach ($check in $sharedHeaderChecks) {
  if ($compiledMethodsCssNormalized -notmatch $check.Pattern) {
    throw "Compiled Methods shared header check failed: $($check.Name)"
  }
}

if ($compiledMethodsCssNormalized -match '\.sq-platform-header\{[^}]*position:fixed') {
  throw "Obsolete fixed Methods header remains in compiled CSS"
}


# Related Methods render consistency.
$articlePaths = @(
  "public\methods\10_FORECAST_EVALUATION\QM001_OUT_OF_SAMPLE_EVALUATION\article.html",
  "public\methods\10_FORECAST_EVALUATION\QM002_ROLLING_VS_EXPANDING_WINDOWS\article.html",
  "public\methods\80_DATA_RESEARCH_DESIGN\QM003_LOOK_AHEAD_BIAS_DATA_LEAKAGE\article.html",
  "public\methods\10_FORECAST_EVALUATION\QM004_DIEBOLD_MARIANO_TEST\article.html",
  "public\methods\10_FORECAST_EVALUATION\QM005_MODEL_CONFIDENCE_SET\article.html",
  "public\methods\20_STATISTICAL_INFERENCE\QM006_BLOCK_BOOTSTRAP\article.html",
  "public\methods\40_PORTFOLIO_METHODS\QM007_PORTFOLIO_BACKTESTING_REBALANCING\article.html",
  "public\methods\40_PORTFOLIO_METHODS\QM008_DRAWDOWN_UNDERWATER_DURATION_RECOVERY\article.html",
  "public\methods\40_PORTFOLIO_METHODS\QM009_TURNOVER_COSTS\article.html"
)
foreach ($rel in $articlePaths) {
  $html = Get-Content (Join-Path $PlatformRoot $rel) -Raw
  $headingCount = ([regex]::Matches($html, '>Related Methods</h1>')).Count
  if ($headingCount -ne 1) {
    throw "Expected exactly one Related Methods heading in $rel; found $headingCount"
  }
  if ($html -notmatch 'related-methods') {
    throw "Related Methods house class missing in $rel"
  }
  if ($html -match 'Relationship to QM004 and QM005') {
    throw "Obsolete duplicate relationship section remains in $rel"
  }
}

# Public-copy economy: the index header/title already establishes the brand.
if ($methodsIndex -match 'SlackQuant Quantitative Methods explains') {
  throw "Methods index repeats the SlackQuant brand unnecessarily"
}

Write-Host "METHODS_PLATFORM_INTEGRATION_VALIDATION_PASS" -ForegroundColor Green
