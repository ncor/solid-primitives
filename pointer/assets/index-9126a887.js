(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const de=(e,t)=>e===t,ye=Symbol("solid-track"),M={equals:de};let te=ie;const x=1,U=2,ne={owned:null,cleanups:null,context:null,owner:null};var y=null;let K=null,h=null,g=null,A=null,F=0;function _(e,t){const n=h,s=y,o=e.length===0,r=o?ne:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},l=o?e:()=>e(()=>N(()=>G(r)));y=r,h=null;try{return P(l,!0)}finally{h=n,y=s}}function $(e,t){t=t?Object.assign({},M,t):M;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=o=>(typeof o=="function"&&(o=o(n.value)),re(n,o));return[oe.bind(n),s]}function O(e,t,n){const s=k(e,t,!1,x);I(s)}function ge(e,t,n){te=Ce;const s=k(e,t,!1,x);s.user=!0,A?A.push(s):I(s)}function we(e,t,n){n=n?Object.assign({},M,n):M;const s=k(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,I(s),oe.bind(s)}function N(e){if(h===null)return e();const t=h;h=null;try{return e()}finally{h=t}}function Y(e){return y===null||(y.cleanups===null?y.cleanups=[e]:y.cleanups.push(e)),e}function se(){return y}function ve(e,t){const n=y,s=h;y=e,h=null;try{return P(t,!0)}catch(o){J(o)}finally{y=n,h=s}}function oe(){if(this.sources&&this.state)if(this.state===x)I(this);else{const e=g;g=null,P(()=>H(this),!1),g=e}if(h){const e=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(e)):(h.sources=[this],h.sourceSlots=[e]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function re(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&P(()=>{for(let o=0;o<e.observers.length;o+=1){const r=e.observers[o],l=K&&K.running;l&&K.disposed.has(r),(l?!r.tState:!r.state)&&(r.pure?g.push(r):A.push(r),r.observers&&le(r)),l||(r.state=x)}if(g.length>1e6)throw g=[],new Error},!1)),t}function I(e){if(!e.fn)return;G(e);const t=y,n=h,s=F;h=y=e,be(e,e.value,s),h=n,y=t}function be(e,t,n){let s;try{s=e.fn(t)}catch(o){return e.pure&&(e.state=x,e.owned&&e.owned.forEach(G),e.owned=null),e.updatedAt=n+1,J(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?re(e,s):e.value=s,e.updatedAt=n)}function k(e,t,n,s=x,o){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:null,pure:n};return y===null||y!==ne&&(y.owned?y.owned.push(r):y.owned=[r]),r}function j(e){if(e.state===0)return;if(e.state===U)return H(e);if(e.suspense&&N(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<F);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===x)I(e);else if(e.state===U){const s=g;g=null,P(()=>H(e,t[0]),!1),g=s}}function P(e,t){if(g)return e();let n=!1;t||(g=[]),A?n=!0:A=[],F++;try{const s=e();return me(n),s}catch(s){n||(A=null),g=null,J(s)}}function me(e){if(g&&(ie(g),g=null),e)return;const t=A;A=null,t.length&&P(()=>te(t),!1)}function ie(e){for(let t=0;t<e.length;t++)j(e[t])}function Ce(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:j(s)}for(t=0;t<n;t++)j(e[t])}function H(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const o=s.state;o===x?s!==t&&(!s.updatedAt||s.updatedAt<F)&&j(s):o===U&&H(s,t)}}}function le(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=U,n.pure?g.push(n):A.push(n),n.observers&&le(n))}}function G(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const r=o.pop(),l=n.observerSlots.pop();s<o.length&&(r.sourceSlots[l]=s,o[s]=r,n.observerSlots[s]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)G(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function J(e){throw e}const Ae=Symbol("fallback");function Z(e){for(let t=0;t<e.length;t++)e[t]()}function xe(e,t,n={}){let s=[],o=[],r=[],l=0,i=t.length>1?[]:null;return Y(()=>Z(r)),()=>{let f=e()||[],u,c;return f[ye],N(()=>{let p=f.length,d,v,w,S,E,b,m,C,L;if(p===0)l!==0&&(Z(r),r=[],s=[],o=[],l=0,i&&(i=[])),n.fallback&&(s=[Ae],o[0]=_(he=>(r[0]=he,n.fallback())),l=1);else if(l===0){for(o=new Array(p),c=0;c<p;c++)s[c]=f[c],o[c]=_(a);l=p}else{for(w=new Array(p),S=new Array(p),i&&(E=new Array(p)),b=0,m=Math.min(l,p);b<m&&s[b]===f[b];b++);for(m=l-1,C=p-1;m>=b&&C>=b&&s[m]===f[C];m--,C--)w[C]=o[m],S[C]=r[m],i&&(E[C]=i[m]);for(d=new Map,v=new Array(C+1),c=C;c>=b;c--)L=f[c],u=d.get(L),v[c]=u===void 0?-1:u,d.set(L,c);for(u=b;u<=m;u++)L=s[u],c=d.get(L),c!==void 0&&c!==-1?(w[c]=o[u],S[c]=r[u],i&&(E[c]=i[u]),c=v[c],d.set(L,c)):r[u]();for(c=b;c<p;c++)c in w?(o[c]=w[c],r[c]=S[c],i&&(i[c]=E[c],i[c](c))):o[c]=_(a);o=o.slice(0,l=p),s=f.slice(0)}return o});function a(p){if(r[c]=p,i){const[d,v]=$(c);return i[c]=v,t(f[c],d)}return t(f[c])}}}function ce(e,t){return N(()=>e(t||{}))}function Ee(e){const t="fallback"in e&&{fallback:()=>e.fallback};return we(xe(()=>e.each,e.children,t||void 0))}function Se(e,t,n){let s=n.length,o=t.length,r=s,l=0,i=0,f=t[o-1].nextSibling,u=null;for(;l<o||i<r;){if(t[l]===n[i]){l++,i++;continue}for(;t[o-1]===n[r-1];)o--,r--;if(o===l){const c=r<s?i?n[i-1].nextSibling:n[r-i]:f;for(;i<r;)e.insertBefore(n[i++],c)}else if(r===i)for(;l<o;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[r-1]&&n[i]===t[o-1]){const c=t[--o].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--r],c),t[o]=n[r]}else{if(!u){u=new Map;let a=i;for(;a<r;)u.set(n[a],a++)}const c=u.get(t[l]);if(c!=null)if(i<c&&c<r){let a=l,p=1,d;for(;++a<o&&a<r&&!((d=u.get(t[a]))==null||d!==c+p);)p++;if(p>c-i){const v=t[l];for(;i<c;)e.insertBefore(n[i++],v)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}function Le(e,t,n,s={}){let o;return _(r=>{o=r,t===document?e():B(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{o(),t.textContent=""}}function fe(e,t,n){let s;const o=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},r=t?()=>(s||(s=o())).cloneNode(!0):()=>N(()=>document.importNode(s||(s=o()),!0));return r.cloneNode=r,r}function q(e,t,n){return N(()=>e(t,n))}function B(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return R(e,t,s,n);O(o=>R(e,t(),o,n),s)}function R(e,t,n,s,o){for(;typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,r==="string"||r==="number")if(r==="number"&&(t=t.toString()),l){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=T(e,n,s,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||r==="boolean")n=T(e,n,s);else{if(r==="function")return O(()=>{let i=t();for(;typeof i=="function";)i=i();n=R(e,i,n,s)}),()=>n;if(Array.isArray(t)){const i=[],f=n&&Array.isArray(n);if(W(i,t,n,o))return O(()=>n=R(e,i,n,s,!0)),()=>n;if(i.length===0){if(n=T(e,n,s),l)return n}else f?n.length===0?z(e,i,s):Se(e,n,i):(n&&T(e),z(e,i));n=i}else if(t instanceof Node){if(Array.isArray(n)){if(l)return n=T(e,n,s,t);T(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function W(e,t,n,s){let o=!1;for(let r=0,l=t.length;r<l;r++){let i=t[r],f=n&&n[r];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))o=W(e,i,f)||o;else if(typeof i=="function")if(s){for(;typeof i=="function";)i=i();o=W(e,Array.isArray(i)?i:[i],Array.isArray(f)?f:[f])||o}else e.push(i),o=!0;else{const u=String(i);f&&f.nodeType===3?(f.data=u,e.push(f)):e.push(document.createTextNode(u))}}return o}function z(e,t,n=null){for(let s=0,o=t.length;s<o;s++)e.insertBefore(t[s],n)}function T(e,t,n,s){if(n===void 0)return e.textContent="";const o=s||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(o!==i){const f=i.parentNode===e;!r&&!l?f?e.replaceChild(o,i):e.insertBefore(o,n):f&&i.remove()}else r=!0}}else e.insertBefore(o,n);return[o]}var Q=e=>typeof e=="function"&&!e.length?e():e,V=e=>Array.isArray(e)?e:[e],Te=Object.entries,Oe=Y;function Ne(e,t,n,s){return e.addEventListener(t,n,s),Oe(e.removeEventListener.bind(e,t,n,s))}function ue(e,t,n,s){const o=()=>{V(Q(e)).forEach(r=>{r&&V(Q(t)).forEach(l=>Ne(r,l,n,s))})};typeof e=="function"?ge(o):O(o)}var Pe=e=>e.slice(),_e=e=>Object.assign({},e),$e=(e,t)=>{const n=Pe(e);return t(n),n},Ie=(e,...t)=>t.reduce((n,s)=>(s in e&&(n[s]=e[s]),n),{});function X(e,...t){const n=typeof t[0]=="string"?[t]:t,s=_e(e),o=[];for(let r=0;r<n.length;r++){const l=n[r];o.push({});for(const i of l)o[r][i]=s[i],delete s[i]}return[...o,s]}var De=(e,t,n=0,...s)=>$e(e,o=>o.splice(t,n,...s)),Be=(e,t,...n)=>{const s=e.indexOf(t);return De(e,s,1,...n)};function ee(e,...t){return t.length===0&&(t=[se()]),_(n=>(V(Q(t)).forEach(s=>s&&ve(s,Y.bind(void 0,n))),e(n)),t[0])}const Me=e=>e.substring(2).toLowerCase(),ae=e=>{const t={};return Object.entries(e).forEach(([n,s])=>t[Me(n)]=s),t},Ue=["x","y","pointerId","pressure","tiltX","tiltY","width","height","twist","pointerType"],D=e=>Ie(e,...Ue);function pe(e){const[{target:t=document.body,pointerTypes:n,passive:s=!0},o]=X(e,"target","pointerTypes","passive"),[{gotcapture:r,lostcapture:l},i]=X(ae(o),"gotcapture","lostcapture"),f=c=>a=>(!n||n.includes(a.pointerType))&&c(a),u=(c,a)=>ue(t,c,f(a),{passive:s});Te(i).forEach(([c,a])=>a&&u(`pointer${c}`,a)),r&&u("gotpointercapture",r),l&&u("lostpointercapture",l)}function je(e){const[{target:t=document.body,pointerTypes:n,passive:s=!0},o]=X(e,"pointerTypes","target","passive"),{down:r,enter:l}=ae(o),i=se(),f=(u,c,a)=>ue(t,u,p=>(!n||n.includes(p.pointerType))&&(!a||p.pointerId===a)&&c(p),{passive:s});l&&f("pointerenter",c=>{ee(a=>{const{pointerId:p}=c;let d=!0,v;f("pointerleave",w=>{v?.(w),a()},p),l(c,new Proxy({},{get:(w,S)=>{const E="pointer"+S.substring(2).toLowerCase();return b=>{d&&(E==="pointerleave"?v=b:f(E,b,p))}}})),d=!1},i)}),r&&f("pointerdown",c=>{ee(a=>{const{pointerId:p}=c;let d=!0,v;f(["pointerup","pointercancel"],w=>{v?.(w),a()},p),r(c,w=>{d&&f("pointermove",w,p)},w=>{d&&(v=w)}),d=!1},i)})}function He(e={}){const[t,n]=$([]);return je({...e,onEnter(s,{onMove:o,onDown:r,onUp:l,onLeave:i}){const[f,u]=$({...D(s),isDown:!1});n(c=>[...c,f]),o(c=>u(a=>({...D(c),isDown:a.isDown}))),r(c=>u({...D(c),isDown:!0})),l(c=>u({...D(c),isDown:!1})),i(()=>n(c=>Be(c,f)))}}),t}const Re=(e,t)=>{const{pointerTypes:n,handler:s}=(()=>{const r=t();return typeof r=="function"?{handler:r,pointerTypes:void 0}:r})(),o=new Set;pe({target:e,pointerTypes:n,onEnter:r=>{o.add(r.pointerId),s(!0,e)},onLeave:r=>{o.delete(r.pointerId),o.size===0&&s(!1,e)}})};const Fe=fe('<div class="min-h-150vh box-border flex w-full flex-col items-center justify-center space-y-4 bg-gray-800 p-24 text-white"><div class="wrapper-v"><p class="caption">x = </p><p class="caption">y = </p><p class="caption"></p></div><div class="wrapper-v">'),Ge=fe('<div class="ball bg-yellow-600">'),Ke=()=>{const[e,t]=$({x:0,y:0}),[n,s]=$(!1);let o;pe({onEnter:l=>console.log("Enter"),onGotCapture:l=>console.log("GotCapture"),onCancel:l=>console.log("Cancel"),onLeave:l=>console.log("Leave"),onLostCapture:l=>console.log("LostCapture"),onDown:l=>console.log("Down"),onUp:l=>console.log("Up"),onMove:l=>t({x:l.x,y:l.y})});const r=He();return[(()=>{const l=Fe(),i=l.firstChild,f=i.firstChild;f.firstChild;const u=f.nextSibling;u.firstChild;const c=u.nextSibling,a=i.nextSibling;l.style.setProperty("touch-action","pan-y"),q(Re,i,()=>s);const p=o;typeof p=="function"?q(p,i):o=i,B(f,()=>Math.round(e().x),null),B(u,()=>Math.round(e().y),null),B(c,()=>n()?"hovering":"not hovering");const d=o;return typeof d=="function"?q(d,a):o=a,O(()=>l.classList.toggle("!bg-cyan-700",!!n())),l})(),ce(Ee,{get each(){return r()},children:l=>(()=>{const i=Ge();return O(()=>i.style.setProperty("transform",`translate(${l().x}px, ${l().y}px)`)),i})()})]};Le(()=>ce(Ke,{}),document.getElementById("root"));