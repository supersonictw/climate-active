(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3c26"],{"5dab":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",[e("v-card-actions",{staticClass:"mb-3"},[e("v-btn",{staticClass:"secondary",attrs:{to:"/"}},[t._v("Back")]),e("v-spacer"),e("v-btn",{staticClass:"amber darken-3",attrs:{to:"/editor/"+t.uuid}},[t._v("Edit")])],1),e("v-card",[e("v-card-text",[e("v-card",{attrs:{id:"preview",flat:""},domProps:{innerHTML:t._s(t.render)}})],1)],1)],1)},r=[],c=e("7c5c"),i={name:"Previewer",props:{uuid:{type:String,required:!0}},data:function(){return{content:""}},computed:{render:function(){return Object(c["marked"])(this.content,{sanitize:!0})}},created:function(){var t=this;this.$db.table("notes").get(this.uuid).then((function(n){return t.content=n.content}))}},s=i,d=e("2877"),o=e("6544"),u=e.n(o),v=e("8336"),l=e("b0af"),p=e("99d9"),b=e("a523"),f=e("2fa4"),h=Object(d["a"])(s,a,r,!1,null,null,null);n["default"]=h.exports;u()(h,{VBtn:v["a"],VCard:l["a"],VCardActions:p["a"],VCardText:p["b"],VContainer:b["a"],VSpacer:f["a"]})}}]);
//# sourceMappingURL=chunk-2d0d3c26.8c3c3d53.js.map