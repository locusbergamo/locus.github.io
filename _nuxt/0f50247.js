(window.webpackJsonp=window.webpackJsonp||[]).push([[19,3,4,15],{285:function(e,t,n){"use strict";var r=n(11),o=n(1),c=n(4),l=n(111),d=n(17),f=n(12),v=n(196),m=n(41),h=n(82),y=n(195),C=n(5),_=n(83).f,x=n(32).f,E=n(16).f,w=n(286),N=n(287).trim,T="Number",I=o.Number,S=I.prototype,A=o.TypeError,k=c("".slice),O=c("".charCodeAt),M=function(e){var t=y(e,"number");return"bigint"==typeof t?t:P(t)},P=function(e){var t,n,r,o,c,l,d,code,f=y(e,"number");if(h(f))throw A("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=N(f),43===(t=O(f,0))||45===t){if(88===(n=O(f,2))||120===n)return NaN}else if(48===t){switch(O(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=k(f,2)).length,d=0;d<l;d++)if((code=O(c,d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(l(T,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var j,F=function(e){var t=arguments.length<1?0:I(M(e)),n=this;return m(S,n)&&C((function(){w(n)}))?v(Object(t),n,F):t},G=r?_(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;G.length>R;R++)f(I,j=G[R])&&!f(F,j)&&E(F,j,x(I,j));F.prototype=S,S.constructor=F,d(o,T,F)}},286:function(e,t,n){var r=n(4);e.exports=r(1..valueOf)},287:function(e,t,n){var r=n(4),o=n(24),c=n(13),l=n(288),d=r("".replace),f="["+l+"]",v=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),h=function(e){return function(t){var n=c(o(t));return 1&e&&(n=d(n,v,"")),2&e&&(n=d(n,m,"")),n}};e.exports={start:h(1),end:h(2),trim:h(3)}},288:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},289:function(e,t,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(64).default)("776cd2e9",content,!0,{sourceMap:!1})},296:function(e,t,n){"use strict";n.r(t);n(285);var r={name:"CardComponent",props:{path:{type:String,required:!0},id:{type:Number,required:!0},name:{type:String,required:!0},image:{type:String,required:!0}}},o=n(25),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("NuxtLink",{staticClass:"card-container",attrs:{to:"/"+e.path+"/"+e.id}},[n("div",{staticClass:"external"},[n("div",[n("img",{staticClass:"card-image",attrs:{src:e.image,alt:e.name+"-image"}})]),e._v(" "),n("div",{staticClass:"description"},[e._v(e._s(e.name))])])])}),[],!1,null,"9ffc0fba",null);t.default=component.exports},297:function(e,t,n){"use strict";n(289)},298:function(e,t,n){var r=n(63)(!1);r.push([e.i,".container[data-v-f2f3ba00]{margin-top:4rem;margin-bottom:4rem}.tags[data-v-f2f3ba00]{font-size:1.8rem;font-weight:800}",""]),e.exports=r},299:function(e,t,n){"use strict";n.r(t);n(66),n(84);var r={name:"TopPageGeneric",props:{name:{type:String,required:!0},description:{type:String,required:!0},tags:{type:Array,required:!0}},data:function(){return{dynTags:this.tags}},mounted:function(){var e=this;window.setInterval((function(){e.pollTag()}),1e3)},methods:{pollTag:function(){var e=this.dynTags.shift();this.dynTags=this.dynTags.concat(e)}}},o=(n(297),n(25)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md"},[n("h1",{staticClass:"header"},[e._v(e._s(e.name))])]),e._v(" "),n("div",{staticClass:"col-md"},[n("p",{staticClass:"snippet"},[e._v(e._s(e.description))]),e._v(" "),n("p",{staticClass:"tags"},[e._v("# "+e._s(e.dynTags[0]))])])])}),[],!1,null,"f2f3ba00",null);t.default=component.exports},306:function(e,t,n){var content=n(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(64).default)("28bc35e6",content,!0,{sourceMap:!1})},310:function(e,t,n){"use strict";n(306)},311:function(e,t,n){var r=n(63)(!1);r.push([e.i,".external[data-v-cf6637f8]{height:80px}.external:hover .card-image[data-v-cf6637f8]{filter:none}.card-image[data-v-cf6637f8]{height:60px;width:60px;filter:invert()}.vertical[data-v-cf6637f8]{display:flex;align-items:center;justify-content:center}.description[data-v-cf6637f8]{font-size:1.2em}.card-container[data-v-cf6637f8]{padding:0}",""]),e.exports=r},314:function(e,t,n){"use strict";n.r(t);n(285);var r={name:"CategoryComponent",props:{id:{type:Number,required:!0},name:{type:String,required:!0},image:{type:String,required:!0},path:{type:String,required:!0}}},o=(n(310),n(25)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("NuxtLink",{staticClass:"card-container",attrs:{to:"/"+e.path+"/"+e.id}},[n("div",{staticClass:"external row"},[n("div",{staticClass:"col-4"},[n("img",{staticClass:"card-image",attrs:{src:e.image,alt:e.name+"-image"}})]),e._v(" "),n("div",{staticClass:"description vertical col-8"},[e._v("\n      "+e._s(e.name)+"\n    ")])])])}),[],!1,null,"cf6637f8",null);t.default=component.exports},346:function(e,t,n){"use strict";n.r(t);var r=n(10),o=(n(65),n(15),n(33),n(29),n(85),{name:"AllEventPage",asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,data,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,t.next=3,n.get("/api/all-events");case 3:return r=t.sent,data=r.data,o=[],data.seasons.forEach((function(e){o.push(e.name)})),t.abrupt("return",{seasons:data.seasons,events:data.events,tags:o});case 8:case"end":return t.stop()}}),t)})))()},data:function(){return{header:{name:"All Bergamo's events",description:"Bergamo and its inhabitants are always very active, energetic and friendly. These are the reasons why there is never a shortage of activities, events, opportunities to learn something new or simply to have fun with one's companions throughout the year."},pathToEvent:"all-events",seasonPath:"event-season"}},head:function(){return{title:"All events | Events",meta:[{hid:"descriptionEventCategories",name:"description",content:"in the current page all the available Events and Event Categories are showed. A brief introductory description of the page is also provided"},{hid:"keywordsEventCategories",name:"keywords",content:[this.tags.toString(),"leisure","Events","Bergamo"]}]}}}),c=n(25),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container mt-5"},[n("TopPageGeneric",{attrs:{name:e.header.name,description:e.header.description,tags:e.tags}}),e._v(" "),n("hr"),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-4 snippet-categories"},[e._v("\n      Choose a category or scroll down to see all the events\n    ")]),e._v(" "),n("div",{staticClass:"col-lg-8"},[n("div",{staticClass:"row"},e._l(e.seasons,(function(t){return n("CategoryComponent",{key:t.id,staticClass:"col-md-6",attrs:{id:t.id,name:t.name,image:t.image,path:e.seasonPath}})})),1)])]),e._v(" "),n("div",{staticClass:"row mt-4"},e._l(e.events,(function(t){return n("CardComponent",{key:t.id,staticClass:"col-xxl-3 p-2",attrs:{id:t.id,name:t.name,image:t.image,path:e.pathToEvent}})})),1)],1)}),[],!1,null,"2d6e1dca",null);t.default=component.exports;installComponents(component,{TopPageGeneric:n(299).default,CategoryComponent:n(314).default,CardComponent:n(296).default})}}]);