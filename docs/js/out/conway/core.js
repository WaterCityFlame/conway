// Compiled by ClojureScript 1.9.229 {}
goog.provide('conway.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('conway.game');
conway.core.game_state = reagent.core.atom.call(null,conway.game.alternate.call(null,(9),(9),conway.game.alternate.call(null,(9),(10),conway.game.alternate.call(null,(9),(8),conway.game.Game_conway.call(null,(19),(19))))));
conway.core.next_state = (function conway$core$next_state(game){
return cljs.core.swap_BANG_.call(null,game,conway.game.play_round);
});
conway.core.stop = (function conway$core$stop(something){
return cljs.core.swap_BANG_.call(null,something,cljs.core.update,new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,something)));
}));
});
conway.core.game_switch = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"running","running",1554969103),true], null));
conway.core.click_cell = (function conway$core$click_cell(x,y,game){
return cljs.core.swap_BANG_.call(null,game,(function (p1__23252_SHARP_){
return conway.game.alternate.call(null,x,y,p1__23252_SHARP_);
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"game"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"grid"], null),cljs.core.doall.call(null,cljs.core.map.call(null,conway.core.row,cljs.core.partition.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,conway.core.game_state)),(function (){var iter__20969__auto__ = (function conway$core$grid_$_iter__23259(s__23260){
return (new cljs.core.LazySeq(null,(function (){
var s__23260__$1 = s__23260;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23260__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var y = cljs.core.first.call(null,xs__5205__auto__);
var iterys__20965__auto__ = ((function (s__23260__$1,y,xs__5205__auto__,temp__4657__auto__){
return (function conway$core$grid_$_iter__23259_$_iter__23261(s__23262){
return (new cljs.core.LazySeq(null,((function (s__23260__$1,y,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__23262__$1 = s__23262;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__23262__$1);
if(temp__4657__auto____$1){
var s__23262__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23262__$2)){
var c__20967__auto__ = cljs.core.chunk_first.call(null,s__23262__$2);
var size__20968__auto__ = cljs.core.count.call(null,c__20967__auto__);
var b__23264 = cljs.core.chunk_buffer.call(null,size__20968__auto__);
if((function (){var i__23263 = (0);
while(true){
if((i__23263 < size__20968__auto__)){
var x = cljs.core._nth.call(null,c__20967__auto__,i__23263);
cljs.core.chunk_append.call(null,b__23264,conway.core.cell.call(null,x,y,conway.core.game_state));

var G__23265 = (i__23263 + (1));
i__23263 = G__23265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23264),conway$core$grid_$_iter__23259_$_iter__23261.call(null,cljs.core.chunk_rest.call(null,s__23262__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23264),null);
}
} else {
var x = cljs.core.first.call(null,s__23262__$2);
return cljs.core.cons.call(null,conway.core.cell.call(null,x,y,conway.core.game_state),conway$core$grid_$_iter__23259_$_iter__23261.call(null,cljs.core.rest.call(null,s__23262__$2)));
}
} else {
return null;
}
break;
}
});})(s__23260__$1,y,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__23260__$1,y,xs__5205__auto__,temp__4657__auto__))
;
var fs__20966__auto__ = cljs.core.seq.call(null,iterys__20965__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,conway.core.game_state)))));
if(fs__20966__auto__){
return cljs.core.concat.call(null,fs__20966__auto__,conway$core$grid_$_iter__23259.call(null,cljs.core.rest.call(null,s__23260__$1)));
} else {
var G__23266 = cljs.core.rest.call(null,s__23260__$1);
s__23260__$1 = G__23266;
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
conway.core.generations_loop = (function conway$core$generations_loop(){
conway.core.next_state.call(null,conway.core.game_state);

cljs.core.println.call(null,"next");

return setTimeout((function (){
return conway$core$generations_loop.call(null);
}),(1000));
});
conway.core.mount_root = (function conway$core$mount_root(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conway.core.grid], null),document.getElementById("app"));
});
conway.core.init_BANG_ = (function conway$core$init_BANG_(){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conway.core.start_button], null),document.getElementById("app"));

conway.core.mount_root.call(null);

return conway.core.generations_loop.call(null);
});

//# sourceMappingURL=core.js.map?rel=1489693784096