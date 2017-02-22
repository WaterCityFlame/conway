(ns conway.game)

(def g {:width 6 :height 4 
        :lives [2 3] :born [3]
        :grid  [false true  false false false false
                true  false false false false false 
                true  true  true  false  true  false
                false false false false false false ]})

(def g2 {:width 5 :height 5 
         :lives [2 3] :born [3]
         :grid [false false false false false
                false false true  false false
                false false true  false false
                false false true  false false
                false false false false false]})

(defn Game [width, height, lives, born]
  {:width width :height height :lives lives :born born
   :grid (into [] (repeat (* width height) false))
   })

(defn Game-conway [width, height]
  (Game width height [2 3] [3]))

(defn to-string [game]
  (apply str 
         (interleave 
            (map #(apply str %)
               (partition (:width game)
                (map #(if %  "# " "0 ") (:grid game) )))
            (repeat "\n"))))

(defn alive? [x y game]
  (nth (:grid game)
       (+ x (* y (:width game)))))

(defn alternate [x, y, game]
  (let [index (+ x (* y (:width game)))]
    (if (and (> (:width game) x) (> (:height game) y))
      (update game :grid 
        #(concat (take index %) 
                (if (alive? x y game) '(false) '(true)) 
                (drop (inc index) %)))
      game)))

(defn next-vals [x max-val]
  [(if (= x 0) (dec max-val) (dec x))
   x
   (if (= (inc x) max-val) 0 (inc x))])

(defn adjacent [x y game]
  (keep identity
        (for [x-vals (next-vals x (:width game))
              y-vals (next-vals y (:height game))]
          (when (or (not= x-vals x) (not= y-vals y))
            [x-vals y-vals]))))

(defn live-adj [x y game]
  (count (filter identity
                 (map #(alive? (first %) (second %) game) 
                      (adjacent x y game)))))

(defn survives? [x y game]
  (if (alive? x y game)
    (if (or (= 3 (live-adj x y game)) 
            (= 2 (live-adj x y game)))
      true
      false)
    (if (= 3 (live-adj x y game))
      true
      false)))


(defn next-gen [game-state] 
   (for [y (range (:height game-state)) 
         x (range (:width game-state))]
    (survives? x y game-state)))

(defn play-round [game]
  (update game
          :grid
          #(next-gen game)))
