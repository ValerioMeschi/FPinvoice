function P(){}function C(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function Q(){return Object.create(null)}function I(t){t.forEach(B)}function R(t){return typeof t=="function"}function V(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let h;function X(t,n){return t===n?!0:(h||(h=document.createElement("a")),h.href=n,t===h.href)}function Y(t){return Object.keys(t).length===0}function L(t,...n){if(t==null){for(const i of n)i(void 0);return P}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function Z(t,n,e){t.$$.on_destroy.push(L(n,e))}function $(t,n,e,i){if(t){const r=N(t,n,e,i);return t[0](r)}}function N(t,n,e,i){return t[1]&&i?C(e.ctx.slice(),t[1](i(n))):e.ctx}function tt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(n.dirty.length,r.length);for(let u=0;u<c;u+=1)o[u]=n.dirty[u]|r[u];return o}return n.dirty|r}return n.dirty}function nt(t,n,e,i,r,o){if(r){const c=N(n,e,i,o);t.p(c,r)}}function et(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let p=!1;function it(){p=!0}function rt(){p=!1}function M(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function O(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&l.push(a)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const s=n[l].claim_order,a=(r>0&&n[e[r]].claim_order<=s?r+1:M(1,r,q=>n[e[q]].claim_order,s))-1;i[l]=e[a]+1;const E=a+1;e[E]=l,r=Math.max(E,r)}const o=[],c=[];let u=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(o.push(n[l-1]);u>=l;u--)c.push(n[u]);u--}for(;u>=0;u--)c.push(n[u]);o.reverse(),c.sort((l,s)=>l.claim_order-s.claim_order);for(let l=0,s=0;l<c.length;l++){for(;s<o.length&&c[l].claim_order>=o[s].claim_order;)s++;const a=s<o.length?o[s]:null;t.insertBefore(c[l],a)}}function T(t,n){if(p){for(O(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ct(t,n,e){p&&!e?T(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function ut(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function D(t){return document.createElement(t)}function H(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function ot(){return v(" ")}function st(){return v("")}function at(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function ft(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function _t(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function dt(t){return t.dataset.svelteH}function ht(t){return t===""?null:+t}function mt(t){return Array.from(t.childNodes)}function z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function A(t,n,e,i,r=!1){z(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(n(u)){const l=e(u);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(n(u)){const l=e(u);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function j(t,n,e,i){return A(t,r=>r.nodeName===n,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];e[u.name]||o.push(u.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(n))}function pt(t,n,e){return j(t,n,e,D)}function bt(t,n,e){return j(t,n,e,H)}function F(t,n){return A(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>v(n),!0)}function yt(t){return F(t," ")}function gt(t,n){n=""+n,t.data!==n&&(t.data=n)}function xt(t,n){t.value=n??""}function vt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function wt(t,n,e){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===n){r.selected=!0;return}}(!e||n!==void 0)&&(t.selectedIndex=-1)}function Et(t){const n=t.querySelector(":checked");return n&&n.__value}function kt(t,n,e){t.classList.toggle(n,!!e)}function U(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function Nt(t,n){return new t(n)}let m;function b(t){m=t}function w(){if(!m)throw new Error("Function called outside component initialization");return m}function At(t){w().$$.on_mount.push(t)}function jt(t){w().$$.after_update.push(t)}function St(){const t=w();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const o=U(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}const d=[],k=[];let _=[];const g=[],S=Promise.resolve();let x=!1;function W(){x||(x=!0,S.then(J))}function qt(){return W(),S}function G(t){_.push(t)}function Pt(t){g.push(t)}const y=new Set;let f=0;function J(){if(f!==0)return;const t=m;do{try{for(;f<d.length;){const n=d[f];f++,b(n),K(n.$$)}}catch(n){throw d.length=0,f=0,n}for(b(null),d.length=0,f=0;k.length;)k.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];y.has(e)||(y.add(e),e())}_.length=0}while(d.length);for(;g.length;)g.pop()();x=!1,y.clear(),b(t)}function K(t){if(t.fragment!==null){t.update(),I(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(G)}}function Ct(t){const n=[],e=[];_.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),_=n}export{X as $,I as A,Q as B,J as C,R as D,Y as E,G as F,Ct as G,m as H,b as I,B as J,d as K,W as L,it as M,rt as N,at as O,St as P,ft as Q,kt as R,ut as S,Et as T,ht as U,Pt as V,xt as W,wt as X,dt as Y,H as Z,bt as _,tt as a,ot as b,$ as c,pt as d,D as e,mt as f,et as g,F as h,lt as i,yt as j,ct as k,T as l,gt as m,P as n,Z as o,st as p,jt as q,At as r,V as s,v as t,nt as u,_t as v,vt as w,k as x,Nt as y,qt as z};
