#!/bin/sh
if [ ! -d "$JWEBSOCKET_HOME" ]; then
 JWEBSOCKET_HOME=$(cd `dirname $0` && pwd)/..
 export JWEBSOCKET_HOME
fi

java -jar $JWEBSOCKET_HOME/libs/jWebSocketSwingGUI-0.10.jar %1 %2 %3 %4 %5 %6 %7 %8 %9
