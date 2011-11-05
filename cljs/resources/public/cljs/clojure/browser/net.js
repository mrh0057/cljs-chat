goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__3901){
var vec__3902__3903 = p__3901;
var k__3904 = cljs.core.nth.call(null,vec__3902__3903,0,null);
var v__3905 = cljs.core.nth.call(null,vec__3902__3903,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__3904.toLowerCase()),v__3905]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__3936 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____3906 = this$;

if(cljs.core.truth_(and__3546__auto____3906))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____3906;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____3907 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3907))
{return or__3548__auto____3907;
} else
{var or__3548__auto____3908 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____3908))
{return or__3548__auto____3908;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__3937 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____3909 = this$;

if(cljs.core.truth_(and__3546__auto____3909))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____3909;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____3910 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3910))
{return or__3548__auto____3910;
} else
{var or__3548__auto____3911 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____3911))
{return or__3548__auto____3911;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__3938 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____3912 = this$;

if(cljs.core.truth_(and__3546__auto____3912))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____3912;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____3913 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3913))
{return or__3548__auto____3913;
} else
{var or__3548__auto____3914 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____3914))
{return or__3548__auto____3914;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__3939 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____3915 = this$;

if(cljs.core.truth_(and__3546__auto____3915))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____3915;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____3916 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3916))
{return or__3548__auto____3916;
} else
{var or__3548__auto____3917 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____3917))
{return or__3548__auto____3917;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case  1 :
return connect__3936.call(this,this$);
case  2 :
return connect__3937.call(this,this$,opt1);
case  3 :
return connect__3938.call(this,this$,opt1,opt2);
case  4 :
return connect__3939.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__3941 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____3918 = this$;

if(cljs.core.truth_(and__3546__auto____3918))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____3918;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____3919 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3919))
{return or__3548__auto____3919;
} else
{var or__3548__auto____3920 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____3920))
{return or__3548__auto____3920;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__3942 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____3921 = this$;

if(cljs.core.truth_(and__3546__auto____3921))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____3921;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____3922 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3922))
{return or__3548__auto____3922;
} else
{var or__3548__auto____3923 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____3923))
{return or__3548__auto____3923;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__3943 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____3924 = this$;

if(cljs.core.truth_(and__3546__auto____3924))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____3924;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____3925 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3925))
{return or__3548__auto____3925;
} else
{var or__3548__auto____3926 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____3926))
{return or__3548__auto____3926;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__3944 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____3927 = this$;

if(cljs.core.truth_(and__3546__auto____3927))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____3927;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____3928 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3928))
{return or__3548__auto____3928;
} else
{var or__3548__auto____3929 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____3929))
{return or__3548__auto____3929;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__3945 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____3930 = this$;

if(cljs.core.truth_(and__3546__auto____3930))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____3930;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____3931 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3931))
{return or__3548__auto____3931;
} else
{var or__3548__auto____3932 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____3932))
{return or__3548__auto____3932;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case  2 :
return transmit__3941.call(this,this$,opt);
case  3 :
return transmit__3942.call(this,this$,opt,opt2);
case  4 :
return transmit__3943.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__3944.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__3945.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____3933 = this$;

if(cljs.core.truth_(and__3546__auto____3933))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____3933;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____3934 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3934))
{return or__3548__auto____3934;
} else
{var or__3548__auto____3935 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____3935))
{return or__3548__auto____3935;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__3947){
var vec__3948__3949 = p__3947;
var k__3950 = cljs.core.nth.call(null,vec__3948__3949,0,null);
var v__3951 = cljs.core.nth.call(null,vec__3948__3949,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__3950.toLowerCase()),v__3951]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__3952 = null;
var G__3952__3953 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__3952__3954 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__3952__3955 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__3952__3956 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__3952__3957 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__3952 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__3952__3953.call(this,this$,uri);
case  3 :
return G__3952__3954.call(this,this$,uri,method);
case  4 :
return G__3952__3955.call(this,this$,uri,method,content);
case  5 :
return G__3952__3956.call(this,this$,uri,method,content,headers);
case  6 :
return G__3952__3957.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3952;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__3959){
var vec__3960__3961 = p__3959;
var k__3962 = cljs.core.nth.call(null,vec__3960__3961,0,null);
var v__3963 = cljs.core.nth.call(null,vec__3960__3961,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__3962.toLowerCase()),v__3963]);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
* Returns an XhrIo connection
*/
clojure.browser.net.xhr_connection = (function xhr_connection(){
return (new goog.net.XhrIo());
});
clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = (function() {
var register_service = null;
var register_service__3970 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____3964 = this$;

if(cljs.core.truth_(and__3546__auto____3964))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____3964;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____3965 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3965))
{return or__3548__auto____3965;
} else
{var or__3548__auto____3966 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____3966))
{return or__3548__auto____3966;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__3971 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____3967 = this$;

if(cljs.core.truth_(and__3546__auto____3967))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____3967;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____3968 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3968))
{return or__3548__auto____3968;
} else
{var or__3548__auto____3969 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____3969))
{return or__3548__auto____3969;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return register_service__3970.call(this,this$,service_name,fn);
case  4 :
return register_service__3971.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__3973 = null;
var G__3973__3974 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__3973__3975 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__3973__3976 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__3973__3977 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__3973 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__3973__3974.call(this,this$);
case  2 :
return G__3973__3975.call(this,this$,on_connect_fn);
case  3 :
return G__3973__3976.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__3973__3977.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3973;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit = (function (this$,service_name,payload){
return this$.send(cljs.core.name.call(null,service_name),payload);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close = (function (this$){
return this$.close(cljs.core.List.EMPTY);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service = (function() {
var G__3979 = null;
var G__3979__3980 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__3979__3981 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__3979 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__3979__3980.call(this,this$,service_name,fn);
case  4 :
return G__3979__3981.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3979;
})()
;
/**
* When passed with a config hash-map, returns a parent
* CrossPageChannel object. Keys in the config hash map are downcased
* versions of the goog.net.xpc.CfgFields enum keys,
* e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
* hash.
* 
* When passed with no args, creates a child CrossPageChannel object,
* and the config is automatically taken from the URL param 'xpc', as
* per the CrossPageChannel API.
*/
clojure.browser.net.xpc_connection = (function() {
var xpc_connection = null;
var xpc_connection__3992 = (function (){
var temp__3698__auto____3983 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____3983))
{var config__3984 = temp__3698__auto____3983;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__3984)));
} else
{return null;
}
});
var xpc_connection__3993 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__3985){
var vec__3986__3987 = p__3985;
var k__3988 = cljs.core.nth.call(null,vec__3986__3987,0,null);
var v__3989 = cljs.core.nth.call(null,vec__3986__3987,1,null);

var temp__3698__auto____3990 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__3988);

if(cljs.core.truth_(temp__3698__auto____3990))
{var field__3991 = temp__3698__auto____3990;

return cljs.core.assoc.call(null,sum,field__3991,v__3989);
} else
{return null;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__3992.call(this);
case  1 :
return xpc_connection__3993.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
