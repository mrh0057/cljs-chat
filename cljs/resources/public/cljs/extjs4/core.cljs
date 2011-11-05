(ns extjs4.core
  (:require [clojure.browser.repl :as repl]
            [sencha-utils.core :as sencha])
  (:require-macros [extjs-macs.core :as macs]))

(repl/connect "http://localhost:9000/repl")

(def ext (js* "Ext"))

(defn create [name config]
  (.create ext name (sencha/to-config config)))

(defn application [name launch-func]
  (.application ext (sencha/to-config
                     {:name  name
                      :launch launch-func})))

(defn define [name config]
  (.define ext name (sencha/to-config config)))
