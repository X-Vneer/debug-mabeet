import{r as p}from"./index.0b2a3d34.js";import{S as g}from"./SectionHeader.011e90ab.js";import{M as v}from"./MainBtn.9f9827ba.js";import{B as h}from"./index.449d103c.js";import{j as s}from"./jsx-runtime.32b752e4.js";import{i as j}from"./create-visual-element.9fd27a37.js";import{L as b,d as w,m as u}from"./features-animation.fad8ef98.js";import"./index.0dec42b2.js";const y="/_astro/discoverAllAreaShap.1f4d1ce3.svg",N="/_astro/offer1.fd6a5645.png",E="/_astro/offer2.48f2afd2.png",I="/_astro/offers3.00a96ccc.png";function k(e,r,t){var i;if(typeof e=="string"){let n=document;r&&(j(!!r.current),n=r.current),t?((i=t[e])!==null&&i!==void 0||(t[e]=n.querySelectorAll(e)),e=t[e]):e=n.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}const A={any:0,all:1};function B(e,r,{root:t,margin:i,amount:n="any"}={}){const f=k(e),o=new WeakMap,l=d=>{d.forEach(a=>{const m=o.get(a.target);if(a.isIntersecting!==!!m)if(a.isIntersecting){const x=r(a);typeof x=="function"?o.set(a.target,x):c.unobserve(a.target)}else m&&(m(a),o.delete(a.target))})},c=new IntersectionObserver(l,{root:t,rootMargin:i,threshold:typeof n=="number"?n:A[n]});return f.forEach(d=>c.observe(d)),()=>c.disconnect()}function S(e,{root:r,margin:t,amount:i,once:n=!1}={}){const[f,o]=p.useState(!1);return p.useEffect(()=>{if(!e.current||n&&f)return;const l=()=>(o(!0),n?void 0:()=>o(!1)),c={root:r&&r.current||void 0,margin:t,amount:i==="some"?"any":i};return B(e.current,l,c)},[r,e,t,n]),f}const R=({data:e})=>{const r=p.useRef(null),t=S(r,{amount:.2}),i={hidden:{y:30,opacity:0},visible:n=>({x:0,y:0,opacity:1,transition:{delay:n*.2,duration:.8,ease:"easeInOut"}})};return s.jsx(b,{features:w,children:s.jsxs("section",{ref:r,className:"py-10 md:py-20 bg-bgGray relative overflow-hidden",children:[s.jsx("img",{src:y,className:"absolute left-0 right-0 -top-5",alt:"background shape"}),s.jsxs("div",{className:"container pt-10",children:[s.jsxs("div",{className:"flex max-md:flex-col max-md:items-center gap-10 md:gap-5 lg:gap-8 xl:gap-10 justify-center",children:[s.jsx(u.div,{variants:i,custom:0,initial:"hidden",animate:t?"visible":"",className:"w-[200px] aspect-square",children:s.jsx("img",{src:N,alt:"offer"})}),s.jsxs("div",{children:[s.jsx(g,{className:"md:mt-10 mb-4 ",pClassName:"!max-w-[500px]",...e.header}),s.jsx(v,{type:"link",className:"w-fit mx-auto font-medium group",link:e.button.link,children:s.jsxs("div",{className:"flex gap-4",children:[s.jsx("span",{children:e.button.contnet}),s.jsx("div",{children:s.jsx("span",{className:"bg-[#ffffff51] rounded-full group-hover:bg-[#49bfb620]  w-7 aspect-square flex items-center justify-center",children:s.jsx(h,{})})})]})})]}),s.jsx(u.div,{variants:i,custom:1,initial:"hidden",animate:t?"visible":"",className:"w-[200px] aspect-square",children:s.jsx("img",{src:E,alt:"offer"})})]}),s.jsx(u.div,{variants:i,custom:2,initial:"hidden",animate:t?"visible":"",className:"hidden md:block mt-4",children:s.jsx("img",{src:I,className:"mx-auto",alt:"offer"})})]})]})})};export{R as default};
