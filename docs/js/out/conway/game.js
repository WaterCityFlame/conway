// Compiled by ClojureScript 1.9.229 {}
goog.provide('conway.game');
goog.require('cljs.core');
conway.game.g = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(6),new cljs.core.Keyword(null,"height","height",1025178622),(4),new cljs.core.Keyword(null,"lives","lives",845902073),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),new cljs.core.Keyword(null,"born","born",-461260488),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true,false,false,false,false,true,false,false,false,false,false,true,true,true,false,true,false,false,false,false,false,false,false], null)], null);
conway.game.g2 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"height","height",1025178622),(5),new cljs.core.Keyword(null,"lives","lives",845902073),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),new cljs.core.Keyword(null,"born","born",-461260488),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false,false,false,false,false,false,true,false,false,false,false,true,false,false,false,false,true,false,false,false,false,false,false,false], null)], null);
conway.game.Game = (function conway$game$Game(width,height,lives,born){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"lives","lives",845902073),lives,new cljs.core.Keyword(null,"born","born",-461260488),born,new cljs.core.Keyword(null,"grid","grid",402978600),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.repeat.call(null,(width * height),false))], null);
});
conway.game.Game_conway = (function conway$game$Game_conway(width,height){
return conway.game.Game.call(null,width,height,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null));
});
conway.game.to_string = (function conway$game$to_string(game){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interleave.call(null,cljs.core.map.call(null,(function (p1__23568_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__23568_SHARP_);
}),cljs.core.partition.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(game),cljs.core.map.call(null,(function (p1__23569_SHARP_){
if(cljs.core.truth_(p1__23569_SHARP_)){
return "# ";
} else {
return "0 ";
}
}),new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(game)))),cljs.core.repeat.call(null,"\n")));
});
conway.game.index = (function conway$game$index(x,y,width){
return (x + (y * width));
});
conway.game.alive_QMARK_ = (function conway$game$alive_QMARK_(x,y,game){
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(game),(x + (y * new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(game))));
});
conway.game.alternate = (function conway$game$alternate(x,y,game){
var index = (x + (y * new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(game)));
if(((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(game) > x)) && ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(game) > y))){
return cljs.core.update.call(null,game,new cljs.core.Keyword(null,"grid","grid",402978600),((function (index){
return (function (p1__23570_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.take.call(null,index,p1__23570_SHARP_),(cljs.core.truth_(conway.game.alive_QMARK_.call(null,x,y,game))?cljs.core.list(false):cljs.core.list(true)),cljs.core.drop.call(null,(index + (1)),p1__23570_SHARP_)));
});})(index))
);
} else {
return game;
}
});
conway.game.next_vals = (function conway$game$next_vals(x,max_val){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,x,(0)))?(max_val - (1)):(x - (1))),x,((cljs.core._EQ_.call(null,(x + (1)),max_val))?(0):(x + (1)))], null);
});
conway.game.adjacent = (function conway$game$adjacent(x,y,game){
return cljs.core.keep.call(null,cljs.core.identity,(function (){var iter__20969__auto__ = (function conway$game$adjacent_$_iter__23577(s__23578){
return (new cljs.core.LazySeq(null,(function (){
var s__23578__$1 = s__23578;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23578__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x_vals = cljs.core.first.call(null,xs__5205__auto__);
var iterys__20965__auto__ = ((function (s__23578__$1,x_vals,xs__5205__auto__,temp__4657__auto__){
return (function conway$game$adjacent_$_iter__23577_$_iter__23579(s__23580){
return (new cljs.core.LazySeq(null,((function (s__23578__$1,x_vals,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__23580__$1 = s__23580;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__23580__$1);
if(temp__4657__auto____$1){
var s__23580__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23580__$2)){
var c__20967__auto__ = cljs.core.chunk_first.call(null,s__23580__$2);
var size__20968__auto__ = cljs.core.count.call(null,c__20967__auto__);
var b__23582 = cljs.core.chunk_buffer.call(null,size__20968__auto__);
if((function (){var i__23581 = (0);
while(true){
if((i__23581 < size__20968__auto__)){
var y_vals = cljs.core._nth.call(null,c__20967__auto__,i__23581);
cljs.core.chunk_append.call(null,b__23582,(((cljs.core.not_EQ_.call(null,x_vals,x)) || (cljs.core.not_EQ_.call(null,y_vals,y)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_vals,y_vals], null):null));

var G__23583 = (i__23581 + (1));
i__23581 = G__23583;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23582),conway$game$adjacent_$_iter__23577_$_iter__23579.call(null,cljs.core.chunk_rest.call(null,s__23580__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23582),null);
}
} else {
var y_vals = cljs.core.first.call(null,s__23580__$2);
return cljs.core.cons.call(null,(((cljs.core.not_EQ_.call(null,x_vals,x)) || (cljs.core.not_EQ_.call(null,y_vals,y)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_vals,y_vals], null):null),conway$game$adjacent_$_iter__23577_$_iter__23579.call(null,cljs.core.rest.call(null,s__23580__$2)));
}
} else {
return null;
}
break;
}
});})(s__23578__$1,x_vals,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__23578__$1,x_vals,xs__5205__auto__,temp__4657__auto__))
;
var fs__20966__auto__ = cljs.core.seq.call(null,iterys__20965__auto__.call(null,conway.game.next_vals.call(null,y,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(game))));
if(fs__20966__auto__){
return cljs.core.concat.call(null,fs__20966__auto__,conway$game$adjacent_$_iter__23577.call(null,cljs.core.rest.call(null,s__23578__$1)));
} else {
var G__23584 = cljs.core.rest.call(null,s__23578__$1);
s__23578__$1 = G__23584;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20969__auto__.call(null,conway.game.next_vals.call(null,x,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(game)));
})());
});
conway.game.live_adj = (function conway$game$live_adj(x,y,game){
return cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__23585_SHARP_){
return conway.game.alive_QMARK_.call(null,cljs.core.first.call(null,p1__23585_SHARP_),cljs.core.second.call(null,p1__23585_SHARP_),game);
}),conway.game.adjacent.call(null,x,y,game))));
});
conway.game.survives_QMARK_ = (function conway$game$survives_QMARK_(x,y,game){
if(cljs.core.truth_(conway.game.alive_QMARK_.call(null,x,y,game))){
if((cljs.core._EQ_.call(null,(3),conway.game.live_adj.call(null,x,y,game))) || (cljs.core._EQ_.call(null,(2),conway.game.live_adj.call(null,x,y,game)))){
return true;
} else {
return false;
}
} else {
if(cljs.core._EQ_.call(null,(3),conway.game.live_adj.call(null,x,y,game))){
return true;
} else {
return false;
}
}
});
conway.game.next_gen = (function conway$game$next_gen(game_state){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__20969__auto__ = (function conway$game$next_gen_$_iter__23592(s__23593){
return (new cljs.core.LazySeq(null,(function (){
var s__23593__$1 = s__23593;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23593__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var y = cljs.core.first.call(null,xs__5205__auto__);
var iterys__20965__auto__ = ((function (s__23593__$1,y,xs__5205__auto__,temp__4657__auto__){
return (function conway$game$next_gen_$_iter__23592_$_iter__23594(s__23595){
return (new cljs.core.LazySeq(null,((function (s__23593__$1,y,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__23595__$1 = s__23595;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__23595__$1);
if(temp__4657__auto____$1){
var s__23595__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23595__$2)){
var c__20967__auto__ = cljs.core.chunk_first.call(null,s__23595__$2);
var size__20968__auto__ = cljs.core.count.call(null,c__20967__auto__);
var b__23597 = cljs.core.chunk_buffer.call(null,size__20968__auto__);
if((function (){var i__23596 = (0);
while(true){
if((i__23596 < size__20968__auto__)){
var x = cljs.core._nth.call(null,c__20967__auto__,i__23596);
cljs.core.chunk_append.call(null,b__23597,conway.game.survives_QMARK_.call(null,x,y,game_state));

var G__23598 = (i__23596 + (1));
i__23596 = G__23598;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23597),conway$game$next_gen_$_iter__23592_$_iter__23594.call(null,cljs.core.chunk_rest.call(null,s__23595__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23597),null);
}
} else {
var x = cljs.core.first.call(null,s__23595__$2);
return cljs.core.cons.call(null,conway.game.survives_QMARK_.call(null,x,y,game_state),conway$game$next_gen_$_iter__23592_$_iter__23594.call(null,cljs.core.rest.call(null,s__23595__$2)));
}
} else {
return null;
}
break;
}
});})(s__23593__$1,y,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__23593__$1,y,xs__5205__auto__,temp__4657__auto__))
;
var fs__20966__auto__ = cljs.core.seq.call(null,iterys__20965__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(game_state))));
if(fs__20966__auto__){
return cljs.core.concat.call(null,fs__20966__auto__,conway$game$next_gen_$_iter__23592.call(null,cljs.core.rest.call(null,s__23593__$1)));
} else {
var G__23599 = cljs.core.rest.call(null,s__23593__$1);
s__23593__$1 = G__23599;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20969__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(game_state)));
})());
});
conway.game.play_round = (function conway$game$play_round(game){
return cljs.core.update.call(null,game,new cljs.core.Keyword(null,"grid","grid",402978600),(function (){
return conway.game.next_gen.call(null,game);
}));
});

//# sourceMappingURL=game.js.map?rel=1490036482902