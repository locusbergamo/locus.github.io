(window.webpackJsonp=window.webpackJsonp||[]).push([[29,2,3,16],{286:function(t,e,n){"use strict";var r=n(11),o=n(1),c=n(4),l=n(111),f=n(17),d=n(12),m=n(196),v=n(41),h=n(82),_=n(195),y=n(5),C=n(83).f,E=n(32).f,x=n(16).f,N=n(287),I=n(288).trim,T="Number",w=o.Number,k=w.prototype,A=o.TypeError,S=c("".slice),O=c("".charCodeAt),M=function(t){var e=_(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,n,r,o,c,l,f,code,d=_(t,"number");if(h(d))throw A("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=I(d),43===(e=O(d,0))||45===e){if(88===(n=O(d,2))||120===n)return NaN}else if(48===e){switch(O(d,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(l=(c=S(d,2)).length,f=0;f<l;f++)if((code=O(c,f))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(l(T,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var F,G=function(t){var e=arguments.length<1?0:w(M(t)),n=this;return v(k,n)&&y((function(){N(n)}))?m(Object(e),n,G):e},R=r?C(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),$=0;R.length>$;$++)d(w,F=R[$])&&!d(G,F)&&x(G,F,E(w,F));G.prototype=k,k.constructor=G,f(o,T,G)}},287:function(t,e,n){var r=n(4);t.exports=r(1..valueOf)},288:function(t,e,n){var r=n(4),o=n(25),c=n(13),l=n(289),f=r("".replace),d="["+l+"]",m=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),h=function(t){return function(e){var n=c(o(e));return 1&t&&(n=f(n,m,"")),2&t&&(n=f(n,v,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},289:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},290:function(t,e,n){var content=n(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("aff8a3ea",content,!0,{sourceMap:!1})},294:function(t,e,n){var content=n(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("2c80662b",content,!0,{sourceMap:!1})},296:function(t,e,n){"use strict";n.r(e);var r={props:{items:{type:Array,required:!0}}},o=(n(304),n(21)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h6",t._l(t.items,(function(e,r){return n("span",{key:r,staticClass:"crumb"},[n("NuxtLink",{attrs:{to:e.url}},[n("span",[t._v(t._s(e.label))])])],1)})),0)}),[],!1,null,"085ebbdf",null);e.default=component.exports},297:function(t,e,n){"use strict";n.r(e);n(286);var r={name:"CardComponent",props:{path:{type:String,required:!0},id:{type:Number,required:!0},name:{type:String,required:!0},image:{type:String,required:!0}}},o=n(21),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("NuxtLink",{staticClass:"card-container",attrs:{to:"/"+t.path+"/"+t.id}},[n("div",{staticClass:"external"},[n("div",[n("img",{staticClass:"card-image",attrs:{src:t.image,alt:t.name+"-image"}})]),t._v(" "),n("div",{staticClass:"description"},[t._v(t._s(t.name))])])])}),[],!1,null,"9ffc0fba",null);e.default=component.exports},298:function(t,e,n){"use strict";n(290)},299:function(t,e,n){var r=n(63)(!1);r.push([t.i,".container[data-v-c3badef0]{margin-top:4rem;margin-bottom:4rem}.tags[data-v-c3badef0]{font-size:1.8rem;font-weight:800}",""]),t.exports=r},300:function(t,e,n){"use strict";n.r(e);n(66),n(84);var r={name:"TopPageGeneric",props:{name:{type:String,required:!0},description:{type:String,required:!0},tags:{type:Array,required:!0}},data:function(){return{dynTags:this.tags}},mounted:function(){var t=this;window.setInterval((function(){t.pollTag()}),1e3)},methods:{pollTag:function(){var t=this.dynTags.shift();this.dynTags=this.dynTags.concat(t)}}},o=(n(298),n(21)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md"},[n("h1",{staticClass:"header"},[t._v(t._s(t.name))])]),t._v(" "),n("div",{staticClass:"col-md"},[n("p",{staticClass:"snippet"},[t._v(t._s(t.description))]),t._v(" "),n("p",{staticClass:"tags"},[t._v("# "+t._s(t.dynTags[0]))])])])}),[],!1,null,"c3badef0",null);e.default=component.exports},304:function(t,e,n){"use strict";n(294)},305:function(t,e,n){var r=n(63)(!1);r.push([t.i,".crumb[data-v-085ebbdf]{display:inline-block;padding:10px 15px;margin-right:2px;background:#3c807d;-webkit-clip-path:polygon(0 0,92% 0,100% 50%,92% 100%,0 100%,8% 50%);clip-path:polygon(0 0,92% 0,100% 50%,92% 100%,0 100%,8% 50%)}.crumb[data-v-085ebbdf]:hover{background:#2d5f5c}.crumb span[data-v-085ebbdf]{color:#fff}",""]),t.exports=r},361:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(65),n(15),n(33),n(29),n(34),n(48),{name:"EventSeason",components:{BreadCrump:n(296).default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,data,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=t.$axios,o=n.id,e.next=4,r.get("/api/event-season/"+o);case 4:return c=e.sent,data=c.data,l=[],data.events.forEach((function(t){l.push(t.name)})),e.abrupt("return",{info:{name:data.name,description:data.description},events:data.events,tags:l});case 9:case"end":return e.stop()}}),e)})))()},data:function(){return{pathToEvent:"all-events"}},head:function(){return{title:"All ".concat(this.info.name," | Events"),meta:[{hid:"descriptionEventCategory",name:"description",content:"Available Events for the ".concat(this.info.name," category")},{hid:"keywordsEventCategory",name:"keywords",content:[this.info.name,"leisure","Bergamo"]}]}},computed:{breadcrumps:function(){return[{label:"All Events",url:"/all-events"}]}}}),c=n(21),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-5"},[n("BreadCrump",{attrs:{items:t.breadcrumps}}),t._v(" "),n("TopPageGeneric",{attrs:{name:t.info.name,description:t.info.description,tags:t.tags}}),t._v(" "),n("div",{staticClass:"row mt-4"},t._l(t.events,(function(e){return n("CardComponent",{key:e.id,staticClass:"col-xl-3 p-2",attrs:{id:e.id,name:e.name,image:e.image,path:t.pathToEvent}})})),1)],1)}),[],!1,null,"6798afd0",null);e.default=component.exports;installComponents(component,{BreadCrump:n(296).default,TopPageGeneric:n(300).default,CardComponent:n(297).default})}}]);