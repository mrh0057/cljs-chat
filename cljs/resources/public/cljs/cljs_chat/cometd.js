goog.provide('cljs_chat.cometd');
goog.require('cljs.core');
goog.require('extjs4.core');
cljs_chat.cometd.defonce.call(null,cljs_chat.cometd.connected,cljs.core.atom.call(null,false));
extjs4.core.ext.onReady((function (){
cljs_chat.cometd.cometd_var = Ext.ux.cometd;
cljs_chat.cometd.cometd_var.init("http://localhost:9096/cometd");
return cljs_chat.cometd.cometd_var.addListener("/meta/connect",(function (msg){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.deref.call(null,cljs_chat.cometd.connected))))
{return cljs.core.swap_BANG_.call(null,cljs_chat.cometd.connected,(function (_){
return true;
}));
} else
{return null;
}
}));
}));
