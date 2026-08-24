param(
  [string]$PlatformRoot = (Get-Location).Path
)

$ErrorActionPreference = "Stop"
$PlatformRoot = (Resolve-Path $PlatformRoot).Path

function ReadReq([string]$rel) {
  $p = Join-Path $PlatformRoot $rel
  if (-not (Test-Path $p)) { throw "Missing required file: $rel" }
  [System.IO.File]::ReadAllText($p)
}

$helper = ReadReq "src\lib\methodsHref.ts"
$header = ReadReq "src\components\SiteHeader.tsx"
$methodsUsed = ReadReq "src\components\MethodsUsed.tsx"
$homePage = ReadReq "src\app\page.tsx"
$research = ReadReq "src\app\research\page.tsx"

if ($helper -notmatch 'process\.env\.NODE_ENV\s*===\s*"development"') {
  throw "Methods href helper does not distinguish development mode"
}
if ($helper -notmatch '"/methods/index\.html"') {
  throw "Development Methods href is missing"
}
if ($helper -notmatch '"/methods/"') {
  throw "Production Methods href is missing"
}

foreach ($entry in @(
  @{Name="SiteHeader"; Text=$header},
  @{Name="MethodsUsed"; Text=$methodsUsed},
  @{Name="HomePage"; Text=$homePage},
  @{Name="ResearchPage"; Text=$research}
)) {
  if ($entry.Text -notmatch 'methodsRootHref') {
    throw "$($entry.Name) does not use methodsRootHref"
  }
}

if ($header -notmatch 'href=\{methodsRootHref\}>Methods</a>') {
  throw "SiteHeader Methods href is not wired through the helper"
}
if ($methodsUsed -notmatch 'methods-library-link" href=\{methodsRootHref\}') {
  throw "MethodsUsed library link is not wired through the helper"
}

Write-Host "METHODS_DEV_NAVIGATION_GATE_PASS" -ForegroundColor Green
Write-Host "Development: /methods/index.html"
Write-Host "Production : /methods/"