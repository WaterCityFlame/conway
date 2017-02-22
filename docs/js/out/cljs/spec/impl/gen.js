// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__20795__auto__,writer__20796__auto__,opt__20797__auto__){
return cljs.core._write.call(null,writer__20796__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27234 = arguments.length;
var i__21265__auto___27235 = (0);
while(true){
if((i__21265__auto___27235 < len__21264__auto___27234)){
args__21271__auto__.push((arguments[i__21265__auto___27235]));

var G__27236 = (i__21265__auto___27235 + (1));
i__21265__auto___27235 = G__27236;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq27233){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27233));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27238 = arguments.length;
var i__21265__auto___27239 = (0);
while(true){
if((i__21265__auto___27239 < len__21264__auto___27238)){
args__21271__auto__.push((arguments[i__21265__auto___27239]));

var G__27240 = (i__21265__auto___27239 + (1));
i__21265__auto___27239 = G__27240;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq27237){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27237));
});

var g_QMARK__27241 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_27242 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__27241){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__27241))
,null));
var mkg_27243 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__27241,g_27242){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__27241,g_27242))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__27241,g_27242,mkg_27243){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__27241).call(null,x);
});})(g_QMARK__27241,g_27242,mkg_27243))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__27241,g_27242,mkg_27243){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_27243).call(null,gfn);
});})(g_QMARK__27241,g_27242,mkg_27243))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__27241,g_27242,mkg_27243){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_27242).call(null,generator);
});})(g_QMARK__27241,g_27242,mkg_27243))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__27205__auto___27262 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__27205__auto___27262){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27263 = arguments.length;
var i__21265__auto___27264 = (0);
while(true){
if((i__21265__auto___27264 < len__21264__auto___27263)){
args__21271__auto__.push((arguments[i__21265__auto___27264]));

var G__27265 = (i__21265__auto___27264 + (1));
i__21265__auto___27264 = G__27265;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27205__auto___27262))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27205__auto___27262){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27205__auto___27262),args);
});})(g__27205__auto___27262))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__27205__auto___27262){
return (function (seq27244){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27244));
});})(g__27205__auto___27262))
;


var g__27205__auto___27266 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__27205__auto___27266){
return (function cljs$spec$impl$gen$list(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27267 = arguments.length;
var i__21265__auto___27268 = (0);
while(true){
if((i__21265__auto___27268 < len__21264__auto___27267)){
args__21271__auto__.push((arguments[i__21265__auto___27268]));

var G__27269 = (i__21265__auto___27268 + (1));
i__21265__auto___27268 = G__27269;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27205__auto___27266))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27205__auto___27266){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27205__auto___27266),args);
});})(g__27205__auto___27266))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__27205__auto___27266){
return (function (seq27245){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27245));
});})(g__27205__auto___27266))
;


var g__27205__auto___27270 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__27205__auto___27270){
return (function cljs$spec$impl$gen$map(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27271 = arguments.length;
var i__21265__auto___27272 = (0);
while(true){
if((i__21265__auto___27272 < len__21264__auto___27271)){
args__21271__auto__.push((arguments[i__21265__auto___27272]));

var G__27273 = (i__21265__auto___27272 + (1));
i__21265__auto___27272 = G__27273;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27205__auto___27270))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27205__auto___27270){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27205__auto___27270),args);
});})(g__27205__auto___27270))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__27205__auto___27270){
return (function (seq27246){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27246));
});})(g__27205__auto___27270))
;


var g__27205__auto___27274 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__27205__auto___27274){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27275 = arguments.length;
var i__21265__auto___27276 = (0);
while(true){
if((i__21265__auto___27276 < len__21264__auto___27275)){
args__21271__auto__.push((arguments[i__21265__auto___27276]));

var G__27277 = (i__21265__auto___27276 + (1));
i__21265__auto___27276 = G__27277;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27205__auto___27274))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27205__auto___27274){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27205__auto___27274),args);
});})(g__27205__auto___27274))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__27205__auto___27274){
return (function (seq27247){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27247));
});})(g__27205__auto___27274))
;


var g__27205__auto___27278 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__27205__auto___27278){
return (function cljs$spec$impl$gen$set(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27279 = arguments.length;
var i__21265__auto___27280 = (0);
while(true){
if((i__21265__auto___27280 < len__21264__auto___27279)){
args__21271__auto__.push((arguments[i__21265__auto___27280]));

var G__27281 = (i__21265__auto___27280 + (1));
i__21265__auto___27280 = G__27281;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27205__auto___27278))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27205__auto___27278){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27205__auto___27278),args);
});})(g__27205__auto___27278))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__27205__auto___27278){
return (function (seq27248){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27248));
});})(g__27205__auto___27278))
;


var g__27205__auto___27282 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__27205__auto___27282){
return (function cljs$spec$impl$gen$vector(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27283 = arguments.length;
var i__21265__auto___27284 = (0);
while(true){
if((i__21265__auto___27284 < len__21264__auto___27283)){
args__21271__auto__.push((arguments[i__21265__auto___27284]));

var G__27285 = (i__21265__auto___27284 + (1));
i__21265__auto___27284 = G__27285;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27205__auto___27282))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27205__auto___27282){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27205__auto___27282),args);
});})(g__27205__auto___27282))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__27205__auto___27282){
return (function (seq27249){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27249));
});})(g__27205__auto___27282))
;


var g__27205__auto___27286 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__27205__auto___27286){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27287 = arguments.length;
var i__21265__auto___27288 = (0);
while(true){
if((i__21265__auto___27288 < len__21264__auto___27287)){
args__21271__auto__.push((arguments[i__21265__auto___27288]));

var G__27289 = (i__21265__auto___27288 + (1));
i__21265__auto___27288 = G__27289;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27205__auto___27286))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27205__auto___27286){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27205__auto___27286),args);
});})(g__27205__auto___27286))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__27205__auto___27286){
return (function (seq27250){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27250));
});})(g__27205__auto___27286))
;


var g__27205__auto___27290 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__27205__auto___27290){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27291 = arguments.length;
var i__21265__auto___27292 = (0);
while(true){
if((i__21265__auto___27292 < len__21264__auto___27291)){
args__21271__auto__.push((arguments[i__21265__auto___27292]));

var G__27293 = (i__21265__auto___27292 + (1));
i__21265__auto___27292 = G__27293;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27205__auto___27290))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27205__auto___27290){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27205__auto___27290),args);
});})(g__27205__auto___27290))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__27205__auto___27290){
return (function (seq27251){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27251));
});})(g__27205__auto___27290))
;


var g__27205__auto___27294 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__27205__auto___27294){
return (function cljs$spec$impl$gen$elements(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27295 = arguments.length;
var i__21265__auto___27296 = (0);
while(true){
if((i__21265__auto___27296 < len__21264__auto___27295)){
args__21271__auto__.push((arguments[i__21265__auto___27296]));

var G__27297 = (i__21265__auto___27296 + (1));
i__21265__auto___27296 = G__27297;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27205__auto___27294))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27205__auto___27294){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27205__auto___27294),args);
});})(g__27205__auto___27294))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__27205__auto___27294){
return (function (seq27252){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27252));
});})(g__27205__auto___27294))
;


var g__27205__auto___27298 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__27205__auto___27298){
return (function cljs$spec$impl$gen$bind(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27299 = arguments.length;
var i__21265__auto___27300 = (0);
while(true){
if((i__21265__auto___27300 < len__21264__auto___27299)){
args__21271__auto__.push((arguments[i__21265__auto___27300]));

var G__27301 = (i__21265__auto___27300 + (1));
i__21265__auto___27300 = G__27301;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27205__auto___27298))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27205__auto___27298){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27205__auto___27298),args);
});})(g__27205__auto___27298))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__27205__auto___27298){
return (function (seq27253){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27253));
});})(g__27205__auto___27298))
;


var g__27205__auto___27302 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__27205__auto___27302){
return (function cljs$spec$impl$gen$choose(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27303 = arguments.length;
var i__21265__auto___27304 = (0);
while(true){
if((i__21265__auto___27304 < len__21264__auto___27303)){
args__21271__auto__.push((arguments[i__21265__auto___27304]));

var G__27305 = (i__21265__auto___27304 + (1));
i__21265__auto___27304 = G__27305;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27205__auto___27302))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27205__auto___27302){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27205__auto___27302),args);
});})(g__27205__auto___27302))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__27205__auto___27302){
return (function (seq27254){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27254));
});})(g__27205__auto___27302))
;


var g__27205__auto___27306 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__27205__auto___27306){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27307 = arguments.length;
var i__21265__auto___27308 = (0);
while(true){
if((i__21265__auto___27308 < len__21264__auto___27307)){
args__21271__auto__.push((arguments[i__21265__auto___27308]));

var G__27309 = (i__21265__auto___27308 + (1));
i__21265__auto___27308 = G__27309;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27205__auto___27306))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27205__auto___27306){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27205__auto___27306),args);
});})(g__27205__auto___27306))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__27205__auto___27306){
return (function (seq27255){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27255));
});})(g__27205__auto___27306))
;


var g__27205__auto___27310 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__27205__auto___27310){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27311 = arguments.length;
var i__21265__auto___27312 = (0);
while(true){
if((i__21265__auto___27312 < len__21264__auto___27311)){
args__21271__auto__.push((arguments[i__21265__auto___27312]));

var G__27313 = (i__21265__auto___27312 + (1));
i__21265__auto___27312 = G__27313;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27205__auto___27310))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27205__auto___27310){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27205__auto___27310),args);
});})(g__27205__auto___27310))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__27205__auto___27310){
return (function (seq27256){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27256));
});})(g__27205__auto___27310))
;


var g__27205__auto___27314 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__27205__auto___27314){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27315 = arguments.length;
var i__21265__auto___27316 = (0);
while(true){
if((i__21265__auto___27316 < len__21264__auto___27315)){
args__21271__auto__.push((arguments[i__21265__auto___27316]));

var G__27317 = (i__21265__auto___27316 + (1));
i__21265__auto___27316 = G__27317;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27205__auto___27314))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27205__auto___27314){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27205__auto___27314),args);
});})(g__27205__auto___27314))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__27205__auto___27314){
return (function (seq27257){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27257));
});})(g__27205__auto___27314))
;


var g__27205__auto___27318 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__27205__auto___27318){
return (function cljs$spec$impl$gen$sample(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27319 = arguments.length;
var i__21265__auto___27320 = (0);
while(true){
if((i__21265__auto___27320 < len__21264__auto___27319)){
args__21271__auto__.push((arguments[i__21265__auto___27320]));

var G__27321 = (i__21265__auto___27320 + (1));
i__21265__auto___27320 = G__27321;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27205__auto___27318))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27205__auto___27318){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27205__auto___27318),args);
});})(g__27205__auto___27318))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__27205__auto___27318){
return (function (seq27258){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27258));
});})(g__27205__auto___27318))
;


var g__27205__auto___27322 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__27205__auto___27322){
return (function cljs$spec$impl$gen$return(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27323 = arguments.length;
var i__21265__auto___27324 = (0);
while(true){
if((i__21265__auto___27324 < len__21264__auto___27323)){
args__21271__auto__.push((arguments[i__21265__auto___27324]));

var G__27325 = (i__21265__auto___27324 + (1));
i__21265__auto___27324 = G__27325;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27205__auto___27322))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27205__auto___27322){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27205__auto___27322),args);
});})(g__27205__auto___27322))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__27205__auto___27322){
return (function (seq27259){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27259));
});})(g__27205__auto___27322))
;


var g__27205__auto___27326 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__27205__auto___27326){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27327 = arguments.length;
var i__21265__auto___27328 = (0);
while(true){
if((i__21265__auto___27328 < len__21264__auto___27327)){
args__21271__auto__.push((arguments[i__21265__auto___27328]));

var G__27329 = (i__21265__auto___27328 + (1));
i__21265__auto___27328 = G__27329;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27205__auto___27326))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27205__auto___27326){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27205__auto___27326),args);
});})(g__27205__auto___27326))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__27205__auto___27326){
return (function (seq27260){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27260));
});})(g__27205__auto___27326))
;


var g__27205__auto___27330 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__27205__auto___27330){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27331 = arguments.length;
var i__21265__auto___27332 = (0);
while(true){
if((i__21265__auto___27332 < len__21264__auto___27331)){
args__21271__auto__.push((arguments[i__21265__auto___27332]));

var G__27333 = (i__21265__auto___27332 + (1));
i__21265__auto___27332 = G__27333;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27205__auto___27330))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27205__auto___27330){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27205__auto___27330),args);
});})(g__27205__auto___27330))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__27205__auto___27330){
return (function (seq27261){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27261));
});})(g__27205__auto___27330))
;

var g__27218__auto___27355 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__27218__auto___27355){
return (function cljs$spec$impl$gen$any(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27356 = arguments.length;
var i__21265__auto___27357 = (0);
while(true){
if((i__21265__auto___27357 < len__21264__auto___27356)){
args__21271__auto__.push((arguments[i__21265__auto___27357]));

var G__27358 = (i__21265__auto___27357 + (1));
i__21265__auto___27357 = G__27358;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27218__auto___27355))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27218__auto___27355){
return (function (args){
return cljs.core.deref.call(null,g__27218__auto___27355);
});})(g__27218__auto___27355))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__27218__auto___27355){
return (function (seq27334){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27334));
});})(g__27218__auto___27355))
;


var g__27218__auto___27359 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__27218__auto___27359){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27360 = arguments.length;
var i__21265__auto___27361 = (0);
while(true){
if((i__21265__auto___27361 < len__21264__auto___27360)){
args__21271__auto__.push((arguments[i__21265__auto___27361]));

var G__27362 = (i__21265__auto___27361 + (1));
i__21265__auto___27361 = G__27362;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27218__auto___27359))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27218__auto___27359){
return (function (args){
return cljs.core.deref.call(null,g__27218__auto___27359);
});})(g__27218__auto___27359))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__27218__auto___27359){
return (function (seq27335){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27335));
});})(g__27218__auto___27359))
;


var g__27218__auto___27363 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__27218__auto___27363){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27364 = arguments.length;
var i__21265__auto___27365 = (0);
while(true){
if((i__21265__auto___27365 < len__21264__auto___27364)){
args__21271__auto__.push((arguments[i__21265__auto___27365]));

var G__27366 = (i__21265__auto___27365 + (1));
i__21265__auto___27365 = G__27366;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27218__auto___27363))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27218__auto___27363){
return (function (args){
return cljs.core.deref.call(null,g__27218__auto___27363);
});})(g__27218__auto___27363))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__27218__auto___27363){
return (function (seq27336){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27336));
});})(g__27218__auto___27363))
;


var g__27218__auto___27367 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__27218__auto___27367){
return (function cljs$spec$impl$gen$char(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27368 = arguments.length;
var i__21265__auto___27369 = (0);
while(true){
if((i__21265__auto___27369 < len__21264__auto___27368)){
args__21271__auto__.push((arguments[i__21265__auto___27369]));

var G__27370 = (i__21265__auto___27369 + (1));
i__21265__auto___27369 = G__27370;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27218__auto___27367))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27218__auto___27367){
return (function (args){
return cljs.core.deref.call(null,g__27218__auto___27367);
});})(g__27218__auto___27367))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__27218__auto___27367){
return (function (seq27337){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27337));
});})(g__27218__auto___27367))
;


var g__27218__auto___27371 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__27218__auto___27371){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27372 = arguments.length;
var i__21265__auto___27373 = (0);
while(true){
if((i__21265__auto___27373 < len__21264__auto___27372)){
args__21271__auto__.push((arguments[i__21265__auto___27373]));

var G__27374 = (i__21265__auto___27373 + (1));
i__21265__auto___27373 = G__27374;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27218__auto___27371))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27218__auto___27371){
return (function (args){
return cljs.core.deref.call(null,g__27218__auto___27371);
});})(g__27218__auto___27371))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__27218__auto___27371){
return (function (seq27338){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27338));
});})(g__27218__auto___27371))
;


var g__27218__auto___27375 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__27218__auto___27375){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27376 = arguments.length;
var i__21265__auto___27377 = (0);
while(true){
if((i__21265__auto___27377 < len__21264__auto___27376)){
args__21271__auto__.push((arguments[i__21265__auto___27377]));

var G__27378 = (i__21265__auto___27377 + (1));
i__21265__auto___27377 = G__27378;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27218__auto___27375))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27218__auto___27375){
return (function (args){
return cljs.core.deref.call(null,g__27218__auto___27375);
});})(g__27218__auto___27375))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__27218__auto___27375){
return (function (seq27339){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27339));
});})(g__27218__auto___27375))
;


var g__27218__auto___27379 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__27218__auto___27379){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27380 = arguments.length;
var i__21265__auto___27381 = (0);
while(true){
if((i__21265__auto___27381 < len__21264__auto___27380)){
args__21271__auto__.push((arguments[i__21265__auto___27381]));

var G__27382 = (i__21265__auto___27381 + (1));
i__21265__auto___27381 = G__27382;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27218__auto___27379))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27218__auto___27379){
return (function (args){
return cljs.core.deref.call(null,g__27218__auto___27379);
});})(g__27218__auto___27379))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__27218__auto___27379){
return (function (seq27340){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27340));
});})(g__27218__auto___27379))
;


var g__27218__auto___27383 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__27218__auto___27383){
return (function cljs$spec$impl$gen$double(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27384 = arguments.length;
var i__21265__auto___27385 = (0);
while(true){
if((i__21265__auto___27385 < len__21264__auto___27384)){
args__21271__auto__.push((arguments[i__21265__auto___27385]));

var G__27386 = (i__21265__auto___27385 + (1));
i__21265__auto___27385 = G__27386;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27218__auto___27383))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27218__auto___27383){
return (function (args){
return cljs.core.deref.call(null,g__27218__auto___27383);
});})(g__27218__auto___27383))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__27218__auto___27383){
return (function (seq27341){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27341));
});})(g__27218__auto___27383))
;


var g__27218__auto___27387 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__27218__auto___27387){
return (function cljs$spec$impl$gen$int(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27388 = arguments.length;
var i__21265__auto___27389 = (0);
while(true){
if((i__21265__auto___27389 < len__21264__auto___27388)){
args__21271__auto__.push((arguments[i__21265__auto___27389]));

var G__27390 = (i__21265__auto___27389 + (1));
i__21265__auto___27389 = G__27390;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27218__auto___27387))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27218__auto___27387){
return (function (args){
return cljs.core.deref.call(null,g__27218__auto___27387);
});})(g__27218__auto___27387))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__27218__auto___27387){
return (function (seq27342){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27342));
});})(g__27218__auto___27387))
;


var g__27218__auto___27391 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__27218__auto___27391){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27392 = arguments.length;
var i__21265__auto___27393 = (0);
while(true){
if((i__21265__auto___27393 < len__21264__auto___27392)){
args__21271__auto__.push((arguments[i__21265__auto___27393]));

var G__27394 = (i__21265__auto___27393 + (1));
i__21265__auto___27393 = G__27394;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27218__auto___27391))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27218__auto___27391){
return (function (args){
return cljs.core.deref.call(null,g__27218__auto___27391);
});})(g__27218__auto___27391))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__27218__auto___27391){
return (function (seq27343){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27343));
});})(g__27218__auto___27391))
;


var g__27218__auto___27395 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__27218__auto___27395){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27396 = arguments.length;
var i__21265__auto___27397 = (0);
while(true){
if((i__21265__auto___27397 < len__21264__auto___27396)){
args__21271__auto__.push((arguments[i__21265__auto___27397]));

var G__27398 = (i__21265__auto___27397 + (1));
i__21265__auto___27397 = G__27398;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27218__auto___27395))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27218__auto___27395){
return (function (args){
return cljs.core.deref.call(null,g__27218__auto___27395);
});})(g__27218__auto___27395))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__27218__auto___27395){
return (function (seq27344){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27344));
});})(g__27218__auto___27395))
;


var g__27218__auto___27399 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__27218__auto___27399){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27400 = arguments.length;
var i__21265__auto___27401 = (0);
while(true){
if((i__21265__auto___27401 < len__21264__auto___27400)){
args__21271__auto__.push((arguments[i__21265__auto___27401]));

var G__27402 = (i__21265__auto___27401 + (1));
i__21265__auto___27401 = G__27402;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27218__auto___27399))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27218__auto___27399){
return (function (args){
return cljs.core.deref.call(null,g__27218__auto___27399);
});})(g__27218__auto___27399))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__27218__auto___27399){
return (function (seq27345){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27345));
});})(g__27218__auto___27399))
;


var g__27218__auto___27403 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__27218__auto___27403){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27404 = arguments.length;
var i__21265__auto___27405 = (0);
while(true){
if((i__21265__auto___27405 < len__21264__auto___27404)){
args__21271__auto__.push((arguments[i__21265__auto___27405]));

var G__27406 = (i__21265__auto___27405 + (1));
i__21265__auto___27405 = G__27406;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27218__auto___27403))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27218__auto___27403){
return (function (args){
return cljs.core.deref.call(null,g__27218__auto___27403);
});})(g__27218__auto___27403))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__27218__auto___27403){
return (function (seq27346){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27346));
});})(g__27218__auto___27403))
;


var g__27218__auto___27407 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__27218__auto___27407){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27408 = arguments.length;
var i__21265__auto___27409 = (0);
while(true){
if((i__21265__auto___27409 < len__21264__auto___27408)){
args__21271__auto__.push((arguments[i__21265__auto___27409]));

var G__27410 = (i__21265__auto___27409 + (1));
i__21265__auto___27409 = G__27410;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27218__auto___27407))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27218__auto___27407){
return (function (args){
return cljs.core.deref.call(null,g__27218__auto___27407);
});})(g__27218__auto___27407))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__27218__auto___27407){
return (function (seq27347){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27347));
});})(g__27218__auto___27407))
;


var g__27218__auto___27411 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__27218__auto___27411){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27412 = arguments.length;
var i__21265__auto___27413 = (0);
while(true){
if((i__21265__auto___27413 < len__21264__auto___27412)){
args__21271__auto__.push((arguments[i__21265__auto___27413]));

var G__27414 = (i__21265__auto___27413 + (1));
i__21265__auto___27413 = G__27414;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27218__auto___27411))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27218__auto___27411){
return (function (args){
return cljs.core.deref.call(null,g__27218__auto___27411);
});})(g__27218__auto___27411))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__27218__auto___27411){
return (function (seq27348){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27348));
});})(g__27218__auto___27411))
;


var g__27218__auto___27415 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__27218__auto___27415){
return (function cljs$spec$impl$gen$string(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27416 = arguments.length;
var i__21265__auto___27417 = (0);
while(true){
if((i__21265__auto___27417 < len__21264__auto___27416)){
args__21271__auto__.push((arguments[i__21265__auto___27417]));

var G__27418 = (i__21265__auto___27417 + (1));
i__21265__auto___27417 = G__27418;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27218__auto___27415))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27218__auto___27415){
return (function (args){
return cljs.core.deref.call(null,g__27218__auto___27415);
});})(g__27218__auto___27415))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__27218__auto___27415){
return (function (seq27349){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27349));
});})(g__27218__auto___27415))
;


var g__27218__auto___27419 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__27218__auto___27419){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27420 = arguments.length;
var i__21265__auto___27421 = (0);
while(true){
if((i__21265__auto___27421 < len__21264__auto___27420)){
args__21271__auto__.push((arguments[i__21265__auto___27421]));

var G__27422 = (i__21265__auto___27421 + (1));
i__21265__auto___27421 = G__27422;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27218__auto___27419))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27218__auto___27419){
return (function (args){
return cljs.core.deref.call(null,g__27218__auto___27419);
});})(g__27218__auto___27419))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__27218__auto___27419){
return (function (seq27350){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27350));
});})(g__27218__auto___27419))
;


var g__27218__auto___27423 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__27218__auto___27423){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27424 = arguments.length;
var i__21265__auto___27425 = (0);
while(true){
if((i__21265__auto___27425 < len__21264__auto___27424)){
args__21271__auto__.push((arguments[i__21265__auto___27425]));

var G__27426 = (i__21265__auto___27425 + (1));
i__21265__auto___27425 = G__27426;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27218__auto___27423))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27218__auto___27423){
return (function (args){
return cljs.core.deref.call(null,g__27218__auto___27423);
});})(g__27218__auto___27423))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__27218__auto___27423){
return (function (seq27351){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27351));
});})(g__27218__auto___27423))
;


var g__27218__auto___27427 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__27218__auto___27427){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27428 = arguments.length;
var i__21265__auto___27429 = (0);
while(true){
if((i__21265__auto___27429 < len__21264__auto___27428)){
args__21271__auto__.push((arguments[i__21265__auto___27429]));

var G__27430 = (i__21265__auto___27429 + (1));
i__21265__auto___27429 = G__27430;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27218__auto___27427))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27218__auto___27427){
return (function (args){
return cljs.core.deref.call(null,g__27218__auto___27427);
});})(g__27218__auto___27427))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__27218__auto___27427){
return (function (seq27352){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27352));
});})(g__27218__auto___27427))
;


var g__27218__auto___27431 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__27218__auto___27431){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27432 = arguments.length;
var i__21265__auto___27433 = (0);
while(true){
if((i__21265__auto___27433 < len__21264__auto___27432)){
args__21271__auto__.push((arguments[i__21265__auto___27433]));

var G__27434 = (i__21265__auto___27433 + (1));
i__21265__auto___27433 = G__27434;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27218__auto___27431))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27218__auto___27431){
return (function (args){
return cljs.core.deref.call(null,g__27218__auto___27431);
});})(g__27218__auto___27431))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__27218__auto___27431){
return (function (seq27353){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27353));
});})(g__27218__auto___27431))
;


var g__27218__auto___27435 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__27218__auto___27435){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27436 = arguments.length;
var i__21265__auto___27437 = (0);
while(true){
if((i__21265__auto___27437 < len__21264__auto___27436)){
args__21271__auto__.push((arguments[i__21265__auto___27437]));

var G__27438 = (i__21265__auto___27437 + (1));
i__21265__auto___27437 = G__27438;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});})(g__27218__auto___27435))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27218__auto___27435){
return (function (args){
return cljs.core.deref.call(null,g__27218__auto___27435);
});})(g__27218__auto___27435))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__27218__auto___27435){
return (function (seq27354){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27354));
});})(g__27218__auto___27435))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__21271__auto__ = [];
var len__21264__auto___27441 = arguments.length;
var i__21265__auto___27442 = (0);
while(true){
if((i__21265__auto___27442 < len__21264__auto___27441)){
args__21271__auto__.push((arguments[i__21265__auto___27442]));

var G__27443 = (i__21265__auto___27442 + (1));
i__21265__auto___27442 = G__27443;
continue;
} else {
}
break;
}

var argseq__21272__auto__ = ((((0) < args__21271__auto__.length))?(new cljs.core.IndexedSeq(args__21271__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__21272__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__27439_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__27439_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq27440){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27440));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__27444_SHARP_){
return (new Date(p1__27444_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1487785002255