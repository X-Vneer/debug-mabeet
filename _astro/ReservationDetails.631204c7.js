import{u as i}from"./index.64890424.js";import{a as p}from"./index.822b3daa.js";import{s as x}from"./shallow.9563ddbe.js";import{U as d,M as h}from"./UnitBasicDetails.760d6e4e.js";import{S as e}from"./Skeleton.a6d268c9.js";import{j as s}from"./jsx-runtime.32b752e4.js";import"./index.0b2a3d34.js";import"./index.1c0a9886.js";import"./index.8844c111.js";import"./index.e77bb1b1.js";import"./index.6a506d10.js";import"./useBusyDays.68dd123a.js";import"./useFetcher.eba3529e.js";import"./index.413c1286.js";import"./DatePickerInput.961328e7.js";import"./Transition.fdec9ac0.js";import"./Text.5b63783a.js";import"./Loader.9f91644a.js";import"./use-input-props.c60d46d4.js";import"./Input.styles.becb1a1b.js";import"./CloseButton.50a20970.js";import"./ActionIcon.a2eaccaa.js";import"./UnstyledButton.7b2d4165.js";import"./use-merged-ref.d4736d19.js";import"./Overlay.0fbfbb1d.js";import"./get-default-z-index.b47c3510.js";import"./Popover.bb8b8da1.js";import"./index.9dee6ded.js";import"./Portal.c9ae93e7.js";import"./Input.9c23a1cb.js";import"./ChevronIcon.e00c8a6a.js";import"./events.f9ec1bb8.js";import"./index.c69ec769.js";const V=()=>{const{isLoading:r,error:l,data:o}=i(t=>t.unitData),{showReservation:a,setShowReservation:m}=i(t=>({showReservation:t.showReservation,setShowReservation:t.setShowReservation}),x),c=()=>{m(!1)};return l?null:a?s.jsxs("div",{children:[s.jsxs("h2",{className:"font-bold text-2xl lg:text-[32px] flex items-center gap-4 max-lg:pt-4 mb-4 lg:mb-6",children:[s.jsx("button",{title:"go back",onClick:c,className:"flex items-center group   justify-center aspect-square w-9 bg-customWhite rounded-full",children:s.jsx(p,{className:" text-customBlack text-xl lg:text-4xl duration-300"})}),"المراجعة والدفع"]}),s.jsx(d,{isLoading:r,data:o}),s.jsxs("div",{className:"py-10 unit-terms",children:[s.jsx("h3",{className:"font-bold mb-4 text-xl lg:text-2xl",children:"شروط الحجز و الالغاء"}),s.jsx("ul",{className:"px-4 list-inside list-disc",children:o?.terms.map((t,n)=>s.jsx("li",{className:"py-2 lg:py-3",children:s.jsx("p",{className:"inline",children:t})},n))}),r?s.jsxs("div",{className:"mt-2",children:[s.jsx(e,{className:"w-2/3 h-3 lg:h-4 mb-4 rounded !block"}),s.jsx(e,{className:"w-2/3 h-3 lg:h-4 mb-4 rounded !block"}),s.jsx(e,{className:"w-1/3 h-3 lg:h-4 mb-5 rounded !block"}),s.jsx(e,{className:"w-2/3 h-3 lg:h-4 mb-4 rounded !block"}),s.jsx(e,{className:"w-1/3 h-3 lg:h-4 mb-4 rounded !block"})]}):null]}),s.jsx("div",{className:"block lg:hidden pb-8",children:s.jsx(h,{allowChangeDate:!1,checkin:o?.checkin||"",checkout:o?.checkout||""})})]}):null};export{V as default};
