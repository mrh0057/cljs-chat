goog.provide('sencha_utils.core');
goog.require('cljs.core');
sencha_utils.core.convert_map = (function convert_map(cljmap){
var out__4028 = cljs.core.js_obj.call(null);

var G__4029__4030 = cljs.core.seq.call(null,cljmap);

if(cljs.core.truth_(G__4029__4030))
{var val__4031 = cljs.core.first.call(null,G__4029__4030);
var G__4029__4032 = G__4029__4030;

while(true){
(out__4028[cljs.core.name.call(null,cljs.core.first.call(null,val__4031))] = (cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,val__4031)))?convert_map.call(null,cljs.core.second.call(null,val__4031)):(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,cljs.core.second.call(null,val__4031)))?sencha_utils.core.convert_array.call(null,cljs.core.second.call(null,val__4031)):(cljs.core.truth_("﷐'else")?cljs.core.second.call(null,val__4031):null))));
var temp__3698__auto____4033 = cljs.core.next.call(null,G__4029__4032);

if(cljs.core.truth_(temp__3698__auto____4033))
{var G__4029__4034 = temp__3698__auto____4033;

{
var G__4035 = cljs.core.first.call(null,G__4029__4034);
var G__4036 = G__4029__4034;
val__4031 = G__4035;
G__4029__4032 = G__4036;
continue;
}
} else
{}
break;
}
} else
{}
return out__4028;
});
sencha_utils.core.convert_array = (function convert_array(sequential){
return cljs.core.to_array.call(null,cljs.core.map.call(null,(function (val){
if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,val)))
{return sencha_utils.core.convert_map.call(null,val);
} else
{if(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,val)))
{return convert_array.call(null,val);
} else
{if(cljs.core.truth_("﷐'else"))
{return val;
} else
{return null;
}
}
}
}),sequential));
});
/**
* Converts a clojure map into an ExtJS/Sencha Touch config object
*/
sencha_utils.core.to_config = (function to_config(clj_map){
return sencha_utils.core.convert_map.call(null,clj_map);
});
