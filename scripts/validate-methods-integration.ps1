param(
  [string]$PlatformRoot = (Get-Location).Path
)

$ErrorActionPreference = "Stop"
$PlatformRoot = (Resolve-Path $PlatformRoot).Path
$required = @(
  "src\components\SiteHeader.tsx",
  "src\app\page.tsx",
  "src\app\research\page.tsx",
  "src\app\about\page.tsx",
  "src\app\sitemap.ts",
  "public\methods\index.html"
)
foreach ($rel in $required) {
  $p = Join-Path $PlatformRoot $rel
  if (-not (Test-Path $p)) { throw "Missing required integration artifact: $rel" }
}

$homePage = Get-Content (Join-Path $PlatformRoot "src\app\page.tsx") -Raw
$header = Get-Content (Join-Path $PlatformRoot "src\components\SiteHeader.tsx") -Raw
$research = Get-Content (Join-Path $PlatformRoot "src\app\research\page.tsx") -Raw

if ($header -notmatch '/methods/') { throw "Header Methods link missing" }
if ($homePage -notmatch 'Cross-cutting methods library') { throw "Home Methods layer copy missing" }
if ($research -notmatch 'Cross-cutting methods layer') { throw "Research-page Methods bridge missing" }

Write-Host "METHODS_PLATFORM_INTEGRATION_VALIDATION_PASS" -ForegroundColor Green

