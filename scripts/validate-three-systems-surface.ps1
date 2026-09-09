param(
  [string]$PlatformRoot = (Get-Location).Path,
  [switch]$Live,
  [switch]$RequireBuild,
  [string]$JsonOut = ""
)
$ErrorActionPreference = "Stop"
$PlatformRoot = (Resolve-Path $PlatformRoot).Path
$script = Join-Path $PlatformRoot "scripts\validate-three-systems-surface.py"
if (-not (Test-Path $script)) { throw "Missing validator: $script" }
$python = Get-Command py -ErrorAction SilentlyContinue
if ($python) { $cmd = @("-3", $script) } else {
  $python = Get-Command python -ErrorAction SilentlyContinue
  if (-not $python) { throw "Python 3 is required" }
  $cmd = @($script)
}
if ($Live) { $cmd += "--live" }
if ($RequireBuild) { $cmd += "--require-build" }
if ($JsonOut) { $cmd += @("--json-out", $JsonOut) }
Push-Location $PlatformRoot
try {
  & $python.Source @cmd
  if ($LASTEXITCODE -ne 0) { throw "Three-System surface validator failed with exit code $LASTEXITCODE" }
} finally { Pop-Location }
Write-Host "THREE_SYSTEMS_SURFACE_PS1_PASS" -ForegroundColor Green
