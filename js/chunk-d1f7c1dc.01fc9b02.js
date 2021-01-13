(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1f7c1dc"],{1681:function(t,e,s){},"4bd4":function(t,e,s){"use strict";s("4de4"),s("7db0"),s("4160"),s("caad"),s("07ac"),s("2532"),s("159b");var a=s("5530"),r=s("58df"),i=s("7e2b"),n=s("3206");e["a"]=Object(r["a"])(i["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,s=function(t){return t.$watch("hasError",(function(s){e.$set(e.errorBag,t._uid,s)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=s(t)))})):a.valid=s(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var s=this.watchers.find((function(t){return t._uid===e._uid}));s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"78a0":function(t,e,s){"use strict";s.r(e);var a=function(){var t,e=this,s=e.$createElement,a=e._self._c||s;return a("v-container",{attrs:{id:"user-profile",fluid:"",tag:"section"}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"7"}},[a("base-material-snackbar",e._b({attrs:{type:e.alert.color},model:{value:e.alert.state,callback:function(t){e.$set(e.alert,"state",t)},expression:"alert.state"}},"base-material-snackbar",(t={},t[e.alert.x]=!0,t[e.alert.y]=!0,t),!1),[e._v(" "+e._s(e.alert.text)+" ")]),a("base-material-card",{attrs:{color:"green"},scopedSlots:e._u([{key:"heading",fn:function(){return[a("div",{staticClass:"display-2 font-weight-light"},[e._v(" Mi Perfil ")]),a("div",{staticClass:"subtitle-1 font-weight-light"},[e._v(" Completa tu perfil ")])]},proxy:!0}])},[a("v-form",{on:{submit:function(t){return t.preventDefault(),e.updateUser()}}},[a("v-container",{staticClass:"py-0"},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Nombre de Usuario"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Nombres"},model:{value:e.user.first_name,callback:function(t){e.$set(e.user,"first_name",t)},expression:"user.first_name"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Apellidos"},model:{value:e.user.last_name,callback:function(t){e.$set(e.user,"last_name",t)},expression:"user.last_name"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Correo Electronico"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Dirección"},model:{value:e.user.address,callback:function(t){e.$set(e.user,"address",t)},expression:"user.address"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Cuidad"},model:{value:e.user.city,callback:function(t){e.$set(e.user,"city",t)},expression:"user.city"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Pais"},model:{value:e.user.country,callback:function(t){e.$set(e.user,"country",t)},expression:"user.country"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Telefono / celular",type:"number"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{staticClass:"purple-input",attrs:{label:"Acerca de mí o frase favorita",rows:"5"},model:{value:e.user.about_me,callback:function(t){e.$set(e.user,"about_me",t)},expression:"user.about_me"}})],1),a("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[a("v-btn",{staticClass:"mr-0",attrs:{color:"success",type:"submit"}},[e._v(" Guardar cambios ")])],1)],1)],1)],1)],1),a("base-material-card",{scopedSlots:e._u([{key:"heading",fn:function(){return[a("div",{staticClass:"display-2 font-weight-light"},[e._v(" Cambiar Contraseña ")]),a("div",{staticClass:"subtitle-1 font-weight-light"},[e._v(" Guarde su contraseña en un sitio seguro ")])]},proxy:!0}])},[a("v-form",{on:{submit:function(t){return t.preventDefault(),e.changePassword()}}},[a("v-container",{staticClass:"py-0"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{staticClass:"purple-input input-group--focused",attrs:{label:"Nueva Contraseña","append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password",name:"password",hint:"Al menos 8 caracteres",required:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Repetir Contraseña","append-icon":e.show2?"mdi-eye":"mdi-eye-off",type:e.show2?"text":"password",name:"password_confirmed",hint:"Al menos 8 caracteres",required:""},on:{"click:append":function(t){e.show2=!e.show2}},model:{value:e.user.password_confirmation,callback:function(t){e.$set(e.user,"password_confirmation",t)},expression:"user.password_confirmation"}})],1),a("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[a("v-btn",{staticClass:"mr-0",attrs:{color:"primary",type:"submit"}},[e._v(" Cambiar Contraseña ")])],1)],1)],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"5"}},[a("base-material-card",{staticClass:"v-card-profile",attrs:{avatar:"https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"}},[a("v-card-text",[a("div",{staticClass:"text-center"},[a("h6",{staticClass:"display-1 mb-1 grey--text"},[e._v(" "+e._s(e.user.email)+" ")]),a("h4",{staticClass:"display-2 font-weight-light mb-3 black--text"},[e._v(" "+e._s(e.user.first_name)+" "+e._s(e.user.last_name)+" ")]),a("p",{staticClass:"font-weight-light grey--text"},[e._v(" "+e._s(e.user.about_me)+" ")])]),a("v-divider",{staticClass:"mb-2"}),a("v-list-item",[a("v-list-item-icon",[a("v-icon",{attrs:{color:"info"}},[e._v(" mdi-home ")])],1),a("v-list-item-content",[a("p",[e._v(e._s(e.user.address))]),a("v-list-item-subtitle",[e._v("Dirección")])],1)],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",{attrs:{color:"info"}},[e._v(" mdi-city ")])],1),a("v-list-item-content",[a("p",[e._v(e._s(e.user.city))]),a("v-list-item-subtitle",[e._v("Ciudad")])],1)],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",{attrs:{color:"info"}},[e._v(" mdi-earth ")])],1),a("v-list-item-content",[a("p",[e._v(e._s(e.user.country))]),a("v-list-item-subtitle",[e._v("País")])],1)],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",{attrs:{color:"info"}},[e._v(" mdi-phone ")])],1),a("v-list-item-content",[a("p",[e._v(e._s(e.user.phone))]),a("v-list-item-subtitle",[e._v("Telefono")])],1)],1)],1)],1)],1)],1)],1)},r=[],i=(s("96cf"),s("1da1")),n=s("ebd1"),o=s("9962"),c=(s("b0c0"),s("d4ec")),l=s("bee2"),u=s("eeb9"),d=s("2c6e"),p=function(){function t(){Object(c["a"])(this,t)}return Object(l["a"])(t,[{key:"updateUser",value:function(t,e){return u["a"].put("/users/".concat(t),{name:e.name,first_name:e.first_name,last_name:e.last_name,address:e.address,city:e.city,country:e.country,about_me:e.about_me,phone:e.phone,email:e.email,last_user:e.last_user},{headers:Object(d["a"])()})}}]),t}(),m=new p,h=s("a189"),f={mixins:[h["a"]],name:"UserProfile",data:function(){return{user:new n["a"]("","",""),show1:!1,show2:!1,alert:{state:!1,color:"success",text:"",x:"right",y:"top"}}},methods:{me:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o["a"].me();case 3:s=e.sent,t.user=s.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.showSessionExpiredModal(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},updateUser:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.user.last_user=t.user.id,e.next=4,m.updateUser(t.user.id,t.user);case 4:s=e.sent,s&&(t.alert.state=!0,t.alert.color="success",t.alert.text="ÉXITO : Se guardaron los datos correctamente"),e.next=15;break;case 8:e.prev=8,e.t0=e["catch"](0),t.showSessionExpiredModal(e.t0),t.alert.state=!0,t.alert.color="error",t.alert.text="ERROR : Datos incorrectos, no se pudo actualizar",console.log(e.t0.response.data);case 15:case"end":return e.stop()}}),e,null,[[0,8]])})))()},changePassword:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o["a"].changePassword(t.user);case 3:s=e.sent,s&&(t.alert.state=!0,t.alert.color="success",t.alert.text="ÉXITO : La contraseña se modificó correctamente"),e.next=13;break;case 7:e.prev=7,e.t0=e["catch"](0),t.showSessionExpiredModal(e.t0),t.alert.state=!0,t.alert.color="error",t.alert.text="ERROR : Contraseña no válida";case 13:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.me()}},v=f,b=s("2877"),w=s("6544"),_=s.n(w),x=s("8336"),g=s("99d9"),y=s("62ad"),C=s("a523"),k=s("ce7e"),$=s("4bd4"),E=s("132d"),I=s("da13"),O=s("5d23"),R=s("34c3"),V=s("0fd9"),S=s("8654"),j=s("a844"),B=Object(b["a"])(v,a,r,!1,null,null,null);e["default"]=B.exports;_()(B,{VBtn:x["a"],VCardText:g["b"],VCol:y["a"],VContainer:C["a"],VDivider:k["a"],VForm:$["a"],VIcon:E["a"],VListItem:I["a"],VListItemContent:O["a"],VListItemIcon:R["a"],VListItemSubtitle:O["b"],VRow:V["a"],VTextField:S["a"],VTextarea:j["a"]})},a189:function(t,e,s){"use strict";s("9962");var a={data:function(){return{}},methods:{showSessionExpiredModal:function(t){var e=this;try{401===t.response.status?(this.$store.commit("SET_SESSION_EXPIRED_MODAL",!0),setTimeout((function(){e.$store.commit("SET_SESSION_EXPIRED_MODAL",!1),e.$store.dispatch("auth/logout"),e.$router.push("/login")}),5e3)):console.log("error: ",t)}catch(s){console.log("El error en mixin/auth es : ",s),console.error("\nEL ERROR VERDADERO ES: ",t)}}},computed:{}};e["a"]=a},a844:function(t,e,s){"use strict";s("a9e3");var a=s("5530"),r=(s("1681"),s("8654")),i=s("58df"),n=Object(i["a"])(r["a"]);e["a"]=n.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(a["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},r["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(s,e)+"px"}},genInput:function(){var t=r["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){r["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},ebd1:function(t,e,s){"use strict";s("b0c0");var a=s("d4ec"),r=function t(e,s,r){Object(a["a"])(this,t),this.name=e,this.first_name="",this.last_name="",this.address="",this.city="",this.country="",this.about_me="",this.phone="",this.email=s,this.last_user="",this.password=r,this.password_confirmation=""};e["a"]=r}}]);
//# sourceMappingURL=chunk-d1f7c1dc.01fc9b02.js.map