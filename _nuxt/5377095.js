(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{290:function(t,e,n){var content=n(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("aff8a3ea",content,!0,{sourceMap:!1})},298:function(t,e,n){"use strict";n(290)},299:function(t,e,n){var r=n(63)(!1);r.push([t.i,".container[data-v-c3badef0]{margin-top:4rem;margin-bottom:4rem}.tags[data-v-c3badef0]{font-size:1.8rem;font-weight:800}",""]),t.exports=r},300:function(t,e,n){"use strict";n.r(e);n(66),n(84);var r={name:"TopPageGeneric",props:{name:{type:String,required:!0},description:{type:String,required:!0},tags:{type:Array,required:!0}},data:function(){return{dynTags:this.tags}},mounted:function(){var t=this;window.setInterval((function(){t.pollTag()}),1e3)},methods:{pollTag:function(){var t=this.dynTags.shift();this.dynTags=this.dynTags.concat(t)}}},o=(n(298),n(21)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md"},[n("h1",{staticClass:"header"},[t._v(t._s(t.name))])]),t._v(" "),n("div",{staticClass:"col-md"},[n("p",{staticClass:"snippet"},[t._v(t._s(t.description))]),t._v(" "),n("p",{staticClass:"tags"},[t._v("# "+t._s(t.dynTags[0]))])])])}),[],!1,null,"c3badef0",null);e.default=component.exports}}]);