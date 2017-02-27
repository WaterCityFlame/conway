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
var c__22366__auto___23953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22366__auto___23953,c){
return (function (){
var f__22367__auto__ = (function (){var switch__22345__auto__ = ((function (c__22366__auto___23953,c){
return (function (state_23936){
var state_val_23937 = (state_23936[(1)]);
if((state_val_23937 === (1))){
var state_23936__$1 = state_23936;
var statearr_23938_23954 = state_23936__$1;
(statearr_23938_23954[(2)] = null);

(statearr_23938_23954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (2))){
var inst_23921 = cljs.core.async.timeout.call(null,ms);
var state_23936__$1 = state_23936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23936__$1,(4),inst_23921);
} else {
if((state_val_23937 === (3))){
var inst_23934 = (state_23936[(2)]);
var state_23936__$1 = state_23936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23936__$1,inst_23934);
} else {
if((state_val_23937 === (4))){
var inst_23923 = (state_23936[(2)]);
var inst_23924 = cljs.core.deref.call(null,runner);
var inst_23925 = new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(inst_23924);
var state_23936__$1 = (function (){var statearr_23939 = state_23936;
(statearr_23939[(7)] = inst_23923);

return statearr_23939;
})();
if(cljs.core.truth_(inst_23925)){
var statearr_23940_23955 = state_23936__$1;
(statearr_23940_23955[(1)] = (5));

} else {
var statearr_23941_23956 = state_23936__$1;
(statearr_23941_23956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (5))){
var state_23936__$1 = state_23936;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23936__$1,(8),c,new cljs.core.Keyword(null,"tick","tick",-835886976));
} else {
if((state_val_23937 === (6))){
var state_23936__$1 = state_23936;
var statearr_23942_23957 = state_23936__$1;
(statearr_23942_23957[(2)] = null);

(statearr_23942_23957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (7))){
var inst_23931 = (state_23936[(2)]);
var state_23936__$1 = (function (){var statearr_23943 = state_23936;
(statearr_23943[(8)] = inst_23931);

return statearr_23943;
})();
var statearr_23944_23958 = state_23936__$1;
(statearr_23944_23958[(2)] = null);

(statearr_23944_23958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (8))){
var inst_23928 = (state_23936[(2)]);
var state_23936__$1 = state_23936;
var statearr_23945_23959 = state_23936__$1;
(statearr_23945_23959[(2)] = inst_23928);

(statearr_23945_23959[(1)] = (7));


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
});})(c__22366__auto___23953,c))
;
return ((function (switch__22345__auto__,c__22366__auto___23953,c){
return (function() {
var conway$core$tick_every_$_state_machine__22346__auto__ = null;
var conway$core$tick_every_$_state_machine__22346__auto____0 = (function (){
var statearr_23949 = [null,null,null,null,null,null,null,null,null];
(statearr_23949[(0)] = conway$core$tick_every_$_state_machine__22346__auto__);

(statearr_23949[(1)] = (1));

return statearr_23949;
});
var conway$core$tick_every_$_state_machine__22346__auto____1 = (function (state_23936){
while(true){
var ret_value__22347__auto__ = (function (){try{while(true){
var result__22348__auto__ = switch__22345__auto__.call(null,state_23936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22348__auto__;
}
break;
}
}catch (e23950){if((e23950 instanceof Object)){
var ex__22349__auto__ = e23950;
var statearr_23951_23960 = state_23936;
(statearr_23951_23960[(5)] = ex__22349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23961 = state_23936;
state_23936 = G__23961;
continue;
} else {
return ret_value__22347__auto__;
}
break;
}
});
conway$core$tick_every_$_state_machine__22346__auto__ = function(state_23936){
switch(arguments.length){
case 0:
return conway$core$tick_every_$_state_machine__22346__auto____0.call(this);
case 1:
return conway$core$tick_every_$_state_machine__22346__auto____1.call(this,state_23936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conway$core$tick_every_$_state_machine__22346__auto__.cljs$core$IFn$_invoke$arity$0 = conway$core$tick_every_$_state_machine__22346__auto____0;
conway$core$tick_every_$_state_machine__22346__auto__.cljs$core$IFn$_invoke$arity$1 = conway$core$tick_every_$_state_machine__22346__auto____1;
return conway$core$tick_every_$_state_machine__22346__auto__;
})()
;})(switch__22345__auto__,c__22366__auto___23953,c))
})();
var state__22368__auto__ = (function (){var statearr_23952 = f__22367__auto__.call(null);
(statearr_23952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22366__auto___23953);

return statearr_23952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22368__auto__);
});})(c__22366__auto___23953,c))
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
return cljs.core.swap_BANG_.call(null,game,(function (p1__23962_SHARP_){
return conway.game.alternate.call(null,x,y,p1__23962_SHARP_);
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"game"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"grid"], null),cljs.core.doall.call(null,cljs.core.map.call(null,conway.core.row,cljs.core.partition.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,conway.core.game_state)),(function (){var iter__20969__auto__ = (function conway$core$grid_$_iter__23969(s__23970){
return (new cljs.core.LazySeq(null,(function (){
var s__23970__$1 = s__23970;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23970__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var y = cljs.core.first.call(null,xs__5205__auto__);
var iterys__20965__auto__ = ((function (s__23970__$1,y,xs__5205__auto__,temp__4657__auto__){
return (function conway$core$grid_$_iter__23969_$_iter__23971(s__23972){
return (new cljs.core.LazySeq(null,((function (s__23970__$1,y,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__23972__$1 = s__23972;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__23972__$1);
if(temp__4657__auto____$1){
var s__23972__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23972__$2)){
var c__20967__auto__ = cljs.core.chunk_first.call(null,s__23972__$2);
var size__20968__auto__ = cljs.core.count.call(null,c__20967__auto__);
var b__23974 = cljs.core.chunk_buffer.call(null,size__20968__auto__);
if((function (){var i__23973 = (0);
while(true){
if((i__23973 < size__20968__auto__)){
var x = cljs.core._nth.call(null,c__20967__auto__,i__23973);
cljs.core.chunk_append.call(null,b__23974,conway.core.cell.call(null,x,y,conway.core.game_state));

var G__23975 = (i__23973 + (1));
i__23973 = G__23975;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23974),conway$core$grid_$_iter__23969_$_iter__23971.call(null,cljs.core.chunk_rest.call(null,s__23972__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23974),null);
}
} else {
var x = cljs.core.first.call(null,s__23972__$2);
return cljs.core.cons.call(null,conway.core.cell.call(null,x,y,conway.core.game_state),conway$core$grid_$_iter__23969_$_iter__23971.call(null,cljs.core.rest.call(null,s__23972__$2)));
}
} else {
return null;
}
break;
}
});})(s__23970__$1,y,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__23970__$1,y,xs__5205__auto__,temp__4657__auto__))
;
var fs__20966__auto__ = cljs.core.seq.call(null,iterys__20965__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,conway.core.game_state)))));
if(fs__20966__auto__){
return cljs.core.concat.call(null,fs__20966__auto__,conway$core$grid_$_iter__23969.call(null,cljs.core.rest.call(null,s__23970__$1)));
} else {
var G__23976 = cljs.core.rest.call(null,s__23970__$1);
s__23970__$1 = G__23976;
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
return (function (state_24017){
var state_val_24018 = (state_24017[(1)]);
if((state_val_24018 === (1))){
var state_24017__$1 = state_24017;
var statearr_24019_24033 = state_24017__$1;
(statearr_24019_24033[(2)] = null);

(statearr_24019_24033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24018 === (2))){
var state_24017__$1 = state_24017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24017__$1,(4),t);
} else {
if((state_val_24018 === (3))){
var inst_24015 = (state_24017[(2)]);
var state_24017__$1 = state_24017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24017__$1,inst_24015);
} else {
if((state_val_24018 === (4))){
var inst_24007 = (state_24017[(2)]);
var state_24017__$1 = state_24017;
if(cljs.core.truth_(inst_24007)){
var statearr_24020_24034 = state_24017__$1;
(statearr_24020_24034[(1)] = (5));

} else {
var statearr_24021_24035 = state_24017__$1;
(statearr_24021_24035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24018 === (5))){
var inst_24009 = conway.core.next_state.call(null,conway.core.game_state);
var state_24017__$1 = (function (){var statearr_24022 = state_24017;
(statearr_24022[(7)] = inst_24009);

return statearr_24022;
})();
var statearr_24023_24036 = state_24017__$1;
(statearr_24023_24036[(2)] = null);

(statearr_24023_24036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24018 === (6))){
var state_24017__$1 = state_24017;
var statearr_24024_24037 = state_24017__$1;
(statearr_24024_24037[(2)] = null);

(statearr_24024_24037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24018 === (7))){
var inst_24013 = (state_24017[(2)]);
var state_24017__$1 = state_24017;
var statearr_24025_24038 = state_24017__$1;
(statearr_24025_24038[(2)] = inst_24013);

(statearr_24025_24038[(1)] = (3));


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
var statearr_24029 = [null,null,null,null,null,null,null,null];
(statearr_24029[(0)] = conway$core$generations_loop_$_state_machine__22346__auto__);

(statearr_24029[(1)] = (1));

return statearr_24029;
});
var conway$core$generations_loop_$_state_machine__22346__auto____1 = (function (state_24017){
while(true){
var ret_value__22347__auto__ = (function (){try{while(true){
var result__22348__auto__ = switch__22345__auto__.call(null,state_24017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22348__auto__;
}
break;
}
}catch (e24030){if((e24030 instanceof Object)){
var ex__22349__auto__ = e24030;
var statearr_24031_24039 = state_24017;
(statearr_24031_24039[(5)] = ex__22349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24040 = state_24017;
state_24017 = G__24040;
continue;
} else {
return ret_value__22347__auto__;
}
break;
}
});
conway$core$generations_loop_$_state_machine__22346__auto__ = function(state_24017){
switch(arguments.length){
case 0:
return conway$core$generations_loop_$_state_machine__22346__auto____0.call(this);
case 1:
return conway$core$generations_loop_$_state_machine__22346__auto____1.call(this,state_24017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conway$core$generations_loop_$_state_machine__22346__auto__.cljs$core$IFn$_invoke$arity$0 = conway$core$generations_loop_$_state_machine__22346__auto____0;
conway$core$generations_loop_$_state_machine__22346__auto__.cljs$core$IFn$_invoke$arity$1 = conway$core$generations_loop_$_state_machine__22346__auto____1;
return conway$core$generations_loop_$_state_machine__22346__auto__;
})()
;})(switch__22345__auto__,c__22366__auto__,t))
})();
var state__22368__auto__ = (function (){var statearr_24032 = f__22367__auto__.call(null);
(statearr_24032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22366__auto__);

return statearr_24032;
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

//# sourceMappingURL=core.js.map?rel=1488150892029