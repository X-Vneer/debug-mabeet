import{R as v,r as x}from"./index.0b2a3d34.js";import{l as I,a as P,r as a,c as C,g as t}from"./Text.5b63783a.js";const O=v["useId".toString()]||(()=>{});function $(){const o=O();return o?`mantine-${o.replace(/:/g,"")}`:""}function U(o){const r=$(),[n,d]=x.useState(r);return I(()=>{d(P())},[]),typeof o=="string"?o:typeof window>"u"?r:n}var R=Object.defineProperty,j=Object.defineProperties,E=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,y=(o,r,n)=>r in o?R(o,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[r]=n,i=(o,r)=>{for(var n in r||(r={}))H.call(r,n)&&y(o,n,r[n]);if(g)for(var n of g(r))A.call(r,n)&&y(o,n,r[n]);return o},f=(o,r)=>j(o,E(r));const l={xs:a(30),sm:a(36),md:a(42),lg:a(50),xl:a(60)},T=["default","filled","unstyled"];function N({theme:o,variant:r}){return T.includes(r)?r==="default"?{border:`${a(1)} solid ${o.colorScheme==="dark"?o.colors.dark[4]:o.colors.gray[4]}`,backgroundColor:o.colorScheme==="dark"?o.colors.dark[6]:o.white,transition:"border-color 100ms ease","&:focus, &:focus-within":o.focusRingStyles.inputStyles(o)}:r==="filled"?{border:`${a(1)} solid transparent`,backgroundColor:o.colorScheme==="dark"?o.colors.dark[5]:o.colors.gray[1],"&:focus, &:focus-within":o.focusRingStyles.inputStyles(o)}:{borderWidth:0,color:o.colorScheme==="dark"?o.colors.dark[0]:o.black,backgroundColor:"transparent",minHeight:a(28),outline:0,"&:focus, &:focus-within":{outline:"none",borderColor:"transparent"},"&:disabled":{backgroundColor:"transparent","&:focus, &:focus-within":{outline:"none",borderColor:"transparent"}}}:null}var V=C((o,{multiline:r,radius:n,invalid:d,rightSectionWidth:u,withRightSection:b,iconWidth:c,offsetBottom:k,offsetTop:S,pointer:w},{variant:s,size:e})=>{const p=o.fn.variant({variant:"filled",color:"red"}).background,_=s==="default"||s==="filled"?{minHeight:t({size:e,sizes:l}),paddingLeft:`calc(${t({size:e,sizes:l})}  / 3)`,paddingRight:b?u||t({size:e,sizes:l}):`calc(${t({size:e,sizes:l})}  / 3)`,borderRadius:o.fn.radius(n)}:s==="unstyled"&&b?{paddingRight:u||t({size:e,sizes:l})}:null;return{wrapper:{position:"relative",marginTop:S?`calc(${o.spacing.xs} / 2)`:void 0,marginBottom:k?`calc(${o.spacing.xs} / 2)`:void 0},input:f(i(i(f(i({},o.fn.fontStyles()),{height:r?s==="unstyled"?void 0:"auto":t({size:e,sizes:l}),WebkitTapHighlightColor:"transparent",lineHeight:r?o.lineHeight:`calc(${t({size:e,sizes:l})} - ${a(2)})`,appearance:"none",resize:"none",boxSizing:"border-box",fontSize:t({size:e,sizes:o.fontSizes}),width:"100%",color:o.colorScheme==="dark"?o.colors.dark[0]:o.black,display:"block",textAlign:"left",cursor:w?"pointer":void 0}),N({theme:o,variant:s})),_),{"&:disabled, &[data-disabled]":{backgroundColor:o.colorScheme==="dark"?o.colors.dark[6]:o.colors.gray[1],color:o.colors.dark[2],opacity:.6,cursor:"not-allowed","&::placeholder":{color:o.colors.dark[2]}},"&[data-invalid]":{color:p,borderColor:p,"&::placeholder":{opacity:1,color:p}},"&[data-with-icon]":{paddingLeft:typeof c=="number"?a(c):t({size:e,sizes:l})},"&::placeholder":f(i({},o.fn.placeholderStyles()),{opacity:1}),"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",width:c?a(c):t({size:e,sizes:l}),color:d?o.colors.red[o.colorScheme==="dark"?6:7]:o.colorScheme==="dark"?o.colors.dark[2]:o.colors.gray[5]},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center",width:u||t({size:e,sizes:l})}}});const B=V;export{B as a,l as s,U as u};
