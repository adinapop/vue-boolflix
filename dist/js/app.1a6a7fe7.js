(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],d=0,v=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&v.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(v.length)v.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0e79":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("7b17"),a("ab8b");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("Main",{attrs:{movies:t.movies.results}})],1)},r=[],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{staticClass:"header-content"},[a("div",{staticClass:"info-header df"},[a("div",{staticClass:"logo-container"},[t._v(" LOGO ")]),a("div",{staticClass:"info-content df"},[a("div",[a("a",{attrs:{href:"#"}},[t._v("Menu")])]),a("div",[a("a",{attrs:{href:"#"}},[t._v("Serie TV")])]),a("div",[a("a",{attrs:{href:"#"}},[t._v("Film")])]),a("div",[a("a",{attrs:{href:"#"}},[t._v("Originali")])]),a("div",[a("a",{attrs:{href:"#"}},[t._v("Aggiunti di recente")])]),a("div",[a("a",{attrs:{href:"#"}},[t._v("La mia lista")])])])]),a("div",{staticClass:"account-header df"},[a("div",{staticClass:"search-button"},[a("button",[a("i",{staticClass:"fa fa-search"})])]),a("div",[a("a",{attrs:{href:"#"}},[t._v("BAMBINI")])]),a("div",{staticClass:"notification-button"},[a("i",{staticClass:"fa fa-bell"})]),a("div",{staticClass:"img-account"},[t._v("AVATAR")]),a("span",{staticClass:"down"},[a("i",{staticClass:"fa fa-sort-down"})])])])])}],l={name:"Header"},c=l,u=(a("bbf4"),a("2877")),d=Object(u["a"])(c,o,s,!1,null,"4e0d80df",null),v=d.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("div",{staticClass:"cards-container container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.Search,expression:"Search"}],attrs:{type:"Search",placeholder:"Search"},domProps:{value:t.Search},on:{input:function(e){e.target.composing||(t.Search=e.target.value)}}}),a("button",[t._v("Search")]),a("h1",[t._v("ORIGINALI NETFLIX")]),a("div",{staticClass:"row"},t._l(t.movies,(function(t){return a("Movies",{key:t.ids,attrs:{title:t.title,original_title:t.original_title,original_language:t.original_language,vote_average:t.vote_average}})})),1)])])},p=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"movies-album col-4 p-0"},[a("div",{staticClass:"img-container"}),a("div",{staticClass:"hover-container"},[a("div",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")]),a("div",{staticClass:"original-title"},[t._v("Title: "+t._s(t.original_title)+" ")]),a("div",{staticClass:"original_language"},[t._v("Language: "+t._s(t.original_language)+" ")]),a("div",{staticClass:"vote-average"},[t._v("Vote: "+t._s(t.vote_average)+" ")])])])},h=[],_=(a("a9e3"),{name:"Movies",props:{image:String,title:String,original_title:String,original_language:String,vote_average:Number}}),b=_,m=(a("8ceb"),Object(u["a"])(b,g,h,!1,null,"04f6ba24",null)),y=m.exports,w={name:"Main",components:{Movies:y},props:{movies:Array}},M=w,C=(a("fe17"),Object(u["a"])(M,f,p,!1,null,"69b1abd4",null)),k=C.exports,j={name:"App",components:{Header:v,Main:k},data:function(){return{movies:{page:1,results:[{adult:!1,backdrop_path:"/3lbTiIN8cVonMUQwaeh5nvn61lr.jpg",genre_ids:[12,35,878,10751],id:105,original_language:"en",original_title:"Back to the Future",overview:"Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",popularity:38.464,poster_path:"/7lyBcpYB0Qt8gYhXYaEZUNlNQAv.jpg",release_date:"1985-07-03",title:"Back to the Future",video:!1,vote_average:8.3,vote_count:15222},{adult:!1,backdrop_path:"/a4qvbI9x3nqu3hKQyDRVVBpMklx.jpg",genre_ids:[12,35,10751,878],id:165,original_language:"en",original_title:"Back to the Future Part II",overview:"Marty and Doc are at it again in this wacky sequel to the 1985 blockbuster as the time-traveling duo head to 2015 to nip some McFly family woes in the bud. But things go awry thanks to bully Biff Tannen and a pesky sports almanac. In a last-ditch attempt to set things straight, Marty finds himself bound for 1955 and face to face with his teenage parents -- again.",popularity:21.527,poster_path:"/hQq8xZe5uLjFzSBt4LanNP7SQjl.jpg",release_date:"1989-11-22",title:"Back to the Future Part II",video:!1,vote_average:7.7,vote_count:9744},{adult:!1,backdrop_path:"/igaRMweCynEGoS6w4Rsim7JPnKu.jpg",genre_ids:[12,35,878],id:196,original_language:"en",original_title:"Back to the Future Part III",overview:"The final installment of the Back to the Future trilogy finds Marty digging the trusty DeLorean out of a mineshaft and looking for Doc in the Wild West of 1885. But when their time machine breaks down, the travelers are stranded in a land of spurs. More problems arise when Doc falls for pretty schoolteacher Clara Clayton, and Marty tangles with Buford Tannen.",popularity:17.89,poster_path:"/crzoVQnMzIrRfHtQw0tLBirNfVg.jpg",release_date:"1990-05-25",title:"Back to the Future Part III",video:!1,vote_average:7.4,vote_count:7863}],total_pages:1,total_results:3}}}},I=j,S=(a("5c0b"),Object(u["a"])(I,i,r,!1,null,null,null)),B=S.exports;a("7f10");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(B)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"8ceb":function(t,e,a){"use strict";a("a029")},"9c0c":function(t,e,a){},a029:function(t,e,a){},bbf4:function(t,e,a){"use strict";a("0e79")},ee86:function(t,e,a){},fe17:function(t,e,a){"use strict";a("ee86")}});
//# sourceMappingURL=app.1a6a7fe7.js.map