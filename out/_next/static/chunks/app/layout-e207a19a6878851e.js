(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{33651:function(e,t,n){Promise.resolve().then(n.t.bind(n,89230,23)),Promise.resolve().then(n.t.bind(n,74534,23)),Promise.resolve().then(n.t.bind(n,77106,23)),Promise.resolve().then(n.bind(n,91845)),Promise.resolve().then(n.bind(n,37388)),Promise.resolve().then(n.bind(n,26016)),Promise.resolve().then(n.bind(n,1676)),Promise.resolve().then(n.t.bind(n,85935,23))},26016:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=n(57437),a=n(2265);t.default=function(e){let{html:t,height:n=null,width:o=null,children:i,dataNtpc:l=""}=e;return(0,a.useEffect)(()=>{l&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(l)}})},[l]),(0,r.jsxs)(r.Fragment,{children:[i,t?(0,r.jsx)("div",{style:{height:null!=n?"".concat(n,"px"):"auto",width:null!=o?"".concat(o,"px"):"auto"},"data-ntpc":l,dangerouslySetInnerHTML:{__html:t}}):null]})}},91845:function(e,t,n){"use strict";var r;let a;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let o=n(57437),i=n(2265),l=(r=n(54983))&&r.__esModule?r:{default:r};t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:n="dataLayer"}=e;return void 0===a&&(a=n),(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(n,"'] = window['").concat(n,"'] || [];\n          function gtag(){window['").concat(n,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"');")}}),(0,o.jsx)(l.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===a){console.warn("@next/third-parties: GA has not been initialized");return}window[a]?window[a].push(...t):console.warn("@next/third-parties: GA dataLayer ".concat(a," does not exist"))}},37388:function(e,t,n){"use strict";var r;let a;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let o=n(57437),i=n(2265),l=(r=n(54983))&&r.__esModule?r:{default:r};t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:n="dataLayer",auth:r,preview:u,dataLayer:s}=e;void 0===a&&(a=n);let c="dataLayer"!==n?"$l=".concat(n):"";return(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(s?"w[l].push(".concat(JSON.stringify(s),")"):"","\n      })(window,'").concat(n,"');")}}),(0,o.jsx)(l.default,{id:"_next-gtm","data-ntpc":"GTM",src:"https://www.googletagmanager.com/gtm.js?id=".concat(t).concat(c).concat(r?"&gtm_auth=".concat(r):"").concat(u?"&gtm_preview=".concat(u,"&gtm_cookies_win=x"):"")})]})},t.sendGTMEvent=e=>{if(void 0===a){console.warn("@next/third-parties: GTM has not been initialized");return}window[a]?window[a].push(e):console.warn("@next/third-parties: GTM dataLayer ".concat(a," does not exist"))}},54983:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a.a}});var r=n(85935),a=n.n(r),o={};for(var i in r)"default"!==i&&(o[i]=(function(e){return r[e]}).bind(0,i));n.d(t,o)},13313:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return o},default:function(){return i}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function a(e){let{type:t,props:n}=e,a=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?a[o]=!!n[e]:a.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:i}=n;return i?a.innerHTML=i.__html||"":o&&(a.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),a}function o(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function i(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,a="";if(r){let{children:e}=r.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),i=Number(r.content),l=[];for(let t=0,n=r.previousElementSibling;t<i;t++,n=(null==n?void 0:n.previousElementSibling)||null){var u;(null==n?void 0:null==(u=n.tagName)?void 0:u.toLowerCase())===e&&l.push(n)}let s=t.map(a).filter(e=>{for(let t=0,n=l.length;t<n;t++)if(o(l[t],e))return l.splice(t,1),!1;return!0});l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),s.forEach(e=>n.insertBefore(e,r)),r.content=(i-l.length+s.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},52185:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},85935:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return g},initScriptLoader:function(){return y},default:function(){return _}});let r=n(86921),a=n(91884),o=n(57437),i=r._(n(54887)),l=a._(n(2265)),u=n(27484),s=n(13313),c=n(52185),d=new Map,f=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],m=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},h=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:o,children:i="",strategy:l="afterInteractive",onError:u,stylesheets:c}=e,h=n||t;if(h&&f.has(h))return;if(d.has(t)){f.add(h),d.get(t).then(r,u);return}let g=()=>{a&&a(),f.add(h)},y=document.createElement("script"),w=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),r&&r.call(this,t),g()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(o?(y.innerHTML=o.__html||"",g()):i?(y.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",g()):t&&(y.src=t,d.set(t,w)),Object.entries(e))){if(void 0===r||p.includes(n))continue;let e=s.DOMAttributeNames[n]||n.toLowerCase();y.setAttribute(e,r)}"worker"===l&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",l),c&&m(c),document.body.appendChild(y)};function g(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>h(e))}):h(e)}function y(e){e.forEach(g),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function w(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:s="afterInteractive",onError:d,stylesheets:p,...m}=e,{updateScripts:g,scripts:y,getIsSsr:w,appDir:_,nonce:v}=(0,l.useContext)(u.HeadManagerContext),b=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||n;b.current||(a&&e&&f.has(e)&&a(),b.current=!0)},[a,t,n]);let E=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{!E.current&&("afterInteractive"===s?h(e):"lazyOnload"===s&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>h(e))})),E.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(g?(y[s]=(y[s]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:d,...m}]),g(y)):w&&w()?f.add(t||n):w&&!w()&&h(e)),_){if(p&&p.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===s)return n?(i.default.preload(n,m.integrity?{as:"script",integrity:m.integrity}:{as:"script"}),(0,o.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...m,id:t}])+")"}})):(m.dangerouslySetInnerHTML&&(m.children=m.dangerouslySetInnerHTML.__html,delete m.dangerouslySetInnerHTML),(0,o.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...m,id:t}])+")"}}));"afterInteractive"===s&&n&&i.default.preload(n,m.integrity?{as:"script",integrity:m.integrity}:{as:"script"})}return null}Object.defineProperty(w,"__nextScript",{value:!0});let _=w;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},89230:function(){},77106:function(){},74534:function(){},1676:function(e,t,n){"use strict";n.r(t),n.d(t,{SpeedInsights:function(){return p}});var r=n(2265),a=n(15313),o=()=>{window.si||(window.si=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];(window.siq=window.siq||[]).push(t)})};function i(){return false}var l="https://va.vercel-scripts.com/v1/speed-insights",u="".concat(l,"/script.js"),s="".concat(l,"/script.debug.js");function c(e){let t=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(t.current)e.route&&t.current(e.route);else{let n=function(e){var t;if(!("undefined"!=typeof window)||null===e.route)return null;o();let n=!!e.dsn,r=e.scriptSrc||(n?u:"/_vercel/speed-insights/script.js");if(document.head.querySelector('script[src*="'.concat(r,'"]')))return null;e.beforeSend&&(null==(t=window.si)||t.call(window,"beforeSend",e.beforeSend));let a=document.createElement("script");return a.src=r,a.defer=!0,a.dataset.sdkn="@vercel/speed-insights"+(e.framework?"/".concat(e.framework):""),a.dataset.sdkv="1.0.2",e.sampleRate&&(a.dataset.sampleRate=e.sampleRate.toString()),e.route&&(a.dataset.route=e.route),e.endpoint&&(a.dataset.endpoint=e.endpoint),e.dsn&&(a.dataset.dsn=e.dsn),a.onerror=()=>{console.log("[Vercel Speed Insights] Failed to load script from ".concat(r,". Please check if any content blockers are enabled and try again."))},document.head.appendChild(a),{setRoute:e=>{a.dataset.route=null!=e?e:void 0}}}({framework:e.framework||"react",...e});n&&(t.current=n.setRoute)}},[e.route]),null}var d=()=>{let e=(0,a.useParams)(),t=(0,a.useSearchParams)();return function(e,t){if(!e||!t)return e;let n=e;try{for(let[e,r]of Object.entries(t)){let t=Array.isArray(r),a=t?r.join("/"):r,o=t?"...".concat(e):e,i=new RegExp("/".concat(a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"(?=[/?#]|$)"));i.test(n)&&(n=n.replace(i,"/[".concat(o,"]")))}return n}catch(t){return e}}((0,a.usePathname)(),(0,r.useMemo)(()=>e?0!==Object.keys(e).length?e:{...Object.fromEntries(t.entries())}:null,[e,t]))};function f(e){let t=d();return r.createElement(c,{route:t,...e,framework:"next"})}function p(e){return r.createElement(r.Suspense,{fallback:null},r.createElement(f,{...e}))}}},function(e){e.O(0,[906,744],function(){return e(e.s=33651)}),_N_E=e.O()}]);