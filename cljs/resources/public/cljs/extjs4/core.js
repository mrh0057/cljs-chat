goog.provide('extjs4.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('sencha_utils.core');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
extjs4.core.ext = Ext;
extjs4.core.create = (function create(name,config){
return extjs4.core.ext.create(name,sencha_utils.core.to_config.call(null,config));
});
extjs4.core.application = (function application(name,launch_func){
return extjs4.core.ext.application(sencha_utils.core.to_config.call(null,cljs.core.ObjMap.fromObject(["﷐'name","﷐'launch"],{"﷐'name":name,"﷐'launch":launch_func})));
});
extjs4.core.define = (function define(name,config){
return extjs4.core.ext.define(name,sencha_utils.core.to_config.call(null,config));
});
