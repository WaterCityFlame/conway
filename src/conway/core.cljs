(ns conway.core
    (:require [reagent.core :as reagent]
              [conway.game :as game]))

(def game-state (reagent/atom (game/alternate 9 9 
                             (game/alternate 9 10 
                                        (game/alternate 9 8 
                                               (game/Game-conway 40 17))))))

(defn next-state [game]
  (swap! game game/play-round))

(defn toggle [something]
  (swap! something update :running #(not (:running @something))))

(defn generations-loop [switch]
    (js/setInterval #(when (:running @switch) 
                       (next-state game-state)) 
                     1500))

(def game-switch (atom {:running true 
                        :run-function (fn [] (generations-loop game-switch))
                        :btn-class "pure-button-active"}))

(defn toggle-class [id toggled-class]
  (let [el-classList (.-classList (.getElementById js/document id))]
    (if (.contains el-classList toggled-class)
      (.remove el-classList toggled-class)
      (.add el-classList toggled-class))))

(defn toggle-html [id html1 html2]
  (let [el (.getElementById js/document id)]
    (if (= (.-innerHTML el) html1)
      (set! (.-innerHTML el) html2)
      (set! (.-innerHTML el) html1))))
;; -------------------------
;; Views
(defn start-button-clicked [] 
  (do 
    (toggle-class "start" "pure-button-active") 
    (toggle-html "start" "Start" "Stop")
    (toggle game-switch)))

(defn start-button []
  (let [] 
    [:button.pure-button 
     {:class "pure-button pure-button-active"
      :onClick start-button-clicked
      :key "start" :id "start" } 
     "Stop"]))

(defn title []
  [:div {:id "title-bar" :class "pure-u-1"}
   [:h1 "An Implementation of Conway's Game of Life"]
   (start-button)])

(defn cell [x y living]
    [:td {:key (gensym (str x " " y))
             :class (if @living 
                      "cell alive"
                      "cell dead") 
           :onClick (fn [] (swap! living not))
              }])

(defn row [cells]
  (into [:tr {:class "row" :key (gensym (rand 1000))
                                :style {:width (str 
                                                 (* 1.7 (count cells)) 
                                                 "em")}} ]
                           cells))

(defn grid [width height]
 [:table {:key "grid" :id "grid" :class "pure-u-23-24"} [:tbody
   (doall (map row 
       (partition width
                  (doall (for [y (range height) 
                               x (range width)] 
                    [cell  x y (reagent/cursor game-state 
                                          [:grid (game/index x y width)])])))))]])

(defn app [w h]
  [:div.app {:class "pure-g"}
   (grid @w @h)
   (title)])
;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render-component [#(app (reagent/cursor game-state [:width])
                                   (reagent/cursor game-state [:height]))] 
                            (.getElementById js/document "app")))

(defn init! []
  (do 
    (mount-root)
    (generations-loop game-switch)))
