// Compiled by ClojureScript 1.9.229 {}
goog.provide('conway.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('conway.game');
conway.core.game_state = reagent.core.atom.call(null,conway.game.alternate.call(null,(9),(9),conway.game.alternate.call(null,(9),(10),conway.game.alternate.call(null,(9),(8),conway.game.Game_conway.call(null,(19),(19))))));
conway.core.next_state = (function conway$core$next_state(game){
return cljs.core.swap_BANG_.call(null,game,conway.game.play_round);
});
conway.core.tick_every = (function conway$core$tick_every(ms,runner){
var c = cljs.core.async.chan.call(null);
var c__23050__auto___25976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto___25976,c){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto___25976,c){
return (function (state_25959){
var state_val_25960 = (state_25959[(1)]);
if((state_val_25960 === (1))){
var state_25959__$1 = state_25959;
var statearr_25961_25977 = state_25959__$1;
(statearr_25961_25977[(2)] = null);

(statearr_25961_25977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (2))){
var inst_25944 = cljs.core.async.timeout.call(null,ms);
var state_25959__$1 = state_25959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25959__$1,(4),inst_25944);
} else {
if((state_val_25960 === (3))){
var inst_25957 = (state_25959[(2)]);
var state_25959__$1 = state_25959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25959__$1,inst_25957);
} else {
if((state_val_25960 === (4))){
var inst_25946 = (state_25959[(2)]);
var inst_25947 = cljs.core.deref.call(null,runner);
var inst_25948 = new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(inst_25947);
var state_25959__$1 = (function (){var statearr_25962 = state_25959;
(statearr_25962[(7)] = inst_25946);

return statearr_25962;
})();
if(cljs.core.truth_(inst_25948)){
var statearr_25963_25978 = state_25959__$1;
(statearr_25963_25978[(1)] = (5));

} else {
var statearr_25964_25979 = state_25959__$1;
(statearr_25964_25979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (5))){
var state_25959__$1 = state_25959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25959__$1,(8),c,new cljs.core.Keyword(null,"tick","tick",-835886976));
} else {
if((state_val_25960 === (6))){
var state_25959__$1 = state_25959;
var statearr_25965_25980 = state_25959__$1;
(statearr_25965_25980[(2)] = null);

(statearr_25965_25980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (7))){
var inst_25954 = (state_25959[(2)]);
var state_25959__$1 = (function (){var statearr_25966 = state_25959;
(statearr_25966[(8)] = inst_25954);

return statearr_25966;
})();
var statearr_25967_25981 = state_25959__$1;
(statearr_25967_25981[(2)] = null);

(statearr_25967_25981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (8))){
var inst_25951 = (state_25959[(2)]);
var state_25959__$1 = state_25959;
var statearr_25968_25982 = state_25959__$1;
(statearr_25968_25982[(2)] = inst_25951);

(statearr_25968_25982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__23050__auto___25976,c))
;
return ((function (switch__22938__auto__,c__23050__auto___25976,c){
return (function() {
var conway$core$tick_every_$_state_machine__22939__auto__ = null;
var conway$core$tick_every_$_state_machine__22939__auto____0 = (function (){
var statearr_25972 = [null,null,null,null,null,null,null,null,null];
(statearr_25972[(0)] = conway$core$tick_every_$_state_machine__22939__auto__);

(statearr_25972[(1)] = (1));

return statearr_25972;
});
var conway$core$tick_every_$_state_machine__22939__auto____1 = (function (state_25959){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_25959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e25973){if((e25973 instanceof Object)){
var ex__22942__auto__ = e25973;
var statearr_25974_25983 = state_25959;
(statearr_25974_25983[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25984 = state_25959;
state_25959 = G__25984;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
conway$core$tick_every_$_state_machine__22939__auto__ = function(state_25959){
switch(arguments.length){
case 0:
return conway$core$tick_every_$_state_machine__22939__auto____0.call(this);
case 1:
return conway$core$tick_every_$_state_machine__22939__auto____1.call(this,state_25959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conway$core$tick_every_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = conway$core$tick_every_$_state_machine__22939__auto____0;
conway$core$tick_every_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = conway$core$tick_every_$_state_machine__22939__auto____1;
return conway$core$tick_every_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto___25976,c))
})();
var state__23052__auto__ = (function (){var statearr_25975 = f__23051__auto__.call(null);
(statearr_25975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto___25976);

return statearr_25975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto___25976,c))
);


return c;
});
conway.core.stop = (function conway$core$stop(something){
return cljs.core.swap_BANG_.call(null,something,cljs.core.update,new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,something)));
}));
});
conway.core.game_switch = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"running","running",1554969103),true], null));
conway.core.click_cell = (function conway$core$click_cell(x,y,game){
return cljs.core.swap_BANG_.call(null,game,(function (p1__25985_SHARP_){
return conway.game.alternate.call(null,x,y,p1__25985_SHARP_);
}));
});
conway.core.home_page = (function conway$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Conway's Game of Life"], null)], null);
});
conway.core.cell = (function conway$core$cell(x,y,game){
if(cljs.core.truth_(conway.game.alive_QMARK_.call(null,x,y,cljs.core.deref.call(null,game)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"cell alive",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("["),cljs.core.str(x),cljs.core.str(" "),cljs.core.str(y),cljs.core.str("]")].join(''),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return conway.core.click_cell.call(null,x,y,game);
})], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"cell dead",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("["),cljs.core.str(x),cljs.core.str(" "),cljs.core.str(y),cljs.core.str("]")].join(''),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return conway.core.click_cell.call(null,x,y,game);
})], null)], null);
}
});
conway.core.row = (function conway$core$row(cells){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"row",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand.call(null,(100))], null),cells], null);
});
conway.core.start_button = (function conway$core$start_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
conway.core.stop.call(null,conway.core.game_switch);

return cljs.core.println.call(null,cljs.core.deref.call(null,conway.core.game_switch));
}),new cljs.core.Keyword(null,"key","key",-1516042587),"start"], null),"Start/Stop"], null);
});
conway.core.grid = (function conway$core$grid(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"game"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"grid"], null),cljs.core.doall.call(null,cljs.core.map.call(null,conway.core.row,cljs.core.partition.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,conway.core.game_state)),(function (){var iter__20969__auto__ = (function conway$core$grid_$_iter__25992(s__25993){
return (new cljs.core.LazySeq(null,(function (){
var s__25993__$1 = s__25993;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25993__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var y = cljs.core.first.call(null,xs__5205__auto__);
var iterys__20965__auto__ = ((function (s__25993__$1,y,xs__5205__auto__,temp__4657__auto__){
return (function conway$core$grid_$_iter__25992_$_iter__25994(s__25995){
return (new cljs.core.LazySeq(null,((function (s__25993__$1,y,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__25995__$1 = s__25995;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__25995__$1);
if(temp__4657__auto____$1){
var s__25995__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25995__$2)){
var c__20967__auto__ = cljs.core.chunk_first.call(null,s__25995__$2);
var size__20968__auto__ = cljs.core.count.call(null,c__20967__auto__);
var b__25997 = cljs.core.chunk_buffer.call(null,size__20968__auto__);
if((function (){var i__25996 = (0);
while(true){
if((i__25996 < size__20968__auto__)){
var x = cljs.core._nth.call(null,c__20967__auto__,i__25996);
cljs.core.chunk_append.call(null,b__25997,conway.core.cell.call(null,x,y,conway.core.game_state));

var G__25998 = (i__25996 + (1));
i__25996 = G__25998;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25997),conway$core$grid_$_iter__25992_$_iter__25994.call(null,cljs.core.chunk_rest.call(null,s__25995__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25997),null);
}
} else {
var x = cljs.core.first.call(null,s__25995__$2);
return cljs.core.cons.call(null,conway.core.cell.call(null,x,y,conway.core.game_state),conway$core$grid_$_iter__25992_$_iter__25994.call(null,cljs.core.rest.call(null,s__25995__$2)));
}
} else {
return null;
}
break;
}
});})(s__25993__$1,y,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__25993__$1,y,xs__5205__auto__,temp__4657__auto__))
;
var fs__20966__auto__ = cljs.core.seq.call(null,iterys__20965__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,conway.core.game_state)))));
if(fs__20966__auto__){
return cljs.core.concat.call(null,fs__20966__auto__,conway$core$grid_$_iter__25992.call(null,cljs.core.rest.call(null,s__25993__$1)));
} else {
var G__25999 = cljs.core.rest.call(null,s__25993__$1);
s__25993__$1 = G__25999;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20969__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,conway.core.game_state))));
})())))], null),conway.core.start_button.call(null)], null);
});
conway.core.generations_loop = (function conway$core$generations_loop(running){
var c__23050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto__){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto__){
return (function (state_26046){
var state_val_26047 = (state_26046[(1)]);
if((state_val_26047 === (1))){
var inst_26032 = conway.core.tick_every.call(null,(1000),running);
var inst_26033 = inst_26032;
var state_26046__$1 = (function (){var statearr_26048 = state_26046;
(statearr_26048[(7)] = inst_26033);

return statearr_26048;
})();
var statearr_26049_26064 = state_26046__$1;
(statearr_26049_26064[(2)] = null);

(statearr_26049_26064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (2))){
var inst_26033 = (state_26046[(7)]);
var state_26046__$1 = state_26046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26046__$1,(4),inst_26033);
} else {
if((state_val_26047 === (3))){
var inst_26044 = (state_26046[(2)]);
var state_26046__$1 = state_26046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26046__$1,inst_26044);
} else {
if((state_val_26047 === (4))){
var inst_26036 = (state_26046[(2)]);
var state_26046__$1 = state_26046;
if(cljs.core.truth_(inst_26036)){
var statearr_26050_26065 = state_26046__$1;
(statearr_26050_26065[(1)] = (5));

} else {
var statearr_26051_26066 = state_26046__$1;
(statearr_26051_26066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (5))){
var inst_26038 = conway.core.next_state.call(null,conway.core.game_state);
var state_26046__$1 = state_26046;
var statearr_26053_26067 = state_26046__$1;
(statearr_26053_26067[(2)] = inst_26038);

(statearr_26053_26067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (6))){
var state_26046__$1 = state_26046;
var statearr_26054_26068 = state_26046__$1;
(statearr_26054_26068[(2)] = null);

(statearr_26054_26068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (7))){
var inst_26033 = (state_26046[(7)]);
var inst_26041 = (state_26046[(2)]);
var tmp26052 = inst_26033;
var inst_26033__$1 = tmp26052;
var state_26046__$1 = (function (){var statearr_26055 = state_26046;
(statearr_26055[(8)] = inst_26041);

(statearr_26055[(7)] = inst_26033__$1);

return statearr_26055;
})();
var statearr_26056_26069 = state_26046__$1;
(statearr_26056_26069[(2)] = null);

(statearr_26056_26069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__23050__auto__))
;
return ((function (switch__22938__auto__,c__23050__auto__){
return (function() {
var conway$core$generations_loop_$_state_machine__22939__auto__ = null;
var conway$core$generations_loop_$_state_machine__22939__auto____0 = (function (){
var statearr_26060 = [null,null,null,null,null,null,null,null,null];
(statearr_26060[(0)] = conway$core$generations_loop_$_state_machine__22939__auto__);

(statearr_26060[(1)] = (1));

return statearr_26060;
});
var conway$core$generations_loop_$_state_machine__22939__auto____1 = (function (state_26046){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_26046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e26061){if((e26061 instanceof Object)){
var ex__22942__auto__ = e26061;
var statearr_26062_26070 = state_26046;
(statearr_26062_26070[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26071 = state_26046;
state_26046 = G__26071;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
conway$core$generations_loop_$_state_machine__22939__auto__ = function(state_26046){
switch(arguments.length){
case 0:
return conway$core$generations_loop_$_state_machine__22939__auto____0.call(this);
case 1:
return conway$core$generations_loop_$_state_machine__22939__auto____1.call(this,state_26046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conway$core$generations_loop_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = conway$core$generations_loop_$_state_machine__22939__auto____0;
conway$core$generations_loop_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = conway$core$generations_loop_$_state_machine__22939__auto____1;
return conway$core$generations_loop_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto__))
})();
var state__23052__auto__ = (function (){var statearr_26063 = f__23051__auto__.call(null);
(statearr_26063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto__);

return statearr_26063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto__))
);

return c__23050__auto__;
});
conway.core.mount_root = (function conway$core$mount_root(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conway.core.grid], null),document.getElementById("app"));
});
conway.core.init_BANG_ = (function conway$core$init_BANG_(){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conway.core.start_button], null),document.getElementById("app"));

conway.core.mount_root.call(null);

return conway.core.generations_loop.call(null,conway.core.game_switch);
});

//# sourceMappingURL=core.js.map?rel=1487785000962