// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-5";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args30628 = [];
var len__21264__auto___30631 = arguments.length;
var i__21265__auto___30632 = (0);
while(true){
if((i__21265__auto___30632 < len__21264__auto___30631)){
args30628.push((arguments[i__21265__auto___30632]));

var G__30633 = (i__21265__auto___30632 + (1));
i__21265__auto___30632 = G__30633;
continue;
} else {
}
break;
}

var G__30630 = args30628.length;
switch (G__30630) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30628.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__21271__auto__ = [];
var len__21264__auto___30636 = arguments.length;
var i__21265__auto___30637 = (0);
while(true){
if((i__21265__auto___30637 < len__21264__auto___30636)){
args__21271__auto__.push((arguments[i__21265__auto___30637]));

var G__30638 = (i__21265__auto___30637 + (1));
i__21265__auto___30637 = G__30638;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30635){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30635));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__21271__auto__ = [];
var len__21264__auto___30640 = arguments.length;
var i__21265__auto___30641 = (0);
while(true){
if((i__21265__auto___30641 < len__21264__auto___30640)){
args__21271__auto__.push((arguments[i__21265__auto___30641]));

var G__30642 = (i__21265__auto___30641 + (1));
i__21265__auto___30641 = G__30642;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30639){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30639));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__30643 = cljs.core._EQ_;
var expr__30644 = (function (){var or__20189__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e30647){if((e30647 instanceof Error)){
var e = e30647;
return false;
} else {
throw e30647;

}
}})();
if(cljs.core.truth_(or__20189__auto__)){
return or__20189__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__30643.call(null,"true",expr__30644))){
return true;
} else {
if(cljs.core.truth_(pred__30643.call(null,"false",expr__30644))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30644)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e30649){if((e30649 instanceof Error)){
var e = e30649;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e30649;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30650){
var map__30653 = p__30650;
var map__30653__$1 = ((((!((map__30653 == null)))?((((map__30653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30653):map__30653);
var message = cljs.core.get.call(null,map__30653__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30653__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__20189__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20189__auto__)){
return or__20189__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__20177__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__20177__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__20177__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23050__auto___30815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto___30815,ch){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto___30815,ch){
return (function (state_30784){
var state_val_30785 = (state_30784[(1)]);
if((state_val_30785 === (7))){
var inst_30780 = (state_30784[(2)]);
var state_30784__$1 = state_30784;
var statearr_30786_30816 = state_30784__$1;
(statearr_30786_30816[(2)] = inst_30780);

(statearr_30786_30816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30785 === (1))){
var state_30784__$1 = state_30784;
var statearr_30787_30817 = state_30784__$1;
(statearr_30787_30817[(2)] = null);

(statearr_30787_30817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30785 === (4))){
var inst_30737 = (state_30784[(7)]);
var inst_30737__$1 = (state_30784[(2)]);
var state_30784__$1 = (function (){var statearr_30788 = state_30784;
(statearr_30788[(7)] = inst_30737__$1);

return statearr_30788;
})();
if(cljs.core.truth_(inst_30737__$1)){
var statearr_30789_30818 = state_30784__$1;
(statearr_30789_30818[(1)] = (5));

} else {
var statearr_30790_30819 = state_30784__$1;
(statearr_30790_30819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30785 === (15))){
var inst_30744 = (state_30784[(8)]);
var inst_30759 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30744);
var inst_30760 = cljs.core.first.call(null,inst_30759);
var inst_30761 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30760);
var inst_30762 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_30761)].join('');
var inst_30763 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30762);
var state_30784__$1 = state_30784;
var statearr_30791_30820 = state_30784__$1;
(statearr_30791_30820[(2)] = inst_30763);

(statearr_30791_30820[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30785 === (13))){
var inst_30768 = (state_30784[(2)]);
var state_30784__$1 = state_30784;
var statearr_30792_30821 = state_30784__$1;
(statearr_30792_30821[(2)] = inst_30768);

(statearr_30792_30821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30785 === (6))){
var state_30784__$1 = state_30784;
var statearr_30793_30822 = state_30784__$1;
(statearr_30793_30822[(2)] = null);

(statearr_30793_30822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30785 === (17))){
var inst_30766 = (state_30784[(2)]);
var state_30784__$1 = state_30784;
var statearr_30794_30823 = state_30784__$1;
(statearr_30794_30823[(2)] = inst_30766);

(statearr_30794_30823[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30785 === (3))){
var inst_30782 = (state_30784[(2)]);
var state_30784__$1 = state_30784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30784__$1,inst_30782);
} else {
if((state_val_30785 === (12))){
var inst_30743 = (state_30784[(9)]);
var inst_30757 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30743,opts);
var state_30784__$1 = state_30784;
if(cljs.core.truth_(inst_30757)){
var statearr_30795_30824 = state_30784__$1;
(statearr_30795_30824[(1)] = (15));

} else {
var statearr_30796_30825 = state_30784__$1;
(statearr_30796_30825[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30785 === (2))){
var state_30784__$1 = state_30784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30784__$1,(4),ch);
} else {
if((state_val_30785 === (11))){
var inst_30744 = (state_30784[(8)]);
var inst_30749 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30750 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30744);
var inst_30751 = cljs.core.async.timeout.call(null,(1000));
var inst_30752 = [inst_30750,inst_30751];
var inst_30753 = (new cljs.core.PersistentVector(null,2,(5),inst_30749,inst_30752,null));
var state_30784__$1 = state_30784;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30784__$1,(14),inst_30753);
} else {
if((state_val_30785 === (9))){
var inst_30744 = (state_30784[(8)]);
var inst_30770 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30771 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30744);
var inst_30772 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30771);
var inst_30773 = [cljs.core.str("Not loading: "),cljs.core.str(inst_30772)].join('');
var inst_30774 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30773);
var state_30784__$1 = (function (){var statearr_30797 = state_30784;
(statearr_30797[(10)] = inst_30770);

return statearr_30797;
})();
var statearr_30798_30826 = state_30784__$1;
(statearr_30798_30826[(2)] = inst_30774);

(statearr_30798_30826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30785 === (5))){
var inst_30737 = (state_30784[(7)]);
var inst_30739 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30740 = (new cljs.core.PersistentArrayMap(null,2,inst_30739,null));
var inst_30741 = (new cljs.core.PersistentHashSet(null,inst_30740,null));
var inst_30742 = figwheel.client.focus_msgs.call(null,inst_30741,inst_30737);
var inst_30743 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30742);
var inst_30744 = cljs.core.first.call(null,inst_30742);
var inst_30745 = figwheel.client.autoload_QMARK_.call(null);
var state_30784__$1 = (function (){var statearr_30799 = state_30784;
(statearr_30799[(9)] = inst_30743);

(statearr_30799[(8)] = inst_30744);

return statearr_30799;
})();
if(cljs.core.truth_(inst_30745)){
var statearr_30800_30827 = state_30784__$1;
(statearr_30800_30827[(1)] = (8));

} else {
var statearr_30801_30828 = state_30784__$1;
(statearr_30801_30828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30785 === (14))){
var inst_30755 = (state_30784[(2)]);
var state_30784__$1 = state_30784;
var statearr_30802_30829 = state_30784__$1;
(statearr_30802_30829[(2)] = inst_30755);

(statearr_30802_30829[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30785 === (16))){
var state_30784__$1 = state_30784;
var statearr_30803_30830 = state_30784__$1;
(statearr_30803_30830[(2)] = null);

(statearr_30803_30830[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30785 === (10))){
var inst_30776 = (state_30784[(2)]);
var state_30784__$1 = (function (){var statearr_30804 = state_30784;
(statearr_30804[(11)] = inst_30776);

return statearr_30804;
})();
var statearr_30805_30831 = state_30784__$1;
(statearr_30805_30831[(2)] = null);

(statearr_30805_30831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30785 === (8))){
var inst_30743 = (state_30784[(9)]);
var inst_30747 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30743,opts);
var state_30784__$1 = state_30784;
if(cljs.core.truth_(inst_30747)){
var statearr_30806_30832 = state_30784__$1;
(statearr_30806_30832[(1)] = (11));

} else {
var statearr_30807_30833 = state_30784__$1;
(statearr_30807_30833[(1)] = (12));

}

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
}
}
}
}
}
}
}
}
}
});})(c__23050__auto___30815,ch))
;
return ((function (switch__22938__auto__,c__23050__auto___30815,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____0 = (function (){
var statearr_30811 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30811[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__);

(statearr_30811[(1)] = (1));

return statearr_30811;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____1 = (function (state_30784){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_30784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e30812){if((e30812 instanceof Object)){
var ex__22942__auto__ = e30812;
var statearr_30813_30834 = state_30784;
(statearr_30813_30834[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30835 = state_30784;
state_30784 = G__30835;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__ = function(state_30784){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____1.call(this,state_30784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto___30815,ch))
})();
var state__23052__auto__ = (function (){var statearr_30814 = f__23051__auto__.call(null);
(statearr_30814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto___30815);

return statearr_30814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto___30815,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30836_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30836_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30839 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30839){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e30838){if((e30838 instanceof Error)){
var e = e30838;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30839], null));
} else {
var e = e30838;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_30839))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30840){
var map__30849 = p__30840;
var map__30849__$1 = ((((!((map__30849 == null)))?((((map__30849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30849):map__30849);
var opts = map__30849__$1;
var build_id = cljs.core.get.call(null,map__30849__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30849,map__30849__$1,opts,build_id){
return (function (p__30851){
var vec__30852 = p__30851;
var seq__30853 = cljs.core.seq.call(null,vec__30852);
var first__30854 = cljs.core.first.call(null,seq__30853);
var seq__30853__$1 = cljs.core.next.call(null,seq__30853);
var map__30855 = first__30854;
var map__30855__$1 = ((((!((map__30855 == null)))?((((map__30855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30855):map__30855);
var msg = map__30855__$1;
var msg_name = cljs.core.get.call(null,map__30855__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30853__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30852,seq__30853,first__30854,seq__30853__$1,map__30855,map__30855__$1,msg,msg_name,_,map__30849,map__30849__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30852,seq__30853,first__30854,seq__30853__$1,map__30855,map__30855__$1,msg,msg_name,_,map__30849,map__30849__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30849,map__30849__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30863){
var vec__30864 = p__30863;
var seq__30865 = cljs.core.seq.call(null,vec__30864);
var first__30866 = cljs.core.first.call(null,seq__30865);
var seq__30865__$1 = cljs.core.next.call(null,seq__30865);
var map__30867 = first__30866;
var map__30867__$1 = ((((!((map__30867 == null)))?((((map__30867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30867):map__30867);
var msg = map__30867__$1;
var msg_name = cljs.core.get.call(null,map__30867__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30865__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30869){
var map__30881 = p__30869;
var map__30881__$1 = ((((!((map__30881 == null)))?((((map__30881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30881):map__30881);
var on_compile_warning = cljs.core.get.call(null,map__30881__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30881__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30881,map__30881__$1,on_compile_warning,on_compile_fail){
return (function (p__30883){
var vec__30884 = p__30883;
var seq__30885 = cljs.core.seq.call(null,vec__30884);
var first__30886 = cljs.core.first.call(null,seq__30885);
var seq__30885__$1 = cljs.core.next.call(null,seq__30885);
var map__30887 = first__30886;
var map__30887__$1 = ((((!((map__30887 == null)))?((((map__30887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30887):map__30887);
var msg = map__30887__$1;
var msg_name = cljs.core.get.call(null,map__30887__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30885__$1;
var pred__30889 = cljs.core._EQ_;
var expr__30890 = msg_name;
if(cljs.core.truth_(pred__30889.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30890))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30889.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30890))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30881,map__30881__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto__,msg_hist,msg_names,msg){
return (function (state_31098){
var state_val_31099 = (state_31098[(1)]);
if((state_val_31099 === (7))){
var inst_31026 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
if(cljs.core.truth_(inst_31026)){
var statearr_31100_31146 = state_31098__$1;
(statearr_31100_31146[(1)] = (8));

} else {
var statearr_31101_31147 = state_31098__$1;
(statearr_31101_31147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (20))){
var inst_31092 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31102_31148 = state_31098__$1;
(statearr_31102_31148[(2)] = inst_31092);

(statearr_31102_31148[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (27))){
var inst_31088 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31103_31149 = state_31098__$1;
(statearr_31103_31149[(2)] = inst_31088);

(statearr_31103_31149[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (1))){
var inst_31019 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31098__$1 = state_31098;
if(cljs.core.truth_(inst_31019)){
var statearr_31104_31150 = state_31098__$1;
(statearr_31104_31150[(1)] = (2));

} else {
var statearr_31105_31151 = state_31098__$1;
(statearr_31105_31151[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (24))){
var inst_31090 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31106_31152 = state_31098__$1;
(statearr_31106_31152[(2)] = inst_31090);

(statearr_31106_31152[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (4))){
var inst_31096 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31098__$1,inst_31096);
} else {
if((state_val_31099 === (15))){
var inst_31094 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31107_31153 = state_31098__$1;
(statearr_31107_31153[(2)] = inst_31094);

(statearr_31107_31153[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (21))){
var inst_31053 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31108_31154 = state_31098__$1;
(statearr_31108_31154[(2)] = inst_31053);

(statearr_31108_31154[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (31))){
var inst_31077 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31098__$1 = state_31098;
if(cljs.core.truth_(inst_31077)){
var statearr_31109_31155 = state_31098__$1;
(statearr_31109_31155[(1)] = (34));

} else {
var statearr_31110_31156 = state_31098__$1;
(statearr_31110_31156[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (32))){
var inst_31086 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31111_31157 = state_31098__$1;
(statearr_31111_31157[(2)] = inst_31086);

(statearr_31111_31157[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (33))){
var inst_31075 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31112_31158 = state_31098__$1;
(statearr_31112_31158[(2)] = inst_31075);

(statearr_31112_31158[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (13))){
var inst_31040 = figwheel.client.heads_up.clear.call(null);
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31098__$1,(16),inst_31040);
} else {
if((state_val_31099 === (22))){
var inst_31057 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31058 = figwheel.client.heads_up.append_warning_message.call(null,inst_31057);
var state_31098__$1 = state_31098;
var statearr_31113_31159 = state_31098__$1;
(statearr_31113_31159[(2)] = inst_31058);

(statearr_31113_31159[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (36))){
var inst_31084 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31114_31160 = state_31098__$1;
(statearr_31114_31160[(2)] = inst_31084);

(statearr_31114_31160[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (29))){
var inst_31068 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31115_31161 = state_31098__$1;
(statearr_31115_31161[(2)] = inst_31068);

(statearr_31115_31161[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (6))){
var inst_31021 = (state_31098[(7)]);
var state_31098__$1 = state_31098;
var statearr_31116_31162 = state_31098__$1;
(statearr_31116_31162[(2)] = inst_31021);

(statearr_31116_31162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (28))){
var inst_31064 = (state_31098[(2)]);
var inst_31065 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31066 = figwheel.client.heads_up.display_warning.call(null,inst_31065);
var state_31098__$1 = (function (){var statearr_31117 = state_31098;
(statearr_31117[(8)] = inst_31064);

return statearr_31117;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31098__$1,(29),inst_31066);
} else {
if((state_val_31099 === (25))){
var inst_31062 = figwheel.client.heads_up.clear.call(null);
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31098__$1,(28),inst_31062);
} else {
if((state_val_31099 === (34))){
var inst_31079 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31098__$1,(37),inst_31079);
} else {
if((state_val_31099 === (17))){
var inst_31046 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31118_31163 = state_31098__$1;
(statearr_31118_31163[(2)] = inst_31046);

(statearr_31118_31163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (3))){
var inst_31038 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31098__$1 = state_31098;
if(cljs.core.truth_(inst_31038)){
var statearr_31119_31164 = state_31098__$1;
(statearr_31119_31164[(1)] = (13));

} else {
var statearr_31120_31165 = state_31098__$1;
(statearr_31120_31165[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (12))){
var inst_31034 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31121_31166 = state_31098__$1;
(statearr_31121_31166[(2)] = inst_31034);

(statearr_31121_31166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (2))){
var inst_31021 = (state_31098[(7)]);
var inst_31021__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31098__$1 = (function (){var statearr_31122 = state_31098;
(statearr_31122[(7)] = inst_31021__$1);

return statearr_31122;
})();
if(cljs.core.truth_(inst_31021__$1)){
var statearr_31123_31167 = state_31098__$1;
(statearr_31123_31167[(1)] = (5));

} else {
var statearr_31124_31168 = state_31098__$1;
(statearr_31124_31168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (23))){
var inst_31060 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31098__$1 = state_31098;
if(cljs.core.truth_(inst_31060)){
var statearr_31125_31169 = state_31098__$1;
(statearr_31125_31169[(1)] = (25));

} else {
var statearr_31126_31170 = state_31098__$1;
(statearr_31126_31170[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (35))){
var state_31098__$1 = state_31098;
var statearr_31127_31171 = state_31098__$1;
(statearr_31127_31171[(2)] = null);

(statearr_31127_31171[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (19))){
var inst_31055 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31098__$1 = state_31098;
if(cljs.core.truth_(inst_31055)){
var statearr_31128_31172 = state_31098__$1;
(statearr_31128_31172[(1)] = (22));

} else {
var statearr_31129_31173 = state_31098__$1;
(statearr_31129_31173[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (11))){
var inst_31030 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31130_31174 = state_31098__$1;
(statearr_31130_31174[(2)] = inst_31030);

(statearr_31130_31174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (9))){
var inst_31032 = figwheel.client.heads_up.clear.call(null);
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31098__$1,(12),inst_31032);
} else {
if((state_val_31099 === (5))){
var inst_31023 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31098__$1 = state_31098;
var statearr_31131_31175 = state_31098__$1;
(statearr_31131_31175[(2)] = inst_31023);

(statearr_31131_31175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (14))){
var inst_31048 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31098__$1 = state_31098;
if(cljs.core.truth_(inst_31048)){
var statearr_31132_31176 = state_31098__$1;
(statearr_31132_31176[(1)] = (18));

} else {
var statearr_31133_31177 = state_31098__$1;
(statearr_31133_31177[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (26))){
var inst_31070 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31098__$1 = state_31098;
if(cljs.core.truth_(inst_31070)){
var statearr_31134_31178 = state_31098__$1;
(statearr_31134_31178[(1)] = (30));

} else {
var statearr_31135_31179 = state_31098__$1;
(statearr_31135_31179[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (16))){
var inst_31042 = (state_31098[(2)]);
var inst_31043 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31044 = figwheel.client.heads_up.display_exception.call(null,inst_31043);
var state_31098__$1 = (function (){var statearr_31136 = state_31098;
(statearr_31136[(9)] = inst_31042);

return statearr_31136;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31098__$1,(17),inst_31044);
} else {
if((state_val_31099 === (30))){
var inst_31072 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31073 = figwheel.client.heads_up.display_warning.call(null,inst_31072);
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31098__$1,(33),inst_31073);
} else {
if((state_val_31099 === (10))){
var inst_31036 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31137_31180 = state_31098__$1;
(statearr_31137_31180[(2)] = inst_31036);

(statearr_31137_31180[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (18))){
var inst_31050 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31051 = figwheel.client.heads_up.display_exception.call(null,inst_31050);
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31098__$1,(21),inst_31051);
} else {
if((state_val_31099 === (37))){
var inst_31081 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31138_31181 = state_31098__$1;
(statearr_31138_31181[(2)] = inst_31081);

(statearr_31138_31181[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (8))){
var inst_31028 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31098__$1,(11),inst_31028);
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
}
}
}
}
});})(c__23050__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22938__auto__,c__23050__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____0 = (function (){
var statearr_31142 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31142[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__);

(statearr_31142[(1)] = (1));

return statearr_31142;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____1 = (function (state_31098){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_31098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e31143){if((e31143 instanceof Object)){
var ex__22942__auto__ = e31143;
var statearr_31144_31182 = state_31098;
(statearr_31144_31182[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31183 = state_31098;
state_31098 = G__31183;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__ = function(state_31098){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____1.call(this,state_31098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto__,msg_hist,msg_names,msg))
})();
var state__23052__auto__ = (function (){var statearr_31145 = f__23051__auto__.call(null);
(statearr_31145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto__);

return statearr_31145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto__,msg_hist,msg_names,msg))
);

return c__23050__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23050__auto___31246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto___31246,ch){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto___31246,ch){
return (function (state_31229){
var state_val_31230 = (state_31229[(1)]);
if((state_val_31230 === (1))){
var state_31229__$1 = state_31229;
var statearr_31231_31247 = state_31229__$1;
(statearr_31231_31247[(2)] = null);

(statearr_31231_31247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31230 === (2))){
var state_31229__$1 = state_31229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31229__$1,(4),ch);
} else {
if((state_val_31230 === (3))){
var inst_31227 = (state_31229[(2)]);
var state_31229__$1 = state_31229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31229__$1,inst_31227);
} else {
if((state_val_31230 === (4))){
var inst_31217 = (state_31229[(7)]);
var inst_31217__$1 = (state_31229[(2)]);
var state_31229__$1 = (function (){var statearr_31232 = state_31229;
(statearr_31232[(7)] = inst_31217__$1);

return statearr_31232;
})();
if(cljs.core.truth_(inst_31217__$1)){
var statearr_31233_31248 = state_31229__$1;
(statearr_31233_31248[(1)] = (5));

} else {
var statearr_31234_31249 = state_31229__$1;
(statearr_31234_31249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31230 === (5))){
var inst_31217 = (state_31229[(7)]);
var inst_31219 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31217);
var state_31229__$1 = state_31229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31229__$1,(8),inst_31219);
} else {
if((state_val_31230 === (6))){
var state_31229__$1 = state_31229;
var statearr_31235_31250 = state_31229__$1;
(statearr_31235_31250[(2)] = null);

(statearr_31235_31250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31230 === (7))){
var inst_31225 = (state_31229[(2)]);
var state_31229__$1 = state_31229;
var statearr_31236_31251 = state_31229__$1;
(statearr_31236_31251[(2)] = inst_31225);

(statearr_31236_31251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31230 === (8))){
var inst_31221 = (state_31229[(2)]);
var state_31229__$1 = (function (){var statearr_31237 = state_31229;
(statearr_31237[(8)] = inst_31221);

return statearr_31237;
})();
var statearr_31238_31252 = state_31229__$1;
(statearr_31238_31252[(2)] = null);

(statearr_31238_31252[(1)] = (2));


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
});})(c__23050__auto___31246,ch))
;
return ((function (switch__22938__auto__,c__23050__auto___31246,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22939__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22939__auto____0 = (function (){
var statearr_31242 = [null,null,null,null,null,null,null,null,null];
(statearr_31242[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22939__auto__);

(statearr_31242[(1)] = (1));

return statearr_31242;
});
var figwheel$client$heads_up_plugin_$_state_machine__22939__auto____1 = (function (state_31229){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_31229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e31243){if((e31243 instanceof Object)){
var ex__22942__auto__ = e31243;
var statearr_31244_31253 = state_31229;
(statearr_31244_31253[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31254 = state_31229;
state_31229 = G__31254;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22939__auto__ = function(state_31229){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22939__auto____1.call(this,state_31229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22939__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22939__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto___31246,ch))
})();
var state__23052__auto__ = (function (){var statearr_31245 = f__23051__auto__.call(null);
(statearr_31245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto___31246);

return statearr_31245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto___31246,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto__){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto__){
return (function (state_31275){
var state_val_31276 = (state_31275[(1)]);
if((state_val_31276 === (1))){
var inst_31270 = cljs.core.async.timeout.call(null,(3000));
var state_31275__$1 = state_31275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31275__$1,(2),inst_31270);
} else {
if((state_val_31276 === (2))){
var inst_31272 = (state_31275[(2)]);
var inst_31273 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31275__$1 = (function (){var statearr_31277 = state_31275;
(statearr_31277[(7)] = inst_31272);

return statearr_31277;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31275__$1,inst_31273);
} else {
return null;
}
}
});})(c__23050__auto__))
;
return ((function (switch__22938__auto__,c__23050__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____0 = (function (){
var statearr_31281 = [null,null,null,null,null,null,null,null];
(statearr_31281[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__);

(statearr_31281[(1)] = (1));

return statearr_31281;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____1 = (function (state_31275){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_31275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e31282){if((e31282 instanceof Object)){
var ex__22942__auto__ = e31282;
var statearr_31283_31285 = state_31275;
(statearr_31283_31285[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31286 = state_31275;
state_31275 = G__31286;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__ = function(state_31275){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____1.call(this,state_31275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto__))
})();
var state__23052__auto__ = (function (){var statearr_31284 = f__23051__auto__.call(null);
(statearr_31284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto__);

return statearr_31284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto__))
);

return c__23050__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto__,figwheel_version,temp__4657__auto__){
return (function (state_31309){
var state_val_31310 = (state_31309[(1)]);
if((state_val_31310 === (1))){
var inst_31303 = cljs.core.async.timeout.call(null,(2000));
var state_31309__$1 = state_31309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31309__$1,(2),inst_31303);
} else {
if((state_val_31310 === (2))){
var inst_31305 = (state_31309[(2)]);
var inst_31306 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_31307 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31306);
var state_31309__$1 = (function (){var statearr_31311 = state_31309;
(statearr_31311[(7)] = inst_31305);

return statearr_31311;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31309__$1,inst_31307);
} else {
return null;
}
}
});})(c__23050__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__22938__auto__,c__23050__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____0 = (function (){
var statearr_31315 = [null,null,null,null,null,null,null,null];
(statearr_31315[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__);

(statearr_31315[(1)] = (1));

return statearr_31315;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____1 = (function (state_31309){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_31309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e31316){if((e31316 instanceof Object)){
var ex__22942__auto__ = e31316;
var statearr_31317_31319 = state_31309;
(statearr_31317_31319[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31320 = state_31309;
state_31309 = G__31320;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__ = function(state_31309){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____1.call(this,state_31309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto__,figwheel_version,temp__4657__auto__))
})();
var state__23052__auto__ = (function (){var statearr_31318 = f__23051__auto__.call(null);
(statearr_31318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto__);

return statearr_31318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto__,figwheel_version,temp__4657__auto__))
);

return c__23050__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31321){
var map__31325 = p__31321;
var map__31325__$1 = ((((!((map__31325 == null)))?((((map__31325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31325):map__31325);
var file = cljs.core.get.call(null,map__31325__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31325__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31325__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31327 = "";
var G__31327__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__31327),cljs.core.str("file "),cljs.core.str(file)].join(''):G__31327);
var G__31327__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__31327__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__31327__$1);
if(cljs.core.truth_((function (){var and__20177__auto__ = line;
if(cljs.core.truth_(and__20177__auto__)){
return column;
} else {
return and__20177__auto__;
}
})())){
return [cljs.core.str(G__31327__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__31327__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31328){
var map__31335 = p__31328;
var map__31335__$1 = ((((!((map__31335 == null)))?((((map__31335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31335):map__31335);
var ed = map__31335__$1;
var formatted_exception = cljs.core.get.call(null,map__31335__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31335__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31335__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31337_31341 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31338_31342 = null;
var count__31339_31343 = (0);
var i__31340_31344 = (0);
while(true){
if((i__31340_31344 < count__31339_31343)){
var msg_31345 = cljs.core._nth.call(null,chunk__31338_31342,i__31340_31344);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31345);

var G__31346 = seq__31337_31341;
var G__31347 = chunk__31338_31342;
var G__31348 = count__31339_31343;
var G__31349 = (i__31340_31344 + (1));
seq__31337_31341 = G__31346;
chunk__31338_31342 = G__31347;
count__31339_31343 = G__31348;
i__31340_31344 = G__31349;
continue;
} else {
var temp__4657__auto___31350 = cljs.core.seq.call(null,seq__31337_31341);
if(temp__4657__auto___31350){
var seq__31337_31351__$1 = temp__4657__auto___31350;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31337_31351__$1)){
var c__21000__auto___31352 = cljs.core.chunk_first.call(null,seq__31337_31351__$1);
var G__31353 = cljs.core.chunk_rest.call(null,seq__31337_31351__$1);
var G__31354 = c__21000__auto___31352;
var G__31355 = cljs.core.count.call(null,c__21000__auto___31352);
var G__31356 = (0);
seq__31337_31341 = G__31353;
chunk__31338_31342 = G__31354;
count__31339_31343 = G__31355;
i__31340_31344 = G__31356;
continue;
} else {
var msg_31357 = cljs.core.first.call(null,seq__31337_31351__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31357);

var G__31358 = cljs.core.next.call(null,seq__31337_31351__$1);
var G__31359 = null;
var G__31360 = (0);
var G__31361 = (0);
seq__31337_31341 = G__31358;
chunk__31338_31342 = G__31359;
count__31339_31343 = G__31360;
i__31340_31344 = G__31361;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31362){
var map__31365 = p__31362;
var map__31365__$1 = ((((!((map__31365 == null)))?((((map__31365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31365):map__31365);
var w = map__31365__$1;
var message = cljs.core.get.call(null,map__31365__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"docs/js/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"docs/js/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__20177__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__20177__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__20177__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31377 = cljs.core.seq.call(null,plugins);
var chunk__31378 = null;
var count__31379 = (0);
var i__31380 = (0);
while(true){
if((i__31380 < count__31379)){
var vec__31381 = cljs.core._nth.call(null,chunk__31378,i__31380);
var k = cljs.core.nth.call(null,vec__31381,(0),null);
var plugin = cljs.core.nth.call(null,vec__31381,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31387 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31377,chunk__31378,count__31379,i__31380,pl_31387,vec__31381,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31387.call(null,msg_hist);
});})(seq__31377,chunk__31378,count__31379,i__31380,pl_31387,vec__31381,k,plugin))
);
} else {
}

var G__31388 = seq__31377;
var G__31389 = chunk__31378;
var G__31390 = count__31379;
var G__31391 = (i__31380 + (1));
seq__31377 = G__31388;
chunk__31378 = G__31389;
count__31379 = G__31390;
i__31380 = G__31391;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31377);
if(temp__4657__auto__){
var seq__31377__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31377__$1)){
var c__21000__auto__ = cljs.core.chunk_first.call(null,seq__31377__$1);
var G__31392 = cljs.core.chunk_rest.call(null,seq__31377__$1);
var G__31393 = c__21000__auto__;
var G__31394 = cljs.core.count.call(null,c__21000__auto__);
var G__31395 = (0);
seq__31377 = G__31392;
chunk__31378 = G__31393;
count__31379 = G__31394;
i__31380 = G__31395;
continue;
} else {
var vec__31384 = cljs.core.first.call(null,seq__31377__$1);
var k = cljs.core.nth.call(null,vec__31384,(0),null);
var plugin = cljs.core.nth.call(null,vec__31384,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31396 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31377,chunk__31378,count__31379,i__31380,pl_31396,vec__31384,k,plugin,seq__31377__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31396.call(null,msg_hist);
});})(seq__31377,chunk__31378,count__31379,i__31380,pl_31396,vec__31384,k,plugin,seq__31377__$1,temp__4657__auto__))
);
} else {
}

var G__31397 = cljs.core.next.call(null,seq__31377__$1);
var G__31398 = null;
var G__31399 = (0);
var G__31400 = (0);
seq__31377 = G__31397;
chunk__31378 = G__31398;
count__31379 = G__31399;
i__31380 = G__31400;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args31401 = [];
var len__21264__auto___31408 = arguments.length;
var i__21265__auto___31409 = (0);
while(true){
if((i__21265__auto___31409 < len__21264__auto___31408)){
args31401.push((arguments[i__21265__auto___31409]));

var G__31410 = (i__21265__auto___31409 + (1));
i__21265__auto___31409 = G__31410;
continue;
} else {
}
break;
}

var G__31403 = args31401.length;
switch (G__31403) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31401.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31404_31412 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31405_31413 = null;
var count__31406_31414 = (0);
var i__31407_31415 = (0);
while(true){
if((i__31407_31415 < count__31406_31414)){
var msg_31416 = cljs.core._nth.call(null,chunk__31405_31413,i__31407_31415);
figwheel.client.socket.handle_incoming_message.call(null,msg_31416);

var G__31417 = seq__31404_31412;
var G__31418 = chunk__31405_31413;
var G__31419 = count__31406_31414;
var G__31420 = (i__31407_31415 + (1));
seq__31404_31412 = G__31417;
chunk__31405_31413 = G__31418;
count__31406_31414 = G__31419;
i__31407_31415 = G__31420;
continue;
} else {
var temp__4657__auto___31421 = cljs.core.seq.call(null,seq__31404_31412);
if(temp__4657__auto___31421){
var seq__31404_31422__$1 = temp__4657__auto___31421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31404_31422__$1)){
var c__21000__auto___31423 = cljs.core.chunk_first.call(null,seq__31404_31422__$1);
var G__31424 = cljs.core.chunk_rest.call(null,seq__31404_31422__$1);
var G__31425 = c__21000__auto___31423;
var G__31426 = cljs.core.count.call(null,c__21000__auto___31423);
var G__31427 = (0);
seq__31404_31412 = G__31424;
chunk__31405_31413 = G__31425;
count__31406_31414 = G__31426;
i__31407_31415 = G__31427;
continue;
} else {
var msg_31428 = cljs.core.first.call(null,seq__31404_31422__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31428);

var G__31429 = cljs.core.next.call(null,seq__31404_31422__$1);
var G__31430 = null;
var G__31431 = (0);
var G__31432 = (0);
seq__31404_31412 = G__31429;
chunk__31405_31413 = G__31430;
count__31406_31414 = G__31431;
i__31407_31415 = G__31432;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__21271__auto__ = [];
var len__21264__auto___31437 = arguments.length;
var i__21265__auto___31438 = (0);
while(true){
if((i__21265__auto___31438 < len__21264__auto___31437)){
args__21271__auto__.push((arguments[i__21265__auto___31438]));

var G__31439 = (i__21265__auto___31438 + (1));
i__21265__auto___31438 = G__31439;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31434){
var map__31435 = p__31434;
var map__31435__$1 = ((((!((map__31435 == null)))?((((map__31435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31435):map__31435);
var opts = map__31435__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31433){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31433));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31441){if((e31441 instanceof Error)){
var e = e31441;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31441;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31445){
var map__31446 = p__31445;
var map__31446__$1 = ((((!((map__31446 == null)))?((((map__31446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31446):map__31446);
var msg_name = cljs.core.get.call(null,map__31446__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1487785008461