import{Z as u,_ as m,a2 as i,a3 as f,$ as l,a0 as p,a1 as y}from"./create-visual-element.d156ab28.js";import{r as t}from"./index.63936364.js";const E=u(m);function z({children:n,features:e,strict:c=!1}){const[,d]=t.useState(!s(e)),r=t.useRef(void 0);if(!s(e)){const{renderer:o,...a}=e;r.current=o,i(a)}return t.useEffect(()=>{s(e)&&e().then(({renderer:o,...a})=>{i(a),r.current=o,d(!0)})},[]),t.createElement(f.Provider,{value:{renderer:r.current,strict:c}},n)}function s(n){return typeof n=="function"}const M={renderer:l,...p,...y};export{z as L,M as d,E as m};