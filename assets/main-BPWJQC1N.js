import la from"https://esm.sh/react@18.2.0";import Qm from"https://esm.sh/react-dom@18.2.0/client";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var ca={exports:{}},yr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pc;function Jm(){if(pc)return yr;pc=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,s,i){var o=null;if(i!==void 0&&(o=""+i),s.key!==void 0&&(o=""+s.key),"key"in s){i={};for(var c in s)c!=="key"&&(i[c]=s[c])}else i=s;return s=i.ref,{$$typeof:n,type:r,key:o,ref:s!==void 0?s:null,props:i}}return yr.Fragment=e,yr.jsx=t,yr.jsxs=t,yr}var gc;function Ym(){return gc||(gc=1,ca.exports=Jm()),ca.exports}var l=Ym(),ua={exports:{}},Z={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c;function Xm(){if(_c)return Z;_c=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.consumer"),o=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function _(S){return S===null||typeof S!="object"?null:(S=g&&S[g]||S["@@iterator"],typeof S=="function"?S:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,P={};function N(S,B,G){this.props=S,this.context=B,this.refs=P,this.updater=G||b}N.prototype.isReactComponent={},N.prototype.setState=function(S,B){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,B,"setState")},N.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function D(){}D.prototype=N.prototype;function C(S,B,G){this.props=S,this.context=B,this.refs=P,this.updater=G||b}var L=C.prototype=new D;L.constructor=C,T(L,N.prototype),L.isPureReactComponent=!0;var O=Array.isArray,V={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function I(S,B,G,W,ne,ue){return G=ue.ref,{$$typeof:n,type:S,key:B,ref:G!==void 0?G:null,props:ue}}function x(S,B){return I(S.type,B,void 0,void 0,void 0,S.props)}function y(S){return typeof S=="object"&&S!==null&&S.$$typeof===n}function k(S){var B={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(G){return B[G]})}var E=/\/+/g;function R(S,B){return typeof S=="object"&&S!==null&&S.key!=null?k(""+S.key):B.toString(36)}function v(){}function oe(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(v,v):(S.status="pending",S.then(function(B){S.status==="pending"&&(S.status="fulfilled",S.value=B)},function(B){S.status==="pending"&&(S.status="rejected",S.reason=B)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function me(S,B,G,W,ne){var ue=typeof S;(ue==="undefined"||ue==="boolean")&&(S=null);var ee=!1;if(S===null)ee=!0;else switch(ue){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(S.$$typeof){case n:case e:ee=!0;break;case m:return ee=S._init,me(ee(S._payload),B,G,W,ne)}}if(ee)return ne=ne(S),ee=W===""?"."+R(S,0):W,O(ne)?(G="",ee!=null&&(G=ee.replace(E,"$&/")+"/"),me(ne,B,G,"",function(Vi){return Vi})):ne!=null&&(y(ne)&&(ne=x(ne,G+(ne.key==null||S&&S.key===ne.key?"":(""+ne.key).replace(E,"$&/")+"/")+ee)),B.push(ne)),1;ee=0;var Je=W===""?".":W+":";if(O(S))for(var be=0;be<S.length;be++)W=S[be],ue=Je+R(W,be),ee+=me(W,B,G,ue,ne);else if(be=_(S),typeof be=="function")for(S=be.call(S),be=0;!(W=S.next()).done;)W=W.value,ue=Je+R(W,be++),ee+=me(W,B,G,ue,ne);else if(ue==="object"){if(typeof S.then=="function")return me(oe(S),B,G,W,ne);throw B=String(S),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return ee}function de(S,B,G){if(S==null)return S;var W=[],ne=0;return me(S,W,"","",function(ue){return B.call(G,ue,ne++)}),W}function He(S){if(S._status===-1){var B=S._result;B=B(),B.then(function(G){(S._status===0||S._status===-1)&&(S._status=1,S._result=G)},function(G){(S._status===0||S._status===-1)&&(S._status=2,S._result=G)}),S._status===-1&&(S._status=0,S._result=B)}if(S._status===1)return S._result.default;throw S._result}var ze=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function te(){}return Z.Children={map:de,forEach:function(S,B,G){de(S,function(){B.apply(this,arguments)},G)},count:function(S){var B=0;return de(S,function(){B++}),B},toArray:function(S){return de(S,function(B){return B})||[]},only:function(S){if(!y(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},Z.Component=N,Z.Fragment=t,Z.Profiler=s,Z.PureComponent=C,Z.StrictMode=r,Z.Suspense=u,Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,Z.act=function(){throw Error("act(...) is not supported in production builds of React.")},Z.cache=function(S){return function(){return S.apply(null,arguments)}},Z.cloneElement=function(S,B,G){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var W=T({},S.props),ne=S.key,ue=void 0;if(B!=null)for(ee in B.ref!==void 0&&(ue=void 0),B.key!==void 0&&(ne=""+B.key),B)!H.call(B,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&B.ref===void 0||(W[ee]=B[ee]);var ee=arguments.length-2;if(ee===1)W.children=G;else if(1<ee){for(var Je=Array(ee),be=0;be<ee;be++)Je[be]=arguments[be+2];W.children=Je}return I(S.type,ne,void 0,void 0,ue,W)},Z.createContext=function(S){return S={$$typeof:o,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:i,_context:S},S},Z.createElement=function(S,B,G){var W,ne={},ue=null;if(B!=null)for(W in B.key!==void 0&&(ue=""+B.key),B)H.call(B,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ne[W]=B[W]);var ee=arguments.length-2;if(ee===1)ne.children=G;else if(1<ee){for(var Je=Array(ee),be=0;be<ee;be++)Je[be]=arguments[be+2];ne.children=Je}if(S&&S.defaultProps)for(W in ee=S.defaultProps,ee)ne[W]===void 0&&(ne[W]=ee[W]);return I(S,ue,void 0,void 0,null,ne)},Z.createRef=function(){return{current:null}},Z.forwardRef=function(S){return{$$typeof:c,render:S}},Z.isValidElement=y,Z.lazy=function(S){return{$$typeof:m,_payload:{_status:-1,_result:S},_init:He}},Z.memo=function(S,B){return{$$typeof:d,type:S,compare:B===void 0?null:B}},Z.startTransition=function(S){var B=V.T,G={};V.T=G;try{var W=S(),ne=V.S;ne!==null&&ne(G,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(te,ze)}catch(ue){ze(ue)}finally{V.T=B}},Z.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},Z.use=function(S){return V.H.use(S)},Z.useActionState=function(S,B,G){return V.H.useActionState(S,B,G)},Z.useCallback=function(S,B){return V.H.useCallback(S,B)},Z.useContext=function(S){return V.H.useContext(S)},Z.useDebugValue=function(){},Z.useDeferredValue=function(S,B){return V.H.useDeferredValue(S,B)},Z.useEffect=function(S,B){return V.H.useEffect(S,B)},Z.useId=function(){return V.H.useId()},Z.useImperativeHandle=function(S,B,G){return V.H.useImperativeHandle(S,B,G)},Z.useInsertionEffect=function(S,B){return V.H.useInsertionEffect(S,B)},Z.useLayoutEffect=function(S,B){return V.H.useLayoutEffect(S,B)},Z.useMemo=function(S,B){return V.H.useMemo(S,B)},Z.useOptimistic=function(S,B){return V.H.useOptimistic(S,B)},Z.useReducer=function(S,B,G){return V.H.useReducer(S,B,G)},Z.useRef=function(S){return V.H.useRef(S)},Z.useState=function(S){return V.H.useState(S)},Z.useSyncExternalStore=function(S,B,G){return V.H.useSyncExternalStore(S,B,G)},Z.useTransition=function(){return V.H.useTransition()},Z.version="19.0.0",Z}var yc;function Zm(){return yc||(yc=1,ua.exports=Xm()),ua.exports}var A=Zm(),xr={},xc;function ep(){if(xc)return xr;xc=1,Object.defineProperty(xr,"__esModule",{value:!0}),xr.parse=o,xr.serialize=d;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,i=(()=>{const _=function(){};return _.prototype=Object.create(null),_})();function o(_,b){const T=new i,P=_.length;if(P<2)return T;const N=(b==null?void 0:b.decode)||m;let D=0;do{const C=_.indexOf("=",D);if(C===-1)break;const L=_.indexOf(";",D),O=L===-1?P:L;if(C>O){D=_.lastIndexOf(";",C-1)+1;continue}const V=c(_,D,C),H=u(_,C,V),I=_.slice(V,H);if(T[I]===void 0){let x=c(_,C+1,O),y=u(_,O,x);const k=N(_.slice(x,y));T[I]=k}D=O+1}while(D<P);return T}function c(_,b,T){do{const P=_.charCodeAt(b);if(P!==32&&P!==9)return b}while(++b<T);return T}function u(_,b,T){for(;b>T;){const P=_.charCodeAt(--b);if(P!==32&&P!==9)return b+1}return T}function d(_,b,T){const P=(T==null?void 0:T.encode)||encodeURIComponent;if(!n.test(_))throw new TypeError(`argument name is invalid: ${_}`);const N=P(b);if(!e.test(N))throw new TypeError(`argument val is invalid: ${b}`);let D=_+"="+N;if(!T)return D;if(T.maxAge!==void 0){if(!Number.isInteger(T.maxAge))throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);D+="; Max-Age="+T.maxAge}if(T.domain){if(!t.test(T.domain))throw new TypeError(`option domain is invalid: ${T.domain}`);D+="; Domain="+T.domain}if(T.path){if(!r.test(T.path))throw new TypeError(`option path is invalid: ${T.path}`);D+="; Path="+T.path}if(T.expires){if(!g(T.expires)||!Number.isFinite(T.expires.valueOf()))throw new TypeError(`option expires is invalid: ${T.expires}`);D+="; Expires="+T.expires.toUTCString()}if(T.httpOnly&&(D+="; HttpOnly"),T.secure&&(D+="; Secure"),T.partitioned&&(D+="; Partitioned"),T.priority)switch(typeof T.priority=="string"?T.priority.toLowerCase():void 0){case"low":D+="; Priority=Low";break;case"medium":D+="; Priority=Medium";break;case"high":D+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${T.priority}`)}if(T.sameSite)switch(typeof T.sameSite=="string"?T.sameSite.toLowerCase():T.sameSite){case!0:case"strict":D+="; SameSite=Strict";break;case"lax":D+="; SameSite=Lax";break;case"none":D+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${T.sameSite}`)}return D}function m(_){if(_.indexOf("%")===-1)return _;try{return decodeURIComponent(_)}catch{return _}}function g(_){return s.call(_)==="[object Date]"}return xr}ep();/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var vc="popstate";function tp(n={}){function e(s,i){let{pathname:o="/",search:c="",hash:u=""}=Tn(s.location.hash.substring(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Aa("",{pathname:o,search:c,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(s,i){let o=s.document.querySelector("base"),c="";if(o&&o.getAttribute("href")){let u=s.location.href,d=u.indexOf("#");c=d===-1?u:u.slice(0,d)}return c+"#"+(typeof i=="string"?i:Dr(i))}function r(s,i){nt(s.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(i)})`)}return rp(e,t,r,n)}function ye(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function nt(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function np(){return Math.random().toString(36).substring(2,10)}function Ec(n,e){return{usr:n.state,key:n.key,idx:e}}function Aa(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Tn(e):e,state:t,key:e&&e.key||r||np()}}function Dr({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Tn(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function rp(n,e,t,r={}){let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,c="POP",u=null,d=m();d==null&&(d=0,o.replaceState({...o.state,idx:d},""));function m(){return(o.state||{idx:null}).idx}function g(){c="POP";let N=m(),D=N==null?null:N-d;d=N,u&&u({action:c,location:P.location,delta:D})}function _(N,D){c="PUSH";let C=Aa(P.location,N,D);t&&t(C,N),d=m()+1;let L=Ec(C,d),O=P.createHref(C);try{o.pushState(L,"",O)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;s.location.assign(O)}i&&u&&u({action:c,location:P.location,delta:1})}function b(N,D){c="REPLACE";let C=Aa(P.location,N,D);t&&t(C,N),d=m();let L=Ec(C,d),O=P.createHref(C);o.replaceState(L,"",O),i&&u&&u({action:c,location:P.location,delta:0})}function T(N){let D=s.location.origin!=="null"?s.location.origin:s.location.href,C=typeof N=="string"?N:Dr(N);return C=C.replace(/ $/,"%20"),ye(D,`No window.location.(origin|href) available to create URL for href: ${C}`),new URL(C,D)}let P={get action(){return c},get location(){return n(s,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(vc,g),u=N,()=>{s.removeEventListener(vc,g),u=null}},createHref(N){return e(s,N)},createURL:T,encodeLocation(N){let D=T(N);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:_,replace:b,go(N){return o.go(N)}};return P}function oh(n,e,t="/"){return sp(n,e,t,!1)}function sp(n,e,t,r){let s=typeof e=="string"?Tn(e):e,i=Wt(s.pathname||"/",t);if(i==null)return null;let o=lh(n);ip(o);let c=null;for(let u=0;c==null&&u<o.length;++u){let d=gp(i);c=mp(o[u],d,r)}return c}function lh(n,e=[],t=[],r=""){let s=(i,o,c)=>{let u={relativePath:c===void 0?i.path||"":c,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};u.relativePath.startsWith("/")&&(ye(u.relativePath.startsWith(r),`Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(r.length));let d=bt([r,u.relativePath]),m=t.concat(u);i.children&&i.children.length>0&&(ye(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),lh(i.children,e,m,d)),!(i.path==null&&!i.index)&&e.push({path:d,score:dp(d,i.index),routesMeta:m})};return n.forEach((i,o)=>{var c;if(i.path===""||!((c=i.path)!=null&&c.includes("?")))s(i,o);else for(let u of ch(i.path))s(i,o,u)}),e}function ch(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,s=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=ch(r.join("/")),c=[];return c.push(...o.map(u=>u===""?i:[i,u].join("/"))),s&&c.push(...o),c.map(u=>n.startsWith("/")&&u===""?"/":u)}function ip(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:fp(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var ap=/^:[\w-]+$/,op=3,lp=2,cp=1,up=10,hp=-2,Tc=n=>n==="*";function dp(n,e){let t=n.split("/"),r=t.length;return t.some(Tc)&&(r+=hp),e&&(r+=lp),t.filter(s=>!Tc(s)).reduce((s,i)=>s+(ap.test(i)?op:i===""?cp:up),r)}function fp(n,e){return n.length===e.length&&n.slice(0,-1).every((r,s)=>r===e[s])?n[n.length-1]-e[e.length-1]:0}function mp(n,e,t=!1){let{routesMeta:r}=n,s={},i="/",o=[];for(let c=0;c<r.length;++c){let u=r[c],d=c===r.length-1,m=i==="/"?e:e.slice(i.length)||"/",g=qs({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},m),_=u.route;if(!g&&d&&t&&!r[r.length-1].route.index&&(g=qs({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},m)),!g)return null;Object.assign(s,g.params),o.push({params:s,pathname:bt([i,g.pathname]),pathnameBase:vp(bt([i,g.pathnameBase])),route:_}),g.pathnameBase!=="/"&&(i=bt([i,g.pathnameBase]))}return o}function qs(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=pp(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:r.reduce((d,{paramName:m,isOptional:g},_)=>{if(m==="*"){let T=c[_]||"";o=i.slice(0,i.length-T.length).replace(/(.)\/+$/,"$1")}const b=c[_];return g&&!b?d[m]=void 0:d[m]=(b||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:o,pattern:n}}function pp(n,e=!1,t=!0){nt(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,c,u)=>(r.push({paramName:c,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function gp(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return nt(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Wt(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function _p(n,e="/"){let{pathname:t,search:r="",hash:s=""}=typeof n=="string"?Tn(n):n;return{pathname:t?t.startsWith("/")?t:yp(t,e):e,search:Ep(r),hash:Tp(s)}}function yp(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function ha(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function xp(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function ro(n){let e=xp(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function so(n,e,t,r=!1){let s;typeof n=="string"?s=Tn(n):(s={...n},ye(!s.pathname||!s.pathname.includes("?"),ha("?","pathname","search",s)),ye(!s.pathname||!s.pathname.includes("#"),ha("#","pathname","hash",s)),ye(!s.search||!s.search.includes("#"),ha("#","search","hash",s)));let i=n===""||s.pathname==="",o=i?"/":s.pathname,c;if(o==null)c=t;else{let g=e.length-1;if(!r&&o.startsWith("..")){let _=o.split("/");for(;_[0]==="..";)_.shift(),g-=1;s.pathname=_.join("/")}c=g>=0?e[g]:"/"}let u=_p(s,c),d=o&&o!=="/"&&o.endsWith("/"),m=(i||o===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(d||m)&&(u.pathname+="/"),u}var bt=n=>n.join("/").replace(/\/\/+/g,"/"),vp=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Ep=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Tp=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function bp(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var uh=["POST","PUT","PATCH","DELETE"];new Set(uh);var wp=["GET",...uh];new Set(wp);var Jn=A.createContext(null);Jn.displayName="DataRouter";var hi=A.createContext(null);hi.displayName="DataRouterState";var hh=A.createContext({isTransitioning:!1});hh.displayName="ViewTransition";var Ip=A.createContext(new Map);Ip.displayName="Fetchers";var Ap=A.createContext(null);Ap.displayName="Await";var lt=A.createContext(null);lt.displayName="Navigation";var $r=A.createContext(null);$r.displayName="Location";var ct=A.createContext({outlet:null,matches:[],isDataRoute:!1});ct.displayName="Route";var io=A.createContext(null);io.displayName="RouteError";function kp(n,{relative:e}={}){ye(Yn(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=A.useContext(lt),{hash:s,pathname:i,search:o}=qr(n,{relative:e}),c=i;return t!=="/"&&(c=i==="/"?t:bt([t,i])),r.createHref({pathname:c,search:o,hash:s})}function Yn(){return A.useContext($r)!=null}function tn(){return ye(Yn(),"useLocation() may be used only in the context of a <Router> component."),A.useContext($r).location}var dh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function fh(n){A.useContext(lt).static||A.useLayoutEffect(n)}function Xn(){let{isDataRoute:n}=A.useContext(ct);return n?Bp():Rp()}function Rp(){ye(Yn(),"useNavigate() may be used only in the context of a <Router> component.");let n=A.useContext(Jn),{basename:e,navigator:t}=A.useContext(lt),{matches:r}=A.useContext(ct),{pathname:s}=tn(),i=JSON.stringify(ro(r)),o=A.useRef(!1);return fh(()=>{o.current=!0}),A.useCallback((u,d={})=>{if(nt(o.current,dh),!o.current)return;if(typeof u=="number"){t.go(u);return}let m=so(u,JSON.parse(i),s,d.relative==="path");n==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:bt([e,m.pathname])),(d.replace?t.replace:t.push)(m,d.state,d)},[e,t,i,s,n])}A.createContext(null);function Np(){let{matches:n}=A.useContext(ct),e=n[n.length-1];return e?e.params:{}}function qr(n,{relative:e}={}){let{matches:t}=A.useContext(ct),{pathname:r}=tn(),s=JSON.stringify(ro(t));return A.useMemo(()=>so(n,JSON.parse(s),r,e==="path"),[n,s,r,e])}function Sp(n,e){return mh(n,e)}function mh(n,e,t,r){var C;ye(Yn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s,static:i}=A.useContext(lt),{matches:o}=A.useContext(ct),c=o[o.length-1],u=c?c.params:{},d=c?c.pathname:"/",m=c?c.pathnameBase:"/",g=c&&c.route;{let L=g&&g.path||"";ph(d,!g||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let _=tn(),b;if(e){let L=typeof e=="string"?Tn(e):e;ye(m==="/"||((C=L.pathname)==null?void 0:C.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${L.pathname}" was given in the \`location\` prop.`),b=L}else b=_;let T=b.pathname||"/",P=T;if(m!=="/"){let L=m.replace(/^\//,"").split("/");P="/"+T.replace(/^\//,"").split("/").slice(L.length).join("/")}let N=!i&&t&&t.matches&&t.matches.length>0?t.matches:oh(n,{pathname:P});nt(g||N!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),nt(N==null||N[N.length-1].route.element!==void 0||N[N.length-1].route.Component!==void 0||N[N.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let D=Lp(N&&N.map(L=>Object.assign({},L,{params:Object.assign({},u,L.params),pathname:bt([m,s.encodeLocation?s.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?m:bt([m,s.encodeLocation?s.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),o,t,r);return e&&D?A.createElement($r.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},D):D}function Cp(){let n=Fp(),e=bp(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",n),o=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:i},"ErrorBoundary")," or"," ",A.createElement("code",{style:i},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},e),t?A.createElement("pre",{style:s},t):null,o)}var jp=A.createElement(Cp,null),Pp=class extends A.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?A.createElement(ct.Provider,{value:this.props.routeContext},A.createElement(io.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Dp({routeContext:n,match:e,children:t}){let r=A.useContext(Jn);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),A.createElement(ct.Provider,{value:n},t)}function Lp(n,e=[],t=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let s=n,i=t==null?void 0:t.errors;if(i!=null){let u=s.findIndex(d=>d.route.id&&(i==null?void 0:i[d.route.id])!==void 0);ye(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),s=s.slice(0,Math.min(s.length,u+1))}let o=!1,c=-1;if(t)for(let u=0;u<s.length;u++){let d=s[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:m,errors:g}=t,_=d.route.loader&&!m.hasOwnProperty(d.route.id)&&(!g||g[d.route.id]===void 0);if(d.route.lazy||_){o=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((u,d,m)=>{let g,_=!1,b=null,T=null;t&&(g=i&&d.route.id?i[d.route.id]:void 0,b=d.route.errorElement||jp,o&&(c<0&&m===0?(ph("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,T=null):c===m&&(_=!0,T=d.route.hydrateFallbackElement||null)));let P=e.concat(s.slice(0,m+1)),N=()=>{let D;return g?D=b:_?D=T:d.route.Component?D=A.createElement(d.route.Component,null):d.route.element?D=d.route.element:D=u,A.createElement(Dp,{match:d,routeContext:{outlet:u,matches:P,isDataRoute:t!=null},children:D})};return t&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?A.createElement(Pp,{location:t.location,revalidation:t.revalidation,component:b,error:g,children:N(),routeContext:{outlet:null,matches:P,isDataRoute:!0}}):N()},null)}function ao(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mp(n){let e=A.useContext(Jn);return ye(e,ao(n)),e}function Op(n){let e=A.useContext(hi);return ye(e,ao(n)),e}function Vp(n){let e=A.useContext(ct);return ye(e,ao(n)),e}function oo(n){let e=Vp(n),t=e.matches[e.matches.length-1];return ye(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function Up(){return oo("useRouteId")}function Fp(){var r;let n=A.useContext(io),e=Op("useRouteError"),t=oo("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function Bp(){let{router:n}=Mp("useNavigate"),e=oo("useNavigate"),t=A.useRef(!1);return fh(()=>{t.current=!0}),A.useCallback(async(s,i={})=>{nt(t.current,dh),t.current&&(typeof s=="number"?n.navigate(s):await n.navigate(s,{fromRouteId:e,...i}))},[n,e])}var bc={};function ph(n,e,t){!e&&!bc[n]&&(bc[n]=!0,nt(!1,t))}A.memo(Hp);function Hp({routes:n,future:e,state:t}){return mh(n,void 0,t,e)}function wc({to:n,replace:e,state:t,relative:r}){ye(Yn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=A.useContext(lt);nt(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=A.useContext(ct),{pathname:o}=tn(),c=Xn(),u=so(n,ro(i),o,r==="path"),d=JSON.stringify(u);return A.useEffect(()=>{c(JSON.parse(d),{replace:e,state:t,relative:r})},[c,d,r,e,t]),null}function Ie(n){ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Kp({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:s,static:i=!1}){ye(!Yn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=n.replace(/^\/*/,"/"),c=A.useMemo(()=>({basename:o,navigator:s,static:i,future:{}}),[o,s,i]);typeof t=="string"&&(t=Tn(t));let{pathname:u="/",search:d="",hash:m="",state:g=null,key:_="default"}=t,b=A.useMemo(()=>{let T=Wt(u,o);return T==null?null:{location:{pathname:T,search:d,hash:m,state:g,key:_},navigationType:r}},[o,u,d,m,g,_,r]);return nt(b!=null,`<Router basename="${o}"> is not able to match the URL "${u}${d}${m}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:A.createElement(lt.Provider,{value:c},A.createElement($r.Provider,{children:e,value:b}))}function $p({children:n,location:e}){return Sp(ka(n),e)}function ka(n,e=[]){let t=[];return A.Children.forEach(n,(r,s)=>{if(!A.isValidElement(r))return;let i=[...e,s];if(r.type===A.Fragment){t.push.apply(t,ka(r.props.children,i));return}ye(r.type===Ie,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ye(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ka(r.props.children,i)),t.push(o)}),t}var js="get",Ps="application/x-www-form-urlencoded";function di(n){return n!=null&&typeof n.tagName=="string"}function qp(n){return di(n)&&n.tagName.toLowerCase()==="button"}function Wp(n){return di(n)&&n.tagName.toLowerCase()==="form"}function zp(n){return di(n)&&n.tagName.toLowerCase()==="input"}function Gp(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Qp(n,e){return n.button===0&&(!e||e==="_self")&&!Gp(n)}var Ts=null;function Jp(){if(Ts===null)try{new FormData(document.createElement("form"),0),Ts=!1}catch{Ts=!0}return Ts}var Yp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function da(n){return n!=null&&!Yp.has(n)?(nt(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ps}"`),null):n}function Xp(n,e){let t,r,s,i,o;if(Wp(n)){let c=n.getAttribute("action");r=c?Wt(c,e):null,t=n.getAttribute("method")||js,s=da(n.getAttribute("enctype"))||Ps,i=new FormData(n)}else if(qp(n)||zp(n)&&(n.type==="submit"||n.type==="image")){let c=n.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=n.getAttribute("formaction")||c.getAttribute("action");if(r=u?Wt(u,e):null,t=n.getAttribute("formmethod")||c.getAttribute("method")||js,s=da(n.getAttribute("formenctype"))||da(c.getAttribute("enctype"))||Ps,i=new FormData(c,n),!Jp()){let{name:d,type:m,value:g}=n;if(m==="image"){let _=d?`${d}.`:"";i.append(`${_}x`,"0"),i.append(`${_}y`,"0")}else d&&i.append(d,g)}}else{if(di(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=js,r=null,s=Ps,o=n}return i&&s==="text/plain"&&(o=i,i=void 0),{action:r,method:t.toLowerCase(),encType:s,formData:i,body:o}}function lo(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function Zp(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function eg(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function tg(n,e,t){let r=await Promise.all(n.map(async s=>{let i=e.routes[s.route.id];if(i){let o=await Zp(i,t);return o.links?o.links():[]}return[]}));return ig(r.flat(1).filter(eg).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Ic(n,e,t,r,s,i){let o=(u,d)=>t[d]?u.route.id!==t[d].route.id:!0,c=(u,d)=>{var m;return t[d].pathname!==u.pathname||((m=t[d].route.path)==null?void 0:m.endsWith("*"))&&t[d].params["*"]!==u.params["*"]};return i==="assets"?e.filter((u,d)=>o(u,d)||c(u,d)):i==="data"?e.filter((u,d)=>{var g;let m=r.routes[u.route.id];if(!m||!m.hasLoader)return!1;if(o(u,d)||c(u,d))return!0;if(u.route.shouldRevalidate){let _=u.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((g=t[0])==null?void 0:g.params)||{},nextUrl:new URL(n,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function ng(n,e,{includeHydrateFallback:t}={}){return rg(n.map(r=>{let s=e.routes[r.route.id];if(!s)return[];let i=[s.module];return s.clientActionModule&&(i=i.concat(s.clientActionModule)),s.clientLoaderModule&&(i=i.concat(s.clientLoaderModule)),t&&s.hydrateFallbackModule&&(i=i.concat(s.hydrateFallbackModule)),s.imports&&(i=i.concat(s.imports)),i}).flat(1))}function rg(n){return[...new Set(n)]}function sg(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function ig(n,e){let t=new Set;return new Set(e),n.reduce((r,s)=>{let i=JSON.stringify(sg(s));return t.has(i)||(t.add(i),r.push({key:i,link:s})),r},[])}function ag(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function og(){let n=A.useContext(Jn);return lo(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function lg(){let n=A.useContext(hi);return lo(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var co=A.createContext(void 0);co.displayName="FrameworkContext";function gh(){let n=A.useContext(co);return lo(n,"You must render this element inside a <HydratedRouter> element"),n}function cg(n,e){let t=A.useContext(co),[r,s]=A.useState(!1),[i,o]=A.useState(!1),{onFocus:c,onBlur:u,onMouseEnter:d,onMouseLeave:m,onTouchStart:g}=e,_=A.useRef(null);A.useEffect(()=>{if(n==="render"&&o(!0),n==="viewport"){let P=D=>{D.forEach(C=>{o(C.isIntersecting)})},N=new IntersectionObserver(P,{threshold:.5});return _.current&&N.observe(_.current),()=>{N.disconnect()}}},[n]),A.useEffect(()=>{if(r){let P=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(P)}}},[r]);let b=()=>{s(!0)},T=()=>{s(!1),o(!1)};return t?n!=="intent"?[i,_,{}]:[i,_,{onFocus:vr(c,b),onBlur:vr(u,T),onMouseEnter:vr(d,b),onMouseLeave:vr(m,T),onTouchStart:vr(g,b)}]:[!1,_,{}]}function vr(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function ug({page:n,...e}){let{router:t}=og(),r=A.useMemo(()=>oh(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?A.createElement(dg,{page:n,matches:r,...e}):null}function hg(n){let{manifest:e,routeModules:t}=gh(),[r,s]=A.useState([]);return A.useEffect(()=>{let i=!1;return tg(n,e,t).then(o=>{i||s(o)}),()=>{i=!0}},[n,e,t]),r}function dg({page:n,matches:e,...t}){let r=tn(),{manifest:s,routeModules:i}=gh(),{loaderData:o,matches:c}=lg(),u=A.useMemo(()=>Ic(n,e,c,s,r,"data"),[n,e,c,s,r]),d=A.useMemo(()=>Ic(n,e,c,s,r,"assets"),[n,e,c,s,r]),m=A.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let b=new Set,T=!1;if(e.forEach(N=>{var C;let D=s.routes[N.route.id];!D||!D.hasLoader||(!u.some(L=>L.route.id===N.route.id)&&N.route.id in o&&((C=i[N.route.id])!=null&&C.shouldRevalidate)||D.hasClientLoader?T=!0:b.add(N.route.id))}),b.size===0)return[];let P=ag(n);return T&&b.size>0&&P.searchParams.set("_routes",e.filter(N=>b.has(N.route.id)).map(N=>N.route.id).join(",")),[P.pathname+P.search]},[o,r,s,u,e,n,i]),g=A.useMemo(()=>ng(d,s),[d,s]),_=hg(d);return A.createElement(A.Fragment,null,m.map(b=>A.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...t})),g.map(b=>A.createElement("link",{key:b,rel:"modulepreload",href:b,...t})),_.map(({key:b,link:T})=>A.createElement("link",{key:b,...T})))}function fg(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var _h=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{_h&&(window.__reactRouterVersion="7.2.0")}catch{}function mg({basename:n,children:e,window:t}){let r=A.useRef();r.current==null&&(r.current=tp({window:t,v5Compat:!0}));let s=r.current,[i,o]=A.useState({action:s.action,location:s.location}),c=A.useCallback(u=>{A.startTransition(()=>o(u))},[o]);return A.useLayoutEffect(()=>s.listen(c),[s,c]),A.createElement(Kp,{basename:n,children:e,location:i.location,navigationType:i.action,navigator:s})}var yh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ce=A.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:s,reloadDocument:i,replace:o,state:c,target:u,to:d,preventScrollReset:m,viewTransition:g,..._},b){let{basename:T}=A.useContext(lt),P=typeof d=="string"&&yh.test(d),N,D=!1;if(typeof d=="string"&&P&&(N=d,_h))try{let y=new URL(window.location.href),k=d.startsWith("//")?new URL(y.protocol+d):new URL(d),E=Wt(k.pathname,T);k.origin===y.origin&&E!=null?d=E+k.search+k.hash:D=!0}catch{nt(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let C=kp(d,{relative:s}),[L,O,V]=cg(r,_),H=yg(d,{replace:o,state:c,target:u,preventScrollReset:m,relative:s,viewTransition:g});function I(y){e&&e(y),y.defaultPrevented||H(y)}let x=A.createElement("a",{..._,...V,href:N||C,onClick:D||i?e:I,ref:fg(b,O),target:u,"data-discover":!P&&t==="render"?"true":void 0});return L&&!P?A.createElement(A.Fragment,null,x,A.createElement(ug,{page:C})):x});ce.displayName="Link";var pg=A.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:s=!1,style:i,to:o,viewTransition:c,children:u,...d},m){let g=qr(o,{relative:d.relative}),_=tn(),b=A.useContext(hi),{navigator:T,basename:P}=A.useContext(lt),N=b!=null&&bg(g)&&c===!0,D=T.encodeLocation?T.encodeLocation(g).pathname:g.pathname,C=_.pathname,L=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;t||(C=C.toLowerCase(),L=L?L.toLowerCase():null,D=D.toLowerCase()),L&&P&&(L=Wt(L,P)||L);const O=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let V=C===D||!s&&C.startsWith(D)&&C.charAt(O)==="/",H=L!=null&&(L===D||!s&&L.startsWith(D)&&L.charAt(D.length)==="/"),I={isActive:V,isPending:H,isTransitioning:N},x=V?e:void 0,y;typeof r=="function"?y=r(I):y=[r,V?"active":null,H?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let k=typeof i=="function"?i(I):i;return A.createElement(ce,{...d,"aria-current":x,className:y,ref:m,style:k,to:o,viewTransition:c},typeof u=="function"?u(I):u)});pg.displayName="NavLink";var gg=A.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:s,state:i,method:o=js,action:c,onSubmit:u,relative:d,preventScrollReset:m,viewTransition:g,..._},b)=>{let T=Eg(),P=Tg(c,{relative:d}),N=o.toLowerCase()==="get"?"get":"post",D=typeof c=="string"&&yh.test(c),C=L=>{if(u&&u(L),L.defaultPrevented)return;L.preventDefault();let O=L.nativeEvent.submitter,V=(O==null?void 0:O.getAttribute("formmethod"))||o;T(O||L.currentTarget,{fetcherKey:e,method:V,navigate:t,replace:s,state:i,relative:d,preventScrollReset:m,viewTransition:g})};return A.createElement("form",{ref:b,method:N,action:P,onSubmit:r?u:C,..._,"data-discover":!D&&n==="render"?"true":void 0})});gg.displayName="Form";function _g(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xh(n){let e=A.useContext(Jn);return ye(e,_g(n)),e}function yg(n,{target:e,replace:t,state:r,preventScrollReset:s,relative:i,viewTransition:o}={}){let c=Xn(),u=tn(),d=qr(n,{relative:i});return A.useCallback(m=>{if(Qp(m,e)){m.preventDefault();let g=t!==void 0?t:Dr(u)===Dr(d);c(n,{replace:g,state:r,preventScrollReset:s,relative:i,viewTransition:o})}},[u,c,d,t,r,e,n,s,i,o])}var xg=0,vg=()=>`__${String(++xg)}__`;function Eg(){let{router:n}=xh("useSubmit"),{basename:e}=A.useContext(lt),t=Up();return A.useCallback(async(r,s={})=>{let{action:i,method:o,encType:c,formData:u,body:d}=Xp(r,e);if(s.navigate===!1){let m=s.fetcherKey||vg();await n.fetch(m,t,s.action||i,{preventScrollReset:s.preventScrollReset,formData:u,body:d,formMethod:s.method||o,formEncType:s.encType||c,flushSync:s.flushSync})}else await n.navigate(s.action||i,{preventScrollReset:s.preventScrollReset,formData:u,body:d,formMethod:s.method||o,formEncType:s.encType||c,replace:s.replace,state:s.state,fromRouteId:t,flushSync:s.flushSync,viewTransition:s.viewTransition})},[n,e,t])}function Tg(n,{relative:e}={}){let{basename:t}=A.useContext(lt),r=A.useContext(ct);ye(r,"useFormAction must be used inside a RouteContext");let[s]=r.matches.slice(-1),i={...qr(n||".",{relative:e})},o=tn();if(n==null){i.search=o.search;let c=new URLSearchParams(i.search),u=c.getAll("index");if(u.some(m=>m==="")){c.delete("index"),u.filter(g=>g).forEach(g=>c.append("index",g));let m=c.toString();i.search=m?`?${m}`:""}}return(!n||n===".")&&s.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(i.pathname=i.pathname==="/"?t:bt([t,i.pathname])),Dr(i)}function bg(n,e={}){let t=A.useContext(hh);ye(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=xh("useViewTransitionState"),s=qr(n,{relative:e.relative});if(!t.isTransitioning)return!1;let i=Wt(t.currentLocation.pathname,r)||t.currentLocation.pathname,o=Wt(t.nextLocation.pathname,r)||t.nextLocation.pathname;return qs(s.pathname,o)!=null||qs(s.pathname,i)!=null}new TextEncoder;document.addEventListener("DOMContentLoaded",function(){const n=["/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_049.jpg","/AimRV/images/EE-AIMChallenge24-Uhamn-0171-high.jpg","/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_113.jpg","/AimRV/images/AIM_lindvallen_2024_AnkiGrothe_highres_125.jpg"];function e(){const t=document.querySelectorAll(".dynamic-background");if(t.length===0){setTimeout(e,100);return}let r=n;try{const s=JSON.parse(localStorage.getItem("aimrv-background-images"));s&&Array.isArray(s)&&s.length>0&&(r=s)}catch(s){console.error("Error loading custom background images:",s)}t.forEach(function(s){let i=0;s.style.backgroundImage=`url(${r[i]})`,s.style.backgroundSize="cover",s.style.backgroundPosition="center",s.style.backgroundRepeat="no-repeat";const o=document.createElement("div");o.className="background-overlay",o.style.position="absolute",o.style.top="0",o.style.left="0",o.style.width="100%",o.style.height="100%",o.style.backgroundSize="cover",o.style.backgroundPosition="center",o.style.opacity="0",o.style.transition="opacity 2s ease-in-out",o.style.zIndex="1",getComputedStyle(s).position==="static"&&(s.style.position="relative"),Array.from(s.children).forEach(u=>{u!==o&&(u.style.zIndex===""||parseInt(u.style.zIndex)<10)&&(u.style.position="relative",u.style.zIndex="10")}),s.appendChild(o);function c(){const u=(i+1)%r.length;o.style.backgroundImage=`url(${r[u]})`,o.style.opacity="1",setTimeout(()=>{s.style.backgroundImage=`url(${r[u]})`,o.style.opacity="0",i=u},2e3)}setInterval(c,5e3)}),window.addEventListener("storage",function(s){if(s.key==="aimrv-background-images")try{const i=JSON.parse(s.newValue);i&&Array.isArray(i)&&i.length>0&&(r=i)}catch(i){console.error("Error updating background images:",i)}})}e()});const wg=()=>{};var Ac={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ig=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Eh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,m=i>>2,g=(i&3)<<4|c>>4;let _=(c&15)<<2|d>>6,b=d&63;u||(b=64,o||(_=64)),r.push(t[m],t[g],t[_],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(vh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ig(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||g==null)throw new Ag;const _=i<<2|c>>4;if(r.push(_),d!==64){const b=c<<4&240|d>>2;if(r.push(b),g!==64){const T=d<<6&192|g;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ag extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kg=function(n){const e=vh(n);return Eh.encodeByteArray(e,!0)},Ws=function(n){return kg(n).replace(/\./g,"")},Th=function(n){try{return Eh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=()=>Rg().__FIREBASE_DEFAULTS__,Sg=()=>{if(typeof process>"u"||typeof Ac>"u")return;const n=Ac.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Cg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Th(n[1]);return e&&JSON.parse(e)},fi=()=>{try{return wg()||Ng()||Sg()||Cg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},bh=n=>{var e,t;return(t=(e=fi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},wh=n=>{const e=bh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Ih=()=>{var n;return(n=fi())===null||n===void 0?void 0:n.config},Ah=n=>{var e;return(e=fi())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ws(JSON.stringify(t)),Ws(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function Dg(){var n;const e=(n=fi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Lg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Og(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vg(){const n=Be();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ug(){return!Dg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Fg(){try{return typeof indexedDB=="object"}catch{return!1}}function Bg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="FirebaseError";class _t extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Hg,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wr.prototype.create)}}class Wr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Kg(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new _t(s,c,r)}}function Kg(n,e){return n.replace($g,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const $g=/\{\$([^}]+)}/g;function qg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function pn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(kc(i)&&kc(o)){if(!pn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function kc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Tr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function br(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Wg(n,e){const t=new zg(n,e);return t.subscribe.bind(t)}class zg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Gg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=fa),s.error===void 0&&(s.error=fa),s.complete===void 0&&(s.complete=fa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function fa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(n){return n&&n._delegate?n._delegate:n}class zt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new jg;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yg(e))try{this.getOrInitializeService({instanceIdentifier:dn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=dn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dn){return this.instances.has(e)}getOptions(e=dn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Jg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=dn){return this.component?this.component.multipleInstances?e:dn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jg(n){return n===dn?void 0:n}function Yg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Qg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(re||(re={}));const Zg={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},e_=re.INFO,t_={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},n_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=t_[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uo{constructor(e){this.name=e,this._logLevel=e_,this._logHandler=n_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const r_=(n,e)=>e.some(t=>n instanceof t);let Rc,Nc;function s_(){return Rc||(Rc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function i_(){return Nc||(Nc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rh=new WeakMap,Ra=new WeakMap,Nh=new WeakMap,ma=new WeakMap,ho=new WeakMap;function a_(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Ht(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Rh.set(t,n)}).catch(()=>{}),ho.set(e,n),e}function o_(n){if(Ra.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Ra.set(n,e)}let Na={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ra.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Nh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ht(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function l_(n){Na=n(Na)}function c_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(pa(this),e,...t);return Nh.set(r,e.sort?e.sort():[e]),Ht(r)}:i_().includes(n)?function(...e){return n.apply(pa(this),e),Ht(Rh.get(this))}:function(...e){return Ht(n.apply(pa(this),e))}}function u_(n){return typeof n=="function"?c_(n):(n instanceof IDBTransaction&&o_(n),r_(n,s_())?new Proxy(n,Na):n)}function Ht(n){if(n instanceof IDBRequest)return a_(n);if(ma.has(n))return ma.get(n);const e=u_(n);return e!==n&&(ma.set(n,e),ho.set(e,n)),e}const pa=n=>ho.get(n);function h_(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=Ht(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ht(o.result),u.oldVersion,u.newVersion,Ht(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const d_=["get","getKey","getAll","getAllKeys","count"],f_=["put","add","delete","clear"],ga=new Map;function Sc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ga.get(e))return ga.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=f_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||d_.includes(t)))return;const i=async function(o,...c){const u=this.transaction(o,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&u.done]))[0]};return ga.set(e,i),i}l_(n=>({...n,get:(e,t,r)=>Sc(e,t)||n.get(e,t,r),has:(e,t)=>!!Sc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(p_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function p_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sa="@firebase/app",Cc="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=new uo("@firebase/app"),g_="@firebase/app-compat",__="@firebase/analytics-compat",y_="@firebase/analytics",x_="@firebase/app-check-compat",v_="@firebase/app-check",E_="@firebase/auth",T_="@firebase/auth-compat",b_="@firebase/database",w_="@firebase/data-connect",I_="@firebase/database-compat",A_="@firebase/functions",k_="@firebase/functions-compat",R_="@firebase/installations",N_="@firebase/installations-compat",S_="@firebase/messaging",C_="@firebase/messaging-compat",j_="@firebase/performance",P_="@firebase/performance-compat",D_="@firebase/remote-config",L_="@firebase/remote-config-compat",M_="@firebase/storage",O_="@firebase/storage-compat",V_="@firebase/firestore",U_="@firebase/vertexai",F_="@firebase/firestore-compat",B_="firebase",H_="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="[DEFAULT]",K_={[Sa]:"fire-core",[g_]:"fire-core-compat",[y_]:"fire-analytics",[__]:"fire-analytics-compat",[v_]:"fire-app-check",[x_]:"fire-app-check-compat",[E_]:"fire-auth",[T_]:"fire-auth-compat",[b_]:"fire-rtdb",[w_]:"fire-data-connect",[I_]:"fire-rtdb-compat",[A_]:"fire-fn",[k_]:"fire-fn-compat",[R_]:"fire-iid",[N_]:"fire-iid-compat",[S_]:"fire-fcm",[C_]:"fire-fcm-compat",[j_]:"fire-perf",[P_]:"fire-perf-compat",[D_]:"fire-rc",[L_]:"fire-rc-compat",[M_]:"fire-gcs",[O_]:"fire-gcs-compat",[V_]:"fire-fst",[F_]:"fire-fst-compat",[U_]:"fire-vertex","fire-js":"fire-js",[B_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new Map,$_=new Map,ja=new Map;function jc(n,e){try{n.container.addComponent(e)}catch(t){At.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function gn(n){const e=n.name;if(ja.has(e))return At.debug(`There were multiple attempts to register component ${e}.`),!1;ja.set(e,n);for(const t of zs.values())jc(t,n);for(const t of $_.values())jc(t,n);return!0}function mi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Xe(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kt=new Wr("app","Firebase",q_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=H_;function Sh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ca,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Kt.create("bad-app-name",{appName:String(s)});if(t||(t=Ih()),!t)throw Kt.create("no-options");const i=zs.get(s);if(i){if(pn(t,i.options)&&pn(r,i.config))return i;throw Kt.create("duplicate-app",{appName:s})}const o=new Xg(s);for(const u of ja.values())o.addComponent(u);const c=new W_(t,r,o);return zs.set(s,c),c}function fo(n=Ca){const e=zs.get(n);if(!e&&n===Ca&&Ih())return Sh();if(!e)throw Kt.create("no-app",{appName:n});return e}function ht(n,e,t){var r;let s=(r=K_[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),At.warn(c.join(" "));return}gn(new zt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_="firebase-heartbeat-database",G_=1,Lr="firebase-heartbeat-store";let _a=null;function Ch(){return _a||(_a=h_(z_,G_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Lr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Kt.create("idb-open",{originalErrorMessage:n.message})})),_a}async function Q_(n){try{const t=(await Ch()).transaction(Lr),r=await t.objectStore(Lr).get(jh(n));return await t.done,r}catch(e){if(e instanceof _t)At.warn(e.message);else{const t=Kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});At.warn(t.message)}}}async function Pc(n,e){try{const r=(await Ch()).transaction(Lr,"readwrite");await r.objectStore(Lr).put(e,jh(n)),await r.done}catch(t){if(t instanceof _t)At.warn(t.message);else{const r=Kt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});At.warn(r.message)}}}function jh(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=1024,Y_=30;class X_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ey(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Dc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Y_){const o=ty(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){At.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Dc(),{heartbeatsToSend:r,unsentEntries:s}=Z_(this._heartbeatsCache.heartbeats),i=Ws(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return At.warn(t),""}}}function Dc(){return new Date().toISOString().substring(0,10)}function Z_(n,e=J_){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Lc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Lc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ey{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fg()?Bg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Q_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Lc(n){return Ws(JSON.stringify({version:2,heartbeats:n})).length}function ty(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(n){gn(new zt("platform-logger",e=>new m_(e),"PRIVATE")),gn(new zt("heartbeat",e=>new X_(e),"PRIVATE")),ht(Sa,Cc,n),ht(Sa,Cc,"esm2017"),ht("fire-js","")}ny("");var ry="firebase",sy="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ht(ry,sy,"app");var Mc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $t,Ph;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,x){function y(){}y.prototype=x.prototype,I.D=x.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(k,E,R){for(var v=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)v[oe-2]=arguments[oe];return x.prototype[E].apply(k,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,x,y){y||(y=0);var k=Array(16);if(typeof x=="string")for(var E=0;16>E;++E)k[E]=x.charCodeAt(y++)|x.charCodeAt(y++)<<8|x.charCodeAt(y++)<<16|x.charCodeAt(y++)<<24;else for(E=0;16>E;++E)k[E]=x[y++]|x[y++]<<8|x[y++]<<16|x[y++]<<24;x=I.g[0],y=I.g[1],E=I.g[2];var R=I.g[3],v=x+(R^y&(E^R))+k[0]+3614090360&4294967295;x=y+(v<<7&4294967295|v>>>25),v=R+(E^x&(y^E))+k[1]+3905402710&4294967295,R=x+(v<<12&4294967295|v>>>20),v=E+(y^R&(x^y))+k[2]+606105819&4294967295,E=R+(v<<17&4294967295|v>>>15),v=y+(x^E&(R^x))+k[3]+3250441966&4294967295,y=E+(v<<22&4294967295|v>>>10),v=x+(R^y&(E^R))+k[4]+4118548399&4294967295,x=y+(v<<7&4294967295|v>>>25),v=R+(E^x&(y^E))+k[5]+1200080426&4294967295,R=x+(v<<12&4294967295|v>>>20),v=E+(y^R&(x^y))+k[6]+2821735955&4294967295,E=R+(v<<17&4294967295|v>>>15),v=y+(x^E&(R^x))+k[7]+4249261313&4294967295,y=E+(v<<22&4294967295|v>>>10),v=x+(R^y&(E^R))+k[8]+1770035416&4294967295,x=y+(v<<7&4294967295|v>>>25),v=R+(E^x&(y^E))+k[9]+2336552879&4294967295,R=x+(v<<12&4294967295|v>>>20),v=E+(y^R&(x^y))+k[10]+4294925233&4294967295,E=R+(v<<17&4294967295|v>>>15),v=y+(x^E&(R^x))+k[11]+2304563134&4294967295,y=E+(v<<22&4294967295|v>>>10),v=x+(R^y&(E^R))+k[12]+1804603682&4294967295,x=y+(v<<7&4294967295|v>>>25),v=R+(E^x&(y^E))+k[13]+4254626195&4294967295,R=x+(v<<12&4294967295|v>>>20),v=E+(y^R&(x^y))+k[14]+2792965006&4294967295,E=R+(v<<17&4294967295|v>>>15),v=y+(x^E&(R^x))+k[15]+1236535329&4294967295,y=E+(v<<22&4294967295|v>>>10),v=x+(E^R&(y^E))+k[1]+4129170786&4294967295,x=y+(v<<5&4294967295|v>>>27),v=R+(y^E&(x^y))+k[6]+3225465664&4294967295,R=x+(v<<9&4294967295|v>>>23),v=E+(x^y&(R^x))+k[11]+643717713&4294967295,E=R+(v<<14&4294967295|v>>>18),v=y+(R^x&(E^R))+k[0]+3921069994&4294967295,y=E+(v<<20&4294967295|v>>>12),v=x+(E^R&(y^E))+k[5]+3593408605&4294967295,x=y+(v<<5&4294967295|v>>>27),v=R+(y^E&(x^y))+k[10]+38016083&4294967295,R=x+(v<<9&4294967295|v>>>23),v=E+(x^y&(R^x))+k[15]+3634488961&4294967295,E=R+(v<<14&4294967295|v>>>18),v=y+(R^x&(E^R))+k[4]+3889429448&4294967295,y=E+(v<<20&4294967295|v>>>12),v=x+(E^R&(y^E))+k[9]+568446438&4294967295,x=y+(v<<5&4294967295|v>>>27),v=R+(y^E&(x^y))+k[14]+3275163606&4294967295,R=x+(v<<9&4294967295|v>>>23),v=E+(x^y&(R^x))+k[3]+4107603335&4294967295,E=R+(v<<14&4294967295|v>>>18),v=y+(R^x&(E^R))+k[8]+1163531501&4294967295,y=E+(v<<20&4294967295|v>>>12),v=x+(E^R&(y^E))+k[13]+2850285829&4294967295,x=y+(v<<5&4294967295|v>>>27),v=R+(y^E&(x^y))+k[2]+4243563512&4294967295,R=x+(v<<9&4294967295|v>>>23),v=E+(x^y&(R^x))+k[7]+1735328473&4294967295,E=R+(v<<14&4294967295|v>>>18),v=y+(R^x&(E^R))+k[12]+2368359562&4294967295,y=E+(v<<20&4294967295|v>>>12),v=x+(y^E^R)+k[5]+4294588738&4294967295,x=y+(v<<4&4294967295|v>>>28),v=R+(x^y^E)+k[8]+2272392833&4294967295,R=x+(v<<11&4294967295|v>>>21),v=E+(R^x^y)+k[11]+1839030562&4294967295,E=R+(v<<16&4294967295|v>>>16),v=y+(E^R^x)+k[14]+4259657740&4294967295,y=E+(v<<23&4294967295|v>>>9),v=x+(y^E^R)+k[1]+2763975236&4294967295,x=y+(v<<4&4294967295|v>>>28),v=R+(x^y^E)+k[4]+1272893353&4294967295,R=x+(v<<11&4294967295|v>>>21),v=E+(R^x^y)+k[7]+4139469664&4294967295,E=R+(v<<16&4294967295|v>>>16),v=y+(E^R^x)+k[10]+3200236656&4294967295,y=E+(v<<23&4294967295|v>>>9),v=x+(y^E^R)+k[13]+681279174&4294967295,x=y+(v<<4&4294967295|v>>>28),v=R+(x^y^E)+k[0]+3936430074&4294967295,R=x+(v<<11&4294967295|v>>>21),v=E+(R^x^y)+k[3]+3572445317&4294967295,E=R+(v<<16&4294967295|v>>>16),v=y+(E^R^x)+k[6]+76029189&4294967295,y=E+(v<<23&4294967295|v>>>9),v=x+(y^E^R)+k[9]+3654602809&4294967295,x=y+(v<<4&4294967295|v>>>28),v=R+(x^y^E)+k[12]+3873151461&4294967295,R=x+(v<<11&4294967295|v>>>21),v=E+(R^x^y)+k[15]+530742520&4294967295,E=R+(v<<16&4294967295|v>>>16),v=y+(E^R^x)+k[2]+3299628645&4294967295,y=E+(v<<23&4294967295|v>>>9),v=x+(E^(y|~R))+k[0]+4096336452&4294967295,x=y+(v<<6&4294967295|v>>>26),v=R+(y^(x|~E))+k[7]+1126891415&4294967295,R=x+(v<<10&4294967295|v>>>22),v=E+(x^(R|~y))+k[14]+2878612391&4294967295,E=R+(v<<15&4294967295|v>>>17),v=y+(R^(E|~x))+k[5]+4237533241&4294967295,y=E+(v<<21&4294967295|v>>>11),v=x+(E^(y|~R))+k[12]+1700485571&4294967295,x=y+(v<<6&4294967295|v>>>26),v=R+(y^(x|~E))+k[3]+2399980690&4294967295,R=x+(v<<10&4294967295|v>>>22),v=E+(x^(R|~y))+k[10]+4293915773&4294967295,E=R+(v<<15&4294967295|v>>>17),v=y+(R^(E|~x))+k[1]+2240044497&4294967295,y=E+(v<<21&4294967295|v>>>11),v=x+(E^(y|~R))+k[8]+1873313359&4294967295,x=y+(v<<6&4294967295|v>>>26),v=R+(y^(x|~E))+k[15]+4264355552&4294967295,R=x+(v<<10&4294967295|v>>>22),v=E+(x^(R|~y))+k[6]+2734768916&4294967295,E=R+(v<<15&4294967295|v>>>17),v=y+(R^(E|~x))+k[13]+1309151649&4294967295,y=E+(v<<21&4294967295|v>>>11),v=x+(E^(y|~R))+k[4]+4149444226&4294967295,x=y+(v<<6&4294967295|v>>>26),v=R+(y^(x|~E))+k[11]+3174756917&4294967295,R=x+(v<<10&4294967295|v>>>22),v=E+(x^(R|~y))+k[2]+718787259&4294967295,E=R+(v<<15&4294967295|v>>>17),v=y+(R^(E|~x))+k[9]+3951481745&4294967295,I.g[0]=I.g[0]+x&4294967295,I.g[1]=I.g[1]+(E+(v<<21&4294967295|v>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+R&4294967295}r.prototype.u=function(I,x){x===void 0&&(x=I.length);for(var y=x-this.blockSize,k=this.B,E=this.h,R=0;R<x;){if(E==0)for(;R<=y;)s(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<x;)if(k[E++]=I.charCodeAt(R++),E==this.blockSize){s(this,k),E=0;break}}else for(;R<x;)if(k[E++]=I[R++],E==this.blockSize){s(this,k),E=0;break}}this.h=E,this.o+=x},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var x=1;x<I.length-8;++x)I[x]=0;var y=8*this.o;for(x=I.length-8;x<I.length;++x)I[x]=y&255,y/=256;for(this.u(I),I=Array(16),x=y=0;4>x;++x)for(var k=0;32>k;k+=8)I[y++]=this.g[x]>>>k&255;return I};function i(I,x){var y=c;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=x(I)}function o(I,x){this.h=x;for(var y=[],k=!0,E=I.length-1;0<=E;E--){var R=I[E]|0;k&&R==x||(y[E]=R,k=!1)}this.g=y}var c={};function u(I){return-128<=I&&128>I?i(I,function(x){return new o([x|0],0>x?-1:0)}):new o([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return g;if(0>I)return N(d(-I));for(var x=[],y=1,k=0;I>=y;k++)x[k]=I/y|0,y*=4294967296;return new o(x,0)}function m(I,x){if(I.length==0)throw Error("number format error: empty string");if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(I.charAt(0)=="-")return N(m(I.substring(1),x));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(x,8)),k=g,E=0;E<I.length;E+=8){var R=Math.min(8,I.length-E),v=parseInt(I.substring(E,E+R),x);8>R?(R=d(Math.pow(x,R)),k=k.j(R).add(d(v))):(k=k.j(y),k=k.add(d(v)))}return k}var g=u(0),_=u(1),b=u(16777216);n=o.prototype,n.m=function(){if(P(this))return-N(this).m();for(var I=0,x=1,y=0;y<this.g.length;y++){var k=this.i(y);I+=(0<=k?k:4294967296+k)*x,x*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(T(this))return"0";if(P(this))return"-"+N(this).toString(I);for(var x=d(Math.pow(I,6)),y=this,k="";;){var E=O(y,x).g;y=D(y,E.j(x));var R=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=E,T(y))return R+k;for(;6>R.length;)R="0"+R;k=R+k}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function T(I){if(I.h!=0)return!1;for(var x=0;x<I.g.length;x++)if(I.g[x]!=0)return!1;return!0}function P(I){return I.h==-1}n.l=function(I){return I=D(this,I),P(I)?-1:T(I)?0:1};function N(I){for(var x=I.g.length,y=[],k=0;k<x;k++)y[k]=~I.g[k];return new o(y,~I.h).add(_)}n.abs=function(){return P(this)?N(this):this},n.add=function(I){for(var x=Math.max(this.g.length,I.g.length),y=[],k=0,E=0;E<=x;E++){var R=k+(this.i(E)&65535)+(I.i(E)&65535),v=(R>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);k=v>>>16,R&=65535,v&=65535,y[E]=v<<16|R}return new o(y,y[y.length-1]&-2147483648?-1:0)};function D(I,x){return I.add(N(x))}n.j=function(I){if(T(this)||T(I))return g;if(P(this))return P(I)?N(this).j(N(I)):N(N(this).j(I));if(P(I))return N(this.j(N(I)));if(0>this.l(b)&&0>I.l(b))return d(this.m()*I.m());for(var x=this.g.length+I.g.length,y=[],k=0;k<2*x;k++)y[k]=0;for(k=0;k<this.g.length;k++)for(var E=0;E<I.g.length;E++){var R=this.i(k)>>>16,v=this.i(k)&65535,oe=I.i(E)>>>16,me=I.i(E)&65535;y[2*k+2*E]+=v*me,C(y,2*k+2*E),y[2*k+2*E+1]+=R*me,C(y,2*k+2*E+1),y[2*k+2*E+1]+=v*oe,C(y,2*k+2*E+1),y[2*k+2*E+2]+=R*oe,C(y,2*k+2*E+2)}for(k=0;k<x;k++)y[k]=y[2*k+1]<<16|y[2*k];for(k=x;k<2*x;k++)y[k]=0;return new o(y,0)};function C(I,x){for(;(I[x]&65535)!=I[x];)I[x+1]+=I[x]>>>16,I[x]&=65535,x++}function L(I,x){this.g=I,this.h=x}function O(I,x){if(T(x))throw Error("division by zero");if(T(I))return new L(g,g);if(P(I))return x=O(N(I),x),new L(N(x.g),N(x.h));if(P(x))return x=O(I,N(x)),new L(N(x.g),x.h);if(30<I.g.length){if(P(I)||P(x))throw Error("slowDivide_ only works with positive integers.");for(var y=_,k=x;0>=k.l(I);)y=V(y),k=V(k);var E=H(y,1),R=H(k,1);for(k=H(k,2),y=H(y,2);!T(k);){var v=R.add(k);0>=v.l(I)&&(E=E.add(y),R=v),k=H(k,1),y=H(y,1)}return x=D(I,E.j(x)),new L(E,x)}for(E=g;0<=I.l(x);){for(y=Math.max(1,Math.floor(I.m()/x.m())),k=Math.ceil(Math.log(y)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),R=d(y),v=R.j(x);P(v)||0<v.l(I);)y-=k,R=d(y),v=R.j(x);T(R)&&(R=_),E=E.add(R),I=D(I,v)}return new L(E,I)}n.A=function(I){return O(this,I).h},n.and=function(I){for(var x=Math.max(this.g.length,I.g.length),y=[],k=0;k<x;k++)y[k]=this.i(k)&I.i(k);return new o(y,this.h&I.h)},n.or=function(I){for(var x=Math.max(this.g.length,I.g.length),y=[],k=0;k<x;k++)y[k]=this.i(k)|I.i(k);return new o(y,this.h|I.h)},n.xor=function(I){for(var x=Math.max(this.g.length,I.g.length),y=[],k=0;k<x;k++)y[k]=this.i(k)^I.i(k);return new o(y,this.h^I.h)};function V(I){for(var x=I.g.length+1,y=[],k=0;k<x;k++)y[k]=I.i(k)<<1|I.i(k-1)>>>31;return new o(y,I.h)}function H(I,x){var y=x>>5;x%=32;for(var k=I.g.length-y,E=[],R=0;R<k;R++)E[R]=0<x?I.i(R+y)>>>x|I.i(R+y+1)<<32-x:I.i(R+y);return new o(E,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ph=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=m,$t=o}).apply(typeof Mc<"u"?Mc:typeof self<"u"?self:typeof window<"u"?window:{});var bs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dh,wr,Lh,Ds,Pa,Mh,Oh,Vh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof bs=="object"&&bs];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var j=a[p];if(!(j in f))break e;f=f[j]}a=a[a.length-1],p=f[a],h=h(p),h!=p&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,p=!1,j={next:function(){if(!p&&f<a.length){var M=f++;return{value:h(M,a[M]),done:!1}}return p=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function d(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function m(a,h,f){return a.call.apply(a.bind,arguments)}function g(a,h,f){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,p),a.apply(h,j)}}return function(){return a.apply(h,arguments)}}function _(a,h,f){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:g,_.apply(null,arguments)}function b(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function T(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(p,j,M){for(var K=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)K[fe-2]=arguments[fe];return h.prototype[j].apply(p,K)}}function P(a){const h=a.length;if(0<h){const f=Array(h);for(let p=0;p<h;p++)f[p]=a[p];return f}return[]}function N(a,h){for(let f=1;f<arguments.length;f++){const p=arguments[f];if(u(p)){const j=a.length||0,M=p.length||0;a.length=j+M;for(let K=0;K<M;K++)a[j+K]=p[K]}else a.push(p)}}class D{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function C(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var V=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function H(a,h,f){for(const p in a)h.call(f,a[p],p,a)}function I(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function x(a){const h={};for(const f in a)h[f]=a[f];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(a,h){let f,p;for(let j=1;j<arguments.length;j++){p=arguments[j];for(f in p)a[f]=p[f];for(let M=0;M<y.length;M++)f=y[M],Object.prototype.hasOwnProperty.call(p,f)&&(a[f]=p[f])}}function E(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function R(a){c.setTimeout(()=>{throw a},0)}function v(){var a=te;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class oe{constructor(){this.h=this.g=null}add(h,f){const p=me.get();p.set(h,f),this.h?this.h.next=p:this.g=p,this.h=p}}var me=new D(()=>new de,a=>a.reset());class de{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let He,ze=!1,te=new oe,S=()=>{const a=c.Promise.resolve(void 0);He=()=>{a.then(B)}};var B=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(f){R(f)}var h=me;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ze=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function W(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}W.prototype.h=function(){this.defaultPrevented=!0};var ne=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,h),c.removeEventListener("test",f,h)}catch{}return a}();function ue(a,h){if(W.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(V){e:{try{O(h.nodeName);var j=!0;break e}catch{}j=!1}j||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ee[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ue.aa.h.call(this)}}T(ue,W);var ee={2:"touch",3:"pen",4:"mouse"};ue.prototype.h=function(){ue.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Je="closure_listenable_"+(1e6*Math.random()|0),be=0;function Vi(a,h,f,p,j){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!p,this.ha=j,this.key=++be,this.da=this.fa=!1}function ss(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function is(a){this.src=a,this.g={},this.h=0}is.prototype.add=function(a,h,f,p,j){var M=a.toString();a=this.g[M],a||(a=this.g[M]=[],this.h++);var K=Fi(a,h,p,j);return-1<K?(h=a[K],f||(h.fa=!1)):(h=new Vi(h,this.src,M,!!p,j),h.fa=f,a.push(h)),h};function Ui(a,h){var f=h.type;if(f in a.g){var p=a.g[f],j=Array.prototype.indexOf.call(p,h,void 0),M;(M=0<=j)&&Array.prototype.splice.call(p,j,1),M&&(ss(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Fi(a,h,f,p){for(var j=0;j<a.length;++j){var M=a[j];if(!M.da&&M.listener==h&&M.capture==!!f&&M.ha==p)return j}return-1}var Bi="closure_lm_"+(1e6*Math.random()|0),Hi={};function gl(a,h,f,p,j){if(Array.isArray(h)){for(var M=0;M<h.length;M++)gl(a,h[M],f,p,j);return null}return f=xl(f),a&&a[Je]?a.K(h,f,d(p)?!!p.capture:!1,j):vm(a,h,f,!1,p,j)}function vm(a,h,f,p,j,M){if(!h)throw Error("Invalid event type");var K=d(j)?!!j.capture:!!j,fe=$i(a);if(fe||(a[Bi]=fe=new is(a)),f=fe.add(h,f,p,K,M),f.proxy)return f;if(p=Em(),f.proxy=p,p.src=a,p.listener=f,a.addEventListener)ne||(j=K),j===void 0&&(j=!1),a.addEventListener(h.toString(),p,j);else if(a.attachEvent)a.attachEvent(yl(h.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Em(){function a(f){return h.call(a.src,a.listener,f)}const h=Tm;return a}function _l(a,h,f,p,j){if(Array.isArray(h))for(var M=0;M<h.length;M++)_l(a,h[M],f,p,j);else p=d(p)?!!p.capture:!!p,f=xl(f),a&&a[Je]?(a=a.i,h=String(h).toString(),h in a.g&&(M=a.g[h],f=Fi(M,f,p,j),-1<f&&(ss(M[f]),Array.prototype.splice.call(M,f,1),M.length==0&&(delete a.g[h],a.h--)))):a&&(a=$i(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Fi(h,f,p,j)),(f=-1<a?h[a]:null)&&Ki(f))}function Ki(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Je])Ui(h.i,a);else{var f=a.type,p=a.proxy;h.removeEventListener?h.removeEventListener(f,p,a.capture):h.detachEvent?h.detachEvent(yl(f),p):h.addListener&&h.removeListener&&h.removeListener(p),(f=$i(h))?(Ui(f,a),f.h==0&&(f.src=null,h[Bi]=null)):ss(a)}}}function yl(a){return a in Hi?Hi[a]:Hi[a]="on"+a}function Tm(a,h){if(a.da)a=!0;else{h=new ue(h,this);var f=a.listener,p=a.ha||a.src;a.fa&&Ki(a),a=f.call(p,h)}return a}function $i(a){return a=a[Bi],a instanceof is?a:null}var qi="__closure_events_fn_"+(1e9*Math.random()>>>0);function xl(a){return typeof a=="function"?a:(a[qi]||(a[qi]=function(h){return a.handleEvent(h)}),a[qi])}function Le(){G.call(this),this.i=new is(this),this.M=this,this.F=null}T(Le,G),Le.prototype[Je]=!0,Le.prototype.removeEventListener=function(a,h,f,p){_l(this,a,h,f,p)};function Ke(a,h){var f,p=a.F;if(p)for(f=[];p;p=p.F)f.push(p);if(a=a.M,p=h.type||h,typeof h=="string")h=new W(h,a);else if(h instanceof W)h.target=h.target||a;else{var j=h;h=new W(p,a),k(h,j)}if(j=!0,f)for(var M=f.length-1;0<=M;M--){var K=h.g=f[M];j=as(K,p,!0,h)&&j}if(K=h.g=a,j=as(K,p,!0,h)&&j,j=as(K,p,!1,h)&&j,f)for(M=0;M<f.length;M++)K=h.g=f[M],j=as(K,p,!1,h)&&j}Le.prototype.N=function(){if(Le.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],p=0;p<f.length;p++)ss(f[p]);delete a.g[h],a.h--}}this.F=null},Le.prototype.K=function(a,h,f,p){return this.i.add(String(a),h,!1,f,p)},Le.prototype.L=function(a,h,f,p){return this.i.add(String(a),h,!0,f,p)};function as(a,h,f,p){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var j=!0,M=0;M<h.length;++M){var K=h[M];if(K&&!K.da&&K.capture==f){var fe=K.listener,Ce=K.ha||K.src;K.fa&&Ui(a.i,K),j=fe.call(Ce,p)!==!1&&j}}return j&&!p.defaultPrevented}function vl(a,h,f){if(typeof a=="function")f&&(a=_(a,f));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function El(a){a.g=vl(()=>{a.g=null,a.i&&(a.i=!1,El(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class bm extends G{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:El(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ir(a){G.call(this),this.h=a,this.g={}}T(ir,G);var Tl=[];function bl(a){H(a.g,function(h,f){this.g.hasOwnProperty(f)&&Ki(h)},a),a.g={}}ir.prototype.N=function(){ir.aa.N.call(this),bl(this)},ir.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wi=c.JSON.stringify,wm=c.JSON.parse,Im=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function zi(){}zi.prototype.h=null;function wl(a){return a.h||(a.h=a.i())}function Il(){}var ar={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gi(){W.call(this,"d")}T(Gi,W);function Qi(){W.call(this,"c")}T(Qi,W);var ln={},Al=null;function os(){return Al=Al||new Le}ln.La="serverreachability";function kl(a){W.call(this,ln.La,a)}T(kl,W);function or(a){const h=os();Ke(h,new kl(h))}ln.STAT_EVENT="statevent";function Rl(a,h){W.call(this,ln.STAT_EVENT,a),this.stat=h}T(Rl,W);function $e(a){const h=os();Ke(h,new Rl(h,a))}ln.Ma="timingevent";function Nl(a,h){W.call(this,ln.Ma,a),this.size=h}T(Nl,W);function lr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function cr(){this.g=!0}cr.prototype.xa=function(){this.g=!1};function Am(a,h,f,p,j,M){a.info(function(){if(a.g)if(M)for(var K="",fe=M.split("&"),Ce=0;Ce<fe.length;Ce++){var le=fe[Ce].split("=");if(1<le.length){var Me=le[0];le=le[1];var Oe=Me.split("_");K=2<=Oe.length&&Oe[1]=="type"?K+(Me+"="+le+"&"):K+(Me+"=redacted&")}}else K=null;else K=M;return"XMLHTTP REQ ("+p+") [attempt "+j+"]: "+h+`
`+f+`
`+K})}function km(a,h,f,p,j,M,K){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+j+"]: "+h+`
`+f+`
`+M+" "+K})}function Nn(a,h,f,p){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Nm(a,f)+(p?" "+p:"")})}function Rm(a,h){a.info(function(){return"TIMEOUT: "+h})}cr.prototype.info=function(){};function Nm(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var p=f[a];if(!(2>p.length)){var j=p[1];if(Array.isArray(j)&&!(1>j.length)){var M=j[0];if(M!="noop"&&M!="stop"&&M!="close")for(var K=1;K<j.length;K++)j[K]=""}}}}return Wi(f)}catch{return h}}var ls={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ji;function cs(){}T(cs,zi),cs.prototype.g=function(){return new XMLHttpRequest},cs.prototype.i=function(){return{}},Ji=new cs;function jt(a,h,f,p){this.j=a,this.i=h,this.l=f,this.R=p||1,this.U=new ir(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Cl}function Cl(){this.i=null,this.g="",this.h=!1}var jl={},Yi={};function Xi(a,h,f){a.L=1,a.v=fs(yt(h)),a.m=f,a.P=!0,Pl(a,null)}function Pl(a,h){a.F=Date.now(),us(a),a.A=yt(a.v);var f=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),zl(f.i,"t",p),a.C=0,f=a.j.J,a.h=new Cl,a.g=hc(a.j,f?h:null,!a.m),0<a.O&&(a.M=new bm(_(a.Y,a,a.g),a.O)),h=a.U,f=a.g,p=a.ca;var j="readystatechange";Array.isArray(j)||(j&&(Tl[0]=j.toString()),j=Tl);for(var M=0;M<j.length;M++){var K=gl(f,j[M],p||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.H?x(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),or(),Am(a.i,a.u,a.A,a.l,a.R,a.m)}jt.prototype.ca=function(a){a=a.target;const h=this.M;h&&xt(a)==3?h.j():this.Y(a)},jt.prototype.Y=function(a){try{if(a==this.g)e:{const Oe=xt(this.g);var h=this.g.Ba();const jn=this.g.Z();if(!(3>Oe)&&(Oe!=3||this.g&&(this.h.h||this.g.oa()||ec(this.g)))){this.J||Oe!=4||h==7||(h==8||0>=jn?or(3):or(2)),Zi(this);var f=this.g.Z();this.X=f;t:if(Dl(this)){var p=ec(this.g);a="";var j=p.length,M=xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cn(this),ur(this);var K="";break t}this.h.i=new c.TextDecoder}for(h=0;h<j;h++)this.h.h=!0,a+=this.h.i.decode(p[h],{stream:!(M&&h==j-1)});p.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=f==200,km(this.i,this.u,this.A,this.l,this.R,Oe,f),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,Ce=this.g;if((fe=Ce.g?Ce.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(fe)){var le=fe;break t}}le=null}if(f=le)Nn(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ea(this,f);else{this.o=!1,this.s=3,$e(12),cn(this),ur(this);break e}}if(this.P){f=!0;let rt;for(;!this.J&&this.C<K.length;)if(rt=Sm(this,K),rt==Yi){Oe==4&&(this.s=4,$e(14),f=!1),Nn(this.i,this.l,null,"[Incomplete Response]");break}else if(rt==jl){this.s=4,$e(15),Nn(this.i,this.l,K,"[Invalid Chunk]"),f=!1;break}else Nn(this.i,this.l,rt,null),ea(this,rt);if(Dl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Oe!=4||K.length!=0||this.h.h||(this.s=1,$e(16),f=!1),this.o=this.o&&f,!f)Nn(this.i,this.l,K,"[Invalid Chunked Response]"),cn(this),ur(this);else if(0<K.length&&!this.W){this.W=!0;var Me=this.j;Me.g==this&&Me.ba&&!Me.M&&(Me.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),aa(Me),Me.M=!0,$e(11))}}else Nn(this.i,this.l,K,null),ea(this,K);Oe==4&&cn(this),this.o&&!this.J&&(Oe==4?oc(this.j,this):(this.o=!1,us(this)))}else zm(this.g),f==400&&0<K.indexOf("Unknown SID")?(this.s=3,$e(12)):(this.s=0,$e(13)),cn(this),ur(this)}}}catch{}finally{}};function Dl(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Sm(a,h){var f=a.C,p=h.indexOf(`
`,f);return p==-1?Yi:(f=Number(h.substring(f,p)),isNaN(f)?jl:(p+=1,p+f>h.length?Yi:(h=h.slice(p,p+f),a.C=p+f,h)))}jt.prototype.cancel=function(){this.J=!0,cn(this)};function us(a){a.S=Date.now()+a.I,Ll(a,a.I)}function Ll(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=lr(_(a.ba,a),h)}function Zi(a){a.B&&(c.clearTimeout(a.B),a.B=null)}jt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Rm(this.i,this.A),this.L!=2&&(or(),$e(17)),cn(this),this.s=2,ur(this)):Ll(this,this.S-a)};function ur(a){a.j.G==0||a.J||oc(a.j,a)}function cn(a){Zi(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,bl(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function ea(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||ta(f.h,a))){if(!a.K&&ta(f.h,a)&&f.G==3){try{var p=f.Da.g.parse(h)}catch{p=null}if(Array.isArray(p)&&p.length==3){var j=p;if(j[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)xs(f),_s(f);else break e;ia(f),$e(18)}}else f.za=j[1],0<f.za-f.T&&37500>j[2]&&f.F&&f.v==0&&!f.C&&(f.C=lr(_(f.Za,f),6e3));if(1>=Vl(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else hn(f,11)}else if((a.K||f.g==a)&&xs(f),!C(h))for(j=f.Da.g.parse(h),h=0;h<j.length;h++){let le=j[h];if(f.T=le[0],le=le[1],f.G==2)if(le[0]=="c"){f.K=le[1],f.ia=le[2];const Me=le[3];Me!=null&&(f.la=Me,f.j.info("VER="+f.la));const Oe=le[4];Oe!=null&&(f.Aa=Oe,f.j.info("SVER="+f.Aa));const jn=le[5];jn!=null&&typeof jn=="number"&&0<jn&&(p=1.5*jn,f.L=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const rt=a.g;if(rt){const Es=rt.g?rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Es){var M=p.h;M.g||Es.indexOf("spdy")==-1&&Es.indexOf("quic")==-1&&Es.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(na(M,M.h),M.h=null))}if(p.D){const oa=rt.g?rt.g.getResponseHeader("X-HTTP-Session-Id"):null;oa&&(p.ya=oa,pe(p.I,p.D,oa))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),p=f;var K=a;if(p.qa=uc(p,p.J?p.ia:null,p.W),K.K){Ul(p.h,K);var fe=K,Ce=p.L;Ce&&(fe.I=Ce),fe.B&&(Zi(fe),us(fe)),p.g=K}else ic(p);0<f.i.length&&ys(f)}else le[0]!="stop"&&le[0]!="close"||hn(f,7);else f.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?hn(f,7):sa(f):le[0]!="noop"&&f.l&&f.l.ta(le),f.v=0)}}or(4)}catch{}}var Cm=class{constructor(a,h){this.g=a,this.map=h}};function Ml(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ol(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Vl(a){return a.h?1:a.g?a.g.size:0}function ta(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function na(a,h){a.g?a.g.add(h):a.h=h}function Ul(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Ml.prototype.cancel=function(){if(this.i=Fl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Fl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return P(a.i)}function jm(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,p=0;p<f;p++)h.push(a[p]);return h}h=[],f=0;for(p in a)h[f++]=a[p];return h}function Pm(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const p in a)h[f++]=p;return h}}}function Bl(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Pm(a),p=jm(a),j=p.length,M=0;M<j;M++)h.call(void 0,p[M],f&&f[M],a)}var Hl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Dm(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var p=a[f].indexOf("="),j=null;if(0<=p){var M=a[f].substring(0,p);j=a[f].substring(p+1)}else M=a[f];h(M,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function un(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof un){this.h=a.h,hs(this,a.j),this.o=a.o,this.g=a.g,ds(this,a.s),this.l=a.l;var h=a.i,f=new fr;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Kl(this,f),this.m=a.m}else a&&(h=String(a).match(Hl))?(this.h=!1,hs(this,h[1]||"",!0),this.o=hr(h[2]||""),this.g=hr(h[3]||"",!0),ds(this,h[4]),this.l=hr(h[5]||"",!0),Kl(this,h[6]||"",!0),this.m=hr(h[7]||"")):(this.h=!1,this.i=new fr(null,this.h))}un.prototype.toString=function(){var a=[],h=this.j;h&&a.push(dr(h,$l,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(dr(h,$l,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(dr(f,f.charAt(0)=="/"?Om:Mm,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",dr(f,Um)),a.join("")};function yt(a){return new un(a)}function hs(a,h,f){a.j=f?hr(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ds(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Kl(a,h,f){h instanceof fr?(a.i=h,Fm(a.i,a.h)):(f||(h=dr(h,Vm)),a.i=new fr(h,a.h))}function pe(a,h,f){a.i.set(h,f)}function fs(a){return pe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function hr(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function dr(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Lm),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Lm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var $l=/[#\/\?@]/g,Mm=/[#\?:]/g,Om=/[#\?]/g,Vm=/[#\?@]/g,Um=/#/g;function fr(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Pt(a){a.g||(a.g=new Map,a.h=0,a.i&&Dm(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=fr.prototype,n.add=function(a,h){Pt(this),this.i=null,a=Sn(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function ql(a,h){Pt(a),h=Sn(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Wl(a,h){return Pt(a),h=Sn(a,h),a.g.has(h)}n.forEach=function(a,h){Pt(this),this.g.forEach(function(f,p){f.forEach(function(j){a.call(h,j,p,this)},this)},this)},n.na=function(){Pt(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let p=0;p<h.length;p++){const j=a[p];for(let M=0;M<j.length;M++)f.push(h[p])}return f},n.V=function(a){Pt(this);let h=[];if(typeof a=="string")Wl(this,a)&&(h=h.concat(this.g.get(Sn(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},n.set=function(a,h){return Pt(this),this.i=null,a=Sn(this,a),Wl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function zl(a,h,f){ql(a,h),0<f.length&&(a.i=null,a.g.set(Sn(a,h),P(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var p=h[f];const M=encodeURIComponent(String(p)),K=this.V(p);for(p=0;p<K.length;p++){var j=M;K[p]!==""&&(j+="="+encodeURIComponent(String(K[p]))),a.push(j)}}return this.i=a.join("&")};function Sn(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Fm(a,h){h&&!a.j&&(Pt(a),a.i=null,a.g.forEach(function(f,p){var j=p.toLowerCase();p!=j&&(ql(this,p),zl(this,j,f))},a)),a.j=h}function Bm(a,h){const f=new cr;if(c.Image){const p=new Image;p.onload=b(Dt,f,"TestLoadImage: loaded",!0,h,p),p.onerror=b(Dt,f,"TestLoadImage: error",!1,h,p),p.onabort=b(Dt,f,"TestLoadImage: abort",!1,h,p),p.ontimeout=b(Dt,f,"TestLoadImage: timeout",!1,h,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else h(!1)}function Hm(a,h){const f=new cr,p=new AbortController,j=setTimeout(()=>{p.abort(),Dt(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:p.signal}).then(M=>{clearTimeout(j),M.ok?Dt(f,"TestPingServer: ok",!0,h):Dt(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(j),Dt(f,"TestPingServer: error",!1,h)})}function Dt(a,h,f,p,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),p(f)}catch{}}function Km(){this.g=new Im}function $m(a,h,f){const p=f||"";try{Bl(a,function(j,M){let K=j;d(j)&&(K=Wi(j)),h.push(p+M+"="+encodeURIComponent(K))})}catch(j){throw h.push(p+"type="+encodeURIComponent("_badmap")),j}}function ms(a){this.l=a.Ub||null,this.j=a.eb||!1}T(ms,zi),ms.prototype.g=function(){return new ps(this.l,this.j)},ms.prototype.i=function(a){return function(){return a}}({});function ps(a,h){Le.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(ps,Le),n=ps.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,pr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mr(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,pr(this)),this.g&&(this.readyState=3,pr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gl(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gl(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?mr(this):pr(this),this.readyState==3&&Gl(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,mr(this))},n.Qa=function(a){this.g&&(this.response=a,mr(this))},n.ga=function(){this.g&&mr(this)};function mr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,pr(a)}n.setRequestHeader=function(a,h){this.u.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function pr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ps.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ql(a){let h="";return H(a,function(f,p){h+=p,h+=":",h+=f,h+=`\r
`}),h}function ra(a,h,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=Ql(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):pe(a,h,f))}function ve(a){Le.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(ve,Le);var qm=/^https?$/i,Wm=["POST","PUT"];n=ve.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,h,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ji.g(),this.v=this.o?wl(this.o):wl(Ji),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(M){Jl(this,M);return}if(a=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var j in p)f.set(j,p[j]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const M of p.keys())f.set(M,p.get(M));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(M=>M.toLowerCase()=="content-type"),j=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Wm,h,void 0))||p||j||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,K]of f)this.g.setRequestHeader(M,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zl(this),this.u=!0,this.g.send(a),this.u=!1}catch(M){Jl(this,M)}};function Jl(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Yl(a),gs(a)}function Yl(a){a.A||(a.A=!0,Ke(a,"complete"),Ke(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ke(this,"complete"),Ke(this,"abort"),gs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gs(this,!0)),ve.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Xl(this):this.bb())},n.bb=function(){Xl(this)};function Xl(a){if(a.h&&typeof o<"u"&&(!a.v[1]||xt(a)!=4||a.Z()!=2)){if(a.u&&xt(a)==4)vl(a.Ea,0,a);else if(Ke(a,"readystatechange"),xt(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var p;if(p=K===0){var j=String(a.D).match(Hl)[1]||null;!j&&c.self&&c.self.location&&(j=c.self.location.protocol.slice(0,-1)),p=!qm.test(j?j.toLowerCase():"")}f=p}if(f)Ke(a,"complete"),Ke(a,"success");else{a.m=6;try{var M=2<xt(a)?a.g.statusText:""}catch{M=""}a.l=M+" ["+a.Z()+"]",Yl(a)}}finally{gs(a)}}}}function gs(a,h){if(a.g){Zl(a);const f=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Ke(a,"ready");try{f.onreadystatechange=p}catch{}}}function Zl(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function xt(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<xt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),wm(h)}};function ec(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function zm(a){const h={};a=(a.g&&2<=xt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(C(a[p]))continue;var f=E(a[p]);const j=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const M=h[j]||[];h[j]=M,M.push(f)}I(h,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gr(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function tc(a){this.Aa=0,this.i=[],this.j=new cr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gr("baseRetryDelayMs",5e3,a),this.cb=gr("retryDelaySeedMs",1e4,a),this.Wa=gr("forwardChannelMaxRetries",2,a),this.wa=gr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ml(a&&a.concurrentRequestLimit),this.Da=new Km,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=tc.prototype,n.la=8,n.G=1,n.connect=function(a,h,f,p){$e(0),this.W=a,this.H=h||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.I=uc(this,null,this.W),ys(this)};function sa(a){if(nc(a),a.G==3){var h=a.U++,f=yt(a.I);if(pe(f,"SID",a.K),pe(f,"RID",h),pe(f,"TYPE","terminate"),_r(a,f),h=new jt(a,a.j,h),h.L=2,h.v=fs(yt(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=h.v,f=!0),f||(h.g=hc(h.j,null),h.g.ea(h.v)),h.F=Date.now(),us(h)}cc(a)}function _s(a){a.g&&(aa(a),a.g.cancel(),a.g=null)}function nc(a){_s(a),a.u&&(c.clearTimeout(a.u),a.u=null),xs(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function ys(a){if(!Ol(a.h)&&!a.s){a.s=!0;var h=a.Ga;He||S(),ze||(He(),ze=!0),te.add(h,a),a.B=0}}function Gm(a,h){return Vl(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=lr(_(a.Ga,a,h),lc(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const j=new jt(this,this.j,a);let M=this.o;if(this.S&&(M?(M=x(M),k(M,this.S)):M=this.S),this.m!==null||this.O||(j.H=M,M=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(h+=p,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=sc(this,j,h),f=yt(this.I),pe(f,"RID",a),pe(f,"CVER",22),this.D&&pe(f,"X-HTTP-Session-Id",this.D),_r(this,f),M&&(this.O?h="headers="+encodeURIComponent(String(Ql(M)))+"&"+h:this.m&&ra(f,this.m,M)),na(this.h,j),this.Ua&&pe(f,"TYPE","init"),this.P?(pe(f,"$req",h),pe(f,"SID","null"),j.T=!0,Xi(j,f,null)):Xi(j,f,h),this.G=2}}else this.G==3&&(a?rc(this,a):this.i.length==0||Ol(this.h)||rc(this))};function rc(a,h){var f;h?f=h.l:f=a.U++;const p=yt(a.I);pe(p,"SID",a.K),pe(p,"RID",f),pe(p,"AID",a.T),_r(a,p),a.m&&a.o&&ra(p,a.m,a.o),f=new jt(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=sc(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),na(a.h,f),Xi(f,p,h)}function _r(a,h){a.H&&H(a.H,function(f,p){pe(h,p,f)}),a.l&&Bl({},function(f,p){pe(h,p,f)})}function sc(a,h,f){f=Math.min(a.i.length,f);var p=a.l?_(a.l.Na,a.l,a):null;e:{var j=a.i;let M=-1;for(;;){const K=["count="+f];M==-1?0<f?(M=j[0].g,K.push("ofs="+M)):M=0:K.push("ofs="+M);let fe=!0;for(let Ce=0;Ce<f;Ce++){let le=j[Ce].g;const Me=j[Ce].map;if(le-=M,0>le)M=Math.max(0,j[Ce].g-100),fe=!1;else try{$m(Me,K,"req"+le+"_")}catch{p&&p(Me)}}if(fe){p=K.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,p}function ic(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;He||S(),ze||(He(),ze=!0),te.add(h,a),a.v=0}}function ia(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=lr(_(a.Fa,a),lc(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,ac(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=lr(_(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$e(10),_s(this),ac(this))};function aa(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function ac(a){a.g=new jt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=yt(a.qa);pe(h,"RID","rpc"),pe(h,"SID",a.K),pe(h,"AID",a.T),pe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&pe(h,"TO",a.ja),pe(h,"TYPE","xmlhttp"),_r(a,h),a.m&&a.o&&ra(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=fs(yt(h)),f.m=null,f.P=!0,Pl(f,a)}n.Za=function(){this.C!=null&&(this.C=null,_s(this),ia(this),$e(19))};function xs(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function oc(a,h){var f=null;if(a.g==h){xs(a),aa(a),a.g=null;var p=2}else if(ta(a.h,h))f=h.D,Ul(a.h,h),p=1;else return;if(a.G!=0){if(h.o)if(p==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var j=a.B;p=os(),Ke(p,new Nl(p,f)),ys(a)}else ic(a);else if(j=h.s,j==3||j==0&&0<h.X||!(p==1&&Gm(a,h)||p==2&&ia(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),j){case 1:hn(a,5);break;case 4:hn(a,10);break;case 3:hn(a,6);break;default:hn(a,2)}}}function lc(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function hn(a,h){if(a.j.info("Error code "+h),h==2){var f=_(a.fb,a),p=a.Xa;const j=!p;p=new un(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||hs(p,"https"),fs(p),j?Bm(p.toString(),f):Hm(p.toString(),f)}else $e(2);a.G=0,a.l&&a.l.sa(h),cc(a),nc(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function cc(a){if(a.G=0,a.ka=[],a.l){const h=Fl(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ka,h),N(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function uc(a,h,f){var p=f instanceof un?yt(f):new un(f);if(p.g!="")h&&(p.g=h+"."+p.g),ds(p,p.s);else{var j=c.location;p=j.protocol,h=h?h+"."+j.hostname:j.hostname,j=+j.port;var M=new un(null);p&&hs(M,p),h&&(M.g=h),j&&ds(M,j),f&&(M.l=f),p=M}return f=a.D,h=a.ya,f&&h&&pe(p,f,h),pe(p,"VER",a.la),_r(a,p),p}function hc(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new ve(new ms({eb:f})):new ve(a.pa),h.Ha(a.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function dc(){}n=dc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function vs(){}vs.prototype.g=function(a,h){return new Ye(a,h)};function Ye(a,h){Le.call(this),this.g=new tc(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!C(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!C(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Cn(this)}T(Ye,Le),Ye.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ye.prototype.close=function(){sa(this.g)},Ye.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Wi(a),a=f);h.i.push(new Cm(h.Ya++,a)),h.G==3&&ys(h)},Ye.prototype.N=function(){this.g.l=null,delete this.j,sa(this.g),delete this.g,Ye.aa.N.call(this)};function fc(a){Gi.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}T(fc,Gi);function mc(){Qi.call(this),this.status=1}T(mc,Qi);function Cn(a){this.g=a}T(Cn,dc),Cn.prototype.ua=function(){Ke(this.g,"a")},Cn.prototype.ta=function(a){Ke(this.g,new fc(a))},Cn.prototype.sa=function(a){Ke(this.g,new mc)},Cn.prototype.ra=function(){Ke(this.g,"b")},vs.prototype.createWebChannel=vs.prototype.g,Ye.prototype.send=Ye.prototype.o,Ye.prototype.open=Ye.prototype.m,Ye.prototype.close=Ye.prototype.close,Vh=function(){return new vs},Oh=function(){return os()},Mh=ln,Pa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ls.NO_ERROR=0,ls.TIMEOUT=8,ls.HTTP_ERROR=6,Ds=ls,Sl.COMPLETE="complete",Lh=Sl,Il.EventType=ar,ar.OPEN="a",ar.CLOSE="b",ar.ERROR="c",ar.MESSAGE="d",Le.prototype.listen=Le.prototype.K,wr=Il,ve.prototype.listenOnce=ve.prototype.L,ve.prototype.getLastError=ve.prototype.Ka,ve.prototype.getLastErrorCode=ve.prototype.Ba,ve.prototype.getStatus=ve.prototype.Z,ve.prototype.getResponseJson=ve.prototype.Oa,ve.prototype.getResponseText=ve.prototype.oa,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Ha,Dh=ve}).apply(typeof bs<"u"?bs:typeof self<"u"?self:typeof window<"u"?window:{});const Oc="@firebase/firestore",Vc="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ue.UNAUTHENTICATED=new Ue(null),Ue.GOOGLE_CREDENTIALS=new Ue("google-credentials-uid"),Ue.FIRST_PARTY=new Ue("first-party-uid"),Ue.MOCK_USER=new Ue("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zn="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new uo("@firebase/firestore");function Pn(){return _n.logLevel}function $(n,...e){if(_n.logLevel<=re.DEBUG){const t=e.map(mo);_n.debug(`Firestore (${Zn}): ${n}`,...t)}}function kt(n,...e){if(_n.logLevel<=re.ERROR){const t=e.map(mo);_n.error(`Firestore (${Zn}): ${n}`,...t)}}function Hn(n,...e){if(_n.logLevel<=re.WARN){const t=e.map(mo);_n.warn(`Firestore (${Zn}): ${n}`,...t)}}function mo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(n="Unexpected state"){const e=`FIRESTORE (${Zn}) INTERNAL ASSERTION FAILED: `+n;throw kt(e),new Error(e)}function he(n,e){n||J()}function X(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends _t{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ue.UNAUTHENTICATED))}shutdown(){}}class ay{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class oy{constructor(e){this.t=e,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){he(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new wt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new wt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new wt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string"),new Uh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string"),new Ue(e)}}class ly{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class cy{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new ly(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Uc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uy{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Xe(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){he(this.o===void 0);const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Uc(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(he(typeof t.token=="string"),this.R=t.token,new Uc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=hy(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ie(n,e){return n<e?-1:n>e?1:0}function Kn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=-62135596800,Bc=1e6;class Re{static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Bc);return new Re(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new q(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new q(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Fc)throw new q(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Bc}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Fc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Re(0,0))}static max(){return new Y(new Re(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="__name__";class ut{constructor(e,t,r){t===void 0?t=0:t>e.length&&J(),r===void 0?r=e.length-t:r>e.length-t&&J(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ut.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ut?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=ut.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return Math.sign(e.length-t.length)}static compareSegments(e,t){const r=ut.isNumericId(e),s=ut.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?ut.extractNumericId(e).compare(ut.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return $t.fromString(e.substring(4,e.length-2))}}class ge extends ut{construct(e,t,r){return new ge(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ge(t)}static emptyPath(){return new ge([])}}const dy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends ut{construct(e,t,r){return new Pe(e,t,r)}static isValidIdentifier(e){return dy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Hc}static keyField(){return new Pe([Hc])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new q(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new q(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new q(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pe(t)}static emptyPath(){return new Pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(ge.fromString(e))}static fromName(e){return new z(ge.fromString(e).popFirst(5))}static empty(){return new z(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new ge(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=-1;function fy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new Re(t+1,0):new Re(t,r));return new Gt(s,z.empty(),e)}function my(n){return new Gt(n.readTime,n.key,Mr)}class Gt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Gt(Y.min(),z.empty(),Mr)}static max(){return new Gt(Y.max(),z.empty(),Mr)}}function py(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=z.comparator(n.documentKey,e.documentKey),t!==0?t:ie(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _y{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function er(n){if(n.code!==U.FAILED_PRECONDITION||n.message!==gy)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof F?t:F.resolve(t)}catch(t){return F.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):F.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):F.reject(t)}static resolve(e){return new F((t,r)=>{t(e)})}static reject(e){return new F((t,r)=>{r(e)})}static waitFor(e){return new F((t,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},u=>r(u))}),o=!0,i===s&&t()})}static or(e){let t=F.resolve(!1);for(const r of e)t=t.next(s=>s?F.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new F((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(m=>{o[d]=m,++c,c===i&&r(o)},m=>s(m))}})}static doWhile(e,t){return new F((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function yy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function tr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}pi.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=-1;function gi(n){return n==null}function Gs(n){return n===0&&1/n==-1/0}function xy(n){return typeof n=="number"&&Number.isInteger(n)&&!Gs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="";function vy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Kc(e)),e=Ey(n.get(t),e);return Kc(e)}function Ey(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Bh:t+="";break;default:t+=i}}return t}function Kc(n){return n+Bh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function nn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Hh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t){this.comparator=e,this.root=t||je.EMPTY}insert(e,t){return new xe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ws(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ws(this.root,e,this.comparator,!1)}getReverseIterator(){return new ws(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ws(this.root,e,this.comparator,!0)}}class ws{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??je.RED,this.left=s??je.EMPTY,this.right=i??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new je(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,t,r,s,i){return this}insert(e,t,r){return new je(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new qc(this.data.getIterator())}getIteratorFrom(e){return new qc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ne)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ne(this.comparator);return t.data=e,t}}class qc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.fields=e,e.sort(Pe.comparator)}static empty(){return new Ze([])}unionWith(e){let t=new Ne(Pe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ze(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Kn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Kh("Invalid base64 string: "+i):i}}(e);return new De(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new De(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}De.EMPTY_BYTE_STRING=new De("");const Ty=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(n){if(he(!!n),typeof n=="string"){let e=0;const t=Ty.exec(n);if(he(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(n.seconds),nanos:we(n.nanos)}}function we(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Jt(n){return typeof n=="string"?De.fromBase64String(n):De.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="server_timestamp",qh="__type__",Wh="__previous_value__",zh="__local_write_time__";function go(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[qh])===null||t===void 0?void 0:t.stringValue)===$h}function _i(n){const e=n.mapValue.fields[Wh];return go(e)?_i(e):e}function Or(n){const e=Qt(n.mapValue.fields[zh].timestampValue);return new Re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,t,r,s,i,o,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d}}const Qs="(default)";class Vr{constructor(e,t){this.projectId=e,this.database=t||Qs}static empty(){return new Vr("","")}get isDefaultDatabase(){return this.database===Qs}isEqual(e){return e instanceof Vr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="__type__",wy="__max__",Is={mapValue:{}},Qh="__vector__",Js="value";function Yt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?go(n)?4:Ay(n)?9007199254740991:Iy(n)?10:11:J()}function gt(n,e){if(n===e)return!0;const t=Yt(n);if(t!==Yt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Or(n).isEqual(Or(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Qt(s.timestampValue),c=Qt(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Jt(s.bytesValue).isEqual(Jt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return we(s.geoPointValue.latitude)===we(i.geoPointValue.latitude)&&we(s.geoPointValue.longitude)===we(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return we(s.integerValue)===we(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=we(s.doubleValue),c=we(i.doubleValue);return o===c?Gs(o)===Gs(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return Kn(n.arrayValue.values||[],e.arrayValue.values||[],gt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if($c(o)!==$c(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!gt(o[u],c[u])))return!1;return!0}(n,e);default:return J()}}function Ur(n,e){return(n.values||[]).find(t=>gt(t,e))!==void 0}function $n(n,e){if(n===e)return 0;const t=Yt(n),r=Yt(e);if(t!==r)return ie(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ie(n.booleanValue,e.booleanValue);case 2:return function(i,o){const c=we(i.integerValue||i.doubleValue),u=we(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return Wc(n.timestampValue,e.timestampValue);case 4:return Wc(Or(n),Or(e));case 5:return ie(n.stringValue,e.stringValue);case 6:return function(i,o){const c=Jt(i),u=Jt(o);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),u=o.split("/");for(let d=0;d<c.length&&d<u.length;d++){const m=ie(c[d],u[d]);if(m!==0)return m}return ie(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const c=ie(we(i.latitude),we(o.latitude));return c!==0?c:ie(we(i.longitude),we(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return zc(n.arrayValue,e.arrayValue);case 10:return function(i,o){var c,u,d,m;const g=i.fields||{},_=o.fields||{},b=(c=g[Js])===null||c===void 0?void 0:c.arrayValue,T=(u=_[Js])===null||u===void 0?void 0:u.arrayValue,P=ie(((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0,((m=T==null?void 0:T.values)===null||m===void 0?void 0:m.length)||0);return P!==0?P:zc(b,T)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Is.mapValue&&o===Is.mapValue)return 0;if(i===Is.mapValue)return 1;if(o===Is.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=o.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let g=0;g<u.length&&g<m.length;++g){const _=ie(u[g],m[g]);if(_!==0)return _;const b=$n(c[u[g]],d[m[g]]);if(b!==0)return b}return ie(u.length,m.length)}(n.mapValue,e.mapValue);default:throw J()}}function Wc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ie(n,e);const t=Qt(n),r=Qt(e),s=ie(t.seconds,r.seconds);return s!==0?s:ie(t.nanos,r.nanos)}function zc(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=$n(t[s],r[s]);if(i)return i}return ie(t.length,r.length)}function qn(n){return Da(n)}function Da(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Qt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Jt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Da(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Da(t.fields[o])}`;return s+"}"}(n.mapValue):J()}function Ls(n){switch(Yt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=_i(n);return e?16+Ls(e):16;case 5:return 2*n.stringValue.length;case 6:return Jt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ls(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return nn(r.fields,(i,o)=>{s+=i.length+Ls(o)}),s}(n.mapValue);default:throw J()}}function Gc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function La(n){return!!n&&"integerValue"in n}function _o(n){return!!n&&"arrayValue"in n}function Qc(n){return!!n&&"nullValue"in n}function Jc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ms(n){return!!n&&"mapValue"in n}function Iy(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Gh])===null||t===void 0?void 0:t.stringValue)===Qh}function Rr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return nn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Rr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Rr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Ay(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===wy}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.value=e}static empty(){return new Qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ms(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Rr(t)}setAll(e){let t=Pe.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=Rr(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ms(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return gt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ms(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){nn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Qe(Rr(this.value))}}function Jh(n){const e=[];return nn(n.fields,(t,r)=>{const s=new Pe([t]);if(Ms(r)){const i=Jh(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ze(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Fe(e,0,Y.min(),Y.min(),Y.min(),Qe.empty(),0)}static newFoundDocument(e,t,r,s){return new Fe(e,1,t,Y.min(),r,s,0)}static newNoDocument(e,t){return new Fe(e,2,t,Y.min(),Y.min(),Qe.empty(),0)}static newUnknownDocument(e,t){return new Fe(e,3,t,Y.min(),Y.min(),Qe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,t){this.position=e,this.inclusive=t}}function Yc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),t.key):r=$n(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!gt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t="asc"){this.field=e,this.dir=t}}function ky(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{}class ke extends Yh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Ny(e,t,r):t==="array-contains"?new jy(e,r):t==="in"?new Py(e,r):t==="not-in"?new Dy(e,r):t==="array-contains-any"?new Ly(e,r):new ke(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Sy(e,r):new Cy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison($n(t,this.value)):t!==null&&Yt(this.value)===Yt(t)&&this.matchesComparison($n(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class it extends Yh{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new it(e,t)}matches(e){return Xh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Xh(n){return n.op==="and"}function Zh(n){return Ry(n)&&Xh(n)}function Ry(n){for(const e of n.filters)if(e instanceof it)return!1;return!0}function Ma(n){if(n instanceof ke)return n.field.canonicalString()+n.op.toString()+qn(n.value);if(Zh(n))return n.filters.map(e=>Ma(e)).join(",");{const e=n.filters.map(t=>Ma(t)).join(",");return`${n.op}(${e})`}}function ed(n,e){return n instanceof ke?function(r,s){return s instanceof ke&&r.op===s.op&&r.field.isEqual(s.field)&&gt(r.value,s.value)}(n,e):n instanceof it?function(r,s){return s instanceof it&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&ed(o,s.filters[c]),!0):!1}(n,e):void J()}function td(n){return n instanceof ke?function(t){return`${t.field.canonicalString()} ${t.op} ${qn(t.value)}`}(n):n instanceof it?function(t){return t.op.toString()+" {"+t.getFilters().map(td).join(" ,")+"}"}(n):"Filter"}class Ny extends ke{constructor(e,t,r){super(e,t,r),this.key=z.fromName(r.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class Sy extends ke{constructor(e,t){super(e,"in",t),this.keys=nd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Cy extends ke{constructor(e,t){super(e,"not-in",t),this.keys=nd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function nd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>z.fromName(r.referenceValue))}class jy extends ke{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return _o(t)&&Ur(t.arrayValue,this.value)}}class Py extends ke{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ur(this.value.arrayValue,t)}}class Dy extends ke{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ur(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ur(this.value.arrayValue,t)}}class Ly extends ke{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!_o(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ur(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.le=null}}function Zc(n,e=null,t=[],r=[],s=null,i=null,o=null){return new My(n,e,t,r,s,i,o)}function yo(n){const e=X(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ma(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),gi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>qn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>qn(r)).join(",")),e.le=t}return e.le}function xo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!ky(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ed(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Xc(n.startAt,e.startAt)&&Xc(n.endAt,e.endAt)}function Oa(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=u,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Oy(n,e,t,r,s,i,o,c){return new nr(n,e,t,r,s,i,o,c)}function vo(n){return new nr(n)}function eu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function rd(n){return n.collectionGroup!==null}function Nr(n){const e=X(n);if(e.he===null){e.he=[];const t=new Set;for(const i of e.explicitOrderBy)e.he.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ne(Pe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.he.push(new Fr(i,r))}),t.has(Pe.keyField().canonicalString())||e.he.push(new Fr(Pe.keyField(),r))}return e.he}function dt(n){const e=X(n);return e.Pe||(e.Pe=Vy(e,Nr(n))),e.Pe}function Vy(n,e){if(n.limitType==="F")return Zc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Fr(s.field,i)});const t=n.endAt?new Ys(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ys(n.startAt.position,n.startAt.inclusive):null;return Zc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Va(n,e){const t=n.filters.concat([e]);return new nr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ua(n,e,t){return new nr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function yi(n,e){return xo(dt(n),dt(e))&&n.limitType===e.limitType}function sd(n){return`${yo(dt(n))}|lt:${n.limitType}`}function Dn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>td(s)).join(", ")}]`),gi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>qn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>qn(s)).join(",")),`Target(${r})`}(dt(n))}; limitType=${n.limitType})`}function xi(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Nr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,c,u){const d=Yc(o,c,u);return o.inclusive?d<=0:d<0}(r.startAt,Nr(r),s)||r.endAt&&!function(o,c,u){const d=Yc(o,c,u);return o.inclusive?d>=0:d>0}(r.endAt,Nr(r),s))}(n,e)}function Uy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function id(n){return(e,t)=>{let r=!1;for(const s of Nr(n)){const i=Fy(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Fy(n,e,t){const r=n.field.isKeyField()?z.comparator(e.key,t.key):function(i,o,c){const u=o.data.field(i),d=c.data.field(i);return u!==null&&d!==null?$n(u,d):J()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){nn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Hh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=new xe(z.comparator);function Rt(){return By}const ad=new xe(z.comparator);function Ir(...n){let e=ad;for(const t of n)e=e.insert(t.key,t);return e}function od(n){let e=ad;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function fn(){return Sr()}function ld(){return Sr()}function Sr(){return new wn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Hy=new xe(z.comparator),Ky=new Ne(z.comparator);function se(...n){let e=Ky;for(const t of n)e=e.add(t);return e}const $y=new Ne(ie);function qy(){return $y}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gs(e)?"-0":e}}function cd(n){return{integerValue:""+n}}function Wy(n,e){return xy(e)?cd(e):Eo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this._=void 0}}function zy(n,e,t){return n instanceof Xs?function(s,i){const o={fields:{[qh]:{stringValue:$h},[zh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&go(i)&&(i=_i(i)),i&&(o.fields[Wh]=i),{mapValue:o}}(t,e):n instanceof Br?hd(n,e):n instanceof Hr?dd(n,e):function(s,i){const o=ud(s,i),c=tu(o)+tu(s.Ie);return La(o)&&La(s.Ie)?cd(c):Eo(s.serializer,c)}(n,e)}function Gy(n,e,t){return n instanceof Br?hd(n,e):n instanceof Hr?dd(n,e):t}function ud(n,e){return n instanceof Zs?function(r){return La(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Xs extends vi{}class Br extends vi{constructor(e){super(),this.elements=e}}function hd(n,e){const t=fd(e);for(const r of n.elements)t.some(s=>gt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Hr extends vi{constructor(e){super(),this.elements=e}}function dd(n,e){let t=fd(e);for(const r of n.elements)t=t.filter(s=>!gt(s,r));return{arrayValue:{values:t}}}class Zs extends vi{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function tu(n){return we(n.integerValue||n.doubleValue)}function fd(n){return _o(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Qy(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Br&&s instanceof Br||r instanceof Hr&&s instanceof Hr?Kn(r.elements,s.elements,gt):r instanceof Zs&&s instanceof Zs?gt(r.Ie,s.Ie):r instanceof Xs&&s instanceof Xs}(n.transform,e.transform)}class Jy{constructor(e,t){this.version=e,this.transformResults=t}}class tt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tt}static exists(e){return new tt(void 0,e)}static updateTime(e){return new tt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Os(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ei{}function md(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new To(n.key,tt.none()):new Gr(n.key,n.data,tt.none());{const t=n.data,r=Qe.empty();let s=new Ne(Pe.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new rn(n.key,r,new Ze(s.toArray()),tt.none())}}function Yy(n,e,t){n instanceof Gr?function(s,i,o){const c=s.value.clone(),u=ru(s.fieldTransforms,i,o.transformResults);c.setAll(u),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof rn?function(s,i,o){if(!Os(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=ru(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(pd(s)),u.setAll(c),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Cr(n,e,t,r){return n instanceof Gr?function(i,o,c,u){if(!Os(i.precondition,o))return c;const d=i.value.clone(),m=su(i.fieldTransforms,u,o);return d.setAll(m),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof rn?function(i,o,c,u){if(!Os(i.precondition,o))return c;const d=su(i.fieldTransforms,u,o),m=o.data;return m.setAll(pd(i)),m.setAll(d),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,o,c){return Os(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function Xy(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=ud(r.transform,s||null);i!=null&&(t===null&&(t=Qe.empty()),t.set(r.field,i))}return t||null}function nu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Kn(r,s,(i,o)=>Qy(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Gr extends Ei{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class rn extends Ei{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function ru(n,e,t){const r=new Map;he(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,Gy(o,c,t[s]))}return r}function su(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,zy(i,o,e))}return r}class To extends Ei{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zy extends Ei{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Yy(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Cr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Cr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ld();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const u=md(o,c);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),se())}isEqual(e){return this.batchId===e.batchId&&Kn(this.mutations,e.mutations,(t,r)=>nu(t,r))&&Kn(this.baseMutations,e.baseMutations,(t,r)=>nu(t,r))}}class bo{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){he(e.mutations.length===r.length);let s=function(){return Hy}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new bo(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,ae;function rx(n){switch(n){case U.OK:return J();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return J()}}function gd(n){if(n===void 0)return kt("GRPC error has no .code"),U.UNKNOWN;switch(n){case Ae.OK:return U.OK;case Ae.CANCELLED:return U.CANCELLED;case Ae.UNKNOWN:return U.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return U.INTERNAL;case Ae.UNAVAILABLE:return U.UNAVAILABLE;case Ae.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Ae.NOT_FOUND:return U.NOT_FOUND;case Ae.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Ae.ABORTED:return U.ABORTED;case Ae.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Ae.DATA_LOSS:return U.DATA_LOSS;default:return J()}}(ae=Ae||(Ae={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix=new $t([4294967295,4294967295],0);function iu(n){const e=sx().encode(n),t=new Ph;return t.update(e),new Uint8Array(t.digest())}function au(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new $t([t,r],0),new $t([s,i],0)]}class wo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ar(`Invalid padding: ${t}`);if(r<0)throw new Ar(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ar(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ar(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=$t.fromNumber(this.Ee)}Ae(e,t,r){let s=e.add(t.multiply($t.fromNumber(r)));return s.compare(ix)===1&&(s=new $t([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=iu(e),[r,s]=au(t);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new wo(i,s,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ee===0)return;const t=iu(e),[r,s]=au(t);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ar extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Qr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ti(Y.min(),s,new xe(ie),Rt(),se())}}class Qr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Qr(r,t,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t,r,s){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=s}}class _d{constructor(e,t){this.targetId=e,this.ge=t}}class yd{constructor(e,t,r=De.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class ou{constructor(){this.pe=0,this.ye=lu(),this.we=De.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=se(),t=se(),r=se();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:J()}}),new Qr(this.we,this.be,e,t,r)}Me(){this.Se=!1,this.ye=lu()}xe(e,t){this.Se=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,he(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class ax{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Rt(),this.$e=As(),this.Ke=As(),this.Ue=new xe(ie)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:J()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,s)=>{this.Je(s)&&t(s)})}Ze(e){const t=e.targetId,r=e.ge.count,s=this.Xe(t);if(s){const i=s.target;if(Oa(i))if(r===0){const o=new z(i.path);this.ze(t,o,Fe.newNoDocument(o,Y.min()))}else he(r===1);else{const o=this.et(t);if(o!==r){const c=this.tt(e),u=c?this.nt(c,e,o):1;if(u!==0){this.Ye(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,d)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=Jt(r).toUint8Array()}catch(u){if(u instanceof Kh)return Hn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new wo(o,s,i)}catch(u){return Hn(u instanceof Ar?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ee===0?null:c}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.ke.it(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.ze(t,i,null),s++)}),s}ot(e){const t=new Map;this.qe.forEach((i,o)=>{const c=this.Xe(o);if(c){if(i.current&&Oa(c.target)){const u=new z(c.target.path);this._t(u).has(o)||this.ut(o,u)||this.ze(o,u,Fe.newNoDocument(u,e))}i.ve&&(t.set(o,i.Fe()),i.Me())}});let r=se();this.Ke.forEach((i,o)=>{let c=!0;o.forEachWhile(u=>{const d=this.Xe(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new Ti(e,t,this.Ue,this.Qe,r);return this.Qe=Rt(),this.$e=As(),this.Ke=As(),this.Ue=new xe(ie),s}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,t)?s.xe(t,1):s.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new ou,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new Ne(ie),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Ne(ie),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||$("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new ou),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function As(){return new xe(z.comparator)}function lu(){return new xe(z.comparator)}const ox={asc:"ASCENDING",desc:"DESCENDING"},lx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cx={and:"AND",or:"OR"};class ux{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Fa(n,e){return n.useProto3Json||gi(e)?e:{value:e}}function ei(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function hx(n,e){return ei(n,e.toTimestamp())}function ft(n){return he(!!n),Y.fromTimestamp(function(t){const r=Qt(t);return new Re(r.seconds,r.nanos)}(n))}function Io(n,e){return Ba(n,e).canonicalString()}function Ba(n,e){const t=function(s){return new ge(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function vd(n){const e=ge.fromString(n);return he(Id(e)),e}function Ha(n,e){return Io(n.databaseId,e.path)}function ya(n,e){const t=vd(e);if(t.get(1)!==n.databaseId.projectId)throw new q(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new q(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new z(Td(t))}function Ed(n,e){return Io(n.databaseId,e)}function dx(n){const e=vd(n);return e.length===4?ge.emptyPath():Td(e)}function Ka(n){return new ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Td(n){return he(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function cu(n,e,t){return{name:Ha(n,e),fields:t.value.mapValue.fields}}function fx(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(he(m===void 0||typeof m=="string"),De.fromBase64String(m||"")):(he(m===void 0||m instanceof Buffer||m instanceof Uint8Array),De.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(d){const m=d.code===void 0?U.UNKNOWN:gd(d.code);return new q(m,d.message||"")}(o);t=new yd(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ya(n,r.document.name),i=ft(r.document.updateTime),o=r.document.createTime?ft(r.document.createTime):Y.min(),c=new Qe({mapValue:{fields:r.document.fields}}),u=Fe.newFoundDocument(s,i,o,c),d=r.targetIds||[],m=r.removedTargetIds||[];t=new Vs(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ya(n,r.document),i=r.readTime?ft(r.readTime):Y.min(),o=Fe.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Vs([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ya(n,r.document),i=r.removedTargetIds||[];t=new Vs([],i,s,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new nx(s,i),c=r.targetId;t=new _d(c,o)}}return t}function mx(n,e){let t;if(e instanceof Gr)t={update:cu(n,e.key,e.value)};else if(e instanceof To)t={delete:Ha(n,e.key)};else if(e instanceof rn)t={update:cu(n,e.key,e.data),updateMask:bx(e.fieldMask)};else{if(!(e instanceof Zy))return J();t={verify:Ha(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Xs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Br)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Hr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Zs)return{fieldPath:o.field.canonicalString(),increment:c.Ie};throw J()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:hx(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:J()}(n,e.precondition)),t}function px(n,e){return n&&n.length>0?(he(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?ft(s.updateTime):ft(i);return o.isEqual(Y.min())&&(o=ft(i)),new Jy(o,s.transformResults||[])}(t,e))):[]}function gx(n,e){return{documents:[Ed(n,e.path)]}}function _x(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Ed(n,s);const i=function(d){if(d.length!==0)return wd(it.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(m=>function(_){return{field:Ln(_.field),direction:vx(_.dir)}}(m))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Fa(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ht:t,parent:s}}function yx(n){let e=dx(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){he(r===1);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(g){const _=bd(g);return _ instanceof it&&Zh(_)?_.getFilters():[_]}(t.where));let o=[];t.orderBy&&(o=function(g){return g.map(_=>function(T){return new Fr(Mn(T.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(g){let _;return _=typeof g=="object"?g.value:g,gi(_)?null:_}(t.limit));let u=null;t.startAt&&(u=function(g){const _=!!g.before,b=g.values||[];return new Ys(b,_)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const _=!g.before,b=g.values||[];return new Ys(b,_)}(t.endAt)),Oy(e,s,o,i,c,"F",u,d)}function xx(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function bd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Mn(t.unaryFilter.field);return ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Mn(t.unaryFilter.field);return ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Mn(t.unaryFilter.field);return ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Mn(t.unaryFilter.field);return ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(n):n.fieldFilter!==void 0?function(t){return ke.create(Mn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return it.create(t.compositeFilter.filters.map(r=>bd(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J()}}(t.compositeFilter.op))}(n):J()}function vx(n){return ox[n]}function Ex(n){return lx[n]}function Tx(n){return cx[n]}function Ln(n){return{fieldPath:n.canonicalString()}}function Mn(n){return Pe.fromServerFormat(n.fieldPath)}function wd(n){return n instanceof ke?function(t){if(t.op==="=="){if(Jc(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NAN"}};if(Qc(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Jc(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NAN"}};if(Qc(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ln(t.field),op:Ex(t.op),value:t.value}}}(n):n instanceof it?function(t){const r=t.getFilters().map(s=>wd(s));return r.length===1?r[0]:{compositeFilter:{op:Tx(t.op),filters:r}}}(n):J()}function bx(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Id(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,r,s,i=Y.min(),o=Y.min(),c=De.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Bt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e){this.Tt=e}}function Ix(n){const e=yx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ua(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(){this.Tn=new kx}addToCollectionParentIndex(e,t){return this.Tn.add(t),F.resolve()}getCollectionParents(e,t){return F.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return F.resolve()}deleteFieldIndex(e,t){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,t){return F.resolve()}getDocumentsMatchingTarget(e,t){return F.resolve(null)}getIndexType(e,t){return F.resolve(0)}getFieldIndexes(e,t){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,t){return F.resolve(Gt.min())}getMinOffsetFromCollectionGroup(e,t){return F.resolve(Gt.min())}updateCollectionGroup(e,t,r){return F.resolve()}updateIndexEntries(e,t){return F.resolve()}}class kx{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ne(ge.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ne(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ad=41943040;class Ge{static withCacheSize(e){return new Ge(e,Ge.DEFAULT_COLLECTION_PERCENTILE,Ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge.DEFAULT_COLLECTION_PERCENTILE=10,Ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ge.DEFAULT=new Ge(Ad,Ge.DEFAULT_COLLECTION_PERCENTILE,Ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ge.DISABLED=new Ge(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Wn(0)}static Un(){return new Wn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu="LruGarbageCollector",Rx=1048576;function du([n,e],[t,r]){const s=ie(n,t);return s===0?ie(e,r):s}class Nx{constructor(e){this.Hn=e,this.buffer=new Ne(du),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();du(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Sx{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){$(hu,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){tr(t)?$(hu,"Ignoring IndexedDB error during garbage collection: ",t):await er(t)}await this.er(3e5)})}}class Cx{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return F.resolve(pi.ae);const r=new Nx(t);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(uu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),uu):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,s,i,o,c,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,o=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,c=Date.now(),this.removeTargets(e,r,t))).next(g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(d=Date.now(),Pn()<=re.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-m}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${g} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function jx(n,e){return new Cx(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(){this.changes=new wn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Fe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?F.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Cr(r.mutation,s,Ze.empty(),Re.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,t,r=se()){const s=fn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Ir();return i.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=fn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,se()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,s){let i=Rt();const o=Sr(),c=function(){return Sr()}();return t.forEach((u,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof rn)?i=i.insert(d.key,d):m!==void 0?(o.set(d.key,m.mutation.getFieldMask()),Cr(m.mutation,d,m.mutation.getFieldMask(),Re.now())):o.set(d.key,Ze.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,m)=>o.set(d,m)),t.forEach((d,m)=>{var g;return c.set(d,new Dx(m,(g=o.get(d))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Sr();let s=new xe((o,c)=>o-c),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let m=r.get(u)||Ze.empty();m=c.applyToLocalView(d,m),r.set(u,m);const g=(s.get(c.batchId)||se()).add(u);s=s.insert(c.batchId,g)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,m=u.value,g=ld();m.forEach(_=>{if(!i.has(_)){const b=md(t.get(_),r.get(_));b!==null&&g.set(_,b),i=i.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,g))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):rd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):F.resolve(fn());let c=Mr,u=i;return o.next(d=>F.forEach(d,(m,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(m)?F.resolve():this.remoteDocumentCache.getEntry(e,m).next(_=>{u=u.insert(m,_)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,se())).next(m=>({batchId:c,changes:od(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next(r=>{let s=Ir();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Ir();return this.indexManager.getCollectionParents(e,i).next(c=>F.forEach(c,u=>{const d=function(g,_){return new nr(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(m=>{m.forEach((g,_)=>{o=o.insert(g,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((u,d)=>{const m=d.getKey();o.get(m)===null&&(o=o.insert(m,Fe.newInvalidDocument(m)))});let c=Ir();return o.forEach((u,d)=>{const m=i.get(u);m!==void 0&&Cr(m.mutation,d,Ze.empty(),Re.now()),xi(t,d)&&(c=c.insert(u,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return F.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:ft(s.createTime)}}(t)),F.resolve()}getNamedQuery(e,t){return F.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(s){return{name:s.name,query:Ix(s.bundledQuery),readTime:ft(s.readTime)}}(t)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(){this.overlays=new xe(z.comparator),this.Rr=new Map}getOverlay(e,t){return F.resolve(this.overlays.get(t))}getOverlays(e,t){const r=fn();return F.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Et(e,t,i)}),F.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),F.resolve()}getOverlaysForCollection(e,t,r){const s=fn(),i=t.length+1,o=new z(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return F.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new xe((d,m)=>d-m);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=i.get(d.largestBatchId);m===null&&(m=fn(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=fn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=s)););return F.resolve(c)}Et(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new tx(t,r));let i=this.Rr.get(t);i===void 0&&(i=se(),this.Rr.set(t,i)),this.Rr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(){this.sessionToken=De.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.Vr=new Ne(Se.mr),this.gr=new Ne(Se.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new Se(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new Se(e,t))}br(e,t){e.forEach(r=>this.removeReference(r,t))}Sr(e){const t=new z(new ge([])),r=new Se(t,e),s=new Se(t,e+1),i=[];return this.gr.forEachInRange([r,s],o=>{this.wr(o),i.push(o.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new z(new ge([])),r=new Se(t,e),s=new Se(t,e+1);let i=se();return this.gr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Se(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Se{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return z.comparator(e.key,t.key)||ie(e.Cr,t.Cr)}static pr(e,t){return ie(e.Cr,t.Cr)||z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Ne(Se.mr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ex(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.Mr=this.Mr.add(new Se(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,t){return F.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Nr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?po:this.Fr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Se(t,0),s=new Se(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],o=>{const c=this.Or(o.Cr);i.push(c)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ne(ie);return t.forEach(s=>{const i=new Se(s,0),o=new Se(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,o],c=>{r=r.add(c.Cr)})}),F.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;z.isDocumentKey(i)||(i=i.child(""));const o=new Se(new z(i),0);let c=new Ne(ie);return this.Mr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.Cr)),!0)},o),F.resolve(this.Br(c))}Br(e){const t=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){he(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return F.forEach(t.mutations,s=>{const i=new Se(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new Se(t,0),s=this.Mr.firstAfterOrEqual(r);return F.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e){this.kr=e,this.docs=function(){return new xe(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return F.resolve(r?r.document.mutableCopy():Fe.newInvalidDocument(t))}getEntries(e,t){let r=Rt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Fe.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Rt();const o=t.path,c=new z(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||py(my(m),r)<=0||(s.has(m.key)||xi(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,t,r,s){J()}qr(e,t){return F.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Bx(this)}getSize(e){return F.resolve(this.size)}}class Bx extends Px{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),F.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e){this.persistence=e,this.Qr=new wn(t=>yo(t),xo),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Ao,this.targetCount=0,this.Ur=Wn.Kn()}forEachTarget(e,t){return this.Qr.forEach((r,s)=>t(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),F.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new Wn(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,F.resolve()}updateTargetData(e,t){return this.zn(t),F.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.Sr(t.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Qr.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Qr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return F.resolve(r)}addMatchingKeys(e,t,r){return this.Kr.yr(t,r),F.resolve()}removeMatchingKeys(e,t,r){this.Kr.br(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Kr.Sr(t),F.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Kr.vr(t);return F.resolve(r)}containsKey(e,t){return F.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new pi(0),this.zr=!1,this.zr=!0,this.jr=new Vx,this.referenceDelegate=e(this),this.Hr=new Hx(this),this.indexManager=new Ax,this.remoteDocumentCache=function(s){return new Fx(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new wx(t),this.Yr=new Mx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ox,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new Ux(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){$("MemoryPersistence","Starting transaction:",e);const s=new Kx(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,t){return F.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class Kx extends _y{constructor(e){super(),this.currentSequenceNumber=e}}class ko{constructor(e){this.persistence=e,this.ti=new Ao,this.ni=null}static ri(e){return new ko(e)}get ii(){if(this.ni)return this.ni;throw J()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),F.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),F.resolve()}removeTarget(e,t){this.ti.Sr(t.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.ii,r=>{const s=z.fromPath(r);return this.si(e,s).next(i=>{i||t.removeEntry(s,Y.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return F.or([()=>F.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class ti{constructor(e,t){this.persistence=e,this.oi=new wn(r=>vy(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=jx(this,t)}static ri(e,t){return new ti(e,t)}Zr(){}Xr(e){return F.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return F.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?F.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,o=>this.ar(e,o,t).next(c=>{c||(r++,i.removeEntry(o,Y.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),F.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),F.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ls(e.data.value)),t}ar(e,t,r){return F.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.oi.get(t);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=s}static Yi(e,t){let r=se(),s=se();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ro(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Ug()?8:yy(Be())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.rs(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ss(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new $x;return this._s(e,t,o).next(c=>{if(i.result=c,this.Xi)return this.us(e,t,o,c.size)})}).next(()=>i.result)}us(e,t,r,s){return r.documentReadCount<this.es?(Pn()<=re.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Dn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),F.resolve()):(Pn()<=re.DEBUG&&$("QueryEngine","Query:",Dn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Pn()<=re.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Dn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dt(t))):F.resolve())}rs(e,t){if(eu(t))return F.resolve(null);let r=dt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ua(t,null,"F"),r=dt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=se(...i);return this.ns.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.cs(t,c);return this.ls(t,d,o,u.readTime)?this.rs(e,Ua(t,null,"F")):this.hs(e,d,t,u)}))})))}ss(e,t,r,s){return eu(t)||s.isEqual(Y.min())?F.resolve(null):this.ns.getDocuments(e,r).next(i=>{const o=this.cs(t,i);return this.ls(t,o,r,s)?F.resolve(null):(Pn()<=re.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Dn(t)),this.hs(e,o,t,fy(s,Mr)).next(c=>c))})}cs(e,t){let r=new Ne(id(e));return t.forEach((s,i)=>{xi(e,i)&&(r=r.add(i))}),r}ls(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,t,r){return Pn()<=re.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Dn(t)),this.ns.getDocumentsMatchingQuery(e,t,Gt.min(),r)}hs(e,t,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="LocalStore",Wx=3e8;class zx{constructor(e,t,r,s){this.persistence=e,this.Ps=t,this.serializer=s,this.Ts=new xe(ie),this.Is=new wn(i=>yo(i),xo),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Lx(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function Gx(n,e,t,r){return new zx(n,e,t,r)}async function Rd(n,e){const t=X(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let u=se();for(const d of s){o.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of i){c.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next(d=>({Rs:d,removedBatchIds:o,addedBatchIds:c}))})})}function Qx(n,e){const t=X(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.ds.newChangeBuffer({trackRemovals:!0});return function(c,u,d,m){const g=d.batch,_=g.keys();let b=F.resolve();return _.forEach(T=>{b=b.next(()=>m.getEntry(u,T)).next(P=>{const N=d.docVersions.get(T);he(N!==null),P.version.compareTo(N)<0&&(g.applyToRemoteDocument(P,d),P.isValidDocument()&&(P.setReadTime(d.commitVersion),m.addEntry(P)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(u,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=se();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Nd(n){const e=X(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function Jx(n,e){const t=X(n),r=e.snapshotVersion;let s=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.ds.newChangeBuffer({trackRemovals:!0});s=t.Ts;const c=[];e.targetChanges.forEach((m,g)=>{const _=s.get(g);if(!_)return;c.push(t.Hr.removeMatchingKeys(i,m.removedDocuments,g).next(()=>t.Hr.addMatchingKeys(i,m.addedDocuments,g)));let b=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?b=b.withResumeToken(De.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):m.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(m.resumeToken,r)),s=s.insert(g,b),function(P,N,D){return P.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=Wx?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(_,b,m)&&c.push(t.Hr.updateTargetData(i,b))});let u=Rt(),d=se();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))}),c.push(Yx(i,o,e.documentUpdates).next(m=>{u=m.Vs,d=m.fs})),!r.isEqual(Y.min())){const m=t.Hr.getLastRemoteSnapshotVersion(i).next(g=>t.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(m)}return F.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.Ts=s,i))}function Yx(n,e,t){let r=se(),s=se();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=Rt();return t.forEach((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):$(No,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{Vs:o,fs:s}})}function Xx(n,e){const t=X(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=po),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Zx(n,e){const t=X(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Hr.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):t.Hr.allocateTargetId(r).next(o=>(s=new Bt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function $a(n,e,t){const r=X(n),s=r.Ts.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!tr(o))throw o;$(No,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function fu(n,e,t){const r=X(n);let s=Y.min(),i=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,m){const g=X(u),_=g.Is.get(m);return _!==void 0?F.resolve(g.Ts.get(_)):g.Hr.getTargetData(d,m)}(r,o,dt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,c.targetId).next(u=>{i=u})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,t?s:Y.min(),t?i:se())).next(c=>(ev(r,Uy(e),c),{documents:c,gs:i})))}function ev(n,e,t){let r=n.Es.get(e)||Y.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Es.set(e,r)}class mu{constructor(){this.activeTargetIds=qy()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tv{constructor(){this.ho=new mu,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new mu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu="ConnectivityMonitor";class gu{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){$(pu,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){$(pu,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks=null;function qa(){return ks===null?ks=function(){return 268435456+Math.round(2147483648*Math.random())}():ks++,"0x"+ks.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="RestConnection",rv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sv{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Qs?`project_id=${r}`:`project_id=${r}&database_id=${s}`}bo(e,t,r,s,i){const o=qa(),c=this.So(e,t.toUriEncodedString());$(xa,`Sending RPC '${e}' ${o}:`,c,r);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(u,s,i),this.vo(e,c,u,r).then(d=>($(xa,`Received RPC '${e}' ${o}: `,d),d),d=>{throw Hn(xa,`RPC '${e}' ${o} failed with error: `,d,"url: ",c,"request:",r),d})}Co(e,t,r,s,i,o){return this.bo(e,t,r,s,i)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}So(e,t){const r=rv[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="WebChannelConnection";class av extends sv{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,s){const i=qa();return new Promise((o,c)=>{const u=new Dh;u.setWithCredentials(!0),u.listenOnce(Lh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ds.NO_ERROR:const m=u.getResponseJson();$(Ve,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(m)),o(m);break;case Ds.TIMEOUT:$(Ve,`RPC '${e}' ${i} timed out`),c(new q(U.DEADLINE_EXCEEDED,"Request time out"));break;case Ds.HTTP_ERROR:const g=u.getStatus();if($(Ve,`RPC '${e}' ${i} failed with status:`,g,"response text:",u.getResponseText()),g>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const b=_==null?void 0:_.error;if(b&&b.status&&b.message){const T=function(N){const D=N.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(D)>=0?D:U.UNKNOWN}(b.status);c(new q(T,b.message))}else c(new q(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new q(U.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{$(Ve,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);$(Ve,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",d,r,15)})}Wo(e,t,r){const s=qa(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Vh(),c=Oh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const m=i.join("");$(Ve,`Creating RPC '${e}' stream ${s}: ${m}`,u);const g=o.createWebChannel(m,u);let _=!1,b=!1;const T=new iv({Fo:N=>{b?$(Ve,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(_||($(Ve,`Opening RPC '${e}' stream ${s} transport.`),g.open(),_=!0),$(Ve,`RPC '${e}' stream ${s} sending:`,N),g.send(N))},Mo:()=>g.close()}),P=(N,D,C)=>{N.listen(D,L=>{try{C(L)}catch(O){setTimeout(()=>{throw O},0)}})};return P(g,wr.EventType.OPEN,()=>{b||($(Ve,`RPC '${e}' stream ${s} transport opened.`),T.Qo())}),P(g,wr.EventType.CLOSE,()=>{b||(b=!0,$(Ve,`RPC '${e}' stream ${s} transport closed`),T.Ko())}),P(g,wr.EventType.ERROR,N=>{b||(b=!0,Hn(Ve,`RPC '${e}' stream ${s} transport errored:`,N),T.Ko(new q(U.UNAVAILABLE,"The operation could not be completed")))}),P(g,wr.EventType.MESSAGE,N=>{var D;if(!b){const C=N.data[0];he(!!C);const L=C,O=(L==null?void 0:L.error)||((D=L[0])===null||D===void 0?void 0:D.error);if(O){$(Ve,`RPC '${e}' stream ${s} received error:`,O);const V=O.status;let H=function(y){const k=Ae[y];if(k!==void 0)return gd(k)}(V),I=O.message;H===void 0&&(H=U.INTERNAL,I="Unknown error status: "+V+" with message "+O.message),b=!0,T.Ko(new q(H,I)),g.close()}else $(Ve,`RPC '${e}' stream ${s} received:`,C),T.Uo(C)}}),P(c,Mh.STAT_EVENT,N=>{N.stat===Pa.PROXY?$(Ve,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Pa.NOPROXY&&$(Ve,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{T.$o()},0),T}}function va(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(n){return new ux(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,t-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u="PersistentStream";class Cd{constructor(e,t,r,s,i,o,c,u){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Sd(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===U.RESOURCE_EXHAUSTED?(kt(t.toString()),kt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===t&&this.V_(r,s)},r=>{e(()=>{const s=new q(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return $(_u,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():($(_u,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ov extends Cd{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=fx(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?ft(o.readTime):Y.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=Ka(this.serializer),t.addTarget=function(i,o){let c;const u=o.target;if(c=Oa(u)?{documents:gx(i,u)}:{query:_x(i,u).ht},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=xd(i,o.resumeToken);const d=Fa(i,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(Y.min())>0){c.readTime=ei(i,o.snapshotVersion.toTimestamp());const d=Fa(i,o.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=xx(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=Ka(this.serializer),t.removeTarget=e,this.I_(t)}}class lv extends Cd{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return he(!!e.streamToken),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){he(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=px(e.writeResults,e.commitTime),r=ft(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=Ka(this.serializer),this.I_(e)}S_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>mx(this.serializer,r))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{}class uv extends cv{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new q(U.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.bo(e,Ba(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(U.UNKNOWN,i.toString())})}Co(e,t,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Co(e,Ba(t,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(U.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class hv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(kt(t),this.N_=!1):$("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn="RemoteStore";class dv{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(o=>{r.enqueueAndForget(async()=>{In(this)&&($(yn,"Restarting streams for network reachability change."),await async function(u){const d=X(u);d.W_.add(4),await Jr(d),d.j_.set("Unknown"),d.W_.delete(4),await wi(d)}(this))})}),this.j_=new hv(r,s)}}async function wi(n){if(In(n))for(const e of n.G_)await e(!0)}async function Jr(n){for(const e of n.G_)await e(!1)}function jd(n,e){const t=X(n);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),Po(t)?jo(t):rr(t).c_()&&Co(t,e))}function So(n,e){const t=X(n),r=rr(t);t.U_.delete(e),r.c_()&&Pd(t,e),t.U_.size===0&&(r.c_()?r.P_():In(t)&&t.j_.set("Unknown"))}function Co(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}rr(n).y_(e)}function Pd(n,e){n.H_.Ne(e),rr(n).w_(e)}function jo(n){n.H_=new ax({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.U_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),rr(n).start(),n.j_.B_()}function Po(n){return In(n)&&!rr(n).u_()&&n.U_.size>0}function In(n){return X(n).W_.size===0}function Dd(n){n.H_=void 0}async function fv(n){n.j_.set("Online")}async function mv(n){n.U_.forEach((e,t)=>{Co(n,e)})}async function pv(n,e){Dd(n),Po(n)?(n.j_.q_(e),jo(n)):n.j_.set("Unknown")}async function gv(n,e,t){if(n.j_.set("Online"),e instanceof yd&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.U_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.U_.delete(c),s.H_.removeTarget(c))}(n,e)}catch(r){$(yn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ni(n,r)}else if(e instanceof Vs?n.H_.We(e):e instanceof _d?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Y.min()))try{const r=await Nd(n.localStore);t.compareTo(r)>=0&&await function(i,o){const c=i.H_.ot(o);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.U_.get(d);m&&i.U_.set(d,m.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,d)=>{const m=i.U_.get(u);if(!m)return;i.U_.set(u,m.withResumeToken(De.EMPTY_BYTE_STRING,m.snapshotVersion)),Pd(i,u);const g=new Bt(m.target,u,d,m.sequenceNumber);Co(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){$(yn,"Failed to raise snapshot:",r),await ni(n,r)}}async function ni(n,e,t){if(!tr(e))throw e;n.W_.add(1),await Jr(n),n.j_.set("Offline"),t||(t=()=>Nd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{$(yn,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await wi(n)})}function Ld(n,e){return e().catch(t=>ni(n,t,e))}async function Ii(n){const e=X(n),t=Xt(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:po;for(;_v(e);)try{const s=await Xx(e.localStore,r);if(s===null){e.K_.length===0&&t.P_();break}r=s.batchId,yv(e,s)}catch(s){await ni(e,s)}Md(e)&&Od(e)}function _v(n){return In(n)&&n.K_.length<10}function yv(n,e){n.K_.push(e);const t=Xt(n);t.c_()&&t.b_&&t.S_(e.mutations)}function Md(n){return In(n)&&!Xt(n).u_()&&n.K_.length>0}function Od(n){Xt(n).start()}async function xv(n){Xt(n).C_()}async function vv(n){const e=Xt(n);for(const t of n.K_)e.S_(t.mutations)}async function Ev(n,e,t){const r=n.K_.shift(),s=bo.from(r,e,t);await Ld(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ii(n)}async function Tv(n,e){e&&Xt(n).b_&&await async function(r,s){if(function(o){return rx(o)&&o!==U.ABORTED}(s.code)){const i=r.K_.shift();Xt(r).h_(),await Ld(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ii(r)}}(n,e),Md(n)&&Od(n)}async function yu(n,e){const t=X(n);t.asyncQueue.verifyOperationInProgress(),$(yn,"RemoteStore received new credentials");const r=In(t);t.W_.add(3),await Jr(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await wi(t)}async function bv(n,e){const t=X(n);e?(t.W_.delete(2),await wi(t)):e||(t.W_.add(2),await Jr(t),t.j_.set("Unknown"))}function rr(n){return n.J_||(n.J_=function(t,r,s){const i=X(t);return i.M_(),new ov(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{xo:fv.bind(null,n),No:mv.bind(null,n),Lo:pv.bind(null,n),p_:gv.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),Po(n)?jo(n):n.j_.set("Unknown")):(await n.J_.stop(),Dd(n))})),n.J_}function Xt(n){return n.Y_||(n.Y_=function(t,r,s){const i=X(t);return i.M_(),new lv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:xv.bind(null,n),Lo:Tv.bind(null,n),D_:vv.bind(null,n),v_:Ev.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await Ii(n)):(await n.Y_.stop(),n.K_.length>0&&($(yn,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new Do(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lo(n,e){if(kt("AsyncQueue",`${e}: ${n}`),tr(n))return new q(U.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{static emptySet(e){return new Vn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||z.comparator(t.key,r.key):(t,r)=>z.comparator(t.key,r.key),this.keyedMap=Ir(),this.sortedSet=new xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Vn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(){this.Z_=new xe(z.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):J():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class zn{constructor(e,t,r,s,i,o,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new zn(e,t,Vn.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class Iv{constructor(){this.queries=vu(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const s=X(t),i=s.queries;s.queries=vu(),i.forEach((o,c)=>{for(const u of c.ta)u.onError(r)})})(this,new q(U.ABORTED,"Firestore shutting down"))}}function vu(){return new wn(n=>sd(n),yi)}async function Vd(n,e){const t=X(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new wv,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await t.onListen(s,!0);break;case 1:i.ea=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=Lo(o,`Initialization of query '${Dn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.ta.push(e),e.sa(t.onlineState),i.ea&&e.oa(i.ea)&&Mo(t)}async function Ud(n,e){const t=X(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.ta.indexOf(e);o>=0&&(i.ta.splice(o,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Av(n,e){const t=X(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.ta)c.oa(s)&&(r=!0);o.ea=s}}r&&Mo(t)}function kv(n,e,t){const r=X(n),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(t);r.queries.delete(e)}function Mo(n){n.ia.forEach(e=>{e.next()})}var Wa,Eu;(Eu=Wa||(Wa={}))._a="default",Eu.Cache="cache";class Fd{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new zn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=zn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Wa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e){this.key=e}}class Hd{constructor(e){this.key=e}}class Rv{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=se(),this.mutatedKeys=se(),this.ya=id(e),this.wa=new Vn(this.ya)}get ba(){return this.fa}Sa(e,t){const r=t?t.Da:new xu,s=t?t.wa:this.wa;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,g)=>{const _=s.get(m),b=xi(this.query,g)?g:null,T=!!_&&this.mutatedKeys.has(_.key),P=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let N=!1;_&&b?_.data.isEqual(b.data)?T!==P&&(r.track({type:3,doc:b}),N=!0):this.va(_,b)||(r.track({type:2,doc:b}),N=!0,(u&&this.ya(b,u)>0||d&&this.ya(b,d)<0)&&(c=!0)):!_&&b?(r.track({type:0,doc:b}),N=!0):_&&!b&&(r.track({type:1,doc:_}),N=!0,(u||d)&&(c=!0)),N&&(b?(o=o.add(b),i=P?i.add(m):i.delete(m)):(o=o.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{wa:o,Da:r,ls:c,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((m,g)=>function(b,T){const P=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return P(b)-P(T)}(m.type,g.type)||this.ya(m.doc,g.doc)),this.Ca(r),s=s!=null&&s;const c=t&&!s?this.Fa():[],u=this.pa.size===0&&this.current&&!s?1:0,d=u!==this.ga;return this.ga=u,o.length!==0||d?{snapshot:new zn(this.query,e.wa,i,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new xu,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=se(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new Hd(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new Bd(r))}),t}Oa(e){this.fa=e.gs,this.pa=se();const t=this.Sa(e.documents);return this.applyChanges(t,!0)}Na(){return zn.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Oo="SyncEngine";class Nv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Sv{constructor(e){this.key=e,this.Ba=!1}}class Cv{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new wn(c=>sd(c),yi),this.qa=new Map,this.Qa=new Set,this.$a=new xe(z.comparator),this.Ka=new Map,this.Ua=new Ao,this.Wa={},this.Ga=new Map,this.za=Wn.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function jv(n,e,t=!0){const r=Gd(n);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await Kd(r,e,t,!0),s}async function Pv(n,e){const t=Gd(n);await Kd(t,e,!0,!1)}async function Kd(n,e,t,r){const s=await Zx(n.localStore,dt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Dv(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&jd(n.remoteStore,s),c}async function Dv(n,e,t,r,s){n.Ha=(g,_,b)=>async function(P,N,D,C){let L=N.view.Sa(D);L.ls&&(L=await fu(P.localStore,N.query,!1).then(({documents:I})=>N.view.Sa(I,L)));const O=C&&C.targetChanges.get(N.targetId),V=C&&C.targetMismatches.get(N.targetId)!=null,H=N.view.applyChanges(L,P.isPrimaryClient,O,V);return bu(P,N.targetId,H.Ma),H.snapshot}(n,g,_,b);const i=await fu(n.localStore,e,!0),o=new Rv(e,i.gs),c=o.Sa(i.documents),u=Qr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=o.applyChanges(c,n.isPrimaryClient,u);bu(n,t,d.Ma);const m=new Nv(e,t,o);return n.ka.set(e,m),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),d.snapshot}async function Lv(n,e,t){const r=X(n),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(o=>!yi(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await $a(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&So(r.remoteStore,s.targetId),za(r,s.targetId)}).catch(er)):(za(r,s.targetId),await $a(r.localStore,s.targetId,!0))}async function Mv(n,e){const t=X(n),r=t.ka.get(e),s=t.qa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),So(t.remoteStore,r.targetId))}async function Ov(n,e,t){const r=$v(n);try{const s=await function(o,c){const u=X(o),d=Re.now(),m=c.reduce((b,T)=>b.add(T.key),se());let g,_;return u.persistence.runTransaction("Locally write mutations","readwrite",b=>{let T=Rt(),P=se();return u.ds.getEntries(b,m).next(N=>{T=N,T.forEach((D,C)=>{C.isValidDocument()||(P=P.add(D))})}).next(()=>u.localDocuments.getOverlayedDocuments(b,T)).next(N=>{g=N;const D=[];for(const C of c){const L=Xy(C,g.get(C.key).overlayedDocument);L!=null&&D.push(new rn(C.key,L,Jh(L.value.mapValue),tt.exists(!0)))}return u.mutationQueue.addMutationBatch(b,d,D,c)}).next(N=>{_=N;const D=N.applyToLocalDocumentSet(g,P);return u.documentOverlayCache.saveOverlays(b,N.batchId,D)})}).then(()=>({batchId:_.batchId,changes:od(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,u){let d=o.Wa[o.currentUser.toKey()];d||(d=new xe(ie)),d=d.insert(c,u),o.Wa[o.currentUser.toKey()]=d}(r,s.batchId,t),await Yr(r,s.changes),await Ii(r.remoteStore)}catch(s){const i=Lo(s,"Failed to persist write");t.reject(i)}}async function $d(n,e){const t=X(n);try{const r=await Jx(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Ka.get(i);o&&(he(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ba=!0:s.modifiedDocuments.size>0?he(o.Ba):s.removedDocuments.size>0&&(he(o.Ba),o.Ba=!1))}),await Yr(t,r,e)}catch(r){await er(r)}}function Tu(n,e,t){const r=X(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ka.forEach((i,o)=>{const c=o.view.sa(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const u=X(o);u.onlineState=c;let d=!1;u.queries.forEach((m,g)=>{for(const _ of g.ta)_.sa(c)&&(d=!0)}),d&&Mo(u)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Vv(n,e,t){const r=X(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ka.get(e),i=s&&s.key;if(i){let o=new xe(z.comparator);o=o.insert(i,Fe.newNoDocument(i,Y.min()));const c=se().add(i),u=new Ti(Y.min(),new Map,new xe(ie),o,c);await $d(r,u),r.$a=r.$a.remove(i),r.Ka.delete(e),Vo(r)}else await $a(r.localStore,e,!1).then(()=>za(r,e,t)).catch(er)}async function Uv(n,e){const t=X(n),r=e.batch.batchId;try{const s=await Qx(t.localStore,e);Wd(t,r,null),qd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Yr(t,s)}catch(s){await er(s)}}async function Fv(n,e,t){const r=X(n);try{const s=await function(o,c){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return u.mutationQueue.lookupMutationBatch(d,c).next(g=>(he(g!==null),m=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>u.localDocuments.getDocuments(d,m))})}(r.localStore,e);Wd(r,e,t),qd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Yr(r,s)}catch(s){await er(s)}}function qd(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function Wd(n,e,t){const r=X(n);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function za(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ua.Sr(e).forEach(r=>{n.Ua.containsKey(r)||zd(n,r)})}function zd(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(So(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ka.delete(t),Vo(n))}function bu(n,e,t){for(const r of t)r instanceof Bd?(n.Ua.addReference(r.key,e),Bv(n,r)):r instanceof Hd?($(Oo,"Document no longer in limbo: "+r.key),n.Ua.removeReference(r.key,e),n.Ua.containsKey(r.key)||zd(n,r.key)):J()}function Bv(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||($(Oo,"New document in limbo: "+t),n.Qa.add(r),Vo(n))}function Vo(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new z(ge.fromString(e)),r=n.za.next();n.Ka.set(r,new Sv(t)),n.$a=n.$a.insert(t,r),jd(n.remoteStore,new Bt(dt(vo(t.path)),r,"TargetPurposeLimboResolution",pi.ae))}}async function Yr(n,e,t){const r=X(n),s=[],i=[],o=[];r.ka.isEmpty()||(r.ka.forEach((c,u)=>{o.push(r.Ha(u,e,t).then(d=>{var m;if((d||t)&&r.isPrimaryClient){const g=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){s.push(d);const g=Ro.Yi(u.targetId,d);i.push(g)}}))}),await Promise.all(o),r.La.p_(s),await async function(u,d){const m=X(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>F.forEach(d,_=>F.forEach(_.Hi,b=>m.persistence.referenceDelegate.addReference(g,_.targetId,b)).next(()=>F.forEach(_.Ji,b=>m.persistence.referenceDelegate.removeReference(g,_.targetId,b)))))}catch(g){if(!tr(g))throw g;$(No,"Failed to update sequence numbers: "+g)}for(const g of d){const _=g.targetId;if(!g.fromCache){const b=m.Ts.get(_),T=b.snapshotVersion,P=b.withLastLimboFreeSnapshotVersion(T);m.Ts=m.Ts.insert(_,P)}}}(r.localStore,i))}async function Hv(n,e){const t=X(n);if(!t.currentUser.isEqual(e)){$(Oo,"User change. New user:",e.toKey());const r=await Rd(t.localStore,e);t.currentUser=e,function(i,o){i.Ga.forEach(c=>{c.forEach(u=>{u.reject(new q(U.CANCELLED,o))})}),i.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yr(t,r.Rs)}}function Kv(n,e){const t=X(n),r=t.Ka.get(e);if(r&&r.Ba)return se().add(r.key);{let s=se();const i=t.qa.get(e);if(!i)return s;for(const o of i){const c=t.ka.get(o);s=s.unionWith(c.view.ba)}return s}}function Gd(n){const e=X(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=$d.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Kv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Vv.bind(null,e),e.La.p_=Av.bind(null,e.eventManager),e.La.Ja=kv.bind(null,e.eventManager),e}function $v(n){const e=X(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Uv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Fv.bind(null,e),e}class ri{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bi(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return Gx(this.persistence,new qx,e.initialUser,this.serializer)}Xa(e){return new kd(ko.ri,this.serializer)}Za(e){return new tv}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ri.provider={build:()=>new ri};class qv extends ri{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){he(this.persistence.referenceDelegate instanceof ti);const r=this.persistence.referenceDelegate.garbageCollector;return new Sx(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?Ge.withCacheSize(this.cacheSizeBytes):Ge.DEFAULT;return new kd(r=>ti.ri(r,t),this.serializer)}}class Ga{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Tu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hv.bind(null,this.syncEngine),await bv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Iv}()}createDatastore(e){const t=bi(e.databaseInfo.databaseId),r=function(i){return new av(i)}(e.databaseInfo);return function(i,o,c,u){return new uv(i,o,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,c){return new dv(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Tu(this.syncEngine,t,0),function(){return gu.D()?new gu:new nv}())}createSyncEngine(e,t){return function(s,i,o,c,u,d,m){const g=new Cv(s,i,o,c,u,d);return m&&(g.ja=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=X(s);$(yn,"RemoteStore shutting down."),i.W_.add(5),await Jr(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ga.provider={build:()=>new Ga};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):kt("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="FirestoreClient";class Wv{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ue.UNAUTHENTICATED,this.clientId=Fh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{$(Zt,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(Zt,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Lo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ea(n,e){n.asyncQueue.verifyOperationInProgress(),$(Zt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Rd(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function wu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await zv(n);$(Zt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>yu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>yu(e.remoteStore,s)),n._onlineComponents=e}async function zv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$(Zt,"Using user provided OfflineComponentProvider");try{await Ea(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Hn("Error using user provided cache. Falling back to memory cache: "+t),await Ea(n,new ri)}}else $(Zt,"Using default OfflineComponentProvider"),await Ea(n,new qv(void 0));return n._offlineComponents}async function Jd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($(Zt,"Using user provided OnlineComponentProvider"),await wu(n,n._uninitializedComponentsProvider._online)):($(Zt,"Using default OnlineComponentProvider"),await wu(n,new Ga))),n._onlineComponents}function Gv(n){return Jd(n).then(e=>e.syncEngine)}async function Yd(n){const e=await Jd(n),t=e.eventManager;return t.onListen=jv.bind(null,e.syncEngine),t.onUnlisten=Lv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Pv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Mv.bind(null,e.syncEngine),t}function Qv(n,e,t={}){const r=new wt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,u,d){const m=new Qd({next:_=>{m.su(),o.enqueueAndForget(()=>Ud(i,g));const b=_.docs.has(c);!b&&_.fromCache?d.reject(new q(U.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&_.fromCache&&u&&u.source==="server"?d.reject(new q(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(_)},error:_=>d.reject(_)}),g=new Fd(vo(c.path),m,{includeMetadataChanges:!0,Ta:!0});return Vd(i,g)}(await Yd(n),n.asyncQueue,e,t,r)),r.promise}function Jv(n,e,t={}){const r=new wt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,u,d){const m=new Qd({next:_=>{m.su(),o.enqueueAndForget(()=>Ud(i,g)),_.fromCache&&u.source==="server"?d.reject(new q(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(_)},error:_=>d.reject(_)}),g=new Fd(c,m,{includeMetadataChanges:!0,Ta:!0});return Vd(i,g)}(await Yd(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(n,e,t){if(!t)throw new q(U.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Yv(n,e,t,r){if(e===!0&&r===!0)throw new q(U.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Au(n){if(!z.isDocumentKey(n))throw new q(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ku(n){if(z.isDocumentKey(n))throw new q(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ai(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":J()}function at(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new q(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ai(n);throw new q(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef="firestore.googleapis.com",Ru=!0;class Nu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ef,this.ssl=Ru}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Ru;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ad;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Rx)throw new q(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Yv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ki{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new iy;switch(r.type){case"firstParty":return new cy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Iu.get(t);r&&($("ComponentProvider","Removing Datastore"),Iu.delete(t),r.terminate())}(this),Promise.resolve()}}function Xv(n,e,t,r={}){var s;const i=(n=at(n,ki))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;i.host!==ef&&i.host!==c&&Hn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},i),{host:c,ssl:!1,emulatorOptions:r});if(!pn(u,o)&&(n._setSettings(u),r.mockUserToken)){let d,m;if(typeof r.mockUserToken=="string")d=r.mockUserToken,m=Ue.MOCK_USER;else{d=kh(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new q(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Ue(g)}n._authCredentials=new ay(new Uh(d,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new An(this.firestore,e,this._query)}}class We{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new We(this.firestore,e,this._key)}}class qt extends An{constructor(e,t,r){super(e,t,vo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new We(this.firestore,null,new z(e))}withConverter(e){return new qt(this.firestore,e,this._path)}}function Uo(n,e,...t){if(n=_e(n),Zd("collection","path",e),n instanceof ki){const r=ge.fromString(e,...t);return ku(r),new qt(n,null,r)}{if(!(n instanceof We||n instanceof qt))throw new q(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return ku(r),new qt(n.firestore,null,r)}}function en(n,e,...t){if(n=_e(n),arguments.length===1&&(e=Fh.newId()),Zd("doc","path",e),n instanceof ki){const r=ge.fromString(e,...t);return Au(r),new We(n,null,new z(r))}{if(!(n instanceof We||n instanceof qt))throw new q(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return Au(r),new We(n.firestore,n instanceof qt?n.converter:null,new z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su="AsyncQueue";class Cu{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Sd(this,"async_queue_retry"),this.bu=()=>{const r=va();r&&$(Su,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const t=va();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=va();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new wt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!tr(e))throw e;$(Su,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw kt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.Su=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const s=Do.createAndSchedule(this,e,t,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&J()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class kn extends ki{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Cu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cu(e),this._firestoreClient=void 0,await e}}}function Zv(n,e){const t=typeof n=="object"?n:fo(),r=typeof n=="string"?n:Qs,s=mi(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=wh("firestore");i&&Xv(s,...i)}return s}function Fo(n){if(n._terminated)throw new q(U.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||eE(n),n._firestoreClient}function eE(n){var e,t,r;const s=n._freezeSettings(),i=function(c,u,d,m){return new by(c,u,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Xd(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Wv(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gn(De.fromBase64String(e))}catch(t){throw new q(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Gn(De.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new q(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new q(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new q(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=/^__.*__$/;class nE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new rn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Gr(e,this.data,t,this.fieldTransforms)}}class tf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new rn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function nf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class $o{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new $o(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Ku(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return si(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(nf(this.Lu)&&tE.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class rE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||bi(e)}ju(e,t,r,s=!1){return new $o({Lu:e,methodName:t,zu:r,path:Pe.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ni(n){const e=n._freezeSettings(),t=bi(n._databaseId);return new rE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function rf(n,e,t,r,s,i={}){const o=n.ju(i.merge||i.mergeFields?2:0,e,t,s);qo("Data must be an object, but it was:",o,r);const c=sf(r,o);let u,d;if(i.merge)u=new Ze(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const m=[];for(const g of i.mergeFields){const _=Qa(e,g,t);if(!o.contains(_))throw new q(U.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);of(m,_)||m.push(_)}u=new Ze(m),d=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=o.fieldTransforms;return new nE(new Qe(c),u,d)}class Si extends Bo{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Si}}function sE(n,e,t,r){const s=n.ju(1,e,t);qo("Data must be an object, but it was:",s,r);const i=[],o=Qe.empty();nn(r,(u,d)=>{const m=Wo(e,u,t);d=_e(d);const g=s.Ku(m);if(d instanceof Si)i.push(m);else{const _=Xr(d,g);_!=null&&(i.push(m),o.set(m,_))}});const c=new Ze(i);return new tf(o,c,s.fieldTransforms)}function iE(n,e,t,r,s,i){const o=n.ju(1,e,t),c=[Qa(e,r,t)],u=[s];if(i.length%2!=0)throw new q(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)c.push(Qa(e,i[_])),u.push(i[_+1]);const d=[],m=Qe.empty();for(let _=c.length-1;_>=0;--_)if(!of(d,c[_])){const b=c[_];let T=u[_];T=_e(T);const P=o.Ku(b);if(T instanceof Si)d.push(b);else{const N=Xr(T,P);N!=null&&(d.push(b),m.set(b,N))}}const g=new Ze(d);return new tf(m,g,o.fieldTransforms)}function aE(n,e,t,r=!1){return Xr(t,n.ju(r?4:3,e))}function Xr(n,e){if(af(n=_e(n)))return qo("Unsupported field value:",e,n),sf(n,e);if(n instanceof Bo)return function(r,s){if(!nf(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let u=Xr(c,s.Uu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=_e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Wy(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Re.fromDate(r);return{timestampValue:ei(s.serializer,i)}}if(r instanceof Re){const i=new Re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ei(s.serializer,i)}}if(r instanceof Ho)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gn)return{bytesValue:xd(s.serializer,r._byteString)};if(r instanceof We){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Io(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ko)return function(o,c){return{mapValue:{fields:{[Gh]:{stringValue:Qh},[Js]:{arrayValue:{values:o.toArray().map(d=>{if(typeof d!="number")throw c.Wu("VectorValues must only contain numeric values.");return Eo(c.serializer,d)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Ai(r)}`)}(n,e)}function sf(n,e){const t={};return Hh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):nn(n,(r,s)=>{const i=Xr(s,e.qu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function af(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Re||n instanceof Ho||n instanceof Gn||n instanceof We||n instanceof Bo||n instanceof Ko)}function qo(n,e,t){if(!af(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Ai(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function Qa(n,e,t){if((e=_e(e))instanceof Ri)return e._internalPath;if(typeof e=="string")return Wo(n,e);throw si("Field path arguments must be of type string or ",n,!1,void 0,t)}const oE=new RegExp("[~\\*/\\[\\]]");function Wo(n,e,t){if(e.search(oE)>=0)throw si(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ri(...e.split("."))._internalPath}catch{throw si(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function si(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new q(U.INVALID_ARGUMENT,c+n+u)}function of(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new We(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(zo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class lE extends lf{data(){return super.data()}}function zo(n,e){return typeof e=="string"?Wo(n,e):e instanceof Ri?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new q(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Go{}class cf extends Go{}function uE(n,e,...t){let r=[];e instanceof Go&&r.push(e),r=r.concat(t),function(i){const o=i.filter(u=>u instanceof Jo).length,c=i.filter(u=>u instanceof Qo).length;if(o>1||o>0&&c>0)throw new q(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Qo extends cf{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Qo(e,t,r)}_apply(e){const t=this._parse(e);return uf(e._query,t),new An(e.firestore,e.converter,Va(e._query,t))}_parse(e){const t=Ni(e.firestore);return function(i,o,c,u,d,m,g){let _;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new q(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Pu(g,m);const T=[];for(const P of g)T.push(ju(u,i,P));_={arrayValue:{values:T}}}else _=ju(u,i,g)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Pu(g,m),_=aE(c,o,g,m==="in"||m==="not-in");return ke.create(d,m,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Jo extends Go{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Jo(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:it.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const u of c)uf(o,u),o=Va(o,u)}(e._query,t),new An(e.firestore,e.converter,Va(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Yo extends cf{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Yo(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new q(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new q(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Fr(i,o)}(e._query,this._field,this._direction);return new An(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new nr(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function hE(n,e="asc"){const t=e,r=zo("orderBy",n);return Yo._create(r,t)}function ju(n,e,t){if(typeof(t=_e(t))=="string"){if(t==="")throw new q(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rd(e)&&t.indexOf("/")!==-1)throw new q(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ge.fromString(t));if(!z.isDocumentKey(r))throw new q(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Gc(n,new z(r))}if(t instanceof We)return Gc(n,t._key);throw new q(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ai(t)}.`)}function Pu(n,e){if(!Array.isArray(n)||n.length===0)throw new q(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function uf(n,e){const t=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new q(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class dE{convertValue(e,t="none"){switch(Yt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Jt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw J()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return nn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Js].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>we(o.doubleValue));return new Ko(i)}convertGeoPoint(e){return new Ho(we(e.latitude),we(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=_i(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Or(e));default:return null}}convertTimestamp(e){const t=Qt(e);return new Re(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ge.fromString(e);he(Id(r));const s=new Vr(r.get(1),r.get(3)),i=new z(r.popFirst(5));return s.isEqual(t)||kt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class df extends lf{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Us(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(zo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Us extends df{data(e={}){return super.data(e)}}class fE{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new kr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Us(this._firestore,this._userDataWriter,r.key,r,new kr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new q(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const u=new Us(s._firestore,s._userDataWriter,c.doc.key,c.doc,new kr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new Us(s._firestore,s._userDataWriter,c.doc.key,c.doc,new kr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),m=o.indexOf(c.doc.key)),{type:mE(c.type),doc:u,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function mE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(n){n=at(n,We);const e=at(n.firestore,kn);return Qv(Fo(e),n._key).then(t=>_E(e,n,t))}class ff extends dE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new We(this.firestore,null,t)}}function mf(n){n=at(n,An);const e=at(n.firestore,kn),t=Fo(e),r=new ff(e);return cE(n._query),Jv(t,n._query).then(s=>new fE(e,r,n,s))}function Zr(n,e,t){n=at(n,We);const r=at(n.firestore,kn),s=hf(n.converter,e);return Ci(r,[rf(Ni(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,tt.none())])}function pf(n,e,t,...r){n=at(n,We);const s=at(n.firestore,kn),i=Ni(s);let o;return o=typeof(e=_e(e))=="string"||e instanceof Ri?iE(i,"updateDoc",n._key,e,t,r):sE(i,"updateDoc",n._key,e),Ci(s,[o.toMutation(n._key,tt.exists(!0))])}function pE(n){return Ci(at(n.firestore,kn),[new To(n._key,tt.none())])}function gE(n,e){const t=at(n.firestore,kn),r=en(n),s=hf(n.converter,e);return Ci(t,[rf(Ni(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,tt.exists(!1))]).then(()=>r)}function Ci(n,e){return function(r,s){const i=new wt;return r.asyncQueue.enqueueAndForget(async()=>Ov(await Gv(r),s,i)),i.promise}(Fo(n),e)}function _E(n,e,t){const r=t.docs.get(e._key),s=new ff(n);return new df(n,s,e._key,r,new kr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Zn=s})(bn),gn(new zt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new kn(new oy(r.getProvider("auth-internal")),new uy(o,r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new q(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vr(d.options.projectId,m)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),ht(Oc,Vc,e),ht(Oc,Vc,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="firebasestorage.googleapis.com",_f="storageBucket",yE=2*60*1e3,xE=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends _t{constructor(e,t,r=0){super(Ta(e),`Firebase Storage: ${t} (${Ta(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Te.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ta(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ee;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ee||(Ee={}));function Ta(n){return"storage/"+n}function Zo(){const n="An unknown error occurred, please check the error payload for server response.";return new Te(Ee.UNKNOWN,n)}function vE(n){return new Te(Ee.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function EE(n){return new Te(Ee.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function TE(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Te(Ee.UNAUTHENTICATED,n)}function bE(){return new Te(Ee.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function wE(n){return new Te(Ee.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function IE(){return new Te(Ee.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function AE(){return new Te(Ee.CANCELED,"User canceled the upload/download.")}function kE(n){return new Te(Ee.INVALID_URL,"Invalid URL '"+n+"'.")}function RE(n){return new Te(Ee.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function NE(){return new Te(Ee.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+_f+"' property when initializing the app?")}function SE(){return new Te(Ee.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function CE(){return new Te(Ee.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function jE(n){return new Te(Ee.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ja(n){return new Te(Ee.INVALID_ARGUMENT,n)}function yf(){return new Te(Ee.APP_DELETED,"The Firebase app was deleted.")}function PE(n){return new Te(Ee.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function jr(n,e){return new Te(Ee.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Er(n){throw new Te(Ee.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=et.makeFromUrl(e,t)}catch{return new et(e,"")}if(r.path==="")return r;throw RE(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function d(O){O.path_=decodeURIComponent(O.path)}const m="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",b=new RegExp(`^https?://${g}/${m}/b/${s}/o${_}`,"i"),T={bucket:1,path:3},P=t===gf?"(?:storage.googleapis.com|storage.cloud.google.com)":t,N="([^?#]*)",D=new RegExp(`^https?://${P}/${s}/${N}`,"i"),L=[{regex:c,indices:u,postModify:i},{regex:b,indices:T,postModify:d},{regex:D,indices:{bucket:1,path:2},postModify:d}];for(let O=0;O<L.length;O++){const V=L[O],H=V.regex.exec(e);if(H){const I=H[V.indices.bucket];let x=H[V.indices.path];x||(x=""),r=new et(I,x),V.postModify(r);break}}if(r==null)throw kE(e);return r}}class DE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(n,e,t){let r=1,s=null,i=null,o=!1,c=0;function u(){return c===2}let d=!1;function m(...N){d||(d=!0,e.apply(null,N))}function g(N){s=setTimeout(()=>{s=null,n(b,u())},N)}function _(){i&&clearTimeout(i)}function b(N,...D){if(d){_();return}if(N){_(),m.call(null,N,...D);return}if(u()||o){_(),m.call(null,N,...D);return}r<64&&(r*=2);let L;c===1?(c=2,L=0):L=(r+Math.random())*1e3,g(L)}let T=!1;function P(N){T||(T=!0,_(),!d&&(s!==null?(N||(c=2),clearTimeout(s),g(0)):N||(c=1)))}return g(0),i=setTimeout(()=>{o=!0,P(!0)},t),P}function ME(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(n){return n!==void 0}function VE(n){return typeof n=="object"&&!Array.isArray(n)}function el(n){return typeof n=="string"||n instanceof String}function Du(n){return tl()&&n instanceof Blob}function tl(){return typeof Blob<"u"}function Lu(n,e,t,r){if(r<e)throw Ja(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Ja(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function xf(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var mn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(mn||(mn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,t,r,s,i,o,c,u,d,m,g,_=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=g,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,T)=>{this.resolve_=b,this.reject_=T,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Rs(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const u=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===mn.NO_ERROR,u=i.getStatus();if(!c||UE(u,this.additionalRetryCodes_)&&this.retry){const m=i.getErrorCode()===mn.ABORT;r(!1,new Rs(!1,null,m));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new Rs(d,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());OE(u)?i(u):i()}catch(u){o(u)}else if(c!==null){const u=Zo();u.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,u)):o(u)}else if(s.canceled){const u=this.appDelete_?yf():AE();o(u)}else{const u=IE();o(u)}};this.canceled_?t(!1,new Rs(!1,null,!0)):this.backoffId_=LE(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ME(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Rs{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function BE(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function HE(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function KE(n,e){e&&(n["X-Firebase-GMPID"]=e)}function $E(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function qE(n,e,t,r,s,i,o=!0){const c=xf(n.urlParams),u=n.url+c,d=Object.assign({},n.headers);return KE(d,e),BE(d,t),HE(d,i),$E(d,r),new FE(u,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function zE(...n){const e=WE();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(tl())return new Blob(n);throw new Te(Ee.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function GE(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(n){if(typeof atob>"u")throw jE("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ba{constructor(e,t){this.data=e,this.contentType=t||null}}function vf(n,e){switch(n){case st.RAW:return new ba(Ef(e));case st.BASE64:case st.BASE64URL:return new ba(Tf(n,e));case st.DATA_URL:return new ba(YE(e),XE(e))}throw Zo()}function Ef(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function JE(n){let e;try{e=decodeURIComponent(n)}catch{throw jr(st.DATA_URL,"Malformed data URL.")}return Ef(e)}function Tf(n,e){switch(n){case st.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw jr(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case st.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw jr(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=QE(e)}catch(s){throw s.message.includes("polyfill")?s:jr(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class bf{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw jr(st.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=ZE(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function YE(n){const e=new bf(n);return e.base64?Tf(st.BASE64,e.rest):JE(e.rest)}function XE(n){return new bf(n).contentType}function ZE(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t){let r=0,s="";Du(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Du(this.data_)){const r=this.data_,s=GE(r,e,t);return s===null?null:new Mt(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Mt(r,!0)}}static getBlob(...e){if(tl()){const t=e.map(r=>r instanceof Mt?r.data_:r);return new Mt(zE.apply(null,t))}else{const t=e.map(o=>el(o)?vf(st.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new Mt(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(n){let e;try{e=JSON.parse(n)}catch{return null}return VE(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function tT(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function If(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(n,e){return e}class qe{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||nT}}let Ns=null;function rT(n){return!el(n)||n.length<2?n:If(n)}function Af(){if(Ns)return Ns;const n=[];n.push(new qe("bucket")),n.push(new qe("generation")),n.push(new qe("metageneration")),n.push(new qe("name","fullPath",!0));function e(i,o){return rT(o)}const t=new qe("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new qe("size");return s.xform=r,n.push(s),n.push(new qe("timeCreated")),n.push(new qe("updated")),n.push(new qe("md5Hash",null,!0)),n.push(new qe("cacheControl",null,!0)),n.push(new qe("contentDisposition",null,!0)),n.push(new qe("contentEncoding",null,!0)),n.push(new qe("contentLanguage",null,!0)),n.push(new qe("contentType",null,!0)),n.push(new qe("metadata","customMetadata",!0)),Ns=n,Ns}function sT(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new et(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function iT(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return sT(r,n),r}function kf(n,e,t){const r=wf(e);return r===null?null:iT(n,r,t)}function aT(n,e,t,r){const s=wf(e);if(s===null||!el(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(d=>{const m=n.bucket,g=n.fullPath,_="/b/"+o(m)+"/o/"+o(g),b=ji(_,t,r),T=xf({alt:"media",token:d});return b+T})[0]}function oT(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class nl{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(n){if(!n)throw Zo()}function lT(n,e){function t(r,s){const i=kf(n,s,e);return Rf(i!==null),i}return t}function cT(n,e){function t(r,s){const i=kf(n,s,e);return Rf(i!==null),aT(i,s,n.host,n._protocol)}return t}function Nf(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=bE():s=TE():t.getStatus()===402?s=EE(n.bucket):t.getStatus()===403?s=wE(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Sf(n){const e=Nf(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=vE(n.path)),i.serverResponse=s.serverResponse,i}return t}function uT(n,e,t){const r=e.fullServerUrl(),s=ji(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,c=new nl(s,i,cT(n,t),o);return c.errorHandler=Sf(e),c}function hT(n,e){const t=e.fullServerUrl(),r=ji(t,n.host,n._protocol),s="DELETE",i=n.maxOperationRetryTime;function o(u,d){}const c=new nl(r,s,o,i);return c.successCodes=[200,204],c.errorHandler=Sf(e),c}function dT(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function fT(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=dT(null,e)),r}function mT(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let L="";for(let O=0;O<2;O++)L=L+Math.random().toString().slice(2);return L}const u=c();o["Content-Type"]="multipart/related; boundary="+u;const d=fT(e,r,s),m=oT(d,t),g="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,_=`\r
--`+u+"--",b=Mt.getBlob(g,r,_);if(b===null)throw SE();const T={name:d.fullPath},P=ji(i,n.host,n._protocol),N="POST",D=n.maxUploadRetryTime,C=new nl(P,N,lT(n,t),D);return C.urlParams=T,C.headers=o,C.body=b.uploadData(),C.errorHandler=Nf(e),C}class pT{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=mn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=mn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=mn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw Er("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Er("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Er("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Er("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Er("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class gT extends pT{initXhr(){this.xhr_.responseType="text"}}function rl(){return new gT}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,t){this._service=e,t instanceof et?this._location=t:this._location=et.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new xn(e,t)}get root(){const e=new et(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return If(this._location.path)}get storage(){return this._service}get parent(){const e=eT(this._location.path);if(e===null)return null;const t=new et(this._location.bucket,e);return new xn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw PE(e)}}function Cf(n,e,t){n._throwIfRoot("uploadBytes");const r=mT(n.storage,n._location,Af(),new Mt(e,!0),t);return n.storage.makeRequestWithTokens(r,rl).then(s=>({metadata:s,ref:n}))}function _T(n,e,t=st.RAW,r){n._throwIfRoot("uploadString");const s=vf(t,e),i=Object.assign({},r);return i.contentType==null&&s.contentType!=null&&(i.contentType=s.contentType),Cf(n,s.data,i)}function yT(n){n._throwIfRoot("getDownloadURL");const e=uT(n.storage,n._location,Af());return n.storage.makeRequestWithTokens(e,rl).then(t=>{if(t===null)throw CE();return t})}function xT(n){n._throwIfRoot("deleteObject");const e=hT(n.storage,n._location);return n.storage.makeRequestWithTokens(e,rl)}function vT(n,e){const t=tT(n._location.path,e),r=new et(n._location.bucket,t);return new xn(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(n){return/^[A-Za-z]+:\/\//.test(n)}function TT(n,e){return new xn(n,e)}function jf(n,e){if(n instanceof sl){const t=n;if(t._bucket==null)throw NE();const r=new xn(t,t._bucket);return e!=null?jf(r,e):r}else return e!==void 0?vT(n,e):n}function bT(n,e){if(e&&ET(e)){if(n instanceof sl)return TT(n,e);throw Ja("To use ref(service, url), the first argument must be a Storage instance.")}else return jf(n,e)}function Mu(n,e){const t=e==null?void 0:e[_f];return t==null?null:et.makeFromBucketSpec(t,n)}function wT(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:kh(s,n.app.options.projectId))}class sl{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=gf,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yE,this._maxUploadRetryTime=xE,this._requests=new Set,s!=null?this._bucket=et.makeFromBucketSpec(s,this._host):this._bucket=Mu(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=et.makeFromBucketSpec(this._url,e):this._bucket=Mu(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Lu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Lu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xn(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new DE(yf());{const o=qE(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Ou="@firebase/storage",Vu="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="storage";function IT(n,e,t){return n=_e(n),Cf(n,e,t)}function Df(n,e,t,r){return n=_e(n),_T(n,e,t,r)}function il(n){return n=_e(n),yT(n)}function AT(n){return n=_e(n),xT(n)}function Pi(n,e){return n=_e(n),bT(n,e)}function kT(n=fo(),e){n=_e(n);const r=mi(n,Pf).getImmediate({identifier:e}),s=wh("storage");return s&&RT(r,...s),r}function RT(n,e,t,r={}){wT(n,e,t,r)}function NT(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new sl(t,r,s,e,bn)}function ST(){gn(new zt(Pf,NT,"PUBLIC").setMultipleInstances(!0)),ht(Ou,Vu,""),ht(Ou,Vu,"esm2017")}ST();function al(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Lf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CT=Lf,Mf=new Wr("auth","Firebase",Lf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new uo("@firebase/auth");function jT(n,...e){ii.logLevel<=re.WARN&&ii.warn(`Auth (${bn}): ${n}`,...e)}function Fs(n,...e){ii.logLevel<=re.ERROR&&ii.error(`Auth (${bn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(n,...e){throw ol(n,...e)}function mt(n,...e){return ol(n,...e)}function Of(n,e,t){const r=Object.assign(Object.assign({},CT()),{[e]:t});return new Wr("auth","Firebase",r).create(e,{appName:n.name})}function It(n){return Of(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ol(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Mf.create(n,...e)}function Q(n,e,...t){if(!n)throw ol(e,...t)}function vt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Fs(e),new Error(e)}function Nt(n,e){n||vt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function PT(){return Uu()==="http:"||Uu()==="https:"}function Uu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PT()||Mg()||"connection"in navigator)?navigator.onLine:!0}function LT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t){this.shortDelay=e,this.longDelay=t,Nt(t>e,"Short delay should be less than long delay!"),this.isMobile=Pg()||Og()}get(){return DT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(n,e){Nt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=new es(3e4,6e4);function sn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ct(n,e,t,r,s={}){return Uf(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=zr(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},i);return Lg()||(d.referrerPolicy="no-referrer"),Vf.fetch()(Ff(n,n.config.apiHost,t,c),d)})}async function Uf(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},MT),e);try{const s=new UT(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ss(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ss(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ss(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ss(n,"user-disabled",o);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Of(n,m,d);ot(n,m)}}catch(s){if(s instanceof _t)throw s;ot(n,"network-request-failed",{message:String(s)})}}async function ts(n,e,t,r,s={}){const i=await Ct(n,e,t,r,s);return"mfaPendingCredential"in i&&ot(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Ff(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?ll(n.config,s):`${n.config.apiScheme}://${s}`}function VT(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class UT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(mt(this.auth,"network-request-failed")),OT.get())})}}function Ss(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=mt(n,e,r);return s.customData._tokenResponse=t,s}function Fu(n){return n!==void 0&&n.enterprise!==void 0}class FT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return VT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function BT(n,e){return Ct(n,"GET","/v2/recaptchaConfig",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HT(n,e){return Ct(n,"POST","/v1/accounts:delete",e)}async function Bf(n,e){return Ct(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KT(n,e=!1){const t=_e(n),r=await t.getIdToken(e),s=cl(r);Q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Pr(wa(s.auth_time)),issuedAtTime:Pr(wa(s.iat)),expirationTime:Pr(wa(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function wa(n){return Number(n)*1e3}function cl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Fs("JWT malformed, contained fewer than 3 sections"),null;try{const s=Th(t);return s?JSON.parse(s):(Fs("Failed to decode base64 JWT payload"),null)}catch(s){return Fs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Bu(n){const e=cl(n);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof _t&&$T(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function $T({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pr(this.lastLoginAt),this.creationTime=Pr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Qn(n,Bf(t,{idToken:r}));Q(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Hf(i.providerUserInfo):[],c=zT(n.providerData,o),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),m=u?d:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Xa(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(n,g)}async function WT(n){const e=_e(n);await ai(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zT(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Hf(n){return n.map(e=>{var{providerId:t}=e,r=al(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GT(n,e){const t=await Uf(n,{},async()=>{const r=zr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=Ff(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Vf.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function QT(n,e){return Ct(n,"POST","/v2/accounts:revokeToken",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const t=Bu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await GT(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Un;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Un,this.toJSON())}_performRefresh(){return vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(n,e){Q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Et{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=al(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Xa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Qn(this,this.stsTokenManager.getToken(this.auth,e));return Q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return KT(this,e)}reload(){return WT(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Et(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ai(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xe(this.auth.app))return Promise.reject(It(this.auth));const e=await this.getIdToken();return await Qn(this,HT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,c,u,d,m;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,b=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=t.photoURL)!==null&&o!==void 0?o:void 0,P=(c=t.tenantId)!==null&&c!==void 0?c:void 0,N=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,D=(d=t.createdAt)!==null&&d!==void 0?d:void 0,C=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:L,emailVerified:O,isAnonymous:V,providerData:H,stsTokenManager:I}=t;Q(L&&I,e,"internal-error");const x=Un.fromJSON(this.name,I);Q(typeof L=="string",e,"internal-error"),Lt(g,e.name),Lt(_,e.name),Q(typeof O=="boolean",e,"internal-error"),Q(typeof V=="boolean",e,"internal-error"),Lt(b,e.name),Lt(T,e.name),Lt(P,e.name),Lt(N,e.name),Lt(D,e.name),Lt(C,e.name);const y=new Et({uid:L,auth:e,email:_,emailVerified:O,displayName:g,isAnonymous:V,photoURL:T,phoneNumber:b,tenantId:P,stsTokenManager:x,createdAt:D,lastLoginAt:C});return H&&Array.isArray(H)&&(y.providerData=H.map(k=>Object.assign({},k))),N&&(y._redirectEventId=N),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new Un;s.updateFromServerResponse(t);const i=new Et({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ai(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Hf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Un;c.updateFromIdToken(r);const u=new Et({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Xa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=new Map;function Tt(n){Nt(n instanceof Function,"Expected a class definition");let e=Hu.get(n);return e?(Nt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Hu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Kf.type="NONE";const Ku=Kf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(n,e,t){return`firebase:${n}:${e}:${t}`}class Fn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Bs(this.userKey,s.apiKey,i),this.fullPersistenceKey=Bs("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Et._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Fn(Tt(Ku),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Tt(Ku);const o=Bs(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(o);if(m){const g=Et._fromJSON(e,m);d!==i&&(c=g),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Fn(i,e,r):(i=u[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new Fn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($f(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qf(e))return"Blackberry";if(Jf(e))return"Webos";if(qf(e))return"Safari";if((e.includes("chrome/")||Wf(e))&&!e.includes("edge/"))return"Chrome";if(Gf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $f(n=Be()){return/firefox\//i.test(n)}function qf(n=Be()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wf(n=Be()){return/crios\//i.test(n)}function zf(n=Be()){return/iemobile/i.test(n)}function Gf(n=Be()){return/android/i.test(n)}function Qf(n=Be()){return/blackberry/i.test(n)}function Jf(n=Be()){return/webos/i.test(n)}function ul(n=Be()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function JT(n=Be()){var e;return ul(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YT(){return Vg()&&document.documentMode===10}function Yf(n=Be()){return ul(n)||Gf(n)||Jf(n)||Qf(n)||/windows phone/i.test(n)||zf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(n,e=[]){let t;switch(n){case"Browser":t=$u(Be());break;case"Worker":t=`${$u(Be())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${bn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const u=e(i);o(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZT(n,e={}){return Ct(n,"GET","/v2/passwordPolicy",sn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=6;class tb{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:eb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qu(this),this.idTokenSubscription=new qu(this),this.beforeStateQueue=new XT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Tt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Fn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Bf(this,{idToken:e}),r=await Et._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Xe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ai(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xe(this.app))return Promise.reject(It(this));const t=e?_e(e):null;return t&&Q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xe(this.app)?Promise.reject(It(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xe(this.app)?Promise.reject(It(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ZT(this),t=new tb(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await QT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Tt(e)||this._popupRedirectResolver;Q(t,this,"argument-error"),this.redirectPersistenceManager=await Fn.create(this,[Tt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&jT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Rn(n){return _e(n)}class qu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wg(t=>this.observer=t)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rb(n){Di=n}function Zf(n){return Di.loadJS(n)}function sb(){return Di.recaptchaEnterpriseScript}function ib(){return Di.gapiScript}function ab(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class ob{constructor(){this.enterprise=new lb}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class lb{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const cb="recaptcha-enterprise",em="NO_RECAPTCHA";class ub{constructor(e){this.type=cb,this.auth=Rn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{BT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new FT(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,o,c){const u=window.grecaptcha;Fu(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(em)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ob().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!t&&Fu(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=sb();u.length!==0&&(u+=c),Zf(u).then(()=>{s(c,i,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function Wu(n,e,t,r=!1,s=!1){const i=new ub(n);let o;if(s)o=em;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Za(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Wu(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Wu(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(n,e){const t=mi(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(pn(i,e??{}))return s;ot(s,"already-initialized")}return t.initialize({options:e})}function db(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Tt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fb(n,e,t){const r=Rn(n);Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=tm(e),{host:o,port:c}=mb(e),u=c===null?"":`:${c}`,d={url:`${i}//${o}${u}/`},m=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(pn(d,r.config.emulator)&&pn(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,pb()}function tm(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function mb(n){const e=tm(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:zu(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:zu(o)}}}function zu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function pb(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return vt("not implemented")}_getIdTokenResponse(e){return vt("not implemented")}_linkToIdToken(e,t){return vt("not implemented")}_getReauthenticationResolver(e){return vt("not implemented")}}async function gb(n,e){return Ct(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _b(n,e){return ts(n,"POST","/v1/accounts:signInWithPassword",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yb(n,e){return ts(n,"POST","/v1/accounts:signInWithEmailLink",sn(n,e))}async function xb(n,e){return ts(n,"POST","/v1/accounts:signInWithEmailLink",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends hl{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Kr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Kr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Za(e,t,"signInWithPassword",_b);case"emailLink":return yb(e,{email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Za(e,r,"signUpPassword",gb);case"emailLink":return xb(e,{idToken:t,email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(n,e){return ts(n,"POST","/v1/accounts:signInWithIdp",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb="http://localhost";class vn extends hl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ot("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=al(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new vn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Bn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Bn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Bn(e,t)}buildRequest(){const e={requestUri:vb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=zr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Tb(n){const e=Tr(br(n)).link,t=e?Tr(br(e)).deep_link_id:null,r=Tr(br(n)).deep_link_id;return(r?Tr(br(r)).link:null)||r||t||e||n}class dl{constructor(e){var t,r,s,i,o,c;const u=Tr(br(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,m=(r=u.oobCode)!==null&&r!==void 0?r:null,g=Eb((s=u.mode)!==null&&s!==void 0?s:null);Q(d&&m&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=m,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Tb(e);try{return new dl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this.providerId=sr.PROVIDER_ID}static credential(e,t){return Kr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=dl.parseLink(t);return Q(r,"argument-error"),Kr._fromEmailAndCode(e,r.code,r.tenantId)}}sr.PROVIDER_ID="password";sr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";sr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends nm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends ns{constructor(){super("facebook.com")}static credential(e){return vn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ot.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends ns{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return vn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Vt.credential(t,r)}catch{return null}}}Vt.GOOGLE_SIGN_IN_METHOD="google.com";Vt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends ns{constructor(){super("github.com")}static credential(e){return vn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch{return null}}}Ut.GITHUB_SIGN_IN_METHOD="github.com";Ut.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends ns{constructor(){super("twitter.com")}static credential(e,t){return vn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ft.credential(t,r)}catch{return null}}}Ft.TWITTER_SIGN_IN_METHOD="twitter.com";Ft.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bb(n,e){return ts(n,"POST","/v1/accounts:signUp",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Et._fromIdTokenResponse(e,r,s),o=Gu(r);return new En({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Gu(r);return new En({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Gu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends _t{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,oi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new oi(e,t,r,s)}}function rm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?oi._fromErrorAndOperation(n,i,e,r):i})}async function wb(n,e,t=!1){const r=await Qn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return En._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ib(n,e,t=!1){const{auth:r}=n;if(Xe(r.app))return Promise.reject(It(r));const s="reauthenticate";try{const i=await Qn(n,rm(r,s,e,n),t);Q(i.idToken,r,"internal-error");const o=cl(i.idToken);Q(o,r,"internal-error");const{sub:c}=o;return Q(n.uid===c,r,"user-mismatch"),En._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ot(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sm(n,e,t=!1){if(Xe(n.app))return Promise.reject(It(n));const r="signIn",s=await rm(n,r,e),i=await En._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Ab(n,e){return sm(Rn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function im(n){const e=Rn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function kb(n,e,t){if(Xe(n.app))return Promise.reject(It(n));const r=Rn(n),o=await Za(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",bb).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&im(n),u}),c=await En._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Rb(n,e,t){return Xe(n.app)?Promise.reject(It(n)):Ab(_e(n),sr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&im(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nb(n,e){return Ct(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sb(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=_e(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Qn(r,Nb(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Cb(n,e,t,r){return _e(n).onIdTokenChanged(e,t,r)}function jb(n,e,t){return _e(n).beforeAuthStateChanged(e,t)}function Pb(n,e,t,r){return _e(n).onAuthStateChanged(e,t,r)}function Db(n){return _e(n).signOut()}const li="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(li,"1"),this.storage.removeItem(li),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb=1e3,Mb=10;class om extends am{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);YT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Mb):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Lb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}om.type="LOCAL";const Ob=om;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm extends am{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}lm.type="SESSION";const cm=lm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Li(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async d=>d(t.origin,i)),u=await Vb(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Li.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,u)=>{const d=fl("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(g){const _=g;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return window}function Fb(n){pt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(){return typeof pt().WorkerGlobalScope<"u"&&typeof pt().importScripts=="function"}async function Bb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hb(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Kb(){return um()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="firebaseLocalStorageDb",$b=1,ci="firebaseLocalStorage",dm="fbase_key";class rs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Mi(n,e){return n.transaction([ci],e?"readwrite":"readonly").objectStore(ci)}function qb(){const n=indexedDB.deleteDatabase(hm);return new rs(n).toPromise()}function eo(){const n=indexedDB.open(hm,$b);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ci,{keyPath:dm})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ci)?e(r):(r.close(),await qb(),e(await eo()))})})}async function Qu(n,e,t){const r=Mi(n,!0).put({[dm]:e,value:t});return new rs(r).toPromise()}async function Wb(n,e){const t=Mi(n,!1).get(e),r=await new rs(t).toPromise();return r===void 0?null:r.value}function Ju(n,e){const t=Mi(n,!0).delete(e);return new rs(t).toPromise()}const zb=800,Gb=3;class fm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await eo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Gb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return um()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Li._getInstance(Kb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Bb(),!this.activeServiceWorker)return;this.sender=new Ub(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await eo();return await Qu(e,li,"1"),await Ju(e,li),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Wb(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ju(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Mi(s,!1).getAll();return new rs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fm.type="LOCAL";const Qb=fm;new es(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(n,e){return e?Tt(e):(Q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends hl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Bn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Yb(n){return sm(n.auth,new ml(n),n.bypassAuthState)}function Xb(n){const{auth:e,user:t}=n;return Q(t,e,"internal-error"),Ib(t,new ml(n),n.bypassAuthState)}async function Zb(n){const{auth:e,user:t}=n;return Q(t,e,"internal-error"),wb(t,new ml(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yb;case"linkViaPopup":case"linkViaRedirect":return Zb;case"reauthViaPopup":case"reauthViaRedirect":return Xb;default:ot(this.auth,"internal-error")}}resolve(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=new es(2e3,1e4);class On extends mm{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,On.currentPopupAction&&On.currentPopupAction.cancel(),On.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Nt(this.filter.length===1,"Popup operations only handle one event");const e=fl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,On.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ew.get())};e()}}On.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="pendingRedirect",Hs=new Map;class nw extends mm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Hs.get(this.auth._key());if(!e){try{const r=await rw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Hs.set(this.auth._key(),e)}return this.bypassAuthState||Hs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rw(n,e){const t=aw(e),r=iw(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function sw(n,e){Hs.set(n._key(),e)}function iw(n){return Tt(n._redirectPersistence)}function aw(n){return Bs(tw,n.config.apiKey,n.name)}async function ow(n,e,t=!1){if(Xe(n.app))return Promise.reject(It(n));const r=Rn(n),s=Jb(r,e),o=await new nw(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=10*60*1e3;class cw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!pm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(mt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yu(e))}saveEventToCache(e){this.cachedEventUids.add(Yu(e)),this.lastProcessedEventTime=Date.now()}}function Yu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function pm({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pm(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hw(n,e={}){return Ct(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fw=/^https?/;async function mw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await hw(n);for(const t of e)try{if(pw(t))return}catch{}ot(n,"unauthorized-domain")}function pw(n){const e=Ya(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!fw.test(t))return!1;if(dw.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=new es(3e4,6e4);function Xu(){const n=pt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function _w(n){return new Promise((e,t)=>{var r,s,i;function o(){Xu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xu(),t(mt(n,"network-request-failed"))},timeout:gw.get()})}if(!((s=(r=pt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=pt().gapi)===null||i===void 0)&&i.load)o();else{const c=ab("iframefcb");return pt()[c]=()=>{gapi.load?o():t(mt(n,"network-request-failed"))},Zf(`${ib()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Ks=null,e})}let Ks=null;function yw(n){return Ks=Ks||_w(n),Ks}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=new es(5e3,15e3),vw="__/auth/iframe",Ew="emulator/auth/iframe",Tw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ww(n){const e=n.config;Q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ll(e,Ew):`https://${n.config.authDomain}/${vw}`,r={apiKey:e.apiKey,appName:n.name,v:bn},s=bw.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${zr(r).slice(1)}`}async function Iw(n){const e=await yw(n),t=pt().gapi;return Q(t,n,"internal-error"),e.open({where:document.body,url:ww(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=mt(n,"network-request-failed"),c=pt().setTimeout(()=>{i(o)},xw.get());function u(){pt().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kw=500,Rw=600,Nw="_blank",Sw="http://localhost";class Zu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Cw(n,e,t,r=kw,s=Rw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Aw),{width:r.toString(),height:s.toString(),top:i,left:o}),d=Be().toLowerCase();t&&(c=Wf(d)?Nw:t),$f(d)&&(e=e||Sw,u.scrollbars="yes");const m=Object.entries(u).reduce((_,[b,T])=>`${_}${b}=${T},`,"");if(JT(d)&&c!=="_self")return jw(e||"",c),new Zu(null);const g=window.open(e||"",c,m);Q(g,n,"popup-blocked");try{g.focus()}catch{}return new Zu(g)}function jw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw="__/auth/handler",Dw="emulator/auth/handler",Lw=encodeURIComponent("fac");async function eh(n,e,t,r,s,i){Q(n.config.authDomain,n,"auth-domain-config-required"),Q(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:bn,eventId:s};if(e instanceof nm){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",qg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,g]of Object.entries({}))o[m]=g}if(e instanceof ns){const m=e.getScopes().filter(g=>g!=="");m.length>0&&(o.scopes=m.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const u=await n._getAppCheckToken(),d=u?`#${Lw}=${encodeURIComponent(u)}`:"";return`${Mw(n)}?${zr(c).slice(1)}${d}`}function Mw({config:n}){return n.emulator?ll(n,Dw):`https://${n.authDomain}/${Pw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia="webStorageSupport";class Ow{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cm,this._completeRedirectFn=ow,this._overrideRedirectResult=sw}async _openPopup(e,t,r,s){var i;Nt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await eh(e,t,r,Ya(),s);return Cw(e,o,fl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await eh(e,t,r,Ya(),s);return Fb(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Nt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Iw(e),r=new cw(e);return t.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ia,{type:Ia},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ia];o!==void 0&&t(!!o),ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Yf()||qf()||ul()}}const Vw=Ow;var th="@firebase/auth",nh="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Bw(n){gn(new zt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xf(n)},d=new nb(r,s,i,u);return db(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),gn(new zt("auth-internal",e=>{const t=Rn(e.getProvider("auth").getImmediate());return(r=>new Uw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ht(th,nh,Fw(n)),ht(th,nh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=5*60,Kw=Ah("authIdTokenMaxAge")||Hw;let rh=null;const $w=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Kw)return;const s=t==null?void 0:t.token;rh!==s&&(rh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function qw(n=fo()){const e=mi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=hb(n,{popupRedirectResolver:Vw,persistence:[Qb,Ob,cm]}),r=Ah("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=$w(i.toString());jb(t,o,()=>o(t.currentUser)),Cb(t,c=>o(c))}}const s=bh("auth");return s&&fb(t,`http://${s}`),t}function Ww(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}rb({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=mt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Ww().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Bw("Browser");const zw={apiKey:"AIzaSyB0zBdnr_ZBmmokxvgLiHWU52QhnFnoymU",authDomain:"aimchallange-67039.firebaseapp.com",projectId:"aimchallange-67039",storageBucket:"aimchallange-67039.appspot.com",messagingSenderId:"109617578227",appId:"1:109617578227:web:8f09f705f248bbdaf07786",measurementId:"G-42PJQ2LB6T"},pl=Sh(zw),$s=qw(pl),St=Zv(pl),Oi=kT(pl),gm=A.createContext(),an=()=>A.useContext(gm),Gw=({children:n})=>{const[e,t]=A.useState(null),[r,s]=A.useState(!1),[i,o]=A.useState(!0);A.useEffect(()=>Pb($s,async g=>{if(g){const _={uid:g.uid,email:g.email,displayName:g.displayName||g.email.split("@")[0],role:"admin"};t(_),s(!0)}else t(null),s(!1);o(!1)}),[]);const d={currentUser:e,isAuthenticated:r,login:async(m,g)=>{try{return await Rb($s,m,g),{success:!0}}catch(_){return console.error("Login error:",_),{success:!1,error:_.message}}},logout:async()=>{try{return await Db($s),{success:!0}}catch(m){return console.error("Logout error:",m),{success:!1,error:m.message}}}};return l.jsx(gm.Provider,{value:d,children:!i&&n})},to=en(St,"settings","textContent"),Qw=async()=>{try{const n=await Xo(to);return n.exists()?n.data():(await Zr(to,{}),{})}catch(n){return console.error("Error getting text content:",n),{}}},Jw=async(n,e)=>{try{const t={};return t[n]=e,await pf(to,t),{success:!0}}catch(t){throw console.error("Error updating text content:",t),t}},Yw=async(n,e)=>{try{const t=Pi(Oi,`background-images/${e}`);return await Df(t,n,"data_url"),await il(t)}catch(t){throw console.error("Error uploading background image:",t),t}},no=en(St,"settings","backgroundImages"),Xw=async()=>{try{const n=await Xo(no);return n.exists()?n.data():(await Zr(no,{}),{})}catch(n){return console.error("Error getting background images:",n),{}}},sh=async(n,e)=>{try{const t={};return t[n]=e,await pf(no,t),{success:!0}}catch(t){throw console.error("Error updating background image:",t),t}},_m=A.createContext(),on=()=>A.useContext(_m),Zw=({children:n})=>{const[e,t]=A.useState({}),[r,s]=A.useState(!1),[i,o]=A.useState([]),{currentUser:c,isAuthenticated:u}=an(),d=(c==null?void 0:c.role)==="admin";A.useEffect(()=>{(async()=>{try{const L=await Qw();t(L)}catch(L){console.error("Error fetching text content:",L);const O=localStorage.getItem("textContent");if(O)try{t(JSON.parse(O))}catch(V){console.error("Error parsing saved content:",V),t({})}}})()},[]),A.useEffect(()=>{s(!!(u&&d))},[u,d]);const D={getText:(C,L)=>e[C]||L,updateText:async(C,L)=>{try{await Jw(C,L);const O={...e,[C]:L};t(O),o(V=>[...V,{content:{...e},timestamp:new Date().toISOString(),changedKey:C}]),localStorage.setItem("textContent",JSON.stringify(O))}catch(O){console.error("Error updating text content:",O);const V={...e,[C]:L};localStorage.setItem("textContent",JSON.stringify(V)),t(V)}},isEditing:r,toggleEditing:()=>{console.log("Edit mode is always on for admin users")},isAdmin:d,textContent:e,resetAllContent:()=>{o(C=>[...C,{content:{...e},timestamp:new Date().toISOString(),action:"reset-all"}]),t({}),localStorage.removeItem("textContent"),console.log("All content has been reset")},removeContentItem:C=>{o(O=>[...O,{content:{...e},timestamp:new Date().toISOString(),changedKey:C,action:"remove"}]);const L={...e};delete L[C],t(L),localStorage.setItem("textContent",JSON.stringify(L)),console.log(`Content item '${C}' has been removed`)},undoLastChange:()=>{if(i.length>1){const C=[...i];C.pop();const L=C[C.length-1].content;return t(L),localStorage.setItem("textContent",JSON.stringify(L)),o(C),console.log("Last change undone"),!0}return console.log("No changes to undo"),!1},getEditHistory:()=>i,editHistory:i};return l.jsx(_m.Provider,{value:D,children:n})},eI=()=>{const[n,e]=A.useState(!1),[t,r]=A.useState(!1),{isAuthenticated:s,currentUser:i,logout:o}=an(),{isEditing:c,getText:u,updateText:d}=on(),m=Xn(),g=()=>{e(!1)},_=()=>{r(!1)},b=()=>{o(),m("/")};return A.useEffect(()=>{console.log("Navbar auth state:",{isAuthenticated:s,currentUser:i,isAdmin:(i==null?void 0:i.role)==="admin"})},[s,i]),l.jsx("div",{className:"flex flex_col",style:{margin:0,padding:0},children:l.jsxs("div",{className:"navbar set-03 flex flex_j_SA MaxWH location font_white",style:{margin:0,padding:0},children:[l.jsx("div",{className:"navim MaxWH location",children:l.jsx(ce,{to:"/",onClick:T=>{T.preventDefault(),window.location.href="#/"},children:l.jsx("img",{src:"/AimRV/images/logos/Aim_Challenge_logo_white.svg",alt:"aim challange logo",className:"custom-image navim"})})}),l.jsxs("div",{className:"navbside MaxWH location flex flex_j_SA",children:[l.jsxs("div",{className:"navbbutton flex flex_j_SA flex_col MaxWH location button",children:[l.jsx("a",{href:"#",className:"dropdown-trigger",onClick:T=>{T.preventDefault(),e(!n)},children:"Tävlingar"}),n&&l.jsxs("div",{className:"drop-down",children:[l.jsx(ce,{to:"/competitions",onClick:g,className:"drop-item",children:"TÄVLINGAR"}),l.jsx(ce,{to:"/ulricehamn",onClick:g,className:"drop-item",children:"ULRICEHAMN"}),l.jsx(ce,{to:"/salen",onClick:g,className:"drop-item",children:"SÄLEN"}),l.jsx(ce,{to:"/hemsedal",onClick:g,className:"drop-item",children:"HEMSEDAL"}),l.jsx(ce,{to:"/kolmarden",onClick:g,className:"drop-item",children:"KOLMÅRDEN"}),l.jsx(ce,{to:"/trippeln",onClick:g,className:"drop-item",children:"AIM CHALLENGE TRIPPELN"}),l.jsx(ce,{to:"/trippeln-results",onClick:g,className:"drop-item",children:"RESULTAT"}),l.jsx(ce,{to:"/gallery",onClick:g,className:"drop-item",children:"GALLERI"})]})]}),l.jsx("div",{className:"navbbutton flex flex_j_SA MaxWH location button",children:l.jsx("a",{href:"https://raceid.com/sv/campaigns/bcfa3952-92c0-11ef-a892-06546bc3018f",children:"Anmälan"})}),l.jsxs("div",{className:"navbbutton flex flex_j_SA flex_col MaxWH location button",children:[l.jsx("a",{href:"#",className:"dropdown-trigger",onClick:T=>{T.preventDefault(),r(!t)},children:"Om oss"}),t&&l.jsxs("div",{className:"drop-down",children:[l.jsx(ce,{to:"/om-oss",onClick:_,className:"drop-item",children:"Om oss"}),l.jsx(ce,{to:"/regler",onClick:_,className:"drop-item",children:"Regler"}),l.jsx(ce,{to:"/faq",onClick:_,className:"drop-item",children:"FAQ"}),l.jsx(ce,{to:"/historien-om-aim",onClick:_,className:"drop-item",children:"Historien om AIM"})]})]}),l.jsx("div",{className:"navbbutton flex flex_j_SA MaxWH location button",children:l.jsx("a",{href:"#sponsors-section",onClick:T=>{T.preventDefault();const P=document.getElementById("sponsors-section");P&&P.scrollIntoView({behavior:"smooth"})},children:"Sponsorer"})}),l.jsx("div",{className:"navbbutton flex flex_j_SA MaxWH location button",children:l.jsx(ce,{to:"/senaste-nytt",children:"Senaste nytt"})}),l.jsx("div",{className:"navbbutton flex flex_j_SA MaxWH location button",children:l.jsx(ce,{to:"#",children:"Kontakta oss"})}),l.jsx("div",{className:"navbbutton flex flex_j_SA MaxWH location button",children:l.jsx("a",{href:"#",children:"SV|NO|EN"})}),s&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"navbbutton flex flex_j_SA MaxWH location button",children:l.jsx(ce,{to:"/content-manager",children:"Innehåll"})}),l.jsx("div",{className:"navbbutton flex flex_j_SA MaxWH location button",children:l.jsx("a",{href:"#",onClick:T=>{T.preventDefault(),b()},children:"Logga ut"})})]})]})]})})},tI=()=>l.jsx("div",{className:"flex flex_col MaxWH location",children:l.jsx("footer",{className:"footer set-03",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"footer-grid",children:[l.jsxs("div",{className:"grid-item sponsors",children:[l.jsx("h3",{className:"footer-heading",id:"sponsors-section",children:"Sponsors"}),l.jsxs("div",{className:"grid",children:[l.jsx("img",{src:"/AimRV/images/sponsors/Artboard 1@4x.png",alt:"Artboard",className:"sponsor-logo"}),l.jsx("img",{src:"/AimRV/images/sponsors/Camelbak_vit.svg",alt:"Camelbak",className:"sponsor-logo"}),l.jsx("img",{src:"/AimRV/images/sponsors/Hedghog_vit.svg",alt:"Hedghog",className:"sponsor-logo"}),l.jsx("img",{src:"/AimRV/images/sponsors/Kona_vit.png",alt:"Kona",className:"sponsor-logo"}),l.jsx("img",{src:"/AimRV/images/sponsors/Mareld_svart.svg",alt:"Mareld",className:"sponsor-logo"}),l.jsx("img",{src:"/AimRV/images/sponsors/ODD_white_RGB.png",alt:"ODD",className:"sponsor-logo"}),l.jsx("img",{src:"/AimRV/images/sponsors/Oofos.png",alt:"Oofos",className:"sponsor-logo"}),l.jsx("img",{src:"/AimRV/images/sponsors/Ortovox_svart.svg",alt:"Ortovox",className:"sponsor-logo"}),l.jsx("img",{src:"/AimRV/images/sponsors/UD Logo.png",alt:"UD",className:"sponsor-logo"}),l.jsx("img",{src:"/AimRV/images/sponsors/Upplev.png",alt:"Upplev Norrköping",className:"sponsor-logo"}),l.jsx("img",{src:"/AimRV/images/sponsors/holdut_logo_sort_1.png",alt:"Hold ut",className:"sponsor-logo"}),l.jsx("img",{src:"/AimRV/images/sponsors/h%C3%A4llmark logga sv_v.svg",alt:"Hällmark",className:"sponsor-logo"}),l.jsx("img",{src:"/AimRV/images/sponsors/injinji_black.svg",alt:"Injinji",className:"sponsor-logo"})]})]}),l.jsxs("div",{className:"grid-item partners",children:[l.jsx("h3",{className:"footer-heading",children:"Partners"}),l.jsx("div",{className:"grid"})]})]}),l.jsxs("div",{className:"footer-bottom",children:[l.jsx("p",{className:"trademark",children:"© 2025 Aimchallenge"}),l.jsxs("div",{className:"social-icons flex flex_j_SA location font_white",children:[l.jsx("a",{href:"https://www.facebook.com/aimchallenge/",className:"fa fa-facebook font_white"}),l.jsx("a",{href:"https://www.instagram.com/aimchallenge/",className:"fa fa-instagram font_white"}),l.jsx("a",{href:"https://vimeo.com/user45220061",className:"fa fa-credit-card font_white"})]})]})]})})}),w=({textKey:n,defaultText:e,tag:t="p",className:r="",style:s={},placeholder:i="Skriv text här...",onClick:o})=>{const{getText:c,updateText:u,isAdmin:d}=on(),[m,g]=A.useState(!1),[_,b]=A.useState(""),[T,P]=A.useState(!1),[N,D]=A.useState(""),[C,L]=A.useState(""),O=A.useRef(null),V=A.useRef(null),H=A.useRef(null),I=["span","a","em","strong","i","b","code","small"].includes(t);A.useEffect(()=>{const te=c(n);b(te||e)},[n,e,c]),A.useEffect(()=>{const te=S=>{S.key==="Escape"&&m&&k()};return document.addEventListener("keydown",te),()=>{document.removeEventListener("keydown",te)}},[m]);const x=te=>{te&&(te.preventDefault(),te.stopPropagation()),g(!0)},y=()=>{u(n,_),g(!1),P(!1)},k=()=>{const te=c(n);b(te||e),g(!1),P(!1)},E=te=>{b(te.target.value)},R=()=>{P(!T),L(""),D("")},v=()=>{if(C&&N){let te=N;!te.startsWith("http://")&&!te.startsWith("https://")&&(te="https://"+te);const S=`<a href="${te}" target="_blank" rel="noopener noreferrer">${C}</a>`,B=O.current,G=B.selectionStart,W=_.substring(0,G),ne=_.substring(B.selectionEnd);b(W+S+ne),L(""),D(""),setTimeout(()=>{B.focus();const ue=G+S.length;B.setSelectionRange(ue,ue)},0)}},oe=te=>{L(te.target.value)},me=te=>{D(te.target.value)},de=te=>{te.key==="Enter"&&te.ctrlKey?(te.preventDefault(),y()):te.key==="Escape"&&(te.preventDefault(),k())},He=()=>{const te=t,S={className:`editable-text ${r}`,style:s,dangerouslySetInnerHTML:{__html:_||i},"data-textkey":n.toString()};return o&&(S.onClick=o),l.jsx(te,{...S})};if(m)return l.jsx("div",{className:"edit-modal",children:l.jsxs("div",{className:"edit-modal__content",children:[l.jsxs("div",{className:"edit-modal__toolbar",children:[l.jsx("h3",{children:"Redigera text"}),l.jsx("span",{className:"edit-modal__hint",children:"Tryck Ctrl+Enter för att spara, Esc för att avbryta"})]}),l.jsx("textarea",{ref:O,value:_,onChange:E,onKeyDown:de,placeholder:i,className:"edit-modal__textarea"}),l.jsx("button",{type:"button",onClick:R,className:"modal-button modal-button-secondary",children:T?"Dölj länkverktyg":"Lägg till länk"}),T&&l.jsxs("div",{className:"edit-modal__link-tools",children:[l.jsxs("div",{className:"edit-modal__form-group",children:[l.jsx("label",{htmlFor:"linkText",className:"edit-modal__label",children:"Länktext:"}),l.jsx("input",{ref:V,type:"text",id:"linkText",value:C,onChange:oe,className:"edit-modal__input",placeholder:"Text som ska visas"})]}),l.jsxs("div",{className:"edit-modal__form-group",children:[l.jsx("label",{htmlFor:"linkUrl",className:"edit-modal__label",children:"URL:"}),l.jsx("input",{ref:H,type:"text",id:"linkUrl",value:N,onChange:me,className:"edit-modal__input",placeholder:"https://example.com"})]}),l.jsx("button",{type:"button",onClick:v,disabled:!C||!N,className:"modal-button modal-button-primary",children:"Infoga länk"})]}),l.jsxs("div",{className:"edit-modal__actions",children:[l.jsx("button",{type:"button",onClick:k,className:"modal-button modal-button-secondary",children:"Avbryt"}),l.jsx("button",{type:"button",onClick:y,className:"modal-button modal-button-primary",children:"Spara"})]})]})});const ze=I?"span":"div";return l.jsxs(ze,{className:"editable-text-wrapper",children:[He(),d&&l.jsx("button",{type:"button",onClick:x,className:"edit-button edit-button-primary",title:"Redigera text",children:"Redigera"})]})},nI=()=>l.jsxs("div",{className:"flex flex_col MaxWH location",children:[l.jsx("section",{id:"page_01",className:"page_01 dynamic-background flex flex_col flex_j_E MaxWH location",children:l.jsxs("div",{className:"trans-background page_01box flex flex_col flex_j_SA MaxWH",children:[l.jsx(w,{textKey:"main-multisport-for-alla",defaultText:"MULTISPORT FÖR ALLA",tag:"p",className:"font_blue fonts_medium"}),l.jsx(w,{textKey:"main-multisport-sedan",defaultText:"MUTLISPORT SEDAN 2004",tag:"p",className:"font_blue fonts_large"})]})}),l.jsxs("section",{id:"page_02",className:"page_02 simple-background dynamic-background flex flex_j_E MaxWH location",children:[l.jsxs("div",{className:"page_02box simple-background flex flex_col flex_j_SB MaxWH location",children:[l.jsxs("div",{className:"trans-background page_02top flex flex_col flex_j_SA MaxWH",children:[l.jsx(w,{textKey:"main-ulricehamn-title",defaultText:"ULRICEHAMN",tag:"p",className:"font_blue fonts_medium_B"}),l.jsx(w,{textKey:"ulricehamn-date",defaultText:"datum insert",tag:"p",className:"font_blue fonts_medium"})]}),l.jsx("div",{className:"page_02top flex flex_col flex_j_SA MaxWH Button",children:l.jsx(ce,{to:"/ulricehamn",className:"location button-2",children:l.jsx("span",{children:"Läs mer"})})})]}),l.jsxs("div",{className:"page_02box simple-background flex flex_col flex_j_SB MaxWH location",children:[l.jsxs("div",{className:"trans-background page_02top flex flex_col flex_j_SA MaxWH",children:[l.jsx(w,{textKey:"main-salen-title",defaultText:"SÄLEN",tag:"p",className:"font_blue fonts_medium_B"}),l.jsx(w,{textKey:"salen-date",defaultText:"datum insert",tag:"p",className:"font_blue fonts_medium"})]}),l.jsx("div",{className:"page_02top flex flex_col flex_j_SA MaxWH Button",children:l.jsx(ce,{to:"/salen",className:"location button-2",children:l.jsx("span",{children:"Läs mer"})})})]}),l.jsxs("div",{className:"page_02box simple-background flex flex_col flex_j_SB MaxWH location",children:[l.jsxs("div",{className:"trans-background page_02top flex flex_col flex_j_SA MaxWH",children:[l.jsx(w,{textKey:"main-hemsedal-title",defaultText:"HEMSEDAL",tag:"p",className:"font_blue fonts_medium_B"}),l.jsx(w,{textKey:"hemsedal-date",defaultText:"datum insert",tag:"p",className:"font_blue fonts_medium"})]}),l.jsx("div",{className:"page_02top flex flex_col flex_j_SA MaxWH Button",children:l.jsx(ce,{to:"/hemsedal",className:"location button-2",children:l.jsx("span",{children:"Läs mer"})})})]}),l.jsxs("div",{className:"page_02box simple-background flex flex_col flex_j_SB MaxWH location",children:[l.jsxs("div",{className:"trans-background page_02top flex flex_col flex_j_SA MaxWH",children:[l.jsx(w,{textKey:"main-kolmarden-title",defaultText:"KOLMÅRDEN",tag:"p",className:"font_blue fonts_medium_B"}),l.jsx(w,{textKey:"kolmarden-date",defaultText:"datum insert",tag:"p",className:"font_blue fonts_medium"})]}),l.jsx("div",{className:"page_02top flex flex_col flex_j_SA MaxWH Button",children:l.jsx(ce,{to:"/kolmarden",className:"location button-2",children:l.jsx("span",{children:"Läs mer"})})})]})]}),l.jsx("section",{id:"page_03",className:"page_02 simple-background flex flex_col flex_j_SA MaxWH location",children:l.jsxs("div",{className:"page_01box flex flex_col flex_j_SA MaxWH  font_white",children:[l.jsx(w,{textKey:"main-skistarshop",defaultText:"SKISTARSHOP.COM*",tag:"p",className:"font_white fonts_huge"}),l.jsx(w,{textKey:"main-official-butik",defaultText:"OFFICIELL AIM CHALLENGE BUTIK",tag:"p",className:"font_white fonts_large"})]})}),l.jsxs("section",{id:"page_04",className:"page_02 simple-background flex flex_j_SA MaxWH location",children:[l.jsxs("div",{className:"page_03box flex flex_col trans-background flex flex_j_SA MaxWH",children:[l.jsx(w,{textKey:"main-what-is-aim",defaultText:"VAD ÄR AIM CHALLENGE?",tag:"p",className:"font_blue fonts_large"}),l.jsx(w,{textKey:"main-aim-description",defaultText:"AIM Challenge är en multisport tävling som passar för alla. Lag på två personer ska under 6 timmar ta så många kontroller som möjligt utav 60 utplacerade.",tag:"p",className:"font_blue fonts_medium"}),l.jsx(ce,{to:"/aim-challenge",className:"button-2",children:l.jsx("span",{children:"Läs mer"})})]}),l.jsx("div",{className:"page_03box flex flex_col pad flex_j_SA MaxWH",children:l.jsx("div",{})})]})]}),rI=()=>l.jsxs("div",{className:"flex flex_col MaxWH location",children:[l.jsx("div",{className:"competitions-spacer"}),l.jsxs("div",{className:"competitions-row flex MaxWH location set-03",children:[l.jsxs("div",{className:"competitions-card competitions-card-ulricehamn flex flex_col flex_j_SB MaxWH location simple-background",children:[l.jsxs("div",{className:"trans-background competitions-header flex flex_col flex_j_SA MaxWH",children:[l.jsx(w,{textKey:"competitions-ulricehamn-title",defaultText:"ULRICEHAMN",tag:"p",className:"font_blue fonts_medium_B competitions-title"}),l.jsx(w,{textKey:"ulricehamn-date",defaultText:"datum insert",tag:"p",className:"font_blue fonts_medium competitions-date"})]}),l.jsx("div",{className:"competitions-button-container flex flex_col flex_j_SA flex_a_C MaxWH Button",children:l.jsx(ce,{to:"/ulricehamn",className:"location button-2 competitions-button",children:l.jsx("span",{children:"Läs mer"})})})]}),l.jsxs("div",{className:"competitions-card competitions-card-salen flex flex_col flex_j_SB MaxWH location simple-background",children:[l.jsxs("div",{className:"trans-background competitions-header flex flex_col flex_j_SA MaxWH",children:[l.jsx(w,{textKey:"competitions-salen-title",defaultText:"SÄLEN",tag:"p",className:"font_blue fonts_medium_B competitions-title"}),l.jsx(w,{textKey:"salen-date",defaultText:"datum insert",tag:"p",className:"font_blue fonts_medium competitions-date"})]}),l.jsx("div",{className:"competitions-button-container flex flex_col flex_j_SA flex_a_C MaxWH Button",children:l.jsx(ce,{to:"/salen",className:"location button-2 competitions-button",children:l.jsx("span",{children:"Läs mer"})})})]})]}),l.jsxs("div",{className:"competitions-row flex MaxWH location",children:[l.jsxs("div",{className:"competitions-card competitions-card-hemsedal flex flex_col flex_j_SB MaxWH location simple-background",children:[l.jsxs("div",{className:"trans-background competitions-header flex flex_col flex_j_SA MaxWH",children:[l.jsx(w,{textKey:"competitions-hemsedal-title",defaultText:"HEMSEDAL",tag:"p",className:"font_blue fonts_medium_B competitions-title"}),l.jsx(w,{textKey:"hemsedal-date",defaultText:"datum insert",tag:"p",className:"font_blue fonts_medium competitions-date"})]}),l.jsx("div",{className:"competitions-button-container flex flex_col flex_j_SA flex_a_C MaxWH Button",children:l.jsx(ce,{to:"/hemsedal",className:"location button-2 competitions-button",children:l.jsx("span",{children:"Läs mer"})})})]}),l.jsxs("div",{className:"competitions-card competitions-card-kolmarden flex flex_col flex_j_SB MaxWH location simple-background",children:[l.jsxs("div",{className:"trans-background competitions-header flex flex_col flex_j_SA MaxWH",children:[l.jsx(w,{textKey:"competitions-kolmarden-title",defaultText:"KOLMÅRDEN",tag:"p",className:"font_blue fonts_medium_B competitions-title"}),l.jsx(w,{textKey:"kolmarden-date",defaultText:"datum insert",tag:"p",className:"font_blue fonts_medium competitions-date"})]}),l.jsx("div",{className:"competitions-button-container flex flex_col flex_j_SA flex_a_C MaxWH Button",children:l.jsx(ce,{to:"/kolmarden",className:"location button-2 competitions-button",children:l.jsx("span",{children:"Läs mer"})})})]})]})]}),sI=()=>l.jsxs("div",{className:"flex flex_col",children:[l.jsx("section",{className:"page_01 dynamic-background flex flex_col flex_j_E",children:l.jsxs("div",{className:"trans-background page_01box flex flex_col flex_j_SA",children:[l.jsx(w,{textKey:"ulricehamn-title",defaultText:"ULRICEHAMN",tag:"p",className:"font_blue fonts_huge"}),l.jsx(w,{textKey:"ulricehamn-date",defaultText:"10/5-2025",tag:"p",className:"font_blue fonts_medium"})]})}),l.jsx("section",{className:"ulric-button-section-bg flex flex_j_C flex_a_C",children:l.jsx("a",{href:"https://raceid.com/sv/races/12846/about",target:"_blank",rel:"noopener noreferrer",className:"ulric-button flex flex_j_C flex_a_C",children:l.jsx("p",{className:"font_white fonts_medium",children:"TA MIG TILL ANMÄLAN"})})}),l.jsxs("section",{className:"ulric-section ulric-bg-1 flex flex_j_C flex_a_C",children:[l.jsxs("div",{className:"ulric-content trans-background MaxWH flex flex_col flex_j_C",children:[l.jsx(w,{textKey:"ulricehamn-program-title",defaultText:"PROGRAM",tag:"p",className:"font_blue fonts_large"}),l.jsx(w,{textKey:"ulricehamn-program-subtitle",defaultText:"PRELIMINÄRT PROGRAM:",tag:"p",className:"font_blue fonts_medium"}),l.jsxs("div",{className:"font_blue",children:[l.jsx(w,{textKey:"ulricehamn-friday-title",defaultText:"FREDAG 9 MAJ",tag:"p",className:"fonts_medium"}),l.jsx(w,{textKey:"ulricehamn-friday-schedule",defaultText:"17:00 - 19:00 Registrering för alla tävlande på XCC",tag:"p",className:"fonts_small ulric-time-entry"})]}),l.jsxs("div",{className:"font_blue",children:[l.jsx(w,{textKey:"ulricehamn-saturday-title",defaultText:"LÖRDAG 10 MAJ",tag:"p",className:"fonts_medium"}),l.jsx(w,{textKey:"ulricehamn-saturday-schedule1",defaultText:"08:30 - 10:15 Registrering för alla tävlande som ej registrerat sig under fredagen på 157 XCC, på Lassalyckan.",tag:"p",className:"fonts_small ulric-time-entry"}),l.jsx(w,{textKey:"ulricehamn-saturday-schedule2",defaultText:"10:30 Obligatoriskt informationsmöte vid starten på Lassalyckan stadion.",tag:"p",className:"fonts_small ulric-time-entry"}),l.jsx(w,{textKey:"ulricehamn-saturday-schedule3",defaultText:"11:00 Start AIM Challenge, på Lassalyckan stadion. Gemensam start för 3 & 6-timmars tävlingen.",tag:"p",className:"fonts_small ulric-time-entry"}),l.jsx(w,{textKey:"ulricehamn-saturday-schedule4",defaultText:"14:00 Målgång för 3-timmars tävlingen.",tag:"p",className:"fonts_small ulric-time-entry"}),l.jsx(w,{textKey:"ulricehamn-saturday-schedule5",defaultText:"ca 15:30 Prisutdelning 3-timmars tävlingen",tag:"p",className:"fonts_small ulric-time-entry"}),l.jsx(w,{textKey:"ulricehamn-saturday-schedule6",defaultText:"16:30 - 20:00 After AIM med mat och dryck på Hotell Lassalyckan.",tag:"p",className:"fonts_small ulric-time-entry"}),l.jsx(w,{textKey:"ulricehamn-saturday-schedule7",defaultText:"17:00 Målgång för 6-timmars tävlingen.",tag:"p",className:"fonts_small ulric-time-entry"}),l.jsx(w,{textKey:"ulricehamn-saturday-schedule8",defaultText:"19:00 Prisutdelning utanför Hotell Lassalyckan.",tag:"p",className:"fonts_small ulric-time-entry"})]})]}),l.jsx("div",{className:"ulric-spacer MaxWH"})]}),l.jsxs("section",{className:"ulric-section ulric-bg-2 flex flex_j_C flex_a_C",children:[l.jsx("div",{className:"ulric-spacer MaxWH"}),l.jsxs("div",{className:"ulric-content trans-background MaxWH flex flex_col flex_j_C",children:[l.jsx(w,{textKey:"ulricehamn-pris-title",defaultText:"PRIS",tag:"p",className:"font_blue fonts_large"}),l.jsx(w,{textKey:"ulricehamn-title-price",defaultText:"ULRICEHAMN",tag:"p",className:"font_blue fonts_medium"}),l.jsx("a",{href:"https://raceid.com/sv/races/12846/about",target:"_blank",rel:"noopener noreferrer",children:l.jsx(w,{textKey:"ulricehamn-date",defaultText:"10/5-2025",tag:"p",className:"font_blue fonts_medium"})}),l.jsxs("div",{className:"font_blue",children:[l.jsx(w,{textKey:"ulricehamn-pris-3-timmars-title",defaultText:"3-TIMMARS",tag:"p",className:"fonts_medium"}),l.jsx(w,{textKey:"ulricehamn-pris-3-timmars-early-bird",defaultText:"1500 SEK / lag för Early Bird-anmälan innan 1 november.",tag:"p",className:"fonts_small ulric-time-entry"}),l.jsx(w,{textKey:"ulricehamn-pris-3-timmars-nov-feb",defaultText:"1700 SEK / lag för anmälan mellan 1 november och 1 februari.",tag:"p",className:"fonts_small ulric-time-entry"}),l.jsx(w,{textKey:"ulricehamn-pris-3-timmars-feb-apr",defaultText:"1900 SEK / lag för anmälan mellan 2 februari och 24 april",tag:"p",className:"fonts_small ulric-time-entry"}),l.jsx(w,{textKey:"ulricehamn-pris-3-timmars-apr-start",defaultText:"2100 SEK / lag för anmälan från 25 april och fram till start.",tag:"p",className:"fonts_small ulric-time-entry"})]}),l.jsxs("div",{className:"font_blue",children:[l.jsx(w,{textKey:"ulricehamn-pris-6-timmars-title",defaultText:"6-TIMMARS",tag:"p",className:"fonts_medium"}),l.jsx(w,{textKey:"ulricehamn-pris-6-timmars-early-bird",defaultText:"1900 SEK / lag för Early Bird-anmälan innan 1 november.",tag:"p",className:"fonts_small ulric-time-entry"}),l.jsx(w,{textKey:"ulricehamn-pris-6-timmars-nov-feb",defaultText:"2100 SEK / lag för anmälan mellan 1 november och 1 februari.",tag:"p",className:"fonts_small ulric-time-entry"}),l.jsx(w,{textKey:"ulricehamn-pris-6-timmars-feb-apr",defaultText:"2300 SEK / lag för anmälan mellan 2 februari och 24 april.",tag:"p",className:"fonts_small ulric-time-entry"}),l.jsx(w,{textKey:"ulricehamn-pris-6-timmars-apr-start",defaultText:"2500 SEK / lag för anmälan från 25 april och fram till start.",tag:"p",className:"fonts_small ulric-time-entry"})]}),l.jsxs("div",{className:"font_blue",children:[l.jsx(w,{textKey:"ulricehamn-pris-trippeln-title",defaultText:"AIM CHALLENGE TRIPPELN 2025",tag:"p",className:"fonts_medium"}),l.jsx(w,{textKey:"ulricehamn-pris-trippeln-early-bird",defaultText:"4750 SEK / lag för Early Bird-anmälan innan 1 januari.",tag:"p",className:"fonts_small ulric-time-entry"}),l.jsx(w,{textKey:"ulricehamn-pris-trippeln-jan-feb",defaultText:"5250 SEK / lag för anmälan mellan 1 januari och 1 februari.",tag:"p",className:"fonts_small ulric-time-entry"}),l.jsx(w,{textKey:"ulricehamn-pris-trippeln-feb-apr",defaultText:"5750 SEK / lag för anmälan mellan 2 februari och 24 april.",tag:"p",className:"fonts_small ulric-time-entry"}),l.jsx(w,{textKey:"ulricehamn-pris-trippeln-apr-start",defaultText:"6250 SEK / lag för anmälan efter den 25 april.",tag:"p",className:"fonts_small ulric-time-entry"})]}),l.jsx("a",{href:"https://raceid.com/sv/races/12846/about",target:"_blank",rel:"noopener noreferrer",className:"button-2 ulric-button-align flex flex_s",children:l.jsx("p",{className:"fonts_small ulric-time-entry ulric-link",children:"ANMÄLAN"})})]})]}),l.jsxs("section",{className:"ulric-section ulric-bg-3 flex flex_j_C flex_a_C",children:[l.jsxs("div",{className:"ulric-content trans-background MaxWH flex flex_col flex_j_C",children:[l.jsx(w,{textKey:"ulricehamn-overnattning-title",defaultText:"ÖVERNATTNING OCH MAT",tag:"p",className:"font_blue fonts_large"}),l.jsx("div",{className:"font_blue ulric-text-block",children:l.jsx(w,{textKey:"ulricehamn-overnattning-cykeluthyrning",defaultText:"Cykeluthyrning med in- och utlämning på Lassalyckan Stadion. Läs mer och boka här.",tag:"p",className:"fonts_small ulric-time-entry"})}),l.jsxs("div",{className:"font_blue ulric-text-block",children:[l.jsx(w,{textKey:"ulricehamn-overnattning-hotell",defaultText:"Önskar du att bo nära start och mål så kan vi varmt rekommendera Hotell Lassalyckan som erbjuder ett modernt boende ett stenkast ifrån starten.",tag:"p",className:"fonts_small ulric-time-entry"}),l.jsx(w,{textKey:"ulricehamn-overnattning-hotell-link",defaultText:"www.hotell-lassalyckan.se",tag:"p",className:"fonts_small ulric-time-entry"})]}),l.jsxs("div",{className:"font_blue ulric-text-block",children:[l.jsx(w,{textKey:"ulricehamn-overnattning-alternativ",defaultText:"För övriga boende i Ulricehamn finns här en bra översikt över olika alternativ:",tag:"p",className:"fonts_small ulric-time-entry"}),l.jsx(w,{textKey:"ulricehamn-overnattning-alternativ-link",defaultText:"www.vastsverige.com/ulricehamn/boende",tag:"p",className:"fonts_small ulric-time-entry"})]})]}),l.jsx("div",{className:"ulric-spacer MaxWH"})]})]}),iI=()=>l.jsxs("div",{className:"flex flex_col",children:[l.jsx("section",{className:"page_01 dynamic-background flex flex_col flex_j_E",children:l.jsxs("div",{className:"trans-background page_01box flex flex_col flex_j_SA",children:[l.jsx(w,{textKey:"salen-title",defaultText:"SÄLEN",tag:"p",className:"font_blue fonts_huge"}),l.jsx(w,{textKey:"salen-date",defaultText:"2/8-2024",tag:"p",className:"font_blue fonts_medium"})]})}),l.jsx("section",{className:"salen-button-section-bg flex flex_j_C flex_a_C",children:l.jsx("a",{href:"https://raceid.com/sv/races/13016/about",target:"_blank",rel:"noopener noreferrer",className:"salen-button flex flex_j_C flex_a_C",children:l.jsx("p",{className:"font_white fonts_medium",children:"TA MIG TILL ANMÄLAN"})})}),l.jsxs("section",{className:"salen-section salen-bg-1 flex flex_j_C flex_a_C",children:[l.jsxs("div",{className:"salen-content trans-background MaxWH flex flex_col flex_j_C",children:[l.jsx(w,{textKey:"salen-program-title",defaultText:"PROGRAM",tag:"p",className:"font_blue fonts_large"}),l.jsx(w,{textKey:"salen-program-subtitle",defaultText:"PRELIMINÄRT PROGRAM:",tag:"p",className:"font_blue fonts_medium"}),l.jsxs("div",{className:"font_blue",children:[l.jsx(w,{textKey:"salen-friday-title",defaultText:"FREDAG 1 AUGUSTI",tag:"p",className:"fonts_medium"}),l.jsx(w,{textKey:"salen-friday-schedule",defaultText:"17:00 - 20:00 Nummerlappsutdelning för alla tävlande på SkiStarshop Concept Store på Handelsområdet Lindvallen.",tag:"p",className:"fonts_xsmall salen-time-entry"})]}),l.jsxs("div",{className:"font_blue",children:[l.jsx(w,{textKey:"salen-saturday-title",defaultText:"LÖRDAG 2 AUGUSTI",tag:"p",className:"fonts_medium"}),l.jsx(w,{textKey:"salen-saturday-schedule1",defaultText:"08:30-09:00 Nummerlappsutdelning i konferenslokal ovanför Stadium",tag:"p",className:"fonts_xsmall salen-time-entry"}),l.jsx(w,{textKey:"salen-saturday-schedule2",defaultText:"09:30 Obligatoriskt infomöte vid starten",tag:"p",className:"fonts_xsmall salen-time-entry"}),l.jsx(w,{textKey:"salen-saturday-schedule3",defaultText:"10:00 START! Start/målområde vid Experiumtorget.",tag:"p",className:"fonts_xsmall salen-time-entry"}),l.jsx(w,{textKey:"salen-saturday-schedule4",defaultText:"15:30 After AIM på Lodgebaren på SkiStar Lodge Lindvallen",tag:"p",className:"fonts_xsmall salen-time-entry"}),l.jsx(w,{textKey:"salen-saturday-schedule5",defaultText:"16:00 Målgång AIM Challenge.",tag:"p",className:"fonts_xsmall salen-time-entry"}),l.jsx(w,{textKey:"salen-saturday-schedule6",defaultText:"xx:00 Prisutdelning i Lodgebaren",tag:"p",className:"fonts_xsmall salen-time-entry"})]})]}),l.jsx("div",{className:"salen-spacer MaxWH"})]}),l.jsxs("section",{className:"salen-section salen-bg-2 flex flex_j_C flex_a_C",children:[l.jsx("div",{className:"salen-spacer MaxWH"}),l.jsxs("div",{className:"salen-content trans-background MaxWH flex flex_col flex_j_C",children:[l.jsx(w,{textKey:"salen-pris-title",defaultText:"PRIS",tag:"p",className:"font_blue fonts_large"}),l.jsxs("div",{className:"font_blue",children:[l.jsx(w,{textKey:"salen-pris-salen-title",defaultText:"SÄLEN",tag:"p",className:"fonts_medium"}),l.jsx("a",{href:"https://raceid.com/sv/races/13016/about",target:"_blank",rel:"noopener noreferrer",children:l.jsx(w,{textKey:"salen-date",defaultText:"2/8-2024",tag:"p",className:"fonts_medium"})}),l.jsx(w,{textKey:"salen-pris-salen-price1",defaultText:"1900 SEK / lag för Early Bird-anmälan innan 1 januari.",tag:"p",className:"fonts_xsmall salen-time-entry"}),l.jsx(w,{textKey:"salen-pris-salen-price2",defaultText:"2100 SEK / lag för anmälan mellan 1 januari och 1 april.",tag:"p",className:"fonts_xsmall salen-time-entry"}),l.jsx(w,{textKey:"salen-pris-salen-price3",defaultText:"2300 SEK / lag för anmälan mellan 2 april och 18 juli",tag:"p",className:"fonts_xsmall salen-time-entry"}),l.jsx(w,{textKey:"salen-pris-salen-price4",defaultText:"2500 SEK / lag för anmälan från 19 juli och fram till start.",tag:"p",className:"fonts_xsmall salen-time-entry"})]}),l.jsxs("div",{className:"font_blue",children:[l.jsx(w,{textKey:"salen-pris-trippeln-title",defaultText:"AIM CHALLENGE TRIPPELN 2025",tag:"p",className:"fonts_medium"}),l.jsx(w,{textKey:"salen-pris-trippeln-price1",defaultText:"4750 SEK / lag för Early Bird-anmälan innan 1 januari.",tag:"p",className:"fonts_xsmall salen-time-entry"}),l.jsx(w,{textKey:"salen-pris-trippeln-price2",defaultText:"5250 SEK / lag för anmälan mellan 1 januari och 1 februari.",tag:"p",className:"fonts_xsmall salen-time-entry"}),l.jsx(w,{textKey:"salen-pris-trippeln-price3",defaultText:"5750 SEK / lag för anmälan mellan 2 februari och 25 april.",tag:"p",className:"fonts_xsmall salen-time-entry"}),l.jsx(w,{textKey:"salen-pris-trippeln-price4",defaultText:"6250 SEK / lag för anmälan efter den 26 april.",tag:"p",className:"fonts_xsmall salen-time-entry"})]}),l.jsxs("div",{className:"font_blue",children:[l.jsx(w,{textKey:"salen-pris-landskampen-title",defaultText:"LANDSKAMPEN = LINDVALLEN OCH HEMSEDAL",tag:"p",className:"fonts_medium"}),l.jsx(w,{textKey:"salen-pris-landskampen-price1",defaultText:"3400 SEK/ lag för anmälan innan 1 maj.",tag:"p",className:"fonts_xsmall salen-time-entry"}),l.jsx(w,{textKey:"salen-pris-landskampen-price2",defaultText:"3800 SEK/ lag för anmälan mellan 1 maj och 1 juli.",tag:"p",className:"fonts_xsmall salen-time-entry"}),l.jsx(w,{textKey:"salen-pris-landskampen-price3",defaultText:"4200 SEK/ lag för anmälan från 1 juli och framåt.",tag:"p",className:"fonts_xsmall salen-time-entry"})]}),l.jsx("a",{href:"https://raceid.com/sv/races/13014/about",target:"_blank",rel:"noopener noreferrer",className:"button-2 salen-button-align flex flex_s",children:l.jsx("p",{className:"font_blue fonts_medium",children:"ANMÄLAN"})})]})]}),l.jsxs("section",{className:"salen-section salen-bg-3 flex flex_j_C flex_a_C",children:[l.jsxs("div",{className:"salen-content trans-background MaxWH flex flex_col flex_j_C",children:[l.jsx(w,{textKey:"salen-overnattning-title",defaultText:"ÖVERNATTNING OCH MAT",tag:"p",className:"font_blue fonts_large"}),l.jsxs("div",{className:"font_blue salen-text-block",children:[l.jsx(w,{textKey:"salen-overnattning-overnattning-title",defaultText:"ÖVERNATTNING",tag:"p",className:"fonts_medium"}),l.jsx(w,{textKey:"salen-overnattning-overnattning-text",defaultText:"Boende bokas enklast genom Skistar. För att komma direkt till bokningssida.",tag:"p",className:"fonts_xsmall salen-time-entry"})]}),l.jsxs("div",{className:"font_blue salen-text-block",children:[l.jsx(w,{textKey:"salen-overnattning-mat-title",defaultText:"MAT",tag:"p",className:"fonts_medium"}),l.jsx(w,{textKey:"salen-overnattning-mat-text1",defaultText:"Avslutningsmiddag på Lodgebaren.",tag:"p",className:"fonts_xsmall salen-time-entry"}),l.jsx(w,{textKey:"salen-overnattning-mat-text2",defaultText:"Möjlighet för frukost på Lodgebaren.",tag:"p",className:"fonts_xsmall salen-time-entry"}),l.jsx(w,{textKey:"salen-overnattning-mat-text3",defaultText:"Lodgebaren - Läs mer och boka bord",tag:"p",className:"fonts_xsmall salen-time-entry"})]}),l.jsxs("div",{className:"font_blue salen-text-block",children:[l.jsx(w,{textKey:"salen-overnattning-upplevelser-title",defaultText:"UPPLEVELSER & AKTIVITETER",tag:"p",className:"fonts_medium"}),l.jsx(w,{textKey:"salen-overnattning-upplevelser-text1",defaultText:"Bad & Spa",tag:"p",className:"fonts_xsmall salen-time-entry"}),l.jsx(w,{textKey:"salen-overnattning-upplevelser-text2",defaultText:"Bowling",tag:"p",className:"fonts_xsmall salen-time-entry"}),l.jsx(w,{textKey:"salen-overnattning-upplevelser-text3",defaultText:"Höghöjdsbana",tag:"p",className:"fonts_xsmall salen-time-entry"}),l.jsx(w,{textKey:"salen-overnattning-upplevelser-text4",defaultText:"SkiStar Sports & Adventures",tag:"p",className:"fonts_xsmall salen-time-entry"})]})]}),l.jsx("div",{className:"salen-spacer MaxWH"})]})]}),aI=()=>l.jsxs("div",{className:"MaxWH location",children:[l.jsx("section",{className:"page_01 dynamic-background flex flex_col flex_j_E",children:l.jsxs("div",{className:"trans-background page_01box flex flex_col flex_j_SA",children:[l.jsx(w,{textKey:"hemsedal-title",defaultText:"HEMSEDAL",tag:"p",className:"font_blue fonts_huge"}),l.jsx(w,{textKey:"hemsedal-date",defaultText:"datum insert",tag:"p",className:"font_blue fonts_medium"})]})}),l.jsx("section",{className:"hemsedal-button-section-bg flex flex_j_C flex_a_C",children:l.jsx("a",{href:"https://raceid.com/sv/races/13015/about",target:"_blank",rel:"noopener noreferrer",className:"hemsedal-button flex flex_j_C flex_a_C",children:l.jsx("p",{className:"font_white fonts_medium",children:"TA MIG TILL ANMÄLAN"})})}),l.jsxs("section",{className:"hemsedal-section hemsedal-bg-1 flex flex_j_C flex_a_C",children:[l.jsxs("div",{className:"hemsedal-content trans-background MaxWH flex flex_col flex_j_C",children:[l.jsx(w,{textKey:"hemsedal-program-title",defaultText:"PROGRAM",tag:"p",className:"font_blue fonts_large"}),l.jsx(w,{textKey:"hemsedal-program-subtitle",defaultText:"PRELIMINÄRT PROGRAM:",tag:"p",className:"font_blue fonts_medium"}),l.jsxs("div",{className:"font_blue",children:[l.jsx(w,{textKey:"hemsedal-friday-title",defaultText:"FREDAG 23 AUGUSTI",tag:"p",className:"fonts_medium"}),l.jsx(w,{textKey:"hemsedal-friday-schedule",defaultText:"17:00 - 20:00 Nummerlappsutdelning för alla tävlande på SkiStarshop Hemsedal",tag:"p",className:"fonts_xsmall hemsedal-time-entry"})]}),l.jsxs("div",{className:"font_blue",children:[l.jsx(w,{textKey:"hemsedal-saturday-title",defaultText:"LÖRDAG 24 AUGUSTI",tag:"p",className:"fonts_medium"}),l.jsx(w,{textKey:"hemsedal-saturday-schedule1",defaultText:"08:30-09:00 Nummerlappsutdelning vid starten",tag:"p",className:"fonts_xsmall hemsedal-time-entry"}),l.jsx(w,{textKey:"hemsedal-saturday-schedule2",defaultText:"09:30 Obligatoriskt infomöte vid starten",tag:"p",className:"fonts_xsmall hemsedal-time-entry"}),l.jsx(w,{textKey:"hemsedal-saturday-schedule3",defaultText:"10:00 START! Start/målområde vid Hemsedal Skisenter",tag:"p",className:"fonts_xsmall hemsedal-time-entry"}),l.jsx(w,{textKey:"hemsedal-saturday-schedule4",defaultText:"15:30 After AIM på Stavkroa",tag:"p",className:"fonts_xsmall hemsedal-time-entry"}),l.jsx(w,{textKey:"hemsedal-saturday-schedule5",defaultText:"16:00 Målgång AIM Challenge",tag:"p",className:"fonts_xsmall hemsedal-time-entry"}),l.jsx(w,{textKey:"hemsedal-saturday-schedule6",defaultText:"18:00 Prisutdelning på Stavkroa",tag:"p",className:"fonts_xsmall hemsedal-time-entry"})]})]}),l.jsx("div",{className:"hemsedal-spacer MaxWH"})]}),l.jsxs("section",{className:"hemsedal-section hemsedal-bg-2 flex flex_j_C flex_a_C",children:[l.jsx("div",{className:"hemsedal-spacer MaxWH"}),l.jsxs("div",{className:"hemsedal-content trans-background MaxWH flex flex_col flex_j_C",children:[l.jsx(w,{textKey:"hemsedal-pris-title",defaultText:"PRIS",tag:"p",className:"font_blue fonts_large"}),l.jsxs("div",{className:"font_blue",children:[l.jsx(w,{textKey:"hemsedal-pris-date",defaultText:"HEMSEDAL",tag:"p",className:"fonts_medium"}),l.jsx("a",{href:"https://raceid.com/sv/races/13015/about",target:"_blank",rel:"noopener noreferrer",children:l.jsx(w,{textKey:"hemsedal-date",defaultText:"24/8-2024",tag:"p",className:"fonts_medium"})}),l.jsx(w,{textKey:"hemsedal-pris-price1",defaultText:"1900 NOK / lag för Early Bird-anmälan innan 1 januari",tag:"p",className:"fonts_xsmall hemsedal-time-entry"}),l.jsx(w,{textKey:"hemsedal-pris-price2",defaultText:"2100 NOK / lag för anmälan mellan 1 januari och 1 april",tag:"p",className:"fonts_xsmall hemsedal-time-entry"}),l.jsx(w,{textKey:"hemsedal-pris-price3",defaultText:"2300 NOK / lag för anmälan mellan 2 april och 18 juli",tag:"p",className:"fonts_xsmall hemsedal-time-entry"}),l.jsx(w,{textKey:"hemsedal-pris-price4",defaultText:"2500 NOK / lag för anmälan från 19 juli och fram till start",tag:"p",className:"fonts_xsmall hemsedal-time-entry"})]}),l.jsxs("div",{className:"font_blue",children:[l.jsx(w,{textKey:"hemsedal-trippeln-title",defaultText:"AIM CHALLENGE TRIPPELN 2025",tag:"p",className:"fonts_medium"}),l.jsx(w,{textKey:"hemsedal-trippeln-price1",defaultText:"4750 SEK / lag för Early Bird-anmälan innan 1 januari",tag:"p",className:"fonts_xsmall hemsedal-time-entry"}),l.jsx(w,{textKey:"hemsedal-trippeln-price2",defaultText:"5250 SEK / lag för anmälan mellan 1 januari och 1 februari",tag:"p",className:"fonts_xsmall hemsedal-time-entry"}),l.jsx(w,{textKey:"hemsedal-trippeln-price3",defaultText:"5750 SEK / lag för anmälan mellan 2 februari och 25 april",tag:"p",className:"fonts_xsmall hemsedal-time-entry"}),l.jsx(w,{textKey:"hemsedal-trippeln-price4",defaultText:"6250 SEK / lag för anmälan efter den 26 april",tag:"p",className:"fonts_xsmall hemsedal-time-entry"})]}),l.jsxs("div",{className:"font_blue",children:[l.jsx(w,{textKey:"hemsedal-landskampen-title",defaultText:"LANDSKAMPEN = LINDVALLEN OCH HEMSEDAL",tag:"p",className:"fonts_medium"}),l.jsx(w,{textKey:"hemsedal-landskampen-price1",defaultText:"3400 SEK / lag för anmälan innan 1 maj",tag:"p",className:"fonts_xsmall hemsedal-time-entry"}),l.jsx(w,{textKey:"hemsedal-landskampen-price2",defaultText:"3800 SEK / lag för anmälan mellan 1 maj och 1 juli",tag:"p",className:"fonts_xsmall hemsedal-time-entry"}),l.jsx(w,{textKey:"hemsedal-landskampen-price3",defaultText:"4200 SEK / lag för anmälan från 1 juli och framåt",tag:"p",className:"fonts_xsmall hemsedal-time-entry"})]}),l.jsx("a",{href:"https://raceid.com/sv/races/13014/about",target:"_blank",rel:"noopener noreferrer",className:"button-2 hemsedal-button-align flex flex_s",children:l.jsx("span",{children:"ANMÄLAN"})})]})]}),l.jsxs("section",{className:"hemsedal-section hemsedal-bg-3 flex flex_j_C flex_a_C",children:[l.jsxs("div",{className:"hemsedal-content trans-background MaxWH flex flex_col flex_j_C",children:[l.jsx(w,{textKey:"hemsedal-overnattning-title",defaultText:"ÖVERNATTNING OCH MAT",tag:"p",className:"font_blue fonts_large"}),l.jsxs("div",{className:"font_blue hemsedal-text-block",children:[l.jsx(w,{textKey:"hemsedal-overnattning-subtitle",defaultText:"ÖVERNATTNING",tag:"p",className:"fonts_medium"}),l.jsx(w,{textKey:"hemsedal-overnattning-info",defaultText:"Boende bokas enklast genom Skistar. Klicka för att komma direkt till bokningssida.",tag:"p",className:"fonts_xsmall hemsedal-time-entry"}),l.jsx(w,{textKey:"hemsedal-cykeluthyrning-info",defaultText:"Cykel kan hyras hos Concept Store. Klicka för att komma till bokningssida.",tag:"p",className:"fonts_xsmall hemsedal-time-entry"})]}),l.jsxs("div",{className:"font_blue hemsedal-text-block",children:[l.jsx(w,{textKey:"hemsedal-mat-subtitle",defaultText:"MAT",tag:"p",className:"fonts_medium"}),l.jsx(w,{textKey:"hemsedal-mat-friday",defaultText:"FREDAG:",tag:"p",className:"fonts_small"}),l.jsx(w,{textKey:"hemsedal-mat-friday-info",defaultText:"18:00 - 21:00 Italiensk pizza som Take Away - Beställ på plats på lodgen Spiseri eller ring +47 458 65 086. Meny kommer att läggas ut HÄR.",tag:"p",className:"fonts_xsmall hemsedal-time-entry"}),l.jsx(w,{textKey:"hemsedal-mat-saturday",defaultText:"LÖRDAG:",tag:"p",className:"fonts_small"}),l.jsx(w,{textKey:"hemsedal-mat-saturday-info1",defaultText:"10:00 - 15:00 Cafe och lunchservering på Lodgen Spiseri",tag:"p",className:"fonts_xsmall hemsedal-time-entry"}),l.jsx(w,{textKey:"hemsedal-mat-saturday-info2",defaultText:"15:30-18:00 After AIM på Lodgen Spiseri. Viktigt att fylla på med vätska och energi efter målgång!",tag:"p",className:"fonts_xsmall hemsedal-time-entry"}),l.jsx(w,{textKey:"hemsedal-mat-saturday-info3",defaultText:"19:30 Bankettmiddag på Lodgen Spiseri. Bokas här.",tag:"p",className:"fonts_xsmall hemsedal-time-entry"}),l.jsx(w,{textKey:"hemsedal-mat-sunday",defaultText:"SÖNDAG:",tag:"p",className:"fonts_small"}),l.jsx(w,{textKey:"hemsedal-mat-sunday-info",defaultText:"10:00 - 15:00 Cafe och lunchservering på Lodgen Spiseri",tag:"p",className:"fonts_xsmall hemsedal-time-entry"})]}),l.jsx("div",{className:"font_blue hemsedal-text-block",children:l.jsx(w,{textKey:"hemsedal-mat-info",defaultText:"Lodgen Spiseri följer alla de nationella riktlinjerna för att ge dig en trygg och bra upplevelse.",tag:"p",className:"fonts_xsmall"})})]}),l.jsx("div",{className:"hemsedal-spacer MaxWH"})]})]}),oI=()=>l.jsxs("div",{className:"MaxWH location",children:[l.jsx("div",{className:"set-03",style:{height:"120px"}}),l.jsx("section",{className:"page_01 kolmarden-bg-1 flex flex_col flex_j_E set-03",children:l.jsxs("div",{className:"trans-background page_01box flex flex_col flex_j_SA",children:[l.jsx(w,{textKey:"kolmarden-title",defaultText:"KOLMÅRDEN",tag:"p",className:"font_blue fonts_huge"}),l.jsx(w,{textKey:"kolmarden-date",defaultText:"datum insert",tag:"p",className:"font_blue fonts_medium"})]})}),l.jsx("section",{className:"kolmarden-button-section-bg flex flex_j_C flex_a_C set-03",children:l.jsx("a",{href:"https://raceid.com/sv/races/13014/about",target:"_blank",rel:"noopener noreferrer",className:"kolmarden-button flex flex_j_C flex_a_C",children:l.jsx("p",{className:"font_white fonts_medium",children:"TA MIG TILL ANMÄLAN"})})}),l.jsx("section",{className:"kolmarden-section kolmarden-bg-2 flex flex_j_R flex_a_C set-03",children:l.jsxs("div",{className:"kolmarden-content trans-background MaxWH flex flex_col flex_j_C",children:[l.jsx(w,{textKey:"kolmarden-program-title",defaultText:"PROGRAM",tag:"p",className:"font_blue fonts_large"}),l.jsx(w,{textKey:"kolmarden-program-subtitle",defaultText:"PRELIMINÄRT PROGRAM:",tag:"p",className:"font_blue fonts_medium"}),l.jsxs("div",{className:"font_blue",children:[l.jsx(w,{textKey:"kolmarden-friday-title",defaultText:"FREDAG 27 SEPTEMBER",tag:"p",className:"fonts_small kolmarden-day-title"}),l.jsx(w,{textKey:"kolmarden-friday-program",defaultText:"15:00-19:00 Tävlingsexpeditionen öppen, utlämning av nummerlappar och kartor",tag:"p",className:"fonts_xsmall kolmarden-program-entry"})]}),l.jsxs("div",{className:"font_blue",children:[l.jsx(w,{textKey:"kolmarden-saturday-title",defaultText:"LÖRDAG 28 SEPTEMBER",tag:"p",className:"fonts_small kolmarden-day-title"}),l.jsx(w,{textKey:"kolmarden-saturday-program-1",defaultText:"07:30-08:30 Tävlingsexpeditionen öppen, utlämning av nummerlappar och kartor",tag:"p",className:"fonts_xsmall kolmarden-program-entry"}),l.jsx(w,{textKey:"kolmarden-saturday-program-2",defaultText:"08:30 Obligatorisk genomgång vid startområdet",tag:"p",className:"fonts_xsmall kolmarden-program-entry"}),l.jsx(w,{textKey:"kolmarden-saturday-program-3",defaultText:"09:00 Start",tag:"p",className:"fonts_xsmall kolmarden-program-entry"}),l.jsx(w,{textKey:"kolmarden-saturday-program-4",defaultText:"15:00 Målet stänger",tag:"p",className:"fonts_xsmall kolmarden-program-entry"}),l.jsx(w,{textKey:"kolmarden-saturday-program-5",defaultText:"16:00 Prisutdelning",tag:"p",className:"fonts_xsmall kolmarden-program-entry"})]})]})}),l.jsx("section",{className:"kolmarden-section kolmarden-bg-3 flex flex_j_E flex_a_C set-03",children:l.jsxs("div",{className:"kolmarden-content trans-background MaxWH flex flex_col flex_j_C",children:[l.jsx(w,{textKey:"kolmarden-registration-title",defaultText:"ANMÄLAN",tag:"p",className:"font_blue fonts_large"}),l.jsx("div",{className:"font_blue kolmarden-text-block",children:l.jsx(w,{textKey:"kolmarden-registration-text",defaultText:"Anmälan görs via RaceID. Klicka på knappen nedan för att komma till anmälningssidan.",tag:"p"})}),l.jsxs("div",{className:"kolmarden-registration-info font_blue",children:[l.jsxs("div",{className:"kolmarden-registration-column",children:[l.jsx(w,{textKey:"kolmarden-registration-early-title",defaultText:"ORDINARIE ANMÄLAN",tag:"p",className:"fonts_small kolmarden-fee-title"}),l.jsx(w,{textKey:"kolmarden-registration-early-dates",defaultText:"t.o.m. 31 augusti 2024",tag:"p",className:"fonts_xsmall kolmarden-date-entry"}),l.jsx(w,{textKey:"kolmarden-registration-early-fee",defaultText:"1 495 kr / lag",tag:"p",className:"fonts_xsmall kolmarden-fee-entry"})]}),l.jsxs("div",{className:"kolmarden-registration-column",children:[l.jsx(w,{textKey:"kolmarden-registration-late-title",defaultText:"SEN ANMÄLAN",tag:"p",className:"fonts_small kolmarden-fee-title"}),l.jsx(w,{textKey:"kolmarden-registration-late-dates",defaultText:"1 september - 20 september 2024",tag:"p",className:"fonts_xsmall kolmarden-date-entry"}),l.jsx(w,{textKey:"kolmarden-registration-late-fee",defaultText:"1 795 kr / lag",tag:"p",className:"fonts_xsmall kolmarden-fee-entry"})]}),l.jsxs("div",{className:"kolmarden-registration-column",children:[l.jsx(w,{textKey:"kolmarden-registration-onsite-title",defaultText:"EFTERANMÄLAN",tag:"p",className:"fonts_small kolmarden-fee-title"}),l.jsx(w,{textKey:"kolmarden-registration-onsite-dates",defaultText:"21 september - 27 september 2024",tag:"p",className:"fonts_xsmall kolmarden-date-entry"}),l.jsx(w,{textKey:"kolmarden-registration-onsite-fee",defaultText:"1 995 kr / lag",tag:"p",className:"fonts_xsmall kolmarden-fee-entry"})]})]}),l.jsxs("div",{className:"kolmarden-text-block font_blue",children:[l.jsx(w,{textKey:"kolmarden-registration-includes",defaultText:"I anmälningsavgiften ingår:",tag:"p",className:"fonts_small"}),l.jsx(w,{textKey:"kolmarden-registration-includes-list",defaultText:"Kartor, nummerlappar, tidtagningschip, vätskekontroller under loppet, enklare mat efter målgång, sjukvård och säkerhet under loppet.",tag:"p",className:"fonts_xsmall kolmarden-time-entry"})]}),l.jsx("a",{href:"https://raceid.com/sv/races/13014/about",target:"_blank",rel:"noopener noreferrer",className:"button-2 kolmarden-button-align flex flex_s",children:l.jsx(w,{textKey:"kolmarden-anmalan-button2",defaultText:"ANMÄLAN",tag:"span"})})]})}),l.jsxs("section",{className:"kolmarden-section kolmarden-bg-4 flex flex_j_R flex_a_C set-03",children:[l.jsxs("div",{className:"kolmarden-content trans-background MaxWH flex flex_col flex_j_C",children:[l.jsx(w,{textKey:"kolmarden-accommodation-title",defaultText:"ÖVERNATTNING OCH MAT",tag:"p",className:"font_blue fonts_large"}),l.jsxs("div",{className:"font_blue kolmarden-text-block",children:[l.jsx(w,{textKey:"kolmarden-accommodation-text",defaultText:"Under tävlingshelgen bor du smidigt på First Camp Kolmården – Norrköping med krypavstånd från start- och målgången. Som tävlingsdeltagare får du dessutom 25% rabatt på stugor och camping när du bokar online.",tag:"p"}),l.jsx(w,{textKey:"kolmarden-discount-code",defaultText:"Rabattkod: AIMCHALLENGE25",tag:"p",className:"fonts_small"}),l.jsx(w,{textKey:"kolmarden-discount-dates",defaultText:"23-29 september 2024",tag:"p",className:"fonts_small"}),l.jsx(w,{textKey:"kolmarden-discount-note1",defaultText:"Endast BAS-bokningar",tag:"p",className:"fonts_small"}),l.jsx(w,{textKey:"kolmarden-discount-note2",defaultText:"Boka online på firstcamp.se",tag:"p",className:"fonts_small"}),l.jsx("div",{className:"kolmarden-button-align",children:l.jsx("a",{href:"https://firstcamp.se",target:"_blank",rel:"noopener noreferrer",className:"kolmarden-link",children:l.jsx(w,{textKey:"kolmarden-book-here",defaultText:"Boka här",tag:"span"})})})]}),l.jsxs("div",{className:"font_blue kolmarden-text-block",children:[l.jsx("p",{children:l.jsx(w,{textKey:"kolmarden-other-accommodation",defaultText:"Övriga boendealternativ finns att hitta här.",tag:"span"})}),l.jsx("p",{children:l.jsx(w,{textKey:"kolmarden-food-tips",defaultText:"Tips på ställen att äta i samband med ditt besök i Norrköping/Kolmården.",tag:"span"})}),l.jsx("p",{children:l.jsx(w,{textKey:"kolmarden-other-activities",defaultText:"Här kan du hitta inspiration på övriga saker att se och göra under ditt besök i Norrköping/Kolmården.",tag:"span"})})]})]}),l.jsx("div",{className:"kolmarden-spacer MaxWH"})]})]}),lI=()=>l.jsxs("div",{className:"MaxWH location",children:[l.jsx("section",{className:"page_01 dynamic-background flex flex_col flex_j_E",children:l.jsx("div",{className:"trans-background page_01box flex flex_col flex_j_SA",children:l.jsx("p",{className:"font_blue fonts_huge",children:"AIM CHALLENGE TRIPPELN"})})}),l.jsxs("section",{className:"trippeln-section trippeln-bg",style:{minHeight:"130vh"},children:[l.jsx("div",{className:"trippeln-content trans-background",children:l.jsxs("div",{className:"font_blue",children:[l.jsx("p",{className:"fonts_medium",children:"Trippeln är en tävling i tävlingen där de som deltar i minst tre av årets deltävlingar är med och tävlar om den mycket hedervärda titeln Vinnare av AIM Challenge Trippeln!"}),l.jsx("br",{}),l.jsx("p",{children:"AIM Challenge Trippeln ersätter Landskampen som sedan 2010 har varit en tävling i tävlingen för de som genomfört AIM Challenge både i Lindvallen och Hemsedal. En tävling där det tävlats för antingen Sverige eller Norge, där det vinnande landet har hyllats och den som bidragit mest till sitt land har prisats."}),l.jsx("br",{}),l.jsx("p",{children:"Med AIM Challenge Trippeln lägger vi ner stridsyxan mellan Sverige och Norge och gör det därmed möjligt att även köra mixade lag mellan olika nationer utan att detta skapar en konflikt."}),l.jsx("br",{}),l.jsx("p",{className:"fonts_medium",children:"Hur går AIM Challenge Trippeln till:"}),l.jsx("br",{}),l.jsx("p",{children:"AIM Challenge Trippeln är en tävling i tävlingen för de lag som deltar på minst tre deltävlingar under ett och samma år. Tävlingarna som ingår är Ulricehamn, Sälen, Hemsedal och Kolmården. Det är fritt för laget att välja om ni önskar att delta i 3- eller 6-timmars tävlingen i Ulricehamn och Kolmården, båda anses att vara likvärdiga för Trippeln."}),l.jsx("br",{}),l.jsx("p",{children:"Vid anmälan till Trippeln blir man per automatik anmäld till alla fyra deltävlingar och väljer själv om man vill delta i tre eller fyra tävlingar. Priset för att anmäla sig till trippeln är rabatterat och blir billigare redan vid start i tre deltävlingar. Skulle ett lag delta i alla fyra deltävlingarna så räknas de tre bästa resultaten till Trippeln."}),l.jsx("br",{}),l.jsx("p",{children:"Det gäller att samla så många poäng som möjligt under årets tävlingar där varje lag får räkna in sina tre bästa resultat från det gångna året. Vinnaren av AIM Challenge Trippeln kommer att utses genom ett poängsystem som bygger på hur många poäng laget fått procentuellt i förhållande till vinnarlaget i respektive klass. Varje lag kommer då få en poängsumma mellan 1 och 100 per tävling och efter alla deltävlingarna kommer dessa poäng att adderas och det lag med högst sammanlagda poäng kommer att stå på prispallen! Skulle två lag få samma sammanlagda poäng så kommer vi se på placeringar i de enskilda loppen för att utse en vinnare."}),l.jsx("br",{}),l.jsx("p",{children:"Vid anmälan till AIM Challenge Trippeln så anmäler sig laget till alla fyra deltävlingarna, varav minst tre måste genomföras för att få ett resultat i Trippeln. Ett lag består av två personer, men om någon i laget skulle få förhinder inför någon av tävlingarna så gäller följande: För att resultatet i Trippeln skall bli godkänt så måste minst en i laget delta i alla tre tävlingarna, samt att deltagare 2 deltar vid minst två deltävlingar. Det vill säga att det är möjligt att ta in en reserv under en av deltävlingarna och fortfarande tävla som lag om den hedervärda titeln! I det fall deltagare 1 tävlat med tre olika lagkompisar under året är det enbart den som deltagit vid alla tre tävlingarna som kommer att premieras."}),l.jsx("br",{}),l.jsx("p",{children:"Det är inte möjligt att sälja sin startplats i Trippeln vidare för den tävling som laget eventuellt inte deltar i."})]})}),l.jsx("div",{className:"trippeln-spacer"})]}),l.jsx("section",{className:"ulric-button-section-bg flex flex_j_C flex_a_C",children:l.jsx("a",{href:"https://raceid.com/sv/races/13016/about",target:"_blank",rel:"noopener noreferrer",className:"ulric-button flex flex_j_C flex_a_C",children:l.jsx("p",{className:"font_white fonts_medium",children:"TA MIG TILL ANMÄLAN"})})})]}),ym=({onClose:n,onUploadSuccess:e,years:t=["2023","2022","2021","2020","2019","2018","2017","2016","2015"],categories:r=["Herrar","Damer","Mixed"],durations:s=["3 timmar","6 timmar","12 timmar","24 timmar"],locations:i=["Ulricehamn","Borås","Göteborg","Jönköping","Stockholm"],isAdmin:o,year:c})=>{const[u,d]=A.useState("Ulricehamn"),[m,g]=A.useState(c||"2023"),[_,b]=A.useState("Herrar"),[T,P]=A.useState("3 timmar"),[N,D]=A.useState(null),[C,L]=A.useState(""),[O,V]=A.useState(!1),{currentUser:H}=an(),I=y=>{y.target.files[0]&&D(y.target.files[0])},x=async y=>{if(y.preventDefault(),!N){L("Please select a file to upload");return}if(!H){L("You must be logged in to upload results");return}V(!0),L("");try{const k=`${m}_${_}_${T}_${Date.now()}_${N.name}`,E=Pi(Oi,`results/${k}`);await IT(E,N);const R=await il(E),v={year:parseInt(m),location:u,category:_,duration:T,fileUrl:R,fileName:N.name,uploadedAt:new Date().toISOString()},oe=en(Uo(St,"results"));await Zr(oe,v),D(null),e&&e(),n()}catch(k){console.error("Error uploading result:",k),L("Failed to upload result. Please try again.")}finally{V(!1)}};return l.jsx("div",{className:"result-upload-modal-overlay",children:l.jsxs("div",{className:"result-upload-modal",children:[l.jsxs("div",{className:"result-upload-modal-header",children:[l.jsx("h2",{children:"Ladda upp resultat"}),l.jsx("button",{className:"result-upload-modal-close",onClick:n,children:"×"})]}),l.jsx("div",{className:"result-upload-modal-body",children:l.jsxs("form",{className:"result-upload-modal-form",onSubmit:x,children:[l.jsxs("div",{className:"result-upload-modal-field",children:[l.jsx("label",{children:"Plats"}),l.jsx("select",{className:"result-upload-modal-select",value:u,onChange:y=>d(y.target.value),children:i.map((y,k)=>l.jsx("option",{value:y,children:y},k))})]}),l.jsxs("div",{className:"result-upload-modal-field",children:[l.jsx("label",{children:"År"}),l.jsx("select",{className:"result-upload-modal-select",value:m,onChange:y=>g(y.target.value),children:t.map((y,k)=>l.jsx("option",{value:y,children:y},k))})]}),l.jsxs("div",{className:"result-upload-modal-field",children:[l.jsx("label",{children:"Kategori"}),l.jsx("select",{className:"result-upload-modal-select",value:_,onChange:y=>b(y.target.value),children:r.map((y,k)=>l.jsx("option",{value:y,children:y},k))})]}),l.jsxs("div",{className:"result-upload-modal-field",children:[l.jsx("label",{children:"Distans"}),l.jsx("select",{className:"result-upload-modal-select",value:T,onChange:y=>P(y.target.value),children:s.map((y,k)=>l.jsx("option",{value:y,children:y},k))})]}),l.jsxs("div",{className:"result-upload-modal-field",children:[l.jsx("label",{children:"Fil"}),l.jsx("input",{type:"file",className:"result-upload-modal-file-input",onChange:I,accept:".pdf,.doc,.docx,.xls,.xlsx,.csv,.txt"})]}),C&&l.jsx("div",{className:"result-upload-modal-error",children:C}),l.jsxs("div",{className:"result-upload-modal-actions",children:[l.jsx("button",{type:"button",className:"result-upload-modal-cancel",onClick:n,children:"Avbryt"}),l.jsx("button",{type:"submit",className:"result-upload-modal-submit",disabled:O,children:O?"Laddar upp...":"Ladda upp"})]})]})})]})})},cI=()=>{const[n,e]=A.useState("2023"),[t,r]=A.useState("Herrar"),[s,i]=A.useState("3 timmar"),[o,c]=A.useState([]),[u,d]=A.useState(!0),[m,g]=A.useState(null),[_,b]=A.useState(!1),{currentUser:T}=an(),P=(T==null?void 0:T.role)==="admin";console.log("Current User:",T),console.log("Is Admin:",P);const D=(()=>{const H=[];for(let I=2010;I<=2045;I++)H.push(I.toString());return H.sort((I,x)=>x-I)})();A.useEffect(()=>{(async()=>{d(!0);try{const I=Uo(St,"results"),x=await mf(I),y=[];x.forEach(k=>{const E=k.data();(n==="all"||E.year.toString()===n)&&(t==="all"||E.category===t)&&(s==="all"||E.duration===s)&&y.push(E)}),c(y),g(null)}catch(I){console.error("Error fetching results:",I),g("Failed to load results. Please try again later."),c([])}finally{d(!1)}})()},[n,t,s]);const C=H=>{e(H.target.value)},L=H=>{r(H.target.value)},O=H=>{i(H.target.value)},V=()=>{window.location.reload()};return o.filter(H=>(!t||H.category===t)&&(!s||H.duration===s)),l.jsxs("div",{className:"MaxWH location",children:[l.jsx("div",{className:"set-03",style:{height:"120px"}}),l.jsx("section",{className:"page_01 dynamic-background flex flex_col flex_j_E set-03",children:l.jsx("div",{className:"trans-background page_01box flex flex_col flex_j_SA",children:l.jsx("p",{className:"font_blue fonts_huge",children:"RESULTAT"})})}),l.jsx("section",{className:"set-03",style:{minHeight:"130vh",padding:"2rem"},children:l.jsxs("div",{className:"trans-background",style:{padding:"2rem",borderRadius:"8px"},children:[l.jsxs("div",{style:{marginBottom:"2rem"},className:"flex flex_j_C flex_a_C",children:[l.jsxs("select",{value:n,onChange:C,style:{padding:"0.5rem 1rem",margin:"0 1rem",background:"white",color:"rgb(56, 76, 135)",border:"2px solid rgb(56, 76, 135)",borderRadius:"4px"},children:[l.jsx("option",{value:"all",children:"Alla År"}),D.map(H=>l.jsx("option",{style:{background:"white",color:"rgb(56, 76, 135)"},value:H,children:H},H))]}),l.jsxs("select",{value:t,onChange:L,style:{padding:"0.5rem 1rem",margin:"0 1rem",background:"white",color:"rgb(56, 76, 135)",border:"2px solid rgb(56, 76, 135)",borderRadius:"4px"},children:[l.jsx("option",{style:{background:"white",color:"rgb(56, 76, 135)"},value:"all",children:"Alla Kategorier"}),l.jsx("option",{style:{background:"white",color:"rgb(56, 76, 135)"},value:"Herrar",children:"Herrar"}),l.jsx("option",{style:{background:"white",color:"rgb(56, 76, 135)"},value:"Damer",children:"Damer"}),l.jsx("option",{style:{background:"white",color:"rgb(56, 76, 135)"},value:"Mixed",children:"Mixed"})]}),l.jsxs("select",{value:s,onChange:O,style:{padding:"0.5rem 1rem",margin:"0 1rem",background:"white",color:"rgb(56, 76, 135)",border:"2px solid rgb(56, 76, 135)",borderRadius:"4px"},children:[l.jsx("option",{style:{background:"white",color:"rgb(56, 76, 135)"},value:"all",children:"Alla Rutter"}),l.jsx("option",{style:{background:"white",color:"rgb(56, 76, 135)"},value:"3 timmar",children:"3 timmar"}),l.jsx("option",{style:{background:"white",color:"rgb(56, 76, 135)"},value:"6 timmar",children:"6 timmar"})]}),T&&l.jsx("button",{onClick:()=>b(!0),className:"result-upload-button",children:"Ladda upp resultat"})]}),l.jsx("div",{className:"race-results-container",children:u?l.jsx("p",{children:"Loading results..."}):m?l.jsx("p",{className:"error-message",children:m}):o.length===0?l.jsx("p",{children:"No results found for the selected filters. Please try different filters or upload new results."}):l.jsx("div",{className:"results-list",children:o.map(H=>l.jsxs("div",{className:"result-item",children:[l.jsxs("div",{className:"result-info",children:[l.jsxs("h3",{children:[H.location," - ",H.year]}),l.jsxs("p",{children:["Category: ",H.category]}),l.jsxs("p",{children:["Duration: ",H.duration]}),l.jsxs("p",{children:["Uploaded: ",new Date(H.uploadedAt).toLocaleDateString()]})]}),l.jsx("div",{className:"result-actions",children:l.jsxs("a",{href:H.fileUrl,target:"_blank",rel:"noopener noreferrer",className:"result-download-link",children:["View/Download ",H.fileName]})})]},H.id))})})]})}),_&&l.jsx(ym,{isOpen:_,onClose:()=>b(!1),onUploadSuccess:V,year:n})]})},uI=()=>{const{currentUser:n}=an(),[e,t]=A.useState("all"),[r,s]=A.useState("all"),[i,o]=A.useState("all"),[c,u]=A.useState([]),[d,m]=A.useState(!0),[g,_]=A.useState(!1),[b,T]=A.useState(""),P=(n==null?void 0:n.role)==="admin",N=[2025,2024,2023,2022,2021,2020,2019,2018],D=["Herrar","Damer","Mixed"],C=["3 timmar","6 timmar"],L=["Ulricehamn","Sälen","Hemsedal","Kolmården"];A.useEffect(()=>{O()},[e,r,i]);const O=()=>{try{m(!0),T("");const E=localStorage.getItem("raceResults");let R=E?JSON.parse(E):[];e!=="all"&&(R=R.filter(v=>v.year===parseInt(e))),r!=="all"&&(R=R.filter(v=>v.category===r)),i!=="all"&&(R=R.filter(v=>v.duration===i)),u(R)}catch(E){console.error("Error fetching results:",E),T("Failed to load results. Please try again later.")}finally{m(!1)}},V=E=>{if(window.confirm("Are you sure you want to delete this result?"))try{const R=localStorage.getItem("raceResults");let v=R?JSON.parse(R):[];v=v.filter(oe=>oe.id!==E),localStorage.setItem("raceResults",JSON.stringify(v)),O()}catch(R){console.error("Error deleting result:",R),T("Failed to delete result. Please try again.")}},H=()=>{_(!0)},I=()=>{_(!1)},x=()=>{O()},y=E=>c.filter(R=>R.location===E),k=E=>{const R={};return E.forEach(v=>{const oe=`${v.year}-${v.category}-${v.duration}`;R[oe]=v}),R};return l.jsxs("div",{className:"results-container",children:[l.jsx("div",{className:"results-top-spacer"}),l.jsx("section",{className:"results-header-section",children:l.jsxs("div",{className:"results-header-content",children:[l.jsx("h1",{className:"results-title",children:"RESULTAT"}),l.jsx("p",{className:"results-description",children:"Här hittar du resultaten från våra tävlingar. Välj år, kategori och distans för att filtrera resultaten."})]})}),l.jsxs("section",{className:"results-filters-section",children:[l.jsxs("div",{className:"results-filters",children:[l.jsxs("select",{value:e,onChange:E=>t(E.target.value),className:"results-filter-select",children:[l.jsx("option",{value:"all",children:"Alla År"}),N.map(E=>l.jsx("option",{value:E,children:E},E))]}),l.jsxs("select",{value:r,onChange:E=>s(E.target.value),className:"results-filter-select",children:[l.jsx("option",{value:"all",children:"Alla Kategorier"}),D.map(E=>l.jsx("option",{value:E,children:E},E))]}),l.jsxs("select",{value:i,onChange:E=>o(E.target.value),className:"results-filter-select",children:[l.jsx("option",{value:"all",children:"Alla Distanser"}),C.map(E=>l.jsx("option",{value:E,children:E},E))]})]}),l.jsx("div",{className:"results-upload-section",children:l.jsx("button",{onClick:H,className:"results-upload-button",style:{padding:"10px 20px",backgroundColor:"rgb(56, 76, 135)",color:"white",border:"none",borderRadius:"4px",fontSize:"1rem",cursor:"pointer",display:"block",margin:"0 auto"},children:"Ladda upp resultat"})})]}),b&&l.jsx("div",{className:"results-error",children:b}),d?l.jsx("div",{className:"results-loading",children:"Laddar resultat..."}):l.jsx("section",{className:"results-content-section",children:l.jsx("div",{className:"results-grid",children:L.map(E=>{const R=y(E),v=k(R);return l.jsxs("div",{className:"results-location-card",children:[l.jsx("h2",{className:"results-location-title",children:E}),Object.keys(v).length>0?l.jsx("div",{className:"results-list",children:Object.entries(v).map(([oe,me])=>l.jsxs("div",{className:"results-item",children:[l.jsx("a",{href:me.fileUrl,target:"_blank",rel:"noopener noreferrer",className:"results-link",children:l.jsxs("div",{className:"results-info",children:[l.jsx("span",{className:"results-year",children:me.year}),l.jsx("span",{className:"results-category",children:me.category}),l.jsx("span",{className:"results-duration",children:me.duration})]})}),P&&l.jsx("button",{onClick:()=>V(me.id),className:"results-delete-button",children:"Ta bort"})]},oe))}):l.jsxs("div",{className:"results-empty",children:["Inga resultat tillgängliga för ",E," med valda filter."]})]},E)})})}),g&&l.jsx(ym,{onClose:I,onUploadSuccess:x,isAdmin:P,locations:L,years:N,categories:D,durations:C})]})},hI=()=>{const[n,e]=A.useState(null),[t,r]=A.useState([]),[s,i]=A.useState(1),o=8,[c,u]=A.useState({}),d=A.useMemo(()=>["/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_025.jpg","/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_049.jpg","/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_057.jpg","/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_065.jpg","/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_094.jpg","/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_113.jpg","/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_138.jpg","/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_150.jpg","/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_202.jpg","/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_209.jpg","/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_213.jpg","/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_235.jpg","/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_246.jpg","/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_265.jpg","/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_352.jpg","/AimRV/images/EE-AIMChallenge24-Uhamn-0132-high.jpg","/AimRV/images/EE-AIMChallenge24-Uhamn-0136-high.jpg","/AimRV/images/EE-AIMChallenge24-Uhamn-0171-high.jpg","/AimRV/images/EE-AIMChallenge24-Uhamn-0405-high.jpg","/AimRV/images/Kolmarden_1.jpg","/AimRV/images/Kolmarden_2.jpg"],[]),m=A.useCallback(()=>{const T=(s-1)*o,P=s*o,N=d.slice(T,P);r(D=>[...D,...N]),i(D=>D+1)},[s,d,o]);A.useEffect(()=>{m()},[m]),A.useEffect(()=>{const T=()=>{window.innerHeight+document.documentElement.scrollTop>=document.documentElement.offsetHeight-100&&(s-1)*o<d.length&&m()};return window.addEventListener("scroll",T),()=>window.removeEventListener("scroll",T)},[m,s,d.length,o]),A.useEffect(()=>{if(n!==null){const T=new Image;T.src=t[n],T.onload=()=>{u(P=>({...P,[n]:!0}))}}},[n,t]);const g=T=>{e(n===T?null:T)},b=(()=>{const T=[];let P=[],N=4;return t.forEach((D,C)=>{P.push({image:D,index:C}),P.length===N&&(T.push(P),P=[],N=N===4?3:4)}),P.length>0&&T.push(P),T})();return l.jsxs("div",{children:[l.jsx("div",{style:{height:"120px"}}),l.jsxs("div",{className:"gallery-container",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.1rem",padding:"0.25rem",position:"relative"},children:[b.map((T,P)=>l.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"3rem",width:"100%",marginBottom:"-20px",paddingLeft:T.length===3?"10%":"0",paddingRight:T.length===3?"10%":"0"},children:T.map(({image:N,index:D})=>{const C=n===D;return l.jsx("div",{onClick:()=>g(D),style:{width:C?"80vw":"250px",height:C?"80vh":"250px",transition:"all 0.5s ease",cursor:"pointer",position:C?"fixed":"relative",top:C?"50%":"auto",left:C?"50%":"auto",transform:C?"translate(-50%, -50%) rotate(0deg)":"rotate(45deg) scale(0.9)",zIndex:C?1e3:1,border:"2px solid #00a6fb",borderRadius:"8px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 166, 251, 0.3)",margin:"0.1rem 1.5rem"},children:l.jsx("img",{src:N,alt:`Gallery image ${D+1}`,loading:"lazy",width:C?"auto":"250",height:C?"auto":"250",style:{width:"100%",height:"100%",objectFit:"cover",transform:C?"rotate(0deg) scale(1)":"rotate(-45deg) scale(1.5)"}})},D)})},P)),n!==null&&l.jsx("div",{onClick:()=>e(null),style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.8)",zIndex:999}}),t.length<d.length&&l.jsx("div",{style:{width:"100%",textAlign:"center",padding:"2rem"},children:l.jsx("button",{onClick:m,style:{padding:"0.75rem 1.5rem",backgroundColor:"#00a6fb",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"1rem",fontWeight:"bold"},children:"Load More Images"})})]}),l.jsx("div",{style:{height:"80px"}})]})},dI=()=>{const[n,e]=A.useState(0),[t,r]=A.useState(!1),s=A.useRef([]),i=[{id:1,src:"/videos/AIM nr 1 Formula 16x9.mov",title:"AIM Challenge Formula",description:"Highlights from the AIM Challenge Formula event"},{id:2,src:"/videos/AIM nr 1 Formula 16x9.mov",title:"AIM Challenge Highlights",description:"More exciting moments from the AIM Challenge"},{id:3,src:"/videos/AIM nr 1 Formula 16x9.mov",title:"AIM Challenge Recap",description:"A recap of the amazing AIM Challenge events"}];A.useEffect(()=>{s.current=s.current.slice(0,i.length)},[i.length]);const o=d=>{s.current.forEach((m,g)=>{g!==d&&m&&m.pause()}),r(!0),e(d)},c=()=>{e(d=>(d+1)%i.length)},u=()=>{e(d=>(d-1+i.length)%i.length)};return l.jsxs("div",{className:"video-carousel-container",style:{padding:"80px 0 40px 0",backgroundColor:"#f0f8ff",borderTop:"1px solid #e0e0e0",width:"100%",maxWidth:"100%"},children:[l.jsx("h2",{style:{textAlign:"center",marginBottom:"30px",color:"#00a6fb",fontSize:"2rem"},children:"AIM Challenge Videos"}),l.jsxs("div",{style:{position:"relative",width:"100%",margin:"0 auto",overflow:"hidden"},children:[l.jsx("button",{onClick:u,style:{position:"absolute",left:"10px",top:"50%",transform:"translateY(-50%)",zIndex:10,background:"rgba(0, 166, 251, 0.7)",color:"white",border:"none",borderRadius:"50%",width:"50px",height:"50px",fontSize:"24px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},"aria-label":"Previous video",children:"<"}),l.jsx("button",{onClick:c,style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)",zIndex:10,background:"rgba(0, 166, 251, 0.7)",color:"white",border:"none",borderRadius:"50%",width:"50px",height:"50px",fontSize:"24px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},"aria-label":"Next video",children:">"}),l.jsx("div",{style:{display:"flex",transition:"transform 0.5s ease",transform:`translateX(${n*-100}%)`,width:"100%",position:"relative"},children:i.map((d,m)=>l.jsx("div",{style:{flex:"0 0 100%",padding:"0 20px",boxSizing:"border-box",width:"100%"},children:l.jsxs("div",{style:{background:"#fff",borderRadius:"8px",overflow:"hidden",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)",maxWidth:"1200px",margin:"0 auto"},children:[l.jsx("div",{style:{position:"relative",paddingTop:"56.25%"},children:l.jsx("video",{ref:g=>s.current[m]=g,src:d.src,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover"},controls:!0,onPlay:()=>o(m),onPause:()=>r(!1)})}),l.jsxs("div",{style:{padding:"20px"},children:[l.jsx("h3",{style:{margin:"0 0 10px 0",color:"#00a6fb",fontSize:"1.5rem"},children:d.title}),l.jsx("p",{style:{margin:0,color:"#333",lineHeight:1.6},children:d.description})]})]})},d.id))}),l.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"20px"},children:i.map((d,m)=>l.jsx("button",{onClick:()=>e(m),style:{width:"12px",height:"12px",borderRadius:"50%",margin:"0 5px",background:m===n?"#00a6fb":"#ccc",border:"none",cursor:"pointer"}},m))})]})]})},ui=({imageKey:n,defaultImage:e,className:t,children:r,style:s={},backgroundPosition:i="center",backgroundSize:o="cover",backgroundRepeat:c="no-repeat"})=>{const{isAdmin:u}=on(),[d,m]=A.useState(!1),[g,_]=A.useState(e),[b,T]=A.useState(""),[P,N]=A.useState(!1),[D,C]=A.useState(null),L=A.useRef(null);A.useEffect(()=>{(async()=>{try{N(!0);const R=await Xw();R&&R[n]?_(R[n]):_(e),C(null)}catch(R){console.error("Error fetching background image:",R),C("Failed to load background image. Using default.");try{const v=localStorage.getItem("backgroundImages");if(v){const oe=JSON.parse(v);oe[n]?_(oe[n]):_(e)}else _(e)}catch(v){console.error("Error with localStorage fallback:",v),_(e)}}finally{N(!1)}})()},[n,e]);const O=()=>{m(!0),T(g)},V=E=>{T(E.target.value)},H=async E=>{const R=E.target.files[0];if(R)try{N(!0);const v=new FileReader;v.onloadend=async()=>{try{const oe=await Yw(v.result,`${n}_${Date.now()}`);await sh(n,oe),_(oe),T(oe);try{const me=localStorage.getItem("backgroundImages")||"{}",de=JSON.parse(me);de[n]=oe,localStorage.setItem("backgroundImages",JSON.stringify(de))}catch(me){console.error("Error updating localStorage:",me)}C(null)}catch(oe){console.error("Error uploading image:",oe),C("Failed to upload image. Please try again.")}finally{N(!1)}},v.readAsDataURL(R)}catch(v){console.error("Error reading file:",v),C("Failed to read file. Please try again."),N(!1)}},I=async()=>{if(!y(b)){alert("Please enter a valid URL");return}try{N(!0),await sh(n,b),_(b);try{const E=localStorage.getItem("backgroundImages")||"{}",R=JSON.parse(E);R[n]=b,localStorage.setItem("backgroundImages",JSON.stringify(R))}catch(E){console.error("Error updating localStorage:",E)}m(!1),C(null)}catch(E){console.error("Error saving background image:",E),C("Failed to save background image. Please try again.");try{const R=localStorage.getItem("backgroundImages")||"{}",v=JSON.parse(R);v[n]=b,localStorage.setItem("backgroundImages",JSON.stringify(v)),_(b),m(!1)}catch(R){console.error("Error with localStorage fallback:",R)}}finally{N(!1)}},x=()=>{m(!1),T(g)},y=E=>{try{return new URL(E),!0}catch{return!1}},k={...s,backgroundImage:`url(${g})`,backgroundPosition:i,backgroundSize:o,backgroundRepeat:c,position:"relative"};return l.jsxs("div",{className:t,style:k,children:[r,u&&!d&&l.jsx("button",{onClick:O,className:"edit-background-button",children:"Edit Background"}),u&&d&&l.jsx("div",{className:"background-editor",children:l.jsxs("div",{className:"background-editor-content",children:[l.jsx("h3",{children:"Edit Background Image"}),l.jsxs("div",{className:"background-editor-input-group",children:[l.jsx("label",{children:"Image URL:"}),l.jsx("input",{type:"text",value:b,onChange:V,placeholder:"Enter image URL"})]}),l.jsxs("div",{className:"background-editor-input-group",children:[l.jsx("label",{children:"Or upload image:"}),l.jsx("input",{type:"file",ref:L,onChange:H,accept:"image/*"})]}),P&&l.jsx("div",{className:"loading-indicator",children:"Loading..."}),D&&l.jsx("div",{className:"error-message",children:D}),l.jsxs("div",{className:"background-editor-actions",children:[l.jsx("button",{onClick:x,children:"Cancel"}),l.jsx("button",{onClick:I,disabled:P,children:"Save"})]})]})})]})},fI=()=>l.jsxs("div",{className:"om-oss-container",children:[l.jsx("div",{className:"om-oss-header page_01 dynamic-background flex flex_col flex_j_E",children:l.jsx(ui,{backgroundKey:"om-oss-header-bg",defaultSrc:"https://via.placeholder.com/1920x600?text=Om+Oss+Header",className:"om-oss-background-image",children:l.jsx("div",{className:"om-oss-header-content",children:l.jsx("div",{className:"trans-background page_01box flex flex_col flex_j_SA",children:l.jsx("div",{className:"om-oss-title flex flex_j_C flex_a_C",children:l.jsx(w,{textKey:"om-oss-title",defaultText:"OM OSS",tag:"p",className:"font_blue fonts_huge"})})})})})}),l.jsx("section",{className:"om-oss-section flex flex_j_C flex_a_C set-03",children:l.jsx("div",{className:"om-oss-content MaxWH flex flex_col flex_j_C",children:l.jsxs("div",{className:"om-oss-content-wrapper",children:[l.jsx(w,{textKey:"om-oss-title-1",defaultText:"Vad är AIM Challenge?",tag:"h2",className:"fonts_large om-oss-title"}),l.jsx(w,{textKey:"om-oss-text-1",defaultText:"AIM Challenge är en multisporttävling som arrangeras i Åre, Sverige. Tävlingen går ut på att ta sig runt en bana med hjälp av karta och kompass. Längs banan finns kontroller som ska besökas i rätt ordning.",tag:"p",className:"fonts_small om-oss-text"}),l.jsx(w,{textKey:"om-oss-text-2",defaultText:"​",tag:"p",className:"fonts_small om-oss-text"}),l.jsx(w,{textKey:"om-oss-text-3",defaultText:"Tävlingen arrangeras av AIM Challenge AB och har funnits sedan 2004. Tävlingen har utvecklats under åren och är idag en av Sveriges största multisporttävlingar.",tag:"p",className:"fonts_small om-oss-text"}),l.jsx(w,{textKey:"om-oss-text-4",defaultText:"​",tag:"p",className:"fonts_small om-oss-text"}),l.jsx(w,{textKey:"om-oss-text-5",defaultText:"AIM Challenge är en tävling för alla. Oavsett om du är elit eller motionär finns det en klass för dig. Tävlingen är uppdelad i olika klasser beroende på svårighetsgrad och längd.",tag:"p",className:"fonts_small om-oss-text"}),l.jsx(w,{textKey:"om-oss-text-6",defaultText:"​",tag:"p",className:"fonts_small om-oss-text"}),l.jsx(w,{textKey:"om-oss-text-7",defaultText:"Tävlingen går ut på att ta sig runt en bana med hjälp av karta och kompass. Längs banan finns kontroller som ska besökas i rätt ordning. Tävlingen innehåller olika moment som löpning, cykling, paddling, simning och klättring.",tag:"p",className:"fonts_small om-oss-text"}),l.jsx(w,{textKey:"om-oss-text-8",defaultText:"​",tag:"p",className:"fonts_small om-oss-text"})]})})}),l.jsx("div",{className:"om-oss-background-container",children:l.jsx(ui,{backgroundKey:"om-oss-background-image",defaultSrc:"https://via.placeholder.com/1920x400?text=Background+Image",className:"om-oss-background-image"})}),l.jsx("section",{className:"om-oss-section flex flex_j_C flex_a_C set-03",children:l.jsx("div",{className:"om-oss-content MaxWH flex flex_col flex_j_C",children:l.jsxs("div",{className:"om-oss-content-wrapper",children:[l.jsx(w,{textKey:"om-oss-title-2",defaultText:"Så här är det att vara med i AIM Challenge",tag:"h2",className:"fonts_large om-oss-title"}),l.jsx(w,{textKey:"om-oss-text-9",defaultText:"AIM Challenge är en rolig tävling. Det är oftast det som är det centrala i de deltagarkommentarer vi får både från eliten och motionärerna. Man färdas till största delen med hjälp av sin mountainbike och sina löparskor, men också i klättersele, paddlandes i kanot eller så strippar man helt enkelt och simmar ut till kontroller som är i vattnet.",tag:"p",className:"fonts_small om-oss-text"}),l.jsx(w,{textKey:"om-oss-text-10",defaultText:"​",tag:"p",className:"fonts_small om-oss-text"}),l.jsx(w,{textKey:"om-oss-text-11",defaultText:"Det finns inga krav på förkunskaper om de olika momenten utan vi har kunnig personal vid varje post som innefattas av klättring, firning, simning, paddling. Varje lag genomför tävlingen i sin egen takt och med egen strategi. Visst finns det de lag som satsar allt för att knipa segern och det är det som är det roliga med konceptet. Elit och motionär tävlar på samma villkor på samma bana.",tag:"p",className:"fonts_small om-oss-text"}),l.jsx(w,{textKey:"om-oss-text-12",defaultText:"​",tag:"p",className:"fonts_small om-oss-text"}),l.jsx(w,{textKey:"om-oss-text-13",defaultText:"Våra deltagare är allt ifrån världseliten i multisport som Thule Adventure team, Team Silva, Team Multitude Salomon men också glada motionärer allt från åldrarna 15 till pensionärer. Oavsett ålder och fysiska förutsättningar är detta ett roligt och annorlunda sätt att tävla på.",tag:"p",className:"fonts_small om-oss-text"})]})})}),l.jsxs("section",{id:"page_02",className:"page_02 simple-background flex flex_j_E MaxWH location",children:[l.jsxs("div",{className:"page_02box simple-background flex flex_col flex_j_SB MaxWH location",children:[l.jsxs("div",{className:"trans-background page_02top flex flex_col flex_j_SA MaxWH",children:[l.jsx(w,{textKey:"card-1-title",defaultText:"REGLER",tag:"p",className:"font_blue fonts_medium_B"}),l.jsx(w,{textKey:"card-1-text",defaultText:"Tävlingsregler och information",tag:"p",className:"font_blue fonts_medium"})]}),l.jsx("div",{className:"page_02top flex flex_col flex_j_SA MaxWH Button",children:l.jsx(ce,{to:"/page2",className:"location button-2",children:"Läs mer"})})]}),l.jsxs("div",{className:"page_02box simple-background flex flex_col flex_j_SB MaxWH location",children:[l.jsxs("div",{className:"trans-background page_02top flex flex_col flex_j_SA MaxWH",children:[l.jsx(w,{textKey:"card-2-title",defaultText:"FAQ",tag:"p",className:"font_blue fonts_medium_B"}),l.jsx(w,{textKey:"card-2-text",defaultText:"Vanliga frågor och svar",tag:"p",className:"font_blue fonts_medium"})]}),l.jsx("div",{className:"page_02top flex flex_col flex_j_SA MaxWH Button",children:l.jsx(ce,{to:"/page3",className:"location button-2",children:"Läs mer"})})]}),l.jsxs("div",{className:"page_02box simple-background flex flex_col flex_j_SB MaxWH location",children:[l.jsxs("div",{className:"trans-background page_02top flex flex_col flex_j_SA MaxWH",children:[l.jsx(w,{textKey:"card-3-title",defaultText:"HISTORIEN OM AIM",tag:"p",className:"font_blue fonts_medium_B"}),l.jsx(w,{textKey:"card-3-text",defaultText:"Vår resa sedan 2004",tag:"p",className:"font_blue fonts_medium"})]}),l.jsx("div",{className:"page_02top flex flex_col flex_j_SA MaxWH Button",children:l.jsx(ce,{to:"/page3",className:"location button-2",children:"Läs mer"})})]})]})]}),mI=()=>l.jsxs("div",{className:"flex flex_col regler-container",children:[l.jsx("section",{className:"page_01 dynamic-background flex flex_col flex_j_E",children:l.jsx("div",{className:"trans-background page_01box flex flex_col flex_j_SA",children:l.jsx("div",{className:"om-oss-title flex flex_j_C flex_a_C",children:l.jsx("p",{className:"font_blue fonts_huge font_white",children:"REGLER"})})})}),l.jsx("section",{className:"om-oss-section regler-section flex flex_j_C flex_a_C set-03",style:{paddingTop:"50px",paddingBottom:"50px"},children:l.jsx("div",{className:"om-oss-content MaxWH flex flex_col flex_j_C regler-content-container",children:l.jsxs("div",{className:"regler-content",style:{paddingLeft:"150px",paddingRight:"150px",maxWidth:"80%"},children:[l.jsx("h2",{className:"regler-heading font_white",style:{paddingLeft:"30px",paddingRight:"30px"},children:"LAGET"}),l.jsxs("ul",{className:"regler-list",style:{paddingLeft:"80px",paddingRight:"80px"},children:[l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Åldersgräns 15år/18år"}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Båda deltagarna måste ha olycksförsäkring som täcker olyckor i samband med tävling/idrottsaktiviteter."}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Det är lagets ansvar att se till att de är registrerade i rätt klass."}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Startnummer ska placeras fram på cykel samt synligt på kroppen på båda deltagarna"}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Det är tillåtet att använda GPS men det är alltid kartan som gäller. GPSens kartunderlag stämmer inte alltid överens med den utskrivna AIM kartan."}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Laget ska alltid vara samlade max 20 meter mellan lagmedlemmarna."}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Det är inte tillåtet att ha följebil."})]}),l.jsx("h2",{className:"regler-heading-with-margin font_white",style:{paddingLeft:"30px",paddingRight:"30px"},children:"SÄKERHET"}),l.jsxs("ul",{className:"regler-list",style:{paddingLeft:"80px",paddingRight:"80px"},children:[l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Lagen väljer själva vilka kontroller de klarar att ta baserat på väder, egen färdighet och kunskap."}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Lagen väljer själva vilken väg de vill ta till kontrollerna baserat på väder, egen färdighet och kunskap."}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Trafiken är inte reglerad under tävlingen."}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Trafikregler gäller alltid."}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Första hjälpen kit ska bäras med under hela tävlingen"}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Hjälm ska bäras under all cykling, klättring, bouldering och rappellering"}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Vid olycka är det obligatoriska att hjälpa till."}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Vid allvarlig olycka ring nöd nummer 112 i Sverige och 113 i Norge"}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Vid behov för enklare medicinsk hjälp ring telefonnumret på baksidan av kartan"}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Tävlingsledningens direktiv gäller alltid."})]}),l.jsx("h2",{className:"regler-heading-with-margin font_white",style:{paddingLeft:"30px",paddingRight:"30px"},children:"ÖVRIGT"}),l.jsxs("ul",{className:"regler-list",style:{paddingLeft:"80px",paddingRight:"80px"},children:[l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Elcyklar är ej tillåtet, med undantag för Elcykelklassen i Hemsedal."}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Beroende på kapacitet är det möjligt att använda liften i Hemsedal, lyssna noga på vad speakern ger för information för vad som gäller för årets tävling."}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Deltagare som bryter ska genast meddela tävlingsledningen. Telefonnummer står på kartan."}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Synliga, osynliga och tävlande domare befinner sig i tävlingsområdet och ser till att reglerna följs."}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Regelbrott kan leda till poängavdrag eller diskvalificering"}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Deltagare som vinner priser som lottas ut pga olika händelser eller som dras på startnummer måste närvara på prisutdelningen för att få sitt pris. Är man inte närvarande och ditt namn/lagnamn dras drar vi reservnamn/lagnamn."}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"LINDVALLEN, viadukten mellan Lodgen och Experium är stängd under hela tävlingen."}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Tävlingsledningens beslut går inte att överklaga."}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Kloka människor skräpar inte ner, för alla andra är det förbjudet."}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Respektera privat mark, ta inte genvägar över privata områden"}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Beträda odlad mark är förbjudet. Åkrar som inte har skördats är odlad mark."}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Stäng alla grindar som ni öppnar."}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Visa betande djur respekt genom att stiga av cykeln och gå förbi dem."})]}),l.jsx("h2",{className:"regler-heading-with-margin font_white",style:{paddingLeft:"30px",paddingRight:"30px"},children:"OBLIGATORISK UTRUSTNING"}),l.jsxs("ul",{className:"regler-list",style:{paddingLeft:"80px",paddingRight:"80px"},children:[l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Cykel, utan elmotor med undantag för Elcykelklassen i Hemsedal."}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Cykelhjälm vid cykling"}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Mobiltelefon (1 st per lag)"}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Första hjälpen (1 st per lag)"})]}),l.jsx("h2",{className:"regler-heading-with-margin font_white",style:{paddingLeft:"30px",paddingRight:"30px"},children:"VI REKOMMENDERAR ATT NI ÄVEN HAR MED ER"}),l.jsxs("ul",{className:"regler-list",style:{paddingLeft:"80px",paddingRight:"80px"},children:[l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Förstärkningskläder vid hastigt väderomslag"}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Kompass"}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Vatten i en Camelbak"}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Energy bars eller liknande"}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Klocka"}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Löparskor"}),l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Cykelslang och reparationskit + övriga verktyg, tex en biketool för enklare justeringar"})]}),l.jsx("h2",{className:"regler-heading-with-margin font_white",style:{paddingLeft:"30px",paddingRight:"30px"},children:"AIM CHALLENGE STÅR FÖR"}),l.jsx("ul",{className:"regler-list",style:{paddingLeft:"80px",paddingRight:"80px"},children:l.jsx("li",{className:"fonts_small om-oss-text regler-list-item font_white",children:"Kanot, SUP, sele, rep, hjälm vid firningar/klättring. All utrustning vid bemannade poster finns där klättring etc förekommer."})}),l.jsx("h2",{className:"regler-heading-with-margin font_white",style:{paddingLeft:"30px",paddingRight:"30px"},children:"VILLKOR I FÖRBINDELSE MED ANMÄLAN"}),l.jsx("p",{className:"fonts_small om-oss-text regler-list-item font_white",style:{paddingLeft:"30px",paddingRight:"30px"},children:"Villkor i förbindelse med anmälan"}),l.jsxs("p",{className:"fonts_small om-oss-text regler-contact font_white",style:{paddingLeft:"30px",paddingRight:"30px"},children:["Om du har frågor: ",l.jsx("a",{href:"mailto:info@aimchallenge.com",className:"font_white",children:"info@aimchallenge.com"})]})]})})}),l.jsx("div",{className:"locked-background",style:{height:"50vh",width:"100%"}})]}),pI=({question:n,answer:e})=>{const[t,r]=A.useState(!1),s=()=>{r(!t)};return l.jsxs("div",{className:"faq-item",children:[l.jsxs("div",{className:`faq-question ${t?"active":""}`,onClick:s,children:[l.jsx("h3",{className:"question-text",children:n}),l.jsx("span",{className:"icon",children:t?"▲":"▼"})]}),l.jsx("div",{className:`faq-answer ${t?"open":""}`,children:l.jsx("p",{children:e})})]})},Cs=({title:n,items:e})=>l.jsxs("div",{className:"faq-category",children:[l.jsx("h2",{className:"faq-category-title",children:n}),e.map((t,r)=>l.jsx(pI,{question:t.question,answer:t.answer},r))]}),gI=()=>{const n=[{question:"Jag är nybörjare på multisport, kan jag delta?",answer:"Absolut, det är DU som väljer väg och antal kontroller. Ta 5 kontroller och ha en fin tur på fjället, eller ta 40 och vinn. Alla kan delta efter egen förmåga och ambition."},{question:"Behöver man vara en riktigt stenhård multisportare för att delta?",answer:"Det finns inga krav på förkunskaper om de olika momenten utan vi har kunnig personal vid varje post som innebär klättring, firning, simning etc. I och med AIM-konceptet så tar varje lag tävlingen i sin egen takt och sin egen strategi. Visst finns det de lag som satsar allt för att knipa segern och det är det som är det roliga med konceptet. Elit och motionär tävlar på samma villkor på samma bana."},{question:"Är det olika klasser?",answer:"Dam, Herr och Mix. Elit och motion tävlar i samma klass."},{question:"Vilken åldersgräns gäller?",answer:"Åldersgränsen för AIM Challenge är 15/18 år beroende på tävling och medtävlande. Läs mer här."},{question:"Kan jag ändra information om mitt lag. Tex ändrar lagnamn eller deltagare?",answer:"Ja, logga in på ditt RaceID-konto för att göra ändringar."},{question:"Om jag blir sjuk, får jag tillbaka min anmälningsavgift då?",answer:"Nej. Det går däremot bra att sälja sin startplats till en kompis. Vid försäljning så uppdaterar ni era uppgifter på ditt RaceID-konto. Alternativt ta kontakt med ditt försäkringsbolag för att se vad det täcker."},{question:"Hur vet jag om jag har olycksförsäkring?",answer:"Kontakta ditt försäkringsbolag, de flesta har den redan."}],e=[{question:"Ska jag tävla med löpskor eller cykelskor?",answer:"Det är en fördel att cykla med SPD sko, och det är en fördel att springa med löparskor. Ta med både och!"},{question:"Behöver man ha all utrustning med sig?",answer:"Nej. Deltagare ska ha med sig cykel, hjälm, första hjälpen och mobiltelefon. Vid en klätterkontroll finns kunnig personal med all nödvändig utrustning, de säkrar deltagarna och ser till att klättringen går säkert till. Vid en paddel kontroll finns det kanot, SUP, luftmadrass eller liknande. Skulle man inte ha en mountainbike går det bra att hyra och detta bör i så fall förbokas."},{question:"Får man använda sig av GPS?",answer:"Ja, det är tillåtet att använda en GPS. Det är dock inte alltid det bästa eftersom det är kartan som gäller och GPSen och kartans information kan skilja sig åt."}],t=[{question:"Om jag inte hinner till registreringen på fredag kväll, vad gör jag då?",answer:"Det finns möjlighet för registrering på lördag morgon innan start, dock ser vi helst att all registrering sker under fredag kvällen."},{question:"Ingår banketten i priset?",answer:"Nej, den får man köpa vid sidan om. Se respektive tävling för bokning av mat. Men prisutdelningen som följer efter banketten är gratis för alla deltagare."},{question:"Vilka tider är det som gäller för själva tävlandet?",answer:"Program: Fredagen: Registrering 17:00-21:00 i Lindvallen & 19.00-22.00 i Hemsedal. Lördagen: 9.30 Info möte vid start, 10.00 START, 16.00 MÅL. 22.00 PRISUTDELNING. Söndagen: Väl förtjänad sovmorgon och en härlig dag på fjället! Se detaljerat program under de enskilda tävlingarna."}],r=[{question:"Hur ser kartan ut?",answer:"Kartan får alla lagen när startskottet går. Där är samtliga kontroller utmärkta med position, poäng, beskrivning och om kontrollen innefattar klättring, paddling etc. Skalan är ungefär 1:30 000. Varje år är ett nytt år och därför en ny bansträckning. Kontrollernas position varierar från år till år så den strategi man hade året innan kanske inte lönar sig i år."},{question:"Måste både deltagarna simma/klättra/rappellera till en kontroll?",answer:"Lagen ska alltid hålla ihop och ska under hela tävlingen kunna kommunicera med varandra. Utom på de kontroller som vi kallar bemannade kontroller, dvs simma, paddla, klättra, balansera och rappelera. Här räcker det att den ena i laget tar posten. Både deltagarna ska dock vara så nära varandra som möjligt vid dessa poster."},{question:"Rappellering och klättring - hur goda bakgrundskunskaper måste man ha för att ställa upp?",answer:"Vid varje bemannad post finns det personal som är kunniga och med riktig utrustning. Lite erfarenhet ifrån klättring hjälper men är inte nödvändigt. Man behöver ingen kunskap om säkerhet."},{question:"Vilka regler gäller?",answer:"De regler som gäller för anmälan och under tävling finner du här >>"}];return l.jsxs("div",{className:"flex flex_col faq-container",children:[l.jsx("section",{className:"page_01 dynamic-background flex flex_col flex_j_E",children:l.jsx("div",{className:"trans-background page_01box flex flex_col flex_j_SA",children:l.jsx("div",{className:"om-oss-title flex flex_j_C flex_a_C",children:l.jsx("p",{className:"font_blue fonts_huge font_white",children:"FAQ"})})})}),l.jsx("section",{className:"faq-section faq-dark-section",children:l.jsx("div",{className:"faq-content-container",children:l.jsxs("div",{className:"faq-content",children:[l.jsx("h1",{className:"faq-heading",children:"Vanliga frågor"}),l.jsx(Cs,{title:"Allmänna frågor",items:n})]})})}),l.jsx("section",{className:"faq-section faq-light-section",children:l.jsx("div",{className:"faq-content-container",children:l.jsx("div",{className:"faq-content",children:l.jsx(Cs,{title:"Utrustning",items:e})})})}),l.jsx("section",{className:"faq-section faq-dark-section",children:l.jsx("div",{className:"faq-content-container",children:l.jsx("div",{className:"faq-content",children:l.jsx(Cs,{title:"Tävlingsdagen",items:t})})})}),l.jsx("section",{className:"faq-section faq-light-section",children:l.jsx("div",{className:"faq-content-container",children:l.jsx("div",{className:"faq-content",children:l.jsx(Cs,{title:"Teknisk information",items:r})})})}),l.jsx("section",{className:"faq-section faq-dark-section",children:l.jsx("div",{className:"faq-content-container",children:l.jsx("div",{className:"faq-content",children:l.jsxs("div",{className:"faq-category",children:[l.jsx("h2",{className:"faq-category-title",children:"Har du fler frågor?"}),l.jsx("div",{className:"flex flex_j_C flex_a_C",children:l.jsxs("p",{className:"faq-contact-text",children:["Ta gärna kontakt om ni inte hittar svaret på era frågor: ",l.jsx("a",{href:"mailto:info@aimchallenge.com",className:"font_white",children:"info@aimchallenge.com"})]})})]})})})}),l.jsx("div",{className:"locked-background",style:{height:"50vh",width:"100%"}})]})},_I=()=>l.jsxs("div",{className:"flex flex_col",children:[l.jsx("section",{className:"page_01 dynamic-background flex flex_col flex_j_E",children:l.jsx("div",{className:"trans-background page_01box flex flex_col flex_j_SA",children:l.jsx("div",{className:"om-oss-title flex flex_j_C flex_a_C",children:l.jsx(w,{textKey:"historien-om-aim-title",defaultText:"HISTORIEN OM AIM",tag:"p",className:"font_blue fonts_huge font_white"})})})}),l.jsx("section",{className:"om-oss-section regler-section flex flex_j_C flex_a_C set-03 historien-om-aim-section",children:l.jsx("div",{className:"om-oss-content MaxWH flex flex_col flex_j_C regler-content-container",children:l.jsxs("div",{className:"regler-content historien-om-aim-content",children:[l.jsx(w,{textKey:"historien-om-aim-text-1",defaultText:"AIM Challenge är idag Nordens största multisporttävling men historien om AIM Challenge börjar mycket tidigare än så.",tag:"p",className:"fonts_small om-oss-text font_white historien-om-aim-text"}),l.jsx(w,{textKey:"historien-om-aim-text-2",defaultText:"Vi låter Lisa Nordlind, grundare och initiativtagare till AIM Challenge berätta hur det gick till:",tag:"p",className:"fonts_small om-oss-text font_white historien-om-aim-text"}),l.jsx(w,{textKey:"historien-om-aim-text-3",defaultText:"År 2000 deltog jag i mitt livs största äventyr när jag tävlade i multisporttävlingen Camel Trophy.",tag:"p",className:"fonts_small om-oss-text font_white historien-om-aim-text"}),l.jsx(w,{textKey:"historien-om-aim-text-4",defaultText:"Av över en miljon sökande så var det 16 tvåmannalag från 22 länder som fick vara med och leka. Jag fick äran att representera Team Skandinavien tillsammans med brandmannen Mikael Stening.",tag:"p",className:"fonts_small om-oss-text font_white historien-om-aim-text"}),l.jsx(w,{textKey:"historien-om-aim-text-5",defaultText:"Lag på två personer skulle under 3 veckor samla så många kontroller som möjligt utav 400 utplacerade. Huvudtransportmedel var en specialbyggd RIB (Rigid Inflatable Boat). Båten var utrustad med mountainbikes, klätterutrustning, paddelbräda, dyk- och snorkel utrustning, tält, mat och vatten.",tag:"p",className:"fonts_small om-oss-text font_white historien-om-aim-text"}),l.jsx(w,{textKey:"historien-om-aim-text-6",defaultText:"Lagen fick själva välja vilka kontroller de ville ta, i vilken ordning och vilken väg.",tag:"p",className:"fonts_small om-oss-text font_white historien-om-aim-text"}),l.jsx(w,{textKey:"historien-om-aim-text-7",defaultText:"Olika kontroller gav olika poäng. Låter det bekant?",tag:"p",className:"fonts_small om-oss-text font_white historien-om-aim-text"}),l.jsx(w,{textKey:"historien-om-aim-text-8",defaultText:"Tävlingsområdet var ögrupperna Tonga och Samoa i Söderhavet. Det var galet roligt och Mikael och jag lyckades ta oss till en fjärde plats.",tag:"p",className:"fonts_small om-oss-text font_white historien-om-aim-text"}),l.jsx(w,{textKey:"historien-om-aim-text-9",defaultText:"År 2004 spenderade jag min första sommar i Hemsedal. Det var ganska lugnt i den lilla skidorten så jag beslutade mig för att starta ett nytt event. För mig är det viktigt att träning är roligt och jag tycker att den bästa träningen är tävling. Eftersom Camel Trophy var det roligaste jag någonsin varit med om så föll det naturligt att försöka skapa ett event där andra människor får uppleva samma lekfulla koncept om än i en mindre skala. Tävlingen fick namnet 'Hemsedal Challenge' och den första helgen i september 2004 stod 150 deltagare på startlinjen.",tag:"p",className:"fonts_small om-oss-text font_white historien-om-aim-text"}),l.jsx(w,{textKey:"historien-om-aim-text-10",defaultText:"Nära, kära, vänner och familj samlades från alla håll och kanter för att ställa upp som funktionärer.",tag:"p",className:"fonts_small om-oss-text font_white historien-om-aim-text"}),l.jsx(w,{textKey:"historien-om-aim-text-11",defaultText:"Efter 5 år startade vi en tävling till i Lindvallen och bytte namn till AIM Challenge.",tag:"p",className:"fonts_small om-oss-text font_white historien-om-aim-text"}),l.jsx(w,{textKey:"historien-om-aim-text-12",defaultText:"Efter AIM Challenge 2019 tackade Lisa för sig och lämnade över stafettpinnen till Marcus Andersson, som nu står inför en spännande framtid där han ser frem emot att driva vidare och utveckla AIM Challenge.",tag:"p",className:"fonts_small om-oss-text font_white historien-om-aim-text"})]})})}),l.jsx(ui,{backgroundKey:"historien-om-aim-bottom-bg",defaultSrc:"/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_094.jpg",className:"page_01 dynamic-background flex flex_col flex_j_E"})]}),yI=({isOpen:n,onClose:e,onSave:t})=>{const[r,s]=A.useState(""),[i,o]=A.useState(""),[c,u]=A.useState(null),[d,m]=A.useState(""),[g,_]=A.useState(!1),[b,T]=A.useState(""),[P,N]=A.useState(""),[D,C]=A.useState(0),[L,O]=A.useState(0),V=A.useRef(null),H=A.useRef(null),{isAdmin:I}=on(),x=de=>{const He=de.target.files[0];if(He){const ze=new FileReader;ze.onloadend=()=>{u(He),m(ze.result)},ze.readAsDataURL(He)}},y=de=>{o(de.target.value)},k=()=>{V.current&&(C(V.current.selectionStart),O(V.current.selectionEnd))},E=()=>{if(_(!g),!g&&V.current){const de=i.substring(V.current.selectionStart,V.current.selectionEnd);N(de),C(V.current.selectionStart),O(V.current.selectionEnd)}},R=()=>{if(!b.trim()){alert("Please enter a URL");return}const de=`[${P||b}](${b})`,He=i.substring(0,D)+de+i.substring(L);o(He),_(!1),T(""),N("")},v=()=>{if(!r.trim()||!i.trim()||!d){alert("Vänligen fyll i alla fält (titel, bild och innehåll)");return}const de={id:Date.now(),title:r,date:new Date().toLocaleDateString("sv-SE",{year:"numeric",month:"long",day:"numeric"}),content:i,image:d};t(de),oe(),e()},oe=()=>{s(""),o(""),u(null),m(""),_(!1),T(""),N("")},me=de=>{de.target.className==="create-post-modal__overlay"&&e()};return!n||!I?null:l.jsxs("div",{className:"create-post-modal",children:[l.jsx("div",{className:"create-post-modal__overlay",onClick:me}),l.jsxs("div",{className:"create-post-modal__content",children:[l.jsx("h2",{className:"create-post-modal__title",children:"Skapa nytt inlägg"}),l.jsxs("div",{className:"create-post-modal__form",children:[l.jsxs("div",{className:"create-post-modal__form-group",children:[l.jsx("label",{className:"create-post-modal__label",children:"Titel"}),l.jsx("input",{type:"text",className:"create-post-modal__input",value:r,onChange:de=>s(de.target.value),placeholder:"Ange titel"})]}),l.jsxs("div",{className:"create-post-modal__form-group",children:[l.jsx("label",{className:"create-post-modal__label",children:"Bild"}),l.jsxs("div",{className:"create-post-modal__image-upload",onClick:()=>H.current.click(),children:[d?l.jsx("img",{src:d,alt:"Preview",className:"create-post-modal__image-preview"}):l.jsx("div",{className:"create-post-modal__image-placeholder",children:"Klicka för att ladda upp en bild"}),l.jsx("input",{type:"file",accept:"image/*",onChange:x,className:"create-post-modal__file-input",ref:H})]})]}),l.jsxs("div",{className:"create-post-modal__form-group",children:[l.jsx("label",{className:"create-post-modal__label",children:"Innehåll"}),l.jsxs("div",{children:[l.jsx("textarea",{className:"create-post-modal__textarea",value:i,onChange:y,onSelect:k,ref:V,placeholder:"Ange innehåll"}),l.jsx("button",{type:"button",onClick:E,className:"create-post-modal__button create-post-modal__button--secondary",style:{marginTop:"10px"},children:"Lägg till länk"}),g&&l.jsxs("div",{className:"create-post-modal__link-tools",children:[l.jsxs("div",{children:[l.jsx("label",{children:"Länktext:"}),l.jsx("input",{type:"text",value:P,onChange:de=>N(de.target.value),className:"create-post-modal__input",style:{marginTop:"5px",width:"100%"}})]}),l.jsxs("div",{children:[l.jsx("label",{children:"URL:"}),l.jsx("input",{type:"text",value:b,onChange:de=>T(de.target.value),className:"create-post-modal__input",style:{marginTop:"5px",width:"100%"}})]}),l.jsxs("div",{style:{marginTop:"10px"},children:[l.jsx("button",{onClick:R,className:"create-post-modal__button create-post-modal__button--primary",children:"Infoga länk"}),l.jsx("button",{onClick:()=>_(!1),className:"create-post-modal__button create-post-modal__button--secondary",style:{marginLeft:"10px"},children:"Avbryt"})]})]})]})]}),l.jsxs("div",{className:"create-post-modal__actions",children:[l.jsx("button",{onClick:e,className:"create-post-modal__button create-post-modal__button--secondary",children:"Avbryt"}),l.jsx("button",{onClick:v,className:"create-post-modal__button create-post-modal__button--primary",disabled:!r.trim()||!i.trim()||!d,children:"Spara"})]})]})]})]})},xm=Uo(St,"posts"),xI=async()=>{try{const n=uE(xm,hE("createdAt","desc")),e=await mf(n),t=[];return e.forEach(r=>{t.push({id:r.id,...r.data()})}),t}catch(n){throw console.error("Error getting posts:",n),n}},ih=async(n,e)=>{try{let t=null;if(e){const s=Pi(Oi,`post-images/${Date.now()}`);await Df(s,e,"data_url"),t=await il(s)}return{id:(await gE(xm,{title:n.title,content:n.content,image:t||n.image,date:n.date,createdAt:new Date().toISOString()})).id,...n,image:t||n.image}}catch(t){throw console.error("Error adding post:",t),t}},vI=async(n,e)=>{try{if(await pE(en(St,"posts",n)),e&&e.includes("firebase")){const t=Pi(Oi,e);await AT(t)}return{success:!0}}catch(t){throw console.error("Error deleting post:",t),t}},EI=()=>{const[n,e]=A.useState(""),[t,r]=A.useState(!1),[s,i]=A.useState(!1),{isAdmin:o}=on(),[c,u]=A.useState([]),[d,m]=A.useState(!0),[g,_]=A.useState(null);A.useEffect(()=>{(async()=>{try{m(!0);const L=await xI();u(L),_(null)}catch(L){console.error("Error fetching posts:",L),_("Failed to load posts. Please try again later."),b()}finally{m(!1)}})()},[]);const b=()=>{u([{id:"default-1",title:"AIM Challenge 2025 - Anmälan öppen!",date:"28 februari 2025",content:"Nu är anmälan öppen för AIM Challenge 2025! Vi ser fram emot att välkomna både nya och återkommande deltagare till årets tävlingar i Hemsedal, Sälen, Ulricehamn och Kolmården.",image:"/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_094.jpg"},{id:"default-2",title:"Nya utmaningar i Hemsedal",date:"15 februari 2025",content:"I år har vi lagt till flera nya spännande utmaningar på Hemsedal-banan. Förbered er på att testa era gränser i den vackra norska fjällmiljön!",image:"/images/AIM_lindvallen_2024_AnkiGrothe_highres_125.jpg"},{id:"default-3",title:"Resultat från förra årets tävlingar",date:"10 januari 2025",content:"Nu finns alla resultat från förra årets tävlingar tillgängliga på vår hemsida. Kolla in hur du och ditt lag placerade er!",image:"/images/EE-AIMChallenge24-Uhamn-0171-high.jpg"},{id:"default-4",title:"Ny sponsor för AIM Challenge",date:"5 januari 2025",content:"Vi är glada att meddela att vi har fått en ny huvudsponsor för AIM Challenge 2025. Mer information kommer snart!",image:"/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_094.jpg"}])},T=C=>{C.preventDefault(),console.log("Email submitted:",n),r(!0),e(""),setTimeout(()=>r(!1),3e3)},P=async C=>{try{m(!0);const L=await ih(C,C.image);u([L,...c]),_(null)}catch(L){console.error("Error saving post:",L),_("Failed to save post. Please try again.")}finally{m(!1)}},N=async(C,L)=>{if(window.confirm("Är du säker på att du vill ta bort detta inlägg?"))try{m(!0),await vI(C,L);const O=c.filter(V=>V.id!==C);u(O),_(null)}catch(O){console.error("Error deleting post:",O),_("Failed to delete post. Please try again.")}finally{m(!1)}},D=async()=>{if(window.confirm("Är du säker på att du vill återställa till standardinlägg? Alla dina anpassade inlägg kommer att försvinna."))try{m(!0),b();for(const C of c)await ih(C,C.image);_(null)}catch(C){console.error("Error resetting posts:",C),_("Failed to reset posts. Please try again.")}finally{m(!1)}};return l.jsxs("div",{className:"flex flex_col",children:[l.jsx("section",{className:"page_01 dynamic-background flex flex_col flex_j_E",children:l.jsx("div",{className:"page_01box flex flex_col flex_j_SA",children:l.jsx("div",{className:"om-oss-title flex flex_j_C flex_a_C",children:l.jsx(w,{textKey:"senaste-nytt-title",defaultText:"SENASTE NYTT",tag:"p",className:"fonts_huge senaste-nytt-main-title",style:{color:"rgb(56, 76, 135)"}})})})}),l.jsx("section",{className:"set-03 senaste-nytt-subscribe-section",children:l.jsxs("div",{className:"MaxWH flex flex_col flex_j_C flex_a_C font_white",children:[l.jsx(w,{textKey:"senaste-nytt-subscribe-title",defaultText:"Håll dig uppdaterad",tag:"h2",className:"fonts_large senaste-nytt-title"}),l.jsx(w,{textKey:"senaste-nytt-subscribe-text",defaultText:"Prenumerera på vårt nyhetsbrev för att få de senaste uppdateringarna om AIM Challenge direkt i din inkorg.",tag:"p",className:"fonts_small senaste-nytt-description"}),l.jsxs("form",{onSubmit:T,className:"senaste-nytt-form flex flex_col flex_a_C",children:[l.jsxs("div",{className:"senaste-nytt-form-input-container flex",children:[l.jsx("input",{type:"email",value:n,onChange:C=>e(C.target.value),placeholder:"Din e-postadress",required:!0,className:"senaste-nytt-form-input"}),l.jsx("button",{type:"submit",className:"senaste-nytt-form-button",children:l.jsx(w,{textKey:"senaste-nytt-subscribe-button",defaultText:"Prenumerera",tag:"span",className:""})})]}),t&&l.jsx("p",{className:"senaste-nytt-form-success",children:l.jsx(w,{textKey:"senaste-nytt-subscribe-thanks",defaultText:"Tack för din prenumeration!",tag:"span",className:""})})]})]})}),l.jsx("section",{className:"senaste-nytt-news-section",children:l.jsxs("div",{className:"MaxWH senaste-nytt-container",children:[l.jsx(w,{textKey:"senaste-nytt-news-title",defaultText:"Nyheter",tag:"h2",className:"senaste-nytt-section-title"}),o&&l.jsxs("div",{className:"senaste-nytt-admin-actions flex flex_j_E",children:[l.jsx("button",{className:"senaste-nytt-create-post-button",onClick:()=>i(!0),children:l.jsx(w,{textKey:"senaste-nytt-create-post-button",defaultText:"Skapa nytt inlägg",tag:"span",className:""})}),l.jsx("button",{className:"senaste-nytt-reset-posts-button",onClick:D,children:l.jsx(w,{textKey:"senaste-nytt-reset-posts-button",defaultText:"Återställ till standardinlägg",tag:"span",className:""})})]}),l.jsx("div",{className:"senaste-nytt-news-grid",children:c.map(C=>l.jsxs("div",{className:"senaste-nytt-news-card",children:[l.jsx("div",{className:"senaste-nytt-news-image",style:{backgroundImage:`url(${C.image})`}}),l.jsxs("div",{className:"senaste-nytt-news-content",children:[l.jsx(w,{textKey:`senaste-nytt-news-title-${C.id}`,defaultText:C.title,tag:"h3",className:"senaste-nytt-news-card-title"}),l.jsx(w,{textKey:`senaste-nytt-news-date-${C.id}`,defaultText:C.date,tag:"p",className:"senaste-nytt-news-date"}),l.jsx(w,{textKey:`senaste-nytt-news-content-${C.id}`,defaultText:C.content,tag:"p",className:"senaste-nytt-news-text"}),l.jsx(ce,{to:`/news/${C.id}`,className:"senaste-nytt-read-more",children:l.jsx(w,{textKey:`senaste-nytt-news-read-more-${C.id}`,defaultText:"Läs mer",tag:"span",className:"senaste-nytt-read-more-text"})}),o&&l.jsx("button",{className:"senaste-nytt-delete-post-button",onClick:()=>N(C.id,C.image),children:l.jsx(w,{textKey:`senaste-nytt-delete-post-button-${C.id}`,defaultText:"Ta bort",tag:"span",className:""})})]})]},C.id))})]})}),o&&l.jsx(yI,{isOpen:s,onClose:()=>i(!1),onSave:P}),l.jsx(ui,{backgroundKey:"senaste-nytt-bottom-bg",defaultSrc:"/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_094.jpg",className:"page_01 dynamic-background flex flex_col flex_j_E"})]})},TI=()=>{const{id:n}=Np(),e=Xn(),[t,r]=A.useState(null),[s,i]=A.useState(!0),o=[{id:1,title:"AIM Challenge 2025 - Anmälan öppen!",date:"28 februari 2025",content:`Nu är anmälan öppen för AIM Challenge 2025! Vi ser fram emot att välkomna både nya och återkommande deltagare till årets tävlingar i Hemsedal, Sälen, Ulricehamn och Kolmården.

AIM Challenge har blivit en tradition för många äventyrslystna deltagare, och i år kommer vi att erbjuda ännu fler spännande utmaningar. Tävlingarna kommer att äga rum under följande datum:

- Hemsedal: 15-17 mars 2025
- Sälen: 22-24 mars 2025
- Ulricehamn: 5-7 april 2025
- Kolmården: 19-21 april 2025

Anmälan sker via vår hemsida och platserna fylls snabbt, så se till att säkra din plats redan idag!`,image:"/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_094.jpg",fullImage:"/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_094.jpg"},{id:2,title:"Nya utmaningar i Hemsedal",date:"15 februari 2025",content:`I år har vi lagt till flera nya spännande utmaningar på Hemsedal-banan. Förbered er på att testa era gränser i den vackra norska fjällmiljön!

Vårt team har arbetat hårt för att designa nya hinderbanor som kommer att utmana även de mest erfarna deltagarna. De nya utmaningarna inkluderar:

1. "Fjällpassagen" - en tekniskt krävande sträcka med klättring och balansmoment
2. "Isfloden" - en isande kall utmaning som testar både styrka och mental uthållighet
3. "Lavinzonen" - en hinderbana där samarbete är nyckeln till framgång

Vi har också förbättrat säkerheten längs hela banan med fler kontrollpunkter och medicinsk personal på plats. Vårt mål är att skapa en utmanande men säker upplevelse för alla deltagare.`,image:"/images/AIM_lindvallen_2024_AnkiGrothe_highres_125.jpg",fullImage:"/images/AIM_lindvallen_2024_AnkiGrothe_highres_125.jpg"},{id:3,title:"Resultat från förra årets tävlingar",date:"10 januari 2025",content:`Nu finns alla resultat från förra årets tävlingar tillgängliga på vår hemsida. Kolla in hur du och ditt lag placerade er!

Förra årets AIM Challenge var en enorm framgång med rekordmånga deltagare. Vi vill gratulera alla vinnare och tacka samtliga deltagare för ert engagemang och er sportslighet.

Här är topplaceringarna från förra årets tävlingar:

Hemsedal:
- Herrar: 1. Erik Johansson, 2. Petter Nordlund, 3. Magnus Ek
- Damer: 1. Anna Lindberg, 2. Sofia Axelsson, 3. Emma Karlsson

Sälen:
- Herrar: 1. Johan Bergström, 2. Anders Nyström, 3. Karl Lundgren
- Damer: 1. Lina Ekström, 2. Maria Holmberg, 3. Johanna Wikström

Ulricehamn:
- Herrar: 1. Niklas Andersson, 2. Fredrik Lindholm, 3. Gustav Holm
- Damer: 1. Elin Sandberg, 2. Kristina Berg, 3. Maja Nilsson

Kolmården:
- Herrar: 1. Mikael Svensson, 2. David Karlsson, 3. Simon Lindgren
- Damer: 1. Sara Björk, 2. Hanna Lindqvist, 3. Klara Öberg

Fullständiga resultatlistor finns tillgängliga på vår hemsida under fliken "Resultat".`,image:"/images/EE-AIMChallenge24-Uhamn-0171-high.jpg",fullImage:"/images/EE-AIMChallenge24-Uhamn-0171-high.jpg"},{id:4,title:"Ny sponsor för AIM Challenge",date:"5 januari 2025",content:`Vi är glada att meddela att vi har fått en ny huvudsponsor för AIM Challenge 2025. Mer information kommer snart!

Den nya sponsorn kommer att bidra till att höja kvaliteten på våra evenemang ytterligare och möjliggöra fler spännande utmaningar och bättre priser för deltagarna.

Vi kommer att presentera vår nya huvudsponsor vid en presskonferens nästa vecka, så håll utkik efter mer information på vår hemsida och i våra sociala medier.

Detta partnerskap markerar början på ett nytt kapitel för AIM Challenge, och vi ser fram emot att tillsammans med vår nya sponsor ta tävlingen till nya höjder.`,image:"/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_094.jpg",fullImage:"/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_094.jpg"}];A.useEffect(()=>{if(n){const u=o.find(d=>d.id===parseInt(n));u&&r(u),i(!1)}},[n]);const c=()=>{e("/senaste-nytt")};return s?l.jsx("div",{className:"flex flex_col flex_a_C flex_j_C",style:{minHeight:"50vh"},children:l.jsx("p",{className:"fonts_large",children:"Laddar..."})}):t?l.jsxs("div",{className:"flex flex_col",children:[l.jsx("section",{className:"page_01 dynamic-background flex flex_col flex_j_E",children:l.jsx("div",{className:"trans-background page_01box flex flex_col flex_j_SA",children:l.jsx("div",{className:"om-oss-title flex flex_j_C flex_a_C",children:l.jsx("p",{className:"font_blue fonts_huge font_white",children:"NYHETER"})})})}),l.jsx("section",{style:{padding:"50px 0",backgroundColor:"#f5f5f5",width:"100vw"},children:l.jsxs("div",{className:"MaxWH",style:{padding:"0 20px",maxWidth:"1000px",margin:"0 auto"},children:[l.jsxs("button",{onClick:c,className:"navbbutton button font_blue",style:{marginBottom:"20px",padding:"10px 30px 10px 20px",display:"flex",alignItems:"center",gap:"5px",minWidth:"120px"},children:[l.jsx("span",{children:"←"})," ",l.jsx("span",{children:"Tillbaka"})]}),l.jsxs("div",{style:{backgroundColor:"white",borderRadius:"8px",overflow:"hidden",boxShadow:"0 4px 6px rgba(0,0,0,0.1)"},children:[l.jsx("div",{style:{height:"400px",backgroundImage:`url(${t.fullImage||t.image})`,backgroundSize:"cover",backgroundPosition:"center"}}),l.jsxs("div",{style:{padding:"30px"},children:[l.jsx("h1",{className:"fonts_large font_blue",style:{marginBottom:"10px"},children:t.title}),l.jsx("p",{className:"fonts_small",style:{color:"#666",marginBottom:"30px"},children:t.date}),t.content.split(`

`).map((u,d)=>l.jsx("p",{className:"fonts_small",style:{marginBottom:"20px"},children:u},d))]})]}),l.jsx("div",{style:{marginTop:"30px",textAlign:"center"},children:l.jsxs("button",{onClick:c,className:"navbbutton button font_blue",style:{padding:"10px 30px 10px 20px",display:"flex",alignItems:"center",gap:"5px",minWidth:"120px"},children:[l.jsx("span",{children:"←"})," ",l.jsx("span",{children:"Tillbaka"})]})})]})}),l.jsx("section",{className:"page_01 dynamic-background flex flex_col flex_j_E",style:{height:"50vh",width:"100vw"}})]}):l.jsxs("div",{className:"flex flex_col flex_a_C flex_j_C",style:{minHeight:"50vh"},children:[l.jsx("p",{className:"fonts_large",children:"Nyheten kunde inte hittas"}),l.jsx("button",{onClick:c,className:"navbbutton button font_blue",style:{marginTop:"20px",padding:"10px 20px"},children:"Tillbaka till nyheter"})]})},ah=()=>{const[n,e]=A.useState(""),[t,r]=A.useState(""),[s,i]=A.useState(""),[o,c]=A.useState(!1),u=Xn(),{login:d,isAuthenticated:m}=an();A.useEffect(()=>{m&&u("/")},[m,u]);const g=async _=>{_.preventDefault(),c(!0),i("");try{const b=await d(n,t);b.success?u("/"):i(b.message||"Ogiltigt e-post eller lösenord")}catch(b){console.error("Login error:",b),i("Ett fel uppstod vid inloggning. Försök igen.")}finally{c(!1)}};return l.jsxs("div",{className:"flex flex_col",children:[l.jsx("section",{className:"page_01 dynamic-background flex flex_col flex_j_E",children:l.jsx("div",{className:"trans-background page_01box flex flex_col flex_j_SA",children:l.jsx("div",{className:"om-oss-title flex flex_j_C flex_a_C",children:l.jsx("p",{className:"font_blue fonts_huge font_white",children:"LOGGA IN"})})})}),l.jsx("section",{style:{padding:"50px 0",backgroundColor:"#f5f5f5",width:"100vw",minHeight:"60vh"},children:l.jsx("div",{className:"MaxWH",style:{padding:"0 20px",maxWidth:"500px",margin:"0 auto"},children:l.jsxs("div",{style:{backgroundColor:"white",borderRadius:"8px",overflow:"hidden",boxShadow:"0 4px 6px rgba(0,0,0,0.1)",padding:"30px"},children:[l.jsx("h2",{className:"fonts_medium font_blue",style:{marginBottom:"20px",textAlign:"center"},children:"Administratörsinloggning"}),s&&l.jsx("div",{style:{backgroundColor:"rgba(255, 0, 0, 0.1)",color:"#d32f2f",padding:"10px",borderRadius:"4px",marginBottom:"20px",textAlign:"center"},children:s}),l.jsxs("form",{onSubmit:g,children:[l.jsxs("div",{style:{marginBottom:"20px"},children:[l.jsx("label",{htmlFor:"email",className:"fonts_small",style:{display:"block",marginBottom:"5px",fontWeight:"bold"},children:"E-post"}),l.jsx("input",{type:"email",id:"email",value:n,onChange:_=>e(_.target.value),required:!0,style:{width:"80%",padding:"10px 12px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"16px"}})]}),l.jsxs("div",{style:{marginBottom:"30px"},children:[l.jsx("label",{htmlFor:"password",className:"fonts_small",style:{display:"block",marginBottom:"5px",fontWeight:"bold"},children:"Lösenord"}),l.jsx("input",{type:"password",id:"password",value:t,onChange:_=>r(_.target.value),required:!0,style:{width:"80%",padding:"10px 12px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"16px"}})]}),l.jsx("button",{type:"submit",className:"navbbutton button font_blue",style:{width:"80%",padding:"10px 15px",fontSize:"16px",cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center"},disabled:o,children:o?"Loggar in...":"Logga in"})]}),l.jsxs("div",{style:{marginTop:"20px",textAlign:"center"},children:[l.jsx("p",{className:"fonts_small",style:{color:"#666"},children:"Detta är en inloggning endast för administratörer."}),l.jsx("p",{className:"fonts_small",style:{color:"#666",marginTop:"5px"},children:"Standard: admin@example.com / password123"})]})]})})}),l.jsx("section",{className:"page_01 dynamic-background flex flex_col flex_j_E",style:{height:"30vh",width:"100vw"}})]})},bI=()=>{const{textContent:n,resetAllContent:e,removeContentItem:t,isAdmin:r}=on(),{isAuthenticated:s}=an(),[i,o]=A.useState(!1),[c,u]=A.useState(null),[d,m]=A.useState("all"),g=Xn();if(A.useEffect(()=>{(!s||!r)&&g("/")},[s,r,g]),!s||!r)return null;const _=()=>{o(!0),u(null)},b=O=>{o(!0),u(O)},T=()=>{c?t(c):e(),o(!1),u(null)},P=()=>{o(!1),u(null)},D=(()=>{const O={text:{},image:{},background:{}};return Object.entries(n).forEach(([V,H])=>{H.startsWith("data:image")||H.startsWith("http")||H.startsWith("/")?V.includes("-bg")||V.includes("background")?O.background[V]=H:O.image[V]=H:O.text[V]=H}),O})(),L=d==="all"?n:D[d]||{};return l.jsxs("div",{className:"flex flex_col",style:{minHeight:"100vh"},children:[l.jsx("section",{className:"page_01 dynamic-background flex flex_col flex_j_E",children:l.jsx("div",{className:"trans-background page_01box flex flex_col flex_j_SA",children:l.jsx("div",{className:"om-oss-title flex flex_j_C flex_a_C",children:l.jsx("p",{className:"font_blue fonts_huge",children:"Innehållshanterare"})})})}),l.jsxs("section",{style:{padding:"40px",maxWidth:"1200px",margin:"0 auto"},children:[l.jsxs("div",{style:{marginBottom:"30px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"20px"},children:[l.jsx("h2",{className:"font_blue fonts_large",children:"Alla redigerbara innehåll"}),l.jsx("button",{onClick:_,style:{padding:"10px 20px",backgroundColor:"#ff4d4d",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Återställ allt innehåll"})]}),l.jsxs("div",{style:{marginBottom:"30px",display:"flex",gap:"10px",flexWrap:"wrap"},children:[l.jsxs("button",{onClick:()=>m("all"),style:{padding:"8px 16px",backgroundColor:d==="all"?"#00a6fb":"#f0f0f0",color:d==="all"?"white":"black",border:"none",borderRadius:"4px",cursor:"pointer"},children:["Alla (",Object.keys(n).length,")"]}),l.jsxs("button",{onClick:()=>m("text"),style:{padding:"8px 16px",backgroundColor:d==="text"?"#00a6fb":"#f0f0f0",color:d==="text"?"white":"black",border:"none",borderRadius:"4px",cursor:"pointer"},children:["Texter (",Object.keys(D.text).length,")"]}),l.jsxs("button",{onClick:()=>m("image"),style:{padding:"8px 16px",backgroundColor:d==="image"?"#00a6fb":"#f0f0f0",color:d==="image"?"white":"black",border:"none",borderRadius:"4px",cursor:"pointer"},children:["Bilder (",Object.keys(D.image).length,")"]}),l.jsxs("button",{onClick:()=>m("background"),style:{padding:"8px 16px",backgroundColor:d==="background"?"#00a6fb":"#f0f0f0",color:d==="background"?"white":"black",border:"none",borderRadius:"4px",cursor:"pointer"},children:["Bakgrundsbilder (",Object.keys(D.background).length,")"]})]}),i&&l.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.7)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},children:l.jsxs("div",{style:{backgroundColor:"white",padding:"30px",borderRadius:"8px",maxWidth:"500px",width:"90%",textAlign:"center"},children:[l.jsx("h3",{style:{marginBottom:"20px",color:"#00a6fb"},children:"Bekräfta åtgärd"}),l.jsx("p",{style:{marginBottom:"30px"},children:c?`Är du säker på att du vill ta bort innehållet med nyckeln "${c}"?`:"Är du säker på att du vill återställa allt innehåll? Detta kan inte ångras."}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"20px"},children:[l.jsx("button",{onClick:T,style:{padding:"10px 20px",backgroundColor:"#ff4d4d",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:c?"Ta bort":"Återställ allt"}),l.jsx("button",{onClick:P,style:{padding:"10px 20px",backgroundColor:"#ccc",color:"black",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Avbryt"})]})]})}),Object.keys(L).length===0?l.jsxs("p",{children:["Inga redigerade ",d==="text"?"texter":d==="image"?"bilder":d==="background"?"bakgrundsbilder":"innehåll"," ännu."]}):l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"20px"},children:Object.entries(L).map(([O,V])=>{const H=V.startsWith("data:image")||V.startsWith("http")||V.startsWith("/"),I=O.includes("-bg")||O.includes("background");return l.jsxs("div",{style:{border:"1px solid #ddd",borderRadius:"8px",padding:"15px",backgroundColor:"white",boxShadow:"0 2px 4px rgba(0,0,0,0.05)"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px"},children:[l.jsx("h3",{className:"font_blue fonts_medium",style:{wordBreak:"break-all",fontSize:"16px"},children:O}),l.jsx("span",{style:{padding:"3px 8px",borderRadius:"4px",fontSize:"12px",backgroundColor:I?"#6c5ce7":H?"#00b894":"#0984e3",color:"white"},children:I?"Bakgrund":H?"Bild":"Text"})]}),l.jsx("div",{style:{marginBottom:"10px"},children:H?l.jsxs("div",{children:[l.jsx("img",{src:V,alt:O,style:{width:"100%",height:I?"150px":"auto",maxHeight:"150px",objectFit:I?"cover":"contain",borderRadius:"4px",border:"1px solid #eee"}}),I&&l.jsx("div",{style:{marginTop:"5px",fontSize:"12px",color:"#666",textAlign:"center"},children:"Bakgrundsbild"})]}):l.jsx("p",{style:{maxHeight:"100px",overflow:"auto",backgroundColor:"#f5f5f5",padding:"10px",borderRadius:"4px",fontSize:"14px"},children:V})}),l.jsx("button",{onClick:()=>b(O),style:{width:"100%",padding:"8px",backgroundColor:"#ff4d4d",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"14px"},children:"Ta bort"})]},O)})})]})]})},wI=({children:n,requireAdmin:e=!1})=>{const{isAuthenticated:t,currentUser:r}=an();return t?e&&(r==null?void 0:r.role)!=="admin"?l.jsx(wc,{to:"/"}):n:l.jsx(wc,{to:"/login"})},II=()=>{const{isAdmin:n,getText:e}=on();return A.useEffect(()=>{if(n)return document.body.classList.add("admin-editing-mode"),()=>{document.body.classList.remove("admin-editing-mode")}},[n]),A.useEffect(()=>{const t=()=>{const r=JSON.parse(localStorage.getItem("textContent")||"{}"),s=Object.keys(r).filter(o=>o.startsWith("bg-")&&(o.endsWith("-type")||o.endsWith("-image"))),i={};s.forEach(o=>{const c=o.split("-type")[0].split("-image")[0];i[c]||(i[c]={}),o.endsWith("-type")?i[c].type=r[o]:o.endsWith("-image")&&(i[c].image=r[o])}),Object.keys(i).forEach(o=>{const c=document.getElementById(o);if(!c)return;const u=i[o];u.type&&(c.classList.remove("simple-background","locked-background"),c.classList.add(`${u.type}-background`),u.type==="locked"?c.style.backgroundAttachment="fixed":c.style.backgroundAttachment="scroll"),u.image&&(c.style.backgroundImage=`url('${u.image}')`,c.style.backgroundSize="cover",c.style.backgroundPosition="center",c.style.backgroundRepeat="no-repeat")})};return t(),window.addEventListener("storage",t),()=>{window.removeEventListener("storage",t)}},[]),null},AI=()=>{const{isAdmin:n,getText:e,updateText:t}=on(),[r,s]=A.useState(null),[i,o]=A.useState(null),[c,u]=A.useState(!1),[d,m]=A.useState("simple"),[g,_]=A.useState("type"),[b,T]=A.useState(""),P=A.useRef(null);A.useEffect(()=>{if(!n)return;const O=V=>{if(V.target.classList.contains("simple-background")||V.target.classList.contains("locked-background")||V.target.classList.contains("dynamic-background")||[...V.target.classList].some(I=>I.includes("-bg"))){V.stopPropagation(),s(V.target);let I=V.target.id;I||(I=`bg-${Date.now()}`,V.target.id=I),o(I);const x=e(`${I}-type`,null);x?m(x):V.target.classList.contains("locked-background")?m("locked"):m("simple");const y=e(`${I}-image`,null);if(y)T(y);else{let E=window.getComputedStyle(V.target).backgroundImage;E&&E!=="none"?(E=E.replace(/url\(['"]?(.*?)['"]?\)/i,"$1"),T(E)):T("")}u(!0)}};return document.addEventListener("click",O),()=>{document.removeEventListener("click",O)}},[n,e]);const N=()=>{!r||!i||(r.classList.remove("simple-background","locked-background"),r.classList.add(`${d}-background`),d==="locked"?r.style.backgroundAttachment="fixed":r.style.backgroundAttachment="scroll",t(`${i}-type`,d))},D=()=>{!r||!b||!i||(r.style.backgroundImage=`url('${b}')`,r.style.backgroundSize="cover",r.style.backgroundPosition="center",r.style.backgroundRepeat="no-repeat",t(`${i}-image`,b))},C=O=>{const V=O.target.files[0];if(!V)return;const H=URL.createObjectURL(V);T(H);const I=new FileReader;I.onloadend=()=>{T(I.result)},I.readAsDataURL(V)},L=()=>{N(),D(),u(!1)};return!n||!c?null:l.jsx("div",{className:"background-settings-modal",onClick:()=>u(!1),children:l.jsxs("div",{className:"background-settings-content",onClick:O=>O.stopPropagation(),children:[l.jsx("h3",{children:"Background Settings"}),l.jsxs("div",{className:"settings-tabs",children:[l.jsx("button",{className:`tab-button ${g==="type"?"active":""}`,onClick:()=>_("type"),children:"Background Type"}),l.jsx("button",{className:`tab-button ${g==="image"?"active":""}`,onClick:()=>_("image"),children:"Background Image"})]}),g==="type"&&l.jsxs("div",{className:"background-type-options",children:[l.jsx("div",{className:"form-group",children:l.jsxs("label",{children:[l.jsx("input",{type:"radio",name:"backgroundType",value:"simple",checked:d==="simple",onChange:()=>m("simple")}),"Simple (Scrolls with content)"]})}),l.jsx("div",{className:"form-group",children:l.jsxs("label",{children:[l.jsx("input",{type:"radio",name:"backgroundType",value:"locked",checked:d==="locked",onChange:()=>m("locked")}),"Locked (Fixed when scrolling)"]})})]}),g==="image"&&l.jsxs("div",{className:"background-image-options",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"imageUrl",children:"Image URL:"}),l.jsx("input",{type:"text",id:"imageUrl",value:b,onChange:O=>T(O.target.value),placeholder:"Enter image URL",className:"image-url-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Or upload an image:"}),l.jsx("input",{type:"file",accept:"image/*",onChange:C,ref:P,className:"file-input"}),l.jsx("button",{className:"upload-button",onClick:()=>P.current.click(),children:"Choose File"})]}),b&&l.jsxs("div",{className:"image-preview",children:[l.jsx("p",{children:"Preview:"}),l.jsx("img",{src:b,alt:"Background preview"})]})]}),l.jsxs("div",{className:"button-group",children:[l.jsx("button",{className:"cancel-button",onClick:()=>u(!1),children:"Cancel"}),l.jsx("button",{className:"apply-button",onClick:L,children:"Apply"})]})]})})},kI=async(n,e,t="Admin")=>{try{const s=(await kb($s,n,e)).user;return await Sb(s,{displayName:t}),await Zr(en(St,"users",s.uid),{email:n,displayName:t,role:"admin",createdAt:new Date}),{success:!0,user:{uid:s.uid,email:s.email,displayName:t,role:"admin"}}}catch(r){return console.error("Error creating admin user:",r),{success:!1,error:r.message}}},RI=async()=>{try{(await Xo(en(St,"settings","admin"))).exists()||(await kI("admin@example.com","password123")).success&&(await Zr(en(St,"settings","admin"),{initialized:!0,adminEmail:"admin@example.com",createdAt:new Date}),console.log("Admin user initialized successfully"))}catch(n){console.error("Error initializing admin user:",n)}},NI=()=>(A.useEffect(()=>{RI().then(()=>console.log("Admin user initialized")).catch(n=>console.error("Error initializing admin user:",n))},[]),l.jsx(Gw,{children:l.jsx(Zw,{children:l.jsx(mg,{children:l.jsxs("div",{className:"flex flex_col MaxWH location",style:{width:"100%",maxWidth:"100%",overflow:"hidden",margin:0,padding:0,display:"flex",flexDirection:"column",position:"relative"},children:[l.jsx(eI,{}),l.jsx(II,{}),l.jsx(AI,{}),l.jsx("div",{style:{margin:0,padding:0,width:"100%",position:"relative",top:0},children:l.jsxs($p,{children:[l.jsx(Ie,{path:"/",element:l.jsx(nI,{})}),l.jsx(Ie,{path:"/competitions",element:l.jsx(rI,{})}),l.jsx(Ie,{path:"/ulricehamn",element:l.jsx(sI,{})}),l.jsx(Ie,{path:"/salen",element:l.jsx(iI,{})}),l.jsx(Ie,{path:"/hemsedal",element:l.jsx(aI,{})}),l.jsx(Ie,{path:"/kolmarden",element:l.jsx(oI,{})}),l.jsx(Ie,{path:"/trippeln",element:l.jsx(lI,{})}),l.jsx(Ie,{path:"/trippeln-results",element:l.jsx(cI,{})}),l.jsx(Ie,{path:"/results",element:l.jsx(uI,{})}),l.jsx(Ie,{path:"/gallery",element:l.jsxs(l.Fragment,{children:[l.jsx(hI,{}),l.jsx(dI,{})]})}),l.jsx(Ie,{path:"/om-oss",element:l.jsx(fI,{})}),l.jsx(Ie,{path:"/regler",element:l.jsx(mI,{})}),l.jsx(Ie,{path:"/faq",element:l.jsx(gI,{})}),l.jsx(Ie,{path:"/historien-om-aim",element:l.jsx(_I,{})}),l.jsx(Ie,{path:"/senaste-nytt",element:l.jsx(EI,{})}),l.jsx(Ie,{path:"/news/:id",element:l.jsx(TI,{})}),l.jsx(Ie,{path:"/login",element:l.jsx(ah,{})}),l.jsx(Ie,{path:"login",element:l.jsx(ah,{})}),l.jsx(Ie,{path:"/content-manager",element:l.jsx(wI,{requireAdmin:!0,children:l.jsx(bI,{})})})]})}),l.jsx(tI,{})]})})})}));(function(){const n=sessionStorage.redirect;delete sessionStorage.redirect,n&&n!==location.href&&history.replaceState(null,null,n)})();const SI=document.getElementById("root");Qm.createRoot(SI).render(la.createElement(la.StrictMode,null,la.createElement(NI)));
