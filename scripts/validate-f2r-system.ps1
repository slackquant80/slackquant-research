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

$systemsData = [System.IO.File]::ReadAllText((Need "src\data\systems.ts"))
$f2rPage = [System.IO.File]::ReadAllText((Need "src\app\systems\f2r\page.tsx"))
$methodsData = [System.IO.File]::ReadAllText((Need "src\data\methods.ts"))

foreach ($token in @(
  'slug: "f2r"',
  'title: "Forecast-to-Rank Allocation"',
  'status: "Public live"',
  'systemGroup: "portfolio-strategy"',
  'https://f2r-forecast-to-rank-allocation.streamlit.app',
  'https://github.com/slackquant80/f2r-forecast-to-rank-allocation',
  'relatedResearch: "/research/price-macro-decision/"'
)) {
  if ($systemsData -notmatch [regex]::Escape($token)) { throw "F2R registry contract missing: $token" }
}

foreach ($token in @(
  'Forecast-to-Rank Allocation (F2R)',
  'Open Live Dashboard',
  'GitHub Repository',
  'current operating state, not the definition of PDS',
  'governed public deployment surfaces',
  'MethodsUsed',
  'context="system"'
)) {
  if ($f2rPage -notmatch [regex]::Escape($token)) { throw "F2R page contract missing: $token" }
}

foreach ($forbidden in @(
  'MFA_',
  '_LOCAL_PRIVATE_DATA',
  'MACRO_FORECAST_ALLOCATION',
  'provider_preview',
  'runtime_decisions'
)) {
  if ($f2rPage -match [regex]::Escape($forbidden)) { throw "F2R public page leaks internal identifier/path token: $forbidden" }
}

foreach ($method in @('QM001','QM002','QM003','QM007','QM009','QM013')) {
  if ($methodsData -notmatch [regex]::Escape($method)) { throw "Expected F2R method unavailable: $method" }
}
if ($methodsData -notmatch [regex]::Escape('"f2r-system"')) { throw "F2R system Methods mapping missing" }

Write-Host "F2R_SYSTEM_PUBLICATION_GATE_PASS" -ForegroundColor Green
Write-Host "Live      : Streamlit public dashboard + GitHub deployment repository"
Write-Host "Boundary  : deployment surface is not a second canonical strategy source"
Write-Host "Evidence  : related research remains separately identified"
