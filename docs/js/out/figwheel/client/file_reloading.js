// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__20189__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__20189__auto__){
return or__20189__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__20189__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__20189__auto__)){
return or__20189__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26133_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26133_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26138 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26139 = null;
var count__26140 = (0);
var i__26141 = (0);
while(true){
if((i__26141 < count__26140)){
var n = cljs.core._nth.call(null,chunk__26139,i__26141);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26142 = seq__26138;
var G__26143 = chunk__26139;
var G__26144 = count__26140;
var G__26145 = (i__26141 + (1));
seq__26138 = G__26142;
chunk__26139 = G__26143;
count__26140 = G__26144;
i__26141 = G__26145;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26138);
if(temp__4657__auto__){
var seq__26138__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26138__$1)){
var c__21000__auto__ = cljs.core.chunk_first.call(null,seq__26138__$1);
var G__26146 = cljs.core.chunk_rest.call(null,seq__26138__$1);
var G__26147 = c__21000__auto__;
var G__26148 = cljs.core.count.call(null,c__21000__auto__);
var G__26149 = (0);
seq__26138 = G__26146;
chunk__26139 = G__26147;
count__26140 = G__26148;
i__26141 = G__26149;
continue;
} else {
var n = cljs.core.first.call(null,seq__26138__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26150 = cljs.core.next.call(null,seq__26138__$1);
var G__26151 = null;
var G__26152 = (0);
var G__26153 = (0);
seq__26138 = G__26150;
chunk__26139 = G__26151;
count__26140 = G__26152;
i__26141 = G__26153;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26204_26215 = cljs.core.seq.call(null,deps);
var chunk__26205_26216 = null;
var count__26206_26217 = (0);
var i__26207_26218 = (0);
while(true){
if((i__26207_26218 < count__26206_26217)){
var dep_26219 = cljs.core._nth.call(null,chunk__26205_26216,i__26207_26218);
topo_sort_helper_STAR_.call(null,dep_26219,(depth + (1)),state);

var G__26220 = seq__26204_26215;
var G__26221 = chunk__26205_26216;
var G__26222 = count__26206_26217;
var G__26223 = (i__26207_26218 + (1));
seq__26204_26215 = G__26220;
chunk__26205_26216 = G__26221;
count__26206_26217 = G__26222;
i__26207_26218 = G__26223;
continue;
} else {
var temp__4657__auto___26224 = cljs.core.seq.call(null,seq__26204_26215);
if(temp__4657__auto___26224){
var seq__26204_26225__$1 = temp__4657__auto___26224;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26204_26225__$1)){
var c__21000__auto___26226 = cljs.core.chunk_first.call(null,seq__26204_26225__$1);
var G__26227 = cljs.core.chunk_rest.call(null,seq__26204_26225__$1);
var G__26228 = c__21000__auto___26226;
var G__26229 = cljs.core.count.call(null,c__21000__auto___26226);
var G__26230 = (0);
seq__26204_26215 = G__26227;
chunk__26205_26216 = G__26228;
count__26206_26217 = G__26229;
i__26207_26218 = G__26230;
continue;
} else {
var dep_26231 = cljs.core.first.call(null,seq__26204_26225__$1);
topo_sort_helper_STAR_.call(null,dep_26231,(depth + (1)),state);

var G__26232 = cljs.core.next.call(null,seq__26204_26225__$1);
var G__26233 = null;
var G__26234 = (0);
var G__26235 = (0);
seq__26204_26215 = G__26232;
chunk__26205_26216 = G__26233;
count__26206_26217 = G__26234;
i__26207_26218 = G__26235;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26208){
var vec__26212 = p__26208;
var seq__26213 = cljs.core.seq.call(null,vec__26212);
var first__26214 = cljs.core.first.call(null,seq__26213);
var seq__26213__$1 = cljs.core.next.call(null,seq__26213);
var x = first__26214;
var xs = seq__26213__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26212,seq__26213,first__26214,seq__26213__$1,x,xs,get_deps__$1){
return (function (p1__26154_SHARP_){
return clojure.set.difference.call(null,p1__26154_SHARP_,x);
});})(vec__26212,seq__26213,first__26214,seq__26213__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26248 = cljs.core.seq.call(null,provides);
var chunk__26249 = null;
var count__26250 = (0);
var i__26251 = (0);
while(true){
if((i__26251 < count__26250)){
var prov = cljs.core._nth.call(null,chunk__26249,i__26251);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26252_26260 = cljs.core.seq.call(null,requires);
var chunk__26253_26261 = null;
var count__26254_26262 = (0);
var i__26255_26263 = (0);
while(true){
if((i__26255_26263 < count__26254_26262)){
var req_26264 = cljs.core._nth.call(null,chunk__26253_26261,i__26255_26263);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26264,prov);

var G__26265 = seq__26252_26260;
var G__26266 = chunk__26253_26261;
var G__26267 = count__26254_26262;
var G__26268 = (i__26255_26263 + (1));
seq__26252_26260 = G__26265;
chunk__26253_26261 = G__26266;
count__26254_26262 = G__26267;
i__26255_26263 = G__26268;
continue;
} else {
var temp__4657__auto___26269 = cljs.core.seq.call(null,seq__26252_26260);
if(temp__4657__auto___26269){
var seq__26252_26270__$1 = temp__4657__auto___26269;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26252_26270__$1)){
var c__21000__auto___26271 = cljs.core.chunk_first.call(null,seq__26252_26270__$1);
var G__26272 = cljs.core.chunk_rest.call(null,seq__26252_26270__$1);
var G__26273 = c__21000__auto___26271;
var G__26274 = cljs.core.count.call(null,c__21000__auto___26271);
var G__26275 = (0);
seq__26252_26260 = G__26272;
chunk__26253_26261 = G__26273;
count__26254_26262 = G__26274;
i__26255_26263 = G__26275;
continue;
} else {
var req_26276 = cljs.core.first.call(null,seq__26252_26270__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26276,prov);

var G__26277 = cljs.core.next.call(null,seq__26252_26270__$1);
var G__26278 = null;
var G__26279 = (0);
var G__26280 = (0);
seq__26252_26260 = G__26277;
chunk__26253_26261 = G__26278;
count__26254_26262 = G__26279;
i__26255_26263 = G__26280;
continue;
}
} else {
}
}
break;
}

var G__26281 = seq__26248;
var G__26282 = chunk__26249;
var G__26283 = count__26250;
var G__26284 = (i__26251 + (1));
seq__26248 = G__26281;
chunk__26249 = G__26282;
count__26250 = G__26283;
i__26251 = G__26284;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26248);
if(temp__4657__auto__){
var seq__26248__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26248__$1)){
var c__21000__auto__ = cljs.core.chunk_first.call(null,seq__26248__$1);
var G__26285 = cljs.core.chunk_rest.call(null,seq__26248__$1);
var G__26286 = c__21000__auto__;
var G__26287 = cljs.core.count.call(null,c__21000__auto__);
var G__26288 = (0);
seq__26248 = G__26285;
chunk__26249 = G__26286;
count__26250 = G__26287;
i__26251 = G__26288;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26248__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26256_26289 = cljs.core.seq.call(null,requires);
var chunk__26257_26290 = null;
var count__26258_26291 = (0);
var i__26259_26292 = (0);
while(true){
if((i__26259_26292 < count__26258_26291)){
var req_26293 = cljs.core._nth.call(null,chunk__26257_26290,i__26259_26292);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26293,prov);

var G__26294 = seq__26256_26289;
var G__26295 = chunk__26257_26290;
var G__26296 = count__26258_26291;
var G__26297 = (i__26259_26292 + (1));
seq__26256_26289 = G__26294;
chunk__26257_26290 = G__26295;
count__26258_26291 = G__26296;
i__26259_26292 = G__26297;
continue;
} else {
var temp__4657__auto___26298__$1 = cljs.core.seq.call(null,seq__26256_26289);
if(temp__4657__auto___26298__$1){
var seq__26256_26299__$1 = temp__4657__auto___26298__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26256_26299__$1)){
var c__21000__auto___26300 = cljs.core.chunk_first.call(null,seq__26256_26299__$1);
var G__26301 = cljs.core.chunk_rest.call(null,seq__26256_26299__$1);
var G__26302 = c__21000__auto___26300;
var G__26303 = cljs.core.count.call(null,c__21000__auto___26300);
var G__26304 = (0);
seq__26256_26289 = G__26301;
chunk__26257_26290 = G__26302;
count__26258_26291 = G__26303;
i__26259_26292 = G__26304;
continue;
} else {
var req_26305 = cljs.core.first.call(null,seq__26256_26299__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26305,prov);

var G__26306 = cljs.core.next.call(null,seq__26256_26299__$1);
var G__26307 = null;
var G__26308 = (0);
var G__26309 = (0);
seq__26256_26289 = G__26306;
chunk__26257_26290 = G__26307;
count__26258_26291 = G__26308;
i__26259_26292 = G__26309;
continue;
}
} else {
}
}
break;
}

var G__26310 = cljs.core.next.call(null,seq__26248__$1);
var G__26311 = null;
var G__26312 = (0);
var G__26313 = (0);
seq__26248 = G__26310;
chunk__26249 = G__26311;
count__26250 = G__26312;
i__26251 = G__26313;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26318_26322 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26319_26323 = null;
var count__26320_26324 = (0);
var i__26321_26325 = (0);
while(true){
if((i__26321_26325 < count__26320_26324)){
var ns_26326 = cljs.core._nth.call(null,chunk__26319_26323,i__26321_26325);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26326);

var G__26327 = seq__26318_26322;
var G__26328 = chunk__26319_26323;
var G__26329 = count__26320_26324;
var G__26330 = (i__26321_26325 + (1));
seq__26318_26322 = G__26327;
chunk__26319_26323 = G__26328;
count__26320_26324 = G__26329;
i__26321_26325 = G__26330;
continue;
} else {
var temp__4657__auto___26331 = cljs.core.seq.call(null,seq__26318_26322);
if(temp__4657__auto___26331){
var seq__26318_26332__$1 = temp__4657__auto___26331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26318_26332__$1)){
var c__21000__auto___26333 = cljs.core.chunk_first.call(null,seq__26318_26332__$1);
var G__26334 = cljs.core.chunk_rest.call(null,seq__26318_26332__$1);
var G__26335 = c__21000__auto___26333;
var G__26336 = cljs.core.count.call(null,c__21000__auto___26333);
var G__26337 = (0);
seq__26318_26322 = G__26334;
chunk__26319_26323 = G__26335;
count__26320_26324 = G__26336;
i__26321_26325 = G__26337;
continue;
} else {
var ns_26338 = cljs.core.first.call(null,seq__26318_26332__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26338);

var G__26339 = cljs.core.next.call(null,seq__26318_26332__$1);
var G__26340 = null;
var G__26341 = (0);
var G__26342 = (0);
seq__26318_26322 = G__26339;
chunk__26319_26323 = G__26340;
count__26320_26324 = G__26341;
i__26321_26325 = G__26342;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__20189__auto__ = goog.require__;
if(cljs.core.truth_(or__20189__auto__)){
return or__20189__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26343__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26343 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26344__i = 0, G__26344__a = new Array(arguments.length -  0);
while (G__26344__i < G__26344__a.length) {G__26344__a[G__26344__i] = arguments[G__26344__i + 0]; ++G__26344__i;}
  args = new cljs.core.IndexedSeq(G__26344__a,0);
} 
return G__26343__delegate.call(this,args);};
G__26343.cljs$lang$maxFixedArity = 0;
G__26343.cljs$lang$applyTo = (function (arglist__26345){
var args = cljs.core.seq(arglist__26345);
return G__26343__delegate(args);
});
G__26343.cljs$core$IFn$_invoke$arity$variadic = G__26343__delegate;
return G__26343;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26347 = cljs.core._EQ_;
var expr__26348 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26347.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26348))){
var path_parts = ((function (pred__26347,expr__26348){
return (function (p1__26346_SHARP_){
return clojure.string.split.call(null,p1__26346_SHARP_,/[\/\\]/);
});})(pred__26347,expr__26348))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26347,expr__26348){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26350){if((e26350 instanceof Error)){
var e = e26350;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26350;

}
}})());
});
;})(path_parts,sep,root,pred__26347,expr__26348))
} else {
if(cljs.core.truth_(pred__26347.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26348))){
return ((function (pred__26347,expr__26348){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__26347,expr__26348){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26347,expr__26348))
);

return deferred.addErrback(((function (deferred,pred__26347,expr__26348){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26347,expr__26348))
);
});
;})(pred__26347,expr__26348))
} else {
return ((function (pred__26347,expr__26348){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26347,expr__26348))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26351,callback){
var map__26354 = p__26351;
var map__26354__$1 = ((((!((map__26354 == null)))?((((map__26354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26354):map__26354);
var file_msg = map__26354__$1;
var request_url = cljs.core.get.call(null,map__26354__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26354,map__26354__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26354,map__26354__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto__){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto__){
return (function (state_26378){
var state_val_26379 = (state_26378[(1)]);
if((state_val_26379 === (7))){
var inst_26374 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
var statearr_26380_26400 = state_26378__$1;
(statearr_26380_26400[(2)] = inst_26374);

(statearr_26380_26400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (1))){
var state_26378__$1 = state_26378;
var statearr_26381_26401 = state_26378__$1;
(statearr_26381_26401[(2)] = null);

(statearr_26381_26401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (4))){
var inst_26358 = (state_26378[(7)]);
var inst_26358__$1 = (state_26378[(2)]);
var state_26378__$1 = (function (){var statearr_26382 = state_26378;
(statearr_26382[(7)] = inst_26358__$1);

return statearr_26382;
})();
if(cljs.core.truth_(inst_26358__$1)){
var statearr_26383_26402 = state_26378__$1;
(statearr_26383_26402[(1)] = (5));

} else {
var statearr_26384_26403 = state_26378__$1;
(statearr_26384_26403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (6))){
var state_26378__$1 = state_26378;
var statearr_26385_26404 = state_26378__$1;
(statearr_26385_26404[(2)] = null);

(statearr_26385_26404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (3))){
var inst_26376 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26378__$1,inst_26376);
} else {
if((state_val_26379 === (2))){
var state_26378__$1 = state_26378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26378__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26379 === (11))){
var inst_26370 = (state_26378[(2)]);
var state_26378__$1 = (function (){var statearr_26386 = state_26378;
(statearr_26386[(8)] = inst_26370);

return statearr_26386;
})();
var statearr_26387_26405 = state_26378__$1;
(statearr_26387_26405[(2)] = null);

(statearr_26387_26405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (9))){
var inst_26364 = (state_26378[(9)]);
var inst_26362 = (state_26378[(10)]);
var inst_26366 = inst_26364.call(null,inst_26362);
var state_26378__$1 = state_26378;
var statearr_26388_26406 = state_26378__$1;
(statearr_26388_26406[(2)] = inst_26366);

(statearr_26388_26406[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (5))){
var inst_26358 = (state_26378[(7)]);
var inst_26360 = figwheel.client.file_reloading.blocking_load.call(null,inst_26358);
var state_26378__$1 = state_26378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26378__$1,(8),inst_26360);
} else {
if((state_val_26379 === (10))){
var inst_26362 = (state_26378[(10)]);
var inst_26368 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26362);
var state_26378__$1 = state_26378;
var statearr_26389_26407 = state_26378__$1;
(statearr_26389_26407[(2)] = inst_26368);

(statearr_26389_26407[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (8))){
var inst_26364 = (state_26378[(9)]);
var inst_26358 = (state_26378[(7)]);
var inst_26362 = (state_26378[(2)]);
var inst_26363 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26364__$1 = cljs.core.get.call(null,inst_26363,inst_26358);
var state_26378__$1 = (function (){var statearr_26390 = state_26378;
(statearr_26390[(9)] = inst_26364__$1);

(statearr_26390[(10)] = inst_26362);

return statearr_26390;
})();
if(cljs.core.truth_(inst_26364__$1)){
var statearr_26391_26408 = state_26378__$1;
(statearr_26391_26408[(1)] = (9));

} else {
var statearr_26392_26409 = state_26378__$1;
(statearr_26392_26409[(1)] = (10));

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
});})(c__23050__auto__))
;
return ((function (switch__22938__auto__,c__23050__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22939__auto__ = null;
var figwheel$client$file_reloading$state_machine__22939__auto____0 = (function (){
var statearr_26396 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26396[(0)] = figwheel$client$file_reloading$state_machine__22939__auto__);

(statearr_26396[(1)] = (1));

return statearr_26396;
});
var figwheel$client$file_reloading$state_machine__22939__auto____1 = (function (state_26378){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_26378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e26397){if((e26397 instanceof Object)){
var ex__22942__auto__ = e26397;
var statearr_26398_26410 = state_26378;
(statearr_26398_26410[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26411 = state_26378;
state_26378 = G__26411;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22939__auto__ = function(state_26378){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22939__auto____1.call(this,state_26378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22939__auto____0;
figwheel$client$file_reloading$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22939__auto____1;
return figwheel$client$file_reloading$state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto__))
})();
var state__23052__auto__ = (function (){var statearr_26399 = f__23051__auto__.call(null);
(statearr_26399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto__);

return statearr_26399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto__))
);

return c__23050__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26412,callback){
var map__26415 = p__26412;
var map__26415__$1 = ((((!((map__26415 == null)))?((((map__26415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26415):map__26415);
var file_msg = map__26415__$1;
var namespace = cljs.core.get.call(null,map__26415__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26415,map__26415__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26415,map__26415__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26417){
var map__26420 = p__26417;
var map__26420__$1 = ((((!((map__26420 == null)))?((((map__26420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26420):map__26420);
var file_msg = map__26420__$1;
var namespace = cljs.core.get.call(null,map__26420__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__20177__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__20177__auto__){
var or__20189__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20189__auto__)){
return or__20189__auto__;
} else {
var or__20189__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20189__auto____$1)){
return or__20189__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__20177__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26422,callback){
var map__26425 = p__26422;
var map__26425__$1 = ((((!((map__26425 == null)))?((((map__26425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26425):map__26425);
var file_msg = map__26425__$1;
var request_url = cljs.core.get.call(null,map__26425__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26425__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23050__auto___26529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto___26529,out){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto___26529,out){
return (function (state_26511){
var state_val_26512 = (state_26511[(1)]);
if((state_val_26512 === (1))){
var inst_26485 = cljs.core.seq.call(null,files);
var inst_26486 = cljs.core.first.call(null,inst_26485);
var inst_26487 = cljs.core.next.call(null,inst_26485);
var inst_26488 = files;
var state_26511__$1 = (function (){var statearr_26513 = state_26511;
(statearr_26513[(7)] = inst_26487);

(statearr_26513[(8)] = inst_26486);

(statearr_26513[(9)] = inst_26488);

return statearr_26513;
})();
var statearr_26514_26530 = state_26511__$1;
(statearr_26514_26530[(2)] = null);

(statearr_26514_26530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26512 === (2))){
var inst_26494 = (state_26511[(10)]);
var inst_26488 = (state_26511[(9)]);
var inst_26493 = cljs.core.seq.call(null,inst_26488);
var inst_26494__$1 = cljs.core.first.call(null,inst_26493);
var inst_26495 = cljs.core.next.call(null,inst_26493);
var inst_26496 = (inst_26494__$1 == null);
var inst_26497 = cljs.core.not.call(null,inst_26496);
var state_26511__$1 = (function (){var statearr_26515 = state_26511;
(statearr_26515[(11)] = inst_26495);

(statearr_26515[(10)] = inst_26494__$1);

return statearr_26515;
})();
if(inst_26497){
var statearr_26516_26531 = state_26511__$1;
(statearr_26516_26531[(1)] = (4));

} else {
var statearr_26517_26532 = state_26511__$1;
(statearr_26517_26532[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26512 === (3))){
var inst_26509 = (state_26511[(2)]);
var state_26511__$1 = state_26511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26511__$1,inst_26509);
} else {
if((state_val_26512 === (4))){
var inst_26494 = (state_26511[(10)]);
var inst_26499 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26494);
var state_26511__$1 = state_26511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26511__$1,(7),inst_26499);
} else {
if((state_val_26512 === (5))){
var inst_26505 = cljs.core.async.close_BANG_.call(null,out);
var state_26511__$1 = state_26511;
var statearr_26518_26533 = state_26511__$1;
(statearr_26518_26533[(2)] = inst_26505);

(statearr_26518_26533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26512 === (6))){
var inst_26507 = (state_26511[(2)]);
var state_26511__$1 = state_26511;
var statearr_26519_26534 = state_26511__$1;
(statearr_26519_26534[(2)] = inst_26507);

(statearr_26519_26534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26512 === (7))){
var inst_26495 = (state_26511[(11)]);
var inst_26501 = (state_26511[(2)]);
var inst_26502 = cljs.core.async.put_BANG_.call(null,out,inst_26501);
var inst_26488 = inst_26495;
var state_26511__$1 = (function (){var statearr_26520 = state_26511;
(statearr_26520[(12)] = inst_26502);

(statearr_26520[(9)] = inst_26488);

return statearr_26520;
})();
var statearr_26521_26535 = state_26511__$1;
(statearr_26521_26535[(2)] = null);

(statearr_26521_26535[(1)] = (2));


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
});})(c__23050__auto___26529,out))
;
return ((function (switch__22938__auto__,c__23050__auto___26529,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____0 = (function (){
var statearr_26525 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26525[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__);

(statearr_26525[(1)] = (1));

return statearr_26525;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____1 = (function (state_26511){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_26511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e26526){if((e26526 instanceof Object)){
var ex__22942__auto__ = e26526;
var statearr_26527_26536 = state_26511;
(statearr_26527_26536[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26537 = state_26511;
state_26511 = G__26537;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__ = function(state_26511){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____1.call(this,state_26511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto___26529,out))
})();
var state__23052__auto__ = (function (){var statearr_26528 = f__23051__auto__.call(null);
(statearr_26528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto___26529);

return statearr_26528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto___26529,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26538,opts){
var map__26542 = p__26538;
var map__26542__$1 = ((((!((map__26542 == null)))?((((map__26542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26542):map__26542);
var eval_body__$1 = cljs.core.get.call(null,map__26542__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26542__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__20177__auto__ = eval_body__$1;
if(cljs.core.truth_(and__20177__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__20177__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26544){var e = e26544;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26545_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26545_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26554){
var vec__26555 = p__26554;
var k = cljs.core.nth.call(null,vec__26555,(0),null);
var v = cljs.core.nth.call(null,vec__26555,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26558){
var vec__26559 = p__26558;
var k = cljs.core.nth.call(null,vec__26559,(0),null);
var v = cljs.core.nth.call(null,vec__26559,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26565,p__26566){
var map__26813 = p__26565;
var map__26813__$1 = ((((!((map__26813 == null)))?((((map__26813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26813):map__26813);
var opts = map__26813__$1;
var before_jsload = cljs.core.get.call(null,map__26813__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26813__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26813__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26814 = p__26566;
var map__26814__$1 = ((((!((map__26814 == null)))?((((map__26814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26814):map__26814);
var msg = map__26814__$1;
var files = cljs.core.get.call(null,map__26814__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26814__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26814__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23050__auto__,map__26813,map__26813__$1,opts,before_jsload,on_jsload,reload_dependents,map__26814,map__26814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23051__auto__ = (function (){var switch__22938__auto__ = ((function (c__23050__auto__,map__26813,map__26813__$1,opts,before_jsload,on_jsload,reload_dependents,map__26814,map__26814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26967){
var state_val_26968 = (state_26967[(1)]);
if((state_val_26968 === (7))){
var inst_26829 = (state_26967[(7)]);
var inst_26831 = (state_26967[(8)]);
var inst_26830 = (state_26967[(9)]);
var inst_26828 = (state_26967[(10)]);
var inst_26836 = cljs.core._nth.call(null,inst_26829,inst_26831);
var inst_26837 = figwheel.client.file_reloading.eval_body.call(null,inst_26836,opts);
var inst_26838 = (inst_26831 + (1));
var tmp26969 = inst_26829;
var tmp26970 = inst_26830;
var tmp26971 = inst_26828;
var inst_26828__$1 = tmp26971;
var inst_26829__$1 = tmp26969;
var inst_26830__$1 = tmp26970;
var inst_26831__$1 = inst_26838;
var state_26967__$1 = (function (){var statearr_26972 = state_26967;
(statearr_26972[(7)] = inst_26829__$1);

(statearr_26972[(8)] = inst_26831__$1);

(statearr_26972[(9)] = inst_26830__$1);

(statearr_26972[(11)] = inst_26837);

(statearr_26972[(10)] = inst_26828__$1);

return statearr_26972;
})();
var statearr_26973_27059 = state_26967__$1;
(statearr_26973_27059[(2)] = null);

(statearr_26973_27059[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (20))){
var inst_26871 = (state_26967[(12)]);
var inst_26879 = figwheel.client.file_reloading.sort_files.call(null,inst_26871);
var state_26967__$1 = state_26967;
var statearr_26974_27060 = state_26967__$1;
(statearr_26974_27060[(2)] = inst_26879);

(statearr_26974_27060[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (27))){
var state_26967__$1 = state_26967;
var statearr_26975_27061 = state_26967__$1;
(statearr_26975_27061[(2)] = null);

(statearr_26975_27061[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (1))){
var inst_26820 = (state_26967[(13)]);
var inst_26817 = before_jsload.call(null,files);
var inst_26818 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26819 = (function (){return ((function (inst_26820,inst_26817,inst_26818,state_val_26968,c__23050__auto__,map__26813,map__26813__$1,opts,before_jsload,on_jsload,reload_dependents,map__26814,map__26814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26562_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26562_SHARP_);
});
;})(inst_26820,inst_26817,inst_26818,state_val_26968,c__23050__auto__,map__26813,map__26813__$1,opts,before_jsload,on_jsload,reload_dependents,map__26814,map__26814__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26820__$1 = cljs.core.filter.call(null,inst_26819,files);
var inst_26821 = cljs.core.not_empty.call(null,inst_26820__$1);
var state_26967__$1 = (function (){var statearr_26976 = state_26967;
(statearr_26976[(14)] = inst_26818);

(statearr_26976[(13)] = inst_26820__$1);

(statearr_26976[(15)] = inst_26817);

return statearr_26976;
})();
if(cljs.core.truth_(inst_26821)){
var statearr_26977_27062 = state_26967__$1;
(statearr_26977_27062[(1)] = (2));

} else {
var statearr_26978_27063 = state_26967__$1;
(statearr_26978_27063[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (24))){
var state_26967__$1 = state_26967;
var statearr_26979_27064 = state_26967__$1;
(statearr_26979_27064[(2)] = null);

(statearr_26979_27064[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (39))){
var inst_26921 = (state_26967[(16)]);
var state_26967__$1 = state_26967;
var statearr_26980_27065 = state_26967__$1;
(statearr_26980_27065[(2)] = inst_26921);

(statearr_26980_27065[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (46))){
var inst_26962 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
var statearr_26981_27066 = state_26967__$1;
(statearr_26981_27066[(2)] = inst_26962);

(statearr_26981_27066[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (4))){
var inst_26865 = (state_26967[(2)]);
var inst_26866 = cljs.core.List.EMPTY;
var inst_26867 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26866);
var inst_26868 = (function (){return ((function (inst_26865,inst_26866,inst_26867,state_val_26968,c__23050__auto__,map__26813,map__26813__$1,opts,before_jsload,on_jsload,reload_dependents,map__26814,map__26814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26563_SHARP_){
var and__20177__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26563_SHARP_);
if(cljs.core.truth_(and__20177__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26563_SHARP_));
} else {
return and__20177__auto__;
}
});
;})(inst_26865,inst_26866,inst_26867,state_val_26968,c__23050__auto__,map__26813,map__26813__$1,opts,before_jsload,on_jsload,reload_dependents,map__26814,map__26814__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26869 = cljs.core.filter.call(null,inst_26868,files);
var inst_26870 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26871 = cljs.core.concat.call(null,inst_26869,inst_26870);
var state_26967__$1 = (function (){var statearr_26982 = state_26967;
(statearr_26982[(17)] = inst_26865);

(statearr_26982[(18)] = inst_26867);

(statearr_26982[(12)] = inst_26871);

return statearr_26982;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26983_27067 = state_26967__$1;
(statearr_26983_27067[(1)] = (16));

} else {
var statearr_26984_27068 = state_26967__$1;
(statearr_26984_27068[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (15))){
var inst_26855 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
var statearr_26985_27069 = state_26967__$1;
(statearr_26985_27069[(2)] = inst_26855);

(statearr_26985_27069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (21))){
var inst_26881 = (state_26967[(19)]);
var inst_26881__$1 = (state_26967[(2)]);
var inst_26882 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26881__$1);
var state_26967__$1 = (function (){var statearr_26986 = state_26967;
(statearr_26986[(19)] = inst_26881__$1);

return statearr_26986;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26967__$1,(22),inst_26882);
} else {
if((state_val_26968 === (31))){
var inst_26965 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26967__$1,inst_26965);
} else {
if((state_val_26968 === (32))){
var inst_26921 = (state_26967[(16)]);
var inst_26926 = inst_26921.cljs$lang$protocol_mask$partition0$;
var inst_26927 = (inst_26926 & (64));
var inst_26928 = inst_26921.cljs$core$ISeq$;
var inst_26929 = (inst_26927) || (inst_26928);
var state_26967__$1 = state_26967;
if(cljs.core.truth_(inst_26929)){
var statearr_26987_27070 = state_26967__$1;
(statearr_26987_27070[(1)] = (35));

} else {
var statearr_26988_27071 = state_26967__$1;
(statearr_26988_27071[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (40))){
var inst_26942 = (state_26967[(20)]);
var inst_26941 = (state_26967[(2)]);
var inst_26942__$1 = cljs.core.get.call(null,inst_26941,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26943 = cljs.core.get.call(null,inst_26941,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26944 = cljs.core.not_empty.call(null,inst_26942__$1);
var state_26967__$1 = (function (){var statearr_26989 = state_26967;
(statearr_26989[(20)] = inst_26942__$1);

(statearr_26989[(21)] = inst_26943);

return statearr_26989;
})();
if(cljs.core.truth_(inst_26944)){
var statearr_26990_27072 = state_26967__$1;
(statearr_26990_27072[(1)] = (41));

} else {
var statearr_26991_27073 = state_26967__$1;
(statearr_26991_27073[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (33))){
var state_26967__$1 = state_26967;
var statearr_26992_27074 = state_26967__$1;
(statearr_26992_27074[(2)] = false);

(statearr_26992_27074[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (13))){
var inst_26841 = (state_26967[(22)]);
var inst_26845 = cljs.core.chunk_first.call(null,inst_26841);
var inst_26846 = cljs.core.chunk_rest.call(null,inst_26841);
var inst_26847 = cljs.core.count.call(null,inst_26845);
var inst_26828 = inst_26846;
var inst_26829 = inst_26845;
var inst_26830 = inst_26847;
var inst_26831 = (0);
var state_26967__$1 = (function (){var statearr_26993 = state_26967;
(statearr_26993[(7)] = inst_26829);

(statearr_26993[(8)] = inst_26831);

(statearr_26993[(9)] = inst_26830);

(statearr_26993[(10)] = inst_26828);

return statearr_26993;
})();
var statearr_26994_27075 = state_26967__$1;
(statearr_26994_27075[(2)] = null);

(statearr_26994_27075[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (22))){
var inst_26885 = (state_26967[(23)]);
var inst_26884 = (state_26967[(24)]);
var inst_26881 = (state_26967[(19)]);
var inst_26889 = (state_26967[(25)]);
var inst_26884__$1 = (state_26967[(2)]);
var inst_26885__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26884__$1);
var inst_26886 = (function (){var all_files = inst_26881;
var res_SINGLEQUOTE_ = inst_26884__$1;
var res = inst_26885__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26885,inst_26884,inst_26881,inst_26889,inst_26884__$1,inst_26885__$1,state_val_26968,c__23050__auto__,map__26813,map__26813__$1,opts,before_jsload,on_jsload,reload_dependents,map__26814,map__26814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26564_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26564_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26885,inst_26884,inst_26881,inst_26889,inst_26884__$1,inst_26885__$1,state_val_26968,c__23050__auto__,map__26813,map__26813__$1,opts,before_jsload,on_jsload,reload_dependents,map__26814,map__26814__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26887 = cljs.core.filter.call(null,inst_26886,inst_26884__$1);
var inst_26888 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26889__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26888);
var inst_26890 = cljs.core.not_empty.call(null,inst_26889__$1);
var state_26967__$1 = (function (){var statearr_26995 = state_26967;
(statearr_26995[(26)] = inst_26887);

(statearr_26995[(23)] = inst_26885__$1);

(statearr_26995[(24)] = inst_26884__$1);

(statearr_26995[(25)] = inst_26889__$1);

return statearr_26995;
})();
if(cljs.core.truth_(inst_26890)){
var statearr_26996_27076 = state_26967__$1;
(statearr_26996_27076[(1)] = (23));

} else {
var statearr_26997_27077 = state_26967__$1;
(statearr_26997_27077[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (36))){
var state_26967__$1 = state_26967;
var statearr_26998_27078 = state_26967__$1;
(statearr_26998_27078[(2)] = false);

(statearr_26998_27078[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (41))){
var inst_26942 = (state_26967[(20)]);
var inst_26946 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26947 = cljs.core.map.call(null,inst_26946,inst_26942);
var inst_26948 = cljs.core.pr_str.call(null,inst_26947);
var inst_26949 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26948)].join('');
var inst_26950 = figwheel.client.utils.log.call(null,inst_26949);
var state_26967__$1 = state_26967;
var statearr_26999_27079 = state_26967__$1;
(statearr_26999_27079[(2)] = inst_26950);

(statearr_26999_27079[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (43))){
var inst_26943 = (state_26967[(21)]);
var inst_26953 = (state_26967[(2)]);
var inst_26954 = cljs.core.not_empty.call(null,inst_26943);
var state_26967__$1 = (function (){var statearr_27000 = state_26967;
(statearr_27000[(27)] = inst_26953);

return statearr_27000;
})();
if(cljs.core.truth_(inst_26954)){
var statearr_27001_27080 = state_26967__$1;
(statearr_27001_27080[(1)] = (44));

} else {
var statearr_27002_27081 = state_26967__$1;
(statearr_27002_27081[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (29))){
var inst_26887 = (state_26967[(26)]);
var inst_26885 = (state_26967[(23)]);
var inst_26884 = (state_26967[(24)]);
var inst_26881 = (state_26967[(19)]);
var inst_26889 = (state_26967[(25)]);
var inst_26921 = (state_26967[(16)]);
var inst_26917 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26920 = (function (){var all_files = inst_26881;
var res_SINGLEQUOTE_ = inst_26884;
var res = inst_26885;
var files_not_loaded = inst_26887;
var dependencies_that_loaded = inst_26889;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26887,inst_26885,inst_26884,inst_26881,inst_26889,inst_26921,inst_26917,state_val_26968,c__23050__auto__,map__26813,map__26813__$1,opts,before_jsload,on_jsload,reload_dependents,map__26814,map__26814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26919){
var map__27003 = p__26919;
var map__27003__$1 = ((((!((map__27003 == null)))?((((map__27003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27003):map__27003);
var namespace = cljs.core.get.call(null,map__27003__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26887,inst_26885,inst_26884,inst_26881,inst_26889,inst_26921,inst_26917,state_val_26968,c__23050__auto__,map__26813,map__26813__$1,opts,before_jsload,on_jsload,reload_dependents,map__26814,map__26814__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26921__$1 = cljs.core.group_by.call(null,inst_26920,inst_26887);
var inst_26923 = (inst_26921__$1 == null);
var inst_26924 = cljs.core.not.call(null,inst_26923);
var state_26967__$1 = (function (){var statearr_27005 = state_26967;
(statearr_27005[(28)] = inst_26917);

(statearr_27005[(16)] = inst_26921__$1);

return statearr_27005;
})();
if(inst_26924){
var statearr_27006_27082 = state_26967__$1;
(statearr_27006_27082[(1)] = (32));

} else {
var statearr_27007_27083 = state_26967__$1;
(statearr_27007_27083[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (44))){
var inst_26943 = (state_26967[(21)]);
var inst_26956 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26943);
var inst_26957 = cljs.core.pr_str.call(null,inst_26956);
var inst_26958 = [cljs.core.str("not required: "),cljs.core.str(inst_26957)].join('');
var inst_26959 = figwheel.client.utils.log.call(null,inst_26958);
var state_26967__$1 = state_26967;
var statearr_27008_27084 = state_26967__$1;
(statearr_27008_27084[(2)] = inst_26959);

(statearr_27008_27084[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (6))){
var inst_26862 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
var statearr_27009_27085 = state_26967__$1;
(statearr_27009_27085[(2)] = inst_26862);

(statearr_27009_27085[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (28))){
var inst_26887 = (state_26967[(26)]);
var inst_26914 = (state_26967[(2)]);
var inst_26915 = cljs.core.not_empty.call(null,inst_26887);
var state_26967__$1 = (function (){var statearr_27010 = state_26967;
(statearr_27010[(29)] = inst_26914);

return statearr_27010;
})();
if(cljs.core.truth_(inst_26915)){
var statearr_27011_27086 = state_26967__$1;
(statearr_27011_27086[(1)] = (29));

} else {
var statearr_27012_27087 = state_26967__$1;
(statearr_27012_27087[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (25))){
var inst_26885 = (state_26967[(23)]);
var inst_26901 = (state_26967[(2)]);
var inst_26902 = cljs.core.not_empty.call(null,inst_26885);
var state_26967__$1 = (function (){var statearr_27013 = state_26967;
(statearr_27013[(30)] = inst_26901);

return statearr_27013;
})();
if(cljs.core.truth_(inst_26902)){
var statearr_27014_27088 = state_26967__$1;
(statearr_27014_27088[(1)] = (26));

} else {
var statearr_27015_27089 = state_26967__$1;
(statearr_27015_27089[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (34))){
var inst_26936 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
if(cljs.core.truth_(inst_26936)){
var statearr_27016_27090 = state_26967__$1;
(statearr_27016_27090[(1)] = (38));

} else {
var statearr_27017_27091 = state_26967__$1;
(statearr_27017_27091[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (17))){
var state_26967__$1 = state_26967;
var statearr_27018_27092 = state_26967__$1;
(statearr_27018_27092[(2)] = recompile_dependents);

(statearr_27018_27092[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (3))){
var state_26967__$1 = state_26967;
var statearr_27019_27093 = state_26967__$1;
(statearr_27019_27093[(2)] = null);

(statearr_27019_27093[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (12))){
var inst_26858 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
var statearr_27020_27094 = state_26967__$1;
(statearr_27020_27094[(2)] = inst_26858);

(statearr_27020_27094[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (2))){
var inst_26820 = (state_26967[(13)]);
var inst_26827 = cljs.core.seq.call(null,inst_26820);
var inst_26828 = inst_26827;
var inst_26829 = null;
var inst_26830 = (0);
var inst_26831 = (0);
var state_26967__$1 = (function (){var statearr_27021 = state_26967;
(statearr_27021[(7)] = inst_26829);

(statearr_27021[(8)] = inst_26831);

(statearr_27021[(9)] = inst_26830);

(statearr_27021[(10)] = inst_26828);

return statearr_27021;
})();
var statearr_27022_27095 = state_26967__$1;
(statearr_27022_27095[(2)] = null);

(statearr_27022_27095[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (23))){
var inst_26887 = (state_26967[(26)]);
var inst_26885 = (state_26967[(23)]);
var inst_26884 = (state_26967[(24)]);
var inst_26881 = (state_26967[(19)]);
var inst_26889 = (state_26967[(25)]);
var inst_26892 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26894 = (function (){var all_files = inst_26881;
var res_SINGLEQUOTE_ = inst_26884;
var res = inst_26885;
var files_not_loaded = inst_26887;
var dependencies_that_loaded = inst_26889;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26887,inst_26885,inst_26884,inst_26881,inst_26889,inst_26892,state_val_26968,c__23050__auto__,map__26813,map__26813__$1,opts,before_jsload,on_jsload,reload_dependents,map__26814,map__26814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26893){
var map__27023 = p__26893;
var map__27023__$1 = ((((!((map__27023 == null)))?((((map__27023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27023):map__27023);
var request_url = cljs.core.get.call(null,map__27023__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26887,inst_26885,inst_26884,inst_26881,inst_26889,inst_26892,state_val_26968,c__23050__auto__,map__26813,map__26813__$1,opts,before_jsload,on_jsload,reload_dependents,map__26814,map__26814__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26895 = cljs.core.reverse.call(null,inst_26889);
var inst_26896 = cljs.core.map.call(null,inst_26894,inst_26895);
var inst_26897 = cljs.core.pr_str.call(null,inst_26896);
var inst_26898 = figwheel.client.utils.log.call(null,inst_26897);
var state_26967__$1 = (function (){var statearr_27025 = state_26967;
(statearr_27025[(31)] = inst_26892);

return statearr_27025;
})();
var statearr_27026_27096 = state_26967__$1;
(statearr_27026_27096[(2)] = inst_26898);

(statearr_27026_27096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (35))){
var state_26967__$1 = state_26967;
var statearr_27027_27097 = state_26967__$1;
(statearr_27027_27097[(2)] = true);

(statearr_27027_27097[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (19))){
var inst_26871 = (state_26967[(12)]);
var inst_26877 = figwheel.client.file_reloading.expand_files.call(null,inst_26871);
var state_26967__$1 = state_26967;
var statearr_27028_27098 = state_26967__$1;
(statearr_27028_27098[(2)] = inst_26877);

(statearr_27028_27098[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (11))){
var state_26967__$1 = state_26967;
var statearr_27029_27099 = state_26967__$1;
(statearr_27029_27099[(2)] = null);

(statearr_27029_27099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (9))){
var inst_26860 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
var statearr_27030_27100 = state_26967__$1;
(statearr_27030_27100[(2)] = inst_26860);

(statearr_27030_27100[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (5))){
var inst_26831 = (state_26967[(8)]);
var inst_26830 = (state_26967[(9)]);
var inst_26833 = (inst_26831 < inst_26830);
var inst_26834 = inst_26833;
var state_26967__$1 = state_26967;
if(cljs.core.truth_(inst_26834)){
var statearr_27031_27101 = state_26967__$1;
(statearr_27031_27101[(1)] = (7));

} else {
var statearr_27032_27102 = state_26967__$1;
(statearr_27032_27102[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (14))){
var inst_26841 = (state_26967[(22)]);
var inst_26850 = cljs.core.first.call(null,inst_26841);
var inst_26851 = figwheel.client.file_reloading.eval_body.call(null,inst_26850,opts);
var inst_26852 = cljs.core.next.call(null,inst_26841);
var inst_26828 = inst_26852;
var inst_26829 = null;
var inst_26830 = (0);
var inst_26831 = (0);
var state_26967__$1 = (function (){var statearr_27033 = state_26967;
(statearr_27033[(7)] = inst_26829);

(statearr_27033[(8)] = inst_26831);

(statearr_27033[(9)] = inst_26830);

(statearr_27033[(32)] = inst_26851);

(statearr_27033[(10)] = inst_26828);

return statearr_27033;
})();
var statearr_27034_27103 = state_26967__$1;
(statearr_27034_27103[(2)] = null);

(statearr_27034_27103[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (45))){
var state_26967__$1 = state_26967;
var statearr_27035_27104 = state_26967__$1;
(statearr_27035_27104[(2)] = null);

(statearr_27035_27104[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (26))){
var inst_26887 = (state_26967[(26)]);
var inst_26885 = (state_26967[(23)]);
var inst_26884 = (state_26967[(24)]);
var inst_26881 = (state_26967[(19)]);
var inst_26889 = (state_26967[(25)]);
var inst_26904 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26906 = (function (){var all_files = inst_26881;
var res_SINGLEQUOTE_ = inst_26884;
var res = inst_26885;
var files_not_loaded = inst_26887;
var dependencies_that_loaded = inst_26889;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26887,inst_26885,inst_26884,inst_26881,inst_26889,inst_26904,state_val_26968,c__23050__auto__,map__26813,map__26813__$1,opts,before_jsload,on_jsload,reload_dependents,map__26814,map__26814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26905){
var map__27036 = p__26905;
var map__27036__$1 = ((((!((map__27036 == null)))?((((map__27036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27036):map__27036);
var namespace = cljs.core.get.call(null,map__27036__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27036__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26887,inst_26885,inst_26884,inst_26881,inst_26889,inst_26904,state_val_26968,c__23050__auto__,map__26813,map__26813__$1,opts,before_jsload,on_jsload,reload_dependents,map__26814,map__26814__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26907 = cljs.core.map.call(null,inst_26906,inst_26885);
var inst_26908 = cljs.core.pr_str.call(null,inst_26907);
var inst_26909 = figwheel.client.utils.log.call(null,inst_26908);
var inst_26910 = (function (){var all_files = inst_26881;
var res_SINGLEQUOTE_ = inst_26884;
var res = inst_26885;
var files_not_loaded = inst_26887;
var dependencies_that_loaded = inst_26889;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26887,inst_26885,inst_26884,inst_26881,inst_26889,inst_26904,inst_26906,inst_26907,inst_26908,inst_26909,state_val_26968,c__23050__auto__,map__26813,map__26813__$1,opts,before_jsload,on_jsload,reload_dependents,map__26814,map__26814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26887,inst_26885,inst_26884,inst_26881,inst_26889,inst_26904,inst_26906,inst_26907,inst_26908,inst_26909,state_val_26968,c__23050__auto__,map__26813,map__26813__$1,opts,before_jsload,on_jsload,reload_dependents,map__26814,map__26814__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26911 = setTimeout(inst_26910,(10));
var state_26967__$1 = (function (){var statearr_27038 = state_26967;
(statearr_27038[(33)] = inst_26904);

(statearr_27038[(34)] = inst_26909);

return statearr_27038;
})();
var statearr_27039_27105 = state_26967__$1;
(statearr_27039_27105[(2)] = inst_26911);

(statearr_27039_27105[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (16))){
var state_26967__$1 = state_26967;
var statearr_27040_27106 = state_26967__$1;
(statearr_27040_27106[(2)] = reload_dependents);

(statearr_27040_27106[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (38))){
var inst_26921 = (state_26967[(16)]);
var inst_26938 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26921);
var state_26967__$1 = state_26967;
var statearr_27041_27107 = state_26967__$1;
(statearr_27041_27107[(2)] = inst_26938);

(statearr_27041_27107[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (30))){
var state_26967__$1 = state_26967;
var statearr_27042_27108 = state_26967__$1;
(statearr_27042_27108[(2)] = null);

(statearr_27042_27108[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (10))){
var inst_26841 = (state_26967[(22)]);
var inst_26843 = cljs.core.chunked_seq_QMARK_.call(null,inst_26841);
var state_26967__$1 = state_26967;
if(inst_26843){
var statearr_27043_27109 = state_26967__$1;
(statearr_27043_27109[(1)] = (13));

} else {
var statearr_27044_27110 = state_26967__$1;
(statearr_27044_27110[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (18))){
var inst_26875 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
if(cljs.core.truth_(inst_26875)){
var statearr_27045_27111 = state_26967__$1;
(statearr_27045_27111[(1)] = (19));

} else {
var statearr_27046_27112 = state_26967__$1;
(statearr_27046_27112[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (42))){
var state_26967__$1 = state_26967;
var statearr_27047_27113 = state_26967__$1;
(statearr_27047_27113[(2)] = null);

(statearr_27047_27113[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (37))){
var inst_26933 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
var statearr_27048_27114 = state_26967__$1;
(statearr_27048_27114[(2)] = inst_26933);

(statearr_27048_27114[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (8))){
var inst_26841 = (state_26967[(22)]);
var inst_26828 = (state_26967[(10)]);
var inst_26841__$1 = cljs.core.seq.call(null,inst_26828);
var state_26967__$1 = (function (){var statearr_27049 = state_26967;
(statearr_27049[(22)] = inst_26841__$1);

return statearr_27049;
})();
if(inst_26841__$1){
var statearr_27050_27115 = state_26967__$1;
(statearr_27050_27115[(1)] = (10));

} else {
var statearr_27051_27116 = state_26967__$1;
(statearr_27051_27116[(1)] = (11));

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
}
});})(c__23050__auto__,map__26813,map__26813__$1,opts,before_jsload,on_jsload,reload_dependents,map__26814,map__26814__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22938__auto__,c__23050__auto__,map__26813,map__26813__$1,opts,before_jsload,on_jsload,reload_dependents,map__26814,map__26814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____0 = (function (){
var statearr_27055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27055[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__);

(statearr_27055[(1)] = (1));

return statearr_27055;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____1 = (function (state_26967){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_26967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e27056){if((e27056 instanceof Object)){
var ex__22942__auto__ = e27056;
var statearr_27057_27117 = state_26967;
(statearr_27057_27117[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27118 = state_26967;
state_26967 = G__27118;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__ = function(state_26967){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____1.call(this,state_26967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__23050__auto__,map__26813,map__26813__$1,opts,before_jsload,on_jsload,reload_dependents,map__26814,map__26814__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23052__auto__ = (function (){var statearr_27058 = f__23051__auto__.call(null);
(statearr_27058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23050__auto__);

return statearr_27058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23052__auto__);
});})(c__23050__auto__,map__26813,map__26813__$1,opts,before_jsload,on_jsload,reload_dependents,map__26814,map__26814__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23050__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27121,link){
var map__27124 = p__27121;
var map__27124__$1 = ((((!((map__27124 == null)))?((((map__27124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27124):map__27124);
var file = cljs.core.get.call(null,map__27124__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__27124,map__27124__$1,file){
return (function (p1__27119_SHARP_,p2__27120_SHARP_){
if(cljs.core._EQ_.call(null,p1__27119_SHARP_,p2__27120_SHARP_)){
return p1__27119_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__27124,map__27124__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27130){
var map__27131 = p__27130;
var map__27131__$1 = ((((!((map__27131 == null)))?((((map__27131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27131):map__27131);
var match_length = cljs.core.get.call(null,map__27131__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27131__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27126_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27126_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27133 = [];
var len__21264__auto___27136 = arguments.length;
var i__21265__auto___27137 = (0);
while(true){
if((i__21265__auto___27137 < len__21264__auto___27136)){
args27133.push((arguments[i__21265__auto___27137]));

var G__27138 = (i__21265__auto___27137 + (1));
i__21265__auto___27137 = G__27138;
continue;
} else {
}
break;
}

var G__27135 = args27133.length;
switch (G__27135) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27133.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27140_SHARP_,p2__27141_SHARP_){
return cljs.core.assoc.call(null,p1__27140_SHARP_,cljs.core.get.call(null,p2__27141_SHARP_,key),p2__27141_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27142){
var map__27145 = p__27142;
var map__27145__$1 = ((((!((map__27145 == null)))?((((map__27145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27145):map__27145);
var f_data = map__27145__$1;
var file = cljs.core.get.call(null,map__27145__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27147,files_msg){
var map__27154 = p__27147;
var map__27154__$1 = ((((!((map__27154 == null)))?((((map__27154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27154):map__27154);
var opts = map__27154__$1;
var on_cssload = cljs.core.get.call(null,map__27154__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27156_27160 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27157_27161 = null;
var count__27158_27162 = (0);
var i__27159_27163 = (0);
while(true){
if((i__27159_27163 < count__27158_27162)){
var f_27164 = cljs.core._nth.call(null,chunk__27157_27161,i__27159_27163);
figwheel.client.file_reloading.reload_css_file.call(null,f_27164);

var G__27165 = seq__27156_27160;
var G__27166 = chunk__27157_27161;
var G__27167 = count__27158_27162;
var G__27168 = (i__27159_27163 + (1));
seq__27156_27160 = G__27165;
chunk__27157_27161 = G__27166;
count__27158_27162 = G__27167;
i__27159_27163 = G__27168;
continue;
} else {
var temp__4657__auto___27169 = cljs.core.seq.call(null,seq__27156_27160);
if(temp__4657__auto___27169){
var seq__27156_27170__$1 = temp__4657__auto___27169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27156_27170__$1)){
var c__21000__auto___27171 = cljs.core.chunk_first.call(null,seq__27156_27170__$1);
var G__27172 = cljs.core.chunk_rest.call(null,seq__27156_27170__$1);
var G__27173 = c__21000__auto___27171;
var G__27174 = cljs.core.count.call(null,c__21000__auto___27171);
var G__27175 = (0);
seq__27156_27160 = G__27172;
chunk__27157_27161 = G__27173;
count__27158_27162 = G__27174;
i__27159_27163 = G__27175;
continue;
} else {
var f_27176 = cljs.core.first.call(null,seq__27156_27170__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27176);

var G__27177 = cljs.core.next.call(null,seq__27156_27170__$1);
var G__27178 = null;
var G__27179 = (0);
var G__27180 = (0);
seq__27156_27160 = G__27177;
chunk__27157_27161 = G__27178;
count__27158_27162 = G__27179;
i__27159_27163 = G__27180;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27154,map__27154__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27154,map__27154__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1487785001692