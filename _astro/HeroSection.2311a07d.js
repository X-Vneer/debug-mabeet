import{s as o}from"./index.36bec02e.js";import{S as n,a as m}from"./swiper-slide.0d840efe.js";import"./index.e76fa941.js";import{A as c}from"./autoplay.3282c5ed.js";import{S as d}from"./SecBtn.9ed47aed.js";import{j as t}from"./jsx-runtime.fd9a4f39.js";import{m as r,L as p,d as x}from"./features-animation.f23f04cf.js";import"./create-visual-element.2c12e3f8.js";const g="/_astro/svg1.7cf4d313.svg",h="/_astro/svg2.2be8dbad.svg",u={hidden:e=>({y:e<2?20:0,x:e>=2?20:0,opacity:0}),visible:()=>({y:0,x:0,opacity:1,transition:{duration:.5,delay:.5}})},s=e=>e.preventDefault(),f=o.map((e,i)=>t.jsx(n,{children:t.jsxs(r.div,{initial:{filter:"blur(8px)"},whileInView:{filter:"blur(0px)",transition:{delay:.4}},className:"max-lg:h-[70vh] overflow-hidden cursor-grab relative  select-none ",children:[t.jsx("img",{className:"h-full w-full object-cover  lg:w-full",onDragStart:s,role:"presentation",src:e.image,alt:"background slider "}),t.jsx("div",{className:" absolute top-0 right-0 bottom-0 mt-auto left-1/4  duration-300 z-1 flex   items-center   ",style:{background:"linear-gradient(to left,rgba(0,0,0,.6),rgba(0,0,0,.5),rgba(0,0,0,.3),transparent)"},children:t.jsxs("div",{dir:"rtl",className:"p-3  text-right pr-8 lg:pr-20 ",children:[e.content.map((a,l)=>t.jsx(r.h2,{variants:u,initial:"hidden",whileInView:"visible",custom:l+1,className:`text-white font-bold  select-none ${a.size==="lg"&&"text-[22px] lg:text-[38px] !leading-[1.5]   whitespace-pre-wrap"}
                ${a.size==="sm"&&"lg:text-lg !text-mainColor"}

                `,children:a.title},a.title)),t.jsx(d,{type:"link",className:"font-meduim w-fit h-fit mt-6",link:"#",children:"احجز الأن"})]})})]})},i)),D=()=>t.jsx(p,{features:x,children:t.jsxs("section",{className:"relative overflow-hidden hero-section ",children:[t.jsx("div",{className:" w-full  ",children:t.jsx(m,{dir:"rtl",className:"!z-[unset]",loop:!0,modules:[c],autoplay:{delay:3e3,disableOnInteraction:!0},spaceBetween:30,slidesPerView:1,children:f})}),t.jsx("img",{alt:"shap",onDragStart:s,src:g,className:"absolute max-w-none  -left-1 -right-1 -top-8 xl:-top-12 2xl:top-[-60px] min-[1700px]:top-[-90px]  rotate-2 max-lg:hidden z-[1] "}),t.jsx("img",{alt:"shap",onDragStart:s,src:h,className:"absolute max-w-none  -left-1 -right-1 -bottom-1  z-[1]    "})]})});export{D as default};