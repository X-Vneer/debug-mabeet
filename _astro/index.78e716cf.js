function D(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Q(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function u(){if(this instanceof u){var o=[null];o.push.apply(o,arguments);var c=Function.bind.apply(t,o);return new c}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(u){var o=Object.getOwnPropertyDescriptor(e,u);Object.defineProperty(r,u,o.get?o:{enumerable:!0,get:function(){return e[u]}})}),r}var m={},A={get exports(){return m},set exports(e){m=e}},n={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=Symbol.for("react.element"),F=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),q=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),R=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=R&&e[R]||e["@@iterator"],typeof e=="function"?e:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,C={};function p(e,t,r){this.props=e,this.context=t,this.refs=C,this.updater=r||j}p.prototype.isReactComponent={};p.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function O(){}O.prototype=p.prototype;function S(e,t,r){this.props=e,this.context=t,this.refs=C,this.updater=r||j}var E=S.prototype=new O;E.constructor=S;g(E,p.prototype);E.isPureReactComponent=!0;var k=Array.isArray,P=Object.prototype.hasOwnProperty,b={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function I(e,t,r){var u,o={},c=null,s=null;if(t!=null)for(u in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(c=""+t.key),t)P.call(t,u)&&!x.hasOwnProperty(u)&&(o[u]=t[u]);var f=arguments.length-2;if(f===1)o.children=r;else if(1<f){for(var i=Array(f),a=0;a<f;a++)i[a]=arguments[a+2];o.children=i}if(e&&e.defaultProps)for(u in f=e.defaultProps,f)o[u]===void 0&&(o[u]=f[u]);return{$$typeof:y,type:e,key:c,ref:s,props:o,_owner:b.current}}function W(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function w(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function G(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var $=/\/+/g;function v(e,t){return typeof e=="object"&&e!==null&&e.key!=null?G(""+e.key):t.toString(36)}function _(e,t,r,u,o){var c=typeof e;(c==="undefined"||c==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case y:case F:s=!0}}if(s)return s=e,o=o(s),e=u===""?"."+v(s,0):u,k(o)?(r="",e!=null&&(r=e.replace($,"$&/")+"/"),_(o,t,r,"",function(a){return a})):o!=null&&(w(o)&&(o=W(o,r+(!o.key||s&&s.key===o.key?"":(""+o.key).replace($,"$&/")+"/")+e)),t.push(o)),1;if(s=0,u=u===""?".":u+":",k(e))for(var f=0;f<e.length;f++){c=e[f];var i=u+v(c,f);s+=_(c,t,r,i,o)}else if(i=H(e),typeof i=="function")for(e=i.call(e),f=0;!(c=e.next()).done;)c=c.value,i=u+v(c,f++),s+=_(c,t,r,i,o);else if(c==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function d(e,t,r){if(e==null)return e;var u=[],o=0;return _(e,u,"","",function(c){return t.call(r,c,o++)}),u}function J(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},h={transition:null},K={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:h,ReactCurrentOwner:b};n.Children={map:d,forEach:function(e,t,r){d(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return d(e,function(){t++}),t},toArray:function(e){return d(e,function(t){return t})||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};n.Component=p;n.Fragment=M;n.Profiler=V;n.PureComponent=S;n.StrictMode=T;n.Suspense=N;n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K;n.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var u=g({},e.props),o=e.key,c=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(c=t.ref,s=b.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(i in t)P.call(t,i)&&!x.hasOwnProperty(i)&&(u[i]=t[i]===void 0&&f!==void 0?f[i]:t[i])}var i=arguments.length-2;if(i===1)u.children=r;else if(1<i){f=Array(i);for(var a=0;a<i;a++)f[a]=arguments[a+2];u.children=f}return{$$typeof:y,type:e.type,key:o,ref:c,props:u,_owner:s}};n.createContext=function(e){return e={$$typeof:q,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:U,_context:e},e.Consumer=e};n.createElement=I;n.createFactory=function(e){var t=I.bind(null,e);return t.type=e,t};n.createRef=function(){return{current:null}};n.forwardRef=function(e){return{$$typeof:L,render:e}};n.isValidElement=w;n.lazy=function(e){return{$$typeof:B,_payload:{_status:-1,_result:e},_init:J}};n.memo=function(e,t){return{$$typeof:z,type:e,compare:t===void 0?null:t}};n.startTransition=function(e){var t=h.transition;h.transition={};try{e()}finally{h.transition=t}};n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};n.useCallback=function(e,t){return l.current.useCallback(e,t)};n.useContext=function(e){return l.current.useContext(e)};n.useDebugValue=function(){};n.useDeferredValue=function(e){return l.current.useDeferredValue(e)};n.useEffect=function(e,t){return l.current.useEffect(e,t)};n.useId=function(){return l.current.useId()};n.useImperativeHandle=function(e,t,r){return l.current.useImperativeHandle(e,t,r)};n.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};n.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};n.useMemo=function(e,t){return l.current.useMemo(e,t)};n.useReducer=function(e,t,r){return l.current.useReducer(e,t,r)};n.useRef=function(e){return l.current.useRef(e)};n.useState=function(e){return l.current.useState(e)};n.useSyncExternalStore=function(e,t,r){return l.current.useSyncExternalStore(e,t,r)};n.useTransition=function(){return l.current.useTransition()};n.version="18.2.0";(function(e){e.exports=n})(A);const Y=D(m);export{Y as R,D as a,Q as g,m as r};
