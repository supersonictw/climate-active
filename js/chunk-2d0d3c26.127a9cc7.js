(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3c26"],{"5dab":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-card-actions",{staticClass:"mb-3"},[n("v-btn",{staticClass:"secondary",attrs:{to:"/"}},[t._v("Back")]),n("v-spacer"),n("v-btn",{staticClass:"red darken-3",on:{click:t.deleteThis}},[t._v("Delete")]),n("v-btn",{staticClass:"amber darken-3",attrs:{to:"/editor/"+t.uuid}},[t._v("Edit")])],1),n("v-card",[n("v-card-text",[n("v-card",{attrs:{id:"preview",flat:""},domProps:{innerHTML:t._s(t.render)}})],1)],1)],1)},r=[],i=(n("ac1f"),n("5319"),n("7c5c")),c={name:"ViewerView",props:{uuid:{type:String,required:!0}},data:function(){return{content:""}},computed:{render:function(){return Object(i["marked"])(this.content,{sanitize:!0})}},methods:{deleteThis:function(){this.$db.table("notes").delete(this.uuid),this.$router.replace("/")}},created:function(){var t=this;this.$db.table("notes").get(this.uuid).then((function(e){return t.content=e.content}))}},s=c,d=n("2877"),o=n("6544"),u=n.n(o),l=n("8336"),b=n("b0af"),v=n("99d9"),p=n("a523"),h=n("2fa4"),f=Object(d["a"])(s,a,r,!1,null,null,null);e["default"]=f.exports;u()(f,{VBtn:l["a"],VCard:b["a"],VCardActions:v["a"],VCardText:v["b"],VContainer:p["a"],VSpacer:h["a"]})}}]);
//# sourceMappingURL=chunk-2d0d3c26.127a9cc7.js.map