import{r as o,R as n}from"./index.0b2a3d34.js";import{r as s,u as $,b as C,B as j,g as z}from"./Text.5b63783a.js";function R(e,t){try{return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}catch{return e.addListener(t),()=>e.removeListener(t)}}function I(e,t){return typeof t=="boolean"?t:typeof window<"u"&&"matchMedia"in window?window.matchMedia(e).matches:!1}function L(e,t,{getInitialValueInEffect:r}={getInitialValueInEffect:!0}){const[a,i]=o.useState(r?t:I(e,t)),l=o.useRef();return o.useEffect(()=>{if("matchMedia"in window)return l.current=window.matchMedia(e),i(l.current.matches),R(l.current,c=>i(c.matches))},[e]),a}function te(e,t){const r=o.useRef(!1);o.useEffect(()=>()=>{r.current=!1},[]),o.useEffect(()=>{if(r.current)return e();r.current=!0},t)}function re(e,t){return L("(prefers-reduced-motion: reduce)",e,t)}var S=Object.defineProperty,f=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,B=(e,t)=>{for(var r in t||(t={}))w.call(t,r)&&p(e,r,t[r]);if(f)for(var r of f(t))b.call(t,r)&&p(e,r,t[r]);return e},D=(e,t)=>{var r={};for(var a in e)w.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&f)for(var a of f(e))t.indexOf(a)<0&&b.call(e,a)&&(r[a]=e[a]);return r};function V(e){var t=e,{size:r,color:a}=t,i=D(t,["size","color"]);return n.createElement("svg",B({viewBox:"0 0 135 140",xmlns:"http://www.w3.org/2000/svg",fill:a,width:r},i),n.createElement("rect",{y:"10",width:"15",height:"120",rx:"6"},n.createElement("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),n.createElement("rect",{x:"30",y:"10",width:"15",height:"120",rx:"6"},n.createElement("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),n.createElement("rect",{x:"60",width:"15",height:"140",rx:"6"},n.createElement("animate",{attributeName:"height",begin:"0s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"y",begin:"0s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),n.createElement("rect",{x:"90",y:"10",width:"15",height:"120",rx:"6"},n.createElement("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),n.createElement("rect",{x:"120",y:"10",width:"15",height:"120",rx:"6"},n.createElement("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})))}var T=Object.defineProperty,m=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,A=(e,t)=>{for(var r in t||(t={}))E.call(t,r)&&g(e,r,t[r]);if(m)for(var r of m(t))y.call(t,r)&&g(e,r,t[r]);return e},F=(e,t)=>{var r={};for(var a in e)E.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&m)for(var a of m(e))t.indexOf(a)<0&&y.call(e,a)&&(r[a]=e[a]);return r};function Q(e){var t=e,{size:r,color:a}=t,i=F(t,["size","color"]);return n.createElement("svg",A({width:r,height:r,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:a},i),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("g",{transform:"translate(2.5 2.5)",strokeWidth:"5"},n.createElement("circle",{strokeOpacity:".5",cx:"16",cy:"16",r:"16"}),n.createElement("path",{d:"M32 16c0-9.94-8.06-16-16-16"},n.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 16 16",to:"360 16 16",dur:"1s",repeatCount:"indefinite"})))))}var U=Object.defineProperty,u=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,W=(e,t)=>{for(var r in t||(t={}))O.call(t,r)&&h(e,r,t[r]);if(u)for(var r of u(t))P.call(t,r)&&h(e,r,t[r]);return e},G=(e,t)=>{var r={};for(var a in e)O.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&u)for(var a of u(e))t.indexOf(a)<0&&P.call(e,a)&&(r[a]=e[a]);return r};function H(e){var t=e,{size:r,color:a}=t,i=G(t,["size","color"]);return n.createElement("svg",W({width:r,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:a},i),n.createElement("circle",{cx:"15",cy:"15",r:"15"},n.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),n.createElement("circle",{cx:"60",cy:"15",r:"9",fillOpacity:"0.3"},n.createElement("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),n.createElement("circle",{cx:"105",cy:"15",r:"15"},n.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})))}var J=Object.defineProperty,d=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,_=(e,t,r)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,K=(e,t)=>{for(var r in t||(t={}))x.call(t,r)&&_(e,r,t[r]);if(d)for(var r of d(t))M.call(t,r)&&_(e,r,t[r]);return e},X=(e,t)=>{var r={};for(var a in e)x.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&d)for(var a of d(e))t.indexOf(a)<0&&M.call(e,a)&&(r[a]=e[a]);return r};const v={bars:V,oval:Q,dots:H},Y={xs:s(18),sm:s(22),md:s(36),lg:s(44),xl:s(58)},Z={size:"md"};function q(e){const t=$("Loader",Z,e),{size:r,color:a,variant:i}=t,l=X(t,["size","color","variant"]),c=C(),N=i in v?i:c.loader;return n.createElement(j,K({role:"presentation",component:v[N]||v.bars,size:z({size:r,sizes:Y}),color:c.fn.variant({variant:"filled",primaryFallback:!1,color:a||c.primaryColor}).background},l))}q.displayName="@mantine/core/Loader";export{q as L,te as a,L as b,re as u};
