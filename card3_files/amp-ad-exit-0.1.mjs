;
(self.AMP=self.AMP||[]).push({m:1,v:"2310061803000",n:"amp-ad-exit",ev:"0.1",l:!0,f:function(t,n){(()=>{var n,{isArray:e}=Array,{hasOwnProperty:i,toString:r}=Object.prototype;function s(t){const n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;const{message:e,stack:i}=t,r=new Error(e);for(const n in t)r[n]=t[n];return r.stack=i,r}function o(t){let n=null,e="";for(const t of arguments)t instanceof Error&&!n?n=s(t):(e&&(e+=" "),e+=t);return n?e&&(n.message=e+": "+n.message):n=new Error(e),n}function c(t){var n,e;null===(n=(e=self).__AMP_REPORT_ERROR)||void 0===n||n.call(e,t)}function u(t){return JSON.parse(t)}var l=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function a(t,n=""){try{return decodeURIComponent(t)}catch(t){return n}}function f(t){const{location:n}=t||self;return function(t){const n=function(t){const n=Object.create(null);return n}();if(!t)return n;let e;for(;e=l.exec(t);){const t=a(e[1],e[1]),i=e[2]?a(e[2].replace(/\+/g," "),e[2]):"";n[t]=i}return n}(n.originalHash||n.hash)}var h="";function p(t){var n;return h||(h=(null===(n=t.AMP_CONFIG)||void 0===n?void 0:n.v)||"012310061803000"),h}function v(t,n){const e=n||f(t);return["1","actions","amp","amp4ads","amp4email"].includes(e.development)||!!t.AMP_DEV_MODE}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var d=self.__AMP_LOG;function m(t,n){throw new Error("failed to call initLogConstructor")}function b(t){return d.user||(d.user=g()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(d.user.win,t)?d.userForEmbed||(d.userForEmbed=g()):d.user}function g(t){return m()}function y(){return d.dev||(d.dev=m())}function _(t,n,e,i,r,s,o,c,u,l,a){return t}function A(t,n,e,i,r,s,o,c,u,l,a){return b().assert(t,n,e,i,r,s,o,c,u,l,a)}function I(t,n,e,i){const r=j(t),s=S(r);!function(t,n,e,i,r,s){const o=P(t);let c=o[e];c||(c=o[e]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),c.ctor||(c.ctor=i,c.context=n,c.sharedInstance=!1,c.resolve&&E(t,e))}(s,r,n,e),i&&E(s,n)}function R(t,n,e){!function(t,n,e){const i=P(t),r=i[n];r?r.reject&&r.reject(e):(i[n]=x(),i[n].reject(e))}(S(j(t)),n,e)}function T(t,n){return function(t,n){const e=function(t,n){const e=P(t)[n];return e?e.promise?e.promise:(E(t,n),e.promise=Promise.resolve(e.obj)):null}(t,n);if(e)return e;const i=P(t);return i[n]=x(),i[n].promise}(S(t),n)}function O(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}function j(t){return t.nodeType?(e=t,n=(e.ownerDocument||e).defaultView,function(t,n){return E(t=O(t),"ampdoc")}(n)).getAmpDoc(t):t;var n,e}function S(t){const n=j(t);return n.isSingleDoc()?n.win:n}function E(t,n){_(w(t,n));const e=P(t)[n];return e.obj||(_(e.ctor),_(e.context),e.obj=new e.ctor(e.context),_(e.obj),e.context=null,e.resolve&&e.resolve(e.obj)),e.obj}function P(t){let n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}function w(t,n){const e=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!e||!e.ctor)}function x(){const t=new class{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}},{promise:n,reject:e,resolve:i}=t;return n.catch((()=>{})),{obj:null,promise:n,resolve:i,reject:e,context:null,ctor:null}}var C="host-visibility",D="host-fullscreen",F="host-exit",M=class{static isAvailable(t){return!!(n=t,j(n)).getHeadNode().querySelector("script[host-service]");var n}static visibilityForDoc(t){return T(t,C)}static installVisibilityServiceForDoc(t,n){I(t,C,n,!0)}static rejectVisibilityServiceForDoc(t,n){R(t,C,n)}static fullscreenForDoc(t){return T(t,D)}static installFullscreenServiceForDoc(t,n){I(t,D,n,!0)}static rejectFullscreenServiceForDoc(t,n){R(t,D,n)}static exitForDoc(t){return T(t,F)}static installExitServiceForDoc(t,n){I(t,F,n,!0)}static rejectExitServiceForDoc(t,n){R(t,F,n)}},L="clickDelay",N="clickLocation",V="inactiveElement",U=class{constructor(t,n){this.name=t,this.type=n}filter(t){}onLayoutMeasure(){}};function $(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function k(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function G(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?k(Object(e),!0).forEach((function(n){$(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):k(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var B={"bg":"https://tpc.googlesyndication.com/b4a/b4a-runner.html","moat":"https://z.moatads.com/ampanalytics093284/iframe.html"},K=(G(G({},B),{},{"bg":"https://tpc.googlesyndication.com/b4a/experimental/b4a-runner.html"}),B);function J(t,n,e){if(A("string"==typeof n.finalUrl,"finalUrl of target '%s' must be a string",t),n.filters&&n.filters.forEach((t=>{A(e.filters[t],"filter '%s' not defined",t)})),n.vars){const t=/^_[a-zA-Z0-9_-]+$/;for(const e in n.vars)A(t.test(e),"'%s' must match the pattern '%s'",e,t)}}function z(t){return b().assertString(K[t],`Unknown or invalid vendor ${t}, note that vendor must use transport: iframe`)}var X=class extends U{constructor(t,n,e){super(t,n.type),A(n.type==L&&"number"==typeof n.delay&&n.delay>0,"Invalid ClickDelay spec"),this.spec=n,this.intervalStart=Date.now(),n.startTimingEvent&&e.performance&&e.performance.timing&&(null==e.performance.timing[n.startTimingEvent]||(this.intervalStart=e.performance.timing[n.startTimingEvent]))}filter(){return Date.now()-this.intervalStart>=this.spec.delay}};function Y(t,n){return{type:L,delay:t,startTimingEvent:n}}var H,Z=class extends U{constructor(t,n,e){super(t,n.type),A(function(t){return!(t.type!=N||void 0!==t.left&&"number"!=typeof t.left||void 0!==t.right&&"number"!=typeof t.right||void 0!==t.top&&"number"!=typeof t.top||void 0!==t.bottom&&"number"!=typeof t.bottom||void 0!==t.relativeTo&&"string"!=typeof t.relativeTo)}(n),"Invaid ClickLocation spec"),this.tI=n.left||0,this.nI=n.right||0,this.eI=n.top||0,this.iI=n.bottom||0,this.rI=n.relativeTo,this.sI=e,this.oI={top:0,right:0,bottom:0,left:0}}filter(t){return t.clientX>=this.oI.left&&t.clientX<=this.oI.right&&t.clientY>=this.oI.top&&t.clientY<=this.oI.bottom}onLayoutMeasure(){this.sI.getVsync().measure((()=>{const{win:t}=this.sI;if(this.rI){const n=t.document.querySelector(this.rI);A(n,`relativeTo element ${this.rI} not found.`);const e=n.getBoundingClientRect();this.oI.left=e.left,this.oI.top=e.top,this.oI.bottom=e.bottom,this.oI.right=e.right}else this.oI.left=0,this.oI.top=0,this.oI.bottom=t.innerHeight,this.oI.right=t.innerWidth;this.oI.left+=this.tI,this.oI.top+=this.eI,this.oI.right-=this.nI,this.oI.bottom-=this.iI}))}},q=class extends U{constructor(t,n){super(t,n.type),A(function(t){return t.type==V&&"string"==typeof t.selector}(n),"Invalid InactiveElementspec"),this.cI=n.selector}filter(t){return n=t.target,e=this.cI,!n.matches(e);var n,e}};function Q(t,n,e){switch(n.type){case L:return new X(t,n,e.win);case N:return new Z(t,n,e);case V:return new q(t,n);default:return}}function W(t,n,e,i){let r;try{r=t.open(n,e,i)}catch(t){y().error("DOM","Failed to open url on target: ",e,t)}var s,o;return!r&&"_top"!=e&&("number"!=typeof o&&(o=0),o+"noopener".length>(s=i||"").length||-1===s.indexOf("noopener",o))&&(r=t.open(n,"_top")),r}function tt(t,n){return H||(H=self.document.createElement("a")),function(t,n,e){return t.href="",new URL(n,t.href)}(H,t)}var nt="amp-ad-exit",et=class extends t.BaseElement{constructor(t){super(t),this.vi={},this.uI={},this.lI=[],this.aI={beacon:!0,image:!0},this.fI={},this.registerAction("exit",this.exit.bind(this)),this.registerAction("setVariable",this.setVariable.bind(this),1),this.hI={},this.my=null,this.pI=null,this.vI={},this.dI=this.detectAttributionReportingSupport()}exit(t){const{args:n}=t;let e,{event:i}=t;A("variable"in n!="target"in n,"One and only one of 'target' and 'variable' must be specified"),"variable"in n?(e=this.uI[n.variable],e||(e=n.default),A(e,`Variable target not found, variable:'${n.variable}', default:'${n.default}'`),delete n.default):e=n.target;const r=this.vi[e];if(A(r,`Exit target not found: '${e}'`),A(i,"Unexpected null event"),i.preventDefault(),!this.mI(this.lI,i)||!this.mI(r.filters,i))return;const s=this.bI(n,i,r);r.trackingUrls&&r.trackingUrls.map(s).forEach((t=>this.gI(t)));const o=s(r.finalUrl);if(M.isAvailable(this.getAmpDoc()))M.exitForDoc(this.getAmpDoc()).then((t=>t.openUrl(o))).catch((t=>{t.fallback&&W(this.win,o,"_blank")}));else{const t=r.behaviors&&r.behaviors.clickTarget&&"_top"==r.behaviors.clickTarget?"_top":"_blank",n=s(r.windowFeatures||"");W(this.win,o,t,n)}}setVariable(t){const{args:n}=t;A(this.vi[n.target],`Exit target not found: '${n.target}'`),this.uI[n.name]=n.target}bI(t,n,e){const i={"ATTRIBUTION_REPORTING_STATUS":()=>function(t,n){var e,i,r;return null!=n&&null!==(e=n.behaviors)&&void 0!==e&&e.browserAdConversion&&t?6:null!=n&&null!==(i=n.behaviors)&&void 0!==i&&null!==(r=i.browserAdConversion)&&void 0!==r&&r.attributionsrc?5:4}(this.dI,e),"CLICK_X":()=>n.clientX,"CLICK_Y":()=>n.clientY},r=function(t,n){const e=S(j(t));return w(e,n)?E(e,n):null}(this.element,"url-replace"),s={"ATTRIBUTION_REPORTING_STATUS":!0,"CLICK_X":!0,"CLICK_Y":!0,"RANDOM":!0,"UACH":!0};if(e.vars)for(const n in e.vars){if("_"!=n[0])continue;const o=e.vars[n];o&&(i[n]=()=>{if(o.iframeTransportSignal){const t=r.expandStringSync(o.iframeTransportSignal,{"IFRAME_TRANSPORT_SIGNAL":(t,n)=>{if(!t||!n)return"";const e=this.hI[t];return e&&n in e?e[n]:void 0}});if(o.iframeTransportSignal==`IFRAME_TRANSPORT_SIGNAL${t}`)y().error(nt,"Invalid IFRAME_TRANSPORT_SIGNAL format:"+t+" (perhaps there is a space after a comma?)");else if(""!=t)return t}return n in t?t[n]:o.defaultValue},s[n]=!0)}return t=>r.expandUrlSync(t,i,s)}gI(t){this.aI.beacon&&this.win.navigator.sendBeacon&&this.win.navigator.sendBeacon(t,"")||this.aI.image&&(this.win.document.createElement("img").src=t)}mI(t,n){return t.every((t=>t.filter(n)))}buildCallback(){this.element.setAttribute("aria-hidden","true"),this.lI.push(Q("minDelay",Y(1e3),this)),this.lI.push(Q("carouselBtns",{type:V,selector:".amp-carousel-button"},this));const{children:t}=this.element;A(1==t.length,"The tag should contain exactly one <script> child.");const n=t[0];var e,i,s;A("SCRIPT"==(e=n).tagName&&"APPLICATION/JSON"==(null===(i=e.getAttribute("type"))||void 0===i?void 0:i.toUpperCase()),'The amp-ad-exit config should be inside a <script> tag with type="application/json"');try{const t=function(t){return A("object"==typeof t),t.filters?function(t){const n=[L,N,V];for(const e in t)A("object"==typeof t[e],"Filter specification '%s' is malformed",e),A(-1!=n.indexOf(t[e].type),"Supported filters: "+n.join(", "))}(t.filters):t.filters={},t.transport?function(t){for(const n in t)A("beacon"==n||"image"==n,`Unknown transport option: '${n}'`),A("boolean"==typeof t[n])}(t.transport):t.transport={},function(t,n){A("object"==typeof t,"'targets' must be an object");for(const e in t)J(e,t[e],n)}(t.targets,t),t}(u(n.textContent));let e;s=t.options,"[object Object]"===r.call(s)&&"string"==typeof t.options.startTimingEvent&&(e=t.options.startTimingEvent,this.lI.splice(0,1,_(Q("minDelay",Y(1e3,t.options.startTimingEvent),this))));for(const n in t.filters){const i=t.filters[n];i.type==L&&(i.startTimingEvent=i.startTimingEvent||e),this.fI[n]=Q(n,i,this)}for(const n in t.targets){var o;const e=t.targets[n];var c;this.vi[n]={finalUrl:e.finalUrl,vars:e.vars||{},filters:(e.filters||[]).map((t=>this.fI[t])).filter(Boolean),behaviors:e.behaviors||{}},this.dI&&null!=e&&null!==(o=e.behaviors)&&void 0!==o&&o.browserAdConversion?this.vi[n].windowFeatures=this.yI(null==e||null===(c=e.behaviors)||void 0===c?void 0:c.browserAdConversion):this.vi[n].trackingUrls=e.trackingUrls||[];for(const t in e.vars){if(!e.vars[t].iframeTransportSignal)continue;const n=e.vars[t].iframeTransportSignal.match(/IFRAME_TRANSPORT_SIGNAL\(([^,]+)/);if(!n||n.length<2)continue;const i=n[1],{origin:r}=tt(z(i));this.vI[r]=this.vI[r]||i}}this.aI.beacon=!1!==t.transport.beacon,this.aI.image=!1!==t.transport.image}catch(t){throw this.user().error(nt,"Invalid JSON config",t),t}this._I()}detectAttributionReportingSupport(){return null===(t=this.win.document.featurePolicy)||void 0===t?void 0:t.allowedFeatures().includes("attribution-reporting");var t}yI(t){if(!t||!Object.keys(t))return;const n=["noopener"];for(const e of Object.keys(t)){const i=encodeURIComponent(t[e]);n.push(`${e.toLowerCase()}=${i}`)}return n.join(",")}AI(){return function(t,n){try{const e=function(t,n){const e=(t.ownerDocument||t).defaultView,i=n||O(e);if(e&&e!=i&&O(e)==i)try{return e.frameElement}catch(t){}return null}(t,n).parentElement;if("AMP-AD"==e.nodeName)return String(e.getResourceId())}catch(t){}return null}(this.element,O(this.win))}resumeCallback(){this._I()}unlayoutCallback(){return this.my&&(this.my(),this.my=null),super.unlayoutCallback()}_I(){"inabox"!=function(t){const n=self;return n.__AMP_MODE?n.__AMP_MODE:n.__AMP_MODE=function(t){return{localDev:!1,development:v(t,f(t)),esm:!0,test:!1,rtvVersion:p(t),ssrReady:!1}}(n)}().runtime&&(this.pI=this.pI||this.AI(),this.pI&&(_(!this.my),this.my=function(t,e,i,r){let s=t,o=i,c=t=>{try{return o(t)}catch(t){var n,e;throw null===(n=(e=self).__AMP_REPORT_ERROR)||void 0===n||n.call(e,t),t}};const u=function(){if(void 0!==n)return n;n=!1;try{const t={get capture(){return n=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return n}();return s.addEventListener(e,c,!!u&&r),()=>{null==s||s.removeEventListener(e,c,!!u&&r),o=null,s=null,c=null}}(this.getAmpDoc().win,"message",(t=>{if(!this.vI[t.origin])return;const n=function(t){if(!function(t){return"string"==typeof t&&t.startsWith("amp-")&&-1!=t.indexOf("{")}(t))return null;const n=t.indexOf("{");return function(t,n){try{return u(t)}catch(t){return null==n||n(t),null}}(t.substr(n),(n=>{!function(t){const n=o.apply(null,arguments);setTimeout((()=>{throw c(n),n}))}(new Error(`MESSAGING: Failed to parse message: ${t}\n${n.message}`))}))}(function(t){return t.data}(t));n&&"iframe-transport-response"==n.type&&(this.II(n,t.origin),n.creativeId==this.pI&&(this.hI[n.vendor]=n.message))}),void 0)))}II(t,n){A(t.message,"Received empty response from 3p analytics frame"),A(t.creativeId,"Received malformed message from 3p analytics frame: creativeId missing"),A(t.vendor,"Received malformed message from 3p analytics frame: vendor missing");const e=tt(z(t.vendor));A(e&&e.origin==n,`Invalid origin for vendor ${t.vendor}: ${n}`)}isLayoutSupported(t){return!0}onLayoutMeasure(){for(const t in this.fI)this.fI[t].onLayoutMeasure()}};t.registerElement(nt,et)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-ad-exit-0.1.mjs.map