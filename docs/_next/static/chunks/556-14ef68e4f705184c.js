"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[556],{7556:function(t,e,r){r.d(e,{A:function(){return i},E:function(){return a}});var n=r(2265),l=r(8618);let o=()=>{let t,e;let r=window,n="function"==typeof r.requestIdleCallback,l=r.requestAnimationFrame,o=r.cancelAnimationFrame,i=n?r.requestIdleCallback:l,a=n?r.cancelIdleCallback:o,c=()=>{a(t),o(e)};return[(r,o)=>{c(),t=i(n?()=>{c(),e=l(r)}:r,"object"==typeof o?o:{timeout:2233})},c]},i=t=>{let{options:e,events:r,defer:i}=t||{},[a,c]=(0,n.useMemo)(o,[]),s=(0,n.useRef)(null),u=(0,n.useRef)(i),d=(0,n.useRef)(e),p=(0,n.useRef)(r);return(0,n.useEffect)(()=>{u.current=i},[i]),(0,n.useEffect)(()=>{let{current:t}=s;d.current=e,l.UN.valid(t)&&t.options(e||{},!0)},[e]),(0,n.useEffect)(()=>{let{current:t}=s;p.current=r,l.UN.valid(t)&&t.on(r||{},!0)},[r]),(0,n.useEffect)(()=>()=>{var t;c(),null==(t=s.current)||t.destroy()},[]),(0,n.useMemo)(()=>[t=>{let e=s.current;if(l.UN.valid(e))return;let r=u.current,n=d.current||{},o=p.current||{},i=()=>s.current=(0,l.UN)(t,n,o);r?a(i,r):i()},()=>s.current],[])},a=(0,n.forwardRef)((t,e)=>{let{element:r="div",options:l,events:o,defer:a,children:c,...s}=t,u=(0,n.useRef)(null),d=(0,n.useRef)(null),[p,f]=i({options:l,events:o,defer:a});return(0,n.useEffect)(()=>{let{current:t}=u,{current:e}=d;if(t)return p("body"===r?{target:t,cancel:{body:null}}:{target:t,elements:{viewport:e,content:e}}),()=>{var t;return null==(t=f())?void 0:t.destroy()}},[p,r]),(0,n.useImperativeHandle)(e,()=>({osInstance:f,getElement:()=>u.current}),[]),n.createElement(r,{"data-overlayscrollbars-initialize":"",ref:u,...s},"body"===r?c:n.createElement("div",{"data-overlayscrollbars-contents":"",ref:d},c))})},8618:function(t,e,r){let n,l;r.d(e,{UN:function(){return rS},ZA:function(){return rs}});/*!
 * OverlayScrollbars
 * Version: 2.9.0
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */let o=(t,e)=>{let r;let{o:n,i:l,u:o}=t,i=n,a=(t,e)=>{let n=i,a=e||(l?!l(n,t):n!==t);return(a||o)&&(i=t,r=n),[i,a,r]};return[e?t=>a(e(i,r),t):a,t=>[i,!!t,r]]},i="undefined"!=typeof HTMLElement&&window.document?window:{},a=Math.max,c=Math.min,s=Math.round,u=Math.abs,d=Math.sign,p=i.cancelAnimationFrame,f=i.requestAnimationFrame,y=i.setTimeout,h=i.clearTimeout,v=t=>void 0!==i[t]?i[t]:void 0,b=v("MutationObserver"),m=v("IntersectionObserver"),w=v("ResizeObserver"),g=v("ScrollTimeline"),x=t=>void 0===t,S=t=>null===t,A=t=>"number"==typeof t,C=t=>"string"==typeof t,M=t=>"boolean"==typeof t,O=t=>"function"==typeof t,T=t=>Array.isArray(t),R=t=>"object"==typeof t&&!T(t)&&!S(t),E=t=>{let e=!!t&&t.length,r=A(e)&&e>-1&&e%1==0;return(!!T(t)||!O(t)&&!!r)&&(!(e>0&&R(t))||e-1 in t)},k=t=>!!t&&t.constructor===Object,_=t=>t instanceof HTMLElement,H=t=>t instanceof Element,D=()=>performance.now(),I=(t,e,r,n,l)=>{let o=0,i=D(),c=a(0,r),s=r=>{let u=D(),d=u-i>=c,p=r?1:1-(a(0,i+c-u)/c||0),y=(e-t)*(O(l)?l(p,p*c,0,1,c):p)+t,h=d||1===p;n&&n(y,p,h),o=h?0:f(()=>s())};return s(),t=>{p(o),t&&s(t)}};function P(t,e){if(E(t))for(let r=0;r<t.length&&!1!==e(t[r],r,t);r++);else t&&P(Object.keys(t),r=>e(t[r],r,t));return t}let z=(t,e)=>t.indexOf(e)>=0,N=(t,e)=>t.concat(e),L=(t,e,r)=>(!r&&!C(e)&&E(e)?Array.prototype.push.apply(t,e):t.push(e),t),j=t=>Array.from(t||[]),V=t=>T(t)?t:!C(t)&&E(t)?j(t):[t],F=t=>!!t&&!t.length,K=t=>j(new Set(t)),q=(t,e,r)=>{P(t,t=>t&&t.apply(void 0,e||[])),r||(t.length=0)},U="paddingTop",B="paddingRight",X="paddingLeft",Y="paddingBottom",Q="marginLeft",W="marginRight",Z="marginBottom",$="overflowX",G="overflowY",J="width",tt="height",te="visible",tr="hidden",tn="scroll",tl=t=>{let e=String(t||"");return e?e[0].toUpperCase()+e.slice(1):""},to=(t,e,r,n)=>{if(t&&e){let l=!0;return P(r,r=>{(n?n(t[r]):t[r])!==(n?n(e[r]):e[r])&&(l=!1)}),l}return!1},ti=(t,e)=>to(t,e,["w","h"]),ta=(t,e)=>to(t,e,["x","y"]),tc=(t,e)=>to(t,e,["t","r","b","l"]),ts=()=>{},tu=function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return t.bind(0,...r)},td=t=>{let e;let r=t?y:f,n=t?h:p;return[l=>{n(e),e=r(()=>l(),O(t)?t():t)},()=>n(e)]},tp=(t,e)=>{let r,n,l,o;let{_:i,p:a,v:c,S:s}=e||{},u=ts,d=function(e){u(),h(r),o=r=n=void 0,u=ts,t.apply(this,e)},v=t=>s&&n?s(n,t):t,b=()=>{u!==ts&&d(v(l)||l)},m=function(){let t=j(arguments),e=O(i)?i():i;if(A(e)&&e>=0){let i;let s=O(a)?a():a,m=A(s)&&s>=0,w=e>0?y:f,g=e>0?h:p,x=v(t)||t,S=d.bind(0,x);u(),c&&!o?(S(),o=!0,i=w(()=>o=void 0,e)):(i=w(S,e),m&&!r&&(r=y(b,s))),u=()=>g(i),n=l=x}else d(t)};return m.m=b,m},tf=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),ty=t=>t?Object.keys(t):[],th=(t,e,r,n,l,o,i)=>(("object"!=typeof t||S(t))&&!O(t)&&(t={}),P([e,r,n,l,o,i],e=>{P(e,(r,n)=>{let l=e[n];if(t===l)return!0;let o=T(l);if(l&&k(l)){let e=t[n],r=e;o&&!T(e)?r=[]:o||k(e)||(r={}),t[n]=th(r,l)}else t[n]=o?l.slice():l})}),t),tv=(t,e)=>P(th({},t),(t,r,n)=>{void 0===t?delete n[r]:e&&t&&k(t)&&(n[r]=tv(t,e))}),tb=t=>!ty(t).length,tm=(t,e,r)=>a(t,c(e,r)),tw=t=>K((T(t)?t:(t||"").split(" ")).filter(t=>t)),tg=(t,e)=>t&&t.getAttribute(e),tx=(t,e)=>t&&t.hasAttribute(e),tS=(t,e,r)=>{P(tw(e),e=>{t&&t.setAttribute(e,String(r||""))})},tA=(t,e)=>{P(tw(e),e=>t&&t.removeAttribute(e))},tC=(t,e)=>{let r=tw(tg(t,e)),n=tu(tS,t,e),l=(t,e)=>{let n=new Set(r);return P(tw(t),t=>{n[e](t)}),j(n).join(" ")};return{O:t=>n(l(t,"delete")),C:t=>n(l(t,"add")),$:t=>{let e=tw(t);return e.reduce((t,e)=>t&&r.includes(e),e.length>0)}}},tM=(t,e,r)=>(tC(t,e).O(r),tu(tO,t,e,r)),tO=(t,e,r)=>(tC(t,e).C(r),tu(tM,t,e,r)),tT=(t,e,r,n)=>(n?tO:tM)(t,e,r),tR=(t,e,r)=>tC(t,e).$(r),tE=t=>tC(t,"class"),tk=(t,e)=>{tE(t).O(e)},t_=(t,e)=>(tE(t).C(e),tu(tk,t,e)),tH=(t,e)=>{let r=e?H(e)&&e:document;return r?j(r.querySelectorAll(t)):[]},tD=(t,e)=>{let r=e?H(e)&&e:document;return r&&r.querySelector(t)},tI=(t,e)=>H(t)&&t.matches(e),tP=t=>tI(t,"body"),tz=t=>t?j(t.childNodes):[],tN=t=>t&&t.parentElement,tL=(t,e)=>H(t)&&t.closest(e),tj=t=>(t||document).activeElement,tV=(t,e,r)=>{let n=tL(t,e),l=t&&tD(r,n),o=tL(l,e)===n;return!!n&&!!l&&(n===t||l===t||o&&tL(tL(t,r),e)!==n)},tF=t=>{P(V(t),t=>{let e=tN(t);t&&e&&e.removeChild(t)})},tK=(t,e)=>tu(tF,t&&e&&P(V(e),e=>{e&&t.appendChild(e)})),tq=t=>{let e=document.createElement("div");return tS(e,"class",t),e},tU=t=>{let e=tq();return e.innerHTML=t.trim(),P(tz(e),t=>tF(t))},tB=(t,e)=>t.getPropertyValue(e)||t[e]||"",tX=t=>{let e=t||0;return isFinite(e)?e:0},tY=t=>tX(parseFloat(t||"")),tQ=t=>Math.round(1e4*t)/1e4,tW=t=>"".concat(tQ(tX(t)),"px");function tZ(t,e){t&&e&&P(e,(e,r)=>{try{let n=t.style,l=S(e)||M(e)?"":A(e)?tW(e):e;0===r.indexOf("--")?n.setProperty(r,l):n[r]=l}catch(t){}})}function t$(t,e,r){let n=C(e),l=n?"":{};if(t){let o=i.getComputedStyle(t,r)||t.style;l=n?tB(o,e):j(e).reduce((t,e)=>(t[e]=tB(o,e),t),l)}return l}let tG=(t,e,r)=>{let n=e?"".concat(e,"-"):"",l=r?"-".concat(r):"",o="".concat(n,"top").concat(l),i="".concat(n,"right").concat(l),a="".concat(n,"bottom").concat(l),c="".concat(n,"left").concat(l),s=t$(t,[o,i,a,c]);return{t:tY(s[o]),r:tY(s[i]),b:tY(s[a]),l:tY(s[c])}},tJ=(t,e)=>"translate".concat(R(t)?"(".concat(t.x,",").concat(t.y,")"):"".concat(e?"X":"Y","(").concat(t,")")),t0=t=>!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length),t1={w:0,h:0},t2=(t,e)=>e?{w:e["".concat(t,"Width")],h:e["".concat(t,"Height")]}:t1,t3=t=>t2("inner",t||i),t5=tu(t2,"offset"),t4=tu(t2,"client"),t6=tu(t2,"scroll"),t8=t=>{let e=parseFloat(t$(t,J))||0,r=parseFloat(t$(t,tt))||0;return{w:e-s(e),h:r-s(r)}},t9=t=>t.getBoundingClientRect(),t7=t=>!!t&&t0(t),et=t=>!!(t&&(t[tt]||t[J])),ee=(t,e)=>{let r=et(t);return!et(e)&&r},er=(t,e,r,n)=>{P(tw(e),e=>{t&&t.removeEventListener(e,r,n)})},en=(t,e,r,n)=>{var l;let o=null==(l=n&&n.H)||l,i=n&&n.I||!1,a=n&&n.A||!1,c={passive:o,capture:i};return tu(q,tw(e).map(e=>{let n=a?l=>{er(t,e,n,i),r&&r(l)}:r;return t&&t.addEventListener(e,n,c),tu(er,t,e,n,i)}))},el=t=>t.stopPropagation(),eo=t=>t.preventDefault(),ei=t=>el(t)||eo(t),ea=(t,e)=>{let{x:r,y:n}=A(e)?{x:e,y:e}:e||{};A(r)&&(t.scrollLeft=r),A(n)&&(t.scrollTop=n)},ec=t=>({x:t.scrollLeft,y:t.scrollTop}),es=()=>({D:{x:0,y:0},T:{x:0,y:0}}),eu=(t,e)=>{let{D:r,T:n}=t,{w:l,h:o}=e,i=(t,e,r)=>{let n=d(t)*r,l=d(e)*r;if(n===l){let r=u(t),o=u(e);l=r>o?0:l,n=r<o?0:n}return[(n=n===l?0:n)+0,l+0]},[a,c]=i(r.x,n.x,l),[s,p]=i(r.y,n.y,o);return{D:{x:a,y:s},T:{x:c,y:p}}},ed=t=>{var e,r,n,l;let{D:o,T:i}=t;return{x:(e=o.x,r=i.x,0===e&&e<=r),y:(n=o.y,l=i.y,0===n&&n<=l)}},ep=(t,e)=>{let{D:r,T:n}=t,l=(t,e,r)=>tm(0,1,(t-r)/(t-e)||0);return{x:l(r.x,n.x,e.x),y:l(r.y,n.y,e.y)}},ef=t=>{t&&t.focus&&t.focus({preventScroll:!0})},ey=(t,e)=>{P(V(e),t)},eh=t=>{let e=new Map,r=(t,r)=>{if(t){let n=e.get(t);ey(t=>{n&&n[t?"delete":"clear"](t)},r)}else e.forEach(t=>{t.clear()}),e.clear()},n=(t,l)=>{if(C(t)){let n=e.get(t)||new Set;return e.set(t,n),ey(t=>{O(t)&&n.add(t)},l),tu(r,t,l)}M(l)&&l&&r();let o=ty(t),i=[];return P(o,e=>{let r=t[e];r&&L(i,n(e,r))}),tu(q,i)};return n(t||{}),[n,r,(t,r)=>{P(j(e.get(t)),t=>{r&&!F(r)?t.apply(0,r):t()})}]},ev=t=>JSON.stringify(t,(t,e)=>{if(O(e))throw 0;return e}),eb=(t,e)=>t?"".concat(e).split(".").reduce((t,e)=>t&&tf(t,e)?t[e]:void 0,t):void 0,em={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},ew=(t,e)=>{let r={};return P(N(ty(e),ty(t)),n=>{let l=t[n],o=e[n];if(R(l)&&R(o))th(r[n]={},ew(l,o)),tb(r[n])&&delete r[n];else if(tf(e,n)&&o!==l){let t=!0;if(T(l)||T(o))try{ev(l)===ev(o)&&(t=!1)}catch(t){}t&&(r[n]=o)}}),r},eg=(t,e,r)=>n=>[eb(t,n),r||void 0!==eb(e,n)],ex="data-overlayscrollbars",eS="os-environment",eA="".concat(eS,"-scrollbar-hidden"),eC="".concat(ex,"-initialize"),eM="noClipping",eO="".concat(ex,"-body"),eT="".concat(ex,"-viewport"),eR="measuring",eE="scrollbarHidden",ek="".concat(ex,"-padding"),e_="".concat(ex,"-content"),eH="os-size-observer",eD="".concat(eH,"-appear"),eI="".concat(eH,"-listener"),eP="os-scrollbar",ez="".concat(eP,"-rtl"),eN="".concat(eP,"-horizontal"),eL="".concat(eP,"-vertical"),ej="".concat(eP,"-track"),eV="".concat(eP,"-handle"),eF="".concat(eP,"-visible"),eK="".concat(eP,"-cornerless"),eq="".concat(eP,"-interaction"),eU="".concat(eP,"-unusable"),eB="".concat(eP,"-auto-hide"),eX="".concat(eB,"-hidden"),eY="".concat(eP,"-wheel"),eQ="".concat(ej,"-interactive"),eW="".concat(eV,"-interactive"),eZ=()=>n,e$=()=>{let t=(t,e,r)=>{tK(document.body,t),tK(document.body,t);let n=t4(t),l=t5(t),o=t8(e);return r&&tF(t),{x:l.h-n.h+o.h,y:l.w-n.w+o.w}},e=".".concat(eS,"{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.").concat(eS," div{width:200%;height:200%;margin:10px 0}.").concat(eA,"{scrollbar-width:none!important}.").concat(eA,"::-webkit-scrollbar,.").concat(eA,"::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}"),r=tU('<div class="'.concat(eS,'"><div></div><style>').concat(e,"</style></div>"))[0],n=r.firstChild,l=r.lastChild,a=eZ();a&&(l.nonce=a);let[c,,s]=eh(),[u,d]=o({o:t(r,n),i:ta},tu(t,r,n,!0)),[p]=d(),f=(t=>{let e=!1,r=t_(t,eA);try{e="none"===t$(t,"scrollbar-width")||"none"===t$(t,"display","::-webkit-scrollbar")}catch(t){}return r(),e})(r),y={x:0===p.x,y:0===p.y},h={elements:{host:null,padding:!f,viewport:t=>f&&tP(t)&&t,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},v=th({},em),b=tu(th,{},v),m=tu(th,{},h),w={k:p,M:y,R:f,V:!!g,L:tu(c,"r"),P:m,U:t=>th(h,t)&&m(),N:b,q:t=>th(v,t)&&b(),B:th({},h),F:th({},v)};if(tA(r,"style"),tF(r),en(i,"resize",()=>{s("r",[])}),O(i.matchMedia)&&!f&&(!y.x||!y.y)){let t=e=>{en(i.matchMedia("(resolution: ".concat(i.devicePixelRatio,"dppx)")),"change",()=>{e(),t(e)},{A:!0})};t(()=>{let[t,e]=u();th(w.k,t),s("r",[e])})}return w},eG=()=>(l||(l=e$()),l),eJ=(t,e)=>O(e)?e.apply(0,t):e,e0=(t,e,r,n)=>eJ(t,x(n)?r:n)||e.apply(0,t),e1=(t,e,r,n)=>{let l=eJ(t,x(n)?r:n);return!!l&&(_(l)?l:e.apply(0,t))},e2=(t,e)=>{let{nativeScrollbarsOverlaid:r,body:n}=e||{},{M:l,R:o,P:i}=eG(),{nativeScrollbarsOverlaid:a,body:c}=i().cancel,s=x(n)?c:n,u=(l.x||l.y)&&(null!=r?r:a),d=t&&(S(s)?!o:s);return!!u||!!d},e3=new WeakMap,e5=(t,e)=>{e3.set(t,e)},e4=t=>{e3.delete(t)},e6=t=>e3.get(t),e8=(t,e,r)=>{let n=!1,l=!!r&&new WeakMap,o=o=>{l&&r&&P(r.map(e=>{let[r,n]=e||[];return[n&&r?(o||tH)(r,t):[],n]}),r=>P(r[0],o=>{let i=r[1],a=l.get(o)||[];if(t.contains(o)&&i){let t=en(o,i,r=>{n?(t(),l.delete(o)):e(r)});l.set(o,L(a,t))}else q(a),l.delete(o)}))};return o(),[()=>{n=!0},o]},e9=(t,e,r,n)=>{let l=!1,{j:o,X:i,Y:a,W:c,J:s,G:u}=n||{},d=tp(()=>l&&r(!0),{_:33,p:99}),[p,f]=e8(t,d,a),y=i||[],h=N(o||[],y),v=(l,o)=>{if(!F(o)){let i=s||ts,a=u||ts,d=[],p=[],h=!1,v=!1;if(P(o,r=>{let{attributeName:l,target:o,type:s,oldValue:u,addedNodes:f,removedNodes:b}=r,m="attributes"===s,w=t===o,g=m&&l,x=g&&tg(o,l||""),S=C(x)?x:null,A=g&&u!==S,M=z(y,l)&&A;if(e&&("childList"===s||!w)){let e=m&&A,s=e&&c&&tI(o,c),p=(s?!i(o,l,u,S):!m||e)&&!a(r,!!s,t,n);P(f,t=>L(d,t)),P(b,t=>L(d,t)),v=v||p}!e&&w&&A&&!i(o,l,u,S)&&(L(p,l),h=h||M)}),f(t=>K(d).reduce((e,r)=>(L(e,tH(t,r)),tI(r,t)?L(e,r):e),[])),e)return!l&&v&&r(!1),[!1];if(!F(p)||h){let t=[K(p),h];return l||r.apply(0,t),t}}},m=new b(tu(v,!1));return[()=>(m.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:h,subtree:e,childList:e,characterData:e}),l=!0,()=>{l&&(p(),m.disconnect(),l=!1)}),()=>{if(l)return d.m(),v(!0,m.takeRecords())}]},e7={},rt={},re=t=>{P(t,t=>P(t,(e,r)=>{e7[r]=t[r]}))},rr=(t,e,r)=>ty(t).map(n=>{let{static:l,instance:o}=t[n],[i,a,c]=r||[],s=r?o:l;if(s){let t=r?s(i,a,e):s(e);return(c||rt)[n]=t}}),rn=t=>rt[t],rl=(t,e)=>{let{M:r}=e,[n,l]=t("showNativeOverlaidScrollbars");return[n&&r.x&&r.y,l]},ro=t=>0===t.indexOf(te),ri=(t,e)=>{let r=(t,e,r,n)=>{let l=t===te?tr:t.replace("".concat(te,"-"),""),o=ro(t),i=ro(r);if(!e&&!n)return tr;if(o&&i)return te;if(o){let t=e?te:tr;return e&&n?l:t}let a=i&&n?te:tr;return e?l:a},n={x:r(e.x,t.x,e.y,t.y),y:r(e.y,t.y,e.x,t.x)};return{K:n,Z:{x:n.x===tn,y:n.y===tn}}},ra="__osScrollbarsHidingPlugin",rc="__osClickScrollPlugin",rs={[rc]:{static:()=>(t,e,r,n,l)=>{let o=!1,i=ts,a=ts,[c,s]=td(222),u=(i,s,d)=>I(i,i+n*Math.sign(r),s?133:222,(r,i,d)=>{t(r);let p=e(),f=()=>{a=u(r,s+1)};o||!d||l>=p&&l<=p+n||(s?f():c(f))},d);return i=u(0,0,t=>1-(1-t)*(1-t)),t=>{o=!0,s(),t&&i(),a()}}}},ru=(t,e,r)=>{let{_t:n}=r||{},l=rn("__osSizeObserverPlugin"),[i]=o({o:!1,u:!0});return()=>{let r=[],o=tU('<div class="'.concat(eH,'"><div class="').concat(eI,'"></div></div>'))[0],a=o.firstChild,c=t=>{let r=t instanceof ResizeObserverEntry,n=!1,l=!1;if(r){let[e,,r]=i(t.contentRect),o=et(e);n=!(l=ee(e,r))&&!o}else l=!0===t;n||e({ft:!0,_t:l})};if(w){let t=new w(t=>c(t.pop()));t.observe(a),L(r,()=>{t.disconnect()})}else{if(!l)return ts;let[t,e]=l(a,c,n);L(r,N([t_(o,eD),en(o,"animationstart",t)],e))}return tu(q,L(r,tK(t,o)))}},rd=(t,e)=>{let r;let n=t=>0===t.h||t.isIntersecting||t.intersectionRatio>0,l=tq("os-trinsic-observer"),[i]=o({o:!1}),a=(t,r)=>{if(t){let l=i(n(t)),[,o]=l;return o&&!r&&e(l)&&[l]}},c=(t,e)=>a(e.pop(),t);return[()=>{let e=[];if(m)(r=new m(tu(c,!1),{root:t})).observe(l),L(e,()=>{r.disconnect()});else{let t=()=>{a(t5(l))};L(e,ru(l,t)()),t()}return tu(q,L(e,tK(t,l)))},()=>r&&c(!0,r.takeRecords())]},rp=(t,e,r,n)=>{let l,i,a,c,s,u;let d="[".concat(ex,"]"),p="[".concat(eT,"]"),f=["id","class","style","open","wrap","cols","rows"],{vt:y,ht:h,ot:v,gt:b,bt:m,nt:g,wt:x,yt:S,St:C}=t,M=t=>"rtl"===t$(t,"direction"),R={Ot:!1,ct:M(y)},E=eG(),k=rn(ra),[_]=o({i:ti,o:{w:0,h:0}},()=>{let n=k&&k.tt(t,e,R,E,r).ut,l=!(x&&g)&&tR(h,ex,eM),o=!g&&S("arrange"),i=o&&ec(b),a=C(eR,l),c=o&&n&&n()[0],s=t6(v),u=t8(v);return c&&c(),ea(b,i),l&&a(),{w:s.w+u.w,h:s.h+u.h}}),H=tp(n,{_:()=>l,p:()=>i,S(t,e){let[r]=t,[n]=e;return[N(ty(r),ty(n)).reduce((t,e)=>(t[e]=r[e]||n[e],t),{})]}}),D=t=>{let e=M(y);th(t,{Ct:u!==e}),th(R,{ct:e}),u=e},I=(t,e)=>{let[r,l]=t,o={$t:l};return th(R,{Ot:r}),e||n(o),o},P=t=>{let{ft:e,_t:r}=t,l=!(e&&!r)&&E.R?H:n,o={ft:e||r,_t:r};D(o),l(o)},z=(t,e)=>{let[,r]=_(),l={xt:r};D(l);let o=t?n:H;return r&&!e&&o(l),l},L=(t,e,r)=>{let n={Ht:e};return D(n),e&&!r&&H(n),n},[j,V]=m?rd(h,I):[],F=!g&&ru(h,P,{_t:!0}),[K,q]=e9(h,!1,L,{X:f,j:f}),U=g&&w&&new w(t=>{let e=t[t.length-1].contentRect;P({ft:!0,_t:ee(e,s)}),s=e}),B=tp(()=>{let[,t]=_();n({xt:t})},{_:222,v:!0});return[()=>{U&&U.observe(h);let t=F&&F(),e=j&&j(),r=K(),n=E.L(t=>{t?H({Et:t}):B()});return()=>{U&&U.disconnect(),t&&t(),e&&e(),c&&c(),r(),n()}},t=>{let{zt:e,It:r,At:n}=t,o={},[s]=e("update.ignoreMutation"),[u,y]=e("update.attributes"),[h,b]=e("update.elementEvents"),[w,x]=e("update.debounce"),S=r||n,C=t=>O(s)&&s(t);if(b||y){a&&a(),c&&c();let[t,e]=e9(m||v,!0,z,{j:N(f,u||[]),Y:h,W:d,G:(t,e)=>{let{target:r,attributeName:n}=t;return!e&&!!n&&!g&&tV(r,d,p)||!!tL(r,".".concat(eP))||!!C(t)}});c=t(),a=e}if(x){if(H.m(),T(w)){let t=w[0],e=w[1];l=A(t)&&t,i=A(e)&&e}else l=!!A(w)&&w,i=!1}if(S){let t=q(),e=V&&V(),r=a&&a();t&&th(o,L(t[0],t[1],S)),e&&th(o,I(e[0],S)),r&&th(o,z(r[0],S))}return D(o),o},R]},rf=(t,e,r,n)=>{let l="--os-scroll-percent",{P:o}=eG(),{scrollbars:i}=o(),{slot:a}=i,{vt:c,ht:s,ot:u,Dt:d,gt:p,wt:f,nt:y}=e,{scrollbars:h}=d?{}:t,{slot:v}=h||{},b=[],m=[],w=[],x=e1([c,s,u],()=>y&&f?c:s,a,v),S=t=>{if(g){let e=new g({source:p,axis:t});return{kt:t=>{let r=t.Tt.animate({clear:["left"],[l]:[0,1]},{timeline:e});return()=>r.cancel()}}}},A={x:S("x"),y:S("y")},C=()=>{let{Mt:t,Rt:e}=r,n=(t,e)=>tm(0,1,t/(t+e)||0);return{x:n(e.x,t.x),y:n(e.y,t.y)}},O=(t,e,r)=>{let n=r?t_:tk;P(t,t=>{n(t.Tt,e)})},T=(t,e)=>{P(t,t=>{let[r,n]=e(t);tZ(r,n)})},R=(t,e,r)=>{let n=M(r),l=!n||r,o=!n||!r;l&&O(m,t,e),o&&O(w,t,e)},E=t=>{let e=t?"x":"y",r=tq("".concat(eP," ").concat(t?eN:eL)),l=tq(ej),o=tq(eV),i={Tt:r,Lt:l,Pt:o},a=A[e];return L(t?m:w,i),L(b,[tK(r,l),tK(l,o),tu(tF,r),a&&a.kt(i),n(i,R,t)]),i},k=tu(E,!0),_=tu(E,!1);return k(),_(),[{Ut:()=>{let t=C(),e=t=>e=>[e.Tt,{"--os-viewport-percent":tQ(t)+""}];T(m,e(t.x)),T(w,e(t.y))},Nt:()=>{if(!g){let{Vt:t}=r,e=ep(t,ec(p)),n=t=>e=>[e.Tt,{[l]:tQ(t)+""}];T(m,n(e.x)),T(w,n(e.y))}},qt:()=>{let{Vt:t}=r,e=ed(t),n=t=>e=>[e.Tt,{"--os-scroll-direction":t?"0":"1"}];T(m,n(e.x)),T(w,n(e.y))},Bt:()=>{if(y&&!f){let{Mt:t,Vt:e}=r,n=ed(e),l=ep(e,ec(p)),o=e=>{let{Tt:r}=e,o=tN(r)===u&&r,i=(t,e,r)=>{let n=e*t;return tW(r?n:-n)};return[o,o&&{transform:tJ({x:i(l.x,t.x,n.x),y:i(l.y,t.y,n.y)})}]};T(m,o),T(w,o)}},Ft:R,jt:{Xt:m,Yt:k,Wt:tu(T,m)},Jt:{Xt:w,Yt:_,Wt:tu(T,w)}},()=>(tK(x,m[0].Tt),tK(x,w[0].Tt),tu(q,b))]},ry=(t,e,r,n)=>(l,o,i)=>{let{ht:a,ot:c,nt:d,gt:p,Gt:f,St:h}=e,{Tt:v,Lt:b,Pt:m}=l,[w,g]=td(333),[x,S]=td(444),A=t=>{O(p.scrollBy)&&p.scrollBy({behavior:"smooth",left:t.x,top:t.y})},C=!0;return tu(q,[en(m,"pointermove pointerleave",n),en(v,"pointerenter",()=>{o(eq,!0)}),en(v,"pointerleave pointercancel",()=>{o(eq,!1)}),!d&&en(v,"mousedown",()=>{let t=tj();(tx(t,eT)||tx(t,ex)||t===document.body)&&y(tu(ef,c),25)}),en(v,"wheel",t=>{let{deltaX:e,deltaY:r,deltaMode:n}=t;C&&0===n&&tN(v)===a&&A({x:e,y:r}),C=!1,o(eY,!0),w(()=>{C=!0,o(eY)}),eo(t)},{H:!1,I:!0}),en(v,"pointerdown",tu(en,f,"click",ei,{A:!0,I:!0,H:!1}),{I:!0}),(()=>{let e="pointerup pointercancel lostpointercapture",n="client".concat(i?"X":"Y"),l=i?J:tt,o=i?"left":"top",a=i?"w":"h",c=i?"x":"y",d=(t,e)=>n=>{let{Mt:l}=r,o=e*n/(t5(b)[a]-t5(m)[a])*l[c];ea(p,{[c]:t+o})},y=[];return en(b,"pointerdown",r=>{let i=tL(r.target,".".concat(eV))===m,v=i?m:b,w=t.scrollbars,{button:g,isPrimary:C,pointerType:M}=r,{pointers:O}=w;if(0===g&&C&&w[i?"dragScroll":"clickScroll"]&&(O||[]).includes(M)){q(y),S();let t=!i&&r.shiftKey,w=tu(t9,m),g=tu(t9,b),C=(t,e)=>(t||w())[o]-(e||g())[o],M=s(t9(p)[l])/t5(p)[a]||1,O=d(ec(p)[c],1/M),T=r[n],R=w(),E=g(),k=R[l],_=C(R,E)+k/2,H=T-E[o],D=i?0:H-_,I=t=>{q(N),v.releasePointerCapture(t.pointerId)},P=()=>h("scrollbarPressed",!0),z=P(),N=[()=>{let t=ec(p);z();let e=ec(p),r={x:e.x-t.x,y:e.y-t.y};(u(r.x)>3||u(r.y)>3)&&(P(),ea(p,t),A(r),x(z))},en(f,e,I),en(f,"selectstart",t=>eo(t),{H:!1}),en(b,e,I),en(b,"pointermove",e=>{let r=e[n]-T;(i||t)&&O(D+r)})];if(v.setPointerCapture(r.pointerId),t)O(D);else if(!i){let t=rn(rc);if(t){let e=t(O,C,D,k,H);L(N,tu(e)),L(y,tu(e,!0))}}}})})(),g,S])},rh=(t,e,r,n,l,o)=>{let i,a,c,s,u;let d=ts,p=0,f=t=>"mouse"===t.pointerType,[y,h]=td(),[v,b]=td(100),[m,w]=td(100),[g,x]=td(()=>p),[S,A]=rf(t,l,n,ry(e,l,n,t=>f(t)&&D())),{ht:C,Kt:M,wt:O}=l,{Ft:T,Ut:R,Nt:E,qt:k,Bt:_}=S,H=(t,e)=>{if(x(),t)T(eX);else{let t=tu(T,eX,!0);p>0&&!e?g(t):t()}},D=()=>{(c?i:s)||(H(!0),v(()=>{H(!1)}))},I=t=>{T(eB,t,!0),T(eB,t,!1)},P=t=>{f(t)&&(i=c,c&&H(!0))},z=[x,b,w,h,()=>d(),en(C,"pointerover",P,{A:!0}),en(C,"pointerenter",P),en(C,"pointerleave",t=>{f(t)&&(i=!1,c&&H(!1))}),en(C,"pointermove",t=>{f(t)&&a&&D()}),en(M,"scroll",t=>{y(()=>{E(),D()}),o(t),_()})];return[()=>tu(q,L(z,A())),t=>{let{zt:e,At:l,Qt:o,Zt:i}=t,{tn:f,nn:y,sn:h,en:v}=i||{},{Ct:b,_t:w}=o||{},{ct:g}=r,{M:x}=eG(),{K:S,cn:A}=n,[C,D]=e("showNativeOverlaidScrollbars"),[P,z]=e("scrollbars.theme"),[N,L]=e("scrollbars.visibility"),[j,V]=e("scrollbars.autoHide"),[F,K]=e("scrollbars.autoHideSuspend"),[q]=e("scrollbars.autoHideDelay"),[U,B]=e("scrollbars.dragScroll"),[X,Y]=e("scrollbars.clickScroll"),[Q,W]=e("overflow"),Z=A.x||A.y,$=C&&x.x&&x.y,G=(t,e,r)=>{let n=t.includes(tn)&&(N===te||"auto"===N&&e===tn);return T(eF,n,r),n};if(p=q,w&&!l&&(F&&Z?(I(!1),d(),m(()=>{d=en(M,"scroll",tu(I,!0),{A:!0})})):I(!0)),D&&T("os-theme-none",$),z&&(T(u),T(P,!0),u=P),K&&!F&&I(!0),V&&(a="move"===j,c="leave"===j,H(s="never"===j,!0)),B&&T(eW,U),Y&&T(eQ,X),h||L||W){let t=G(Q.x,S.x,!0),e=G(Q.y,S.y,!1);T(eK,!(t&&e))}(f||y||v||b||l)&&(E(),R(),_(),v&&k(),T(eU,!A.x,!0),T(eU,!A.y,!1),T(ez,g&&!O))},{},S]},rv=t=>{let{P:e,R:r}=eG(),{elements:n}=e(),{padding:l,viewport:o,content:a}=n,c=_(t),s=c?{}:t,{elements:u}=s,{padding:d,viewport:p,content:f}=u||{},y=c?t:s.target,h=tP(y),v=y.ownerDocument,b=v.documentElement,m=()=>v.defaultView||i,w=tu(e0,[y]),g=tu(e1,[y]),x=tu(tq,""),S=tu(w,x,o),A=tu(g,x,a),C=S(p),M=C===y,O=M&&h,T=!M&&A(f),R=O?b:C,E=O?R:y,k=!M&&g(x,l,d),H=!(!M&&C===T)&&T,D=[H,R,k,E].map(t=>_(t)&&!tN(t)&&t),I=t=>t&&z(D,t),P=!I(R)&&(t=>{let e=t5(t),r=t6(t),n=t$(t,$),l=t$(t,G);return r.w-e.w>0&&!ro(n)||r.h-e.h>0&&!ro(l)})(R)?R:y,N={vt:y,ht:E,ot:R,rn:k,bt:H,gt:O?b:R,Kt:O?v:R,ln:h?b:P,Gt:v,wt:h,Dt:c,nt:M,an:m,yt:t=>tR(R,eT,t),St:(t,e)=>tT(R,eT,t,e)},{vt:j,ht:V,rn:F,ot:K,bt:U}=N,B=[()=>{tA(V,[ex,eC]),tA(j,eC),h&&tA(b,[eC,ex])}],X=tz([U,K,F,V,j].find(t=>t&&!I(t))),Y=O?j:U||K,Q=tu(q,B);return[N,()=>{let t=m(),e=tj(),n=t=>{tK(tN(t),tz(t)),tF(t)},l=t=>en(t,"focusin focusout focus blur",ei,{I:!0,H:!1}),o="tabindex",i=tg(K,o),a=l(e);return tS(V,ex,M?"":"host"),tS(F,ek,""),tS(K,eT,""),tS(U,e_,""),!M&&(tS(K,o,i||"-1"),h&&tS(b,eO,"")),tK(Y,X),tK(V,F),tK(F||V,!M&&K),tK(K,U),L(B,[a,()=>{let t=tj(),e=I(K),r=e&&t===K?j:t,a=l(r);tA(F,ek),tA(U,e_),tA(K,eT),h&&tA(b,eO),i?tS(K,o,i):tA(K,o),I(U)&&n(U),e&&n(K),I(F)&&n(F),ef(r),a()}]),r&&!M&&(tO(K,eT,eE),L(B,tu(tA,K,eT))),ef(!M&&h&&e===j&&t.top===t?K:e),a(),X=0,Q},Q]},rb=t=>{let{bt:e}=t;return t=>{let{Qt:r,un:n,At:l}=t,{$t:o}=r||{},{Ot:i}=n;e&&(o||l)&&tZ(e,{[tt]:i&&"100%"})}},rm=(t,e)=>{let{ht:r,rn:n,ot:l,nt:i}=t,[a,c]=o({i:tc,o:tG()},tu(tG,r,"padding",""));return t=>{let{zt:r,Qt:o,un:s,At:u}=t,[d,p]=c(u),{R:f}=eG(),{ft:y,xt:h,Ct:v}=o||{},{ct:b}=s,[m,w]=r("paddingAbsolute"),g=u||h;(y||p||g)&&([d,p]=a(u));let x=!i&&(w||v||p);if(x){let t=!m||!n&&!f,r=d.r+d.l,o=d.t+d.b,i={[W]:t&&!b?-r:0,[Z]:t?-o:0,[Q]:t&&b?-r:0,top:t?-d.t:0,right:t?b?-d.r:"auto":0,left:t?b?"auto":-d.l:0,[J]:t&&"calc(100% + ".concat(r,"px)")},a={[U]:t?d.t:0,[B]:t?d.r:0,[Y]:t?d.b:0,[X]:t?d.l:0};tZ(n||l,i),tZ(l,a),th(e,{rn:d,dn:!t,rt:n?a:th({},i,a)})}return{_n:x}}},rw=(t,e)=>{let r=eG(),{ht:n,rn:l,ot:c,nt:s,Kt:u,gt:d,wt:p,St:y,an:h}=t,{R:v}=r,b=p&&s,m=tu(a,0),w=["display","direction","flexDirection","writingMode"],g={i:ti,o:{w:0,h:0}},x={i:ta,o:{}},S=t=>{y(eR,!b&&t)},A=(t,e)=>{let r=i.devicePixelRatio%1!=0?1:0,n={w:m(t.w-e.w),h:m(t.h-e.h)};return{w:n.w>r?n.w:0,h:n.h>r?n.h:0}},[C,M]=o(g,tu(t8,c)),[O,T]=o(g,tu(t6,c)),[R,E]=o(g),[k]=o(x),[_,H]=o(g),[D]=o(x),[I]=o({i:(t,e)=>to(t,e,w),o:{}},()=>t7(c)?t$(c,w):{}),[P,z]=o({i:(t,e)=>ta(t.D,e.D)&&ta(t.T,e.T),o:es()},()=>{S(!0);let t=ec(d),e=y("noContent",!0),r=en(u,tn,e=>{let r=ec(d);e.isTrusted&&r.x===t.x&&r.y===t.y&&el(e)},{I:!0,A:!0});ea(d,{x:0,y:0}),e();let n=ec(d),l=t6(d);ea(d,{x:l.w,y:l.h});let o=ec(d);ea(d,{x:o.x-n.x<1&&-l.w,y:o.y-n.y<1&&-l.h});let i=ec(d);return ea(d,t),f(()=>r()),{D:n,T:i}}),N=rn(ra),L=(t,e)=>{let r=e?$:G;return"".concat(r).concat(tl(t))},j=t=>{let e=t=>[te,tr,tn].map(e=>L(e,t));y(e(!0).concat(e()).join(" ")),y(ty(t).map(e=>L(t[e],"x"===e)).join(" "),!0)};return(o,i)=>{let{zt:a,Qt:s,un:u,At:d}=o,{_n:p}=i,{ft:f,xt:w,Ct:g,_t:x,Et:L}=s||{},{it:V,ut:F,dt:K}=N&&N.tt(t,e,u,r,a)||{},[q,U]=rl(a,r),[B,X]=a("overflow"),Y=ro(B.x),Q=ro(B.y),W=M(d),Z=T(d),$=E(d),G=H(d);U&&v&&y(eE,!q);{tR(n,ex,eM)&&S(!0);let[t]=F?F():[],[e]=W=C(d),[r]=Z=O(d),l=t4(c),o=b&&t3(h()),i={w:m(r.w+e.w),h:m(r.h+e.h)},a={w:m((o?o.w:l.w+m(l.w-r.w))+e.w),h:m((o?o.h:l.h+m(l.h-r.h))+e.h)};t&&t(),G=_(a),$=R(A(i,a),d)}let[J,tt]=G,[te,tr]=$,[tn,tl]=Z,[to,ti]=W,[ta,tc]=k({x:te.w>0,y:te.h>0}),ts=Y&&Q&&(ta.x||ta.y)||Y&&ta.x&&!ta.y||Q&&ta.y&&!ta.x,tu=ri(ta,B),[td,tp]=D(tu.K),[,tf]=I(d),ty=g||x||tf||tc||d,[tv,tb]=ty?P(d):z();return tp&&j(tu.K),K&&V&&tZ(c,K(tu,u,V(tu,tn,to))),S(!1),tT(n,ex,eM,ts),tT(l,ek,eM,ts),th(e,{K:td,Rt:{x:J.w,y:J.h},Mt:{x:te.w,y:te.h},cn:ta,Vt:eu(tv,te)}),{sn:tp,tn:tt,nn:tr,en:tb||tr,fn:ty}}},rg=t=>{let[e,r,n]=rv(t),l={rn:{t:0,r:0,b:0,l:0},dn:!1,rt:{[W]:0,[Z]:0,[Q]:0,[U]:0,[B]:0,[Y]:0,[X]:0},Rt:{x:0,y:0},Mt:{x:0,y:0},K:{x:tr,y:tr},cn:{x:!1,y:!1},Vt:es()},{vt:o,gt:i,nt:a}=e,{R:c,M:s}=eG(),u=!c&&(s.x||s.y),d=[rb(e),rm(e,l),rw(e,l)];return[r,t=>{let e={},r=u&&ec(i);return P(d,r=>{th(e,r(t,e)||{})}),ea(i,r),a||ea(o,0),e},l,e,n]},rx=(t,e,r,n,l)=>{let o=!1,i=eg(e,{}),[a,c,s,u,d]=rg(t),[p,f,y]=rp(u,s,i,t=>{w({},t)}),[h,v,,b]=rh(t,e,y,s,u,l),m=t=>ty(t).some(e=>!!t[e]),w=(t,l)=>{if(r())return!1;let{pn:i,At:a,It:s,vn:u}=t,d=i||{},p=!!a||!o,h={zt:eg(e,d,p),pn:d,At:p};if(u)return v(h),!1;let b=l||f(th({},h,{It:s})),w=c(th({},h,{un:y,Qt:b}));v(th({},h,{Qt:b,Zt:w}));let g=m(b),x=m(w),S=g||x||!tb(d)||p;return o=!0,S&&n(t,{Qt:b,Zt:w}),S};return[()=>{let{ln:t,gt:e}=u,r=ec(t),n=[p(),a(),h()];return ea(e,r),tu(q,n)},w,()=>({hn:y,gn:s}),{bn:u,wn:b},d]},rS=(t,e,r)=>{let{N:n}=eG(),l=_(t),o=l?t:t.target,i=e6(o);if(e&&!i){let i=!1,a=[],c={},s=t=>{let e=tv(t,!0),r=rn("__osOptionsValidationPlugin");return r?r(e,!0):e},u=th({},n(),s(e)),[d,p,f]=eh(),[y,h,v]=eh(r),b=(t,e)=>{v(t,e),f(t,e)},[m,w,g,x,S]=rx(t,u,()=>i,(t,e)=>{let{pn:r,At:n}=t,{Qt:l,Zt:o}=e,{ft:i,Ct:a,$t:c,xt:s,Ht:u,_t:d}=l,{tn:p,nn:f,sn:y,en:h}=o;b("updated",[C,{updateHints:{sizeChanged:!!i,directionChanged:!!a,heightIntrinsicChanged:!!c,overflowEdgeChanged:!!p,overflowAmountChanged:!!f,overflowStyleChanged:!!y,scrollCoordinatesChanged:!!h,contentMutation:!!s,hostMutation:!!u,appear:!!d},changedOptions:r||{},force:!!n}])},t=>b("scroll",[C,t])),A=t=>{e4(o),q(a),i=!0,b("destroyed",[C,t]),p(),h()},C={options(t,e){if(t){let r=ew(u,th(e?n():{},s(t)));tb(r)||(th(u,r),w({pn:r}))}return th({},u)},on:y,off:(t,e)=>{t&&e&&h(t,e)},state(){let{hn:t,gn:e}=g(),{ct:r}=t,{Rt:n,Mt:l,K:o,cn:a,rn:c,dn:s,Vt:u}=e;return th({},{overflowEdge:n,overflowAmount:l,overflowStyle:o,hasOverflow:a,scrollCoordinates:{start:u.D,end:u.T},padding:c,paddingAbsolute:s,directionRTL:r,destroyed:i})},elements(){let{vt:t,ht:e,rn:r,ot:n,bt:l,gt:o,Kt:i}=x.bn,{jt:a,Jt:c}=x.wn,s=t=>{let{Pt:e,Lt:r,Tt:n}=t;return{scrollbar:n,track:r,handle:e}},u=t=>{let{Xt:e,Yt:r}=t;return th({},s(e[0]),{clone:()=>{let t=s(r());return w({vn:!0}),t}})};return th({},{target:t,host:e,padding:r||n,viewport:n,content:l||n,scrollOffsetElement:o,scrollEventElement:i,scrollbarHorizontal:u(a),scrollbarVertical:u(c)})},update:t=>w({At:t,It:!0}),destroy:tu(A,!1),plugin:t=>c[ty(t)[0]]};return(L(a,[S]),e5(o,C),rr(e7,rS,[C,d,c]),e2(x.bn.wt,!l&&t.cancel))?A(!0):(L(a,m()),b("initialized",[C]),C.update()),C}return i};rS.plugin=t=>{let e=T(t),r=e?t:[t],n=r.map(t=>rr(t,rS)[0]);return re(r),e?n:n[0]},rS.valid=t=>{let e=t&&t.elements,r=O(e)&&e();return k(r)&&!!e6(r.target)},rS.env=()=>{let{k:t,M:e,R:r,V:n,B:l,F:o,P:i,U:a,N:c,q:s}=eG();return th({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:r,scrollTimeline:n,staticDefaultInitialization:l,staticDefaultOptions:o,getDefaultInitialization:i,setDefaultInitialization:a,getDefaultOptions:c,setDefaultOptions:s})},rS.nonce=t=>{n=t}}}]);