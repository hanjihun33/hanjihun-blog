@echo off
setlocal

set SCRIPT_DIR=%~dp0
set MAVEN_VERSION=3.9.6
set MAVEN_DIST=apache-maven-%MAVEN_VERSION%
set MAVEN_HOME_DIR=%SCRIPT_DIR%.mvn\%MAVEN_DIST%
set MAVEN_BIN=%MAVEN_HOME_DIR%\bin\mvn.cmd
set ARCHIVE_PATH=%SCRIPT_DIR%.mvn\%MAVEN_DIST%-bin.zip
set ARCHIVE_URL=https://archive.apache.org/dist/maven/maven-3/%MAVEN_VERSION%/binaries/%MAVEN_DIST%-bin.zip

if exist "%MAVEN_BIN%" (
  call "%MAVEN_BIN%" %*
  exit /b %errorlevel%
)

where mvn >nul 2>nul
if %errorlevel%==0 (
  call mvn %*
  exit /b %errorlevel%
)

echo Downloading Maven %MAVEN_VERSION%...
if not exist "%SCRIPT_DIR%.mvn" mkdir "%SCRIPT_DIR%.mvn"
powershell -Command "Invoke-WebRequest -Uri '%ARCHIVE_URL%' -OutFile '%ARCHIVE_PATH%'"
powershell -Command "Expand-Archive -Path '%ARCHIVE_PATH%' -DestinationPath '%SCRIPT_DIR%.mvn' -Force"

call "%MAVEN_BIN%" %*
exit /b %errorlevel%

