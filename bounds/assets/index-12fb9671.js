(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();const ie=(e,t)=>e===t,oe=Symbol("solid-proxy"),le=Symbol("solid-track"),H={equals:ie};let Q=ee;const y=1,x=2,Y={owned:null,cleanups:null,context:null,owner:null};var d=null;let P=null,a=null,p=null,b=null,L=0;function re(e,t){const n=a,s=d,o=e.length===0,l=o?Y:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},r=o?e:()=>e(()=>m(()=>B(l)));d=l,a=null;try{return $(r,!0)}finally{a=n,d=s}}function U(e,t){t=t?Object.assign({},H,t):H;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=o=>(typeof o=="function"&&(o=o(n.value)),k(n,o));return[he.bind(n),s]}function fe(e,t,n){const s=I(e,t,!0,y);E(s)}function S(e,t,n){const s=I(e,t,!1,y);E(s)}function z(e,t,n){Q=ge;const s=I(e,t,!1,y);s.user=!0,b?b.push(s):E(s)}function ue(e){return $(e,!1)}function m(e){if(a===null)return e();const t=a;a=null;try{return e()}finally{a=t}}function Z(e,t,n){const s=Array.isArray(e);let o,l=n&&n.defer;return r=>{let i;if(s){i=Array(e.length);for(let u=0;u<e.length;u++)i[u]=e[u]()}else i=e();if(l){l=!1;return}const f=m(()=>t(i,o,r));return o=i,f}}function ce(e){z(()=>m(e))}function T(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function ae(){return d}function he(){if(this.sources&&this.state)if(this.state===y)E(this);else{const e=p;p=null,$(()=>O(this),!1),p=e}if(a){const e=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(e)):(a.sources=[this],a.sourceSlots=[e]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function k(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&$(()=>{for(let o=0;o<e.observers.length;o+=1){const l=e.observers[o],r=P&&P.running;r&&P.disposed.has(l),(r?!l.tState:!l.state)&&(l.pure?p.push(l):b.push(l),l.observers&&te(l)),r||(l.state=y)}if(p.length>1e6)throw p=[],new Error},!1)),t}function E(e){if(!e.fn)return;B(e);const t=d,n=a,s=L;a=d=e,de(e,e.value,s),a=n,d=t}function de(e,t,n){let s;try{s=e.fn(t)}catch(o){return e.pure&&(e.state=y,e.owned&&e.owned.forEach(B),e.owned=null),e.updatedAt=n+1,ne(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?k(e,s):e.value=s,e.updatedAt=n)}function I(e,t,n,s=y,o){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:null,pure:n};return d===null||d!==Y&&(d.owned?d.owned.push(l):d.owned=[l]),l}function _(e){if(e.state===0)return;if(e.state===x)return O(e);if(e.suspense&&m(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<L);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===y)E(e);else if(e.state===x){const s=p;p=null,$(()=>O(e,t[0]),!1),p=s}}function $(e,t){if(p)return e();let n=!1;t||(p=[]),b?n=!0:b=[],L++;try{const s=e();return pe(n),s}catch(s){n||(b=null),p=null,ne(s)}}function pe(e){if(p&&(ee(p),p=null),e)return;const t=b;b=null,t.length&&$(()=>Q(t),!1)}function ee(e){for(let t=0;t<e.length;t++)_(e[t])}function ge(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:_(s)}for(t=0;t<n;t++)_(e[t])}function O(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const o=s.state;o===y?s!==t&&(!s.updatedAt||s.updatedAt<L)&&_(s):o===x&&O(s,t)}}}function te(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=x,n.pure?p.push(n):b.push(n),n.observers&&te(n))}}function B(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const l=o.pop(),r=n.observerSlots.pop();s<o.length&&(l.sourceSlots[r]=s,o[s]=l,n.observerSlots[s]=r)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)B(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ne(e){throw e}function D(e,t){return m(()=>e(t||{}))}function be(e,t,n){let s=n.length,o=t.length,l=s,r=0,i=0,f=t[o-1].nextSibling,u=null;for(;r<o||i<l;){if(t[r]===n[i]){r++,i++;continue}for(;t[o-1]===n[l-1];)o--,l--;if(o===r){const c=l<s?i?n[i-1].nextSibling:n[l-i]:f;for(;i<l;)e.insertBefore(n[i++],c)}else if(l===i)for(;r<o;)(!u||!u.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[l-1]&&n[i]===t[o-1]){const c=t[--o].nextSibling;e.insertBefore(n[i++],t[r++].nextSibling),e.insertBefore(n[--l],c),t[o]=n[l]}else{if(!u){u=new Map;let h=i;for(;h<l;)u.set(n[h],h++)}const c=u.get(t[r]);if(c!=null)if(i<c&&c<l){let h=r,w=1,v;for(;++h<o&&h<l&&!((v=u.get(t[h]))==null||v!==c+w);)w++;if(w>c-i){const g=t[r];for(;i<c;)e.insertBefore(n[i++],g)}else e.replaceChild(n[i++],t[r++])}else r++;else t[r++].remove()}}}const W="_$DX_DELEGATE";function ye(e,t,n,s={}){let o;return re(l=>{o=l,t===document?e():C(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{o(),t.textContent=""}}function se(e,t,n){let s;const o=()=>{const r=document.createElement("template");return r.innerHTML=e,n?r.content.firstChild.firstChild:r.content.firstChild},l=t?()=>(s||(s=o())).cloneNode(!0):()=>m(()=>document.importNode(s||(s=o()),!0));return l.cloneNode=l,l}function we(e,t=window.document){const n=t[W]||(t[W]=new Set);for(let s=0,o=e.length;s<o;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,me))}}function F(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function ve(e,t,n){return m(()=>e(t,n))}function C(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return N(e,t,s,n);S(o=>N(e,t(),o,n),s)}function me(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const s=n[t];if(s&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?s.call(n,o,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function N(e,t,n,s,o){for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(t=t.toString()),r){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=A(e,n,s,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||l==="boolean")n=A(e,n,s);else{if(l==="function")return S(()=>{let i=t();for(;typeof i=="function";)i=i();n=N(e,i,n,s)}),()=>n;if(Array.isArray(t)){const i=[],f=n&&Array.isArray(n);if(M(i,t,n,o))return S(()=>n=N(e,i,n,s,!0)),()=>n;if(i.length===0){if(n=A(e,n,s),r)return n}else f?n.length===0?G(e,i,s):be(e,n,i):(n&&A(e),G(e,i));n=i}else if(t instanceof Node){if(Array.isArray(n)){if(r)return n=A(e,n,s,t);A(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function M(e,t,n,s){let o=!1;for(let l=0,r=t.length;l<r;l++){let i=t[l],f=n&&n[l];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))o=M(e,i,f)||o;else if(typeof i=="function")if(s){for(;typeof i=="function";)i=i();o=M(e,Array.isArray(i)?i:[i],Array.isArray(f)?f:[f])||o}else e.push(i),o=!0;else{const u=String(i);f&&f.nodeType===3?(f.data=u,e.push(f)):e.push(document.createTextNode(u))}}return o}function G(e,t,n=null){for(let s=0,o=t.length;s<o;s++)e.insertBefore(t[s],n)}function A(e,t,n,s){if(n===void 0)return e.textContent="";const o=s||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const i=t[r];if(o!==i){const f=i.parentNode===e;!l&&!r?f?e.replaceChild(o,i):e.insertBefore(o,n):f&&i.remove()}else l=!0}}else e.insertBefore(o,n);return[o]}var Ae=(e,t)=>{let n=!1,s,o;const l=(...i)=>{o=i,!n&&(n=!0,s=setTimeout(()=>{e(...o),n=!1},t))},r=()=>{clearTimeout(s),n=!1};return ae()&&T(r),Object.assign(l,{clear:r})};function Se(e){return e!==null&&(typeof e=="object"||typeof e=="function")}var K=e=>typeof e=="function"&&!e.length?e():e,X=e=>Array.isArray(e)?e:[e];function q(e,...t){return typeof e=="function"?e(...t):e}var $e=T;function Ce(e){const t={...e},n={...e},s=new Map,o=i=>{const f=s.get(i);if(f)return f[0]();const u=U(t[i],{internal:!0});return s.set(i,u),delete t[i],u[0]()},l=(i,f)=>{const u=s.get(i);if(u)return u[1](f);i in t&&(t[i]=q(f,[t[i]]))};for(const i in e)Object.defineProperty(n,i,{get:o.bind(void 0,i)});return[n,(i,f)=>{if(Se(i)){const u=m(()=>Object.entries(q(i,n)));ue(()=>{for(const[c,h]of u)l(c,()=>h)})}else l(i,f);return n}]}function Ee(e,t,n,s){const o=e.length,l=t.length;let r=0;if(!l){for(;r<o;r++)n(e[r]);return}if(!o){for(;r<l;r++)s(t[r]);return}for(;r<l&&t[r]===e[r];r++);let i,f;t=t.slice(r),e=e.slice(r);for(i of t)e.includes(i)||s(i);for(f of e)t.includes(f)||n(f)}function xe(e,t,n,s){return e.addEventListener(t,n,s),$e(e.removeEventListener.bind(e,t,n,s))}function _e(e,t){const n=new ResizeObserver(e);return T(n.disconnect.bind(n)),{observe:s=>n.observe(s,t),unobserve:n.unobserve.bind(n)}}function Oe(e,t,n){const s=new WeakMap,{observe:o,unobserve:l}=_e(r,n);function r(f){for(const u of f){const{contentRect:c,target:h}=u,w=Math.round(c.width),v=Math.round(c.height),g=s.get(h);(!g||g.width!==w||g.height!==v)&&(t(c,u.target,u),s.set(h,{width:w,height:v}))}}let i;if(typeof e=="function")i=()=>X(e()).slice();else if(Array.isArray(e)&&oe in e)i=()=>(e[le],e.slice());else{X(e).forEach(o);return}z(Z(i,(f,u=[])=>Ee(f,u,o,l)))}const Ne={top:null,left:null,bottom:null,right:null,width:null,height:null};function j(e){if(!e)return Object.assign({},Ne);const t=e.getBoundingClientRect();return{top:t.top,left:t.left,bottom:t.bottom,right:t.right,width:t.width,height:t.height}}function Le(e,{trackMutation:t=!0,trackResize:n=!0,trackScroll:s=!0}={}){const[o,l]=Ce(j(K(e))),r=()=>l(j(K(e))),i=f=>l(j(f));if(typeof e=="function"&&(ce(()=>i(e())),fe(Z(e,i,{defer:!0}))),n){const f=(u,c)=>i(c);Oe(typeof e=="function"?()=>e()||[]:e,typeof n=="function"?n(f):f)}if(s){const f=typeof e=="function"?u=>{const c=e();c&&u.target instanceof Node&&u.target.contains(c)&&i(c)}:u=>{u.target instanceof Node&&u.target.contains(e)&&i(e)};xe(window,"scroll",typeof s=="function"?s(f):f,{capture:!0})}if(t){const f=new MutationObserver(typeof t=="function"?t(r):r);f.observe(document.body,{attributeFilter:["style","class"],subtree:!0,childList:!0}),T(f.disconnect.bind(f))}return o}const Te=se('<div class="flex flex-col"><label class="mb-1">:</label><input type="range" min="10" max="400" step="10">'),Be=se('<div class="h-150vh box-border flex w-full flex-col items-center justify-center space-y-4 bg-gray-800 p-24 text-white"><div class="w-60vw overflow-x-scroll p-8"><div class="w-80vw"><div class="center-child min-h-82"><div class="shadow-bg-gray-900 center-child h-24 w-24 rounded-md bg-orange-500 shadow-lg"><pre></div></div><div class="wrapper-h">'),J=e=>(()=>{const t=Te(),n=t.firstChild,s=n.firstChild,o=n.nextSibling;return C(n,()=>e.name,s),o.$$input=l=>e.setValue(+l.currentTarget.value),S(l=>{const r=e.name,i=e.name;return r!==l._v$&&F(n,"for",l._v$=r),i!==l._v$2&&F(o,"name",l._v$2=i),l},{_v$:void 0,_v$2:void 0}),S(()=>o.value=e.value),t})(),Pe=()=>{const[e,t]=U(200),[n,s]=U(200);let o;const l=i=>Ae(i,500),r=Le(()=>o,{trackMutation:l,trackScroll:l});return(()=>{const i=Be(),f=i.firstChild,u=f.firstChild,c=u.firstChild,h=c.firstChild,w=h.firstChild,v=c.nextSibling;return ve(g=>o=g,h),C(w,()=>JSON.stringify(r,void 0,2)),C(v,D(J,{name:"width",get value(){return e()},setValue:t}),null),C(v,D(J,{name:"height",get value(){return n()},setValue:s}),null),S(g=>{const R=`${e()}px`,V=`${n()}px`;return R!==g._v$3&&h.style.setProperty("width",g._v$3=R),V!==g._v$4&&h.style.setProperty("height",g._v$4=V),g},{_v$3:void 0,_v$4:void 0}),i})()};ye(()=>D(Pe,{}),document.getElementById("root"));we(["input"]);