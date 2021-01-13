(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70ab4ace"],{"064e":function(t,e,a){"use strict";a.r(e);var o=function(){var t,e=this,a=e.$createElement,o=e._self._c||a;return o("v-container",{attrs:{id:"regular-tables",fluid:"",tag:"section"}},[o("base-material-snackbar",e._b({attrs:{type:e.alert.color},model:{value:e.alert.state,callback:function(t){e.$set(e.alert,"state",t)},expression:"alert.state"}},"base-material-snackbar",(t={},t[e.alert.x]=!0,t[e.alert.y]=!0,t),!1),[e._v(" "+e._s(e.alert.text)+" ")]),o("base-v-component",{attrs:{heading:"Administrar Productos",link:"components/simple-tables"}}),o("base-material-card",{staticClass:"px-5 py-3",attrs:{color:"primary",icon:"mdi-chart-bubble",title:"PRODUCTOS"}},[o("v-data-table",{attrs:{headers:e.headers,items:e.products,search:e.search,id:"dtProducts"},scopedSlots:e._u([{key:"top",fn:function(){return[o("v-toolbar",{staticClass:"mt-6 toolbar",attrs:{flat:""}},[o("v-spacer"),o("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),o("v-spacer"),o("v-btn",{attrs:{color:"indigo",to:"/dashboard/products/create"}},[o("v-icon",{attrs:{color:"white",left:""}},[e._v("mdi-plus")]),e._v(" AGREGAR ")],1)],1)]},proxy:!0},{key:"item.unit_price",fn:function(t){var a=t.item;return[e._v(" "+e._s(a.unit_price)+" "),o("span",{staticClass:"font-weight-bold"},[e._v(e._s(e.currency))])]}},{key:"item.total_in_stock",fn:function(t){var a=t.item;return[e._v(" "+e._s(a.total_in_stock)+" "),o("span",{staticClass:"font-weight-bold"},[e._v(e._s(e.currency))])]}},{key:"item.actions",fn:function(t){var a=t.item;return[o("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[o("v-btn",e._g(e._b({attrs:{color:"elevation-2 info mx-2",small:""},on:{click:function(t){return e.showProduct(a)}}},"v-btn",n,!1),r),[o("v-icon",[e._v(" mdi-eye ")])],1)]}}],null,!0)},[o("span",[e._v("Mostrar")])]),o("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[o("v-btn",e._g(e._b({staticClass:"elevation-2 mx-2",attrs:{color:"orange",small:"",to:"/dashboard/products/edit/"+a.id}},"v-btn",n,!1),r),[o("v-icon",[e._v("mdi-pencil")])],1)]}}],null,!0)},[o("span",[e._v("Editar")])]),o("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[o("v-btn",e._g(e._b({staticClass:"elevation-2 mx-2",attrs:{color:"red",small:""},on:{click:function(t){return e.openModalDelete(a.id)}}},"v-btn",n,!1),r),[o("v-icon",[e._v(" mdi-delete ")])],1)]}}],null,!0)},[o("span",[e._v("Eliminar")])])]}},{key:"no-data",fn:function(){return[o("v-btn",{attrs:{color:"primary"},on:{click:e.loadProducts}},[e._v("Actualizar")])]},proxy:!0}])})],1),o("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.showModal,callback:function(t){e.showModal=t},expression:"showModal"}},[o("show",{attrs:{product:e.product},on:{closeShowModal:e.closeShowModal}})],1),o("v-dialog",{attrs:{"max-width":"380"},model:{value:e.deleteModal,callback:function(t){e.deleteModal=t},expression:"deleteModal"}},[o("v-card",[o("v-card-title",[e._v(" ¿Estas Seguro? "),o("v-spacer"),o("v-icon",{attrs:{"aria-label":"Close"},on:{click:function(t){e.deleteModal=!1}}},[e._v(" mdi-close ")])],1),o("v-card-text",{staticClass:"pb-2 pt-2 text-center"},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-icon",{staticStyle:{"font-size":"100px",opacity:".5"},attrs:{color:"warning"}},[e._v("mdi-alert-circle-outline")]),o("br"),e._v(" ¡No podrás revertir esto! ")],1)],1),o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-btn",{staticClass:"mr-3",attrs:{color:"red"},on:{click:function(t){e.deleteModal=!1}}},[o("v-icon",{attrs:{left:""}},[e._v("mdi-cancel")]),e._v(" Cancelar ")],1)],1),o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-btn",{attrs:{color:"indigo"},on:{click:function(t){return e.deleteProduct()}}},[o("v-icon",{attrs:{left:""}},[e._v("mdi-delete")]),e._v(" Si, Eliminar ")],1)],1)],1)],1)],1)],1)],1)},r=[],n=(a("96cf"),a("1da1")),i=a("7ebc"),c=a("827f"),s=a("734d"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("MOSTRANDO PRODUCTO")])]),a("v-card-text",[a("v-list-item",[a("v-list-item-icon",[a("v-icon",{attrs:{color:"info"}},[t._v(" mdi-cart ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.product.name))]),a("v-list-item-subtitle",[t._v("Nombre")])],1)],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",{attrs:{color:"info"}},[t._v(" mdi-counter ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.product.quantity))]),a("v-list-item-subtitle",[t._v("Cantidad")])],1)],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",{attrs:{color:"info"}},[t._v(" mdi-currency-usd-circle-outline ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.product.unit_price))]),a("v-list-item-subtitle",[t._v("Precio Unitario")])],1)],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",{attrs:{color:"info"}},[t._v(" mdi-home-currency-usd ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.product.total_in_stock))]),a("v-list-item-subtitle",[t._v("Total en stock")])],1)],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",{attrs:{color:"info"}},[t._v(" mdi-apps ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.product.category_name))]),a("v-list-item-subtitle",[t._v("Categoria")])],1)],1)],1),a("v-card-actions",[a("v-btn",{staticClass:"ml-3",attrs:{color:"muted"},on:{click:t.closeShowModal}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-cancel")]),t._v(" CERRAR ")],1),a("v-spacer"),a("v-btn",{attrs:{color:"warning",to:"/dashboard/products/edit/"+t.product.id}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-pencil")]),t._v(" EDITAR ")],1)],1)],1)},u=[],d={props:{product:Object},methods:{closeShowModal:function(){this.$emit("closeShowModal")}}},v=d,m=a("2877"),p=a("6544"),_=a.n(p),b=a("8336"),f=a("b0af"),h=a("99d9"),g=a("132d"),y=a("da13"),k=a("5d23"),x=a("34c3"),w=a("2fa4"),C=Object(m["a"])(v,l,u,!1,null,null,null),O=C.exports;_()(C,{VBtn:b["a"],VCard:f["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VIcon:g["a"],VListItem:y["a"],VListItemContent:k["a"],VListItemIcon:x["a"],VListItemSubtitle:k["b"],VListItemTitle:k["c"],VSpacer:w["a"]});var M=a("a189"),V={components:{show:O},mixins:[M["a"]],data:function(){return{search:"",headers:[{text:"ID",value:"id"},{text:"Nombre",align:"start",sortable:!0,value:"name"},{text:"Stock",value:"quantity"},{text:"Precio Unitario",align:"right",value:"unit_price"},{text:"Total en stock",align:"right",value:"total_in_stock"},{text:"categoria",value:"category_name"},{text:"Acción",value:"actions",sortable:!1}],products:[],product:new s["a"]("","","","",""),productId:null,showModal:!1,deleteModal:!1,alert:{state:!1,color:"success",text:"",x:"right",y:"top"},currency:null}},methods:{showProduct:function(t){Object.assign(this.product,t),this.showModal=!0},closeShowModal:function(){this.showModal=!1},openModalDelete:function(t){this.deleteModal=!0,this.productId=t},loadProducts:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i["a"].getAllProducts();case 3:return a=e.sent,t.products=a.data.products,e.next=7,c["a"].getOneConfiguration(1);case 7:o=e.sent,t.currency=o.data.setting.currency,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),t.showSessionExpiredModal(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},deleteProduct:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i["a"].deleteProduct(t.productId);case 3:e.sent,t.deleteModal=!1,t.loadProducts(),t.alert.color="success",t.alert.text="ÉXITO : Se eliminó correctamente",t.alert.state=!0,e.next=17;break;case 11:e.prev=11,e.t0=e["catch"](0),t.showSessionExpiredModal(e.t0),t.alert.color="error",t.alert.text="ERROR : No se pudo eliminar",t.alert.state=!0;case 17:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},mounted:function(){this.loadProducts()}},S=V,P=a("62ad"),j=a("a523"),R=a("8fea"),T=a("169a"),I=a("0fd9"),E=a("8654"),A=a("71d9"),D=a("3a2f"),q=Object(m["a"])(S,o,r,!1,null,null,null);e["default"]=q.exports;_()(q,{VBtn:b["a"],VCard:f["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:P["a"],VContainer:j["a"],VDataTable:R["a"],VDialog:T["a"],VIcon:g["a"],VRow:I["a"],VSpacer:w["a"],VTextField:E["a"],VToolbar:A["a"],VTooltip:D["a"]})},"734d":function(t,e,a){"use strict";a("b0c0");var o=a("d4ec"),r=function t(e,a,r,n,i){Object(o["a"])(this,t),this.name=e,this.quantity=a,this.unit_price=r,this.total_in_stock=n,this.category_id=i};e["a"]=r},"7ebc":function(t,e,a){"use strict";a("b0c0");var o=a("d4ec"),r=a("bee2"),n=a("eeb9"),i=a("2c6e"),c=function(){function t(){Object(o["a"])(this,t)}return Object(r["a"])(t,[{key:"getAllProducts",value:function(){return n["a"].get("/products",{headers:Object(i["a"])()})}},{key:"getOneProduct",value:function(t){return n["a"].get("/products/".concat(t),{headers:Object(i["a"])()})}},{key:"addProduct",value:function(t){return n["a"].post("/products",{name:t.name,quantity:t.quantity,unit_price:t.unit_price,total_in_stock:t.total_in_stock,category_id:t.category_id},{headers:Object(i["a"])()})}},{key:"updateProduct",value:function(t,e){return n["a"].put("/products/".concat(t),{name:e.name,quantity:e.quantity,unit_price:e.unit_price,total_in_stock:e.total_in_stock,category_id:e.category_id},{headers:Object(i["a"])()})}},{key:"deleteProduct",value:function(t){return n["a"].delete("/products/".concat(t),{headers:Object(i["a"])()})}}]),t}();e["a"]=new c},"827f":function(t,e,a){"use strict";var o=a("d4ec"),r=a("bee2"),n=a("eeb9"),i=a("2c6e"),c=function(){function t(){Object(o["a"])(this,t)}return Object(r["a"])(t,[{key:"getOneConfiguration",value:function(t){return n["a"].get("/settings/".concat(t),{headers:Object(i["a"])()})}},{key:"updateConfiguration",value:function(t,e){return n["a"].put("/settings/".concat(t),{currency:e.currency,time_jwt:e.time_jwt},{headers:Object(i["a"])()})}}]),t}();e["a"]=new c}}]);
//# sourceMappingURL=chunk-70ab4ace.3d000e51.js.map