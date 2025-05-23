(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();function c_(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var f_={exports:{}},qu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lS=Symbol.for("react.transitional.element"),uS=Symbol.for("react.fragment");function h_(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:lS,type:e,key:i,ref:t!==void 0?t:null,props:n}}qu.Fragment=uS;qu.jsx=h_;qu.jsxs=h_;f_.exports=qu;var St=f_.exports,d_={exports:{}},It={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd=Symbol.for("react.transitional.element"),cS=Symbol.for("react.portal"),fS=Symbol.for("react.fragment"),hS=Symbol.for("react.strict_mode"),dS=Symbol.for("react.profiler"),pS=Symbol.for("react.consumer"),mS=Symbol.for("react.context"),gS=Symbol.for("react.forward_ref"),_S=Symbol.for("react.suspense"),vS=Symbol.for("react.memo"),p_=Symbol.for("react.lazy"),Ip=Symbol.iterator;function xS(e){return e===null||typeof e!="object"?null:(e=Ip&&e[Ip]||e["@@iterator"],typeof e=="function"?e:null)}var m_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g_=Object.assign,__={};function Es(e,t,n){this.props=e,this.context=t,this.refs=__,this.updater=n||m_}Es.prototype.isReactComponent={};Es.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Es.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function v_(){}v_.prototype=Es.prototype;function dd(e,t,n){this.props=e,this.context=t,this.refs=__,this.updater=n||m_}var pd=dd.prototype=new v_;pd.constructor=dd;g_(pd,Es.prototype);pd.isPureReactComponent=!0;var zp=Array.isArray,de={H:null,A:null,T:null,S:null,V:null},x_=Object.prototype.hasOwnProperty;function md(e,t,n,i,a,r){return n=r.ref,{$$typeof:hd,type:e,key:t,ref:n!==void 0?n:null,props:r}}function SS(e,t){return md(e.type,t,void 0,void 0,void 0,e.props)}function gd(e){return typeof e=="object"&&e!==null&&e.$$typeof===hd}function yS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Bp=/\/+/g;function yc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?yS(""+e.key):t.toString(36)}function Fp(){}function MS(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Fp,Fp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Ur(e,t,n,i,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case hd:case cS:s=!0;break;case p_:return s=e._init,Ur(s(e._payload),t,n,i,a)}}if(s)return a=a(e),s=i===""?"."+yc(e,0):i,zp(a)?(n="",s!=null&&(n=s.replace(Bp,"$&/")+"/"),Ur(a,t,n,"",function(u){return u})):a!=null&&(gd(a)&&(a=SS(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(Bp,"$&/")+"/")+s)),t.push(a)),1;s=0;var o=i===""?".":i+":";if(zp(e))for(var l=0;l<e.length;l++)i=e[l],r=o+yc(i,l),s+=Ur(i,t,n,r,a);else if(l=xS(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,r=o+yc(i,l++),s+=Ur(i,t,n,r,a);else if(r==="object"){if(typeof e.then=="function")return Ur(MS(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return s}function il(e,t,n){if(e==null)return e;var i=[],a=0;return Ur(e,i,"","",function(r){return t.call(n,r,a++)}),i}function ES(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Hp=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function TS(){}It.Children={map:il,forEach:function(e,t,n){il(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return il(e,function(){t++}),t},toArray:function(e){return il(e,function(t){return t})||[]},only:function(e){if(!gd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};It.Component=Es;It.Fragment=fS;It.Profiler=dS;It.PureComponent=dd;It.StrictMode=hS;It.Suspense=_S;It.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=de;It.__COMPILER_RUNTIME={__proto__:null,c:function(e){return de.H.useMemoCache(e)}};It.cache=function(e){return function(){return e.apply(null,arguments)}};It.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=g_({},e.props),a=e.key,r=void 0;if(t!=null)for(s in t.ref!==void 0&&(r=void 0),t.key!==void 0&&(a=""+t.key),t)!x_.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];i.children=o}return md(e.type,a,void 0,void 0,r,i)};It.createContext=function(e){return e={$$typeof:mS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:pS,_context:e},e};It.createElement=function(e,t,n){var i,a={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)x_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return md(e,r,void 0,void 0,null,a)};It.createRef=function(){return{current:null}};It.forwardRef=function(e){return{$$typeof:gS,render:e}};It.isValidElement=gd;It.lazy=function(e){return{$$typeof:p_,_payload:{_status:-1,_result:e},_init:ES}};It.memo=function(e,t){return{$$typeof:vS,type:e,compare:t===void 0?null:t}};It.startTransition=function(e){var t=de.T,n={};de.T=n;try{var i=e(),a=de.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(TS,Hp)}catch(r){Hp(r)}finally{de.T=t}};It.unstable_useCacheRefresh=function(){return de.H.useCacheRefresh()};It.use=function(e){return de.H.use(e)};It.useActionState=function(e,t,n){return de.H.useActionState(e,t,n)};It.useCallback=function(e,t){return de.H.useCallback(e,t)};It.useContext=function(e){return de.H.useContext(e)};It.useDebugValue=function(){};It.useDeferredValue=function(e,t){return de.H.useDeferredValue(e,t)};It.useEffect=function(e,t,n){var i=de.H;if(typeof n=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return i.useEffect(e,t)};It.useId=function(){return de.H.useId()};It.useImperativeHandle=function(e,t,n){return de.H.useImperativeHandle(e,t,n)};It.useInsertionEffect=function(e,t){return de.H.useInsertionEffect(e,t)};It.useLayoutEffect=function(e,t){return de.H.useLayoutEffect(e,t)};It.useMemo=function(e,t){return de.H.useMemo(e,t)};It.useOptimistic=function(e,t){return de.H.useOptimistic(e,t)};It.useReducer=function(e,t,n){return de.H.useReducer(e,t,n)};It.useRef=function(e){return de.H.useRef(e)};It.useState=function(e){return de.H.useState(e)};It.useSyncExternalStore=function(e,t,n){return de.H.useSyncExternalStore(e,t,n)};It.useTransition=function(){return de.H.useTransition()};It.version="19.1.0";d_.exports=It;var k=d_.exports;const bS=c_(k);var S_={exports:{}},Yu={},y_={exports:{}},M_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,H){var I=N.length;N.push(H);t:for(;0<I;){var et=I-1>>>1,st=N[et];if(0<a(st,H))N[et]=H,N[I]=st,I=et;else break t}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var H=N[0],I=N.pop();if(I!==H){N[0]=I;t:for(var et=0,st=N.length,pt=st>>>1;et<pt;){var zt=2*(et+1)-1,Yt=N[zt],W=zt+1,$=N[W];if(0>a(Yt,I))W<st&&0>a($,Yt)?(N[et]=$,N[W]=I,et=W):(N[et]=Yt,N[zt]=I,et=zt);else if(W<st&&0>a($,I))N[et]=$,N[W]=I,et=W;else break t}}return H}function a(N,H){var I=N.sortIndex-H.sortIndex;return I!==0?I:N.id-H.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var l=[],u=[],f=1,d=null,h=3,p=!1,v=!1,x=!1,m=!1,c=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;function S(N){for(var H=n(u);H!==null;){if(H.callback===null)i(u);else if(H.startTime<=N)i(u),H.sortIndex=H.expirationTime,t(l,H);else break;H=n(u)}}function C(N){if(x=!1,S(N),!v)if(n(l)!==null)v=!0,A||(A=!0,X());else{var H=n(u);H!==null&&j(C,H.startTime-N)}}var A=!1,b=-1,U=5,T=-1;function y(){return m?!0:!(e.unstable_now()-T<U)}function D(){if(m=!1,A){var N=e.unstable_now();T=N;var H=!0;try{t:{v=!1,x&&(x=!1,_(b),b=-1),p=!0;var I=h;try{e:{for(S(N),d=n(l);d!==null&&!(d.expirationTime>N&&y());){var et=d.callback;if(typeof et=="function"){d.callback=null,h=d.priorityLevel;var st=et(d.expirationTime<=N);if(N=e.unstable_now(),typeof st=="function"){d.callback=st,S(N),H=!0;break e}d===n(l)&&i(l),S(N)}else i(l);d=n(l)}if(d!==null)H=!0;else{var pt=n(u);pt!==null&&j(C,pt.startTime-N),H=!1}}break t}finally{d=null,h=I,p=!1}H=void 0}}finally{H?X():A=!1}}}var X;if(typeof g=="function")X=function(){g(D)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,K=V.port2;V.port1.onmessage=D,X=function(){K.postMessage(null)}}else X=function(){c(D,0)};function j(N,H){b=c(function(){N(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var I=h;h=H;try{return N()}finally{h=I}},e.unstable_requestPaint=function(){m=!0},e.unstable_runWithPriority=function(N,H){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var I=h;h=N;try{return H()}finally{h=I}},e.unstable_scheduleCallback=function(N,H,I){var et=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?et+I:et):I=et,N){case 1:var st=-1;break;case 2:st=250;break;case 5:st=1073741823;break;case 4:st=1e4;break;default:st=5e3}return st=I+st,N={id:f++,callback:H,priorityLevel:N,startTime:I,expirationTime:st,sortIndex:-1},I>et?(N.sortIndex=I,t(u,N),n(l)===null&&N===n(u)&&(x?(_(b),b=-1):x=!0,j(C,I-et))):(N.sortIndex=st,t(l,N),v||p||(v=!0,A||(A=!0,X()))),N},e.unstable_shouldYield=y,e.unstable_wrapCallback=function(N){var H=h;return function(){var I=h;h=H;try{return N.apply(this,arguments)}finally{h=I}}}})(M_);y_.exports=M_;var AS=y_.exports,E_={exports:{}},nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RS=k;function T_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ki(){}var en={d:{f:ki,r:function(){throw Error(T_(522))},D:ki,C:ki,L:ki,m:ki,X:ki,S:ki,M:ki},p:0,findDOMNode:null},CS=Symbol.for("react.portal");function wS(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:CS,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var $s=RS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ju(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=en;nn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(T_(299));return wS(e,t,null,n)};nn.flushSync=function(e){var t=$s.T,n=en.p;try{if($s.T=null,en.p=2,e)return e()}finally{$s.T=t,en.p=n,en.d.f()}};nn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,en.d.C(e,t))};nn.prefetchDNS=function(e){typeof e=="string"&&en.d.D(e)};nn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=ju(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?en.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&en.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};nn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=ju(t.as,t.crossOrigin);en.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&en.d.M(e)};nn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=ju(n,t.crossOrigin);en.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};nn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=ju(t.as,t.crossOrigin);en.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else en.d.m(e)};nn.requestFormReset=function(e){en.d.r(e)};nn.unstable_batchedUpdates=function(e,t){return e(t)};nn.useFormState=function(e,t,n){return $s.H.useFormState(e,t,n)};nn.useFormStatus=function(){return $s.H.useHostTransitionStatus()};nn.version="19.1.0";function b_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b_)}catch(e){console.error(e)}}b_(),E_.exports=nn;var DS=E_.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pe=AS,A_=k,US=DS;function Y(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function R_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Uo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function C_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gp(e){if(Uo(e)!==e)throw Error(Y(188))}function LS(e){var t=e.alternate;if(!t){if(t=Uo(e),t===null)throw Error(Y(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return Gp(a),e;if(r===i)return Gp(a),t;r=r.sibling}throw Error(Y(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(Y(189))}}if(n.alternate!==i)throw Error(Y(190))}if(n.tag!==3)throw Error(Y(188));return n.stateNode.current===n?e:t}function w_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w_(e),t!==null)return t;e=e.sibling}return null}var fe=Object.assign,NS=Symbol.for("react.element"),al=Symbol.for("react.transitional.element"),js=Symbol.for("react.portal"),Pr=Symbol.for("react.fragment"),D_=Symbol.for("react.strict_mode"),Nf=Symbol.for("react.profiler"),OS=Symbol.for("react.provider"),U_=Symbol.for("react.consumer"),Ei=Symbol.for("react.context"),_d=Symbol.for("react.forward_ref"),Of=Symbol.for("react.suspense"),Pf=Symbol.for("react.suspense_list"),vd=Symbol.for("react.memo"),$i=Symbol.for("react.lazy"),If=Symbol.for("react.activity"),PS=Symbol.for("react.memo_cache_sentinel"),Vp=Symbol.iterator;function Os(e){return e===null||typeof e!="object"?null:(e=Vp&&e[Vp]||e["@@iterator"],typeof e=="function"?e:null)}var IS=Symbol.for("react.client.reference");function zf(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===IS?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pr:return"Fragment";case Nf:return"Profiler";case D_:return"StrictMode";case Of:return"Suspense";case Pf:return"SuspenseList";case If:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case js:return"Portal";case Ei:return(e.displayName||"Context")+".Provider";case U_:return(e._context.displayName||"Context")+".Consumer";case _d:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vd:return t=e.displayName||null,t!==null?t:zf(e.type)||"Memo";case $i:t=e._payload,e=e._init;try{return zf(e(t))}catch{}}return null}var Zs=Array.isArray,Et=A_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Zt=US.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ya={pending:!1,data:null,method:null,action:null},Bf=[],Ir=-1;function ui(e){return{current:e}}function ke(e){0>Ir||(e.current=Bf[Ir],Bf[Ir]=null,Ir--)}function pe(e,t){Ir++,Bf[Ir]=e.current,e.current=t}var ri=ui(null),mo=ui(null),ca=ui(null),uu=ui(null);function cu(e,t){switch(pe(ca,t),pe(mo,e),pe(ri,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ym(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ym(t),e=j0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ke(ri),pe(ri,e)}function os(){ke(ri),ke(mo),ke(ca)}function Ff(e){e.memoizedState!==null&&pe(uu,e);var t=ri.current,n=j0(t,e.type);t!==n&&(pe(mo,e),pe(ri,n))}function fu(e){mo.current===e&&(ke(ri),ke(mo)),uu.current===e&&(ke(uu),bo._currentValue=Ya)}var Hf=Object.prototype.hasOwnProperty,xd=Pe.unstable_scheduleCallback,Mc=Pe.unstable_cancelCallback,zS=Pe.unstable_shouldYield,BS=Pe.unstable_requestPaint,si=Pe.unstable_now,FS=Pe.unstable_getCurrentPriorityLevel,L_=Pe.unstable_ImmediatePriority,N_=Pe.unstable_UserBlockingPriority,hu=Pe.unstable_NormalPriority,HS=Pe.unstable_LowPriority,O_=Pe.unstable_IdlePriority,GS=Pe.log,VS=Pe.unstable_setDisableYieldValue,Lo=null,yn=null;function sa(e){if(typeof GS=="function"&&VS(e),yn&&typeof yn.setStrictMode=="function")try{yn.setStrictMode(Lo,e)}catch{}}var Mn=Math.clz32?Math.clz32:WS,kS=Math.log,XS=Math.LN2;function WS(e){return e>>>=0,e===0?32:31-(kS(e)/XS|0)|0}var rl=256,sl=4194304;function Ba(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zu(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?a=Ba(i):(s&=o,s!==0?a=Ba(s):n||(n=o&~e,n!==0&&(a=Ba(n))))):(o=i&~r,o!==0?a=Ba(o):s!==0?a=Ba(s):n||(n=i&~e,n!==0&&(a=Ba(n)))),a===0?0:t!==0&&t!==a&&!(t&r)&&(r=a&-a,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:a}function No(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function qS(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P_(){var e=rl;return rl<<=1,!(rl&4194048)&&(rl=256),e}function I_(){var e=sl;return sl<<=1,!(sl&62914560)&&(sl=4194304),e}function Ec(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Oo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function YS(e,t,n,i,a,r){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,u=e.hiddenUpdates;for(n=s&~n;0<n;){var f=31-Mn(n),d=1<<f;o[f]=0,l[f]=-1;var h=u[f];if(h!==null)for(u[f]=null,f=0;f<h.length;f++){var p=h[f];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&z_(e,i,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function z_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Mn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function B_(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Mn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function Sd(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function yd(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function F_(){var e=Zt.p;return e!==0?e:(e=window.event,e===void 0?32:ax(e.type))}function jS(e,t){var n=Zt.p;try{return Zt.p=e,t()}finally{Zt.p=n}}var ba=Math.random().toString(36).slice(2),Qe="__reactFiber$"+ba,fn="__reactProps$"+ba,Ts="__reactContainer$"+ba,Gf="__reactEvents$"+ba,ZS="__reactListeners$"+ba,KS="__reactHandles$"+ba,kp="__reactResources$"+ba,Po="__reactMarker$"+ba;function Md(e){delete e[Qe],delete e[fn],delete e[Gf],delete e[ZS],delete e[KS]}function zr(e){var t=e[Qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ts]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Km(e);e!==null;){if(n=e[Qe])return n;e=Km(e)}return t}e=n,n=e.parentNode}return null}function bs(e){if(e=e[Qe]||e[Ts]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Ks(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Y(33))}function Kr(e){var t=e[kp];return t||(t=e[kp]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function He(e){e[Po]=!0}var H_=new Set,G_={};function or(e,t){ls(e,t),ls(e+"Capture",t)}function ls(e,t){for(G_[e]=t,e=0;e<t.length;e++)H_.add(t[e])}var QS=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xp={},Wp={};function JS(e){return Hf.call(Wp,e)?!0:Hf.call(Xp,e)?!1:QS.test(e)?Wp[e]=!0:(Xp[e]=!0,!1)}function Vl(e,t,n){if(JS(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ol(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function di(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var Tc,qp;function Lr(e){if(Tc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Tc=t&&t[1]||"",qp=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tc+e+qp}var bc=!1;function Ac(e,t){if(!e||bc)return"";bc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var h=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){h=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){h=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&h&&typeof p.stack=="string")return[p.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),u=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===u.length)for(i=l.length-1,a=u.length-1;1<=i&&0<=a&&l[i]!==u[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==u[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==u[a]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=a);break}}}finally{bc=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Lr(n):""}function $S(e){switch(e.tag){case 26:case 27:case 5:return Lr(e.type);case 16:return Lr("Lazy");case 13:return Lr("Suspense");case 19:return Lr("SuspenseList");case 0:case 15:return Ac(e.type,!1);case 11:return Ac(e.type.render,!1);case 1:return Ac(e.type,!0);case 31:return Lr("Activity");default:return""}}function Yp(e){try{var t="";do t+=$S(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Dn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function V_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ty(e){var t=V_(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){i=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function du(e){e._valueTracker||(e._valueTracker=ty(e))}function k_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=V_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function pu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ey=/[\n"\\]/g;function Nn(e){return e.replace(ey,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Vf(e,t,n,i,a,r,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Dn(t)):e.value!==""+Dn(t)&&(e.value=""+Dn(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?kf(e,s,Dn(t)):n!=null?kf(e,s,Dn(n)):i!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Dn(o):e.removeAttribute("name")}function X_(e,t,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+Dn(n):"",t=t!=null?""+Dn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function kf(e,t,n){t==="number"&&pu(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Qr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Dn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function W_(e,t,n){if(t!=null&&(t=""+Dn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Dn(n):""}function q_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Y(92));if(Zs(i)){if(1<i.length)throw Error(Y(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Dn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function us(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ny=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jp(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||ny.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Y_(e,t,n){if(t!=null&&typeof t!="object")throw Error(Y(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&jp(e,a,i)}else for(var r in t)t.hasOwnProperty(r)&&jp(e,r,t[r])}function Ed(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var iy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ay=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function kl(e){return ay.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Xf=null;function Td(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Br=null,Jr=null;function Zp(e){var t=bs(e);if(t&&(e=t.stateNode)){var n=e[fn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Vf(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Nn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[fn]||null;if(!a)throw Error(Y(90));Vf(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&k_(i)}break t;case"textarea":W_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Qr(e,!!n.multiple,t,!1)}}}var Rc=!1;function j_(e,t,n){if(Rc)return e(t,n);Rc=!0;try{var i=e(t);return i}finally{if(Rc=!1,(Br!==null||Jr!==null)&&(rc(),Br&&(t=Br,e=Jr,Jr=Br=null,Zp(t),e)))for(t=0;t<e.length;t++)Zp(e[t])}}function go(e,t){var n=e.stateNode;if(n===null)return null;var i=n[fn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Y(231,t,typeof n));return n}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wf=!1;if(Ni)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Wf=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Wf=!1}var oa=null,bd=null,Xl=null;function Z_(){if(Xl)return Xl;var e,t=bd,n=t.length,i,a="value"in oa?oa.value:oa.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===a[r-i];i++);return Xl=a.slice(e,1<i?1-i:void 0)}function Wl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ll(){return!0}function Kp(){return!1}function hn(e){function t(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ll:Kp,this.isPropagationStopped=Kp,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),t}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ku=hn(lr),Io=fe({},lr,{view:0,detail:0}),ry=hn(Io),Cc,wc,Is,Qu=fe({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ad,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Is&&(Is&&e.type==="mousemove"?(Cc=e.screenX-Is.screenX,wc=e.screenY-Is.screenY):wc=Cc=0,Is=e),Cc)},movementY:function(e){return"movementY"in e?e.movementY:wc}}),Qp=hn(Qu),sy=fe({},Qu,{dataTransfer:0}),oy=hn(sy),ly=fe({},Io,{relatedTarget:0}),Dc=hn(ly),uy=fe({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),cy=hn(uy),fy=fe({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hy=hn(fy),dy=fe({},lr,{data:0}),Jp=hn(dy),py={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},my={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _y(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gy[e])?!!t[e]:!1}function Ad(){return _y}var vy=fe({},Io,{key:function(e){if(e.key){var t=py[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?my[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ad,charCode:function(e){return e.type==="keypress"?Wl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xy=hn(vy),Sy=fe({},Qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$p=hn(Sy),yy=fe({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ad}),My=hn(yy),Ey=fe({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ty=hn(Ey),by=fe({},Qu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ay=hn(by),Ry=fe({},lr,{newState:0,oldState:0}),Cy=hn(Ry),wy=[9,13,27,32],Rd=Ni&&"CompositionEvent"in window,to=null;Ni&&"documentMode"in document&&(to=document.documentMode);var Dy=Ni&&"TextEvent"in window&&!to,K_=Ni&&(!Rd||to&&8<to&&11>=to),tm=" ",em=!1;function Q_(e,t){switch(e){case"keyup":return wy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fr=!1;function Uy(e,t){switch(e){case"compositionend":return J_(t);case"keypress":return t.which!==32?null:(em=!0,tm);case"textInput":return e=t.data,e===tm&&em?null:e;default:return null}}function Ly(e,t){if(Fr)return e==="compositionend"||!Rd&&Q_(e,t)?(e=Z_(),Xl=bd=oa=null,Fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return K_&&t.locale!=="ko"?null:t.data;default:return null}}var Ny={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ny[e.type]:t==="textarea"}function $_(e,t,n,i){Br?Jr?Jr.push(i):Jr=[i]:Br=i,t=Lu(t,"onChange"),0<t.length&&(n=new Ku("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var eo=null,_o=null;function Oy(e){W0(e,0)}function Ju(e){var t=Ks(e);if(k_(t))return e}function im(e,t){if(e==="change")return t}var tv=!1;if(Ni){var Uc;if(Ni){var Lc="oninput"in document;if(!Lc){var am=document.createElement("div");am.setAttribute("oninput","return;"),Lc=typeof am.oninput=="function"}Uc=Lc}else Uc=!1;tv=Uc&&(!document.documentMode||9<document.documentMode)}function rm(){eo&&(eo.detachEvent("onpropertychange",ev),_o=eo=null)}function ev(e){if(e.propertyName==="value"&&Ju(_o)){var t=[];$_(t,_o,e,Td(e)),j_(Oy,t)}}function Py(e,t,n){e==="focusin"?(rm(),eo=t,_o=n,eo.attachEvent("onpropertychange",ev)):e==="focusout"&&rm()}function Iy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ju(_o)}function zy(e,t){if(e==="click")return Ju(t)}function By(e,t){if(e==="input"||e==="change")return Ju(t)}function Fy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var An=typeof Object.is=="function"?Object.is:Fy;function vo(e,t){if(An(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Hf.call(t,a)||!An(e[a],t[a]))return!1}return!0}function sm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function om(e,t){var n=sm(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=sm(n)}}function nv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function iv(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=pu(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pu(e.document)}return t}function Cd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Hy=Ni&&"documentMode"in document&&11>=document.documentMode,Hr=null,qf=null,no=null,Yf=!1;function lm(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yf||Hr==null||Hr!==pu(i)||(i=Hr,"selectionStart"in i&&Cd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),no&&vo(no,i)||(no=i,i=Lu(qf,"onSelect"),0<i.length&&(t=new Ku("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Hr)))}function Ua(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gr={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionrun:Ua("Transition","TransitionRun"),transitionstart:Ua("Transition","TransitionStart"),transitioncancel:Ua("Transition","TransitionCancel"),transitionend:Ua("Transition","TransitionEnd")},Nc={},av={};Ni&&(av=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function ur(e){if(Nc[e])return Nc[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in av)return Nc[e]=t[n];return e}var rv=ur("animationend"),sv=ur("animationiteration"),ov=ur("animationstart"),Gy=ur("transitionrun"),Vy=ur("transitionstart"),ky=ur("transitioncancel"),lv=ur("transitionend"),uv=new Map,jf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jf.push("scrollEnd");function Zn(e,t){uv.set(e,t),or(t,[e])}var um=new WeakMap;function On(e,t){if(typeof e=="object"&&e!==null){var n=um.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Yp(t)},um.set(e,t),t)}return{value:e,source:t,stack:Yp(t)}}var wn=[],Vr=0,wd=0;function $u(){for(var e=Vr,t=wd=Vr=0;t<e;){var n=wn[t];wn[t++]=null;var i=wn[t];wn[t++]=null;var a=wn[t];wn[t++]=null;var r=wn[t];if(wn[t++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&cv(n,a,r)}}function tc(e,t,n,i){wn[Vr++]=e,wn[Vr++]=t,wn[Vr++]=n,wn[Vr++]=i,wd|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Dd(e,t,n,i){return tc(e,t,n,i),mu(e)}function As(e,t){return tc(e,null,null,t),mu(e)}function cv(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,a&&t!==null&&(a=31-Mn(n),e=r.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),r):null}function mu(e){if(50<ho)throw ho=0,mh=null,Error(Y(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var kr={};function Xy(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(e,t,n,i){return new Xy(e,t,n,i)}function Ud(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Di(e,t){var n=e.alternate;return n===null?(n=Sn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function fv(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ql(e,t,n,i,a,r){var s=0;if(i=e,typeof e=="function")Ud(e)&&(s=1);else if(typeof e=="string")s=qM(e,n,ri.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case If:return e=Sn(31,n,t,a),e.elementType=If,e.lanes=r,e;case Pr:return ja(n.children,a,r,t);case D_:s=8,a|=24;break;case Nf:return e=Sn(12,n,t,a|2),e.elementType=Nf,e.lanes=r,e;case Of:return e=Sn(13,n,t,a),e.elementType=Of,e.lanes=r,e;case Pf:return e=Sn(19,n,t,a),e.elementType=Pf,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case OS:case Ei:s=10;break t;case U_:s=9;break t;case _d:s=11;break t;case vd:s=14;break t;case $i:s=16,i=null;break t}s=29,n=Error(Y(130,e===null?"null":typeof e,"")),i=null}return t=Sn(s,n,t,a),t.elementType=e,t.type=i,t.lanes=r,t}function ja(e,t,n,i){return e=Sn(7,e,i,t),e.lanes=n,e}function Oc(e,t,n){return e=Sn(6,e,null,t),e.lanes=n,e}function Pc(e,t,n){return t=Sn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Xr=[],Wr=0,gu=null,_u=0,Un=[],Ln=0,Za=null,Ti=1,bi="";function Fa(e,t){Xr[Wr++]=_u,Xr[Wr++]=gu,gu=e,_u=t}function hv(e,t,n){Un[Ln++]=Ti,Un[Ln++]=bi,Un[Ln++]=Za,Za=e;var i=Ti;e=bi;var a=32-Mn(i)-1;i&=~(1<<a),n+=1;var r=32-Mn(t)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,Ti=1<<32-Mn(t)+a|n<<a|i,bi=r+e}else Ti=1<<r|n<<a|i,bi=e}function Ld(e){e.return!==null&&(Fa(e,1),hv(e,1,0))}function Nd(e){for(;e===gu;)gu=Xr[--Wr],Xr[Wr]=null,_u=Xr[--Wr],Xr[Wr]=null;for(;e===Za;)Za=Un[--Ln],Un[Ln]=null,bi=Un[--Ln],Un[Ln]=null,Ti=Un[--Ln],Un[Ln]=null}var tn=null,ye=null,jt=!1,Ka=null,ti=!1,Zf=Error(Y(519));function er(e){var t=Error(Y(418,""));throw xo(On(t,e)),Zf}function cm(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Qe]=e,t[fn]=i,n){case"dialog":Gt("cancel",t),Gt("close",t);break;case"iframe":case"object":case"embed":Gt("load",t);break;case"video":case"audio":for(n=0;n<Mo.length;n++)Gt(Mo[n],t);break;case"source":Gt("error",t);break;case"img":case"image":case"link":Gt("error",t),Gt("load",t);break;case"details":Gt("toggle",t);break;case"input":Gt("invalid",t),X_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),du(t);break;case"select":Gt("invalid",t);break;case"textarea":Gt("invalid",t),q_(t,i.value,i.defaultValue,i.children),du(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Y0(t.textContent,n)?(i.popover!=null&&(Gt("beforetoggle",t),Gt("toggle",t)),i.onScroll!=null&&Gt("scroll",t),i.onScrollEnd!=null&&Gt("scrollend",t),i.onClick!=null&&(t.onclick=lc),t=!0):t=!1,t||er(e)}function fm(e){for(tn=e.return;tn;)switch(tn.tag){case 5:case 13:ti=!1;return;case 27:case 3:ti=!0;return;default:tn=tn.return}}function zs(e){if(e!==tn)return!1;if(!jt)return fm(e),jt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||yh(e.type,e.memoizedProps)),n=!n),n&&ye&&er(e),fm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));t:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){ye=Yn(e.nextSibling);break t}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}ye=null}}else t===27?(t=ye,Aa(e.type)?(e=Th,Th=null,ye=e):ye=t):ye=tn?Yn(e.stateNode.nextSibling):null;return!0}function zo(){ye=tn=null,jt=!1}function hm(){var e=Ka;return e!==null&&(on===null?on=e:on.push.apply(on,e),Ka=null),e}function xo(e){Ka===null?Ka=[e]:Ka.push(e)}var Kf=ui(null),cr=null,Ai=null;function ea(e,t,n){pe(Kf,t._currentValue),t._currentValue=n}function Ui(e){e._currentValue=Kf.current,ke(Kf)}function Qf(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Jf(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;t:for(;r!==null;){var o=r;r=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),Qf(r.return,n,e),i||(s=null);break t}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(Y(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Qf(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Bo(e,t,n,i){e=null;for(var a=t,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(Y(387));if(s=s.memoizedProps,s!==null){var o=a.type;An(a.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(a===uu.current){if(s=a.alternate,s===null)throw Error(Y(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(bo):e=[bo])}a=a.return}e!==null&&Jf(t,e,n,i),t.flags|=262144}function vu(e){for(e=e.firstContext;e!==null;){if(!An(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function nr(e){cr=e,Ai=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Je(e){return dv(cr,e)}function ul(e,t){return cr===null&&nr(e),dv(e,t)}function dv(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ai===null){if(e===null)throw Error(Y(308));Ai=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ai=Ai.next=t;return n}var Wy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},qy=Pe.unstable_scheduleCallback,Yy=Pe.unstable_NormalPriority,Le={$$typeof:Ei,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Od(){return{controller:new Wy,data:new Map,refCount:0}}function Fo(e){e.refCount--,e.refCount===0&&qy(Yy,function(){e.controller.abort()})}var io=null,$f=0,cs=0,$r=null;function jy(e,t){if(io===null){var n=io=[];$f=0,cs=ip(),$r={status:"pending",value:void 0,then:function(i){n.push(i)}}}return $f++,t.then(dm,dm),t}function dm(){if(--$f===0&&io!==null){$r!==null&&($r.status="fulfilled");var e=io;io=null,cs=0,$r=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Zy(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var pm=Et.S;Et.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&jy(e,t),pm!==null&&pm(e,t)};var Qa=ui(null);function Pd(){var e=Qa.current;return e!==null?e:ue.pooledCache}function Yl(e,t){t===null?pe(Qa,Qa.current):pe(Qa,t.pool)}function pv(){var e=Pd();return e===null?null:{parent:Le._currentValue,pool:e}}var Ho=Error(Y(460)),mv=Error(Y(474)),ec=Error(Y(542)),th={then:function(){}};function mm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function cl(){}function gv(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cl,cl),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_m(e),e;default:if(typeof t.status=="string")t.then(cl,cl);else{if(e=ue,e!==null&&100<e.shellSuspendCounter)throw Error(Y(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_m(e),e}throw ao=t,Ho}}var ao=null;function gm(){if(ao===null)throw Error(Y(459));var e=ao;return ao=null,e}function _m(e){if(e===Ho||e===ec)throw Error(Y(483))}var ta=!1;function Id(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function eh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ha(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,ae&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=mu(e),cv(e,null,n),t}return tc(e,i,t,n),mu(e)}function ro(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,B_(e,n)}}function Ic(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var nh=!1;function so(){if(nh){var e=$r;if(e!==null)throw e}}function oo(e,t,n,i){nh=!1;var a=e.updateQueue;ta=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,u=l.next;l.next=null,s===null?r=u:s.next=u,s=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==s&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=l))}if(r!==null){var d=a.baseState;s=0,f=u=l=null,o=r;do{var h=o.lane&-536870913,p=h!==o.lane;if(p?(Wt&h)===h:(i&h)===h){h!==0&&h===cs&&(nh=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,x=o;h=t;var m=n;switch(x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(m,d,h);break t}d=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(m,d,h):v,h==null)break t;d=fe({},d,h);break t;case 2:ta=!0}}h=o.callback,h!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=p,l=d):f=f.next=p,s|=h;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);f===null&&(l=d),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=f,r===null&&(a.shared.lanes=0),Ma|=s,e.lanes=s,e.memoizedState=d}}function _v(e,t){if(typeof e!="function")throw Error(Y(191,e));e.call(t)}function vv(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)_v(n[e],t)}var fs=ui(null),xu=ui(0);function vm(e,t){e=Ii,pe(xu,e),pe(fs,t),Ii=e|t.baseLanes}function ih(){pe(xu,Ii),pe(fs,fs.current)}function zd(){Ii=xu.current,ke(fs),ke(xu)}var Sa=0,Bt=null,oe=null,De=null,Su=!1,ts=!1,ir=!1,yu=0,So=0,es=null,Ky=0;function Ee(){throw Error(Y(321))}function Bd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!An(e[n],t[n]))return!1;return!0}function Fd(e,t,n,i,a,r){return Sa=r,Bt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Et.H=e===null||e.memoizedState===null?Zv:Kv,ir=!1,r=n(i,a),ir=!1,ts&&(r=Sv(t,n,i,a)),xv(e),r}function xv(e){Et.H=Mu;var t=oe!==null&&oe.next!==null;if(Sa=0,De=oe=Bt=null,Su=!1,So=0,es=null,t)throw Error(Y(300));e===null||Ve||(e=e.dependencies,e!==null&&vu(e)&&(Ve=!0))}function Sv(e,t,n,i){Bt=e;var a=0;do{if(ts&&(es=null),So=0,ts=!1,25<=a)throw Error(Y(301));if(a+=1,De=oe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Et.H=iM,r=t(n,i)}while(ts);return r}function Qy(){var e=Et.H,t=e.useState()[0];return t=typeof t.then=="function"?Go(t):t,e=e.useState()[0],(oe!==null?oe.memoizedState:null)!==e&&(Bt.flags|=1024),t}function Hd(){var e=yu!==0;return yu=0,e}function Gd(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Vd(e){if(Su){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Su=!1}Sa=0,De=oe=Bt=null,ts=!1,So=yu=0,es=null}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?Bt.memoizedState=De=e:De=De.next=e,De}function Ue(){if(oe===null){var e=Bt.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=De===null?Bt.memoizedState:De.next;if(t!==null)De=t,oe=e;else{if(e===null)throw Bt.alternate===null?Error(Y(467)):Error(Y(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},De===null?Bt.memoizedState=De=e:De=De.next=e}return De}function kd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Go(e){var t=So;return So+=1,es===null&&(es=[]),e=gv(es,e,t),t=Bt,(De===null?t.memoizedState:De.next)===null&&(t=t.alternate,Et.H=t===null||t.memoizedState===null?Zv:Kv),e}function nc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Go(e);if(e.$$typeof===Ei)return Je(e)}throw Error(Y(438,String(e)))}function Xd(e){var t=null,n=Bt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Bt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=kd(),Bt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=PS;return t.index++,n}function Oi(e,t){return typeof t=="function"?t(e):t}function jl(e){var t=Ue();return Wd(t,oe,e)}function Wd(e,t,n){var i=e.queue;if(i===null)throw Error(Y(311));i.lastRenderedReducer=n;var a=e.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}t.baseQueue=a=r,i.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var o=s=null,l=null,u=t,f=!1;do{var d=u.lane&-536870913;if(d!==u.lane?(Wt&d)===d:(Sa&d)===d){var h=u.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),d===cs&&(f=!0);else if((Sa&h)===h){u=u.next,h===cs&&(f=!0);continue}else d={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=d,s=r):l=l.next=d,Bt.lanes|=h,Ma|=h;d=u.action,ir&&n(r,d),r=u.hasEagerState?u.eagerState:n(r,d)}else h={lane:d,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=h,s=r):l=l.next=h,Bt.lanes|=d,Ma|=d;u=u.next}while(u!==null&&u!==t);if(l===null?s=r:l.next=o,!An(r,e.memoizedState)&&(Ve=!0,f&&(n=$r,n!==null)))throw n;e.memoizedState=r,e.baseState=s,e.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function zc(e){var t=Ue(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=e(r,s.action),s=s.next;while(s!==a);An(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function yv(e,t,n){var i=Bt,a=Ue(),r=jt;if(r){if(n===void 0)throw Error(Y(407));n=n()}else n=t();var s=!An((oe||a).memoizedState,n);s&&(a.memoizedState=n,Ve=!0),a=a.queue;var o=Tv.bind(null,i,a,e);if(Vo(2048,8,o,[e]),a.getSnapshot!==t||s||De!==null&&De.memoizedState.tag&1){if(i.flags|=2048,hs(9,ic(),Ev.bind(null,i,a,n,t),null),ue===null)throw Error(Y(349));r||Sa&124||Mv(i,t,n)}return n}function Mv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Bt.updateQueue,t===null?(t=kd(),Bt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ev(e,t,n,i){t.value=n,t.getSnapshot=i,bv(t)&&Av(e)}function Tv(e,t,n){return n(function(){bv(t)&&Av(e)})}function bv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!An(e,n)}catch{return!0}}function Av(e){var t=As(e,2);t!==null&&Tn(t,e,2)}function ah(e){var t=rn();if(typeof e=="function"){var n=e;if(e=n(),ir){sa(!0);try{n()}finally{sa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:e},t}function Rv(e,t,n,i){return e.baseState=n,Wd(e,oe,typeof i=="function"?i:Oi)}function Jy(e,t,n,i,a){if(ac(e))throw Error(Y(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};Et.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,Cv(t,r)):(r.next=n.next,t.pending=n.next=r)}}function Cv(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var r=Et.T,s={};Et.T=s;try{var o=n(a,i),l=Et.S;l!==null&&l(s,o),xm(e,t,o)}catch(u){rh(e,t,u)}finally{Et.T=r}}else try{r=n(a,i),xm(e,t,r)}catch(u){rh(e,t,u)}}function xm(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Sm(e,t,i)},function(i){return rh(e,t,i)}):Sm(e,t,n)}function Sm(e,t,n){t.status="fulfilled",t.value=n,wv(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Cv(e,n)))}function rh(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,wv(t),t=t.next;while(t!==i)}e.action=null}function wv(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Dv(e,t){return t}function ym(e,t){if(jt){var n=ue.formState;if(n!==null){t:{var i=Bt;if(jt){if(ye){e:{for(var a=ye,r=ti;a.nodeType!==8;){if(!r){a=null;break e}if(a=Yn(a.nextSibling),a===null){a=null;break e}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){ye=Yn(a.nextSibling),i=a.data==="F!";break t}}er(i)}i=!1}i&&(t=n[0])}}return n=rn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dv,lastRenderedState:t},n.queue=i,n=qv.bind(null,Bt,i),i.dispatch=n,i=ah(!1),r=Zd.bind(null,Bt,!1,i.queue),i=rn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=Jy.bind(null,Bt,a,r,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function Mm(e){var t=Ue();return Uv(t,oe,e)}function Uv(e,t,n){if(t=Wd(e,t,Dv)[0],e=jl(Oi)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Go(t)}catch(s){throw s===Ho?ec:s}else i=t;t=Ue();var a=t.queue,r=a.dispatch;return n!==t.memoizedState&&(Bt.flags|=2048,hs(9,ic(),$y.bind(null,a,n),null)),[i,r,e]}function $y(e,t){e.action=t}function Em(e){var t=Ue(),n=oe;if(n!==null)return Uv(t,n,e);Ue(),t=t.memoizedState,n=Ue();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function hs(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Bt.updateQueue,t===null&&(t=kd(),Bt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function ic(){return{destroy:void 0,resource:void 0}}function Lv(){return Ue().memoizedState}function Zl(e,t,n,i){var a=rn();i=i===void 0?null:i,Bt.flags|=e,a.memoizedState=hs(1|t,ic(),n,i)}function Vo(e,t,n,i){var a=Ue();i=i===void 0?null:i;var r=a.memoizedState.inst;oe!==null&&i!==null&&Bd(i,oe.memoizedState.deps)?a.memoizedState=hs(t,r,n,i):(Bt.flags|=e,a.memoizedState=hs(1|t,r,n,i))}function Tm(e,t){Zl(8390656,8,e,t)}function Nv(e,t){Vo(2048,8,e,t)}function Ov(e,t){return Vo(4,2,e,t)}function Pv(e,t){return Vo(4,4,e,t)}function Iv(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zv(e,t,n){n=n!=null?n.concat([e]):null,Vo(4,4,Iv.bind(null,t,e),n)}function qd(){}function Bv(e,t){var n=Ue();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Bd(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Fv(e,t){var n=Ue();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Bd(t,i[1]))return i[0];if(i=e(),ir){sa(!0);try{e()}finally{sa(!1)}}return n.memoizedState=[i,t],i}function Yd(e,t,n){return n===void 0||Sa&1073741824?e.memoizedState=t:(e.memoizedState=n,e=w0(),Bt.lanes|=e,Ma|=e,n)}function Hv(e,t,n,i){return An(n,t)?n:fs.current!==null?(e=Yd(e,n,i),An(e,t)||(Ve=!0),e):Sa&42?(e=w0(),Bt.lanes|=e,Ma|=e,t):(Ve=!0,e.memoizedState=n)}function Gv(e,t,n,i,a){var r=Zt.p;Zt.p=r!==0&&8>r?r:8;var s=Et.T,o={};Et.T=o,Zd(e,!1,t,n);try{var l=a(),u=Et.S;if(u!==null&&u(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=Zy(l,i);lo(e,t,f,En(e))}else lo(e,t,i,En(e))}catch(d){lo(e,t,{then:function(){},status:"rejected",reason:d},En())}finally{Zt.p=r,Et.T=s}}function tM(){}function sh(e,t,n,i){if(e.tag!==5)throw Error(Y(476));var a=Vv(e).queue;Gv(e,a,t,Ya,n===null?tM:function(){return kv(e),n(i)})}function Vv(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ya,baseState:Ya,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:Ya},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function kv(e){var t=Vv(e).next.queue;lo(e,t,{},En())}function jd(){return Je(bo)}function Xv(){return Ue().memoizedState}function Wv(){return Ue().memoizedState}function eM(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=En();e=fa(n);var i=ha(t,e,n);i!==null&&(Tn(i,t,n),ro(i,t,n)),t={cache:Od()},e.payload=t;return}t=t.return}}function nM(e,t,n){var i=En();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},ac(e)?Yv(t,n):(n=Dd(e,t,n,i),n!==null&&(Tn(n,e,i),jv(n,t,i)))}function qv(e,t,n){var i=En();lo(e,t,n,i)}function lo(e,t,n,i){var a={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(ac(e))Yv(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,An(o,s))return tc(e,t,a,0),ue===null&&$u(),!1}catch{}finally{}if(n=Dd(e,t,a,i),n!==null)return Tn(n,e,i),jv(n,t,i),!0}return!1}function Zd(e,t,n,i){if(i={lane:2,revertLane:ip(),action:i,hasEagerState:!1,eagerState:null,next:null},ac(e)){if(t)throw Error(Y(479))}else t=Dd(e,n,i,2),t!==null&&Tn(t,e,2)}function ac(e){var t=e.alternate;return e===Bt||t!==null&&t===Bt}function Yv(e,t){ts=Su=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jv(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,B_(e,n)}}var Mu={readContext:Je,use:nc,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useLayoutEffect:Ee,useInsertionEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useSyncExternalStore:Ee,useId:Ee,useHostTransitionStatus:Ee,useFormState:Ee,useActionState:Ee,useOptimistic:Ee,useMemoCache:Ee,useCacheRefresh:Ee},Zv={readContext:Je,use:nc,useCallback:function(e,t){return rn().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:Tm,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Zl(4194308,4,Iv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zl(4194308,4,e,t)},useInsertionEffect:function(e,t){Zl(4,2,e,t)},useMemo:function(e,t){var n=rn();t=t===void 0?null:t;var i=e();if(ir){sa(!0);try{e()}finally{sa(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=rn();if(n!==void 0){var a=n(t);if(ir){sa(!0);try{n(t)}finally{sa(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=nM.bind(null,Bt,e),[i.memoizedState,e]},useRef:function(e){var t=rn();return e={current:e},t.memoizedState=e},useState:function(e){e=ah(e);var t=e.queue,n=qv.bind(null,Bt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:qd,useDeferredValue:function(e,t){var n=rn();return Yd(n,e,t)},useTransition:function(){var e=ah(!1);return e=Gv.bind(null,Bt,e.queue,!0,!1),rn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Bt,a=rn();if(jt){if(n===void 0)throw Error(Y(407));n=n()}else{if(n=t(),ue===null)throw Error(Y(349));Wt&124||Mv(i,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,Tm(Tv.bind(null,i,r,e),[e]),i.flags|=2048,hs(9,ic(),Ev.bind(null,i,r,n,t),null),n},useId:function(){var e=rn(),t=ue.identifierPrefix;if(jt){var n=bi,i=Ti;n=(i&~(1<<32-Mn(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=yu++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Ky++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:jd,useFormState:ym,useActionState:ym,useOptimistic:function(e){var t=rn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Zd.bind(null,Bt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Xd,useCacheRefresh:function(){return rn().memoizedState=eM.bind(null,Bt)}},Kv={readContext:Je,use:nc,useCallback:Bv,useContext:Je,useEffect:Nv,useImperativeHandle:zv,useInsertionEffect:Ov,useLayoutEffect:Pv,useMemo:Fv,useReducer:jl,useRef:Lv,useState:function(){return jl(Oi)},useDebugValue:qd,useDeferredValue:function(e,t){var n=Ue();return Hv(n,oe.memoizedState,e,t)},useTransition:function(){var e=jl(Oi)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:Go(e),t]},useSyncExternalStore:yv,useId:Xv,useHostTransitionStatus:jd,useFormState:Mm,useActionState:Mm,useOptimistic:function(e,t){var n=Ue();return Rv(n,oe,e,t)},useMemoCache:Xd,useCacheRefresh:Wv},iM={readContext:Je,use:nc,useCallback:Bv,useContext:Je,useEffect:Nv,useImperativeHandle:zv,useInsertionEffect:Ov,useLayoutEffect:Pv,useMemo:Fv,useReducer:zc,useRef:Lv,useState:function(){return zc(Oi)},useDebugValue:qd,useDeferredValue:function(e,t){var n=Ue();return oe===null?Yd(n,e,t):Hv(n,oe.memoizedState,e,t)},useTransition:function(){var e=zc(Oi)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:Go(e),t]},useSyncExternalStore:yv,useId:Xv,useHostTransitionStatus:jd,useFormState:Em,useActionState:Em,useOptimistic:function(e,t){var n=Ue();return oe!==null?Rv(n,oe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Xd,useCacheRefresh:Wv},ns=null,yo=0;function fl(e){var t=yo;return yo+=1,ns===null&&(ns=[]),gv(ns,e,t)}function Bs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function hl(e,t){throw t.$$typeof===NS?Error(Y(525)):(e=Object.prototype.toString.call(t),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function bm(e){var t=e._init;return t(e._payload)}function Qv(e){function t(c,_){if(e){var g=c.deletions;g===null?(c.deletions=[_],c.flags|=16):g.push(_)}}function n(c,_){if(!e)return null;for(;_!==null;)t(c,_),_=_.sibling;return null}function i(c){for(var _=new Map;c!==null;)c.key!==null?_.set(c.key,c):_.set(c.index,c),c=c.sibling;return _}function a(c,_){return c=Di(c,_),c.index=0,c.sibling=null,c}function r(c,_,g){return c.index=g,e?(g=c.alternate,g!==null?(g=g.index,g<_?(c.flags|=67108866,_):g):(c.flags|=67108866,_)):(c.flags|=1048576,_)}function s(c){return e&&c.alternate===null&&(c.flags|=67108866),c}function o(c,_,g,S){return _===null||_.tag!==6?(_=Oc(g,c.mode,S),_.return=c,_):(_=a(_,g),_.return=c,_)}function l(c,_,g,S){var C=g.type;return C===Pr?f(c,_,g.props.children,S,g.key):_!==null&&(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===$i&&bm(C)===_.type)?(_=a(_,g.props),Bs(_,g),_.return=c,_):(_=ql(g.type,g.key,g.props,null,c.mode,S),Bs(_,g),_.return=c,_)}function u(c,_,g,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=Pc(g,c.mode,S),_.return=c,_):(_=a(_,g.children||[]),_.return=c,_)}function f(c,_,g,S,C){return _===null||_.tag!==7?(_=ja(g,c.mode,S,C),_.return=c,_):(_=a(_,g),_.return=c,_)}function d(c,_,g){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=Oc(""+_,c.mode,g),_.return=c,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case al:return g=ql(_.type,_.key,_.props,null,c.mode,g),Bs(g,_),g.return=c,g;case js:return _=Pc(_,c.mode,g),_.return=c,_;case $i:var S=_._init;return _=S(_._payload),d(c,_,g)}if(Zs(_)||Os(_))return _=ja(_,c.mode,g,null),_.return=c,_;if(typeof _.then=="function")return d(c,fl(_),g);if(_.$$typeof===Ei)return d(c,ul(c,_),g);hl(c,_)}return null}function h(c,_,g,S){var C=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return C!==null?null:o(c,_,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case al:return g.key===C?l(c,_,g,S):null;case js:return g.key===C?u(c,_,g,S):null;case $i:return C=g._init,g=C(g._payload),h(c,_,g,S)}if(Zs(g)||Os(g))return C!==null?null:f(c,_,g,S,null);if(typeof g.then=="function")return h(c,_,fl(g),S);if(g.$$typeof===Ei)return h(c,_,ul(c,g),S);hl(c,g)}return null}function p(c,_,g,S,C){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return c=c.get(g)||null,o(_,c,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case al:return c=c.get(S.key===null?g:S.key)||null,l(_,c,S,C);case js:return c=c.get(S.key===null?g:S.key)||null,u(_,c,S,C);case $i:var A=S._init;return S=A(S._payload),p(c,_,g,S,C)}if(Zs(S)||Os(S))return c=c.get(g)||null,f(_,c,S,C,null);if(typeof S.then=="function")return p(c,_,g,fl(S),C);if(S.$$typeof===Ei)return p(c,_,g,ul(_,S),C);hl(_,S)}return null}function v(c,_,g,S){for(var C=null,A=null,b=_,U=_=0,T=null;b!==null&&U<g.length;U++){b.index>U?(T=b,b=null):T=b.sibling;var y=h(c,b,g[U],S);if(y===null){b===null&&(b=T);break}e&&b&&y.alternate===null&&t(c,b),_=r(y,_,U),A===null?C=y:A.sibling=y,A=y,b=T}if(U===g.length)return n(c,b),jt&&Fa(c,U),C;if(b===null){for(;U<g.length;U++)b=d(c,g[U],S),b!==null&&(_=r(b,_,U),A===null?C=b:A.sibling=b,A=b);return jt&&Fa(c,U),C}for(b=i(b);U<g.length;U++)T=p(b,c,U,g[U],S),T!==null&&(e&&T.alternate!==null&&b.delete(T.key===null?U:T.key),_=r(T,_,U),A===null?C=T:A.sibling=T,A=T);return e&&b.forEach(function(D){return t(c,D)}),jt&&Fa(c,U),C}function x(c,_,g,S){if(g==null)throw Error(Y(151));for(var C=null,A=null,b=_,U=_=0,T=null,y=g.next();b!==null&&!y.done;U++,y=g.next()){b.index>U?(T=b,b=null):T=b.sibling;var D=h(c,b,y.value,S);if(D===null){b===null&&(b=T);break}e&&b&&D.alternate===null&&t(c,b),_=r(D,_,U),A===null?C=D:A.sibling=D,A=D,b=T}if(y.done)return n(c,b),jt&&Fa(c,U),C;if(b===null){for(;!y.done;U++,y=g.next())y=d(c,y.value,S),y!==null&&(_=r(y,_,U),A===null?C=y:A.sibling=y,A=y);return jt&&Fa(c,U),C}for(b=i(b);!y.done;U++,y=g.next())y=p(b,c,U,y.value,S),y!==null&&(e&&y.alternate!==null&&b.delete(y.key===null?U:y.key),_=r(y,_,U),A===null?C=y:A.sibling=y,A=y);return e&&b.forEach(function(X){return t(c,X)}),jt&&Fa(c,U),C}function m(c,_,g,S){if(typeof g=="object"&&g!==null&&g.type===Pr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case al:t:{for(var C=g.key;_!==null;){if(_.key===C){if(C=g.type,C===Pr){if(_.tag===7){n(c,_.sibling),S=a(_,g.props.children),S.return=c,c=S;break t}}else if(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===$i&&bm(C)===_.type){n(c,_.sibling),S=a(_,g.props),Bs(S,g),S.return=c,c=S;break t}n(c,_);break}else t(c,_);_=_.sibling}g.type===Pr?(S=ja(g.props.children,c.mode,S,g.key),S.return=c,c=S):(S=ql(g.type,g.key,g.props,null,c.mode,S),Bs(S,g),S.return=c,c=S)}return s(c);case js:t:{for(C=g.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(c,_.sibling),S=a(_,g.children||[]),S.return=c,c=S;break t}else{n(c,_);break}else t(c,_);_=_.sibling}S=Pc(g,c.mode,S),S.return=c,c=S}return s(c);case $i:return C=g._init,g=C(g._payload),m(c,_,g,S)}if(Zs(g))return v(c,_,g,S);if(Os(g)){if(C=Os(g),typeof C!="function")throw Error(Y(150));return g=C.call(g),x(c,_,g,S)}if(typeof g.then=="function")return m(c,_,fl(g),S);if(g.$$typeof===Ei)return m(c,_,ul(c,g),S);hl(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,_!==null&&_.tag===6?(n(c,_.sibling),S=a(_,g),S.return=c,c=S):(n(c,_),S=Oc(g,c.mode,S),S.return=c,c=S),s(c)):n(c,_)}return function(c,_,g,S){try{yo=0;var C=m(c,_,g,S);return ns=null,C}catch(b){if(b===Ho||b===ec)throw b;var A=Sn(29,b,null,c.mode);return A.lanes=S,A.return=c,A}finally{}}}var ds=Qv(!0),Jv=Qv(!1),zn=ui(null),oi=null;function na(e){var t=e.alternate;pe(Ne,Ne.current&1),pe(zn,e),oi===null&&(t===null||fs.current!==null||t.memoizedState!==null)&&(oi=e)}function $v(e){if(e.tag===22){if(pe(Ne,Ne.current),pe(zn,e),oi===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(oi=e)}}else ia()}function ia(){pe(Ne,Ne.current),pe(zn,zn.current)}function Ri(e){ke(zn),oi===e&&(oi=null),ke(Ne)}var Ne=ui(0);function Eu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Eh(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Bc(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var oh={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=En(),a=fa(i);a.payload=t,n!=null&&(a.callback=n),t=ha(e,a,i),t!==null&&(Tn(t,e,i),ro(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=En(),a=fa(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=ha(e,a,i),t!==null&&(Tn(t,e,i),ro(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=En(),i=fa(n);i.tag=2,t!=null&&(i.callback=t),t=ha(e,i,n),t!==null&&(Tn(t,e,n),ro(t,e,n))}};function Am(e,t,n,i,a,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,s):t.prototype&&t.prototype.isPureReactComponent?!vo(n,i)||!vo(a,r):!0}function Rm(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&oh.enqueueReplaceState(t,t.state,null)}function ar(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=fe({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}var Tu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function t0(e){Tu(e)}function e0(e){console.error(e)}function n0(e){Tu(e)}function bu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Cm(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function lh(e,t,n){return n=fa(n),n.tag=3,n.payload={element:null},n.callback=function(){bu(e,t)},n}function i0(e){return e=fa(e),e.tag=3,e}function a0(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;e.payload=function(){return a(r)},e.callback=function(){Cm(t,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Cm(t,n,i),typeof a!="function"&&(da===null?da=new Set([this]):da.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function aM(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Bo(t,n,a,!0),n=zn.current,n!==null){switch(n.tag){case 13:return oi===null?gh():n.alternate===null&&Me===0&&(Me=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===th?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Zc(e,i,a)),!1;case 22:return n.flags|=65536,i===th?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Zc(e,i,a)),!1}throw Error(Y(435,n.tag))}return Zc(e,i,a),gh(),!1}if(jt)return t=zn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Zf&&(e=Error(Y(422),{cause:i}),xo(On(e,n)))):(i!==Zf&&(t=Error(Y(423),{cause:i}),xo(On(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=On(i,n),a=lh(e.stateNode,i,a),Ic(e,a),Me!==4&&(Me=2)),!1;var r=Error(Y(520),{cause:i});if(r=On(r,n),fo===null?fo=[r]:fo.push(r),Me!==4&&(Me=2),t===null)return!0;i=On(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=lh(n.stateNode,i,e),Ic(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(da===null||!da.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=i0(a),a0(a,e,n,i),Ic(n,a),!1}n=n.return}while(n!==null);return!1}var r0=Error(Y(461)),Ve=!1;function qe(e,t,n,i){t.child=e===null?Jv(t,null,n,i):ds(t,e.child,n,i)}function wm(e,t,n,i,a){n=n.render;var r=t.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return nr(t),i=Fd(e,t,n,s,r,a),o=Hd(),e!==null&&!Ve?(Gd(e,t,a),Pi(e,t,a)):(jt&&o&&Ld(t),t.flags|=1,qe(e,t,i,a),t.child)}function Dm(e,t,n,i,a){if(e===null){var r=n.type;return typeof r=="function"&&!Ud(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,s0(e,t,r,i,a)):(e=ql(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Kd(e,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(s,i)&&e.ref===t.ref)return Pi(e,t,a)}return t.flags|=1,e=Di(r,i),e.ref=t.ref,e.return=t,t.child=e}function s0(e,t,n,i,a){if(e!==null){var r=e.memoizedProps;if(vo(r,i)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=i=r,Kd(e,a))e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,Pi(e,t,a)}return uh(e,t,n,i,a)}function o0(e,t,n){var i=t.pendingProps,a=i.children,r=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if(t.flags&128){if(i=r!==null?r.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;t.childLanes=r&~i}else t.childLanes=0,t.child=null;return Um(e,t,i,n)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Yl(t,r!==null?r.cachePool:null),r!==null?vm(t,r):ih(),$v(t);else return t.lanes=t.childLanes=536870912,Um(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Yl(t,r.cachePool),vm(t,r),ia(),t.memoizedState=null):(e!==null&&Yl(t,null),ih(),ia());return qe(e,t,a,n),t.child}function Um(e,t,n,i){var a=Pd();return a=a===null?null:{parent:Le._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Yl(t,null),ih(),$v(t),e!==null&&Bo(e,t,i,!0),null}function Kl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Y(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function uh(e,t,n,i,a){return nr(t),n=Fd(e,t,n,i,void 0,a),i=Hd(),e!==null&&!Ve?(Gd(e,t,a),Pi(e,t,a)):(jt&&i&&Ld(t),t.flags|=1,qe(e,t,n,a),t.child)}function Lm(e,t,n,i,a,r){return nr(t),t.updateQueue=null,n=Sv(t,i,n,a),xv(e),i=Hd(),e!==null&&!Ve?(Gd(e,t,r),Pi(e,t,r)):(jt&&i&&Ld(t),t.flags|=1,qe(e,t,n,r),t.child)}function Nm(e,t,n,i,a){if(nr(t),t.stateNode===null){var r=kr,s=n.contextType;typeof s=="object"&&s!==null&&(r=Je(s)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=oh,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},Id(t),s=n.contextType,r.context=typeof s=="object"&&s!==null?Je(s):kr,r.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Bc(t,n,s,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&oh.enqueueReplaceState(r,r.state,null),oo(t,i,r,a),so(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var o=t.memoizedProps,l=ar(n,o);r.props=l;var u=r.context,f=n.contextType;s=kr,typeof f=="object"&&f!==null&&(s=Je(f));var d=n.getDerivedStateFromProps;f=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||u!==s)&&Rm(t,r,i,s),ta=!1;var h=t.memoizedState;r.state=h,oo(t,i,r,a),so(),u=t.memoizedState,o||h!==u||ta?(typeof d=="function"&&(Bc(t,n,d,i),u=t.memoizedState),(l=ta||Am(t,n,l,i,h,u,s))?(f||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=u),r.props=i,r.state=u,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,eh(e,t),s=t.memoizedProps,f=ar(n,s),r.props=f,d=t.pendingProps,h=r.context,u=n.contextType,l=kr,typeof u=="object"&&u!==null&&(l=Je(u)),o=n.getDerivedStateFromProps,(u=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==d||h!==l)&&Rm(t,r,i,l),ta=!1,h=t.memoizedState,r.state=h,oo(t,i,r,a),so();var p=t.memoizedState;s!==d||h!==p||ta||e!==null&&e.dependencies!==null&&vu(e.dependencies)?(typeof o=="function"&&(Bc(t,n,o,i),p=t.memoizedState),(f=ta||Am(t,n,f,i,h,p,l)||e!==null&&e.dependencies!==null&&vu(e.dependencies))?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),r.props=i,r.state=p,r.context=l,i=f):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,Kl(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=ds(t,e.child,null,a),t.child=ds(t,null,n,a)):qe(e,t,n,a),t.memoizedState=r.state,e=t.child):e=Pi(e,t,a),e}function Om(e,t,n,i){return zo(),t.flags|=256,qe(e,t,n,i),t.child}var Fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hc(e){return{baseLanes:e,cachePool:pv()}}function Gc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Pn),e}function l0(e,t,n){var i=t.pendingProps,a=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(Ne.current&2)!==0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(jt){if(a?na(t):ia(),jt){var o=ye,l;if(l=o){t:{for(l=o,o=ti;l.nodeType!==8;){if(!o){o=null;break t}if(l=Yn(l.nextSibling),l===null){o=null;break t}}o=l}o!==null?(t.memoizedState={dehydrated:o,treeContext:Za!==null?{id:Ti,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},l=Sn(18,null,null,0),l.stateNode=o,l.return=t,t.child=l,tn=t,ye=null,l=!0):l=!1}l||er(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return Eh(o)?t.lanes=32:t.lanes=536870912,null;Ri(t)}return o=i.children,i=i.fallback,a?(ia(),a=t.mode,o=Au({mode:"hidden",children:o},a),i=ja(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,a=t.child,a.memoizedState=Hc(n),a.childLanes=Gc(e,s,n),t.memoizedState=Fc,i):(na(t),ch(t,o))}if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(r)t.flags&256?(na(t),t.flags&=-257,t=Vc(e,t,n)):t.memoizedState!==null?(ia(),t.child=e.child,t.flags|=128,t=null):(ia(),a=i.fallback,o=t.mode,i=Au({mode:"visible",children:i.children},o),a=ja(a,o,n,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,ds(t,e.child,null,n),i=t.child,i.memoizedState=Hc(n),i.childLanes=Gc(e,s,n),t.memoizedState=Fc,t=a);else if(na(t),Eh(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var u=s.dgst;s=u,i=Error(Y(419)),i.stack="",i.digest=s,xo({value:i,source:null,stack:null}),t=Vc(e,t,n)}else if(Ve||Bo(e,t,n,!1),s=(n&e.childLanes)!==0,Ve||s){if(s=ue,s!==null&&(i=n&-n,i=i&42?1:Sd(i),i=i&(s.suspendedLanes|n)?0:i,i!==0&&i!==l.retryLane))throw l.retryLane=i,As(e,i),Tn(s,e,i),r0;o.data==="$?"||gh(),t=Vc(e,t,n)}else o.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,ye=Yn(o.nextSibling),tn=t,jt=!0,Ka=null,ti=!1,e!==null&&(Un[Ln++]=Ti,Un[Ln++]=bi,Un[Ln++]=Za,Ti=e.id,bi=e.overflow,Za=t),t=ch(t,i.children),t.flags|=4096);return t}return a?(ia(),a=i.fallback,o=t.mode,l=e.child,u=l.sibling,i=Di(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,u!==null?a=Di(u,a):(a=ja(a,o,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=e.child.memoizedState,o===null?o=Hc(n):(l=o.cachePool,l!==null?(u=Le._currentValue,l=l.parent!==u?{parent:u,pool:u}:l):l=pv(),o={baseLanes:o.baseLanes|n,cachePool:l}),a.memoizedState=o,a.childLanes=Gc(e,s,n),t.memoizedState=Fc,i):(na(t),n=e.child,e=n.sibling,n=Di(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function ch(e,t){return t=Au({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Au(e,t){return e=Sn(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Vc(e,t,n){return ds(t,e.child,null,n),e=ch(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pm(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Qf(e.return,t,n)}function kc(e,t,n,i,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a)}function u0(e,t,n){var i=t.pendingProps,a=i.revealOrder,r=i.tail;if(qe(e,t,i.children,n),i=Ne.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pm(e,n,t);else if(e.tag===19)Pm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(pe(Ne,i),a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Eu(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),kc(t,!1,a,n,r);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Eu(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}kc(t,!0,n,null,r);break;case"together":kc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pi(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ma|=t.lanes,!(n&t.childLanes))if(e!==null){if(Bo(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Y(153));if(t.child!==null){for(e=t.child,n=Di(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Di(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Kd(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&vu(e)))}function rM(e,t,n){switch(t.tag){case 3:cu(t,t.stateNode.containerInfo),ea(t,Le,e.memoizedState.cache),zo();break;case 27:case 5:Ff(t);break;case 4:cu(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(na(t),t.flags|=128,null):n&t.child.childLanes?l0(e,t,n):(na(t),e=Pi(e,t,n),e!==null?e.sibling:null);na(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Bo(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return u0(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),pe(Ne,Ne.current),i)break;return null;case 22:case 23:return t.lanes=0,o0(e,t,n);case 24:ea(t,Le,e.memoizedState.cache)}return Pi(e,t,n)}function c0(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ve=!0;else{if(!Kd(e,n)&&!(t.flags&128))return Ve=!1,rM(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,jt&&t.flags&1048576&&hv(t,_u,t.index);switch(t.lanes=0,t.tag){case 16:t:{e=t.pendingProps;var i=t.elementType,a=i._init;if(i=a(i._payload),t.type=i,typeof i=="function")Ud(i)?(e=ar(i,e),t.tag=1,t=Nm(null,t,i,e,n)):(t.tag=0,t=uh(null,t,i,e,n));else{if(i!=null){if(a=i.$$typeof,a===_d){t.tag=11,t=wm(null,t,i,e,n);break t}else if(a===vd){t.tag=14,t=Dm(null,t,i,e,n);break t}}throw t=zf(i)||i,Error(Y(306,t,""))}}return t;case 0:return uh(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=ar(i,t.pendingProps),Nm(e,t,i,a,n);case 3:t:{if(cu(t,t.stateNode.containerInfo),e===null)throw Error(Y(387));i=t.pendingProps;var r=t.memoizedState;a=r.element,eh(e,t),oo(t,i,null,n);var s=t.memoizedState;if(i=s.cache,ea(t,Le,i),i!==r.cache&&Jf(t,[Le],n,!0),so(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Om(e,t,i,n);break t}else if(i!==a){a=On(Error(Y(424)),t),xo(a),t=Om(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ye=Yn(e.firstChild),tn=t,jt=!0,Ka=null,ti=!0,n=Jv(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(zo(),i===a){t=Pi(e,t,n);break t}qe(e,t,i,n)}t=t.child}return t;case 26:return Kl(e,t),e===null?(n=Jm(t.type,null,t.pendingProps,null))?t.memoizedState=n:jt||(n=t.type,e=t.pendingProps,i=Nu(ca.current).createElement(n),i[Qe]=t,i[fn]=e,je(i,n,e),He(i),t.stateNode=i):t.memoizedState=Jm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ff(t),e===null&&jt&&(i=t.stateNode=K0(t.type,t.pendingProps,ca.current),tn=t,ti=!0,a=ye,Aa(t.type)?(Th=a,ye=Yn(i.firstChild)):ye=a),qe(e,t,t.pendingProps.children,n),Kl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&jt&&((a=i=ye)&&(i=NM(i,t.type,t.pendingProps,ti),i!==null?(t.stateNode=i,tn=t,ye=Yn(i.firstChild),ti=!1,a=!0):a=!1),a||er(t)),Ff(t),a=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,i=r.children,yh(a,r)?i=null:s!==null&&yh(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Fd(e,t,Qy,null,null,n),bo._currentValue=a),Kl(e,t),qe(e,t,i,n),t.child;case 6:return e===null&&jt&&((e=n=ye)&&(n=OM(n,t.pendingProps,ti),n!==null?(t.stateNode=n,tn=t,ye=null,e=!0):e=!1),e||er(t)),null;case 13:return l0(e,t,n);case 4:return cu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ds(t,null,i,n):qe(e,t,i,n),t.child;case 11:return wm(e,t,t.type,t.pendingProps,n);case 7:return qe(e,t,t.pendingProps,n),t.child;case 8:return qe(e,t,t.pendingProps.children,n),t.child;case 12:return qe(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ea(t,t.type,i.value),qe(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,nr(t),a=Je(a),i=i(a),t.flags|=1,qe(e,t,i,n),t.child;case 14:return Dm(e,t,t.type,t.pendingProps,n);case 15:return s0(e,t,t.type,t.pendingProps,n);case 19:return u0(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=Au(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Di(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return o0(e,t,n);case 24:return nr(t),i=Je(Le),e===null?(a=Pd(),a===null&&(a=ue,r=Od(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:i,cache:a},Id(t),ea(t,Le,a)):(e.lanes&n&&(eh(e,t),oo(t,null,null,n),so()),a=e.memoizedState,r=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ea(t,Le,i)):(i=r.cache,ea(t,Le,i),i!==a.cache&&Jf(t,[Le],n,!0))),qe(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(Y(156,t.tag))}function pi(e){e.flags|=4}function Im(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!$0(t)){if(t=zn.current,t!==null&&((Wt&4194048)===Wt?oi!==null:(Wt&62914560)!==Wt&&!(Wt&536870912)||t!==oi))throw ao=th,mv;e.flags|=8192}}function dl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?I_():536870912,e.lanes|=t,ps|=t)}function Fs(e,t){if(!jt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function sM(e,t,n){var i=t.pendingProps;switch(Nd(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return ge(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ui(Le),os(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(zs(t)?pi(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,hm())),ge(t),null;case 26:return n=t.memoizedState,e===null?(pi(t),n!==null?(ge(t),Im(t,n)):(ge(t),t.flags&=-16777217)):n?n!==e.memoizedState?(pi(t),ge(t),Im(t,n)):(ge(t),t.flags&=-16777217):(e.memoizedProps!==i&&pi(t),ge(t),t.flags&=-16777217),null;case 27:fu(t),n=ca.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&pi(t);else{if(!i){if(t.stateNode===null)throw Error(Y(166));return ge(t),null}e=ri.current,zs(t)?cm(t):(e=K0(a,i,n),t.stateNode=e,pi(t))}return ge(t),null;case 5:if(fu(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&pi(t);else{if(!i){if(t.stateNode===null)throw Error(Y(166));return ge(t),null}if(e=ri.current,zs(t))cm(t);else{switch(a=Nu(ca.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?a.createElement(n,{is:i.is}):a.createElement(n)}}e[Qe]=t,e[fn]=i;t:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;t:switch(je(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&pi(t)}}return ge(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&pi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Y(166));if(e=ca.current,zs(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=tn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[Qe]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Y0(e.nodeValue,n)),e||er(t)}else e=Nu(e).createTextNode(i),e[Qe]=t,t.stateNode=e}return ge(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=zs(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(Y(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(Y(317));a[Qe]=t}else zo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),a=!1}else a=hm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Ri(t),t):(Ri(t),null)}if(Ri(t),t.flags&128)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool);var r=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),dl(t,t.updateQueue),ge(t),null;case 4:return os(),e===null&&ap(t.stateNode.containerInfo),ge(t),null;case 10:return Ui(t.type),ge(t),null;case 19:if(ke(Ne),a=t.memoizedState,a===null)return ge(t),null;if(i=(t.flags&128)!==0,r=a.rendering,r===null)if(i)Fs(a,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=Eu(e),r!==null){for(t.flags|=128,Fs(a,!1),e=r.updateQueue,t.updateQueue=e,dl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)fv(n,e),n=n.sibling;return pe(Ne,Ne.current&1|2),t.child}e=e.sibling}a.tail!==null&&si()>Cu&&(t.flags|=128,i=!0,Fs(a,!1),t.lanes=4194304)}else{if(!i)if(e=Eu(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,dl(t,e),Fs(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!jt)return ge(t),null}else 2*si()-a.renderingStartTime>Cu&&n!==536870912&&(t.flags|=128,i=!0,Fs(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=si(),t.sibling=null,e=Ne.current,pe(Ne,i?e&1|2:e&1),t):(ge(t),null);case 22:case 23:return Ri(t),zd(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),n=t.updateQueue,n!==null&&dl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&ke(Qa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ui(Le),ge(t),null;case 25:return null;case 30:return null}throw Error(Y(156,t.tag))}function oM(e,t){switch(Nd(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ui(Le),os(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return fu(t),null;case 13:if(Ri(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Y(340));zo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(Ne),null;case 4:return os(),null;case 10:return Ui(t.type),null;case 22:case 23:return Ri(t),zd(),e!==null&&ke(Qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ui(Le),null;case 25:return null;default:return null}}function f0(e,t){switch(Nd(t),t.tag){case 3:Ui(Le),os();break;case 26:case 27:case 5:fu(t);break;case 4:os();break;case 13:Ri(t);break;case 19:ke(Ne);break;case 10:Ui(t.type);break;case 22:case 23:Ri(t),zd(),e!==null&&ke(Qa);break;case 24:Ui(Le)}}function ko(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){le(t,t.return,o)}}function ya(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&e)===e){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=t;var l=n,u=o;try{u()}catch(f){le(a,l,f)}}}i=i.next}while(i!==r)}}catch(f){le(t,t.return,f)}}function h0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{vv(t,n)}catch(i){le(e,e.return,i)}}}function d0(e,t,n){n.props=ar(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){le(e,t,i)}}function uo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){le(e,t,a)}}function ii(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){le(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){le(e,t,a)}else n.current=null}function p0(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){le(e,e.return,a)}}function Xc(e,t,n){try{var i=e.stateNode;CM(i,e.type,n,t),i[fn]=t}catch(a){le(e,e.return,a)}}function m0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Aa(e.type)||e.tag===4}function Wc(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||m0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fh(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=lc));else if(i!==4&&(i===27&&Aa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(fh(e,t,n),e=e.sibling;e!==null;)fh(e,t,n),e=e.sibling}function Ru(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Aa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ru(e,t,n),e=e.sibling;e!==null;)Ru(e,t,n),e=e.sibling}function g0(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);je(t,i,n),t[Qe]=e,t[fn]=n}catch(r){le(e,e.return,r)}}var Mi=!1,Te=!1,qc=!1,zm=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function lM(e,t){if(e=e.containerInfo,xh=zu,e=iv(e),Cd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var s=0,o=-1,l=-1,u=0,f=0,d=e,h=null;e:for(;;){for(var p;d!==n||a!==0&&d.nodeType!==3||(o=s+a),d!==r||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===e)break e;if(h===n&&++u===a&&(o=s),h===r&&++f===i&&(l=s),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sh={focusedElem:e,selectionRange:n},zu=!1,Fe=t;Fe!==null;)if(t=Fe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Fe=e;else for(;Fe!==null;){switch(t=Fe,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&r!==null){e=void 0,n=t,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var v=ar(n.type,a,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(v,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(x){le(n,n.return,x)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Mh(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Mh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(Y(163))}if(e=t.sibling,e!==null){e.return=t.return,Fe=e;break}Fe=t.return}}function _0(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Xi(e,n),i&4&&ko(5,n);break;case 1:if(Xi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(s){le(n,n.return,s)}else{var a=ar(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){le(n,n.return,s)}}i&64&&h0(n),i&512&&uo(n,n.return);break;case 3:if(Xi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{vv(e,t)}catch(s){le(n,n.return,s)}}break;case 27:t===null&&i&4&&g0(n);case 26:case 5:Xi(e,n),t===null&&i&4&&p0(n),i&512&&uo(n,n.return);break;case 12:Xi(e,n);break;case 13:Xi(e,n),i&4&&S0(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_M.bind(null,n),PM(e,n))));break;case 22:if(i=n.memoizedState!==null||Mi,!i){t=t!==null&&t.memoizedState!==null||Te,a=Mi;var r=Te;Mi=i,(Te=t)&&!r?Ji(e,n,(n.subtreeFlags&8772)!==0):Xi(e,n),Mi=a,Te=r}break;case 30:break;default:Xi(e,n)}}function v0(e){var t=e.alternate;t!==null&&(e.alternate=null,v0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Md(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var he=null,sn=!1;function mi(e,t,n){for(n=n.child;n!==null;)x0(e,t,n),n=n.sibling}function x0(e,t,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(Lo,n)}catch{}switch(n.tag){case 26:Te||ii(n,t),mi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Te||ii(n,t);var i=he,a=sn;Aa(n.type)&&(he=n.stateNode,sn=!1),mi(e,t,n),po(n.stateNode),he=i,sn=a;break;case 5:Te||ii(n,t);case 6:if(i=he,a=sn,he=null,mi(e,t,n),he=i,sn=a,he!==null)if(sn)try{(he.nodeType===9?he.body:he.nodeName==="HTML"?he.ownerDocument.body:he).removeChild(n.stateNode)}catch(r){le(n,t,r)}else try{he.removeChild(n.stateNode)}catch(r){le(n,t,r)}break;case 18:he!==null&&(sn?(e=he,Zm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Co(e)):Zm(he,n.stateNode));break;case 4:i=he,a=sn,he=n.stateNode.containerInfo,sn=!0,mi(e,t,n),he=i,sn=a;break;case 0:case 11:case 14:case 15:Te||ya(2,n,t),Te||ya(4,n,t),mi(e,t,n);break;case 1:Te||(ii(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&d0(n,t,i)),mi(e,t,n);break;case 21:mi(e,t,n);break;case 22:Te=(i=Te)||n.memoizedState!==null,mi(e,t,n),Te=i;break;default:mi(e,t,n)}}function S0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Co(e)}catch(n){le(t,t.return,n)}}function uM(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new zm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new zm),t;default:throw Error(Y(435,e.tag))}}function Yc(e,t){var n=uM(e);t.forEach(function(i){var a=vM.bind(null,e,i);n.has(i)||(n.add(i),i.then(a,a))})}function mn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=e,s=t,o=s;t:for(;o!==null;){switch(o.tag){case 27:if(Aa(o.type)){he=o.stateNode,sn=!1;break t}break;case 5:he=o.stateNode,sn=!1;break t;case 3:case 4:he=o.stateNode.containerInfo,sn=!0;break t}o=o.return}if(he===null)throw Error(Y(160));x0(r,s,a),he=null,sn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)y0(t,e),t=t.sibling}var kn=null;function y0(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mn(t,e),gn(e),i&4&&(ya(3,e,e.return),ko(3,e),ya(5,e,e.return));break;case 1:mn(t,e),gn(e),i&512&&(Te||n===null||ii(n,n.return)),i&64&&Mi&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=kn;if(mn(t,e),gn(e),i&512&&(Te||n===null||ii(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[Po]||r[Qe]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),je(r,i,n),r[Qe]=e,He(r),i=r;break t;case"link":var s=tg("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(r=s[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break e}}r=a.createElement(i),je(r,i,n),a.head.appendChild(r);break;case"meta":if(s=tg("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(r=s[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break e}}r=a.createElement(i),je(r,i,n),a.head.appendChild(r);break;default:throw Error(Y(468,i))}r[Qe]=e,He(r),i=r}e.stateNode=i}else eg(a,e.type,e.stateNode);else e.stateNode=$m(a,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?eg(a,e.type,e.stateNode):$m(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps)}break;case 27:mn(t,e),gn(e),i&512&&(Te||n===null||ii(n,n.return)),n!==null&&i&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(mn(t,e),gn(e),i&512&&(Te||n===null||ii(n,n.return)),e.flags&32){a=e.stateNode;try{us(a,"")}catch(p){le(e,e.return,p)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n!==null?n.memoizedProps:a)),i&1024&&(qc=!0);break;case 6:if(mn(t,e),gn(e),i&4){if(e.stateNode===null)throw Error(Y(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(p){le(e,e.return,p)}}break;case 3:if($l=null,a=kn,kn=Ou(t.containerInfo),mn(t,e),kn=a,gn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Co(t.containerInfo)}catch(p){le(e,e.return,p)}qc&&(qc=!1,M0(e));break;case 4:i=kn,kn=Ou(e.stateNode.containerInfo),mn(t,e),gn(e),kn=i;break;case 12:mn(t,e),gn(e);break;case 13:mn(t,e),gn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ep=si()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Yc(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Mi,f=Te;if(Mi=u||a,Te=f||l,mn(t,e),Te=f,Mi=u,gn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Mi||Te||Ha(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(r=l.stateNode,a)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,h=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(p){le(l,l.return,p)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(p){le(l,l.return,p)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Yc(e,n))));break;case 19:mn(t,e),gn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Yc(e,i)));break;case 30:break;case 21:break;default:mn(t,e),gn(e)}}function gn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(m0(i)){n=i;break}i=i.return}if(n==null)throw Error(Y(160));switch(n.tag){case 27:var a=n.stateNode,r=Wc(e);Ru(e,r,a);break;case 5:var s=n.stateNode;n.flags&32&&(us(s,""),n.flags&=-33);var o=Wc(e);Ru(e,o,s);break;case 3:case 4:var l=n.stateNode.containerInfo,u=Wc(e);fh(e,u,l);break;default:throw Error(Y(161))}}catch(f){le(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function M0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;M0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Xi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)_0(e,t.alternate,t),t=t.sibling}function Ha(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ya(4,t,t.return),Ha(t);break;case 1:ii(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&d0(t,t.return,n),Ha(t);break;case 27:po(t.stateNode);case 26:case 5:ii(t,t.return),Ha(t);break;case 22:t.memoizedState===null&&Ha(t);break;case 30:Ha(t);break;default:Ha(t)}e=e.sibling}}function Ji(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:Ji(a,r,n),ko(4,r);break;case 1:if(Ji(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(u){le(i,i.return,u)}if(i=r,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)_v(l[a],o)}catch(u){le(i,i.return,u)}}n&&s&64&&h0(r),uo(r,r.return);break;case 27:g0(r);case 26:case 5:Ji(a,r,n),n&&i===null&&s&4&&p0(r),uo(r,r.return);break;case 12:Ji(a,r,n);break;case 13:Ji(a,r,n),n&&s&4&&S0(a,r);break;case 22:r.memoizedState===null&&Ji(a,r,n),uo(r,r.return);break;case 30:break;default:Ji(a,r,n)}t=t.sibling}}function Qd(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Fo(n))}function Jd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fo(e))}function Qn(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)E0(e,t,n,i),t=t.sibling}function E0(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Qn(e,t,n,i),a&2048&&ko(9,t);break;case 1:Qn(e,t,n,i);break;case 3:Qn(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fo(e)));break;case 12:if(a&2048){Qn(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,o=r.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){le(t,t.return,l)}}else Qn(e,t,n,i);break;case 13:Qn(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,s=t.alternate,t.memoizedState!==null?r._visibility&2?Qn(e,t,n,i):co(e,t):r._visibility&2?Qn(e,t,n,i):(r._visibility|=2,Nr(e,t,n,i,(t.subtreeFlags&10256)!==0)),a&2048&&Qd(s,t);break;case 24:Qn(e,t,n,i),a&2048&&Jd(t.alternate,t);break;default:Qn(e,t,n,i)}}function Nr(e,t,n,i,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,s=t,o=n,l=i,u=s.flags;switch(s.tag){case 0:case 11:case 15:Nr(r,s,o,l,a),ko(8,s);break;case 23:break;case 22:var f=s.stateNode;s.memoizedState!==null?f._visibility&2?Nr(r,s,o,l,a):co(r,s):(f._visibility|=2,Nr(r,s,o,l,a)),a&&u&2048&&Qd(s.alternate,s);break;case 24:Nr(r,s,o,l,a),a&&u&2048&&Jd(s.alternate,s);break;default:Nr(r,s,o,l,a)}t=t.sibling}}function co(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:co(n,i),a&2048&&Qd(i.alternate,i);break;case 24:co(n,i),a&2048&&Jd(i.alternate,i);break;default:co(n,i)}t=t.sibling}}var Qs=8192;function hr(e){if(e.subtreeFlags&Qs)for(e=e.child;e!==null;)T0(e),e=e.sibling}function T0(e){switch(e.tag){case 26:hr(e),e.flags&Qs&&e.memoizedState!==null&&jM(kn,e.memoizedState,e.memoizedProps);break;case 5:hr(e);break;case 3:case 4:var t=kn;kn=Ou(e.stateNode.containerInfo),hr(e),kn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Qs,Qs=16777216,hr(e),Qs=t):hr(e));break;default:hr(e)}}function b0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Hs(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Fe=i,R0(i,e)}b0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)A0(e),e=e.sibling}function A0(e){switch(e.tag){case 0:case 11:case 15:Hs(e),e.flags&2048&&ya(9,e,e.return);break;case 3:Hs(e);break;case 12:Hs(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ql(e)):Hs(e);break;default:Hs(e)}}function Ql(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Fe=i,R0(i,e)}b0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ya(8,t,t.return),Ql(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ql(t));break;default:Ql(t)}e=e.sibling}}function R0(e,t){for(;Fe!==null;){var n=Fe;switch(n.tag){case 0:case 11:case 15:ya(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Fo(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Fe=i;else t:for(n=e;Fe!==null;){i=Fe;var a=i.sibling,r=i.return;if(v0(i),i===n){Fe=null;break t}if(a!==null){a.return=r,Fe=a;break t}Fe=r}}}var cM={getCacheForType:function(e){var t=Je(Le),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},fM=typeof WeakMap=="function"?WeakMap:Map,ae=0,ue=null,Vt=null,Wt=0,ee=0,xn=null,la=!1,Rs=!1,$d=!1,Ii=0,Me=0,Ma=0,Ja=0,tp=0,Pn=0,ps=0,fo=null,on=null,hh=!1,ep=0,Cu=1/0,wu=null,da=null,Ye=0,pa=null,ms=null,is=0,dh=0,ph=null,C0=null,ho=0,mh=null;function En(){if(ae&2&&Wt!==0)return Wt&-Wt;if(Et.T!==null){var e=cs;return e!==0?e:ip()}return F_()}function w0(){Pn===0&&(Pn=!(Wt&536870912)||jt?P_():536870912);var e=zn.current;return e!==null&&(e.flags|=32),Pn}function Tn(e,t,n){(e===ue&&(ee===2||ee===9)||e.cancelPendingCommit!==null)&&(gs(e,0),ua(e,Wt,Pn,!1)),Oo(e,n),(!(ae&2)||e!==ue)&&(e===ue&&(!(ae&2)&&(Ja|=n),Me===4&&ua(e,Wt,Pn,!1)),ci(e))}function D0(e,t,n){if(ae&6)throw Error(Y(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||No(e,t),a=i?pM(e,t):jc(e,t,!0),r=i;do{if(a===0){Rs&&!i&&ua(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!hM(n)){a=jc(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;t:{var o=e;a=fo;var l=o.current.memoizedState.isDehydrated;if(l&&(gs(o,s).flags|=256),s=jc(o,s,!1),s!==2){if($d&&!l){o.errorRecoveryDisabledLanes|=r,Ja|=r,a=4;break t}r=on,on=a,r!==null&&(on===null?on=r:on.push.apply(on,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){gs(e,0),ua(e,t,0,!0);break}t:{switch(i=e,r=a,r){case 0:case 1:throw Error(Y(345));case 4:if((t&4194048)!==t)break;case 6:ua(i,t,Pn,!la);break t;case 2:on=null;break;case 3:case 5:break;default:throw Error(Y(329))}if((t&62914560)===t&&(a=ep+300-si(),10<a)){if(ua(i,t,Pn,!la),Zu(i,0,!0)!==0)break t;i.timeoutHandle=Z0(Bm.bind(null,i,n,on,wu,hh,t,Pn,Ja,ps,la,r,2,-0,0),a);break t}Bm(i,n,on,wu,hh,t,Pn,Ja,ps,la,r,0,-0,0)}}break}while(!0);ci(e)}function Bm(e,t,n,i,a,r,s,o,l,u,f,d,h,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,(d&8192||(d&16785408)===16785408)&&(To={stylesheets:null,count:0,unsuspend:YM},T0(t),d=ZM(),d!==null)){e.cancelPendingCommit=d(Hm.bind(null,e,t,r,n,i,a,s,o,l,f,1,h,p)),ua(e,r,s,!u);return}Hm(e,t,r,n,i,a,s,o,l)}function hM(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!An(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ua(e,t,n,i){t&=~tp,t&=~Ja,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var r=31-Mn(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&z_(e,n,t)}function rc(){return ae&6?!0:(Xo(0),!1)}function np(){if(Vt!==null){if(ee===0)var e=Vt.return;else e=Vt,Ai=cr=null,Vd(e),ns=null,yo=0,e=Vt;for(;e!==null;)f0(e.alternate,e),e=e.return;Vt=null}}function gs(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,DM(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),np(),ue=e,Vt=n=Di(e.current,null),Wt=t,ee=0,xn=null,la=!1,Rs=No(e,t),$d=!1,ps=Pn=tp=Ja=Ma=Me=0,on=fo=null,hh=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Mn(i),r=1<<a;t|=e[a],i&=~r}return Ii=t,$u(),n}function U0(e,t){Bt=null,Et.H=Mu,t===Ho||t===ec?(t=gm(),ee=3):t===mv?(t=gm(),ee=4):ee=t===r0?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,xn=t,Vt===null&&(Me=1,bu(e,On(t,e.current)))}function L0(){var e=Et.H;return Et.H=Mu,e===null?Mu:e}function N0(){var e=Et.A;return Et.A=cM,e}function gh(){Me=4,la||(Wt&4194048)!==Wt&&zn.current!==null||(Rs=!0),!(Ma&134217727)&&!(Ja&134217727)||ue===null||ua(ue,Wt,Pn,!1)}function jc(e,t,n){var i=ae;ae|=2;var a=L0(),r=N0();(ue!==e||Wt!==t)&&(wu=null,gs(e,t)),t=!1;var s=Me;t:do try{if(ee!==0&&Vt!==null){var o=Vt,l=xn;switch(ee){case 8:np(),s=6;break t;case 3:case 2:case 9:case 6:zn.current===null&&(t=!0);var u=ee;if(ee=0,xn=null,qr(e,o,l,u),n&&Rs){s=0;break t}break;default:u=ee,ee=0,xn=null,qr(e,o,l,u)}}dM(),s=Me;break}catch(f){U0(e,f)}while(!0);return t&&e.shellSuspendCounter++,Ai=cr=null,ae=i,Et.H=a,Et.A=r,Vt===null&&(ue=null,Wt=0,$u()),s}function dM(){for(;Vt!==null;)O0(Vt)}function pM(e,t){var n=ae;ae|=2;var i=L0(),a=N0();ue!==e||Wt!==t?(wu=null,Cu=si()+500,gs(e,t)):Rs=No(e,t);t:do try{if(ee!==0&&Vt!==null){t=Vt;var r=xn;e:switch(ee){case 1:ee=0,xn=null,qr(e,t,r,1);break;case 2:case 9:if(mm(r)){ee=0,xn=null,Fm(t);break}t=function(){ee!==2&&ee!==9||ue!==e||(ee=7),ci(e)},r.then(t,t);break t;case 3:ee=7;break t;case 4:ee=5;break t;case 7:mm(r)?(ee=0,xn=null,Fm(t)):(ee=0,xn=null,qr(e,t,r,7));break;case 5:var s=null;switch(Vt.tag){case 26:s=Vt.memoizedState;case 5:case 27:var o=Vt;if(!s||$0(s)){ee=0,xn=null;var l=o.sibling;if(l!==null)Vt=l;else{var u=o.return;u!==null?(Vt=u,sc(u)):Vt=null}break e}}ee=0,xn=null,qr(e,t,r,5);break;case 6:ee=0,xn=null,qr(e,t,r,6);break;case 8:np(),Me=6;break t;default:throw Error(Y(462))}}mM();break}catch(f){U0(e,f)}while(!0);return Ai=cr=null,Et.H=i,Et.A=a,ae=n,Vt!==null?0:(ue=null,Wt=0,$u(),Me)}function mM(){for(;Vt!==null&&!zS();)O0(Vt)}function O0(e){var t=c0(e.alternate,e,Ii);e.memoizedProps=e.pendingProps,t===null?sc(e):Vt=t}function Fm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Lm(n,t,t.pendingProps,t.type,void 0,Wt);break;case 11:t=Lm(n,t,t.pendingProps,t.type.render,t.ref,Wt);break;case 5:Vd(t);default:f0(n,t),t=Vt=fv(t,Ii),t=c0(n,t,Ii)}e.memoizedProps=e.pendingProps,t===null?sc(e):Vt=t}function qr(e,t,n,i){Ai=cr=null,Vd(t),ns=null,yo=0;var a=t.return;try{if(aM(e,a,t,n,Wt)){Me=1,bu(e,On(n,e.current)),Vt=null;return}}catch(r){if(a!==null)throw Vt=a,r;Me=1,bu(e,On(n,e.current)),Vt=null;return}t.flags&32768?(jt||i===1?e=!0:Rs||Wt&536870912?e=!1:(la=e=!0,(i===2||i===9||i===3||i===6)&&(i=zn.current,i!==null&&i.tag===13&&(i.flags|=16384))),P0(t,e)):sc(t)}function sc(e){var t=e;do{if(t.flags&32768){P0(t,la);return}e=t.return;var n=sM(t.alternate,t,Ii);if(n!==null){Vt=n;return}if(t=t.sibling,t!==null){Vt=t;return}Vt=t=e}while(t!==null);Me===0&&(Me=5)}function P0(e,t){do{var n=oM(e.alternate,e);if(n!==null){n.flags&=32767,Vt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Vt=e;return}Vt=e=n}while(e!==null);Me=6,Vt=null}function Hm(e,t,n,i,a,r,s,o,l){e.cancelPendingCommit=null;do oc();while(Ye!==0);if(ae&6)throw Error(Y(327));if(t!==null){if(t===e.current)throw Error(Y(177));if(r=t.lanes|t.childLanes,r|=wd,YS(e,n,r,s,o,l),e===ue&&(Vt=ue=null,Wt=0),ms=t,pa=e,is=n,dh=r,ph=a,C0=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,xM(hu,function(){return H0(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Et.T,Et.T=null,a=Zt.p,Zt.p=2,s=ae,ae|=4;try{lM(e,t,n)}finally{ae=s,Zt.p=a,Et.T=i}}Ye=1,I0(),z0(),B0()}}function I0(){if(Ye===1){Ye=0;var e=pa,t=ms,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Et.T,Et.T=null;var i=Zt.p;Zt.p=2;var a=ae;ae|=4;try{y0(t,e);var r=Sh,s=iv(e.containerInfo),o=r.focusedElem,l=r.selectionRange;if(s!==o&&o&&o.ownerDocument&&nv(o.ownerDocument.documentElement,o)){if(l!==null&&Cd(o)){var u=l.start,f=l.end;if(f===void 0&&(f=u),"selectionStart"in o)o.selectionStart=u,o.selectionEnd=Math.min(f,o.value.length);else{var d=o.ownerDocument||document,h=d&&d.defaultView||window;if(h.getSelection){var p=h.getSelection(),v=o.textContent.length,x=Math.min(l.start,v),m=l.end===void 0?x:Math.min(l.end,v);!p.extend&&x>m&&(s=m,m=x,x=s);var c=om(o,x),_=om(o,m);if(c&&_&&(p.rangeCount!==1||p.anchorNode!==c.node||p.anchorOffset!==c.offset||p.focusNode!==_.node||p.focusOffset!==_.offset)){var g=d.createRange();g.setStart(c.node,c.offset),p.removeAllRanges(),x>m?(p.addRange(g),p.extend(_.node,_.offset)):(g.setEnd(_.node,_.offset),p.addRange(g))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var S=d[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}zu=!!xh,Sh=xh=null}finally{ae=a,Zt.p=i,Et.T=n}}e.current=t,Ye=2}}function z0(){if(Ye===2){Ye=0;var e=pa,t=ms,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Et.T,Et.T=null;var i=Zt.p;Zt.p=2;var a=ae;ae|=4;try{_0(e,t.alternate,t)}finally{ae=a,Zt.p=i,Et.T=n}}Ye=3}}function B0(){if(Ye===4||Ye===3){Ye=0,BS();var e=pa,t=ms,n=is,i=C0;t.subtreeFlags&10256||t.flags&10256?Ye=5:(Ye=0,ms=pa=null,F0(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(da=null),yd(n),t=t.stateNode,yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(Lo,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Et.T,a=Zt.p,Zt.p=2,Et.T=null;try{for(var r=e.onRecoverableError,s=0;s<i.length;s++){var o=i[s];r(o.value,{componentStack:o.stack})}}finally{Et.T=t,Zt.p=a}}is&3&&oc(),ci(e),a=e.pendingLanes,n&4194090&&a&42?e===mh?ho++:(ho=0,mh=e):ho=0,Xo(0)}}function F0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Fo(t)))}function oc(e){return I0(),z0(),B0(),H0()}function H0(){if(Ye!==5)return!1;var e=pa,t=dh;dh=0;var n=yd(is),i=Et.T,a=Zt.p;try{Zt.p=32>n?32:n,Et.T=null,n=ph,ph=null;var r=pa,s=is;if(Ye=0,ms=pa=null,is=0,ae&6)throw Error(Y(331));var o=ae;if(ae|=4,A0(r.current),E0(r,r.current,s,n),ae=o,Xo(0,!1),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(Lo,r)}catch{}return!0}finally{Zt.p=a,Et.T=i,F0(e,t)}}function Gm(e,t,n){t=On(n,t),t=lh(e.stateNode,t,2),e=ha(e,t,2),e!==null&&(Oo(e,2),ci(e))}function le(e,t,n){if(e.tag===3)Gm(e,e,n);else for(;t!==null;){if(t.tag===3){Gm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(da===null||!da.has(i))){e=On(n,e),n=i0(2),i=ha(t,n,2),i!==null&&(a0(n,i,t,e),Oo(i,2),ci(i));break}}t=t.return}}function Zc(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new fM;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||($d=!0,a.add(n),e=gM.bind(null,e,t,n),t.then(e,e))}function gM(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ue===e&&(Wt&n)===n&&(Me===4||Me===3&&(Wt&62914560)===Wt&&300>si()-ep?!(ae&2)&&gs(e,0):tp|=n,ps===Wt&&(ps=0)),ci(e)}function G0(e,t){t===0&&(t=I_()),e=As(e,t),e!==null&&(Oo(e,t),ci(e))}function _M(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),G0(e,n)}function vM(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Y(314))}i!==null&&i.delete(t),G0(e,n)}function xM(e,t){return xd(e,t)}var Du=null,Or=null,_h=!1,Uu=!1,Kc=!1,$a=0;function ci(e){e!==Or&&e.next===null&&(Or===null?Du=Or=e:Or=Or.next=e),Uu=!0,_h||(_h=!0,yM())}function Xo(e,t){if(!Kc&&Uu){Kc=!0;do for(var n=!1,i=Du;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-Mn(42|e)+1)-1,r&=a&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Vm(i,r))}else r=Wt,r=Zu(i,i===ue?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||No(i,r)||(n=!0,Vm(i,r));i=i.next}while(n);Kc=!1}}function SM(){V0()}function V0(){Uu=_h=!1;var e=0;$a!==0&&(wM()&&(e=$a),$a=0);for(var t=si(),n=null,i=Du;i!==null;){var a=i.next,r=k0(i,t);r===0?(i.next=null,n===null?Du=a:n.next=a,a===null&&(Or=n)):(n=i,(e!==0||r&3)&&(Uu=!0)),i=a}Xo(e)}function k0(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-Mn(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=qS(o,t)):l<=t&&(e.expiredLanes|=o),r&=~o}if(t=ue,n=Wt,n=Zu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ee===2||ee===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Mc(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||No(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Mc(i),yd(n)){case 2:case 8:n=N_;break;case 32:n=hu;break;case 268435456:n=O_;break;default:n=hu}return i=X0.bind(null,e),n=xd(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Mc(i),e.callbackPriority=2,e.callbackNode=null,2}function X0(e,t){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(oc()&&e.callbackNode!==n)return null;var i=Wt;return i=Zu(e,e===ue?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(D0(e,i,t),k0(e,si()),e.callbackNode!=null&&e.callbackNode===n?X0.bind(null,e):null)}function Vm(e,t){if(oc())return null;D0(e,t,!0)}function yM(){UM(function(){ae&6?xd(L_,SM):V0()})}function ip(){return $a===0&&($a=P_()),$a}function km(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:kl(""+e)}function Xm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function MM(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var r=km((a[fn]||null).action),s=i.submitter;s&&(t=(t=s[fn]||null)?km(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var o=new Ku("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if($a!==0){var l=s?Xm(a,s):new FormData(a);sh(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=s?Xm(a,s):new FormData(a),sh(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var Qc=0;Qc<jf.length;Qc++){var Jc=jf[Qc],EM=Jc.toLowerCase(),TM=Jc[0].toUpperCase()+Jc.slice(1);Zn(EM,"on"+TM)}Zn(rv,"onAnimationEnd");Zn(sv,"onAnimationIteration");Zn(ov,"onAnimationStart");Zn("dblclick","onDoubleClick");Zn("focusin","onFocus");Zn("focusout","onBlur");Zn(Gy,"onTransitionRun");Zn(Vy,"onTransitionStart");Zn(ky,"onTransitionCancel");Zn(lv,"onTransitionEnd");ls("onMouseEnter",["mouseout","mouseover"]);ls("onMouseLeave",["mouseout","mouseover"]);ls("onPointerEnter",["pointerout","pointerover"]);ls("onPointerLeave",["pointerout","pointerover"]);or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));or("onBeforeInput",["compositionend","keypress","textInput","paste"]);or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function W0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=u;try{r(a)}catch(f){Tu(f)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,u=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=u;try{r(a)}catch(f){Tu(f)}a.currentTarget=null,r=l}}}}function Gt(e,t){var n=t[Gf];n===void 0&&(n=t[Gf]=new Set);var i=e+"__bubble";n.has(i)||(q0(t,e,2,!1),n.add(i))}function $c(e,t,n){var i=0;t&&(i|=4),q0(n,e,i,t)}var pl="_reactListening"+Math.random().toString(36).slice(2);function ap(e){if(!e[pl]){e[pl]=!0,H_.forEach(function(n){n!=="selectionchange"&&(bM.has(n)||$c(n,!1,e),$c(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pl]||(t[pl]=!0,$c("selectionchange",!1,t))}}function q0(e,t,n,i){switch(ax(t)){case 2:var a=JM;break;case 8:a=$M;break;default:a=lp}n=a.bind(null,t,n,e),a=void 0,!Wf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function tf(e,t,n,i,a){var r=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=zr(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue t}o=o.parentNode}}i=i.return}j_(function(){var u=r,f=Td(n),d=[];t:{var h=uv.get(e);if(h!==void 0){var p=Ku,v=e;switch(e){case"keypress":if(Wl(n)===0)break t;case"keydown":case"keyup":p=xy;break;case"focusin":v="focus",p=Dc;break;case"focusout":v="blur",p=Dc;break;case"beforeblur":case"afterblur":p=Dc;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=My;break;case rv:case sv:case ov:p=cy;break;case lv:p=Ty;break;case"scroll":case"scrollend":p=ry;break;case"wheel":p=Ay;break;case"copy":case"cut":case"paste":p=hy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=$p;break;case"toggle":case"beforetoggle":p=Cy}var x=(t&4)!==0,m=!x&&(e==="scroll"||e==="scrollend"),c=x?h!==null?h+"Capture":null:h;x=[];for(var _=u,g;_!==null;){var S=_;if(g=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||g===null||c===null||(S=go(_,c),S!=null&&x.push(Eo(_,S,g))),m)break;_=_.return}0<x.length&&(h=new p(h,v,null,n,f),d.push({event:h,listeners:x}))}}if(!(t&7)){t:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&n!==Xf&&(v=n.relatedTarget||n.fromElement)&&(zr(v)||v[Ts]))break t;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?zr(v):null,v!==null&&(m=Uo(v),x=v.tag,v!==m||x!==5&&x!==27&&x!==6)&&(v=null)):(p=null,v=u),p!==v)){if(x=Qp,S="onMouseLeave",c="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(x=$p,S="onPointerLeave",c="onPointerEnter",_="pointer"),m=p==null?h:Ks(p),g=v==null?h:Ks(v),h=new x(S,_+"leave",p,n,f),h.target=m,h.relatedTarget=g,S=null,zr(f)===u&&(x=new x(c,_+"enter",v,n,f),x.target=g,x.relatedTarget=m,S=x),m=S,p&&v)e:{for(x=p,c=v,_=0,g=x;g;g=dr(g))_++;for(g=0,S=c;S;S=dr(S))g++;for(;0<_-g;)x=dr(x),_--;for(;0<g-_;)c=dr(c),g--;for(;_--;){if(x===c||c!==null&&x===c.alternate)break e;x=dr(x),c=dr(c)}x=null}else x=null;p!==null&&Wm(d,h,p,x,!1),v!==null&&m!==null&&Wm(d,m,v,x,!0)}}t:{if(h=u?Ks(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=im;else if(nm(h))if(tv)C=By;else{C=Iy;var A=Py}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?u&&Ed(u.elementType)&&(C=im):C=zy;if(C&&(C=C(e,u))){$_(d,C,n,f);break t}A&&A(e,h,u),e==="focusout"&&u&&h.type==="number"&&u.memoizedProps.value!=null&&kf(h,"number",h.value)}switch(A=u?Ks(u):window,e){case"focusin":(nm(A)||A.contentEditable==="true")&&(Hr=A,qf=u,no=null);break;case"focusout":no=qf=Hr=null;break;case"mousedown":Yf=!0;break;case"contextmenu":case"mouseup":case"dragend":Yf=!1,lm(d,n,f);break;case"selectionchange":if(Hy)break;case"keydown":case"keyup":lm(d,n,f)}var b;if(Rd)t:{switch(e){case"compositionstart":var U="onCompositionStart";break t;case"compositionend":U="onCompositionEnd";break t;case"compositionupdate":U="onCompositionUpdate";break t}U=void 0}else Fr?Q_(e,n)&&(U="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(K_&&n.locale!=="ko"&&(Fr||U!=="onCompositionStart"?U==="onCompositionEnd"&&Fr&&(b=Z_()):(oa=f,bd="value"in oa?oa.value:oa.textContent,Fr=!0)),A=Lu(u,U),0<A.length&&(U=new Jp(U,e,null,n,f),d.push({event:U,listeners:A}),b?U.data=b:(b=J_(n),b!==null&&(U.data=b)))),(b=Dy?Uy(e,n):Ly(e,n))&&(U=Lu(u,"onBeforeInput"),0<U.length&&(A=new Jp("onBeforeInput","beforeinput",null,n,f),d.push({event:A,listeners:U}),A.data=b)),MM(d,e,u,n,f)}W0(d,t)})}function Eo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Lu(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=go(e,n),a!=null&&i.unshift(Eo(e,a,r)),a=go(e,t),a!=null&&i.push(Eo(e,a,r))),e.tag===3)return i;e=e.return}return[]}function dr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Wm(e,t,n,i,a){for(var r=t._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||u===null||(l=u,a?(u=go(n,r),u!=null&&s.unshift(Eo(n,u,l))):a||(u=go(n,r),u!=null&&s.push(Eo(n,u,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var AM=/\r\n?/g,RM=/\u0000|\uFFFD/g;function qm(e){return(typeof e=="string"?e:""+e).replace(AM,`
`).replace(RM,"")}function Y0(e,t){return t=qm(t),qm(e)===t}function lc(){}function se(e,t,n,i,a,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||us(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&us(e,""+i);break;case"className":ol(e,"class",i);break;case"tabIndex":ol(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":ol(e,n,i);break;case"style":Y_(e,i,r);break;case"data":if(t!=="object"){ol(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=kl(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&se(e,t,"name",a.name,a,null),se(e,t,"formEncType",a.formEncType,a,null),se(e,t,"formMethod",a.formMethod,a,null),se(e,t,"formTarget",a.formTarget,a,null)):(se(e,t,"encType",a.encType,a,null),se(e,t,"method",a.method,a,null),se(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=kl(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=lc);break;case"onScroll":i!=null&&Gt("scroll",e);break;case"onScrollEnd":i!=null&&Gt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Y(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(Y(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=kl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Gt("beforetoggle",e),Gt("toggle",e),Vl(e,"popover",i);break;case"xlinkActuate":di(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":di(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":di(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":di(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":di(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":di(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":di(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":di(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":di(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Vl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=iy.get(n)||n,Vl(e,n,i))}}function vh(e,t,n,i,a,r){switch(n){case"style":Y_(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Y(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(Y(60));e.innerHTML=n}}break;case"children":typeof i=="string"?us(e,i):(typeof i=="number"||typeof i=="bigint")&&us(e,""+i);break;case"onScroll":i!=null&&Gt("scroll",e);break;case"onScrollEnd":i!=null&&Gt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=lc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!G_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),r=e[fn]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Vl(e,n,i)}}}function je(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Gt("error",e),Gt("load",e);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Y(137,t));default:se(e,t,r,s,n,null)}}a&&se(e,t,"srcSet",n.srcSet,n,null),i&&se(e,t,"src",n.src,n,null);return;case"input":Gt("invalid",e);var o=r=s=a=null,l=null,u=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":a=f;break;case"type":s=f;break;case"checked":l=f;break;case"defaultChecked":u=f;break;case"value":r=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(Y(137,t));break;default:se(e,t,i,f,n,null)}}X_(e,r,o,l,u,s,a,!1),du(e);return;case"select":Gt("invalid",e),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:se(e,t,a,o,n,null)}t=r,n=s,e.multiple=!!i,t!=null?Qr(e,!!i,t,!1):n!=null&&Qr(e,!!i,n,!0);return;case"textarea":Gt("invalid",e),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Y(91));break;default:se(e,t,s,o,n,null)}q_(e,i,a,r),du(e);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:se(e,t,l,i,n,null)}return;case"dialog":Gt("beforetoggle",e),Gt("toggle",e),Gt("cancel",e),Gt("close",e);break;case"iframe":case"object":Gt("load",e);break;case"video":case"audio":for(i=0;i<Mo.length;i++)Gt(Mo[i],e);break;case"image":Gt("error",e),Gt("load",e);break;case"details":Gt("toggle",e);break;case"embed":case"source":case"link":Gt("error",e),Gt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&(i=n[u],i!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(Y(137,t));default:se(e,t,u,i,n,null)}return;default:if(Ed(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&vh(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&se(e,t,o,i,n,null))}function CM(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,u=null,f=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||se(e,t,p,null,i,d)}}for(var h in i){var p=i[h];if(d=n[h],i.hasOwnProperty(h)&&(p!=null||d!=null))switch(h){case"type":r=p;break;case"name":a=p;break;case"checked":u=p;break;case"defaultChecked":f=p;break;case"value":s=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(Y(137,t));break;default:p!==d&&se(e,t,h,p,i,d)}}Vf(e,s,o,l,u,f,r,a);return;case"select":p=s=o=h=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||se(e,t,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":h=r;break;case"defaultValue":o=r;break;case"multiple":s=r;default:r!==l&&se(e,t,a,r,i,l)}t=o,n=s,i=p,h!=null?Qr(e,!!n,h,!1):!!i!=!!n&&(t!=null?Qr(e,!!n,t,!0):Qr(e,!!n,n?[]:"",!1));return;case"textarea":p=h=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:se(e,t,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":h=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(Y(91));break;default:a!==r&&se(e,t,s,a,i,r)}W_(e,h,p);return;case"option":for(var v in n)if(h=n[v],n.hasOwnProperty(v)&&h!=null&&!i.hasOwnProperty(v))switch(v){case"selected":e.selected=!1;break;default:se(e,t,v,null,i,h)}for(l in i)if(h=i[l],p=n[l],i.hasOwnProperty(l)&&h!==p&&(h!=null||p!=null))switch(l){case"selected":e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:se(e,t,l,h,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)h=n[x],n.hasOwnProperty(x)&&h!=null&&!i.hasOwnProperty(x)&&se(e,t,x,null,i,h);for(u in i)if(h=i[u],p=n[u],i.hasOwnProperty(u)&&h!==p&&(h!=null||p!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(Y(137,t));break;default:se(e,t,u,h,i,p)}return;default:if(Ed(t)){for(var m in n)h=n[m],n.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&vh(e,t,m,void 0,i,h);for(f in i)h=i[f],p=n[f],!i.hasOwnProperty(f)||h===p||h===void 0&&p===void 0||vh(e,t,f,h,i,p);return}}for(var c in n)h=n[c],n.hasOwnProperty(c)&&h!=null&&!i.hasOwnProperty(c)&&se(e,t,c,null,i,h);for(d in i)h=i[d],p=n[d],!i.hasOwnProperty(d)||h===p||h==null&&p==null||se(e,t,d,h,i,p)}var xh=null,Sh=null;function Nu(e){return e.nodeType===9?e:e.ownerDocument}function Ym(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function j0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function yh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ef=null;function wM(){var e=window.event;return e&&e.type==="popstate"?e===ef?!1:(ef=e,!0):(ef=null,!1)}var Z0=typeof setTimeout=="function"?setTimeout:void 0,DM=typeof clearTimeout=="function"?clearTimeout:void 0,jm=typeof Promise=="function"?Promise:void 0,UM=typeof queueMicrotask=="function"?queueMicrotask:typeof jm<"u"?function(e){return jm.resolve(null).then(e).catch(LM)}:Z0;function LM(e){setTimeout(function(){throw e})}function Aa(e){return e==="head"}function Zm(e,t){var n=t,i=0,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<i&&8>i){n=i;var s=e.ownerDocument;if(n&1&&po(s.documentElement),n&2&&po(s.body),n&4)for(n=s.head,po(n),s=n.firstChild;s;){var o=s.nextSibling,l=s.nodeName;s[Po]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=o}}if(a===0){e.removeChild(r),Co(t);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:i=n.charCodeAt(0)-48;else i=0;n=r}while(n);Co(t)}function Mh(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Mh(n),Md(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function NM(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Po])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Yn(e.nextSibling),e===null)break}return null}function OM(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Yn(e.nextSibling),e===null))return null;return e}function Eh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function PM(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Th=null;function Km(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function K0(e,t,n){switch(t=Nu(n),e){case"html":if(e=t.documentElement,!e)throw Error(Y(452));return e;case"head":if(e=t.head,!e)throw Error(Y(453));return e;case"body":if(e=t.body,!e)throw Error(Y(454));return e;default:throw Error(Y(451))}}function po(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Md(e)}var Bn=new Map,Qm=new Set;function Ou(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Hi=Zt.d;Zt.d={f:IM,r:zM,D:BM,C:FM,L:HM,m:GM,X:kM,S:VM,M:XM};function IM(){var e=Hi.f(),t=rc();return e||t}function zM(e){var t=bs(e);t!==null&&t.tag===5&&t.type==="form"?kv(t):Hi.r(e)}var Cs=typeof document>"u"?null:document;function Q0(e,t,n){var i=Cs;if(i&&typeof t=="string"&&t){var a=Nn(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Qm.has(a)||(Qm.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),je(t,"link",e),He(t),i.head.appendChild(t)))}}function BM(e){Hi.D(e),Q0("dns-prefetch",e,null)}function FM(e,t){Hi.C(e,t),Q0("preconnect",e,t)}function HM(e,t,n){Hi.L(e,t,n);var i=Cs;if(i&&e&&t){var a='link[rel="preload"][as="'+Nn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Nn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Nn(n.imageSizes)+'"]')):a+='[href="'+Nn(e)+'"]';var r=a;switch(t){case"style":r=_s(e);break;case"script":r=ws(e)}Bn.has(r)||(e=fe({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Bn.set(r,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Wo(r))||t==="script"&&i.querySelector(qo(r))||(t=i.createElement("link"),je(t,"link",e),He(t),i.head.appendChild(t)))}}function GM(e,t){Hi.m(e,t);var n=Cs;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Nn(i)+'"][href="'+Nn(e)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=ws(e)}if(!Bn.has(r)&&(e=fe({rel:"modulepreload",href:e},t),Bn.set(r,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(qo(r)))return}i=n.createElement("link"),je(i,"link",e),He(i),n.head.appendChild(i)}}}function VM(e,t,n){Hi.S(e,t,n);var i=Cs;if(i&&e){var a=Kr(i).hoistableStyles,r=_s(e);t=t||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(Wo(r)))o.loading=5;else{e=fe({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Bn.get(r))&&rp(e,n);var l=s=i.createElement("link");He(l),je(l,"link",e),l._p=new Promise(function(u,f){l.onload=u,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Jl(s,t,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function kM(e,t){Hi.X(e,t);var n=Cs;if(n&&e){var i=Kr(n).hoistableScripts,a=ws(e),r=i.get(a);r||(r=n.querySelector(qo(a)),r||(e=fe({src:e,async:!0},t),(t=Bn.get(a))&&sp(e,t),r=n.createElement("script"),He(r),je(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function XM(e,t){Hi.M(e,t);var n=Cs;if(n&&e){var i=Kr(n).hoistableScripts,a=ws(e),r=i.get(a);r||(r=n.querySelector(qo(a)),r||(e=fe({src:e,async:!0,type:"module"},t),(t=Bn.get(a))&&sp(e,t),r=n.createElement("script"),He(r),je(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function Jm(e,t,n,i){var a=(a=ca.current)?Ou(a):null;if(!a)throw Error(Y(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=_s(n.href),n=Kr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=_s(n.href);var r=Kr(a).hoistableStyles,s=r.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=a.querySelector(Wo(e)))&&!r._p&&(s.instance=r,s.state.loading=5),Bn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Bn.set(e,n),r||WM(a,e,n,s.state))),t&&i===null)throw Error(Y(528,""));return s}if(t&&i!==null)throw Error(Y(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ws(n),n=Kr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Y(444,e))}}function _s(e){return'href="'+Nn(e)+'"'}function Wo(e){return'link[rel="stylesheet"]['+e+"]"}function J0(e){return fe({},e,{"data-precedence":e.precedence,precedence:null})}function WM(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),je(t,"link",n),He(t),e.head.appendChild(t))}function ws(e){return'[src="'+Nn(e)+'"]'}function qo(e){return"script[async]"+e}function $m(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Nn(n.href)+'"]');if(i)return t.instance=i,He(i),i;var a=fe({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),He(i),je(i,"style",a),Jl(i,n.precedence,e),t.instance=i;case"stylesheet":a=_s(n.href);var r=e.querySelector(Wo(a));if(r)return t.state.loading|=4,t.instance=r,He(r),r;i=J0(n),(a=Bn.get(a))&&rp(i,a),r=(e.ownerDocument||e).createElement("link"),He(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),je(r,"link",i),t.state.loading|=4,Jl(r,n.precedence,e),t.instance=r;case"script":return r=ws(n.src),(a=e.querySelector(qo(r)))?(t.instance=a,He(a),a):(i=n,(a=Bn.get(r))&&(i=fe({},n),sp(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),He(a),je(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(Y(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,Jl(i,n.precedence,e));return t.instance}function Jl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===t)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function rp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function sp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var $l=null;function tg(e,t,n){if($l===null){var i=new Map,a=$l=new Map;a.set(n,i)}else a=$l,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[Po]||r[Qe]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function eg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function qM(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $0(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var To=null;function YM(){}function jM(e,t,n){if(To===null)throw Error(Y(475));var i=To;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(t.state.loading&4)){if(t.instance===null){var a=_s(n.href),r=e.querySelector(Wo(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Pu.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=r,He(r);return}r=e.ownerDocument||e,n=J0(n),(a=Bn.get(a))&&rp(n,a),r=r.createElement("link"),He(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),je(r,"link",n),t.instance=r}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&!(t.state.loading&3)&&(i.count++,t=Pu.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function ZM(){if(To===null)throw Error(Y(475));var e=To;return e.stylesheets&&e.count===0&&bh(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&bh(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Pu(){if(this.count--,this.count===0){if(this.stylesheets)bh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Iu=null;function bh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Iu=new Map,t.forEach(KM,e),Iu=null,Pu.call(e))}function KM(e,t){if(!(t.state.loading&4)){var n=Iu.get(e);if(n)var i=n.get(null);else{n=new Map,Iu.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=t.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=Pu.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var bo={$$typeof:Ei,Provider:null,Consumer:null,_currentValue:Ya,_currentValue2:Ya,_threadCount:0};function QM(e,t,n,i,a,r,s,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ec(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ec(0),this.hiddenUpdates=Ec(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function tx(e,t,n,i,a,r,s,o,l,u,f,d){return e=new QM(e,t,n,s,o,l,u,d),t=1,r===!0&&(t|=24),r=Sn(3,null,null,t),e.current=r,r.stateNode=e,t=Od(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},Id(r),e}function ex(e){return e?(e=kr,e):kr}function nx(e,t,n,i,a,r){a=ex(a),i.context===null?i.context=a:i.pendingContext=a,i=fa(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=ha(e,i,t),n!==null&&(Tn(n,e,t),ro(n,e,t))}function ng(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function op(e,t){ng(e,t),(e=e.alternate)&&ng(e,t)}function ix(e){if(e.tag===13){var t=As(e,67108864);t!==null&&Tn(t,e,67108864),op(e,67108864)}}var zu=!0;function JM(e,t,n,i){var a=Et.T;Et.T=null;var r=Zt.p;try{Zt.p=2,lp(e,t,n,i)}finally{Zt.p=r,Et.T=a}}function $M(e,t,n,i){var a=Et.T;Et.T=null;var r=Zt.p;try{Zt.p=8,lp(e,t,n,i)}finally{Zt.p=r,Et.T=a}}function lp(e,t,n,i){if(zu){var a=Ah(i);if(a===null)tf(e,t,i,Bu,n),ig(e,i);else if(eE(a,e,t,n,i))i.stopPropagation();else if(ig(e,i),t&4&&-1<tE.indexOf(e)){for(;a!==null;){var r=bs(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Ba(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-Mn(s);o.entanglements[1]|=l,s&=~l}ci(r),!(ae&6)&&(Cu=si()+500,Xo(0))}}break;case 13:o=As(r,2),o!==null&&Tn(o,r,2),rc(),op(r,2)}if(r=Ah(i),r===null&&tf(e,t,i,Bu,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else tf(e,t,i,null,n)}}function Ah(e){return e=Td(e),up(e)}var Bu=null;function up(e){if(Bu=null,e=zr(e),e!==null){var t=Uo(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=C_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Bu=e,null}function ax(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(FS()){case L_:return 2;case N_:return 8;case hu:case HS:return 32;case O_:return 268435456;default:return 32}default:return 32}}var Rh=!1,ma=null,ga=null,_a=null,Ao=new Map,Ro=new Map,aa=[],tE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ig(e,t){switch(e){case"focusin":case"focusout":ma=null;break;case"dragenter":case"dragleave":ga=null;break;case"mouseover":case"mouseout":_a=null;break;case"pointerover":case"pointerout":Ao.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(t.pointerId)}}function Gs(e,t,n,i,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},t!==null&&(t=bs(t),t!==null&&ix(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function eE(e,t,n,i,a){switch(t){case"focusin":return ma=Gs(ma,e,t,n,i,a),!0;case"dragenter":return ga=Gs(ga,e,t,n,i,a),!0;case"mouseover":return _a=Gs(_a,e,t,n,i,a),!0;case"pointerover":var r=a.pointerId;return Ao.set(r,Gs(Ao.get(r)||null,e,t,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,Ro.set(r,Gs(Ro.get(r)||null,e,t,n,i,a)),!0}return!1}function rx(e){var t=zr(e.target);if(t!==null){var n=Uo(t);if(n!==null){if(t=n.tag,t===13){if(t=C_(n),t!==null){e.blockedOn=t,jS(e.priority,function(){if(n.tag===13){var i=En();i=Sd(i);var a=As(n,i);a!==null&&Tn(a,n,i),op(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ah(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Xf=i,n.target.dispatchEvent(i),Xf=null}else return t=bs(n),t!==null&&ix(t),e.blockedOn=n,!1;t.shift()}return!0}function ag(e,t,n){tu(e)&&n.delete(t)}function nE(){Rh=!1,ma!==null&&tu(ma)&&(ma=null),ga!==null&&tu(ga)&&(ga=null),_a!==null&&tu(_a)&&(_a=null),Ao.forEach(ag),Ro.forEach(ag)}function ml(e,t){e.blockedOn===t&&(e.blockedOn=null,Rh||(Rh=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,nE)))}var gl=null;function rg(e){gl!==e&&(gl=e,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,function(){gl===e&&(gl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(up(i||n)===null)continue;break}var r=bs(n);r!==null&&(e.splice(t,3),t-=3,sh(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Co(e){function t(l){return ml(l,e)}ma!==null&&ml(ma,e),ga!==null&&ml(ga,e),_a!==null&&ml(_a,e),Ao.forEach(t),Ro.forEach(t);for(var n=0;n<aa.length;n++){var i=aa[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<aa.length&&(n=aa[0],n.blockedOn===null);)rx(n),n.blockedOn===null&&aa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[fn]||null;if(typeof r=="function")s||rg(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[fn]||null)o=s.formAction;else if(up(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),rg(n)}}}function cp(e){this._internalRoot=e}uc.prototype.render=cp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Y(409));var n=t.current,i=En();nx(n,i,e,t,null,null)};uc.prototype.unmount=cp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nx(e.current,2,null,e,null,null),rc(),t[Ts]=null}};function uc(e){this._internalRoot=e}uc.prototype.unstable_scheduleHydration=function(e){if(e){var t=F_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<aa.length&&t!==0&&t<aa[n].priority;n++);aa.splice(n,0,e),n===0&&rx(e)}};var sg=A_.version;if(sg!=="19.1.0")throw Error(Y(527,sg,"19.1.0"));Zt.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=LS(t),e=e!==null?w_(e):null,e=e===null?null:e.stateNode,e};var iE={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Et,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{Lo=_l.inject(iE),yn=_l}catch{}}Yu.createRoot=function(e,t){if(!R_(e))throw Error(Y(299));var n=!1,i="",a=t0,r=e0,s=n0,o=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=tx(e,1,!1,null,null,n,i,a,r,s,o,null),e[Ts]=t.current,ap(e),new cp(t)};Yu.hydrateRoot=function(e,t,n){if(!R_(e))throw Error(Y(299));var i=!1,a="",r=t0,s=e0,o=n0,l=null,u=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(l=n.unstable_transitionCallbacks),n.formState!==void 0&&(u=n.formState)),t=tx(e,1,!0,t,n??null,i,a,r,s,o,l,u),t.context=ex(null),n=t.current,i=En(),i=Sd(i),a=fa(i),a.callback=null,ha(n,a,i),n=i,t.current.lanes=n,Oo(t,n),ci(t),e[Ts]=t.current,ap(e),new uc(t)};Yu.version="19.1.0";function sx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sx)}catch(e){console.error(e)}}sx(),S_.exports=Yu;var aE=S_.exports;const rE=c_(aE),ox=k.createContext(),sE=({children:e})=>{const[t,n]=k.useState(()=>localStorage.getItem("theme")||"dark");k.useEffect(()=>{localStorage.setItem("theme",t),document.body.className="",document.body.classList.add(t)},[t]);const i=()=>{n(a=>a==="light"?"dark":"light")};return St.jsx(ox.Provider,{value:{theme:t,toggleTheme:i},children:e})},oE=()=>k.useContext(ox),lE={en:{title:"Hi, I'm <span class='text-title-name'>Arthur Wuhrlin</span>",subtitle:"And this is my Porfolio",theme:{dark:"Light Mode",light:"Dark Mode"},nav:{home:"Home",projects:"Projects",blog:"Blog",about:"About"},buttons:{theme:"Toggle Theme",language:"FR"},pages:{blog:{title:"Blog",wip:"Blog : Work in progress"}},about:{navTitle:"About Me",introduction:"Hello! I'm Arthur, a passionate software engineering student diving deep into the world of web development and 3D graphics. I love exploring new technologies and building creative solutions.",skillsTitle:"My Skills",educationTitle:"Education",experienceTitle:"Experience",cvDownloadTitle:"Download My CV",cvDownloadButton:"Download CV",skills:{level:{expert:"Expert",advanced:"Advanced",intermediate:"Intermediate",beginner:"Beginner"}},education:{degree3:{name:"Master of Science in Software Engineering",institution:"National University of Singapore",desc1:"Relevant coursework: Advanced Algorithms, System Design, AI."},degree2:{name:"Engineering Diploma in Computer Science",institution:"National University of Singapore",desc1:"Relevant coursework: Advanced Algorithms, System Design, AI."},degree1:{name:"Preparatory Classes MPSI/MP*",institution:"Lycée Kléber, Strasbourg"}},experience:{role1:{name:"Software Engineer Intern",company:"Tech Solutions Inc.",resp1:"Developed new features for a web application using React and Node.js.",resp2:"Collaborated with a team of 5 developers."}}}},fr:{title:"Bonjour, je suis <span class='text-title-name-fr'>Arthur Wuhrlin</span>",subtitle:"Et voici mon Porfolio",theme:{dark:"Mode Lumineux",light:"Mode sombre"},nav:{home:"Accueil",projects:"Projets",blog:"Blog",about:"À Propos"},buttons:{theme:"Changer Thème",language:"EN"},pages:{blog:{title:"Blog",wip:"Blog : En cours de construction"}},about:{navTitle:"À Propos de Moi",introduction:"Bonjour ! Je suis Arthur, un étudiant passionné en génie logiciel qui plonge dans le monde du développement web et du graphisme 3D. J'adore explorer les nouvelles technologies et construire des solutions créatives.",skillsTitle:"Mes Compétences",educationTitle:"Formation",experienceTitle:"Expérience",cvDownloadTitle:"Télécharger Mon CV",cvDownloadButton:"Télécharger le CV",skills:{level:{expert:"Expert",advanced:"Avancé",intermediate:"Intermédiaire",beginner:"Débutant"}},education:{degree3:{name:"Master of Science en Génie Logiciel",institution:"Université Nationale de Singapour",desc1:"Cours pertinents : Algorithmes avancés, Conception de systèmes, IA."},degree2:{name:"Diplôme d'ingénieur en Informatique",institution:"Telecom Paris",desc1:"Relevant coursework: Advanced Algorithms, System Design, AI."},degree1:{name:"Classes Préparatoires MPSI/MP*",institution:"Lycée Kléber, Strasbourg"}},experience:{role1:{name:"Stagiaire Ingénieur Logiciel",company:"Tech Solutions Inc.",resp1:"Développement de nouvelles fonctionnalités pour une application web en React et Node.js.",resp2:"Collaboration avec une équipe de 5 développeurs."}}}}},lx=k.createContext(),uE=({children:e})=>{const[t,n]=k.useState(()=>localStorage.getItem("language")||"fr");k.useEffect(()=>{localStorage.setItem("language",t)},[t]);const i=()=>{n(r=>r==="en"?"fr":"en")},a=r=>{const s=r.split(".");let o=lE[t];for(let l of s)if(o&&typeof o=="object"&&l in o)o=o[l];else return console.warn(`Translation key "${r}" not found for language "${t}".`),r;return o};return St.jsx(lx.Provider,{value:{language:t,toggleLanguage:i,t:a},children:e})},fp=()=>k.useContext(lx);var hp={};Object.defineProperty(hp,"__esModule",{value:!0});hp.parse=gE;hp.serialize=_E;const cE=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,fE=/^[\u0021-\u003A\u003C-\u007E]*$/,hE=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,dE=/^[\u0020-\u003A\u003D-\u007E]*$/,pE=Object.prototype.toString,mE=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function gE(e,t){const n=new mE,i=e.length;if(i<2)return n;const a=(t==null?void 0:t.decode)||vE;let r=0;do{const s=e.indexOf("=",r);if(s===-1)break;const o=e.indexOf(";",r),l=o===-1?i:o;if(s>l){r=e.lastIndexOf(";",s-1)+1;continue}const u=og(e,r,s),f=lg(e,s,u),d=e.slice(u,f);if(n[d]===void 0){let h=og(e,s+1,l),p=lg(e,l,h);const v=a(e.slice(h,p));n[d]=v}r=l+1}while(r<i);return n}function og(e,t,n){do{const i=e.charCodeAt(t);if(i!==32&&i!==9)return t}while(++t<n);return n}function lg(e,t,n){for(;t>n;){const i=e.charCodeAt(--t);if(i!==32&&i!==9)return t+1}return n}function _E(e,t,n){const i=(n==null?void 0:n.encode)||encodeURIComponent;if(!cE.test(e))throw new TypeError(`argument name is invalid: ${e}`);const a=i(t);if(!fE.test(a))throw new TypeError(`argument val is invalid: ${t}`);let r=e+"="+a;if(!n)return r;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);r+="; Max-Age="+n.maxAge}if(n.domain){if(!hE.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);r+="; Domain="+n.domain}if(n.path){if(!dE.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);r+="; Path="+n.path}if(n.expires){if(!xE(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);r+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(r+="; HttpOnly"),n.secure&&(r+="; Secure"),n.partitioned&&(r+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":r+="; Priority=Low";break;case"medium":r+="; Priority=Medium";break;case"high":r+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"none":r+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return r}function vE(e){if(e.indexOf("%")===-1)return e;try{return decodeURIComponent(e)}catch{return e}}function xE(e){return pE.call(e)==="[object Date]"}var ug="popstate";function SE(e={}){function t(i,a){let{pathname:r,search:s,hash:o}=i.location;return Ch("",{pathname:r,search:s,hash:o},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){return typeof a=="string"?a:wo(a)}return ME(t,n,null,e)}function _e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function li(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function yE(){return Math.random().toString(36).substring(2,10)}function cg(e,t){return{usr:e.state,key:e.key,idx:t}}function Ch(e,t,n=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ds(t):t,state:n,key:t&&t.key||i||yE()}}function wo({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Ds(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function ME(e,t,n,i={}){let{window:a=document.defaultView,v5Compat:r=!1}=i,s=a.history,o="POP",l=null,u=f();u==null&&(u=0,s.replaceState({...s.state,idx:u},""));function f(){return(s.state||{idx:null}).idx}function d(){o="POP";let m=f(),c=m==null?null:m-u;u=m,l&&l({action:o,location:x.location,delta:c})}function h(m,c){o="PUSH";let _=Ch(x.location,m,c);u=f()+1;let g=cg(_,u),S=x.createHref(_);try{s.pushState(g,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;a.location.assign(S)}r&&l&&l({action:o,location:x.location,delta:1})}function p(m,c){o="REPLACE";let _=Ch(x.location,m,c);u=f();let g=cg(_,u),S=x.createHref(_);s.replaceState(g,"",S),r&&l&&l({action:o,location:x.location,delta:0})}function v(m){return EE(m)}let x={get action(){return o},get location(){return e(a,s)},listen(m){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(ug,d),l=m,()=>{a.removeEventListener(ug,d),l=null}},createHref(m){return t(a,m)},createURL:v,encodeLocation(m){let c=v(m);return{pathname:c.pathname,search:c.search,hash:c.hash}},push:h,replace:p,go(m){return s.go(m)}};return x}function EE(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),_e(n,"No window.location.(origin|href) available to create URL");let i=typeof e=="string"?e:wo(e);return i=i.replace(/ $/,"%20"),!t&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function ux(e,t,n="/"){return TE(e,t,n,!1)}function TE(e,t,n,i){let a=typeof t=="string"?Ds(t):t,r=zi(a.pathname||"/",n);if(r==null)return null;let s=cx(e);bE(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let u=IE(r);o=OE(s[l],u,i)}return o}function cx(e,t=[],n=[],i=""){let a=(r,s,o)=>{let l={relativePath:o===void 0?r.path||"":o,caseSensitive:r.caseSensitive===!0,childrenIndex:s,route:r};l.relativePath.startsWith("/")&&(_e(l.relativePath.startsWith(i),`Absolute route path "${l.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(i.length));let u=Li([i,l.relativePath]),f=n.concat(l);r.children&&r.children.length>0&&(_e(r.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),cx(r.children,t,f,u)),!(r.path==null&&!r.index)&&t.push({path:u,score:LE(u,r.index),routesMeta:f})};return e.forEach((r,s)=>{var o;if(r.path===""||!((o=r.path)!=null&&o.includes("?")))a(r,s);else for(let l of fx(r.path))a(r,s,l)}),t}function fx(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,a=n.endsWith("?"),r=n.replace(/\?$/,"");if(i.length===0)return a?[r,""]:[r];let s=fx(i.join("/")),o=[];return o.push(...s.map(l=>l===""?r:[r,l].join("/"))),a&&o.push(...s),o.map(l=>e.startsWith("/")&&l===""?"/":l)}function bE(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:NE(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var AE=/^:[\w-]+$/,RE=3,CE=2,wE=1,DE=10,UE=-2,fg=e=>e==="*";function LE(e,t){let n=e.split("/"),i=n.length;return n.some(fg)&&(i+=UE),t&&(i+=CE),n.filter(a=>!fg(a)).reduce((a,r)=>a+(AE.test(r)?RE:r===""?wE:DE),i)}function NE(e,t){return e.length===t.length&&e.slice(0,-1).every((i,a)=>i===t[a])?e[e.length-1]-t[t.length-1]:0}function OE(e,t,n=!1){let{routesMeta:i}=e,a={},r="/",s=[];for(let o=0;o<i.length;++o){let l=i[o],u=o===i.length-1,f=r==="/"?t:t.slice(r.length)||"/",d=Fu({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f),h=l.route;if(!d&&u&&n&&!i[i.length-1].route.index&&(d=Fu({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},f)),!d)return null;Object.assign(a,d.params),s.push({params:a,pathname:Li([r,d.pathname]),pathnameBase:HE(Li([r,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(r=Li([r,d.pathnameBase]))}return s}function Fu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=PE(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let r=a[0],s=r.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:i.reduce((u,{paramName:f,isOptional:d},h)=>{if(f==="*"){let v=o[h]||"";s=r.slice(0,r.length-v.length).replace(/(.)\/+$/,"$1")}const p=o[h];return d&&!p?u[f]=void 0:u[f]=(p||"").replace(/%2F/g,"/"),u},{}),pathname:r,pathnameBase:s,pattern:e}}function PE(e,t=!1,n=!0){li(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),i]}function IE(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return li(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function zi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function zE(e,t="/"){let{pathname:n,search:i="",hash:a=""}=typeof e=="string"?Ds(e):e;return{pathname:n?n.startsWith("/")?n:BE(n,t):t,search:GE(i),hash:VE(a)}}function BE(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function nf(e,t,n,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function FE(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function hx(e){let t=FE(e);return t.map((n,i)=>i===t.length-1?n.pathname:n.pathnameBase)}function dx(e,t,n,i=!1){let a;typeof e=="string"?a=Ds(e):(a={...e},_e(!a.pathname||!a.pathname.includes("?"),nf("?","pathname","search",a)),_e(!a.pathname||!a.pathname.includes("#"),nf("#","pathname","hash",a)),_e(!a.search||!a.search.includes("#"),nf("#","search","hash",a)));let r=e===""||a.pathname==="",s=r?"/":a.pathname,o;if(s==null)o=n;else{let d=t.length-1;if(!i&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),d-=1;a.pathname=h.join("/")}o=d>=0?t[d]:"/"}let l=zE(a,o),u=s&&s!=="/"&&s.endsWith("/"),f=(r||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}var Li=e=>e.join("/").replace(/\/\/+/g,"/"),HE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),GE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,VE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function kE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var px=["POST","PUT","PATCH","DELETE"];new Set(px);var XE=["GET",...px];new Set(XE);var Us=k.createContext(null);Us.displayName="DataRouter";var cc=k.createContext(null);cc.displayName="DataRouterState";var mx=k.createContext({isTransitioning:!1});mx.displayName="ViewTransition";var WE=k.createContext(new Map);WE.displayName="Fetchers";var qE=k.createContext(null);qE.displayName="Await";var fi=k.createContext(null);fi.displayName="Navigation";var Yo=k.createContext(null);Yo.displayName="Location";var Gi=k.createContext({outlet:null,matches:[],isDataRoute:!1});Gi.displayName="Route";var dp=k.createContext(null);dp.displayName="RouteError";function YE(e,{relative:t}={}){_e(jo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=k.useContext(fi),{hash:a,pathname:r,search:s}=Zo(e,{relative:t}),o=r;return n!=="/"&&(o=r==="/"?n:Li([n,r])),i.createHref({pathname:o,search:s,hash:a})}function jo(){return k.useContext(Yo)!=null}function Ra(){return _e(jo(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(Yo).location}var gx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function _x(e){k.useContext(fi).static||k.useLayoutEffect(e)}function jE(){let{isDataRoute:e}=k.useContext(Gi);return e?oT():ZE()}function ZE(){_e(jo(),"useNavigate() may be used only in the context of a <Router> component.");let e=k.useContext(Us),{basename:t,navigator:n}=k.useContext(fi),{matches:i}=k.useContext(Gi),{pathname:a}=Ra(),r=JSON.stringify(hx(i)),s=k.useRef(!1);return _x(()=>{s.current=!0}),k.useCallback((l,u={})=>{if(li(s.current,gx),!s.current)return;if(typeof l=="number"){n.go(l);return}let f=dx(l,JSON.parse(r),a,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Li([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,r,a,e])}k.createContext(null);function Zo(e,{relative:t}={}){let{matches:n}=k.useContext(Gi),{pathname:i}=Ra(),a=JSON.stringify(hx(n));return k.useMemo(()=>dx(e,JSON.parse(a),i,t==="path"),[e,a,i,t])}function KE(e,t){return vx(e,t)}function vx(e,t,n,i){var _;_e(jo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:r}=k.useContext(fi),{matches:s}=k.useContext(Gi),o=s[s.length-1],l=o?o.params:{},u=o?o.pathname:"/",f=o?o.pathnameBase:"/",d=o&&o.route;{let g=d&&d.path||"";xx(u,!d||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let h=Ra(),p;if(t){let g=typeof t=="string"?Ds(t):t;_e(f==="/"||((_=g.pathname)==null?void 0:_.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${g.pathname}" was given in the \`location\` prop.`),p=g}else p=h;let v=p.pathname||"/",x=v;if(f!=="/"){let g=f.replace(/^\//,"").split("/");x="/"+v.replace(/^\//,"").split("/").slice(g.length).join("/")}let m=!r&&n&&n.matches&&n.matches.length>0?n.matches:ux(e,{pathname:x});li(d||m!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),li(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let c=eT(m&&m.map(g=>Object.assign({},g,{params:Object.assign({},l,g.params),pathname:Li([f,a.encodeLocation?a.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?f:Li([f,a.encodeLocation?a.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),s,n,i);return t&&c?k.createElement(Yo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},c):c}function QE(){let e=sT(),t=kE(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},r={padding:"2px 4px",backgroundColor:i},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:r},"ErrorBoundary")," or"," ",k.createElement("code",{style:r},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:a},n):null,s)}var JE=k.createElement(QE,null),$E=class extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?k.createElement(Gi.Provider,{value:this.props.routeContext},k.createElement(dp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function tT({routeContext:e,match:t,children:n}){let i=k.useContext(Us);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),k.createElement(Gi.Provider,{value:e},n)}function eT(e,t=[],n=null,i=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,r=n==null?void 0:n.errors;if(r!=null){let l=a.findIndex(u=>u.route.id&&(r==null?void 0:r[u.route.id])!==void 0);_e(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(r).join(",")}`),a=a.slice(0,Math.min(a.length,l+1))}let s=!1,o=-1;if(n)for(let l=0;l<a.length;l++){let u=a[l];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(o=l),u.route.id){let{loaderData:f,errors:d}=n,h=u.route.loader&&!f.hasOwnProperty(u.route.id)&&(!d||d[u.route.id]===void 0);if(u.route.lazy||h){s=!0,o>=0?a=a.slice(0,o+1):a=[a[0]];break}}}return a.reduceRight((l,u,f)=>{let d,h=!1,p=null,v=null;n&&(d=r&&u.route.id?r[u.route.id]:void 0,p=u.route.errorElement||JE,s&&(o<0&&f===0?(xx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,v=null):o===f&&(h=!0,v=u.route.hydrateFallbackElement||null)));let x=t.concat(a.slice(0,f+1)),m=()=>{let c;return d?c=p:h?c=v:u.route.Component?c=k.createElement(u.route.Component,null):u.route.element?c=u.route.element:c=l,k.createElement(tT,{match:u,routeContext:{outlet:l,matches:x,isDataRoute:n!=null},children:c})};return n&&(u.route.ErrorBoundary||u.route.errorElement||f===0)?k.createElement($E,{location:n.location,revalidation:n.revalidation,component:p,error:d,children:m(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):m()},null)}function pp(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nT(e){let t=k.useContext(Us);return _e(t,pp(e)),t}function iT(e){let t=k.useContext(cc);return _e(t,pp(e)),t}function aT(e){let t=k.useContext(Gi);return _e(t,pp(e)),t}function mp(e){let t=aT(e),n=t.matches[t.matches.length-1];return _e(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function rT(){return mp("useRouteId")}function sT(){var i;let e=k.useContext(dp),t=iT("useRouteError"),n=mp("useRouteError");return e!==void 0?e:(i=t.errors)==null?void 0:i[n]}function oT(){let{router:e}=nT("useNavigate"),t=mp("useNavigate"),n=k.useRef(!1);return _x(()=>{n.current=!0}),k.useCallback(async(a,r={})=>{li(n.current,gx),n.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...r}))},[e,t])}var hg={};function xx(e,t,n){!t&&!hg[e]&&(hg[e]=!0,li(!1,n))}k.memo(lT);function lT({routes:e,future:t,state:n}){return vx(e,void 0,n,t)}function wh(e){_e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function uT({basename:e="/",children:t=null,location:n,navigationType:i="POP",navigator:a,static:r=!1}){_e(!jo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),o=k.useMemo(()=>({basename:s,navigator:a,static:r,future:{}}),[s,a,r]);typeof n=="string"&&(n=Ds(n));let{pathname:l="/",search:u="",hash:f="",state:d=null,key:h="default"}=n,p=k.useMemo(()=>{let v=zi(l,s);return v==null?null:{location:{pathname:v,search:u,hash:f,state:d,key:h},navigationType:i}},[s,l,u,f,d,h,i]);return li(p!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${f}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:k.createElement(fi.Provider,{value:o},k.createElement(Yo.Provider,{children:t,value:p}))}function cT({children:e,location:t}){return KE(Dh(e),t)}function Dh(e,t=[]){let n=[];return k.Children.forEach(e,(i,a)=>{if(!k.isValidElement(i))return;let r=[...t,a];if(i.type===k.Fragment){n.push.apply(n,Dh(i.props.children,r));return}_e(i.type===wh,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_e(!i.props.index||!i.props.children,"An index route cannot have child routes.");let s={id:i.props.id||r.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=Dh(i.props.children,r)),n.push(s)}),n}var eu="get",nu="application/x-www-form-urlencoded";function fc(e){return e!=null&&typeof e.tagName=="string"}function fT(e){return fc(e)&&e.tagName.toLowerCase()==="button"}function hT(e){return fc(e)&&e.tagName.toLowerCase()==="form"}function dT(e){return fc(e)&&e.tagName.toLowerCase()==="input"}function pT(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function mT(e,t){return e.button===0&&(!t||t==="_self")&&!pT(e)}var vl=null;function gT(){if(vl===null)try{new FormData(document.createElement("form"),0),vl=!1}catch{vl=!0}return vl}var _T=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function af(e){return e!=null&&!_T.has(e)?(li(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${nu}"`),null):e}function vT(e,t){let n,i,a,r,s;if(hT(e)){let o=e.getAttribute("action");i=o?zi(o,t):null,n=e.getAttribute("method")||eu,a=af(e.getAttribute("enctype"))||nu,r=new FormData(e)}else if(fT(e)||dT(e)&&(e.type==="submit"||e.type==="image")){let o=e.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||o.getAttribute("action");if(i=l?zi(l,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||eu,a=af(e.getAttribute("formenctype"))||af(o.getAttribute("enctype"))||nu,r=new FormData(o,e),!gT()){let{name:u,type:f,value:d}=e;if(f==="image"){let h=u?`${u}.`:"";r.append(`${h}x`,"0"),r.append(`${h}y`,"0")}else u&&r.append(u,d)}}else{if(fc(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=eu,i=null,a=nu,s=e}return r&&a==="text/plain"&&(s=r,r=void 0),{action:i,method:n.toLowerCase(),encType:a,formData:r,body:s}}function gp(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function xT(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ST(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function yT(e,t,n){let i=await Promise.all(e.map(async a=>{let r=t.routes[a.route.id];if(r){let s=await xT(r,n);return s.links?s.links():[]}return[]}));return bT(i.flat(1).filter(ST).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function dg(e,t,n,i,a,r){let s=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,o=(l,u)=>{var f;return n[u].pathname!==l.pathname||((f=n[u].route.path)==null?void 0:f.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return r==="assets"?t.filter((l,u)=>s(l,u)||o(l,u)):r==="data"?t.filter((l,u)=>{var d;let f=i.routes[l.route.id];if(!f||!f.hasLoader)return!1;if(s(l,u)||o(l,u))return!0;if(l.route.shouldRevalidate){let h=l.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((d=n[0])==null?void 0:d.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function MT(e,t,{includeHydrateFallback:n}={}){return ET(e.map(i=>{let a=t.routes[i.route.id];if(!a)return[];let r=[a.module];return a.clientActionModule&&(r=r.concat(a.clientActionModule)),a.clientLoaderModule&&(r=r.concat(a.clientLoaderModule)),n&&a.hydrateFallbackModule&&(r=r.concat(a.hydrateFallbackModule)),a.imports&&(r=r.concat(a.imports)),r}).flat(1))}function ET(e){return[...new Set(e)]}function TT(e){let t={},n=Object.keys(e).sort();for(let i of n)t[i]=e[i];return t}function bT(e,t){let n=new Set;return new Set(t),e.reduce((i,a)=>{let r=JSON.stringify(TT(a));return n.has(r)||(n.add(r),i.push({key:r,link:a})),i},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var AT=new Set([100,101,204,205]);function RT(e,t){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname="_root.data":t&&zi(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function Sx(){let e=k.useContext(Us);return gp(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function CT(){let e=k.useContext(cc);return gp(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var _p=k.createContext(void 0);_p.displayName="FrameworkContext";function yx(){let e=k.useContext(_p);return gp(e,"You must render this element inside a <HydratedRouter> element"),e}function wT(e,t){let n=k.useContext(_p),[i,a]=k.useState(!1),[r,s]=k.useState(!1),{onFocus:o,onBlur:l,onMouseEnter:u,onMouseLeave:f,onTouchStart:d}=t,h=k.useRef(null);k.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let x=c=>{c.forEach(_=>{s(_.isIntersecting)})},m=new IntersectionObserver(x,{threshold:.5});return h.current&&m.observe(h.current),()=>{m.disconnect()}}},[e]),k.useEffect(()=>{if(i){let x=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(x)}}},[i]);let p=()=>{a(!0)},v=()=>{a(!1),s(!1)};return n?e!=="intent"?[r,h,{}]:[r,h,{onFocus:Vs(o,p),onBlur:Vs(l,v),onMouseEnter:Vs(u,p),onMouseLeave:Vs(f,v),onTouchStart:Vs(d,p)}]:[!1,h,{}]}function Vs(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function DT({page:e,...t}){let{router:n}=Sx(),i=k.useMemo(()=>ux(n.routes,e,n.basename),[n.routes,e,n.basename]);return i?k.createElement(LT,{page:e,matches:i,...t}):null}function UT(e){let{manifest:t,routeModules:n}=yx(),[i,a]=k.useState([]);return k.useEffect(()=>{let r=!1;return yT(e,t,n).then(s=>{r||a(s)}),()=>{r=!0}},[e,t,n]),i}function LT({page:e,matches:t,...n}){let i=Ra(),{manifest:a,routeModules:r}=yx(),{basename:s}=Sx(),{loaderData:o,matches:l}=CT(),u=k.useMemo(()=>dg(e,t,l,a,i,"data"),[e,t,l,a,i]),f=k.useMemo(()=>dg(e,t,l,a,i,"assets"),[e,t,l,a,i]),d=k.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let v=new Set,x=!1;if(t.forEach(c=>{var g;let _=a.routes[c.route.id];!_||!_.hasLoader||(!u.some(S=>S.route.id===c.route.id)&&c.route.id in o&&((g=r[c.route.id])!=null&&g.shouldRevalidate)||_.hasClientLoader?x=!0:v.add(c.route.id))}),v.size===0)return[];let m=RT(e,s);return x&&v.size>0&&m.searchParams.set("_routes",t.filter(c=>v.has(c.route.id)).map(c=>c.route.id).join(",")),[m.pathname+m.search]},[s,o,i,a,u,t,e,r]),h=k.useMemo(()=>MT(f,a),[f,a]),p=UT(f);return k.createElement(k.Fragment,null,d.map(v=>k.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),h.map(v=>k.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),p.map(({key:v,link:x})=>k.createElement("link",{key:v,...x})))}function NT(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Mx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Mx&&(window.__reactRouterVersion="7.6.0")}catch{}function OT({basename:e,children:t,window:n}){let i=k.useRef();i.current==null&&(i.current=SE({window:n,v5Compat:!0}));let a=i.current,[r,s]=k.useState({action:a.action,location:a.location}),o=k.useCallback(l=>{k.startTransition(()=>s(l))},[s]);return k.useLayoutEffect(()=>a.listen(o),[a,o]),k.createElement(uT,{basename:e,children:t,location:r.location,navigationType:r.action,navigator:a})}var Ex=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Yr=k.forwardRef(function({onClick:t,discover:n="render",prefetch:i="none",relative:a,reloadDocument:r,replace:s,state:o,target:l,to:u,preventScrollReset:f,viewTransition:d,...h},p){let{basename:v}=k.useContext(fi),x=typeof u=="string"&&Ex.test(u),m,c=!1;if(typeof u=="string"&&x&&(m=u,Mx))try{let T=new URL(window.location.href),y=u.startsWith("//")?new URL(T.protocol+u):new URL(u),D=zi(y.pathname,v);y.origin===T.origin&&D!=null?u=D+y.search+y.hash:c=!0}catch{li(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let _=YE(u,{relative:a}),[g,S,C]=wT(i,h),A=BT(u,{replace:s,state:o,target:l,preventScrollReset:f,relative:a,viewTransition:d});function b(T){t&&t(T),T.defaultPrevented||A(T)}let U=k.createElement("a",{...h,...C,href:m||_,onClick:c||r?t:b,ref:NT(p,S),target:l,"data-discover":!x&&n==="render"?"true":void 0});return g&&!x?k.createElement(k.Fragment,null,U,k.createElement(DT,{page:_})):U});Yr.displayName="Link";var PT=k.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:i="",end:a=!1,style:r,to:s,viewTransition:o,children:l,...u},f){let d=Zo(s,{relative:u.relative}),h=Ra(),p=k.useContext(cc),{navigator:v,basename:x}=k.useContext(fi),m=p!=null&&kT(d)&&o===!0,c=v.encodeLocation?v.encodeLocation(d).pathname:d.pathname,_=h.pathname,g=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(_=_.toLowerCase(),g=g?g.toLowerCase():null,c=c.toLowerCase()),g&&x&&(g=zi(g,x)||g);const S=c!=="/"&&c.endsWith("/")?c.length-1:c.length;let C=_===c||!a&&_.startsWith(c)&&_.charAt(S)==="/",A=g!=null&&(g===c||!a&&g.startsWith(c)&&g.charAt(c.length)==="/"),b={isActive:C,isPending:A,isTransitioning:m},U=C?t:void 0,T;typeof i=="function"?T=i(b):T=[i,C?"active":null,A?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let y=typeof r=="function"?r(b):r;return k.createElement(Yr,{...u,"aria-current":U,className:T,ref:f,style:y,to:s,viewTransition:o},typeof l=="function"?l(b):l)});PT.displayName="NavLink";var IT=k.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:i,replace:a,state:r,method:s=eu,action:o,onSubmit:l,relative:u,preventScrollReset:f,viewTransition:d,...h},p)=>{let v=GT(),x=VT(o,{relative:u}),m=s.toLowerCase()==="get"?"get":"post",c=typeof o=="string"&&Ex.test(o),_=g=>{if(l&&l(g),g.defaultPrevented)return;g.preventDefault();let S=g.nativeEvent.submitter,C=(S==null?void 0:S.getAttribute("formmethod"))||s;v(S||g.currentTarget,{fetcherKey:t,method:C,navigate:n,replace:a,state:r,relative:u,preventScrollReset:f,viewTransition:d})};return k.createElement("form",{ref:p,method:m,action:x,onSubmit:i?l:_,...h,"data-discover":!c&&e==="render"?"true":void 0})});IT.displayName="Form";function zT(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Tx(e){let t=k.useContext(Us);return _e(t,zT(e)),t}function BT(e,{target:t,replace:n,state:i,preventScrollReset:a,relative:r,viewTransition:s}={}){let o=jE(),l=Ra(),u=Zo(e,{relative:r});return k.useCallback(f=>{if(mT(f,t)){f.preventDefault();let d=n!==void 0?n:wo(l)===wo(u);o(e,{replace:d,state:i,preventScrollReset:a,relative:r,viewTransition:s})}},[l,o,u,n,i,t,e,a,r,s])}var FT=0,HT=()=>`__${String(++FT)}__`;function GT(){let{router:e}=Tx("useSubmit"),{basename:t}=k.useContext(fi),n=rT();return k.useCallback(async(i,a={})=>{let{action:r,method:s,encType:o,formData:l,body:u}=vT(i,t);if(a.navigate===!1){let f=a.fetcherKey||HT();await e.fetch(f,n,a.action||r,{preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||o,flushSync:a.flushSync})}else await e.navigate(a.action||r,{preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||o,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,n])}function VT(e,{relative:t}={}){let{basename:n}=k.useContext(fi),i=k.useContext(Gi);_e(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),r={...Zo(e||".",{relative:t})},s=Ra();if(e==null){r.search=s.search;let o=new URLSearchParams(r.search),l=o.getAll("index");if(l.some(f=>f==="")){o.delete("index"),l.filter(d=>d).forEach(d=>o.append("index",d));let f=o.toString();r.search=f?`?${f}`:""}}return(!e||e===".")&&a.route.index&&(r.search=r.search?r.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(r.pathname=r.pathname==="/"?n:Li([n,r.pathname])),wo(r)}function kT(e,t={}){let n=k.useContext(mx);_e(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Tx("useViewTransitionState"),a=Zo(e,{relative:t.relative});if(!n.isTransitioning)return!1;let r=zi(n.currentLocation.pathname,i)||n.currentLocation.pathname,s=zi(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Fu(a.pathname,s)!=null||Fu(a.pathname,r)!=null}[...AT];const XT=()=>{const{t:e}=fp(),t=Ra();return St.jsx("nav",{className:"horizontal-bar",id:"home-bar",children:St.jsxs("ul",{className:"button-container",children:[St.jsx("li",{className:`home ${t.pathname==="/"?"active":""}`,children:St.jsx(Yr,{to:"/",children:e("nav.home")})}),St.jsx("li",{className:`projects ${t.pathname==="/projects"?"active":""}`,children:St.jsx(Yr,{to:"/projects",children:e("nav.projects")})}),St.jsx("li",{className:`blog ${t.pathname==="/blog"?"active":""}`,children:St.jsx(Yr,{to:"/blog",children:e("nav.blog")})}),St.jsx("li",{className:`about ${t.pathname==="/about"?"active":""}`,children:St.jsx(Yr,{to:"/about",children:e("nav.about")})})]})})},WT=()=>{const{theme:e,toggleTheme:t}=oE(),{language:n,toggleLanguage:i,t:a}=fp();return St.jsxs("div",{className:"horizontal-bar",children:[St.jsxs("div",{className:"button-container",id:"social-icons",children:[St.jsx("a",{href:"https://www.linkedin.com/in/arthur-wuhrlin",target:"_blank",className:"icon-link",children:St.jsx("img",{src:"/img/linkedin_logo.svg",alt:"LinkedIn",className:"icon"})}),St.jsx("a",{href:"https://github.com/JudasBricot",target:"_blank",className:"icon-link",children:St.jsx("img",{src:"/img/github_logo.svg",alt:"GitHub",className:"icon"})}),St.jsx("a",{href:"mailto:arthur.wuhrlin@nus.edu.sg",target:"_blank",id:"email",className:"icon-link",children:St.jsx("img",{src:"/img/email_logo.svg",alt:"Mail",className:"icon"})})]}),St.jsxs("div",{className:"button-container",id:"controls",children:[St.jsx("button",{id:"theme-toggle",onClick:t,children:a(e==="dark"?"theme.light":"theme.dark")}),St.jsx("button",{id:"language-toggle",onClick:i,children:n.toUpperCase()==="EN"?"FR":"EN"})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vp="166",qT=0,pg=1,YT=2,bx=1,jT=2,yi=3,Ea=0,un=1,ei=2,va=0,as=1,mg=2,gg=3,_g=4,ZT=5,ka=100,KT=101,QT=102,JT=103,$T=104,tb=200,eb=201,nb=202,ib=203,Uh=204,Lh=205,ab=206,rb=207,sb=208,ob=209,lb=210,ub=211,cb=212,fb=213,hb=214,db=0,pb=1,mb=2,Hu=3,gb=4,_b=5,vb=6,xb=7,Ax=0,Sb=1,yb=2,xa=0,Mb=1,Eb=2,Tb=3,bb=4,Ab=5,Rb=6,Cb=7,Rx=300,vs=301,xs=302,Nh=303,Oh=304,hc=306,Ph=1e3,Wa=1001,Ih=1002,In=1003,wb=1004,xl=1005,Wn=1006,rf=1007,qa=1008,Bi=1009,Cx=1010,wx=1011,Do=1012,xp=1013,rr=1014,Ci=1015,Ko=1016,Sp=1017,yp=1018,Ss=1020,Dx=35902,Ux=1021,Lx=1022,qn=1023,Nx=1024,Ox=1025,rs=1026,ys=1027,Px=1028,Mp=1029,Ix=1030,Ep=1031,Tp=1033,iu=33776,au=33777,ru=33778,su=33779,zh=35840,Bh=35841,Fh=35842,Hh=35843,Gh=36196,Vh=37492,kh=37496,Xh=37808,Wh=37809,qh=37810,Yh=37811,jh=37812,Zh=37813,Kh=37814,Qh=37815,Jh=37816,$h=37817,td=37818,ed=37819,nd=37820,id=37821,ou=36492,ad=36494,rd=36495,zx=36283,sd=36284,od=36285,ld=36286,Db=3200,Ub=3201,Lb=0,Nb=1,ra="",Jn="srgb",Ca="srgb-linear",bp="display-p3",dc="display-p3-linear",Gu="linear",ce="srgb",Vu="rec709",ku="p3",pr=7680,vg=519,Ob=512,Pb=513,Ib=514,Bx=515,zb=516,Bb=517,Fb=518,Hb=519,xg=35044,Sg="300 es",wi=2e3,Xu=2001;class Ls{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sf=Math.PI/180,ud=180/Math.PI;function Qo(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ze[e&255]+Ze[e>>8&255]+Ze[e>>16&255]+Ze[e>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[n&63|128]+Ze[n>>8&255]+"-"+Ze[n>>16&255]+Ze[n>>24&255]+Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]).toLowerCase()}function ln(e,t,n){return Math.max(t,Math.min(n,e))}function Gb(e,t){return(e%t+t)%t}function of(e,t,n){return(1-n)*e+n*t}function ks(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function an(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(t=0,n=0){Lt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(ln(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-t.x,s=this.y-t.y;return this.x=r*i-s*a+t.x,this.y=r*a+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(t,n,i,a,r,s,o,l,u){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,u)}set(t,n,i,a,r,s,o,l,u){const f=this.elements;return f[0]=t,f[1]=a,f[2]=o,f[3]=n,f[4]=r,f[5]=l,f[6]=i,f[7]=s,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],u=i[1],f=i[4],d=i[7],h=i[2],p=i[5],v=i[8],x=a[0],m=a[3],c=a[6],_=a[1],g=a[4],S=a[7],C=a[2],A=a[5],b=a[8];return r[0]=s*x+o*_+l*C,r[3]=s*m+o*g+l*A,r[6]=s*c+o*S+l*b,r[1]=u*x+f*_+d*C,r[4]=u*m+f*g+d*A,r[7]=u*c+f*S+d*b,r[2]=h*x+p*_+v*C,r[5]=h*m+p*g+v*A,r[8]=h*c+p*S+v*b,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],u=t[7],f=t[8];return n*s*f-n*o*u-i*r*f+i*o*l+a*r*u-a*s*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],u=t[7],f=t[8],d=f*s-o*u,h=o*l-f*r,p=u*r-s*l,v=n*d+i*h+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=d*x,t[1]=(a*u-f*i)*x,t[2]=(o*i-a*s)*x,t[3]=h*x,t[4]=(f*n-a*l)*x,t[5]=(a*r-o*n)*x,t[6]=p*x,t[7]=(i*l-u*n)*x,t[8]=(s*n-i*r)*x,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,r,s,o){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*s+u*o)+s+t,-a*u,a*l,-a*(-u*s+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(lf.makeScale(t,n)),this}rotate(t){return this.premultiply(lf.makeRotation(-t)),this}translate(t,n){return this.premultiply(lf.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const lf=new Pt;function Fx(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Wu(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Vb(){const e=Wu("canvas");return e.style.display="block",e}const yg={};function Hx(e){e in yg||(yg[e]=!0,console.warn(e))}function kb(e,t,n){return new Promise(function(i,a){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const Mg=new Pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Eg=new Pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sl={[Ca]:{transfer:Gu,primaries:Vu,toReference:e=>e,fromReference:e=>e},[Jn]:{transfer:ce,primaries:Vu,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[dc]:{transfer:Gu,primaries:ku,toReference:e=>e.applyMatrix3(Eg),fromReference:e=>e.applyMatrix3(Mg)},[bp]:{transfer:ce,primaries:ku,toReference:e=>e.convertSRGBToLinear().applyMatrix3(Eg),fromReference:e=>e.applyMatrix3(Mg).convertLinearToSRGB()}},Xb=new Set([Ca,dc]),ne={enabled:!0,_workingColorSpace:Ca,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!Xb.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;const i=Sl[t].toReference,a=Sl[n].fromReference;return a(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Sl[e].primaries},getTransfer:function(e){return e===ra?Gu:Sl[e].transfer}};function ss(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function uf(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let mr;class Wb{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{mr===void 0&&(mr=Wu("canvas")),mr.width=t.width,mr.height=t.height;const i=mr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=mr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Wu("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=ss(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ss(n[i]/255)*255):n[i]=ss(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qb=0;class Gx{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qb++}),this.uuid=Qo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(cf(a[s].image)):r.push(cf(a[s]))}else r=cf(a);i.url=r}return n||(t.images[this.uuid]=i),i}}function cf(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Wb.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yb=0;class cn extends Ls{constructor(t=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=Wa,a=Wa,r=Wn,s=qa,o=qn,l=Bi,u=cn.DEFAULT_ANISOTROPY,f=ra){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=Qo(),this.name="",this.source=new Gx(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ph:t.x=t.x-Math.floor(t.x);break;case Wa:t.x=t.x<0?0:1;break;case Ih:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ph:t.y=t.y-Math.floor(t.y);break;case Wa:t.y=t.y<0?0:1;break;case Ih:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Rx;cn.DEFAULT_ANISOTROPY=1;class Ge{constructor(t=0,n=0,i=0,a=1){Ge.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,r;const l=t.elements,u=l[0],f=l[4],d=l[8],h=l[1],p=l[5],v=l[9],x=l[2],m=l[6],c=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,S=(p+1)/2,C=(c+1)/2,A=(f+h)/4,b=(d+x)/4,U=(v+m)/4;return g>S&&g>C?g<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(g),a=A/i,r=b/i):S>C?S<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(S),i=A/a,r=U/a):C<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(C),i=b/r,a=U/r),this.set(i,a,r,n),this}let _=Math.sqrt((m-v)*(m-v)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(d-x)/_,this.z=(h-f)/_,this.w=Math.acos((u+p+c-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jb extends Ls{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Ge(0,0,t,n),this.scissorTest=!1,this.viewport=new Ge(0,0,t,n);const a={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new cn(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,a=t.textures.length;i<a;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new Gx(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sr extends jb{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class Vx extends cn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=In,this.minFilter=In,this.wrapR=Wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zb extends cn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=In,this.minFilter=In,this.wrapR=Wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jo{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,r,s,o){let l=i[a+0],u=i[a+1],f=i[a+2],d=i[a+3];const h=r[s+0],p=r[s+1],v=r[s+2],x=r[s+3];if(o===0){t[n+0]=l,t[n+1]=u,t[n+2]=f,t[n+3]=d;return}if(o===1){t[n+0]=h,t[n+1]=p,t[n+2]=v,t[n+3]=x;return}if(d!==x||l!==h||u!==p||f!==v){let m=1-o;const c=l*h+u*p+f*v+d*x,_=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const C=Math.sqrt(g),A=Math.atan2(C,c*_);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}const S=o*_;if(l=l*m+h*S,u=u*m+p*S,f=f*m+v*S,d=d*m+x*S,m===1-o){const C=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=C,u*=C,f*=C,d*=C}}t[n]=l,t[n+1]=u,t[n+2]=f,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,a,r,s){const o=i[a],l=i[a+1],u=i[a+2],f=i[a+3],d=r[s],h=r[s+1],p=r[s+2],v=r[s+3];return t[n]=o*v+f*d+l*p-u*h,t[n+1]=l*v+f*h+u*d-o*p,t[n+2]=u*v+f*p+o*h-l*d,t[n+3]=f*v-o*d-l*h-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,l=Math.sin,u=o(i/2),f=o(a/2),d=o(r/2),h=l(i/2),p=l(a/2),v=l(r/2);switch(s){case"XYZ":this._x=h*f*d+u*p*v,this._y=u*p*d-h*f*v,this._z=u*f*v+h*p*d,this._w=u*f*d-h*p*v;break;case"YXZ":this._x=h*f*d+u*p*v,this._y=u*p*d-h*f*v,this._z=u*f*v-h*p*d,this._w=u*f*d+h*p*v;break;case"ZXY":this._x=h*f*d-u*p*v,this._y=u*p*d+h*f*v,this._z=u*f*v+h*p*d,this._w=u*f*d-h*p*v;break;case"ZYX":this._x=h*f*d-u*p*v,this._y=u*p*d+h*f*v,this._z=u*f*v-h*p*d,this._w=u*f*d+h*p*v;break;case"YZX":this._x=h*f*d+u*p*v,this._y=u*p*d+h*f*v,this._z=u*f*v-h*p*d,this._w=u*f*d-h*p*v;break;case"XZY":this._x=h*f*d-u*p*v,this._y=u*p*d-h*f*v,this._z=u*f*v+h*p*d,this._w=u*f*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],u=n[2],f=n[6],d=n[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(r-u)*p,this._z=(s-a)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(f-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+u)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-u)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(s-a)/p,this._x=(r+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ln(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,r=t._z,s=t._w,o=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+s*o+a*u-r*l,this._y=a*f+s*l+r*o-i*u,this._z=r*f+s*u+i*l-a*o,this._w=s*f-i*o-a*l-r*u,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,a=this._y,r=this._z,s=this._w;let o=s*t._w+i*t._x+a*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=i,this._y=a,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*a+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,o),d=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=s*d+this._w*h,this._x=i*d+this._x*h,this._y=a*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,n=0,i=0){F.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Tg.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Tg.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=t.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,r=t.x,s=t.y,o=t.z,l=t.w,u=2*(s*a-o*i),f=2*(o*n-r*a),d=2*(r*i-s*n);return this.x=n+l*u+s*d-o*f,this.y=i+l*f+o*u-r*d,this.z=a+l*d+r*f-s*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,r=t.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ff.copy(this).projectOnVector(t),this.sub(ff)}reflect(t){return this.sub(ff.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(ln(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ff=new F,Tg=new Jo;class $o{constructor(t=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,Hn):Hn.fromBufferAttribute(r,s),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yl.copy(i.boundingBox)),yl.applyMatrix4(t.matrixWorld),this.union(yl)}const a=t.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xs),Ml.subVectors(this.max,Xs),gr.subVectors(t.a,Xs),_r.subVectors(t.b,Xs),vr.subVectors(t.c,Xs),Wi.subVectors(_r,gr),qi.subVectors(vr,_r),La.subVectors(gr,vr);let n=[0,-Wi.z,Wi.y,0,-qi.z,qi.y,0,-La.z,La.y,Wi.z,0,-Wi.x,qi.z,0,-qi.x,La.z,0,-La.x,-Wi.y,Wi.x,0,-qi.y,qi.x,0,-La.y,La.x,0];return!hf(n,gr,_r,vr,Ml)||(n=[1,0,0,0,1,0,0,0,1],!hf(n,gr,_r,vr,Ml))?!1:(El.crossVectors(Wi,qi),n=[El.x,El.y,El.z],hf(n,gr,_r,vr,Ml))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gi=[new F,new F,new F,new F,new F,new F,new F,new F],Hn=new F,yl=new $o,gr=new F,_r=new F,vr=new F,Wi=new F,qi=new F,La=new F,Xs=new F,Ml=new F,El=new F,Na=new F;function hf(e,t,n,i,a){for(let r=0,s=e.length-3;r<=s;r+=3){Na.fromArray(e,r);const o=a.x*Math.abs(Na.x)+a.y*Math.abs(Na.y)+a.z*Math.abs(Na.z),l=t.dot(Na),u=n.dot(Na),f=i.dot(Na);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>o)return!1}return!0}const Kb=new $o,Ws=new F,df=new F;class Ap{constructor(t=new F,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):Kb.setFromPoints(t).getCenter(i);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);const n=Ws.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Ws,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(df.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(df)),this.expandByPoint(Ws.copy(t.center).sub(df))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new F,pf=new F,Tl=new F,Yi=new F,mf=new F,bl=new F,gf=new F;class Qb{constructor(t=new F,n=new F(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=_i.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,n),_i.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){pf.copy(t).add(n).multiplyScalar(.5),Tl.copy(n).sub(t).normalize(),Yi.copy(this.origin).sub(pf);const r=t.distanceTo(n)*.5,s=-this.direction.dot(Tl),o=Yi.dot(this.direction),l=-Yi.dot(Tl),u=Yi.lengthSq(),f=Math.abs(1-s*s);let d,h,p,v;if(f>0)if(d=s*l-o,h=s*o-l,v=r*f,d>=0)if(h>=-v)if(h<=v){const x=1/f;d*=x,h*=x,p=d*(d+s*h+2*o)+h*(s*d+h+2*l)+u}else h=r,d=Math.max(0,-(s*h+o)),p=-d*d+h*(h+2*l)+u;else h=-r,d=Math.max(0,-(s*h+o)),p=-d*d+h*(h+2*l)+u;else h<=-v?(d=Math.max(0,-(-s*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+u):h<=v?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+u):(d=Math.max(0,-(s*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+u);else h=s>0?-r:r,d=Math.max(0,-(s*h+o)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(pf).addScaledVector(Tl,h),p}intersectSphere(t,n){_i.subVectors(t.center,this.origin);const i=_i.dot(this.direction),a=_i.dot(_i)-i*i,r=t.radius*t.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,r,s,o,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(t.min.x-h.x)*u,a=(t.max.x-h.x)*u):(i=(t.max.x-h.x)*u,a=(t.min.x-h.x)*u),f>=0?(r=(t.min.y-h.y)*f,s=(t.max.y-h.y)*f):(r=(t.max.y-h.y)*f,s=(t.min.y-h.y)*f),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,n,i,a,r){mf.subVectors(n,t),bl.subVectors(i,t),gf.crossVectors(mf,bl);let s=this.direction.dot(gf),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Yi.subVectors(this.origin,t);const l=o*this.direction.dot(bl.crossVectors(Yi,bl));if(l<0)return null;const u=o*this.direction.dot(mf.cross(Yi));if(u<0||l+u>s)return null;const f=-o*Yi.dot(gf);return f<0?null:this.at(f/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oe{constructor(t,n,i,a,r,s,o,l,u,f,d,h,p,v,x,m){Oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,u,f,d,h,p,v,x,m)}set(t,n,i,a,r,s,o,l,u,f,d,h,p,v,x,m){const c=this.elements;return c[0]=t,c[4]=n,c[8]=i,c[12]=a,c[1]=r,c[5]=s,c[9]=o,c[13]=l,c[2]=u,c[6]=f,c[10]=d,c[14]=h,c[3]=p,c[7]=v,c[11]=x,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,a=1/xr.setFromMatrixColumn(t,0).length(),r=1/xr.setFromMatrixColumn(t,1).length(),s=1/xr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,r=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),u=Math.sin(a),f=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=s*f,p=s*d,v=o*f,x=o*d;n[0]=l*f,n[4]=-l*d,n[8]=u,n[1]=p+v*u,n[5]=h-x*u,n[9]=-o*l,n[2]=x-h*u,n[6]=v+p*u,n[10]=s*l}else if(t.order==="YXZ"){const h=l*f,p=l*d,v=u*f,x=u*d;n[0]=h+x*o,n[4]=v*o-p,n[8]=s*u,n[1]=s*d,n[5]=s*f,n[9]=-o,n[2]=p*o-v,n[6]=x+h*o,n[10]=s*l}else if(t.order==="ZXY"){const h=l*f,p=l*d,v=u*f,x=u*d;n[0]=h-x*o,n[4]=-s*d,n[8]=v+p*o,n[1]=p+v*o,n[5]=s*f,n[9]=x-h*o,n[2]=-s*u,n[6]=o,n[10]=s*l}else if(t.order==="ZYX"){const h=s*f,p=s*d,v=o*f,x=o*d;n[0]=l*f,n[4]=v*u-p,n[8]=h*u+x,n[1]=l*d,n[5]=x*u+h,n[9]=p*u-v,n[2]=-u,n[6]=o*l,n[10]=s*l}else if(t.order==="YZX"){const h=s*l,p=s*u,v=o*l,x=o*u;n[0]=l*f,n[4]=x-h*d,n[8]=v*d+p,n[1]=d,n[5]=s*f,n[9]=-o*f,n[2]=-u*f,n[6]=p*d+v,n[10]=h-x*d}else if(t.order==="XZY"){const h=s*l,p=s*u,v=o*l,x=o*u;n[0]=l*f,n[4]=-d,n[8]=u*f,n[1]=h*d+x,n[5]=s*f,n[9]=p*d-v,n[2]=v*d-p,n[6]=o*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jb,t,$b)}lookAt(t,n,i){const a=this.elements;return _n.subVectors(t,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),ji.crossVectors(i,_n),ji.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),ji.crossVectors(i,_n)),ji.normalize(),Al.crossVectors(_n,ji),a[0]=ji.x,a[4]=Al.x,a[8]=_n.x,a[1]=ji.y,a[5]=Al.y,a[9]=_n.y,a[2]=ji.z,a[6]=Al.z,a[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],u=i[12],f=i[1],d=i[5],h=i[9],p=i[13],v=i[2],x=i[6],m=i[10],c=i[14],_=i[3],g=i[7],S=i[11],C=i[15],A=a[0],b=a[4],U=a[8],T=a[12],y=a[1],D=a[5],X=a[9],V=a[13],K=a[2],j=a[6],N=a[10],H=a[14],I=a[3],et=a[7],st=a[11],pt=a[15];return r[0]=s*A+o*y+l*K+u*I,r[4]=s*b+o*D+l*j+u*et,r[8]=s*U+o*X+l*N+u*st,r[12]=s*T+o*V+l*H+u*pt,r[1]=f*A+d*y+h*K+p*I,r[5]=f*b+d*D+h*j+p*et,r[9]=f*U+d*X+h*N+p*st,r[13]=f*T+d*V+h*H+p*pt,r[2]=v*A+x*y+m*K+c*I,r[6]=v*b+x*D+m*j+c*et,r[10]=v*U+x*X+m*N+c*st,r[14]=v*T+x*V+m*H+c*pt,r[3]=_*A+g*y+S*K+C*I,r[7]=_*b+g*D+S*j+C*et,r[11]=_*U+g*X+S*N+C*st,r[15]=_*T+g*V+S*H+C*pt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],r=t[12],s=t[1],o=t[5],l=t[9],u=t[13],f=t[2],d=t[6],h=t[10],p=t[14],v=t[3],x=t[7],m=t[11],c=t[15];return v*(+r*l*d-a*u*d-r*o*h+i*u*h+a*o*p-i*l*p)+x*(+n*l*p-n*u*h+r*s*h-a*s*p+a*u*f-r*l*f)+m*(+n*u*d-n*o*p-r*s*d+i*s*p+r*o*f-i*u*f)+c*(-a*o*f-n*l*d+n*o*h+a*s*d-i*s*h+i*l*f)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],u=t[7],f=t[8],d=t[9],h=t[10],p=t[11],v=t[12],x=t[13],m=t[14],c=t[15],_=d*m*u-x*h*u+x*l*p-o*m*p-d*l*c+o*h*c,g=v*h*u-f*m*u-v*l*p+s*m*p+f*l*c-s*h*c,S=f*x*u-v*d*u+v*o*p-s*x*p-f*o*c+s*d*c,C=v*d*l-f*x*l-v*o*h+s*x*h+f*o*m-s*d*m,A=n*_+i*g+a*S+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=_*b,t[1]=(x*h*r-d*m*r-x*a*p+i*m*p+d*a*c-i*h*c)*b,t[2]=(o*m*r-x*l*r+x*a*u-i*m*u-o*a*c+i*l*c)*b,t[3]=(d*l*r-o*h*r-d*a*u+i*h*u+o*a*p-i*l*p)*b,t[4]=g*b,t[5]=(f*m*r-v*h*r+v*a*p-n*m*p-f*a*c+n*h*c)*b,t[6]=(v*l*r-s*m*r-v*a*u+n*m*u+s*a*c-n*l*c)*b,t[7]=(s*h*r-f*l*r+f*a*u-n*h*u-s*a*p+n*l*p)*b,t[8]=S*b,t[9]=(v*d*r-f*x*r-v*i*p+n*x*p+f*i*c-n*d*c)*b,t[10]=(s*x*r-v*o*r+v*i*u-n*x*u-s*i*c+n*o*c)*b,t[11]=(f*o*r-s*d*r-f*i*u+n*d*u+s*i*p-n*o*p)*b,t[12]=C*b,t[13]=(f*x*a-v*d*a+v*i*h-n*x*h-f*i*m+n*d*m)*b,t[14]=(v*o*a-s*x*a-v*i*l+n*x*l+s*i*m-n*o*m)*b,t[15]=(s*d*a-f*o*a+f*i*l-n*d*l-s*i*h+n*o*h)*b,this}scale(t){const n=this.elements,i=t.x,a=t.y,r=t.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=t.x,o=t.y,l=t.z,u=r*s,f=r*o;return this.set(u*s+i,u*o-a*l,u*l+a*o,0,u*o+a*l,f*o+i,f*l-a*s,0,u*l-a*o,f*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,r,s){return this.set(1,i,r,0,t,1,s,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,u=r+r,f=s+s,d=o+o,h=r*u,p=r*f,v=r*d,x=s*f,m=s*d,c=o*d,_=l*u,g=l*f,S=l*d,C=i.x,A=i.y,b=i.z;return a[0]=(1-(x+c))*C,a[1]=(p+S)*C,a[2]=(v-g)*C,a[3]=0,a[4]=(p-S)*A,a[5]=(1-(h+c))*A,a[6]=(m+_)*A,a[7]=0,a[8]=(v+g)*b,a[9]=(m-_)*b,a[10]=(1-(h+x))*b,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;let r=xr.set(a[0],a[1],a[2]).length();const s=xr.set(a[4],a[5],a[6]).length(),o=xr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],Gn.copy(this);const u=1/r,f=1/s,d=1/o;return Gn.elements[0]*=u,Gn.elements[1]*=u,Gn.elements[2]*=u,Gn.elements[4]*=f,Gn.elements[5]*=f,Gn.elements[6]*=f,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,n.setFromRotationMatrix(Gn),i.x=r,i.y=s,i.z=o,this}makePerspective(t,n,i,a,r,s,o=wi){const l=this.elements,u=2*r/(n-t),f=2*r/(i-a),d=(n+t)/(n-t),h=(i+a)/(i-a);let p,v;if(o===wi)p=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(o===Xu)p=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,a,r,s,o=wi){const l=this.elements,u=1/(n-t),f=1/(i-a),d=1/(s-r),h=(n+t)*u,p=(i+a)*f;let v,x;if(o===wi)v=(s+r)*d,x=-2*d;else if(o===Xu)v=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const xr=new F,Gn=new Oe,Jb=new F(0,0,0),$b=new F(1,1,1),ji=new F,Al=new F,_n=new F,bg=new Oe,Ag=new Jo;class Fi{constructor(t=0,n=0,i=0,a=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,r=a[0],s=a[4],o=a[8],l=a[1],u=a[5],f=a[9],d=a[2],h=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ln(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ln(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return bg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bg,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Ag.setFromEuler(this),this.setFromQuaternion(Ag,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class kx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tA=0;const Rg=new F,Sr=new Jo,vi=new Oe,Rl=new F,qs=new F,eA=new F,nA=new Jo,Cg=new F(1,0,0),wg=new F(0,1,0),Dg=new F(0,0,1),Ug={type:"added"},iA={type:"removed"},yr={type:"childadded",child:null},_f={type:"childremoved",child:null};class bn extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tA++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const t=new F,n=new Fi,i=new Jo,a=new F(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Pt}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Sr.setFromAxisAngle(t,n),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(t,n){return Sr.setFromAxisAngle(t,n),this.quaternion.premultiply(Sr),this}rotateX(t){return this.rotateOnAxis(Cg,t)}rotateY(t){return this.rotateOnAxis(wg,t)}rotateZ(t){return this.rotateOnAxis(Dg,t)}translateOnAxis(t,n){return Rg.copy(t).applyQuaternion(this.quaternion),this.position.add(Rg.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Cg,t)}translateY(t){return this.translateOnAxis(wg,t)}translateZ(t){return this.translateOnAxis(Dg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Rl.copy(t):Rl.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(qs,Rl,this.up):vi.lookAt(Rl,qs,this.up),this.quaternion.setFromRotationMatrix(vi),a&&(vi.extractRotation(a.matrixWorld),Sr.setFromRotationMatrix(vi),this.quaternion.premultiply(Sr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ug),yr.child=t,this.dispatchEvent(yr),yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(iA),_f.child=t,this.dispatchEvent(_f),_f.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ug),yr.child=t,this.dispatchEvent(yr),yr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(t,n);if(s!==void 0)return s}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,eA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,nA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(t.materials,this.material[l]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(t.animations,l))}}if(n){const o=s(t.geometries),l=s(t.materials),u=s(t.textures),f=s(t.images),d=s(t.shapes),h=s(t.skeletons),p=s(t.animations),v=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=a,i;function s(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}bn.DEFAULT_UP=new F(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new F,xi=new F,vf=new F,Si=new F,Mr=new F,Er=new F,Lg=new F,xf=new F,Sf=new F,yf=new F;class ni{constructor(t=new F,n=new F,i=new F){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),Vn.subVectors(t,n),a.cross(Vn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,n,i,a,r){Vn.subVectors(a,n),xi.subVectors(i,n),vf.subVectors(t,n);const s=Vn.dot(Vn),o=Vn.dot(xi),l=Vn.dot(vf),u=xi.dot(xi),f=xi.dot(vf),d=s*u-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(u*l-o*f)*h,v=(s*f-o*l)*h;return r.set(1-p-v,v,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(t,n,i,a,r,s,o,l){return this.getBarycoord(t,n,i,a,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(s,Si.y),l.addScaledVector(o,Si.z),l)}static isFrontFacing(t,n,i,a){return Vn.subVectors(i,n),xi.subVectors(t,n),Vn.cross(xi).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Vn.cross(xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ni.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ni.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,r){return ni.getInterpolation(t,this.a,this.b,this.c,n,i,a,r)}containsPoint(t){return ni.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ni.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,r=this.c;let s,o;Mr.subVectors(a,i),Er.subVectors(r,i),xf.subVectors(t,i);const l=Mr.dot(xf),u=Er.dot(xf);if(l<=0&&u<=0)return n.copy(i);Sf.subVectors(t,a);const f=Mr.dot(Sf),d=Er.dot(Sf);if(f>=0&&d<=f)return n.copy(a);const h=l*d-f*u;if(h<=0&&l>=0&&f<=0)return s=l/(l-f),n.copy(i).addScaledVector(Mr,s);yf.subVectors(t,r);const p=Mr.dot(yf),v=Er.dot(yf);if(v>=0&&p<=v)return n.copy(r);const x=p*u-l*v;if(x<=0&&u>=0&&v<=0)return o=u/(u-v),n.copy(i).addScaledVector(Er,o);const m=f*v-p*d;if(m<=0&&d-f>=0&&p-v>=0)return Lg.subVectors(r,a),o=(d-f)/(d-f+(p-v)),n.copy(a).addScaledVector(Lg,o);const c=1/(m+x+h);return s=x*c,o=h*c,n.copy(i).addScaledVector(Mr,s).addScaledVector(Er,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Cl={h:0,s:0,l:0};function Mf(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class ie{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,n),this}setRGB(t,n,i,a=ne.workingColorSpace){return this.r=t,this.g=n,this.b=i,ne.toWorkingColorSpace(this,a),this}setHSL(t,n,i,a=ne.workingColorSpace){if(t=Gb(t,1),n=ln(n,0,1),i=ln(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=Mf(s,r,t+1/3),this.g=Mf(s,r,t),this.b=Mf(s,r,t-1/3)}return ne.toWorkingColorSpace(this,a),this}setStyle(t,n=Jn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Jn){const i=Xx[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}copyLinearToSRGB(t){return this.r=uf(t.r),this.g=uf(t.g),this.b=uf(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Jn){return ne.fromWorkingColorSpace(Ke.copy(this),t),Math.round(ln(Ke.r*255,0,255))*65536+Math.round(ln(Ke.g*255,0,255))*256+Math.round(ln(Ke.b*255,0,255))}getHexString(t=Jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ne.workingColorSpace){ne.fromWorkingColorSpace(Ke.copy(this),n);const i=Ke.r,a=Ke.g,r=Ke.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,u;const f=(o+s)/2;if(o===s)l=0,u=0;else{const d=s-o;switch(u=f<=.5?d/(s+o):d/(2-s-o),s){case i:l=(a-r)/d+(a<r?6:0);break;case a:l=(r-i)/d+2;break;case r:l=(i-a)/d+4;break}l/=6}return t.h=l,t.s=u,t.l=f,t}getRGB(t,n=ne.workingColorSpace){return ne.fromWorkingColorSpace(Ke.copy(this),n),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Jn){ne.fromWorkingColorSpace(Ke.copy(this),t);const n=Ke.r,i=Ke.g,a=Ke.b;return t!==Jn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+n,Zi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Zi),t.getHSL(Cl);const i=of(Zi.h,Cl.h,n),a=of(Zi.s,Cl.s,n),r=of(Zi.l,Cl.l,n);return this.setHSL(i,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new ie;ie.NAMES=Xx;let aA=0;class pc extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aA++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=as,this.side=Ea,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uh,this.blendDst=Lh,this.blendEquation=ka,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=Hu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(i.blending=this.blending),this.side!==Ea&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Uh&&(i.blendSrc=this.blendSrc),this.blendDst!==Lh&&(i.blendDst=this.blendDst),this.blendEquation!==ka&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(t.textures),s=a(t.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Rp extends pc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=Ax,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new F,wl=new Lt;class jn{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=xg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Hx("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wl.fromBufferAttribute(this,n),wl.applyMatrix3(t),this.setXY(n,wl.x,wl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)we.fromBufferAttribute(this,n),we.applyMatrix3(t),this.setXYZ(n,we.x,we.y,we.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)we.fromBufferAttribute(this,n),we.applyMatrix4(t),this.setXYZ(n,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)we.fromBufferAttribute(this,n),we.applyNormalMatrix(t),this.setXYZ(n,we.x,we.y,we.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)we.fromBufferAttribute(this,n),we.transformDirection(t),this.setXYZ(n,we.x,we.y,we.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=ks(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=an(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=ks(n,this.array)),n}setX(t,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=ks(n,this.array)),n}setY(t,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=ks(n,this.array)),n}setZ(t,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=ks(n,this.array)),n}setW(t,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),a=an(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,r){return t*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),a=an(a,this.array),r=an(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xg&&(t.usage=this.usage),t}}class Wx extends jn{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class qx extends jn{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class tr extends jn{constructor(t,n,i){super(new Float32Array(t),n,i)}}let rA=0;const Cn=new Oe,Ef=new bn,Tr=new F,vn=new $o,Ys=new $o,Be=new F;class wa extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rA++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fx(t)?qx:Wx)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Pt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,n,i){return Cn.makeTranslation(t,n,i),this.applyMatrix4(Cn),this}scale(t,n,i){return Cn.makeScale(t,n,i),this.applyMatrix4(Cn),this}lookAt(t){return Ef.lookAt(t),Ef.updateMatrix(),this.applyMatrix4(Ef.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(t){const n=[];for(let i=0,a=t.length;i<a;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new tr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $o);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ap);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(vn.min,Ys.min),vn.expandByPoint(Be),Be.addVectors(vn.max,Ys.max),vn.expandByPoint(Be)):(vn.expandByPoint(Ys.min),vn.expandByPoint(Ys.max))}vn.getCenter(i);let a=0;for(let r=0,s=t.count;r<s;r++)Be.fromBufferAttribute(t,r),a=Math.max(a,i.distanceToSquared(Be));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)Be.fromBufferAttribute(o,u),l&&(Tr.fromBufferAttribute(t,u),Be.add(Tr)),a=Math.max(a,i.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new F,l[U]=new F;const u=new F,f=new F,d=new F,h=new Lt,p=new Lt,v=new Lt,x=new F,m=new F;function c(U,T,y){u.fromBufferAttribute(i,U),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,y),h.fromBufferAttribute(r,U),p.fromBufferAttribute(r,T),v.fromBufferAttribute(r,y),f.sub(u),d.sub(u),p.sub(h),v.sub(h);const D=1/(p.x*v.y-v.x*p.y);isFinite(D)&&(x.copy(f).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-v.x).multiplyScalar(D),o[U].add(x),o[T].add(x),o[y].add(x),l[U].add(m),l[T].add(m),l[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let U=0,T=_.length;U<T;++U){const y=_[U],D=y.start,X=y.count;for(let V=D,K=D+X;V<K;V+=3)c(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const g=new F,S=new F,C=new F,A=new F;function b(U){C.fromBufferAttribute(a,U),A.copy(C);const T=o[U];g.copy(T),g.sub(C.multiplyScalar(C.dot(T))).normalize(),S.crossVectors(A,T);const D=S.dot(l[U])<0?-1:1;s.setXYZW(U,g.x,g.y,g.z,D)}for(let U=0,T=_.length;U<T;++U){const y=_[U],D=y.start,X=y.count;for(let V=D,K=D+X;V<K;V+=3)b(t.getX(V+0)),b(t.getX(V+1)),b(t.getX(V+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const a=new F,r=new F,s=new F,o=new F,l=new F,u=new F,f=new F,d=new F;if(t)for(let h=0,p=t.count;h<p;h+=3){const v=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);a.fromBufferAttribute(n,v),r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,m),f.subVectors(s,r),d.subVectors(a,r),f.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),o.add(f),l.add(f),u.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)a.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),f.subVectors(s,r),d.subVectors(a,r),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Be.fromBufferAttribute(t,n),Be.normalize(),t.setXYZ(n,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,l){const u=o.array,f=o.itemSize,d=o.normalized,h=new u.constructor(l.length*f);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*f;for(let c=0;c<f;c++)h[v++]=u[p++]}return new jn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wa,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],u=t(l,i);n.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const l=[],u=r[o];for(let f=0,d=u.length;f<d;f++){const h=u[f],p=t(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const u=s[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const a={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];f.push(p.toJSON(t.data))}f.length>0&&(a[l]=f,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const a=t.attributes;for(const u in a){const f=a[u];this.setAttribute(u,f.clone(n))}const r=t.morphAttributes;for(const u in r){const f=[],d=r[u];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let u=0,f=s.length;u<f;u++){const d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ng=new Oe,Oa=new Qb,Dl=new Ap,Og=new F,br=new F,Ar=new F,Rr=new F,Tf=new F,Ul=new F,Ll=new Lt,Nl=new Lt,Ol=new Lt,Pg=new F,Ig=new F,zg=new F,Pl=new F,Il=new F;class ai extends bn{constructor(t=new wa,n=new Rp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(r&&o){Ul.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const f=o[l],d=r[l];f!==0&&(Tf.fromBufferAttribute(d,t),s?Ul.addScaledVector(Tf,f):Ul.addScaledVector(Tf.sub(n),f))}n.add(Ul)}return n}raycast(t,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(r),Oa.copy(t.ray).recast(t.near),!(Dl.containsPoint(Oa.origin)===!1&&(Oa.intersectSphere(Dl,Og)===null||Oa.origin.distanceToSquared(Og)>(t.far-t.near)**2))&&(Ng.copy(r).invert(),Oa.copy(t.ray).applyMatrix4(Ng),!(i.boundingBox!==null&&Oa.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Oa)))}_computeIntersections(t,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,u=r.attributes.uv,f=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,x=h.length;v<x;v++){const m=h[v],c=s[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,C=g;S<C;S+=3){const A=o.getX(S),b=o.getX(S+1),U=o.getX(S+2);a=zl(this,c,t,i,u,f,d,A,b,U),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=v,c=x;m<c;m+=3){const _=o.getX(m),g=o.getX(m+1),S=o.getX(m+2);a=zl(this,s,t,i,u,f,d,_,g,S),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,x=h.length;v<x;v++){const m=h[v],c=s[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,C=g;S<C;S+=3){const A=S,b=S+1,U=S+2;a=zl(this,c,t,i,u,f,d,A,b,U),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,c=x;m<c;m+=3){const _=m,g=m+1,S=m+2;a=zl(this,s,t,i,u,f,d,_,g,S),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function sA(e,t,n,i,a,r,s,o){let l;if(t.side===un?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,t.side===Ea,o),l===null)return null;Il.copy(o),Il.applyMatrix4(e.matrixWorld);const u=n.ray.origin.distanceTo(Il);return u<n.near||u>n.far?null:{distance:u,point:Il.clone(),object:e}}function zl(e,t,n,i,a,r,s,o,l,u){e.getVertexPosition(o,br),e.getVertexPosition(l,Ar),e.getVertexPosition(u,Rr);const f=sA(e,t,n,i,br,Ar,Rr,Pl);if(f){a&&(Ll.fromBufferAttribute(a,o),Nl.fromBufferAttribute(a,l),Ol.fromBufferAttribute(a,u),f.uv=ni.getInterpolation(Pl,br,Ar,Rr,Ll,Nl,Ol,new Lt)),r&&(Ll.fromBufferAttribute(r,o),Nl.fromBufferAttribute(r,l),Ol.fromBufferAttribute(r,u),f.uv1=ni.getInterpolation(Pl,br,Ar,Rr,Ll,Nl,Ol,new Lt)),s&&(Pg.fromBufferAttribute(s,o),Ig.fromBufferAttribute(s,l),zg.fromBufferAttribute(s,u),f.normal=ni.getInterpolation(Pl,br,Ar,Rr,Pg,Ig,zg,new F),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c:u,normal:new F,materialIndex:0};ni.getNormal(br,Ar,Rr,d.normal),f.face=d}return f}class tl extends wa{constructor(t=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],u=[],f=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,t,s,r,0),v("z","y","x",1,-1,i,n,-t,s,r,1),v("x","z","y",1,1,t,i,n,a,s,2),v("x","z","y",1,-1,t,i,-n,a,s,3),v("x","y","z",1,-1,t,n,i,a,r,4),v("x","y","z",-1,-1,t,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new tr(u,3)),this.setAttribute("normal",new tr(f,3)),this.setAttribute("uv",new tr(d,2));function v(x,m,c,_,g,S,C,A,b,U,T){const y=S/b,D=C/U,X=S/2,V=C/2,K=A/2,j=b+1,N=U+1;let H=0,I=0;const et=new F;for(let st=0;st<N;st++){const pt=st*D-V;for(let zt=0;zt<j;zt++){const Yt=zt*y-X;et[x]=Yt*_,et[m]=pt*g,et[c]=K,u.push(et.x,et.y,et.z),et[x]=0,et[m]=0,et[c]=A>0?1:-1,f.push(et.x,et.y,et.z),d.push(zt/b),d.push(1-st/U),H+=1}}for(let st=0;st<U;st++)for(let pt=0;pt<b;pt++){const zt=h+pt+j*st,Yt=h+pt+j*(st+1),W=h+(pt+1)+j*(st+1),$=h+(pt+1)+j*st;l.push(zt,Yt,$),l.push(Yt,W,$),I+=6}o.addGroup(p,I,T),p+=I,h+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ms(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone():Array.isArray(a)?t[n][i]=a.slice():t[n][i]=a}}return t}function $e(e){const t={};for(let n=0;n<e.length;n++){const i=Ms(e[n]);for(const a in i)t[a]=i[a]}return t}function oA(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Yx(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const lA={clone:Ms,merge:$e};var uA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ta extends pc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uA,this.fragmentShader=cA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=oA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class jx extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=wi}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new F,Bg=new Lt,Fg=new Lt;class Xn extends jx{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=ud*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ud*2*Math.atan(Math.tan(sf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z)}getViewSize(t,n){return this.getViewBounds(t,Bg,Fg),n.subVectors(Fg,Bg)}setViewOffset(t,n,i,a,r,s){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(sf*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/u,a*=s.width/l,i*=s.height/u}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Cr=-90,wr=1;class fA extends bn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Xn(Cr,wr,t,n);a.layers=this.layers,this.add(a);const r=new Xn(Cr,wr,t,n);r.layers=this.layers,this.add(r);const s=new Xn(Cr,wr,t,n);s.layers=this.layers,this.add(s);const o=new Xn(Cr,wr,t,n);o.layers=this.layers,this.add(o);const l=new Xn(Cr,wr,t,n);l.layers=this.layers,this.add(l);const u=new Xn(Cr,wr,t,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const u of n)this.remove(u);if(t===wi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xu)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of n)this.add(u),u.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,u,f]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(n,r),t.setRenderTarget(i,1,a),t.render(n,s),t.setRenderTarget(i,2,a),t.render(n,o),t.setRenderTarget(i,3,a),t.render(n,l),t.setRenderTarget(i,4,a),t.render(n,u),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,a),t.render(n,f),t.setRenderTarget(d,h,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Zx extends cn{constructor(t,n,i,a,r,s,o,l,u,f){t=t!==void 0?t:[],n=n!==void 0?n:vs,super(t,n,i,a,r,s,o,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hA extends sr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new Zx(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Wn}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new tl(5,5,5),r=new Ta({name:"CubemapFromEquirect",uniforms:Ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:va});r.uniforms.tEquirect.value=n;const s=new ai(a,r),o=n.minFilter;return n.minFilter===qa&&(n.minFilter=Wn),new fA(1,10,this).update(t,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,n,i,a){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(n,i,a);t.setRenderTarget(r)}}const bf=new F,dA=new F,pA=new Pt;class Ga{constructor(t=new F(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=bf.subVectors(i,n).cross(dA.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(bf),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||pA.getNormalMatrix(t),a=this.coplanarPoint(bf).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pa=new Ap,Bl=new F;class Kx{constructor(t=new Ga,n=new Ga,i=new Ga,a=new Ga,r=new Ga,s=new Ga){this.planes=[t,n,i,a,r,s]}set(t,n,i,a,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=wi){const i=this.planes,a=t.elements,r=a[0],s=a[1],o=a[2],l=a[3],u=a[4],f=a[5],d=a[6],h=a[7],p=a[8],v=a[9],x=a[10],m=a[11],c=a[12],_=a[13],g=a[14],S=a[15];if(i[0].setComponents(l-r,h-u,m-p,S-c).normalize(),i[1].setComponents(l+r,h+u,m+p,S+c).normalize(),i[2].setComponents(l+s,h+f,m+v,S+_).normalize(),i[3].setComponents(l-s,h-f,m-v,S-_).normalize(),i[4].setComponents(l-o,h-d,m-x,S-g).normalize(),n===wi)i[5].setComponents(l+o,h+d,m+x,S+g).normalize();else if(n===Xu)i[5].setComponents(o,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pa.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pa)}intersectsSprite(t){return Pa.center.set(0,0,0),Pa.radius=.7071067811865476,Pa.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pa)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Bl.x=a.normal.x>0?t.max.x:t.min.x,Bl.y=a.normal.y>0?t.max.y:t.min.y,Bl.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Bl)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qx(){let e=null,t=!1,n=null,i=null;function a(r,s){n(r,s),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function mA(e){const t=new WeakMap;function n(o,l){const u=o.array,f=o.usage,d=u.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,u,f),o.onUploadCallback();let p;if(u instanceof Float32Array)p=e.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=e.SHORT;else if(u instanceof Uint32Array)p=e.UNSIGNED_INT;else if(u instanceof Int32Array)p=e.INT;else if(u instanceof Int8Array)p=e.BYTE;else if(u instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,u){const f=l.array,d=l._updateRange,h=l.updateRanges;if(e.bindBuffer(u,o),d.count===-1&&h.length===0&&e.bufferSubData(u,0,f),h.length!==0){for(let p=0,v=h.length;p<v;p++){const x=h[p];e.bufferSubData(u,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}d.count!==-1&&(e.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count),d.count=-1),l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isGLBufferAttribute){const f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const u=t.get(o);if(u===void 0)t.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:a,remove:r,update:s}}class mc extends wa{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const r=t/2,s=n/2,o=Math.floor(i),l=Math.floor(a),u=o+1,f=l+1,d=t/o,h=n/l,p=[],v=[],x=[],m=[];for(let c=0;c<f;c++){const _=c*h-s;for(let g=0;g<u;g++){const S=g*d-r;v.push(S,-_,0),x.push(0,0,1),m.push(g/o),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let _=0;_<o;_++){const g=_+u*c,S=_+u*(c+1),C=_+1+u*(c+1),A=_+1+u*c;p.push(g,S,A),p.push(S,C,A)}this.setIndex(p),this.setAttribute("position",new tr(v,3)),this.setAttribute("normal",new tr(x,3)),this.setAttribute("uv",new tr(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mc(t.width,t.height,t.widthSegments,t.heightSegments)}}var gA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_A=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,MA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,EA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,DA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,UA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,LA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,FA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,HA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,GA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,VA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qA="gl_FragColor = linearToOutputTexel( gl_FragColor );",YA=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,jA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ZA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,KA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,QA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$A=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,a1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,l1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,u1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,p1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,m1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,g1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,b1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,L1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,O1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,P1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,F1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,W1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,J1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,iR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_R=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,MR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ER=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,TR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,DR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,OR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,HR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,XR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,YR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:gA,alphahash_pars_fragment:_A,alphamap_fragment:vA,alphamap_pars_fragment:xA,alphatest_fragment:SA,alphatest_pars_fragment:yA,aomap_fragment:MA,aomap_pars_fragment:EA,batching_pars_vertex:TA,batching_vertex:bA,begin_vertex:AA,beginnormal_vertex:RA,bsdfs:CA,iridescence_fragment:wA,bumpmap_pars_fragment:DA,clipping_planes_fragment:UA,clipping_planes_pars_fragment:LA,clipping_planes_pars_vertex:NA,clipping_planes_vertex:OA,color_fragment:PA,color_pars_fragment:IA,color_pars_vertex:zA,color_vertex:BA,common:FA,cube_uv_reflection_fragment:HA,defaultnormal_vertex:GA,displacementmap_pars_vertex:VA,displacementmap_vertex:kA,emissivemap_fragment:XA,emissivemap_pars_fragment:WA,colorspace_fragment:qA,colorspace_pars_fragment:YA,envmap_fragment:jA,envmap_common_pars_fragment:ZA,envmap_pars_fragment:KA,envmap_pars_vertex:QA,envmap_physical_pars_fragment:l1,envmap_vertex:JA,fog_vertex:$A,fog_pars_vertex:t1,fog_fragment:e1,fog_pars_fragment:n1,gradientmap_pars_fragment:i1,lightmap_pars_fragment:a1,lights_lambert_fragment:r1,lights_lambert_pars_fragment:s1,lights_pars_begin:o1,lights_toon_fragment:u1,lights_toon_pars_fragment:c1,lights_phong_fragment:f1,lights_phong_pars_fragment:h1,lights_physical_fragment:d1,lights_physical_pars_fragment:p1,lights_fragment_begin:m1,lights_fragment_maps:g1,lights_fragment_end:_1,logdepthbuf_fragment:v1,logdepthbuf_pars_fragment:x1,logdepthbuf_pars_vertex:S1,logdepthbuf_vertex:y1,map_fragment:M1,map_pars_fragment:E1,map_particle_fragment:T1,map_particle_pars_fragment:b1,metalnessmap_fragment:A1,metalnessmap_pars_fragment:R1,morphinstance_vertex:C1,morphcolor_vertex:w1,morphnormal_vertex:D1,morphtarget_pars_vertex:U1,morphtarget_vertex:L1,normal_fragment_begin:N1,normal_fragment_maps:O1,normal_pars_fragment:P1,normal_pars_vertex:I1,normal_vertex:z1,normalmap_pars_fragment:B1,clearcoat_normal_fragment_begin:F1,clearcoat_normal_fragment_maps:H1,clearcoat_pars_fragment:G1,iridescence_pars_fragment:V1,opaque_fragment:k1,packing:X1,premultiplied_alpha_fragment:W1,project_vertex:q1,dithering_fragment:Y1,dithering_pars_fragment:j1,roughnessmap_fragment:Z1,roughnessmap_pars_fragment:K1,shadowmap_pars_fragment:Q1,shadowmap_pars_vertex:J1,shadowmap_vertex:$1,shadowmask_pars_fragment:tR,skinbase_vertex:eR,skinning_pars_vertex:nR,skinning_vertex:iR,skinnormal_vertex:aR,specularmap_fragment:rR,specularmap_pars_fragment:sR,tonemapping_fragment:oR,tonemapping_pars_fragment:lR,transmission_fragment:uR,transmission_pars_fragment:cR,uv_pars_fragment:fR,uv_pars_vertex:hR,uv_vertex:dR,worldpos_vertex:pR,background_vert:mR,background_frag:gR,backgroundCube_vert:_R,backgroundCube_frag:vR,cube_vert:xR,cube_frag:SR,depth_vert:yR,depth_frag:MR,distanceRGBA_vert:ER,distanceRGBA_frag:TR,equirect_vert:bR,equirect_frag:AR,linedashed_vert:RR,linedashed_frag:CR,meshbasic_vert:wR,meshbasic_frag:DR,meshlambert_vert:UR,meshlambert_frag:LR,meshmatcap_vert:NR,meshmatcap_frag:OR,meshnormal_vert:PR,meshnormal_frag:IR,meshphong_vert:zR,meshphong_frag:BR,meshphysical_vert:FR,meshphysical_frag:HR,meshtoon_vert:GR,meshtoon_frag:VR,points_vert:kR,points_frag:XR,shadow_vert:WR,shadow_frag:qR,sprite_vert:YR,sprite_frag:jR},ot={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},$n={basic:{uniforms:$e([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:$e([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new ie(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:$e([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:$e([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:$e([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new ie(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:$e([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:$e([ot.points,ot.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:$e([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:$e([ot.common,ot.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:$e([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:$e([ot.sprite,ot.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:$e([ot.common,ot.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:$e([ot.lights,ot.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};$n.physical={uniforms:$e([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Fl={r:0,b:0,g:0},Ia=new Fi,ZR=new Oe;function KR(e,t,n,i,a,r,s){const o=new ie(0);let l=r===!0?0:1,u,f,d=null,h=0,p=null;function v(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?n:t).get(g)),g}function x(_){let g=!1;const S=v(_);S===null?c(o,l):S&&S.isColor&&(c(S,1),g=!0);const C=e.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(_,g){const S=v(g);S&&(S.isCubeTexture||S.mapping===hc)?(f===void 0&&(f=new ai(new tl(1,1,1),new Ta({name:"BackgroundCubeMaterial",uniforms:Ms($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(f)),Ia.copy(g.backgroundRotation),Ia.x*=-1,Ia.y*=-1,Ia.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ia.y*=-1,Ia.z*=-1),f.material.uniforms.envMap.value=S,f.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(ZR.makeRotationFromEuler(Ia)),f.material.toneMapped=ne.getTransfer(S.colorSpace)!==ce,(d!==S||h!==S.version||p!==e.toneMapping)&&(f.material.needsUpdate=!0,d=S,h=S.version,p=e.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new ai(new mc(2,2),new Ta({name:"BackgroundMaterial",uniforms:Ms($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ea,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=ne.getTransfer(S.colorSpace)!==ce,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=S,h=S.version,p=e.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function c(_,g){_.getRGB(Fl,Yx(e)),i.buffers.color.setClear(Fl.r,Fl.g,Fl.b,g,s)}return{getClearColor:function(){return o},setClearColor:function(_,g=1){o.set(_),l=g,c(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,c(o,l)},render:x,addToRenderList:m}}function QR(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=h(null);let r=a,s=!1;function o(y,D,X,V,K){let j=!1;const N=d(V,X,D);r!==N&&(r=N,u(r.object)),j=p(y,V,X,K),j&&v(y,V,X,K),K!==null&&t.update(K,e.ELEMENT_ARRAY_BUFFER),(j||s)&&(s=!1,S(y,D,X,V),K!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return e.createVertexArray()}function u(y){return e.bindVertexArray(y)}function f(y){return e.deleteVertexArray(y)}function d(y,D,X){const V=X.wireframe===!0;let K=i[y.id];K===void 0&&(K={},i[y.id]=K);let j=K[D.id];j===void 0&&(j={},K[D.id]=j);let N=j[V];return N===void 0&&(N=h(l()),j[V]=N),N}function h(y){const D=[],X=[],V=[];for(let K=0;K<n;K++)D[K]=0,X[K]=0,V[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:V,object:y,attributes:{},index:null}}function p(y,D,X,V){const K=r.attributes,j=D.attributes;let N=0;const H=X.getAttributes();for(const I in H)if(H[I].location>=0){const st=K[I];let pt=j[I];if(pt===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(pt=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(pt=y.instanceColor)),st===void 0||st.attribute!==pt||pt&&st.data!==pt.data)return!0;N++}return r.attributesNum!==N||r.index!==V}function v(y,D,X,V){const K={},j=D.attributes;let N=0;const H=X.getAttributes();for(const I in H)if(H[I].location>=0){let st=j[I];st===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(st=y.instanceColor));const pt={};pt.attribute=st,st&&st.data&&(pt.data=st.data),K[I]=pt,N++}r.attributes=K,r.attributesNum=N,r.index=V}function x(){const y=r.newAttributes;for(let D=0,X=y.length;D<X;D++)y[D]=0}function m(y){c(y,0)}function c(y,D){const X=r.newAttributes,V=r.enabledAttributes,K=r.attributeDivisors;X[y]=1,V[y]===0&&(e.enableVertexAttribArray(y),V[y]=1),K[y]!==D&&(e.vertexAttribDivisor(y,D),K[y]=D)}function _(){const y=r.newAttributes,D=r.enabledAttributes;for(let X=0,V=D.length;X<V;X++)D[X]!==y[X]&&(e.disableVertexAttribArray(X),D[X]=0)}function g(y,D,X,V,K,j,N){N===!0?e.vertexAttribIPointer(y,D,X,K,j):e.vertexAttribPointer(y,D,X,V,K,j)}function S(y,D,X,V){x();const K=V.attributes,j=X.getAttributes(),N=D.defaultAttributeValues;for(const H in j){const I=j[H];if(I.location>=0){let et=K[H];if(et===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(et=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(et=y.instanceColor)),et!==void 0){const st=et.normalized,pt=et.itemSize,zt=t.get(et);if(zt===void 0)continue;const Yt=zt.buffer,W=zt.type,$=zt.bytesPerElement,mt=W===e.INT||W===e.UNSIGNED_INT||et.gpuType===xp;if(et.isInterleavedBufferAttribute){const ft=et.data,Dt=ft.stride,Ft=et.offset;if(ft.isInstancedInterleavedBuffer){for(let kt=0;kt<I.locationSize;kt++)c(I.location+kt,ft.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let kt=0;kt<I.locationSize;kt++)m(I.location+kt);e.bindBuffer(e.ARRAY_BUFFER,Yt);for(let kt=0;kt<I.locationSize;kt++)g(I.location+kt,pt/I.locationSize,W,st,Dt*$,(Ft+pt/I.locationSize*kt)*$,mt)}else{if(et.isInstancedBufferAttribute){for(let ft=0;ft<I.locationSize;ft++)c(I.location+ft,et.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ft=0;ft<I.locationSize;ft++)m(I.location+ft);e.bindBuffer(e.ARRAY_BUFFER,Yt);for(let ft=0;ft<I.locationSize;ft++)g(I.location+ft,pt/I.locationSize,W,st,pt*$,pt/I.locationSize*ft*$,mt)}}else if(N!==void 0){const st=N[H];if(st!==void 0)switch(st.length){case 2:e.vertexAttrib2fv(I.location,st);break;case 3:e.vertexAttrib3fv(I.location,st);break;case 4:e.vertexAttrib4fv(I.location,st);break;default:e.vertexAttrib1fv(I.location,st)}}}}_()}function C(){U();for(const y in i){const D=i[y];for(const X in D){const V=D[X];for(const K in V)f(V[K].object),delete V[K];delete D[X]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const D=i[y.id];for(const X in D){const V=D[X];for(const K in V)f(V[K].object),delete V[K];delete D[X]}delete i[y.id]}function b(y){for(const D in i){const X=i[D];if(X[y.id]===void 0)continue;const V=X[y.id];for(const K in V)f(V[K].object),delete V[K];delete X[y.id]}}function U(){T(),s=!0,r!==a&&(r=a,u(r.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:U,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function JR(e,t,n){let i;function a(u){i=u}function r(u,f){e.drawArrays(i,u,f),n.update(f,i,1)}function s(u,f,d){d!==0&&(e.drawArraysInstanced(i,u,f,d),n.update(f,i,d))}function o(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,d);let p=0;for(let v=0;v<d;v++)p+=f[v];n.update(p,i,1)}function l(u,f,d,h){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<u.length;v++)s(u[v],f[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,f,0,h,0,d);let v=0;for(let x=0;x<d;x++)v+=f[x];for(let x=0;x<h.length;x++)n.update(v,i,h[x])}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function $R(e,t,n,i){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(A){return!(A!==qn&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const b=A===Ko&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Bi&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ci&&!b)}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const d=n.logarithmicDepthBuffer===!0,h=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),x=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),c=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),g=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,C=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:c,maxVaryings:_,maxFragmentUniforms:g,vertexTextures:S,maxSamples:C}}function tC(e){const t=this;let n=null,i=0,a=!1,r=!1;const s=new Ga,o=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||a;return a=h,i=d.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,c=e.get(d);if(!a||v===null||v.length===0||r&&!m)r?f(null):u();else{const _=r?0:i,g=_*4;let S=c.clippingState||null;l.value=S,S=f(v,h,g,p);for(let C=0;C!==g;++C)S[C]=n[C];c.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(d,h,p,v){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const c=p+x*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<c)&&(m=new Float32Array(c));for(let g=0,S=p;g!==x;++g,S+=4)s.copy(d[g]).applyMatrix4(_,o),s.normal.toArray(m,S),m[S+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function eC(e){let t=new WeakMap;function n(s,o){return o===Nh?s.mapping=vs:o===Oh&&(s.mapping=xs),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Nh||o===Oh)if(t.has(s)){const l=t.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new hA(l.height);return u.fromEquirectangularTexture(e,s),t.set(s,u),s.addEventListener("dispose",a),n(u.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Jx extends jx{constructor(t=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-t,s=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,s=r+u*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const jr=4,Hg=[.125,.215,.35,.446,.526,.582],Xa=20,Af=new Jx,Gg=new ie;let Rf=null,Cf=0,wf=0,Df=!1;const Va=(1+Math.sqrt(5))/2,Dr=1/Va,Vg=[new F(-Va,Dr,0),new F(Va,Dr,0),new F(-Dr,0,Va),new F(Dr,0,Va),new F(0,Va,-Dr),new F(0,Va,Dr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class kg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,a=100){Rf=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,a,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rf,Cf,wf),this._renderer.xr.enabled=Df,t.scissorTest=!1,Hl(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===vs||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rf=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Ko,format:qn,colorSpace:Ca,depthBuffer:!1},a=Xg(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xg(t,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nC(r)),this._blurMaterial=iC(r,t,n)}return a}_compileMaterial(t){const n=new ai(this._lodPlanes[0],t);this._renderer.compile(n,Af)}_sceneToCubeUV(t,n,i,a){const o=new Xn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Gg),f.toneMapping=xa,f.autoClear=!1;const p=new Rp({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),v=new ai(new tl,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Gg),x=!0);for(let c=0;c<6;c++){const _=c%3;_===0?(o.up.set(0,l[c],0),o.lookAt(u[c],0,0)):_===1?(o.up.set(0,0,l[c]),o.lookAt(0,u[c],0)):(o.up.set(0,l[c],0),o.lookAt(0,0,u[c]));const g=this._cubeSize;Hl(a,_*g,c>2?g:0,g,g),f.setRenderTarget(a),x&&f.render(v,o),f.render(t,o)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=h,f.autoClear=d,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===vs||t.mapping===xs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=qg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wg());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new ai(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Hl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Af)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Vg[(a-r-1)%Vg.length];this._blur(t,r-1,r,s,o)}n.autoClear=i}_blur(t,n,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,n,i,a,"latitudinal",r),this._halfBlur(s,t,i,i,a,"longitudinal",r)}_halfBlur(t,n,i,a,r,s,o){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new ai(this._lodPlanes[a],u),h=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Xa-1),x=r/v,m=isFinite(r)?1+Math.floor(f*x):Xa;m>Xa&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xa}`);const c=[];let _=0;for(let b=0;b<Xa;++b){const U=b/x,T=Math.exp(-U*U/2);c.push(T),b===0?_+=T:b<m&&(_+=2*T)}for(let b=0;b<c.length;b++)c[b]=c[b]/_;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=c,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:g}=this;h.dTheta.value=v,h.mipInt.value=g-i;const S=this._sizeLods[a],C=3*S*(a>g-jr?a-g+jr:0),A=4*(this._cubeSize-S);Hl(n,C,A,3*S,2*S),l.setRenderTarget(n),l.render(d,Af)}}function nC(e){const t=[],n=[],i=[];let a=e;const r=e-jr+1+Hg.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);n.push(o);let l=1/o;s>e-jr?l=Hg[s-e+jr-1]:s===0&&(l=0),i.push(l);const u=1/(o-2),f=-u,d=1+u,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,v=6,x=3,m=2,c=1,_=new Float32Array(x*v*p),g=new Float32Array(m*v*p),S=new Float32Array(c*v*p);for(let A=0;A<p;A++){const b=A%3*2/3-1,U=A>2?0:-1,T=[b,U,0,b+2/3,U,0,b+2/3,U+1,0,b,U,0,b+2/3,U+1,0,b,U+1,0];_.set(T,x*v*A),g.set(h,m*v*A);const y=[A,A,A,A,A,A];S.set(y,c*v*A)}const C=new wa;C.setAttribute("position",new jn(_,x)),C.setAttribute("uv",new jn(g,m)),C.setAttribute("faceIndex",new jn(S,c)),t.push(C),a>jr&&a--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Xg(e,t,n){const i=new sr(e,t,n);return i.texture.mapping=hc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hl(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function iC(e,t,n){const i=new Float32Array(Xa),a=new F(0,1,0);return new Ta({name:"SphericalGaussianBlur",defines:{n:Xa,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function Wg(){return new Ta({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function qg(){return new Ta({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function Cp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function aC(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===Nh||l===Oh,f=l===vs||l===xs;if(u||f){let d=t.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new kg(e)),d=u?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return u&&p&&p.height>0||f&&p&&a(p)?(n===null&&(n=new kg(e)),d=u?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function a(o){let l=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&l++;return l===u}function r(o){const l=o.target;l.removeEventListener("dispose",r);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function s(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function rC(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Hx("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function sC(e,t,n,i){const a={},r=new WeakMap;function s(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const v in h.attributes)t.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let m=0,c=x.length;m<c;m++)t.remove(x[m])}h.removeEventListener("dispose",s),delete a[h.id];const p=r.get(h);p&&(t.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return a[h.id]===!0||(h.addEventListener("dispose",s),a[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)t.update(h[v],e.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const x=p[v];for(let m=0,c=x.length;m<c;m++)t.update(x[m],e.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,v=d.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let g=0,S=_.length;g<S;g+=3){const C=_[g+0],A=_[g+1],b=_[g+2];h.push(C,A,A,b,b,C)}}else if(v!==void 0){const _=v.array;x=v.version;for(let g=0,S=_.length/3-1;g<S;g+=3){const C=g+0,A=g+1,b=g+2;h.push(C,A,A,b,b,C)}}else return;const m=new(Fx(h)?qx:Wx)(h,1);m.version=x;const c=r.get(d);c&&t.remove(c),r.set(d,m)}function f(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function oC(e,t,n){let i;function a(h){i=h}let r,s;function o(h){r=h.type,s=h.bytesPerElement}function l(h,p){e.drawElements(i,p,r,h*s),n.update(p,i,1)}function u(h,p,v){v!==0&&(e.drawElementsInstanced(i,p,r,h*s,v),n.update(p,i,v))}function f(h,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,v);let m=0;for(let c=0;c<v;c++)m+=p[c];n.update(m,i,1)}function d(h,p,v,x){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<h.length;c++)u(h[c]/s,p[c],x[c]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,x,0,v);let c=0;for(let _=0;_<v;_++)c+=p[_];for(let _=0;_<x.length;_++)n.update(c,i,x[_])}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function lC(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function uC(e,t,n){const i=new WeakMap,a=new Ge;function r(s,o,l){const u=s.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let y=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var p=y;h!==void 0&&h.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,c=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let C=o.attributes.position.count*S,A=1;C>t.maxTextureSize&&(A=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const b=new Float32Array(C*A*4*d),U=new Vx(b,C,A,d);U.type=Ci,U.needsUpdate=!0;const T=S*4;for(let D=0;D<d;D++){const X=c[D],V=_[D],K=g[D],j=C*A*4*D;for(let N=0;N<X.count;N++){const H=N*T;v===!0&&(a.fromBufferAttribute(X,N),b[j+H+0]=a.x,b[j+H+1]=a.y,b[j+H+2]=a.z,b[j+H+3]=0),x===!0&&(a.fromBufferAttribute(V,N),b[j+H+4]=a.x,b[j+H+5]=a.y,b[j+H+6]=a.z,b[j+H+7]=0),m===!0&&(a.fromBufferAttribute(K,N),b[j+H+8]=a.x,b[j+H+9]=a.y,b[j+H+10]=a.z,b[j+H+11]=K.itemSize===4?a.w:1)}}h={count:d,texture:U,size:new Lt(C,A)},i.set(o,h),o.addEventListener("dispose",y)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,n);else{let v=0;for(let m=0;m<u.length;m++)v+=u[m];const x=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(e,"morphTargetBaseInfluence",x),l.getUniforms().setValue(e,"morphTargetInfluences",u)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:r}}function cC(e,t,n,i){let a=new WeakMap;function r(l){const u=i.render.frame,f=l.geometry,d=t.get(l,f);if(a.get(d)!==u&&(t.update(d),a.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==u&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;a.get(h)!==u&&(h.update(),a.set(h,u))}return d}function s(){a=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:r,dispose:s}}class $x extends cn{constructor(t,n,i,a,r,s,o,l,u,f=rs){if(f!==rs&&f!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===rs&&(i=rr),i===void 0&&f===ys&&(i=Ss),super(null,a,r,s,o,l,f,i,u),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=o!==void 0?o:In,this.minFilter=l!==void 0?l:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const tS=new cn,Yg=new $x(1,1),eS=new Vx,nS=new Zb,iS=new Zx,jg=[],Zg=[],Kg=new Float32Array(16),Qg=new Float32Array(9),Jg=new Float32Array(4);function Ns(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let r=jg[a];if(r===void 0&&(r=new Float32Array(a),jg[a]=r),t!==0){i.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=n,e[s].toArray(r,o)}return r}function Ie(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function ze(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function gc(e,t){let n=Zg[t];n===void 0&&(n=new Int32Array(t),Zg[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function fC(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function hC(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ie(n,t))return;e.uniform2fv(this.addr,t),ze(n,t)}}function dC(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ie(n,t))return;e.uniform3fv(this.addr,t),ze(n,t)}}function pC(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ie(n,t))return;e.uniform4fv(this.addr,t),ze(n,t)}}function mC(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ie(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ze(n,t)}else{if(Ie(n,i))return;Jg.set(i),e.uniformMatrix2fv(this.addr,!1,Jg),ze(n,i)}}function gC(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ie(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ze(n,t)}else{if(Ie(n,i))return;Qg.set(i),e.uniformMatrix3fv(this.addr,!1,Qg),ze(n,i)}}function _C(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ie(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ze(n,t)}else{if(Ie(n,i))return;Kg.set(i),e.uniformMatrix4fv(this.addr,!1,Kg),ze(n,i)}}function vC(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function xC(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ie(n,t))return;e.uniform2iv(this.addr,t),ze(n,t)}}function SC(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ie(n,t))return;e.uniform3iv(this.addr,t),ze(n,t)}}function yC(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ie(n,t))return;e.uniform4iv(this.addr,t),ze(n,t)}}function MC(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function EC(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ie(n,t))return;e.uniform2uiv(this.addr,t),ze(n,t)}}function TC(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ie(n,t))return;e.uniform3uiv(this.addr,t),ze(n,t)}}function bC(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ie(n,t))return;e.uniform4uiv(this.addr,t),ze(n,t)}}function AC(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let r;this.type===e.SAMPLER_2D_SHADOW?(Yg.compareFunction=Bx,r=Yg):r=tS,n.setTexture2D(t||r,a)}function RC(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||nS,a)}function CC(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||iS,a)}function wC(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||eS,a)}function DC(e){switch(e){case 5126:return fC;case 35664:return hC;case 35665:return dC;case 35666:return pC;case 35674:return mC;case 35675:return gC;case 35676:return _C;case 5124:case 35670:return vC;case 35667:case 35671:return xC;case 35668:case 35672:return SC;case 35669:case 35673:return yC;case 5125:return MC;case 36294:return EC;case 36295:return TC;case 36296:return bC;case 35678:case 36198:case 36298:case 36306:case 35682:return AC;case 35679:case 36299:case 36307:return RC;case 35680:case 36300:case 36308:case 36293:return CC;case 36289:case 36303:case 36311:case 36292:return wC}}function UC(e,t){e.uniform1fv(this.addr,t)}function LC(e,t){const n=Ns(t,this.size,2);e.uniform2fv(this.addr,n)}function NC(e,t){const n=Ns(t,this.size,3);e.uniform3fv(this.addr,n)}function OC(e,t){const n=Ns(t,this.size,4);e.uniform4fv(this.addr,n)}function PC(e,t){const n=Ns(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function IC(e,t){const n=Ns(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function zC(e,t){const n=Ns(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function BC(e,t){e.uniform1iv(this.addr,t)}function FC(e,t){e.uniform2iv(this.addr,t)}function HC(e,t){e.uniform3iv(this.addr,t)}function GC(e,t){e.uniform4iv(this.addr,t)}function VC(e,t){e.uniform1uiv(this.addr,t)}function kC(e,t){e.uniform2uiv(this.addr,t)}function XC(e,t){e.uniform3uiv(this.addr,t)}function WC(e,t){e.uniform4uiv(this.addr,t)}function qC(e,t,n){const i=this.cache,a=t.length,r=gc(n,a);Ie(i,r)||(e.uniform1iv(this.addr,r),ze(i,r));for(let s=0;s!==a;++s)n.setTexture2D(t[s]||tS,r[s])}function YC(e,t,n){const i=this.cache,a=t.length,r=gc(n,a);Ie(i,r)||(e.uniform1iv(this.addr,r),ze(i,r));for(let s=0;s!==a;++s)n.setTexture3D(t[s]||nS,r[s])}function jC(e,t,n){const i=this.cache,a=t.length,r=gc(n,a);Ie(i,r)||(e.uniform1iv(this.addr,r),ze(i,r));for(let s=0;s!==a;++s)n.setTextureCube(t[s]||iS,r[s])}function ZC(e,t,n){const i=this.cache,a=t.length,r=gc(n,a);Ie(i,r)||(e.uniform1iv(this.addr,r),ze(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(t[s]||eS,r[s])}function KC(e){switch(e){case 5126:return UC;case 35664:return LC;case 35665:return NC;case 35666:return OC;case 35674:return PC;case 35675:return IC;case 35676:return zC;case 5124:case 35670:return BC;case 35667:case 35671:return FC;case 35668:case 35672:return HC;case 35669:case 35673:return GC;case 5125:return VC;case 36294:return kC;case 36295:return XC;case 36296:return WC;case 35678:case 36198:case 36298:case 36306:case 35682:return qC;case 35679:case 36299:case 36307:return YC;case 35680:case 36300:case 36308:case 36293:return jC;case 36289:case 36303:case 36311:case 36292:return ZC}}class QC{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=DC(n.type)}}class JC{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=KC(n.type)}}class $C{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(t,n[o.id],i)}}}const Uf=/(\w+)(\])?(\[|\.)?/g;function $g(e,t){e.seq.push(t),e.map[t.id]=t}function tw(e,t,n){const i=e.name,a=i.length;for(Uf.lastIndex=0;;){const r=Uf.exec(i),s=Uf.lastIndex;let o=r[1];const l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&s+2===a){$g(n,u===void 0?new QC(o,e,t):new JC(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new $C(o),$g(n,d)),n=d}}}class lu{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=t.getActiveUniform(n,a),s=t.getUniformLocation(n,r.name);tw(r,s,this)}}setValue(t,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,r=t.length;a!==r;++a){const s=t[a];s.id in n&&i.push(s)}return i}}function t_(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const ew=37297;let nw=0;function iw(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===t?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}function aw(e){const t=ne.getPrimaries(ne.workingColorSpace),n=ne.getPrimaries(e);let i;switch(t===n?i="":t===ku&&n===Vu?i="LinearDisplayP3ToLinearSRGB":t===Vu&&n===ku&&(i="LinearSRGBToLinearDisplayP3"),e){case Ca:case dc:return[i,"LinearTransferOETF"];case Jn:case bp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function e_(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+iw(e.getShaderSource(t),s)}else return a}function rw(e,t){const n=aw(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function sw(e,t){let n;switch(t){case Mb:n="Linear";break;case Eb:n="Reinhard";break;case Tb:n="OptimizedCineon";break;case bb:n="ACESFilmic";break;case Rb:n="AgX";break;case Cb:n="Neutral";break;case Ab:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function ow(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function lw(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function uw(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=e.getActiveAttrib(t,a),s=r.name;let o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:e.getAttribLocation(t,s),locationSize:o}}return n}function Js(e){return e!==""}function n_(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function i_(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cw=/^[ \t]*#include +<([\w\d./]+)>/gm;function cd(e){return e.replace(cw,hw)}const fw=new Map;function hw(e,t){let n=Ot[t];if(n===void 0){const i=fw.get(t);if(i!==void 0)n=Ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return cd(n)}const dw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a_(e){return e.replace(dw,pw)}function pw(e,t,n,i){let a="";for(let r=parseInt(t);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function r_(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function mw(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===bx?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===jT?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===yi&&(t="SHADOWMAP_TYPE_VSM"),t}function gw(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case vs:case xs:t="ENVMAP_TYPE_CUBE";break;case hc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _w(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case xs:t="ENVMAP_MODE_REFRACTION";break}return t}function vw(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Ax:t="ENVMAP_BLENDING_MULTIPLY";break;case Sb:t="ENVMAP_BLENDING_MIX";break;case yb:t="ENVMAP_BLENDING_ADD";break}return t}function xw(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Sw(e,t,n,i){const a=e.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=mw(n),u=gw(n),f=_w(n),d=vw(n),h=xw(n),p=ow(n),v=lw(r),x=a.createProgram();let m,c,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Js).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Js).join(`
`),c.length>0&&(c+=`
`)):(m=[r_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),c=[r_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xa?"#define TONE_MAPPING":"",n.toneMapping!==xa?Ot.tonemapping_pars_fragment:"",n.toneMapping!==xa?sw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,rw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Js).join(`
`)),s=cd(s),s=n_(s,n),s=i_(s,n),o=cd(o),o=n_(o,n),o=i_(o,n),s=a_(s),o=a_(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",n.glslVersion===Sg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const g=_+m+s,S=_+c+o,C=t_(a,a.VERTEX_SHADER,g),A=t_(a,a.FRAGMENT_SHADER,S);a.attachShader(x,C),a.attachShader(x,A),n.index0AttributeName!==void 0?a.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function b(D){if(e.debug.checkShaderErrors){const X=a.getProgramInfoLog(x).trim(),V=a.getShaderInfoLog(C).trim(),K=a.getShaderInfoLog(A).trim();let j=!0,N=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(j=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,x,C,A);else{const H=e_(a,C,"vertex"),I=e_(a,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+H+`
`+I)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(V===""||K==="")&&(N=!1);N&&(D.diagnostics={runnable:j,programLog:X,vertexShader:{log:V,prefix:m},fragmentShader:{log:K,prefix:c}})}a.deleteShader(C),a.deleteShader(A),U=new lu(a,x),T=uw(a,x)}let U;this.getUniforms=function(){return U===void 0&&b(this),U};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=a.getProgramParameter(x,ew)),y},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nw++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}let yw=0;class Mw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new Ew(t),n.set(t,i)),i}}class Ew{constructor(t){this.id=yw++,this.code=t,this.usedTimes=0}}function Tw(e,t,n,i,a,r,s){const o=new kx,l=new Mw,u=new Set,f=[],d=a.logarithmicDepthBuffer,h=a.vertexTextures;let p=a.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return u.add(T),T===0?"uv":`uv${T}`}function m(T,y,D,X,V){const K=X.fog,j=V.geometry,N=T.isMeshStandardMaterial?X.environment:null,H=(T.isMeshStandardMaterial?n:t).get(T.envMap||N),I=H&&H.mapping===hc?H.image.height:null,et=v[T.type];T.precision!==null&&(p=a.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const st=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,pt=st!==void 0?st.length:0;let zt=0;j.morphAttributes.position!==void 0&&(zt=1),j.morphAttributes.normal!==void 0&&(zt=2),j.morphAttributes.color!==void 0&&(zt=3);let Yt,W,$,mt;if(et){const Kt=$n[et];Yt=Kt.vertexShader,W=Kt.fragmentShader}else Yt=T.vertexShader,W=T.fragmentShader,l.update(T),$=l.getVertexShaderID(T),mt=l.getFragmentShaderID(T);const ft=e.getRenderTarget(),Dt=V.isInstancedMesh===!0,Ft=V.isBatchedMesh===!0,kt=!!T.map,ve=!!T.matcap,w=!!H,be=!!T.aoMap,te=!!T.lightMap,re=!!T.bumpMap,xt=!!T.normalMap,Ae=!!T.displacementMap,Ct=!!T.emissiveMap,Ut=!!T.metalnessMap,R=!!T.roughnessMap,M=T.anisotropy>0,G=T.clearcoat>0,J=T.dispersion>0,tt=T.iridescence>0,Q=T.sheen>0,yt=T.transmission>0,lt=M&&!!T.anisotropyMap,ht=G&&!!T.clearcoatMap,Nt=G&&!!T.clearcoatNormalMap,nt=G&&!!T.clearcoatRoughnessMap,ct=tt&&!!T.iridescenceMap,Xt=tt&&!!T.iridescenceThicknessMap,Rt=Q&&!!T.sheenColorMap,dt=Q&&!!T.sheenRoughnessMap,wt=!!T.specularMap,Ht=!!T.specularColorMap,me=!!T.specularIntensityMap,L=yt&&!!T.transmissionMap,it=yt&&!!T.thicknessMap,q=!!T.gradientMap,Z=!!T.alphaMap,rt=T.alphaTest>0,Tt=!!T.alphaHash,qt=!!T.extensions;let Re=xa;T.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Re=e.toneMapping);const Xe={shaderID:et,shaderType:T.type,shaderName:T.name,vertexShader:Yt,fragmentShader:W,defines:T.defines,customVertexShaderID:$,customFragmentShaderID:mt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ft,batchingColor:Ft&&V._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&V.instanceColor!==null,instancingMorph:Dt&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ft===null?e.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Ca,alphaToCoverage:!!T.alphaToCoverage,map:kt,matcap:ve,envMap:w,envMapMode:w&&H.mapping,envMapCubeUVHeight:I,aoMap:be,lightMap:te,bumpMap:re,normalMap:xt,displacementMap:h&&Ae,emissiveMap:Ct,normalMapObjectSpace:xt&&T.normalMapType===Nb,normalMapTangentSpace:xt&&T.normalMapType===Lb,metalnessMap:Ut,roughnessMap:R,anisotropy:M,anisotropyMap:lt,clearcoat:G,clearcoatMap:ht,clearcoatNormalMap:Nt,clearcoatRoughnessMap:nt,dispersion:J,iridescence:tt,iridescenceMap:ct,iridescenceThicknessMap:Xt,sheen:Q,sheenColorMap:Rt,sheenRoughnessMap:dt,specularMap:wt,specularColorMap:Ht,specularIntensityMap:me,transmission:yt,transmissionMap:L,thicknessMap:it,gradientMap:q,opaque:T.transparent===!1&&T.blending===as&&T.alphaToCoverage===!1,alphaMap:Z,alphaTest:rt,alphaHash:Tt,combine:T.combine,mapUv:kt&&x(T.map.channel),aoMapUv:be&&x(T.aoMap.channel),lightMapUv:te&&x(T.lightMap.channel),bumpMapUv:re&&x(T.bumpMap.channel),normalMapUv:xt&&x(T.normalMap.channel),displacementMapUv:Ae&&x(T.displacementMap.channel),emissiveMapUv:Ct&&x(T.emissiveMap.channel),metalnessMapUv:Ut&&x(T.metalnessMap.channel),roughnessMapUv:R&&x(T.roughnessMap.channel),anisotropyMapUv:lt&&x(T.anisotropyMap.channel),clearcoatMapUv:ht&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:dt&&x(T.sheenRoughnessMap.channel),specularMapUv:wt&&x(T.specularMap.channel),specularColorMapUv:Ht&&x(T.specularColorMap.channel),specularIntensityMapUv:me&&x(T.specularIntensityMap.channel),transmissionMapUv:L&&x(T.transmissionMap.channel),thicknessMapUv:it&&x(T.thicknessMap.channel),alphaMapUv:Z&&x(T.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(xt||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!j.attributes.uv&&(kt||Z),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:V.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:zt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:kt&&T.map.isVideoTexture===!0&&ne.getTransfer(T.map.colorSpace)===ce,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ei,flipSided:T.side===un,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:qt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&T.extensions.multiDraw===!0||Ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Xe.vertexUv1s=u.has(1),Xe.vertexUv2s=u.has(2),Xe.vertexUv3s=u.has(3),u.clear(),Xe}function c(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)y.push(D),y.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(_(y,T),g(y,T),y.push(e.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function _(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function g(T,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.doubleSided&&o.enable(10),y.flipSided&&o.enable(11),y.useDepthPacking&&o.enable(12),y.dithering&&o.enable(13),y.transmission&&o.enable(14),y.sheen&&o.enable(15),y.opaque&&o.enable(16),y.pointsUvs&&o.enable(17),y.decodeVideoTexture&&o.enable(18),y.alphaToCoverage&&o.enable(19),T.push(o.mask)}function S(T){const y=v[T.type];let D;if(y){const X=$n[y];D=lA.clone(X.uniforms)}else D=T.uniforms;return D}function C(T,y){let D;for(let X=0,V=f.length;X<V;X++){const K=f[X];if(K.cacheKey===y){D=K,++D.usedTimes;break}}return D===void 0&&(D=new Sw(e,y,T,r),f.push(D)),D}function A(T){if(--T.usedTimes===0){const y=f.indexOf(T);f[y]=f[f.length-1],f.pop(),T.destroy()}}function b(T){l.remove(T)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:S,acquireProgram:C,releaseProgram:A,releaseShaderCache:b,programs:f,dispose:U}}function bw(){let e=new WeakMap;function t(r){let s=e.get(r);return s===void 0&&(s={},e.set(r,s)),s}function n(r){e.delete(r)}function i(r,s,o){e.get(r)[s]=o}function a(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:a}}function Aw(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function s_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function o_(){const e=[];let t=0;const n=[],i=[],a=[];function r(){t=0,n.length=0,i.length=0,a.length=0}function s(d,h,p,v,x,m){let c=e[t];return c===void 0?(c={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:x,group:m},e[t]=c):(c.id=d.id,c.object=d,c.geometry=h,c.material=p,c.groupOrder=v,c.renderOrder=d.renderOrder,c.z=x,c.group=m),t++,c}function o(d,h,p,v,x,m){const c=s(d,h,p,v,x,m);p.transmission>0?i.push(c):p.transparent===!0?a.push(c):n.push(c)}function l(d,h,p,v,x,m){const c=s(d,h,p,v,x,m);p.transmission>0?i.unshift(c):p.transparent===!0?a.unshift(c):n.unshift(c)}function u(d,h){n.length>1&&n.sort(d||Aw),i.length>1&&i.sort(h||s_),a.length>1&&a.sort(h||s_)}function f(){for(let d=t,h=e.length;d<h;d++){const p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:o,unshift:l,finish:f,sort:u}}function Rw(){let e=new WeakMap;function t(i,a){const r=e.get(i);let s;return r===void 0?(s=new o_,e.set(i,[s])):a>=r.length?(s=new o_,r.push(s)):s=r[a],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function Cw(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new F,color:new ie};break;case"SpotLight":n={position:new F,direction:new F,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new ie,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":n={color:new ie,position:new F,halfWidth:new F,halfHeight:new F};break}return e[t.id]=n,n}}}function ww(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let Dw=0;function Uw(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Lw(e){const t=new Cw,n=ww(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new F);const a=new F,r=new Oe,s=new Oe;function o(u){let f=0,d=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,v=0,x=0,m=0,c=0,_=0,g=0,S=0,C=0,A=0,b=0;u.sort(Uw);for(let T=0,y=u.length;T<y;T++){const D=u[T],X=D.color,V=D.intensity,K=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=X.r*V,d+=X.g*V,h+=X.b*V;else if(D.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(D.sh.coefficients[N],V);b++}else if(D.isDirectionalLight){const N=t.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const H=D.shadow,I=n.get(D);I.shadowIntensity=H.intensity,I.shadowBias=H.bias,I.shadowNormalBias=H.normalBias,I.shadowRadius=H.radius,I.shadowMapSize=H.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=D.shadow.matrix,_++}i.directional[p]=N,p++}else if(D.isSpotLight){const N=t.get(D);N.position.setFromMatrixPosition(D.matrixWorld),N.color.copy(X).multiplyScalar(V),N.distance=K,N.coneCos=Math.cos(D.angle),N.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),N.decay=D.decay,i.spot[x]=N;const H=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,H.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[x]=H.matrix,D.castShadow){const I=n.get(D);I.shadowIntensity=H.intensity,I.shadowBias=H.bias,I.shadowNormalBias=H.normalBias,I.shadowRadius=H.radius,I.shadowMapSize=H.mapSize,i.spotShadow[x]=I,i.spotShadowMap[x]=j,S++}x++}else if(D.isRectAreaLight){const N=t.get(D);N.color.copy(X).multiplyScalar(V),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=N,m++}else if(D.isPointLight){const N=t.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),N.distance=D.distance,N.decay=D.decay,D.castShadow){const H=D.shadow,I=n.get(D);I.shadowIntensity=H.intensity,I.shadowBias=H.bias,I.shadowNormalBias=H.normalBias,I.shadowRadius=H.radius,I.shadowMapSize=H.mapSize,I.shadowCameraNear=H.camera.near,I.shadowCameraFar=H.camera.far,i.pointShadow[v]=I,i.pointShadowMap[v]=j,i.pointShadowMatrix[v]=D.shadow.matrix,g++}i.point[v]=N,v++}else if(D.isHemisphereLight){const N=t.get(D);N.skyColor.copy(D.color).multiplyScalar(V),N.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[c]=N,c++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const U=i.hash;(U.directionalLength!==p||U.pointLength!==v||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==c||U.numDirectionalShadows!==_||U.numPointShadows!==g||U.numSpotShadows!==S||U.numSpotMaps!==C||U.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=c,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=S+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,U.directionalLength=p,U.pointLength=v,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=c,U.numDirectionalShadows=_,U.numPointShadows=g,U.numSpotShadows=S,U.numSpotMaps=C,U.numLightProbes=b,i.version=Dw++)}function l(u,f){let d=0,h=0,p=0,v=0,x=0;const m=f.matrixWorldInverse;for(let c=0,_=u.length;c<_;c++){const g=u[c];if(g.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(m),d++}else if(g.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),s.identity(),r.copy(g.matrixWorld),r.premultiply(m),s.extractRotation(r),S.halfWidth.set(g.width*.5,0,0),S.halfHeight.set(0,g.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),v++}else if(g.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(g.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function l_(e){const t=new Lw(e),n=[],i=[];function a(f){u.camera=f,n.length=0,i.length=0}function r(f){n.push(f)}function s(f){i.push(f)}function o(){t.setup(n)}function l(f){t.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:u,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function Nw(e){let t=new WeakMap;function n(a,r=0){const s=t.get(a);let o;return s===void 0?(o=new l_(e),t.set(a,[o])):r>=s.length?(o=new l_(e),s.push(o)):o=s[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class Ow extends pc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Db,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pw extends pc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Iw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bw(e,t,n){let i=new Kx;const a=new Lt,r=new Lt,s=new Ge,o=new Ow({depthPacking:Ub}),l=new Pw,u={},f=n.maxTextureSize,d={[Ea]:un,[un]:Ea,[ei]:ei},h=new Ta({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Iw,fragmentShader:zw}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new wa;v.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ai(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bx;let c=this.type;this.render=function(A,b,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const T=e.getRenderTarget(),y=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),X=e.state;X.setBlending(va),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const V=c!==yi&&this.type===yi,K=c===yi&&this.type!==yi;for(let j=0,N=A.length;j<N;j++){const H=A[j],I=H.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;a.copy(I.mapSize);const et=I.getFrameExtents();if(a.multiply(et),r.copy(I.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(r.x=Math.floor(f/et.x),a.x=r.x*et.x,I.mapSize.x=r.x),a.y>f&&(r.y=Math.floor(f/et.y),a.y=r.y*et.y,I.mapSize.y=r.y)),I.map===null||V===!0||K===!0){const pt=this.type!==yi?{minFilter:In,magFilter:In}:{};I.map!==null&&I.map.dispose(),I.map=new sr(a.x,a.y,pt),I.map.texture.name=H.name+".shadowMap",I.camera.updateProjectionMatrix()}e.setRenderTarget(I.map),e.clear();const st=I.getViewportCount();for(let pt=0;pt<st;pt++){const zt=I.getViewport(pt);s.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),X.viewport(s),I.updateMatrices(H,pt),i=I.getFrustum(),S(b,U,I.camera,H,this.type)}I.isPointLightShadow!==!0&&this.type===yi&&_(I,U),I.needsUpdate=!1}c=this.type,m.needsUpdate=!1,e.setRenderTarget(T,y,D)};function _(A,b){const U=t.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new sr(a.x,a.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(b,null,U,h,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(b,null,U,p,x,null)}function g(A,b,U,T){let y=null;const D=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)y=D;else if(y=U.isPointLight===!0?l:o,e.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const X=y.uuid,V=b.uuid;let K=u[X];K===void 0&&(K={},u[X]=K);let j=K[V];j===void 0&&(j=y.clone(),K[V]=j,b.addEventListener("dispose",C)),y=j}if(y.visible=b.visible,y.wireframe=b.wireframe,T===yi?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:d[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const X=e.properties.get(y);X.light=U}return y}function S(A,b,U,T,y){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===yi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const V=t.update(A),K=A.material;if(Array.isArray(K)){const j=V.groups;for(let N=0,H=j.length;N<H;N++){const I=j[N],et=K[I.materialIndex];if(et&&et.visible){const st=g(A,et,T,y);A.onBeforeShadow(e,A,b,U,V,st,I),e.renderBufferDirect(U,null,V,st,A,I),A.onAfterShadow(e,A,b,U,V,st,I)}}}else if(K.visible){const j=g(A,K,T,y);A.onBeforeShadow(e,A,b,U,V,j,null),e.renderBufferDirect(U,null,V,j,A,null),A.onAfterShadow(e,A,b,U,V,j,null)}}const X=A.children;for(let V=0,K=X.length;V<K;V++)S(X[V],b,U,T,y)}function C(A){A.target.removeEventListener("dispose",C);for(const U in u){const T=u[U],y=A.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}function Fw(e){function t(){let L=!1;const it=new Ge;let q=null;const Z=new Ge(0,0,0,0);return{setMask:function(rt){q!==rt&&!L&&(e.colorMask(rt,rt,rt,rt),q=rt)},setLocked:function(rt){L=rt},setClear:function(rt,Tt,qt,Re,Xe){Xe===!0&&(rt*=Re,Tt*=Re,qt*=Re),it.set(rt,Tt,qt,Re),Z.equals(it)===!1&&(e.clearColor(rt,Tt,qt,Re),Z.copy(it))},reset:function(){L=!1,q=null,Z.set(-1,0,0,0)}}}function n(){let L=!1,it=null,q=null,Z=null;return{setTest:function(rt){rt?mt(e.DEPTH_TEST):ft(e.DEPTH_TEST)},setMask:function(rt){it!==rt&&!L&&(e.depthMask(rt),it=rt)},setFunc:function(rt){if(q!==rt){switch(rt){case db:e.depthFunc(e.NEVER);break;case pb:e.depthFunc(e.ALWAYS);break;case mb:e.depthFunc(e.LESS);break;case Hu:e.depthFunc(e.LEQUAL);break;case gb:e.depthFunc(e.EQUAL);break;case _b:e.depthFunc(e.GEQUAL);break;case vb:e.depthFunc(e.GREATER);break;case xb:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}q=rt}},setLocked:function(rt){L=rt},setClear:function(rt){Z!==rt&&(e.clearDepth(rt),Z=rt)},reset:function(){L=!1,it=null,q=null,Z=null}}}function i(){let L=!1,it=null,q=null,Z=null,rt=null,Tt=null,qt=null,Re=null,Xe=null;return{setTest:function(Kt){L||(Kt?mt(e.STENCIL_TEST):ft(e.STENCIL_TEST))},setMask:function(Kt){it!==Kt&&!L&&(e.stencilMask(Kt),it=Kt)},setFunc:function(Kt,hi,Kn){(q!==Kt||Z!==hi||rt!==Kn)&&(e.stencilFunc(Kt,hi,Kn),q=Kt,Z=hi,rt=Kn)},setOp:function(Kt,hi,Kn){(Tt!==Kt||qt!==hi||Re!==Kn)&&(e.stencilOp(Kt,hi,Kn),Tt=Kt,qt=hi,Re=Kn)},setLocked:function(Kt){L=Kt},setClear:function(Kt){Xe!==Kt&&(e.clearStencil(Kt),Xe=Kt)},reset:function(){L=!1,it=null,q=null,Z=null,rt=null,Tt=null,qt=null,Re=null,Xe=null}}}const a=new t,r=new n,s=new i,o=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,h=[],p=null,v=!1,x=null,m=null,c=null,_=null,g=null,S=null,C=null,A=new ie(0,0,0),b=0,U=!1,T=null,y=null,D=null,X=null,V=null;const K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,N=0;const H=e.getParameter(e.VERSION);H.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(H)[1]),j=N>=1):H.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),j=N>=2);let I=null,et={};const st=e.getParameter(e.SCISSOR_BOX),pt=e.getParameter(e.VIEWPORT),zt=new Ge().fromArray(st),Yt=new Ge().fromArray(pt);function W(L,it,q,Z){const rt=new Uint8Array(4),Tt=e.createTexture();e.bindTexture(L,Tt),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let qt=0;qt<q;qt++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(it,0,e.RGBA,1,1,Z,0,e.RGBA,e.UNSIGNED_BYTE,rt):e.texImage2D(it+qt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,rt);return Tt}const $={};$[e.TEXTURE_2D]=W(e.TEXTURE_2D,e.TEXTURE_2D,1),$[e.TEXTURE_CUBE_MAP]=W(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[e.TEXTURE_2D_ARRAY]=W(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),$[e.TEXTURE_3D]=W(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),s.setClear(0),mt(e.DEPTH_TEST),r.setFunc(Hu),re(!1),xt(pg),mt(e.CULL_FACE),be(va);function mt(L){u[L]!==!0&&(e.enable(L),u[L]=!0)}function ft(L){u[L]!==!1&&(e.disable(L),u[L]=!1)}function Dt(L,it){return f[L]!==it?(e.bindFramebuffer(L,it),f[L]=it,L===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=it),L===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=it),!0):!1}function Ft(L,it){let q=h,Z=!1;if(L){q=d.get(it),q===void 0&&(q=[],d.set(it,q));const rt=L.textures;if(q.length!==rt.length||q[0]!==e.COLOR_ATTACHMENT0){for(let Tt=0,qt=rt.length;Tt<qt;Tt++)q[Tt]=e.COLOR_ATTACHMENT0+Tt;q.length=rt.length,Z=!0}}else q[0]!==e.BACK&&(q[0]=e.BACK,Z=!0);Z&&e.drawBuffers(q)}function kt(L){return p!==L?(e.useProgram(L),p=L,!0):!1}const ve={[ka]:e.FUNC_ADD,[KT]:e.FUNC_SUBTRACT,[QT]:e.FUNC_REVERSE_SUBTRACT};ve[JT]=e.MIN,ve[$T]=e.MAX;const w={[tb]:e.ZERO,[eb]:e.ONE,[nb]:e.SRC_COLOR,[Uh]:e.SRC_ALPHA,[lb]:e.SRC_ALPHA_SATURATE,[sb]:e.DST_COLOR,[ab]:e.DST_ALPHA,[ib]:e.ONE_MINUS_SRC_COLOR,[Lh]:e.ONE_MINUS_SRC_ALPHA,[ob]:e.ONE_MINUS_DST_COLOR,[rb]:e.ONE_MINUS_DST_ALPHA,[ub]:e.CONSTANT_COLOR,[cb]:e.ONE_MINUS_CONSTANT_COLOR,[fb]:e.CONSTANT_ALPHA,[hb]:e.ONE_MINUS_CONSTANT_ALPHA};function be(L,it,q,Z,rt,Tt,qt,Re,Xe,Kt){if(L===va){v===!0&&(ft(e.BLEND),v=!1);return}if(v===!1&&(mt(e.BLEND),v=!0),L!==ZT){if(L!==x||Kt!==U){if((m!==ka||g!==ka)&&(e.blendEquation(e.FUNC_ADD),m=ka,g=ka),Kt)switch(L){case as:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case mg:e.blendFunc(e.ONE,e.ONE);break;case gg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case _g:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case as:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case mg:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case gg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case _g:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}c=null,_=null,S=null,C=null,A.set(0,0,0),b=0,x=L,U=Kt}return}rt=rt||it,Tt=Tt||q,qt=qt||Z,(it!==m||rt!==g)&&(e.blendEquationSeparate(ve[it],ve[rt]),m=it,g=rt),(q!==c||Z!==_||Tt!==S||qt!==C)&&(e.blendFuncSeparate(w[q],w[Z],w[Tt],w[qt]),c=q,_=Z,S=Tt,C=qt),(Re.equals(A)===!1||Xe!==b)&&(e.blendColor(Re.r,Re.g,Re.b,Xe),A.copy(Re),b=Xe),x=L,U=!1}function te(L,it){L.side===ei?ft(e.CULL_FACE):mt(e.CULL_FACE);let q=L.side===un;it&&(q=!q),re(q),L.blending===as&&L.transparent===!1?be(va):be(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),a.setMask(L.colorWrite);const Z=L.stencilWrite;s.setTest(Z),Z&&(s.setMask(L.stencilWriteMask),s.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),s.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ct(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?mt(e.SAMPLE_ALPHA_TO_COVERAGE):ft(e.SAMPLE_ALPHA_TO_COVERAGE)}function re(L){T!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),T=L)}function xt(L){L!==qT?(mt(e.CULL_FACE),L!==y&&(L===pg?e.cullFace(e.BACK):L===YT?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ft(e.CULL_FACE),y=L}function Ae(L){L!==D&&(j&&e.lineWidth(L),D=L)}function Ct(L,it,q){L?(mt(e.POLYGON_OFFSET_FILL),(X!==it||V!==q)&&(e.polygonOffset(it,q),X=it,V=q)):ft(e.POLYGON_OFFSET_FILL)}function Ut(L){L?mt(e.SCISSOR_TEST):ft(e.SCISSOR_TEST)}function R(L){L===void 0&&(L=e.TEXTURE0+K-1),I!==L&&(e.activeTexture(L),I=L)}function M(L,it,q){q===void 0&&(I===null?q=e.TEXTURE0+K-1:q=I);let Z=et[q];Z===void 0&&(Z={type:void 0,texture:void 0},et[q]=Z),(Z.type!==L||Z.texture!==it)&&(I!==q&&(e.activeTexture(q),I=q),e.bindTexture(L,it||$[L]),Z.type=L,Z.texture=it)}function G(){const L=et[I];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function J(){try{e.compressedTexImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{e.compressedTexImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{e.texSubImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{e.texSubImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(){try{e.texStorage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{e.texStorage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{e.texImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xt(){try{e.texImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(L){zt.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),zt.copy(L))}function dt(L){Yt.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),Yt.copy(L))}function wt(L,it){let q=l.get(it);q===void 0&&(q=new WeakMap,l.set(it,q));let Z=q.get(L);Z===void 0&&(Z=e.getUniformBlockIndex(it,L.name),q.set(L,Z))}function Ht(L,it){const Z=l.get(it).get(L);o.get(it)!==Z&&(e.uniformBlockBinding(it,Z,L.__bindingPointIndex),o.set(it,Z))}function me(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},I=null,et={},f={},d=new WeakMap,h=[],p=null,v=!1,x=null,m=null,c=null,_=null,g=null,S=null,C=null,A=new ie(0,0,0),b=0,U=!1,T=null,y=null,D=null,X=null,V=null,zt.set(0,0,e.canvas.width,e.canvas.height),Yt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),s.reset()}return{buffers:{color:a,depth:r,stencil:s},enable:mt,disable:ft,bindFramebuffer:Dt,drawBuffers:Ft,useProgram:kt,setBlending:be,setMaterial:te,setFlipSided:re,setCullFace:xt,setLineWidth:Ae,setPolygonOffset:Ct,setScissorTest:Ut,activeTexture:R,bindTexture:M,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:tt,texImage2D:ct,texImage3D:Xt,updateUBOMapping:wt,uniformBlockBinding:Ht,texStorage2D:Nt,texStorage3D:nt,texSubImage2D:Q,texSubImage3D:yt,compressedTexSubImage2D:lt,compressedTexSubImage3D:ht,scissor:Rt,viewport:dt,reset:me}}function u_(e,t,n,i){const a=Hw(i);switch(n){case Ux:return e*t;case Nx:return e*t;case Ox:return e*t*2;case Px:return e*t/a.components*a.byteLength;case Mp:return e*t/a.components*a.byteLength;case Ix:return e*t*2/a.components*a.byteLength;case Ep:return e*t*2/a.components*a.byteLength;case Lx:return e*t*3/a.components*a.byteLength;case qn:return e*t*4/a.components*a.byteLength;case Tp:return e*t*4/a.components*a.byteLength;case iu:case au:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ru:case su:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Bh:case Hh:return Math.max(e,16)*Math.max(t,8)/4;case zh:case Fh:return Math.max(e,8)*Math.max(t,8)/2;case Gh:case Vh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case kh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Xh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Wh:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case qh:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case jh:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Jh:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case $h:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case td:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ed:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case nd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case id:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ou:case ad:case rd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case zx:case sd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case od:case ld:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Hw(e){switch(e){case Bi:case Cx:return{byteLength:1,components:1};case Do:case wx:case Ko:return{byteLength:2,components:1};case Sp:case yp:return{byteLength:2,components:4};case rr:case xp:case Ci:return{byteLength:4,components:1};case Dx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function Gw(e,t,n,i,a,r,s){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Lt,f=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,M){return p?new OffscreenCanvas(R,M):Wu("canvas")}function x(R,M,G){let J=1;const tt=Ut(R);if((tt.width>G||tt.height>G)&&(J=G/Math.max(tt.width,tt.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(J*tt.width),yt=Math.floor(J*tt.height);d===void 0&&(d=v(Q,yt));const lt=M?v(Q,yt):d;return lt.width=Q,lt.height=yt,lt.getContext("2d").drawImage(R,0,0,Q,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Q+"x"+yt+")."),lt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==In&&R.minFilter!==Wn}function c(R){e.generateMipmap(R)}function _(R,M,G,J,tt=!1){if(R!==null){if(e[R]!==void 0)return e[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=M;if(M===e.RED&&(G===e.FLOAT&&(Q=e.R32F),G===e.HALF_FLOAT&&(Q=e.R16F),G===e.UNSIGNED_BYTE&&(Q=e.R8)),M===e.RED_INTEGER&&(G===e.UNSIGNED_BYTE&&(Q=e.R8UI),G===e.UNSIGNED_SHORT&&(Q=e.R16UI),G===e.UNSIGNED_INT&&(Q=e.R32UI),G===e.BYTE&&(Q=e.R8I),G===e.SHORT&&(Q=e.R16I),G===e.INT&&(Q=e.R32I)),M===e.RG&&(G===e.FLOAT&&(Q=e.RG32F),G===e.HALF_FLOAT&&(Q=e.RG16F),G===e.UNSIGNED_BYTE&&(Q=e.RG8)),M===e.RG_INTEGER&&(G===e.UNSIGNED_BYTE&&(Q=e.RG8UI),G===e.UNSIGNED_SHORT&&(Q=e.RG16UI),G===e.UNSIGNED_INT&&(Q=e.RG32UI),G===e.BYTE&&(Q=e.RG8I),G===e.SHORT&&(Q=e.RG16I),G===e.INT&&(Q=e.RG32I)),M===e.RGB&&G===e.UNSIGNED_INT_5_9_9_9_REV&&(Q=e.RGB9_E5),M===e.RGBA){const yt=tt?Gu:ne.getTransfer(J);G===e.FLOAT&&(Q=e.RGBA32F),G===e.HALF_FLOAT&&(Q=e.RGBA16F),G===e.UNSIGNED_BYTE&&(Q=yt===ce?e.SRGB8_ALPHA8:e.RGBA8),G===e.UNSIGNED_SHORT_4_4_4_4&&(Q=e.RGBA4),G===e.UNSIGNED_SHORT_5_5_5_1&&(Q=e.RGB5_A1)}return(Q===e.R16F||Q===e.R32F||Q===e.RG16F||Q===e.RG32F||Q===e.RGBA16F||Q===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function g(R,M){let G;return R?M===null||M===rr||M===Ss?G=e.DEPTH24_STENCIL8:M===Ci?G=e.DEPTH32F_STENCIL8:M===Do&&(G=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===rr||M===Ss?G=e.DEPTH_COMPONENT24:M===Ci?G=e.DEPTH_COMPONENT32F:M===Do&&(G=e.DEPTH_COMPONENT16),G}function S(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==In&&R.minFilter!==Wn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){const M=R.target;M.removeEventListener("dispose",C),b(M),M.isVideoTexture&&f.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),T(M)}function b(R){const M=i.get(R);if(M.__webglInit===void 0)return;const G=R.source,J=h.get(G);if(J){const tt=J[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&U(R),Object.keys(J).length===0&&h.delete(G)}i.remove(R)}function U(R){const M=i.get(R);e.deleteTexture(M.__webglTexture);const G=R.source,J=h.get(G);delete J[M.__cacheKey],s.memory.textures--}function T(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let tt=0;tt<M.__webglFramebuffer[J].length;tt++)e.deleteFramebuffer(M.__webglFramebuffer[J][tt]);else e.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)e.deleteFramebuffer(M.__webglFramebuffer[J]);else e.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&e.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&e.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&e.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=R.textures;for(let J=0,tt=G.length;J<tt;J++){const Q=i.get(G[J]);Q.__webglTexture&&(e.deleteTexture(Q.__webglTexture),s.memory.textures--),i.remove(G[J])}i.remove(R)}let y=0;function D(){y=0}function X(){const R=y;return R>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+a.maxTextures),y+=1,R}function V(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function K(R,M){const G=i.get(R);if(R.isVideoTexture&&Ae(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(G,R,M);return}}n.bindTexture(e.TEXTURE_2D,G.__webglTexture,e.TEXTURE0+M)}function j(R,M){const G=i.get(R);if(R.version>0&&G.__version!==R.version){Yt(G,R,M);return}n.bindTexture(e.TEXTURE_2D_ARRAY,G.__webglTexture,e.TEXTURE0+M)}function N(R,M){const G=i.get(R);if(R.version>0&&G.__version!==R.version){Yt(G,R,M);return}n.bindTexture(e.TEXTURE_3D,G.__webglTexture,e.TEXTURE0+M)}function H(R,M){const G=i.get(R);if(R.version>0&&G.__version!==R.version){W(G,R,M);return}n.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture,e.TEXTURE0+M)}const I={[Ph]:e.REPEAT,[Wa]:e.CLAMP_TO_EDGE,[Ih]:e.MIRRORED_REPEAT},et={[In]:e.NEAREST,[wb]:e.NEAREST_MIPMAP_NEAREST,[xl]:e.NEAREST_MIPMAP_LINEAR,[Wn]:e.LINEAR,[rf]:e.LINEAR_MIPMAP_NEAREST,[qa]:e.LINEAR_MIPMAP_LINEAR},st={[Ob]:e.NEVER,[Hb]:e.ALWAYS,[Pb]:e.LESS,[Bx]:e.LEQUAL,[Ib]:e.EQUAL,[Fb]:e.GEQUAL,[zb]:e.GREATER,[Bb]:e.NOTEQUAL};function pt(R,M){if(M.type===Ci&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Wn||M.magFilter===rf||M.magFilter===xl||M.magFilter===qa||M.minFilter===Wn||M.minFilter===rf||M.minFilter===xl||M.minFilter===qa)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(R,e.TEXTURE_WRAP_S,I[M.wrapS]),e.texParameteri(R,e.TEXTURE_WRAP_T,I[M.wrapT]),(R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)&&e.texParameteri(R,e.TEXTURE_WRAP_R,I[M.wrapR]),e.texParameteri(R,e.TEXTURE_MAG_FILTER,et[M.magFilter]),e.texParameteri(R,e.TEXTURE_MIN_FILTER,et[M.minFilter]),M.compareFunction&&(e.texParameteri(R,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(R,e.TEXTURE_COMPARE_FUNC,st[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===In||M.minFilter!==xl&&M.minFilter!==qa||M.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");e.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function zt(R,M){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));const J=M.source;let tt=h.get(J);tt===void 0&&(tt={},h.set(J,tt));const Q=V(M);if(Q!==R.__cacheKey){tt[Q]===void 0&&(tt[Q]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,G=!0),tt[Q].usedTimes++;const yt=tt[R.__cacheKey];yt!==void 0&&(tt[R.__cacheKey].usedTimes--,yt.usedTimes===0&&U(M)),R.__cacheKey=Q,R.__webglTexture=tt[Q].texture}return G}function Yt(R,M,G){let J=e.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=e.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=e.TEXTURE_3D);const tt=zt(R,M),Q=M.source;n.bindTexture(J,R.__webglTexture,e.TEXTURE0+G);const yt=i.get(Q);if(Q.version!==yt.__version||tt===!0){n.activeTexture(e.TEXTURE0+G);const lt=ne.getPrimaries(ne.workingColorSpace),ht=M.colorSpace===ra?null:ne.getPrimaries(M.colorSpace),Nt=M.colorSpace===ra||lt===ht?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let nt=x(M.image,!1,a.maxTextureSize);nt=Ct(M,nt);const ct=r.convert(M.format,M.colorSpace),Xt=r.convert(M.type);let Rt=_(M.internalFormat,ct,Xt,M.colorSpace,M.isVideoTexture);pt(J,M);let dt;const wt=M.mipmaps,Ht=M.isVideoTexture!==!0,me=yt.__version===void 0||tt===!0,L=Q.dataReady,it=S(M,nt);if(M.isDepthTexture)Rt=g(M.format===ys,M.type),me&&(Ht?n.texStorage2D(e.TEXTURE_2D,1,Rt,nt.width,nt.height):n.texImage2D(e.TEXTURE_2D,0,Rt,nt.width,nt.height,0,ct,Xt,null));else if(M.isDataTexture)if(wt.length>0){Ht&&me&&n.texStorage2D(e.TEXTURE_2D,it,Rt,wt[0].width,wt[0].height);for(let q=0,Z=wt.length;q<Z;q++)dt=wt[q],Ht?L&&n.texSubImage2D(e.TEXTURE_2D,q,0,0,dt.width,dt.height,ct,Xt,dt.data):n.texImage2D(e.TEXTURE_2D,q,Rt,dt.width,dt.height,0,ct,Xt,dt.data);M.generateMipmaps=!1}else Ht?(me&&n.texStorage2D(e.TEXTURE_2D,it,Rt,nt.width,nt.height),L&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,nt.width,nt.height,ct,Xt,nt.data)):n.texImage2D(e.TEXTURE_2D,0,Rt,nt.width,nt.height,0,ct,Xt,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ht&&me&&n.texStorage3D(e.TEXTURE_2D_ARRAY,it,Rt,wt[0].width,wt[0].height,nt.depth);for(let q=0,Z=wt.length;q<Z;q++)if(dt=wt[q],M.format!==qn)if(ct!==null)if(Ht){if(L)if(M.layerUpdates.size>0){const rt=u_(dt.width,dt.height,M.format,M.type);for(const Tt of M.layerUpdates){const qt=dt.data.subarray(Tt*rt/dt.data.BYTES_PER_ELEMENT,(Tt+1)*rt/dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,Tt,dt.width,dt.height,1,ct,qt,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,0,dt.width,dt.height,nt.depth,ct,dt.data,0,0)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,q,Rt,dt.width,dt.height,nt.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?L&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,0,dt.width,dt.height,nt.depth,ct,Xt,dt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,q,Rt,dt.width,dt.height,nt.depth,0,ct,Xt,dt.data)}else{Ht&&me&&n.texStorage2D(e.TEXTURE_2D,it,Rt,wt[0].width,wt[0].height);for(let q=0,Z=wt.length;q<Z;q++)dt=wt[q],M.format!==qn?ct!==null?Ht?L&&n.compressedTexSubImage2D(e.TEXTURE_2D,q,0,0,dt.width,dt.height,ct,dt.data):n.compressedTexImage2D(e.TEXTURE_2D,q,Rt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?L&&n.texSubImage2D(e.TEXTURE_2D,q,0,0,dt.width,dt.height,ct,Xt,dt.data):n.texImage2D(e.TEXTURE_2D,q,Rt,dt.width,dt.height,0,ct,Xt,dt.data)}else if(M.isDataArrayTexture)if(Ht){if(me&&n.texStorage3D(e.TEXTURE_2D_ARRAY,it,Rt,nt.width,nt.height,nt.depth),L)if(M.layerUpdates.size>0){const q=u_(nt.width,nt.height,M.format,M.type);for(const Z of M.layerUpdates){const rt=nt.data.subarray(Z*q/nt.data.BYTES_PER_ELEMENT,(Z+1)*q/nt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Z,nt.width,nt.height,1,ct,Xt,rt)}M.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ct,Xt,nt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Rt,nt.width,nt.height,nt.depth,0,ct,Xt,nt.data);else if(M.isData3DTexture)Ht?(me&&n.texStorage3D(e.TEXTURE_3D,it,Rt,nt.width,nt.height,nt.depth),L&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ct,Xt,nt.data)):n.texImage3D(e.TEXTURE_3D,0,Rt,nt.width,nt.height,nt.depth,0,ct,Xt,nt.data);else if(M.isFramebufferTexture){if(me)if(Ht)n.texStorage2D(e.TEXTURE_2D,it,Rt,nt.width,nt.height);else{let q=nt.width,Z=nt.height;for(let rt=0;rt<it;rt++)n.texImage2D(e.TEXTURE_2D,rt,Rt,q,Z,0,ct,Xt,null),q>>=1,Z>>=1}}else if(wt.length>0){if(Ht&&me){const q=Ut(wt[0]);n.texStorage2D(e.TEXTURE_2D,it,Rt,q.width,q.height)}for(let q=0,Z=wt.length;q<Z;q++)dt=wt[q],Ht?L&&n.texSubImage2D(e.TEXTURE_2D,q,0,0,ct,Xt,dt):n.texImage2D(e.TEXTURE_2D,q,Rt,ct,Xt,dt);M.generateMipmaps=!1}else if(Ht){if(me){const q=Ut(nt);n.texStorage2D(e.TEXTURE_2D,it,Rt,q.width,q.height)}L&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ct,Xt,nt)}else n.texImage2D(e.TEXTURE_2D,0,Rt,ct,Xt,nt);m(M)&&c(J),yt.__version=Q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function W(R,M,G){if(M.image.length!==6)return;const J=zt(R,M),tt=M.source;n.bindTexture(e.TEXTURE_CUBE_MAP,R.__webglTexture,e.TEXTURE0+G);const Q=i.get(tt);if(tt.version!==Q.__version||J===!0){n.activeTexture(e.TEXTURE0+G);const yt=ne.getPrimaries(ne.workingColorSpace),lt=M.colorSpace===ra?null:ne.getPrimaries(M.colorSpace),ht=M.colorSpace===ra||yt===lt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Nt=M.isCompressedTexture||M.image[0].isCompressedTexture,nt=M.image[0]&&M.image[0].isDataTexture,ct=[];for(let Z=0;Z<6;Z++)!Nt&&!nt?ct[Z]=x(M.image[Z],!0,a.maxCubemapSize):ct[Z]=nt?M.image[Z].image:M.image[Z],ct[Z]=Ct(M,ct[Z]);const Xt=ct[0],Rt=r.convert(M.format,M.colorSpace),dt=r.convert(M.type),wt=_(M.internalFormat,Rt,dt,M.colorSpace),Ht=M.isVideoTexture!==!0,me=Q.__version===void 0||J===!0,L=tt.dataReady;let it=S(M,Xt);pt(e.TEXTURE_CUBE_MAP,M);let q;if(Nt){Ht&&me&&n.texStorage2D(e.TEXTURE_CUBE_MAP,it,wt,Xt.width,Xt.height);for(let Z=0;Z<6;Z++){q=ct[Z].mipmaps;for(let rt=0;rt<q.length;rt++){const Tt=q[rt];M.format!==qn?Rt!==null?Ht?L&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,0,0,Tt.width,Tt.height,Rt,Tt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,wt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,0,0,Tt.width,Tt.height,Rt,dt,Tt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,wt,Tt.width,Tt.height,0,Rt,dt,Tt.data)}}}else{if(q=M.mipmaps,Ht&&me){q.length>0&&it++;const Z=Ut(ct[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,it,wt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(nt){Ht?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ct[Z].width,ct[Z].height,Rt,dt,ct[Z].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,wt,ct[Z].width,ct[Z].height,0,Rt,dt,ct[Z].data);for(let rt=0;rt<q.length;rt++){const qt=q[rt].image[Z].image;Ht?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,0,0,qt.width,qt.height,Rt,dt,qt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,wt,qt.width,qt.height,0,Rt,dt,qt.data)}}else{Ht?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Rt,dt,ct[Z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,wt,Rt,dt,ct[Z]);for(let rt=0;rt<q.length;rt++){const Tt=q[rt];Ht?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,0,0,Rt,dt,Tt.image[Z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,wt,Rt,dt,Tt.image[Z])}}}m(M)&&c(e.TEXTURE_CUBE_MAP),Q.__version=tt.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function $(R,M,G,J,tt,Q){const yt=r.convert(G.format,G.colorSpace),lt=r.convert(G.type),ht=_(G.internalFormat,yt,lt,G.colorSpace);if(!i.get(M).__hasExternalTextures){const nt=Math.max(1,M.width>>Q),ct=Math.max(1,M.height>>Q);tt===e.TEXTURE_3D||tt===e.TEXTURE_2D_ARRAY?n.texImage3D(tt,Q,ht,nt,ct,M.depth,0,yt,lt,null):n.texImage2D(tt,Q,ht,nt,ct,0,yt,lt,null)}n.bindFramebuffer(e.FRAMEBUFFER,R),xt(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,tt,i.get(G).__webglTexture,0,re(M)):(tt===e.TEXTURE_2D||tt>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,J,tt,i.get(G).__webglTexture,Q),n.bindFramebuffer(e.FRAMEBUFFER,null)}function mt(R,M,G){if(e.bindRenderbuffer(e.RENDERBUFFER,R),M.depthBuffer){const J=M.depthTexture,tt=J&&J.isDepthTexture?J.type:null,Q=g(M.stencilBuffer,tt),yt=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=re(M);xt(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,lt,Q,M.width,M.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,lt,Q,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,Q,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,yt,e.RENDERBUFFER,R)}else{const J=M.textures;for(let tt=0;tt<J.length;tt++){const Q=J[tt],yt=r.convert(Q.format,Q.colorSpace),lt=r.convert(Q.type),ht=_(Q.internalFormat,yt,lt,Q.colorSpace),Nt=re(M);G&&xt(M)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Nt,ht,M.width,M.height):xt(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Nt,ht,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,ht,M.width,M.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ft(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);const J=i.get(M.depthTexture).__webglTexture,tt=re(M);if(M.depthTexture.format===rs)xt(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,J,0,tt):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,J,0);else if(M.depthTexture.format===ys)xt(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,J,0,tt):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Dt(R){const M=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ft(M.__webglFramebuffer,R)}else if(G){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]=e.createRenderbuffer(),mt(M.__webglDepthbuffer[J],R,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=e.createRenderbuffer(),mt(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ft(R,M,G){const J=i.get(R);M!==void 0&&$(J.__webglFramebuffer,R,R.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),G!==void 0&&Dt(R)}function kt(R){const M=R.texture,G=i.get(R),J=i.get(M);R.addEventListener("dispose",A);const tt=R.textures,Q=R.isWebGLCubeRenderTarget===!0,yt=tt.length>1;if(yt||(J.__webglTexture===void 0&&(J.__webglTexture=e.createTexture()),J.__version=M.version,s.memory.textures++),Q){G.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[lt]=[];for(let ht=0;ht<M.mipmaps.length;ht++)G.__webglFramebuffer[lt][ht]=e.createFramebuffer()}else G.__webglFramebuffer[lt]=e.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let lt=0;lt<M.mipmaps.length;lt++)G.__webglFramebuffer[lt]=e.createFramebuffer()}else G.__webglFramebuffer=e.createFramebuffer();if(yt)for(let lt=0,ht=tt.length;lt<ht;lt++){const Nt=i.get(tt[lt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=e.createTexture(),s.memory.textures++)}if(R.samples>0&&xt(R)===!1){G.__webglMultisampledFramebuffer=e.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let lt=0;lt<tt.length;lt++){const ht=tt[lt];G.__webglColorRenderbuffer[lt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,G.__webglColorRenderbuffer[lt]);const Nt=r.convert(ht.format,ht.colorSpace),nt=r.convert(ht.type),ct=_(ht.internalFormat,Nt,nt,ht.colorSpace,R.isXRRenderTarget===!0),Xt=re(R);e.renderbufferStorageMultisample(e.RENDERBUFFER,Xt,ct,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.RENDERBUFFER,G.__webglColorRenderbuffer[lt])}e.bindRenderbuffer(e.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=e.createRenderbuffer(),mt(G.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Q){n.bindTexture(e.TEXTURE_CUBE_MAP,J.__webglTexture),pt(e.TEXTURE_CUBE_MAP,M);for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0)for(let ht=0;ht<M.mipmaps.length;ht++)$(G.__webglFramebuffer[lt][ht],R,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ht);else $(G.__webglFramebuffer[lt],R,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(M)&&c(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(yt){for(let lt=0,ht=tt.length;lt<ht;lt++){const Nt=tt[lt],nt=i.get(Nt);n.bindTexture(e.TEXTURE_2D,nt.__webglTexture),pt(e.TEXTURE_2D,Nt),$(G.__webglFramebuffer,R,Nt,e.COLOR_ATTACHMENT0+lt,e.TEXTURE_2D,0),m(Nt)&&c(e.TEXTURE_2D)}n.unbindTexture()}else{let lt=e.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(lt=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(lt,J.__webglTexture),pt(lt,M),M.mipmaps&&M.mipmaps.length>0)for(let ht=0;ht<M.mipmaps.length;ht++)$(G.__webglFramebuffer[ht],R,M,e.COLOR_ATTACHMENT0,lt,ht);else $(G.__webglFramebuffer,R,M,e.COLOR_ATTACHMENT0,lt,0);m(M)&&c(lt),n.unbindTexture()}R.depthBuffer&&Dt(R)}function ve(R){const M=R.textures;for(let G=0,J=M.length;G<J;G++){const tt=M[G];if(m(tt)){const Q=R.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,yt=i.get(tt).__webglTexture;n.bindTexture(Q,yt),c(Q),n.unbindTexture()}}}const w=[],be=[];function te(R){if(R.samples>0){if(xt(R)===!1){const M=R.textures,G=R.width,J=R.height;let tt=e.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,yt=i.get(R),lt=M.length>1;if(lt)for(let ht=0;ht<M.length;ht++)n.bindFramebuffer(e.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,yt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let ht=0;ht<M.length;ht++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(tt|=e.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(tt|=e.STENCIL_BUFFER_BIT)),lt){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,yt.__webglColorRenderbuffer[ht]);const Nt=i.get(M[ht]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Nt,0)}e.blitFramebuffer(0,0,G,J,0,0,G,J,tt,e.NEAREST),l===!0&&(w.length=0,be.length=0,w.push(e.COLOR_ATTACHMENT0+ht),R.depthBuffer&&R.resolveDepthBuffer===!1&&(w.push(Q),be.push(Q),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,be)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,w))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),lt)for(let ht=0;ht<M.length;ht++){n.bindFramebuffer(e.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.RENDERBUFFER,yt.__webglColorRenderbuffer[ht]);const Nt=i.get(M[ht]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,yt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.TEXTURE_2D,Nt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[M])}}}function re(R){return Math.min(a.maxSamples,R.samples)}function xt(R){const M=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ae(R){const M=s.render.frame;f.get(R)!==M&&(f.set(R,M),R.update())}function Ct(R,M){const G=R.colorSpace,J=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Ca&&G!==ra&&(ne.getTransfer(G)===ce?(J!==qn||tt!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function Ut(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=X,this.resetTextureUnits=D,this.setTexture2D=K,this.setTexture2DArray=j,this.setTexture3D=N,this.setTextureCube=H,this.rebindTextures=Ft,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=$,this.useMultisampledRTT=xt}function Vw(e,t){function n(i,a=ra){let r;const s=ne.getTransfer(a);if(i===Bi)return e.UNSIGNED_BYTE;if(i===Sp)return e.UNSIGNED_SHORT_4_4_4_4;if(i===yp)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Dx)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Cx)return e.BYTE;if(i===wx)return e.SHORT;if(i===Do)return e.UNSIGNED_SHORT;if(i===xp)return e.INT;if(i===rr)return e.UNSIGNED_INT;if(i===Ci)return e.FLOAT;if(i===Ko)return e.HALF_FLOAT;if(i===Ux)return e.ALPHA;if(i===Lx)return e.RGB;if(i===qn)return e.RGBA;if(i===Nx)return e.LUMINANCE;if(i===Ox)return e.LUMINANCE_ALPHA;if(i===rs)return e.DEPTH_COMPONENT;if(i===ys)return e.DEPTH_STENCIL;if(i===Px)return e.RED;if(i===Mp)return e.RED_INTEGER;if(i===Ix)return e.RG;if(i===Ep)return e.RG_INTEGER;if(i===Tp)return e.RGBA_INTEGER;if(i===iu||i===au||i===ru||i===su)if(s===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===iu)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===au)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ru)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===su)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===iu)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===au)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ru)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===su)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zh||i===Bh||i===Fh||i===Hh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===zh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gh||i===Vh||i===kh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Gh||i===Vh)return s===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===kh)return s===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xh||i===Wh||i===qh||i===Yh||i===jh||i===Zh||i===Kh||i===Qh||i===Jh||i===$h||i===td||i===ed||i===nd||i===id)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xh)return s===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wh)return s===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qh)return s===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yh)return s===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jh)return s===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zh)return s===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kh)return s===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qh)return s===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jh)return s===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$h)return s===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===td)return s===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ed)return s===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nd)return s===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===id)return s===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ou||i===ad||i===rd)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ou)return s===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ad)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zx||i===sd||i===od||i===ld)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ou)return r.COMPRESSED_RED_RGTC1_EXT;if(i===sd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===od)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ld)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ss?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}class kw extends Xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Gl extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xw={type:"move"};class Lf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,u=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(u&&t.hand){s=!0;for(const x of t.hand.values()){const m=n.getJointPose(x,i),c=this._getHandJoint(u,x);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,v=.005;u.inputState.pinching&&h>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&h<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xw)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Gl;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const Ww=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Yw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const a=new cn,r=t.properties.get(a);r.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Ta({vertexShader:Ww,fragmentShader:qw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ai(new mc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jw extends Ls{constructor(t,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,u=null,f=null,d=null,h=null,p=null,v=null;const x=new Yw,m=n.getContextAttributes();let c=null,_=null;const g=[],S=[],C=new Lt;let A=null;const b=new Xn;b.layers.enable(1),b.viewport=new Ge;const U=new Xn;U.layers.enable(2),U.viewport=new Ge;const T=[b,U],y=new kw;y.layers.enable(1),y.layers.enable(2);let D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let $=g[W];return $===void 0&&($=new Lf,g[W]=$),$.getTargetRaySpace()},this.getControllerGrip=function(W){let $=g[W];return $===void 0&&($=new Lf,g[W]=$),$.getGripSpace()},this.getHand=function(W){let $=g[W];return $===void 0&&($=new Lf,g[W]=$),$.getHandSpace()};function V(W){const $=S.indexOf(W.inputSource);if($===-1)return;const mt=g[$];mt!==void 0&&(mt.update(W.inputSource,W.frame,u||s),mt.dispatchEvent({type:W.type,data:W.inputSource}))}function K(){a.removeEventListener("select",V),a.removeEventListener("selectstart",V),a.removeEventListener("selectend",V),a.removeEventListener("squeeze",V),a.removeEventListener("squeezestart",V),a.removeEventListener("squeezeend",V),a.removeEventListener("end",K),a.removeEventListener("inputsourceschange",j);for(let W=0;W<g.length;W++){const $=S[W];$!==null&&(S[W]=null,g[W].disconnect($))}D=null,X=null,x.reset(),t.setRenderTarget(c),p=null,h=null,d=null,a=null,_=null,Yt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(W){if(a=W,a!==null){if(c=t.getRenderTarget(),a.addEventListener("select",V),a.addEventListener("selectstart",V),a.addEventListener("selectend",V),a.addEventListener("squeeze",V),a.addEventListener("squeezestart",V),a.addEventListener("squeezeend",V),a.addEventListener("end",K),a.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(C),a.renderState.layers===void 0){const $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,n,$),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new sr(p.framebufferWidth,p.framebufferHeight,{format:qn,type:Bi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,mt=null,ft=null;m.depth&&(ft=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,$=m.stencil?ys:rs,mt=m.stencil?Ss:rr);const Dt={colorFormat:n.RGBA8,depthFormat:ft,scaleFactor:r};d=new XRWebGLBinding(a,n),h=d.createProjectionLayer(Dt),a.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),_=new sr(h.textureWidth,h.textureHeight,{format:qn,type:Bi,depthTexture:new $x(h.textureWidth,h.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await a.requestReferenceSpace(o),Yt.setContext(a),Yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(W){for(let $=0;$<W.removed.length;$++){const mt=W.removed[$],ft=S.indexOf(mt);ft>=0&&(S[ft]=null,g[ft].disconnect(mt))}for(let $=0;$<W.added.length;$++){const mt=W.added[$];let ft=S.indexOf(mt);if(ft===-1){for(let Ft=0;Ft<g.length;Ft++)if(Ft>=S.length){S.push(mt),ft=Ft;break}else if(S[Ft]===null){S[Ft]=mt,ft=Ft;break}if(ft===-1)break}const Dt=g[ft];Dt&&Dt.connect(mt)}}const N=new F,H=new F;function I(W,$,mt){N.setFromMatrixPosition($.matrixWorld),H.setFromMatrixPosition(mt.matrixWorld);const ft=N.distanceTo(H),Dt=$.projectionMatrix.elements,Ft=mt.projectionMatrix.elements,kt=Dt[14]/(Dt[10]-1),ve=Dt[14]/(Dt[10]+1),w=(Dt[9]+1)/Dt[5],be=(Dt[9]-1)/Dt[5],te=(Dt[8]-1)/Dt[0],re=(Ft[8]+1)/Ft[0],xt=kt*te,Ae=kt*re,Ct=ft/(-te+re),Ut=Ct*-te;$.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ut),W.translateZ(Ct),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const R=kt+Ct,M=ve+Ct,G=xt-Ut,J=Ae+(ft-Ut),tt=w*ve/M*R,Q=be*ve/M*R;W.projectionMatrix.makePerspective(G,J,tt,Q,R,M),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function et(W,$){$===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices($.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(a===null)return;x.texture!==null&&(W.near=x.depthNear,W.far=x.depthFar),y.near=U.near=b.near=W.near,y.far=U.far=b.far=W.far,(D!==y.near||X!==y.far)&&(a.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,X=y.far,b.near=D,b.far=X,U.near=D,U.far=X,b.updateProjectionMatrix(),U.updateProjectionMatrix(),W.updateProjectionMatrix());const $=W.parent,mt=y.cameras;et(y,$);for(let ft=0;ft<mt.length;ft++)et(mt[ft],$);mt.length===2?I(y,b,U):y.projectionMatrix.copy(b.projectionMatrix),st(W,y,$)};function st(W,$,mt){mt===null?W.matrix.copy($.matrixWorld):(W.matrix.copy(mt.matrixWorld),W.matrix.invert(),W.matrix.multiply($.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ud*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let pt=null;function zt(W,$){if(f=$.getViewerPose(u||s),v=$,f!==null){const mt=f.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let ft=!1;mt.length!==y.cameras.length&&(y.cameras.length=0,ft=!0);for(let Ft=0;Ft<mt.length;Ft++){const kt=mt[Ft];let ve=null;if(p!==null)ve=p.getViewport(kt);else{const be=d.getViewSubImage(h,kt);ve=be.viewport,Ft===0&&(t.setRenderTargetTextures(_,be.colorTexture,h.ignoreDepthValues?void 0:be.depthStencilTexture),t.setRenderTarget(_))}let w=T[Ft];w===void 0&&(w=new Xn,w.layers.enable(Ft),w.viewport=new Ge,T[Ft]=w),w.matrix.fromArray(kt.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(kt.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(ve.x,ve.y,ve.width,ve.height),Ft===0&&(y.matrix.copy(w.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ft===!0&&y.cameras.push(w)}const Dt=a.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Ft=d.getDepthInformation(mt[0]);Ft&&Ft.isValid&&Ft.texture&&x.init(t,Ft,a.renderState)}}for(let mt=0;mt<g.length;mt++){const ft=S[mt],Dt=g[mt];ft!==null&&Dt!==void 0&&Dt.update(ft,$,u||s)}pt&&pt(W,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),v=null}const Yt=new Qx;Yt.setAnimationLoop(zt),this.setAnimationLoop=function(W){pt=W},this.dispose=function(){}}}const za=new Fi,Zw=new Oe;function Kw(e,t){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,Yx(e)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function a(m,c,_,g,S){c.isMeshBasicMaterial||c.isMeshLambertMaterial?r(m,c):c.isMeshToonMaterial?(r(m,c),d(m,c)):c.isMeshPhongMaterial?(r(m,c),f(m,c)):c.isMeshStandardMaterial?(r(m,c),h(m,c),c.isMeshPhysicalMaterial&&p(m,c,S)):c.isMeshMatcapMaterial?(r(m,c),v(m,c)):c.isMeshDepthMaterial?r(m,c):c.isMeshDistanceMaterial?(r(m,c),x(m,c)):c.isMeshNormalMaterial?r(m,c):c.isLineBasicMaterial?(s(m,c),c.isLineDashedMaterial&&o(m,c)):c.isPointsMaterial?l(m,c,_,g):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===un&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===un&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const _=t.get(c),g=_.envMap,S=_.envMapRotation;g&&(m.envMap.value=g,za.copy(S),za.x*=-1,za.y*=-1,za.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(za.y*=-1,za.z*=-1),m.envMapRotation.value.setFromMatrix4(Zw.makeRotationFromEuler(za)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function s(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function o(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,_,g){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*_,m.scale.value=g*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function f(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function d(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function h(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,_){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===un&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,c){c.matcap&&(m.matcap.value=c.matcap)}function x(m,c){const _=t.get(c).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Qw(e,t,n,i){let a={},r={},s=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const S=g.program;i.uniformBlockBinding(_,S)}function u(_,g){let S=a[_.id];S===void 0&&(v(_),S=f(_),a[_.id]=S,_.addEventListener("dispose",m));const C=g.program;i.updateUBOMapping(_,C);const A=t.render.frame;r[_.id]!==A&&(h(_),r[_.id]=A)}function f(_){const g=d();_.__bindingPointIndex=g;const S=e.createBuffer(),C=_.__size,A=_.usage;return e.bindBuffer(e.UNIFORM_BUFFER,S),e.bufferData(e.UNIFORM_BUFFER,C,A),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,g,S),S}function d(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const g=a[_.id],S=_.uniforms,C=_.__cache;e.bindBuffer(e.UNIFORM_BUFFER,g);for(let A=0,b=S.length;A<b;A++){const U=Array.isArray(S[A])?S[A]:[S[A]];for(let T=0,y=U.length;T<y;T++){const D=U[T];if(p(D,A,T,C)===!0){const X=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let K=0;for(let j=0;j<V.length;j++){const N=V[j],H=x(N);typeof N=="number"||typeof N=="boolean"?(D.__data[0]=N,e.bufferSubData(e.UNIFORM_BUFFER,X+K,D.__data)):N.isMatrix3?(D.__data[0]=N.elements[0],D.__data[1]=N.elements[1],D.__data[2]=N.elements[2],D.__data[3]=0,D.__data[4]=N.elements[3],D.__data[5]=N.elements[4],D.__data[6]=N.elements[5],D.__data[7]=0,D.__data[8]=N.elements[6],D.__data[9]=N.elements[7],D.__data[10]=N.elements[8],D.__data[11]=0):(N.toArray(D.__data,K),K+=H.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,X,D.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(_,g,S,C){const A=_.value,b=g+"_"+S;if(C[b]===void 0)return typeof A=="number"||typeof A=="boolean"?C[b]=A:C[b]=A.clone(),!0;{const U=C[b];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return C[b]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function v(_){const g=_.uniforms;let S=0;const C=16;for(let b=0,U=g.length;b<U;b++){const T=Array.isArray(g[b])?g[b]:[g[b]];for(let y=0,D=T.length;y<D;y++){const X=T[y],V=Array.isArray(X.value)?X.value:[X.value];for(let K=0,j=V.length;K<j;K++){const N=V[K],H=x(N),I=S%C;I!==0&&C-I<H.boundary&&(S+=C-I),X.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=S,S+=H.storage}}}const A=S%C;return A>0&&(S+=C-A),_.__size=S,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const S=s.indexOf(g.__bindingPointIndex);s.splice(S,1),e.deleteBuffer(a[g.id]),delete a[g.id],delete r[g.id]}function c(){for(const _ in a)e.deleteBuffer(a[_]);s=[],a={},r={}}return{bind:l,update:u,dispose:c}}class Jw{constructor(t={}){const{canvas:n=Vb(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=s;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const c=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jn,this.toneMapping=xa,this.toneMappingExposure=1;const g=this;let S=!1,C=0,A=0,b=null,U=-1,T=null;const y=new Ge,D=new Ge;let X=null;const V=new ie(0);let K=0,j=n.width,N=n.height,H=1,I=null,et=null;const st=new Ge(0,0,j,N),pt=new Ge(0,0,j,N);let zt=!1;const Yt=new Kx;let W=!1,$=!1;const mt=new Oe,ft=new F,Dt=new Ge,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function ve(){return b===null?H:1}let w=i;function be(E,O){return n.getContext(E,O)}try{const E={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vp}`),n.addEventListener("webglcontextlost",q,!1),n.addEventListener("webglcontextrestored",Z,!1),n.addEventListener("webglcontextcreationerror",rt,!1),w===null){const O="webgl2";if(w=be(O,E),w===null)throw be(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let te,re,xt,Ae,Ct,Ut,R,M,G,J,tt,Q,yt,lt,ht,Nt,nt,ct,Xt,Rt,dt,wt,Ht,me;function L(){te=new rC(w),te.init(),wt=new Vw(w,te),re=new $R(w,te,t,wt),xt=new Fw(w),Ae=new lC(w),Ct=new bw,Ut=new Gw(w,te,xt,Ct,re,wt,Ae),R=new eC(g),M=new aC(g),G=new mA(w),Ht=new QR(w,G),J=new sC(w,G,Ae,Ht),tt=new cC(w,J,G,Ae),Xt=new uC(w,re,Ut),Nt=new tC(Ct),Q=new Tw(g,R,M,te,re,Ht,Nt),yt=new Kw(g,Ct),lt=new Rw,ht=new Nw(te),ct=new KR(g,R,M,xt,tt,h,l),nt=new Bw(g,tt,re),me=new Qw(w,Ae,re,xt),Rt=new JR(w,te,Ae),dt=new oC(w,te,Ae),Ae.programs=Q.programs,g.capabilities=re,g.extensions=te,g.properties=Ct,g.renderLists=lt,g.shadowMap=nt,g.state=xt,g.info=Ae}L();const it=new jw(g,w);this.xr=it,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const E=te.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=te.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(j,N,!1))},this.getSize=function(E){return E.set(j,N)},this.setSize=function(E,O,z=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=E,N=O,n.width=Math.floor(E*H),n.height=Math.floor(O*H),z===!0&&(n.style.width=E+"px",n.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(j*H,N*H).floor()},this.setDrawingBufferSize=function(E,O,z){j=E,N=O,H=z,n.width=Math.floor(E*z),n.height=Math.floor(O*z),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(st)},this.setViewport=function(E,O,z,B){E.isVector4?st.set(E.x,E.y,E.z,E.w):st.set(E,O,z,B),xt.viewport(y.copy(st).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(pt)},this.setScissor=function(E,O,z,B){E.isVector4?pt.set(E.x,E.y,E.z,E.w):pt.set(E,O,z,B),xt.scissor(D.copy(pt).multiplyScalar(H).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(E){xt.setScissorTest(zt=E)},this.setOpaqueSort=function(E){I=E},this.setTransparentSort=function(E){et=E},this.getClearColor=function(E){return E.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(E=!0,O=!0,z=!0){let B=0;if(E){let P=!1;if(b!==null){const at=b.texture.format;P=at===Tp||at===Ep||at===Mp}if(P){const at=b.texture.type,ut=at===Bi||at===rr||at===Do||at===Ss||at===Sp||at===yp,gt=ct.getClearColor(),_t=ct.getClearAlpha(),bt=gt.r,At=gt.g,Mt=gt.b;ut?(p[0]=bt,p[1]=At,p[2]=Mt,p[3]=_t,w.clearBufferuiv(w.COLOR,0,p)):(v[0]=bt,v[1]=At,v[2]=Mt,v[3]=_t,w.clearBufferiv(w.COLOR,0,v))}else B|=w.COLOR_BUFFER_BIT}O&&(B|=w.DEPTH_BUFFER_BIT),z&&(B|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",q,!1),n.removeEventListener("webglcontextrestored",Z,!1),n.removeEventListener("webglcontextcreationerror",rt,!1),lt.dispose(),ht.dispose(),Ct.dispose(),R.dispose(),M.dispose(),tt.dispose(),Ht.dispose(),me.dispose(),Q.dispose(),it.dispose(),it.removeEventListener("sessionstart",Kn),it.removeEventListener("sessionend",wp),Da.stop()};function q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=Ae.autoReset,O=nt.enabled,z=nt.autoUpdate,B=nt.needsUpdate,P=nt.type;L(),Ae.autoReset=E,nt.enabled=O,nt.autoUpdate=z,nt.needsUpdate=B,nt.type=P}function rt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Tt(E){const O=E.target;O.removeEventListener("dispose",Tt),qt(O)}function qt(E){Re(E),Ct.remove(E)}function Re(E){const O=Ct.get(E).programs;O!==void 0&&(O.forEach(function(z){Q.releaseProgram(z)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,z,B,P,at){O===null&&(O=Ft);const ut=P.isMesh&&P.matrixWorld.determinant()<0,gt=aS(E,O,z,B,P);xt.setMaterial(B,ut);let _t=z.index,bt=1;if(B.wireframe===!0){if(_t=J.getWireframeAttribute(z),_t===void 0)return;bt=2}const At=z.drawRange,Mt=z.attributes.position;let Qt=At.start*bt,xe=(At.start+At.count)*bt;at!==null&&(Qt=Math.max(Qt,at.start*bt),xe=Math.min(xe,(at.start+at.count)*bt)),_t!==null?(Qt=Math.max(Qt,0),xe=Math.min(xe,_t.count)):Mt!=null&&(Qt=Math.max(Qt,0),xe=Math.min(xe,Mt.count));const Se=xe-Qt;if(Se<0||Se===1/0)return;Ht.setup(P,B,gt,z,_t);let dn,Jt=Rt;if(_t!==null&&(dn=G.get(_t),Jt=dt,Jt.setIndex(dn)),P.isMesh)B.wireframe===!0?(xt.setLineWidth(B.wireframeLinewidth*ve()),Jt.setMode(w.LINES)):Jt.setMode(w.TRIANGLES);else if(P.isLine){let vt=B.linewidth;vt===void 0&&(vt=1),xt.setLineWidth(vt*ve()),P.isLineSegments?Jt.setMode(w.LINES):P.isLineLoop?Jt.setMode(w.LINE_LOOP):Jt.setMode(w.LINE_STRIP)}else P.isPoints?Jt.setMode(w.POINTS):P.isSprite&&Jt.setMode(w.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Jt.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Jt.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const vt=P._multiDrawStarts,We=P._multiDrawCounts,$t=P._multiDrawCount,Fn=_t?G.get(_t).bytesPerElement:1,fr=Ct.get(B).currentProgram.getUniforms();for(let pn=0;pn<$t;pn++)fr.setValue(w,"_gl_DrawID",pn),Jt.render(vt[pn]/Fn,We[pn])}else if(P.isInstancedMesh)Jt.renderInstances(Qt,Se,P.count);else if(z.isInstancedBufferGeometry){const vt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,We=Math.min(z.instanceCount,vt);Jt.renderInstances(Qt,Se,We)}else Jt.render(Qt,Se)};function Xe(E,O,z){E.transparent===!0&&E.side===ei&&E.forceSinglePass===!1?(E.side=un,E.needsUpdate=!0,nl(E,O,z),E.side=Ea,E.needsUpdate=!0,nl(E,O,z),E.side=ei):nl(E,O,z)}this.compile=function(E,O,z=null){z===null&&(z=E),m=ht.get(z),m.init(O),_.push(m),z.traverseVisible(function(P){P.isLight&&P.layers.test(O.layers)&&(m.pushLight(P),P.castShadow&&m.pushShadow(P))}),E!==z&&E.traverseVisible(function(P){P.isLight&&P.layers.test(O.layers)&&(m.pushLight(P),P.castShadow&&m.pushShadow(P))}),m.setupLights();const B=new Set;return E.traverse(function(P){const at=P.material;if(at)if(Array.isArray(at))for(let ut=0;ut<at.length;ut++){const gt=at[ut];Xe(gt,z,P),B.add(gt)}else Xe(at,z,P),B.add(at)}),_.pop(),m=null,B},this.compileAsync=function(E,O,z=null){const B=this.compile(E,O,z);return new Promise(P=>{function at(){if(B.forEach(function(ut){Ct.get(ut).currentProgram.isReady()&&B.delete(ut)}),B.size===0){P(E);return}setTimeout(at,10)}te.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Kt=null;function hi(E){Kt&&Kt(E)}function Kn(){Da.stop()}function wp(){Da.start()}const Da=new Qx;Da.setAnimationLoop(hi),typeof self<"u"&&Da.setContext(self),this.setAnimationLoop=function(E){Kt=E,it.setAnimationLoop(E),E===null?Da.stop():Da.start()},it.addEventListener("sessionstart",Kn),it.addEventListener("sessionend",wp),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(O),O=it.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,O,b),m=ht.get(E,_.length),m.init(O),_.push(m),mt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Yt.setFromProjectionMatrix(mt),$=this.localClippingEnabled,W=Nt.init(this.clippingPlanes,$),x=lt.get(E,c.length),x.init(),c.push(x),it.enabled===!0&&it.isPresenting===!0){const at=g.xr.getDepthSensingMesh();at!==null&&_c(at,O,-1/0,g.sortObjects)}_c(E,O,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(I,et),kt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,kt&&ct.addToRenderList(x,E),this.info.render.frame++,W===!0&&Nt.beginShadows();const z=m.state.shadowsArray;nt.render(z,E,O),W===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=x.opaque,P=x.transmissive;if(m.setupLights(),O.isArrayCamera){const at=O.cameras;if(P.length>0)for(let ut=0,gt=at.length;ut<gt;ut++){const _t=at[ut];Up(B,P,E,_t)}kt&&ct.render(E);for(let ut=0,gt=at.length;ut<gt;ut++){const _t=at[ut];Dp(x,E,_t,_t.viewport)}}else P.length>0&&Up(B,P,E,O),kt&&ct.render(E),Dp(x,E,O);b!==null&&(Ut.updateMultisampleRenderTarget(b),Ut.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(g,E,O),Ht.resetDefaultState(),U=-1,T=null,_.pop(),_.length>0?(m=_[_.length-1],W===!0&&Nt.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function _c(E,O,z,B){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Yt.intersectsSprite(E)){B&&Dt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(mt);const ut=tt.update(E),gt=E.material;gt.visible&&x.push(E,ut,gt,z,Dt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Yt.intersectsObject(E))){const ut=tt.update(E),gt=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Dt.copy(E.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Dt.copy(ut.boundingSphere.center)),Dt.applyMatrix4(E.matrixWorld).applyMatrix4(mt)),Array.isArray(gt)){const _t=ut.groups;for(let bt=0,At=_t.length;bt<At;bt++){const Mt=_t[bt],Qt=gt[Mt.materialIndex];Qt&&Qt.visible&&x.push(E,ut,Qt,z,Dt.z,Mt)}}else gt.visible&&x.push(E,ut,gt,z,Dt.z,null)}}const at=E.children;for(let ut=0,gt=at.length;ut<gt;ut++)_c(at[ut],O,z,B)}function Dp(E,O,z,B){const P=E.opaque,at=E.transmissive,ut=E.transparent;m.setupLightsView(z),W===!0&&Nt.setGlobalState(g.clippingPlanes,z),B&&xt.viewport(y.copy(B)),P.length>0&&el(P,O,z),at.length>0&&el(at,O,z),ut.length>0&&el(ut,O,z),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Up(E,O,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new sr(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Ko:Bi,minFilter:qa,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const at=m.state.transmissionRenderTarget[B.id],ut=B.viewport||y;at.setSize(ut.z,ut.w);const gt=g.getRenderTarget();g.setRenderTarget(at),g.getClearColor(V),K=g.getClearAlpha(),K<1&&g.setClearColor(16777215,.5),kt?ct.render(z):g.clear();const _t=g.toneMapping;g.toneMapping=xa;const bt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),W===!0&&Nt.setGlobalState(g.clippingPlanes,B),el(E,z,B),Ut.updateMultisampleRenderTarget(at),Ut.updateRenderTargetMipmap(at),te.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let Mt=0,Qt=O.length;Mt<Qt;Mt++){const xe=O[Mt],Se=xe.object,dn=xe.geometry,Jt=xe.material,vt=xe.group;if(Jt.side===ei&&Se.layers.test(B.layers)){const We=Jt.side;Jt.side=un,Jt.needsUpdate=!0,Lp(Se,z,B,dn,Jt,vt),Jt.side=We,Jt.needsUpdate=!0,At=!0}}At===!0&&(Ut.updateMultisampleRenderTarget(at),Ut.updateRenderTargetMipmap(at))}g.setRenderTarget(gt),g.setClearColor(V,K),bt!==void 0&&(B.viewport=bt),g.toneMapping=_t}function el(E,O,z){const B=O.isScene===!0?O.overrideMaterial:null;for(let P=0,at=E.length;P<at;P++){const ut=E[P],gt=ut.object,_t=ut.geometry,bt=B===null?ut.material:B,At=ut.group;gt.layers.test(z.layers)&&Lp(gt,O,z,_t,bt,At)}}function Lp(E,O,z,B,P,at){E.onBeforeRender(g,O,z,B,P,at),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),P.transparent===!0&&P.side===ei&&P.forceSinglePass===!1?(P.side=un,P.needsUpdate=!0,g.renderBufferDirect(z,O,B,P,E,at),P.side=Ea,P.needsUpdate=!0,g.renderBufferDirect(z,O,B,P,E,at),P.side=ei):g.renderBufferDirect(z,O,B,P,E,at),E.onAfterRender(g,O,z,B,P,at)}function nl(E,O,z){O.isScene!==!0&&(O=Ft);const B=Ct.get(E),P=m.state.lights,at=m.state.shadowsArray,ut=P.state.version,gt=Q.getParameters(E,P.state,at,O,z),_t=Q.getProgramCacheKey(gt);let bt=B.programs;B.environment=E.isMeshStandardMaterial?O.environment:null,B.fog=O.fog,B.envMap=(E.isMeshStandardMaterial?M:R).get(E.envMap||B.environment),B.envMapRotation=B.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,bt===void 0&&(E.addEventListener("dispose",Tt),bt=new Map,B.programs=bt);let At=bt.get(_t);if(At!==void 0){if(B.currentProgram===At&&B.lightsStateVersion===ut)return Op(E,gt),At}else gt.uniforms=Q.getUniforms(E),E.onBeforeCompile(gt,g),At=Q.acquireProgram(gt,_t),bt.set(_t,At),B.uniforms=gt.uniforms;const Mt=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Mt.clippingPlanes=Nt.uniform),Op(E,gt),B.needsLights=sS(E),B.lightsStateVersion=ut,B.needsLights&&(Mt.ambientLightColor.value=P.state.ambient,Mt.lightProbe.value=P.state.probe,Mt.directionalLights.value=P.state.directional,Mt.directionalLightShadows.value=P.state.directionalShadow,Mt.spotLights.value=P.state.spot,Mt.spotLightShadows.value=P.state.spotShadow,Mt.rectAreaLights.value=P.state.rectArea,Mt.ltc_1.value=P.state.rectAreaLTC1,Mt.ltc_2.value=P.state.rectAreaLTC2,Mt.pointLights.value=P.state.point,Mt.pointLightShadows.value=P.state.pointShadow,Mt.hemisphereLights.value=P.state.hemi,Mt.directionalShadowMap.value=P.state.directionalShadowMap,Mt.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Mt.spotShadowMap.value=P.state.spotShadowMap,Mt.spotLightMatrix.value=P.state.spotLightMatrix,Mt.spotLightMap.value=P.state.spotLightMap,Mt.pointShadowMap.value=P.state.pointShadowMap,Mt.pointShadowMatrix.value=P.state.pointShadowMatrix),B.currentProgram=At,B.uniformsList=null,At}function Np(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=lu.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Op(E,O){const z=Ct.get(E);z.outputColorSpace=O.outputColorSpace,z.batching=O.batching,z.batchingColor=O.batchingColor,z.instancing=O.instancing,z.instancingColor=O.instancingColor,z.instancingMorph=O.instancingMorph,z.skinning=O.skinning,z.morphTargets=O.morphTargets,z.morphNormals=O.morphNormals,z.morphColors=O.morphColors,z.morphTargetsCount=O.morphTargetsCount,z.numClippingPlanes=O.numClippingPlanes,z.numIntersection=O.numClipIntersection,z.vertexAlphas=O.vertexAlphas,z.vertexTangents=O.vertexTangents,z.toneMapping=O.toneMapping}function aS(E,O,z,B,P){O.isScene!==!0&&(O=Ft),Ut.resetTextureUnits();const at=O.fog,ut=B.isMeshStandardMaterial?O.environment:null,gt=b===null?g.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Ca,_t=(B.isMeshStandardMaterial?M:R).get(B.envMap||ut),bt=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,At=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Mt=!!z.morphAttributes.position,Qt=!!z.morphAttributes.normal,xe=!!z.morphAttributes.color;let Se=xa;B.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Se=g.toneMapping);const dn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Jt=dn!==void 0?dn.length:0,vt=Ct.get(B),We=m.state.lights;if(W===!0&&($===!0||E!==T)){const Rn=E===T&&B.id===U;Nt.setState(B,E,Rn)}let $t=!1;B.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==We.state.version||vt.outputColorSpace!==gt||P.isBatchedMesh&&vt.batching===!1||!P.isBatchedMesh&&vt.batching===!0||P.isBatchedMesh&&vt.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&vt.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&vt.instancing===!1||!P.isInstancedMesh&&vt.instancing===!0||P.isSkinnedMesh&&vt.skinning===!1||!P.isSkinnedMesh&&vt.skinning===!0||P.isInstancedMesh&&vt.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&vt.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&vt.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&vt.instancingMorph===!1&&P.morphTexture!==null||vt.envMap!==_t||B.fog===!0&&vt.fog!==at||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==Nt.numPlanes||vt.numIntersection!==Nt.numIntersection)||vt.vertexAlphas!==bt||vt.vertexTangents!==At||vt.morphTargets!==Mt||vt.morphNormals!==Qt||vt.morphColors!==xe||vt.toneMapping!==Se||vt.morphTargetsCount!==Jt)&&($t=!0):($t=!0,vt.__version=B.version);let Fn=vt.currentProgram;$t===!0&&(Fn=nl(B,O,P));let fr=!1,pn=!1,vc=!1;const Ce=Fn.getUniforms(),Vi=vt.uniforms;if(xt.useProgram(Fn.program)&&(fr=!0,pn=!0,vc=!0),B.id!==U&&(U=B.id,pn=!0),fr||T!==E){Ce.setValue(w,"projectionMatrix",E.projectionMatrix),Ce.setValue(w,"viewMatrix",E.matrixWorldInverse);const Rn=Ce.map.cameraPosition;Rn!==void 0&&Rn.setValue(w,ft.setFromMatrixPosition(E.matrixWorld)),re.logarithmicDepthBuffer&&Ce.setValue(w,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ce.setValue(w,"isOrthographic",E.isOrthographicCamera===!0),T!==E&&(T=E,pn=!0,vc=!0)}if(P.isSkinnedMesh){Ce.setOptional(w,P,"bindMatrix"),Ce.setOptional(w,P,"bindMatrixInverse");const Rn=P.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Ce.setValue(w,"boneTexture",Rn.boneTexture,Ut))}P.isBatchedMesh&&(Ce.setOptional(w,P,"batchingTexture"),Ce.setValue(w,"batchingTexture",P._matricesTexture,Ut),Ce.setOptional(w,P,"batchingIdTexture"),Ce.setValue(w,"batchingIdTexture",P._indirectTexture,Ut),Ce.setOptional(w,P,"batchingColorTexture"),P._colorsTexture!==null&&Ce.setValue(w,"batchingColorTexture",P._colorsTexture,Ut));const xc=z.morphAttributes;if((xc.position!==void 0||xc.normal!==void 0||xc.color!==void 0)&&Xt.update(P,z,Fn),(pn||vt.receiveShadow!==P.receiveShadow)&&(vt.receiveShadow=P.receiveShadow,Ce.setValue(w,"receiveShadow",P.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Vi.envMap.value=_t,Vi.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&O.environment!==null&&(Vi.envMapIntensity.value=O.environmentIntensity),pn&&(Ce.setValue(w,"toneMappingExposure",g.toneMappingExposure),vt.needsLights&&rS(Vi,vc),at&&B.fog===!0&&yt.refreshFogUniforms(Vi,at),yt.refreshMaterialUniforms(Vi,B,H,N,m.state.transmissionRenderTarget[E.id]),lu.upload(w,Np(vt),Vi,Ut)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(lu.upload(w,Np(vt),Vi,Ut),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ce.setValue(w,"center",P.center),Ce.setValue(w,"modelViewMatrix",P.modelViewMatrix),Ce.setValue(w,"normalMatrix",P.normalMatrix),Ce.setValue(w,"modelMatrix",P.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Rn=B.uniformsGroups;for(let Sc=0,oS=Rn.length;Sc<oS;Sc++){const Pp=Rn[Sc];me.update(Pp,Fn),me.bind(Pp,Fn)}}return Fn}function rS(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function sS(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,O,z){Ct.get(E.texture).__webglTexture=O,Ct.get(E.depthTexture).__webglTexture=z;const B=Ct.get(E);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const z=Ct.get(E);z.__webglFramebuffer=O,z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,z=0){b=E,C=O,A=z;let B=!0,P=null,at=!1,ut=!1;if(E){const _t=Ct.get(E);_t.__useDefaultFramebuffer!==void 0?(xt.bindFramebuffer(w.FRAMEBUFFER,null),B=!1):_t.__webglFramebuffer===void 0?Ut.setupRenderTarget(E):_t.__hasExternalTextures&&Ut.rebindTextures(E,Ct.get(E.texture).__webglTexture,Ct.get(E.depthTexture).__webglTexture);const bt=E.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(ut=!0);const At=Ct.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(At[O])?P=At[O][z]:P=At[O],at=!0):E.samples>0&&Ut.useMultisampledRTT(E)===!1?P=Ct.get(E).__webglMultisampledFramebuffer:Array.isArray(At)?P=At[z]:P=At,y.copy(E.viewport),D.copy(E.scissor),X=E.scissorTest}else y.copy(st).multiplyScalar(H).floor(),D.copy(pt).multiplyScalar(H).floor(),X=zt;if(xt.bindFramebuffer(w.FRAMEBUFFER,P)&&B&&xt.drawBuffers(E,P),xt.viewport(y),xt.scissor(D),xt.setScissorTest(X),at){const _t=Ct.get(E.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+O,_t.__webglTexture,z)}else if(ut){const _t=Ct.get(E.texture),bt=O||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,_t.__webglTexture,z||0,bt)}U=-1},this.readRenderTargetPixels=function(E,O,z,B,P,at,ut){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ut!==void 0&&(gt=gt[ut]),gt){xt.bindFramebuffer(w.FRAMEBUFFER,gt);try{const _t=E.texture,bt=_t.format,At=_t.type;if(!re.textureFormatReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-B&&z>=0&&z<=E.height-P&&w.readPixels(O,z,B,P,wt.convert(bt),wt.convert(At),at)}finally{const _t=b!==null?Ct.get(b).__webglFramebuffer:null;xt.bindFramebuffer(w.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(E,O,z,B,P,at,ut){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ut!==void 0&&(gt=gt[ut]),gt){xt.bindFramebuffer(w.FRAMEBUFFER,gt);try{const _t=E.texture,bt=_t.format,At=_t.type;if(!re.textureFormatReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-B&&z>=0&&z<=E.height-P){const Mt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Mt),w.bufferData(w.PIXEL_PACK_BUFFER,at.byteLength,w.STREAM_READ),w.readPixels(O,z,B,P,wt.convert(bt),wt.convert(At),0),w.flush();const Qt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);await kb(w,Qt,4);try{w.bindBuffer(w.PIXEL_PACK_BUFFER,Mt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,at)}finally{w.deleteBuffer(Mt),w.deleteSync(Qt)}return at}}finally{const _t=b!==null?Ct.get(b).__webglFramebuffer:null;xt.bindFramebuffer(w.FRAMEBUFFER,_t)}}},this.copyFramebufferToTexture=function(E,O=null,z=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);const B=Math.pow(2,-z),P=Math.floor(E.image.width*B),at=Math.floor(E.image.height*B),ut=O!==null?O.x:0,gt=O!==null?O.y:0;Ut.setTexture2D(E,0),w.copyTexSubImage2D(w.TEXTURE_2D,z,0,0,ut,gt,P,at),xt.unbindTexture()},this.copyTextureToTexture=function(E,O,z=null,B=null,P=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1],O=arguments[2],P=arguments[3]||0,z=null);let at,ut,gt,_t,bt,At;z!==null?(at=z.max.x-z.min.x,ut=z.max.y-z.min.y,gt=z.min.x,_t=z.min.y):(at=E.image.width,ut=E.image.height,gt=0,_t=0),B!==null?(bt=B.x,At=B.y):(bt=0,At=0);const Mt=wt.convert(O.format),Qt=wt.convert(O.type);Ut.setTexture2D(O,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,O.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,O.unpackAlignment);const xe=w.getParameter(w.UNPACK_ROW_LENGTH),Se=w.getParameter(w.UNPACK_IMAGE_HEIGHT),dn=w.getParameter(w.UNPACK_SKIP_PIXELS),Jt=w.getParameter(w.UNPACK_SKIP_ROWS),vt=w.getParameter(w.UNPACK_SKIP_IMAGES),We=E.isCompressedTexture?E.mipmaps[P]:E.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,We.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,We.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,gt),w.pixelStorei(w.UNPACK_SKIP_ROWS,_t),E.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,P,bt,At,at,ut,Mt,Qt,We.data):E.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,P,bt,At,We.width,We.height,Mt,We.data):w.texSubImage2D(w.TEXTURE_2D,P,bt,At,at,ut,Mt,Qt,We),w.pixelStorei(w.UNPACK_ROW_LENGTH,xe),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Se),w.pixelStorei(w.UNPACK_SKIP_PIXELS,dn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Jt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,vt),P===0&&O.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),xt.unbindTexture()},this.copyTextureToTexture3D=function(E,O,z=null,B=null,P=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,B=arguments[1]||null,E=arguments[2],O=arguments[3],P=arguments[4]||0);let at,ut,gt,_t,bt,At,Mt,Qt,xe;const Se=E.isCompressedTexture?E.mipmaps[P]:E.image;z!==null?(at=z.max.x-z.min.x,ut=z.max.y-z.min.y,gt=z.max.z-z.min.z,_t=z.min.x,bt=z.min.y,At=z.min.z):(at=Se.width,ut=Se.height,gt=Se.depth,_t=0,bt=0,At=0),B!==null?(Mt=B.x,Qt=B.y,xe=B.z):(Mt=0,Qt=0,xe=0);const dn=wt.convert(O.format),Jt=wt.convert(O.type);let vt;if(O.isData3DTexture)Ut.setTexture3D(O,0),vt=w.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)Ut.setTexture2DArray(O,0),vt=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,O.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,O.unpackAlignment);const We=w.getParameter(w.UNPACK_ROW_LENGTH),$t=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Fn=w.getParameter(w.UNPACK_SKIP_PIXELS),fr=w.getParameter(w.UNPACK_SKIP_ROWS),pn=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Se.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Se.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,_t),w.pixelStorei(w.UNPACK_SKIP_ROWS,bt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,At),E.isDataTexture||E.isData3DTexture?w.texSubImage3D(vt,P,Mt,Qt,xe,at,ut,gt,dn,Jt,Se.data):O.isCompressedArrayTexture?w.compressedTexSubImage3D(vt,P,Mt,Qt,xe,at,ut,gt,dn,Se.data):w.texSubImage3D(vt,P,Mt,Qt,xe,at,ut,gt,dn,Jt,Se),w.pixelStorei(w.UNPACK_ROW_LENGTH,We),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,$t),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Fn),w.pixelStorei(w.UNPACK_SKIP_ROWS,fr),w.pixelStorei(w.UNPACK_SKIP_IMAGES,pn),P===0&&O.generateMipmaps&&w.generateMipmap(vt),xt.unbindTexture()},this.initRenderTarget=function(E){Ct.get(E).__webglFramebuffer===void 0&&Ut.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ut.setTextureCube(E,0):E.isData3DTexture?Ut.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ut.setTexture2DArray(E,0):Ut.setTexture2D(E,0),xt.unbindTexture()},this.resetState=function(){C=0,A=0,b=null,xt.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=t===bp?"display-p3":"srgb",n.unpackColorSpace=ne.workingColorSpace===dc?"display-p3":"srgb"}}class $w extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vp);new F(0,0,1);const Qi=new Lt(25,25),fd=1,t2=.05*fd,Zr=75,e2=25;class n2{constructor(t,n,i=new Lt(Math.random(),Math.random()).normalize(),a=fd,r){this.simulationDimensions=r;const s=new Lt(Math.random()*this.simulationDimensions.width-this.simulationDimensions.width/2,Math.random()*this.simulationDimensions.height-this.simulationDimensions.height/2);this.setMesh(t),this.position=n||s,this.velocity=i.multiplyScalar(a),this.acceleration=new Lt(0,0),this.direction=new Lt(0,-1),this.setDirection(this.velocity)}align(t){let n=new Lt;n.add(this.velocity);let i=1;t.forEach(r=>{this.position.distanceToSquared(r.position)<Zr*Zr&&(n.add(r.velocity),i++)}),n.divideScalar(i);let a=n.sub(this.velocity);return a.clampLength(0,1),a}cohesion(t){let n=new Lt;n.add(this.position);let i=1;t.forEach(r=>{this.position.distanceToSquared(r.position)<Zr*Zr&&(n.add(r.position),i++)}),i&&n.divideScalar(i);let a=n.sub(this.position);return a.clampLength(0,1),a}repulsion(t){let n=new Lt,i=0;if(t.length==0)return n;t.forEach(r=>{let s=this.position.distanceTo(r.position);if(s<e2){let o=new Lt;o.add(this.position),o.sub(r.position),o.divideScalar(s),n.add(o),i++}}),i&&n.divideScalar(i);let a=n.sub(this.velocity);return a.clampLength(0,1),a}update(t){let n=this.repulsion(t).multiplyScalar(.65),i=this.align(t).multiplyScalar(.15),a=this.cohesion(t).multiplyScalar(.15);this.acceleration=n,this.acceleration.add(i),this.acceleration.add(a),this.acceleration.normalize().multiplyScalar(t2),this.velocity.add(this.acceleration),this.velocity.normalize().multiplyScalar(fd),this.position.add(this.velocity);const r=new Lt((this.simulationDimensions.width+Qi.x)/2,(this.simulationDimensions.height+Qi.y)/2);this.position.x<-r.x?this.position.setX(r.x):this.position.x>r.x&&this.position.setX(-r.x),this.position.y<-r.y?this.position.setY(r.y):this.position.y>r.y&&this.position.setY(-r.y),this.setDirection(this.velocity),this.mesh.position.set(this.position.x,this.position.y,0)}setDirection(t){let n=t.angle()+Math.PI/2;this.mesh.rotation.set(0,0,n)}setMesh(t){const n=new wa,i=new Float32Array([0,-Qi.y/2,0,Qi.x/2,Qi.y/2,0,0,Qi.y/3,0,-Qi.x/2,Qi.y/2,0]),a=[0,1,2,0,2,3];n.setAttribute("position",new jn(i,3)),n.setIndex(a);const r=Math.random()*.8+.1;let s=new ie(r,r,r);const o=new Rp({color:s,side:ei});this.mesh=new ai(n,o),t.add(this.mesh)}setColor(t){this.mesh.material.color.set(t)}}class i2{constructor(t,n,i){this.boidArray=[],this.scene=t;for(let a=0;a<n;a++)this.boidArray.push(new n2(t,void 0,void 0,void 0,i))}update(){this.boidArray.forEach(t=>{let n=[];this.boidArray.forEach(i=>{let a=new Lt;a.subVectors(i.position,t.position),i!=t&&t.position.distanceToSquared(i.position)<Zr*Zr&&Math.abs(t.velocity.angleTo(a))<3*Math.PI/4&&n.push(i)}),t.update(n)})}}function a2(e){const t=new $w,n=1e3;let i=window.innerWidth/window.innerHeight;const a=new Jx(n*i/-2,n*i/2,n/2,n/-2,.1,10);a.position.z=5;const r=new Jw({canvas:e,antialias:!0,alpha:!0});r.setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight);const s={width:n*i,height:n},o=new i2(t,30,s);function l(){i=window.innerWidth/window.innerHeight,s.width=n*i,s.height=n,a.left=n*i/-2,a.right=n*i/2,a.top=n/2,a.bottom=n/-2,a.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",l);function u(){o.update(),r.render(t,a)}return r.setAnimationLoop(u),()=>{window.removeEventListener("resize",l),r.setAnimationLoop(null),t.traverse(f=>{f.geometry&&f.geometry.dispose(),f.material&&(Array.isArray(f.material)?f.material.forEach(d=>d.dispose()):f.material.dispose())}),r.dispose()}}const r2=()=>{const e=k.useRef(null);return k.useEffect(()=>{let t;return e.current&&(t=a2(e.current)),()=>{typeof t=="function"&&t()}},[]),St.jsx("canvas",{id:"c",ref:e})},s2=({children:e})=>St.jsxs(St.Fragment,{children:[St.jsxs("div",{className:"container-col",children:[St.jsx(XT,{}),St.jsx("div",{className:"content",children:e}),St.jsx(WT,{})]}),St.jsx(r2,{})]}),o2=()=>{const{t:e}=fp();return St.jsxs("div",{children:[St.jsx("h1",{className:"text-title",dangerouslySetInnerHTML:{__html:e("title")}}),St.jsx("h2",{children:e("subtitle")})]})},l2=e=>{k.useEffect(()=>{const t=e.current;if(!t)return;const n=a=>{const r=t.getBoundingClientRect(),s=a.clientX-r.left,o=a.clientY-r.top,l=r.width/2,u=r.height/2,f=(s-l)/l,d=(o-u)/u,h=f*10,p=-d*10;t.style.transition="transform 0.1s ease-out",t.style.transform=`perspective(1000px) rotateY(${h}deg) rotateX(${p}deg)`},i=()=>{t.style.transition="transform 0.5s ease-out",t.style.transform="perspective(1000px) rotateY(0) rotateX(0)"};return t.addEventListener("mousemove",n),t.addEventListener("mouseleave",i),()=>{t&&(t.removeEventListener("mousemove",n),t.removeEventListener("mouseleave",i))}},[e])},u2=()=>{const e=[{title:"Simulating Ocean",githubLink:"https://github.com/JudasBricot/Simple-Game-Engine/tree/fft-ocean",imageSrc:"/img/project-wvs-thumbnail-400.png",descriptionParas:["This project is an implementation and improvement of J. Tessendorf's paper 'Simulating Ocean'. It is built upon a simple 2D OpenGL engine that I implemented following TheCherno tutorials. I added some elements to be able to render in 3D.","The goal was to simulate the height of a 'part' of the ocean, which means that there is no advanced water rendering, only a flat plastic shader. The height generation is done by generating a spectrum and applying a 2D Inverse Fourier Transform. This is all done on the GPU using Compute Shaders for obvious performance reasons."]},{title:"GlassOverflow",githubLink:"https://github.com/Skyepulse/FluidSimulatorGame/tree/x64-release-files",imageSrc:"/img/project-gls-0.png",descriptionParas:["This is a school group project that features 2D real-time fluid simulation. I was in charge of designing and implementing the 2D engine.","Additionally, I added a rendering pass for the game that takes the positions of the water particles and generates pixel art-styled visuals. This entire process is exclusively done on the GPU using Compute Shaders."]},{title:"Island Generation and Raycasting",githubLink:"https://github.com/JudasBricot/2D-RayTracing-Island",imageSrc:"/img/project-isld-thumbnail-400.jpg",descriptionParas:["In this project, I used Unity to develop a simple Island generator. The islands are generated using my own implementation of the Perlin noise algorithm, combined with a falloff technique that ensures the border of the map is always water.","Additionally, I implemented a raytracing effect on the CPU, which applies shadows to all the pixels on the map, enhancing the visual realism of the generated islands."]},{title:"Generating faces with diffusion-based models",githubLink:"https://github.com/arthur-wuhrlin/CS5242",imageSrc:"/img/project_face.png",descriptionParas:["In this project, with three other students, we explore various method for personalized content synthesis applied to face generation using few user-specified samples. Namely, Custom Diffusion, Cross Initialization, LoRA and Textual Inversion. We also propose to combine the Custom Diffusion method with the Cross Initialization method and provide some evaluation metrics we used to assert the quality of the different methods used."]},{title:"Marching Cubes Implementation",githubLink:"https://github.com/arthur-wuhrlin/marching-cubes",imageSrc:"/img/project_mcb.png",descriptionParas:["This is the source code for my TIPE for which I implemented the algorithm of marching cubes in Python. It was developped during my second year in preparatory school back in 2022."]},{title:"Smoking Algorithm",githubLink:"https://github.com/arthur-wuhrlin/Smoking-Algorithm",imageSrc:"/img/project_salg.png",descriptionParas:["Following my readings on the generative art Smoking Algorithm, I implemented this algorithm in C# to generate colorful pictures."]}];return St.jsx("div",{className:"box-container",children:e.map((t,n)=>{const i=k.useRef(null);return l2(i),St.jsxs("div",{className:"box",children:[St.jsx("div",{className:"text-hover-zoom",children:St.jsx("h2",{children:St.jsx("a",{href:t.githubLink,target:"_blank",rel:"noopener noreferrer",children:t.title})})}),St.jsx("div",{className:"image-container",children:St.jsx("img",{ref:i,src:t.imageSrc,alt:`${t.title} thumbnail`})}),t.descriptionParas.map((a,r)=>St.jsx("p",{children:a},r))]},n)})})};function c2(){return St.jsx(sE,{children:St.jsx(uE,{children:St.jsxs(OT,{children:[" ",St.jsx(s2,{children:St.jsxs(cT,{children:[St.jsx(wh,{path:"/",element:St.jsx(o2,{})}),St.jsx(wh,{path:"/projects",element:St.jsx(u2,{})})]})})]})})})}rE.createRoot(document.getElementById("root")).render(St.jsx(bS.StrictMode,{children:St.jsx(c2,{})}));
