(function(t){function e(e){for(var n,o,s=e[0],c=e[1],u=e[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==i[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0520":function(t,e,a){},"1b73":function(t,e){t.exports="data:image/png;base64,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"},"2e21":function(t,e,a){},"4a74":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("7b17"),a("ab8b");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("Main",{attrs:{popular:t.popular},on:{search:t.searchMulti}})],1)},r=[],o=a("bc3a"),s=a.n(o),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"header-content"},[n("div",{staticClass:"info-header df"},[n("div",{staticClass:"logo-container"},[n("img",{attrs:{src:a("d01d"),alt:"Netflix Logo"}})]),n("div",{staticClass:"info-content df"},[n("div",[n("a",{attrs:{href:"#"}},[t._v("Menu")])]),n("div",[n("a",{attrs:{href:"#"}},[t._v("Serie TV")])]),n("div",[n("a",{attrs:{href:"#"}},[t._v("Film")])]),n("div",[n("a",{attrs:{href:"#"}},[t._v("Originali")])]),n("div",[n("a",{attrs:{href:"#"}},[t._v("Aggiunti di recente")])]),n("div",[n("a",{attrs:{href:"#"}},[t._v("La mia lista")])])])]),n("div",{staticClass:"account-header df"},[n("div",{staticClass:"search-button"},[n("button",[n("i",{staticClass:"fas fa-search"})])]),n("div",[n("a",{attrs:{href:"#"}},[t._v("BAMBINI")])]),n("div",{staticClass:"notification-button"},[n("i",{staticClass:"fas fa-bell"})]),n("div",{staticClass:"img-account"},[n("img",{attrs:{src:a("1b73"),alt:"Avatar"}})]),n("span",{staticClass:"down"},[n("i",{staticClass:"fa fa-sort-down"})])])])])}],l={name:"Header"},p=l,f=(a("b1e2"),a("2877")),A=Object(f["a"])(p,c,u,!1,null,"68f1e431",null),d=A.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("div",{staticClass:"cards-container container"},[a("div",{staticClass:"row"},[a("h1",{staticClass:"p-0"},[t._v("ORIGINALI NETFLIX")]),a("div",{staticClass:"search-container df p-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],staticClass:"search-input",attrs:{type:"Search",placeholder:"Search here your movie..."},domProps:{value:t.searchInput},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("search",t.searchInput)},input:function(e){e.target.composing||(t.searchInput=e.target.value)}}}),a("button",{staticClass:"search-button",on:{click:function(e){return t.$emit("search",t.searchInput)}}},[t._v("Search")])]),t._l(t.popular,(function(t){return a("Movies",{key:t.id,attrs:{title:t.title,original_title:t.original_title,original_language:t.original_language,vote_average:t.vote_average,getCompletePoster:t.poster_path,image:t.poster_path}})}))],2)])])},v=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"movies-album col-3 p-0"},[a("div",{staticClass:"img-container"},[a("img",{attrs:{src:t.getCompletePoster(t.image),alt:"prova"}})]),a("div",{staticClass:"hover-container"},[a("div",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")]),a("div",{staticClass:"original-title"},[t._v("Title: "+t._s(t.original_title)+" ")]),a("div",{staticClass:"original_language"},[t._v(" Language: "+t._s(t.original_language)+" "),a("img",{attrs:{src:t.getLangFlag(t.original_language)}})]),a("div",{staticClass:"vote-average"},t._l(t.star,(function(t){return a("i",{key:t,staticClass:"fas fa-star"})})),0)])])},m=[],b=(a("a9e3"),{name:"Movies",props:{image:String,title:String,original_title:String,original_language:String,vote_average:Number},computed:{star:function(){return Math.round(this.vote_average/2)}},methods:{getCompletePoster:function(t){return"http://image.tmdb.org/t/p/w500/".concat(t)},getLangFlag:function(t){return"../assets/flags/".concat(t,".svg")}}}),j=b,C=(a("c5cc"),Object(f["a"])(j,h,m,!1,null,"dc8a00b8",null)),N=C.exports,k={name:"Main",data:function(){return{searchInput:""}},components:{Movies:N},props:{popular:Array}},O=k,y=(a("9698"),Object(f["a"])(O,g,v,!1,null,"a95fa6f0",null)),S=y.exports,M={name:"App",components:{Header:d,Main:S},data:function(){return{popular:[]}},created:function(){this.callPopularApi()},methods:{callPopularApi:function(){var t=this;s.a.get("https://api.themoviedb.org/3/movie/popular?api_key=557ce10c821b70880c7de5a864524185&language=it-IT&page=1").then((function(e){t.popular=e.data.results}))},searchMulti:function(t){var e=this;if(0===t.length)return this.callPopularApi();s.a.get("https://api.themoviedb.org/3/search/multi?api_key=557ce10c821b70880c7de5a864524185&query=".concat(t)).then((function(t){e.popular=t.data.results}))}}},B=M,G=(a("5c0b"),Object(f["a"])(B,i,r,!1,null,null,null)),I=G.exports;a("15f5");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(I)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},9698:function(t,e,a){"use strict";a("4a74")},"9c0c":function(t,e,a){},b1e2:function(t,e,a){"use strict";a("0520")},c5cc:function(t,e,a){"use strict";a("2e21")},d01d:function(t,e,a){t.exports=a.p+"img/Netflix_logo.8db2731c.png"}});
//# sourceMappingURL=app.d6b55e63.js.map