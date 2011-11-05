(ns cljs-chat.cometd
  (:require [extjs4.core :as extjs4])
  (:require-macros  [extjs-macs.core :as extjs-macs]))

(defonce connected (atom false))

(extjs-macs/expand-onready 
 (def cometd-var (js* "Ext.ux.cometd"))
 (.init cometd-var "http://localhost:9096/cometd")
 (.addListener cometd-var "/meta/connect"
               (fn [msg]
                 (if (not @connected)
                   (swap! connected (fn [_] true))))))
