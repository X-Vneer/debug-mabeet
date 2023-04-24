import{r as x,b as R}from"./index.e76fa941.js";const g=e=>{let t;const n=new Set,r=(s,p)=>{const c=typeof s=="function"?s(t):s;if(!Object.is(c,t)){const l=t;t=p??typeof c!="object"?c:Object.assign({},t,c),n.forEach(v=>v(t,l))}},o=()=>t,f={setState:r,getState:o,subscribe:s=>(n.add(s),()=>n.delete(s)),destroy:()=>{({BASE_URL:'"/"',MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:void 0,ASSETS_PREFIX:void 0}&&"production")!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(r,o,f),f},j=e=>e?g(e):g;var w={},I={get exports(){return w},set exports(e){w=e}},b={},y={},L={get exports(){return y},set exports(e){y=e}},O={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S=x;function T(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var V=typeof Object.is=="function"?Object.is:T,_=S.useState,A=S.useEffect,P=S.useLayoutEffect,$=S.useDebugValue;function U(e,t){var n=t(),r=_({inst:{value:n,getSnapshot:t}}),o=r[0].inst,u=r[1];return P(function(){o.value=n,o.getSnapshot=t,h(o)&&u({inst:o})},[e,n,t]),A(function(){return h(o)&&u({inst:o}),e(function(){h(o)&&u({inst:o})})},[e]),$(n),n}function h(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!V(e,n)}catch{return!0}}function C(e,t){return t()}var B=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?C:U;O.useSyncExternalStore=S.useSyncExternalStore!==void 0?S.useSyncExternalStore:B;(function(e){e.exports=O})(L);/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=x,F=y;function M(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var k=typeof Object.is=="function"?Object.is:M,q=F.useSyncExternalStore,W=E.useRef,X=E.useEffect,z=E.useMemo,G=E.useDebugValue;b.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var u=W(null);if(u.current===null){var a={hasValue:!1,value:null};u.current=a}else a=u.current;u=z(function(){function s(i){if(!p){if(p=!0,c=i,i=r(i),o!==void 0&&a.hasValue){var d=a.value;if(o(d,i))return l=d}return l=i}if(d=l,k(c,i))return d;var D=r(i);return o!==void 0&&o(d,D)?d:(c=i,l=D)}var p=!1,c,l,v=n===void 0?null:n;return[function(){return s(t())},v===null?void 0:function(){return s(v())}]},[t,n,r,o]);var f=q(e,u[0],u[1]);return X(function(){a.hasValue=!0,a.value=f},[f]),G(f),f};(function(e){e.exports=b})(I);const H=R(w),{useSyncExternalStoreWithSelector:J}=H;function K(e,t=e.getState,n){const r=J(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return x.useDebugValue(r),r}const m=e=>{({BASE_URL:'"/"',MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:void 0,ASSETS_PREFIX:void 0}&&"production")!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?j(e):e,n=(r,o)=>K(t,r,o);return Object.assign(n,t),n},N=e=>e?m(e):m,Y=N((e,t)=>({currentURL:"/",setCurrentURL:n=>{e({currentURL:n})},opened:!1,setOpened:()=>{e(n=>({opened:!t().opened}))},showSearch:!1,setShowSearch:()=>{e(n=>({showSearch:!t().showSearch}))},showLogin:!1,setShowLogIn:n=>{e(r=>n(r))},selectedOptions:{provinces:"",cities:"",unitTypes:""},setSelectedOptions:n=>{e(r=>n(r))},dates:[new Date,new Date(new Date().setDate(new Date().getDate()+1))],setDates:n=>{e(r=>n(r,t))}}));export{Y as u};
