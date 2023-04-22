import{e as k,c as L}from"./swiper-slide.0d840efe.js";import{r as N}from"./index.23d61559.js";function y(a,d,s,r){return a.params.createElements&&Object.keys(r).forEach(l=>{if(!s[l]&&s.auto===!0){let c=k(a.el,`.${r[l]}`)[0];c||(c=L("div",r[l]),c.className=r[l],a.el.append(c)),s[l]=c,d[l]=c}}),s}function O({swiper:a,extendParams:d,on:s,emit:r}){d({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),a.navigation={nextEl:null,prevEl:null};const l=n=>(Array.isArray(n)||(n=[n].filter(t=>!!t)),n);function c(n){let t;return n&&typeof n=="string"&&a.isElement&&(t=a.el.shadowRoot.querySelector(n),t)?t:(n&&(typeof n=="string"&&(t=[...document.querySelectorAll(n)]),a.params.uniqueNavElements&&typeof n=="string"&&t.length>1&&a.el.querySelectorAll(n).length===1&&(t=a.el.querySelector(n))),n&&!t?n:t)}function g(n,t){const e=a.params.navigation;n=l(n),n.forEach(i=>{i&&(i.classList[t?"add":"remove"](...e.disabledClass.split(" ")),i.tagName==="BUTTON"&&(i.disabled=t),a.params.watchOverflow&&a.enabled&&i.classList[a.isLocked?"add":"remove"](e.lockClass))})}function f(){const{nextEl:n,prevEl:t}=a.navigation;if(a.params.loop){g(t,!1),g(n,!1);return}g(t,a.isBeginning&&!a.params.rewind),g(n,a.isEnd&&!a.params.rewind)}function h(n){n.preventDefault(),!(a.isBeginning&&!a.params.loop&&!a.params.rewind)&&(a.slidePrev(),r("navigationPrev"))}function x(n){n.preventDefault(),!(a.isEnd&&!a.params.loop&&!a.params.rewind)&&(a.slideNext(),r("navigationNext"))}function u(){const n=a.params.navigation;if(a.params.navigation=y(a,a.originalParams.navigation,a.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(n.nextEl||n.prevEl))return;let t=c(n.nextEl),e=c(n.prevEl);Object.assign(a.navigation,{nextEl:t,prevEl:e}),t=l(t),e=l(e);const i=(o,v)=>{o&&o.addEventListener("click",v==="next"?x:h),!a.enabled&&o&&o.classList.add(...n.lockClass.split(" "))};t.forEach(o=>i(o,"next")),e.forEach(o=>i(o,"prev"))}function m(){let{nextEl:n,prevEl:t}=a.navigation;n=l(n),t=l(t);const e=(i,o)=>{i.removeEventListener("click",o==="next"?x:h),i.classList.remove(...a.params.navigation.disabledClass.split(" "))};n.forEach(i=>e(i,"next")),t.forEach(i=>e(i,"prev"))}s("init",()=>{a.params.navigation.enabled===!1?b():(u(),f())}),s("toEdge fromEdge lock unlock",()=>{f()}),s("destroy",()=>{m()}),s("enable disable",()=>{let{nextEl:n,prevEl:t}=a.navigation;n=l(n),t=l(t),[...n,...t].filter(e=>!!e).forEach(e=>e.classList[a.enabled?"remove":"add"](a.params.navigation.lockClass))}),s("click",(n,t)=>{let{nextEl:e,prevEl:i}=a.navigation;e=l(e),i=l(i);const o=t.target;if(a.params.navigation.hideOnClick&&!i.includes(o)&&!e.includes(o)){if(a.pagination&&a.params.pagination&&a.params.pagination.clickable&&(a.pagination.el===o||a.pagination.el.contains(o)))return;let v;e.length?v=e[0].classList.contains(a.params.navigation.hiddenClass):i.length&&(v=i[0].classList.contains(a.params.navigation.hiddenClass)),r(v===!0?"navigationShow":"navigationHide"),[...e,...i].filter(E=>!!E).forEach(E=>E.classList.toggle(a.params.navigation.hiddenClass))}});const p=()=>{a.el.classList.remove(...a.params.navigation.navigationDisabledClass.split(" ")),u(),f()},b=()=>{a.el.classList.add(...a.params.navigation.navigationDisabledClass.split(" ")),m()};Object.assign(a.navigation,{enable:p,disable:b,update:f,init:u,destroy:m})}var C=N.GenIcon,q=function(d){return C({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"7 2 17 12 7 22"}}]})(d)},D=function(d){return C({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"7 2 17 12 7 22",transform:"matrix(-1 0 0 1 24 0)"}}]})(d)};export{D as G,O as N,q as a};
