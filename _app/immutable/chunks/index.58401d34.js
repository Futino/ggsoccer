function y(){}const ot=t=>t;function ct(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function F(){return Object.create(null)}function k(t){t.forEach(J)}function P(t){return typeof t=="function"}function Rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function Tt(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function lt(t){return Object.keys(t).length===0}function ut(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function zt(t,e,n){t.$$.on_destroy.push(ut(e,n))}function Bt(t,e,n,i){if(t){const r=K(t,e,n,i);return t[0](r)}}function K(t,e,n,i){return t[1]&&i?ct(n.ctx.slice(),t[1](i(e))):n.ctx}function Lt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)l[u]=e.dirty[u]|r[u];return l}return e.dirty|r}return e.dirty}function Ft(t,e,n,i,r,l){if(r){const s=K(e,n,i,l);t.p(s,r)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function It(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Wt(t){return t&&P(t.destroy)?t.destroy:y}const Q=typeof window<"u";let at=Q?()=>window.performance.now():()=>Date.now(),z=Q?t=>requestAnimationFrame(t):y;const b=new Set;function U(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&z(U)}function ft(t){let e;return b.size===0&&z(U),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}let q=!1;function _t(){q=!0}function dt(){q=!1}function ht(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const c=e[o].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:ht(1,r,_=>e[n[_]].claim_order,c))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,r=Math.max(a,r)}const l=[],s=[];let u=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(l.push(e[o-1]);u>=o;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);l.reverse(),s.sort((o,c)=>o.claim_order-c.claim_order);for(let o=0,c=0;o<s.length;o++){for(;c<l.length&&s[o].claim_order>=l[c].claim_order;)c++;const f=c<l.length?l[c]:null;t.insertBefore(s[o],f)}}function pt(t,e){t.appendChild(e)}function V(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function yt(t){const e=Y("style");return gt(V(t),e),e.sheet}function gt(t,e){return pt(t.head||t,e),e.sheet}function xt(t,e){if(q){for(mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Gt(t,e,n){q&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function X(t){t.parentNode&&t.parentNode.removeChild(t)}function Y(t){return document.createElement(t)}function $t(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function B(t){return document.createTextNode(t)}function Jt(){return B(" ")}function Kt(){return B("")}function Qt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ut(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Vt(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function wt(t){return Array.from(t.childNodes)}function bt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Z(t,e,n,i,r=!1){bt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const o=n(u);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const o=n(u);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function tt(t,e,n,i){return Z(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||l.push(u.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Xt(t,e,n){return tt(t,e,n,Y)}function Yt(t,e,n){return tt(t,e,n,$t)}function vt(t,e){return Z(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>B(e),!0)}function Zt(t){return vt(t," ")}function te(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ee(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ne(t,e){return new t(e)}const j=new Map;let M=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function kt(t,e){const n={stylesheet:yt(e),rules:{}};return j.set(t,n),n}function At(t,e,n,i,r,l,s,u=0){const o=16.666/i;let c=`{
`;for(let m=0;m<=1;m+=o){const x=e+(n-e)*l(m);c+=m*100+`%{${s(x,1-x)}}
`}const f=c+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Nt(f)}_${u}`,_=V(t),{stylesheet:d,rules:h}=j.get(_)||kt(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${a} ${i}ms linear ${r}ms 1 both`,M+=1,a}function H(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),M-=r,M||St())}function St(){z(()=>{M||(j.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&X(e)}),j.clear())})}let N;function E(t){N=t}function et(){if(!N)throw new Error("Function called outside component initialization");return N}function ie(t){et().$$.on_mount.push(t)}function re(t){et().$$.after_update.push(t)}const w=[],I=[],S=[],W=[],nt=Promise.resolve();let T=!1;function it(){T||(T=!0,nt.then(rt))}function se(){return it(),nt}function O(t){S.push(t)}const R=new Set;let $=0;function rt(){if($!==0)return;const t=N;do{try{for(;$<w.length;){const e=w[$];$++,E(e),Ct(e.$$)}}catch(e){throw w.length=0,$=0,e}for(E(null),w.length=0,$=0;I.length;)I.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];R.has(n)||(R.add(n),n())}S.length=0}while(w.length);for(;W.length;)W.pop()();T=!1,R.clear(),E(t)}function Ct(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}let v;function jt(){return v||(v=Promise.resolve(),v.then(()=>{v=null})),v}function G(t,e,n){t.dispatchEvent(Et(`${e?"intro":"outro"}${n}`))}const C=new Set;let p;function oe(){p={r:0,c:[],p}}function ce(){p.r||k(p.c),p=p.p}function Mt(t,e){t&&t.i&&(C.delete(t),t.i(e))}function le(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),p.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Ot={duration:0};function ue(t,e,n){const i={direction:"in"};let r=e(t,n,i),l=!1,s,u,o=0;function c(){s&&H(t,s)}function f(){const{delay:_=0,duration:d=300,easing:h=ot,tick:g=y,css:m}=r||Ot;m&&(s=At(t,0,1,d,_,h,m,o++)),g(0,1);const x=at()+_,st=x+d;u&&u.abort(),l=!0,O(()=>G(t,!0,"start")),u=ft(D=>{if(l){if(D>=st)return g(1,0),G(t,!0,"end"),c(),l=!1;if(D>=x){const L=h((D-x)/d);g(L,1-L)}}return l})}let a=!1;return{start(){a||(a=!0,H(t),P(r)?(r=r(i),jt().then(f)):f())},invalidate(){a=!1},end(){l&&(c(),l=!1)}}}function ae(t){t&&t.c()}function fe(t,e){t&&t.l(e)}function Pt(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||O(()=>{const s=t.$$.on_mount.map(J).filter(P);t.$$.on_destroy?t.$$.on_destroy.push(...s):k(s),t.$$.on_mount=[]}),l.forEach(O)}function qt(t,e){const n=t.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Dt(t,e){t.$$.dirty[0]===-1&&(w.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _e(t,e,n,i,r,l,s,u=[-1]){const o=N;E(t);const c=t.$$={fragment:null,ctx:[],props:l,update:y,not_equal:r,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:F(),dirty:u,skip_bound:!1,root:e.target||o.$$.root};s&&s(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return c.ctx&&r(c.ctx[a],c.ctx[a]=h)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](h),f&&Dt(t,a)),_}):[],c.update(),f=!0,k(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){_t();const a=wt(e.target);c.fragment&&c.fragment.l(a),a.forEach(X)}else c.fragment&&c.fragment.c();e.intro&&Mt(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),dt(),rt()}E(o)}class de{$destroy(){qt(this,1),this.$destroy=y}$on(e,n){if(!P(n))return y;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Pt as A,qt as B,Bt as C,Ft as D,Ht as E,Lt as F,xt as G,y as H,zt as I,$t as J,Yt as K,Qt as L,ct as M,It as N,Tt as O,Vt as P,P as Q,ot as R,de as S,Wt as T,k as U,O as V,ue as W,Jt as a,Gt as b,Zt as c,le as d,Kt as e,ce as f,Mt as g,X as h,_e as i,re as j,Y as k,Xt as l,wt as m,Ut as n,ie as o,ee as p,B as q,vt as r,Rt as s,se as t,te as u,oe as v,I as w,ne as x,ae as y,fe as z};
