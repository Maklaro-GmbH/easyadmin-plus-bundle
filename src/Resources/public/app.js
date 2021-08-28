/*! For license information please see app.js.LICENSE.txt */
(()=>{var e={695:function(e,t,n){e.exports=function(e,t,n){"use strict";function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=i(e),s=i(t),r=i(n);const a=1e3,l="transitionend",u=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const i=Number.parseFloat(t),o=Number.parseFloat(n);return i||o?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*a):0},c=e=>{e.dispatchEvent(new Event(l))},d=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),h=e=>d(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?s.default.findOne(e):null,f=e=>{"function"==typeof e&&e()},m=(e,t,n=!0)=>{if(!n)return void f(e);const i=5,o=u(t)+i;let s=!1;const r=({target:n})=>{n===t&&(s=!0,t.removeEventListener(l,r),f(e))};t.addEventListener(l,r),setTimeout((()=>{s||c(t)}),o)},p="5.0.2";class g{constructor(e){(e=h(e))&&(this._element=e,o.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){o.default.remove(this._element,this.constructor.DATA_KEY),r.default.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((e=>{this[e]=null}))}_queueCallback(e,t,n=!0){m(e,t,n)}static getInstance(e){return o.default.get(e,this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return p}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}return g}(n(493),n(737),n(286))},493:function(e){e.exports=function(){"use strict";const e=new Map;return{set(t,n,i){e.has(t)||e.set(t,new Map);const o=e.get(t);o.has(n)||0===o.size?o.set(n,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`)},get:(t,n)=>e.has(t)&&e.get(t).get(n)||null,remove(t,n){if(!e.has(t))return;const i=e.get(t);i.delete(n),0===i.size&&e.delete(t)}}}()},286:function(e){e.exports=function(){"use strict";const e=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},t=/[^.]*(?=\..*)\.|.*/,n=/\..*/,i=/::\d+$/,o={};let s=1;const r={mouseenter:"mouseover",mouseleave:"mouseout"},a=/^(mouseenter|mouseleave)/i,l=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function u(e,t){return t&&`${t}::${s++}`||e.uidEvent||s++}function c(e){const t=u(e);return e.uidEvent=t,o[t]=o[t]||{},o[t]}function d(e,t){return function n(i){return i.delegateTarget=e,n.oneOff&&y.off(e,i.type,t),t.apply(e,[i])}}function h(e,t,n){return function i(o){const s=e.querySelectorAll(t);for(let{target:r}=o;r&&r!==this;r=r.parentNode)for(let a=s.length;a--;)if(s[a]===r)return o.delegateTarget=r,i.oneOff&&y.off(e,o.type,t,n),n.apply(r,[o]);return null}}function f(e,t,n=null){const i=Object.keys(e);for(let o=0,s=i.length;o<s;o++){const s=e[i[o]];if(s.originalHandler===t&&s.delegationSelector===n)return s}return null}function m(e,t,n){const i="string"==typeof t,o=i?n:t;let s=b(e);return l.has(s)||(s=e),[i,o,s]}function p(e,n,i,o,s){if("string"!=typeof n||!e)return;if(i||(i=o,o=null),a.test(n)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};o?o=e(o):i=e(i)}const[r,l,p]=m(n,i,o),g=c(e),_=g[p]||(g[p]={}),b=f(_,l,r?i:null);if(b)return void(b.oneOff=b.oneOff&&s);const y=u(l,n.replace(t,"")),v=r?h(e,i,o):d(e,i);v.delegationSelector=r?i:null,v.originalHandler=l,v.oneOff=s,v.uidEvent=y,_[y]=v,e.addEventListener(p,v,r)}function g(e,t,n,i,o){const s=f(t[n],i,o);s&&(e.removeEventListener(n,s,Boolean(o)),delete t[n][s.uidEvent])}function _(e,t,n,i){const o=t[n]||{};Object.keys(o).forEach((s=>{if(s.includes(i)){const i=o[s];g(e,t,n,i.originalHandler,i.delegationSelector)}}))}function b(e){return e=e.replace(n,""),r[e]||e}const y={on(e,t,n,i){p(e,t,n,i,!1)},one(e,t,n,i){p(e,t,n,i,!0)},off(e,t,n,o){if("string"!=typeof t||!e)return;const[s,r,a]=m(t,n,o),l=a!==t,u=c(e),d=t.startsWith(".");if(void 0!==r){if(!u||!u[a])return;return void g(e,u,a,r,s?n:null)}d&&Object.keys(u).forEach((n=>{_(e,u,n,t.slice(1))}));const h=u[a]||{};Object.keys(h).forEach((n=>{const o=n.replace(i,"");if(!l||t.includes(o)){const t=h[n];g(e,u,a,t.originalHandler,t.delegationSelector)}}))},trigger(t,n,i){if("string"!=typeof n||!t)return null;const o=e(),s=b(n),r=n!==s,a=l.has(s);let u,c=!0,d=!0,h=!1,f=null;return r&&o&&(u=o.Event(n,i),o(t).trigger(u),c=!u.isPropagationStopped(),d=!u.isImmediatePropagationStopped(),h=u.isDefaultPrevented()),a?(f=document.createEvent("HTMLEvents"),f.initEvent(s,c,!0)):f=new CustomEvent(n,{bubbles:c,cancelable:!0}),void 0!==i&&Object.keys(i).forEach((e=>{Object.defineProperty(f,e,{get:()=>i[e]})})),h&&f.preventDefault(),d&&t.dispatchEvent(f),f.defaultPrevented&&void 0!==u&&u.preventDefault(),f}};return y}()},175:function(e){e.exports=function(){"use strict";function e(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function t(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}return{setDataAttribute(e,n,i){e.setAttribute(`data-bs-${t(n)}`,i)},removeDataAttribute(e,n){e.removeAttribute(`data-bs-${t(n)}`)},getDataAttributes(t){if(!t)return{};const n={};return Object.keys(t.dataset).filter((e=>e.startsWith("bs"))).forEach((i=>{let o=i.replace(/^bs/,"");o=o.charAt(0).toLowerCase()+o.slice(1,o.length),n[o]=e(t.dataset[i])})),n},getDataAttribute:(n,i)=>e(n.getAttribute(`data-bs-${t(i)}`)),offset(e){const t=e.getBoundingClientRect();return{top:t.top+document.body.scrollTop,left:t.left+document.body.scrollLeft}},position:e=>({top:e.offsetTop,left:e.offsetLeft})}}()},737:function(e){e.exports=function(){"use strict";const e=3;return{find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter((e=>e.matches(t))),parents(t,n){const i=[];let o=t.parentNode;for(;o&&o.nodeType===Node.ELEMENT_NODE&&o.nodeType!==e;)o.matches(n)&&i.push(o),o=o.parentNode;return i},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]}}}()},424:function(e,t,n){e.exports=function(e,t,n,i){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=o(e),r=o(t),a=o(n),l=o(i);const u=1e3,c="transitionend",d=e=>null==e?`${e}`:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),h=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t},f=e=>{const t=h(e);return t?document.querySelector(t):null},m=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const i=Number.parseFloat(t),o=Number.parseFloat(n);return i||o?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*u):0},p=e=>{e.dispatchEvent(new Event(c))},g=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),_=e=>g(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?s.default.findOne(e):null,b=(e,t,n)=>{Object.keys(n).forEach((i=>{const o=n[i],s=t[i],r=s&&g(s)?"element":d(s);if(!new RegExp(o).test(r))throw new TypeError(`${e.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${o}".`)}))},y=e=>!(!g(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),v=e=>e.offsetHeight,E=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},A=[],w=e=>{"loading"===document.readyState?(A.length||document.addEventListener("DOMContentLoaded",(()=>{A.forEach((e=>e()))})),A.push(e)):e()},k=()=>"rtl"===document.documentElement.dir,T=e=>{w((()=>{const t=E();if(t){const n=e.NAME,i=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=i,e.jQueryInterface)}}))},C=e=>{"function"==typeof e&&e()},O=(e,t,n=!0)=>{if(!n)return void C(e);const i=5,o=m(t)+i;let s=!1;const r=({target:n})=>{n===t&&(s=!0,t.removeEventListener(c,r),C(e))};t.addEventListener(c,r),setTimeout((()=>{s||p(t)}),o)},D=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",N=".sticky-top";class S{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",(t=>t+e)),this._setElementAttributes(D,"paddingRight",(t=>t+e)),this._setElementAttributes(N,"marginRight",(t=>t-e))}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const i=this.getWidth(),o=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+i)return;this._saveInitialAttribute(e,t);const o=window.getComputedStyle(e)[t];e.style[t]=`${n(Number.parseFloat(o))}px`};this._applyManipulationCallback(e,o)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(D,"paddingRight"),this._resetElementAttributes(N,"marginRight")}_saveInitialAttribute(e,t){const n=e.style[t];n&&a.default.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=a.default.getDataAttribute(e,t);void 0===n?e.style.removeProperty(t):(a.default.removeDataAttribute(e,t),e.style[t]=n)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){g(e)?t(e):s.default.find(e,this._element).forEach(t)}isOverflowing(){return this.getWidth()>0}}const j={isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},x={isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},$="backdrop",L="modal-backdrop",M="fade",B="show",q=`mousedown.bs.${$}`;class R{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&v(this._getElement()),this._getElement().classList.add(B),this._emulateAnimation((()=>{C(e)}))):C(e)}hide(e){this._config.isVisible?(this._getElement().classList.remove(B),this._emulateAnimation((()=>{this.dispose(),C(e)}))):C(e)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=L,this._config.isAnimated&&e.classList.add(M),this._element=e}return this._element}_getConfig(e){return(e={...j,..."object"==typeof e?e:{}}).rootElement=_(e.rootElement),b($,e,x),e}_append(){this._isAppended||(this._config.rootElement.appendChild(this._getElement()),r.default.on(this._getElement(),q,(()=>{C(this._config.clickCallback)})),this._isAppended=!0)}dispose(){this._isAppended&&(r.default.off(this._element,q),this._element.remove(),this._isAppended=!1)}_emulateAnimation(e){O(e,this._getElement(),this._config.isAnimated)}}const P="modal",F=".bs.modal",I="Escape",W={backdrop:!0,keyboard:!0,focus:!0},Y={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},z=`hide${F}`,H=`hidePrevented${F}`,V=`hidden${F}`,K=`show${F}`,Q=`shown${F}`,U=`focusin${F}`,Z=`resize${F}`,G=`click.dismiss${F}`,J=`keydown.dismiss${F}`,X=`mouseup.dismiss${F}`,ee=`mousedown.dismiss${F}`,te=`click${F}.data-api`,ne="modal-open",ie="fade",oe="show",se="modal-static",re=".modal-dialog",ae=".modal-body",le='[data-bs-toggle="modal"]',ue='[data-bs-dismiss="modal"]';class ce extends l.default{constructor(e,t){super(e),this._config=this._getConfig(t),this._dialog=s.default.findOne(re,this._element),this._backdrop=this._initializeBackDrop(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new S}static get Default(){return W}static get NAME(){return P}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||r.default.trigger(this._element,K,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(ne),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),r.default.on(this._element,G,ue,(e=>this.hide(e))),r.default.on(this._dialog,ee,(()=>{r.default.one(this._element,X,(e=>{e.target===this._element&&(this._ignoreBackdropClick=!0)}))})),this._showBackdrop((()=>this._showElement(e))))}hide(e){if(e&&["A","AREA"].includes(e.target.tagName)&&e.preventDefault(),!this._isShown||this._isTransitioning)return;if(r.default.trigger(this._element,z).defaultPrevented)return;this._isShown=!1;const t=this._isAnimated();t&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),r.default.off(document,U),this._element.classList.remove(oe),r.default.off(this._element,G),r.default.off(this._dialog,ee),this._queueCallback((()=>this._hideModal()),this._element,t)}dispose(){[window,this._dialog].forEach((e=>r.default.off(e,F))),this._backdrop.dispose(),super.dispose(),r.default.off(document,U)}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new R({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_getConfig(e){return e={...W,...a.default.getDataAttributes(this._element),..."object"==typeof e?e:{}},b(P,e,Y),e}_showElement(e){const t=this._isAnimated(),n=s.default.findOne(ae,this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),t&&v(this._element),this._element.classList.add(oe),this._config.focus&&this._enforceFocus();const i=()=>{this._config.focus&&this._element.focus(),this._isTransitioning=!1,r.default.trigger(this._element,Q,{relatedTarget:e})};this._queueCallback(i,this._dialog,t)}_enforceFocus(){r.default.off(document,U),r.default.on(document,U,(e=>{document===e.target||this._element===e.target||this._element.contains(e.target)||this._element.focus()}))}_setEscapeEvent(){this._isShown?r.default.on(this._element,J,(e=>{this._config.keyboard&&e.key===I?(e.preventDefault(),this.hide()):this._config.keyboard||e.key!==I||this._triggerBackdropTransition()})):r.default.off(this._element,J)}_setResizeEvent(){this._isShown?r.default.on(window,Z,(()=>this._adjustDialog())):r.default.off(window,Z)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(ne),this._resetAdjustments(),this._scrollBar.reset(),r.default.trigger(this._element,V)}))}_showBackdrop(e){r.default.on(this._element,G,(e=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:e.target===e.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())})),this._backdrop.show(e)}_isAnimated(){return this._element.classList.contains(ie)}_triggerBackdropTransition(){if(r.default.trigger(this._element,H).defaultPrevented)return;const{classList:e,scrollHeight:t,style:n}=this._element,i=t>document.documentElement.clientHeight;!i&&"hidden"===n.overflowY||e.contains(se)||(i||(n.overflowY="hidden"),e.add(se),this._queueCallback((()=>{e.remove(se),i||this._queueCallback((()=>{n.overflowY=""}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;(!n&&e&&!k()||n&&!e&&k())&&(this._element.style.paddingLeft=`${t}px`),(n&&!e&&!k()||!n&&e&&k())&&(this._element.style.paddingRight=`${t}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=ce.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}return r.default.on(document,te,le,(function(e){const t=f(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),r.default.one(t,K,(e=>{e.defaultPrevented||r.default.one(t,V,(()=>{y(this)&&this.focus()}))})),ce.getOrCreateInstance(t).toggle(this)})),T(ce),ce}(n(737),n(286),n(175),n(695))}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(424),t=n.n(e);function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,o,s;return n=e,(o=[{key:"create",value:function(e){e.addEventListener("click",(function(n){var i;n.preventDefault();var o=document.querySelector("#protung-easyadmin-plus-extension-modal-action-custom-confirmation-button"),s=document.querySelector("#protung-easyadmin-plus-extension-modal-action-custom-confirmation-title"),r=document.querySelector("#protung-easyadmin-plus-extension-modal-action-custom-confirmation-description"),a=e.getAttribute("data-protung-easyadmin-plus-extension-modal-confirm-title"),l=e.getAttribute("data-protung-easyadmin-plus-extension-modal-confirm-description");s.textContent=a,r.textContent=l,"BUTTON"===e.tagName?o.click((function(){e.closest("form").submit()})):o.setAttribute("href",e.getAttribute("href")),o.setAttribute("class","btn btn-"+(null!==(i=e.getAttribute("data-protung-easyadmin-plus-extension-modal-confirm-type"))&&void 0!==i?i:"primary")),new(t())(document.querySelector("#protung-easyadmin-plus-extension-modal-action-custom-confirmation"),{backdrop:!0,keyboard:!0}).show()}))}}])&&i(n.prototype,o),s&&i(n,s),e}();document.addEventListener("DOMContentLoaded",(function(){s.createConfirmationActionModal()}));var s={createConfirmationActionModal:function(){var e=new o;document.querySelectorAll("[data-protung-easyadmin-plus-extension-modal-confirm-trigger='1']").forEach((function(t){e.create(t)}))}}})()})();