(ns ^{:doc "Contians utils for working with sencha libraries."}
  sencha-utils.core)

(def convert-array)

(defn convert-map [cljmap]
  (let [out (js-obj)]
    (doseq [val cljmap]
      (aset out
            (name (first val))
            (cond (map? (second val))
                  (convert-map (second val))
                  (sequential? (second val))
                  (convert-array (second val))
                  :else
                  (second val))))
    out))

(defn convert-array [sequential]
  (to-array (map (fn [val]
                   (cond (map? val)
                         (convert-map val)
                         (sequential? val)
                         (convert-array val)
                         :else
                         val)) sequential)))

(defn to-config
  "Converts a clojure map into an ExtJS/Sencha Touch config object"
  [clj-map]
  (convert-map clj-map))
