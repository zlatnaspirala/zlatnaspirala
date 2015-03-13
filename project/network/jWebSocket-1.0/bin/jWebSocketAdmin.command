#/bin/sh
if [ "$JWEBSOCKET_HOME" == "" ]; then
  pushd ..
  JWEBSOCKET_HOME=`pwd`;
  export JWEBSOCKET_HOME popd
fi
java -jar $JWEBSOCKET_HOME/libs/jWebSocketSwingGUI-1.0.jar $1 $2 $3 $4 $5 $6 $7 $8 $9
exit
