import{r as c}from"./index.0b2a3d34.js";import{u as d,I as u}from"./useFixedBody.54620bdf.js";import{a as f,S as p}from"./swiper-slide.9a12e94f.js";import{N as h}from"./navigation.6cf6b7ea.js";import{P as m}from"./pagination.min.96c28725.js";import{A as x}from"./autoplay.8826a8aa.js";import{r as g,c as j}from"./index.a34f4eb9.js";import{a as b}from"./index.a41c9e15.js";import{j as e}from"./jsx-runtime.32b752e4.js";var w=g.GenIcon,v=function(t){return w({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"}}]})(t)};const y=r=>{const t=()=>{window.history.back()};return e.jsx("button",{onClick:t,type:"button",role:"navigation",title:"go back",className:"group rounded-full flex items-center justify-center w-9 aspect-square bg-[#87868671] hover:bg-[#ffffffd0] duration-300",children:e.jsx(b,{className:"text-white group-hover:text-black text-lg lg:text-2xl duration-300"})})};function C({images:r}){const[t,i]=c.useState(!1),o=a=>{a.stopPropagation(),i(s=>!s)},l=()=>{},n=()=>{};return d(t),e.jsxs("section",{className:`block lg:hidden  ${!t&&"unit-gallery"}`,children:[e.jsxs("header",{className:"flex absolute top-0 inset-x-0 justify-between pt-7 pb-3 px-4 z-[10]",children:[e.jsx(y,{}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{type:"button",title:"add to favorite",className:"group rounded-full flex items-center justify-center w-9 aspect-square bg-[#87868671] hover:bg-[#ffffffd0] duration-300",children:e.jsx(v,{size:20,className:"text-white group-hover:text-black  duration-300"})}),e.jsx("button",{type:"button",title:"share",className:"group rounded-full flex items-center justify-center text-xl w-9 aspect-square bg-[#87868671] hover:bg-[#ffffffd0] duration-300",children:e.jsx(j,{size:16,className:"text-white group-hover:text-black  duration-300"})})]})]}),e.jsx("div",{children:e.jsx("div",{className:" w-full  ",children:e.jsx(f,{dir:"rtl",className:"!z-[unset]",modules:[x,h,m],autoplay:{delay:6e3,disableOnInteraction:!0},pagination:!0,spaceBetween:0,slidesPerView:1,children:r.map((a,s)=>e.jsx(p,{children:e.jsx("div",{className:"h-[50vh] ",onClick:o,children:e.jsx("img",{src:a.image_path,alt:a.caption,loading:"lazy",className:"h-full w-full object-cover"})})},a.image_path))})})}),e.jsx(u,{handleClose:o,images:r,showState:t,handleFavorit:l,handleShare:n})]})}export{C as default};