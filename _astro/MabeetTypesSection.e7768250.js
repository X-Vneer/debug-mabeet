import{r as d,R as u}from"./index.0b2a3d34.js";import{S as p}from"./SectionHeader.011e90ab.js";import{S as x}from"./SecBtn.7df849cb.js";import{j as e}from"./jsx-runtime.32b752e4.js";import{n as f,p as g}from"./chevron-left.0c84a668.js";import{S as h,a as j}from"./swiper-slide.9a12e94f.js";import{N as v}from"./navigation.6cf6b7ea.js";import{u as N}from"./useFetcher.eba3529e.js";import{M as b}from"./MainLoader.0b1e9c65.js";import"./index.413c1286.js";import"./index.1c0a9886.js";import"./index.e77bb1b1.js";import"./index.6a506d10.js";const w=({image:a,name:r,id:i,slug:n})=>{const[l,s]=d.useState(!1);return e.jsx("div",{dir:"rtl",lang:"ar",className:"px-2 lg:px-3",children:e.jsxs("div",{onDragStart:t=>{t.preventDefault(),s(!0)},onMouseDown:()=>s(!1),onClick:t=>{l&&t.preventDefault()},className:" aspect-[5/3] lg:aspect-[9/4] block rounded-2xl overflow-hidden relative",children:[e.jsx("img",{src:a,onDragStart:t=>{s(!0)},alt:r,className:"w-full h-full object-cover"}),e.jsx("div",{className:" absolute left-0 bottom-0 right-0 top-1/3 duration-300 z-1",style:{background:"linear-gradient(360deg,rgba(0,0,0,.7),transparent)"},children:e.jsxs("div",{className:"p-3 absolute left-0 right-0 bottom-0 mt-auto flex justify-between items-center ",children:[e.jsx("h3",{className:"text-white font-bold text-lg  lg:text-2xl",children:r}),e.jsx(x,{type:"link",className:"font-meduim w-fit h-fit",link:"/units/?q="+n+"&type="+i,children:"احجز الأن"})]})})]})})},z=({data:a})=>{const[r,i]=d.useState(!1),{data:n,isLoading:l,error:s}=N({url:"home/unit-types",options:{headers:{"Accept-Language":"ar-SA,ar;q=0.9"}}}),t=n?.map(o=>e.jsx(h,{children:e.jsx(w,{...o},o.id)},o.id)),c=u.useRef(null),m=u.useRef(null);return e.jsxs("section",{className:"py-10  bg-bgGray",children:[e.jsx("div",{className:"container",children:e.jsxs("div",{className:"flex justify-between mb-6",children:[e.jsx(p,{...a.header,h2ClassName:"![text-align:initial]",pClassName:"!m-[unset] ![text-align:initial]"}),e.jsxs("div",{className:"flex",children:[e.jsx("button",{ref:c,title:"next slide",className:" h-full w-16 xl:w-20 flex items-center group justify-center ",children:e.jsx("img",{src:f,alt:"next",className:"w-6 group-hover:translate-x-1 group-hover:text-mainColor duration-150"})}),e.jsx("button",{ref:m,title:"previous slide",className:" h-full w-16 xl:w-20 flex items-center group justify-center ",children:e.jsx("img",{src:g,alt:"prevous",className:"w-6 group-hover:translate-x-1 group-hover:text-mainColor duration-150"})})]})]})}),l?e.jsx("div",{className:"py-20",children:e.jsx(b,{})}):e.jsx("div",{className:"container !px-1",children:e.jsx(j,{onInit:()=>i(!0),navigation:{prevEl:c.current,nextEl:m.current},modules:[v],dir:"rtl",className:"!z-[unset]",loop:!0,autoplay:{delay:2e3,disableOnInteraction:!0},spaceBetween:0,slidesPerView:1.2,breakpoints:{768:{slidesPerView:2.3,spaceBetween:0}},children:t})})]})};export{z as default};
