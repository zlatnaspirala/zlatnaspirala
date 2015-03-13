 //////////////////
 //make id network
 //////////////////
 
var Net_id = new Array();
var Net_x = new Array();
var Net_y = new Array();
var Net_z = new Array();
var netPlayer_avatar = new Array(); 
 //////////////
  
			var eLog = null,
				eKeepAlive = null,
				eMessage = null,
				eChannelId = null,
				eChannelName = null,
				eAccessKey = null,
				eSecretKey = null,
				eIsPrivate = null,
				eIsSystem = null,
				eKeepAlive = null,
				eChannelSel = null;

			function log( aString ) {
				eLog.innerHTML +=
					aString + "<br>";
				if( eLog.scrollHeight > eLog.clientHeight ) {
					eLog.scrollTop = eLog.scrollHeight - eLog.clientHeight;
				}
			}

			function clearLog() {
				eLog.innerHTML = "";
				eLog.scrollTop = 0;
			}

			var lWSC = null;
            
			function login() {
				// URL is ws[s]://[hostname|localhost]:8787[/context][/servlet/][;args...]
				//var lURL = jws.getDefaultServerURL();
                
				var lURL = "ws://" + SERVER[0].address + ":8787/jWebSocket/jWebSocket";
				//var lURL = "ws://188.226.129.11:8787/jWebSocket/jWebSocket";
				
				console.log("IP >>>>" + lURL);
				//var lURL = "ws://192.168.1.10:8787/jWebSocket/jWebSocket";
				
				log( "Login to " + lURL + " ...'" );
				try {
					var lRes = lWSC.logon( lURL, jws.DEMO_ROOT_LOGINNAME, jws.DEMO_ROOT_PASSWORD, {

						// OnOpen callback
						OnOpen: function( aEvent ) {
							log( "jWebSocket connection established." );
							jws.$("simgStatus").src = "images/yes.png";
							console.log("You are connected");
						},

						OnWelcome: function(aEvent) {
							//getChannels();
							setTimeout(function(){auth()},1500);
							setTimeout(function(){subscribeChannel()},2400);
							setTimeout(function(){publish_FOR_NEW()},3100);
						},

						// OnMessage callback
						OnMessage: function( aEvent ,aToken ) {
						//	log( "<font style='color:#888'>jWebSocket message received: '" + aEvent.data + "'</font>" );
							//////////////////////////////////////////////
							
							if (aToken.type == "event" && aToken.name == "login") {
							 
							
						    setTimeout(function(){ publish_FOR_NEW(); } , 3500 );
							
							 console.log("LOGOVAO SE  >>>>"+aToken.sourceId);
							 
							}
							
							if (aToken.type == "event" && aToken.name == "logout") {
							 if ( aToken.sourceId != lWSC.getId() ) {
							
						     
							 console.log("Neko je Otisao  >>>>"+aToken.sourceId);
							}
							}
							
							
							
							
							
						if (aToken.type == "data"){  
						
			 if ( aToken.publisher != lWSC.getId() ) { //eliminate your's data only other
			//	console.log("TIP PODATKA DATA");
					var buf = Net_id.indexOf(aToken.publisher);   
					if (buf == -1)   // Multiplayer buffer data 
					{  
					if (aToken.publisher != null) {  
                      
					Net_id.push(aToken.publisher); 
				    Net_x.push(aToken.map.position[0]); 
					Net_y.push(aToken.map.position[1]); 
					Net_z.push(aToken.map.position[2]); 
					
					if (aToken.map.avatar === "undefined"){ }else{
					try{
					netPlayer_avatar.push(aToken.map.avatar[0]);
                    
					var hand_https = "OK";
					hand_https = aToken.map.avatar[0].toString();
					console.log(hand_https);
					var hand_http=hand_https.replace("https","http");
					console.log(hand_http + "from google+");
					
				 
					//getE("netAvatarIMG").src = hand_http;
					//var IMG_BASE62 = getE("netAvatarIMG").src;

					var img = new Image,
					canvas = document.createElement("canvas"),
					ctx = canvas.getContext("2d"),
					src = hand_http; // insert image url here
                    //alert(hand_http);
					img.crossOrigin = "Anonymous";

					img.onload = function() {
					canvas.width = img.width;
					canvas.height = img.height;
					ctx.drawImage( img, 0, 0 );
					localStorage.setItem( "PROFILE_AVATAR", canvas.toDataURL("image/png") );
					}
					img.src = src;
					// make sure the load event fires for cached images too
					if ( img.complete || img.complete === undefined ) {
					img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
					img.src = src;
					}
										
					//getE("netAvatarIMG").src = getBase64FromImageUrl(IMG_BASE62);
					//getE("netAvatarIMG").src = uInfo.image.url;
					
					
					//CREATE_TEXTURE("T" + Net_id.indexOf(aToken.publisher).toString(), img.src );
					
					CREATE_TEXTURE("T" + Net_id.indexOf(aToken.publisher).toString(), localStorage.getItem( "PROFILE_AVATAR") );
					
					
					
					}catch(e){console.log(e + "NEBI TREBALO DA SE DESI");}
					 }
					 
					
					
					console.log("PRVI PUT");
					
					
					}
					}
					
					else {//replace new data about network player
					
					Net_x.splice(Net_id.indexOf(aToken.publisher),1,  aToken.map.position[0]); 
					Net_y.splice(Net_id.indexOf(aToken.publisher),1,  aToken.map.position[1]);  
					Net_z.splice(Net_id.indexOf(aToken.publisher),1,  aToken.map.position[2]);
					 
					 
					if (aToken.map.avatar === "undefined"){ }else{
					 try{
					 netPlayer_avatar.splice(Net_id.indexOf(aToken.publisher),1,  aToken.map.avatar[0]);
					 getE("netAvatarIMG").src = aToken.map.avatar[0].toString();
					CREATE_TEXTURE("T" + Net_id.indexOf(aToken.publisher).toString(), getE("netAvatarIMG").src );
					console.log("USO U REPLACE ZA AVATARA");
					} catch(e){console.log("GRESKA2");}
					}
					 
					
					}
			
					if (aToken.data != "") {
                console.log("USO za CHAT>>>>" + aToken.data + "<><><><<>< event data >>>" + aEvent.data );
						var DATA_CHAT = "\n" + "userID:" + aToken.publisher + " message: " + aToken.data;

						if (MAIN.browser.name == "android_tab_firefox"){
						getE('CHAT_DIV').innerHTML += '<div style="width:97%;height:auto;background-color:yellow;border-radius:14px;color:black;padding-left:10px;padding-top:4px;" >'+DATA_CHAT+'</div>';
						var oDiv = document.getElementById("CHAT_DIV");
						oDiv.scrollTop = oDiv.scrollHeight;

						var o1 = document.getElementById("CHAT_DIV");
						o1.style.overflow ="scroll";

						}
						if (MAIN.browser.name == "desktop_firefox"){
						getE('CHAT_DIV').innerHTML += '<div style="width:97%;height:auto;background-color:yellow;border-radius:14px;color:black;padding-left:10px;padding-top:4px;" >'+DATA_CHAT+'</div>';
						var oDiv = document.getElementById("CHAT_DIV");
						oDiv.scrollTop = oDiv.scrollHeight;

						}
						if (MAIN.browser.name == "desktop_chrome"){
						getE('CHAT_DIV').innerHTML += '<div style="width:97%;height:auto;background-color:yellow;border-radius:14px;color:black;padding-left:10px;padding-top:4px;" >'+DATA_CHAT+'</div>';
						var oDiv = document.getElementById("CHAT_DIV");
						oDiv.scrollTop = oDiv.scrollHeight;
						document.getElementById('CHAT_DIV').scrollTop = 9999999;
 
                         }
  
  
					 // console.log("CHAT PODATAK:"+aToken.data+" <> OD <>:"+aToken.publisher); === "undefined"
					  
					  }   
					

					
							
		 }
		 }
		 
		 
		 			
		 // detect disconnect if END signal not reseived
						if (aToken.type == "event") {
						// console.log(aEvent.data + " EVENT <<<" );
						 var CHECK_ID = Net_id.indexOf(aToken.sourceId);
						 if (aToken.type == "event" && aToken.name == "logout" && CHECK_ID !== -1 ) {  
						//console.log("!!!!!!!!!!!!!EVENT END" + aToken.sourceId + ":" + CHECK_ID  );
						netPlayer_avatar.splice(Net_id.indexOf(aToken.sourceId),1);
						Net_x.splice(Net_id.indexOf(aToken.sourceId),1);
						Net_y.splice(Net_id.indexOf(aToken.sourceId),1);
						Net_z.splice(Net_id.indexOf(aToken.sourceId),1);
						Net_id.splice(Net_id.indexOf(aToken.sourceId),1);
						}  
					 }			
		 				
		 
					},

						// OnClose callback
						OnClose: function( aEvent ) {
							log( "<font style='color:#888'>jWebSocket connection closed.</font>" );
							jws.$("simgStatus").src = "images/disconnected.png";
							jws.$("slblClientId").innerHTML = "&nbsp;Client&#x2011;Id:&nbsp;-";
						}

					});
				}  catch( ex ) {
					log( "Exception: " + ex.message );
				}
			}

			// log out the client from the jWebSocket server
			function logout() {
				if( lWSC ) {
					lWSC.stopKeepAlive();
					log( "Disconnecting..." );
					var lRes = lWSC.close({ timeout: 3000 });
					log( lWSC.resultToString( lRes ) );
				}
			}

			// try to create a new channel on the server
			// on success the OnChannelCreated event is fired
			function createChannel() {
				var lChannelId = eChannelId.value;
				var lChannelName = eChannelName.value;
				var lIsPrivate = eIsPrivate.checked;
				var lIsSystem = eIsSystem.checked;
				var lAccessKey = eAccessKey.value;
				var lSecretKey = eSecretKey.value;
				log( "Creating channel '" + lChannelId + "'..." );
				var lRes = lWSC.channelCreate(
					lChannelId, 
					lChannelName,
					{	isPrivate: lIsPrivate,
						isSystem: lIsSystem,
						accessKey: lAccessKey,
						secretKey: lSecretKey
					}
				);
				log( lWSC.resultToString( lRes ) );
			}

			// try to remove an existing channel on the server
			// on success the OnChannelRemoved event is fired
			function removeChannel() {
				var lChannelId = eChannelId.value;
				var lAccessKey = eAccessKey.value;
				var lSecretKey = eSecretKey.value;
				log( "Removing channel '" + lChannelId + "'..." );
				var lRes = lWSC.channelRemove( 
					lChannelId,
					{	accessKey: lAccessKey,
						secretKey: lSecretKey
					}
				);
				log( lWSC.resultToString( lRes ) );
			}

			// try to subscribe at a certain channel
			function subscribeChannel() {
				var lChannel = "fastmatrix";
				var lAccessKey = eAccessKey.value;
				log( "Subscribing at channel '" + lChannel + "'..." );
				var lRes = lWSC.channelSubscribe( lChannel, lAccessKey );
				log( lWSC.resultToString( lRes ) );
			}

			// try to unsubscribe from a certain channel
			function unsubscribeChannel() {
				var lChannel = "fastmatrix";
				log( "Unsubscribing from channel '" + lChannel + "'..." );
				var lRes = lWSC.channelUnsubscribe( lChannel );
				log( lWSC.resultToString( lRes ) );
			}

			// try to authenticate against a channel to publish data
			function auth() {
				var lChannel = "fastmatrix";
				var lAccessKey = eAccessKey.value;
				var lSecretKey = eSecretKey.value;
				log( "Authenticating against channel '" + lChannel + "'..." );
				// use access key and secret key for this channel to authenticate
				// required to publish data only
				var lRes = lWSC.channelAuth( lChannel, lAccessKey, lSecretKey );
				log( lWSC.resultToString( lRes ) );
			}

			// try to publish data on a certain channel
			function publish() {
				var lChannel = "fastmatrix";
				var lRes = lWSC.channelPublish( lChannel, eMessage.value, {
					position: [ transX.toFixed(2) , transY.toFixed(2),transZ.toFixed(2) ] 
				});
				//log( lWSC.resultToString( lRes ) );
			}
			
				function publish_FOR_NEW() {
				var lChannel = "fastmatrix";
				var lRes = lWSC.channelPublish( lChannel, "NewPlayer", {
					position: [ transX.toFixed(2) , transY.toFixed(2),transZ.toFixed(2) ] ,
					avatar: [getE("PRO").src]
				});
				//log( lWSC.resultToString( lRes ) );
			}

			// try to obtain all available channels on the server
			function getChannels() {
				log( "Trying to obtain channels..." );
				var lRes = lWSC.channelGetIds();
				log( lWSC.resultToString( lRes ) );
			}

			// try to obtain all subscribers for a certain channel
			function getSubscribers() {
				var lChannel = "fastmatrix";
				var lAccessKey = eAccessKey.value;
				log( "Trying to obtain subscribers for channel '" + lChannel + "'..." );
				var lRes = lWSC.channelGetSubscribers(lChannel, lAccessKey);
				log( lWSC.resultToString( lRes ) );
			}

			// try to obtain all channels the client has subscribed to
			function getSubscriptions() {
				log( "Trying to obtain subscriptions for client..." );
				var lRes = lWSC.channelGetSubscriptions();
				log( lWSC.resultToString( lRes ) );
			}

			function toggleKeepAlive() {
				if( eKeepAlive.checked ) {
					lWSC.startKeepAlive({ interval: 3000 });
				} else {
					lWSC.stopKeepAlive();
				}
			}

			// this method is called when a new channel has been created on the server
			// add the new channel to the drop down box on the client as well
			function onChannelCreatedObs( aEvent ) {
				var lOption = document.createElement("option");
				lOption.value = aEvent.channelId;
				lOption.text = aEvent.channelName;
				eChannelSel.appendChild(lOption);
			}

			// this method is called when a channel has been removed from the server
			// remove the channel from the drop down box on the client as well
			function onChannelRemovedObs( aEvent ) {
				for( var lIdx = 0, lCnt = eChannelSel.options.length; lIdx < lCnt; lIdx++ ) {
					var lOption = eChannelSel.options[ lIdx ];
					if( lOption.value == aEvent.channelId ) {
						eChannelSel.removeChild(lOption);
						break;
					}
				}
			}

			// this method is called when a channel has been removed from the server
			// remove the channel from the drop down box on the client as well
			function onChannelsReceivedObs( aEvent ) {
				// remove all existing channels in drop down box
				while( eChannelSel.options.length > 0 ) {
					var lOption = eChannelSel.options[ 0 ];
					eChannelSel.removeChild(lOption);
				}
				// add all channels from event
				for( var lIdx = 0, lCnt = aEvent.channels.length; lIdx < lCnt; lIdx++ ) {
					var lOption = document.createElement("option");
					lOption.value = aEvent.channels[ lIdx ].id;
					lOption.text = aEvent.channels[ lIdx ].name;
					eChannelSel.appendChild(lOption);
				}
			}

			function initPage() {
				eLog = jws.$( "sdivChat" );
				eMessage = jws.$( "stxfMsg" );
				eChannelId = jws.$( "stxfChannelId" );
				eChannelName = jws.$( "stxfChannelId" );
				eAccessKey = jws.$( "stxfAccessKey" );
				eSecretKey = jws.$( "stxfSecretKey" );
				eIsPrivate = jws.$( "schkPrivate" );
				eIsSystem = jws.$( "schkSystem" );
				eKeepAlive =  jws.$( "schkKeepAlive" );
				eChannelSel = jws.$( "sselChannel" );

				if( window.WebSocket ) {
					lWSC = new jws.jWebSocketJSONClient();
					lWSC.setChannelCallbacks({
						OnChannelCreated: onChannelCreatedObs,
						OnChannelRemoved: onChannelRemovedObs,
						OnChannelsReceived: onChannelsReceivedObs
					});
				} else {
					jws.$( "sbtnConnect" ).setAttribute( "disabled", "disabled" );
					jws.$( "sbtnDisconnect" ).setAttribute( "disabled", "disabled" );
					jws.$( "sbtnClear" ).setAttribute( "disabled", "disabled" );
					jws.$( "sbtnSubscribe" ).setAttribute( "disabled", "disabled" );
					jws.$( "sbtnUnsubscribe" ).setAttribute( "disabled", "disabled" );
					//jws.$( "schkKeepAlive" ).setAttribute( "disabled", "disabled" );

					var lMsg = jws.MSG_WS_NOT_SUPPORTED;
					//alert( lMsg );
					log( lMsg );
				}
			}

			function exitPage() {
				lWSC.stopKeepAlive();
				logout();
			}
			
			initPage();
			
			setTimeout(function(){
			login();
			},500);
			
			
	
			
			