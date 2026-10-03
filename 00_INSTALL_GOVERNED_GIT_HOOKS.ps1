param()
$ErrorActionPreference='Stop'
$Repo=(Resolve-Path -LiteralPath $PSScriptRoot).Path
Push-Location $Repo
try {
    & npm.cmd run install:hooks
    if ($LASTEXITCODE -ne 0) { throw 'npm run install:hooks failed' }
    Write-Host 'SLACKQUANT_GOVERNED_GIT_HOOKS_INSTALLED' -ForegroundColor Green
} finally { Pop-Location }