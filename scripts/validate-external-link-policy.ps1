param(
  [string]$PlatformRoot = (Get-Location).Path,
  [switch]$RequireMethodsHtml
)

$ErrorActionPreference = "Stop"
$PlatformRoot = (Resolve-Path $PlatformRoot).Path

$layoutPath = Join-Path $PlatformRoot "src\app\layout.tsx"
$policyPath = Join-Path $PlatformRoot "src\components\ExternalLinkPolicy.tsx"

if (-not (Test-Path $layoutPath)) { throw "Missing src/app/layout.tsx" }
if (-not (Test-Path $policyPath)) { throw "Missing ExternalLinkPolicy.tsx" }

$layout = Get-Content $layoutPath -Raw
$policy = Get-Content $policyPath -Raw

foreach ($token in @(
  'ExternalLinkPolicy',
  '<ExternalLinkPolicy />'
)) {
  if ($layout -notmatch [regex]::Escape($token)) {
    throw "Global external-link policy is not mounted in RootLayout: $token"
  }
}

foreach ($token in @(
  'research.slackquant.com',
  'anchor.target = "_blank"',
  'anchor.removeAttribute("target")',
  'rel.delete("noopener")',
  'rel.delete("noreferrer")',
  'rel.add("noopener")',
  'rel.add("noreferrer")',
  'MutationObserver'
)) {
  if ($policy -notmatch [regex]::Escape($token)) {
    throw "ExternalLinkPolicy implementation token missing: $token"
  }
}

if ($RequireMethodsHtml) {
  $methodsRoot = Join-Path $PlatformRoot "public\methods"
  if (-not (Test-Path $methodsRoot)) {
    throw "public/methods is missing"
  }

  $external = 0
  $staticTargeted = 0
  $runtimeCovered = 0
  $runtimePages = 0
  $badExternal = @()
  $badInternal = @()

  Get-ChildItem $methodsRoot -Filter "*.html" -Recurse | ForEach-Object {
    $html = Get-Content $_.FullName -Raw

    $hasRuntimeSafetyNet = (
      $html -match 'id=["'']sq-external-link-policy["'']' -and
      $html -match 'canonicalHost\s*=\s*["'']research\.slackquant\.com["'']' -and
      $html -match 'anchor\.target\s*=\s*["'']_blank["'']' -and
      $html -match 'url\.hostname\s*===\s*canonicalHost'
    )
    if ($hasRuntimeSafetyNet) { $runtimePages++ }

    $matches = [regex]::Matches(
      $html,
      '<a\b(?<attrs>[^>]*\bhref=["''](?<href>https?://[^"'']+)["''][^>]*)>',
      [System.Text.RegularExpressions.RegexOptions]::IgnoreCase
    )

    foreach ($m in $matches) {
      $href = $m.Groups['href'].Value
      $attrs = $m.Groups['attrs'].Value
      try { $uri = [System.Uri]$href } catch { continue }

      if ($uri.Host -eq "research.slackquant.com") {
        # First-party navigation must remain same-tab. A static target=_blank
        # would survive the runtime safety net, so fail closed if one appears.
        if ($attrs -match 'target=["'']_blank["'']') {
          $badInternal += "$($_.FullName) :: $href"
        }
        continue
      }

      $external++
      if ($attrs -match 'target=["'']_blank["'']') {
        $staticTargeted++
      }
      elseif ($hasRuntimeSafetyNet) {
        $runtimeCovered++
      }
      else {
        $badExternal += "$($_.FullName) :: $href"
      }
    }
  }

  if ($badExternal.Count -gt 0) {
    throw ("External Methods links have neither static target=_blank nor the validated runtime safety-net:`n" +
      ($badExternal | Select-Object -First 25 | Out-String))
  }
  if ($badInternal.Count -gt 0) {
    throw ("First-party SlackQuant Research links must remain same-tab but target=_blank was found:`n" +
      ($badInternal | Select-Object -First 25 | Out-String))
  }

  Write-Host (
    "EXTERNAL_LINK_POLICY_PUBLIC_METHODS_PASS " +
    "external=$external static_targeted=$staticTargeted runtime_covered=$runtimeCovered runtime_pages=$runtimePages"
  ) -ForegroundColor Green
}

Write-Host "EXTERNAL_LINK_POLICY_SOURCE_PASS" -ForegroundColor Green
