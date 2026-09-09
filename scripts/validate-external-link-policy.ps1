param(
  [string]$PlatformRoot = (Get-Location).Path,
  [switch]$RequireMethodsHtml
)

$ErrorActionPreference = "Stop"
$PlatformRoot = (Resolve-Path $PlatformRoot).Path
$arrow = [char]0x2197

function Need([string]$Rel) {
  $p = Join-Path $PlatformRoot $Rel
  if (-not (Test-Path $p)) { throw "Missing required file: $Rel" }
  return $p
}

function ReadText([string]$Rel) {
  return [System.IO.File]::ReadAllText((Need $Rel))
}

function HasExplicitArrow([string]$Body) {
  return $Body.Contains([string]$arrow) -or
         $Body.Contains("&#8599;") -or
         $Body.Contains("&#x2197;")
}

$policy = ReadText "src\components\ExternalLinkPolicy.tsx"
foreach ($token in @(
  "CANONICAL_HOST",
  "FIRST_PARTY_NEW_TAB_APP_PATHS",
  "/systems/pds/dashboard/",
  "noopener",
  "noreferrer"
)) {
  if (-not $policy.Contains($token)) {
    throw "External-link policy contract missing: $token"
  }
}

$duplicate = New-Object System.Collections.Generic.List[string]
$tsxFiles = Get-ChildItem (Join-Path $PlatformRoot "src") -Recurse -File -Filter "*.tsx"
foreach ($file in $tsxFiles) {
  $text = [System.IO.File]::ReadAllText($file.FullName)
  $anchorMatches = [regex]::Matches(
    $text,
    '<a\b[^>]*className="[^"]*\bext\b[^"]*"[^>]*>([\s\S]*?)</a>'
  )
  foreach ($m in $anchorMatches) {
    if (HasExplicitArrow $m.Groups[1].Value) {
      $duplicate.Add("$($file.FullName): ext + explicit arrow")
    }
  }
  $artifactMatches = [regex]::Matches(
    $text,
    '<ArtifactLink\b[^>]*\bexternal\b[^>]*>([\s\S]*?)</ArtifactLink>'
  )
  foreach ($m in $artifactMatches) {
    if (HasExplicitArrow $m.Groups[1].Value) {
      $duplicate.Add("$($file.FullName): ArtifactLink external + explicit arrow")
    }
  }
}
if ($duplicate.Count -gt 0) {
  throw "Duplicate external-arrow contract violation: $($duplicate -join '; ')"
}

$homePage = ReadText "src\app\page.tsx"
foreach ($token in @(
  'href="/systems/pds/dashboard/"',
  'target="_blank"',
  'data-sq-dashboard-app="true"'
)) {
  if (-not $homePage.Contains($token)) {
    throw "Home PDS dashboard policy missing: $token"
  }
}
if (-not $homePage.Contains("Open PDS Dashboard $arrow")) {
  throw "Home PDS dashboard label missing the single new-tab arrow"
}

foreach ($rel in @(
  "src\app\systems\scenario-stress-lab\page.tsx",
  "src\app\systems\scenario-stress-lab\guide\page.tsx"
)) {
  $s = ReadText $rel
  if ($s.Contains('className="btn primary ext"')) {
    throw "$rel still carries ext on the primary dashboard CTA"
  }
  if (-not $s.Contains("Open Dashboard $arrow")) {
    throw "$rel is missing the explicit single-arrow dashboard label"
  }
}

if ($RequireMethodsHtml) {
  $methodsRoot = Join-Path $PlatformRoot "public\methods"
  $htmlFiles = Get-ChildItem $methodsRoot -Recurse -File -Filter "*.html"
  $headers = 0
  $oldFilter = 'var filterRegex = new RegExp("https:\/\/research\.slackquant\.com\/methods\/");'
  $newFilter = 'var filterRegex = new RegExp("https:\/\/research\.slackquant\.com\/");'
  foreach ($file in $htmlFiles) {
    $text = [System.IO.File]::ReadAllText($file.FullName)
    if (-not $text.Contains('class="sq-platform-nav-links"')) { continue }
    $headers += 1
    if ($text.Contains($oldFilter) -or -not $text.Contains($newFilter)) {
      throw "Rendered Methods first-party filter violation: $($file.FullName)"
    }
  }
  if ($headers -lt 37) {
    throw "Rendered Methods navigation coverage too small: $headers"
  }
}

Write-Host "EXTERNAL_LINK_POLICY_PASS" -ForegroundColor Green
Write-Host "Dashboard CTAs: one explicit arrow / no duplicate ext class" -ForegroundColor Green
Write-Host "Methods       : canonical host remains first-party" -ForegroundColor Green
