import{r as $,R as S}from"./index.0b2a3d34.js";import{c as h,r as E,u as R,B as C,f as D}from"./Transition.7fc7ce56.js";import{g as z}from"./get-default-z-index.b47c3510.js";var B=Object.defineProperty,V=Object.defineProperties,F=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,p=(e,r,a)=>r in e?B(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,A=(e,r)=>{for(var a in r||(r={}))Z.call(r,a)&&p(e,a,r[a]);if(c)for(var a of c(r))q.call(r,a)&&p(e,a,r[a]);return e},G=(e,r)=>V(e,F(r)),H=h((e,{color:r,opacity:a,blur:t,radius:n,gradient:o,fixed:l,zIndex:i})=>({root:G(A({},e.fn.cover(0)),{position:l?"fixed":"absolute",backgroundColor:o?void 0:e.fn.rgba(r,a),backgroundImage:o,backdropFilter:t?`blur(${E(t)})`:void 0,borderRadius:e.fn.radius(n),zIndex:i,"&[data-center]":{display:"flex",alignItems:"center",justifyContent:"center"}})}));const J=H;var K=Object.defineProperty,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,f=(e,r,a)=>r in e?K(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,L=(e,r)=>{for(var a in r||(r={}))d.call(r,a)&&f(e,a,r[a]);if(s)for(var a of s(r))_.call(r,a)&&f(e,a,r[a]);return e},M=(e,r)=>{var a={};for(var t in e)d.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&s)for(var t of s(e))r.indexOf(t)<0&&_.call(e,t)&&(a[t]=e[t]);return a};const Q={opacity:.6,color:"#000",zIndex:z("modal"),radius:0},v=$.forwardRef((e,r)=>{const a=R("Overlay",Q,e),{variant:t,opacity:n,color:o,blur:l,gradient:i,zIndex:m,radius:u,children:y,className:O,classNames:P,styles:g,unstyled:b,center:w,fixed:x}=a,I=M(a,["variant","opacity","color","blur","gradient","zIndex","radius","children","className","classNames","styles","unstyled","center","fixed"]),{classes:j,cx:N}=J({color:o,opacity:n,blur:l,radius:u,gradient:i,fixed:x,zIndex:m},{name:"Overlay",classNames:P,styles:g,unstyled:b,variant:t});return S.createElement(C,L({ref:r,className:N(j.root,O),"data-center":w||void 0},I),y)});v.displayName="@mantine/core/Overlay";const X=D(v);export{X as O};