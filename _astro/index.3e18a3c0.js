import{M as n}from"./index.69a43b37.js";const i=async(t,a)=>{const e=await n.get(t,a);if(!e.data.success)throw new Error("fail to fetch:"+t);return Object.values(e.data.data)[0]},c=t=>{if(typeof window<"u"){const a=new URL(window.location.href),e=new URLSearchParams(a.search);let r=[];return Array.isArray(t)?(t.map(s=>{r.push(e.get(s)?.trim()||"")}),r):e.get(t||"q")||""}return[]},d=t=>t?t.map(a=>({label:a.name,value:a.id+"",slug:a.slug||"",id:a.id})):[],u=t=>{const e=new Date(t).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"}).split("/");return[e[2],e[0],e[1]].join("-")};export{u as a,d as f,c as g,i as s};
