//	---------------------------------------------------------------------------
//	jWebSocket Channel PlugIn (uses jWebSocket Client and Server)
//	(C) 2010 jWebSocket.org, Alexander Schulze, Innotrade GmbH, Herzogenrath
//	---------------------------------------------------------------------------
//	This program is free software; you can redistribute it and/or modify it
//	under the terms of the GNU Lesser General Public License as published by the
//	Free Software Foundation; either version 3 of the License, or (at your
//	option) any later version.
//	This program is distributed in the hope that it will be useful, but WITHOUT
//	ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
//	FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for
//	more details.
//	You should have received a copy of the GNU Lesser General Public License along
//	with this program; if not, see <http://www.gnu.org/licenses/lgpl.html>.
//	---------------------------------------------------------------------------


//	---------------------------------------------------------------------------
//  jWebSocket Channel Plug-In
//	---------------------------------------------------------------------------

//:package:*:jws
//:class:*:jws.ChannelPlugIn
//:ancestor:*:-
//:d:en:Implementation of the [tt]jws.ChannelPlugIn[/tt] class. This _
//:d:en:plug-in provides the methods to subscribe and unsubscribe at certain _
//:d:en:channel sn the server.
jws.ChannelPlugIn = {

	//:const:*:NS:String:org.jwebsocket.plugins.channels (jws.NS_BASE + ".plugins.channels")
	//:d:en:Namespace for the [tt]ChannelPlugIn[/tt] class.
	// if namespace changes update server plug-in accordingly!
	NS: jws.NS_BASE + ".plugins.channels",

	SUBSCRIBE: "subscribe",
	UNSUBSCRIBE: "unsubscribe",
	GET_CHANNELS: "getChannels",
	CREATE_CHANNEL: "createChannel",
	REMOVE_CHANNEL: "removeChannel",
	GET_SUBSCRIBERS: "getSubscribers",
	GET_SUBSCRIPTIONS: "getSubscriptions",

	AUTHORIZE: "authorize",
	PUBLISH: "publish",
	STOP: "stop",

	processToken: function( aToken ) {
		// check if namespace matches
		if( aToken.ns == jws.ChannelPlugIn.NS ) {
			// here you can handle incoming tokens from the server
			// directy in the plug-in if desired.
			if( "event" == aToken.type ) {
				if( "channelCreated" == aToken.name ) {
					if( this.fOnChannelCreated ) {
						this.fOnChannelCreated( aToken );
					}
				} else if( "channelRemoved" == aToken.name ) {
					if( this.fOnChannelRemoved ) {
						this.fOnChannelRemoved( aToken );
					}
				} 
			} else if( "getChannels" == aToken.reqType ) {
				if( this.fOnChannelsReceived ) {
					this.fOnChannelsReceived( aToken );
				}
			}
		}
	},

	//:m:*:channelSubscribe
	//:d:en:Registers the client at the given channel on the server. _
	//:d:en:After this operation the client obtains all messages on this _
	//:d:en:channel. Basically, a client can subscribe at multiple channels.
	//:d:en:If no channel with the given ID exists on the server an error token _
	//:d:en:is returned. Depending on the type of the channel it may take more _
	//:d:en:or less time until you get the first token from the channel.
	//:a:en::aChannel:String:The id of the server side data channel.
	//:r:*:::void:none
	// TODO: introduce OnResponse here too to get notified on error or success.
	channelSubscribe: function( aChannel, aAccessKey, aOptions ) {
		var lRes = this.checkConnected();
		if( 0 == lRes.code ) {
			this.sendToken({
				ns: jws.ChannelPlugIn.NS,
				type: jws.ChannelPlugIn.SUBSCRIBE,
				channel: aChannel,
				accessKey: aAccessKey
			}, aOptions );
		}
		return lRes;
	},

	//:m:*:channelUnsubscribe
	//:d:en:Unsubscribes the client from the given channel on the server.
	//:d:en:From this point in time the client does not receive any messages _
	//:d:en:on this channel anymore.
	//:a:en::aChannel:String:The id of the server side data channel.
	//:r:*:::void:none
	// TODO: introduce OnResponse here too to get notified on error or success.
	channelUnsubscribe: function( aChannel, aOptions ) {
		var lRes = this.checkConnected();
		if( 0 == lRes.code ) {
			this.sendToken({
				ns: jws.ChannelPlugIn.NS,
				type: jws.ChannelPlugIn.UNSUBSCRIBE,
				channel: aChannel
			}, aOptions );
		}
		return lRes ;
	},

	//:m:*:channelAuth
	//:d:en:Authenticates the client at a certain channel to publish messages.
	//:a:en::aChannel:String:The id of the server side data channel.
	//:a:en::aAccessKey:String:Access key configured for the channel.
	//:a:en::aSecretKey:String:Secret key configured for the channel.
	//:r:*:::void:none
	// TODO: introduce OnResponse here too to get notified on error or success.
	channelAuth: function( aChannel, aAccessKey, aSecretKey, aOptions ) {
		var lRes = this.checkConnected();
		if( 0 == lRes.code ) {
			this.sendToken({
				ns: jws.ChannelPlugIn.NS,
				type: jws.ChannelPlugIn.AUTHORIZE,
				channel: aChannel,
				// login: this.getUsername(),
				accessKey: aAccessKey,
				secretKey: aSecretKey
			}, aOptions );
		}
		return lRes;
	},

	//:m:*:channelPublish
	//:d:en:Sends a string message to the given channel on the server.
	//:d:en:The client needs to be authenticated against the server and the
	//:d:en:channel to publish data. All clients that subscribed to the channel
	//:d:en:will receive the message.
	//:a:en::aChannel:String:The id of the server side data channel.
	//:a:en::aData:String:String (text) to be sent to the server side data channel.
	//:r:*:::void:none
	// TODO: introduce OnResponse here too to get noticed on error or success.
	channelPublishString: function( aChannel, aString, aOptions ) {
		var lRes = this.checkConnected();
		if( 0 == lRes.code ) {
			this.sendToken({
				ns: jws.ChannelPlugIn.NS,
				type: jws.ChannelPlugIn.PUBLISH,
				channel: aChannel,
				data: aString
			}, aOptions );
		}
		return lRes;
	},

	//:m:*:channelPublish
	//:d:en:Sends a combined string (id) and map message to the given channel _
	//:d:en:on the server. The id can be used to identify the map type/content.
	//:d:en:The client needs to be authenticated against the server and the
	//:d:en:channel to publish data. All clients that subscribed to the channel
	//:d:en:will receive the message.
	//:a:en::aChannel:String:The id of the server side data channel.
	//:a:en::aData:String:String (text) to be sent to the server side data channel.
	//:r:*:::void:none
	channelPublish: function( aChannel, aData, aMap, aOptions ) {
		var lRes = this.checkConnected();
		if( 0 == lRes.code ) {
			this.sendToken({
				ns: jws.ChannelPlugIn.NS,
				type: jws.ChannelPlugIn.PUBLISH,
				channel: aChannel,
				data: aData,
				map: aMap
			}, aOptions );
		}
		return lRes;
	},

	//:m:*:channelPublishMap
	//:d:en:Sends a map message to the given channel on the server.
	//:d:en:The client needs to be authenticated against the server and the
	//:d:en:channel to publish data. All clients that subscribed to the channel
	//:d:en:will receive the message.
	//:a:en::aChannel:String:The id of the server side data channel.
	//:a:en::aMap:Map:Data object to be sent to the server side data channel.
	//:r:*:::void:none
	// TODO: introduce OnResponse here too to get noticed on error or success.
	channelPublishMap: function( aChannel, aMap, aOptions ) {
		var lRes = this.checkConnected();
		if( 0 == lRes.code ) {
			this.sendToken({
				ns: jws.ChannelPlugIn.NS,
				type: jws.ChannelPlugIn.PUBLISH,
				channel: aChannel,
				map: aMap
			}, aOptions );
		}
		return lRes;
	},

	//:m:*:channelCreate
	//:d:en:Creates a new channel on the server. If a channel with the given _
	//:d:en:channel-id already exists the create channel request is rejected. _
	//:d:en:A private channel requires an access key, if this is not provided _
	//:d:en:for a private channel the request is rejected. For public channel _
	//:d:en:the access key is optional.
	//:a:en::aChannel:String:The id of the server side data channel.
	//:a:en::aName:String:The name (human readably) of the channel.
	//:r:*:::void:none
	channelCreate: function( aId, aName, aOptions ) {
		var lRes = this.checkConnected();
		if( 0 == lRes.code ) {
			var lIsPrivate = false;
			var lIsSystem = false;
			var lAccessKey = null;
			var lSecretKey = null;
			var lOwner = null;
			var lPassword = null;
			if( aOptions ) {
				if( aOptions.isPrivate != undefined ) {
					lIsPrivate = aOptions.isPrivate;
				}
				if( aOptions.isSystem != undefined ) {
					lIsSystem = aOptions.isSystem;
				}
				if( aOptions.accessKey != undefined ) {
					lAccessKey = aOptions.accessKey;
				}
				if( aOptions.secretKey != undefined ) {
					lSecretKey = aOptions.secretKey;
				}
				if( aOptions.owner != undefined ) {
					lOwner = aOptions.owner;
				}
				if( aOptions.password != undefined ) {
					lPassword = aOptions.password;
				}
			}
			this.sendToken({
				ns: jws.ChannelPlugIn.NS,
				type: jws.ChannelPlugIn.CREATE_CHANNEL,
				channel: aId,
				name: aName,
				isPrivate: lIsPrivate,
				isSystem: lIsSystem,
				accessKey: lAccessKey,
				secretKey: lSecretKey,
				owner: lOwner,
				password: lPassword
			}, aOptions );
		}
		return lRes;
	},

	//:m:*:channelRemove
	//:d:en:Removes a (non-system) channel on the server. Only the owner of _
	//:d:en:channel can remove a channel. If a accessKey/secretKey pair is _
	//:d:en:defined for a channel this needs to be passed as well, otherwise _
	//:d:en:the remove request is rejected.
	//:a:en::aChannel:String:The id of the server side data channel.
	//:r:*:::void:none
	channelRemove: function( aId, aOptions ) {
		var lRes = this.checkConnected();
		if( 0 == lRes.code ) {
			var lAccessKey = null;
			var lSecretKey = null;
			var lOwner = null;
			var lPassword = null;
			if( aOptions ) {
				if( aOptions.accessKey != undefined ) {
					lAccessKey = aOptions.accessKey;
				}
				if( aOptions.secretKey != undefined ) {
					lSecretKey = aOptions.secretKey;
				}
				if( aOptions.owner != undefined ) {
					lOwner = aOptions.owner;
				}
				if( aOptions.password != undefined ) {
					lPassword = aOptions.password;
				}
			}
			this.sendToken({
				ns: jws.ChannelPlugIn.NS,
				type: jws.ChannelPlugIn.REMOVE_CHANNEL,
				channel: aId,
				accessKey: lAccessKey,
				secretKey: lSecretKey,
				owner: lOwner,
				password: lPassword
			}, aOptions );
		}
		return lRes;
	},

	//:m:*:channelGetSubscribers
	//:d:en:Returns all channels to which the current client currently has
	//:d:en:subscribed to. This also includes private channels. The owners of
	//:d:en:the channels are not returned due to security reasons.
	//:a:en::aChannel:String:The id of the server side data channel.
	//:a:en::aAccessKey:String:Access Key for the channel (required for private channels, optional for public channels).
	//:r:*:::void:none
	channelGetSubscribers: function( aChannel, aAccessKey, aOptions ) {
		var lRes = this.checkConnected();
		if( 0 == lRes.code ) {
			this.sendToken({
				ns: jws.ChannelPlugIn.NS,
				type: jws.ChannelPlugIn.GET_SUBSCRIBERS,
				channel: aChannel,
				accessKey: aAccessKey
			}, aOptions );
		}
		return lRes;
	},

	//:m:*:channelGetSubscriptions
	//:d:en:Returns all channels to which the current client currently has
	//:d:en:subscribed to. This also includes private channels. The owners of
	//:d:en:the channels are not returned due to security reasons.
	//:a:en:::none
	//:r:*:::void:none
	channelGetSubscriptions: function( aOptions ) {
		var lRes = this.checkConnected();
		if( 0 == lRes.code ) {
			this.sendToken({
				ns: jws.ChannelPlugIn.NS,
				type: jws.ChannelPlugIn.GET_SUBSCRIPTIONS
			}, aOptions );
		}
		return lRes;
	},

	//:m:*:channelGetIds
	//:d:en:Tries to obtain all ids of the public channels
	//:a:en:::none
	//:r:*:::void:none
	channelGetIds: function( aOptions ) {
		var lRes = this.checkConnected();
		if( 0 == lRes.code ) {
			this.sendToken({
				ns: jws.ChannelPlugIn.NS,
				type: jws.ChannelPlugIn.GET_CHANNELS
			}, aOptions );
		}
		return lRes;
	},

	setChannelCallbacks: function( aListeners ) {
		if( !aListeners ) {
			aListeners = {};
		}
		if( aListeners.OnChannelCreated !== undefined ) {
			this.fOnChannelCreated = aListeners.OnChannelCreated;
		}
		if( aListeners.OnChannelsReceived !== undefined ) {
			this.fOnChannelsReceived = aListeners.OnChannelsReceived;
		}
		if( aListeners.OnChannelRemoved !== undefined ) {
			this.fOnChannelRemoved = aListeners.OnChannelRemoved;
		}
	}

};

// add the ChannelPlugIn PlugIn into the jWebSocketTokenClient class
jws.oop.addPlugIn( jws.jWebSocketTokenClient, jws.ChannelPlugIn );
