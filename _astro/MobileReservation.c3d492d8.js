import{M as x}from"./MainBtn.613ab098.js";import{g as p,a as i}from"./index.2c513237.js";import{u as h}from"./useFetcher.cd45a1ad.js";import{u as n,s as g}from"./shallow.c4dd725a.js";import{M as u}from"./MainLoader.0b1e9c65.js";import{j as e}from"./jsx-runtime.32b752e4.js";import"./index.379baa8a.js";import"./index.0b2a3d34.js";import"./index.fec1b19f.js";const M=()=>{const{setShowReservation:l,setShowLogin:m}=n(s=>({setShowReservation:s.setShowReservation,setShowLogin:s.setShowLogIn}),g),d=()=>{if(window.localStorage.getItem("mabeet-user")){l(!0);return}m(s=>({showLogin:!0}))},t=n(s=>s.dates),o=`/units/${p("id")}/availability?from=${i(t[0])}&to=${i(t[1])}`,{data:a,isLoading:r,error:c}=h({reqKey:t[1]?o:null,url:o,options:{headers:{"Accept-Language":"ar-SA,ar;q=0.9"}}});return e.jsx("div",{style:{boxShadow:"0 -8px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"},className:"flex items-center fixed z-[2] bottom-0 gap-1  inset-x-0 py-4 px-5 bg-customWhite shadow-lg lg:hidden ",children:r?e.jsx("div",{className:"grow",children:e.jsx("div",{className:"w-fit ml-0 mr-auto",children:e.jsx(u,{className:"!p-1 h-14 scale-75 -translate-y-3"})})}):e.jsx(e.Fragment,{children:c?e.jsx("p",{className:"text-red-600",children:"Something went wrong!"}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[" ",e.jsx(x,{onClick:d,type:"button",className:"!px-14 font-medium",children:"اختر"})," "]}),e.jsxs("div",{className:" text-sm text-textGray  text-left grow ",children:[e.jsxs("p",{className:"pb-2",children:[e.jsx("span",{className:"text-mainColor font-semibold",children:r?"loading...":a?.price}),"/ ليلة"]}),e.jsxs("p",{children:["أجمالي ",e.jsx("span",{children:a?.duration_count})," ",e.jsx("span",{className:"text-mainColor font-semibold ",children:a?.final})]})]})]})})})};export{M as default};
