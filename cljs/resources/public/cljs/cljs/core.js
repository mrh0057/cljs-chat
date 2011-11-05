goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____2396 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2396))
{return or__3548__auto____2396;
} else
{var or__3548__auto____2397 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2397))
{return or__3548__auto____2397;
} else
{return false;
}
}
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2398 = coll;

if(cljs.core.truth_(and__3546__auto____2398))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2398;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2399 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2399))
{return or__3548__auto____2399;
} else
{var or__3548__auto____2400 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2400))
{return or__3548__auto____2400;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2401 = coll;

if(cljs.core.truth_(and__3546__auto____2401))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2401;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2402 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2402))
{return or__3548__auto____2402;
} else
{var or__3548__auto____2403 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____2403))
{return or__3548__auto____2403;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2404 = coll;

if(cljs.core.truth_(and__3546__auto____2404))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2404;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2405 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2405))
{return or__3548__auto____2405;
} else
{var or__3548__auto____2406 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____2406))
{return or__3548__auto____2406;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2413 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2407 = coll;

if(cljs.core.truth_(and__3546__auto____2407))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2407;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2408 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2408))
{return or__3548__auto____2408;
} else
{var or__3548__auto____2409 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2409))
{return or__3548__auto____2409;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2414 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2410 = coll;

if(cljs.core.truth_(and__3546__auto____2410))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2410;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2411 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2411))
{return or__3548__auto____2411;
} else
{var or__3548__auto____2412 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2412))
{return or__3548__auto____2412;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2413.call(this,coll,n);
case  3 :
return _nth__2414.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2416 = coll;

if(cljs.core.truth_(and__3546__auto____2416))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2416;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2417 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2417))
{return or__3548__auto____2417;
} else
{var or__3548__auto____2418 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____2418))
{return or__3548__auto____2418;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2419 = coll;

if(cljs.core.truth_(and__3546__auto____2419))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2419;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2420 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2420))
{return or__3548__auto____2420;
} else
{var or__3548__auto____2421 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____2421))
{return or__3548__auto____2421;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2428 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2422 = o;

if(cljs.core.truth_(and__3546__auto____2422))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2422;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2423 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2423))
{return or__3548__auto____2423;
} else
{var or__3548__auto____2424 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2424))
{return or__3548__auto____2424;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2429 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2425 = o;

if(cljs.core.truth_(and__3546__auto____2425))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2425;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2426 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2426))
{return or__3548__auto____2426;
} else
{var or__3548__auto____2427 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2427))
{return or__3548__auto____2427;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2428.call(this,o,k);
case  3 :
return _lookup__2429.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2431 = coll;

if(cljs.core.truth_(and__3546__auto____2431))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2431;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2432 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2432))
{return or__3548__auto____2432;
} else
{var or__3548__auto____2433 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2433))
{return or__3548__auto____2433;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2434 = coll;

if(cljs.core.truth_(and__3546__auto____2434))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2434;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2435 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2435))
{return or__3548__auto____2435;
} else
{var or__3548__auto____2436 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2436))
{return or__3548__auto____2436;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2437 = coll;

if(cljs.core.truth_(and__3546__auto____2437))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2437;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2438 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2438))
{return or__3548__auto____2438;
} else
{var or__3548__auto____2439 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2439))
{return or__3548__auto____2439;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2440 = coll;

if(cljs.core.truth_(and__3546__auto____2440))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2440;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2441 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2441))
{return or__3548__auto____2441;
} else
{var or__3548__auto____2442 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2442))
{return or__3548__auto____2442;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2443 = coll;

if(cljs.core.truth_(and__3546__auto____2443))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2443;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2444 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2444))
{return or__3548__auto____2444;
} else
{var or__3548__auto____2445 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____2445))
{return or__3548__auto____2445;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2446 = coll;

if(cljs.core.truth_(and__3546__auto____2446))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2446;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2447 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2447))
{return or__3548__auto____2447;
} else
{var or__3548__auto____2448 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____2448))
{return or__3548__auto____2448;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2449 = coll;

if(cljs.core.truth_(and__3546__auto____2449))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2449;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2450 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2450))
{return or__3548__auto____2450;
} else
{var or__3548__auto____2451 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2451))
{return or__3548__auto____2451;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2452 = o;

if(cljs.core.truth_(and__3546__auto____2452))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2452;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2453 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2453))
{return or__3548__auto____2453;
} else
{var or__3548__auto____2454 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____2454))
{return or__3548__auto____2454;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2455 = o;

if(cljs.core.truth_(and__3546__auto____2455))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2455;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2456 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2456))
{return or__3548__auto____2456;
} else
{var or__3548__auto____2457 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2457))
{return or__3548__auto____2457;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2458 = o;

if(cljs.core.truth_(and__3546__auto____2458))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2458;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2459 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2459))
{return or__3548__auto____2459;
} else
{var or__3548__auto____2460 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____2460))
{return or__3548__auto____2460;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2461 = o;

if(cljs.core.truth_(and__3546__auto____2461))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2461;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2462 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2462))
{return or__3548__auto____2462;
} else
{var or__3548__auto____2463 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2463))
{return or__3548__auto____2463;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2470 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2464 = coll;

if(cljs.core.truth_(and__3546__auto____2464))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2464;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2465 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2465))
{return or__3548__auto____2465;
} else
{var or__3548__auto____2466 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2466))
{return or__3548__auto____2466;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2471 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2467 = coll;

if(cljs.core.truth_(and__3546__auto____2467))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2467;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2468 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2468))
{return or__3548__auto____2468;
} else
{var or__3548__auto____2469 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2469))
{return or__3548__auto____2469;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2470.call(this,coll,f);
case  3 :
return _reduce__2471.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2473 = o;

if(cljs.core.truth_(and__3546__auto____2473))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2473;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2474 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2474))
{return or__3548__auto____2474;
} else
{var or__3548__auto____2475 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2475))
{return or__3548__auto____2475;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2476 = o;

if(cljs.core.truth_(and__3546__auto____2476))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2476;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2477 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2477))
{return or__3548__auto____2477;
} else
{var or__3548__auto____2478 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____2478))
{return or__3548__auto____2478;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2479 = o;

if(cljs.core.truth_(and__3546__auto____2479))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2479;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2480 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2480))
{return or__3548__auto____2480;
} else
{var or__3548__auto____2481 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____2481))
{return or__3548__auto____2481;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____2482 = o;

if(cljs.core.truth_(and__3546__auto____2482))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2482;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2483 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2483))
{return or__3548__auto____2483;
} else
{var or__3548__auto____2484 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2484))
{return or__3548__auto____2484;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2485 = d;

if(cljs.core.truth_(and__3546__auto____2485))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2485;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2486 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2486))
{return or__3548__auto____2486;
} else
{var or__3548__auto____2487 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2487))
{return or__3548__auto____2487;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____2488 = this$;

if(cljs.core.truth_(and__3546__auto____2488))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____2488;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____2489 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2489))
{return or__3548__auto____2489;
} else
{var or__3548__auto____2490 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____2490))
{return or__3548__auto____2490;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____2491 = this$;

if(cljs.core.truth_(and__3546__auto____2491))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____2491;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____2492 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2492))
{return or__3548__auto____2492;
} else
{var or__3548__auto____2493 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2493))
{return or__3548__auto____2493;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____2494 = this$;

if(cljs.core.truth_(and__3546__auto____2494))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____2494;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____2495 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2495))
{return or__3548__auto____2495;
} else
{var or__3548__auto____2496 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2496))
{return or__3548__auto____2496;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2497 = null;
var G__2497__2498 = (function (o,k){
return null;
});
var G__2497__2499 = (function (o,k,not_found){
return not_found;
});
G__2497 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2497__2498.call(this,o,k);
case  3 :
return G__2497__2499.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2497;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2501 = null;
var G__2501__2502 = (function (_,f){
return f.call(null);
});
var G__2501__2503 = (function (_,f,start){
return start;
});
G__2501 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2501__2502.call(this,_,f);
case  3 :
return G__2501__2503.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2501;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2505 = null;
var G__2505__2506 = (function (_,n){
return null;
});
var G__2505__2507 = (function (_,n,not_found){
return not_found;
});
G__2505 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2505__2506.call(this,_,n);
case  3 :
return G__2505__2507.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2505;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return cljs.core.identical_QMARK_.call(null,o.toString(),other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2515 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2509 = cljs.core._nth.call(null,cicoll,0);
var n__2510 = 1;

while(true){
if(cljs.core.truth_((n__2510 < cljs.core._count.call(null,cicoll))))
{{
var G__2519 = f.call(null,val__2509,cljs.core._nth.call(null,cicoll,n__2510));
var G__2520 = (n__2510 + 1);
val__2509 = G__2519;
n__2510 = G__2520;
continue;
}
} else
{return val__2509;
}
break;
}
}
});
var ci_reduce__2516 = (function (cicoll,f,val){
var val__2511 = val;
var n__2512 = 0;

while(true){
if(cljs.core.truth_((n__2512 < cljs.core._count.call(null,cicoll))))
{{
var G__2521 = f.call(null,val__2511,cljs.core._nth.call(null,cicoll,n__2512));
var G__2522 = (n__2512 + 1);
val__2511 = G__2521;
n__2512 = G__2522;
continue;
}
} else
{return val__2511;
}
break;
}
});
var ci_reduce__2517 = (function (cicoll,f,val,idx){
var val__2513 = val;
var n__2514 = idx;

while(true){
if(cljs.core.truth_((n__2514 < cljs.core._count.call(null,cicoll))))
{{
var G__2523 = f.call(null,val__2513,cljs.core._nth.call(null,cicoll,n__2514));
var G__2524 = (n__2514 + 1);
val__2513 = G__2523;
n__2514 = G__2524;
continue;
}
} else
{return val__2513;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2515.call(this,cicoll,f);
case  3 :
return ci_reduce__2516.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2517.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2525 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2538 = null;
var G__2538__2539 = (function (coll,f){
var this__2526 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2526.a[this__2526.i]),(this__2526.i + 1));
});
var G__2538__2540 = (function (coll,f,start){
var this__2527 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2527.i);
});
G__2538 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2538__2539.call(this,coll,f);
case  3 :
return G__2538__2540.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2538;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2528 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2529 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2542 = null;
var G__2542__2543 = (function (coll,n){
var this__2530 = this;
var i__2531 = (n + this__2530.i);

if(cljs.core.truth_((i__2531 < this__2530.a.length)))
{return (this__2530.a[i__2531]);
} else
{return null;
}
});
var G__2542__2544 = (function (coll,n,not_found){
var this__2532 = this;
var i__2533 = (n + this__2532.i);

if(cljs.core.truth_((i__2533 < this__2532.a.length)))
{return (this__2532.a[i__2533]);
} else
{return not_found;
}
});
G__2542 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2542__2543.call(this,coll,n);
case  3 :
return G__2542__2544.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2542;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2534 = this;
return (this__2534.a.length - this__2534.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2535 = this;
return (this__2535.a[this__2535.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2536 = this;
if(cljs.core.truth_(((this__2536.i + 1) < this__2536.a.length)))
{return (new cljs.core.IndexedSeq(this__2536.a,(this__2536.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2537 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__2546 = null;
var G__2546__2547 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2546__2548 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2546 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2546__2547.call(this,array,f);
case  3 :
return G__2546__2548.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2546;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2550 = null;
var G__2550__2551 = (function (array,k){
return (array[k]);
});
var G__2550__2552 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2550 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2550__2551.call(this,array,k);
case  3 :
return G__2550__2552.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2550;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2554 = null;
var G__2554__2555 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2554__2556 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2554 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2554__2555.call(this,array,n);
case  3 :
return G__2554__2556.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2554;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____2558 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2558))
{var s__2559 = temp__3698__auto____2558;

return cljs.core._first.call(null,s__2559);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__2560 = cljs.core.next.call(null,s);
s = G__2560;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__2561 = cljs.core.seq.call(null,x);
var n__2562 = 0;

while(true){
if(cljs.core.truth_(s__2561))
{{
var G__2563 = cljs.core.next.call(null,s__2561);
var G__2564 = (n__2562 + 1);
s__2561 = G__2563;
n__2562 = G__2564;
continue;
}
} else
{return n__2562;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2565 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2566 = (function() { 
var G__2568__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2569 = conj.call(null,coll,x);
var G__2570 = cljs.core.first.call(null,xs);
var G__2571 = cljs.core.next.call(null,xs);
coll = G__2569;
x = G__2570;
xs = G__2571;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2568 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2568__delegate.call(this, coll, x, xs);
};
G__2568.cljs$lang$maxFixedArity = 2;
G__2568.cljs$lang$applyTo = (function (arglist__2572){
var coll = cljs.core.first(arglist__2572);
var x = cljs.core.first(cljs.core.next(arglist__2572));
var xs = cljs.core.rest(cljs.core.next(arglist__2572));
return G__2568__delegate.call(this, coll, x, xs);
});
return G__2568;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2565.call(this,coll,x);
default:
return conj__2566.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2566.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2573 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2574 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2573.call(this,coll,n);
case  3 :
return nth__2574.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2576 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2577 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2576.call(this,o,k);
case  3 :
return get__2577.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__2580 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2581 = (function() { 
var G__2583__delegate = function (coll,k,v,kvs){
while(true){
var ret__2579 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2584 = ret__2579;
var G__2585 = cljs.core.first.call(null,kvs);
var G__2586 = cljs.core.second.call(null,kvs);
var G__2587 = cljs.core.nnext.call(null,kvs);
coll = G__2584;
k = G__2585;
v = G__2586;
kvs = G__2587;
continue;
}
} else
{return ret__2579;
}
break;
}
};
var G__2583 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2583__delegate.call(this, coll, k, v, kvs);
};
G__2583.cljs$lang$maxFixedArity = 3;
G__2583.cljs$lang$applyTo = (function (arglist__2588){
var coll = cljs.core.first(arglist__2588);
var k = cljs.core.first(cljs.core.next(arglist__2588));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2588)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2588)));
return G__2583__delegate.call(this, coll, k, v, kvs);
});
return G__2583;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2580.call(this,coll,k,v);
default:
return assoc__2581.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2581.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__2590 = (function (coll){
return coll;
});
var dissoc__2591 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2592 = (function() { 
var G__2594__delegate = function (coll,k,ks){
while(true){
var ret__2589 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2595 = ret__2589;
var G__2596 = cljs.core.first.call(null,ks);
var G__2597 = cljs.core.next.call(null,ks);
coll = G__2595;
k = G__2596;
ks = G__2597;
continue;
}
} else
{return ret__2589;
}
break;
}
};
var G__2594 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2594__delegate.call(this, coll, k, ks);
};
G__2594.cljs$lang$maxFixedArity = 2;
G__2594.cljs$lang$applyTo = (function (arglist__2598){
var coll = cljs.core.first(arglist__2598);
var k = cljs.core.first(cljs.core.next(arglist__2598));
var ks = cljs.core.rest(cljs.core.next(arglist__2598));
return G__2594__delegate.call(this, coll, k, ks);
});
return G__2594;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2590.call(this,coll);
case  2 :
return dissoc__2591.call(this,coll,k);
default:
return dissoc__2592.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2592.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__316__auto____2599 = o;

if(cljs.core.truth_((function (){var and__3546__auto____2600 = x__316__auto____2599;

if(cljs.core.truth_(and__3546__auto____2600))
{var and__3546__auto____2601 = x__316__auto____2599.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____2601))
{return cljs.core.not.call(null,x__316__auto____2599.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____2601;
}
} else
{return and__3546__auto____2600;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__316__auto____2599);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__2603 = (function (coll){
return coll;
});
var disj__2604 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2605 = (function() { 
var G__2607__delegate = function (coll,k,ks){
while(true){
var ret__2602 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2608 = ret__2602;
var G__2609 = cljs.core.first.call(null,ks);
var G__2610 = cljs.core.next.call(null,ks);
coll = G__2608;
k = G__2609;
ks = G__2610;
continue;
}
} else
{return ret__2602;
}
break;
}
};
var G__2607 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2607__delegate.call(this, coll, k, ks);
};
G__2607.cljs$lang$maxFixedArity = 2;
G__2607.cljs$lang$applyTo = (function (arglist__2611){
var coll = cljs.core.first(arglist__2611);
var k = cljs.core.first(cljs.core.next(arglist__2611));
var ks = cljs.core.rest(cljs.core.next(arglist__2611));
return G__2607__delegate.call(this, coll, k, ks);
});
return G__2607;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2603.call(this,coll);
case  2 :
return disj__2604.call(this,coll,k);
default:
return disj__2605.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2605.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__316__auto____2612 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2613 = x__316__auto____2612;

if(cljs.core.truth_(and__3546__auto____2613))
{var and__3546__auto____2614 = x__316__auto____2612.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____2614))
{return cljs.core.not.call(null,x__316__auto____2612.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____2614;
}
} else
{return and__3546__auto____2613;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__316__auto____2612);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__316__auto____2615 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2616 = x__316__auto____2615;

if(cljs.core.truth_(and__3546__auto____2616))
{var and__3546__auto____2617 = x__316__auto____2615.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____2617))
{return cljs.core.not.call(null,x__316__auto____2615.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____2617;
}
} else
{return and__3546__auto____2616;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__316__auto____2615);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__316__auto____2618 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2619 = x__316__auto____2618;

if(cljs.core.truth_(and__3546__auto____2619))
{var and__3546__auto____2620 = x__316__auto____2618.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____2620))
{return cljs.core.not.call(null,x__316__auto____2618.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____2620;
}
} else
{return and__3546__auto____2619;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__316__auto____2618);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__316__auto____2621 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2622 = x__316__auto____2621;

if(cljs.core.truth_(and__3546__auto____2622))
{var and__3546__auto____2623 = x__316__auto____2621.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____2623))
{return cljs.core.not.call(null,x__316__auto____2621.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____2623;
}
} else
{return and__3546__auto____2622;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__316__auto____2621);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__316__auto____2624 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2625 = x__316__auto____2624;

if(cljs.core.truth_(and__3546__auto____2625))
{var and__3546__auto____2626 = x__316__auto____2624.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____2626))
{return cljs.core.not.call(null,x__316__auto____2624.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____2626;
}
} else
{return and__3546__auto____2625;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__316__auto____2624);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__316__auto____2627 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2628 = x__316__auto____2627;

if(cljs.core.truth_(and__3546__auto____2628))
{var and__3546__auto____2629 = x__316__auto____2627.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____2629))
{return cljs.core.not.call(null,x__316__auto____2627.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____2629;
}
} else
{return and__3546__auto____2628;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__316__auto____2627);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__316__auto____2630 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2631 = x__316__auto____2630;

if(cljs.core.truth_(and__3546__auto____2631))
{var and__3546__auto____2632 = x__316__auto____2630.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____2632))
{return cljs.core.not.call(null,x__316__auto____2630.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____2632;
}
} else
{return and__3546__auto____2631;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__316__auto____2630);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2633 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2633.push(key);
}));
return keys__2633;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__316__auto____2634 = s;

if(cljs.core.truth_((function (){var and__3546__auto____2635 = x__316__auto____2634;

if(cljs.core.truth_(and__3546__auto____2635))
{var and__3546__auto____2636 = x__316__auto____2634.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____2636))
{return cljs.core.not.call(null,x__316__auto____2634.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____2636;
}
} else
{return and__3546__auto____2635;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__316__auto____2634);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____2637 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2637))
{return cljs.core.not.call(null,(function (){var or__3548__auto____2638 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____2638))
{return or__3548__auto____2638;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____2637;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____2639 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2639))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____2639;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____2640 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2640))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____2640;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____2641 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____2641))
{return (n == n.toFixed());
} else
{return and__3546__auto____2641;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2642 = coll;

if(cljs.core.truth_(and__3546__auto____2642))
{var and__3546__auto____2643 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____2643))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____2643;
}
} else
{return and__3546__auto____2642;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___2648 = (function (x){
return true;
});
var distinct_QMARK___2649 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2650 = (function() { 
var G__2652__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2644 = cljs.core.set([y,x]);
var xs__2645 = more;

while(true){
var x__2646 = cljs.core.first.call(null,xs__2645);
var etc__2647 = cljs.core.next.call(null,xs__2645);

if(cljs.core.truth_(xs__2645))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2644,x__2646)))
{return false;
} else
{{
var G__2653 = cljs.core.conj.call(null,s__2644,x__2646);
var G__2654 = etc__2647;
s__2644 = G__2653;
xs__2645 = G__2654;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__2652 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2652__delegate.call(this, x, y, more);
};
G__2652.cljs$lang$maxFixedArity = 2;
G__2652.cljs$lang$applyTo = (function (arglist__2655){
var x = cljs.core.first(arglist__2655);
var y = cljs.core.first(cljs.core.next(arglist__2655));
var more = cljs.core.rest(cljs.core.next(arglist__2655));
return G__2652__delegate.call(this, x, y, more);
});
return G__2652;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2648.call(this,x);
case  2 :
return distinct_QMARK___2649.call(this,x,y);
default:
return distinct_QMARK___2650.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2650.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__2656 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2656)))
{return r__2656;
} else
{if(cljs.core.truth_(r__2656))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__2658 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2659 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2657 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2657,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2657);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2658.call(this,comp);
case  2 :
return sort__2659.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2661 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2662 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2661.call(this,keyfn,comp);
case  3 :
return sort_by__2662.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2664 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2665 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2664.call(this,f,val);
case  3 :
return reduce__2665.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2671 = (function (f,coll){
var temp__3695__auto____2667 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____2667))
{var s__2668 = temp__3695__auto____2667;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2668),cljs.core.next.call(null,s__2668));
} else
{return f.call(null);
}
});
var seq_reduce__2672 = (function (f,val,coll){
var val__2669 = val;
var coll__2670 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2670))
{{
var G__2674 = f.call(null,val__2669,cljs.core.first.call(null,coll__2670));
var G__2675 = cljs.core.next.call(null,coll__2670);
val__2669 = G__2674;
coll__2670 = G__2675;
continue;
}
} else
{return val__2669;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2671.call(this,f,val);
case  3 :
return seq_reduce__2672.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2676 = null;
var G__2676__2677 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2676__2678 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2676 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2676__2677.call(this,coll,f);
case  3 :
return G__2676__2678.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2676;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2680 = (function (){
return 0;
});
var _PLUS___2681 = (function (x){
return x;
});
var _PLUS___2682 = (function (x,y){
return (x + y);
});
var _PLUS___2683 = (function() { 
var G__2685__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2685 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2685__delegate.call(this, x, y, more);
};
G__2685.cljs$lang$maxFixedArity = 2;
G__2685.cljs$lang$applyTo = (function (arglist__2686){
var x = cljs.core.first(arglist__2686);
var y = cljs.core.first(cljs.core.next(arglist__2686));
var more = cljs.core.rest(cljs.core.next(arglist__2686));
return G__2685__delegate.call(this, x, y, more);
});
return G__2685;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2680.call(this);
case  1 :
return _PLUS___2681.call(this,x);
case  2 :
return _PLUS___2682.call(this,x,y);
default:
return _PLUS___2683.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2683.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___2687 = (function (x){
return (- x);
});
var ___2688 = (function (x,y){
return (x - y);
});
var ___2689 = (function() { 
var G__2691__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2691 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2691__delegate.call(this, x, y, more);
};
G__2691.cljs$lang$maxFixedArity = 2;
G__2691.cljs$lang$applyTo = (function (arglist__2692){
var x = cljs.core.first(arglist__2692);
var y = cljs.core.first(cljs.core.next(arglist__2692));
var more = cljs.core.rest(cljs.core.next(arglist__2692));
return G__2691__delegate.call(this, x, y, more);
});
return G__2691;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2687.call(this,x);
case  2 :
return ___2688.call(this,x,y);
default:
return ___2689.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2689.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2693 = (function (){
return 1;
});
var _STAR___2694 = (function (x){
return x;
});
var _STAR___2695 = (function (x,y){
return (x * y);
});
var _STAR___2696 = (function() { 
var G__2698__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2698 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2698__delegate.call(this, x, y, more);
};
G__2698.cljs$lang$maxFixedArity = 2;
G__2698.cljs$lang$applyTo = (function (arglist__2699){
var x = cljs.core.first(arglist__2699);
var y = cljs.core.first(cljs.core.next(arglist__2699));
var more = cljs.core.rest(cljs.core.next(arglist__2699));
return G__2698__delegate.call(this, x, y, more);
});
return G__2698;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2693.call(this);
case  1 :
return _STAR___2694.call(this,x);
case  2 :
return _STAR___2695.call(this,x,y);
default:
return _STAR___2696.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2696.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___2700 = (function (x){
return (1 / x);
});
var _SLASH___2701 = (function (x,y){
return (x / y);
});
var _SLASH___2702 = (function() { 
var G__2704__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2704 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2704__delegate.call(this, x, y, more);
};
G__2704.cljs$lang$maxFixedArity = 2;
G__2704.cljs$lang$applyTo = (function (arglist__2705){
var x = cljs.core.first(arglist__2705);
var y = cljs.core.first(cljs.core.next(arglist__2705));
var more = cljs.core.rest(cljs.core.next(arglist__2705));
return G__2704__delegate.call(this, x, y, more);
});
return G__2704;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2700.call(this,x);
case  2 :
return _SLASH___2701.call(this,x,y);
default:
return _SLASH___2702.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2702.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___2706 = (function (x){
return true;
});
var _LT___2707 = (function (x,y){
return (x < y);
});
var _LT___2708 = (function() { 
var G__2710__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2711 = y;
var G__2712 = cljs.core.first.call(null,more);
var G__2713 = cljs.core.next.call(null,more);
x = G__2711;
y = G__2712;
more = G__2713;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2710 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2710__delegate.call(this, x, y, more);
};
G__2710.cljs$lang$maxFixedArity = 2;
G__2710.cljs$lang$applyTo = (function (arglist__2714){
var x = cljs.core.first(arglist__2714);
var y = cljs.core.first(cljs.core.next(arglist__2714));
var more = cljs.core.rest(cljs.core.next(arglist__2714));
return G__2710__delegate.call(this, x, y, more);
});
return G__2710;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2706.call(this,x);
case  2 :
return _LT___2707.call(this,x,y);
default:
return _LT___2708.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2708.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___2715 = (function (x){
return true;
});
var _LT__EQ___2716 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2717 = (function() { 
var G__2719__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2720 = y;
var G__2721 = cljs.core.first.call(null,more);
var G__2722 = cljs.core.next.call(null,more);
x = G__2720;
y = G__2721;
more = G__2722;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2719 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2719__delegate.call(this, x, y, more);
};
G__2719.cljs$lang$maxFixedArity = 2;
G__2719.cljs$lang$applyTo = (function (arglist__2723){
var x = cljs.core.first(arglist__2723);
var y = cljs.core.first(cljs.core.next(arglist__2723));
var more = cljs.core.rest(cljs.core.next(arglist__2723));
return G__2719__delegate.call(this, x, y, more);
});
return G__2719;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2715.call(this,x);
case  2 :
return _LT__EQ___2716.call(this,x,y);
default:
return _LT__EQ___2717.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2717.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___2724 = (function (x){
return true;
});
var _GT___2725 = (function (x,y){
return (x > y);
});
var _GT___2726 = (function() { 
var G__2728__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2729 = y;
var G__2730 = cljs.core.first.call(null,more);
var G__2731 = cljs.core.next.call(null,more);
x = G__2729;
y = G__2730;
more = G__2731;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2728 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2728__delegate.call(this, x, y, more);
};
G__2728.cljs$lang$maxFixedArity = 2;
G__2728.cljs$lang$applyTo = (function (arglist__2732){
var x = cljs.core.first(arglist__2732);
var y = cljs.core.first(cljs.core.next(arglist__2732));
var more = cljs.core.rest(cljs.core.next(arglist__2732));
return G__2728__delegate.call(this, x, y, more);
});
return G__2728;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2724.call(this,x);
case  2 :
return _GT___2725.call(this,x,y);
default:
return _GT___2726.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2726.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___2733 = (function (x){
return true;
});
var _GT__EQ___2734 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2735 = (function() { 
var G__2737__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2738 = y;
var G__2739 = cljs.core.first.call(null,more);
var G__2740 = cljs.core.next.call(null,more);
x = G__2738;
y = G__2739;
more = G__2740;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2737 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2737__delegate.call(this, x, y, more);
};
G__2737.cljs$lang$maxFixedArity = 2;
G__2737.cljs$lang$applyTo = (function (arglist__2741){
var x = cljs.core.first(arglist__2741);
var y = cljs.core.first(cljs.core.next(arglist__2741));
var more = cljs.core.rest(cljs.core.next(arglist__2741));
return G__2737__delegate.call(this, x, y, more);
});
return G__2737;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2733.call(this,x);
case  2 :
return _GT__EQ___2734.call(this,x,y);
default:
return _GT__EQ___2735.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2735.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__2742 = (function (x){
return x;
});
var max__2743 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2744 = (function() { 
var G__2746__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2746 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2746__delegate.call(this, x, y, more);
};
G__2746.cljs$lang$maxFixedArity = 2;
G__2746.cljs$lang$applyTo = (function (arglist__2747){
var x = cljs.core.first(arglist__2747);
var y = cljs.core.first(cljs.core.next(arglist__2747));
var more = cljs.core.rest(cljs.core.next(arglist__2747));
return G__2746__delegate.call(this, x, y, more);
});
return G__2746;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2742.call(this,x);
case  2 :
return max__2743.call(this,x,y);
default:
return max__2744.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2744.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2748 = (function (x){
return x;
});
var min__2749 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2750 = (function() { 
var G__2752__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2752 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2752__delegate.call(this, x, y, more);
};
G__2752.cljs$lang$maxFixedArity = 2;
G__2752.cljs$lang$applyTo = (function (arglist__2753){
var x = cljs.core.first(arglist__2753);
var y = cljs.core.first(cljs.core.next(arglist__2753));
var more = cljs.core.rest(cljs.core.next(arglist__2753));
return G__2752__delegate.call(this, x, y, more);
});
return G__2752;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2748.call(this,x);
case  2 :
return min__2749.call(this,x,y);
default:
return min__2750.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2750.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__2754 = (n % d);

return cljs.core.fix.call(null,((n - rem__2754) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2755 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2755));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2756 = (function (){
return Math.random.call(null);
});
var rand__2757 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2756.call(this);
case  1 :
return rand__2757.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___2759 = (function (x){
return true;
});
var _EQ__EQ___2760 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2761 = (function() { 
var G__2763__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2764 = y;
var G__2765 = cljs.core.first.call(null,more);
var G__2766 = cljs.core.next.call(null,more);
x = G__2764;
y = G__2765;
more = G__2766;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2763 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2763__delegate.call(this, x, y, more);
};
G__2763.cljs$lang$maxFixedArity = 2;
G__2763.cljs$lang$applyTo = (function (arglist__2767){
var x = cljs.core.first(arglist__2767);
var y = cljs.core.first(cljs.core.next(arglist__2767));
var more = cljs.core.rest(cljs.core.next(arglist__2767));
return G__2763__delegate.call(this, x, y, more);
});
return G__2763;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2759.call(this,x);
case  2 :
return _EQ__EQ___2760.call(this,x,y);
default:
return _EQ__EQ___2761.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2761.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (0 < n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (0 === n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__2768 = n;
var xs__2769 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2770 = xs__2769;

if(cljs.core.truth_(and__3546__auto____2770))
{return (n__2768 > 0);
} else
{return and__3546__auto____2770;
}
})()))
{{
var G__2771 = (n__2768 - 1);
var G__2772 = cljs.core.next.call(null,xs__2769);
n__2768 = G__2771;
xs__2769 = G__2772;
continue;
}
} else
{return xs__2769;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2777 = null;
var G__2777__2778 = (function (coll,n){
var temp__3695__auto____2773 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2773))
{var xs__2774 = temp__3695__auto____2773;

return cljs.core.first.call(null,xs__2774);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__2777__2779 = (function (coll,n,not_found){
var temp__3695__auto____2775 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2775))
{var xs__2776 = temp__3695__auto____2775;

return cljs.core.first.call(null,xs__2776);
} else
{return not_found;
}
});
G__2777 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2777__2778.call(this,coll,n);
case  3 :
return G__2777__2779.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2777;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___2781 = (function (){
return "";
});
var str_STAR___2782 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2783 = (function() { 
var G__2785__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2786 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__2787 = cljs.core.next.call(null,more);
sb = G__2786;
more = G__2787;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__2785 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2785__delegate.call(this, x, ys);
};
G__2785.cljs$lang$maxFixedArity = 1;
G__2785.cljs$lang$applyTo = (function (arglist__2788){
var x = cljs.core.first(arglist__2788);
var ys = cljs.core.rest(arglist__2788);
return G__2785__delegate.call(this, x, ys);
});
return G__2785;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___2781.call(this);
case  1 :
return str_STAR___2782.call(this,x);
default:
return str_STAR___2783.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2783.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__2789 = (function (){
return "";
});
var str__2790 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2791 = (function() { 
var G__2793__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__2793 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2793__delegate.call(this, x, ys);
};
G__2793.cljs$lang$maxFixedArity = 1;
G__2793.cljs$lang$applyTo = (function (arglist__2794){
var x = cljs.core.first(arglist__2794);
var ys = cljs.core.rest(arglist__2794);
return G__2793__delegate.call(this, x, ys);
});
return G__2793;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2789.call(this);
case  1 :
return str__2790.call(this,x);
default:
return str__2791.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2791.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2795 = (function (s,start){
return s.substring(start);
});
var subs__2796 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2795.call(this,s,start);
case  3 :
return subs__2796.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__2798 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__2799 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2798.call(this,ns);
case  2 :
return symbol__2799.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__2801 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__2802 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2801.call(this,ns);
case  2 :
return keyword__2802.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2804 = cljs.core.seq.call(null,x);
var ys__2805 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2804)))
{return cljs.core.nil_QMARK_.call(null,ys__2805);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2805)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2804),cljs.core.first.call(null,ys__2805))))
{{
var G__2806 = cljs.core.next.call(null,xs__2804);
var G__2807 = cljs.core.next.call(null,ys__2805);
xs__2804 = G__2806;
ys__2805 = G__2807;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__2808_SHARP_,p2__2809_SHARP_){
return cljs.core.hash_combine.call(null,p1__2808_SHARP_,cljs.core.hash.call(null,p2__2809_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__2810__2811 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__2810__2811))
{var G__2813__2815 = cljs.core.first.call(null,G__2810__2811);
var vec__2814__2816 = G__2813__2815;
var key_name__2817 = cljs.core.nth.call(null,vec__2814__2816,0,null);
var f__2818 = cljs.core.nth.call(null,vec__2814__2816,1,null);
var G__2810__2819 = G__2810__2811;

var G__2813__2820 = G__2813__2815;
var G__2810__2821 = G__2810__2819;

while(true){
var vec__2822__2823 = G__2813__2820;
var key_name__2824 = cljs.core.nth.call(null,vec__2822__2823,0,null);
var f__2825 = cljs.core.nth.call(null,vec__2822__2823,1,null);
var G__2810__2826 = G__2810__2821;

var str_name__2827 = cljs.core.name.call(null,key_name__2824);

obj[str_name__2827] = f__2825;
var temp__3698__auto____2828 = cljs.core.next.call(null,G__2810__2826);

if(cljs.core.truth_(temp__3698__auto____2828))
{var G__2810__2829 = temp__3698__auto____2828;

{
var G__2830 = cljs.core.first.call(null,G__2810__2829);
var G__2831 = G__2810__2829;
G__2813__2820 = G__2830;
G__2810__2821 = G__2831;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2832 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2833 = this;
return (new cljs.core.List(this__2833.meta,o,coll,(this__2833.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2834 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2835 = this;
return this__2835.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2836 = this;
return this__2836.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2837 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2838 = this;
return this__2838.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2839 = this;
return this__2839.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2840 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2841 = this;
return (new cljs.core.List(meta,this__2841.first,this__2841.rest,this__2841.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2842 = this;
return this__2842.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2843 = this;
return cljs.core.List.EMPTY;
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2844 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2845 = this;
return (new cljs.core.List(this__2845.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2846 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2847 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2848 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2849 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2850 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2851 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2852 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2853 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2854 = this;
return this__2854.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2855 = this;
return coll;
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__2856){
var items = cljs.core.seq( arglist__2856 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2857 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2858 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2859 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2860 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2860.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2861 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2862 = this;
return this__2862.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2863 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2863.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2863.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2864 = this;
return this__2864.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2865 = this;
return (new cljs.core.Cons(meta,this__2865.first,this__2865.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2866 = null;
var G__2866__2867 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2866__2868 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2866 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2866__2867.call(this,string,f);
case  3 :
return G__2866__2868.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2866;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2870 = null;
var G__2870__2871 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2870__2872 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2870 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2870__2871.call(this,string,k);
case  3 :
return G__2870__2872.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2870;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2874 = null;
var G__2874__2875 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2874__2876 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2874 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2874__2875.call(this,string,n);
case  3 :
return G__2874__2876.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2874;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String['prototype']['call'] = (function() {
var G__2878 = null;
var G__2878__2879 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2878__2880 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2878 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2878__2879.call(this,_,coll);
case  3 :
return G__2878__2880.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2878;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2882 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2882;
} else
{lazy_seq.x = x__2882.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2883 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2884 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2885 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2886 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2886.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2887 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2888 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2889 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2890 = this;
return this__2890.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2891 = this;
return (new cljs.core.LazySeq(meta,this__2891.realized,this__2891.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2892 = cljs.core.array.call(null);

var s__2893 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2893)))
{ary__2892.push(cljs.core.first.call(null,s__2893));
{
var G__2894 = cljs.core.next.call(null,s__2893);
s__2893 = G__2894;
continue;
}
} else
{return ary__2892;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2895 = s;
var i__2896 = n;
var sum__2897 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2898 = (i__2896 > 0);

if(cljs.core.truth_(and__3546__auto____2898))
{return cljs.core.seq.call(null,s__2895);
} else
{return and__3546__auto____2898;
}
})()))
{{
var G__2899 = cljs.core.next.call(null,s__2895);
var G__2900 = (i__2896 - 1);
var G__2901 = (sum__2897 + 1);
s__2895 = G__2899;
i__2896 = G__2900;
sum__2897 = G__2901;
continue;
}
} else
{return sum__2897;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__2905 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2906 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2907 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2902 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2902))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2902),concat.call(null,cljs.core.rest.call(null,s__2902),y));
} else
{return y;
}
})));
});
var concat__2908 = (function() { 
var G__2910__delegate = function (x,y,zs){
var cat__2904 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2903 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2903))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2903),cat.call(null,cljs.core.rest.call(null,xys__2903),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2904.call(null,concat.call(null,x,y),zs);
};
var G__2910 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2910__delegate.call(this, x, y, zs);
};
G__2910.cljs$lang$maxFixedArity = 2;
G__2910.cljs$lang$applyTo = (function (arglist__2911){
var x = cljs.core.first(arglist__2911);
var y = cljs.core.first(cljs.core.next(arglist__2911));
var zs = cljs.core.rest(cljs.core.next(arglist__2911));
return G__2910__delegate.call(this, x, y, zs);
});
return G__2910;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2905.call(this);
case  1 :
return concat__2906.call(this,x);
case  2 :
return concat__2907.call(this,x,y);
default:
return concat__2908.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2908.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___2912 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2913 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2914 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2915 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2916 = (function() { 
var G__2918__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2918 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2918__delegate.call(this, a, b, c, d, more);
};
G__2918.cljs$lang$maxFixedArity = 4;
G__2918.cljs$lang$applyTo = (function (arglist__2919){
var a = cljs.core.first(arglist__2919);
var b = cljs.core.first(cljs.core.next(arglist__2919));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2919)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2919))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2919))));
return G__2918__delegate.call(this, a, b, c, d, more);
});
return G__2918;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2912.call(this,a);
case  2 :
return list_STAR___2913.call(this,a,b);
case  3 :
return list_STAR___2914.call(this,a,b,c);
case  4 :
return list_STAR___2915.call(this,a,b,c,d);
default:
return list_STAR___2916.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2916.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2929 = (function (f,args){
var fixed_arity__2920 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__2920 + 1)) <= fixed_arity__2920)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2930 = (function (f,x,args){
var arglist__2921 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2922 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2921,fixed_arity__2922) <= fixed_arity__2922)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2921));
} else
{return f.cljs$lang$applyTo(arglist__2921);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2921));
}
});
var apply__2931 = (function (f,x,y,args){
var arglist__2923 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2924 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2923,fixed_arity__2924) <= fixed_arity__2924)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2923));
} else
{return f.cljs$lang$applyTo(arglist__2923);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2923));
}
});
var apply__2932 = (function (f,x,y,z,args){
var arglist__2925 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2926 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2925,fixed_arity__2926) <= fixed_arity__2926)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2925));
} else
{return f.cljs$lang$applyTo(arglist__2925);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2925));
}
});
var apply__2933 = (function() { 
var G__2935__delegate = function (f,a,b,c,d,args){
var arglist__2927 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2928 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2927,fixed_arity__2928) <= fixed_arity__2928)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2927));
} else
{return f.cljs$lang$applyTo(arglist__2927);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2927));
}
};
var G__2935 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2935__delegate.call(this, f, a, b, c, d, args);
};
G__2935.cljs$lang$maxFixedArity = 5;
G__2935.cljs$lang$applyTo = (function (arglist__2936){
var f = cljs.core.first(arglist__2936);
var a = cljs.core.first(cljs.core.next(arglist__2936));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2936)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2936))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2936)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2936)))));
return G__2935__delegate.call(this, f, a, b, c, d, args);
});
return G__2935;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2929.call(this,f,a);
case  3 :
return apply__2930.call(this,f,a,b);
case  4 :
return apply__2931.call(this,f,a,b,c);
case  5 :
return apply__2932.call(this,f,a,b,c,d);
default:
return apply__2933.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2933.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__2937){
var obj = cljs.core.first(arglist__2937);
var f = cljs.core.first(cljs.core.next(arglist__2937));
var args = cljs.core.rest(cljs.core.next(arglist__2937));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___2938 = (function (x){
return false;
});
var not_EQ___2939 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2940 = (function() { 
var G__2942__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2942 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2942__delegate.call(this, x, y, more);
};
G__2942.cljs$lang$maxFixedArity = 2;
G__2942.cljs$lang$applyTo = (function (arglist__2943){
var x = cljs.core.first(arglist__2943);
var y = cljs.core.first(cljs.core.next(arglist__2943));
var more = cljs.core.rest(cljs.core.next(arglist__2943));
return G__2942__delegate.call(this, x, y, more);
});
return G__2942;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2938.call(this,x);
case  2 :
return not_EQ___2939.call(this,x,y);
default:
return not_EQ___2940.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2940.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__2944 = pred;
var G__2945 = cljs.core.next.call(null,coll);
pred = G__2944;
coll = G__2945;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____2946 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____2946))
{return or__3548__auto____2946;
} else
{{
var G__2947 = pred;
var G__2948 = cljs.core.next.call(null,coll);
pred = G__2947;
coll = G__2948;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__2949 = null;
var G__2949__2950 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2949__2951 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2949__2952 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2949__2953 = (function() { 
var G__2955__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2955 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2955__delegate.call(this, x, y, zs);
};
G__2955.cljs$lang$maxFixedArity = 2;
G__2955.cljs$lang$applyTo = (function (arglist__2956){
var x = cljs.core.first(arglist__2956);
var y = cljs.core.first(cljs.core.next(arglist__2956));
var zs = cljs.core.rest(cljs.core.next(arglist__2956));
return G__2955__delegate.call(this, x, y, zs);
});
return G__2955;
})()
;
G__2949 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2949__2950.call(this);
case  1 :
return G__2949__2951.call(this,x);
case  2 :
return G__2949__2952.call(this,x,y);
default:
return G__2949__2953.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2949.cljs$lang$maxFixedArity = 2;
G__2949.cljs$lang$applyTo = G__2949__2953.cljs$lang$applyTo;
return G__2949;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2957__delegate = function (args){
return x;
};
var G__2957 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2957__delegate.call(this, args);
};
G__2957.cljs$lang$maxFixedArity = 0;
G__2957.cljs$lang$applyTo = (function (arglist__2958){
var args = cljs.core.seq( arglist__2958 );;
return G__2957__delegate.call(this, args);
});
return G__2957;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__2962 = (function (){
return cljs.core.identity;
});
var comp__2963 = (function (f){
return f;
});
var comp__2964 = (function (f,g){
return (function() {
var G__2968 = null;
var G__2968__2969 = (function (){
return f.call(null,g.call(null));
});
var G__2968__2970 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2968__2971 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2968__2972 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2968__2973 = (function() { 
var G__2975__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__2975 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2975__delegate.call(this, x, y, z, args);
};
G__2975.cljs$lang$maxFixedArity = 3;
G__2975.cljs$lang$applyTo = (function (arglist__2976){
var x = cljs.core.first(arglist__2976);
var y = cljs.core.first(cljs.core.next(arglist__2976));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2976)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2976)));
return G__2975__delegate.call(this, x, y, z, args);
});
return G__2975;
})()
;
G__2968 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2968__2969.call(this);
case  1 :
return G__2968__2970.call(this,x);
case  2 :
return G__2968__2971.call(this,x,y);
case  3 :
return G__2968__2972.call(this,x,y,z);
default:
return G__2968__2973.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2968.cljs$lang$maxFixedArity = 3;
G__2968.cljs$lang$applyTo = G__2968__2973.cljs$lang$applyTo;
return G__2968;
})()
});
var comp__2965 = (function (f,g,h){
return (function() {
var G__2977 = null;
var G__2977__2978 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2977__2979 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2977__2980 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2977__2981 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2977__2982 = (function() { 
var G__2984__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__2984 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2984__delegate.call(this, x, y, z, args);
};
G__2984.cljs$lang$maxFixedArity = 3;
G__2984.cljs$lang$applyTo = (function (arglist__2985){
var x = cljs.core.first(arglist__2985);
var y = cljs.core.first(cljs.core.next(arglist__2985));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2985)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2985)));
return G__2984__delegate.call(this, x, y, z, args);
});
return G__2984;
})()
;
G__2977 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2977__2978.call(this);
case  1 :
return G__2977__2979.call(this,x);
case  2 :
return G__2977__2980.call(this,x,y);
case  3 :
return G__2977__2981.call(this,x,y,z);
default:
return G__2977__2982.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2977.cljs$lang$maxFixedArity = 3;
G__2977.cljs$lang$applyTo = G__2977__2982.cljs$lang$applyTo;
return G__2977;
})()
});
var comp__2966 = (function() { 
var G__2986__delegate = function (f1,f2,f3,fs){
var fs__2959 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__2987__delegate = function (args){
var ret__2960 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2959),args);
var fs__2961 = cljs.core.next.call(null,fs__2959);

while(true){
if(cljs.core.truth_(fs__2961))
{{
var G__2988 = cljs.core.first.call(null,fs__2961).call(null,ret__2960);
var G__2989 = cljs.core.next.call(null,fs__2961);
ret__2960 = G__2988;
fs__2961 = G__2989;
continue;
}
} else
{return ret__2960;
}
break;
}
};
var G__2987 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2987__delegate.call(this, args);
};
G__2987.cljs$lang$maxFixedArity = 0;
G__2987.cljs$lang$applyTo = (function (arglist__2990){
var args = cljs.core.seq( arglist__2990 );;
return G__2987__delegate.call(this, args);
});
return G__2987;
})()
;
};
var G__2986 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2986__delegate.call(this, f1, f2, f3, fs);
};
G__2986.cljs$lang$maxFixedArity = 3;
G__2986.cljs$lang$applyTo = (function (arglist__2991){
var f1 = cljs.core.first(arglist__2991);
var f2 = cljs.core.first(cljs.core.next(arglist__2991));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2991)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2991)));
return G__2986__delegate.call(this, f1, f2, f3, fs);
});
return G__2986;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2962.call(this);
case  1 :
return comp__2963.call(this,f1);
case  2 :
return comp__2964.call(this,f1,f2);
case  3 :
return comp__2965.call(this,f1,f2,f3);
default:
return comp__2966.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__2966.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2992 = (function (f,arg1){
return (function() { 
var G__2997__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__2997 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2997__delegate.call(this, args);
};
G__2997.cljs$lang$maxFixedArity = 0;
G__2997.cljs$lang$applyTo = (function (arglist__2998){
var args = cljs.core.seq( arglist__2998 );;
return G__2997__delegate.call(this, args);
});
return G__2997;
})()
;
});
var partial__2993 = (function (f,arg1,arg2){
return (function() { 
var G__2999__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__2999 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2999__delegate.call(this, args);
};
G__2999.cljs$lang$maxFixedArity = 0;
G__2999.cljs$lang$applyTo = (function (arglist__3000){
var args = cljs.core.seq( arglist__3000 );;
return G__2999__delegate.call(this, args);
});
return G__2999;
})()
;
});
var partial__2994 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3001__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3001 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3001__delegate.call(this, args);
};
G__3001.cljs$lang$maxFixedArity = 0;
G__3001.cljs$lang$applyTo = (function (arglist__3002){
var args = cljs.core.seq( arglist__3002 );;
return G__3001__delegate.call(this, args);
});
return G__3001;
})()
;
});
var partial__2995 = (function() { 
var G__3003__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3004__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3004 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3004__delegate.call(this, args);
};
G__3004.cljs$lang$maxFixedArity = 0;
G__3004.cljs$lang$applyTo = (function (arglist__3005){
var args = cljs.core.seq( arglist__3005 );;
return G__3004__delegate.call(this, args);
});
return G__3004;
})()
;
};
var G__3003 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3003__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3003.cljs$lang$maxFixedArity = 4;
G__3003.cljs$lang$applyTo = (function (arglist__3006){
var f = cljs.core.first(arglist__3006);
var arg1 = cljs.core.first(cljs.core.next(arglist__3006));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3006)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3006))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3006))));
return G__3003__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3003;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__2992.call(this,f,arg1);
case  3 :
return partial__2993.call(this,f,arg1,arg2);
case  4 :
return partial__2994.call(this,f,arg1,arg2,arg3);
default:
return partial__2995.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__2995.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__3007 = (function (f,x){
return (function() {
var G__3011 = null;
var G__3011__3012 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__3011__3013 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__3011__3014 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__3011__3015 = (function() { 
var G__3017__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__3017 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3017__delegate.call(this, a, b, c, ds);
};
G__3017.cljs$lang$maxFixedArity = 3;
G__3017.cljs$lang$applyTo = (function (arglist__3018){
var a = cljs.core.first(arglist__3018);
var b = cljs.core.first(cljs.core.next(arglist__3018));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3018)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3018)));
return G__3017__delegate.call(this, a, b, c, ds);
});
return G__3017;
})()
;
G__3011 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3011__3012.call(this,a);
case  2 :
return G__3011__3013.call(this,a,b);
case  3 :
return G__3011__3014.call(this,a,b,c);
default:
return G__3011__3015.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3011.cljs$lang$maxFixedArity = 3;
G__3011.cljs$lang$applyTo = G__3011__3015.cljs$lang$applyTo;
return G__3011;
})()
});
var fnil__3008 = (function (f,x,y){
return (function() {
var G__3019 = null;
var G__3019__3020 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3019__3021 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__3019__3022 = (function() { 
var G__3024__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__3024 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3024__delegate.call(this, a, b, c, ds);
};
G__3024.cljs$lang$maxFixedArity = 3;
G__3024.cljs$lang$applyTo = (function (arglist__3025){
var a = cljs.core.first(arglist__3025);
var b = cljs.core.first(cljs.core.next(arglist__3025));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3025)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3025)));
return G__3024__delegate.call(this, a, b, c, ds);
});
return G__3024;
})()
;
G__3019 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3019__3020.call(this,a,b);
case  3 :
return G__3019__3021.call(this,a,b,c);
default:
return G__3019__3022.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3019.cljs$lang$maxFixedArity = 3;
G__3019.cljs$lang$applyTo = G__3019__3022.cljs$lang$applyTo;
return G__3019;
})()
});
var fnil__3009 = (function (f,x,y,z){
return (function() {
var G__3026 = null;
var G__3026__3027 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3026__3028 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3026__3029 = (function() { 
var G__3031__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__3031 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3031__delegate.call(this, a, b, c, ds);
};
G__3031.cljs$lang$maxFixedArity = 3;
G__3031.cljs$lang$applyTo = (function (arglist__3032){
var a = cljs.core.first(arglist__3032);
var b = cljs.core.first(cljs.core.next(arglist__3032));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3032)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3032)));
return G__3031__delegate.call(this, a, b, c, ds);
});
return G__3031;
})()
;
G__3026 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3026__3027.call(this,a,b);
case  3 :
return G__3026__3028.call(this,a,b,c);
default:
return G__3026__3029.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3026.cljs$lang$maxFixedArity = 3;
G__3026.cljs$lang$applyTo = G__3026__3029.cljs$lang$applyTo;
return G__3026;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3007.call(this,f,x);
case  3 :
return fnil__3008.call(this,f,x,y);
case  4 :
return fnil__3009.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__3035 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3033 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3033))
{var s__3034 = temp__3698__auto____3033;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3034)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3034)));
} else
{return null;
}
})));
});

return mapi__3035.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3036 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3036))
{var s__3037 = temp__3698__auto____3036;

var x__3038 = f.call(null,cljs.core.first.call(null,s__3037));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3038)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3037));
} else
{return cljs.core.cons.call(null,x__3038,keep.call(null,f,cljs.core.rest.call(null,s__3037)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__3048 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3045 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3045))
{var s__3046 = temp__3698__auto____3045;

var x__3047 = f.call(null,idx,cljs.core.first.call(null,s__3046));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3047)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3046));
} else
{return cljs.core.cons.call(null,x__3047,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3046)));
}
} else
{return null;
}
})));
});

return keepi__3048.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__3093 = (function (p){
return (function() {
var ep1 = null;
var ep1__3098 = (function (){
return true;
});
var ep1__3099 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3100 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3055 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3055))
{return p.call(null,y);
} else
{return and__3546__auto____3055;
}
})());
});
var ep1__3101 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3056 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3056))
{var and__3546__auto____3057 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3057))
{return p.call(null,z);
} else
{return and__3546__auto____3057;
}
} else
{return and__3546__auto____3056;
}
})());
});
var ep1__3102 = (function() { 
var G__3104__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3058 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3058))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3058;
}
})());
};
var G__3104 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3104__delegate.call(this, x, y, z, args);
};
G__3104.cljs$lang$maxFixedArity = 3;
G__3104.cljs$lang$applyTo = (function (arglist__3105){
var x = cljs.core.first(arglist__3105);
var y = cljs.core.first(cljs.core.next(arglist__3105));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3105)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3105)));
return G__3104__delegate.call(this, x, y, z, args);
});
return G__3104;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3098.call(this);
case  1 :
return ep1__3099.call(this,x);
case  2 :
return ep1__3100.call(this,x,y);
case  3 :
return ep1__3101.call(this,x,y,z);
default:
return ep1__3102.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3102.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3094 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3106 = (function (){
return true;
});
var ep2__3107 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3059 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3059))
{return p2.call(null,x);
} else
{return and__3546__auto____3059;
}
})());
});
var ep2__3108 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3060 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3060))
{var and__3546__auto____3061 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3061))
{var and__3546__auto____3062 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3062))
{return p2.call(null,y);
} else
{return and__3546__auto____3062;
}
} else
{return and__3546__auto____3061;
}
} else
{return and__3546__auto____3060;
}
})());
});
var ep2__3109 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3063 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3063))
{var and__3546__auto____3064 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3064))
{var and__3546__auto____3065 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3065))
{var and__3546__auto____3066 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3066))
{var and__3546__auto____3067 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3067))
{return p2.call(null,z);
} else
{return and__3546__auto____3067;
}
} else
{return and__3546__auto____3066;
}
} else
{return and__3546__auto____3065;
}
} else
{return and__3546__auto____3064;
}
} else
{return and__3546__auto____3063;
}
})());
});
var ep2__3110 = (function() { 
var G__3112__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3068 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3068))
{return cljs.core.every_QMARK_.call(null,(function (p1__3039_SHARP_){
var and__3546__auto____3069 = p1.call(null,p1__3039_SHARP_);

if(cljs.core.truth_(and__3546__auto____3069))
{return p2.call(null,p1__3039_SHARP_);
} else
{return and__3546__auto____3069;
}
}),args);
} else
{return and__3546__auto____3068;
}
})());
};
var G__3112 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3112__delegate.call(this, x, y, z, args);
};
G__3112.cljs$lang$maxFixedArity = 3;
G__3112.cljs$lang$applyTo = (function (arglist__3113){
var x = cljs.core.first(arglist__3113);
var y = cljs.core.first(cljs.core.next(arglist__3113));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3113)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3113)));
return G__3112__delegate.call(this, x, y, z, args);
});
return G__3112;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3106.call(this);
case  1 :
return ep2__3107.call(this,x);
case  2 :
return ep2__3108.call(this,x,y);
case  3 :
return ep2__3109.call(this,x,y,z);
default:
return ep2__3110.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3110.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3095 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3114 = (function (){
return true;
});
var ep3__3115 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3070 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3070))
{var and__3546__auto____3071 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3071))
{return p3.call(null,x);
} else
{return and__3546__auto____3071;
}
} else
{return and__3546__auto____3070;
}
})());
});
var ep3__3116 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3072 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3072))
{var and__3546__auto____3073 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3073))
{var and__3546__auto____3074 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3074))
{var and__3546__auto____3075 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3075))
{var and__3546__auto____3076 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3076))
{return p3.call(null,y);
} else
{return and__3546__auto____3076;
}
} else
{return and__3546__auto____3075;
}
} else
{return and__3546__auto____3074;
}
} else
{return and__3546__auto____3073;
}
} else
{return and__3546__auto____3072;
}
})());
});
var ep3__3117 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3077 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3077))
{var and__3546__auto____3078 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3078))
{var and__3546__auto____3079 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3079))
{var and__3546__auto____3080 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3080))
{var and__3546__auto____3081 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3081))
{var and__3546__auto____3082 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3082))
{var and__3546__auto____3083 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3083))
{var and__3546__auto____3084 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3084))
{return p3.call(null,z);
} else
{return and__3546__auto____3084;
}
} else
{return and__3546__auto____3083;
}
} else
{return and__3546__auto____3082;
}
} else
{return and__3546__auto____3081;
}
} else
{return and__3546__auto____3080;
}
} else
{return and__3546__auto____3079;
}
} else
{return and__3546__auto____3078;
}
} else
{return and__3546__auto____3077;
}
})());
});
var ep3__3118 = (function() { 
var G__3120__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3085 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3085))
{return cljs.core.every_QMARK_.call(null,(function (p1__3040_SHARP_){
var and__3546__auto____3086 = p1.call(null,p1__3040_SHARP_);

if(cljs.core.truth_(and__3546__auto____3086))
{var and__3546__auto____3087 = p2.call(null,p1__3040_SHARP_);

if(cljs.core.truth_(and__3546__auto____3087))
{return p3.call(null,p1__3040_SHARP_);
} else
{return and__3546__auto____3087;
}
} else
{return and__3546__auto____3086;
}
}),args);
} else
{return and__3546__auto____3085;
}
})());
};
var G__3120 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3120__delegate.call(this, x, y, z, args);
};
G__3120.cljs$lang$maxFixedArity = 3;
G__3120.cljs$lang$applyTo = (function (arglist__3121){
var x = cljs.core.first(arglist__3121);
var y = cljs.core.first(cljs.core.next(arglist__3121));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3121)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3121)));
return G__3120__delegate.call(this, x, y, z, args);
});
return G__3120;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3114.call(this);
case  1 :
return ep3__3115.call(this,x);
case  2 :
return ep3__3116.call(this,x,y);
case  3 :
return ep3__3117.call(this,x,y,z);
default:
return ep3__3118.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3118.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3096 = (function() { 
var G__3122__delegate = function (p1,p2,p3,ps){
var ps__3088 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3123 = (function (){
return true;
});
var epn__3124 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3041_SHARP_){
return p1__3041_SHARP_.call(null,x);
}),ps__3088);
});
var epn__3125 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3042_SHARP_){
var and__3546__auto____3089 = p1__3042_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3089))
{return p1__3042_SHARP_.call(null,y);
} else
{return and__3546__auto____3089;
}
}),ps__3088);
});
var epn__3126 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3043_SHARP_){
var and__3546__auto____3090 = p1__3043_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3090))
{var and__3546__auto____3091 = p1__3043_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3091))
{return p1__3043_SHARP_.call(null,z);
} else
{return and__3546__auto____3091;
}
} else
{return and__3546__auto____3090;
}
}),ps__3088);
});
var epn__3127 = (function() { 
var G__3129__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3092 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3092))
{return cljs.core.every_QMARK_.call(null,(function (p1__3044_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3044_SHARP_,args);
}),ps__3088);
} else
{return and__3546__auto____3092;
}
})());
};
var G__3129 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3129__delegate.call(this, x, y, z, args);
};
G__3129.cljs$lang$maxFixedArity = 3;
G__3129.cljs$lang$applyTo = (function (arglist__3130){
var x = cljs.core.first(arglist__3130);
var y = cljs.core.first(cljs.core.next(arglist__3130));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3130)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3130)));
return G__3129__delegate.call(this, x, y, z, args);
});
return G__3129;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3123.call(this);
case  1 :
return epn__3124.call(this,x);
case  2 :
return epn__3125.call(this,x,y);
case  3 :
return epn__3126.call(this,x,y,z);
default:
return epn__3127.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3127.cljs$lang$applyTo;
return epn;
})()
};
var G__3122 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3122__delegate.call(this, p1, p2, p3, ps);
};
G__3122.cljs$lang$maxFixedArity = 3;
G__3122.cljs$lang$applyTo = (function (arglist__3131){
var p1 = cljs.core.first(arglist__3131);
var p2 = cljs.core.first(cljs.core.next(arglist__3131));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3131)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3131)));
return G__3122__delegate.call(this, p1, p2, p3, ps);
});
return G__3122;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3093.call(this,p1);
case  2 :
return every_pred__3094.call(this,p1,p2);
case  3 :
return every_pred__3095.call(this,p1,p2,p3);
default:
return every_pred__3096.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3096.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__3171 = (function (p){
return (function() {
var sp1 = null;
var sp1__3176 = (function (){
return null;
});
var sp1__3177 = (function (x){
return p.call(null,x);
});
var sp1__3178 = (function (x,y){
var or__3548__auto____3133 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3133))
{return or__3548__auto____3133;
} else
{return p.call(null,y);
}
});
var sp1__3179 = (function (x,y,z){
var or__3548__auto____3134 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3134))
{return or__3548__auto____3134;
} else
{var or__3548__auto____3135 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3135))
{return or__3548__auto____3135;
} else
{return p.call(null,z);
}
}
});
var sp1__3180 = (function() { 
var G__3182__delegate = function (x,y,z,args){
var or__3548__auto____3136 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3136))
{return or__3548__auto____3136;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3182 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3182__delegate.call(this, x, y, z, args);
};
G__3182.cljs$lang$maxFixedArity = 3;
G__3182.cljs$lang$applyTo = (function (arglist__3183){
var x = cljs.core.first(arglist__3183);
var y = cljs.core.first(cljs.core.next(arglist__3183));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3183)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3183)));
return G__3182__delegate.call(this, x, y, z, args);
});
return G__3182;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3176.call(this);
case  1 :
return sp1__3177.call(this,x);
case  2 :
return sp1__3178.call(this,x,y);
case  3 :
return sp1__3179.call(this,x,y,z);
default:
return sp1__3180.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3180.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3172 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3184 = (function (){
return null;
});
var sp2__3185 = (function (x){
var or__3548__auto____3137 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3137))
{return or__3548__auto____3137;
} else
{return p2.call(null,x);
}
});
var sp2__3186 = (function (x,y){
var or__3548__auto____3138 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3138))
{return or__3548__auto____3138;
} else
{var or__3548__auto____3139 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3139))
{return or__3548__auto____3139;
} else
{var or__3548__auto____3140 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3140))
{return or__3548__auto____3140;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3187 = (function (x,y,z){
var or__3548__auto____3141 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3141))
{return or__3548__auto____3141;
} else
{var or__3548__auto____3142 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3142))
{return or__3548__auto____3142;
} else
{var or__3548__auto____3143 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3143))
{return or__3548__auto____3143;
} else
{var or__3548__auto____3144 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3144))
{return or__3548__auto____3144;
} else
{var or__3548__auto____3145 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3145))
{return or__3548__auto____3145;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3188 = (function() { 
var G__3190__delegate = function (x,y,z,args){
var or__3548__auto____3146 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3146))
{return or__3548__auto____3146;
} else
{return cljs.core.some.call(null,(function (p1__3049_SHARP_){
var or__3548__auto____3147 = p1.call(null,p1__3049_SHARP_);

if(cljs.core.truth_(or__3548__auto____3147))
{return or__3548__auto____3147;
} else
{return p2.call(null,p1__3049_SHARP_);
}
}),args);
}
};
var G__3190 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3190__delegate.call(this, x, y, z, args);
};
G__3190.cljs$lang$maxFixedArity = 3;
G__3190.cljs$lang$applyTo = (function (arglist__3191){
var x = cljs.core.first(arglist__3191);
var y = cljs.core.first(cljs.core.next(arglist__3191));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3191)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3191)));
return G__3190__delegate.call(this, x, y, z, args);
});
return G__3190;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3184.call(this);
case  1 :
return sp2__3185.call(this,x);
case  2 :
return sp2__3186.call(this,x,y);
case  3 :
return sp2__3187.call(this,x,y,z);
default:
return sp2__3188.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3188.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3173 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3192 = (function (){
return null;
});
var sp3__3193 = (function (x){
var or__3548__auto____3148 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3148))
{return or__3548__auto____3148;
} else
{var or__3548__auto____3149 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3149))
{return or__3548__auto____3149;
} else
{return p3.call(null,x);
}
}
});
var sp3__3194 = (function (x,y){
var or__3548__auto____3150 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3150))
{return or__3548__auto____3150;
} else
{var or__3548__auto____3151 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3151))
{return or__3548__auto____3151;
} else
{var or__3548__auto____3152 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3152))
{return or__3548__auto____3152;
} else
{var or__3548__auto____3153 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3153))
{return or__3548__auto____3153;
} else
{var or__3548__auto____3154 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3154))
{return or__3548__auto____3154;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3195 = (function (x,y,z){
var or__3548__auto____3155 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3155))
{return or__3548__auto____3155;
} else
{var or__3548__auto____3156 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3156))
{return or__3548__auto____3156;
} else
{var or__3548__auto____3157 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3157))
{return or__3548__auto____3157;
} else
{var or__3548__auto____3158 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3158))
{return or__3548__auto____3158;
} else
{var or__3548__auto____3159 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3159))
{return or__3548__auto____3159;
} else
{var or__3548__auto____3160 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3160))
{return or__3548__auto____3160;
} else
{var or__3548__auto____3161 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3161))
{return or__3548__auto____3161;
} else
{var or__3548__auto____3162 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3162))
{return or__3548__auto____3162;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__3196 = (function() { 
var G__3198__delegate = function (x,y,z,args){
var or__3548__auto____3163 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3163))
{return or__3548__auto____3163;
} else
{return cljs.core.some.call(null,(function (p1__3050_SHARP_){
var or__3548__auto____3164 = p1.call(null,p1__3050_SHARP_);

if(cljs.core.truth_(or__3548__auto____3164))
{return or__3548__auto____3164;
} else
{var or__3548__auto____3165 = p2.call(null,p1__3050_SHARP_);

if(cljs.core.truth_(or__3548__auto____3165))
{return or__3548__auto____3165;
} else
{return p3.call(null,p1__3050_SHARP_);
}
}
}),args);
}
};
var G__3198 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3198__delegate.call(this, x, y, z, args);
};
G__3198.cljs$lang$maxFixedArity = 3;
G__3198.cljs$lang$applyTo = (function (arglist__3199){
var x = cljs.core.first(arglist__3199);
var y = cljs.core.first(cljs.core.next(arglist__3199));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3199)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3199)));
return G__3198__delegate.call(this, x, y, z, args);
});
return G__3198;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3192.call(this);
case  1 :
return sp3__3193.call(this,x);
case  2 :
return sp3__3194.call(this,x,y);
case  3 :
return sp3__3195.call(this,x,y,z);
default:
return sp3__3196.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3196.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3174 = (function() { 
var G__3200__delegate = function (p1,p2,p3,ps){
var ps__3166 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3201 = (function (){
return null;
});
var spn__3202 = (function (x){
return cljs.core.some.call(null,(function (p1__3051_SHARP_){
return p1__3051_SHARP_.call(null,x);
}),ps__3166);
});
var spn__3203 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3052_SHARP_){
var or__3548__auto____3167 = p1__3052_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3167))
{return or__3548__auto____3167;
} else
{return p1__3052_SHARP_.call(null,y);
}
}),ps__3166);
});
var spn__3204 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3053_SHARP_){
var or__3548__auto____3168 = p1__3053_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3168))
{return or__3548__auto____3168;
} else
{var or__3548__auto____3169 = p1__3053_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3169))
{return or__3548__auto____3169;
} else
{return p1__3053_SHARP_.call(null,z);
}
}
}),ps__3166);
});
var spn__3205 = (function() { 
var G__3207__delegate = function (x,y,z,args){
var or__3548__auto____3170 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3170))
{return or__3548__auto____3170;
} else
{return cljs.core.some.call(null,(function (p1__3054_SHARP_){
return cljs.core.some.call(null,p1__3054_SHARP_,args);
}),ps__3166);
}
};
var G__3207 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3207__delegate.call(this, x, y, z, args);
};
G__3207.cljs$lang$maxFixedArity = 3;
G__3207.cljs$lang$applyTo = (function (arglist__3208){
var x = cljs.core.first(arglist__3208);
var y = cljs.core.first(cljs.core.next(arglist__3208));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3208)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3208)));
return G__3207__delegate.call(this, x, y, z, args);
});
return G__3207;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3201.call(this);
case  1 :
return spn__3202.call(this,x);
case  2 :
return spn__3203.call(this,x,y);
case  3 :
return spn__3204.call(this,x,y,z);
default:
return spn__3205.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3205.cljs$lang$applyTo;
return spn;
})()
};
var G__3200 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3200__delegate.call(this, p1, p2, p3, ps);
};
G__3200.cljs$lang$maxFixedArity = 3;
G__3200.cljs$lang$applyTo = (function (arglist__3209){
var p1 = cljs.core.first(arglist__3209);
var p2 = cljs.core.first(cljs.core.next(arglist__3209));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3209)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3209)));
return G__3200__delegate.call(this, p1, p2, p3, ps);
});
return G__3200;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3171.call(this,p1);
case  2 :
return some_fn__3172.call(this,p1,p2);
case  3 :
return some_fn__3173.call(this,p1,p2,p3);
default:
return some_fn__3174.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3174.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__3222 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3210 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3210))
{var s__3211 = temp__3698__auto____3210;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3211)),map.call(null,f,cljs.core.rest.call(null,s__3211)));
} else
{return null;
}
})));
});
var map__3223 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3212 = cljs.core.seq.call(null,c1);
var s2__3213 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3214 = s1__3212;

if(cljs.core.truth_(and__3546__auto____3214))
{return s2__3213;
} else
{return and__3546__auto____3214;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3212),cljs.core.first.call(null,s2__3213)),map.call(null,f,cljs.core.rest.call(null,s1__3212),cljs.core.rest.call(null,s2__3213)));
} else
{return null;
}
})));
});
var map__3224 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3215 = cljs.core.seq.call(null,c1);
var s2__3216 = cljs.core.seq.call(null,c2);
var s3__3217 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3218 = s1__3215;

if(cljs.core.truth_(and__3546__auto____3218))
{var and__3546__auto____3219 = s2__3216;

if(cljs.core.truth_(and__3546__auto____3219))
{return s3__3217;
} else
{return and__3546__auto____3219;
}
} else
{return and__3546__auto____3218;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3215),cljs.core.first.call(null,s2__3216),cljs.core.first.call(null,s3__3217)),map.call(null,f,cljs.core.rest.call(null,s1__3215),cljs.core.rest.call(null,s2__3216),cljs.core.rest.call(null,s3__3217)));
} else
{return null;
}
})));
});
var map__3225 = (function() { 
var G__3227__delegate = function (f,c1,c2,c3,colls){
var step__3221 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3220 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3220)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3220),step.call(null,map.call(null,cljs.core.rest,ss__3220)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3132_SHARP_){
return cljs.core.apply.call(null,f,p1__3132_SHARP_);
}),step__3221.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3227 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3227__delegate.call(this, f, c1, c2, c3, colls);
};
G__3227.cljs$lang$maxFixedArity = 4;
G__3227.cljs$lang$applyTo = (function (arglist__3228){
var f = cljs.core.first(arglist__3228);
var c1 = cljs.core.first(cljs.core.next(arglist__3228));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3228)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3228))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3228))));
return G__3227__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3227;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3222.call(this,f,c1);
case  3 :
return map__3223.call(this,f,c1,c2);
case  4 :
return map__3224.call(this,f,c1,c2,c3);
default:
return map__3225.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3225.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____3229 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3229))
{var s__3230 = temp__3698__auto____3229;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3230),take.call(null,(n - 1),cljs.core.rest.call(null,s__3230)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__3233 = (function (n,coll){
while(true){
var s__3231 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3232 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3232))
{return s__3231;
} else
{return and__3546__auto____3232;
}
})()))
{{
var G__3234 = (n - 1);
var G__3235 = cljs.core.rest.call(null,s__3231);
n = G__3234;
coll = G__3235;
continue;
}
} else
{return s__3231;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3233.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3236 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3237 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3236.call(this,n);
case  2 :
return drop_last__3237.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__3239 = cljs.core.seq.call(null,coll);
var lead__3240 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3240))
{{
var G__3241 = cljs.core.next.call(null,s__3239);
var G__3242 = cljs.core.next.call(null,lead__3240);
s__3239 = G__3241;
lead__3240 = G__3242;
continue;
}
} else
{return s__3239;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3245 = (function (pred,coll){
while(true){
var s__3243 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3244 = s__3243;

if(cljs.core.truth_(and__3546__auto____3244))
{return pred.call(null,cljs.core.first.call(null,s__3243));
} else
{return and__3546__auto____3244;
}
})()))
{{
var G__3246 = pred;
var G__3247 = cljs.core.rest.call(null,s__3243);
pred = G__3246;
coll = G__3247;
continue;
}
} else
{return s__3243;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3245.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3248 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3248))
{var s__3249 = temp__3698__auto____3248;

return cljs.core.concat.call(null,s__3249,cycle.call(null,s__3249));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__3250 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3251 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3250.call(this,n);
case  2 :
return repeat__3251.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__3253 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3254 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3253.call(this,n);
case  2 :
return repeatedly__3254.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__3260 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3256 = cljs.core.seq.call(null,c1);
var s2__3257 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3258 = s1__3256;

if(cljs.core.truth_(and__3546__auto____3258))
{return s2__3257;
} else
{return and__3546__auto____3258;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3256),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3257),interleave.call(null,cljs.core.rest.call(null,s1__3256),cljs.core.rest.call(null,s2__3257))));
} else
{return null;
}
})));
});
var interleave__3261 = (function() { 
var G__3263__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3259 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3259)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3259),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3259)));
} else
{return null;
}
})));
};
var G__3263 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3263__delegate.call(this, c1, c2, colls);
};
G__3263.cljs$lang$maxFixedArity = 2;
G__3263.cljs$lang$applyTo = (function (arglist__3264){
var c1 = cljs.core.first(arglist__3264);
var c2 = cljs.core.first(cljs.core.next(arglist__3264));
var colls = cljs.core.rest(cljs.core.next(arglist__3264));
return G__3263__delegate.call(this, c1, c2, colls);
});
return G__3263;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3260.call(this,c1,c2);
default:
return interleave__3261.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3261.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__3267 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3265 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3265))
{var coll__3266 = temp__3695__auto____3265;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3266),cat.call(null,cljs.core.rest.call(null,coll__3266),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3267.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3268 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3269 = (function() { 
var G__3271__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3271 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3271__delegate.call(this, f, coll, colls);
};
G__3271.cljs$lang$maxFixedArity = 2;
G__3271.cljs$lang$applyTo = (function (arglist__3272){
var f = cljs.core.first(arglist__3272);
var coll = cljs.core.first(cljs.core.next(arglist__3272));
var colls = cljs.core.rest(cljs.core.next(arglist__3272));
return G__3271__delegate.call(this, f, coll, colls);
});
return G__3271;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3268.call(this,f,coll);
default:
return mapcat__3269.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3269.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3273 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3273))
{var s__3274 = temp__3698__auto____3273;

var f__3275 = cljs.core.first.call(null,s__3274);
var r__3276 = cljs.core.rest.call(null,s__3274);

if(cljs.core.truth_(pred.call(null,f__3275)))
{return cljs.core.cons.call(null,f__3275,filter.call(null,pred,r__3276));
} else
{return filter.call(null,pred,r__3276);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__3278 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3278.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3277_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3277_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__3285 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3286 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3279 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3279))
{var s__3280 = temp__3698__auto____3279;

var p__3281 = cljs.core.take.call(null,n,s__3280);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3281))))
{return cljs.core.cons.call(null,p__3281,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3280)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3287 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3282 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3282))
{var s__3283 = temp__3698__auto____3282;

var p__3284 = cljs.core.take.call(null,n,s__3283);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3284))))
{return cljs.core.cons.call(null,p__3284,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3283)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3284,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3285.call(this,n,step);
case  3 :
return partition__3286.call(this,n,step,pad);
case  4 :
return partition__3287.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__3293 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3294 = (function (m,ks,not_found){
var sentinel__3289 = cljs.core.lookup_sentinel;
var m__3290 = m;
var ks__3291 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3291))
{var m__3292 = cljs.core.get.call(null,m__3290,cljs.core.first.call(null,ks__3291),sentinel__3289);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__3289,m__3292)))
{return not_found;
} else
{{
var G__3296 = sentinel__3289;
var G__3297 = m__3292;
var G__3298 = cljs.core.next.call(null,ks__3291);
sentinel__3289 = G__3296;
m__3290 = G__3297;
ks__3291 = G__3298;
continue;
}
}
} else
{return m__3290;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3293.call(this,m,ks);
case  3 :
return get_in__3294.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__3299,v){
var vec__3300__3301 = p__3299;
var k__3302 = cljs.core.nth.call(null,vec__3300__3301,0,null);
var ks__3303 = cljs.core.nthnext.call(null,vec__3300__3301,1);

if(cljs.core.truth_(ks__3303))
{return cljs.core.assoc.call(null,m,k__3302,assoc_in.call(null,cljs.core.get.call(null,m,k__3302),ks__3303,v));
} else
{return cljs.core.assoc.call(null,m,k__3302,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__3304,f,args){
var vec__3305__3306 = p__3304;
var k__3307 = cljs.core.nth.call(null,vec__3305__3306,0,null);
var ks__3308 = cljs.core.nthnext.call(null,vec__3305__3306,1);

if(cljs.core.truth_(ks__3308))
{return cljs.core.assoc.call(null,m,k__3307,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3307),ks__3308,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3307,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3307),args));
}
};
var update_in = function (m,p__3304,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3304, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3309){
var m = cljs.core.first(arglist__3309);
var p__3304 = cljs.core.first(cljs.core.next(arglist__3309));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3309)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3309)));
return update_in__delegate.call(this, m, p__3304, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3310 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3335 = null;
var G__3335__3336 = (function (coll,k){
var this__3311 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3335__3337 = (function (coll,k,not_found){
var this__3312 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3335 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3335__3336.call(this,coll,k);
case  3 :
return G__3335__3337.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3335;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3313 = this;
var new_array__3314 = cljs.core.aclone.call(null,this__3313.array);

(new_array__3314[k] = v);
return (new cljs.core.Vector(this__3313.meta,new_array__3314));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3315 = this;
var new_array__3316 = cljs.core.aclone.call(null,this__3315.array);

new_array__3316.push(o);
return (new cljs.core.Vector(this__3315.meta,new_array__3316));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3339 = null;
var G__3339__3340 = (function (v,f){
var this__3317 = this;
return cljs.core.ci_reduce.call(null,this__3317.array,f);
});
var G__3339__3341 = (function (v,f,start){
var this__3318 = this;
return cljs.core.ci_reduce.call(null,this__3318.array,f,start);
});
G__3339 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3339__3340.call(this,v,f);
case  3 :
return G__3339__3341.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3339;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3319 = this;
if(cljs.core.truth_((this__3319.array.length > 0)))
{var vector_seq__3320 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3319.array.length)))
{return cljs.core.cons.call(null,(this__3319.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3320.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3321 = this;
return this__3321.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3322 = this;
var count__3323 = this__3322.array.length;

if(cljs.core.truth_((count__3323 > 0)))
{return (this__3322.array[(count__3323 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3324 = this;
if(cljs.core.truth_((this__3324.array.length > 0)))
{var new_array__3325 = cljs.core.aclone.call(null,this__3324.array);

new_array__3325.pop();
return (new cljs.core.Vector(this__3324.meta,new_array__3325));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3326 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3327 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3328 = this;
return (new cljs.core.Vector(meta,this__3328.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3329 = this;
return this__3329.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3343 = null;
var G__3343__3344 = (function (coll,n){
var this__3330 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3331 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3331))
{return (n < this__3330.array.length);
} else
{return and__3546__auto____3331;
}
})()))
{return (this__3330.array[n]);
} else
{return null;
}
});
var G__3343__3345 = (function (coll,n,not_found){
var this__3332 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3333 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3333))
{return (n < this__3332.array.length);
} else
{return and__3546__auto____3333;
}
})()))
{return (this__3332.array[n]);
} else
{return not_found;
}
});
G__3343 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3343__3344.call(this,coll,n);
case  3 :
return G__3343__3345.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3343;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3334 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3334.meta);
});
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3347 = null;
var G__3347__3348 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3347__3349 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3347 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3347__3348.call(this,_,k);
case  3 :
return G__3347__3349.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3347;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__3351){
var args = cljs.core.seq( arglist__3351 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3352 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__3353 = array.length;

var i__3354 = 0;

while(true){
if(cljs.core.truth_((i__3354 < len__3353)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3354]))))
{return i__3354;
} else
{{
var G__3355 = (i__3354 + incr);
i__3354 = G__3355;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___3357 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3358 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____3356 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3356))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3356;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___3357.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3358.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3361 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3380 = null;
var G__3380__3381 = (function (coll,k){
var this__3362 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3380__3382 = (function (coll,k,not_found){
var this__3363 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3363.strobj,(this__3363.strobj[k]),not_found);
});
G__3380 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3380__3381.call(this,coll,k);
case  3 :
return G__3380__3382.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3380;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3364 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3365 = goog.object.clone.call(null,this__3364.strobj);
var overwrite_QMARK___3366 = new_strobj__3365.hasOwnProperty(k);

(new_strobj__3365[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3366))
{return (new cljs.core.ObjMap(this__3364.meta,this__3364.keys,new_strobj__3365));
} else
{var new_keys__3367 = cljs.core.aclone.call(null,this__3364.keys);

new_keys__3367.push(k);
return (new cljs.core.ObjMap(this__3364.meta,new_keys__3367,new_strobj__3365));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3364.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3368 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3368.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3369 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3370 = this;
if(cljs.core.truth_((this__3370.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__3360_SHARP_){
return cljs.core.vector.call(null,p1__3360_SHARP_,(this__3370.strobj[p1__3360_SHARP_]));
}),this__3370.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3371 = this;
return this__3371.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3372 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3373 = this;
return (new cljs.core.ObjMap(meta,this__3373.keys,this__3373.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3374 = this;
return this__3374.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3375 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3375.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3376 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3377 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3377))
{return this__3376.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3377;
}
})()))
{var new_keys__3378 = cljs.core.aclone.call(null,this__3376.keys);
var new_strobj__3379 = goog.object.clone.call(null,this__3376.strobj);

new_keys__3378.splice(cljs.core.scan_array.call(null,1,k,new_keys__3378),1);
cljs.core.js_delete.call(null,new_strobj__3379,k);
return (new cljs.core.ObjMap(this__3376.meta,new_keys__3378,new_strobj__3379));
} else
{return coll;
}
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3385 = null;
var G__3385__3386 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3385__3387 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3385 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3385__3386.call(this,_,k);
case  3 :
return G__3385__3387.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3385;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3389 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3419 = null;
var G__3419__3420 = (function (coll,k){
var this__3390 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3419__3421 = (function (coll,k,not_found){
var this__3391 = this;
var bucket__3392 = (this__3391.hashobj[cljs.core.hash.call(null,k)]);
var i__3393 = (cljs.core.truth_(bucket__3392)?cljs.core.scan_array.call(null,2,k,bucket__3392):null);

if(cljs.core.truth_(i__3393))
{return (bucket__3392[(i__3393 + 1)]);
} else
{return not_found;
}
});
G__3419 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3419__3420.call(this,coll,k);
case  3 :
return G__3419__3421.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3419;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3394 = this;
var h__3395 = cljs.core.hash.call(null,k);
var bucket__3396 = (this__3394.hashobj[h__3395]);

if(cljs.core.truth_(bucket__3396))
{var new_bucket__3397 = cljs.core.aclone.call(null,bucket__3396);
var new_hashobj__3398 = goog.object.clone.call(null,this__3394.hashobj);

(new_hashobj__3398[h__3395] = new_bucket__3397);
var temp__3695__auto____3399 = cljs.core.scan_array.call(null,2,k,new_bucket__3397);

if(cljs.core.truth_(temp__3695__auto____3399))
{var i__3400 = temp__3695__auto____3399;

(new_bucket__3397[(i__3400 + 1)] = v);
return (new cljs.core.HashMap(this__3394.meta,this__3394.count,new_hashobj__3398));
} else
{new_bucket__3397.push(k,v);
return (new cljs.core.HashMap(this__3394.meta,(this__3394.count + 1),new_hashobj__3398));
}
} else
{var new_hashobj__3401 = goog.object.clone.call(null,this__3394.hashobj);

(new_hashobj__3401[h__3395] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3394.meta,(this__3394.count + 1),new_hashobj__3401));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3402 = this;
var bucket__3403 = (this__3402.hashobj[cljs.core.hash.call(null,k)]);
var i__3404 = (cljs.core.truth_(bucket__3403)?cljs.core.scan_array.call(null,2,k,bucket__3403):null);

if(cljs.core.truth_(i__3404))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3405 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3406 = this;
if(cljs.core.truth_((this__3406.count > 0)))
{var hashes__3407 = cljs.core.js_keys.call(null,this__3406.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3384_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3406.hashobj[p1__3384_SHARP_])));
}),hashes__3407);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3408 = this;
return this__3408.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3409 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3410 = this;
return (new cljs.core.HashMap(meta,this__3410.count,this__3410.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3411 = this;
return this__3411.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3412 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3412.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3413 = this;
var h__3414 = cljs.core.hash.call(null,k);
var bucket__3415 = (this__3413.hashobj[h__3414]);
var i__3416 = (cljs.core.truth_(bucket__3415)?cljs.core.scan_array.call(null,2,k,bucket__3415):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3416)))
{return coll;
} else
{var new_hashobj__3417 = goog.object.clone.call(null,this__3413.hashobj);

if(cljs.core.truth_((3 > bucket__3415.length)))
{cljs.core.js_delete.call(null,new_hashobj__3417,h__3414);
} else
{var new_bucket__3418 = cljs.core.aclone.call(null,bucket__3415);

new_bucket__3418.splice(i__3416,2);
(new_hashobj__3417[h__3414] = new_bucket__3418);
}
return (new cljs.core.HashMap(this__3413.meta,(this__3413.count - 1),new_hashobj__3417));
}
});
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3423 = ks.length;

var i__3424 = 0;
var out__3425 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__3424 < len__3423)))
{{
var G__3426 = (i__3424 + 1);
var G__3427 = cljs.core.assoc.call(null,out__3425,(ks[i__3424]),(vs[i__3424]));
i__3424 = G__3426;
out__3425 = G__3427;
continue;
}
} else
{return out__3425;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3428 = null;
var G__3428__3429 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3428__3430 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3428 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3428__3429.call(this,_,k);
case  3 :
return G__3428__3430.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3428;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3432 = cljs.core.seq.call(null,keyvals);
var out__3433 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3432))
{{
var G__3434 = cljs.core.nnext.call(null,in$__3432);
var G__3435 = cljs.core.assoc.call(null,out__3433,cljs.core.first.call(null,in$__3432),cljs.core.second.call(null,in$__3432));
in$__3432 = G__3434;
out__3433 = G__3435;
continue;
}
} else
{return out__3433;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__3436){
var keyvals = cljs.core.seq( arglist__3436 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__3437_SHARP_,p2__3438_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____3439 = p1__3437_SHARP_;

if(cljs.core.truth_(or__3548__auto____3439))
{return or__3548__auto____3439;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3438_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__3440){
var maps = cljs.core.seq( arglist__3440 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__3443 = (function (m,e){
var k__3441 = cljs.core.first.call(null,e);
var v__3442 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3441)))
{return cljs.core.assoc.call(null,m,k__3441,f.call(null,cljs.core.get.call(null,m,k__3441),v__3442));
} else
{return cljs.core.assoc.call(null,m,k__3441,v__3442);
}
});
var merge2__3445 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3443,(function (){var or__3548__auto____3444 = m1;

if(cljs.core.truth_(or__3548__auto____3444))
{return or__3548__auto____3444;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3445,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__3446){
var f = cljs.core.first(arglist__3446);
var maps = cljs.core.rest(arglist__3446);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3448 = cljs.core.ObjMap.fromObject([],{});
var keys__3449 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3449))
{var key__3450 = cljs.core.first.call(null,keys__3449);
var entry__3451 = cljs.core.get.call(null,map,key__3450,"﷐'user/not-found");

{
var G__3452 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__3451,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__3448,key__3450,entry__3451):ret__3448);
var G__3453 = cljs.core.next.call(null,keys__3449);
ret__3448 = G__3452;
keys__3449 = G__3453;
continue;
}
} else
{return ret__3448;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3454 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3467 = null;
var G__3467__3468 = (function (coll,v){
var this__3455 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3467__3469 = (function (coll,v,not_found){
var this__3456 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3456.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3467 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3467__3468.call(this,coll,v);
case  3 :
return G__3467__3469.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3467;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3457 = this;
return (new cljs.core.Set(this__3457.meta,cljs.core.assoc.call(null,this__3457.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3458 = this;
return cljs.core.keys.call(null,this__3458.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3459 = this;
return (new cljs.core.Set(this__3459.meta,cljs.core.dissoc.call(null,this__3459.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3460 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3461 = this;
var and__3546__auto____3462 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____3462))
{var and__3546__auto____3463 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____3463))
{return cljs.core.every_QMARK_.call(null,(function (p1__3447_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3447_SHARP_);
}),other);
} else
{return and__3546__auto____3463;
}
} else
{return and__3546__auto____3462;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3464 = this;
return (new cljs.core.Set(meta,this__3464.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3465 = this;
return this__3465.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3466 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3466.meta);
});
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3471 = null;
var G__3471__3472 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3471__3473 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3471 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3471__3472.call(this,_,k);
case  3 :
return G__3471__3473.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3471;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3476 = cljs.core.seq.call(null,coll);
var out__3477 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3476))))
{{
var G__3478 = cljs.core.rest.call(null,in$__3476);
var G__3479 = cljs.core.conj.call(null,out__3477,cljs.core.first.call(null,in$__3476));
in$__3476 = G__3478;
out__3477 = G__3479;
continue;
}
} else
{return out__3477;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__3480 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____3481 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____3481))
{var e__3482 = temp__3695__auto____3481;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3482));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3480,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3475_SHARP_){
var temp__3695__auto____3483 = cljs.core.find.call(null,smap,p1__3475_SHARP_);

if(cljs.core.truth_(temp__3695__auto____3483))
{var e__3484 = temp__3695__auto____3483;

return cljs.core.second.call(null,e__3484);
} else
{return p1__3475_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3492 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3485,seen){
while(true){
var vec__3486__3487 = p__3485;
var f__3488 = cljs.core.nth.call(null,vec__3486__3487,0,null);
var xs__3489 = vec__3486__3487;

var temp__3698__auto____3490 = cljs.core.seq.call(null,xs__3489);

if(cljs.core.truth_(temp__3698__auto____3490))
{var s__3491 = temp__3698__auto____3490;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3488)))
{{
var G__3493 = cljs.core.rest.call(null,s__3491);
var G__3494 = seen;
p__3485 = G__3493;
seen = G__3494;
continue;
}
} else
{return cljs.core.cons.call(null,f__3488,step.call(null,cljs.core.rest.call(null,s__3491),cljs.core.conj.call(null,seen,f__3488)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3492.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3495 = cljs.core.Vector.fromArray([]);
var s__3496 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3496)))
{{
var G__3497 = cljs.core.conj.call(null,ret__3495,cljs.core.first.call(null,s__3496));
var G__3498 = cljs.core.next.call(null,s__3496);
ret__3495 = G__3497;
s__3496 = G__3498;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3495);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____3499 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3499))
{return or__3548__auto____3499;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3500 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3500 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__3500 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____3501 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3501))
{return or__3548__auto____3501;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3502 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3502 > -1)))
{return cljs.core.subs.call(null,x,2,i__3502);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__3505 = cljs.core.ObjMap.fromObject([],{});
var ks__3506 = cljs.core.seq.call(null,keys);
var vs__3507 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3508 = ks__3506;

if(cljs.core.truth_(and__3546__auto____3508))
{return vs__3507;
} else
{return and__3546__auto____3508;
}
})()))
{{
var G__3509 = cljs.core.assoc.call(null,map__3505,cljs.core.first.call(null,ks__3506),cljs.core.first.call(null,vs__3507));
var G__3510 = cljs.core.next.call(null,ks__3506);
var G__3511 = cljs.core.next.call(null,vs__3507);
map__3505 = G__3509;
ks__3506 = G__3510;
vs__3507 = G__3511;
continue;
}
} else
{return map__3505;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__3514 = (function (k,x){
return x;
});
var max_key__3515 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3516 = (function() { 
var G__3518__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3503_SHARP_,p2__3504_SHARP_){
return max_key.call(null,k,p1__3503_SHARP_,p2__3504_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3518 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3518__delegate.call(this, k, x, y, more);
};
G__3518.cljs$lang$maxFixedArity = 3;
G__3518.cljs$lang$applyTo = (function (arglist__3519){
var k = cljs.core.first(arglist__3519);
var x = cljs.core.first(cljs.core.next(arglist__3519));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3519)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3519)));
return G__3518__delegate.call(this, k, x, y, more);
});
return G__3518;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3514.call(this,k,x);
case  3 :
return max_key__3515.call(this,k,x,y);
default:
return max_key__3516.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3516.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3520 = (function (k,x){
return x;
});
var min_key__3521 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3522 = (function() { 
var G__3524__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3512_SHARP_,p2__3513_SHARP_){
return min_key.call(null,k,p1__3512_SHARP_,p2__3513_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3524 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3524__delegate.call(this, k, x, y, more);
};
G__3524.cljs$lang$maxFixedArity = 3;
G__3524.cljs$lang$applyTo = (function (arglist__3525){
var k = cljs.core.first(arglist__3525);
var x = cljs.core.first(cljs.core.next(arglist__3525));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3525)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3525)));
return G__3524__delegate.call(this, k, x, y, more);
});
return G__3524;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3520.call(this,k,x);
case  3 :
return min_key__3521.call(this,k,x,y);
default:
return min_key__3522.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3522.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3528 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3529 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3526 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3526))
{var s__3527 = temp__3698__auto____3526;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3527),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3527)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3528.call(this,n,step);
case  3 :
return partition_all__3529.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3531 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3531))
{var s__3532 = temp__3698__auto____3531;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3532))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3532),take_while.call(null,pred,cljs.core.rest.call(null,s__3532)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3533 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3534 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3550 = null;
var G__3550__3551 = (function (rng,f){
var this__3535 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3550__3552 = (function (rng,f,s){
var this__3536 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3550 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3550__3551.call(this,rng,f);
case  3 :
return G__3550__3552.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3550;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3537 = this;
var comp__3538 = (cljs.core.truth_((this__3537.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3538.call(null,this__3537.start,this__3537.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3539 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__3539.end - this__3539.start) / this__3539.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3540 = this;
return this__3540.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3541 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__3541.meta,(this__3541.start + this__3541.step),this__3541.end,this__3541.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__3542 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3543 = this;
return (new cljs.core.Range(meta,this__3543.start,this__3543.end,this__3543.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3544 = this;
return this__3544.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3554 = null;
var G__3554__3555 = (function (rng,n){
var this__3545 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3545.start + (n * this__3545.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3546 = (this__3545.start > this__3545.end);

if(cljs.core.truth_(and__3546__auto____3546))
{return cljs.core._EQ_.call(null,this__3545.step,0);
} else
{return and__3546__auto____3546;
}
})()))
{return this__3545.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__3554__3556 = (function (rng,n,not_found){
var this__3547 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3547.start + (n * this__3547.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3548 = (this__3547.start > this__3547.end);

if(cljs.core.truth_(and__3546__auto____3548))
{return cljs.core._EQ_.call(null,this__3547.step,0);
} else
{return and__3546__auto____3548;
}
})()))
{return this__3547.start;
} else
{return not_found;
}
}
});
G__3554 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3554__3555.call(this,rng,n);
case  3 :
return G__3554__3556.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3554;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3549 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3549.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__3558 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3559 = (function (end){
return range.call(null,0,end,1);
});
var range__3560 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3561 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3558.call(this);
case  1 :
return range__3559.call(this,start);
case  2 :
return range__3560.call(this,start,end);
case  3 :
return range__3561.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3563 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3563))
{var s__3564 = temp__3698__auto____3563;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3564),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3564)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3566 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3566))
{var s__3567 = temp__3698__auto____3566;

var fst__3568 = cljs.core.first.call(null,s__3567);
var fv__3569 = f.call(null,fst__3568);
var run__3570 = cljs.core.cons.call(null,fst__3568,cljs.core.take_while.call(null,(function (p1__3565_SHARP_){
return cljs.core._EQ_.call(null,fv__3569,f.call(null,p1__3565_SHARP_));
}),cljs.core.next.call(null,s__3567)));

return cljs.core.cons.call(null,run__3570,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3570),s__3567))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__3585 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3581 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3581))
{var s__3582 = temp__3695__auto____3581;

return reductions.call(null,f,cljs.core.first.call(null,s__3582),cljs.core.rest.call(null,s__3582));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3586 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3583 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3583))
{var s__3584 = temp__3698__auto____3583;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3584)),cljs.core.rest.call(null,s__3584));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3585.call(this,f,init);
case  3 :
return reductions__3586.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__3589 = (function (f){
return (function() {
var G__3594 = null;
var G__3594__3595 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3594__3596 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3594__3597 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3594__3598 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3594__3599 = (function() { 
var G__3601__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3601 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3601__delegate.call(this, x, y, z, args);
};
G__3601.cljs$lang$maxFixedArity = 3;
G__3601.cljs$lang$applyTo = (function (arglist__3602){
var x = cljs.core.first(arglist__3602);
var y = cljs.core.first(cljs.core.next(arglist__3602));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3602)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3602)));
return G__3601__delegate.call(this, x, y, z, args);
});
return G__3601;
})()
;
G__3594 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3594__3595.call(this);
case  1 :
return G__3594__3596.call(this,x);
case  2 :
return G__3594__3597.call(this,x,y);
case  3 :
return G__3594__3598.call(this,x,y,z);
default:
return G__3594__3599.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3594.cljs$lang$maxFixedArity = 3;
G__3594.cljs$lang$applyTo = G__3594__3599.cljs$lang$applyTo;
return G__3594;
})()
});
var juxt__3590 = (function (f,g){
return (function() {
var G__3603 = null;
var G__3603__3604 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3603__3605 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3603__3606 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3603__3607 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3603__3608 = (function() { 
var G__3610__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3610 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3610__delegate.call(this, x, y, z, args);
};
G__3610.cljs$lang$maxFixedArity = 3;
G__3610.cljs$lang$applyTo = (function (arglist__3611){
var x = cljs.core.first(arglist__3611);
var y = cljs.core.first(cljs.core.next(arglist__3611));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3611)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3611)));
return G__3610__delegate.call(this, x, y, z, args);
});
return G__3610;
})()
;
G__3603 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3603__3604.call(this);
case  1 :
return G__3603__3605.call(this,x);
case  2 :
return G__3603__3606.call(this,x,y);
case  3 :
return G__3603__3607.call(this,x,y,z);
default:
return G__3603__3608.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3603.cljs$lang$maxFixedArity = 3;
G__3603.cljs$lang$applyTo = G__3603__3608.cljs$lang$applyTo;
return G__3603;
})()
});
var juxt__3591 = (function (f,g,h){
return (function() {
var G__3612 = null;
var G__3612__3613 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3612__3614 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3612__3615 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3612__3616 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3612__3617 = (function() { 
var G__3619__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3619 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3619__delegate.call(this, x, y, z, args);
};
G__3619.cljs$lang$maxFixedArity = 3;
G__3619.cljs$lang$applyTo = (function (arglist__3620){
var x = cljs.core.first(arglist__3620);
var y = cljs.core.first(cljs.core.next(arglist__3620));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3620)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3620)));
return G__3619__delegate.call(this, x, y, z, args);
});
return G__3619;
})()
;
G__3612 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3612__3613.call(this);
case  1 :
return G__3612__3614.call(this,x);
case  2 :
return G__3612__3615.call(this,x,y);
case  3 :
return G__3612__3616.call(this,x,y,z);
default:
return G__3612__3617.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3612.cljs$lang$maxFixedArity = 3;
G__3612.cljs$lang$applyTo = G__3612__3617.cljs$lang$applyTo;
return G__3612;
})()
});
var juxt__3592 = (function() { 
var G__3621__delegate = function (f,g,h,fs){
var fs__3588 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3622 = null;
var G__3622__3623 = (function (){
return cljs.core.reduce.call(null,(function (p1__3571_SHARP_,p2__3572_SHARP_){
return cljs.core.conj.call(null,p1__3571_SHARP_,p2__3572_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3588);
});
var G__3622__3624 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3573_SHARP_,p2__3574_SHARP_){
return cljs.core.conj.call(null,p1__3573_SHARP_,p2__3574_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3588);
});
var G__3622__3625 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3575_SHARP_,p2__3576_SHARP_){
return cljs.core.conj.call(null,p1__3575_SHARP_,p2__3576_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3588);
});
var G__3622__3626 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3577_SHARP_,p2__3578_SHARP_){
return cljs.core.conj.call(null,p1__3577_SHARP_,p2__3578_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3588);
});
var G__3622__3627 = (function() { 
var G__3629__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3579_SHARP_,p2__3580_SHARP_){
return cljs.core.conj.call(null,p1__3579_SHARP_,cljs.core.apply.call(null,p2__3580_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3588);
};
var G__3629 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3629__delegate.call(this, x, y, z, args);
};
G__3629.cljs$lang$maxFixedArity = 3;
G__3629.cljs$lang$applyTo = (function (arglist__3630){
var x = cljs.core.first(arglist__3630);
var y = cljs.core.first(cljs.core.next(arglist__3630));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3630)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3630)));
return G__3629__delegate.call(this, x, y, z, args);
});
return G__3629;
})()
;
G__3622 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3622__3623.call(this);
case  1 :
return G__3622__3624.call(this,x);
case  2 :
return G__3622__3625.call(this,x,y);
case  3 :
return G__3622__3626.call(this,x,y,z);
default:
return G__3622__3627.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3622.cljs$lang$maxFixedArity = 3;
G__3622.cljs$lang$applyTo = G__3622__3627.cljs$lang$applyTo;
return G__3622;
})()
};
var G__3621 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3621__delegate.call(this, f, g, h, fs);
};
G__3621.cljs$lang$maxFixedArity = 3;
G__3621.cljs$lang$applyTo = (function (arglist__3631){
var f = cljs.core.first(arglist__3631);
var g = cljs.core.first(cljs.core.next(arglist__3631));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3631)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3631)));
return G__3621__delegate.call(this, f, g, h, fs);
});
return G__3621;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3589.call(this,f);
case  2 :
return juxt__3590.call(this,f,g);
case  3 :
return juxt__3591.call(this,f,g,h);
default:
return juxt__3592.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3592.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__3633 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3636 = cljs.core.next.call(null,coll);
coll = G__3636;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3634 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3632 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3632))
{return (n > 0);
} else
{return and__3546__auto____3632;
}
})()))
{{
var G__3637 = (n - 1);
var G__3638 = cljs.core.next.call(null,coll);
n = G__3637;
coll = G__3638;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__3633.call(this,n);
case  2 :
return dorun__3634.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__3639 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3640 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3639.call(this,n);
case  2 :
return doall__3640.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__3642 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3642),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3642),1)))
{return cljs.core.first.call(null,matches__3642);
} else
{return cljs.core.vec.call(null,matches__3642);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__3643 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3643)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3643),1)))
{return cljs.core.first.call(null,matches__3643);
} else
{return cljs.core.vec.call(null,matches__3643);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3644 = cljs.core.re_find.call(null,re,s);
var match_idx__3645 = s.search(re);
var match_str__3646 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3644))?cljs.core.first.call(null,match_data__3644):match_data__3644);
var post_match__3647 = cljs.core.subs.call(null,s,(match_idx__3645 + cljs.core.count.call(null,match_str__3646)));

if(cljs.core.truth_(match_data__3644))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3644,re_seq.call(null,re,post_match__3647));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3648_SHARP_){
return print_one.call(null,p1__3648_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____3649 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____3649))
{var and__3546__auto____3653 = (function (){var x__316__auto____3650 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3651 = x__316__auto____3650;

if(cljs.core.truth_(and__3546__auto____3651))
{var and__3546__auto____3652 = x__316__auto____3650.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3652))
{return cljs.core.not.call(null,x__316__auto____3650.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3652;
}
} else
{return and__3546__auto____3651;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__316__auto____3650);
}
})();

if(cljs.core.truth_(and__3546__auto____3653))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____3653;
}
} else
{return and__3546__auto____3649;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__316__auto____3654 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3655 = x__316__auto____3654;

if(cljs.core.truth_(and__3546__auto____3655))
{var and__3546__auto____3656 = x__316__auto____3654.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____3656))
{return cljs.core.not.call(null,x__316__auto____3654.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____3656;
}
} else
{return and__3546__auto____3655;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__316__auto____3654);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__3657 = cljs.core.first.call(null,objs);
var sb__3658 = (new goog.string.StringBuffer());

var G__3659__3660 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3659__3660))
{var obj__3661 = cljs.core.first.call(null,G__3659__3660);
var G__3659__3662 = G__3659__3660;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3661,first_obj__3657)))
{} else
{sb__3658.append(" ");
}
var G__3663__3664 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3661,opts));

if(cljs.core.truth_(G__3663__3664))
{var string__3665 = cljs.core.first.call(null,G__3663__3664);
var G__3663__3666 = G__3663__3664;

while(true){
sb__3658.append(string__3665);
var temp__3698__auto____3667 = cljs.core.next.call(null,G__3663__3666);

if(cljs.core.truth_(temp__3698__auto____3667))
{var G__3663__3668 = temp__3698__auto____3667;

{
var G__3671 = cljs.core.first.call(null,G__3663__3668);
var G__3672 = G__3663__3668;
string__3665 = G__3671;
G__3663__3666 = G__3672;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3669 = cljs.core.next.call(null,G__3659__3662);

if(cljs.core.truth_(temp__3698__auto____3669))
{var G__3659__3670 = temp__3698__auto____3669;

{
var G__3673 = cljs.core.first.call(null,G__3659__3670);
var G__3674 = G__3659__3670;
obj__3661 = G__3673;
G__3659__3662 = G__3674;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__3658);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3675 = cljs.core.first.call(null,objs);

var G__3676__3677 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3676__3677))
{var obj__3678 = cljs.core.first.call(null,G__3676__3677);
var G__3676__3679 = G__3676__3677;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3678,first_obj__3675)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3680__3681 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3678,opts));

if(cljs.core.truth_(G__3680__3681))
{var string__3682 = cljs.core.first.call(null,G__3680__3681);
var G__3680__3683 = G__3680__3681;

while(true){
cljs.core.string_print.call(null,string__3682);
var temp__3698__auto____3684 = cljs.core.next.call(null,G__3680__3683);

if(cljs.core.truth_(temp__3698__auto____3684))
{var G__3680__3685 = temp__3698__auto____3684;

{
var G__3688 = cljs.core.first.call(null,G__3680__3685);
var G__3689 = G__3680__3685;
string__3682 = G__3688;
G__3680__3683 = G__3689;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3686 = cljs.core.next.call(null,G__3676__3679);

if(cljs.core.truth_(temp__3698__auto____3686))
{var G__3676__3687 = temp__3698__auto____3686;

{
var G__3690 = cljs.core.first.call(null,G__3676__3687);
var G__3691 = G__3676__3687;
obj__3678 = G__3690;
G__3676__3679 = G__3691;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3692){
var objs = cljs.core.seq( arglist__3692 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3693){
var objs = cljs.core.seq( arglist__3693 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3694){
var objs = cljs.core.seq( arglist__3694 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3695){
var objs = cljs.core.seq( arglist__3695 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3696){
var objs = cljs.core.seq( arglist__3696 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3697 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3697,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____3698 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3698))
{var nspc__3699 = temp__3698__auto____3698;

return cljs.core.str.call(null,nspc__3699,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____3700 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3700))
{var nspc__3701 = temp__3698__auto____3700;

return cljs.core.str.call(null,nspc__3701,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3702 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3702,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__3703 = this;
var G__3704__3705 = cljs.core.seq.call(null,this__3703.watches);

if(cljs.core.truth_(G__3704__3705))
{var G__3707__3709 = cljs.core.first.call(null,G__3704__3705);
var vec__3708__3710 = G__3707__3709;
var key__3711 = cljs.core.nth.call(null,vec__3708__3710,0,null);
var f__3712 = cljs.core.nth.call(null,vec__3708__3710,1,null);
var G__3704__3713 = G__3704__3705;

var G__3707__3714 = G__3707__3709;
var G__3704__3715 = G__3704__3713;

while(true){
var vec__3716__3717 = G__3707__3714;
var key__3718 = cljs.core.nth.call(null,vec__3716__3717,0,null);
var f__3719 = cljs.core.nth.call(null,vec__3716__3717,1,null);
var G__3704__3720 = G__3704__3715;

f__3719.call(null,key__3718,this$,oldval,newval);
var temp__3698__auto____3721 = cljs.core.next.call(null,G__3704__3720);

if(cljs.core.truth_(temp__3698__auto____3721))
{var G__3704__3722 = temp__3698__auto____3721;

{
var G__3729 = cljs.core.first.call(null,G__3704__3722);
var G__3730 = G__3704__3722;
G__3707__3714 = G__3729;
G__3704__3715 = G__3730;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__3723 = this;
return this$.watches = cljs.core.assoc.call(null,this__3723.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__3724 = this;
return this$.watches = cljs.core.dissoc.call(null,this__3724.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3725 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3725.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3726 = this;
return this__3726.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3727 = this;
return this__3727.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3728 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__3737 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__3738 = (function() { 
var G__3740__delegate = function (x,p__3731){
var map__3732__3733 = p__3731;
var map__3732__3734 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3732__3733))?cljs.core.apply.call(null,cljs.core.hash_map,map__3732__3733):map__3732__3733);
var validator__3735 = cljs.core.get.call(null,map__3732__3734,"﷐'validator");
var meta__3736 = cljs.core.get.call(null,map__3732__3734,"﷐'meta");

return (new cljs.core.Atom(x,meta__3736,validator__3735,null));
};
var G__3740 = function (x,var_args){
var p__3731 = null;
if (goog.isDef(var_args)) {
  p__3731 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3740__delegate.call(this, x, p__3731);
};
G__3740.cljs$lang$maxFixedArity = 1;
G__3740.cljs$lang$applyTo = (function (arglist__3741){
var x = cljs.core.first(arglist__3741);
var p__3731 = cljs.core.rest(arglist__3741);
return G__3740__delegate.call(this, x, p__3731);
});
return G__3740;
})()
;
atom = function(x,var_args){
var p__3731 = var_args;
switch(arguments.length){
case  1 :
return atom__3737.call(this,x);
default:
return atom__3738.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3738.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____3742 = a.validator;

if(cljs.core.truth_(temp__3698__auto____3742))
{var validate__3743 = temp__3698__auto____3742;

if(cljs.core.truth_(validate__3743.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.list("﷑'validate","﷑'new-value")))));
}
} else
{}
var old_value__3744 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__3744,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___3745 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3746 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3747 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3748 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3749 = (function() { 
var G__3751__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3751 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3751__delegate.call(this, a, f, x, y, z, more);
};
G__3751.cljs$lang$maxFixedArity = 5;
G__3751.cljs$lang$applyTo = (function (arglist__3752){
var a = cljs.core.first(arglist__3752);
var f = cljs.core.first(cljs.core.next(arglist__3752));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3752)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3752))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3752)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3752)))));
return G__3751__delegate.call(this, a, f, x, y, z, more);
});
return G__3751;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3745.call(this,a,f);
case  3 :
return swap_BANG___3746.call(this,a,f,x);
case  4 :
return swap_BANG___3747.call(this,a,f,x,y);
case  5 :
return swap_BANG___3748.call(this,a,f,x,y,z);
default:
return swap_BANG___3749.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3749.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3753){
var iref = cljs.core.first(arglist__3753);
var f = cljs.core.first(cljs.core.next(arglist__3753));
var args = cljs.core.rest(cljs.core.next(arglist__3753));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__3754 = (function (){
return gensym.call(null,"G__");
});
var gensym__3755 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3754.call(this);
case  1 :
return gensym__3755.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3757 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3757.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3758 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3758.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3758.state,this__3758.f);
}
return cljs.core.deref.call(null,this__3758.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__3759){
var body = cljs.core.seq( arglist__3759 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__3760__3761 = options;
var map__3760__3762 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3760__3761))?cljs.core.apply.call(null,cljs.core.hash_map,map__3760__3761):map__3760__3761);
var keywordize_keys__3763 = cljs.core.get.call(null,map__3760__3762,"﷐'keywordize-keys");
var keyfn__3764 = (cljs.core.truth_(keywordize_keys__3763)?cljs.core.keyword:cljs.core.str);
var f__3770 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__380__auto____3769 = (function iter__3765(s__3766){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3766__3767 = s__3766;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3766__3767)))
{var k__3768 = cljs.core.first.call(null,s__3766__3767);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3764.call(null,k__3768),thisfn.call(null,(x[k__3768]))]),iter__3765.call(null,cljs.core.rest.call(null,s__3766__3767)));
} else
{return null;
}
break;
}
})));
});

return iter__380__auto____3769.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__3770.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3771){
var x = cljs.core.first(arglist__3771);
var options = cljs.core.rest(arglist__3771);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__3772 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3776__delegate = function (args){
var temp__3695__auto____3773 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3772),args);

if(cljs.core.truth_(temp__3695__auto____3773))
{var v__3774 = temp__3695__auto____3773;

return v__3774;
} else
{var ret__3775 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3772,cljs.core.assoc,args,ret__3775);
return ret__3775;
}
};
var G__3776 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3776__delegate.call(this, args);
};
G__3776.cljs$lang$maxFixedArity = 0;
G__3776.cljs$lang$applyTo = (function (arglist__3777){
var args = cljs.core.seq( arglist__3777 );;
return G__3776__delegate.call(this, args);
});
return G__3776;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__3779 = (function (f){
while(true){
var ret__3778 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3778)))
{{
var G__3782 = ret__3778;
f = G__3782;
continue;
}
} else
{return ret__3778;
}
break;
}
});
var trampoline__3780 = (function() { 
var G__3783__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3783 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3783__delegate.call(this, f, args);
};
G__3783.cljs$lang$maxFixedArity = 1;
G__3783.cljs$lang$applyTo = (function (arglist__3784){
var f = cljs.core.first(arglist__3784);
var args = cljs.core.rest(arglist__3784);
return G__3783__delegate.call(this, f, args);
});
return G__3783;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3779.call(this,f);
default:
return trampoline__3780.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3780.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3785 = (function (){
return rand.call(null,1);
});
var rand__3786 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3785.call(this);
case  1 :
return rand__3786.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__3788 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3788,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3788,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___3797 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3798 = (function (h,child,parent){
var or__3548__auto____3789 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____3789))
{return or__3548__auto____3789;
} else
{var or__3548__auto____3790 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____3790))
{return or__3548__auto____3790;
} else
{var and__3546__auto____3791 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____3791))
{var and__3546__auto____3792 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____3792))
{var and__3546__auto____3793 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____3793))
{var ret__3794 = true;
var i__3795 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____3796 = cljs.core.not.call(null,ret__3794);

if(cljs.core.truth_(or__3548__auto____3796))
{return or__3548__auto____3796;
} else
{return cljs.core._EQ_.call(null,i__3795,cljs.core.count.call(null,parent));
}
})()))
{return ret__3794;
} else
{{
var G__3800 = isa_QMARK_.call(null,h,child.call(null,i__3795),parent.call(null,i__3795));
var G__3801 = (i__3795 + 1);
ret__3794 = G__3800;
i__3795 = G__3801;
continue;
}
}
break;
}
} else
{return and__3546__auto____3793;
}
} else
{return and__3546__auto____3792;
}
} else
{return and__3546__auto____3791;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3797.call(this,h,child);
case  3 :
return isa_QMARK___3798.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__3802 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3803 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3802.call(this,h);
case  2 :
return parents__3803.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__3805 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3806 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3805.call(this,h);
case  2 :
return ancestors__3806.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__3808 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3809 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3808.call(this,h);
case  2 :
return descendants__3809.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__3819 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3820 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")))));
}
var tp__3814 = "﷐'parents".call(null,h);
var td__3815 = "﷐'descendants".call(null,h);
var ta__3816 = "﷐'ancestors".call(null,h);
var tf__3817 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____3818 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3814.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3816.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3816.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3814,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3817.call(null,"﷐'ancestors".call(null,h),tag,td__3815,parent,ta__3816),"﷐'descendants":tf__3817.call(null,"﷐'descendants".call(null,h),parent,ta__3816,tag,td__3815)});
})());

if(cljs.core.truth_(or__3548__auto____3818))
{return or__3548__auto____3818;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3819.call(this,h,tag);
case  3 :
return derive__3820.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__3826 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3827 = (function (h,tag,parent){
var parentMap__3822 = "﷐'parents".call(null,h);
var childsParents__3823 = (cljs.core.truth_(parentMap__3822.call(null,tag))?cljs.core.disj.call(null,parentMap__3822.call(null,tag),parent):cljs.core.set([]));
var newParents__3824 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3823))?cljs.core.assoc.call(null,parentMap__3822,tag,childsParents__3823):cljs.core.dissoc.call(null,parentMap__3822,tag));
var deriv_seq__3825 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3811_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3811_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3811_SHARP_),cljs.core.second.call(null,p1__3811_SHARP_)));
}),cljs.core.seq.call(null,newParents__3824)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3822.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3812_SHARP_,p2__3813_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3812_SHARP_,p2__3813_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3825));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3826.call(this,h,tag);
case  3 :
return underive__3827.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__3829 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____3831 = (cljs.core.truth_((function (){var and__3546__auto____3830 = xprefs__3829;

if(cljs.core.truth_(and__3546__auto____3830))
{return xprefs__3829.call(null,y);
} else
{return and__3546__auto____3830;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____3831))
{return or__3548__auto____3831;
} else
{var or__3548__auto____3833 = (function (){var ps__3832 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3832) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3832),prefer_table)))
{} else
{}
{
var G__3836 = cljs.core.rest.call(null,ps__3832);
ps__3832 = G__3836;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3833))
{return or__3548__auto____3833;
} else
{var or__3548__auto____3835 = (function (){var ps__3834 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3834) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3834),y,prefer_table)))
{} else
{}
{
var G__3837 = cljs.core.rest.call(null,ps__3834);
ps__3834 = G__3837;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3835))
{return or__3548__auto____3835;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____3838 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____3838))
{return or__3548__auto____3838;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3847 = cljs.core.reduce.call(null,(function (be,p__3839){
var vec__3840__3841 = p__3839;
var k__3842 = cljs.core.nth.call(null,vec__3840__3841,0,null);
var ___3843 = cljs.core.nth.call(null,vec__3840__3841,1,null);
var e__3844 = vec__3840__3841;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3842)))
{var be2__3846 = (cljs.core.truth_((function (){var or__3548__auto____3845 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____3845))
{return or__3548__auto____3845;
} else
{return cljs.core.dominates.call(null,k__3842,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3844:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3846),k__3842,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3842," and ",cljs.core.first.call(null,be2__3846),", and neither is preferred")));
}
return be2__3846;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3847))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3847));
return cljs.core.second.call(null,best_entry__3847);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3848 = mf;

if(cljs.core.truth_(and__3546__auto____3848))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____3848;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____3849 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3849))
{return or__3548__auto____3849;
} else
{var or__3548__auto____3850 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____3850))
{return or__3548__auto____3850;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____3851 = mf;

if(cljs.core.truth_(and__3546__auto____3851))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____3851;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____3852 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3852))
{return or__3548__auto____3852;
} else
{var or__3548__auto____3853 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____3853))
{return or__3548__auto____3853;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3854 = mf;

if(cljs.core.truth_(and__3546__auto____3854))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____3854;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3855 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3855))
{return or__3548__auto____3855;
} else
{var or__3548__auto____3856 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____3856))
{return or__3548__auto____3856;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____3857 = mf;

if(cljs.core.truth_(and__3546__auto____3857))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____3857;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____3858 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3858))
{return or__3548__auto____3858;
} else
{var or__3548__auto____3859 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____3859))
{return or__3548__auto____3859;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3860 = mf;

if(cljs.core.truth_(and__3546__auto____3860))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____3860;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3861 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3861))
{return or__3548__auto____3861;
} else
{var or__3548__auto____3862 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____3862))
{return or__3548__auto____3862;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3863 = mf;

if(cljs.core.truth_(and__3546__auto____3863))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____3863;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____3864 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3864))
{return or__3548__auto____3864;
} else
{var or__3548__auto____3865 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____3865))
{return or__3548__auto____3865;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3866 = mf;

if(cljs.core.truth_(and__3546__auto____3866))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____3866;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____3867 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3867))
{return or__3548__auto____3867;
} else
{var or__3548__auto____3868 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____3868))
{return or__3548__auto____3868;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____3869 = mf;

if(cljs.core.truth_(and__3546__auto____3869))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____3869;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____3870 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3870))
{return or__3548__auto____3870;
} else
{var or__3548__auto____3871 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3871))
{return or__3548__auto____3871;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3872 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3873 = cljs.core._get_method.call(null,mf,dispatch_val__3872);

if(cljs.core.truth_(target_fn__3873))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3872)));
}
return cljs.core.apply.call(null,target_fn__3873,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__3874 = this;
cljs.core.swap_BANG_.call(null,this__3874.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3874.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3874.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3874.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3875 = this;
cljs.core.swap_BANG_.call(null,this__3875.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3875.method_cache,this__3875.method_table,this__3875.cached_hierarchy,this__3875.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3876 = this;
cljs.core.swap_BANG_.call(null,this__3876.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3876.method_cache,this__3876.method_table,this__3876.cached_hierarchy,this__3876.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3877 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3877.cached_hierarchy),cljs.core.deref.call(null,this__3877.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3877.method_cache,this__3877.method_table,this__3877.cached_hierarchy,this__3877.hierarchy);
}
var temp__3695__auto____3878 = cljs.core.deref.call(null,this__3877.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____3878))
{var target_fn__3879 = temp__3695__auto____3878;

return target_fn__3879;
} else
{var temp__3695__auto____3880 = cljs.core.find_and_cache_best_method.call(null,this__3877.name,dispatch_val,this__3877.hierarchy,this__3877.method_table,this__3877.prefer_table,this__3877.method_cache,this__3877.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____3880))
{var target_fn__3881 = temp__3695__auto____3880;

return target_fn__3881;
} else
{return cljs.core.deref.call(null,this__3877.method_table).call(null,this__3877.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3882 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3882.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__3882.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__3882.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3882.method_cache,this__3882.method_table,this__3882.cached_hierarchy,this__3882.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3883 = this;
return cljs.core.deref.call(null,this__3883.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3884 = this;
return cljs.core.deref.call(null,this__3884.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3885 = this;
return cljs.core.do_invoke.call(null,mf,this__3885.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3886__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3886 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3886__delegate.call(this, _, args);
};
G__3886.cljs$lang$maxFixedArity = 1;
G__3886.cljs$lang$applyTo = (function (arglist__3887){
var _ = cljs.core.first(arglist__3887);
var args = cljs.core.rest(arglist__3887);
return G__3886__delegate.call(this, _, args);
});
return G__3886;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
