(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"6kx2":function(t,e,n){"use strict";n.r(e);var i=n("VphZ"),s=(n("agSX"),n("LvDl")),o=n.n(s),r=i.d("#map-ikn");function a(){r.html("");r.node().offsetWidth;mapboxgl.accessToken="pk.eyJ1Ijoic3RlcGhhZGVsaW5lIiwiYSI6ImNrY2U4a3Q0cDA1dXUzN281ZzRuanB0MmIifQ.KshV869EVdqe2C-Ifyb9qg";new mapboxgl.Map({container:"map-ikn",style:"mapbox://styles/stephadeline/ckd62y1zx153h1imteovy09wa/draft",center:[116.884909,-.9],zoom:7.5})}a(),window.addEventListener("resize",o.a.debounce(a,200))},9:function(t,e,n){n("lbQ4"),t.exports=n("6kx2")},bWX9:function(t,e){
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
"document"in self&&((!("classList"in document.createElement("_"))||document.createElementNS&&!("classList"in document.createElementNS("http://www.w3.org/2000/svg","g")))&&function(t){"use strict";if("Element"in t){var e=t.Element.prototype,n=Object,i=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},s=Array.prototype.indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1},o=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},r=function(t,e){if(""===e)throw new o("SYNTAX_ERR","The token must not be empty.");if(/\s/.test(e))throw new o("INVALID_CHARACTER_ERR","The token must not contain space characters.");return s.call(t,e)},a=function(t){for(var e=i.call(t.getAttribute("class")||""),n=e?e.split(/\s+/):[],s=0,o=n.length;s<o;s++)this.push(n[s]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},c=a.prototype=[],l=function(){return new a(this)};if(o.prototype=Error.prototype,c.item=function(t){return this[t]||null},c.contains=function(t){return~r(this,t+"")},c.add=function(){var t,e=arguments,n=0,i=e.length,s=!1;do{t=e[n]+"",~r(this,t)||(this.push(t),s=!0)}while(++n<i);s&&this._updateClassName()},c.remove=function(){var t,e,n=arguments,i=0,s=n.length,o=!1;do{for(t=n[i]+"",e=r(this,t);~e;)this.splice(e,1),o=!0,e=r(this,t)}while(++i<s);o&&this._updateClassName()},c.toggle=function(t,e){var n=this.contains(t),i=n?!0!==e&&"remove":!1!==e&&"add";return i&&this[i](t),!0===e||!1===e?e:!n},c.replace=function(t,e){var n=r(t+"");~n&&(this.splice(n,1,e),this._updateClassName())},c.toString=function(){return this.join(" ")},n.defineProperty){var u={get:l,enumerable:!0,configurable:!0};try{n.defineProperty(e,"classList",u)}catch(t){void 0!==t.number&&-2146823252!==t.number||(u.enumerable=!1,n.defineProperty(e,"classList",u))}}else n.prototype.__defineGetter__&&e.__defineGetter__("classList",l)}}(self),function(){"use strict";var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,i=arguments.length;for(n=0;n<i;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}"replace"in document.createElement("_").classList||(DOMTokenList.prototype.replace=function(t,e){var n=this.toString().split(" "),i=n.indexOf(t+"");~i&&(n=n.slice(i),this.remove.apply(this,n),this.add(e),this.add.apply(this,n.slice(1)))}),t=null}())},lbQ4:function(t,e,n){"use strict";"undefined"==typeof Promise&&(window.Promise=n("B/eG").default),"undefined"!=typeof window&&n("bZMm"),Object.assign=n("MgzW"),n("vqGA"),n("qKs0"),n("VXxg"),n("FrFn"),n("bWX9"),n("Wr5T")}},[[9,0,1,2]]]);
//# sourceMappingURL=mapIkn.89732fb6b2.js.map