"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[411],{4197:function(t,e,r){let l,n;r.d(e,{E:function(){return rM},A:function(){return rH}});var o=r(2265);/*!
 * OverlayScrollbars
 * Version: 2.4.0
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */let i=(t,e)=>{let r;let{o:l,u:n,_:o}=t,i=l,a=(t,e)=>{let l=i,a=e||(n?!n(l,t):l!==t);return(a||o)&&(i=t,r=l),[i,a,r]};return[e?t=>a(e(i,r),t):a,t=>[i,!!t,r]]},a="undefined"!=typeof window,s=a&&Node.ELEMENT_NODE,{toString:u,hasOwnProperty:c}=Object.prototype,d=/^\[object (.+)\]$/,f=t=>void 0===t,p=t=>null===t,h=t=>f(t)||p(t)?`${t}`:u.call(t).replace(d,"$1").toLowerCase(),y=t=>"number"==typeof t,v=t=>"string"==typeof t,b=t=>"boolean"==typeof t,m=t=>"function"==typeof t,g=t=>Array.isArray(t),w=t=>"object"==typeof t&&!g(t)&&!p(t),x=t=>{let e=!!t&&t.length,r=y(e)&&e>-1&&e%1==0;return(!!g(t)||!m(t)&&!!r)&&(!(e>0&&w(t))||e-1 in t)},$=t=>{let e;if(!t||!w(t)||"object"!==h(t))return!1;let r="constructor",l=t[r],n=l&&l.prototype,o=c.call(t,r),i=n&&c.call(n,"isPrototypeOf");if(l&&!o&&!i)return!1;for(e in t);return f(e)||c.call(t,e)},E=t=>{let e=HTMLElement;return!!t&&(e?t instanceof e:t.nodeType===s)},S=t=>{let e=Element;return!!t&&(e?t instanceof e:t.nodeType===s)};function O(t,e){if(x(t))for(let r=0;r<t.length&&!1!==e(t[r],r,t);r++);else t&&O(Object.keys(t),r=>e(t[r],r,t));return t}let k=(t,e)=>t.indexOf(e)>=0,C=(t,e,r)=>(!r&&!v(e)&&x(e)?Array.prototype.push.apply(t,e):t.push(e),t),A=t=>{let e=Array.from,r=[];return e&&t?e(t):(t instanceof Set?t.forEach(t=>{C(r,t)}):O(t,t=>{C(r,t)}),r)},z=t=>!!t&&!t.length,I=t=>A(new Set(t)),_=(t,e,r)=>{O(t,t=>t&&t.apply(void 0,e||[])),r||(t.length=0)},H=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),M=t=>t?Object.keys(t):[],N=(t,e,r,l,n,o,i)=>{let a=[e,r,l,n,o,i];return("object"!=typeof t||p(t))&&!m(t)&&(t={}),O(a,e=>{O(e,(r,l)=>{let n=e[l];if(t===n)return!0;let o=g(n);if(n&&$(n)){let e=t[l],r=e;o&&!g(e)?r=[]:o||$(e)||(r={}),t[l]=N(r,n)}else t[l]=o?n.slice():n})}),t},P=t=>{for(let e in t)return!1;return!0},R=(t,e,r)=>{if(f(r))return t?t.getAttribute(e):null;t&&t.setAttribute(e,r)},T=(t,e)=>new Set((R(t,e)||"").split(" ")),L=(t,e)=>{t&&t.removeAttribute(e)},F=(t,e,r,l)=>{if(r){let n=T(t,e);n[l?"add":"delete"](r);let o=A(n).join(" ").trim();R(t,e,o)}},D=(t,e,r)=>T(t,e).has(r),j=a&&Element.prototype,V=(t,e)=>{let r=[],l=e?S(e)&&e:document;return l?C(r,l.querySelectorAll(t)):r},W=(t,e)=>{let r=e?S(e)&&e:document;return r?r.querySelector(t):null},B=(t,e)=>{if(S(t)){let r=j.matches||j.msMatchesSelector;return r.call(t,e)}return!1},q=t=>t?A(t.childNodes):[],U=t=>t&&t.parentElement,X=(t,e)=>{if(S(t)){let r=j.closest;if(r)return r.call(t,e);do{if(B(t,e))return t;t=U(t)}while(t)}},Y=(t,e,r)=>{let l=X(t,e),n=t&&W(r,l),o=X(n,e)===l;return!!l&&!!n&&(l===t||n===t||o&&X(X(t,r),e)!==l)},K=()=>{},G=t=>{if(x(t))O(A(t),t=>G(t));else if(t){let e=U(t);e&&e.removeChild(t)}},J=(t,e,r)=>{if(r&&t){let l,n=e;return x(r)?(l=document.createDocumentFragment(),O(r,t=>{t===n&&(n=t.previousSibling),l.appendChild(t)})):l=r,e&&(n?n!==e&&(n=n.nextSibling):n=t.firstChild),t.insertBefore(l,n||null),()=>G(r)}return K},Z=(t,e)=>J(t,null,e),Q=(t,e)=>J(U(t),t,e),tt=(t,e)=>J(U(t),t&&t.nextSibling,e),te=t=>{let e=document.createElement("div");return R(e,"class",t),e},tr=t=>{let e=te();return e.innerHTML=t.trim(),O(q(e),t=>G(t))},tl=a?window:{},tn=Math.max,to=Math.min,ti=Math.round,ta=tl.cancelAnimationFrame,ts=tl.requestAnimationFrame,tu=tl.setTimeout,tc=tl.clearTimeout,td=t=>t.charAt(0).toUpperCase()+t.slice(1),tf=()=>te().style,tp=["-webkit-","-moz-","-o-","-ms-"],th=["WebKit","Moz","O","MS","webkit","moz","o","ms"],ty={},tv={},tb=t=>{let e=tv[t];if(H(tv,t))return e;let r=td(t),l=tf();return O(tp,n=>{let o=n.replace(/-/g,""),i=[t,n+t,o+r,td(o)+r];return!(e=i.find(t=>void 0!==l[t]))}),tv[t]=e||""},tm=t=>{let e=ty[t]||tl[t];return H(ty,t)||(O(th,r=>!(e=e||tl[r+td(t)])),ty[t]=e),e},tg=tm("MutationObserver"),tw=tm("IntersectionObserver"),tx=tm("ResizeObserver"),t$=tm("ScrollTimeline"),tE=(t,...e)=>t.bind(0,...e),tS=t=>{let e;let r=t?tu:ts,l=t?tc:ta;return[n=>{l(e),e=r(n,m(t)?t():t)},()=>l(e)]},tO=(t,e)=>{let r,l,n;let o=K,{v:i,p:a,g:s}=e||{},u=function(e){o(),tc(r),r=l=void 0,o=K,t.apply(this,e)},c=t=>s&&l?s(l,t):t,d=()=>{o!==K&&u(c(n)||n)},f=function(){let t=A(arguments),e=m(i)?i():i,s=y(e)&&e>=0;if(s){let i=m(a)?a():a,s=y(i)&&i>=0,f=e>0?tu:ts,p=e>0?tc:ta,h=c(t),v=h||t,b=u.bind(0,v);o();let g=f(b,e);o=()=>p(g),s&&!r&&(r=tu(d,i)),l=n=v}else u(t)};return f.m=d,f},tk=/[^\x20\t\r\n\f]+/g,tC=(t,e,r)=>{let l;let n=t&&t.classList,o=0,i=!1;if(n&&e&&v(e)){let t=e.match(tk)||[];for(i=t.length>0;l=t[o++];)i=!!r(n,l)&&i}return i},tA=(t,e)=>{tC(t,e,(t,e)=>t.remove(e))},tz=(t,e)=>(tC(t,e,(t,e)=>t.add(e)),tE(tA,t,e)),tI={opacity:1,zIndex:1},t_=(t,e)=>{let r=t||"",l=e?parseFloat(r):parseInt(r,10);return l==l?l:0},tH=(t,e)=>!tI[t]&&y(e)?`${e}px`:e,tM=(t,e,r)=>String((null!=e?e[r]||e.getPropertyValue(r):t.style[r])||""),tN=(t,e,r)=>{try{let{style:l}=t;f(l[e])?l.setProperty(e,r):l[e]=tH(e,r)}catch(t){}};function tP(t,e){let r=v(e),l=g(e)||r;if(l){let l=r?"":{};if(t){let n=tl.getComputedStyle(t,null);l=r?tM(t,n,e):e.reduce((e,r)=>(e[r]=tM(t,n,r),e),l)}return l}t&&O(e,(r,l)=>tN(t,l,e[l]))}let tR=t=>"rtl"===tP(t,"direction"),tT=(t,e,r)=>{let l=e?`${e}-`:"",n=r?`-${r}`:"",o=`${l}top${n}`,i=`${l}right${n}`,a=`${l}bottom${n}`,s=`${l}left${n}`,u=tP(t,[o,i,a,s]);return{t:t_(u[o],!0),r:t_(u[i],!0),b:t_(u[a],!0),l:t_(u[s],!0)}},tL=(t,e)=>`translate${w(t)?`(${t.x},${t.y})`:`${e?"X":"Y"}(${t})`}`,tF="paddingTop",tD="paddingRight",tj="paddingLeft",tV="paddingBottom",tW="marginLeft",tB="marginRight",tq="marginBottom",tU="overflowX",tX="overflowY",tY="width",tK="height",tG="hidden",tJ={w:0,h:0},tZ=(t,e)=>e?{w:e[`${t}Width`],h:e[`${t}Height`]}:tJ,tQ=t=>tZ("inner",t||tl),t0=tE(tZ,"offset"),t1=tE(tZ,"client"),t3=tE(tZ,"scroll"),t2=t=>{let e=parseFloat(tP(t,tY))||0,r=parseFloat(tP(t,tK))||0;return{w:e-ti(e),h:r-ti(r)}},t9=t=>t.getBoundingClientRect(),t4=t=>!!(t&&(t[tK]||t[tY])),t5=(t,e,r,l)=>{if(t&&e){let n=!0;return O(r,r=>{let o=l?l(t[r]):t[r],i=l?l(e[r]):e[r];o!==i&&(n=!1)}),n}return!1},t6=(t,e)=>t5(t,e,["w","h"]),t7=(t,e)=>t5(t,e,["x","y"]),t8=(t,e)=>t5(t,e,["t","r","b","l"]),et=(t,e,r)=>t5(t,e,[tY,tK],r&&(t=>ti(t))),ee="passive",er=()=>{if(f(l)){l=!1;try{tl.addEventListener(ee,K,Object.defineProperty({},ee,{get(){l=!0}}))}catch(t){}}return l},el=t=>t.split(" "),en=(t,e,r,l)=>{O(el(e),e=>{t.removeEventListener(e,r,l)})},eo=(t,e,r,l)=>{var n;let o=er(),i=null!=(n=o&&l&&l.S)?n:o,a=l&&l.$||!1,s=l&&l.O||!1,u=o?{passive:i,capture:a}:a;return tE(_,el(e).map(e=>{let l=s?n=>{en(t,e,l,a),r(n)}:r;return t.addEventListener(e,l,u),tE(en,t,e,l,a)}))},ei=t=>t.stopPropagation(),ea=t=>t.preventDefault(),es={x:0,y:0},eu=t=>{let e=t&&t9(t);return e?{x:e.left+tl.pageYOffset,y:e.top+tl.pageXOffset}:es},ec=(t,e,r)=>r?r.n?-t:r.i?e-t:t:t,ed=(t,e)=>[e&&e.i?t:0,ec(t,t,e)],ef=(t,e)=>{let{x:r,y:l}=y(e)?{x:e,y:e}:e||{};y(r)&&(t.scrollLeft=r),y(l)&&(t.scrollTop=l)},ep=t=>({x:t.scrollLeft,y:t.scrollTop}),eh=(t,e)=>{O(g(e)?e:[e],t)},ey=t=>{let e=new Map,r=(t,r)=>{if(t){let l=e.get(t);eh(t=>{l&&l[t?"delete":"clear"](t)},r)}else e.forEach(t=>{t.clear()}),e.clear()},l=(t,n)=>{if(v(t)){let l=e.get(t)||new Set;return e.set(t,l),eh(t=>{m(t)&&l.add(t)},n),tE(r,t,n)}b(n)&&n&&r();let o=M(t),i=[];return O(o,e=>{let r=t[e];r&&C(i,l(e,r))}),tE(_,i)};return l(t||{}),[l,r,(t,r)=>{O(A(e.get(t)),t=>{r&&!z(r)?t.apply(0,r):t()})}]},ev=t=>JSON.stringify(t,(t,e)=>{if(m(e))throw 0;return e}),eb=(t,e)=>t?`${e}`.split(".").reduce((t,e)=>t&&H(t,e)?t[e]:void 0,t):void 0,em={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},eg=(t,e)=>{let r={},l=M(e).concat(M(t));return O(l,l=>{let n=t[l],o=e[l];if(w(n)&&w(o))N(r[l]={},eg(n,o)),P(r[l])&&delete r[l];else if(H(e,l)&&o!==n){let t=!0;if(g(n)||g(o))try{ev(n)===ev(o)&&(t=!1)}catch(t){}t&&(r[l]=o)}}),r},ew=(t,e,r)=>l=>[eb(t,l),r||void 0!==eb(e,l)],ex="data-overlayscrollbars",e$="os-environment",eE=`${e$}-flexbox-glue`,eS=`${eE}-max`,eO="os-scrollbar-hidden",ek=`${ex}-initialize`,eC=`${ex}-overflow-x`,eA=`${ex}-overflow-y`,ez="overflowVisible",eI="scrollbarPressed",e_="updating",eH=`${ex}-viewport`,eM="arrange",eN="scrollbarHidden",eP=`${ex}-padding`,eR=`${ex}-content`,eT="os-size-observer",eL=`${eT}-appear`,eF=`${eT}-listener`,eD="os-scrollbar",ej=`${eD}-rtl`,eV=`${eD}-horizontal`,eW=`${eD}-vertical`,eB=`${eD}-track`,eq=`${eD}-handle`,eU=`${eD}-visible`,eX=`${eD}-cornerless`,eY=`${eD}-transitionless`,eK=`${eD}-interaction`,eG=`${eD}-unusable`,eJ=`${eD}-auto-hide`,eZ=`${eJ}-hidden`,eQ=`${eD}-wheel`,e0=`${eB}-interactive`,e1=`${eq}-interactive`,e3={},e2={},e9=t=>{O(t,t=>O(t,(e,r)=>{e3[r]=t[r]}))},e4=(t,e,r,l)=>M(t).map(n=>{let{static:o,instance:i}=t[n],a=r?i:o;if(a){let t=r?a(r,e):a(e);return(l||e2)[n]=t}}),e5=t=>e2[t],e6="__osScrollbarsHidingPlugin",e7=(t,e,r,l)=>{Z(t,e);let n=t1(e),o=t0(e),i=t2(r);return l&&G(e),{x:o.h-n.h+i.h,y:o.w-n.w+i.w}},e8=t=>{let e=!1,r=tz(t,eO);try{e="none"===tP(t,tb("scrollbar-width"))||"none"===tl.getComputedStyle(t,"::-webkit-scrollbar").getPropertyValue("display")}catch(t){}return r(),e},rt=(t,e)=>{tP(t,{[tU]:tG,[tX]:tG,direction:"rtl"}),ef(t,{x:0});let r=eu(t),l=eu(e);ef(t,{x:-999});let n=eu(e);return{i:r.x===l.x,n:l.x!==n.x}},re=(t,e)=>{let r=tz(t,eE),l=t9(t),n=t9(e),o=et(n,l,!0),i=tz(t,eS),a=t9(t),s=t9(e),u=et(s,a,!0);return r(),i(),o&&u},rr=()=>{let{body:t}=document,e=tr(`<div class="${e$}"><div></div></div>`),r=e[0],l=r.firstChild,[n,,o]=ey(),[a,s]=i({o:e7(t,r,l),u:t7},tE(e7,t,r,l,!0)),[u]=s(),c=e8(r),d={x:0===u.x,y:0===u.y},f={elements:{host:null,padding:!c,viewport:t=>c&&t===t.ownerDocument.body&&t,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},p=N({},em),h=tE(N,{},p),y=tE(N,{},f),v={L:u,I:d,H:c,A:"-1"===tP(r,"zIndex"),P:!!t$,V:rt(r,l),U:re(r,l),B:tE(n,"z"),j:tE(n,"r"),N:y,q:t=>N(f,t)&&y(),G:h,F:t=>N(p,t)&&h(),W:N({},f),X:N({},p)},b=tE(eo,tl,"resize"),m=tO(t=>o(t),{v:33,p:99});return L(r,"style"),G(r),b(tE(m,"r")),c||d.x&&d.y||b(()=>{let t=e5(e6),e=t?t.M():K;e(v,a,tE(m,"z"))}),v},rl=()=>(n||(n=rr()),n),rn=(t,e)=>m(e)?e.apply(0,t):e,ro=(t,e,r,l)=>{let n=f(l)?r:l,o=rn(t,n);return o||e.apply(0,t)},ri=(t,e,r,l)=>{let n=f(l)?r:l,o=rn(t,n);return!!o&&(E(o)?o:e.apply(0,t))},ra=(t,e)=>{let{nativeScrollbarsOverlaid:r,body:l}=e||{},{I:n,H:o,N:i}=rl(),{nativeScrollbarsOverlaid:a,body:s}=i().cancel,u=f(l)?s:l,c=(n.x||n.y)&&(null!=r?r:a),d=t&&(p(u)?!o:u);return!!c||!!d},rs=new WeakMap,ru=(t,e)=>{rs.set(t,e)},rc=t=>{rs.delete(t)},rd=t=>rs.get(t),rf=(t,e,r)=>{let l=!1,n=!!r&&new WeakMap,o=o=>{if(n&&r){let i=r.map(e=>{let[r,l]=e||[],n=l&&r?(o||V)(r,t):[];return[n,l]});O(i,r=>O(r[0],o=>{let i=r[1],a=n.get(o)||[],s=t.contains(o);if(s&&i){let t=eo(o,i.trim(),r=>{l?(t(),n.delete(o)):e(r)});n.set(o,C(a,t))}else _(a),n.delete(o)}))}};return o(),[()=>{l=!0},o]},rp=(t,e,r,l)=>{let n=!1,{Y:o,Z:i,J:a,K:s,tt:u,nt:c}=l||{},d=tO(()=>n&&r(!0),{v:33,p:99}),[f,p]=rf(t,d,a),h=i||[],y=(o||[]).concat(h),v=(n,o)=>{if(!z(o)){let i=u||K,a=c||K,d=[],f=[],y=!1,v=!1;if(O(o,r=>{let{attributeName:n,target:o,type:u,oldValue:c,addedNodes:p,removedNodes:b}=r,m="attributes"===u,g=t===o,w=m&&n,x=w?R(o,n||""):null,$=w&&c!==x,E=k(h,n)&&$;if(e&&("childList"===u||!g)){let e=m&&$,u=e&&s&&B(o,s),f=u?!i(o,n,c,x):!m||e,h=f&&!a(r,!!u,t,l);O(p,t=>C(d,t)),O(b,t=>C(d,t)),v=v||h}!e&&g&&$&&!i(o,n,c,x)&&(C(f,n),y=y||E)}),p(t=>I(d).reduce((e,r)=>(C(e,V(t,r)),B(r,t)?C(e,r):e),[])),e)return!n&&v&&r(!1),[!1];if(!z(f)||y){let t=[I(f),y];return n||r.apply(0,t),t}}},b=new tg(tE(v,!1));return[()=>(b.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:y,subtree:e,childList:e,characterData:e}),n=!0,()=>{n&&(f(),b.disconnect(),n=!1)}),()=>{if(n)return d.m(),v(!0,b.takeRecords())}]},rh=(t,e,r)=>{let{ot:l,st:n}=r||{},o=e5("__osSizeObserverPlugin"),{V:a}=rl(),s=tE(tR,t),[u]=i({o:!1,_:!0,u:(t,e)=>!(!t||!t4(t)&&t4(e))});return()=>{let r=[],c=tr(`<div class="${eT}"><div class="${eF}"></div></div>`),d=c[0],f=d.firstChild,p=t=>{let r=t instanceof ResizeObserverEntry,n=!r&&g(t),o=!1,i=!1,s=!0;if(r){let[e,,r]=u(t.contentRect),l=t4(e),n=t4(r),a=!r;o=a&&!!n||!l,i=!n&&l,s=!o}else n?[,s]=t:i=!0===t;if(l&&s){let e=n?t[0]:tR(d);ef(d,{x:ec(3333333,3333333,e&&a),y:3333333})}o||e({et:!n,ct:n?t:void 0,st:i})},h=n&&p;if(tx){let t=new tx(t=>p(t.pop()));t.observe(f),C(r,()=>{t.disconnect()})}else{if(!o)return K;let[t,e]=o(f,p,n);h=t,C(r,e)}if(l){let[t]=i({o:void 0},s);C(r,eo(d,"scroll",e=>{let r=t(),[l,n,o]=r;n&&(tA(f,"ltr rtl"),tz(f,l?"rtl":"ltr"),p([!!l,n,o])),ei(e)}))}return h&&(tz(d,eL),C(r,eo(d,"animationstart",h,{O:!!tx}))),tE(_,C(r,Z(t,d)))}},ry=(t,e)=>{let r;let l=t=>0===t.h||t.isIntersecting||t.intersectionRatio>0,n=te("os-trinsic-observer"),[o]=i({o:!1}),a=(t,r)=>{if(t){let n=o(l(t)),[,i]=n;return i&&!r&&e(n)&&[n]}},s=(t,e)=>a(e.pop(),t);return[()=>{let e=[];if(tw)(r=new tw(tE(s,!1),{root:t})).observe(n),C(e,()=>{r.disconnect()});else{let t=()=>{let t=t0(n);a(t)};C(e,rh(n,t)()),t()}return tE(_,C(e,Z(t,n)))},()=>r&&s(!0,r.takeRecords())]},rv=(t,e)=>{let r,l,n,o,a;let s=`[${ex}]`,u=`[${eH}]`,c=["tabindex"],d=["wrap","cols","rows"],f=["id","class","style","open"],p={rt:!1,lt:tR(t.it)},{it:h,ut:b,ft:w,_t:x,dt:$,vt:E,ht:S}=t,{U:C}=rl(),[A]=i({u:t6,o:{w:0,h:0}},()=>{let t=E(ez,ez),e=E(eM,""),r=e&&ep(b);S(ez,ez),S(eM,""),S("",e_,!0);let l=t3(w),n=t3(b),o=t2(b);return S(ez,ez,t),S(eM,"",e),S("",e_),ef(b,r),{w:n.w+l.w+o.w,h:n.h+l.h+o.h}}),z=x?d:f.concat(d),I=tO(e,{v:()=>r,p:()=>l,g(t,e){let[r]=t,[l]=e;return[M(r).concat(M(l)).reduce((t,e)=>(t[e]=r[e]||l[e],t),{})]}}),_=t=>{O(t||c,t=>{if(k(c,t)){let e=R(h,t);v(e)?R(b,t,e):L(b,t)}})},H=(t,r)=>{let[l,n]=t,o={gt:n};return N(p,{rt:l}),r||e(o),o},P=({et:t,ct:r,st:l})=>{let n=!t||l?e:I,[o,i]=r||[];N(p,{lt:o||!1}),n({et:t,st:l,bt:i})},T=(t,r)=>{let[,l]=A(),n={wt:l},o=t?e:I;return l&&!r&&o(n),n},F=(t,e,r)=>{let l={yt:e};return e&&!r?I(l):$||_(t),l},[D,j]=w||!C?ry(h,H):[],V=!$&&rh(h,P,{st:!0,ot:!0}),[W,B]=rp(h,!1,F,{Z:f,Y:f.concat(c)}),q=$&&tx&&new tx(t=>{let e=t[t.length-1].contentRect,r=t4(e),l=t4(a);P({et:!0,st:!l&&r}),a=e});return[()=>{_(),q&&q.observe(h);let t=V&&V(),e=D&&D(),r=W();return()=>{q&&q.disconnect(),t&&t(),e&&e(),o&&o(),r()}},({St:t,$t:e})=>{let i={},[a]=t("update.ignoreMutation"),[c,d]=t("update.attributes"),[f,p]=t("update.elementEvents"),[h,v]=t("update.debounce"),x=t=>m(a)&&a(t);if(p||d){n&&n(),o&&o();let[t,e]=rp(w||b,!0,T,{Y:z.concat(c||[]),J:f,K:s,nt:(t,e)=>{let{target:r,attributeName:l}=t,n=!e&&!!l&&!$&&Y(r,s,u);return n||!!X(r,`.${eD}`)||!!x(t)}});o=t(),n=e}if(v){if(I.m(),g(h)){let t=h[0],e=h[1];r=y(t)&&t,l=y(e)&&e}else r=!!y(h)&&h,l=!1}if(e){let t=B(),r=j&&j(),l=n&&n();t&&N(i,F(t[0],t[1],e)),r&&N(i,H(r[0],e)),l&&N(i,T(l[0],e))}return i},p]},rb=(t,e,r)=>tn(t,to(e,r)),rm=(t,e,r)=>{let l=ti(e),[n,o]=ed(l,r),i=t/o,a=r?r.n?(o-t)/o:r.i?t/n:i:i;return rb(0,1,a)},rg=(t,e,r,l)=>{if(l){let t=r?"x":"y",{xt:e,Ot:n}=l,o=n[t],i=e[t];return rb(0,1,o/(o+i))}let n=r?tY:tK,o=t9(t)[n],i=t9(e)[n];return rb(0,1,o/i)},rw=(t,e,r,l,n,o)=>{let{V:i}=rl(),a=o?"x":"y",s=o?"Left":"Top",{xt:u}=l,c=rg(t,e,o);return 1/c*(1-c)*rm(r[`scroll${s}`],u[a],o&&n&&i)},rx=(t,e,r)=>{let{N:l,A:n}=rl(),{scrollbars:o}=l(),{slot:i}=o,{Ct:a,it:s,ut:u,Ht:c,zt:d,It:f,dt:p}=e,{scrollbars:h}=c?{}:t,{slot:y}=h||{},v=new Map,m=t=>t$&&new t$({source:d,axis:t}),w=m("x"),x=m("y"),$=ri([a,s,u],()=>p&&f?a:s,i,y),E=t=>p&&!f&&U(t)===u,S=t=>{v.forEach((e,r)=>{let l=!t||k(g(t)?t:[t],r);l&&((e||[]).forEach(t=>{t&&t.cancel()}),v.delete(r))})},A=(t,e,r)=>{let l=r?tz:tA;O(t,t=>{l(t.At,e)})},I=(t,e)=>{O(t,t=>{let[r,l]=e(t);tP(r,l)})},H=(t,e,r)=>{I(t,t=>{let{Et:l,Tt:n}=t;return[l,{[r?tY:tK]:`${(100*rg(l,n,r,e)).toFixed(3)}%`}]})},M=(t,e,r)=>{x||x||I(t,t=>{let{Et:l,Tt:n,At:o}=t,i=rw(l,n,d,e,tR(o),r);return[l,{transform:i==i?tL(`${(100*i).toFixed(3)}%`,r):""}]})},N=t=>{let{At:e}=t,r=E(e)&&e,l=ep(d);return[r,{transform:r?tL({x:`${l.x}px`,y:`${l.y}px`}):""}]},P=(t,e,r,l)=>e&&t.animate(r,{timeline:e,composite:l}),R=(t,e,r,l)=>P(t,e,{transform:[tL("0px",l),tL(`${tn(0,r-.5)}px`,l)]},"add"),T=[],L=[],F=[],D=(t,e,r)=>{let l=b(r),n=!l||r,o=!l||!r;n&&A(L,t,e),o&&A(F,t,e)},j=t=>{let e=t?eV:eW,l=t?L:F,o=z(l)?eY:"",i=te(`${eD} ${e} ${o}`),a=te(eB),s=te(eq),u={At:i,Tt:a,Et:s};return n||tz(i,"os-no-css-vars"),C(l,u),C(T,[Z(i,a),Z(a,s),tE(G,i),S,r(u,D,t)]),u},V=tE(j,!0),W=tE(j,!1);return V(),W(),[{Dt:t=>{H(L,t,!0),H(F,t)},kt:t=>{M(L,t,!0),M(F,t)},Rt:()=>{let t=(t,{At:e,Et:r})=>{let l=t&&tR(e);S(r),v.set(r,[P(r,t?w:x,{transform:[tL("0%",t),tL(t&&l?"100%":"-100%",t)],[t?l?"right":"left":"top"]:["0%","100%"]})])};L.forEach(tE(t,!0)),F.forEach(tE(t,!1))},Mt:({xt:t})=>{F.concat(L).forEach(({At:e})=>{S(e),E(e)&&v.set(e,[R(e,w,t.x,!0),R(e,x,t.y)])})},Lt:()=>{x||x||(p&&I(L,N),p&&I(F,N))},Pt:D,Vt:{P:w,Ut:L,Bt:V,jt:tE(I,L)},Nt:{P:x,Ut:F,Bt:W,jt:tE(I,F)}},()=>(Z($,L[0].At),Z($,F[0].At),tu(()=>{D(eY)},300),tE(_,T))]},r$=(t,e,r)=>{let{it:l,zt:n,qt:o}=e,i=(e,i)=>{let{Et:a,Tt:s}=e,u=`scroll${i?"Left":"Top"}`,c=`client${i?"X":"Y"}`,d=i?tY:tK,f=i?"left":"top",p=i?"w":"h",h=i?"x":"y",y="pointerup pointerleave pointercancel lostpointercapture",v=(t,e)=>l=>{let{xt:o}=r,i=t0(s)[p]-t0(a)[p],c=e*l/i*o[h];n[u]=t+c};return eo(s,"pointerdown",e=>{let r=X(e.target,`.${eq}`)===a,i=r?a:s,h=t.scrollbars,{button:b,isPrimary:m,pointerType:g}=e,{pointers:w}=h,x=0===b&&m&&h[r?"dragScroll":"clickScroll"]&&(w||[]).includes(g);if(F(l,ex,eI,!0),x){let t=!r&&e.shiftKey,h=tE(t9,a),b=tE(t9,s),m=(t,e)=>(t||h())[f]-(e||b())[f],g=ti(t9(n)[d])/t0(n)[p]||1,w=v(n[u]||0,1/g),x=e[c],$=h(),E=b(),S=$[d],O=m($,E)+S/2,k=x-E[f],A=r?0:k-O,z=t=>{_(I),i.releasePointerCapture(t.pointerId)},I=[tE(F,l,ex,eI),eo(o,y,z),eo(o,"selectstart",t=>ea(t),{S:!1}),eo(s,y,z),eo(s,"pointermove",e=>{let l=e[c]-x;(r||t)&&w(A+l)})];if(t)w(A);else if(!r){let t=e5("__osClickScrollPlugin");t&&C(I,t(w,m,A,S,k))}i.setPointerCapture(e.pointerId)}})};return(t,e,r)=>{let{At:a}=t,[s,u]=tS(333),c=!!n.scrollBy,d=!0;return tE(_,[eo(a,"pointerenter",()=>{e(eK,!0)}),eo(a,"pointerleave pointercancel",()=>{e(eK,!1)}),eo(a,"wheel",t=>{let{deltaX:r,deltaY:o,deltaMode:i}=t;c&&d&&0===i&&U(a)===l&&n.scrollBy({left:r,top:o,behavior:"smooth"}),d=!1,e(eQ,!0),s(()=>{d=!0,e(eQ)}),ea(t)},{S:!1,$:!0}),eo(a,"mousedown",tE(eo,o,"click",ei,{O:!0,$:!0}),{$:!0}),i(t,r),u])}},rE=(t,e,r,l,n,o)=>{let i,a,s,u,c;let d=K,f=0,[p,h]=tS(),[y,v]=tS(),[b,m]=tS(100),[g,w]=tS(100),[x,$]=tS(100),[E,S]=tS(()=>f),[O,k]=rx(t,n,r$(e,n,l)),{it:A,Gt:z,It:I}=n,{Pt:H,Dt:M,kt:N,Rt:P,Mt:R,Lt:T}=O,L=t=>{H(eJ,t,!0),H(eJ,t,!1)},F=(t,e)=>{if(S(),t)H(eZ);else{let t=tE(H,eZ,!0);f>0&&!e?E(t):t()}},D=t=>"mouse"===t.pointerType,j=t=>{D(t)&&(u=a)&&F(!0)},V=[m,S,w,$,v,h,()=>d(),eo(A,"pointerover",j,{O:!0}),eo(A,"pointerenter",j),eo(A,"pointerleave",t=>{D(t)&&(u=!1,a&&F(!1))}),eo(A,"pointermove",t=>{D(t)&&i&&p(()=>{m(),F(!0),g(()=>{i&&F(!1)})})}),eo(z,"scroll",t=>{y(()=>{N(l),s&&F(!0),b(()=>{s&&!u&&F(!1)})}),o(t),T()})];return[()=>tE(_,C(V,k())),({St:t,Ft:e,Wt:n,Xt:o})=>{let{Yt:u,Zt:p,Jt:h}=o||{},{bt:y,st:v}=n||{},{I:b}=rl(),{lt:m}=r,{xt:g,Kt:w,Qt:$}=l,[E,S]=t("showNativeOverlaidScrollbars"),[O,k]=t("scrollbars.theme"),[C,A]=t("scrollbars.visibility"),[_,D]=t("scrollbars.autoHide"),[j,V]=t("scrollbars.autoHideSuspend"),[W]=t("scrollbars.autoHideDelay"),[B,q]=t("scrollbars.dragScroll"),[U,X]=t("scrollbars.clickScroll"),Y=$.x||$.y,K=E&&b.x&&b.y,G=(t,e)=>{let r="visible"===C||"auto"===C&&"scroll"===t;return H(eU,r,e),r};if(f=W,v&&!e&&(j&&Y?(L(!1),d(),x(()=>{d=eo(z,"scroll",tE(L,!0),{O:!0})})):L(!0)),S&&H("os-theme-none",K),k&&(H(c),H(O,!0),c=O),V&&!j&&L(!0),D&&(i="move"===_,a="leave"===_,F(!(s="never"!==_),!0)),q&&H(e1,B),X&&H(e0,U),h||A){let t=G(w.x,!0),e=G(w.y,!1),r=t&&e;H(eX,!r)}(u||p||y)&&(M(l),N(l),P(l),T(),R(l),H(eG,!g.x,!0),H(eG,!g.y,!1),H(ej,m&&!I))},{},O]},rS=t=>{let e=rl(),{N:r,H:l}=e,n=e5(e6),o=n&&n.C,{elements:i}=r(),{host:a,padding:s,viewport:u,content:c}=i,d=E(t),f=d?{}:t,{elements:p}=f,{host:h,padding:y,viewport:v,content:b}=p||{},m=d?t:f.target,g=B(m,"textarea"),w=m.ownerDocument,x=w.documentElement,$=m===w.body,S=w.defaultView,O=tE(ro,[m]),A=tE(ri,[m]),z=tE(rn,[m]),I=tE(te,""),H=tE(O,I,u),N=tE(A,I,c),P=H(v),T=P===m,j=T&&$,V=!T&&N(b),W=!T&&E(P)&&P===V,X=W&&!!z(c),Y=X?H():P,J=X?V:N(),tr=W?Y:P,tl=j?x:tr,tn=g?O(I,a,h):m,to=j?tl:tn,ti=w.activeElement,ta=!T&&S.top===S&&ti===m,ts={Ct:m,it:to,ut:tl,tn:!T&&A(I,s,y),ft:W?J:V,nn:!T&&!l&&o&&o(e),zt:j?x:tl,Gt:j?w:tl,sn:S,qt:w,_t:g,It:$,Ht:d,dt:T,en:W,vt:(t,e)=>D(tl,T?ex:eH,T?e:t),ht:(t,e,r)=>F(tl,T?ex:eH,T?e:t,r)},tu=M(ts).reduce((t,e)=>{let r=ts[e];return C(t,!!(r&&E(r))&&!U(r)&&r)},[]),tc=t=>t?k(tu,t):null,{Ct:td,it:tf,tn:tp,ut:th,ft:ty,nn:tv}=ts,tb=[()=>{L(tf,ex),L(tf,ek),L(td,ek),$&&(L(x,ex),L(x,ek))}],tm=g&&tc(tf),tg=g?td:q([ty,th,tp,tf,td].find(t=>!1===tc(t))),tw=j?td:ty||th,tx=tE(_,tb);return[ts,()=>{R(tf,ex,T?"viewport":"host"),R(tp,eP,""),R(ty,eR,""),T||R(th,eH,"");let t=$&&!T?tz(U(m),eO):K,e=t=>{Z(U(t),q(t)),G(t)};if(tm&&(tt(td,tf),C(tb,()=>{tt(tf,td),G(tf)})),Z(tw,tg),Z(tf,tp),Z(tp||tf,!T&&th),Z(th,ty),C(tb,()=>{t(),L(tp,eP),L(ty,eR),L(th,eC),L(th,eA),L(th,eH),tc(ty)&&e(ty),tc(th)&&e(th),tc(tp)&&e(tp)}),l&&!T&&(F(th,eH,eN,!0),C(tb,tE(L,th,eH))),tv&&(Q(th,tv),C(tb,tE(G,tv))),ta){let t="tabindex",e=R(th,t);R(th,t,"-1"),th.focus();let r=()=>e?R(th,t,e):L(th,t),l=eo(w,"pointerdown keydown",()=>{r(),l()});C(tb,[r,l])}else ti&&ti.focus&&ti.focus();return tg=0,tx},tx]},rO=({ft:t})=>({Wt:e,cn:r})=>{let{U:l}=rl(),{gt:n}=e||{},{rt:o}=r,i=(t||!l)&&n;i&&tP(t,{[tK]:o?"":"100%"})},rk=({it:t,tn:e,ut:r,dt:l},n)=>{let[o,a]=i({u:t8,o:tT()},tE(tT,t,"padding",""));return({St:t,Wt:i,cn:s,Ft:u})=>{let[c,d]=a(u),{H:f,U:p}=rl(),{et:h,wt:y,bt:v}=i||{},{lt:b}=s,[m,g]=t("paddingAbsolute");(h||d||!p&&y)&&([c,d]=o(u));let w=!l&&(g||v||d);if(w){let t=!m||!e&&!f,l=c.r+c.l,o=c.t+c.b,i={[tB]:t&&!b?-l:0,[tq]:t?-o:0,[tW]:t&&b?-l:0,top:t?-c.t:0,right:t?b?-c.r:"auto":0,left:t?b?"auto":-c.l:0,[tY]:t?`calc(100% + ${l}px)`:""},a={[tF]:t?c.t:0,[tD]:t?c.r:0,[tV]:t?c.b:0,[tj]:t?c.l:0};tP(e||r,i),tP(r,a),N(n,{tn:c,rn:!t,D:e?a:N({},i,a)})}return{ln:w}}},rC=({it:t,tn:e,ut:r,nn:l,dt:n,ht:o,It:a,sn:s},u)=>{let c=tE(tn,0),d="visible",f={u:t6,o:{w:0,h:0}},p=(t,e)=>{let r=tl.devicePixelRatio%1!=0?1:0,l={w:c(t.w-e.w),h:c(t.h-e.h)};return{w:l.w>r?l.w:0,h:l.h>r?l.h:0}},h=t=>0===t.indexOf(d),{L:y,U:v,H:b,I:m}=rl(),g=e5(e6),w=!n&&!b&&(m.x||m.y),x=a&&n,[$,E]=i(f,tE(t2,r)),[S,O]=i(f,tE(t3,r)),[k,C]=i(f),[A,z]=i(f),[I]=i({u:t7,o:{x:tG,y:tG}}),_=(e,l)=>{if(tP(r,{[tK]:""}),l){let{rn:l,tn:n}=u,{an:o,k:i}=e,a=t2(t),s=t1(t),c="content-box"===tP(r,"boxSizing"),d=l||c?n.b+n.t:0,f=!(m.x&&c);tP(r,{[tK]:s.h+a.h+(o.x&&f?i.x:0)-d})}},H=(t,e)=>{let l=b||t?0:42,n=(t,n,o)=>{let i=tP(r,t),a=e?e[t]:i,s="scroll"===a;return[i,s,s&&!b?n?l:o:0,n&&!!l]},[o,i,a,s]=n(tU,m.x,y.x),[u,c,d,f]=n(tX,m.y,y.y);return{Kt:{x:o,y:u},an:{x:i,y:c},k:{x:a,y:d},R:{x:s,y:f}}},M=(t,e,r,l)=>{let n=(t,e)=>{let r=h(t),l=e&&r&&t.replace(`${d}-`,"")||"";return[e&&!r?t:"",h(l)?"hidden":l]},[o,i]=n(r.x,e.x),[a,s]=n(r.y,e.y);return l[tU]=i&&a?i:o,l[tX]=s&&o?s:a,H(t,l)},P=(t,e,r,l)=>{let{k:n,R:o}=t,{x:i,y:a}=o,{x:s,y:c}=n,{D:d}=u,f=e?tW:tB,p=e?tj:tD,h=d[f],y=d[tq],v=d[p],b=d[tV];l[tY]=`calc(100% + ${c+-1*h}px)`,l[f]=-c+h,l[tq]=-s+y,r&&(l[p]=v+(a?c:0),l[tV]=b+(i?s:0))},[T,L]=g?g.T(w,v,r,l,u,H,P):[()=>w,()=>[K]];return({St:l,Wt:i,cn:a,Ft:d},{ln:f})=>{let y;let{et:g,yt:w,wt:D,gt:j,bt:V}=i||{},{rt:W,lt:B}=a,[q,U]=l("showNativeOverlaidScrollbars"),[X,Y]=l("overflow"),K=q&&m.x&&m.y,G=!n&&!v&&(g||D||w||U||j),J=h(X.x),Z=h(X.y),Q=J||Z,tt=E(d),te=O(d),tr=C(d),tl=z(d);if(U&&b&&o(eN,"scrollbarHidden",!K),G&&_(y=H(K),W),g||f||D||V||U){Q&&o(ez,ez,!1);let[t,e]=L(K,B,y),[l,n]=tt=$(d),[i,a]=te=S(d),u=t1(r),f=i,h=u;t(),(a||n||U)&&e&&!K&&T(e,i,l,B)&&(h=t1(r),f=t3(r));let v=tQ(s),b={w:c(tn(i.w,f.w)+l.w),h:c(tn(i.h,f.h)+l.h)},m={w:c((x?v.w:h.w+c(u.w-i.w))+l.w),h:c((x?v.h:h.h+c(u.h-i.h))+l.h)};tl=A(m),tr=k(p(b,m),d)}let[to,ti]=tl,[ta,ts]=tr,[tu,tc]=te,[td,tf]=tt,tp={x:ta.w>0,y:ta.h>0},th=J&&Z&&(tp.x||tp.y)||J&&tp.x&&!tp.y||Z&&tp.y&&!tp.x;if(f||V||tf||tc||ti||ts||Y||U||G){let e={[tB]:0,[tq]:0,[tW]:0,[tY]:"",[tU]:"",[tX]:""},l=M(K,tp,X,e),o=T(l,tu,td,B);n||P(l,B,o,e),G&&_(l,W),n?(R(t,eC,e[tU]),R(t,eA,e[tX])):tP(r,e)}F(t,ex,ez,th),F(e,eP,ez,th),n||F(r,eH,ez,Q);let[ty,tv]=I(H(K).Kt);return N(u,{Kt:ty,Ot:{x:to.w,y:to.h},xt:{x:ta.w,y:ta.h},Qt:tp}),{Jt:tv,Yt:ti,Zt:ts}}},rA=t=>{let[e,r,l]=rS(t),n={tn:{t:0,r:0,b:0,l:0},rn:!1,D:{[tB]:0,[tq]:0,[tW]:0,[tF]:0,[tD]:0,[tV]:0,[tj]:0},Ot:{x:0,y:0},xt:{x:0,y:0},Kt:{x:tG,y:tG},Qt:{x:!1,y:!1}},{Ct:o,ut:i,ht:a,dt:s}=e,{H:u,I:c,U:d}=rl(),f=!u&&(c.x||c.y),p=[rO(e),rk(e,n),rC(e,n)];return[r,t=>{let e={},r=(f||!d)&&ep(i);return a("",e_,!0),O(p,r=>{N(e,r(t,e)||{})}),a("",e_),ef(i,r),s||ef(o,0),e},n,e,l]},rz=(t,e,r,l)=>{let[n,o,i,a,s]=rA(t),[u,c,d]=rv(a,t=>{b({},t)}),[f,p,,h]=rE(t,e,d,i,a,l),y=t=>O(N({},t),(t,e,r)=>{r[e]=!!t}),v=t=>M(t).some(e=>!!t[e]),b=(t,l)=>{let{un:n,Ft:i,$t:a,fn:s}=t,u=n||{},f=!!i,h={St:ew(e,u,f),un:u,Ft:f};if(s)return p(h),!1;let b=l||c(N({},h,{$t:a})),m=o(N({},h,{cn:d,Wt:b}));p(N({},h,{Wt:b,Xt:m}));let g=v(b),w=v(m),x=g||w||!P(u)||f;return x&&r(t,{Wt:y(b),Xt:y(m)}),x};return[()=>{let{Ct:t,ut:e,qt:r,It:l}=a,o=l?r.documentElement:t,i=ep(o),s=[u(),n(),f()];return ef(e,i),tE(_,s)},b,()=>({_n:d,dn:i}),{vn:a,hn:h},s]},rI=(t,e,r)=>{let{G:l,B:n,j:o}=rl(),i=E(t),a=i?t:t.target,s=rd(a);if(e&&!s){let s=!1,u=[],c={},d=t=>{let e=e5("__osOptionsValidationPlugin");return e?e(t,!0):t},f=N({},l(),d(e)),[p,h,y]=ey(r),[v,b,m,g,w]=rz(t,f,({un:t,Ft:e},{Wt:r,Xt:l})=>{let{et:n,bt:o,gt:i,wt:a,yt:s}=r,{Yt:u,Zt:c,Jt:d}=l;y("updated",[$,{updateHints:{sizeChanged:n,directionChanged:o,heightIntrinsicChanged:i,overflowEdgeChanged:u,overflowAmountChanged:c,overflowStyleChanged:d,contentMutation:a,hostMutation:s},changedOptions:t||{},force:!!e}])},t=>y("scroll",[$,t])),x=t=>{rc(a),_(u),s=!0,y("destroyed",[$,t]),h()},$={options(t,e){if(t){let r=e?l():{},n=eg(f,N(r,d(t)));P(n)||(N(f,n),b({un:n}))}return N({},f)},on:p,off:(t,e)=>{t&&e&&h(t,e)},state(){let{_n:t,dn:e}=m(),{lt:r}=t,{Ot:l,xt:n,Kt:o,Qt:i,tn:a,rn:u}=e;return N({},{overflowEdge:l,overflowAmount:n,overflowStyle:o,hasOverflow:i,padding:a,paddingAbsolute:u,directionRTL:r,destroyed:s})},elements(){let{Ct:t,it:e,tn:r,ut:l,ft:n,zt:o,Gt:i}=g.vn,{Vt:a,Nt:s}=g.hn,u=t=>{let{Et:e,Tt:r,At:l}=t;return{scrollbar:l,track:r,handle:e}},c=t=>{let{Ut:e,Bt:r}=t,l=u(e[0]);return N({},l,{clone:()=>{let t=u(r());return b({fn:!0}),t}})};return N({},{target:t,host:e,padding:r||l,viewport:l,content:n||l,scrollOffsetElement:o,scrollEventElement:i,scrollbarHorizontal:c(a),scrollbarVertical:c(s)})},update:t=>b({Ft:t,$t:!0}),destroy:tE(x,!1),plugin:t=>c[M(t)[0]]},E=tE($.update,!0);return(C(u,[n(E),o(E),w]),ru(a,$),e4(e3,rI,$,c),ra(g.vn.It,!i&&t.cancel))?x(!0):(C(u,v()),y("initialized",[$]),$.update(!0)),$}return s};rI.plugin=t=>{let e=g(t),r=e?t:[t],l=r.map(t=>e4(t,rI)[0]);return e9(r),e?l:l[0]},rI.valid=t=>{let e=t&&t.elements,r=m(e)&&e();return $(r)&&!!rd(r.target)},rI.env=()=>{let{L:t,I:e,H:r,V:l,U:n,A:o,P:i,W:a,X:s,N:u,q:c,G:d,F:f}=rl();return N({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:r,rtlScrollBehavior:l,flexboxGlue:n,cssCustomProperties:o,scrollTimeline:i,staticDefaultInitialization:a,staticDefaultOptions:s,getDefaultInitialization:u,setDefaultInitialization:c,getDefaultOptions:d,setDefaultOptions:f})};let r_=()=>{let t,e;if(typeof window>"u"){let t=()=>{};return[t,t]}let r=window,l="function"==typeof r.requestIdleCallback,n=r.requestAnimationFrame,o=r.cancelAnimationFrame,i=l?r.requestIdleCallback:n,a=l?r.cancelIdleCallback:o,s=()=>{a(t),o(e)};return[(r,o)=>{s(),t=i(l?()=>{s(),e=n(r)}:r,"object"==typeof o?o:{timeout:2233})},s]},rH=t=>{let{options:e,events:r,defer:l}=t||{},[n,i]=(0,o.useMemo)(r_,[]),a=(0,o.useRef)(null),s=(0,o.useRef)(l),u=(0,o.useRef)(e),c=(0,o.useRef)(r);return(0,o.useEffect)(()=>{s.current=l},[l]),(0,o.useEffect)(()=>{let{current:t}=a;u.current=e,rI.valid(t)&&t.options(e||{},!0)},[e]),(0,o.useEffect)(()=>{let{current:t}=a;c.current=r,rI.valid(t)&&t.on(r||{},!0)},[r]),(0,o.useEffect)(()=>()=>{var t;i(),null==(t=a.current)||t.destroy()},[]),(0,o.useMemo)(()=>[t=>{let e=a.current;if(rI.valid(e))return;let r=s.current,l=u.current||{},o=c.current||{},i=()=>a.current=rI(t,l,o);r?n(i,r):i()},()=>a.current],[])},rM=(0,o.forwardRef)((t,e)=>{let{element:r="div",options:l,events:n,defer:i,children:a,...s}=t,u=(0,o.useRef)(null),c=(0,o.useRef)(null),[d,f]=rH({options:l,events:n,defer:i});return(0,o.useEffect)(()=>{let{current:t}=u,{current:e}=c;return t&&e&&d({target:t,elements:{viewport:e,content:e}}),()=>{var t;return null==(t=f())?void 0:t.destroy()}},[d,r]),(0,o.useImperativeHandle)(e,()=>({osInstance:f,getElement:()=>u.current}),[]),o.createElement(r,{"data-overlayscrollbars-initialize":"",ref:u,...s},o.createElement("div",{"data-overlayscrollbars-contents":"",ref:c},a))})},2115:function(t,e,r){r.d(e,{r:function(){return u}});var l=r(7437),n=r(4440),o=r.n(n),i=r(1396),a=r.n(i),s=r(2265);let u=(0,s.forwardRef)((t,e)=>{let{external:r,...n}=t,i=o()("no-underline text-primary-blue2 font-medium [background:linear-gradient(0deg,currentColor,currentColor)_no-repeat_right_bottom_/_0_2px]","[transition:background-size_250ms] hover:[background-size:100%_2px] hover:[background-position-x:left]","focus-visible:rounded-sm",n.className);return r?(0,l.jsx)("a",{...n,ref:e,className:i}):(0,l.jsx)(a(),{...n,ref:e,className:i})})}}]);