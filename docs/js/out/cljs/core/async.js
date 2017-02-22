// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args23095 = [];
var len__21264__auto___23101 = arguments.length;
var i__21265__auto___23102 = (0);
while(true){
if((i__21265__auto___23102 < len__21264__auto___23101)){
args23095.push((arguments[i__21265__auto___23102]));

var G__23103 = (i__21265__auto___23102 + (1));
i__21265__auto___23102 = G__23103;
continue;
} else {
}
break;
}

var G__23097 = args23095.length;
switch (G__23097) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23095.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23098 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23098 = (function (f,blockable,meta23099){
this.f = f;
this.blockable = blockable;
this.meta23099 = meta23099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23100,meta23099__$1){
var self__ = this;
var _23100__$1 = this;
return (new cljs.core.async.t_cljs$core$async23098(self__.f,self__.blockable,meta23099__$1));
});

cljs.core.async.t_cljs$core$async23098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23100){
var self__ = this;
var _23100__$1 = this;
return self__.meta23099;
});

cljs.core.async.t_cljs$core$async23098.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23098.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23098.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23098.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23098.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23099","meta23099",-204928915,null)], null);
});

cljs.core.async.t_cljs$core$async23098.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23098.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23098";

cljs.core.async.t_cljs$core$async23098.cljs$lang$ctorPrWriter = (function (this__20795__auto__,writer__20796__auto__,opt__20797__auto__){
return cljs.core._write.call(null,writer__20796__auto__,"cljs.core.async/t_cljs$core$async23098");
});

cljs.core.async.__GT_t_cljs$core$async23098 = (function cljs$core$async$__GT_t_cljs$core$async23098(f__$1,blockable__$1,meta23099){
return (new cljs.core.async.t_cljs$core$async23098(f__$1,blockable__$1,meta23099));
});

}

return (new cljs.core.async.t_cljs$core$async23098(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args23107 = [];
var len__21264__auto___23110 = arguments.length;
var i__21265__auto___23111 = (0);
while(true){
if((i__21265__auto___23111 < len__21264__auto___23110)){
args23107.push((arguments[i__21265__auto___23111]));

var G__23112 = (i__21265__auto___23111 + (1));
i__21265__auto___23111 = G__23112;
continue;
} else {
}
break;
}

var G__23109 = args23107.length;
switch (G__23109) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23107.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args23114 = [];
var len__21264__auto___23117 = arguments.length;
var i__21265__auto___23118 = (0);
while(true){
if((i__21265__auto___23118 < len__21264__auto___23117)){
args23114.push((arguments[i__21265__auto___23118]));

var G__23119 = (i__21265__auto___23118 + (1));
i__21265__auto___23118 = G__23119;
continue;
} else {
}
break;
}

var G__23116 = args23114.length;
switch (G__23116) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23114.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args23121 = [];
var len__21264__auto___23124 = arguments.length;
var i__21265__auto___23125 = (0);
while(true){
if((i__21265__auto___23125 < len__21264__auto___23124)){
args23121.push((arguments[i__21265__auto___23125]));

var G__23126 = (i__21265__auto___23125 + (1));
i__21265__auto___23125 = G__23126;
continue;
} else {
}
break;
}

var G__23123 = args23121.length;
switch (G__23123) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23121.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23128 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23128);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23128,ret){
return (function (){
return fn1.call(null,val_23128);
});})(val_23128,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args23129 = [];
var len__21264__auto___23132 = arguments.length;
var i__21265__auto___23133 = (0);
while(true){
if((i__21265__auto___23133 < len__21264__auto___23132)){
args23129.push((arguments[i__21265__auto___23133]));

var G__23134 = (i__21265__auto___23133 + (1));
i__21265__auto___23133 = G__23134;
continue;
} else {
}
break;
}

var G__23131 = args23129.length;
switch (G__23131) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23129.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__21104__auto___23136 = n;
var x_23137 = (0);
while(true){
if((x_23137 < n__21104__auto___23136)){
(a[x_23137] = (0));

var G__23138 = (x_23137 + (1));
x_23137 = G__23138;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23139 = (i + (1));
i = G__23139;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23143 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23143 = (function (alt_flag,flag,meta23144){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23144 = meta23144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23145,meta23144__$1){
var self__ = this;
var _23145__$1 = this;
return (new cljs.core.async.t_cljs$core$async23143(self__.alt_flag,self__.flag,meta23144__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23143.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23145){
var self__ = this;
var _23145__$1 = this;
return self__.meta23144;
});})(flag))
;

cljs.core.async.t_cljs$core$async23143.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23143.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23143.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23143.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23143.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23144","meta23144",-107537147,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23143.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23143";

cljs.core.async.t_cljs$core$async23143.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20795__auto__,writer__20796__auto__,opt__20797__auto__){
return cljs.core._write.call(null,writer__20796__auto__,"cljs.core.async/t_cljs$core$async23143");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23143 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23143(alt_flag__$1,flag__$1,meta23144){
return (new cljs.core.async.t_cljs$core$async23143(alt_flag__$1,flag__$1,meta23144));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23143(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23149 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23149 = (function (alt_handler,flag,cb,meta23150){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23150 = meta23150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23151,meta23150__$1){
var self__ = this;
var _23151__$1 = this;
return (new cljs.core.async.t_cljs$core$async23149(self__.alt_handler,self__.flag,self__.cb,meta23150__$1));
});

cljs.core.async.t_cljs$core$async23149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23151){
var self__ = this;
var _23151__$1 = this;
return self__.meta23150;
});

cljs.core.async.t_cljs$core$async23149.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23149.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23149.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23149.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23150","meta23150",-55210383,null)], null);
});

cljs.core.async.t_cljs$core$async23149.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23149";

cljs.core.async.t_cljs$core$async23149.cljs$lang$ctorPrWriter = (function (this__20795__auto__,writer__20796__auto__,opt__20797__auto__){
return cljs.core._write.call(null,writer__20796__auto__,"cljs.core.async/t_cljs$core$async23149");
});

cljs.core.async.__GT_t_cljs$core$async23149 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23149(alt_handler__$1,flag__$1,cb__$1,meta23150){
return (new cljs.core.async.t_cljs$core$async23149(alt_handler__$1,flag__$1,cb__$1,meta23150));
});

}

return (new cljs.core.async.t_cljs$core$async23149(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23152_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23152_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23153_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23153_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20189__auto__ = wport;
if(cljs.core.truth_(or__20189__auto__)){
return or__20189__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23154 = (i + (1));
i = G__23154;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20189__auto__ = ret;
if(cljs.core.truth_(or__20189__auto__)){
return or__20189__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__20177__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20177__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20177__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__21271__auto__ = [];
var len__21264__auto___23160 = arguments.length;
var i__21265__auto___23161 = (0);
while(true){
if((i__21265__auto___23161 < len__21264__auto___23160)){
args__21271__auto__.push((arguments[i__21265__auto___23161]));

var G__23162 = (i__21265__auto___23161 + (1));
i__21265__auto___23161 = G__23162;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((1) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21272__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23157){
var map__23158 = p__23157;
var map__23158__$1 = ((((!((map__23158 == null)))?((((map__23158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23158):map__23158);
var opts = map__23158__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23155){
var G__23156 = cljs.core.first.call(null,seq23155);
var seq23155__$1 = cljs.core.next.call(null,seq23155);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23156,seq23155__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args23163 = [];
var len__21264__auto___23213 = arguments.length;
var i__21265__auto___23214 = (0);
while(true){
if((i__21265__auto___23214 < len__21264__auto___23213)){
args23163.push((arguments[i__21265__auto___23214]));

var G__23215 = (i__21265__auto___23214 + (1));
i__21265__auto___23214 = G__23215;
continue;
} else {
}
break;
}

var G__23165 = args23163.length;
switch (G__23165) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23163.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23050__auto___23217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto___23217){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto___23217){
return (function (state_23189){
var state_val_23190 = (state_23189[(1)]);
if((state_val_23190 === (7))){
var inst_23185 = (state_23189[(2)]);
var state_23189__$1 = state_23189;
var statearr_23191_23218 = state_23189__$1;
(statearr_23191_23218[(2)] = inst_23185);

(statearr_23191_23218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (1))){
var state_23189__$1 = state_23189;
var statearr_23192_23219 = state_23189__$1;
(statearr_23192_23219[(2)] = null);

(statearr_23192_23219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (4))){
var inst_23168 = (state_23189[(7)]);
var inst_23168__$1 = (state_23189[(2)]);
var inst_23169 = (inst_23168__$1 == null);
var state_23189__$1 = (function (){var statearr_23193 = state_23189;
(statearr_23193[(7)] = inst_23168__$1);

return statearr_23193;
})();
if(cljs.core.truth_(inst_23169)){
var statearr_23194_23220 = state_23189__$1;
(statearr_23194_23220[(1)] = (5));

} else {
var statearr_23195_23221 = state_23189__$1;
(statearr_23195_23221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (13))){
var state_23189__$1 = state_23189;
var statearr_23196_23222 = state_23189__$1;
(statearr_23196_23222[(2)] = null);

(statearr_23196_23222[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (6))){
var inst_23168 = (state_23189[(7)]);
var state_23189__$1 = state_23189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23189__$1,(11),to,inst_23168);
} else {
if((state_val_23190 === (3))){
var inst_23187 = (state_23189[(2)]);
var state_23189__$1 = state_23189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23189__$1,inst_23187);
} else {
if((state_val_23190 === (12))){
var state_23189__$1 = state_23189;
var statearr_23197_23223 = state_23189__$1;
(statearr_23197_23223[(2)] = null);

(statearr_23197_23223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (2))){
var state_23189__$1 = state_23189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23189__$1,(4),from);
} else {
if((state_val_23190 === (11))){
var inst_23178 = (state_23189[(2)]);
var state_23189__$1 = state_23189;
if(cljs.core.truth_(inst_23178)){
var statearr_23198_23224 = state_23189__$1;
(statearr_23198_23224[(1)] = (12));

} else {
var statearr_23199_23225 = state_23189__$1;
(statearr_23199_23225[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (9))){
var state_23189__$1 = state_23189;
var statearr_23200_23226 = state_23189__$1;
(statearr_23200_23226[(2)] = null);

(statearr_23200_23226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (5))){
var state_23189__$1 = state_23189;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23201_23227 = state_23189__$1;
(statearr_23201_23227[(1)] = (8));

} else {
var statearr_23202_23228 = state_23189__$1;
(statearr_23202_23228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (14))){
var inst_23183 = (state_23189[(2)]);
var state_23189__$1 = state_23189;
var statearr_23203_23229 = state_23189__$1;
(statearr_23203_23229[(2)] = inst_23183);

(statearr_23203_23229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (10))){
var inst_23175 = (state_23189[(2)]);
var state_23189__$1 = state_23189;
var statearr_23204_23230 = state_23189__$1;
(statearr_23204_23230[(2)] = inst_23175);

(statearr_23204_23230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (8))){
var inst_23172 = cljs.core.async.close_BANG_.call(null,to);
var state_23189__$1 = state_23189;
var statearr_23205_23231 = state_23189__$1;
(statearr_23205_23231[(2)] = inst_23172);

(statearr_23205_23231[(1)] = (10));


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
});})(c__23050__auto___23217))
;
return ((function (switch__22938__auto__,c__23050__auto___23217){
return (function() {
var cljs$core$async$state_machine__22939__auto__ = null;
var cljs$core$async$state_machine__22939__auto____0 = (function (){
var statearr_23209 = [null,null,null,null,null,null,null,null];
(statearr_23209[(0)] = cljs$core$async$state_machine__22939__auto__);

(statearr_23209[(1)] = (1));

return statearr_23209;
});
var cljs$core$async$state_machine__22939__auto____1 = (function (state_23189){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_23189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e23210){if((e23210 instanceof Object)){
var ex__22942__auto__ = e23210;
var statearr_23211_23232 = state_23189;
(statearr_23211_23232[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23233 = state_23189;
state_23189 = G__23233;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
cljs$core$async$state_machine__22939__auto__ = function(state_23189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22939__auto____1.call(this,state_23189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22939__auto____0;
cljs$core$async$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22939__auto____1;
return cljs$core$async$state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto___23217))
})();
var state__23052__auto__ = (function (){var statearr_23212 = f__23051__auto__.call(null);
(statearr_23212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto___23217);

return statearr_23212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto___23217))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23421){
var vec__23422 = p__23421;
var v = cljs.core.nth.call(null,vec__23422,(0),null);
var p = cljs.core.nth.call(null,vec__23422,(1),null);
var job = vec__23422;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23050__auto___23608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto___23608,res,vec__23422,v,p,job,jobs,results){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto___23608,res,vec__23422,v,p,job,jobs,results){
return (function (state_23429){
var state_val_23430 = (state_23429[(1)]);
if((state_val_23430 === (1))){
var state_23429__$1 = state_23429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23429__$1,(2),res,v);
} else {
if((state_val_23430 === (2))){
var inst_23426 = (state_23429[(2)]);
var inst_23427 = cljs.core.async.close_BANG_.call(null,res);
var state_23429__$1 = (function (){var statearr_23431 = state_23429;
(statearr_23431[(7)] = inst_23426);

return statearr_23431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23429__$1,inst_23427);
} else {
return null;
}
}
});})(c__23050__auto___23608,res,vec__23422,v,p,job,jobs,results))
;
return ((function (switch__22938__auto__,c__23050__auto___23608,res,vec__23422,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____0 = (function (){
var statearr_23435 = [null,null,null,null,null,null,null,null];
(statearr_23435[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__);

(statearr_23435[(1)] = (1));

return statearr_23435;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____1 = (function (state_23429){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_23429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e23436){if((e23436 instanceof Object)){
var ex__22942__auto__ = e23436;
var statearr_23437_23609 = state_23429;
(statearr_23437_23609[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23610 = state_23429;
state_23429 = G__23610;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__ = function(state_23429){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____1.call(this,state_23429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto___23608,res,vec__23422,v,p,job,jobs,results))
})();
var state__23052__auto__ = (function (){var statearr_23438 = f__23051__auto__.call(null);
(statearr_23438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto___23608);

return statearr_23438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto___23608,res,vec__23422,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23439){
var vec__23440 = p__23439;
var v = cljs.core.nth.call(null,vec__23440,(0),null);
var p = cljs.core.nth.call(null,vec__23440,(1),null);
var job = vec__23440;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__21104__auto___23611 = n;
var __23612 = (0);
while(true){
if((__23612 < n__21104__auto___23611)){
var G__23443_23613 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23443_23613) {
case "compute":
var c__23050__auto___23615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23612,c__23050__auto___23615,G__23443_23613,n__21104__auto___23611,jobs,results,process,async){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (__23612,c__23050__auto___23615,G__23443_23613,n__21104__auto___23611,jobs,results,process,async){
return (function (state_23456){
var state_val_23457 = (state_23456[(1)]);
if((state_val_23457 === (1))){
var state_23456__$1 = state_23456;
var statearr_23458_23616 = state_23456__$1;
(statearr_23458_23616[(2)] = null);

(statearr_23458_23616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23457 === (2))){
var state_23456__$1 = state_23456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23456__$1,(4),jobs);
} else {
if((state_val_23457 === (3))){
var inst_23454 = (state_23456[(2)]);
var state_23456__$1 = state_23456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23456__$1,inst_23454);
} else {
if((state_val_23457 === (4))){
var inst_23446 = (state_23456[(2)]);
var inst_23447 = process.call(null,inst_23446);
var state_23456__$1 = state_23456;
if(cljs.core.truth_(inst_23447)){
var statearr_23459_23617 = state_23456__$1;
(statearr_23459_23617[(1)] = (5));

} else {
var statearr_23460_23618 = state_23456__$1;
(statearr_23460_23618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23457 === (5))){
var state_23456__$1 = state_23456;
var statearr_23461_23619 = state_23456__$1;
(statearr_23461_23619[(2)] = null);

(statearr_23461_23619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23457 === (6))){
var state_23456__$1 = state_23456;
var statearr_23462_23620 = state_23456__$1;
(statearr_23462_23620[(2)] = null);

(statearr_23462_23620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23457 === (7))){
var inst_23452 = (state_23456[(2)]);
var state_23456__$1 = state_23456;
var statearr_23463_23621 = state_23456__$1;
(statearr_23463_23621[(2)] = inst_23452);

(statearr_23463_23621[(1)] = (3));


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
});})(__23612,c__23050__auto___23615,G__23443_23613,n__21104__auto___23611,jobs,results,process,async))
;
return ((function (__23612,switch__22938__auto__,c__23050__auto___23615,G__23443_23613,n__21104__auto___23611,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____0 = (function (){
var statearr_23467 = [null,null,null,null,null,null,null];
(statearr_23467[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__);

(statearr_23467[(1)] = (1));

return statearr_23467;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____1 = (function (state_23456){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_23456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e23468){if((e23468 instanceof Object)){
var ex__22942__auto__ = e23468;
var statearr_23469_23622 = state_23456;
(statearr_23469_23622[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23623 = state_23456;
state_23456 = G__23623;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__ = function(state_23456){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____1.call(this,state_23456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__;
})()
;})(__23612,switch__22938__auto__,c__23050__auto___23615,G__23443_23613,n__21104__auto___23611,jobs,results,process,async))
})();
var state__23052__auto__ = (function (){var statearr_23470 = f__23051__auto__.call(null);
(statearr_23470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto___23615);

return statearr_23470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(__23612,c__23050__auto___23615,G__23443_23613,n__21104__auto___23611,jobs,results,process,async))
);


break;
case "async":
var c__23050__auto___23624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23612,c__23050__auto___23624,G__23443_23613,n__21104__auto___23611,jobs,results,process,async){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (__23612,c__23050__auto___23624,G__23443_23613,n__21104__auto___23611,jobs,results,process,async){
return (function (state_23483){
var state_val_23484 = (state_23483[(1)]);
if((state_val_23484 === (1))){
var state_23483__$1 = state_23483;
var statearr_23485_23625 = state_23483__$1;
(statearr_23485_23625[(2)] = null);

(statearr_23485_23625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (2))){
var state_23483__$1 = state_23483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23483__$1,(4),jobs);
} else {
if((state_val_23484 === (3))){
var inst_23481 = (state_23483[(2)]);
var state_23483__$1 = state_23483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23483__$1,inst_23481);
} else {
if((state_val_23484 === (4))){
var inst_23473 = (state_23483[(2)]);
var inst_23474 = async.call(null,inst_23473);
var state_23483__$1 = state_23483;
if(cljs.core.truth_(inst_23474)){
var statearr_23486_23626 = state_23483__$1;
(statearr_23486_23626[(1)] = (5));

} else {
var statearr_23487_23627 = state_23483__$1;
(statearr_23487_23627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (5))){
var state_23483__$1 = state_23483;
var statearr_23488_23628 = state_23483__$1;
(statearr_23488_23628[(2)] = null);

(statearr_23488_23628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (6))){
var state_23483__$1 = state_23483;
var statearr_23489_23629 = state_23483__$1;
(statearr_23489_23629[(2)] = null);

(statearr_23489_23629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (7))){
var inst_23479 = (state_23483[(2)]);
var state_23483__$1 = state_23483;
var statearr_23490_23630 = state_23483__$1;
(statearr_23490_23630[(2)] = inst_23479);

(statearr_23490_23630[(1)] = (3));


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
});})(__23612,c__23050__auto___23624,G__23443_23613,n__21104__auto___23611,jobs,results,process,async))
;
return ((function (__23612,switch__22938__auto__,c__23050__auto___23624,G__23443_23613,n__21104__auto___23611,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____0 = (function (){
var statearr_23494 = [null,null,null,null,null,null,null];
(statearr_23494[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__);

(statearr_23494[(1)] = (1));

return statearr_23494;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____1 = (function (state_23483){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_23483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e23495){if((e23495 instanceof Object)){
var ex__22942__auto__ = e23495;
var statearr_23496_23631 = state_23483;
(statearr_23496_23631[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23632 = state_23483;
state_23483 = G__23632;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__ = function(state_23483){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____1.call(this,state_23483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__;
})()
;})(__23612,switch__22938__auto__,c__23050__auto___23624,G__23443_23613,n__21104__auto___23611,jobs,results,process,async))
})();
var state__23052__auto__ = (function (){var statearr_23497 = f__23051__auto__.call(null);
(statearr_23497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto___23624);

return statearr_23497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(__23612,c__23050__auto___23624,G__23443_23613,n__21104__auto___23611,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23633 = (__23612 + (1));
__23612 = G__23633;
continue;
} else {
}
break;
}

var c__23050__auto___23634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto___23634,jobs,results,process,async){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto___23634,jobs,results,process,async){
return (function (state_23519){
var state_val_23520 = (state_23519[(1)]);
if((state_val_23520 === (1))){
var state_23519__$1 = state_23519;
var statearr_23521_23635 = state_23519__$1;
(statearr_23521_23635[(2)] = null);

(statearr_23521_23635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (2))){
var state_23519__$1 = state_23519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23519__$1,(4),from);
} else {
if((state_val_23520 === (3))){
var inst_23517 = (state_23519[(2)]);
var state_23519__$1 = state_23519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23519__$1,inst_23517);
} else {
if((state_val_23520 === (4))){
var inst_23500 = (state_23519[(7)]);
var inst_23500__$1 = (state_23519[(2)]);
var inst_23501 = (inst_23500__$1 == null);
var state_23519__$1 = (function (){var statearr_23522 = state_23519;
(statearr_23522[(7)] = inst_23500__$1);

return statearr_23522;
})();
if(cljs.core.truth_(inst_23501)){
var statearr_23523_23636 = state_23519__$1;
(statearr_23523_23636[(1)] = (5));

} else {
var statearr_23524_23637 = state_23519__$1;
(statearr_23524_23637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (5))){
var inst_23503 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23519__$1 = state_23519;
var statearr_23525_23638 = state_23519__$1;
(statearr_23525_23638[(2)] = inst_23503);

(statearr_23525_23638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (6))){
var inst_23505 = (state_23519[(8)]);
var inst_23500 = (state_23519[(7)]);
var inst_23505__$1 = cljs.core.async.chan.call(null,(1));
var inst_23506 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23507 = [inst_23500,inst_23505__$1];
var inst_23508 = (new cljs.core.PersistentVector(null,2,(5),inst_23506,inst_23507,null));
var state_23519__$1 = (function (){var statearr_23526 = state_23519;
(statearr_23526[(8)] = inst_23505__$1);

return statearr_23526;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23519__$1,(8),jobs,inst_23508);
} else {
if((state_val_23520 === (7))){
var inst_23515 = (state_23519[(2)]);
var state_23519__$1 = state_23519;
var statearr_23527_23639 = state_23519__$1;
(statearr_23527_23639[(2)] = inst_23515);

(statearr_23527_23639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (8))){
var inst_23505 = (state_23519[(8)]);
var inst_23510 = (state_23519[(2)]);
var state_23519__$1 = (function (){var statearr_23528 = state_23519;
(statearr_23528[(9)] = inst_23510);

return statearr_23528;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23519__$1,(9),results,inst_23505);
} else {
if((state_val_23520 === (9))){
var inst_23512 = (state_23519[(2)]);
var state_23519__$1 = (function (){var statearr_23529 = state_23519;
(statearr_23529[(10)] = inst_23512);

return statearr_23529;
})();
var statearr_23530_23640 = state_23519__$1;
(statearr_23530_23640[(2)] = null);

(statearr_23530_23640[(1)] = (2));


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
});})(c__23050__auto___23634,jobs,results,process,async))
;
return ((function (switch__22938__auto__,c__23050__auto___23634,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____0 = (function (){
var statearr_23534 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23534[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__);

(statearr_23534[(1)] = (1));

return statearr_23534;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____1 = (function (state_23519){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_23519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e23535){if((e23535 instanceof Object)){
var ex__22942__auto__ = e23535;
var statearr_23536_23641 = state_23519;
(statearr_23536_23641[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23642 = state_23519;
state_23519 = G__23642;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__ = function(state_23519){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____1.call(this,state_23519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto___23634,jobs,results,process,async))
})();
var state__23052__auto__ = (function (){var statearr_23537 = f__23051__auto__.call(null);
(statearr_23537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto___23634);

return statearr_23537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto___23634,jobs,results,process,async))
);


var c__23050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto__,jobs,results,process,async){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto__,jobs,results,process,async){
return (function (state_23575){
var state_val_23576 = (state_23575[(1)]);
if((state_val_23576 === (7))){
var inst_23571 = (state_23575[(2)]);
var state_23575__$1 = state_23575;
var statearr_23577_23643 = state_23575__$1;
(statearr_23577_23643[(2)] = inst_23571);

(statearr_23577_23643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23576 === (20))){
var state_23575__$1 = state_23575;
var statearr_23578_23644 = state_23575__$1;
(statearr_23578_23644[(2)] = null);

(statearr_23578_23644[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23576 === (1))){
var state_23575__$1 = state_23575;
var statearr_23579_23645 = state_23575__$1;
(statearr_23579_23645[(2)] = null);

(statearr_23579_23645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23576 === (4))){
var inst_23540 = (state_23575[(7)]);
var inst_23540__$1 = (state_23575[(2)]);
var inst_23541 = (inst_23540__$1 == null);
var state_23575__$1 = (function (){var statearr_23580 = state_23575;
(statearr_23580[(7)] = inst_23540__$1);

return statearr_23580;
})();
if(cljs.core.truth_(inst_23541)){
var statearr_23581_23646 = state_23575__$1;
(statearr_23581_23646[(1)] = (5));

} else {
var statearr_23582_23647 = state_23575__$1;
(statearr_23582_23647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23576 === (15))){
var inst_23553 = (state_23575[(8)]);
var state_23575__$1 = state_23575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23575__$1,(18),to,inst_23553);
} else {
if((state_val_23576 === (21))){
var inst_23566 = (state_23575[(2)]);
var state_23575__$1 = state_23575;
var statearr_23583_23648 = state_23575__$1;
(statearr_23583_23648[(2)] = inst_23566);

(statearr_23583_23648[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23576 === (13))){
var inst_23568 = (state_23575[(2)]);
var state_23575__$1 = (function (){var statearr_23584 = state_23575;
(statearr_23584[(9)] = inst_23568);

return statearr_23584;
})();
var statearr_23585_23649 = state_23575__$1;
(statearr_23585_23649[(2)] = null);

(statearr_23585_23649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23576 === (6))){
var inst_23540 = (state_23575[(7)]);
var state_23575__$1 = state_23575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23575__$1,(11),inst_23540);
} else {
if((state_val_23576 === (17))){
var inst_23561 = (state_23575[(2)]);
var state_23575__$1 = state_23575;
if(cljs.core.truth_(inst_23561)){
var statearr_23586_23650 = state_23575__$1;
(statearr_23586_23650[(1)] = (19));

} else {
var statearr_23587_23651 = state_23575__$1;
(statearr_23587_23651[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23576 === (3))){
var inst_23573 = (state_23575[(2)]);
var state_23575__$1 = state_23575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23575__$1,inst_23573);
} else {
if((state_val_23576 === (12))){
var inst_23550 = (state_23575[(10)]);
var state_23575__$1 = state_23575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23575__$1,(14),inst_23550);
} else {
if((state_val_23576 === (2))){
var state_23575__$1 = state_23575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23575__$1,(4),results);
} else {
if((state_val_23576 === (19))){
var state_23575__$1 = state_23575;
var statearr_23588_23652 = state_23575__$1;
(statearr_23588_23652[(2)] = null);

(statearr_23588_23652[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23576 === (11))){
var inst_23550 = (state_23575[(2)]);
var state_23575__$1 = (function (){var statearr_23589 = state_23575;
(statearr_23589[(10)] = inst_23550);

return statearr_23589;
})();
var statearr_23590_23653 = state_23575__$1;
(statearr_23590_23653[(2)] = null);

(statearr_23590_23653[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23576 === (9))){
var state_23575__$1 = state_23575;
var statearr_23591_23654 = state_23575__$1;
(statearr_23591_23654[(2)] = null);

(statearr_23591_23654[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23576 === (5))){
var state_23575__$1 = state_23575;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23592_23655 = state_23575__$1;
(statearr_23592_23655[(1)] = (8));

} else {
var statearr_23593_23656 = state_23575__$1;
(statearr_23593_23656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23576 === (14))){
var inst_23553 = (state_23575[(8)]);
var inst_23555 = (state_23575[(11)]);
var inst_23553__$1 = (state_23575[(2)]);
var inst_23554 = (inst_23553__$1 == null);
var inst_23555__$1 = cljs.core.not.call(null,inst_23554);
var state_23575__$1 = (function (){var statearr_23594 = state_23575;
(statearr_23594[(8)] = inst_23553__$1);

(statearr_23594[(11)] = inst_23555__$1);

return statearr_23594;
})();
if(inst_23555__$1){
var statearr_23595_23657 = state_23575__$1;
(statearr_23595_23657[(1)] = (15));

} else {
var statearr_23596_23658 = state_23575__$1;
(statearr_23596_23658[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23576 === (16))){
var inst_23555 = (state_23575[(11)]);
var state_23575__$1 = state_23575;
var statearr_23597_23659 = state_23575__$1;
(statearr_23597_23659[(2)] = inst_23555);

(statearr_23597_23659[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23576 === (10))){
var inst_23547 = (state_23575[(2)]);
var state_23575__$1 = state_23575;
var statearr_23598_23660 = state_23575__$1;
(statearr_23598_23660[(2)] = inst_23547);

(statearr_23598_23660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23576 === (18))){
var inst_23558 = (state_23575[(2)]);
var state_23575__$1 = state_23575;
var statearr_23599_23661 = state_23575__$1;
(statearr_23599_23661[(2)] = inst_23558);

(statearr_23599_23661[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23576 === (8))){
var inst_23544 = cljs.core.async.close_BANG_.call(null,to);
var state_23575__$1 = state_23575;
var statearr_23600_23662 = state_23575__$1;
(statearr_23600_23662[(2)] = inst_23544);

(statearr_23600_23662[(1)] = (10));


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
}
}
}
}
});})(c__23050__auto__,jobs,results,process,async))
;
return ((function (switch__22938__auto__,c__23050__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____0 = (function (){
var statearr_23604 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23604[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__);

(statearr_23604[(1)] = (1));

return statearr_23604;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____1 = (function (state_23575){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_23575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e23605){if((e23605 instanceof Object)){
var ex__22942__auto__ = e23605;
var statearr_23606_23663 = state_23575;
(statearr_23606_23663[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23664 = state_23575;
state_23575 = G__23664;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__ = function(state_23575){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____1.call(this,state_23575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22939__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto__,jobs,results,process,async))
})();
var state__23052__auto__ = (function (){var statearr_23607 = f__23051__auto__.call(null);
(statearr_23607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto__);

return statearr_23607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto__,jobs,results,process,async))
);

return c__23050__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args23665 = [];
var len__21264__auto___23668 = arguments.length;
var i__21265__auto___23669 = (0);
while(true){
if((i__21265__auto___23669 < len__21264__auto___23668)){
args23665.push((arguments[i__21265__auto___23669]));

var G__23670 = (i__21265__auto___23669 + (1));
i__21265__auto___23669 = G__23670;
continue;
} else {
}
break;
}

var G__23667 = args23665.length;
switch (G__23667) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23665.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args23672 = [];
var len__21264__auto___23675 = arguments.length;
var i__21265__auto___23676 = (0);
while(true){
if((i__21265__auto___23676 < len__21264__auto___23675)){
args23672.push((arguments[i__21265__auto___23676]));

var G__23677 = (i__21265__auto___23676 + (1));
i__21265__auto___23676 = G__23677;
continue;
} else {
}
break;
}

var G__23674 = args23672.length;
switch (G__23674) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23672.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args23679 = [];
var len__21264__auto___23732 = arguments.length;
var i__21265__auto___23733 = (0);
while(true){
if((i__21265__auto___23733 < len__21264__auto___23732)){
args23679.push((arguments[i__21265__auto___23733]));

var G__23734 = (i__21265__auto___23733 + (1));
i__21265__auto___23733 = G__23734;
continue;
} else {
}
break;
}

var G__23681 = args23679.length;
switch (G__23681) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23679.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23050__auto___23736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto___23736,tc,fc){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto___23736,tc,fc){
return (function (state_23707){
var state_val_23708 = (state_23707[(1)]);
if((state_val_23708 === (7))){
var inst_23703 = (state_23707[(2)]);
var state_23707__$1 = state_23707;
var statearr_23709_23737 = state_23707__$1;
(statearr_23709_23737[(2)] = inst_23703);

(statearr_23709_23737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (1))){
var state_23707__$1 = state_23707;
var statearr_23710_23738 = state_23707__$1;
(statearr_23710_23738[(2)] = null);

(statearr_23710_23738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (4))){
var inst_23684 = (state_23707[(7)]);
var inst_23684__$1 = (state_23707[(2)]);
var inst_23685 = (inst_23684__$1 == null);
var state_23707__$1 = (function (){var statearr_23711 = state_23707;
(statearr_23711[(7)] = inst_23684__$1);

return statearr_23711;
})();
if(cljs.core.truth_(inst_23685)){
var statearr_23712_23739 = state_23707__$1;
(statearr_23712_23739[(1)] = (5));

} else {
var statearr_23713_23740 = state_23707__$1;
(statearr_23713_23740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (13))){
var state_23707__$1 = state_23707;
var statearr_23714_23741 = state_23707__$1;
(statearr_23714_23741[(2)] = null);

(statearr_23714_23741[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (6))){
var inst_23684 = (state_23707[(7)]);
var inst_23690 = p.call(null,inst_23684);
var state_23707__$1 = state_23707;
if(cljs.core.truth_(inst_23690)){
var statearr_23715_23742 = state_23707__$1;
(statearr_23715_23742[(1)] = (9));

} else {
var statearr_23716_23743 = state_23707__$1;
(statearr_23716_23743[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (3))){
var inst_23705 = (state_23707[(2)]);
var state_23707__$1 = state_23707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23707__$1,inst_23705);
} else {
if((state_val_23708 === (12))){
var state_23707__$1 = state_23707;
var statearr_23717_23744 = state_23707__$1;
(statearr_23717_23744[(2)] = null);

(statearr_23717_23744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (2))){
var state_23707__$1 = state_23707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23707__$1,(4),ch);
} else {
if((state_val_23708 === (11))){
var inst_23684 = (state_23707[(7)]);
var inst_23694 = (state_23707[(2)]);
var state_23707__$1 = state_23707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23707__$1,(8),inst_23694,inst_23684);
} else {
if((state_val_23708 === (9))){
var state_23707__$1 = state_23707;
var statearr_23718_23745 = state_23707__$1;
(statearr_23718_23745[(2)] = tc);

(statearr_23718_23745[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (5))){
var inst_23687 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23688 = cljs.core.async.close_BANG_.call(null,fc);
var state_23707__$1 = (function (){var statearr_23719 = state_23707;
(statearr_23719[(8)] = inst_23687);

return statearr_23719;
})();
var statearr_23720_23746 = state_23707__$1;
(statearr_23720_23746[(2)] = inst_23688);

(statearr_23720_23746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (14))){
var inst_23701 = (state_23707[(2)]);
var state_23707__$1 = state_23707;
var statearr_23721_23747 = state_23707__$1;
(statearr_23721_23747[(2)] = inst_23701);

(statearr_23721_23747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (10))){
var state_23707__$1 = state_23707;
var statearr_23722_23748 = state_23707__$1;
(statearr_23722_23748[(2)] = fc);

(statearr_23722_23748[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (8))){
var inst_23696 = (state_23707[(2)]);
var state_23707__$1 = state_23707;
if(cljs.core.truth_(inst_23696)){
var statearr_23723_23749 = state_23707__$1;
(statearr_23723_23749[(1)] = (12));

} else {
var statearr_23724_23750 = state_23707__$1;
(statearr_23724_23750[(1)] = (13));

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
});})(c__23050__auto___23736,tc,fc))
;
return ((function (switch__22938__auto__,c__23050__auto___23736,tc,fc){
return (function() {
var cljs$core$async$state_machine__22939__auto__ = null;
var cljs$core$async$state_machine__22939__auto____0 = (function (){
var statearr_23728 = [null,null,null,null,null,null,null,null,null];
(statearr_23728[(0)] = cljs$core$async$state_machine__22939__auto__);

(statearr_23728[(1)] = (1));

return statearr_23728;
});
var cljs$core$async$state_machine__22939__auto____1 = (function (state_23707){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_23707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e23729){if((e23729 instanceof Object)){
var ex__22942__auto__ = e23729;
var statearr_23730_23751 = state_23707;
(statearr_23730_23751[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23752 = state_23707;
state_23707 = G__23752;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
cljs$core$async$state_machine__22939__auto__ = function(state_23707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22939__auto____1.call(this,state_23707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22939__auto____0;
cljs$core$async$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22939__auto____1;
return cljs$core$async$state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto___23736,tc,fc))
})();
var state__23052__auto__ = (function (){var statearr_23731 = f__23051__auto__.call(null);
(statearr_23731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto___23736);

return statearr_23731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto___23736,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto__){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto__){
return (function (state_23816){
var state_val_23817 = (state_23816[(1)]);
if((state_val_23817 === (7))){
var inst_23812 = (state_23816[(2)]);
var state_23816__$1 = state_23816;
var statearr_23818_23839 = state_23816__$1;
(statearr_23818_23839[(2)] = inst_23812);

(statearr_23818_23839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (1))){
var inst_23796 = init;
var state_23816__$1 = (function (){var statearr_23819 = state_23816;
(statearr_23819[(7)] = inst_23796);

return statearr_23819;
})();
var statearr_23820_23840 = state_23816__$1;
(statearr_23820_23840[(2)] = null);

(statearr_23820_23840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (4))){
var inst_23799 = (state_23816[(8)]);
var inst_23799__$1 = (state_23816[(2)]);
var inst_23800 = (inst_23799__$1 == null);
var state_23816__$1 = (function (){var statearr_23821 = state_23816;
(statearr_23821[(8)] = inst_23799__$1);

return statearr_23821;
})();
if(cljs.core.truth_(inst_23800)){
var statearr_23822_23841 = state_23816__$1;
(statearr_23822_23841[(1)] = (5));

} else {
var statearr_23823_23842 = state_23816__$1;
(statearr_23823_23842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (6))){
var inst_23799 = (state_23816[(8)]);
var inst_23803 = (state_23816[(9)]);
var inst_23796 = (state_23816[(7)]);
var inst_23803__$1 = f.call(null,inst_23796,inst_23799);
var inst_23804 = cljs.core.reduced_QMARK_.call(null,inst_23803__$1);
var state_23816__$1 = (function (){var statearr_23824 = state_23816;
(statearr_23824[(9)] = inst_23803__$1);

return statearr_23824;
})();
if(inst_23804){
var statearr_23825_23843 = state_23816__$1;
(statearr_23825_23843[(1)] = (8));

} else {
var statearr_23826_23844 = state_23816__$1;
(statearr_23826_23844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (3))){
var inst_23814 = (state_23816[(2)]);
var state_23816__$1 = state_23816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23816__$1,inst_23814);
} else {
if((state_val_23817 === (2))){
var state_23816__$1 = state_23816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23816__$1,(4),ch);
} else {
if((state_val_23817 === (9))){
var inst_23803 = (state_23816[(9)]);
var inst_23796 = inst_23803;
var state_23816__$1 = (function (){var statearr_23827 = state_23816;
(statearr_23827[(7)] = inst_23796);

return statearr_23827;
})();
var statearr_23828_23845 = state_23816__$1;
(statearr_23828_23845[(2)] = null);

(statearr_23828_23845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (5))){
var inst_23796 = (state_23816[(7)]);
var state_23816__$1 = state_23816;
var statearr_23829_23846 = state_23816__$1;
(statearr_23829_23846[(2)] = inst_23796);

(statearr_23829_23846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (10))){
var inst_23810 = (state_23816[(2)]);
var state_23816__$1 = state_23816;
var statearr_23830_23847 = state_23816__$1;
(statearr_23830_23847[(2)] = inst_23810);

(statearr_23830_23847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (8))){
var inst_23803 = (state_23816[(9)]);
var inst_23806 = cljs.core.deref.call(null,inst_23803);
var state_23816__$1 = state_23816;
var statearr_23831_23848 = state_23816__$1;
(statearr_23831_23848[(2)] = inst_23806);

(statearr_23831_23848[(1)] = (10));


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
});})(c__23050__auto__))
;
return ((function (switch__22938__auto__,c__23050__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22939__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22939__auto____0 = (function (){
var statearr_23835 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23835[(0)] = cljs$core$async$reduce_$_state_machine__22939__auto__);

(statearr_23835[(1)] = (1));

return statearr_23835;
});
var cljs$core$async$reduce_$_state_machine__22939__auto____1 = (function (state_23816){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_23816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e23836){if((e23836 instanceof Object)){
var ex__22942__auto__ = e23836;
var statearr_23837_23849 = state_23816;
(statearr_23837_23849[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23850 = state_23816;
state_23816 = G__23850;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22939__auto__ = function(state_23816){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22939__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22939__auto____1.call(this,state_23816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22939__auto____0;
cljs$core$async$reduce_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22939__auto____1;
return cljs$core$async$reduce_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto__))
})();
var state__23052__auto__ = (function (){var statearr_23838 = f__23051__auto__.call(null);
(statearr_23838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto__);

return statearr_23838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto__))
);

return c__23050__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto__,f__$1){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto__,f__$1){
return (function (state_23870){
var state_val_23871 = (state_23870[(1)]);
if((state_val_23871 === (1))){
var inst_23865 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23870__$1 = state_23870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23870__$1,(2),inst_23865);
} else {
if((state_val_23871 === (2))){
var inst_23867 = (state_23870[(2)]);
var inst_23868 = f__$1.call(null,inst_23867);
var state_23870__$1 = state_23870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23870__$1,inst_23868);
} else {
return null;
}
}
});})(c__23050__auto__,f__$1))
;
return ((function (switch__22938__auto__,c__23050__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__22939__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22939__auto____0 = (function (){
var statearr_23875 = [null,null,null,null,null,null,null];
(statearr_23875[(0)] = cljs$core$async$transduce_$_state_machine__22939__auto__);

(statearr_23875[(1)] = (1));

return statearr_23875;
});
var cljs$core$async$transduce_$_state_machine__22939__auto____1 = (function (state_23870){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_23870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e23876){if((e23876 instanceof Object)){
var ex__22942__auto__ = e23876;
var statearr_23877_23879 = state_23870;
(statearr_23877_23879[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23880 = state_23870;
state_23870 = G__23880;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22939__auto__ = function(state_23870){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22939__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22939__auto____1.call(this,state_23870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22939__auto____0;
cljs$core$async$transduce_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22939__auto____1;
return cljs$core$async$transduce_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto__,f__$1))
})();
var state__23052__auto__ = (function (){var statearr_23878 = f__23051__auto__.call(null);
(statearr_23878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto__);

return statearr_23878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto__,f__$1))
);

return c__23050__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args23881 = [];
var len__21264__auto___23933 = arguments.length;
var i__21265__auto___23934 = (0);
while(true){
if((i__21265__auto___23934 < len__21264__auto___23933)){
args23881.push((arguments[i__21265__auto___23934]));

var G__23935 = (i__21265__auto___23934 + (1));
i__21265__auto___23934 = G__23935;
continue;
} else {
}
break;
}

var G__23883 = args23881.length;
switch (G__23883) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23881.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto__){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto__){
return (function (state_23908){
var state_val_23909 = (state_23908[(1)]);
if((state_val_23909 === (7))){
var inst_23890 = (state_23908[(2)]);
var state_23908__$1 = state_23908;
var statearr_23910_23937 = state_23908__$1;
(statearr_23910_23937[(2)] = inst_23890);

(statearr_23910_23937[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (1))){
var inst_23884 = cljs.core.seq.call(null,coll);
var inst_23885 = inst_23884;
var state_23908__$1 = (function (){var statearr_23911 = state_23908;
(statearr_23911[(7)] = inst_23885);

return statearr_23911;
})();
var statearr_23912_23938 = state_23908__$1;
(statearr_23912_23938[(2)] = null);

(statearr_23912_23938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (4))){
var inst_23885 = (state_23908[(7)]);
var inst_23888 = cljs.core.first.call(null,inst_23885);
var state_23908__$1 = state_23908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23908__$1,(7),ch,inst_23888);
} else {
if((state_val_23909 === (13))){
var inst_23902 = (state_23908[(2)]);
var state_23908__$1 = state_23908;
var statearr_23913_23939 = state_23908__$1;
(statearr_23913_23939[(2)] = inst_23902);

(statearr_23913_23939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (6))){
var inst_23893 = (state_23908[(2)]);
var state_23908__$1 = state_23908;
if(cljs.core.truth_(inst_23893)){
var statearr_23914_23940 = state_23908__$1;
(statearr_23914_23940[(1)] = (8));

} else {
var statearr_23915_23941 = state_23908__$1;
(statearr_23915_23941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (3))){
var inst_23906 = (state_23908[(2)]);
var state_23908__$1 = state_23908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23908__$1,inst_23906);
} else {
if((state_val_23909 === (12))){
var state_23908__$1 = state_23908;
var statearr_23916_23942 = state_23908__$1;
(statearr_23916_23942[(2)] = null);

(statearr_23916_23942[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (2))){
var inst_23885 = (state_23908[(7)]);
var state_23908__$1 = state_23908;
if(cljs.core.truth_(inst_23885)){
var statearr_23917_23943 = state_23908__$1;
(statearr_23917_23943[(1)] = (4));

} else {
var statearr_23918_23944 = state_23908__$1;
(statearr_23918_23944[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (11))){
var inst_23899 = cljs.core.async.close_BANG_.call(null,ch);
var state_23908__$1 = state_23908;
var statearr_23919_23945 = state_23908__$1;
(statearr_23919_23945[(2)] = inst_23899);

(statearr_23919_23945[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (9))){
var state_23908__$1 = state_23908;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23920_23946 = state_23908__$1;
(statearr_23920_23946[(1)] = (11));

} else {
var statearr_23921_23947 = state_23908__$1;
(statearr_23921_23947[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (5))){
var inst_23885 = (state_23908[(7)]);
var state_23908__$1 = state_23908;
var statearr_23922_23948 = state_23908__$1;
(statearr_23922_23948[(2)] = inst_23885);

(statearr_23922_23948[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (10))){
var inst_23904 = (state_23908[(2)]);
var state_23908__$1 = state_23908;
var statearr_23923_23949 = state_23908__$1;
(statearr_23923_23949[(2)] = inst_23904);

(statearr_23923_23949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (8))){
var inst_23885 = (state_23908[(7)]);
var inst_23895 = cljs.core.next.call(null,inst_23885);
var inst_23885__$1 = inst_23895;
var state_23908__$1 = (function (){var statearr_23924 = state_23908;
(statearr_23924[(7)] = inst_23885__$1);

return statearr_23924;
})();
var statearr_23925_23950 = state_23908__$1;
(statearr_23925_23950[(2)] = null);

(statearr_23925_23950[(1)] = (2));


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
});})(c__23050__auto__))
;
return ((function (switch__22938__auto__,c__23050__auto__){
return (function() {
var cljs$core$async$state_machine__22939__auto__ = null;
var cljs$core$async$state_machine__22939__auto____0 = (function (){
var statearr_23929 = [null,null,null,null,null,null,null,null];
(statearr_23929[(0)] = cljs$core$async$state_machine__22939__auto__);

(statearr_23929[(1)] = (1));

return statearr_23929;
});
var cljs$core$async$state_machine__22939__auto____1 = (function (state_23908){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_23908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e23930){if((e23930 instanceof Object)){
var ex__22942__auto__ = e23930;
var statearr_23931_23951 = state_23908;
(statearr_23931_23951[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23952 = state_23908;
state_23908 = G__23952;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
cljs$core$async$state_machine__22939__auto__ = function(state_23908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22939__auto____1.call(this,state_23908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22939__auto____0;
cljs$core$async$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22939__auto____1;
return cljs$core$async$state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto__))
})();
var state__23052__auto__ = (function (){var statearr_23932 = f__23051__auto__.call(null);
(statearr_23932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto__);

return statearr_23932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto__))
);

return c__23050__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__20852__auto__ = (((_ == null))?null:_);
var m__20853__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20852__auto__)]);
if(!((m__20853__auto__ == null))){
return m__20853__auto__.call(null,_);
} else {
var m__20853__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20853__auto____$1 == null))){
return m__20853__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__20852__auto__ = (((m == null))?null:m);
var m__20853__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20852__auto__)]);
if(!((m__20853__auto__ == null))){
return m__20853__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20853__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20853__auto____$1 == null))){
return m__20853__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__20852__auto__ = (((m == null))?null:m);
var m__20853__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20852__auto__)]);
if(!((m__20853__auto__ == null))){
return m__20853__auto__.call(null,m,ch);
} else {
var m__20853__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20853__auto____$1 == null))){
return m__20853__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__20852__auto__ = (((m == null))?null:m);
var m__20853__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20852__auto__)]);
if(!((m__20853__auto__ == null))){
return m__20853__auto__.call(null,m);
} else {
var m__20853__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20853__auto____$1 == null))){
return m__20853__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24178 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24178 = (function (mult,ch,cs,meta24179){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24179 = meta24179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24180,meta24179__$1){
var self__ = this;
var _24180__$1 = this;
return (new cljs.core.async.t_cljs$core$async24178(self__.mult,self__.ch,self__.cs,meta24179__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24178.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24180){
var self__ = this;
var _24180__$1 = this;
return self__.meta24179;
});})(cs))
;

cljs.core.async.t_cljs$core$async24178.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24178.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24178.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24178.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24178.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24178.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24178.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24179","meta24179",1814099957,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24178.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24178";

cljs.core.async.t_cljs$core$async24178.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20795__auto__,writer__20796__auto__,opt__20797__auto__){
return cljs.core._write.call(null,writer__20796__auto__,"cljs.core.async/t_cljs$core$async24178");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24178 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24178(mult__$1,ch__$1,cs__$1,meta24179){
return (new cljs.core.async.t_cljs$core$async24178(mult__$1,ch__$1,cs__$1,meta24179));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24178(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23050__auto___24403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto___24403,cs,m,dchan,dctr,done){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto___24403,cs,m,dchan,dctr,done){
return (function (state_24315){
var state_val_24316 = (state_24315[(1)]);
if((state_val_24316 === (7))){
var inst_24311 = (state_24315[(2)]);
var state_24315__$1 = state_24315;
var statearr_24317_24404 = state_24315__$1;
(statearr_24317_24404[(2)] = inst_24311);

(statearr_24317_24404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (20))){
var inst_24214 = (state_24315[(7)]);
var inst_24226 = cljs.core.first.call(null,inst_24214);
var inst_24227 = cljs.core.nth.call(null,inst_24226,(0),null);
var inst_24228 = cljs.core.nth.call(null,inst_24226,(1),null);
var state_24315__$1 = (function (){var statearr_24318 = state_24315;
(statearr_24318[(8)] = inst_24227);

return statearr_24318;
})();
if(cljs.core.truth_(inst_24228)){
var statearr_24319_24405 = state_24315__$1;
(statearr_24319_24405[(1)] = (22));

} else {
var statearr_24320_24406 = state_24315__$1;
(statearr_24320_24406[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (27))){
var inst_24183 = (state_24315[(9)]);
var inst_24258 = (state_24315[(10)]);
var inst_24263 = (state_24315[(11)]);
var inst_24256 = (state_24315[(12)]);
var inst_24263__$1 = cljs.core._nth.call(null,inst_24256,inst_24258);
var inst_24264 = cljs.core.async.put_BANG_.call(null,inst_24263__$1,inst_24183,done);
var state_24315__$1 = (function (){var statearr_24321 = state_24315;
(statearr_24321[(11)] = inst_24263__$1);

return statearr_24321;
})();
if(cljs.core.truth_(inst_24264)){
var statearr_24322_24407 = state_24315__$1;
(statearr_24322_24407[(1)] = (30));

} else {
var statearr_24323_24408 = state_24315__$1;
(statearr_24323_24408[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (1))){
var state_24315__$1 = state_24315;
var statearr_24324_24409 = state_24315__$1;
(statearr_24324_24409[(2)] = null);

(statearr_24324_24409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (24))){
var inst_24214 = (state_24315[(7)]);
var inst_24233 = (state_24315[(2)]);
var inst_24234 = cljs.core.next.call(null,inst_24214);
var inst_24192 = inst_24234;
var inst_24193 = null;
var inst_24194 = (0);
var inst_24195 = (0);
var state_24315__$1 = (function (){var statearr_24325 = state_24315;
(statearr_24325[(13)] = inst_24195);

(statearr_24325[(14)] = inst_24233);

(statearr_24325[(15)] = inst_24194);

(statearr_24325[(16)] = inst_24192);

(statearr_24325[(17)] = inst_24193);

return statearr_24325;
})();
var statearr_24326_24410 = state_24315__$1;
(statearr_24326_24410[(2)] = null);

(statearr_24326_24410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (39))){
var state_24315__$1 = state_24315;
var statearr_24330_24411 = state_24315__$1;
(statearr_24330_24411[(2)] = null);

(statearr_24330_24411[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (4))){
var inst_24183 = (state_24315[(9)]);
var inst_24183__$1 = (state_24315[(2)]);
var inst_24184 = (inst_24183__$1 == null);
var state_24315__$1 = (function (){var statearr_24331 = state_24315;
(statearr_24331[(9)] = inst_24183__$1);

return statearr_24331;
})();
if(cljs.core.truth_(inst_24184)){
var statearr_24332_24412 = state_24315__$1;
(statearr_24332_24412[(1)] = (5));

} else {
var statearr_24333_24413 = state_24315__$1;
(statearr_24333_24413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (15))){
var inst_24195 = (state_24315[(13)]);
var inst_24194 = (state_24315[(15)]);
var inst_24192 = (state_24315[(16)]);
var inst_24193 = (state_24315[(17)]);
var inst_24210 = (state_24315[(2)]);
var inst_24211 = (inst_24195 + (1));
var tmp24327 = inst_24194;
var tmp24328 = inst_24192;
var tmp24329 = inst_24193;
var inst_24192__$1 = tmp24328;
var inst_24193__$1 = tmp24329;
var inst_24194__$1 = tmp24327;
var inst_24195__$1 = inst_24211;
var state_24315__$1 = (function (){var statearr_24334 = state_24315;
(statearr_24334[(13)] = inst_24195__$1);

(statearr_24334[(15)] = inst_24194__$1);

(statearr_24334[(18)] = inst_24210);

(statearr_24334[(16)] = inst_24192__$1);

(statearr_24334[(17)] = inst_24193__$1);

return statearr_24334;
})();
var statearr_24335_24414 = state_24315__$1;
(statearr_24335_24414[(2)] = null);

(statearr_24335_24414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (21))){
var inst_24237 = (state_24315[(2)]);
var state_24315__$1 = state_24315;
var statearr_24339_24415 = state_24315__$1;
(statearr_24339_24415[(2)] = inst_24237);

(statearr_24339_24415[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (31))){
var inst_24263 = (state_24315[(11)]);
var inst_24267 = done.call(null,null);
var inst_24268 = cljs.core.async.untap_STAR_.call(null,m,inst_24263);
var state_24315__$1 = (function (){var statearr_24340 = state_24315;
(statearr_24340[(19)] = inst_24267);

return statearr_24340;
})();
var statearr_24341_24416 = state_24315__$1;
(statearr_24341_24416[(2)] = inst_24268);

(statearr_24341_24416[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (32))){
var inst_24255 = (state_24315[(20)]);
var inst_24258 = (state_24315[(10)]);
var inst_24257 = (state_24315[(21)]);
var inst_24256 = (state_24315[(12)]);
var inst_24270 = (state_24315[(2)]);
var inst_24271 = (inst_24258 + (1));
var tmp24336 = inst_24255;
var tmp24337 = inst_24257;
var tmp24338 = inst_24256;
var inst_24255__$1 = tmp24336;
var inst_24256__$1 = tmp24338;
var inst_24257__$1 = tmp24337;
var inst_24258__$1 = inst_24271;
var state_24315__$1 = (function (){var statearr_24342 = state_24315;
(statearr_24342[(20)] = inst_24255__$1);

(statearr_24342[(10)] = inst_24258__$1);

(statearr_24342[(21)] = inst_24257__$1);

(statearr_24342[(12)] = inst_24256__$1);

(statearr_24342[(22)] = inst_24270);

return statearr_24342;
})();
var statearr_24343_24417 = state_24315__$1;
(statearr_24343_24417[(2)] = null);

(statearr_24343_24417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (40))){
var inst_24283 = (state_24315[(23)]);
var inst_24287 = done.call(null,null);
var inst_24288 = cljs.core.async.untap_STAR_.call(null,m,inst_24283);
var state_24315__$1 = (function (){var statearr_24344 = state_24315;
(statearr_24344[(24)] = inst_24287);

return statearr_24344;
})();
var statearr_24345_24418 = state_24315__$1;
(statearr_24345_24418[(2)] = inst_24288);

(statearr_24345_24418[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (33))){
var inst_24274 = (state_24315[(25)]);
var inst_24276 = cljs.core.chunked_seq_QMARK_.call(null,inst_24274);
var state_24315__$1 = state_24315;
if(inst_24276){
var statearr_24346_24419 = state_24315__$1;
(statearr_24346_24419[(1)] = (36));

} else {
var statearr_24347_24420 = state_24315__$1;
(statearr_24347_24420[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (13))){
var inst_24204 = (state_24315[(26)]);
var inst_24207 = cljs.core.async.close_BANG_.call(null,inst_24204);
var state_24315__$1 = state_24315;
var statearr_24348_24421 = state_24315__$1;
(statearr_24348_24421[(2)] = inst_24207);

(statearr_24348_24421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (22))){
var inst_24227 = (state_24315[(8)]);
var inst_24230 = cljs.core.async.close_BANG_.call(null,inst_24227);
var state_24315__$1 = state_24315;
var statearr_24349_24422 = state_24315__$1;
(statearr_24349_24422[(2)] = inst_24230);

(statearr_24349_24422[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (36))){
var inst_24274 = (state_24315[(25)]);
var inst_24278 = cljs.core.chunk_first.call(null,inst_24274);
var inst_24279 = cljs.core.chunk_rest.call(null,inst_24274);
var inst_24280 = cljs.core.count.call(null,inst_24278);
var inst_24255 = inst_24279;
var inst_24256 = inst_24278;
var inst_24257 = inst_24280;
var inst_24258 = (0);
var state_24315__$1 = (function (){var statearr_24350 = state_24315;
(statearr_24350[(20)] = inst_24255);

(statearr_24350[(10)] = inst_24258);

(statearr_24350[(21)] = inst_24257);

(statearr_24350[(12)] = inst_24256);

return statearr_24350;
})();
var statearr_24351_24423 = state_24315__$1;
(statearr_24351_24423[(2)] = null);

(statearr_24351_24423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (41))){
var inst_24274 = (state_24315[(25)]);
var inst_24290 = (state_24315[(2)]);
var inst_24291 = cljs.core.next.call(null,inst_24274);
var inst_24255 = inst_24291;
var inst_24256 = null;
var inst_24257 = (0);
var inst_24258 = (0);
var state_24315__$1 = (function (){var statearr_24352 = state_24315;
(statearr_24352[(27)] = inst_24290);

(statearr_24352[(20)] = inst_24255);

(statearr_24352[(10)] = inst_24258);

(statearr_24352[(21)] = inst_24257);

(statearr_24352[(12)] = inst_24256);

return statearr_24352;
})();
var statearr_24353_24424 = state_24315__$1;
(statearr_24353_24424[(2)] = null);

(statearr_24353_24424[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (43))){
var state_24315__$1 = state_24315;
var statearr_24354_24425 = state_24315__$1;
(statearr_24354_24425[(2)] = null);

(statearr_24354_24425[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (29))){
var inst_24299 = (state_24315[(2)]);
var state_24315__$1 = state_24315;
var statearr_24355_24426 = state_24315__$1;
(statearr_24355_24426[(2)] = inst_24299);

(statearr_24355_24426[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (44))){
var inst_24308 = (state_24315[(2)]);
var state_24315__$1 = (function (){var statearr_24356 = state_24315;
(statearr_24356[(28)] = inst_24308);

return statearr_24356;
})();
var statearr_24357_24427 = state_24315__$1;
(statearr_24357_24427[(2)] = null);

(statearr_24357_24427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (6))){
var inst_24247 = (state_24315[(29)]);
var inst_24246 = cljs.core.deref.call(null,cs);
var inst_24247__$1 = cljs.core.keys.call(null,inst_24246);
var inst_24248 = cljs.core.count.call(null,inst_24247__$1);
var inst_24249 = cljs.core.reset_BANG_.call(null,dctr,inst_24248);
var inst_24254 = cljs.core.seq.call(null,inst_24247__$1);
var inst_24255 = inst_24254;
var inst_24256 = null;
var inst_24257 = (0);
var inst_24258 = (0);
var state_24315__$1 = (function (){var statearr_24358 = state_24315;
(statearr_24358[(20)] = inst_24255);

(statearr_24358[(10)] = inst_24258);

(statearr_24358[(21)] = inst_24257);

(statearr_24358[(29)] = inst_24247__$1);

(statearr_24358[(30)] = inst_24249);

(statearr_24358[(12)] = inst_24256);

return statearr_24358;
})();
var statearr_24359_24428 = state_24315__$1;
(statearr_24359_24428[(2)] = null);

(statearr_24359_24428[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (28))){
var inst_24255 = (state_24315[(20)]);
var inst_24274 = (state_24315[(25)]);
var inst_24274__$1 = cljs.core.seq.call(null,inst_24255);
var state_24315__$1 = (function (){var statearr_24360 = state_24315;
(statearr_24360[(25)] = inst_24274__$1);

return statearr_24360;
})();
if(inst_24274__$1){
var statearr_24361_24429 = state_24315__$1;
(statearr_24361_24429[(1)] = (33));

} else {
var statearr_24362_24430 = state_24315__$1;
(statearr_24362_24430[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (25))){
var inst_24258 = (state_24315[(10)]);
var inst_24257 = (state_24315[(21)]);
var inst_24260 = (inst_24258 < inst_24257);
var inst_24261 = inst_24260;
var state_24315__$1 = state_24315;
if(cljs.core.truth_(inst_24261)){
var statearr_24363_24431 = state_24315__$1;
(statearr_24363_24431[(1)] = (27));

} else {
var statearr_24364_24432 = state_24315__$1;
(statearr_24364_24432[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (34))){
var state_24315__$1 = state_24315;
var statearr_24365_24433 = state_24315__$1;
(statearr_24365_24433[(2)] = null);

(statearr_24365_24433[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (17))){
var state_24315__$1 = state_24315;
var statearr_24366_24434 = state_24315__$1;
(statearr_24366_24434[(2)] = null);

(statearr_24366_24434[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (3))){
var inst_24313 = (state_24315[(2)]);
var state_24315__$1 = state_24315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24315__$1,inst_24313);
} else {
if((state_val_24316 === (12))){
var inst_24242 = (state_24315[(2)]);
var state_24315__$1 = state_24315;
var statearr_24367_24435 = state_24315__$1;
(statearr_24367_24435[(2)] = inst_24242);

(statearr_24367_24435[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (2))){
var state_24315__$1 = state_24315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24315__$1,(4),ch);
} else {
if((state_val_24316 === (23))){
var state_24315__$1 = state_24315;
var statearr_24368_24436 = state_24315__$1;
(statearr_24368_24436[(2)] = null);

(statearr_24368_24436[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (35))){
var inst_24297 = (state_24315[(2)]);
var state_24315__$1 = state_24315;
var statearr_24369_24437 = state_24315__$1;
(statearr_24369_24437[(2)] = inst_24297);

(statearr_24369_24437[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (19))){
var inst_24214 = (state_24315[(7)]);
var inst_24218 = cljs.core.chunk_first.call(null,inst_24214);
var inst_24219 = cljs.core.chunk_rest.call(null,inst_24214);
var inst_24220 = cljs.core.count.call(null,inst_24218);
var inst_24192 = inst_24219;
var inst_24193 = inst_24218;
var inst_24194 = inst_24220;
var inst_24195 = (0);
var state_24315__$1 = (function (){var statearr_24370 = state_24315;
(statearr_24370[(13)] = inst_24195);

(statearr_24370[(15)] = inst_24194);

(statearr_24370[(16)] = inst_24192);

(statearr_24370[(17)] = inst_24193);

return statearr_24370;
})();
var statearr_24371_24438 = state_24315__$1;
(statearr_24371_24438[(2)] = null);

(statearr_24371_24438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (11))){
var inst_24192 = (state_24315[(16)]);
var inst_24214 = (state_24315[(7)]);
var inst_24214__$1 = cljs.core.seq.call(null,inst_24192);
var state_24315__$1 = (function (){var statearr_24372 = state_24315;
(statearr_24372[(7)] = inst_24214__$1);

return statearr_24372;
})();
if(inst_24214__$1){
var statearr_24373_24439 = state_24315__$1;
(statearr_24373_24439[(1)] = (16));

} else {
var statearr_24374_24440 = state_24315__$1;
(statearr_24374_24440[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (9))){
var inst_24244 = (state_24315[(2)]);
var state_24315__$1 = state_24315;
var statearr_24375_24441 = state_24315__$1;
(statearr_24375_24441[(2)] = inst_24244);

(statearr_24375_24441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (5))){
var inst_24190 = cljs.core.deref.call(null,cs);
var inst_24191 = cljs.core.seq.call(null,inst_24190);
var inst_24192 = inst_24191;
var inst_24193 = null;
var inst_24194 = (0);
var inst_24195 = (0);
var state_24315__$1 = (function (){var statearr_24376 = state_24315;
(statearr_24376[(13)] = inst_24195);

(statearr_24376[(15)] = inst_24194);

(statearr_24376[(16)] = inst_24192);

(statearr_24376[(17)] = inst_24193);

return statearr_24376;
})();
var statearr_24377_24442 = state_24315__$1;
(statearr_24377_24442[(2)] = null);

(statearr_24377_24442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (14))){
var state_24315__$1 = state_24315;
var statearr_24378_24443 = state_24315__$1;
(statearr_24378_24443[(2)] = null);

(statearr_24378_24443[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (45))){
var inst_24305 = (state_24315[(2)]);
var state_24315__$1 = state_24315;
var statearr_24379_24444 = state_24315__$1;
(statearr_24379_24444[(2)] = inst_24305);

(statearr_24379_24444[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (26))){
var inst_24247 = (state_24315[(29)]);
var inst_24301 = (state_24315[(2)]);
var inst_24302 = cljs.core.seq.call(null,inst_24247);
var state_24315__$1 = (function (){var statearr_24380 = state_24315;
(statearr_24380[(31)] = inst_24301);

return statearr_24380;
})();
if(inst_24302){
var statearr_24381_24445 = state_24315__$1;
(statearr_24381_24445[(1)] = (42));

} else {
var statearr_24382_24446 = state_24315__$1;
(statearr_24382_24446[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (16))){
var inst_24214 = (state_24315[(7)]);
var inst_24216 = cljs.core.chunked_seq_QMARK_.call(null,inst_24214);
var state_24315__$1 = state_24315;
if(inst_24216){
var statearr_24383_24447 = state_24315__$1;
(statearr_24383_24447[(1)] = (19));

} else {
var statearr_24384_24448 = state_24315__$1;
(statearr_24384_24448[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (38))){
var inst_24294 = (state_24315[(2)]);
var state_24315__$1 = state_24315;
var statearr_24385_24449 = state_24315__$1;
(statearr_24385_24449[(2)] = inst_24294);

(statearr_24385_24449[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (30))){
var state_24315__$1 = state_24315;
var statearr_24386_24450 = state_24315__$1;
(statearr_24386_24450[(2)] = null);

(statearr_24386_24450[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (10))){
var inst_24195 = (state_24315[(13)]);
var inst_24193 = (state_24315[(17)]);
var inst_24203 = cljs.core._nth.call(null,inst_24193,inst_24195);
var inst_24204 = cljs.core.nth.call(null,inst_24203,(0),null);
var inst_24205 = cljs.core.nth.call(null,inst_24203,(1),null);
var state_24315__$1 = (function (){var statearr_24387 = state_24315;
(statearr_24387[(26)] = inst_24204);

return statearr_24387;
})();
if(cljs.core.truth_(inst_24205)){
var statearr_24388_24451 = state_24315__$1;
(statearr_24388_24451[(1)] = (13));

} else {
var statearr_24389_24452 = state_24315__$1;
(statearr_24389_24452[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (18))){
var inst_24240 = (state_24315[(2)]);
var state_24315__$1 = state_24315;
var statearr_24390_24453 = state_24315__$1;
(statearr_24390_24453[(2)] = inst_24240);

(statearr_24390_24453[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (42))){
var state_24315__$1 = state_24315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24315__$1,(45),dchan);
} else {
if((state_val_24316 === (37))){
var inst_24183 = (state_24315[(9)]);
var inst_24274 = (state_24315[(25)]);
var inst_24283 = (state_24315[(23)]);
var inst_24283__$1 = cljs.core.first.call(null,inst_24274);
var inst_24284 = cljs.core.async.put_BANG_.call(null,inst_24283__$1,inst_24183,done);
var state_24315__$1 = (function (){var statearr_24391 = state_24315;
(statearr_24391[(23)] = inst_24283__$1);

return statearr_24391;
})();
if(cljs.core.truth_(inst_24284)){
var statearr_24392_24454 = state_24315__$1;
(statearr_24392_24454[(1)] = (39));

} else {
var statearr_24393_24455 = state_24315__$1;
(statearr_24393_24455[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (8))){
var inst_24195 = (state_24315[(13)]);
var inst_24194 = (state_24315[(15)]);
var inst_24197 = (inst_24195 < inst_24194);
var inst_24198 = inst_24197;
var state_24315__$1 = state_24315;
if(cljs.core.truth_(inst_24198)){
var statearr_24394_24456 = state_24315__$1;
(statearr_24394_24456[(1)] = (10));

} else {
var statearr_24395_24457 = state_24315__$1;
(statearr_24395_24457[(1)] = (11));

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
});})(c__23050__auto___24403,cs,m,dchan,dctr,done))
;
return ((function (switch__22938__auto__,c__23050__auto___24403,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22939__auto__ = null;
var cljs$core$async$mult_$_state_machine__22939__auto____0 = (function (){
var statearr_24399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24399[(0)] = cljs$core$async$mult_$_state_machine__22939__auto__);

(statearr_24399[(1)] = (1));

return statearr_24399;
});
var cljs$core$async$mult_$_state_machine__22939__auto____1 = (function (state_24315){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_24315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e24400){if((e24400 instanceof Object)){
var ex__22942__auto__ = e24400;
var statearr_24401_24458 = state_24315;
(statearr_24401_24458[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24459 = state_24315;
state_24315 = G__24459;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22939__auto__ = function(state_24315){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22939__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22939__auto____1.call(this,state_24315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22939__auto____0;
cljs$core$async$mult_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22939__auto____1;
return cljs$core$async$mult_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto___24403,cs,m,dchan,dctr,done))
})();
var state__23052__auto__ = (function (){var statearr_24402 = f__23051__auto__.call(null);
(statearr_24402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto___24403);

return statearr_24402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto___24403,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args24460 = [];
var len__21264__auto___24463 = arguments.length;
var i__21265__auto___24464 = (0);
while(true){
if((i__21265__auto___24464 < len__21264__auto___24463)){
args24460.push((arguments[i__21265__auto___24464]));

var G__24465 = (i__21265__auto___24464 + (1));
i__21265__auto___24464 = G__24465;
continue;
} else {
}
break;
}

var G__24462 = args24460.length;
switch (G__24462) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24460.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__20852__auto__ = (((m == null))?null:m);
var m__20853__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20852__auto__)]);
if(!((m__20853__auto__ == null))){
return m__20853__auto__.call(null,m,ch);
} else {
var m__20853__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20853__auto____$1 == null))){
return m__20853__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__20852__auto__ = (((m == null))?null:m);
var m__20853__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20852__auto__)]);
if(!((m__20853__auto__ == null))){
return m__20853__auto__.call(null,m,ch);
} else {
var m__20853__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20853__auto____$1 == null))){
return m__20853__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__20852__auto__ = (((m == null))?null:m);
var m__20853__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20852__auto__)]);
if(!((m__20853__auto__ == null))){
return m__20853__auto__.call(null,m);
} else {
var m__20853__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20853__auto____$1 == null))){
return m__20853__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__20852__auto__ = (((m == null))?null:m);
var m__20853__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20852__auto__)]);
if(!((m__20853__auto__ == null))){
return m__20853__auto__.call(null,m,state_map);
} else {
var m__20853__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20853__auto____$1 == null))){
return m__20853__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__20852__auto__ = (((m == null))?null:m);
var m__20853__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20852__auto__)]);
if(!((m__20853__auto__ == null))){
return m__20853__auto__.call(null,m,mode);
} else {
var m__20853__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20853__auto____$1 == null))){
return m__20853__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__21271__auto__ = [];
var len__21264__auto___24477 = arguments.length;
var i__21265__auto___24478 = (0);
while(true){
if((i__21265__auto___24478 < len__21264__auto___24477)){
args__21271__auto__.push((arguments[i__21265__auto___24478]));

var G__24479 = (i__21265__auto___24478 + (1));
i__21265__auto___24478 = G__24479;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((3) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21272__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24471){
var map__24472 = p__24471;
var map__24472__$1 = ((((!((map__24472 == null)))?((((map__24472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24472):map__24472);
var opts = map__24472__$1;
var statearr_24474_24480 = state;
(statearr_24474_24480[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__24472,map__24472__$1,opts){
return (function (val){
var statearr_24475_24481 = state;
(statearr_24475_24481[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24472,map__24472__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_24476_24482 = state;
(statearr_24476_24482[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24467){
var G__24468 = cljs.core.first.call(null,seq24467);
var seq24467__$1 = cljs.core.next.call(null,seq24467);
var G__24469 = cljs.core.first.call(null,seq24467__$1);
var seq24467__$2 = cljs.core.next.call(null,seq24467__$1);
var G__24470 = cljs.core.first.call(null,seq24467__$2);
var seq24467__$3 = cljs.core.next.call(null,seq24467__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24468,G__24469,G__24470,seq24467__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24648 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24648 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24649){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24649 = meta24649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24650,meta24649__$1){
var self__ = this;
var _24650__$1 = this;
return (new cljs.core.async.t_cljs$core$async24648(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24649__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24648.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24650){
var self__ = this;
var _24650__$1 = this;
return self__.meta24649;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24648.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24648.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24648.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24648.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24648.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24648.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24648.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24648.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24648.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24649","meta24649",-1980252501,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24648.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24648";

cljs.core.async.t_cljs$core$async24648.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20795__auto__,writer__20796__auto__,opt__20797__auto__){
return cljs.core._write.call(null,writer__20796__auto__,"cljs.core.async/t_cljs$core$async24648");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24648 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24648(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24649){
return (new cljs.core.async.t_cljs$core$async24648(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24649));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24648(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23050__auto___24813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto___24813,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto___24813,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24750){
var state_val_24751 = (state_24750[(1)]);
if((state_val_24751 === (7))){
var inst_24666 = (state_24750[(2)]);
var state_24750__$1 = state_24750;
var statearr_24752_24814 = state_24750__$1;
(statearr_24752_24814[(2)] = inst_24666);

(statearr_24752_24814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (20))){
var inst_24678 = (state_24750[(7)]);
var state_24750__$1 = state_24750;
var statearr_24753_24815 = state_24750__$1;
(statearr_24753_24815[(2)] = inst_24678);

(statearr_24753_24815[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (27))){
var state_24750__$1 = state_24750;
var statearr_24754_24816 = state_24750__$1;
(statearr_24754_24816[(2)] = null);

(statearr_24754_24816[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (1))){
var inst_24654 = (state_24750[(8)]);
var inst_24654__$1 = calc_state.call(null);
var inst_24656 = (inst_24654__$1 == null);
var inst_24657 = cljs.core.not.call(null,inst_24656);
var state_24750__$1 = (function (){var statearr_24755 = state_24750;
(statearr_24755[(8)] = inst_24654__$1);

return statearr_24755;
})();
if(inst_24657){
var statearr_24756_24817 = state_24750__$1;
(statearr_24756_24817[(1)] = (2));

} else {
var statearr_24757_24818 = state_24750__$1;
(statearr_24757_24818[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (24))){
var inst_24724 = (state_24750[(9)]);
var inst_24701 = (state_24750[(10)]);
var inst_24710 = (state_24750[(11)]);
var inst_24724__$1 = inst_24701.call(null,inst_24710);
var state_24750__$1 = (function (){var statearr_24758 = state_24750;
(statearr_24758[(9)] = inst_24724__$1);

return statearr_24758;
})();
if(cljs.core.truth_(inst_24724__$1)){
var statearr_24759_24819 = state_24750__$1;
(statearr_24759_24819[(1)] = (29));

} else {
var statearr_24760_24820 = state_24750__$1;
(statearr_24760_24820[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (4))){
var inst_24669 = (state_24750[(2)]);
var state_24750__$1 = state_24750;
if(cljs.core.truth_(inst_24669)){
var statearr_24761_24821 = state_24750__$1;
(statearr_24761_24821[(1)] = (8));

} else {
var statearr_24762_24822 = state_24750__$1;
(statearr_24762_24822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (15))){
var inst_24695 = (state_24750[(2)]);
var state_24750__$1 = state_24750;
if(cljs.core.truth_(inst_24695)){
var statearr_24763_24823 = state_24750__$1;
(statearr_24763_24823[(1)] = (19));

} else {
var statearr_24764_24824 = state_24750__$1;
(statearr_24764_24824[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (21))){
var inst_24700 = (state_24750[(12)]);
var inst_24700__$1 = (state_24750[(2)]);
var inst_24701 = cljs.core.get.call(null,inst_24700__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24702 = cljs.core.get.call(null,inst_24700__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24703 = cljs.core.get.call(null,inst_24700__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24750__$1 = (function (){var statearr_24765 = state_24750;
(statearr_24765[(10)] = inst_24701);

(statearr_24765[(13)] = inst_24702);

(statearr_24765[(12)] = inst_24700__$1);

return statearr_24765;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24750__$1,(22),inst_24703);
} else {
if((state_val_24751 === (31))){
var inst_24732 = (state_24750[(2)]);
var state_24750__$1 = state_24750;
if(cljs.core.truth_(inst_24732)){
var statearr_24766_24825 = state_24750__$1;
(statearr_24766_24825[(1)] = (32));

} else {
var statearr_24767_24826 = state_24750__$1;
(statearr_24767_24826[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (32))){
var inst_24709 = (state_24750[(14)]);
var state_24750__$1 = state_24750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24750__$1,(35),out,inst_24709);
} else {
if((state_val_24751 === (33))){
var inst_24700 = (state_24750[(12)]);
var inst_24678 = inst_24700;
var state_24750__$1 = (function (){var statearr_24768 = state_24750;
(statearr_24768[(7)] = inst_24678);

return statearr_24768;
})();
var statearr_24769_24827 = state_24750__$1;
(statearr_24769_24827[(2)] = null);

(statearr_24769_24827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (13))){
var inst_24678 = (state_24750[(7)]);
var inst_24685 = inst_24678.cljs$lang$protocol_mask$partition0$;
var inst_24686 = (inst_24685 & (64));
var inst_24687 = inst_24678.cljs$core$ISeq$;
var inst_24688 = (inst_24686) || (inst_24687);
var state_24750__$1 = state_24750;
if(cljs.core.truth_(inst_24688)){
var statearr_24770_24828 = state_24750__$1;
(statearr_24770_24828[(1)] = (16));

} else {
var statearr_24771_24829 = state_24750__$1;
(statearr_24771_24829[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (22))){
var inst_24710 = (state_24750[(11)]);
var inst_24709 = (state_24750[(14)]);
var inst_24708 = (state_24750[(2)]);
var inst_24709__$1 = cljs.core.nth.call(null,inst_24708,(0),null);
var inst_24710__$1 = cljs.core.nth.call(null,inst_24708,(1),null);
var inst_24711 = (inst_24709__$1 == null);
var inst_24712 = cljs.core._EQ_.call(null,inst_24710__$1,change);
var inst_24713 = (inst_24711) || (inst_24712);
var state_24750__$1 = (function (){var statearr_24772 = state_24750;
(statearr_24772[(11)] = inst_24710__$1);

(statearr_24772[(14)] = inst_24709__$1);

return statearr_24772;
})();
if(cljs.core.truth_(inst_24713)){
var statearr_24773_24830 = state_24750__$1;
(statearr_24773_24830[(1)] = (23));

} else {
var statearr_24774_24831 = state_24750__$1;
(statearr_24774_24831[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (36))){
var inst_24700 = (state_24750[(12)]);
var inst_24678 = inst_24700;
var state_24750__$1 = (function (){var statearr_24775 = state_24750;
(statearr_24775[(7)] = inst_24678);

return statearr_24775;
})();
var statearr_24776_24832 = state_24750__$1;
(statearr_24776_24832[(2)] = null);

(statearr_24776_24832[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (29))){
var inst_24724 = (state_24750[(9)]);
var state_24750__$1 = state_24750;
var statearr_24777_24833 = state_24750__$1;
(statearr_24777_24833[(2)] = inst_24724);

(statearr_24777_24833[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (6))){
var state_24750__$1 = state_24750;
var statearr_24778_24834 = state_24750__$1;
(statearr_24778_24834[(2)] = false);

(statearr_24778_24834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (28))){
var inst_24720 = (state_24750[(2)]);
var inst_24721 = calc_state.call(null);
var inst_24678 = inst_24721;
var state_24750__$1 = (function (){var statearr_24779 = state_24750;
(statearr_24779[(7)] = inst_24678);

(statearr_24779[(15)] = inst_24720);

return statearr_24779;
})();
var statearr_24780_24835 = state_24750__$1;
(statearr_24780_24835[(2)] = null);

(statearr_24780_24835[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (25))){
var inst_24746 = (state_24750[(2)]);
var state_24750__$1 = state_24750;
var statearr_24781_24836 = state_24750__$1;
(statearr_24781_24836[(2)] = inst_24746);

(statearr_24781_24836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (34))){
var inst_24744 = (state_24750[(2)]);
var state_24750__$1 = state_24750;
var statearr_24782_24837 = state_24750__$1;
(statearr_24782_24837[(2)] = inst_24744);

(statearr_24782_24837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (17))){
var state_24750__$1 = state_24750;
var statearr_24783_24838 = state_24750__$1;
(statearr_24783_24838[(2)] = false);

(statearr_24783_24838[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (3))){
var state_24750__$1 = state_24750;
var statearr_24784_24839 = state_24750__$1;
(statearr_24784_24839[(2)] = false);

(statearr_24784_24839[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (12))){
var inst_24748 = (state_24750[(2)]);
var state_24750__$1 = state_24750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24750__$1,inst_24748);
} else {
if((state_val_24751 === (2))){
var inst_24654 = (state_24750[(8)]);
var inst_24659 = inst_24654.cljs$lang$protocol_mask$partition0$;
var inst_24660 = (inst_24659 & (64));
var inst_24661 = inst_24654.cljs$core$ISeq$;
var inst_24662 = (inst_24660) || (inst_24661);
var state_24750__$1 = state_24750;
if(cljs.core.truth_(inst_24662)){
var statearr_24785_24840 = state_24750__$1;
(statearr_24785_24840[(1)] = (5));

} else {
var statearr_24786_24841 = state_24750__$1;
(statearr_24786_24841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (23))){
var inst_24709 = (state_24750[(14)]);
var inst_24715 = (inst_24709 == null);
var state_24750__$1 = state_24750;
if(cljs.core.truth_(inst_24715)){
var statearr_24787_24842 = state_24750__$1;
(statearr_24787_24842[(1)] = (26));

} else {
var statearr_24788_24843 = state_24750__$1;
(statearr_24788_24843[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (35))){
var inst_24735 = (state_24750[(2)]);
var state_24750__$1 = state_24750;
if(cljs.core.truth_(inst_24735)){
var statearr_24789_24844 = state_24750__$1;
(statearr_24789_24844[(1)] = (36));

} else {
var statearr_24790_24845 = state_24750__$1;
(statearr_24790_24845[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (19))){
var inst_24678 = (state_24750[(7)]);
var inst_24697 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24678);
var state_24750__$1 = state_24750;
var statearr_24791_24846 = state_24750__$1;
(statearr_24791_24846[(2)] = inst_24697);

(statearr_24791_24846[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (11))){
var inst_24678 = (state_24750[(7)]);
var inst_24682 = (inst_24678 == null);
var inst_24683 = cljs.core.not.call(null,inst_24682);
var state_24750__$1 = state_24750;
if(inst_24683){
var statearr_24792_24847 = state_24750__$1;
(statearr_24792_24847[(1)] = (13));

} else {
var statearr_24793_24848 = state_24750__$1;
(statearr_24793_24848[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (9))){
var inst_24654 = (state_24750[(8)]);
var state_24750__$1 = state_24750;
var statearr_24794_24849 = state_24750__$1;
(statearr_24794_24849[(2)] = inst_24654);

(statearr_24794_24849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (5))){
var state_24750__$1 = state_24750;
var statearr_24795_24850 = state_24750__$1;
(statearr_24795_24850[(2)] = true);

(statearr_24795_24850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (14))){
var state_24750__$1 = state_24750;
var statearr_24796_24851 = state_24750__$1;
(statearr_24796_24851[(2)] = false);

(statearr_24796_24851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (26))){
var inst_24710 = (state_24750[(11)]);
var inst_24717 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24710);
var state_24750__$1 = state_24750;
var statearr_24797_24852 = state_24750__$1;
(statearr_24797_24852[(2)] = inst_24717);

(statearr_24797_24852[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (16))){
var state_24750__$1 = state_24750;
var statearr_24798_24853 = state_24750__$1;
(statearr_24798_24853[(2)] = true);

(statearr_24798_24853[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (38))){
var inst_24740 = (state_24750[(2)]);
var state_24750__$1 = state_24750;
var statearr_24799_24854 = state_24750__$1;
(statearr_24799_24854[(2)] = inst_24740);

(statearr_24799_24854[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (30))){
var inst_24701 = (state_24750[(10)]);
var inst_24702 = (state_24750[(13)]);
var inst_24710 = (state_24750[(11)]);
var inst_24727 = cljs.core.empty_QMARK_.call(null,inst_24701);
var inst_24728 = inst_24702.call(null,inst_24710);
var inst_24729 = cljs.core.not.call(null,inst_24728);
var inst_24730 = (inst_24727) && (inst_24729);
var state_24750__$1 = state_24750;
var statearr_24800_24855 = state_24750__$1;
(statearr_24800_24855[(2)] = inst_24730);

(statearr_24800_24855[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (10))){
var inst_24654 = (state_24750[(8)]);
var inst_24674 = (state_24750[(2)]);
var inst_24675 = cljs.core.get.call(null,inst_24674,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24676 = cljs.core.get.call(null,inst_24674,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24677 = cljs.core.get.call(null,inst_24674,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24678 = inst_24654;
var state_24750__$1 = (function (){var statearr_24801 = state_24750;
(statearr_24801[(7)] = inst_24678);

(statearr_24801[(16)] = inst_24677);

(statearr_24801[(17)] = inst_24675);

(statearr_24801[(18)] = inst_24676);

return statearr_24801;
})();
var statearr_24802_24856 = state_24750__$1;
(statearr_24802_24856[(2)] = null);

(statearr_24802_24856[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (18))){
var inst_24692 = (state_24750[(2)]);
var state_24750__$1 = state_24750;
var statearr_24803_24857 = state_24750__$1;
(statearr_24803_24857[(2)] = inst_24692);

(statearr_24803_24857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (37))){
var state_24750__$1 = state_24750;
var statearr_24804_24858 = state_24750__$1;
(statearr_24804_24858[(2)] = null);

(statearr_24804_24858[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (8))){
var inst_24654 = (state_24750[(8)]);
var inst_24671 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24654);
var state_24750__$1 = state_24750;
var statearr_24805_24859 = state_24750__$1;
(statearr_24805_24859[(2)] = inst_24671);

(statearr_24805_24859[(1)] = (10));


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
});})(c__23050__auto___24813,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22938__auto__,c__23050__auto___24813,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22939__auto__ = null;
var cljs$core$async$mix_$_state_machine__22939__auto____0 = (function (){
var statearr_24809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24809[(0)] = cljs$core$async$mix_$_state_machine__22939__auto__);

(statearr_24809[(1)] = (1));

return statearr_24809;
});
var cljs$core$async$mix_$_state_machine__22939__auto____1 = (function (state_24750){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_24750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e24810){if((e24810 instanceof Object)){
var ex__22942__auto__ = e24810;
var statearr_24811_24860 = state_24750;
(statearr_24811_24860[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24861 = state_24750;
state_24750 = G__24861;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22939__auto__ = function(state_24750){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22939__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22939__auto____1.call(this,state_24750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22939__auto____0;
cljs$core$async$mix_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22939__auto____1;
return cljs$core$async$mix_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto___24813,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23052__auto__ = (function (){var statearr_24812 = f__23051__auto__.call(null);
(statearr_24812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto___24813);

return statearr_24812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto___24813,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__20852__auto__ = (((p == null))?null:p);
var m__20853__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20852__auto__)]);
if(!((m__20853__auto__ == null))){
return m__20853__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20853__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20853__auto____$1 == null))){
return m__20853__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__20852__auto__ = (((p == null))?null:p);
var m__20853__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20852__auto__)]);
if(!((m__20853__auto__ == null))){
return m__20853__auto__.call(null,p,v,ch);
} else {
var m__20853__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20853__auto____$1 == null))){
return m__20853__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24862 = [];
var len__21264__auto___24865 = arguments.length;
var i__21265__auto___24866 = (0);
while(true){
if((i__21265__auto___24866 < len__21264__auto___24865)){
args24862.push((arguments[i__21265__auto___24866]));

var G__24867 = (i__21265__auto___24866 + (1));
i__21265__auto___24866 = G__24867;
continue;
} else {
}
break;
}

var G__24864 = args24862.length;
switch (G__24864) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24862.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20852__auto__ = (((p == null))?null:p);
var m__20853__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20852__auto__)]);
if(!((m__20853__auto__ == null))){
return m__20853__auto__.call(null,p);
} else {
var m__20853__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20853__auto____$1 == null))){
return m__20853__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__20852__auto__ = (((p == null))?null:p);
var m__20853__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20852__auto__)]);
if(!((m__20853__auto__ == null))){
return m__20853__auto__.call(null,p,v);
} else {
var m__20853__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20853__auto____$1 == null))){
return m__20853__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args24870 = [];
var len__21264__auto___24995 = arguments.length;
var i__21265__auto___24996 = (0);
while(true){
if((i__21265__auto___24996 < len__21264__auto___24995)){
args24870.push((arguments[i__21265__auto___24996]));

var G__24997 = (i__21265__auto___24996 + (1));
i__21265__auto___24996 = G__24997;
continue;
} else {
}
break;
}

var G__24872 = args24870.length;
switch (G__24872) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24870.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20189__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20189__auto__)){
return or__20189__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20189__auto__,mults){
return (function (p1__24869_SHARP_){
if(cljs.core.truth_(p1__24869_SHARP_.call(null,topic))){
return p1__24869_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24869_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20189__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24873 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24873 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24874){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24874 = meta24874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24875,meta24874__$1){
var self__ = this;
var _24875__$1 = this;
return (new cljs.core.async.t_cljs$core$async24873(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24874__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24873.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24875){
var self__ = this;
var _24875__$1 = this;
return self__.meta24874;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24873.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24873.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24873.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24873.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24873.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24873.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24873.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24873.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24874","meta24874",138908305,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24873.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24873";

cljs.core.async.t_cljs$core$async24873.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20795__auto__,writer__20796__auto__,opt__20797__auto__){
return cljs.core._write.call(null,writer__20796__auto__,"cljs.core.async/t_cljs$core$async24873");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24873 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24873(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24874){
return (new cljs.core.async.t_cljs$core$async24873(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24874));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24873(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23050__auto___24999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto___24999,mults,ensure_mult,p){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto___24999,mults,ensure_mult,p){
return (function (state_24947){
var state_val_24948 = (state_24947[(1)]);
if((state_val_24948 === (7))){
var inst_24943 = (state_24947[(2)]);
var state_24947__$1 = state_24947;
var statearr_24949_25000 = state_24947__$1;
(statearr_24949_25000[(2)] = inst_24943);

(statearr_24949_25000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (20))){
var state_24947__$1 = state_24947;
var statearr_24950_25001 = state_24947__$1;
(statearr_24950_25001[(2)] = null);

(statearr_24950_25001[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (1))){
var state_24947__$1 = state_24947;
var statearr_24951_25002 = state_24947__$1;
(statearr_24951_25002[(2)] = null);

(statearr_24951_25002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (24))){
var inst_24926 = (state_24947[(7)]);
var inst_24935 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24926);
var state_24947__$1 = state_24947;
var statearr_24952_25003 = state_24947__$1;
(statearr_24952_25003[(2)] = inst_24935);

(statearr_24952_25003[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (4))){
var inst_24878 = (state_24947[(8)]);
var inst_24878__$1 = (state_24947[(2)]);
var inst_24879 = (inst_24878__$1 == null);
var state_24947__$1 = (function (){var statearr_24953 = state_24947;
(statearr_24953[(8)] = inst_24878__$1);

return statearr_24953;
})();
if(cljs.core.truth_(inst_24879)){
var statearr_24954_25004 = state_24947__$1;
(statearr_24954_25004[(1)] = (5));

} else {
var statearr_24955_25005 = state_24947__$1;
(statearr_24955_25005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (15))){
var inst_24920 = (state_24947[(2)]);
var state_24947__$1 = state_24947;
var statearr_24956_25006 = state_24947__$1;
(statearr_24956_25006[(2)] = inst_24920);

(statearr_24956_25006[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (21))){
var inst_24940 = (state_24947[(2)]);
var state_24947__$1 = (function (){var statearr_24957 = state_24947;
(statearr_24957[(9)] = inst_24940);

return statearr_24957;
})();
var statearr_24958_25007 = state_24947__$1;
(statearr_24958_25007[(2)] = null);

(statearr_24958_25007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (13))){
var inst_24902 = (state_24947[(10)]);
var inst_24904 = cljs.core.chunked_seq_QMARK_.call(null,inst_24902);
var state_24947__$1 = state_24947;
if(inst_24904){
var statearr_24959_25008 = state_24947__$1;
(statearr_24959_25008[(1)] = (16));

} else {
var statearr_24960_25009 = state_24947__$1;
(statearr_24960_25009[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (22))){
var inst_24932 = (state_24947[(2)]);
var state_24947__$1 = state_24947;
if(cljs.core.truth_(inst_24932)){
var statearr_24961_25010 = state_24947__$1;
(statearr_24961_25010[(1)] = (23));

} else {
var statearr_24962_25011 = state_24947__$1;
(statearr_24962_25011[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (6))){
var inst_24926 = (state_24947[(7)]);
var inst_24928 = (state_24947[(11)]);
var inst_24878 = (state_24947[(8)]);
var inst_24926__$1 = topic_fn.call(null,inst_24878);
var inst_24927 = cljs.core.deref.call(null,mults);
var inst_24928__$1 = cljs.core.get.call(null,inst_24927,inst_24926__$1);
var state_24947__$1 = (function (){var statearr_24963 = state_24947;
(statearr_24963[(7)] = inst_24926__$1);

(statearr_24963[(11)] = inst_24928__$1);

return statearr_24963;
})();
if(cljs.core.truth_(inst_24928__$1)){
var statearr_24964_25012 = state_24947__$1;
(statearr_24964_25012[(1)] = (19));

} else {
var statearr_24965_25013 = state_24947__$1;
(statearr_24965_25013[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (25))){
var inst_24937 = (state_24947[(2)]);
var state_24947__$1 = state_24947;
var statearr_24966_25014 = state_24947__$1;
(statearr_24966_25014[(2)] = inst_24937);

(statearr_24966_25014[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (17))){
var inst_24902 = (state_24947[(10)]);
var inst_24911 = cljs.core.first.call(null,inst_24902);
var inst_24912 = cljs.core.async.muxch_STAR_.call(null,inst_24911);
var inst_24913 = cljs.core.async.close_BANG_.call(null,inst_24912);
var inst_24914 = cljs.core.next.call(null,inst_24902);
var inst_24888 = inst_24914;
var inst_24889 = null;
var inst_24890 = (0);
var inst_24891 = (0);
var state_24947__$1 = (function (){var statearr_24967 = state_24947;
(statearr_24967[(12)] = inst_24888);

(statearr_24967[(13)] = inst_24889);

(statearr_24967[(14)] = inst_24890);

(statearr_24967[(15)] = inst_24891);

(statearr_24967[(16)] = inst_24913);

return statearr_24967;
})();
var statearr_24968_25015 = state_24947__$1;
(statearr_24968_25015[(2)] = null);

(statearr_24968_25015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (3))){
var inst_24945 = (state_24947[(2)]);
var state_24947__$1 = state_24947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24947__$1,inst_24945);
} else {
if((state_val_24948 === (12))){
var inst_24922 = (state_24947[(2)]);
var state_24947__$1 = state_24947;
var statearr_24969_25016 = state_24947__$1;
(statearr_24969_25016[(2)] = inst_24922);

(statearr_24969_25016[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (2))){
var state_24947__$1 = state_24947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24947__$1,(4),ch);
} else {
if((state_val_24948 === (23))){
var state_24947__$1 = state_24947;
var statearr_24970_25017 = state_24947__$1;
(statearr_24970_25017[(2)] = null);

(statearr_24970_25017[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (19))){
var inst_24928 = (state_24947[(11)]);
var inst_24878 = (state_24947[(8)]);
var inst_24930 = cljs.core.async.muxch_STAR_.call(null,inst_24928);
var state_24947__$1 = state_24947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24947__$1,(22),inst_24930,inst_24878);
} else {
if((state_val_24948 === (11))){
var inst_24888 = (state_24947[(12)]);
var inst_24902 = (state_24947[(10)]);
var inst_24902__$1 = cljs.core.seq.call(null,inst_24888);
var state_24947__$1 = (function (){var statearr_24971 = state_24947;
(statearr_24971[(10)] = inst_24902__$1);

return statearr_24971;
})();
if(inst_24902__$1){
var statearr_24972_25018 = state_24947__$1;
(statearr_24972_25018[(1)] = (13));

} else {
var statearr_24973_25019 = state_24947__$1;
(statearr_24973_25019[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (9))){
var inst_24924 = (state_24947[(2)]);
var state_24947__$1 = state_24947;
var statearr_24974_25020 = state_24947__$1;
(statearr_24974_25020[(2)] = inst_24924);

(statearr_24974_25020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (5))){
var inst_24885 = cljs.core.deref.call(null,mults);
var inst_24886 = cljs.core.vals.call(null,inst_24885);
var inst_24887 = cljs.core.seq.call(null,inst_24886);
var inst_24888 = inst_24887;
var inst_24889 = null;
var inst_24890 = (0);
var inst_24891 = (0);
var state_24947__$1 = (function (){var statearr_24975 = state_24947;
(statearr_24975[(12)] = inst_24888);

(statearr_24975[(13)] = inst_24889);

(statearr_24975[(14)] = inst_24890);

(statearr_24975[(15)] = inst_24891);

return statearr_24975;
})();
var statearr_24976_25021 = state_24947__$1;
(statearr_24976_25021[(2)] = null);

(statearr_24976_25021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (14))){
var state_24947__$1 = state_24947;
var statearr_24980_25022 = state_24947__$1;
(statearr_24980_25022[(2)] = null);

(statearr_24980_25022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (16))){
var inst_24902 = (state_24947[(10)]);
var inst_24906 = cljs.core.chunk_first.call(null,inst_24902);
var inst_24907 = cljs.core.chunk_rest.call(null,inst_24902);
var inst_24908 = cljs.core.count.call(null,inst_24906);
var inst_24888 = inst_24907;
var inst_24889 = inst_24906;
var inst_24890 = inst_24908;
var inst_24891 = (0);
var state_24947__$1 = (function (){var statearr_24981 = state_24947;
(statearr_24981[(12)] = inst_24888);

(statearr_24981[(13)] = inst_24889);

(statearr_24981[(14)] = inst_24890);

(statearr_24981[(15)] = inst_24891);

return statearr_24981;
})();
var statearr_24982_25023 = state_24947__$1;
(statearr_24982_25023[(2)] = null);

(statearr_24982_25023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (10))){
var inst_24888 = (state_24947[(12)]);
var inst_24889 = (state_24947[(13)]);
var inst_24890 = (state_24947[(14)]);
var inst_24891 = (state_24947[(15)]);
var inst_24896 = cljs.core._nth.call(null,inst_24889,inst_24891);
var inst_24897 = cljs.core.async.muxch_STAR_.call(null,inst_24896);
var inst_24898 = cljs.core.async.close_BANG_.call(null,inst_24897);
var inst_24899 = (inst_24891 + (1));
var tmp24977 = inst_24888;
var tmp24978 = inst_24889;
var tmp24979 = inst_24890;
var inst_24888__$1 = tmp24977;
var inst_24889__$1 = tmp24978;
var inst_24890__$1 = tmp24979;
var inst_24891__$1 = inst_24899;
var state_24947__$1 = (function (){var statearr_24983 = state_24947;
(statearr_24983[(12)] = inst_24888__$1);

(statearr_24983[(13)] = inst_24889__$1);

(statearr_24983[(14)] = inst_24890__$1);

(statearr_24983[(15)] = inst_24891__$1);

(statearr_24983[(17)] = inst_24898);

return statearr_24983;
})();
var statearr_24984_25024 = state_24947__$1;
(statearr_24984_25024[(2)] = null);

(statearr_24984_25024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (18))){
var inst_24917 = (state_24947[(2)]);
var state_24947__$1 = state_24947;
var statearr_24985_25025 = state_24947__$1;
(statearr_24985_25025[(2)] = inst_24917);

(statearr_24985_25025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (8))){
var inst_24890 = (state_24947[(14)]);
var inst_24891 = (state_24947[(15)]);
var inst_24893 = (inst_24891 < inst_24890);
var inst_24894 = inst_24893;
var state_24947__$1 = state_24947;
if(cljs.core.truth_(inst_24894)){
var statearr_24986_25026 = state_24947__$1;
(statearr_24986_25026[(1)] = (10));

} else {
var statearr_24987_25027 = state_24947__$1;
(statearr_24987_25027[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__23050__auto___24999,mults,ensure_mult,p))
;
return ((function (switch__22938__auto__,c__23050__auto___24999,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22939__auto__ = null;
var cljs$core$async$state_machine__22939__auto____0 = (function (){
var statearr_24991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24991[(0)] = cljs$core$async$state_machine__22939__auto__);

(statearr_24991[(1)] = (1));

return statearr_24991;
});
var cljs$core$async$state_machine__22939__auto____1 = (function (state_24947){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_24947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e24992){if((e24992 instanceof Object)){
var ex__22942__auto__ = e24992;
var statearr_24993_25028 = state_24947;
(statearr_24993_25028[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25029 = state_24947;
state_24947 = G__25029;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
cljs$core$async$state_machine__22939__auto__ = function(state_24947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22939__auto____1.call(this,state_24947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22939__auto____0;
cljs$core$async$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22939__auto____1;
return cljs$core$async$state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto___24999,mults,ensure_mult,p))
})();
var state__23052__auto__ = (function (){var statearr_24994 = f__23051__auto__.call(null);
(statearr_24994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto___24999);

return statearr_24994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto___24999,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args25030 = [];
var len__21264__auto___25033 = arguments.length;
var i__21265__auto___25034 = (0);
while(true){
if((i__21265__auto___25034 < len__21264__auto___25033)){
args25030.push((arguments[i__21265__auto___25034]));

var G__25035 = (i__21265__auto___25034 + (1));
i__21265__auto___25034 = G__25035;
continue;
} else {
}
break;
}

var G__25032 = args25030.length;
switch (G__25032) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25030.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args25037 = [];
var len__21264__auto___25040 = arguments.length;
var i__21265__auto___25041 = (0);
while(true){
if((i__21265__auto___25041 < len__21264__auto___25040)){
args25037.push((arguments[i__21265__auto___25041]));

var G__25042 = (i__21265__auto___25041 + (1));
i__21265__auto___25041 = G__25042;
continue;
} else {
}
break;
}

var G__25039 = args25037.length;
switch (G__25039) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25037.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args25044 = [];
var len__21264__auto___25115 = arguments.length;
var i__21265__auto___25116 = (0);
while(true){
if((i__21265__auto___25116 < len__21264__auto___25115)){
args25044.push((arguments[i__21265__auto___25116]));

var G__25117 = (i__21265__auto___25116 + (1));
i__21265__auto___25116 = G__25117;
continue;
} else {
}
break;
}

var G__25046 = args25044.length;
switch (G__25046) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25044.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23050__auto___25119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto___25119,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto___25119,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25085){
var state_val_25086 = (state_25085[(1)]);
if((state_val_25086 === (7))){
var state_25085__$1 = state_25085;
var statearr_25087_25120 = state_25085__$1;
(statearr_25087_25120[(2)] = null);

(statearr_25087_25120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (1))){
var state_25085__$1 = state_25085;
var statearr_25088_25121 = state_25085__$1;
(statearr_25088_25121[(2)] = null);

(statearr_25088_25121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (4))){
var inst_25049 = (state_25085[(7)]);
var inst_25051 = (inst_25049 < cnt);
var state_25085__$1 = state_25085;
if(cljs.core.truth_(inst_25051)){
var statearr_25089_25122 = state_25085__$1;
(statearr_25089_25122[(1)] = (6));

} else {
var statearr_25090_25123 = state_25085__$1;
(statearr_25090_25123[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (15))){
var inst_25081 = (state_25085[(2)]);
var state_25085__$1 = state_25085;
var statearr_25091_25124 = state_25085__$1;
(statearr_25091_25124[(2)] = inst_25081);

(statearr_25091_25124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (13))){
var inst_25074 = cljs.core.async.close_BANG_.call(null,out);
var state_25085__$1 = state_25085;
var statearr_25092_25125 = state_25085__$1;
(statearr_25092_25125[(2)] = inst_25074);

(statearr_25092_25125[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (6))){
var state_25085__$1 = state_25085;
var statearr_25093_25126 = state_25085__$1;
(statearr_25093_25126[(2)] = null);

(statearr_25093_25126[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (3))){
var inst_25083 = (state_25085[(2)]);
var state_25085__$1 = state_25085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25085__$1,inst_25083);
} else {
if((state_val_25086 === (12))){
var inst_25071 = (state_25085[(8)]);
var inst_25071__$1 = (state_25085[(2)]);
var inst_25072 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25071__$1);
var state_25085__$1 = (function (){var statearr_25094 = state_25085;
(statearr_25094[(8)] = inst_25071__$1);

return statearr_25094;
})();
if(cljs.core.truth_(inst_25072)){
var statearr_25095_25127 = state_25085__$1;
(statearr_25095_25127[(1)] = (13));

} else {
var statearr_25096_25128 = state_25085__$1;
(statearr_25096_25128[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (2))){
var inst_25048 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25049 = (0);
var state_25085__$1 = (function (){var statearr_25097 = state_25085;
(statearr_25097[(9)] = inst_25048);

(statearr_25097[(7)] = inst_25049);

return statearr_25097;
})();
var statearr_25098_25129 = state_25085__$1;
(statearr_25098_25129[(2)] = null);

(statearr_25098_25129[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (11))){
var inst_25049 = (state_25085[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25085,(10),Object,null,(9));
var inst_25058 = chs__$1.call(null,inst_25049);
var inst_25059 = done.call(null,inst_25049);
var inst_25060 = cljs.core.async.take_BANG_.call(null,inst_25058,inst_25059);
var state_25085__$1 = state_25085;
var statearr_25099_25130 = state_25085__$1;
(statearr_25099_25130[(2)] = inst_25060);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25085__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (9))){
var inst_25049 = (state_25085[(7)]);
var inst_25062 = (state_25085[(2)]);
var inst_25063 = (inst_25049 + (1));
var inst_25049__$1 = inst_25063;
var state_25085__$1 = (function (){var statearr_25100 = state_25085;
(statearr_25100[(7)] = inst_25049__$1);

(statearr_25100[(10)] = inst_25062);

return statearr_25100;
})();
var statearr_25101_25131 = state_25085__$1;
(statearr_25101_25131[(2)] = null);

(statearr_25101_25131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (5))){
var inst_25069 = (state_25085[(2)]);
var state_25085__$1 = (function (){var statearr_25102 = state_25085;
(statearr_25102[(11)] = inst_25069);

return statearr_25102;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25085__$1,(12),dchan);
} else {
if((state_val_25086 === (14))){
var inst_25071 = (state_25085[(8)]);
var inst_25076 = cljs.core.apply.call(null,f,inst_25071);
var state_25085__$1 = state_25085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25085__$1,(16),out,inst_25076);
} else {
if((state_val_25086 === (16))){
var inst_25078 = (state_25085[(2)]);
var state_25085__$1 = (function (){var statearr_25103 = state_25085;
(statearr_25103[(12)] = inst_25078);

return statearr_25103;
})();
var statearr_25104_25132 = state_25085__$1;
(statearr_25104_25132[(2)] = null);

(statearr_25104_25132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (10))){
var inst_25053 = (state_25085[(2)]);
var inst_25054 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25085__$1 = (function (){var statearr_25105 = state_25085;
(statearr_25105[(13)] = inst_25053);

return statearr_25105;
})();
var statearr_25106_25133 = state_25085__$1;
(statearr_25106_25133[(2)] = inst_25054);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25085__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (8))){
var inst_25067 = (state_25085[(2)]);
var state_25085__$1 = state_25085;
var statearr_25107_25134 = state_25085__$1;
(statearr_25107_25134[(2)] = inst_25067);

(statearr_25107_25134[(1)] = (5));


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
});})(c__23050__auto___25119,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22938__auto__,c__23050__auto___25119,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22939__auto__ = null;
var cljs$core$async$state_machine__22939__auto____0 = (function (){
var statearr_25111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25111[(0)] = cljs$core$async$state_machine__22939__auto__);

(statearr_25111[(1)] = (1));

return statearr_25111;
});
var cljs$core$async$state_machine__22939__auto____1 = (function (state_25085){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_25085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e25112){if((e25112 instanceof Object)){
var ex__22942__auto__ = e25112;
var statearr_25113_25135 = state_25085;
(statearr_25113_25135[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25136 = state_25085;
state_25085 = G__25136;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
cljs$core$async$state_machine__22939__auto__ = function(state_25085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22939__auto____1.call(this,state_25085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22939__auto____0;
cljs$core$async$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22939__auto____1;
return cljs$core$async$state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto___25119,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23052__auto__ = (function (){var statearr_25114 = f__23051__auto__.call(null);
(statearr_25114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto___25119);

return statearr_25114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto___25119,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args25138 = [];
var len__21264__auto___25196 = arguments.length;
var i__21265__auto___25197 = (0);
while(true){
if((i__21265__auto___25197 < len__21264__auto___25196)){
args25138.push((arguments[i__21265__auto___25197]));

var G__25198 = (i__21265__auto___25197 + (1));
i__21265__auto___25197 = G__25198;
continue;
} else {
}
break;
}

var G__25140 = args25138.length;
switch (G__25140) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25138.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23050__auto___25200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto___25200,out){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto___25200,out){
return (function (state_25172){
var state_val_25173 = (state_25172[(1)]);
if((state_val_25173 === (7))){
var inst_25152 = (state_25172[(7)]);
var inst_25151 = (state_25172[(8)]);
var inst_25151__$1 = (state_25172[(2)]);
var inst_25152__$1 = cljs.core.nth.call(null,inst_25151__$1,(0),null);
var inst_25153 = cljs.core.nth.call(null,inst_25151__$1,(1),null);
var inst_25154 = (inst_25152__$1 == null);
var state_25172__$1 = (function (){var statearr_25174 = state_25172;
(statearr_25174[(9)] = inst_25153);

(statearr_25174[(7)] = inst_25152__$1);

(statearr_25174[(8)] = inst_25151__$1);

return statearr_25174;
})();
if(cljs.core.truth_(inst_25154)){
var statearr_25175_25201 = state_25172__$1;
(statearr_25175_25201[(1)] = (8));

} else {
var statearr_25176_25202 = state_25172__$1;
(statearr_25176_25202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (1))){
var inst_25141 = cljs.core.vec.call(null,chs);
var inst_25142 = inst_25141;
var state_25172__$1 = (function (){var statearr_25177 = state_25172;
(statearr_25177[(10)] = inst_25142);

return statearr_25177;
})();
var statearr_25178_25203 = state_25172__$1;
(statearr_25178_25203[(2)] = null);

(statearr_25178_25203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (4))){
var inst_25142 = (state_25172[(10)]);
var state_25172__$1 = state_25172;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25172__$1,(7),inst_25142);
} else {
if((state_val_25173 === (6))){
var inst_25168 = (state_25172[(2)]);
var state_25172__$1 = state_25172;
var statearr_25179_25204 = state_25172__$1;
(statearr_25179_25204[(2)] = inst_25168);

(statearr_25179_25204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (3))){
var inst_25170 = (state_25172[(2)]);
var state_25172__$1 = state_25172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25172__$1,inst_25170);
} else {
if((state_val_25173 === (2))){
var inst_25142 = (state_25172[(10)]);
var inst_25144 = cljs.core.count.call(null,inst_25142);
var inst_25145 = (inst_25144 > (0));
var state_25172__$1 = state_25172;
if(cljs.core.truth_(inst_25145)){
var statearr_25181_25205 = state_25172__$1;
(statearr_25181_25205[(1)] = (4));

} else {
var statearr_25182_25206 = state_25172__$1;
(statearr_25182_25206[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (11))){
var inst_25142 = (state_25172[(10)]);
var inst_25161 = (state_25172[(2)]);
var tmp25180 = inst_25142;
var inst_25142__$1 = tmp25180;
var state_25172__$1 = (function (){var statearr_25183 = state_25172;
(statearr_25183[(10)] = inst_25142__$1);

(statearr_25183[(11)] = inst_25161);

return statearr_25183;
})();
var statearr_25184_25207 = state_25172__$1;
(statearr_25184_25207[(2)] = null);

(statearr_25184_25207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (9))){
var inst_25152 = (state_25172[(7)]);
var state_25172__$1 = state_25172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25172__$1,(11),out,inst_25152);
} else {
if((state_val_25173 === (5))){
var inst_25166 = cljs.core.async.close_BANG_.call(null,out);
var state_25172__$1 = state_25172;
var statearr_25185_25208 = state_25172__$1;
(statearr_25185_25208[(2)] = inst_25166);

(statearr_25185_25208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (10))){
var inst_25164 = (state_25172[(2)]);
var state_25172__$1 = state_25172;
var statearr_25186_25209 = state_25172__$1;
(statearr_25186_25209[(2)] = inst_25164);

(statearr_25186_25209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (8))){
var inst_25153 = (state_25172[(9)]);
var inst_25152 = (state_25172[(7)]);
var inst_25142 = (state_25172[(10)]);
var inst_25151 = (state_25172[(8)]);
var inst_25156 = (function (){var cs = inst_25142;
var vec__25147 = inst_25151;
var v = inst_25152;
var c = inst_25153;
return ((function (cs,vec__25147,v,c,inst_25153,inst_25152,inst_25142,inst_25151,state_val_25173,c__23050__auto___25200,out){
return (function (p1__25137_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25137_SHARP_);
});
;})(cs,vec__25147,v,c,inst_25153,inst_25152,inst_25142,inst_25151,state_val_25173,c__23050__auto___25200,out))
})();
var inst_25157 = cljs.core.filterv.call(null,inst_25156,inst_25142);
var inst_25142__$1 = inst_25157;
var state_25172__$1 = (function (){var statearr_25187 = state_25172;
(statearr_25187[(10)] = inst_25142__$1);

return statearr_25187;
})();
var statearr_25188_25210 = state_25172__$1;
(statearr_25188_25210[(2)] = null);

(statearr_25188_25210[(1)] = (2));


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
});})(c__23050__auto___25200,out))
;
return ((function (switch__22938__auto__,c__23050__auto___25200,out){
return (function() {
var cljs$core$async$state_machine__22939__auto__ = null;
var cljs$core$async$state_machine__22939__auto____0 = (function (){
var statearr_25192 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25192[(0)] = cljs$core$async$state_machine__22939__auto__);

(statearr_25192[(1)] = (1));

return statearr_25192;
});
var cljs$core$async$state_machine__22939__auto____1 = (function (state_25172){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_25172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e25193){if((e25193 instanceof Object)){
var ex__22942__auto__ = e25193;
var statearr_25194_25211 = state_25172;
(statearr_25194_25211[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25212 = state_25172;
state_25172 = G__25212;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
cljs$core$async$state_machine__22939__auto__ = function(state_25172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22939__auto____1.call(this,state_25172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22939__auto____0;
cljs$core$async$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22939__auto____1;
return cljs$core$async$state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto___25200,out))
})();
var state__23052__auto__ = (function (){var statearr_25195 = f__23051__auto__.call(null);
(statearr_25195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto___25200);

return statearr_25195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto___25200,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args25213 = [];
var len__21264__auto___25262 = arguments.length;
var i__21265__auto___25263 = (0);
while(true){
if((i__21265__auto___25263 < len__21264__auto___25262)){
args25213.push((arguments[i__21265__auto___25263]));

var G__25264 = (i__21265__auto___25263 + (1));
i__21265__auto___25263 = G__25264;
continue;
} else {
}
break;
}

var G__25215 = args25213.length;
switch (G__25215) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25213.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23050__auto___25266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto___25266,out){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto___25266,out){
return (function (state_25239){
var state_val_25240 = (state_25239[(1)]);
if((state_val_25240 === (7))){
var inst_25221 = (state_25239[(7)]);
var inst_25221__$1 = (state_25239[(2)]);
var inst_25222 = (inst_25221__$1 == null);
var inst_25223 = cljs.core.not.call(null,inst_25222);
var state_25239__$1 = (function (){var statearr_25241 = state_25239;
(statearr_25241[(7)] = inst_25221__$1);

return statearr_25241;
})();
if(inst_25223){
var statearr_25242_25267 = state_25239__$1;
(statearr_25242_25267[(1)] = (8));

} else {
var statearr_25243_25268 = state_25239__$1;
(statearr_25243_25268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25240 === (1))){
var inst_25216 = (0);
var state_25239__$1 = (function (){var statearr_25244 = state_25239;
(statearr_25244[(8)] = inst_25216);

return statearr_25244;
})();
var statearr_25245_25269 = state_25239__$1;
(statearr_25245_25269[(2)] = null);

(statearr_25245_25269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25240 === (4))){
var state_25239__$1 = state_25239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25239__$1,(7),ch);
} else {
if((state_val_25240 === (6))){
var inst_25234 = (state_25239[(2)]);
var state_25239__$1 = state_25239;
var statearr_25246_25270 = state_25239__$1;
(statearr_25246_25270[(2)] = inst_25234);

(statearr_25246_25270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25240 === (3))){
var inst_25236 = (state_25239[(2)]);
var inst_25237 = cljs.core.async.close_BANG_.call(null,out);
var state_25239__$1 = (function (){var statearr_25247 = state_25239;
(statearr_25247[(9)] = inst_25236);

return statearr_25247;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25239__$1,inst_25237);
} else {
if((state_val_25240 === (2))){
var inst_25216 = (state_25239[(8)]);
var inst_25218 = (inst_25216 < n);
var state_25239__$1 = state_25239;
if(cljs.core.truth_(inst_25218)){
var statearr_25248_25271 = state_25239__$1;
(statearr_25248_25271[(1)] = (4));

} else {
var statearr_25249_25272 = state_25239__$1;
(statearr_25249_25272[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25240 === (11))){
var inst_25216 = (state_25239[(8)]);
var inst_25226 = (state_25239[(2)]);
var inst_25227 = (inst_25216 + (1));
var inst_25216__$1 = inst_25227;
var state_25239__$1 = (function (){var statearr_25250 = state_25239;
(statearr_25250[(8)] = inst_25216__$1);

(statearr_25250[(10)] = inst_25226);

return statearr_25250;
})();
var statearr_25251_25273 = state_25239__$1;
(statearr_25251_25273[(2)] = null);

(statearr_25251_25273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25240 === (9))){
var state_25239__$1 = state_25239;
var statearr_25252_25274 = state_25239__$1;
(statearr_25252_25274[(2)] = null);

(statearr_25252_25274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25240 === (5))){
var state_25239__$1 = state_25239;
var statearr_25253_25275 = state_25239__$1;
(statearr_25253_25275[(2)] = null);

(statearr_25253_25275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25240 === (10))){
var inst_25231 = (state_25239[(2)]);
var state_25239__$1 = state_25239;
var statearr_25254_25276 = state_25239__$1;
(statearr_25254_25276[(2)] = inst_25231);

(statearr_25254_25276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25240 === (8))){
var inst_25221 = (state_25239[(7)]);
var state_25239__$1 = state_25239;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25239__$1,(11),out,inst_25221);
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
});})(c__23050__auto___25266,out))
;
return ((function (switch__22938__auto__,c__23050__auto___25266,out){
return (function() {
var cljs$core$async$state_machine__22939__auto__ = null;
var cljs$core$async$state_machine__22939__auto____0 = (function (){
var statearr_25258 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25258[(0)] = cljs$core$async$state_machine__22939__auto__);

(statearr_25258[(1)] = (1));

return statearr_25258;
});
var cljs$core$async$state_machine__22939__auto____1 = (function (state_25239){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_25239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e25259){if((e25259 instanceof Object)){
var ex__22942__auto__ = e25259;
var statearr_25260_25277 = state_25239;
(statearr_25260_25277[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25278 = state_25239;
state_25239 = G__25278;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
cljs$core$async$state_machine__22939__auto__ = function(state_25239){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22939__auto____1.call(this,state_25239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22939__auto____0;
cljs$core$async$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22939__auto____1;
return cljs$core$async$state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto___25266,out))
})();
var state__23052__auto__ = (function (){var statearr_25261 = f__23051__auto__.call(null);
(statearr_25261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto___25266);

return statearr_25261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto___25266,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25286 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25286 = (function (map_LT_,f,ch,meta25287){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25287 = meta25287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25288,meta25287__$1){
var self__ = this;
var _25288__$1 = this;
return (new cljs.core.async.t_cljs$core$async25286(self__.map_LT_,self__.f,self__.ch,meta25287__$1));
});

cljs.core.async.t_cljs$core$async25286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25288){
var self__ = this;
var _25288__$1 = this;
return self__.meta25287;
});

cljs.core.async.t_cljs$core$async25286.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25286.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25286.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25286.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25286.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25289 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25289 = (function (map_LT_,f,ch,meta25287,_,fn1,meta25290){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25287 = meta25287;
this._ = _;
this.fn1 = fn1;
this.meta25290 = meta25290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25291,meta25290__$1){
var self__ = this;
var _25291__$1 = this;
return (new cljs.core.async.t_cljs$core$async25289(self__.map_LT_,self__.f,self__.ch,self__.meta25287,self__._,self__.fn1,meta25290__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25289.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25291){
var self__ = this;
var _25291__$1 = this;
return self__.meta25290;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25289.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25289.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25289.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25289.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25279_SHARP_){
return f1.call(null,(((p1__25279_SHARP_ == null))?null:self__.f.call(null,p1__25279_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25289.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25287","meta25287",-187765557,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25286","cljs.core.async/t_cljs$core$async25286",-436727068,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25290","meta25290",992774325,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25289.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25289";

cljs.core.async.t_cljs$core$async25289.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20795__auto__,writer__20796__auto__,opt__20797__auto__){
return cljs.core._write.call(null,writer__20796__auto__,"cljs.core.async/t_cljs$core$async25289");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25289 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25289(map_LT___$1,f__$1,ch__$1,meta25287__$1,___$2,fn1__$1,meta25290){
return (new cljs.core.async.t_cljs$core$async25289(map_LT___$1,f__$1,ch__$1,meta25287__$1,___$2,fn1__$1,meta25290));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25289(self__.map_LT_,self__.f,self__.ch,self__.meta25287,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__20177__auto__ = ret;
if(cljs.core.truth_(and__20177__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20177__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25286.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25286.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25287","meta25287",-187765557,null)], null);
});

cljs.core.async.t_cljs$core$async25286.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25286";

cljs.core.async.t_cljs$core$async25286.cljs$lang$ctorPrWriter = (function (this__20795__auto__,writer__20796__auto__,opt__20797__auto__){
return cljs.core._write.call(null,writer__20796__auto__,"cljs.core.async/t_cljs$core$async25286");
});

cljs.core.async.__GT_t_cljs$core$async25286 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25286(map_LT___$1,f__$1,ch__$1,meta25287){
return (new cljs.core.async.t_cljs$core$async25286(map_LT___$1,f__$1,ch__$1,meta25287));
});

}

return (new cljs.core.async.t_cljs$core$async25286(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25295 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25295 = (function (map_GT_,f,ch,meta25296){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25296 = meta25296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25297,meta25296__$1){
var self__ = this;
var _25297__$1 = this;
return (new cljs.core.async.t_cljs$core$async25295(self__.map_GT_,self__.f,self__.ch,meta25296__$1));
});

cljs.core.async.t_cljs$core$async25295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25297){
var self__ = this;
var _25297__$1 = this;
return self__.meta25296;
});

cljs.core.async.t_cljs$core$async25295.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25295.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25295.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25295.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25295.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25295.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25296","meta25296",1927192831,null)], null);
});

cljs.core.async.t_cljs$core$async25295.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25295";

cljs.core.async.t_cljs$core$async25295.cljs$lang$ctorPrWriter = (function (this__20795__auto__,writer__20796__auto__,opt__20797__auto__){
return cljs.core._write.call(null,writer__20796__auto__,"cljs.core.async/t_cljs$core$async25295");
});

cljs.core.async.__GT_t_cljs$core$async25295 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25295(map_GT___$1,f__$1,ch__$1,meta25296){
return (new cljs.core.async.t_cljs$core$async25295(map_GT___$1,f__$1,ch__$1,meta25296));
});

}

return (new cljs.core.async.t_cljs$core$async25295(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25301 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25301 = (function (filter_GT_,p,ch,meta25302){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25302 = meta25302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25303,meta25302__$1){
var self__ = this;
var _25303__$1 = this;
return (new cljs.core.async.t_cljs$core$async25301(self__.filter_GT_,self__.p,self__.ch,meta25302__$1));
});

cljs.core.async.t_cljs$core$async25301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25303){
var self__ = this;
var _25303__$1 = this;
return self__.meta25302;
});

cljs.core.async.t_cljs$core$async25301.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25301.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25301.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25301.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25301.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25301.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25301.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25302","meta25302",-1512655167,null)], null);
});

cljs.core.async.t_cljs$core$async25301.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25301.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25301";

cljs.core.async.t_cljs$core$async25301.cljs$lang$ctorPrWriter = (function (this__20795__auto__,writer__20796__auto__,opt__20797__auto__){
return cljs.core._write.call(null,writer__20796__auto__,"cljs.core.async/t_cljs$core$async25301");
});

cljs.core.async.__GT_t_cljs$core$async25301 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25301(filter_GT___$1,p__$1,ch__$1,meta25302){
return (new cljs.core.async.t_cljs$core$async25301(filter_GT___$1,p__$1,ch__$1,meta25302));
});

}

return (new cljs.core.async.t_cljs$core$async25301(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args25304 = [];
var len__21264__auto___25348 = arguments.length;
var i__21265__auto___25349 = (0);
while(true){
if((i__21265__auto___25349 < len__21264__auto___25348)){
args25304.push((arguments[i__21265__auto___25349]));

var G__25350 = (i__21265__auto___25349 + (1));
i__21265__auto___25349 = G__25350;
continue;
} else {
}
break;
}

var G__25306 = args25304.length;
switch (G__25306) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25304.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23050__auto___25352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto___25352,out){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto___25352,out){
return (function (state_25327){
var state_val_25328 = (state_25327[(1)]);
if((state_val_25328 === (7))){
var inst_25323 = (state_25327[(2)]);
var state_25327__$1 = state_25327;
var statearr_25329_25353 = state_25327__$1;
(statearr_25329_25353[(2)] = inst_25323);

(statearr_25329_25353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25328 === (1))){
var state_25327__$1 = state_25327;
var statearr_25330_25354 = state_25327__$1;
(statearr_25330_25354[(2)] = null);

(statearr_25330_25354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25328 === (4))){
var inst_25309 = (state_25327[(7)]);
var inst_25309__$1 = (state_25327[(2)]);
var inst_25310 = (inst_25309__$1 == null);
var state_25327__$1 = (function (){var statearr_25331 = state_25327;
(statearr_25331[(7)] = inst_25309__$1);

return statearr_25331;
})();
if(cljs.core.truth_(inst_25310)){
var statearr_25332_25355 = state_25327__$1;
(statearr_25332_25355[(1)] = (5));

} else {
var statearr_25333_25356 = state_25327__$1;
(statearr_25333_25356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25328 === (6))){
var inst_25309 = (state_25327[(7)]);
var inst_25314 = p.call(null,inst_25309);
var state_25327__$1 = state_25327;
if(cljs.core.truth_(inst_25314)){
var statearr_25334_25357 = state_25327__$1;
(statearr_25334_25357[(1)] = (8));

} else {
var statearr_25335_25358 = state_25327__$1;
(statearr_25335_25358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25328 === (3))){
var inst_25325 = (state_25327[(2)]);
var state_25327__$1 = state_25327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25327__$1,inst_25325);
} else {
if((state_val_25328 === (2))){
var state_25327__$1 = state_25327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25327__$1,(4),ch);
} else {
if((state_val_25328 === (11))){
var inst_25317 = (state_25327[(2)]);
var state_25327__$1 = state_25327;
var statearr_25336_25359 = state_25327__$1;
(statearr_25336_25359[(2)] = inst_25317);

(statearr_25336_25359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25328 === (9))){
var state_25327__$1 = state_25327;
var statearr_25337_25360 = state_25327__$1;
(statearr_25337_25360[(2)] = null);

(statearr_25337_25360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25328 === (5))){
var inst_25312 = cljs.core.async.close_BANG_.call(null,out);
var state_25327__$1 = state_25327;
var statearr_25338_25361 = state_25327__$1;
(statearr_25338_25361[(2)] = inst_25312);

(statearr_25338_25361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25328 === (10))){
var inst_25320 = (state_25327[(2)]);
var state_25327__$1 = (function (){var statearr_25339 = state_25327;
(statearr_25339[(8)] = inst_25320);

return statearr_25339;
})();
var statearr_25340_25362 = state_25327__$1;
(statearr_25340_25362[(2)] = null);

(statearr_25340_25362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25328 === (8))){
var inst_25309 = (state_25327[(7)]);
var state_25327__$1 = state_25327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25327__$1,(11),out,inst_25309);
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
});})(c__23050__auto___25352,out))
;
return ((function (switch__22938__auto__,c__23050__auto___25352,out){
return (function() {
var cljs$core$async$state_machine__22939__auto__ = null;
var cljs$core$async$state_machine__22939__auto____0 = (function (){
var statearr_25344 = [null,null,null,null,null,null,null,null,null];
(statearr_25344[(0)] = cljs$core$async$state_machine__22939__auto__);

(statearr_25344[(1)] = (1));

return statearr_25344;
});
var cljs$core$async$state_machine__22939__auto____1 = (function (state_25327){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_25327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e25345){if((e25345 instanceof Object)){
var ex__22942__auto__ = e25345;
var statearr_25346_25363 = state_25327;
(statearr_25346_25363[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25364 = state_25327;
state_25327 = G__25364;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
cljs$core$async$state_machine__22939__auto__ = function(state_25327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22939__auto____1.call(this,state_25327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22939__auto____0;
cljs$core$async$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22939__auto____1;
return cljs$core$async$state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto___25352,out))
})();
var state__23052__auto__ = (function (){var statearr_25347 = f__23051__auto__.call(null);
(statearr_25347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto___25352);

return statearr_25347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto___25352,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25365 = [];
var len__21264__auto___25368 = arguments.length;
var i__21265__auto___25369 = (0);
while(true){
if((i__21265__auto___25369 < len__21264__auto___25368)){
args25365.push((arguments[i__21265__auto___25369]));

var G__25370 = (i__21265__auto___25369 + (1));
i__21265__auto___25369 = G__25370;
continue;
} else {
}
break;
}

var G__25367 = args25365.length;
switch (G__25367) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25365.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto__){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto__){
return (function (state_25537){
var state_val_25538 = (state_25537[(1)]);
if((state_val_25538 === (7))){
var inst_25533 = (state_25537[(2)]);
var state_25537__$1 = state_25537;
var statearr_25539_25580 = state_25537__$1;
(statearr_25539_25580[(2)] = inst_25533);

(statearr_25539_25580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (20))){
var inst_25503 = (state_25537[(7)]);
var inst_25514 = (state_25537[(2)]);
var inst_25515 = cljs.core.next.call(null,inst_25503);
var inst_25489 = inst_25515;
var inst_25490 = null;
var inst_25491 = (0);
var inst_25492 = (0);
var state_25537__$1 = (function (){var statearr_25540 = state_25537;
(statearr_25540[(8)] = inst_25491);

(statearr_25540[(9)] = inst_25490);

(statearr_25540[(10)] = inst_25489);

(statearr_25540[(11)] = inst_25492);

(statearr_25540[(12)] = inst_25514);

return statearr_25540;
})();
var statearr_25541_25581 = state_25537__$1;
(statearr_25541_25581[(2)] = null);

(statearr_25541_25581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (1))){
var state_25537__$1 = state_25537;
var statearr_25542_25582 = state_25537__$1;
(statearr_25542_25582[(2)] = null);

(statearr_25542_25582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (4))){
var inst_25478 = (state_25537[(13)]);
var inst_25478__$1 = (state_25537[(2)]);
var inst_25479 = (inst_25478__$1 == null);
var state_25537__$1 = (function (){var statearr_25543 = state_25537;
(statearr_25543[(13)] = inst_25478__$1);

return statearr_25543;
})();
if(cljs.core.truth_(inst_25479)){
var statearr_25544_25583 = state_25537__$1;
(statearr_25544_25583[(1)] = (5));

} else {
var statearr_25545_25584 = state_25537__$1;
(statearr_25545_25584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (15))){
var state_25537__$1 = state_25537;
var statearr_25549_25585 = state_25537__$1;
(statearr_25549_25585[(2)] = null);

(statearr_25549_25585[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (21))){
var state_25537__$1 = state_25537;
var statearr_25550_25586 = state_25537__$1;
(statearr_25550_25586[(2)] = null);

(statearr_25550_25586[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (13))){
var inst_25491 = (state_25537[(8)]);
var inst_25490 = (state_25537[(9)]);
var inst_25489 = (state_25537[(10)]);
var inst_25492 = (state_25537[(11)]);
var inst_25499 = (state_25537[(2)]);
var inst_25500 = (inst_25492 + (1));
var tmp25546 = inst_25491;
var tmp25547 = inst_25490;
var tmp25548 = inst_25489;
var inst_25489__$1 = tmp25548;
var inst_25490__$1 = tmp25547;
var inst_25491__$1 = tmp25546;
var inst_25492__$1 = inst_25500;
var state_25537__$1 = (function (){var statearr_25551 = state_25537;
(statearr_25551[(14)] = inst_25499);

(statearr_25551[(8)] = inst_25491__$1);

(statearr_25551[(9)] = inst_25490__$1);

(statearr_25551[(10)] = inst_25489__$1);

(statearr_25551[(11)] = inst_25492__$1);

return statearr_25551;
})();
var statearr_25552_25587 = state_25537__$1;
(statearr_25552_25587[(2)] = null);

(statearr_25552_25587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (22))){
var state_25537__$1 = state_25537;
var statearr_25553_25588 = state_25537__$1;
(statearr_25553_25588[(2)] = null);

(statearr_25553_25588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (6))){
var inst_25478 = (state_25537[(13)]);
var inst_25487 = f.call(null,inst_25478);
var inst_25488 = cljs.core.seq.call(null,inst_25487);
var inst_25489 = inst_25488;
var inst_25490 = null;
var inst_25491 = (0);
var inst_25492 = (0);
var state_25537__$1 = (function (){var statearr_25554 = state_25537;
(statearr_25554[(8)] = inst_25491);

(statearr_25554[(9)] = inst_25490);

(statearr_25554[(10)] = inst_25489);

(statearr_25554[(11)] = inst_25492);

return statearr_25554;
})();
var statearr_25555_25589 = state_25537__$1;
(statearr_25555_25589[(2)] = null);

(statearr_25555_25589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (17))){
var inst_25503 = (state_25537[(7)]);
var inst_25507 = cljs.core.chunk_first.call(null,inst_25503);
var inst_25508 = cljs.core.chunk_rest.call(null,inst_25503);
var inst_25509 = cljs.core.count.call(null,inst_25507);
var inst_25489 = inst_25508;
var inst_25490 = inst_25507;
var inst_25491 = inst_25509;
var inst_25492 = (0);
var state_25537__$1 = (function (){var statearr_25556 = state_25537;
(statearr_25556[(8)] = inst_25491);

(statearr_25556[(9)] = inst_25490);

(statearr_25556[(10)] = inst_25489);

(statearr_25556[(11)] = inst_25492);

return statearr_25556;
})();
var statearr_25557_25590 = state_25537__$1;
(statearr_25557_25590[(2)] = null);

(statearr_25557_25590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (3))){
var inst_25535 = (state_25537[(2)]);
var state_25537__$1 = state_25537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25537__$1,inst_25535);
} else {
if((state_val_25538 === (12))){
var inst_25523 = (state_25537[(2)]);
var state_25537__$1 = state_25537;
var statearr_25558_25591 = state_25537__$1;
(statearr_25558_25591[(2)] = inst_25523);

(statearr_25558_25591[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (2))){
var state_25537__$1 = state_25537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25537__$1,(4),in$);
} else {
if((state_val_25538 === (23))){
var inst_25531 = (state_25537[(2)]);
var state_25537__$1 = state_25537;
var statearr_25559_25592 = state_25537__$1;
(statearr_25559_25592[(2)] = inst_25531);

(statearr_25559_25592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (19))){
var inst_25518 = (state_25537[(2)]);
var state_25537__$1 = state_25537;
var statearr_25560_25593 = state_25537__$1;
(statearr_25560_25593[(2)] = inst_25518);

(statearr_25560_25593[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (11))){
var inst_25503 = (state_25537[(7)]);
var inst_25489 = (state_25537[(10)]);
var inst_25503__$1 = cljs.core.seq.call(null,inst_25489);
var state_25537__$1 = (function (){var statearr_25561 = state_25537;
(statearr_25561[(7)] = inst_25503__$1);

return statearr_25561;
})();
if(inst_25503__$1){
var statearr_25562_25594 = state_25537__$1;
(statearr_25562_25594[(1)] = (14));

} else {
var statearr_25563_25595 = state_25537__$1;
(statearr_25563_25595[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (9))){
var inst_25525 = (state_25537[(2)]);
var inst_25526 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25537__$1 = (function (){var statearr_25564 = state_25537;
(statearr_25564[(15)] = inst_25525);

return statearr_25564;
})();
if(cljs.core.truth_(inst_25526)){
var statearr_25565_25596 = state_25537__$1;
(statearr_25565_25596[(1)] = (21));

} else {
var statearr_25566_25597 = state_25537__$1;
(statearr_25566_25597[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (5))){
var inst_25481 = cljs.core.async.close_BANG_.call(null,out);
var state_25537__$1 = state_25537;
var statearr_25567_25598 = state_25537__$1;
(statearr_25567_25598[(2)] = inst_25481);

(statearr_25567_25598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (14))){
var inst_25503 = (state_25537[(7)]);
var inst_25505 = cljs.core.chunked_seq_QMARK_.call(null,inst_25503);
var state_25537__$1 = state_25537;
if(inst_25505){
var statearr_25568_25599 = state_25537__$1;
(statearr_25568_25599[(1)] = (17));

} else {
var statearr_25569_25600 = state_25537__$1;
(statearr_25569_25600[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (16))){
var inst_25521 = (state_25537[(2)]);
var state_25537__$1 = state_25537;
var statearr_25570_25601 = state_25537__$1;
(statearr_25570_25601[(2)] = inst_25521);

(statearr_25570_25601[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (10))){
var inst_25490 = (state_25537[(9)]);
var inst_25492 = (state_25537[(11)]);
var inst_25497 = cljs.core._nth.call(null,inst_25490,inst_25492);
var state_25537__$1 = state_25537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25537__$1,(13),out,inst_25497);
} else {
if((state_val_25538 === (18))){
var inst_25503 = (state_25537[(7)]);
var inst_25512 = cljs.core.first.call(null,inst_25503);
var state_25537__$1 = state_25537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25537__$1,(20),out,inst_25512);
} else {
if((state_val_25538 === (8))){
var inst_25491 = (state_25537[(8)]);
var inst_25492 = (state_25537[(11)]);
var inst_25494 = (inst_25492 < inst_25491);
var inst_25495 = inst_25494;
var state_25537__$1 = state_25537;
if(cljs.core.truth_(inst_25495)){
var statearr_25571_25602 = state_25537__$1;
(statearr_25571_25602[(1)] = (10));

} else {
var statearr_25572_25603 = state_25537__$1;
(statearr_25572_25603[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__22939__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22939__auto____0 = (function (){
var statearr_25576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25576[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22939__auto__);

(statearr_25576[(1)] = (1));

return statearr_25576;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22939__auto____1 = (function (state_25537){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_25537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e25577){if((e25577 instanceof Object)){
var ex__22942__auto__ = e25577;
var statearr_25578_25604 = state_25537;
(statearr_25578_25604[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25605 = state_25537;
state_25537 = G__25605;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22939__auto__ = function(state_25537){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22939__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22939__auto____1.call(this,state_25537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22939__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22939__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto__))
})();
var state__23052__auto__ = (function (){var statearr_25579 = f__23051__auto__.call(null);
(statearr_25579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto__);

return statearr_25579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto__))
);

return c__23050__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25606 = [];
var len__21264__auto___25609 = arguments.length;
var i__21265__auto___25610 = (0);
while(true){
if((i__21265__auto___25610 < len__21264__auto___25609)){
args25606.push((arguments[i__21265__auto___25610]));

var G__25611 = (i__21265__auto___25610 + (1));
i__21265__auto___25610 = G__25611;
continue;
} else {
}
break;
}

var G__25608 = args25606.length;
switch (G__25608) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25606.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args25613 = [];
var len__21264__auto___25616 = arguments.length;
var i__21265__auto___25617 = (0);
while(true){
if((i__21265__auto___25617 < len__21264__auto___25616)){
args25613.push((arguments[i__21265__auto___25617]));

var G__25618 = (i__21265__auto___25617 + (1));
i__21265__auto___25617 = G__25618;
continue;
} else {
}
break;
}

var G__25615 = args25613.length;
switch (G__25615) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25613.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args25620 = [];
var len__21264__auto___25671 = arguments.length;
var i__21265__auto___25672 = (0);
while(true){
if((i__21265__auto___25672 < len__21264__auto___25671)){
args25620.push((arguments[i__21265__auto___25672]));

var G__25673 = (i__21265__auto___25672 + (1));
i__21265__auto___25672 = G__25673;
continue;
} else {
}
break;
}

var G__25622 = args25620.length;
switch (G__25622) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25620.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23050__auto___25675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto___25675,out){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto___25675,out){
return (function (state_25646){
var state_val_25647 = (state_25646[(1)]);
if((state_val_25647 === (7))){
var inst_25641 = (state_25646[(2)]);
var state_25646__$1 = state_25646;
var statearr_25648_25676 = state_25646__$1;
(statearr_25648_25676[(2)] = inst_25641);

(statearr_25648_25676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (1))){
var inst_25623 = null;
var state_25646__$1 = (function (){var statearr_25649 = state_25646;
(statearr_25649[(7)] = inst_25623);

return statearr_25649;
})();
var statearr_25650_25677 = state_25646__$1;
(statearr_25650_25677[(2)] = null);

(statearr_25650_25677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (4))){
var inst_25626 = (state_25646[(8)]);
var inst_25626__$1 = (state_25646[(2)]);
var inst_25627 = (inst_25626__$1 == null);
var inst_25628 = cljs.core.not.call(null,inst_25627);
var state_25646__$1 = (function (){var statearr_25651 = state_25646;
(statearr_25651[(8)] = inst_25626__$1);

return statearr_25651;
})();
if(inst_25628){
var statearr_25652_25678 = state_25646__$1;
(statearr_25652_25678[(1)] = (5));

} else {
var statearr_25653_25679 = state_25646__$1;
(statearr_25653_25679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (6))){
var state_25646__$1 = state_25646;
var statearr_25654_25680 = state_25646__$1;
(statearr_25654_25680[(2)] = null);

(statearr_25654_25680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (3))){
var inst_25643 = (state_25646[(2)]);
var inst_25644 = cljs.core.async.close_BANG_.call(null,out);
var state_25646__$1 = (function (){var statearr_25655 = state_25646;
(statearr_25655[(9)] = inst_25643);

return statearr_25655;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25646__$1,inst_25644);
} else {
if((state_val_25647 === (2))){
var state_25646__$1 = state_25646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25646__$1,(4),ch);
} else {
if((state_val_25647 === (11))){
var inst_25626 = (state_25646[(8)]);
var inst_25635 = (state_25646[(2)]);
var inst_25623 = inst_25626;
var state_25646__$1 = (function (){var statearr_25656 = state_25646;
(statearr_25656[(7)] = inst_25623);

(statearr_25656[(10)] = inst_25635);

return statearr_25656;
})();
var statearr_25657_25681 = state_25646__$1;
(statearr_25657_25681[(2)] = null);

(statearr_25657_25681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (9))){
var inst_25626 = (state_25646[(8)]);
var state_25646__$1 = state_25646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25646__$1,(11),out,inst_25626);
} else {
if((state_val_25647 === (5))){
var inst_25626 = (state_25646[(8)]);
var inst_25623 = (state_25646[(7)]);
var inst_25630 = cljs.core._EQ_.call(null,inst_25626,inst_25623);
var state_25646__$1 = state_25646;
if(inst_25630){
var statearr_25659_25682 = state_25646__$1;
(statearr_25659_25682[(1)] = (8));

} else {
var statearr_25660_25683 = state_25646__$1;
(statearr_25660_25683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (10))){
var inst_25638 = (state_25646[(2)]);
var state_25646__$1 = state_25646;
var statearr_25661_25684 = state_25646__$1;
(statearr_25661_25684[(2)] = inst_25638);

(statearr_25661_25684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (8))){
var inst_25623 = (state_25646[(7)]);
var tmp25658 = inst_25623;
var inst_25623__$1 = tmp25658;
var state_25646__$1 = (function (){var statearr_25662 = state_25646;
(statearr_25662[(7)] = inst_25623__$1);

return statearr_25662;
})();
var statearr_25663_25685 = state_25646__$1;
(statearr_25663_25685[(2)] = null);

(statearr_25663_25685[(1)] = (2));


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
});})(c__23050__auto___25675,out))
;
return ((function (switch__22938__auto__,c__23050__auto___25675,out){
return (function() {
var cljs$core$async$state_machine__22939__auto__ = null;
var cljs$core$async$state_machine__22939__auto____0 = (function (){
var statearr_25667 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25667[(0)] = cljs$core$async$state_machine__22939__auto__);

(statearr_25667[(1)] = (1));

return statearr_25667;
});
var cljs$core$async$state_machine__22939__auto____1 = (function (state_25646){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_25646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e25668){if((e25668 instanceof Object)){
var ex__22942__auto__ = e25668;
var statearr_25669_25686 = state_25646;
(statearr_25669_25686[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25687 = state_25646;
state_25646 = G__25687;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
cljs$core$async$state_machine__22939__auto__ = function(state_25646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22939__auto____1.call(this,state_25646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22939__auto____0;
cljs$core$async$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22939__auto____1;
return cljs$core$async$state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto___25675,out))
})();
var state__23052__auto__ = (function (){var statearr_25670 = f__23051__auto__.call(null);
(statearr_25670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto___25675);

return statearr_25670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto___25675,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25688 = [];
var len__21264__auto___25758 = arguments.length;
var i__21265__auto___25759 = (0);
while(true){
if((i__21265__auto___25759 < len__21264__auto___25758)){
args25688.push((arguments[i__21265__auto___25759]));

var G__25760 = (i__21265__auto___25759 + (1));
i__21265__auto___25759 = G__25760;
continue;
} else {
}
break;
}

var G__25690 = args25688.length;
switch (G__25690) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25688.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23050__auto___25762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto___25762,out){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto___25762,out){
return (function (state_25728){
var state_val_25729 = (state_25728[(1)]);
if((state_val_25729 === (7))){
var inst_25724 = (state_25728[(2)]);
var state_25728__$1 = state_25728;
var statearr_25730_25763 = state_25728__$1;
(statearr_25730_25763[(2)] = inst_25724);

(statearr_25730_25763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (1))){
var inst_25691 = (new Array(n));
var inst_25692 = inst_25691;
var inst_25693 = (0);
var state_25728__$1 = (function (){var statearr_25731 = state_25728;
(statearr_25731[(7)] = inst_25693);

(statearr_25731[(8)] = inst_25692);

return statearr_25731;
})();
var statearr_25732_25764 = state_25728__$1;
(statearr_25732_25764[(2)] = null);

(statearr_25732_25764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (4))){
var inst_25696 = (state_25728[(9)]);
var inst_25696__$1 = (state_25728[(2)]);
var inst_25697 = (inst_25696__$1 == null);
var inst_25698 = cljs.core.not.call(null,inst_25697);
var state_25728__$1 = (function (){var statearr_25733 = state_25728;
(statearr_25733[(9)] = inst_25696__$1);

return statearr_25733;
})();
if(inst_25698){
var statearr_25734_25765 = state_25728__$1;
(statearr_25734_25765[(1)] = (5));

} else {
var statearr_25735_25766 = state_25728__$1;
(statearr_25735_25766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (15))){
var inst_25718 = (state_25728[(2)]);
var state_25728__$1 = state_25728;
var statearr_25736_25767 = state_25728__$1;
(statearr_25736_25767[(2)] = inst_25718);

(statearr_25736_25767[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (13))){
var state_25728__$1 = state_25728;
var statearr_25737_25768 = state_25728__$1;
(statearr_25737_25768[(2)] = null);

(statearr_25737_25768[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (6))){
var inst_25693 = (state_25728[(7)]);
var inst_25714 = (inst_25693 > (0));
var state_25728__$1 = state_25728;
if(cljs.core.truth_(inst_25714)){
var statearr_25738_25769 = state_25728__$1;
(statearr_25738_25769[(1)] = (12));

} else {
var statearr_25739_25770 = state_25728__$1;
(statearr_25739_25770[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (3))){
var inst_25726 = (state_25728[(2)]);
var state_25728__$1 = state_25728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25728__$1,inst_25726);
} else {
if((state_val_25729 === (12))){
var inst_25692 = (state_25728[(8)]);
var inst_25716 = cljs.core.vec.call(null,inst_25692);
var state_25728__$1 = state_25728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25728__$1,(15),out,inst_25716);
} else {
if((state_val_25729 === (2))){
var state_25728__$1 = state_25728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25728__$1,(4),ch);
} else {
if((state_val_25729 === (11))){
var inst_25708 = (state_25728[(2)]);
var inst_25709 = (new Array(n));
var inst_25692 = inst_25709;
var inst_25693 = (0);
var state_25728__$1 = (function (){var statearr_25740 = state_25728;
(statearr_25740[(7)] = inst_25693);

(statearr_25740[(8)] = inst_25692);

(statearr_25740[(10)] = inst_25708);

return statearr_25740;
})();
var statearr_25741_25771 = state_25728__$1;
(statearr_25741_25771[(2)] = null);

(statearr_25741_25771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (9))){
var inst_25692 = (state_25728[(8)]);
var inst_25706 = cljs.core.vec.call(null,inst_25692);
var state_25728__$1 = state_25728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25728__$1,(11),out,inst_25706);
} else {
if((state_val_25729 === (5))){
var inst_25693 = (state_25728[(7)]);
var inst_25692 = (state_25728[(8)]);
var inst_25701 = (state_25728[(11)]);
var inst_25696 = (state_25728[(9)]);
var inst_25700 = (inst_25692[inst_25693] = inst_25696);
var inst_25701__$1 = (inst_25693 + (1));
var inst_25702 = (inst_25701__$1 < n);
var state_25728__$1 = (function (){var statearr_25742 = state_25728;
(statearr_25742[(11)] = inst_25701__$1);

(statearr_25742[(12)] = inst_25700);

return statearr_25742;
})();
if(cljs.core.truth_(inst_25702)){
var statearr_25743_25772 = state_25728__$1;
(statearr_25743_25772[(1)] = (8));

} else {
var statearr_25744_25773 = state_25728__$1;
(statearr_25744_25773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (14))){
var inst_25721 = (state_25728[(2)]);
var inst_25722 = cljs.core.async.close_BANG_.call(null,out);
var state_25728__$1 = (function (){var statearr_25746 = state_25728;
(statearr_25746[(13)] = inst_25721);

return statearr_25746;
})();
var statearr_25747_25774 = state_25728__$1;
(statearr_25747_25774[(2)] = inst_25722);

(statearr_25747_25774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (10))){
var inst_25712 = (state_25728[(2)]);
var state_25728__$1 = state_25728;
var statearr_25748_25775 = state_25728__$1;
(statearr_25748_25775[(2)] = inst_25712);

(statearr_25748_25775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (8))){
var inst_25692 = (state_25728[(8)]);
var inst_25701 = (state_25728[(11)]);
var tmp25745 = inst_25692;
var inst_25692__$1 = tmp25745;
var inst_25693 = inst_25701;
var state_25728__$1 = (function (){var statearr_25749 = state_25728;
(statearr_25749[(7)] = inst_25693);

(statearr_25749[(8)] = inst_25692__$1);

return statearr_25749;
})();
var statearr_25750_25776 = state_25728__$1;
(statearr_25750_25776[(2)] = null);

(statearr_25750_25776[(1)] = (2));


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
});})(c__23050__auto___25762,out))
;
return ((function (switch__22938__auto__,c__23050__auto___25762,out){
return (function() {
var cljs$core$async$state_machine__22939__auto__ = null;
var cljs$core$async$state_machine__22939__auto____0 = (function (){
var statearr_25754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25754[(0)] = cljs$core$async$state_machine__22939__auto__);

(statearr_25754[(1)] = (1));

return statearr_25754;
});
var cljs$core$async$state_machine__22939__auto____1 = (function (state_25728){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_25728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e25755){if((e25755 instanceof Object)){
var ex__22942__auto__ = e25755;
var statearr_25756_25777 = state_25728;
(statearr_25756_25777[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25778 = state_25728;
state_25728 = G__25778;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
cljs$core$async$state_machine__22939__auto__ = function(state_25728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22939__auto____1.call(this,state_25728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22939__auto____0;
cljs$core$async$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22939__auto____1;
return cljs$core$async$state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto___25762,out))
})();
var state__23052__auto__ = (function (){var statearr_25757 = f__23051__auto__.call(null);
(statearr_25757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto___25762);

return statearr_25757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto___25762,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25779 = [];
var len__21264__auto___25853 = arguments.length;
var i__21265__auto___25854 = (0);
while(true){
if((i__21265__auto___25854 < len__21264__auto___25853)){
args25779.push((arguments[i__21265__auto___25854]));

var G__25855 = (i__21265__auto___25854 + (1));
i__21265__auto___25854 = G__25855;
continue;
} else {
}
break;
}

var G__25781 = args25779.length;
switch (G__25781) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25779.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23050__auto___25857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto___25857,out){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto___25857,out){
return (function (state_25823){
var state_val_25824 = (state_25823[(1)]);
if((state_val_25824 === (7))){
var inst_25819 = (state_25823[(2)]);
var state_25823__$1 = state_25823;
var statearr_25825_25858 = state_25823__$1;
(statearr_25825_25858[(2)] = inst_25819);

(statearr_25825_25858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (1))){
var inst_25782 = [];
var inst_25783 = inst_25782;
var inst_25784 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25823__$1 = (function (){var statearr_25826 = state_25823;
(statearr_25826[(7)] = inst_25783);

(statearr_25826[(8)] = inst_25784);

return statearr_25826;
})();
var statearr_25827_25859 = state_25823__$1;
(statearr_25827_25859[(2)] = null);

(statearr_25827_25859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (4))){
var inst_25787 = (state_25823[(9)]);
var inst_25787__$1 = (state_25823[(2)]);
var inst_25788 = (inst_25787__$1 == null);
var inst_25789 = cljs.core.not.call(null,inst_25788);
var state_25823__$1 = (function (){var statearr_25828 = state_25823;
(statearr_25828[(9)] = inst_25787__$1);

return statearr_25828;
})();
if(inst_25789){
var statearr_25829_25860 = state_25823__$1;
(statearr_25829_25860[(1)] = (5));

} else {
var statearr_25830_25861 = state_25823__$1;
(statearr_25830_25861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (15))){
var inst_25813 = (state_25823[(2)]);
var state_25823__$1 = state_25823;
var statearr_25831_25862 = state_25823__$1;
(statearr_25831_25862[(2)] = inst_25813);

(statearr_25831_25862[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (13))){
var state_25823__$1 = state_25823;
var statearr_25832_25863 = state_25823__$1;
(statearr_25832_25863[(2)] = null);

(statearr_25832_25863[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (6))){
var inst_25783 = (state_25823[(7)]);
var inst_25808 = inst_25783.length;
var inst_25809 = (inst_25808 > (0));
var state_25823__$1 = state_25823;
if(cljs.core.truth_(inst_25809)){
var statearr_25833_25864 = state_25823__$1;
(statearr_25833_25864[(1)] = (12));

} else {
var statearr_25834_25865 = state_25823__$1;
(statearr_25834_25865[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (3))){
var inst_25821 = (state_25823[(2)]);
var state_25823__$1 = state_25823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25823__$1,inst_25821);
} else {
if((state_val_25824 === (12))){
var inst_25783 = (state_25823[(7)]);
var inst_25811 = cljs.core.vec.call(null,inst_25783);
var state_25823__$1 = state_25823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25823__$1,(15),out,inst_25811);
} else {
if((state_val_25824 === (2))){
var state_25823__$1 = state_25823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25823__$1,(4),ch);
} else {
if((state_val_25824 === (11))){
var inst_25787 = (state_25823[(9)]);
var inst_25791 = (state_25823[(10)]);
var inst_25801 = (state_25823[(2)]);
var inst_25802 = [];
var inst_25803 = inst_25802.push(inst_25787);
var inst_25783 = inst_25802;
var inst_25784 = inst_25791;
var state_25823__$1 = (function (){var statearr_25835 = state_25823;
(statearr_25835[(11)] = inst_25801);

(statearr_25835[(7)] = inst_25783);

(statearr_25835[(12)] = inst_25803);

(statearr_25835[(8)] = inst_25784);

return statearr_25835;
})();
var statearr_25836_25866 = state_25823__$1;
(statearr_25836_25866[(2)] = null);

(statearr_25836_25866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (9))){
var inst_25783 = (state_25823[(7)]);
var inst_25799 = cljs.core.vec.call(null,inst_25783);
var state_25823__$1 = state_25823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25823__$1,(11),out,inst_25799);
} else {
if((state_val_25824 === (5))){
var inst_25787 = (state_25823[(9)]);
var inst_25784 = (state_25823[(8)]);
var inst_25791 = (state_25823[(10)]);
var inst_25791__$1 = f.call(null,inst_25787);
var inst_25792 = cljs.core._EQ_.call(null,inst_25791__$1,inst_25784);
var inst_25793 = cljs.core.keyword_identical_QMARK_.call(null,inst_25784,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25794 = (inst_25792) || (inst_25793);
var state_25823__$1 = (function (){var statearr_25837 = state_25823;
(statearr_25837[(10)] = inst_25791__$1);

return statearr_25837;
})();
if(cljs.core.truth_(inst_25794)){
var statearr_25838_25867 = state_25823__$1;
(statearr_25838_25867[(1)] = (8));

} else {
var statearr_25839_25868 = state_25823__$1;
(statearr_25839_25868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (14))){
var inst_25816 = (state_25823[(2)]);
var inst_25817 = cljs.core.async.close_BANG_.call(null,out);
var state_25823__$1 = (function (){var statearr_25841 = state_25823;
(statearr_25841[(13)] = inst_25816);

return statearr_25841;
})();
var statearr_25842_25869 = state_25823__$1;
(statearr_25842_25869[(2)] = inst_25817);

(statearr_25842_25869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (10))){
var inst_25806 = (state_25823[(2)]);
var state_25823__$1 = state_25823;
var statearr_25843_25870 = state_25823__$1;
(statearr_25843_25870[(2)] = inst_25806);

(statearr_25843_25870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (8))){
var inst_25783 = (state_25823[(7)]);
var inst_25787 = (state_25823[(9)]);
var inst_25791 = (state_25823[(10)]);
var inst_25796 = inst_25783.push(inst_25787);
var tmp25840 = inst_25783;
var inst_25783__$1 = tmp25840;
var inst_25784 = inst_25791;
var state_25823__$1 = (function (){var statearr_25844 = state_25823;
(statearr_25844[(14)] = inst_25796);

(statearr_25844[(7)] = inst_25783__$1);

(statearr_25844[(8)] = inst_25784);

return statearr_25844;
})();
var statearr_25845_25871 = state_25823__$1;
(statearr_25845_25871[(2)] = null);

(statearr_25845_25871[(1)] = (2));


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
});})(c__23050__auto___25857,out))
;
return ((function (switch__22938__auto__,c__23050__auto___25857,out){
return (function() {
var cljs$core$async$state_machine__22939__auto__ = null;
var cljs$core$async$state_machine__22939__auto____0 = (function (){
var statearr_25849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25849[(0)] = cljs$core$async$state_machine__22939__auto__);

(statearr_25849[(1)] = (1));

return statearr_25849;
});
var cljs$core$async$state_machine__22939__auto____1 = (function (state_25823){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_25823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e25850){if((e25850 instanceof Object)){
var ex__22942__auto__ = e25850;
var statearr_25851_25872 = state_25823;
(statearr_25851_25872[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25873 = state_25823;
state_25823 = G__25873;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
cljs$core$async$state_machine__22939__auto__ = function(state_25823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22939__auto____1.call(this,state_25823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22939__auto____0;
cljs$core$async$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22939__auto____1;
return cljs$core$async$state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto___25857,out))
})();
var state__23052__auto__ = (function (){var statearr_25852 = f__23051__auto__.call(null);
(statearr_25852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto___25857);

return statearr_25852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto___25857,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1487785000532