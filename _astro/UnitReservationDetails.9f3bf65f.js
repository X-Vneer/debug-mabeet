import{r as S}from"./index.0b2a3d34.js";import{g as R,a}from"./index.2c513237.js";import{u as C}from"./useFetcher.cd45a1ad.js";import{M as G}from"./MainLoader.0b1e9c65.js";import{D as L}from"./DatePickerComponent.7c13dc63.js";import{u as x,s as p}from"./shallow.c4dd725a.js";import{M}from"./MainBtn.613ab098.js";import{u as E}from"./useBusyDays.bc87833d.js";import{j as e}from"./jsx-runtime.32b752e4.js";import{M as _}from"./Transition.7fc7ce56.js";import"./index.379baa8a.js";import"./index.fec1b19f.js";import"./index.a34f4eb9.js";import"./DatePickerInput.2632e018.js";import"./Input.styles.245fc4a1.js";import"./Input.bbfd09fa.js";import"./Overlay.edac5e4d.js";import"./get-default-z-index.b47c3510.js";import"./Popover.9cb33b5d.js";import"./index.a737fefa.js";const ee=({checkin:h,checkout:b})=>{let[l,r,n]=R(["id","from","to"]);r=r||a(new Date),n=n||a(new Date(new Date().setDate(new Date().getDate()+1)));const[i,c]=x(s=>[s.dates,s.setDates],p),j=s=>{c(()=>({dates:s}))};S.useEffect(()=>{c(()=>({dates:[new Date(r),new Date(n)]}))},[]);const{busyDays:u,handleStartDateChange:f,error:y}=E({id:l,initialDate:r}),d=`/units/${l}/availability?from=${a(i[0])}&to=${a(i[1])}`,{data:t,isLoading:w,error:F}=C({reqKey:i[1]?d:null,url:d,options:{headers:{"Accept-Language":"ar-SA,ar;q=0.9"}}}),{showReservation:o,setShowReservation:g,setShowLogin:v}=x(s=>({showReservation:s.showReservation,setShowReservation:s.setShowReservation,setShowLogin:s.setShowLogIn}),p),N=()=>{if(window.localStorage.getItem("mabeet-user")){g(!0);return}v(s=>({showLogin:!0}))};return e.jsx(_,{theme:{dir:"rtl",colors:{brand:["#eee","#49bfb6","#49bfb6","#49bfb6","#49bfb6","#49bfb6","#49bfb6","#49bfb6","#C50E82","#49bfb6"]},primaryColor:"brand"},children:e.jsx("div",{style:{boxShadow:"rgba(0, 0, 0, 0.08) 0px 20px 64px"},className:"mx-auto border border-[#ccc] pb-6  rounded-[20px]",children:w?e.jsx("div",{className:"flex items-center  justify-center min-h-[590px]",children:e.jsx(G,{})}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"p-6 border-b text-textGray   border-b-[#eee]",children:[e.jsxs("p",{className:"pb-2",children:[e.jsx("span",{className:"text-mainColor",children:t?.price}),"/ ليلة"]}),e.jsxs("p",{children:["أجمالي ",e.jsx("span",{children:t?.duration_count})," ",e.jsx("span",{className:"text-mainColor font-semibold ",children:t?.final})]})]}),e.jsxs("div",{className:"flex  justify-between px-6 py-5 text-sm",children:[e.jsx("span",{children:t?.duration_count}),o?null:e.jsx("span",{children:"بإمكانك تعديل التاريخ"})]}),y?e.jsxs("p",{className:"text-sm py-10 text-center text-red-600",children:["Something Wrong happend!",e.jsx("br",{}),"try to reload the page"]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"pb-5 px-6 border-b border-b-[#eee] reservation-calender",children:[e.jsx(L,{readonly:o,handleDateChange:f,value:i,setValue:j,renderFun:s=>{const D=s.getDate(),m=u.includes(a(s));return e.jsxs("div",{className:m?"opacity-50":"",children:[D," ",m&&e.jsx("span",{className:"absolute top-1 bottom-1 right-[18px] rotate-45 w-[1px] bg-textGray origin-center"})," "]})}}),e.jsxs("div",{className:"flex gap-4  pt-6",children:[e.jsxs("div",{className:"w-1/2",children:[e.jsx("p",{className:"text-textGray font-medium  text-sm",children:"وقت الوصول"}),e.jsx("span",{children:h})]}),e.jsxs("div",{className:"w-1/2",children:[e.jsx("p",{className:"text-textGray font-medium  text-sm",children:"وقت المغادرة"}),e.jsx("span",{children:b})]})]})]}),e.jsxs("div",{className:"p-6",children:[o?null:e.jsx(M,{onClick:N,type:"button",className:"font-medium w-full",children:"اختر"}),e.jsxs("p",{className:"text-center pt-2 text-sm font-medium text-textGray",children:["ستدفع الان ",e.jsx("span",{children:t?.down_payment})]})]})]}),e.jsxs("div",{className:"px-6 border-b border-[#eee]",children:[e.jsxs("div",{className:"flex justify-between pb-2 font-medium",children:[e.jsx("p",{children:t?.duration_count}),e.jsx("p",{children:t?.total})]}),e.jsxs("div",{className:"flex justify-between pb-2 text-sm ",children:[e.jsx("p",{children:"التامين"}),e.jsx("p",{className:"text-textGray",children:t?.insurance})]}),e.jsxs("div",{className:"flex justify-between pb-2 text-sm ",children:[e.jsx("p",{children:"رسوم الخدمة"}),e.jsx("p",{className:"text-textGray",children:t?.customer_fees})]})]}),e.jsxs("div",{className:"flex justify-between py-2 px-6",children:[e.jsx("p",{children:"الإجمالي"}),e.jsx("p",{children:t?.final})]})]})})})};export{ee as default};
