(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8936:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3682)}])},3682:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return g}});var n=r(9722),l=r(169);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var i=r(1373),a=r(4246),u=function(t){var e=t.id,r=t.tag,l=(0,i.Z)(t,["id","tag"]);return e?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r,(0,n.Z)({},l))}):(0,a.jsx)(r,(0,n.Z)({},l))},s=r(3476),c=function(t){var e=t.children;return(0,a.jsx)(s.E,{element:"pre",options:{paddingAbsolute:!0,scrollbars:{autoHide:"leave"}},children:e})};r(2586),r(2431),r(5532);var d=r(7378),f=r(8038),p=r.n(f),b=r(1670),h={src:"/OverlayScrollbars/_next/static/media/favicon.7b344e85.ico",height:256,width:256},y=function(t,e){return(0,a.jsx)(u,(0,l.Z)((0,n.Z)({},t),{tag:e}))},g=function(t){var e,r,l=t.Component,i=t.pageProps,u=function(t){if(Array.isArray(t))return t}(e=(0,s.A)({defer:!0}))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e,2)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),f=u[0],g=u[1];return(0,d.useEffect)(function(){return f(document.body),function(){var t;return null===(t=g())||void 0===t?void 0:t.destroy()}},[]),(0,a.jsx)(b.Zo,{components:{h1:function(t){return y(t,"h1")},h2:function(t){return y(t,"h2")},h3:function(t){return y(t,"h3")},h4:function(t){return y(t,"h4")},h5:function(t){return y(t,"h5")},h6:function(t){return y(t,"h6")},pre:c},children:(0,a.jsxs)("div",{className:"font-sans font-normal text-primary-dark",children:[(0,a.jsxs)(p(),{children:[(0,a.jsx)("title",{children:"OverlayScrollbars"},"title"),(0,a.jsx)("meta",{name:"description",content:"A javascript scrollbar plugin that hides native scrollbars, provides custom styleable overlay scrollbars and keeps the native functionality and feeling."},"description"),(0,a.jsx)("link",{rel:"icon",href:h.src}),(0,a.jsx)("link",{rel:"shortcut icon",type:"image/x-icon",href:h.src}),(0,a.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,a.jsx)("meta",{name:"theme-color",content:"#36befd"}),(0,a.jsx)("meta",{name:"msapplication-TileColor",content:"#36befd"}),(0,a.jsx)("meta",{name:"msapplication-navbutton-color",content:"#36befd"}),(0,a.jsx)("meta",{name:"application-name",content:"OverlayScrollbars"}),(0,a.jsx)("meta",{name:"msapplication-tooltip",content:"OverlayScrollbars"}),(0,a.jsx)("meta",{name:"apple-mobile-web-app-title",content:"OverlayScrollbars"}),(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"http://schema.org","@type":"SoftwareSourceCode",url:"https://kingsora.github.io/OverlayScrollbars",name:"OverlayScrollbars",description:"A javascript scrollbar plugin that hides native scrollbars, provides custom styleable overlay scrollbars and keeps the native functionality and feeling.",license:"https://en.wikipedia.org/wiki/MIT_License",keywords:"js,javascript,typescript,overlayscrollbars,overlay,scrollbars,custom,scrollbar,plugin,react,vue,angular,treeshaking",isAccessibleForFree:!0,image:"https://raw.githubusercontent.com/KingSora/OverlayScrollbars/master/logo/logo.png",codeRepository:"https://github.com/KingSora/OverlayScrollbars",runtimePlatform:"browser",maintainer:{"@type":"Person",name:"Rene Haas",additionalName:"KingSora",url:"https://github.com/KingSora"},programmingLanguage:{"@type":"ComputerLanguage",name:"javascript",alternateName:"js"}})}})]}),(0,a.jsx)(l,(0,n.Z)({},i))]})})}},5532:function(){},2431:function(){},2586:function(){},8038:function(t,e,r){t.exports=r(555)},3476:function(t,e,r){"use strict";r.d(e,{E:function(){return rz},A:function(){return rI}});var n=r(7378);/*!
 * OverlayScrollbars
 * Version: 2.0.0
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */ function l(t,e){if(w(t))for(let r=0;r<t.length&&!1!==e(t[r],r,t);r++);else t&&l(Object.keys(t),r=>e(t[r],r,t));return t}function o(t,e){let r=h(e),n=v(e)||r;if(n){let o=r?"":{};if(t){let i=window.getComputedStyle(t,null);o=r?tL(t,i,e):e.reduce((e,r)=>(e[r]=tL(t,i,r),e),o)}return o}t&&l(k(e),r=>tM(t,r,e[r]))}let i=(t,e)=>{let{o:r,u:n,_:l}=t,o=r,i,a=(t,e)=>{let r=o,a=e||(n?!n(r,t):r!==t);return(a||l)&&(o=t,i=r),[o,a,i]},u=t=>a(e(o,i),t),s=t=>[o,!!t,i];return[e?u:a,s]},a=()=>"undefined"!=typeof window,u=a()&&Node.ELEMENT_NODE,{toString:s,hasOwnProperty:c}=Object.prototype,d=t=>void 0===t,f=t=>null===t,p=t=>d(t)||f(t)?`${t}`:s.call(t).replace(/^\[object (.+)\]$/,"$1").toLowerCase(),b=t=>"number"==typeof t,h=t=>"string"==typeof t,y=t=>"boolean"==typeof t,g=t=>"function"==typeof t,v=t=>Array.isArray(t),m=t=>"object"==typeof t&&!v(t)&&!f(t),w=t=>{let e=!!t&&t.length,r=b(e)&&e>-1&&e%1==0;return(!!v(t)||!g(t)&&!!r)&&(!(e>0&&m(t))||e-1 in t)},x=t=>{if(!t||!m(t)||"object"!==p(t))return!1;let e,r="constructor",n=t[r],l=n&&n.prototype,o=c.call(t,r),i=l&&c.call(l,"isPrototypeOf");if(n&&!o&&!i)return!1;for(e in t);return d(e)||c.call(t,e)},O=t=>{let e=HTMLElement;return!!t&&(e?t instanceof e:t.nodeType===u)},_=t=>{let e=Element;return!!t&&(e?t instanceof e:t.nodeType===u)},S=(t,e,r)=>t.indexOf(e,r),j=(t,e,r)=>(!r&&!h(e)&&w(e)?Array.prototype.push.apply(t,e):t.push(e),t),$=t=>{let e=Array.from,r=[];return e&&t?e(t):(t instanceof Set?t.forEach(t=>{j(r,t)}):l(t,t=>{j(r,t)}),r)},E=t=>!!t&&0===t.length,P=(t,e,r)=>{let n=t=>t&&t.apply(void 0,e||[]);l(t,n),r||(t.length=0)},C=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),k=t=>t?Object.keys(t):[],A=(t,e,r,n,o,i,a)=>(("object"!=typeof t||f(t))&&!g(t)&&(t={}),l([e,r,n,o,i,a],e=>{l(k(e),r=>{let n=e[r];if(t===n)return!0;let l=v(n);if(n&&(x(n)||l)){let o=t[r],i=o;l&&!v(o)?i=[]:l||x(o)||(i={}),t[r]=A(i,n)}else t[r]=n})}),t),T=t=>{for(let e in t)return!1;return!0},L=(t,e,r,n)=>{if(d(n))return r?r[t]:e;r&&(h(n)||b(n))&&(r[t]=n)},M=(t,e,r)=>{if(d(r))return t?t.getAttribute(e):null;t&&t.setAttribute(e,r)},I=(t,e,r,n)=>{if(r){let l=M(t,e)||"",o=new Set(l.split(" "));o[n?"add":"delete"](r),M(t,e,$(o).join(" ").trim())}},N=(t,e,r)=>{let n=M(t,e)||"",l=new Set(n.split(" "));return l.has(r)},z=(t,e)=>{t&&t.removeAttribute(e)},R=(t,e)=>L("scrollLeft",0,t,e),B=(t,e)=>L("scrollTop",0,t,e),H=a()&&Element.prototype,X=(t,e)=>{let r=[],n=e?_(e)?e:null:document;return n?j(r,n.querySelectorAll(t)):r},D=(t,e)=>{let r=e?_(e)?e:null:document;return r?r.querySelector(t):null},F=(t,e)=>{if(_(t)){let r=H.matches||H.msMatchesSelector;return r.call(t,e)}return!1},Z=t=>t?$(t.childNodes):[],Y=t=>t?t.parentElement:null,K=(t,e)=>{if(_(t)){let r=H.closest;if(r)return r.call(t,e);do{if(F(t,e))return t;t=Y(t)}while(t)}return null},q=(t,e,r)=>{let n=t&&K(t,e),l=t&&D(r,n),o=K(l,e)===n;return!!n&&!!l&&(n===t||l===t||o&&K(K(t,r),e)!==n)},J=(t,e,r)=>{if(r&&t){let n=e,o;w(r)?(o=document.createDocumentFragment(),l(r,t=>{t===n&&(n=t.previousSibling),o.appendChild(t)})):o=r,e&&(n?n!==e&&(n=n.nextSibling):n=t.firstChild),t.insertBefore(o,n||null)}},V=(t,e)=>{J(t,null,e)},W=(t,e)=>{J(Y(t),t,e)},G=(t,e)=>{J(Y(t),t&&t.nextSibling,e)},U=t=>{if(w(t))l($(t),t=>U(t));else if(t){let e=Y(t);e&&e.removeChild(t)}},Q=t=>{let e=document.createElement("div");return t&&M(e,"class",t),e},tt=t=>{let e=Q();return e.innerHTML=t.trim(),l(Z(e),t=>U(t))},te=t=>t.charAt(0).toUpperCase()+t.slice(1),tr=()=>Q().style,tn=["-webkit-","-moz-","-o-","-ms-"],tl=["WebKit","Moz","O","MS","webkit","moz","o","ms"],to={},ti={},ta=t=>{let e=ti[t];if(C(ti,t))return e;let r=te(t),n=tr();return l(tn,l=>{let o=l.replace(/-/g,""),i=[t,l+t,o+r,te(o)+r];return!(e=i.find(t=>void 0!==n[t]))}),ti[t]=e||""},tu=t=>{if(a()){let e=to[t]||window[t];return C(to,t)||(l(tl,r=>!(e=e||window[r+te(t)])),to[t]=e),e}},ts=tu("MutationObserver"),tc=tu("IntersectionObserver"),td=tu("ResizeObserver"),tf=tu("cancelAnimationFrame"),tp=tu("requestAnimationFrame"),tb=a()&&window.setTimeout,th=a()&&window.clearTimeout,ty=(t,e,r,n)=>{if(t&&e){let o=!0;return l(r,r=>{let l=n?n(t[r]):t[r],i=n?n(e[r]):e[r];l!==i&&(o=!1)}),o}return!1},tg=(t,e)=>ty(t,e,["w","h"]),tv=(t,e)=>ty(t,e,["x","y"]),tm=(t,e)=>ty(t,e,["t","r","b","l"]),tw=(t,e,r)=>ty(t,e,["width","height"],r&&(t=>Math.round(t))),tx=()=>{},tO=t=>{let e,r=t?tb:tp,n=t?th:tf;return[l=>{n(e),e=r(l,g(t)?t():t)},()=>n(e)]},t_=(t,e)=>{let r,n,l,o=tx,{g:i,v:a,p:u}=e||{},s=function(e){o(),th(r),r=n=void 0,o=tx,t.apply(this,e)},c=t=>u&&n?u(n,t):t,d=()=>{o!==tx&&s(c(l)||l)},f=function(){let t=$(arguments),e=g(i)?i():i,u=b(e)&&e>=0;if(u){let f=g(a)?a():a,p=b(f)&&f>=0,h=e>0?th:tf,y=c(t),v=y||t,m=s.bind(0,v);o();let w=(e>0?tb:tp)(m,e);o=()=>h(w),p&&!r&&(r=tb(d,f)),n=l=v}else s(t)};return f.m=d,f},{max:tS}=Math,tj=/[^\x20\t\r\n\f]+/g,t$=(t,e,r)=>{let n=t&&t.classList,l,o=0,i=!1;if(n&&e&&h(e)){let a=e.match(tj)||[];for(i=a.length>0;l=a[o++];)i=!!r(n,l)&&i}return i},tE=(t,e)=>t$(t,e,(t,e)=>t.contains(e)),tP=(t,e)=>{t$(t,e,(t,e)=>t.remove(e))},tC=(t,e)=>(t$(t,e,(t,e)=>t.add(e)),tP.bind(0,t,e)),tk={opacity:1,zindex:1},tA=(t,e)=>{let r=e?parseFloat(t):parseInt(t,10);return r==r?r:0},tT=(t,e)=>!tk[t.toLowerCase()]&&b(e)?`${e}px`:e,tL=(t,e,r)=>null!=e?e[r]||e.getPropertyValue(r):t.style[r],tM=(t,e,r)=>{try{let{style:n}=t;d(n[e])?n.setProperty(e,r):n[e]=tT(e,r)}catch(l){}},tI=t=>"rtl"===o(t,"direction"),tN=(t,e,r)=>{let n=e?`${e}-`:"",l=r?`-${r}`:"",i=`${n}top${l}`,a=`${n}right${l}`,u=`${n}bottom${l}`,s=`${n}left${l}`,c=o(t,[i,a,u,s]);return{t:tA(c[i],!0),r:tA(c[a],!0),b:tA(c[u],!0),l:tA(c[s],!0)}},{round:tz}=Math,tR={w:0,h:0},tB=t=>t?{w:t.offsetWidth,h:t.offsetHeight}:tR,tH=t=>t?{w:t.clientWidth,h:t.clientHeight}:tR,tX=t=>t?{w:t.scrollWidth,h:t.scrollHeight}:tR,tD=t=>{let e=parseFloat(o(t,"height"))||0,r=parseFloat(o(t,"width"))||0;return{w:r-tz(r),h:e-tz(e)}},tF=t=>t.getBoundingClientRect(),tZ,tY=()=>{if(d(tZ)){tZ=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get(){tZ=!0}}))}catch(t){}}return tZ},tK=t=>t.split(" "),tq=(t,e,r,n)=>{l(tK(e),e=>{t.removeEventListener(e,r,n)})},tJ=(t,e,r,n)=>{var o;let i=tY(),a=null!=(o=i&&n&&n.S)?o:i,u=n&&n.$||!1,s=n&&n.C||!1,c=[],d=i?{passive:a,capture:u}:u;return l(tK(e),e=>{let n=s?l=>{t.removeEventListener(e,n,u),r&&r(l)}:r;j(c,tq.bind(null,t,e,n,u)),t.addEventListener(e,n,d)}),P.bind(0,c)},tV=t=>t.stopPropagation(),tW=t=>t.preventDefault(),tG={x:0,y:0},tU=t=>{let e=t?tF(t):0;return e?{x:e.left+window.pageYOffset,y:e.top+window.pageXOffset}:tG},tQ=(t,e)=>{l(v(e)?e:[e],t)},t0=t=>{let e=new Map,r=(t,r)=>{if(t){let n=e.get(t);tQ(t=>{n&&n[t?"delete":"clear"](t)},r)}else e.forEach(t=>{t.clear()}),e.clear()},n=(t,o)=>{if(h(t)){let i=e.get(t)||new Set;return e.set(t,i),tQ(t=>{g(t)&&i.add(t)},o),r.bind(0,t,o)}y(o)&&o&&r();let a=k(t),u=[];return l(a,e=>{let r=t[e];r&&j(u,n(e,r))}),P.bind(0,u)},o=(t,r)=>{let n=e.get(t);l($(n),t=>{r&&!E(r)?t.apply(0,r):t()})};return n(t||{}),[n,r,o]},t1=t=>JSON.stringify(t,(t,e)=>{if(g(e))throw Error();return e}),t3={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},t2=(t,e)=>{let r={},n=k(e).concat(k(t));return l(n,n=>{let l=t[n],o=e[n];if(m(l)&&m(o))A(r[n]={},t2(l,o)),T(r[n])&&delete r[n];else if(C(e,n)&&o!==l){let i=!0;if(v(l)||v(o))try{t1(l)===t1(o)&&(i=!1)}catch(a){}i&&(r[n]=o)}}),r},t6="os-environment",t8=`${t6}-flexbox-glue`,t7=`${t8}-max`,t5="data-overlayscrollbars",t9=`${t5}-overflow-x`,t4=`${t5}-overflow-y`,et="overflowVisible",ee="updating",er="os-viewport",en=`${er}-arrange`,el=`${er}-scrollbar-hidden`,eo="os-overflow-visible",ei="os-size-observer",ea=`${ei}-appear`,eu=`${ei}-listener`,es="os-scrollbar",ec=`${es}-rtl`,ed=`${es}-horizontal`,ef=`${es}-vertical`,ep=`${es}-track`,eb=`${es}-handle`,eh=`${es}-visible`,ey=`${es}-cornerless`,eg=`${es}-transitionless`,ev=`${es}-interaction`,em=`${es}-unusable`,ew=`${es}-auto-hidden`,ex=`${es}-wheel`,eO=`${ep}-interactive`,e_=`${eb}-interactive`,eS={},ej=()=>eS,e$=t=>{let e=[];return l(v(t)?t:[t],t=>{let r=k(t);l(r,r=>{j(e,eS[r]=t[r])})}),e},eE={boolean:"__TPL_boolean_TYPE__",number:"__TPL_number_TYPE__",string:"__TPL_string_TYPE__",array:"__TPL_array_TYPE__",object:"__TPL_object_TYPE__",function:"__TPL_function_TYPE__",null:"__TPL_null_TYPE__"};eE.number,eE.boolean,eE.array,eE.null,eE.number,eE.array,eE.null,eE.function,eE.null,eE.string,eE.null,eE.array,eE.null;let{round:eP,abs:eC}=Math,ek="__osScrollbarsHidingPlugin",eA,eT=(t,e,r,n)=>{V(t,e);let l=tH(e),o=tB(e),i=tD(r);return n&&U(e),{x:o.h-l.h+i.h,y:o.w-l.w+i.w}},eL=t=>{let e=!1,r=tC(t,el);try{e="none"===o(t,ta("scrollbar-width"))||"none"===window.getComputedStyle(t,"::-webkit-scrollbar").getPropertyValue("display")}catch(n){}return r(),e},eM=(t,e)=>{let r="hidden";o(t,{overflowX:r,overflowY:r,direction:"rtl"}),R(t,0);let n=tU(t),l=tU(e);R(t,-999);let i=tU(e);return{i:n.x===l.x,n:l.x!==i.x}},eI=(t,e)=>{let r=tC(t,t8),n=tF(t),l=tF(e),o=tw(l,n,!0),i=tC(t,t7),a=tF(t),u=tF(e),s=tw(u,a,!0);return r(),i(),o&&s},eN=()=>{let{body:t}=document,e=tt(`<div class="${t6}"><div></div></div>`),r=e[0],n=r.firstChild,[l,,a]=t0(),[u,s]=i({o:eT(t,r,n),u:tv},eT.bind(0,t,r,n,!0)),[c]=s(),d=eL(r),f={x:0===c.x,y:0===c.y},p={elements:{host:null,padding:!d,viewport:t=>d&&t===t.ownerDocument.body&&t,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},b=A({},t3),h=A.bind(0,{},b),y=A.bind(0,{},p),g={k:c,I:f,A:d,L:"-1"===o(r,"zIndex"),V:eM(r,n),B:eI(r,n),Y:l.bind(0,"z"),j:l.bind(0,"r"),q:y,N:t=>A(p,t)&&y(),F:h,G:t=>A(b,t)&&h(),X:A({},p),U:A({},b)},v=window.addEventListener,m=t_(t=>a(t?"z":"r"),{g:33,v:99});if(z(r,"style"),U(r),v("resize",m.bind(0,!1)),!d&&(!f.x||!f.y)){let w;v("resize",()=>{let t=ej()[ek];(w=w||t&&t.R())&&w(g,u,m.bind(0,!0))})}return g},ez=()=>(eA||(eA=eN()),eA),eR=(t,e)=>g(e)?e.apply(0,t):e,eB=(t,e,r,n)=>{let l=d(n)?r:n,o=eR(t,l);return o||e.apply(0,t)},eH=(t,e,r,n)=>{let l=d(n)?r:n,o=eR(t,l);return!!o&&(O(o)?o:e.apply(0,t))},eX=(t,e,r)=>{let{nativeScrollbarsOverlaid:n,body:l}=r||{},{I:o,A:i}=ez(),{nativeScrollbarsOverlaid:a,body:u}=e,s=d(l)?u:l,c=(o.x||o.y)&&(null!=n?n:a),p=t&&(f(s)?!i:s);return!!c||!!p},eD=new WeakMap,eF=(t,e)=>{eD.set(t,e)},eZ=t=>{eD.delete(t)},eY=t=>eD.get(t),eK=(t,e)=>t?e.split(".").reduce((t,e)=>t&&C(t,e)?t[e]:void 0,t):void 0,eq=(t,e,r)=>n=>[eK(t,n),r||void 0!==eK(e,n)],eJ=t=>{let e=t;return[()=>e,t=>{e=A({},e,t)}]},eV="tabindex",eW=Q.bind(0,""),eG=t=>{V(Y(t),Z(t)),U(t)},eU=t=>{let e=ez(),{q:r,A:n}=e,l=ej()[ek],o=l&&l.T,{elements:i}=r(),{host:a,padding:u,viewport:s,content:c}=i,d=O(t),f=d?{}:t,{elements:p}=f,{host:b,padding:h,viewport:y,content:g}=p||{},v=d?t:f.target,m=F(v,"textarea"),w=v.ownerDocument,x=w.documentElement,_=v===w.body,$=w.defaultView,E=eB.bind(0,[v]),C=eH.bind(0,[v]),A=eR.bind(0,[v]),T=E.bind(0,eW,s),L=C.bind(0,eW,c),R=T(y),B=R===v,H=B&&_,X=!B&&L(g),D=!B&&O(R)&&R===X,K=D&&!!A(c),q=K?T():R,J=K?X:L(),Q=D?q:R,tt=w.activeElement,te=!B&&$.top===$&&tt===v,tr={W:v,Z:m?E(eW,a,b):v,J:Q,K:!B&&C(eW,u,h),tt:D?J:X,nt:!B&&!n&&o&&o(e),ot:H?x:Q,st:H?w:Q,et:$,ct:w,rt:m,it:_,lt:d,ut:B,dt:D,ft:(t,e)=>B?N(Q,t5,e):tE(Q,t),_t:(t,e,r)=>B?I(Q,t5,e,r):(r?tC:tP)(Q,t)},tn=k(tr).reduce((t,e)=>{let r=tr[e];return j(t,!!r&&!Y(r)&&r)},[]),tl=t=>t?S(tn,t)>-1:null,{W:to,Z:ti,K:ta,J:tu,tt:ts,nt:tc}=tr,td=[()=>{z(ti,t5),_&&z(x,t5)}],tf=m&&tl(ti),tp=m?to:Z([ts,tu,ta,ti,to].find(t=>!1===tl(t))),tb=ts||tu,th=()=>{M(ti,t5,B?"viewport":"host");let t=tC(ta,"os-padding"),e=tC(tu,!B&&er),r=tC(ts,"os-content"),l=_?tC(Y(v),el):tx;if(tf&&(G(to,ti),j(td,()=>{G(ti,to),U(ti)})),V(tb,tp),V(ti,ta),V(ta||ti,!B&&tu),V(tu,ts),j(td,()=>{l(),z(tu,t9),z(tu,t4),tl(ts)&&eG(ts),tl(tu)&&eG(tu),tl(ta)&&eG(ta),t(),e(),r()}),n&&!B&&j(td,tP.bind(0,tu,el)),tc&&(W(tu,tc),j(td,U.bind(0,tc))),te){let o=M(tu,eV);M(tu,eV,"-1"),tu.focus();let i=()=>o?M(tu,eV,o):z(tu,eV),a=tJ(w,"pointerdown keydown",()=>{i(),a()});j(td,[i,a])}else tt&&tt.focus&&tt.focus();tp=0};return[tr,th,P.bind(0,td)]},eQ=(t,e)=>{let{tt:r}=t,[n]=e;return t=>{let{B:e}=ez(),{ht:l}=n(),{gt:i}=t,a=(r||!e)&&i;return a&&o(r,{height:l?"":"100%"}),{vt:a,wt:a}}},e0=(t,e)=>{let[r,n]=e,{Z:l,K:a,J:u,ut:s}=t,[c,d]=i({u:tm,o:tN()},tN.bind(0,l,"padding",""));return(t,e,l)=>{let[i,f]=d(l),{A:p,B:b}=ez(),{bt:h}=r(),{vt:y,wt:g,yt:v}=t,[m,w]=e("paddingAbsolute");(y||f||!b&&g)&&([i,f]=c(l));let x=!s&&(w||v||f);if(x){let O=!m||!a&&!p,_=i.r+i.l,S=i.t+i.b,j={marginRight:O&&!h?-_:0,marginBottom:O?-S:0,marginLeft:O&&h?-_:0,top:O?-i.t:0,right:O?h?-i.r:"auto":0,left:O?h?"auto":-i.l:0,width:O?`calc(100% + ${_}px)`:""},$={paddingTop:O?i.t:0,paddingRight:O?i.r:0,paddingBottom:O?i.b:0,paddingLeft:O?i.l:0};o(a||u,j),o(u,$),n({K:i,St:!O,M:a?$:A({},j,$)})}return{xt:x}}},{max:e1}=Math,e3=e1.bind(0,0),e2="visible",e6="hidden",e8={u:tg,o:{w:0,h:0}},e7={u:tv,o:{x:e6,y:e6}},e5=(t,e)=>{let r=window.devicePixelRatio%1!=0?1:0,n={w:e3(t.w-e.w),h:e3(t.h-e.h)};return{w:n.w>r?n.w:0,h:n.h>r?n.h:0}},e9=(t,e,r)=>r?tC(t,e):tP(t,e),e4=t=>0===t.indexOf(e2),rt=(t,e)=>{let[r,n]=e,{Z:l,K:a,J:u,nt:s,ut:c,_t:d,it:f,et:p}=t,{k:b,B:h,A:y,I:g}=ez(),v=ej()[ek],m=!c&&!y&&(g.x||g.y),w=f&&c,[x,O]=i(e8,tD.bind(0,u)),[_,S]=i(e8,tX.bind(0,u)),[j,$]=i(e8),[E,P]=i(e8),[C]=i(e7),k=(t,e)=>{if(o(u,{height:""}),e){let{St:n,K:i}=r(),{$t:a,P:s}=t,c=tD(l),d=tH(l),f="content-box"===o(u,"boxSizing"),p=n||f?i.b+i.t:0,b=!(g.x&&f);o(u,{height:d.h+c.h+(a.x&&b?s.x:0)-p})}},A=(t,e)=>{let r=y||t?0:42,n=(t,n,l)=>{let i=o(u,t),a=e?e[t]:i,s="scroll"===a;return[i,s,s&&!y?n?r:l:0,n&&!!r]},[l,i,a,s]=n("overflowX",g.x,b.x),[c,d,f,p]=n("overflowY",g.y,b.y);return{Ct:{x:l,y:c},$t:{x:i,y:d},P:{x:a,y:f},D:{x:s,y:p}}},T=(t,e,r,n)=>{let l=(t,e)=>{let r=e4(t),n=e&&r&&t.replace(`${e2}-`,"")||"";return[e&&!r?t:"",e4(n)?"hidden":n]},[o,i]=l(r.x,e.x),[a,u]=l(r.y,e.y);return n.overflowX=i&&a?i:o,n.overflowY=u&&o?u:a,A(t,n)},L=(t,e,n,l)=>{let{P:o,D:i}=t,{x:a,y:u}=i,{x:s,y:c}=o,{M:d}=r(),f=e?"marginLeft":"marginRight",p=e?"paddingLeft":"paddingRight",b=d[f],h=d.marginBottom,y=d[p],g=d.paddingBottom;l.width=`calc(100% + ${c+-1*b}px)`,l[f]=-c+b,l.marginBottom=-s+h,n&&(l[p]=y+(u?c:0),l.paddingBottom=g+(a?s:0))},[N,z]=v?v.H(m,h,u,s,r,A,L):[()=>m,()=>[tx]];return(t,e,i)=>{let{vt:s,Ot:f,wt:b,xt:v,gt:m,yt:R}=t,{ht:B,bt:H}=r(),[X,D]=e("showNativeOverlaidScrollbars"),[F,Z]=e("overflow"),Y=X&&g.x&&g.y,K=!c&&!h&&(s||b||f||D||m),q=e4(F.x),J=e4(F.y),V=q||J,W=O(i),G=S(i),U=$(i),Q=P(i),tt;if(D&&y&&d(el,"scrollbarHidden",!Y),K&&(tt=A(Y),k(tt,B)),s||v||b||R||D){V&&d(eo,et,!1);let[te,tr]=z(Y,H,tt),[tn,tl]=W=x(i),[to,ti]=G=_(i),ta=tH(u),tu=to,ts=ta;te(),(ti||tl||D)&&tr&&!Y&&N(tr,to,tn,H)&&(ts=tH(u),tu=tX(u));let tc={w:e3(e1(to.w,tu.w)+tn.w),h:e3(e1(to.h,tu.h)+tn.h)},td={w:e3((w?p.innerWidth:ts.w+e3(ta.w-to.w))+tn.w),h:e3((w?p.innerHeight+tn.h:ts.h+e3(ta.h-to.h))+tn.h)};Q=E(td),U=j(e5(tc,td),i)}let[tf,tp]=Q,[tb,th]=U,[ty,tg]=G,[tv,tm]=W,tw={x:tb.w>0,y:tb.h>0},tx=q&&J&&(tw.x||tw.y)||q&&tw.x&&!tw.y||J&&tw.y&&!tw.x;if(v||R||tm||tg||tp||th||Z||D||K){let tO={marginRight:0,marginBottom:0,marginLeft:0,width:"",overflowY:"",overflowX:""},t_=T(Y,tw,F,tO),tS=N(t_,ty,tv,H);c||L(t_,H,tS,tO),K&&k(t_,B),c?(M(l,t9,tO.overflowX),M(l,t4,tO.overflowY)):o(u,tO)}I(l,t5,et,tx),e9(a,eo,tx),c||e9(u,eo,V);let[tj,t$]=C(A(Y).Ct);return n({Ct:tj,zt:{x:tf.w,y:tf.h},Tt:{x:tb.w,y:tb.h},Et:tw}),{At:t$,It:tp,Lt:th}}},re=(t,e,r)=>{let n={},o=e||{},i=k(t).concat(k(o));return l(i,e=>{let l=t[e],i=o[e];n[e]=!!(r||l||i)}),n},rr=(t,e)=>{let{W:r,J:n,_t:o,ut:i}=t,{A:a,I:u,B:s}=ez(),c=!a&&(u.x||u.y),d=[eQ(t,e),e0(t,e),rt(t,e)];return(t,e,a)=>{let u=re(A({vt:!1,xt:!1,yt:!1,gt:!1,It:!1,Lt:!1,At:!1,Ot:!1,wt:!1},e),{},a),f=c||!s,p=f&&R(n),b=f&&B(n);o("",ee,!0);let h=u;return l(d,e=>{h=re(h,e(h,t,!!a)||{},a)}),R(n,p),B(n,b),o("",ee),i||(R(r,0),B(r,0)),h}},rn=(t,e,r)=>{let n,o=!1,i=()=>{o=!0},a=i=>{if(r){let a=r.reduce((e,r)=>{if(r){let[n,l]=r,o=l&&n&&(i?i(n):X(n,t));o&&o.length&&l&&h(l)&&j(e,[o,l.trim()],!0)}return e},[]);l(a,r=>l(r[0],l=>{let i=r[1],a=n.get(l)||[],u=t.contains(l);if(u){let s=tJ(l,i,t=>{o?(s(),n.delete(l)):e(t)});n.set(l,j(a,s))}else P(a),n.delete(l)}))}};return r&&(n=new WeakMap,a()),[i,a]},rl=(t,e,r,n)=>{let o=!1,{Ht:i,Mt:a,Pt:u,Dt:s,Rt:c,kt:d}=n||{},f=t_(()=>{o&&r(!0)},{g:33,v:99}),[p,b]=rn(t,f,u),y=a||[],g=(i||[]).concat(y),v=(o,i)=>{let a=c||tx,u=d||tx,f=new Set,p=new Set,g=!1,v=!1;if(l(o,r=>{let{attributeName:o,target:i,type:c,oldValue:d,addedNodes:b,removedNodes:m}=r,w="attributes"===c,x=t===i,O=w&&h(o)?M(i,o):0,_=0!==O&&d!==O,j=S(y,o)>-1&&_;if(e&&("childList"===c||!x)){let $=w&&_,E=$&&s&&F(i,s),P=E?!a(i,o,d,O):!w||$,C=P&&!u(r,!!E,t,n);l(b,t=>f.add(t)),l(m,t=>f.add(t)),v=v||C}!e&&x&&_&&!a(i,o,d,O)&&(p.add(o),g=g||j)}),f.size>0&&b(t=>$(f).reduce((e,r)=>(j(e,X(t,r)),F(r,t)?j(e,r):e),[])),e)return!i&&v&&r(!1),[!1];if(p.size>0||g){let m=[$(p),g];return i||r.apply(0,m),m}},m=new ts(t=>v(t));return m.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:g,subtree:e,childList:e,characterData:e}),o=!0,[()=>{o&&(p(),m.disconnect(),o=!1)},()=>{if(o){f.m();let t=m.takeRecords();return!E(t)&&v(t,!0)}}]},ro=t=>t&&(t.height||t.width),ri=(t,e,r)=>{let{Vt:n=!1,Bt:l=!1}=r||{},o=ej().__osSizeObserverPlugin,{V:a}=ez(),u=tt(`<div class="${ei}"><div class="${eu}"></div></div>`),s=u[0],c=s.firstChild,d=tI.bind(0,t),[f]=i({o:void 0,_:!0,u:(t,e)=>!(!t||!ro(t)&&ro(e))}),p=t=>{let r=v(t)&&t.length>0&&m(t[0]),l=!r&&y(t[0]),o=!1,i=!1,u=!0;if(r){let[c,,d]=f(t.pop().contentRect),p=ro(c),b=ro(d);o=!d||!p,i=!b&&p,u=!o}else l?[,u]=t:i=!0===t;if(n&&u){let h=l?t[0]:tI(s);R(s,h?a.n?-3333333:a.i?0:3333333:3333333),B(s,3333333)}o||e({vt:!l,Yt:l?t:void 0,Bt:!!i})},b=[],h=!!l&&p;return[()=>{P(b),U(s)},()=>{if(td){let e=new td(p);e.observe(c),j(b,()=>{e.disconnect()})}else if(o){let[r,a]=o.O(c,p,l);h=r,j(b,a)}if(n){let[u]=i({o:!d()},d);j(b,tJ(s,"scroll",t=>{let e=u(),[r,n]=e;n&&(tP(c,"ltr rtl"),r?tC(c,"rtl"):tC(c,"ltr"),p(e)),tV(t)}))}h&&(tC(s,ea),j(b,tJ(s,"animationstart",h,{C:!!td}))),(td||o)&&V(t,s)}]},ra=t=>0===t.h||t.isIntersecting||t.intersectionRatio>0,ru=(t,e)=>{let r,n=Q("os-trinsic-observer"),l=[],[o]=i({o:!1}),a=(t,r)=>{if(t){let n=o(ra(t)),[,l]=n;if(l)return r||e(n),[n]}},u=(t,e)=>{if(t&&t.length>0)return a(t.pop(),e)};return[()=>{P(l),U(n)},()=>{if(tc)(r=new tc(t=>u(t),{root:t})).observe(n),j(l,()=>{r.disconnect()});else{let e=()=>{let t=tB(n);a(t)},[o,i]=ri(n,e);j(l,o),i(),e()}V(t,n)},()=>{if(r)return u(r.takeRecords(),!0)}]},rs=`[${t5}]`,rc=`.${er}`,rd=["tabindex"],rf=["wrap","cols","rows"],rp=["id","class","style","open"],rb=(t,e,r)=>{let n,o,a,{Z:u,J:s,tt:c,rt:d,ut:f,ft:p,_t:y}=t,{B:m}=ez(),[w]=i({u:tg,o:{w:0,h:0}},()=>{let t=p(eo,et),e=p(en,""),r=e&&R(s),n=e&&B(s);y(eo,et),y(en,""),y("",ee,!0);let l=tX(c),o=tX(s),i=tD(s);return y(eo,et,t),y(en,"",e),y("",ee),R(s,r),B(s,n),{w:o.w+l.w+i.w,h:o.h+l.h+i.h}}),x=d?rf:rp.concat(rf),O=t_(r,{g:()=>n,v:()=>o,p(t,e){let[r]=t,[n]=e;return[k(r).concat(k(n)).reduce((t,e)=>(t[e]=r[e]||n[e],t),{})]}}),_=t=>{l(t||rd,t=>{if(S(rd,t)>-1){let e=M(u,t);h(e)?M(s,t,e):z(s,t)}})},$=(t,n)=>{let[l,o]=t,i={gt:o};return e({ht:l}),n||r(i),i},E=({vt:t,Yt:n,Bt:l})=>{let o=!1;if(n){let[i,a]=n;o=a,e({bt:i})}(!t||l?r:O)({vt:t,yt:o})},P=(t,e)=>{let[,n]=w(),l={wt:n};return n&&(e||(t?r:O)(l)),l},C=(t,e,r)=>{let n={Ot:e};return e?r||O(n):f||_(t),n},[T,L,I]=c||!m?ru(u,$):[tx,tx,tx],[N,H]=f?[tx,tx]:ri(u,E,{Bt:!0,Vt:!0}),[X,D]=rl(u,!1,C,{Mt:rp,Ht:rp.concat(rd)}),F=f&&td&&new td(E.bind(0,{vt:!0}));return F&&F.observe(u),_(),[()=>{T(),N(),a&&a[0](),F&&F.disconnect(),X()},()=>{H(),L()},()=>{let t={},e=D(),r=I(),n=a&&a[1]();return e&&A(t,C.apply(0,j(e,!0))),r&&A(t,$.apply(0,j(r,!0))),n&&A(t,P.apply(0,j(n,!0))),t},t=>{let[e]=t("update.ignoreMutation"),[r,l]=t("update.attributes"),[i,u]=t("update.elementEvents"),[d,p]=t("update.debounce"),h=t=>g(e)&&e(t);if((u||l)&&(a&&(a[1](),a[0]()),a=rl(c||s,!0,P,{Ht:x.concat(r||[]),Pt:i,Dt:rs,kt(t,e){let{target:r,attributeName:n}=t,l=!e&&!!n&&!f&&q(r,rs,rc);return l||!!K(r,`.${es}`)||!!h(t)}})),p){if(O.m(),v(d)){let y=d[0],m=d[1];n=b(y)&&y,o=b(m)&&m}else b(d)?(n=d,o=!1):(n=!1,o=!1)}}]},rh={x:0,y:0},ry={K:{t:0,r:0,b:0,l:0},St:!1,M:{marginRight:0,marginBottom:0,marginLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},zt:rh,Tt:rh,Ct:{x:"hidden",y:"hidden"},Et:{x:!1,y:!1},ht:!1,bt:!1},rg=(t,e)=>{let r=eq(e,{}),n=eJ(ry),[l,o,i]=t0(),[a,u]=n,[s,c,d]=eU(t),f=rr(s,n),p=(t,e,r)=>{let n=k(t).some(e=>t[e]),l=n||!T(e)||r;return l&&i("u",[t,e,r]),l},[b,h,y,g]=rb(s,u,t=>p(f(r,t),{},!1)),v=a.bind(0);return v.jt=t=>l("u",t),v.qt=()=>{let{W:t,J:e}=s,r=R(t),n=B(t);h(),c(),R(e,r),B(e,n)},v.Nt=s,[(t,r)=>{let n=eq(e,t,r);return g(n),p(f(n,y(),r),t,!!r)},v,()=>{o(),b(),d()}]},{round:rv}=Math,rm=t=>{let{width:e,height:r}=tF(t),{w:n,h:l}=tB(t);return{x:rv(e)/n||1,y:rv(r)/l||1}},rw=(t,e,r)=>{let n=e.scrollbars,{button:l,isPrimary:o,pointerType:i}=t,{pointers:a}=n;return 0===l&&o&&n[r?"dragScroll":"clickScroll"]&&(a||[]).includes(i)},rx=(t,e)=>tJ(t,"mousedown",tJ.bind(0,e,"click",tV,{C:!0,$:!0}),{$:!0}),rO=(t,e,r,n,l,o)=>{let{V:i}=ez(),{Ft:a,Gt:u,Xt:s}=r,c=`scroll${o?"Left":"Top"}`,d=`client${o?"X":"Y"}`,f=o?"width":"height",p=o?"left":"top",b=o?"w":"h",h=o?"x":"y",y=(t,e)=>r=>{let{Tt:d}=l(),f=tB(u)[b]-tB(a)[b],p=e*r/f*d[h],y=tI(s),g=y&&o?i.n||i.i?1:-1:1;n[c]=t+p*g};return tJ(u,"pointerdown",r=>{let l=K(r.target,`.${eb}`)===a;if(rw(r,t,l)){let o=!l&&r.shiftKey,i=()=>tF(a),s=()=>tF(u),b=(t,e)=>(t||i())[p]-(e||s())[p],g=y(n[c]||0,1/rm(n)[h]),v=r[d],m=i(),w=s(),x=m[f],O=b(m,w)+x/2,_=v-w[p],S=l?0:_-O,$=[tJ(e,"selectstart",t=>tW(t),{S:!1}),tJ(u,"pointermove",t=>{let e=t[d]-v;(l||o)&&g(S+e)})];if(o)g(S);else if(!l){let E=ej().__osClickScrollPlugin;E&&j($,E.O(g,b,S,x,_))}tJ(u,"pointerup",t=>{P($),u.releasePointerCapture(t.pointerId)},{C:!0}),u.setPointerCapture(r.pointerId)}})},r_=(t,e)=>(r,n,l,o,i,a)=>{let{Xt:u}=r,[s,c]=tO(333),d=!!i.scrollBy,f=!0;return P.bind(0,[tJ(u,"pointerenter",()=>{n(ev,!0)}),tJ(u,"pointerleave pointercancel",()=>{n(ev)}),tJ(u,"wheel",t=>{let{deltaX:e,deltaY:r,deltaMode:l}=t;d&&f&&0===l&&Y(u)===o&&i.scrollBy({left:e,top:r,behavior:"smooth"}),f=!1,n(ex,!0),s(()=>{f=!0,n(ex)}),tW(t)},{S:!1,$:!0}),rx(u,l),rO(t,l,r,i,e,a),c])},{min:rS,max:rj,abs:r$,round:rE}=Math,rP=(t,e,r,n)=>{if(n){let l=r?"x":"y",{Tt:o,zt:i}=n,a=i[l],u=o[l];return rj(0,rS(1,a/(a+u)))}let s=r?"w":"h",c=tB(t)[s],d=tB(e)[s];return rj(0,rS(1,c/d))},rC=(t,e,r,n,l,o)=>{let{V:i}=ez(),{Tt:a}=n,u=rE(a[o?"x":"y"]),s=r$(r[`scroll${o?"Left":"Top"}`]),c=i.i?s:u-s,d=rS(1,(o&&l?c:s)/u),f=rP(t,e,o);return 1/f*(1-f)*d},rk=(t,e,r)=>{let{q:n}=ez(),{scrollbars:i}=n(),{slot:a}=i,{ct:u,W:s,Z:c,J:d,lt:f,ot:p}=e,{scrollbars:b}=f?{}:t,{slot:h}=b||{},g=eH([s,c,d],()=>c,a,h),v=(t,e,r)=>{let n=r?tC:tP;l(t,t=>{n(t.Xt,e)})},m=(t,e)=>{l(t,t=>{let[r,n]=e(t);o(r,n)})},w=(t,e,r)=>{m(t,t=>{let{Ft:n,Gt:l}=t;return[n,{[r?"width":"height"]:`${(100*rP(n,l,r,e)).toFixed(3)}%`}]})},x=(t,e,r)=>{let n=r?"X":"Y";m(t,t=>{let{Ft:l,Gt:o,Xt:i}=t,a=rC(l,o,p,e,tI(i),r);return[l,{transform:a==a?`translate${n}(${(100*a).toFixed(3)}%)`:""}]})},O=[],_=[],S=[],$=(t,e,r)=>{let n=y(r);(!n||r)&&v(_,t,e),n&&r||v(S,t,e)},C=t=>{w(_,t,!0),w(S,t)},k=t=>{x(_,t,!0),x(S,t)},A=t=>{let e=t?_:S,n=E(e)?eg:"",l=Q(`${es} ${t?ed:ef} ${n}`),o=Q(ep),i=Q(eb),a={Xt:l,Gt:o,Ft:i};return V(l,o),V(o,i),j(e,a),j(O,[U.bind(0,l),r(a,$,u,c,p,t)]),a},T=A.bind(0,!0),L=A.bind(0,!1),M=()=>{V(g,_[0].Xt),V(g,S[0].Xt),tb(()=>{$(eg)},300)};return T(),L(),[{Ut:C,Wt:k,Zt:$,Jt:{Kt:_,Qt:T,tn:m.bind(0,_)},nn:{Kt:S,Qt:L,tn:m.bind(0,S)}},M,P.bind(0,O)]},rA=(t,e,r,n)=>{let l,o,i,a,u,s=0,c=eJ({}),[d]=c,[f,p]=tO(),[b,h]=tO(),[y,g]=tO(100),[v,m]=tO(100),[w,x]=tO(()=>s),[O,_,S]=rk(t,r.Nt,r_(e,r)),{Z:j,J:$,ot:E,st:C,ut:k,it:A}=r.Nt,{Jt:T,nn:L,Zt:M,Ut:I,Wt:N}=O,{tn:z}=T,{tn:H}=L,X=t=>{let{Xt:e}=t,r=k&&!A&&Y(e)===$&&e;return[r,{transform:r?`translate(${R(E)}px, ${B(E)}px)`:""}]},D=(t,e)=>{if(x(),t)M(ew);else{let r=()=>M(ew,!0);s>0&&!e?w(r):r()}},F=()=>{(a=o)&&D(!0)},Z=[g,x,m,h,p,S,tJ(j,"pointerover",F,{C:!0}),tJ(j,"pointerenter",F),tJ(j,"pointerleave",()=>{a=!1,o&&D(!1)}),tJ(j,"pointermove",()=>{l&&f(()=>{g(),D(!0),v(()=>{l&&D(!1)})})}),tJ(C,"scroll",t=>{b(()=>{N(r()),i&&D(!0),y(()=>{i&&!a&&D(!1)})}),n(t),k&&z(X),k&&H(X)})],K=d.bind(0);return K.Nt=O,K.qt=_,[(t,n,a)=>{let{It:c,Lt:d,At:f,yt:p}=a,b=eq(e,t,n),h=r(),{Tt:y,Ct:g,bt:v}=h,[m,w]=b("scrollbars.theme"),[x,O]=b("scrollbars.visibility"),[_,S]=b("scrollbars.autoHide"),[j]=b("scrollbars.autoHideDelay"),[$,E]=b("scrollbars.dragScroll"),[P,C]=b("scrollbars.clickScroll"),k=(t,e)=>{let r="visible"===x||"auto"===x&&"scroll"===t;return M(eh,r,e),r};if(s=j,w&&(M(u),M(m,!0),u=m),S&&(l="move"===_,o="leave"===_,D(!(i="never"!==_),!0)),E&&M(e_,$),C&&M(eO,P),f||O||n){let T=k(g.x,!0),L=k(g.y,!1);M(ey,!(T&&L))}(c||d||p||n)&&(I(h),N(h),M(em,!y.x,!0),M(em,!y.y,!1),M(ec,v&&!A))},K,P.bind(0,Z)]},rT=(t,e,r)=>{g(t)&&t(e||void 0,r||void 0)},rL=(t,e,r)=>{let{F:n,q:o,Y:i,j:a}=ez(),u=ej(),s=O(t),c=s?t:t.target,d=eY(c);if(e&&!d){let f=!1,p=t=>{let e=ej().__osOptionsValidationPlugin,r=e&&e.O;return r?r(t,!0):t},b=A({},n(),p(e)),[h,y,g]=t0(r),[v,m,w]=rg(t,b),[x,_,S]=rA(t,b,m,t=>g("scroll",[L,t])),j=(t,e)=>v(t,!!e),$=j.bind(0,{},!0),E=i($),P=a($),C=t=>{eZ(c),E(),P(),S(),w(),f=!0,g("destroyed",[L,!!t]),y()},L={options(t,e){if(t){let r=e?n():{},l=t2(b,A(r,p(t)));T(l)||(A(b,l),j(l))}return A({},b)},on:h,off(t,e){t&&e&&y(t,e)},state(){let{zt:t,Tt:e,Ct:r,Et:n,K:l,St:o,bt:i}=m();return A({},{overflowEdge:t,overflowAmount:e,overflowStyle:r,hasOverflow:n,padding:l,paddingAbsolute:o,directionRTL:i,destroyed:f})},elements(){let{W:t,Z:e,K:r,J:n,tt:l,ot:o,st:i}=m.Nt,{Jt:a,nn:u}=_.Nt,s=t=>{let{Ft:e,Gt:r,Xt:n}=t;return{scrollbar:n,track:r,handle:e}},c=t=>{let{Kt:e,Qt:r}=t,n=s(e[0]);return A({},n,{clone(){let t=s(r());return x({},!0,{}),t}})};return A({},{target:t,host:e,padding:r||n,viewport:n,content:l||n,scrollOffsetElement:o,scrollEventElement:i,scrollbarHorizontal:c(a),scrollbarVertical:c(u)})},update:t=>j({},t),destroy:C.bind(0)};return(m.jt((t,e,r)=>{x(e,r,t)}),eF(c,L),l(k(u),t=>rT(u[t],0,L)),eX(m.Nt.it,o().cancel,!s&&t.cancel))?(C(!0),L):(m.qt(),_.qt(),g("initialized",[L]),m.jt((t,e,r)=>{let{vt:n,yt:l,gt:o,It:i,Lt:a,At:u,wt:s,Ot:c}=t;g("updated",[L,{updateHints:{sizeChanged:n,directionChanged:l,heightIntrinsicChanged:o,overflowEdgeChanged:i,overflowAmountChanged:a,overflowStyleChanged:u,contentMutation:s,hostMutation:c},changedOptions:e,force:r}])}),L.update(!0),L)}return d};rL.plugin=t=>{l(e$(t),t=>rT(t,rL))},rL.valid=t=>{let e=t&&t.elements,r=g(e)&&e();return x(r)&&!!eY(r.target)},rL.env=()=>{let{k:t,I:e,A:r,V:n,B:l,L:o,X:i,U:a,q:u,N:s,F:c,G:d}=ez();return A({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:r,rtlScrollBehavior:n,flexboxGlue:l,cssCustomProperties:o,staticDefaultInitialization:i,staticDefaultOptions:a,getDefaultInitialization:u,setDefaultInitialization:s,getDefaultOptions:c,setDefaultOptions:d})};let rM=()=>{if(typeof window>"u"){let t=()=>{};return[t,t]}let e,r,n=window,l="function"==typeof n.requestIdleCallback,o=n.requestAnimationFrame,i=n.cancelAnimationFrame,a=l?n.requestIdleCallback:o,u=l?n.cancelIdleCallback:i,s=()=>{u(e),i(r)};return[(t,n)=>{s(),e=a(l?()=>{s(),r=o(t)}:t,"object"==typeof n?n:{timeout:1500})},s]},rI=t=>{let{options:e,events:r,defer:l}=t||{},[o,i]=(0,n.useMemo)(rM,[]),a=(0,n.useRef)(null),u=(0,n.useRef)(l),s=(0,n.useRef)(e),c=(0,n.useRef)(r);return(0,n.useEffect)(()=>{u.current=l},[l]),(0,n.useEffect)(()=>{let{current:t}=a;s.current=e,rL.valid(t)&&t.options(e||{},!0)},[e]),(0,n.useEffect)(()=>{let{current:t}=a;c.current=r,rL.valid(t)&&t.on(r||{},!0)},[r]),(0,n.useEffect)(()=>()=>{var t;i(),null==(t=a.current)||t.destroy()},[]),(0,n.useMemo)(()=>[t=>{let e=a.current;if(rL.valid(e))return;let r=u.current,n=s.current||{},l=c.current||{},i=()=>a.current=rL(t,n,l);r?o(i,r):i()},()=>a.current],[])},rN=(t,e)=>{let{element:r="div",options:l,events:o,defer:i,children:a,...u}=t,s=(0,n.useRef)(null),c=(0,n.useRef)(null),[d,f]=rI({options:l,events:o,defer:i});return(0,n.useEffect)(()=>{let{current:t}=s,{current:e}=c;return t&&e&&d({target:t,elements:{viewport:e,content:e}}),()=>{var t;return null==(t=f())?void 0:t.destroy()}},[d,r]),(0,n.useImperativeHandle)(e,()=>({osInstance:f,getElement:()=>s.current}),[]),n.createElement(r,{"data-overlayscrollbars-initialize":"",ref:s,...u},n.createElement("div",{ref:c},a))},rz=(0,n.forwardRef)(rN)},1670:function(t,e,r){"use strict";r.d(e,{Zo:function(){return a},ah:function(){return o}});var n=r(7378);let l=n.createContext({});function o(t){let e=n.useContext(l);return n.useMemo(()=>"function"==typeof t?t(e):{...e,...t},[e,t])}let i={};function a({components:t,children:e,disableParentContext:r}){let a=o(t);return r&&(a=t||i),n.createElement(l.Provider,{value:a},e)}},9722:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},l=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),l.forEach(function(e){n(t,e,r[e])})}return t}r.d(e,{Z:function(){return l}})},169:function(t,e,r){"use strict";function n(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):(function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r.push.apply(r,n)}return r})(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}),t}r.d(e,{Z:function(){return n}})},1373:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,l=function(t,e){if(null==t)return{};var r,n,l={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(l[r]=t[r]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(l[r]=t[r])}return l}r.d(e,{Z:function(){return n}})}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],function(){return e(8936),e(5817)}),_N_E=t.O()}]);