(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/o47":function(t,e,s){"use strict";s.r(e);var n=s("VphZ"),r=(s("agSX"),s("LvDl")),i=s.n(r),a=n.d("#svg-section-1");function o(){a.html("");var t=a.node().offsetWidth,e=20,s=0,r=20,i=0,o=t-i-s,c=120-e-r;n.d("#svg-section-1").html("");var l=n.d("#svg-section-1").append("svg").attr("width",o+i+s).attr("height",c+e+r).append("g").attr("transform","translate("+i+","+e+")");l.append("circle").attr("cx",5).attr("cy",-15).attr("r",4).style("fill","#008abd").style("stroke","#000000"),l.append("text").text("Orcaella brevirostris (Pesut)").attr("x",15).attr("y",-10).attr("text-anchor","start").style("font-style","italic").style("font-size","12px"),l.append("circle").attr("cx",5).attr("cy",5).attr("r",4).style("fill","#84a3b8").style("stroke","#000000"),l.append("text").text("Tursiops aduncus (Lumba-lumba hidung botol)").attr("x",15).attr("y",10).attr("text-anchor","start").style("font-style","italic").style("font-size","12px"),l.append("circle").attr("cx",5).attr("cy",25).attr("r",4).style("fill","#dd9f03").style("stroke","#000000"),l.append("text").text("Neophocanea phocaenoides (Porpoise tanpa sirip belakang)").attr("x",15).attr("y",30).attr("text-anchor","start").style("font-style","italic").style("font-size","12px"),l.append("circle").attr("cx",5).attr("cy",45).attr("r",4).style("fill","#faae99").style("stroke","#000000"),l.append("text").text("Dugong dugon (duyung)").attr("x",15).attr("y",50).attr("text-anchor","start").style("font-style","italic").style("font-size","12px"),l.append("circle").attr("cx",5).attr("cy",65).attr("r",4).style("fill","#54bb9a").style("stroke","#000000"),l.append("text").text("Crocodiylus porosus (Buaya)").attr("x",15).attr("y",70).attr("text-anchor","start").style("font-style","italic").style("font-size","12px"),l.append("circle").attr("cx",5).attr("cy",85).attr("r",4).style("fill","#2c6855").style("stroke","#000000"),l.append("text").text("Chelonia mydas (penyu)").attr("x",15).attr("y",90).attr("text-anchor","start").style("font-style","italic").style("font-size","12px")}o(),window.addEventListener("resize",i.a.debounce(o,200))},2:function(t,e,s){s("lbQ4"),t.exports=s("/o47")},bWX9:function(t,e){
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
"document"in self&&((!("classList"in document.createElement("_"))||document.createElementNS&&!("classList"in document.createElementNS("http://www.w3.org/2000/svg","g")))&&function(t){"use strict";if("Element"in t){var e=t.Element.prototype,s=Object,n=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},r=Array.prototype.indexOf||function(t){for(var e=0,s=this.length;e<s;e++)if(e in this&&this[e]===t)return e;return-1},i=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},a=function(t,e){if(""===e)throw new i("SYNTAX_ERR","The token must not be empty.");if(/\s/.test(e))throw new i("INVALID_CHARACTER_ERR","The token must not contain space characters.");return r.call(t,e)},o=function(t){for(var e=n.call(t.getAttribute("class")||""),s=e?e.split(/\s+/):[],r=0,i=s.length;r<i;r++)this.push(s[r]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},c=o.prototype=[],l=function(){return new o(this)};if(i.prototype=Error.prototype,c.item=function(t){return this[t]||null},c.contains=function(t){return~a(this,t+"")},c.add=function(){var t,e=arguments,s=0,n=e.length,r=!1;do{t=e[s]+"",~a(this,t)||(this.push(t),r=!0)}while(++s<n);r&&this._updateClassName()},c.remove=function(){var t,e,s=arguments,n=0,r=s.length,i=!1;do{for(t=s[n]+"",e=a(this,t);~e;)this.splice(e,1),i=!0,e=a(this,t)}while(++n<r);i&&this._updateClassName()},c.toggle=function(t,e){var s=this.contains(t),n=s?!0!==e&&"remove":!1!==e&&"add";return n&&this[n](t),!0===e||!1===e?e:!s},c.replace=function(t,e){var s=a(t+"");~s&&(this.splice(s,1,e),this._updateClassName())},c.toString=function(){return this.join(" ")},s.defineProperty){var p={get:l,enumerable:!0,configurable:!0};try{s.defineProperty(e,"classList",p)}catch(t){void 0!==t.number&&-2146823252!==t.number||(p.enumerable=!1,s.defineProperty(e,"classList",p))}}else s.prototype.__defineGetter__&&e.__defineGetter__("classList",l)}}(self),function(){"use strict";var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var s,n=arguments.length;for(s=0;s<n;s++)t=arguments[s],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var s=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:s.call(this,t)}}"replace"in document.createElement("_").classList||(DOMTokenList.prototype.replace=function(t,e){var s=this.toString().split(" "),n=s.indexOf(t+"");~n&&(s=s.slice(n),this.remove.apply(this,s),this.add(e),this.add.apply(this,s.slice(1)))}),t=null}())},lbQ4:function(t,e,s){"use strict";"undefined"==typeof Promise&&(window.Promise=s("B/eG").default),"undefined"!=typeof window&&s("bZMm"),Object.assign=s("MgzW"),s("vqGA"),s("qKs0"),s("VXxg"),s("FrFn"),s("bWX9"),s("Wr5T")}},[[2,0,1,2]]]);
//# sourceMappingURL=legend.0218fe69a9.js.map