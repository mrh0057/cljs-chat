(ns cljs-chat.core
  (:use compojure.core
        compojure.route
        compojure.handler
        ring.adapter.messaging
        ring.middleware.params
        ring.adapter.cometd
        ring.adapter.service
        ring.adapter.jetty7
        ring.adapter.client))

(defroutes all-routes
  (files "/" {:root "cljs"}))

(defservices all-services)

(def app (-> all-routes
             wrap-params))

(defn run-server []
  (future (do
            (run-jetty (var app)
                       {:port 9096 :servlets
                        [(create-cometd-servlet)
                         (create-bayeux-servlet all-services :timestamp
                                                :acknowledge
                                                :timesync)]}))))
