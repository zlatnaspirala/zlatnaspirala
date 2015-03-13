@echo off
set ksFile=enapso.org.ks
set keyFile=enapso.org.key
set crtFile=enapso.org.crt
set bundleFile=enapso.org.bundle.crt
set pkcsFile=temporary.pkcs12

echo This script generates a new a keystore for jWebSocket based on a private key and certificate file provided by an SSL cert issuer.
echo The name of the target keystore is specified as '%ksFile%',
echo the name key file is specified by '%keyFile%' and the name of the certificate file by '%crtFile%'.
echo Please change this data in this script according to your needs and take care to not accidentally overwrite existing files!
echo.
echo This script will overwrite potentially existing files - are you sure you want to do that?
echo If you update the keystore within this dialog don't miss to update the pass in the jWebSocket.xml accordingly!
echo.
echo Press Ctrl+C to abort or . . .
pause

echo Creating temporary pkcs12 file to be converted into Java KeyStore...
openssl pkcs12 -inkey %keyFile% -in %crtFile% -export -out %pkcsFile%

echo Generating the Java KeyStore file...
keytool -importkeystore -srckeystore %pkcsFile% -srcstoretype PKCS12 -destkeystore %ksFile%

echo Importing the bundle if such exists...
keytool -import -alias root -keystore %ksFile% -file %bundleFile%

echo Removing temporary pkcs12 file...
del %pkcsFile%

echo Done!
pause