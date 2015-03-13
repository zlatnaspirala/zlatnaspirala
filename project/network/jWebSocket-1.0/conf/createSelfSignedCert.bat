@echo off
set name=aschulze-dt

echo This script generates a new self signed certificate and a keystore for jWebSocket.
echo The name of the keystore is specified as '%name%', please change in this script according to your needs.
echo.
echo This script will overwrite potentially existing files - are you sure you want to do that?
echo If you update the keystore password within this dialog don't miss to update the pass in the jWebSocket.xml accordingly!
echo.
echo Press Ctrl+C to abort or . . .
pause

set keyFile=%name%.key
set csrFile=%name%.csr
set crtFile=%name%.crt
set pkcsFile=%name%.pkcs12
set ksFile=%name%.ks

rem Generate the private key file
openssl genrsa -out %keyFile% 2048

rem Generate the certificate signing request
openssl req -new -config openssl.cnf -key %keyFile% -out %csrFile%

rem Generate the self signed certificate
openssl x509 -req -days 730 -in %csrFile% -signkey %keyFile% -out %crtFile%

rem create temporary pkcs12 file to be converted into Java KeyStore
openssl pkcs12 -inkey %keyFile% -in %crtFile% -export -out %pkcsFile%

rem Generate the Java KeyStore file
keytool -importkeystore -srckeystore %pkcsFile% -srcstoretype PKCS12 -destkeystore %ksFile%
