// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28480){
var map__28505 = p__28480;
var map__28505__$1 = ((((!((map__28505 == null)))?((((map__28505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28505):map__28505);
var m = map__28505__$1;
var n = cljs.core.get.call(null,map__28505__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28505__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28507_28529 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28508_28530 = null;
var count__28509_28531 = (0);
var i__28510_28532 = (0);
while(true){
if((i__28510_28532 < count__28509_28531)){
var f_28533 = cljs.core._nth.call(null,chunk__28508_28530,i__28510_28532);
cljs.core.println.call(null,"  ",f_28533);

var G__28534 = seq__28507_28529;
var G__28535 = chunk__28508_28530;
var G__28536 = count__28509_28531;
var G__28537 = (i__28510_28532 + (1));
seq__28507_28529 = G__28534;
chunk__28508_28530 = G__28535;
count__28509_28531 = G__28536;
i__28510_28532 = G__28537;
continue;
} else {
var temp__4657__auto___28538 = cljs.core.seq.call(null,seq__28507_28529);
if(temp__4657__auto___28538){
var seq__28507_28539__$1 = temp__4657__auto___28538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28507_28539__$1)){
var c__21000__auto___28540 = cljs.core.chunk_first.call(null,seq__28507_28539__$1);
var G__28541 = cljs.core.chunk_rest.call(null,seq__28507_28539__$1);
var G__28542 = c__21000__auto___28540;
var G__28543 = cljs.core.count.call(null,c__21000__auto___28540);
var G__28544 = (0);
seq__28507_28529 = G__28541;
chunk__28508_28530 = G__28542;
count__28509_28531 = G__28543;
i__28510_28532 = G__28544;
continue;
} else {
var f_28545 = cljs.core.first.call(null,seq__28507_28539__$1);
cljs.core.println.call(null,"  ",f_28545);

var G__28546 = cljs.core.next.call(null,seq__28507_28539__$1);
var G__28547 = null;
var G__28548 = (0);
var G__28549 = (0);
seq__28507_28529 = G__28546;
chunk__28508_28530 = G__28547;
count__28509_28531 = G__28548;
i__28510_28532 = G__28549;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28550 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20189__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20189__auto__)){
return or__20189__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28550);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28550)))?cljs.core.second.call(null,arglists_28550):arglists_28550));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28511_28551 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28512_28552 = null;
var count__28513_28553 = (0);
var i__28514_28554 = (0);
while(true){
if((i__28514_28554 < count__28513_28553)){
var vec__28515_28555 = cljs.core._nth.call(null,chunk__28512_28552,i__28514_28554);
var name_28556 = cljs.core.nth.call(null,vec__28515_28555,(0),null);
var map__28518_28557 = cljs.core.nth.call(null,vec__28515_28555,(1),null);
var map__28518_28558__$1 = ((((!((map__28518_28557 == null)))?((((map__28518_28557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28518_28557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28518_28557):map__28518_28557);
var doc_28559 = cljs.core.get.call(null,map__28518_28558__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28560 = cljs.core.get.call(null,map__28518_28558__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28556);

cljs.core.println.call(null," ",arglists_28560);

if(cljs.core.truth_(doc_28559)){
cljs.core.println.call(null," ",doc_28559);
} else {
}

var G__28561 = seq__28511_28551;
var G__28562 = chunk__28512_28552;
var G__28563 = count__28513_28553;
var G__28564 = (i__28514_28554 + (1));
seq__28511_28551 = G__28561;
chunk__28512_28552 = G__28562;
count__28513_28553 = G__28563;
i__28514_28554 = G__28564;
continue;
} else {
var temp__4657__auto___28565 = cljs.core.seq.call(null,seq__28511_28551);
if(temp__4657__auto___28565){
var seq__28511_28566__$1 = temp__4657__auto___28565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28511_28566__$1)){
var c__21000__auto___28567 = cljs.core.chunk_first.call(null,seq__28511_28566__$1);
var G__28568 = cljs.core.chunk_rest.call(null,seq__28511_28566__$1);
var G__28569 = c__21000__auto___28567;
var G__28570 = cljs.core.count.call(null,c__21000__auto___28567);
var G__28571 = (0);
seq__28511_28551 = G__28568;
chunk__28512_28552 = G__28569;
count__28513_28553 = G__28570;
i__28514_28554 = G__28571;
continue;
} else {
var vec__28520_28572 = cljs.core.first.call(null,seq__28511_28566__$1);
var name_28573 = cljs.core.nth.call(null,vec__28520_28572,(0),null);
var map__28523_28574 = cljs.core.nth.call(null,vec__28520_28572,(1),null);
var map__28523_28575__$1 = ((((!((map__28523_28574 == null)))?((((map__28523_28574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28523_28574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28523_28574):map__28523_28574);
var doc_28576 = cljs.core.get.call(null,map__28523_28575__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28577 = cljs.core.get.call(null,map__28523_28575__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28573);

cljs.core.println.call(null," ",arglists_28577);

if(cljs.core.truth_(doc_28576)){
cljs.core.println.call(null," ",doc_28576);
} else {
}

var G__28578 = cljs.core.next.call(null,seq__28511_28566__$1);
var G__28579 = null;
var G__28580 = (0);
var G__28581 = (0);
seq__28511_28551 = G__28578;
chunk__28512_28552 = G__28579;
count__28513_28553 = G__28580;
i__28514_28554 = G__28581;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__28525 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28526 = null;
var count__28527 = (0);
var i__28528 = (0);
while(true){
if((i__28528 < count__28527)){
var role = cljs.core._nth.call(null,chunk__28526,i__28528);
var temp__4657__auto___28582__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___28582__$1)){
var spec_28583 = temp__4657__auto___28582__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_28583));
} else {
}

var G__28584 = seq__28525;
var G__28585 = chunk__28526;
var G__28586 = count__28527;
var G__28587 = (i__28528 + (1));
seq__28525 = G__28584;
chunk__28526 = G__28585;
count__28527 = G__28586;
i__28528 = G__28587;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__28525);
if(temp__4657__auto____$1){
var seq__28525__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28525__$1)){
var c__21000__auto__ = cljs.core.chunk_first.call(null,seq__28525__$1);
var G__28588 = cljs.core.chunk_rest.call(null,seq__28525__$1);
var G__28589 = c__21000__auto__;
var G__28590 = cljs.core.count.call(null,c__21000__auto__);
var G__28591 = (0);
seq__28525 = G__28588;
chunk__28526 = G__28589;
count__28527 = G__28590;
i__28528 = G__28591;
continue;
} else {
var role = cljs.core.first.call(null,seq__28525__$1);
var temp__4657__auto___28592__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___28592__$2)){
var spec_28593 = temp__4657__auto___28592__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_28593));
} else {
}

var G__28594 = cljs.core.next.call(null,seq__28525__$1);
var G__28595 = null;
var G__28596 = (0);
var G__28597 = (0);
seq__28525 = G__28594;
chunk__28526 = G__28595;
count__28527 = G__28596;
i__28528 = G__28597;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1487785004108