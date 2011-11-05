(defproject cljs-chat "0.1.0-SNAPSHOT"
  :description "FIXME: write"
  :dependencies [[org.clojure/clojure "1.2.1"]
                 [net.matthoyt/ring-cometd2-adapter "0.1.0-SNAPSHOT"]
                 [compojure "0.6.5"]
                 [clj-rabbitmq "0.1.0-SNAPSHOT"]
                 [ring-crypt "0.1.0"]
                 [clj-amqp-dsl "0.1.0-SNAPSHOT"]]
  :dev-dependencies [[swank-clojure "1.4.0-SNAPSHOT"]
                     [midje "1.2.0" :exclusions [org.clojure.contrib/core]]])
