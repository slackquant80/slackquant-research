param(
  [string]$ResearchRoot = "",
  [string]$AsOfDate = (Get-Date -Format 'yyyy-MM-dd')
)

$ErrorActionPreference = "Stop"
$AppRoot = Split-Path -Parent $PSScriptRoot
$LogRoot = Join-Path $AppRoot 'logs'
New-Item -ItemType Directory -Force -Path $LogRoot | Out-Null
$Stamp = Get-Date -Format 'yyyyMMdd_HHmmss'
$LogPath = Join-Path $LogRoot ("pds_publish_{0}.log" -f $Stamp)
$LatestLog = Join-Path $LogRoot 'pds_publish_latest.log'
$TranscriptStarted = $false
$ExitCode = 1

try {
  try {
    Start-Transcript -Path $LogPath -Force | Out-Null
    $TranscriptStarted = $true
  } catch {
    Write-Host "WARNING: transcript logging could not start; console output will continue." -ForegroundColor Yellow
  }

  Push-Location $AppRoot
  try {
    Write-Host "PDS public publication prep" -ForegroundColor Cyan
    Write-Host "App root : $AppRoot"
    Write-Host "As of    : $AsOfDate"
    Write-Host ""

    Write-Host "[1/5] Build and bind governed PDS public snapshot" -ForegroundColor Cyan
    $SyncScript = Join-Path $PSScriptRoot 'sync-pds-public.ps1'
    if ([string]::IsNullOrWhiteSpace($ResearchRoot)) {
      # Do not pass an empty -ResearchRoot token to powershell.exe. The child script
      # will discover the nearest ancestor that actually owns 02_RESEARCH_SYSTEMS.
      & powershell -NoProfile -ExecutionPolicy Bypass -File $SyncScript -AsOfDate $AsOfDate
    } else {
      & powershell -NoProfile -ExecutionPolicy Bypass -File $SyncScript -ResearchRoot $ResearchRoot -AsOfDate $AsOfDate
    }
    if ($LASTEXITCODE -ne 0) { throw "PDS public sync failed. ExitCode: $LASTEXITCODE" }

    if (-not (Test-Path (Join-Path $AppRoot 'node_modules'))) {
      Write-Host "[2/5] Install exact application dependencies" -ForegroundColor Cyan
      npm.cmd ci --no-audit --no-fund
      if ($LASTEXITCODE -ne 0) { throw "npm ci failed. ExitCode: $LASTEXITCODE" }
    } else {
      Write-Host "[2/5] Dependencies already installed" -ForegroundColor DarkGray
    }

    Write-Host "[3/5] Typecheck" -ForegroundColor Cyan
    npm.cmd run typecheck
    if ($LASTEXITCODE -ne 0) { throw "typecheck failed. ExitCode: $LASTEXITCODE" }

    Write-Host "[4/5] Static production build" -ForegroundColor Cyan
    npm.cmd run build
    if ($LASTEXITCODE -ne 0) { throw "build failed. ExitCode: $LASTEXITCODE" }

    Write-Host "[5/5] PDS + Systems publication gates" -ForegroundColor Cyan
    python (Join-Path $PSScriptRoot 'validate-pds-publication.py')
    if ($LASTEXITCODE -ne 0) { throw "PDS publication gate failed. ExitCode: $LASTEXITCODE" }
    & powershell -NoProfile -ExecutionPolicy Bypass -File (Join-Path $PSScriptRoot 'validate-systems-positioning.ps1') -PlatformRoot $AppRoot
    if ($LASTEXITCODE -ne 0) { throw "Systems positioning gate failed. ExitCode: $LASTEXITCODE" }
    & powershell -NoProfile -ExecutionPolicy Bypass -File (Join-Path $PSScriptRoot 'validate-adaa-system.ps1') -PlatformRoot $AppRoot
    if ($LASTEXITCODE -ne 0) { throw "ADAA system gate failed. ExitCode: $LASTEXITCODE" }

    Write-Host ""
    Write-Host "PDS_PUBLIC_RELEASE_READY" -ForegroundColor Green
    Write-Host "GitHub push is intentionally not automated. Review the built /systems/pds/ and /systems/f2r/ pages, then push the source tree."
    $ExitCode = 0
  }
  finally {
    Pop-Location
  }
}
catch {
  Write-Host ""
  Write-Host "PDS_PUBLIC_RELEASE_FAILED" -ForegroundColor Red
  Write-Host ("ERROR: " + $_.Exception.Message) -ForegroundColor Red
  if (-not [string]::IsNullOrWhiteSpace($_.ScriptStackTrace)) {
    Write-Host "STACK:" -ForegroundColor DarkGray
    Write-Host $_.ScriptStackTrace -ForegroundColor DarkGray
  }
  $ExitCode = 1
}
finally {
  if ($TranscriptStarted) {
    try { Stop-Transcript | Out-Null } catch { }
  }
  if (Test-Path $LogPath) {
    try { Copy-Item -Force $LogPath $LatestLog } catch { }
  } else {
    try {
      @(
        "PDS public publication prep",
        ("Recorded: " + (Get-Date -Format o)),
        ("ExitCode: " + $ExitCode),
        "Transcript was unavailable. See console output."
      ) | Set-Content -Encoding UTF8 $LatestLog
    } catch { }
  }
}

Write-Host ""
Write-Host ("Publication log: " + $LatestLog) -ForegroundColor DarkGray
exit $ExitCode
