import{r as c,R as P}from"./index.0b2a3d34.js";import{c as b,g as l,r as S,u as h,B as z}from"./Text.5b63783a.js";function G(r){return c.Children.toArray(r).filter(Boolean)}const N={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"};var C=b((r,{spacing:e,position:t,noWrap:a,grow:n,align:i,count:o})=>({root:{boxSizing:"border-box",display:"flex",flexDirection:"row",alignItems:i||"center",flexWrap:a?"nowrap":"wrap",justifyContent:N[t],gap:l({size:e,sizes:r.spacing}),"& > *":{boxSizing:"border-box",maxWidth:n?`calc(${100/o}% - (${S(l({size:e,sizes:r.spacing}))} - ${l({size:e,sizes:r.spacing})} / ${o}))`:void 0,flexGrow:n?1:0}}}));const I=C;var R=Object.defineProperty,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,f=(r,e,t)=>e in r?R(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,$=(r,e)=>{for(var t in e||(e={}))d.call(e,t)&&f(r,t,e[t]);if(s)for(var t of s(e))m.call(e,t)&&f(r,t,e[t]);return r},j=(r,e)=>{var t={};for(var a in r)d.call(r,a)&&e.indexOf(a)<0&&(t[a]=r[a]);if(r!=null&&s)for(var a of s(r))e.indexOf(a)<0&&m.call(r,a)&&(t[a]=r[a]);return t};const E={position:"left",spacing:"md"},W=c.forwardRef((r,e)=>{const t=h("Group",E,r),{className:a,position:n,align:i,children:o,noWrap:g,grow:u,spacing:x,unstyled:y,variant:_}=t,v=j(t,["className","position","align","children","noWrap","grow","spacing","unstyled","variant"]),p=G(o),{classes:O,cx:w}=I({align:i,grow:u,noWrap:g,spacing:x,position:n,count:p.length},{unstyled:y,name:"Group",variant:_});return P.createElement(z,$({className:w(O.root,a),ref:e},v),p)});W.displayName="@mantine/core/Group";export{W as G};