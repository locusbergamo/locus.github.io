(window.webpackJsonp=window.webpackJsonp||[]).push([[24,2,6,8,11,15],{284:function(t,e,r){var content=r(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(64).default)("4c535b70",content,!0,{sourceMap:!1})},285:function(t,e,r){"use strict";var n=r(11),o=r(1),c=r(4),l=r(111),d=r(17),f=r(12),v=r(196),m=r(41),h=r(82),_=r(195),y=r(5),x=r(83).f,C=r(32).f,S=r(16).f,w=r(286),T=r(287).trim,N="Number",E=o.Number,I=E.prototype,k=o.TypeError,O=c("".slice),A=c("".charCodeAt),M=function(t){var e=_(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,r,n,o,c,l,d,code,f=_(t,"number");if(h(f))throw k("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=T(f),43===(e=A(f,0))||45===e){if(88===(r=A(f,2))||120===r)return NaN}else if(48===e){switch(A(f,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(l=(c=O(f,2)).length,d=0;d<l;d++)if((code=A(c,d))<48||code>o)return NaN;return parseInt(c,n)}return+f};if(l(N,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var R,$=function(t){var e=arguments.length<1?0:E(M(t)),r=this;return m(I,r)&&y((function(){w(r)}))?v(Object(e),r,$):e},L=n?x(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;L.length>F;F++)f(E,R=L[F])&&!f($,R)&&S($,R,C(E,R));$.prototype=I,I.constructor=$,d(o,N,$)}},286:function(t,e,r){var n=r(4);t.exports=n(1..valueOf)},287:function(t,e,r){var n=r(4),o=r(24),c=r(13),l=r(288),d=n("".replace),f="["+l+"]",v=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),h=function(t){return function(e){var r=c(o(e));return 1&t&&(r=d(r,v,"")),2&t&&(r=d(r,m,"")),r}};t.exports={start:h(1),end:h(2),trim:h(3)}},288:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},289:function(t,e,r){var content=r(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(64).default)("776cd2e9",content,!0,{sourceMap:!1})},290:function(t,e,r){"use strict";r(284)},291:function(t,e,r){var n=r(63)(!1);n.push([t.i,".center[data-v-6a14db8c]{text-align:center}.mail[data-v-6a14db8c]{color:#000}.bold[data-v-6a14db8c]{font-weight:600}.image-s[data-v-6a14db8c]{height:380px;border-radius:10px}.card-image[data-v-6a14db8c]{height:365.9px}.marg[data-v-6a14db8c]{margin:10px}",""]),t.exports=n},292:function(t,e,r){var content=r(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(64).default)("6b6246d6",content,!0,{sourceMap:!1})},293:function(t,e,r){var content=r(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(64).default)("2c80662b",content,!0,{sourceMap:!1})},294:function(t,e,r){"use strict";r.r(e);var n={name:"StaticCardComponent",props:{image:{type:String,required:!0},title:{type:String,required:!1,default:null},footer:{type:String,required:!1,default:null}}},o=(r(290),r(25)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"center"},[t.title?r("h2",{staticClass:"bold"},[t._v(t._s(t.title))]):t._e(),t._v(" "),r("div",{staticClass:"image-s center marg"},[r("img",{staticClass:"card-image img-fluid",attrs:{src:""+t.image,alt:t.title+"-img"}})]),t._v(" "),r("h2",[t.footer?r("a",{staticClass:"mail"},[t._v(t._s(t.footer))]):t._e()])])}),[],!1,null,"6a14db8c",null);e.default=component.exports},295:function(t,e,r){"use strict";r.r(e);var n={props:{items:{type:Array,required:!0}}},o=(r(303),r(25)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h6",t._l(t.items,(function(e,n){return r("span",{key:n,staticClass:"crumb"},[r("NuxtLink",{attrs:{to:e.url}},[r("span",[t._v(t._s(e.label))])])],1)})),0)}),[],!1,null,"085ebbdf",null);e.default=component.exports},297:function(t,e,r){"use strict";r(289)},298:function(t,e,r){var n=r(63)(!1);n.push([t.i,".container[data-v-f2f3ba00]{margin-top:4rem;margin-bottom:4rem}.tags[data-v-f2f3ba00]{font-size:1.8rem;font-weight:800}",""]),t.exports=n},299:function(t,e,r){"use strict";r.r(e);r(66),r(84);var n={name:"TopPageGeneric",props:{name:{type:String,required:!0},description:{type:String,required:!0},tags:{type:Array,required:!0}},data:function(){return{dynTags:this.tags}},mounted:function(){var t=this;window.setInterval((function(){t.pollTag()}),1e3)},methods:{pollTag:function(){var t=this.dynTags.shift();this.dynTags=this.dynTags.concat(t)}}},o=(r(297),r(25)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md"},[r("h1",{staticClass:"header"},[t._v(t._s(t.name))])]),t._v(" "),r("div",{staticClass:"col-md"},[r("p",{staticClass:"snippet"},[t._v(t._s(t.description))]),t._v(" "),r("p",{staticClass:"tags"},[t._v("# "+t._s(t.dynTags[0]))])])])}),[],!1,null,"f2f3ba00",null);e.default=component.exports},300:function(t,e,r){"use strict";r.r(e);var n={name:"OpeningHoursComponent",props:{hours:{type:Array,required:!0}}},o=(r(301),r(25)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"op-hours-style"},[r("h3",{staticClass:"subtitle center"},[t._v("Opening hours")]),t._v(" "),t._l(t.hours,(function(e){return r("p",{key:e},[t._v(t._s(e))])}))],2)}),[],!1,null,"5731b208",null);e.default=component.exports},301:function(t,e,r){"use strict";r(292)},302:function(t,e,r){var n=r(63)(!1);n.push([t.i,".op-hours-style[data-v-5731b208]{background:#e0dcdc;border-radius:10px;padding:10px;margin:10px;display:flex;flex-direction:column;align-items:center;justify-content:center}h3[data-v-5731b208]{font-weight:300}.center[data-v-5731b208]{text-align:center}",""]),t.exports=n},303:function(t,e,r){"use strict";r(293)},304:function(t,e,r){var n=r(63)(!1);n.push([t.i,".crumb[data-v-085ebbdf]{display:inline-block;padding:10px 15px;margin-right:2px;background:#3c807d;-webkit-clip-path:polygon(0 0,92% 0,100% 50%,92% 100%,0 100%,8% 50%);clip-path:polygon(0 0,92% 0,100% 50%,92% 100%,0 100%,8% 50%)}.crumb[data-v-085ebbdf]:hover{background:#2d5f5c}.crumb span[data-v-085ebbdf]{color:#fff}",""]),t.exports=n},307:function(t,e,r){var content=r(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(64).default)("6172b5bf",content,!0,{sourceMap:!1})},312:function(t,e,r){"use strict";r(307)},313:function(t,e,r){var n=r(63)(!1);n.push([t.i,".info-style[data-v-93b6d8ec]{background:#803c41;border-radius:10px;padding:10px;margin:10px;display:flex;flex-direction:column}.attribute[data-v-93b6d8ec]{font-weight:600;font-size:120%;color:#fff}.title[data-v-93b6d8ec]{color:#fff}h1[data-v-93b6d8ec]{font-size:180%}p[data-v-93b6d8ec]{color:#fff}span[data-v-93b6d8ec]{color:#fbeda7}a[data-v-93b6d8ec]{color:inherit}",""]),t.exports=n},315:function(t,e,r){"use strict";r.r(e);r(285);var n={name:"ListComponent",props:{image:{type:String,required:!0},hours:{type:Array,required:!0},address:{type:String,required:!0},website:{type:String,required:!0},name:{type:String,required:!0},rating:{type:Number,required:!0}},data:function(){return{height:"355px"}}},o=(r(312),r(25)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row mb-5"},[r("div",{staticClass:"col-xl-5 order-xl-1 order-2"},[r("StaticCardComponent",{attrs:{image:t.image}})],1),t._v(" "),r("div",{staticClass:"col-xl-4 order-xl-2 order-3"},[r("OpeningHoursComponent",{attrs:{hours:t.hours}})],1),t._v(" "),r("div",{staticClass:"col-xl-3 order-xl-3 order-1"},[r("div",{staticClass:"info-style"},[r("h1",{staticClass:"p-1 title"},[t._v(t._s(t.name))]),t._v(" "),r("hr",{staticStyle:{"margin-top":"0"}}),t._v(" "),r("p",[r("span",{staticClass:"attribute"},[t._v("Address: ")]),t._v(t._s(t.address))]),t._v(" "),r("p",[r("span",{staticClass:"attribute"},[t._v("Site: ")]),t._v(" "),r("span",[r("a",{staticClass:"link",attrs:{href:""+t.website}},[t._v(t._s(t.name)+"'s website\n            "),r("img",{staticStyle:{height:"20px",filter:"invert()"},attrs:{src:"https://i.ibb.co/423RsxD/redirect.png",alt:""}})])])]),t._v(" "),r("p",[r("span",{staticClass:"attribute"},[t._v("Rating: ")]),t._v(t._s(t.rating)+"/5")])])])])}),[],!1,null,"93b6d8ec",null);e.default=component.exports;installComponents(component,{StaticCardComponent:r(294).default,OpeningHoursComponent:r(300).default})},354:function(t,e,r){"use strict";r.r(e);var n=r(10),o=(r(65),r(15),r(33),r(29),{name:"ServiceType",components:{BreadCrump:r(295).default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,data,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.route,n=t.$axios,o=r.params.id,e.next=4,n.get("/api/serviceType/"+o);case 4:return c=e.sent,data=c.data,l=[],data.services.forEach((function(t){l.push(t.name)})),e.abrupt("return",{serviceType:data,tags:l});case 9:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"".concat(this.serviceType.name," | Services"),meta:[{hid:"descriptionServiceCategory",name:"description",content:"available ".concat(this.serviceType.name," and their related info: Name, image, opening hours, address, site and rating")},{hid:"keywordsServiceCategory",name:"keywords",content:[this.serviceType.name,"leisure","Services","Bergamo"]}]}},computed:{breadcrumps:function(){return[{label:"All Services",url:"/all-services"}]}}}),c=r(25),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mt-5"},[r("BreadCrump",{attrs:{items:t.breadcrumps}}),t._v(" "),r("TopPageGeneric",{attrs:{name:t.serviceType.name,description:t.serviceType.description,tags:t.tags}}),t._v(" "),r("div",{staticClass:"mt-5"},t._l(t.serviceType.services,(function(t){return r("ListComponent",{key:t.id,attrs:{name:t.name,image:t.image,hours:t.openingHours,website:t.website,address:t.address,rating:t.rating}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BreadCrump:r(295).default,TopPageGeneric:r(299).default,ListComponent:r(315).default})}}]);