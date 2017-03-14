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
var c__22366__auto___23318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22366__auto___23318,c){
return (function (){
var f__22367__auto__ = (function (){var switch__22345__auto__ = ((function (c__22366__auto___23318,c){
return (function (state_23297){
var state_val_23298 = (state_23297[(1)]);
if((state_val_23298 === (7))){
var inst_23281 = (state_23297[(2)]);
var inst_23282 = cljs.core.deref.call(null,runner);
var inst_23283 = new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(inst_23282);
var state_23297__$1 = (function (){var statearr_23299 = state_23297;
(statearr_23299[(7)] = inst_23281);

return statearr_23299;
})();
if(cljs.core.truth_(inst_23283)){
var statearr_23300_23319 = state_23297__$1;
(statearr_23300_23319[(1)] = (8));

} else {
var statearr_23301_23320 = state_23297__$1;
(statearr_23301_23320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (1))){
var state_23297__$1 = state_23297;
var statearr_23302_23321 = state_23297__$1;
(statearr_23302_23321[(2)] = null);

(statearr_23302_23321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (4))){
var inst_23279 = cljs.core.async.timeout.call(null,ms);
var state_23297__$1 = state_23297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23297__$1,(7),inst_23279);
} else {
if((state_val_23298 === (6))){
var inst_23293 = (state_23297[(2)]);
var state_23297__$1 = state_23297;
var statearr_23303_23322 = state_23297__$1;
(statearr_23303_23322[(2)] = inst_23293);

(statearr_23303_23322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (3))){
var inst_23295 = (state_23297[(2)]);
var state_23297__$1 = state_23297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23297__$1,inst_23295);
} else {
if((state_val_23298 === (2))){
var state_23297__$1 = state_23297;
var statearr_23304_23323 = state_23297__$1;
(statearr_23304_23323[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (11))){
var inst_23286 = (state_23297[(2)]);
var state_23297__$1 = state_23297;
var statearr_23306_23324 = state_23297__$1;
(statearr_23306_23324[(2)] = inst_23286);

(statearr_23306_23324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (9))){
var state_23297__$1 = state_23297;
var statearr_23307_23325 = state_23297__$1;
(statearr_23307_23325[(2)] = null);

(statearr_23307_23325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (5))){
var state_23297__$1 = state_23297;
var statearr_23308_23326 = state_23297__$1;
(statearr_23308_23326[(2)] = null);

(statearr_23308_23326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (10))){
var inst_23289 = (state_23297[(2)]);
var state_23297__$1 = (function (){var statearr_23309 = state_23297;
(statearr_23309[(8)] = inst_23289);

return statearr_23309;
})();
var statearr_23310_23327 = state_23297__$1;
(statearr_23310_23327[(2)] = null);

(statearr_23310_23327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (8))){
var state_23297__$1 = state_23297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23297__$1,(11),c,new cljs.core.Keyword(null,"tick","tick",-835886976));
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
}
}
}
});})(c__22366__auto___23318,c))
;
return ((function (switch__22345__auto__,c__22366__auto___23318,c){
return (function() {
var conway$core$tick_every_$_state_machine__22346__auto__ = null;
var conway$core$tick_every_$_state_machine__22346__auto____0 = (function (){
var statearr_23314 = [null,null,null,null,null,null,null,null,null];
(statearr_23314[(0)] = conway$core$tick_every_$_state_machine__22346__auto__);

(statearr_23314[(1)] = (1));

return statearr_23314;
});
var conway$core$tick_every_$_state_machine__22346__auto____1 = (function (state_23297){
while(true){
var ret_value__22347__auto__ = (function (){try{while(true){
var result__22348__auto__ = switch__22345__auto__.call(null,state_23297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22348__auto__;
}
break;
}
}catch (e23315){if((e23315 instanceof Object)){
var ex__22349__auto__ = e23315;
var statearr_23316_23328 = state_23297;
(statearr_23316_23328[(5)] = ex__22349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23329 = state_23297;
state_23297 = G__23329;
continue;
} else {
return ret_value__22347__auto__;
}
break;
}
});
conway$core$tick_every_$_state_machine__22346__auto__ = function(state_23297){
switch(arguments.length){
case 0:
return conway$core$tick_every_$_state_machine__22346__auto____0.call(this);
case 1:
return conway$core$tick_every_$_state_machine__22346__auto____1.call(this,state_23297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conway$core$tick_every_$_state_machine__22346__auto__.cljs$core$IFn$_invoke$arity$0 = conway$core$tick_every_$_state_machine__22346__auto____0;
conway$core$tick_every_$_state_machine__22346__auto__.cljs$core$IFn$_invoke$arity$1 = conway$core$tick_every_$_state_machine__22346__auto____1;
return conway$core$tick_every_$_state_machine__22346__auto__;
})()
;})(switch__22345__auto__,c__22366__auto___23318,c))
})();
var state__22368__auto__ = (function (){var statearr_23317 = f__22367__auto__.call(null);
(statearr_23317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22366__auto___23318);

return statearr_23317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22368__auto__);
});})(c__22366__auto___23318,c))
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
return cljs.core.swap_BANG_.call(null,game,(function (p1__23330_SHARP_){
return conway.game.alternate.call(null,x,y,p1__23330_SHARP_);
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"game"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"grid"], null),cljs.core.doall.call(null,cljs.core.map.call(null,conway.core.row,cljs.core.partition.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,conway.core.game_state)),(function (){var iter__20969__auto__ = (function conway$core$grid_$_iter__23337(s__23338){
return (new cljs.core.LazySeq(null,(function (){
var s__23338__$1 = s__23338;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23338__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var y = cljs.core.first.call(null,xs__5205__auto__);
var iterys__20965__auto__ = ((function (s__23338__$1,y,xs__5205__auto__,temp__4657__auto__){
return (function conway$core$grid_$_iter__23337_$_iter__23339(s__23340){
return (new cljs.core.LazySeq(null,((function (s__23338__$1,y,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__23340__$1 = s__23340;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__23340__$1);
if(temp__4657__auto____$1){
var s__23340__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23340__$2)){
var c__20967__auto__ = cljs.core.chunk_first.call(null,s__23340__$2);
var size__20968__auto__ = cljs.core.count.call(null,c__20967__auto__);
var b__23342 = cljs.core.chunk_buffer.call(null,size__20968__auto__);
if((function (){var i__23341 = (0);
while(true){
if((i__23341 < size__20968__auto__)){
var x = cljs.core._nth.call(null,c__20967__auto__,i__23341);
cljs.core.chunk_append.call(null,b__23342,conway.core.cell.call(null,x,y,conway.core.game_state));

var G__23343 = (i__23341 + (1));
i__23341 = G__23343;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23342),conway$core$grid_$_iter__23337_$_iter__23339.call(null,cljs.core.chunk_rest.call(null,s__23340__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23342),null);
}
} else {
var x = cljs.core.first.call(null,s__23340__$2);
return cljs.core.cons.call(null,conway.core.cell.call(null,x,y,conway.core.game_state),conway$core$grid_$_iter__23337_$_iter__23339.call(null,cljs.core.rest.call(null,s__23340__$2)));
}
} else {
return null;
}
break;
}
});})(s__23338__$1,y,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__23338__$1,y,xs__5205__auto__,temp__4657__auto__))
;
var fs__20966__auto__ = cljs.core.seq.call(null,iterys__20965__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,conway.core.game_state)))));
if(fs__20966__auto__){
return cljs.core.concat.call(null,fs__20966__auto__,conway$core$grid_$_iter__23337.call(null,cljs.core.rest.call(null,s__23338__$1)));
} else {
var G__23344 = cljs.core.rest.call(null,s__23338__$1);
s__23338__$1 = G__23344;
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
var t = conway.core.tick_every.call(null,(1000),running);
var c__22366__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22366__auto__,t){
return (function (){
var f__22367__auto__ = (function (){var switch__22345__auto__ = ((function (c__22366__auto__,t){
return (function (state_23385){
var state_val_23386 = (state_23385[(1)]);
if((state_val_23386 === (1))){
var state_23385__$1 = state_23385;
var statearr_23387_23401 = state_23385__$1;
(statearr_23387_23401[(2)] = null);

(statearr_23387_23401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (2))){
var state_23385__$1 = state_23385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23385__$1,(4),t);
} else {
if((state_val_23386 === (3))){
var inst_23383 = (state_23385[(2)]);
var state_23385__$1 = state_23385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23385__$1,inst_23383);
} else {
if((state_val_23386 === (4))){
var inst_23375 = (state_23385[(2)]);
var state_23385__$1 = state_23385;
if(cljs.core.truth_(inst_23375)){
var statearr_23388_23402 = state_23385__$1;
(statearr_23388_23402[(1)] = (5));

} else {
var statearr_23389_23403 = state_23385__$1;
(statearr_23389_23403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (5))){
var inst_23377 = conway.core.next_state.call(null,conway.core.game_state);
var state_23385__$1 = (function (){var statearr_23390 = state_23385;
(statearr_23390[(7)] = inst_23377);

return statearr_23390;
})();
var statearr_23391_23404 = state_23385__$1;
(statearr_23391_23404[(2)] = null);

(statearr_23391_23404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (6))){
var state_23385__$1 = state_23385;
var statearr_23392_23405 = state_23385__$1;
(statearr_23392_23405[(2)] = null);

(statearr_23392_23405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (7))){
var inst_23381 = (state_23385[(2)]);
var state_23385__$1 = state_23385;
var statearr_23393_23406 = state_23385__$1;
(statearr_23393_23406[(2)] = inst_23381);

(statearr_23393_23406[(1)] = (3));


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
});})(c__22366__auto__,t))
;
return ((function (switch__22345__auto__,c__22366__auto__,t){
return (function() {
var conway$core$generations_loop_$_state_machine__22346__auto__ = null;
var conway$core$generations_loop_$_state_machine__22346__auto____0 = (function (){
var statearr_23397 = [null,null,null,null,null,null,null,null];
(statearr_23397[(0)] = conway$core$generations_loop_$_state_machine__22346__auto__);

(statearr_23397[(1)] = (1));

return statearr_23397;
});
var conway$core$generations_loop_$_state_machine__22346__auto____1 = (function (state_23385){
while(true){
var ret_value__22347__auto__ = (function (){try{while(true){
var result__22348__auto__ = switch__22345__auto__.call(null,state_23385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22348__auto__;
}
break;
}
}catch (e23398){if((e23398 instanceof Object)){
var ex__22349__auto__ = e23398;
var statearr_23399_23407 = state_23385;
(statearr_23399_23407[(5)] = ex__22349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23408 = state_23385;
state_23385 = G__23408;
continue;
} else {
return ret_value__22347__auto__;
}
break;
}
});
conway$core$generations_loop_$_state_machine__22346__auto__ = function(state_23385){
switch(arguments.length){
case 0:
return conway$core$generations_loop_$_state_machine__22346__auto____0.call(this);
case 1:
return conway$core$generations_loop_$_state_machine__22346__auto____1.call(this,state_23385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conway$core$generations_loop_$_state_machine__22346__auto__.cljs$core$IFn$_invoke$arity$0 = conway$core$generations_loop_$_state_machine__22346__auto____0;
conway$core$generations_loop_$_state_machine__22346__auto__.cljs$core$IFn$_invoke$arity$1 = conway$core$generations_loop_$_state_machine__22346__auto____1;
return conway$core$generations_loop_$_state_machine__22346__auto__;
})()
;})(switch__22345__auto__,c__22366__auto__,t))
})();
var state__22368__auto__ = (function (){var statearr_23400 = f__22367__auto__.call(null);
(statearr_23400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22366__auto__);

return statearr_23400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22368__auto__);
});})(c__22366__auto__,t))
);

return c__22366__auto__;
});
conway.core.mount_root = (function conway$core$mount_root(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conway.core.grid], null),document.getElementById("app"));
});
conway.core.init_BANG_ = (function conway$core$init_BANG_(){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conway.core.start_button], null),document.getElementById("app"));

conway.core.mount_root.call(null);

return conway.core.generations_loop.call(null,conway.core.game_switch);
});

//# sourceMappingURL=core.js.map?rel=1489455665704