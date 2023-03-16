(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();const g={};function ne(e){g.context=e}const se=(e,t)=>e===t,C={equals:se};let G=Z;const w=1,E=2,J={owned:null,cleanups:null,context:null,owner:null};var a=null;let b=null,c=null,h=null,y=null,$=0;function oe(e,t){const n=c,s=a,o=e.length===0,l=o?J:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},r=o?e:()=>e(()=>m(()=>M(l)));a=l,c=null;try{return v(r,!0)}finally{c=n,a=s}}function ie(e,t){t=t?Object.assign({},C,t):C;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=o=>(typeof o=="function"&&(o=o(n.value)),Y(n,o));return[Q.bind(n),s]}function j(e,t,n){const s=O(e,t,!0,w);S(s)}function L(e,t,n){const s=O(e,t,!1,w);S(s)}function K(e,t,n){G=ae;const s=O(e,t,!1,w);s.user=!0,y?y.push(s):S(s)}function H(e,t,n){n=n?Object.assign({},C,n):C;const s=O(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,S(s),Q.bind(s)}function le(e){return v(e,!1)}function m(e){if(c===null)return e();const t=c;c=null;try{return e()}finally{c=t}}function R(e){K(()=>m(e))}function re(e){return a===null||(a.cleanups===null?a.cleanups=[e]:a.cleanups.push(e)),e}function fe(){return a}function Q(){const e=b;if(this.sources&&(this.state||e))if(this.state===w||e)S(this);else{const t=h;h=null,v(()=>N(this),!1),h=t}if(c){const t=this.observers?this.observers.length:0;c.sources?(c.sources.push(this),c.sourceSlots.push(t)):(c.sources=[this],c.sourceSlots=[t]),this.observers?(this.observers.push(c),this.observerSlots.push(c.sources.length-1)):(this.observers=[c],this.observerSlots=[c.sources.length-1])}return this.value}function Y(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&v(()=>{for(let o=0;o<e.observers.length;o+=1){const l=e.observers[o],r=b&&b.running;r&&b.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?h.push(l):y.push(l),l.observers&&z(l)),r||(l.state=w)}if(h.length>1e6)throw h=[],new Error},!1)),t}function S(e){if(!e.fn)return;M(e);const t=a,n=c,s=$;c=a=e,ue(e,e.value,s),c=n,a=t}function ue(e,t,n){let s;try{s=e.fn(t)}catch(o){return e.pure&&(e.state=w,e.owned&&e.owned.forEach(M),e.owned=null),e.updatedAt=n+1,k(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Y(e,s):e.value=s,e.updatedAt=n)}function O(e,t,n,s=w,o){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:a,context:null,pure:n};return a===null||a!==J&&(a.owned?a.owned.push(l):a.owned=[l]),l}function T(e){const t=b;if(e.state===0||t)return;if(e.state===E||t)return N(e);if(e.suspense&&m(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<$);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===w||t)S(e);else if(e.state===E||t){const o=h;h=null,v(()=>N(e,n[0]),!1),h=o}}function v(e,t){if(h)return e();let n=!1;t||(h=[]),y?n=!0:y=[],$++;try{const s=e();return ce(n),s}catch(s){n||(y=null),h=null,k(s)}}function ce(e){if(h&&(Z(h),h=null),e)return;const t=y;y=null,t.length&&v(()=>G(t),!1)}function Z(e){for(let t=0;t<e.length;t++)T(e[t])}function ae(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:T(s)}for(g.context&&ne(),t=0;t<n;t++)T(e[t])}function N(e,t){const n=b;e.state=0;for(let s=0;s<e.sources.length;s+=1){const o=e.sources[s];o.sources&&(o.state===w||n?o!==t&&(!o.updatedAt||o.updatedAt<$)&&T(o):(o.state===E||n)&&N(o,t))}}function z(e){const t=b;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=E,s.pure?h.push(s):y.push(s),s.observers&&z(s))}}function M(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const l=o.pop(),r=n.observerSlots.pop();s<o.length&&(l.sourceSlots[r]=s,o[s]=l,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)M(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function he(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function k(e){throw e=he(e),e}function pe(e,t){return m(()=>e(t||{}))}function de(e,t,n){let s=n.length,o=t.length,l=s,r=0,i=0,f=t[o-1].nextSibling,u=null;for(;r<o||i<l;){if(t[r]===n[i]){r++,i++;continue}for(;t[o-1]===n[l-1];)o--,l--;if(o===r){const p=l<s?i?n[i-1].nextSibling:n[l-i]:f;for(;i<l;)e.insertBefore(n[i++],p)}else if(l===i)for(;r<o;)(!u||!u.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[l-1]&&n[i]===t[o-1]){const p=t[--o].nextSibling;e.insertBefore(n[i++],t[r++].nextSibling),e.insertBefore(n[--l],p),t[o]=n[l]}else{if(!u){u=new Map;let d=i;for(;d<l;)u.set(n[d],d++)}const p=u.get(t[r]);if(p!=null)if(i<p&&p<l){let d=r,U=1,I;for(;++d<o&&d<l&&!((I=u.get(t[d]))==null||I!==p+U);)U++;if(U>p-i){const te=t[r];for(;i<p;)e.insertBefore(n[i++],te)}else e.replaceChild(n[i++],t[r++])}else r++;else t[r++].remove()}}}function ge(e,t,n,s={}){let o;return oe(l=>{o=l,t===document?e():A(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{o(),t.textContent=""}}function P(e,t,n){const s=document.createElement("template");if(s.innerHTML=e,t&&s.innerHTML.split("<").length-1!==t)throw`The browser resolved template HTML does not match JSX input:
${s.innerHTML}

${e}. Is your HTML properly formed?`;let o=s.content.firstChild;return n&&(o=o.firstChild),o}function ye(e,t,n){return m(()=>e(t,n))}function A(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return _(e,t,s,n);L(o=>_(e,t(),o,n),s)}function _(e,t,n,s,o){for(g.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(g.context)return n;if(l==="number"&&(t=t.toString()),r){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=x(e,n,s,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(g.context)return n;n=x(e,n,s)}else{if(l==="function")return L(()=>{let i=t();for(;typeof i=="function";)i=i();n=_(e,i,n,s)}),()=>n;if(Array.isArray(t)){const i=[],f=n&&Array.isArray(n);if(B(i,t,n,o))return L(()=>n=_(e,i,n,s,!0)),()=>n;if(g.context){if(!i.length)return n;for(let u=0;u<i.length;u++)if(i[u].parentNode)return n=i}if(i.length===0){if(n=x(e,n,s),r)return n}else f?n.length===0?W(e,i,s):de(e,n,i):(n&&x(e),W(e,i));n=i}else if(t instanceof Node){if(g.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=x(e,n,s,t);x(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function B(e,t,n,s){let o=!1;for(let l=0,r=t.length;l<r;l++){let i=t[l],f=n&&n[l];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))o=B(e,i,f)||o;else if(typeof i=="function")if(s){for(;typeof i=="function";)i=i();o=B(e,Array.isArray(i)?i:[i],Array.isArray(f)?f:[f])||o}else e.push(i),o=!0;else{const u=String(i);f&&f.nodeType===3&&f.data===u?e.push(f):e.push(document.createTextNode(u))}}return o}function W(e,t,n=null){for(let s=0,o=t.length;s<o;s++)e.insertBefore(t[s],n)}function x(e,t,n,s){if(n===void 0)return e.textContent="";const o=s||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const i=t[r];if(o!==i){const f=i.parentNode===e;!l&&!r?f?e.replaceChild(o,i):e.insertBefore(o,n):f&&i.remove()}else l=!0}}else e.insertBefore(o,n);return[o]}function we(e){return e!==null&&(typeof e=="object"||typeof e=="function")}var D=e=>typeof e=="function"&&!e.length?e():e,F=e=>Array.isArray(e)?e:[e];function V(e,...t){return typeof e=="function"?e(...t):e}var be=e=>fe()?re(e):e;function xe(e){const t={...e},n={...e},s=new Map,o=i=>{const f=s.get(i);if(f)return f[0]();const u=ie(t[i],{internal:!0});return s.set(i,u),delete t[i],u[0]()},l=(i,f)=>{const u=s.get(i);if(u)return u[1](f);i in t&&(t[i]=V(f,[t[i]]))};for(const i in e)Object.defineProperty(n,i,{get:o.bind(void 0,i)});return[n,(i,f)=>{if(we(i)){const u=m(()=>Object.entries(V(i,n)));le(()=>{for(const[p,d]of u)l(p,()=>d)})}else l(i,f);return n}]}function me(e,t,n,s){return e.addEventListener(t,n,s),be(e.removeEventListener.bind(e,t,n,s))}function Se(e,t,n,s){const o=()=>{F(D(e)).forEach(l=>{l&&F(D(t)).forEach(r=>me(l,r,n,s))})};typeof e=="function"?K(o):L(o)}const ee={x:null,y:null};function q(e){return e?e instanceof Window?{x:e.scrollX,y:e.scrollY}:{x:e.scrollLeft,y:e.scrollTop}:{...ee}}function X(e=window){const t=typeof e=="function",n=t?()=>q(e()):()=>q(e),s=()=>l(n()),[o,l]=xe(t||g.context?ee:n());return g.context?R(t?()=>j(s):s):t?(j(s),R(s)):s(),Se(e,"scroll",s),o}const ve=P('<div style="width: 100vw; overflow: scroll; height: 15rem; margin-bottom: 1rem; background-color: green"><div style="width: 500vw; background-color:pink; height: 100vh"></div></div>',4),Ae=P('<div style="height: 500vh; width: 200vw; background-color: blue">&nbsp;</div>',2),Ce=P('<div style="position: fixed; padding: 10px; color: white; top: 0px; background-color: gray"><b>Window scroll</b>: <!> x </div>',5),Ee=P('<div style="position: fixed; padding: 10px; color: white; top: 0px; right: 0; background-color: gray"><b>Element scroll</b>: <!> x </div>',5),Le=()=>{const e=X();let t;const n=X(()=>t);return[(()=>{const s=ve.cloneNode(!0);return ye(o=>t=o,s),s})(),Ae.cloneNode(!0),(()=>{const s=Ce.cloneNode(!0),o=s.firstChild,l=o.nextSibling,r=l.nextSibling;return r.nextSibling,A(s,()=>Math.round(e.x),r),A(s,()=>Math.round(e.y),null),s})(),(()=>{const s=Ee.cloneNode(!0),o=s.firstChild,l=o.nextSibling,r=l.nextSibling;return r.nextSibling,A(s,(()=>{const i=H(()=>n.x!==null);return()=>i()?Math.round(n.x):"null"})(),r),A(s,(()=>{const i=H(()=>n.y!==null);return()=>i()?Math.round(n.y):"null"})(),null),s})()]};ge(()=>pe(Le,{}),document.getElementById("root"));