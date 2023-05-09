import{r as u,R as P}from"./index.0b2a3d34.js";import{c as $,u as B,B as D,f as z,g as s,r as c}from"./Transition.7fc7ce56.js";function Fr(r){const t=u.createContext(null);return[({children:n,value:a})=>P.createElement(t.Provider,{value:a},n),()=>{const n=u.useContext(t);if(n===null)throw new Error(r);return n}]}const Z=typeof document<"u"?u.useLayoutEffect:u.useEffect,rr=P["useId".toString()]||(()=>{});function tr(){const r=rr();return r?`mantine-${r.replace(/:/g,"")}`:""}function er(){return`mantine-${Math.random().toString(36).slice(2,11)}`}function Mr(r){const t=tr(),[e,o]=u.useState(t);return Z(()=>{o(er())},[]),typeof r=="string"?r:typeof window>"u"?t:e}function or(r,t){typeof r=="function"?r(t):typeof r=="object"&&r!==null&&"current"in r&&(r.current=t)}function nr(...r){return t=>{r.forEach(e=>or(e,t))}}function qr(...r){return u.useCallback(nr(...r),r)}function Gr({value:r,defaultValue:t,finalValue:e,onChange:o=()=>{}}){const[n,a]=u.useState(t!==void 0?t:e),l=d=>{a(d),o?.(d)};return r!==void 0?[r,o,!0]:[n,l,!1]}var ar=Object.defineProperty,ir=Object.defineProperties,lr=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,sr=Object.prototype.hasOwnProperty,cr=Object.prototype.propertyIsEnumerable,h=(r,t,e)=>t in r?ar(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,j=(r,t)=>{for(var e in t||(t={}))sr.call(t,e)&&h(r,e,t[e]);if(C)for(var e of C(t))cr.call(t,e)&&h(r,e,t[e]);return r},dr=(r,t)=>ir(r,lr(t)),fr=$(r=>({root:dr(j(j({},r.fn.focusStyles()),r.fn.fontStyles()),{cursor:"pointer",border:0,padding:0,appearance:"none",fontSize:r.fontSizes.md,backgroundColor:"transparent",textAlign:"left",color:r.colorScheme==="dark"?r.colors.dark[0]:r.black,textDecoration:"none",boxSizing:"border-box"})}));const ur=fr;var pr=Object.defineProperty,O=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,I=(r,t,e)=>t in r?pr(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,gr=(r,t)=>{for(var e in t||(t={}))H.call(t,e)&&I(r,e,t[e]);if(O)for(var e of O(t))V.call(t,e)&&I(r,e,t[e]);return r},yr=(r,t)=>{var e={};for(var o in r)H.call(r,o)&&t.indexOf(o)<0&&(e[o]=r[o]);if(r!=null&&O)for(var o of O(r))t.indexOf(o)<0&&V.call(r,o)&&(e[o]=r[o]);return e};const A=u.forwardRef((r,t)=>{const e=B("UnstyledButton",{},r),{className:o,component:n="button",unstyled:a,variant:l}=e,d=yr(e,["className","component","unstyled","variant"]),{classes:y,cx:p}=ur(null,{name:"UnstyledButton",unstyled:a,variant:l});return P.createElement(D,gr({component:n,ref:t,className:p(y.root,o),type:n==="button"?"button":void 0},d))});A.displayName="@mantine/core/UnstyledButton";const Jr=z(A);var _r=Object.defineProperty,vr=Object.defineProperties,br=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,wr=Object.prototype.hasOwnProperty,Or=Object.prototype.propertyIsEnumerable,N=(r,t,e)=>t in r?_r(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,b=(r,t)=>{for(var e in t||(t={}))wr.call(t,e)&&N(r,e,t[e]);if(E)for(var e of E(t))Or.call(t,e)&&N(r,e,t[e]);return r},Sr=(r,t)=>vr(r,br(t));function Pr({underline:r,strikethrough:t}){const e=[];return r&&e.push("underline"),t&&e.push("line-through"),e.length>0?e.join(" "):"none"}function mr({theme:r,color:t}){return t==="dimmed"?r.fn.dimmed():typeof t=="string"&&(t in r.colors||t.split(".")[0]in r.colors)?r.fn.variant({variant:"filled",color:t}).background:t||"inherit"}function xr(r){return typeof r=="number"?{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:r,WebkitBoxOrient:"vertical"}:null}function $r({theme:r,truncate:t}){return t==="start"?{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",direction:r.dir==="ltr"?"rtl":"ltr",textAlign:r.dir==="ltr"?"right":"left"}:t?{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}:null}var kr=$((r,{color:t,lineClamp:e,truncate:o,inline:n,inherit:a,underline:l,gradient:d,weight:y,transform:p,align:g,strikethrough:i,italic:_},{size:v})=>{const m=r.fn.variant({variant:"gradient",gradient:d});return{root:Sr(b(b(b(b({},r.fn.fontStyles()),r.fn.focusStyles()),xr(e)),$r({theme:r,truncate:o})),{color:mr({color:t,theme:r}),fontFamily:a?"inherit":r.fontFamily,fontSize:a||v===void 0?"inherit":s({size:v,sizes:r.fontSizes}),lineHeight:a?"inherit":n?1:r.lineHeight,textDecoration:Pr({underline:l,strikethrough:i}),WebkitTapHighlightColor:"transparent",fontWeight:a?"inherit":y,textTransform:p,textAlign:g,fontStyle:_?"italic":void 0}),gradient:{backgroundImage:m.background,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}});const Cr=kr;var hr=Object.defineProperty,S=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,T=(r,t,e)=>t in r?hr(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,jr=(r,t)=>{for(var e in t||(t={}))L.call(t,e)&&T(r,e,t[e]);if(S)for(var e of S(t))W.call(t,e)&&T(r,e,t[e]);return r},Ir=(r,t)=>{var e={};for(var o in r)L.call(r,o)&&t.indexOf(o)<0&&(e[o]=r[o]);if(r!=null&&S)for(var o of S(r))t.indexOf(o)<0&&W.call(r,o)&&(e[o]=r[o]);return e};const Er={variant:"text"},F=u.forwardRef((r,t)=>{const e=B("Text",Er,r),{className:o,size:n,weight:a,transform:l,color:d,align:y,variant:p,lineClamp:g,truncate:i,gradient:_,inline:v,inherit:m,underline:M,strikethrough:q,italic:G,classNames:Vr,styles:Ar,unstyled:J,span:K,__staticSelector:Q}=e,X=Ir(e,["className","size","weight","transform","color","align","variant","lineClamp","truncate","gradient","inline","inherit","underline","strikethrough","italic","classNames","styles","unstyled","span","__staticSelector"]),{classes:k,cx:Y}=Cr({color:d,lineClamp:g,truncate:i,inline:v,inherit:m,underline:M,strikethrough:q,italic:G,weight:a,transform:l,align:y,gradient:_},{unstyled:J,name:Q||"Text",variant:p,size:n});return P.createElement(D,jr({ref:t,className:Y(k.root,{[k.gradient]:p==="gradient"},o),component:K?"span":"div"},X))});F.displayName="@mantine/core/Text";const Kr=z(F);var Nr=Object.defineProperty,Tr=Object.defineProperties,Rr=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,Ur=Object.prototype.hasOwnProperty,Br=Object.prototype.propertyIsEnumerable,U=(r,t,e)=>t in r?Nr(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,w=(r,t)=>{for(var e in t||(t={}))Ur.call(t,e)&&U(r,e,t[e]);if(R)for(var e of R(t))Br.call(t,e)&&U(r,e,t[e]);return r},x=(r,t)=>Tr(r,Rr(t));const f={xs:c(30),sm:c(36),md:c(42),lg:c(50),xl:c(60)},Dr=["default","filled","unstyled"];function zr({theme:r,variant:t}){return Dr.includes(t)?t==="default"?{border:`${c(1)} solid ${r.colorScheme==="dark"?r.colors.dark[4]:r.colors.gray[4]}`,backgroundColor:r.colorScheme==="dark"?r.colors.dark[6]:r.white,transition:"border-color 100ms ease","&:focus, &:focus-within":r.focusRingStyles.inputStyles(r)}:t==="filled"?{border:`${c(1)} solid transparent`,backgroundColor:r.colorScheme==="dark"?r.colors.dark[5]:r.colors.gray[1],"&:focus, &:focus-within":r.focusRingStyles.inputStyles(r)}:{borderWidth:0,color:r.colorScheme==="dark"?r.colors.dark[0]:r.black,backgroundColor:"transparent",minHeight:c(28),outline:0,"&:focus, &:focus-within":{outline:"none",borderColor:"transparent"},"&:disabled":{backgroundColor:"transparent","&:focus, &:focus-within":{outline:"none",borderColor:"transparent"}}}:null}var Hr=$((r,{multiline:t,radius:e,invalid:o,rightSectionWidth:n,withRightSection:a,iconWidth:l,offsetBottom:d,offsetTop:y,pointer:p},{variant:g,size:i})=>{const _=r.fn.variant({variant:"filled",color:"red"}).background,v=g==="default"||g==="filled"?{minHeight:s({size:i,sizes:f}),paddingLeft:`calc(${s({size:i,sizes:f})}  / 3)`,paddingRight:a?n||s({size:i,sizes:f}):`calc(${s({size:i,sizes:f})}  / 3)`,borderRadius:r.fn.radius(e)}:null;return{wrapper:{position:"relative",marginTop:y?`calc(${r.spacing.xs} / 2)`:void 0,marginBottom:d?`calc(${r.spacing.xs} / 2)`:void 0},input:x(w(w(x(w({},r.fn.fontStyles()),{height:t?g==="unstyled"?void 0:"auto":s({size:i,sizes:f}),WebkitTapHighlightColor:"transparent",lineHeight:t?r.lineHeight:`calc(${s({size:i,sizes:f})} - ${c(2)})`,appearance:"none",resize:"none",boxSizing:"border-box",fontSize:s({size:i,sizes:r.fontSizes}),width:"100%",color:r.colorScheme==="dark"?r.colors.dark[0]:r.black,display:"block",textAlign:"left",cursor:p?"pointer":void 0}),zr({theme:r,variant:g})),v),{"&:disabled, &[data-disabled]":{backgroundColor:r.colorScheme==="dark"?r.colors.dark[6]:r.colors.gray[1],color:r.colors.dark[2],opacity:.6,cursor:"not-allowed","&::placeholder":{color:r.colors.dark[2]}},"&[data-invalid]":{color:_,borderColor:_,"&::placeholder":{opacity:1,color:_}},"&[data-with-icon]":{paddingLeft:typeof l=="number"?c(l):s({size:i,sizes:f})},"&::placeholder":x(w({},r.fn.placeholderStyles()),{opacity:1}),"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",width:l?c(l):s({size:i,sizes:f}),color:o?r.colors.red[r.colorScheme==="dark"?6:7]:r.colorScheme==="dark"?r.colors.dark[2]:r.colors.gray[5]},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center",width:n||s({size:i,sizes:f})}}});const Qr=Hr;export{Kr as T,Jr as U,qr as a,Mr as b,Fr as c,Z as d,Qr as e,nr as m,er as r,f as s,Gr as u};
