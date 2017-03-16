(ns conway.core
    (:require [reagent.core :as reagent]
              [conway.game :as game]))

(def game-state (reagent/atom (game/alternate 9 9 
                             (game/alternate 9 10 
                                        (game/alternate 9 8 
                                               (game/Game-conway 19 19))))))

(defn next-state [game]
  (swap! game game/play-round))

(defn stop [something]
  (swap! something update :running #(not (:running @something))))

(def game-switch (atom {:running true}))

(defn click-cell [x y game]
    (swap! game #(game/alternate x y %)))

;; -------------------------
;; Views

(defn home-page []
  [:div [:h2 "Conway's Game of Life"]])

(defn cell [x y game]
  (if (game/alive? x y @game)
    [:div {:class "cell alive" :key (str "[" x " " y "]")
           :onClick (fn [] (click-cell x y game))} ] 
    [:div {:class "cell dead" :key (str "[" x " " y "]")
           :onClick (fn [] (click-cell x y game))} ]))

(defn row [cells]
  [:div {:class "row" :key (rand 100)} cells])

(defn start-button []
  [:button {:onClick #(do (stop game-switch) (println @game-switch)) :key "start"} "Start/Stop"])

(defn grid []
  [:div {:key "game"} 
   [:div {:key "grid" } 
    (doall (map row 
         (partition (:width @game-state) 
                    (for [y (range (:height @game-state)) 
                          x (range (:width @game-state))] 
                      (cell x y game-state)))))]
   (start-button)])

(defn generations-loop []
  (do (next-state game-state) 
      (js/setTimeout #(generations-loop)
                     1000)))
;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render-component [grid] (.getElementById js/document "app")))

(defn init! []
  (do 
    (reagent/render-component [start-button] (.getElementById js/document "app")) 
    (mount-root)
    (generations-loop)))
