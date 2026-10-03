param(
    [Parameter(Mandatory=$true)][ValidateSet('validate','publish')][string]$Action,
    [string]$CommitMessage,
    [string]$AllowlistFile
)
$ErrorActionPreference='Stop'
$Repo=(Resolve-Path -LiteralPath $PSScriptRoot).Path
Push-Location $Repo
try {
    if ((git branch --show-current) -ne 'main') { throw 'Governed SlackQuant release requires branch main.' }
    git fetch origin main | Out-Host
    if ($LASTEXITCODE -ne 0) { throw 'git fetch origin main failed' }
    $local=(git rev-parse HEAD).Trim(); $remote=(git rev-parse origin/main).Trim()
    if ($local -ne $remote) { throw ('Local main is not synchronized with origin/main. local=' + $local + ' remote=' + $remote) }
    & powershell.exe -NoProfile -ExecutionPolicy Bypass -File (Join-Path $Repo '00_INSTALL_GOVERNED_GIT_HOOKS.ps1')
    if ($LASTEXITCODE -ne 0) { throw 'Managed Git hook installation failed.' }
    & cmd.exe /c 00_VALIDATE_RELEASE.cmd
    if ($LASTEXITCODE -ne 0) { throw 'Canonical release validation failed.' }
    git diff --check | Out-Host
    if ($LASTEXITCODE -ne 0) { throw 'git diff --check failed.' }
    if ($Action -eq 'validate') { Write-Host 'SLACKQUANT_GOVERNED_VALIDATE_PASS' -ForegroundColor Green; exit 0 }
    if ([string]::IsNullOrWhiteSpace($CommitMessage)) { throw '-CommitMessage is required for publish.' }
    if ([string]::IsNullOrWhiteSpace($AllowlistFile)) { throw '-AllowlistFile is required for publish.' }
    $allowPath=(Resolve-Path -LiteralPath $AllowlistFile).Path
    $expected=@(Get-Content -LiteralPath $allowPath | ForEach-Object { $_.Trim() } | Where-Object { $_ } | Sort-Object -Unique)
    $actual=@(git status --porcelain -uall | ForEach-Object { $_.Substring(3).Trim().Replace('\\','/') } | Sort-Object -Unique)
    $delta=Compare-Object -ReferenceObject $expected -DifferenceObject $actual
    if ($delta) { Write-Host 'Expected:'; $expected; Write-Host 'Actual:'; $actual; throw 'Changed-file whitelist mismatch.' }
    git add -- $expected
    if ($LASTEXITCODE -ne 0) { throw 'git add failed.' }
    $staged=@(git diff --cached --name-only | Sort-Object -Unique)
    $delta2=Compare-Object -ReferenceObject $expected -DifferenceObject $staged
    if ($delta2) { throw 'Staged-file whitelist mismatch.' }
    git commit -m $CommitMessage | Out-Host
    if ($LASTEXITCODE -ne 0) { throw 'git commit failed.' }
    $old=$env:SQ_GOVERNED_GIT_PUSH; $env:SQ_GOVERNED_GIT_PUSH='1'
    try {
        git push origin main | Out-Host
        if ($LASTEXITCODE -ne 0) { throw 'git push failed.' }
    } finally {
        if ([string]::IsNullOrWhiteSpace($old)) { Remove-Item Env:SQ_GOVERNED_GIT_PUSH -ErrorAction SilentlyContinue } else { $env:SQ_GOVERNED_GIT_PUSH=$old }
    }
    Write-Host 'SLACKQUANT_GOVERNED_PUBLISH_PASS' -ForegroundColor Green
} finally { Pop-Location }
