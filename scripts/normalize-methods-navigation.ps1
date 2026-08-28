param(
  [string]$PlatformRoot = (Get-Location).Path,
  [switch]$CheckOnly
)

$ErrorActionPreference = "Stop"
$PlatformRoot = (Resolve-Path $PlatformRoot).Path
$methodsRoot = Join-Path $PlatformRoot "public\methods"

if (-not (Test-Path $methodsRoot)) {
  throw "Missing rendered Methods directory: $methodsRoot"
}

$research = '<a href="https://research.slackquant.com/research/" target="_self">Research</a>'
$systems  = '<a href="https://research.slackquant.com/systems/" target="_self">Systems</a>'
$methods  = '<a href="https://research.slackquant.com/methods/" target="_self">Methods</a>'
$about    = '<a href="https://research.slackquant.com/about/" target="_self">About</a>'
$githubHref = 'href="https://github.com/slackquant80/slackquant-research"'

function Count-Token([string]$Text, [string]$Token) {
  return ([regex]::Matches($Text, [regex]::Escape($Token))).Count
}

$headerFiles = 0
$changedFiles = 0
$missingSystems = @()

Get-ChildItem $methodsRoot -Recurse -File -Filter *.html | ForEach-Object {
  $path = $_.FullName
  $text = [System.IO.File]::ReadAllText($path)

  if ($text -notmatch 'class="sq-platform-nav-links"') {
    return
  }

  $headerFiles += 1
  $navStart = $text.IndexOf('<nav class="sq-platform-nav-links"')
  $navEnd = $text.IndexOf('</nav>', $navStart)
  if ($navStart -lt 0 -or $navEnd -lt 0) {
    throw "Malformed Methods platform navigation: $path"
  }

  $next = $text
  if (-not $next.Contains($systems)) {
    if (-not $next.Contains($research)) {
      throw "Research anchor missing from Methods platform header: $path"
    }

    if ($CheckOnly) {
      $missingSystems += $path.Substring($methodsRoot.Length).TrimStart('\')
      return
    }

    $next = $next.Replace($research, $research + "`r`n      " + $systems)
  }

  $navStart2 = $next.IndexOf('<nav class="sq-platform-nav-links"')
  $navEnd2 = $next.IndexOf('</nav>', $navStart2)
  $nav = $next.Substring($navStart2, $navEnd2 - $navStart2)

  foreach ($pair in @(
    @{Name="Research"; Token=$research},
    @{Name="Systems"; Token=$systems},
    @{Name="Methods"; Token=$methods},
    @{Name="About"; Token=$about}
  )) {
    if ((Count-Token $nav $pair.Token) -ne 1) {
      throw "Methods navigation contract mismatch ($($pair.Name)): $path"
    }
  }

  if ((Count-Token $nav $githubHref) -ne 1) {
    throw "Methods GitHub navigation contract mismatch: $path"
  }

  $positions = @(
    $nav.IndexOf($research),
    $nav.IndexOf($systems),
    $nav.IndexOf($methods),
    $nav.IndexOf($about),
    $nav.IndexOf($githubHref)
  )
  for ($i = 1; $i -lt $positions.Count; $i++) {
    if ($positions[$i] -le $positions[$i - 1]) {
      throw "Methods navigation order must be Research -> Systems -> Methods -> About -> GitHub: $path"
    }
  }

  if ($next -ne $text) {
    $enc = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($path, $next, $enc)
    $changedFiles += 1
  }
}

if ($headerFiles -eq 0) {
  throw "No rendered Methods platform headers found under $methodsRoot"
}

if ($missingSystems.Count -gt 0) {
  throw ("Systems is missing from {0} rendered Methods header(s):`n{1}" -f $missingSystems.Count, ($missingSystems -join "`n"))
}

$mode = if ($CheckOnly) { "CHECK" } else { "NORMALIZE" }
Write-Host "METHODS_NAVIGATION_${mode}_PASS headers=$headerFiles changed=$changedFiles" -ForegroundColor Green