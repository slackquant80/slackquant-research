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

$policy = [System.IO.File]::ReadAllText((Need "src\components\ExternalLinkPolicy.tsx"))
$card = [System.IO.File]::ReadAllText((Need "src\components\SystemCard.tsx"))
$pds = [System.IO.File]::ReadAllText((Need "src\app\systems\pds\page.tsx"))

foreach ($token in @(
  'FIRST_PARTY_NEW_TAB_APP_PATHS',
  '/systems/pds/dashboard/',
  'data-sq-dashboard-app',
  'secureNewTabAnchor',
  'normalizeFirstPartyAnchor',
  'noopener',
  'noreferrer'
)) {
  if ($policy -notmatch [regex]::Escape($token)) { throw "External-link policy contract missing: $token" }
}

foreach ($surface in @($card, $pds)) {
  if ($surface -notmatch [regex]::Escape('data-sq-dashboard-app="true"')) {
    throw "PDS dashboard CTA is not marked as the approved first-party application exception"
  }
  if ($surface -notmatch [regex]::Escape('target="_blank"') -or
      $surface -notmatch [regex]::Escape('rel="noopener noreferrer"')) {
    throw "PDS dashboard CTA does not carry secure new-tab attributes"
  }
}

$tsxFiles = Get-ChildItem (Join-Path $PlatformRoot "src") -Recurse -Include *.tsx,*.ts
foreach ($file in $tsxFiles) {
  $text = [System.IO.File]::ReadAllText($file.FullName)
  $matches = [regex]::Matches($text, '<(?:a|Link)[^>]+href="(?<href>/[^"#?]+)[^>]*target="_blank"[^>]*>')
  foreach ($match in $matches) {
    $tag = $match.Value
    $href = $match.Groups['href'].Value
    if ($href -eq '/systems/pds/dashboard/' -and $tag -match 'data-sq-dashboard-app="true"') { continue }
    throw "Unauthorized same-origin new-tab link: $($file.FullName) -> $href"
  }
}

Write-Host "EXTERNAL_LINK_POLICY_PASS" -ForegroundColor Green
Write-Host "External   : new tab + noopener noreferrer"
Write-Host "First-party: same tab except explicit /systems/pds/dashboard/ application route"
