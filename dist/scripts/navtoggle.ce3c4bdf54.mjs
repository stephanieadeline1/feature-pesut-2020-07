(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{11:function(t,e,i){i("NFw3"),t.exports=i("xwbs")},NFw3:function(t,e,i){"use strict";i("Wr5T")},Wr5T:function(t,e){!function(t,e){"use strict";if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)"isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var i=[];s.prototype.THROTTLE_TIMEOUT=100,s.prototype.POLL_INTERVAL=null,s.prototype.USE_MUTATION_OBSERVER=!0,s.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},s.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},s.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},s.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},s.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,i){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==i[e-1]}))},s.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},s.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(o(t,"resize",this._checkForIntersections,!0),o(e,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},s.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,r(t,"resize",this._checkForIntersections,!0),r(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},s.prototype._checkForIntersections=function(){var e=this._rootIsInDom(),i=e?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(s){var o=s.element,r=c(o),a=this._rootContainsTarget(o),l=s.entry,h=e&&a&&this._computeTargetAndRootIntersection(o,i),d=s.entry=new n({time:t.performance&&performance.now&&performance.now(),target:o,boundingClientRect:r,rootBounds:i,intersectionRect:h});l?e&&a?this._hasCrossedThreshold(l,d)&&this._queuedEntries.push(d):l&&l.isIntersecting&&this._queuedEntries.push(d):this._queuedEntries.push(d)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},s.prototype._computeTargetAndRootIntersection=function(i,n){if("none"!=t.getComputedStyle(i).display){for(var s,o,r,a,h,d,u,m,v=c(i),p=l(i),g=!1;!g;){var f=null,k=1==p.nodeType?t.getComputedStyle(p):{};if("none"==k.display)return;if(p==this.root||p==e?(g=!0,f=n):p!=e.body&&p!=e.documentElement&&"visible"!=k.overflow&&(f=c(p)),f&&(s=f,o=v,r=void 0,a=void 0,h=void 0,d=void 0,u=void 0,m=void 0,r=Math.max(s.top,o.top),a=Math.min(s.bottom,o.bottom),h=Math.max(s.left,o.left),d=Math.min(s.right,o.right),m=a-r,!(v=(u=d-h)>=0&&m>=0&&{top:r,bottom:a,left:h,right:d,width:u,height:m})))break;p=l(p)}return v}},s.prototype._getRootRect=function(){var t;if(this.root)t=c(this.root);else{var i=e.documentElement,n=e.body;t={top:0,left:0,right:i.clientWidth||n.clientWidth,width:i.clientWidth||n.clientWidth,bottom:i.clientHeight||n.clientHeight,height:i.clientHeight||n.clientHeight}}return this._expandRectByRootMargin(t)},s.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,i){return"px"==e.unit?e.value:e.value*(i%2?t.width:t.height)/100})),i={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return i.width=i.right-i.left,i.height=i.bottom-i.top,i},s.prototype._hasCrossedThreshold=function(t,e){var i=t&&t.isIntersecting?t.intersectionRatio||0:-1,n=e.isIntersecting?e.intersectionRatio||0:-1;if(i!==n)for(var s=0;s<this.thresholds.length;s++){var o=this.thresholds[s];if(o==i||o==n||o<i!=o<n)return!0}},s.prototype._rootIsInDom=function(){return!this.root||a(e,this.root)},s.prototype._rootContainsTarget=function(t){return a(this.root||e,t)},s.prototype._registerInstance=function(){i.indexOf(this)<0&&i.push(this)},s.prototype._unregisterInstance=function(){var t=i.indexOf(this);-1!=t&&i.splice(t,1)},t.IntersectionObserver=s,t.IntersectionObserverEntry=n}function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,i=e.width*e.height,n=this.intersectionRect,s=n.width*n.height;this.intersectionRatio=i?Number((s/i).toFixed(4)):this.isIntersecting?1:0}function s(t,e){var i,n,s,o=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(o.root&&1!=o.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(i=this._checkForIntersections.bind(this),n=this.THROTTLE_TIMEOUT,s=null,function(){s||(s=setTimeout((function(){i(),s=null}),n))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(o.rootMargin),this.thresholds=this._initThresholds(o.threshold),this.root=o.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" ")}function o(t,e,i,n){"function"==typeof t.addEventListener?t.addEventListener(e,i,n||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,i)}function r(t,e,i,n){"function"==typeof t.removeEventListener?t.removeEventListener(e,i,n||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,i)}function c(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function a(t,e){for(var i=e;i;){if(i==t)return!0;i=l(i)}return!1}function l(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}}(window,document)},xwbs:function(t,e){var i=document.getElementById("nav-bpp"),n=document.getElementById("nav-mahakam"),s=document.getElementById("section-bpp"),o=document.getElementById("section-mahakam"),r=document.getElementById("nav-habitat"),c=document.getElementById("bpp-back"),a=document.getElementById("mahakam-back"),l=document.getElementById("btn-to-ikn"),h=document.getElementById("btn-to-minyak");l.onclick=function(){u.classList.remove("active"),d.classList.remove("active"),u.classList.add("active"),v.classList.remove("unclicked","clicked"),m.classList.remove("unclicked","clicked"),m.classList.add("unclicked"),v.classList.add("clicked")},h.onclick=function(){d.classList.remove("active"),u.classList.remove("active"),d.classList.add("active"),v.classList.remove("unclicked","clicked"),m.classList.remove("unclicked","clicked"),v.classList.add("unclicked"),m.classList.add("clicked")},a.onclick=function(){i.classList.remove("chosen"),n.classList.remove("chosen"),i.classList.add("chosen"),o.classList.remove("unclicked","clicked"),s.classList.remove("unclicked","clicked"),o.classList.add("unclicked"),s.classList.add("clicked")},c.onclick=function(){n.classList.remove("chosen"),i.classList.remove("chosen"),n.classList.add("chosen"),o.classList.remove("unclicked","clicked"),s.classList.remove("unclicked","clicked"),s.classList.add("unclicked"),o.classList.add("clicked")},i.onclick=function(){this.classList.remove("chosen"),n.classList.remove("chosen"),this.classList.add("chosen"),r.classList.remove("nav-block"),r.classList.add("nav-gradient"),o.classList.remove("unclicked","clicked"),s.classList.remove("unclicked","clicked"),o.classList.add("unclicked"),s.classList.add("clicked")},n.onclick=function(){this.classList.remove("chosen"),i.classList.remove("chosen"),this.classList.add("chosen"),r.classList.remove("nav-block"),r.classList.add("nav-gradient"),o.classList.remove("unclicked","clicked"),s.classList.remove("unclicked","clicked"),s.classList.add("unclicked"),o.classList.add("clicked")};var d=document.getElementById("nav-minyak"),u=document.getElementById("nav-ikn"),m=document.getElementById("minyak"),v=document.getElementById("ikn");d.onclick=function(){this.classList.remove("active"),u.classList.remove("active"),this.classList.add("active"),v.classList.remove("unclicked","clicked"),m.classList.remove("unclicked","clicked"),v.classList.add("unclicked"),m.classList.add("clicked")},u.onclick=function(){this.classList.remove("active"),d.classList.remove("active"),this.classList.add("active"),v.classList.remove("unclicked","clicked"),m.classList.remove("unclicked","clicked"),m.classList.add("unclicked"),v.classList.add("clicked")}}},[[11,0]]]);
//# sourceMappingURL=navtoggle.ce3c4bdf54.mjs.map