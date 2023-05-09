import{r as i}from"./index.0b2a3d34.js";import{r as o,B as k,a as F,f as H}from"./index.a34f4eb9.js";import{S as L,B as $,F as I}from"./index.e27e1bad.js";import{S as P,G as T,a as V}from"./index.19392108.js";import{u as q}from"./useFetcher.cd45a1ad.js";import{M as A}from"./MainLoader.0b1e9c65.js";import{M as D}from"./MobileReservatuibDetails.4f24e6a5.js";import{u as U}from"./shallow.c4dd725a.js";import{j as e}from"./jsx-runtime.32b752e4.js";import{e as K,M as Q}from"./Transition.7fc7ce56.js";import"./get-styles-ref.1f22bf7e.js";import"./Input.styles.245fc4a1.js";import"./index.fec1b19f.js";import"./index.379baa8a.js";import"./index.2c513237.js";import"./useBusyDays.bc87833d.js";import"./DatePickerInput.2632e018.js";import"./Input.bbfd09fa.js";import"./Overlay.edac5e4d.js";import"./get-default-z-index.b47c3510.js";import"./Popover.9cb33b5d.js";import"./index.a737fefa.js";var W=o.GenIcon,_=function(l){return W({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M255 22.31c-21.2 0-40.5 10.78-50.5 27.63l-4.4 7.42-7.6-4.08c-7.1-3.85-15.2-5.89-23.3-5.89-28.3 0-51.3 23.57-51.3 53.21 0 26.5 18.6 48.6 43.5 52.6l7.6 1.2v53.4c57.9-11.1 116-11.6 174 0v-69.7l4.8-2.6c15.7-8.3 26.1-26.1 26.1-46.15 0-28.8-20.7-51.12-45.4-51.12-6.5 0-13 1.61-18.9 4.72l-6.2 3.2-4.6-5.09C288 29.29 272 22.31 255 22.31zm1 194.79c-25.6 0-51.1 2.4-76.7 7-.9 6-1.3 12.2-1.3 18.6 0 29 9.2 55.2 23.6 73.7 14.4 18.5 33.5 29.3 54.4 29.3s40-10.8 54.4-29.3c14.4-18.5 23.6-44.7 23.6-73.7 0-6.4-.5-12.7-1.3-18.7-25.6-4.7-51.1-7-76.7-6.9zM208.7 348l-89.2 29.7-27.98 112H321.6L307.1 388l17.8-2.6 14.9 104.3h80.7l-28-112-89.2-29.7c-13.8 9.9-30 15.7-47.3 15.7-17.3 0-33.5-5.8-47.3-15.7zm69.3 52.7a9.999 9.999 0 0 1 10 10 9.999 9.999 0 0 1-10 10 9.999 9.999 0 0 1-10-10 9.999 9.999 0 0 1 10-10zm7 46a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10z"}}]})(l)},J=o.GenIcon,O=function(l){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M4 18v3h3v-3h10v3h3v-6H4v3zm15-8h3v3h-3v-3zM2 10h3v3H2v-3zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"}}]})(l)};const n=({children:s})=>e.jsx("div",{className:"flex  gap-2 items-center  w-1/2 text-textGray",children:s}),Ne=({insurance:s,room_count:l,halls_count:d,toilets_count:h,pools_count:p,kitchens_count:j,id:v,details:u,checkin:f,checkout:b,location:N,unit_area:g,unit_code:z,unit_for:M,unit_name:y,province:C,city:G})=>{const a=K("(max-width: 992px)"),w=a?[{label:"حجز والغاء",value:"terms"},{label:"الخريطة",value:"map"},{label:"التقييمات",value:"reviews"},{label:"المواصفات ",value:"default"}]:[{label:" شروط الحجز والالغاء",value:"terms"},{label:"تقييمات الضيوف",value:"reviews"},{label:"المواصفات والميزات",value:"default"}],[t,B]=i.useState("default"),c=i.useRef(null),m=`units/${v}/terms`,{data:S,isLoading:r,error:R}=q({reqKey:t==="terms"?m:null,url:m}),x=i.useRef(null);return i.useEffect(()=>{!r&&c.current&&(c.current.innerHTML=S||"Something wrong happend"),x.current&&(x.current.innerHTML=u)},[r,t]),U(E=>E.showReservation)?null:e.jsx(Q,{theme:{colors:{brand:["#eee","#49bfb6","#49bfb6","#49bfb6","#49bfb6","#49bfb6","#49bfb6","#49bfb6","#C50E82","#49bfb6"]},primaryColor:"brand"},children:e.jsxs("div",{className:"pb-10",children:[e.jsx("div",{dir:"ltr",children:e.jsx(L,{fullWidth:!0,size:a?"xs":"lg",classNames:{label:a?"":"!text-sm"},radius:40,data:w,color:"#49bfb6",value:t,onChange:B})}),t==="default"?e.jsxs(e.Fragment,{children:[a?e.jsxs("div",{className:"py-6 border-b border-[#ccc]",children:[e.jsx("div",{className:"pb-3",children:e.jsxs("h1",{className:"text-customBlack font-bold text-xl",children:[y," ",e.jsxs("span",{className:"text-[10px] text-normal text-textGray",children:["( كود الوحدة (",z,") )"]})]})}),e.jsxs("div",{className:" text-sm font-medium",children:[e.jsxs("div",{className:"flex items-center mb-3  ",children:[e.jsxs(n,{children:[e.jsx(k,{className:"text-textGray"}),e.jsx("p",{children:"لا يوجد"})]}),e.jsxs(n,{children:[e.jsx(P,{className:"text-textGray"}),e.jsxs("p",{children:[C," - ",G]})]})]}),e.jsxs("div",{className:"flex items-center ",children:[e.jsxs(n,{children:[e.jsx(T,{className:"text-textGray"}),e.jsxs("p",{children:["مساحة الوحدة (",g,")"]})]}),e.jsxs(n,{children:[e.jsx(F,{className:"text-textGray"}),e.jsxs("p",{children:["مخصص ل",M]})]})]})]})]}):null,e.jsxs("div",{className:"border-b border-[#ccc] pb-4 lg:pb-7",children:[e.jsx("h2",{className:"text-customBlack font-semibold text-xl lg:text-2xl my-4 max-lg:text-center",children:"الوصف"}),e.jsx("div",{className:"!text-sm ",ref:x})]}),e.jsxs("div",{className:"pt-10 text-customBlack font-medium",children:[e.jsx("h2",{className:"text-[20px] lg:text-[28px] font-semibold ",children:"المواصفات و الميزات"}),e.jsxs("div",{className:"py-6 border-b border-[#ccc] flex gap-2 items-center text-lg ",children:[e.jsx(H,{}),e.jsx("p",{className:" max-lg:text-base",children:s?`يوجد مبلغ تأمين ${s} ريال يدفع عند الوصول`:"لا يتطلب تأمين عند الوصول"})]}),e.jsxs("div",{className:"py-7 flex gap-10  flex-wrap",children:[e.jsxs("div",{className:"max-lg:text-sm flex items-center gap-3",children:[e.jsx($,{size:26})," ",e.jsxs("div",{children:[e.jsx("p",{children:"عدد الغرف"}),e.jsx("span",{className:"text-mainColor text-xl",children:l})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(O,{size:26})," ",e.jsxs("div",{children:[e.jsx("p",{children:"عدد الصالات"}),e.jsx("span",{className:"text-mainColor text-xl",children:d})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(_,{size:26})," ",e.jsxs("div",{children:[e.jsx("p",{children:"المطابخ"}),e.jsx("span",{className:"text-mainColor text-xl",children:j})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(V,{size:26})," ",e.jsxs("div",{children:[e.jsx("p",{children:"دورات المياه"}),e.jsx("span",{className:"text-mainColor text-xl",children:h})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(I,{size:26})," ",e.jsxs("div",{children:[e.jsx("p",{children:"المسابح"}),e.jsx("span",{className:"text-mainColor text-xl",children:p})]})]})]})]}),a?e.jsx(D,{checkin:f,checkout:b}):null]}):null,t==="terms"?e.jsxs("div",{className:"py-10 unit-terms",children:[r?e.jsx(A,{}):null,!r&&!R?e.jsx("h3",{className:"font-medium mb-4 text-2xl",children:"شروط الحجز و الالغاء"}):null,e.jsx("div",{ref:c,className:"px-4"})]}):null,t==="map"?e.jsxs("div",{className:"text-center py-5",children:[e.jsx("p",{className:"text-lg font-semibold mb-3",children:"الخريطة"}),e.jsx("a",{className:"text-blue-500 text-base hover:text-blue-700 duration-200",target:"_blank",rel:"noopener",href:N,children:"عرض الخريطة"})]}):null]})})};export{Ne as default};
