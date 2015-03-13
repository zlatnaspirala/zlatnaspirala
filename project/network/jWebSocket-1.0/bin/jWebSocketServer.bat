@echo off
echo Starting the jWebSocket Server...

rem if JWEBSOCKET_HOME not set try to create a temporary one
goto start

if not "%JWEBSOCKET_HOME%"=="" goto start
pushd ..
set JWEBSOCKET_HOME=%cd%
popd

:start
rem Allowed options:
rem -config \path\to\jWebSocket.xml
rem -home \path\to\jwebsocket_home

cd ..
java -jar libs\jWebSocketServer-1.0.jar %1 %2 %3 %4 %5 %6 %7 %8 %9

pause
