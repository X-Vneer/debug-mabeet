import{r as o,R as u}from"./index.0b2a3d34.js";function l(t){const e=o.createContext(null);return[({children:n,value:c})=>u.createElement(e.Provider,{value:c},n),()=>{const n=o.useContext(e);if(n===null)throw new Error(t);return n}]}function s(t,e){typeof t=="function"?t(e):typeof t=="object"&&t!==null&&"current"in t&&(t.current=e)}function a(...t){return e=>{t.forEach(r=>s(r,e))}}function x(...t){return o.useCallback(a(...t),t)}export{l as c,a as m,x as u};
