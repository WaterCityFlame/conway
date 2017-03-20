// Compiled by ClojureScript 1.9.229 {}
goog.provide('conway.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('conway.game');
conway.core.game_state = reagent.core.atom.call(null,conway.game.alternate.call(null,(9),(9),conway.game.alternate.call(null,(9),(10),conway.game.alternate.call(null,(9),(8),conway.game.Game_conway.call(null,(40),(17))))));
conway.core.next_state = (function conway$core$next_state(game){
return cljs.core.swap_BANG_.call(null,game,conway.game.play_round);
});
conway.core.toggle = (function conway$core$toggle(something){
return cljs.core.swap_BANG_.call(null,something,cljs.core.update,new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,something)));
}));
});
conway.core.generations_loop = (function conway$core$generations_loop(switch$){
return setInterval((function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,switch$)))){
return conway.core.next_state.call(null,conway.core.game_state);
} else {
return null;
}
}),(1500));
});
conway.core.game_switch = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"running","running",1554969103),true,new cljs.core.Keyword(null,"run-function","run-function",-475080789),(function (){
return conway.core.generations_loop.call(null,conway.core.game_switch);
}),new cljs.core.Keyword(null,"btn-class","btn-class",1476521100),"pure-button-active"], null));
conway.core.click_cell = (function conway$core$click_cell(x,y,game){
return cljs.core.swap_BANG_.call(null,game,(function (p1__23755_SHARP_){
return conway.game.alternate.call(null,x,y,p1__23755_SHARP_);
}));
});
conway.core.toggle_class = (function conway$core$toggle_class(id,toggled_class){
var el_classList = document.getElementById(id).classList;
if(cljs.core.truth_(el_classList.contains(toggled_class))){
return el_classList.remove(toggled_class);
} else {
return el_classList.add(toggled_class);
}
});
conway.core.toggle_html = (function conway$core$toggle_html(id,html1,html2){
var el = document.getElementById(id);
if(cljs.core._EQ_.call(null,el.innerHTML,html1)){
return el.innerHTML = html2;
} else {
return el.innerHTML = html1;
}
});
conway.core.start_button_clicked = (function conway$core$start_button_clicked(){
conway.core.toggle_class.call(null,"start","pure-button-active");

conway.core.toggle_html.call(null,"start","Start","Stop");

return conway.core.toggle.call(null,conway.core.game_switch);
});
conway.core.start_button = (function conway$core$start_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pure-button","button.pure-button",698850720),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"pure-button pure-button-active",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),conway.core.start_button_clicked,new cljs.core.Keyword(null,"key","key",-1516042587),"start",new cljs.core.Keyword(null,"id","id",-1388402092),"start"], null),"Stop"], null);
});
conway.core.title = (function conway$core$title(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"title-bar",new cljs.core.Keyword(null,"class","class",-2030961996),"pure-u-1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"An Implementation of Conway's Game of Life"], null),conway.core.start_button.call(null)], null);
});
conway.core.cell = (function conway$core$cell(x,y,state){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(conway.game.alive_QMARK_.call(null,x,y,cljs.core.deref.call(null,state)))?"cell alive":"cell dead"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return conway.core.click_cell.call(null,x,y,state);
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,cljs.core.rand.call(null,(10000)))], null));
});
conway.core.row = (function conway$core$row(cells){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"row",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,cljs.core.rand.call(null,(1000))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str((1.7 * cljs.core.count.call(null,cells))),cljs.core.str("em")].join('')], null)], null)], null),cells);
});
conway.core.grid = (function conway$core$grid(width,height){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"grid",new cljs.core.Keyword(null,"id","id",-1388402092),"grid",new cljs.core.Keyword(null,"class","class",-2030961996),"pure-u-23-24"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,cljs.core.map.call(null,conway.core.row,cljs.core.partition.call(null,width,cljs.core.doall.call(null,(function (){var iter__20969__auto__ = (function conway$core$grid_$_iter__23762(s__23763){
return (new cljs.core.LazySeq(null,(function (){
var s__23763__$1 = s__23763;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23763__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var y = cljs.core.first.call(null,xs__5205__auto__);
var iterys__20965__auto__ = ((function (s__23763__$1,y,xs__5205__auto__,temp__4657__auto__){
return (function conway$core$grid_$_iter__23762_$_iter__23764(s__23765){
return (new cljs.core.LazySeq(null,((function (s__23763__$1,y,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__23765__$1 = s__23765;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__23765__$1);
if(temp__4657__auto____$1){
var s__23765__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23765__$2)){
var c__20967__auto__ = cljs.core.chunk_first.call(null,s__23765__$2);
var size__20968__auto__ = cljs.core.count.call(null,c__20967__auto__);
var b__23767 = cljs.core.chunk_buffer.call(null,size__20968__auto__);
if((function (){var i__23766 = (0);
while(true){
if((i__23766 < size__20968__auto__)){
var x = cljs.core._nth.call(null,c__20967__auto__,i__23766);
cljs.core.chunk_append.call(null,b__23767,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [conway.core.cell,x,y,conway.core.game_state], null));

var G__23768 = (i__23766 + (1));
i__23766 = G__23768;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23767),conway$core$grid_$_iter__23762_$_iter__23764.call(null,cljs.core.chunk_rest.call(null,s__23765__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23767),null);
}
} else {
var x = cljs.core.first.call(null,s__23765__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [conway.core.cell,x,y,conway.core.game_state], null),conway$core$grid_$_iter__23762_$_iter__23764.call(null,cljs.core.rest.call(null,s__23765__$2)));
}
} else {
return null;
}
break;
}
});})(s__23763__$1,y,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__23763__$1,y,xs__5205__auto__,temp__4657__auto__))
;
var fs__20966__auto__ = cljs.core.seq.call(null,iterys__20965__auto__.call(null,cljs.core.range.call(null,width)));
if(fs__20966__auto__){
return cljs.core.concat.call(null,fs__20966__auto__,conway$core$grid_$_iter__23762.call(null,cljs.core.rest.call(null,s__23763__$1)));
} else {
var G__23769 = cljs.core.rest.call(null,s__23763__$1);
s__23763__$1 = G__23769;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20969__auto__.call(null,cljs.core.range.call(null,height));
})()))))], null)], null);
});
conway.core.app = (function conway$core$app(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app","div.app",-99849286),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pure-g"], null),conway.core.grid.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(state)),conway.core.title.call(null)], null);
});
conway.core.mount_root = (function conway$core$mount_root(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return conway.core.app.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(40),new cljs.core.Keyword(null,"height","height",1025178622),(17)], null));
})], null),document.getElementById("app"));
});
conway.core.init_BANG_ = (function conway$core$init_BANG_(){
conway.core.mount_root.call(null);

return conway.core.generations_loop.call(null,conway.core.game_switch);
});

//# sourceMappingURL=core.js.map?rel=1489982327478