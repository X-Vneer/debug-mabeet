import{R as Lt,r as p}from"./index.0b2a3d34.js";import{s as jt}from"./index.379baa8a.js";const L=new WeakMap,lt={},nt={},U=()=>{},V=U(),ft=Object,a=t=>t===V,F=t=>typeof t=="function",q=(t,e)=>({...t,...e}),wt="undefined",ot=typeof window!=wt,ht=typeof document!=wt,Gt=()=>ot&&typeof window.requestAnimationFrame!=wt,Ft=(t,e)=>{const n=L.get(t);return[()=>!a(e)&&t.get(e)||lt,r=>{if(!a(e)){const o=t.get(e);e in nt||(nt[e]=o),n[5](e,q(o,r),o||lt)}},n[6],()=>!a(e)&&e in nt?nt[e]:!a(e)&&t.get(e)||lt]},st=new WeakMap;let Yt=0;const X=t=>{const e=typeof t,n=t&&t.constructor,r=n==Date;let o,i;if(ft(t)===t&&!r&&n!=RegExp){if(o=st.get(t),o)return o;if(o=++Yt+"~",st.set(t,o),n==Array){for(o="@",i=0;i<t.length;i++)o+=X(t[i])+",";st.set(t,o)}if(n==ft){o="#";const c=ft.keys(t).sort();for(;!a(i=c.pop());)a(t[i])||(o+=i+":"+X(t[i])+",");st.set(t,o)}}else o=r?t.toJSON():e=="symbol"?t.toString():e=="string"?JSON.stringify(t):""+t;return o};let _t=!0;const $t=()=>_t,[Tt,mt]=ot&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[U,U],Qt=()=>{const t=ht&&document.visibilityState;return a(t)||t!=="hidden"},Xt=t=>(ht&&document.addEventListener("visibilitychange",t),Tt("focus",t),()=>{ht&&document.removeEventListener("visibilitychange",t),mt("focus",t)}),Zt=t=>{const e=()=>{_t=!0,t()},n=()=>{_t=!1};return Tt("online",e),Tt("offline",n),()=>{mt("online",e),mt("offline",n)}},te={isOnline:$t,isVisible:Qt},ee={initFocus:Xt,initReconnect:Zt},It=!Lt.useId,Z=!ot||"Deno"in window,ne=t=>Gt()?window.requestAnimationFrame(t):setTimeout(t,1),dt=Z?p.useEffect:p.useLayoutEffect,Et=typeof navigator<"u"&&navigator.connection,Nt=!Z&&Et&&(["slow-2g","2g"].includes(Et.effectiveType)||Et.saveData),St=t=>{if(F(t))try{t=t()}catch{t=""}const e=t;return t=typeof t=="string"?t:(Array.isArray(t)?t.length:t)?X(t):"",[t,e]};let se=0;const pt=()=>++se,xt=0,Mt=1,Wt=2,oe=3;var Q={__proto__:null,FOCUS_EVENT:xt,RECONNECT_EVENT:Mt,MUTATE_EVENT:Wt,ERROR_REVALIDATE_EVENT:oe};async function Ut(...t){const[e,n,r,o]=t,i=q({populateCache:!0,throwOnError:!0},typeof o=="boolean"?{revalidate:o}:o||{});let c=i.populateCache;const d=i.rollbackOnError;let f=i.optimisticData;const b=i.revalidate!==!1,T=C=>typeof d=="function"?d(C):d!==!1,m=i.throwOnError;if(F(n)){const C=n,S=[],g=e.keys();for(let s=g.next();!s.done;s=g.next()){const x=s.value;!/^\$(inf|sub)\$/.test(x)&&C(e.get(x)._k)&&S.push(x)}return Promise.all(S.map(v))}return v(n);async function v(C){const[S]=St(C);if(!S)return;const[g,s]=Ft(e,S),[x,P,H]=L.get(e),M=x[S],k=()=>b&&(delete H[S],M&&M[0])?M[0](Wt).then(()=>g().data):g().data;if(t.length<3)return k();let h=r,u;const z=pt();P[S]=[z,0];const I=!a(f),B=g(),rt=B.data,tt=B._c,A=a(tt)?rt:tt;if(I&&(f=F(f)?f(A):f,s({data:f,_c:A})),F(h))try{h=h(A)}catch(J){u=J}if(h&&F(h.then))if(h=await h.catch(J=>{u=J}),z!==P[S][0]){if(u)throw u;return h}else u&&I&&T(u)&&(c=!0,h=A,s({data:h,_c:V}));c&&(u||(F(c)&&(h=c(h,A)),s({data:h,_c:V}))),P[S][1]=pt();const it=await k();if(s({_c:V}),u){if(m)throw u;return}return c?it:h}}const yt=(t,e)=>{for(const n in t)t[n][0]&&t[n][0](e)},re=(t,e)=>{if(!L.has(t)){const n=q(ee,e),r={},o=Ut.bind(V,t);let i=U;const c={},d=(T,m)=>{const v=c[T]||[];return c[T]=v,v.push(m),()=>v.splice(v.indexOf(m),1)},f=(T,m,v)=>{t.set(T,m);const C=c[T];if(C)for(const S of C)S(m,v)},b=()=>{if(!L.has(t)&&(L.set(t,[r,{},{},{},o,f,d]),!Z)){const T=n.initFocus(setTimeout.bind(V,yt.bind(V,r,xt))),m=n.initReconnect(setTimeout.bind(V,yt.bind(V,r,Mt)));i=()=>{T&&T(),m&&m(),L.delete(t)}}};return b(),[t,o,b,i]}return[t,L.get(t)[4]]},ie=(t,e,n,r,o)=>{const i=n.errorRetryCount,c=o.retryCount,d=~~((Math.random()+.5)*(1<<(c<8?c:8)))*n.errorRetryInterval;!a(i)&&c>i||setTimeout(r,d,o)},ae=(t,e)=>X(t)==X(e),[qt,ce]=re(new Map),ue=q({onLoadingSlow:U,onSuccess:U,onError:U,onErrorRetry:ie,onDiscarded:U,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:Nt?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:Nt?5e3:3e3,compare:ae,isPaused:()=>!1,cache:qt,mutate:ce,fallback:{}},te),le=(t,e)=>{const n=q(t,e);if(e){const{use:r,fallback:o}=t,{use:i,fallback:c}=e;r&&i&&(n.use=r.concat(i)),o&&c&&(n.fallback=q(o,c))}return n},fe=p.createContext({}),Pt=ot&&window.__SWR_DEVTOOLS_USE__,de=Pt?window.__SWR_DEVTOOLS_USE__:[],Ee=()=>{Pt&&(window.__SWR_DEVTOOLS_REACT__=Lt)},Ht=t=>F(t[1])?[t[0],t[1],t[2]||{}]:[t[0],null,(t[1]===null?t[2]:t[1])||{}],Re=()=>q(ue,p.useContext(fe)),he=t=>(e,n,r)=>t(e,n&&((...i)=>{const c=St(e)[0],[,,,d]=L.get(qt),f=d[c];return f?(delete d[c],f):n(...i)}),r),_e=de.concat(he),Te=t=>function(...n){const r=Re(),[o,i,c]=Ht(n),d=le(r,c);let f=t;const{use:b}=d,T=(b||[]).concat(_e);for(let m=T.length;m--;)f=T[m](f);return f(o,i||d.fetcher||null,d)},me=(t,e,n)=>{const r=e[t]||(e[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o>=0&&(r[o]=r[r.length-1],r.pop())}},ge=(t,e)=>(...n)=>{const[r,o,i]=Ht(n),c=(i.use||[]).concat(e);return t(r,o,{...i,use:c})};Ee();const Rt={dedupe:!0},pe=(t,e,n)=>{const{cache:r,compare:o,suspense:i,fallbackData:c,revalidateOnMount:d,revalidateIfStale:f,refreshInterval:b,refreshWhenHidden:T,refreshWhenOffline:m,keepPreviousData:v}=n,[C,S,g]=L.get(r),[s,x]=St(t),P=p.useRef(!1),H=p.useRef(!1),M=p.useRef(s),k=p.useRef(e),h=p.useRef(n),u=()=>h.current,z=()=>u().isVisible()&&u().isOnline(),[I,B,rt,tt]=Ft(r,s),A=p.useRef({}).current,it=a(c)?n.fallback[s]:c,J=(l,E)=>{let R=!0;for(const w in A){const _=w;_==="data"?o(E[_],l[_])||a(l[_])&&o(E[_],at)||(R=!1):E[_]!==l[_]&&(R=!1)}return R},gt=p.useMemo(()=>{const l=(()=>!s||!e?!1:a(d)?u().isPaused()||i?!1:a(f)?!0:f:d)(),E=N=>{const W=q(N);return delete W._k,l?{isValidating:!0,isLoading:!0,...W}:W},R=I(),w=tt(),_=E(R),Y=R===w?_:E(w);let O=_;return[()=>{const N=E(I());return J(N,O)?O:O=N},()=>Y]},[r,s]),K=jt.useSyncExternalStore(p.useCallback(l=>rt(s,(E,R)=>{J(R,E)||l()}),[r,s]),gt[0],gt[1]),Ct=!P.current,kt=C[s]&&C[s].length>0,j=K.data,G=a(j)?it:j,et=K.error,Ot=p.useRef(G),at=v?a(j)?Ot.current:j:G,Dt=(()=>kt&&!a(et)?!1:Ct&&!a(d)?d:u().isPaused()?!1:i?a(G)?!1:f:a(G)||f)(),bt=!!(s&&e&&Ct&&Dt),zt=a(K.isValidating)?bt:K.isValidating,Bt=a(K.isLoading)?bt:K.isLoading,$=p.useCallback(async l=>{const E=k.current;if(!s||!E||H.current||u().isPaused())return!1;let R,w,_=!0;const Y=l||{},O=!g[s]||!Y.dedupe,N=()=>It?!H.current&&s===M.current&&P.current:s===M.current,W={isValidating:!1,isLoading:!1},vt=()=>{B(W)},At=()=>{const D=g[s];D&&D[1]===w&&delete g[s]},Vt={isValidating:!0};a(I().data)&&(Vt.isLoading=!0);try{if(O&&(B(Vt),n.loadingTimeout&&a(I().data)&&setTimeout(()=>{_&&N()&&u().onLoadingSlow(s,n)},n.loadingTimeout),g[s]=[E(x),pt()]),[R,w]=g[s],R=await R,O&&setTimeout(At,n.dedupingInterval),!g[s]||g[s][1]!==w)return O&&N()&&u().onDiscarded(s),!1;W.error=V;const D=S[s];if(!a(D)&&(w<=D[0]||w<=D[1]||D[1]===0))return vt(),O&&N()&&u().onDiscarded(s),!1;const y=I().data;W.data=o(y,R)?y:R,O&&N()&&u().onSuccess(R,s,n)}catch(D){At();const y=u(),{shouldRetryOnError:ct}=y;y.isPaused()||(W.error=D,O&&N()&&(y.onError(D,s,y),(ct===!0||F(ct)&&ct(D))&&z()&&y.onErrorRetry(D,s,y,Kt=>{const ut=C[s];ut&&ut[0]&&ut[0](Q.ERROR_REVALIDATE_EVENT,Kt)},{retryCount:(Y.retryCount||0)+1,dedupe:!0})))}return _=!1,vt(),!0},[s,r]),Jt=p.useCallback((...l)=>Ut(r,M.current,...l),[]);if(dt(()=>{k.current=e,h.current=n,a(j)||(Ot.current=j)}),dt(()=>{if(!s)return;const l=$.bind(V,Rt);let E=0;const w=me(s,C,(_,Y={})=>{if(_==Q.FOCUS_EVENT){const O=Date.now();u().revalidateOnFocus&&O>E&&z()&&(E=O+u().focusThrottleInterval,l())}else if(_==Q.RECONNECT_EVENT)u().revalidateOnReconnect&&z()&&l();else{if(_==Q.MUTATE_EVENT)return $();if(_==Q.ERROR_REVALIDATE_EVENT)return $(Y)}});return H.current=!1,M.current=s,P.current=!0,B({_k:x}),Dt&&(a(G)||Z?l():ne(l)),()=>{H.current=!0,w()}},[s]),dt(()=>{let l;function E(){const w=F(b)?b(I().data):b;w&&l!==-1&&(l=setTimeout(R,w))}function R(){!I().error&&(T||u().isVisible())&&(m||u().isOnline())?$(Rt).then(E):E()}return E(),()=>{l&&(clearTimeout(l),l=-1)}},[b,T,m,s]),p.useDebugValue(at),i&&a(G)&&s)throw!It&&Z?new Error("Fallback data is required when using suspense in SSR."):(k.current=e,h.current=n,H.current=!1,a(et)?$(Rt):et);return{mutate:Jt,get data(){return A.data=!0,at},get error(){return A.error=!0,et},get isValidating(){return A.isValidating=!0,zt},get isLoading(){return A.isLoading=!0,Bt}}};var Ce=Te(pe);export{V as U,dt as a,F as b,Ft as c,a as i,St as s,Ce as u,ge as w};
