"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[411],{4197:function(t,e,r){let l,n;r.d(e,{E:function(){return rL},A:function(){return rF}});var o=r(2265);/*!
 * OverlayScrollbars
 * Version: 2.4.6
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */let i=(t,e)=>{let r;let{o:l,u:n,_:o}=t,i=l,a=(t,e)=>{let l=i,a=e||(n?!n(l,t):l!==t);return(a||o)&&(i=t,r=l),[i,a,r]};return[e?t=>a(e(i,r),t):a,t=>[i,!!t,r]]},a="undefined"!=typeof window,s=a&&Node.ELEMENT_NODE,{toString:u,hasOwnProperty:c}=Object.prototype,d=/^\[object (.+)\]$/,f=t=>void 0===t,p=t=>null===t,y=t=>f(t)||p(t)?`${t}`:u.call(t).replace(d,"$1").toLowerCase(),v=t=>"number"==typeof t,h=t=>"string"==typeof t,b=t=>"boolean"==typeof t,m=t=>"function"==typeof t,w=t=>Array.isArray(t),g=t=>"object"==typeof t&&!w(t)&&!p(t),x=t=>{let e=!!t&&t.length,r=v(e)&&e>-1&&e%1==0;return(!!w(t)||!m(t)&&!!r)&&(!(e>0&&g(t))||e-1 in t)},$=t=>{let e;if(!t||!g(t)||"object"!==y(t))return!1;let r="constructor",l=t[r],n=l&&l.prototype,o=c.call(t,r),i=n&&c.call(n,"isPrototypeOf");if(l&&!o&&!i)return!1;for(e in t);return f(e)||c.call(t,e)},O=t=>{let e=HTMLElement;return!!t&&(e?t instanceof e:t.nodeType===s)},k=t=>{let e=Element;return!!t&&(e?t instanceof e:t.nodeType===s)};function E(t,e){if(x(t))for(let r=0;r<t.length&&!1!==e(t[r],r,t);r++);else t&&E(Object.keys(t),r=>e(t[r],r,t));return t}let S=(t,e)=>t.indexOf(e)>=0,C=(t,e)=>t.concat(e),A=(t,e,r)=>(!r&&!h(e)&&x(e)?Array.prototype.push.apply(t,e):t.push(e),t),z=t=>{let e=Array.from,r=[];return e&&t?e(t):(t instanceof Set?t.forEach(t=>{A(r,t)}):E(t,t=>{A(r,t)}),r)},_=t=>w(t)?t:[t],I=t=>!!t&&!t.length,M=t=>z(new Set(t)),N=(t,e,r)=>{E(t,t=>t&&t.apply(void 0,e||[])),r||(t.length=0)},H=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),R=t=>t?Object.keys(t):[],T=(t,e,r,l,n,o,i)=>{let a=[e,r,l,n,o,i];return("object"!=typeof t||p(t))&&!m(t)&&(t={}),E(a,e=>{E(e,(r,l)=>{let n=e[l];if(t===n)return!0;let o=w(n);if(n&&$(n)){let e=t[l],r=e;o&&!w(e)?r=[]:o||$(e)||(r={}),t[l]=T(r,n)}else t[l]=o?n.slice():n})}),t},D=(t,e)=>E(T({},t),(t,r,l)=>{void 0===t?delete l[r]:e&&t&&$(t)&&(l[r]=D(t,e))}),F=t=>{for(let e in t)return!1;return!0},L=(t,e,r)=>{if(f(r))return t?t.getAttribute(e):null;t&&t.setAttribute(e,r)},P=(t,e)=>new Set((L(t,e)||"").split(" ")),j=(t,e)=>{t&&t.removeAttribute(e)},B=(t,e,r,l)=>{if(r){let n=P(t,e);n[l?"add":"delete"](r);let o=z(n).join(" ").trim();L(t,e,o)}},V=(t,e,r)=>P(t,e).has(r),q=a&&Element.prototype,Y=(t,e)=>{let r=[],l=e?k(e)&&e:document;return l?A(r,l.querySelectorAll(t)):r},W=(t,e)=>{let r=e?k(e)&&e:document;return r?r.querySelector(t):null},X=(t,e)=>{if(k(t)){let r=q.matches||q.msMatchesSelector;return r.call(t,e)}return!1},J=t=>t?z(t.childNodes):[],Q=t=>t&&t.parentElement,K=(t,e)=>{if(k(t)){let r=q.closest;if(r)return r.call(t,e);do{if(X(t,e))return t;t=Q(t)}while(t)}},U=(t,e,r)=>{let l=K(t,e),n=t&&W(r,l),o=K(n,e)===l;return!!l&&!!n&&(l===t||n===t||o&&K(K(t,r),e)!==l)},G=()=>{},Z=t=>{if(x(t))E(z(t),t=>Z(t));else if(t){let e=Q(t);e&&e.removeChild(t)}},tt=(t,e,r)=>{if(r&&t){let l,n=e;return x(r)?(l=document.createDocumentFragment(),E(r,t=>{t===n&&(n=t.previousSibling),l.appendChild(t)})):l=r,e&&(n?n!==e&&(n=n.nextSibling):n=t.firstChild),t.insertBefore(l,n||null),()=>Z(r)}return G},te=(t,e)=>tt(t,null,e),tr=(t,e)=>tt(Q(t),t,e),tl=(t,e)=>tt(Q(t),t&&t.nextSibling,e),tn=t=>{let e=document.createElement("div");return L(e,"class",t),e},to=t=>{let e=tn();return e.innerHTML=t.trim(),E(J(e),t=>Z(t))},ti=a?window:{},ta=Math.max,ts=Math.min,tu=Math.round,tc=ti.cancelAnimationFrame,td=ti.requestAnimationFrame,tf=ti.setTimeout,tp=ti.clearTimeout,ty=t=>t.charAt(0).toUpperCase()+t.slice(1),tv=()=>tn().style,th=["-webkit-","-moz-","-o-","-ms-"],tb=["WebKit","Moz","O","MS","webkit","moz","o","ms"],tm={},tw={},tg=t=>{let e=tw[t];if(H(tw,t))return e;let r=ty(t),l=tv();return E(th,n=>{let o=n.replace(/-/g,""),i=[t,n+t,o+r,ty(o)+r];return!(e=i.find(t=>void 0!==l[t]))}),tw[t]=e||""},tx=t=>{let e=tm[t]||ti[t];return H(tm,t)||(E(tb,r=>!(e=e||ti[r+ty(t)])),tm[t]=e),e},t$=tx("MutationObserver"),tO=tx("IntersectionObserver"),tk=tx("ResizeObserver"),tE=tx("ScrollTimeline"),tS=(t,...e)=>t.bind(0,...e),tC=t=>{let e;let r=t?tf:td,l=t?tp:tc;return[n=>{l(e),e=r(n,m(t)?t():t)},()=>l(e)]},tA=(t,e)=>{let r,l,n;let o=G,{v:i,p:a,S:s}=e||{},u=function(e){o(),tp(r),r=l=void 0,o=G,t.apply(this,e)},c=t=>s&&l?s(l,t):t,d=()=>{o!==G&&u(c(n)||n)},f=function(){let t=z(arguments),e=m(i)?i():i,s=v(e)&&e>=0;if(s){let i=m(a)?a():a,s=v(i)&&i>=0,f=e>0?tf:td,p=e>0?tp:tc,y=c(t),h=y||t,b=u.bind(0,h);o();let w=f(b,e);o=()=>p(w),s&&!r&&(r=tf(d,i)),l=n=h}else u(t)};return f.m=d,f},tz=/[^\x20\t\r\n\f]+/g,t_=(t,e,r)=>{let l;let n=t&&t.classList,o=0,i=!1;if(n&&e&&h(e)){let t=e.match(tz)||[];for(i=t.length>0;l=t[o++];)i=!!r(n,l)&&i}return i},tI=(t,e)=>{t_(t,e,(t,e)=>t.remove(e))},tM=(t,e)=>(t_(t,e,(t,e)=>t.add(e)),tS(tI,t,e)),tN=/^--/,tH=(t,e)=>t.getPropertyValue(e)||t[e]||"",tR=t=>{let e=t||0;return isFinite(e)?e:0},tT=t=>tR(parseFloat(t||"")),tD=t=>`${(100*tR(t)).toFixed(3)}%`,tF=t=>`${tR(t)}px`;function tL(t,e){t&&E(e,(e,r)=>{try{let l=t.style,n=v(e)?tF(e):e+"";tN.test(r)?l.setProperty(r,n):l[r]=n}catch(t){}})}function tP(t,e,r){let l=h(e),n=l?"":{};if(t){let o=ti.getComputedStyle(t,r)||t.style;n=l?tH(o,e):e.reduce((t,e)=>(t[e]=tH(o,e),t),n)}return n}let tj=t=>"rtl"===tP(t,"direction"),tB=(t,e,r)=>{let l=e?`${e}-`:"",n=r?`-${r}`:"",o=`${l}top${n}`,i=`${l}right${n}`,a=`${l}bottom${n}`,s=`${l}left${n}`,u=tP(t,[o,i,a,s]);return{t:tT(u[o]),r:tT(u[i]),b:tT(u[a]),l:tT(u[s])}},tV=(t,e)=>`translate${g(t)?`(${t.x},${t.y})`:`${e?"X":"Y"}(${t})`}`,tq="paddingTop",tY="paddingRight",tW="paddingLeft",tX="paddingBottom",tJ="marginLeft",tQ="marginRight",tK="marginBottom",tU="overflowX",tG="overflowY",tZ="width",t0="height",t1="hidden",t3={w:0,h:0},t2=(t,e)=>e?{w:e[`${t}Width`],h:e[`${t}Height`]}:t3,t4=t=>t2("inner",t||ti),t9=tS(t2,"offset"),t5=tS(t2,"client"),t6=tS(t2,"scroll"),t7=t=>{let e=parseFloat(tP(t,tZ))||0,r=parseFloat(tP(t,t0))||0;return{w:e-tu(e),h:r-tu(r)}},t8=t=>t.getBoundingClientRect(),et=t=>!!(t&&(t[t0]||t[tZ])),ee=(t,e)=>{let r=et(t),l=et(e);return!l&&r},er=(t,e,r,l)=>{if(t&&e){let n=!0;return E(r,r=>{let o=l?l(t[r]):t[r],i=l?l(e[r]):e[r];o!==i&&(n=!1)}),n}return!1},el=(t,e)=>er(t,e,["w","h"]),en=(t,e)=>er(t,e,["x","y"]),eo=(t,e)=>er(t,e,["t","r","b","l"]),ei=(t,e,r)=>er(t,e,[tZ,t0],r&&(t=>tu(t))),ea="passive",es=()=>{if(f(l)){l=!1;try{ti.addEventListener(ea,G,Object.defineProperty({},ea,{get(){l=!0}}))}catch(t){}}return l},eu=t=>t.split(" "),ec=(t,e,r,l)=>{E(eu(e),e=>{t.removeEventListener(e,r,l)})},ed=(t,e,r,l)=>{var n;let o=es(),i=null!=(n=o&&l&&l.$)?n:o,a=l&&l.O||!1,s=l&&l.C||!1,u=o?{passive:i,capture:a}:a;return tS(N,eu(e).map(e=>{let l=s?n=>{ec(t,e,l,a),r(n)}:r;return t.addEventListener(e,l,u),tS(ec,t,e,l,a)}))},ef=t=>t.stopPropagation(),ep=t=>t.preventDefault(),ey={x:0,y:0},ev=t=>{let e=t&&t8(t);return e?{x:e.left+ti.pageYOffset,y:e.top+ti.pageXOffset}:ey},eh=(t,e,r)=>r?r.n?-t:r.i?e-t:t:t,eb=(t,e)=>[e&&e.i?t:0,eh(t,t,e)],em=(t,e)=>{let{x:r,y:l}=v(e)?{x:e,y:e}:e||{};v(r)&&(t.scrollLeft=r),v(l)&&(t.scrollTop=l)},ew=t=>({x:t.scrollLeft,y:t.scrollTop}),eg=(t,e)=>{E(_(e),t)},ex=t=>{let e=new Map,r=(t,r)=>{if(t){let l=e.get(t);eg(t=>{l&&l[t?"delete":"clear"](t)},r)}else e.forEach(t=>{t.clear()}),e.clear()},l=(t,n)=>{if(h(t)){let l=e.get(t)||new Set;return e.set(t,l),eg(t=>{m(t)&&l.add(t)},n),tS(r,t,n)}b(n)&&n&&r();let o=R(t),i=[];return E(o,e=>{let r=t[e];r&&A(i,l(e,r))}),tS(N,i)};return l(t||{}),[l,r,(t,r)=>{E(z(e.get(t)),t=>{r&&!I(r)?t.apply(0,r):t()})}]},e$=t=>JSON.stringify(t,(t,e)=>{if(m(e))throw 0;return e}),eO=(t,e)=>t?`${e}`.split(".").reduce((t,e)=>t&&H(t,e)?t[e]:void 0,t):void 0,ek={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},eE=(t,e)=>{let r={},l=C(R(e),R(t));return E(l,l=>{let n=t[l],o=e[l];if(g(n)&&g(o))T(r[l]={},eE(n,o)),F(r[l])&&delete r[l];else if(H(e,l)&&o!==n){let t=!0;if(w(n)||w(o))try{e$(n)===e$(o)&&(t=!1)}catch(t){}t&&(r[l]=o)}}),r},eS=(t,e,r)=>l=>[eO(t,l),r||void 0!==eO(e,l)],eC="data-overlayscrollbars",eA="os-environment",ez=`${eA}-flexbox-glue`,e_=`${ez}-max`,eI="os-scrollbar-hidden",eM=`${eC}-initialize`,eN=`${eC}-overflow-x`,eH=`${eC}-overflow-y`,eR="overflowVisible",eT="scrollbarPressed",eD="updating",eF=`${eC}-viewport`,eL="arrange",eP="scrollbarHidden",ej=`${eC}-padding`,eB=`${eC}-content`,eV="os-size-observer",eq=`${eV}-appear`,eY=`${eV}-listener`,eW="os-scrollbar",eX=`${eW}-rtl`,eJ=`${eW}-horizontal`,eQ=`${eW}-vertical`,eK=`${eW}-track`,eU=`${eW}-handle`,eG=`${eW}-visible`,eZ=`${eW}-cornerless`,e0=`${eW}-transitionless`,e1=`${eW}-interaction`,e3=`${eW}-unusable`,e2=`${eW}-auto-hide`,e4=`${e2}-hidden`,e9=`${eW}-wheel`,e5=`${eK}-interactive`,e6=`${eU}-interactive`,e7={},e8={},rt=t=>{E(t,t=>E(t,(e,r)=>{e7[r]=t[r]}))},re=(t,e,r)=>R(t).map(l=>{let{static:n,instance:o}=t[l],[i,a,s]=r||[],u=r?o:n;if(u){let t=r?u(i,a,e):u(e);return(s||e8)[l]=t}}),rr=t=>e8[t],rl="__osScrollbarsHidingPlugin",rn=(t,e,r,l)=>{te(t,e);let n=t5(e),o=t9(e),i=t7(r);return l&&Z(e),{x:o.h-n.h+i.h,y:o.w-n.w+i.w}},ro=t=>{let e=!1,r=tM(t,eI);try{e="none"===tP(t,tg("scrollbar-width"))||"none"===tP(t,"display","::-webkit-scrollbar")}catch(t){}return r(),e},ri=(t,e)=>{tL(t,{[tU]:t1,[tG]:t1,direction:"rtl"}),em(t,{x:0});let r=ev(t),l=ev(e);em(t,{x:-999});let n=ev(e);return{i:r.x===l.x,n:l.x!==n.x}},ra=(t,e)=>{let r=tM(t,ez),l=t8(t),n=t8(e),o=ei(n,l,!0),i=tM(t,e_),a=t8(t),s=t8(e),u=ei(s,a,!0);return r(),i(),o&&u},rs=()=>{let{body:t}=document,e=to(`<div class="${eA}"><div></div></div>`),r=e[0],l=r.firstChild,[n,,o]=ex(),[a,s]=i({o:rn(t,r,l),u:en},tS(rn,t,r,l,!0)),[u]=s(),c=ro(r),d={x:0===u.x,y:0===u.y},f={elements:{host:null,padding:!c,viewport:t=>c&&t===t.ownerDocument.body&&t,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},p=T({},ek),y=tS(T,{},p),v=tS(T,{},f),h={L:u,A:d,I:c,T:"-1"===tP(r,"zIndex"),V:!!tE,U:ri(r,l),B:ra(r,l),j:tS(n,"r"),N:v,G:t=>T(f,t)&&v(),q:y,F:t=>T(p,t)&&y(),W:T({},f),X:T({},p)};return j(r,"style"),Z(r),ti.addEventListener("resize",()=>{let t;if(!c&&(!d.x||!d.y)){let e=rr(rl),r=e?e.P():G;t=!!r(h,a)}o("r",[t])}),h},ru=()=>(n||(n=rs()),n),rc=(t,e)=>m(e)?e.apply(0,t):e,rd=(t,e,r,l)=>{let n=f(l)?r:l,o=rc(t,n);return o||e.apply(0,t)},rf=(t,e,r,l)=>{let n=f(l)?r:l,o=rc(t,n);return!!o&&(O(o)?o:e.apply(0,t))},rp=(t,e)=>{let{nativeScrollbarsOverlaid:r,body:l}=e||{},{A:n,I:o,N:i}=ru(),{nativeScrollbarsOverlaid:a,body:s}=i().cancel,u=f(l)?s:l,c=(n.x||n.y)&&(null!=r?r:a),d=t&&(p(u)?!o:u);return!!c||!!d},ry=new WeakMap,rv=(t,e)=>{ry.set(t,e)},rh=t=>{ry.delete(t)},rb=t=>ry.get(t),rm=(t,e,r)=>{let l=!1,n=!!r&&new WeakMap,o=o=>{if(n&&r){let i=r.map(e=>{let[r,l]=e||[],n=l&&r?(o||Y)(r,t):[];return[n,l]});E(i,r=>E(r[0],o=>{let i=r[1],a=n.get(o)||[],s=t.contains(o);if(s&&i){let t=ed(o,i.trim(),r=>{l?(t(),n.delete(o)):e(r)});n.set(o,A(a,t))}else N(a),n.delete(o)}))}};return o(),[()=>{l=!0},o]},rw=(t,e,r,l)=>{let n=!1,{Y:o,K:i,J:a,Z:s,tt:u,nt:c}=l||{},d=tA(()=>n&&r(!0),{v:33,p:99}),[f,p]=rm(t,d,a),y=i||[],v=C(o||[],y),h=(n,o)=>{if(!I(o)){let i=u||G,a=c||G,d=[],f=[],v=!1,h=!1;if(E(o,r=>{let{attributeName:n,target:o,type:u,oldValue:c,addedNodes:p,removedNodes:b}=r,m="attributes"===u,w=t===o,g=m&&n,x=g?L(o,n||""):null,$=g&&c!==x,O=S(y,n)&&$;if(e&&("childList"===u||!w)){let e=m&&$,u=e&&s&&X(o,s),f=u?!i(o,n,c,x):!m||e,y=f&&!a(r,!!u,t,l);E(p,t=>A(d,t)),E(b,t=>A(d,t)),h=h||y}!e&&w&&$&&!i(o,n,c,x)&&(A(f,n),v=v||O)}),p(t=>M(d).reduce((e,r)=>(A(e,Y(t,r)),X(r,t)?A(e,r):e),[])),e)return!n&&h&&r(!1),[!1];if(!I(f)||v){let t=[M(f),v];return n||r.apply(0,t),t}}},b=new t$(tS(h,!1));return[()=>(b.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:v,subtree:e,childList:e,characterData:e}),n=!0,()=>{n&&(f(),b.disconnect(),n=!1)}),()=>{if(n)return d.m(),h(!0,b.takeRecords())}]},rg=(t,e,r)=>{let{ot:l,st:n}=r||{},o=rr("__osSizeObserverPlugin"),{U:a}=ru(),s=tS(tj,t),[u]=i({o:!1,_:!0});return()=>{let r=[],c=to(`<div class="${eV}"><div class="${eY}"></div></div>`),d=c[0],f=d.firstChild,p=t=>{let r=t instanceof ResizeObserverEntry,n=!r&&w(t),o=!1,i=!1,s=!0;if(r){let[e,,r]=u(t.contentRect),l=et(e),n=ee(e,r),a=!r;s=!(o=!(i=a||n)&&!l)}else n?[,s]=t:i=!0===t;if(l&&s){let e=n?t[0]:tj(d);em(d,{x:eh(3333333,3333333,e&&a),y:3333333})}o||e({et:n?t:void 0,ct:!n,st:i})};if(tk){let t=new tk(t=>p(t.pop()));t.observe(f),A(r,()=>{t.disconnect()})}else{if(!o)return G;let[t,e]=o(f,p,n);A(r,C([tM(d,eq),ed(d,"animationstart",t)],e))}if(l){let[t]=i({o:void 0},s);A(r,ed(d,"scroll",e=>{let r=t(),[l,n,o]=r;n&&(tI(f,"ltr rtl"),tM(f,l?"rtl":"ltr"),p([!!l,n,o])),ef(e)}))}return tS(N,A(r,te(t,d)))}},rx=(t,e)=>{let r;let l=t=>0===t.h||t.isIntersecting||t.intersectionRatio>0,n=tn("os-trinsic-observer"),[o]=i({o:!1}),a=(t,r)=>{if(t){let n=o(l(t)),[,i]=n;return i&&!r&&e(n)&&[n]}},s=(t,e)=>a(e.pop(),t);return[()=>{let e=[];if(tO)(r=new tO(tS(s,!1),{root:t})).observe(n),A(e,()=>{r.disconnect()});else{let t=()=>{let t=t9(n);a(t)};A(e,rg(n,t)()),t()}return tS(N,A(e,te(t,n)))},()=>r&&s(!0,r.takeRecords())]},r$=(t,e)=>{let r,l,n,o,a;let{I:s}=ru(),u=`[${eC}]`,c=`[${eF}]`,d=["tabindex"],f=["wrap","cols","rows"],p=["id","class","style","open"],y={rt:!1,lt:tj(t.it)},{it:b,ut:g,ft:x,_t:$,dt:O,vt:k,ht:A}=t,{B:z,j:_}=ru(),[I]=i({u:el,o:{w:0,h:0}},()=>{let t=k(eR,eR),e=k(eL,""),r=e&&ew(g);A(eR,eR),A(eL,""),A("",eD,!0);let l=t6(x),n=t6(g),o=t7(g);return A(eR,eR,t),A(eL,"",e),A("",eD),em(g,r),{w:n.w+l.w+o.w,h:n.h+l.h+o.h}}),M=$?f:C(p,f),N=tA(e,{v:()=>r,p:()=>l,S(t,e){let[r]=t,[l]=e;return[C(R(r),R(l)).reduce((t,e)=>(t[e]=r[e]||l[e],t),{})]}}),H=t=>{E(t||d,t=>{if(S(d,t)){let e=L(b,t);h(e)?L(g,t,e):j(g,t)}})},D=(t,r)=>{let[l,n]=t,o={gt:n};return T(y,{rt:l}),r||e(o),o},F=({ct:t,et:r,st:l})=>{let n=!(t&&!l&&!r)&&s?N:e,[o,i]=r||[];r&&T(y,{lt:o}),n({ct:t||l,st:l,bt:i})},P=(t,r)=>{let[,l]=I(),n={wt:l},o=t?e:N;return l&&!r&&o(n),n},B=(t,e,r)=>{let l={yt:e};return e&&!r?N(l):O||H(t),l},[V,q]=x||!z?rx(b,D):[],Y=!O&&rg(b,F,{st:!0,ot:!0}),[W,X]=rw(b,!1,B,{K:p,Y:C(p,d)}),J=O&&tk&&new tk(t=>{let e=t[t.length-1].contentRect;F({ct:!0,st:ee(e,a)}),a=e});return[()=>{H(),J&&J.observe(b);let t=Y&&Y(),e=V&&V(),r=W(),l=_(t=>{let[,e]=I();N({St:t,wt:e})});return()=>{J&&J.disconnect(),t&&t(),e&&e(),o&&o(),r(),l()}},({$t:t,xt:e,Ot:i})=>{let a={},[s]=t("update.ignoreMutation"),[d,f]=t("update.attributes"),[p,y]=t("update.elementEvents"),[h,b]=t("update.debounce"),$=e||i,k=t=>m(s)&&s(t);if(y||f){n&&n(),o&&o();let[t,e]=rw(x||g,!0,P,{Y:C(M,d||[]),J:p,Z:u,nt:(t,e)=>{let{target:r,attributeName:l}=t,n=!e&&!!l&&!O&&U(r,u,c);return n||!!K(r,`.${eW}`)||!!k(t)}});o=t(),n=e}if(b){if(N.m(),w(h)){let t=h[0],e=h[1];r=v(t)&&t,l=v(e)&&e}else r=!!v(h)&&h,l=!1}if($){let t=X(),e=q&&q(),r=n&&n();t&&T(a,B(t[0],t[1],$)),e&&T(a,D(e[0],$)),r&&T(a,P(r[0],$))}return a},y]},rO=(t,e,r)=>ta(t,ts(e,r)),rk=(t,e,r)=>{let l=tu(e),[n,o]=eb(l,r),i=t/o,a=r?r.n?(o-t)/o:r.i?t/n:i:i;return rO(0,1,a)},rE=(t,e,r)=>{if(r){let t=e?tZ:t0,{Ct:l,Ht:n}=r,o=t8(n)[t],i=t8(l)[t];return rO(0,1,o/i)}let l=e?"x":"y",{zt:n,It:o}=t,i=o[l],a=n[l];return rO(0,1,i/(i+a))},rS=(t,e,r,l)=>{let n=rE(t,l,e);return 1/n*(1-n)*r},rC=(t,e,r,l)=>{let{N:n,T:o}=ru(),{scrollbars:i}=n(),{slot:a}=i,{At:s,it:u,ut:c,Et:d,Tt:f,Dt:p,dt:y}=e,{scrollbars:v}=d?{}:t,{slot:h}=v||{},m=new Map,w=t=>tE&&new tE({source:f,axis:t}),g=w("x"),x=w("y"),$=rf([s,u,c],()=>y&&p?s:u,a,h),O=t=>y&&!p&&Q(t)===c,k=(t,e,r)=>{let l=.5*(r?1:-1),n=e&&r?-1:1;return{transform:[tV(tF(0+l),e),tV(tF(t*n+l),e)]}},z=(t,e)=>T(t,e?{clear:["left"]}:{}),M=t=>{m.forEach((e,r)=>{let l=!t||S(_(t),r);l&&(E(e||[],t=>{t&&t.cancel()}),m.delete(r))})},H=(t,e,r,l)=>{let n=m.get(t)||[],o=n.find(t=>t&&t.timeline===e);o?o.effect=new KeyframeEffect(t,r,{composite:l}):m.set(t,C(n,[t.animate(r,{timeline:e,composite:l})]))},R=(t,e,r)=>{let l=r?tM:tI;E(t,t=>{l(t.kt,e)})},D=(t,e)=>{E(t,t=>{let[r,l]=e(t);tL(r,l)})},F=(t,e)=>{D(t,t=>{let{Ht:l}=t;return[l,{[e?tZ:t0]:tD(rE(r,e))}]})},L=(t,e)=>{g&&x?E(t,t=>{let{kt:l,Ht:n}=t,o=tS(rS,r,t),i=e&&tj(l),a=o(i?1:0,e),s=o(i?0:1,e);H(n,e?g:x,z({transform:[tV(tD(a),e),tV(tD(s),e)]},i))}):D(t,t=>{let{Ht:l,kt:n}=t,{U:o}=ru(),i=e?"x":"y",{zt:a}=r,s=tj(n),u=rS(r,t,rk(ew(f)[i],a[i],e&&s&&o),e);return[l,{transform:tV(tD(u),e)}]})},P=t=>{let{kt:e}=t,r=O(e)&&e,{x:l,y:n}=ew(f);return[r,{transform:r?tV({x:tF(l),y:tF(n)}):""}]},j=[],B=[],V=[],q=(t,e,r)=>{let l=b(r),n=!l||r,o=!l||!r;n&&R(B,t,e),o&&R(V,t,e)},Y=t=>{let e=t?eJ:eQ,r=t?B:V,n=I(r)?e0:"",i=tn(`${eW} ${e} ${n}`),a=tn(eK),s=tn(eU),u={kt:i,Ct:a,Ht:s};return o||tM(i,"os-no-css-vars"),A(r,u),A(j,[te(i,a),te(a,s),tS(Z,i),M,l(u,q,L,t)]),u},W=tS(Y,!0),X=tS(Y,!1);return W(),X(),[{Mt:()=>{F(B,!0),F(V)},Rt:()=>{L(B,!0),L(V)},Pt:()=>{if(y){if(g&&x){let{zt:t}=r,e=!!B.find(({kt:t})=>tj(t)),l=(t,r,l,n,o)=>H(t,r,z(k(l,n,o),e),"add");E(C(V,B),({kt:r})=>{O(r)?(l(r,g,t.x,!0,e),l(r,x,t.y)):M(r)})}else D(B,P),D(V,P)}},Lt:q,Vt:{V:g,Ut:B,Bt:W,jt:tS(D,B)},Nt:{V:x,Ut:V,Bt:X,jt:tS(D,V)}},()=>(te($,B[0].kt),te($,V[0].kt),tf(()=>{q(e0)},300),tS(N,j))]},rA=(t,e,r)=>{let{it:l,Tt:n,Gt:o}=e;return(e,i,a,s)=>{let{kt:u,Ct:c,Ht:d}=e,[f,p]=tC(333),[y,v]=tC(),h=tS(a,[e],s),b=!!n.scrollBy,m=`client${s?"X":"Y"}`,w=s?tZ:t0,g=s?"left":"top",x=s?"w":"h",$=s?"x":"y",O=t=>t.propertyName.indexOf(w)>-1,k=!0;return tS(N,[ed(u,"pointerenter",()=>{i(e1,!0)}),ed(u,"pointerleave pointercancel",()=>{i(e1,!1)}),ed(u,"wheel",t=>{let{deltaX:e,deltaY:r,deltaMode:o}=t;b&&k&&0===o&&Q(u)===l&&n.scrollBy({left:e,top:r,behavior:"smooth"}),k=!1,i(e9,!0),f(()=>{k=!0,i(e9)}),ep(t)},{$:!1,O:!0}),ed(d,"transitionstart",t=>{if(O(t)){let t=()=>{h(),y(t)};t()}}),ed(d,"transitionend transitioncancel",t=>{O(t)&&(v(),h())}),ed(u,"mousedown",tS(ed,o,"click",ef,{C:!0,O:!0}),{O:!0}),(()=>{let e="pointerup pointerleave pointercancel lostpointercapture",i=(t,e)=>l=>{let{zt:o}=r,i=t9(c)[x]-t9(d)[x],a=e*l/i*o[$];em(n,{[$]:t+a})};return ed(c,"pointerdown",r=>{let a=K(r.target,`.${eU}`)===d,s=a?d:c,u=t.scrollbars,{button:f,isPrimary:p,pointerType:y}=r,{pointers:v}=u,h=0===f&&p&&u[a?"dragScroll":"clickScroll"]&&(v||[]).includes(y);if(h){let t=!a&&r.shiftKey,u=tS(t8,d),f=tS(t8,c),p=(t,e)=>(t||u())[g]-(e||f())[g],y=tu(t8(n)[w])/t9(n)[x]||1,v=i(ew(n)[$]||0,1/y),h=r[m],b=u(),O=f(),k=b[w],E=p(b,O)+k/2,S=h-O[g],C=a?0:S-E,z=t=>{N(_),s.releasePointerCapture(t.pointerId)},_=[tS(B,l,eC,eT),ed(o,e,z),ed(o,"selectstart",t=>ep(t),{$:!1}),ed(c,e,z),ed(c,"pointermove",e=>{let r=e[m]-h;(a||t)&&v(C+r)})];if(B(l,eC,eT,!0),s.setPointerCapture(r.pointerId),t)v(C);else if(!a){let t=rr("__osClickScrollPlugin");t&&A(_,t(v,p,C,k,S))}}})})(),p,v])}},rz=(t,e,r,l,n,o)=>{let i,a,s,u,c;let d=G,f=0,[p,y]=tC(),[v,h]=tC(),[b,m]=tC(100),[w,g]=tC(100),[x,$]=tC(100),[O,k]=tC(()=>f),[E,S]=rC(t,n,l,rA(e,n,l)),{it:C,qt:z,Dt:_}=n,{Lt:I,Mt:M,Rt:H,Pt:R}=E,T=t=>{I(e2,t,!0),I(e2,t,!1)},D=(t,e)=>{if(k(),t)I(e4);else{let t=tS(I,e4,!0);f>0&&!e?O(t):t()}},F=t=>"mouse"===t.pointerType,L=t=>{F(t)&&(u=a)&&D(!0)},P=[m,k,g,$,h,y,()=>d(),ed(C,"pointerover",L,{C:!0}),ed(C,"pointerenter",L),ed(C,"pointerleave",t=>{F(t)&&(u=!1,a&&D(!1))}),ed(C,"pointermove",t=>{F(t)&&i&&p(()=>{m(),D(!0),w(()=>{i&&D(!1)})})}),ed(z,"scroll",t=>{v(()=>{H(),s&&D(!0),b(()=>{s&&!u&&D(!1)})}),o(t),R()})];return[()=>tS(N,A(P,S())),({$t:t,Ot:e,Ft:n,Wt:o})=>{let{Xt:u,Yt:p,Kt:y}=o||{},{bt:v,st:h}=n||{},{lt:b}=r,{A:m}=ru(),{zt:w,Jt:g,Zt:$}=l,[O,k]=t("showNativeOverlaidScrollbars"),[E,S]=t("scrollbars.theme"),[C,A]=t("scrollbars.visibility"),[N,F]=t("scrollbars.autoHide"),[L,P]=t("scrollbars.autoHideSuspend"),[j]=t("scrollbars.autoHideDelay"),[B,V]=t("scrollbars.dragScroll"),[q,Y]=t("scrollbars.clickScroll"),W=$.x||$.y,X=O&&m.x&&m.y,J=(t,e)=>{let r="visible"===C||"auto"===C&&"scroll"===t;return I(eG,r,e),r};if(f=j,h&&!e&&(L&&W?(T(!1),d(),x(()=>{d=ed(z,"scroll",tS(T,!0),{C:!0})})):T(!0)),k&&I("os-theme-none",X),S&&(I(c),I(E,!0),c=E),P&&!L&&T(!0),F&&(i="move"===N,a="leave"===N,D(!(s="never"!==N),!0)),V&&I(e6,B),Y&&I(e5,q),y||A){let t=J(g.x,!0),e=J(g.y,!1),r=t&&e;I(eZ,!r)}(u||p||v||e)&&(M(),H(),R(),I(e3,!w.x,!0),I(e3,!w.y,!1),I(eX,b&&!_))},{},E]},r_=t=>{let e=ru(),{N:r,I:l}=e,n=rr(rl),o=n&&n.H,{elements:i}=r(),{host:a,padding:s,viewport:u,content:c}=i,d=O(t),f=d?{}:t,{elements:p}=f,{host:y,padding:v,viewport:h,content:b}=p||{},m=d?t:f.target,w=X(m,"textarea"),g=m.ownerDocument,x=g.documentElement,$=m===g.body,k=g.defaultView,E=tS(rd,[m]),C=tS(rf,[m]),z=tS(rc,[m]),_=tS(tn,""),I=tS(E,_,u),M=tS(C,_,c),H=I(h),T=H===m,D=T&&$,F=!T&&M(b),P=!T&&O(H)&&H===F,q=P&&!!z(c),Y=q?I():H,W=q?F:M(),K=P?Y:H,U=D?x:K,tt=w?E(_,a,y):m,to=D?U:tt,ti=g.activeElement,ta=!T&&k.top===k&&ti===m,ts={At:m,it:to,ut:U,Qt:!T&&C(_,s,v),ft:P?W:F,tn:!T&&!l&&o&&o(e),Tt:D?x:U,qt:D?g:U,nn:k,Gt:g,_t:w,Dt:$,Et:d,dt:T,sn:P,vt:(t,e)=>V(U,T?eC:eF,T?e:t),ht:(t,e,r)=>B(U,T?eC:eF,T?e:t,r)},tu=R(ts).reduce((t,e)=>{let r=ts[e];return A(t,!!(r&&O(r))&&!Q(r)&&r)},[]),tc=t=>t?S(tu,t):null,{At:td,it:tf,Qt:tp,ut:ty,ft:tv,tn:th}=ts,tb=[()=>{j(tf,eC),j(tf,eM),j(td,eM),$&&(j(x,eC),j(x,eM))}],tm=w&&tc(tf),tw=w?td:J([tv,ty,tp,tf,td].find(t=>!1===tc(t))),tg=D?td:tv||ty,tx=tS(N,tb);return[ts,()=>{L(tf,eC,T?"viewport":"host"),L(tp,ej,""),L(tv,eB,""),T||L(ty,eF,"");let t=$&&!T?tM(Q(m),eI):G,e=t=>{te(Q(t),J(t)),Z(t)};if(tm&&(tl(td,tf),A(tb,()=>{tl(tf,td),Z(tf)})),te(tg,tw),te(tf,tp),te(tp||tf,!T&&ty),te(ty,tv),A(tb,()=>{t(),j(tp,ej),j(tv,eB),j(ty,eN),j(ty,eH),j(ty,eF),tc(tv)&&e(tv),tc(ty)&&e(ty),tc(tp)&&e(tp)}),l&&!T&&(B(ty,eF,eP,!0),A(tb,tS(j,ty,eF))),th&&(tr(ty,th),A(tb,tS(Z,th))),ta){let t="tabindex",e=L(ty,t);L(ty,t,"-1"),ty.focus();let r=()=>e?L(ty,t,e):j(ty,t),l=ed(g,"pointerdown keydown",()=>{r(),l()});A(tb,[r,l])}else ti&&ti.focus&&ti.focus();return tw=0,tx},tx]},rI=({ft:t})=>({Ft:e,en:r,Ot:l})=>{let{B:n}=ru(),{gt:o}=e||{},{rt:i}=r,a=(t||!n)&&(o||l);a&&tL(t,{[t0]:i?"":"100%"})},rM=({it:t,Qt:e,ut:r,dt:l},n)=>{let[o,a]=i({u:eo,o:tB()},tS(tB,t,"padding",""));return({$t:t,Ft:i,en:s,Ot:u})=>{let[c,d]=a(u),{I:f,B:p}=ru(),{ct:y,wt:v,bt:h}=i||{},{lt:b}=s,[m,w]=t("paddingAbsolute"),g=u||!p&&v;(y||d||g)&&([c,d]=o(u));let x=!l&&(w||h||d);if(x){let t=!m||!e&&!f,l=c.r+c.l,o=c.t+c.b,i={[tQ]:t&&!b?-l:0,[tK]:t?-o:0,[tJ]:t&&b?-l:0,top:t?-c.t:0,right:t?b?-c.r:"auto":0,left:t?b?"auto":-c.l:0,[tZ]:t?`calc(100% + ${l}px)`:""},a={[tq]:t?c.t:0,[tY]:t?c.r:0,[tX]:t?c.b:0,[tW]:t?c.l:0};tL(e||r,i),tL(r,a),T(n,{Qt:c,cn:!t,k:e?a:T({},i,a)})}return{rn:x}}},rN=({it:t,Qt:e,ut:r,tn:l,dt:n,ht:o,Dt:a,nn:s},u)=>{let c=tS(ta,0),d="visible",f={u:el,o:{w:0,h:0}},p=(t,e)=>{let r=ti.devicePixelRatio%1!=0?1:0,l={w:c(t.w-e.w),h:c(t.h-e.h)};return{w:l.w>r?l.w:0,h:l.h>r?l.h:0}},y=t=>0===t.indexOf(d),{L:v,B:h,I:b,A:m}=ru(),w=rr(rl),g=!n&&!b&&(m.x||m.y),x=a&&n,[$,O]=i(f,tS(t7,r)),[k,E]=i(f,tS(t6,r)),[S,C]=i(f),[A,z]=i(f),[_]=i({u:en,o:{x:t1,y:t1}}),I=(e,l)=>{if(tL(r,{[t0]:""}),l){let{cn:l,Qt:n}=u,{ln:o,M:i}=e,a=t7(t),s=t5(t),c="content-box"===tP(r,"boxSizing"),d=l||c?n.b+n.t:0,f=!(m.x&&c);tL(r,{[t0]:s.h+a.h+(o.x&&f?i.x:0)-d})}},M=(t,e)=>{let l=b||t?0:42,n=(t,n,o)=>{let i=tP(r,t),a=e?e[t]:i,s="scroll"===a;return[i,s,s&&!b?n?l:o:0,n&&!!l]},[o,i,a,s]=n(tU,m.x,v.x),[u,c,d,f]=n(tG,m.y,v.y);return{Jt:{x:o,y:u},ln:{x:i,y:c},M:{x:a,y:d},R:{x:s,y:f}}},N=(t,e,r,l)=>{let n=(t,e)=>{let r=y(t),l=e&&r&&t.replace(`${d}-`,"")||"";return[e&&!r?t:"",y(l)?"hidden":l]},[o,i]=n(r.x,e.x),[a,s]=n(r.y,e.y);return l[tU]=i&&a?i:o,l[tG]=s&&o?s:a,M(t,l)},H=(t,e,r,l)=>{let{M:n,R:o}=t,{x:i,y:a}=o,{x:s,y:c}=n,{k:d}=u,f=e?tJ:tQ,p=e?tW:tY,y=d[f],v=d[tK],h=d[p],b=d[tX];l[tZ]=`calc(100% + ${c+-1*y}px)`,l[f]=-c+y,l[tK]=-s+v,r&&(l[p]=h+(a?c:0),l[tX]=b+(i?s:0))},[R,D]=w?w.D(g,h,r,l,u,M,H):[()=>g,()=>[G]];return({$t:l,Ft:i,en:a,Ot:d},{rn:f})=>{let v;let{ct:w,yt:g,wt:F,gt:P,bt:j,St:V}=i||{},{rt:q,lt:Y}=a,[W,X]=l("showNativeOverlaidScrollbars"),[J,Q]=l("overflow"),K=W&&m.x&&m.y,U=!n&&!h&&(w||F||g||X||P),G=w||f||F||j||V||X,Z=y(J.x),tt=y(J.y),te=Z||tt,tr=O(d),tl=E(d),tn=C(d),to=z(d);if(X&&b&&o(eP,"scrollbarHidden",!K),U&&I(v=M(K),q),G){te&&o(eR,eR,!1);let[t,e]=D(K,Y,v),[l,n]=tr=$(d),[i,a]=tl=k(d),u=t5(r),f=i,y=u;t(),(a||n||X)&&e&&!K&&R(e,i,l,Y)&&(y=t5(r),f=t6(r));let h=t4(s),b={w:c(ta(i.w,f.w)+l.w),h:c(ta(i.h,f.h)+l.h)},m={w:c((x?h.w:y.w+c(u.w-i.w))+l.w),h:c((x?h.h:y.h+c(u.h-i.h))+l.h)};to=A(m),tn=S(p(b,m),d)}let[ti,ts]=to,[tu,tc]=tn,[td,tf]=tl,[tp,ty]=tr,tv={x:tu.w>0,y:tu.h>0},th=Z&&tt&&(tv.x||tv.y)||Z&&tv.x&&!tv.y||tt&&tv.y&&!tv.x;if(f||j||V||ty||tf||ts||tc||Q||X||U||G){let e={[tQ]:0,[tK]:0,[tJ]:0,[tZ]:"",[tU]:"",[tG]:""},l=N(K,tv,J,e),o=R(l,td,tp,Y);n||H(l,Y,o,e),U&&I(l,q),n?(L(t,eN,e[tU]),L(t,eH,e[tG])):tL(r,e)}B(t,eC,eR,th),B(e,ej,eR,th),n||B(r,eF,eR,te);let[tb,tm]=_(M(K).Jt);return T(u,{Jt:tb,It:{x:ti.w,y:ti.h},zt:{x:tu.w,y:tu.h},Zt:tv}),{Kt:tm,Xt:ts,Yt:tc}}},rH=t=>{let[e,r,l]=r_(t),n={Qt:{t:0,r:0,b:0,l:0},cn:!1,k:{[tQ]:0,[tK]:0,[tJ]:0,[tq]:0,[tY]:0,[tX]:0,[tW]:0},It:{x:0,y:0},zt:{x:0,y:0},Jt:{x:t1,y:t1},Zt:{x:!1,y:!1}},{At:o,ut:i,ht:a,dt:s}=e,{I:u,A:c,B:d}=ru(),f=!u&&(c.x||c.y),p=[rI(e),rM(e,n),rN(e,n)];return[r,t=>{let e={},r=(f||!d)&&ew(i);return a("",eD,!0),E(p,r=>{T(e,r(t,e)||{})}),a("",eD),em(i,r),s||em(o,0),e},n,e,l]},rR=(t,e,r,l)=>{let[n,o,i,a,s]=rH(t),[u,c,d]=r$(a,t=>{h({},t)}),[f,p,,y]=rz(t,e,d,i,a,l),v=t=>R(t).some(e=>!!t[e]),h=(t,l)=>{let{an:n,Ot:i,xt:a,un:s}=t,u=n||{},f=!!i,y={$t:eS(e,u,f),an:u,Ot:f};if(s)return p(y),!1;let h=l||c(T({},y,{xt:a})),b=o(T({},y,{en:d,Ft:h}));p(T({},y,{Ft:h,Wt:b}));let m=v(h),w=v(b),g=m||w||!F(u)||f;return g&&r(t,{Ft:h,Wt:b}),g};return[()=>{let{At:t,ut:e,Gt:r,Dt:l}=a,o=l?r.documentElement:t,i=ew(o),s=[u(),n(),f()];return em(e,i),tS(N,s)},h,()=>({fn:d,_n:i}),{dn:a,vn:y},s]},rT=(t,e,r)=>{let{q:l}=ru(),n=O(t),o=n?t:t.target,i=rb(o);if(e&&!i){let i=!1,a=[],s={},u=t=>{let e=D(t,!0),r=rr("__osOptionsValidationPlugin");return r?r(e,!0):e},c=T({},l(),u(e)),[d,f,p]=ex(),[y,v,h]=ex(r),b=(t,e)=>{h(t,e),p(t,e)},[m,w,g,x,$]=rR(t,c,({an:t,Ot:e},{Ft:r,Wt:l})=>{let{ct:n,bt:o,gt:i,wt:a,yt:s,st:u}=r,{Xt:c,Yt:d,Kt:f}=l;b("updated",[k,{updateHints:{sizeChanged:!!n,directionChanged:!!o,heightIntrinsicChanged:!!i,overflowEdgeChanged:!!c,overflowAmountChanged:!!d,overflowStyleChanged:!!f,contentMutation:!!a,hostMutation:!!s,appear:!!u},changedOptions:t||{},force:!!e}])},t=>b("scroll",[k,t])),O=t=>{rh(o),N(a),i=!0,b("destroyed",[k,t]),f(),v()},k={options(t,e){if(t){let r=e?l():{},n=eE(c,T(r,u(t)));F(n)||(T(c,n),w({an:n}))}return T({},c)},on:y,off:(t,e)=>{t&&e&&v(t,e)},state(){let{fn:t,_n:e}=g(),{lt:r}=t,{It:l,zt:n,Jt:o,Zt:a,Qt:s,cn:u}=e;return T({},{overflowEdge:l,overflowAmount:n,overflowStyle:o,hasOverflow:a,padding:s,paddingAbsolute:u,directionRTL:r,destroyed:i})},elements(){let{At:t,it:e,Qt:r,ut:l,ft:n,Tt:o,qt:i}=x.dn,{Vt:a,Nt:s}=x.vn,u=t=>{let{Ht:e,Ct:r,kt:l}=t;return{scrollbar:l,track:r,handle:e}},c=t=>{let{Ut:e,Bt:r}=t,l=u(e[0]);return T({},l,{clone:()=>{let t=u(r());return w({un:!0}),t}})};return T({},{target:t,host:e,padding:r||l,viewport:l,content:n||l,scrollOffsetElement:o,scrollEventElement:i,scrollbarHorizontal:c(a),scrollbarVertical:c(s)})},update:t=>w({Ot:t,xt:!0}),destroy:tS(O,!1),plugin:t=>s[R(t)[0]]};return(A(a,[$]),rv(o,k),re(e7,rT,[k,d,s]),rp(x.dn.Dt,!n&&t.cancel))?O(!0):(A(a,m()),b("initialized",[k]),k.update(!0)),k}return i};rT.plugin=t=>{let e=w(t),r=e?t:[t],l=r.map(t=>re(t,rT)[0]);return rt(r),e?l:l[0]},rT.valid=t=>{let e=t&&t.elements,r=m(e)&&e();return $(r)&&!!rb(r.target)},rT.env=()=>{let{L:t,A:e,I:r,U:l,B:n,T:o,V:i,W:a,X:s,N:u,G:c,q:d,F:f}=ru();return T({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:r,rtlScrollBehavior:l,flexboxGlue:n,cssCustomProperties:o,scrollTimeline:i,staticDefaultInitialization:a,staticDefaultOptions:s,getDefaultInitialization:u,setDefaultInitialization:c,getDefaultOptions:d,setDefaultOptions:f})};let rD=()=>{let t,e;if(typeof window>"u"){let t=()=>{};return[t,t]}let r=window,l="function"==typeof r.requestIdleCallback,n=r.requestAnimationFrame,o=r.cancelAnimationFrame,i=l?r.requestIdleCallback:n,a=l?r.cancelIdleCallback:o,s=()=>{a(t),o(e)};return[(r,o)=>{s(),t=i(l?()=>{s(),e=n(r)}:r,"object"==typeof o?o:{timeout:2233})},s]},rF=t=>{let{options:e,events:r,defer:l}=t||{},[n,i]=(0,o.useMemo)(rD,[]),a=(0,o.useRef)(null),s=(0,o.useRef)(l),u=(0,o.useRef)(e),c=(0,o.useRef)(r);return(0,o.useEffect)(()=>{s.current=l},[l]),(0,o.useEffect)(()=>{let{current:t}=a;u.current=e,rT.valid(t)&&t.options(e||{},!0)},[e]),(0,o.useEffect)(()=>{let{current:t}=a;c.current=r,rT.valid(t)&&t.on(r||{},!0)},[r]),(0,o.useEffect)(()=>()=>{var t;i(),null==(t=a.current)||t.destroy()},[]),(0,o.useMemo)(()=>[t=>{let e=a.current;if(rT.valid(e))return;let r=s.current,l=u.current||{},o=c.current||{},i=()=>a.current=rT(t,l,o);r?n(i,r):i()},()=>a.current],[])},rL=(0,o.forwardRef)((t,e)=>{let{element:r="div",options:l,events:n,defer:i,children:a,...s}=t,u=(0,o.useRef)(null),c=(0,o.useRef)(null),[d,f]=rF({options:l,events:n,defer:i});return(0,o.useEffect)(()=>{let{current:t}=u,{current:e}=c;return t&&e&&d({target:t,elements:{viewport:e,content:e}}),()=>{var t;return null==(t=f())?void 0:t.destroy()}},[d,r]),(0,o.useImperativeHandle)(e,()=>({osInstance:f,getElement:()=>u.current}),[]),o.createElement(r,{"data-overlayscrollbars-initialize":"",ref:u,...s},o.createElement("div",{"data-overlayscrollbars-contents":"",ref:c},a))})},2115:function(t,e,r){r.d(e,{r:function(){return u}});var l=r(7437),n=r(4440),o=r.n(n),i=r(1396),a=r.n(i),s=r(2265);let u=(0,s.forwardRef)((t,e)=>{let{external:r,...n}=t,i=o()("no-underline text-primary-blue2 font-medium [background:linear-gradient(0deg,currentColor,currentColor)_no-repeat_right_bottom_/_0_2px]","[transition:background-size_250ms] hover:[background-size:100%_2px] hover:[background-position-x:left]","focus-visible:rounded-sm",n.className);return r?(0,l.jsx)("a",{...n,ref:e,className:i}):(0,l.jsx)(a(),{...n,ref:e,className:i})})}}]);