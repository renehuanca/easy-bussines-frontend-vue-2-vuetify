(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2757354b"],{"2a7f":function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var i=o("71d9"),r=o("80d2"),n=Object(r["h"])("v-toolbar__title"),s=Object(r["h"])("v-toolbar__items");i["a"]},"3a66":function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var i=o("fe6c"),r=o("58df");function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(r["a"])(Object(i["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,o=e.length;t<o;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"5e23":function(t,e,o){},"71d9":function(t,e,o){"use strict";o("0481"),o("4160"),o("4069"),o("a9e3");var i=o("3835"),r=o("5530"),n=(o("5e23"),o("8dd9")),s=o("adda"),l=o("80d2"),a=o("d9bd");e["a"]=n["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(r["a"])(Object(r["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(r["a"])(Object(r["a"])({},this.measurableStyles),{},{height:Object(l["g"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var o=Object(i["a"])(e,2),r=o[0],n=o[1];t.$attrs.hasOwnProperty(r)&&Object(a["a"])(r,n,t)}))},methods:{genBackground:function(){var t={height:Object(l["g"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(s["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(l["g"])(this.computedContentHeight)}},Object(l["r"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(l["g"])(this.extensionHeight)}},Object(l["r"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],o=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,o,e)}})},"8b0d":function(t,e,o){},"8e07":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app-bar",{attrs:{id:"app-bar",absolute:"",app:"",color:"transparent",flat:"",height:"75"}},[o("v-btn",{staticClass:"mr-3",attrs:{elevation:"1",fab:"",small:""},on:{click:function(e){return t.setDrawer(!t.drawer)}}},[t.value?o("v-icon",[t._v(" mdi-view-quilt ")]):o("v-icon",[t._v(" mdi-dots-vertical ")])],1),o("v-toolbar-title",{staticClass:"hidden-sm-and-down font-weight-light",domProps:{textContent:t._s(t.$route.name)}}),o("v-spacer"),o("div",{staticClass:"mx-3"}),o("base-full-Screen"),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"ml-2",attrs:{"min-width":"0",text:"",to:{name:"User Profile"}}},"v-btn",r,!1),i),[o("v-icon",[t._v("mdi-account")])],1)]}}])},[o("span",[t._v("Perfil")])]),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"ml-2",attrs:{"min-width":"0",text:""},on:{click:t.logout}},"v-btn",r,!1),i),[o("v-icon",[t._v("mdi-exit-to-app")])],1)]}}])},[o("span",[t._v("Salir")])])],1)},r=[],n=o("5530"),s=o("16b7"),l=o("f2e7"),a=o("58df"),c=o("d9bd"),h=Object(a["a"])(s["a"],l["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(c["c"])("v-hover should only contain a single element",this),t)):(Object(c["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var t}}),d=o("da13"),p=o("2f62"),u={name:"DashboardCoreAppBar",components:{AppBarItem:{render:function(t){var e=this;return t(h,{scopedSlots:{default:function(o){var i=o.hover;return t(d["a"],{attrs:e.$attrs,class:{"black--text":!i,"white--text secondary elevation-12":i},props:Object(n["a"])({activeClass:"",dark:i,link:!0},e.$attrs)},e.$slots.default)}}})}}},props:{value:{type:Boolean,default:!1}},data:function(){return{notifications:["Bajo stock refrigerador","HACER TABLA NOTIFICACIONES RELACIONADO CON USUARIO GLOBAL EN STORE","You're now friends with Andrew","Another Notification","Another one"]}},computed:Object(n["a"])({},Object(p["c"])(["drawer"])),methods:Object(n["a"])(Object(n["a"])({},Object(p["b"])({setDrawer:"SET_DRAWER"})),{},{logout:function(){this.$store.dispatch("auth/logout"),this.$router.push({name:"Login"})}})},f=u,v=o("2877"),m=o("6544"),b=o.n(m),g=(o("a9e3"),o("b680"),o("c7cd"),o("8b0d"),o("71d9")),S=o("53ca");function O(t,e){var o=e.modifiers||{},i=o.self,r=void 0!==i&&i,n=e.value,s="object"===Object(S["a"])(n)&&n.options||{passive:!0},l="function"===typeof n||"handleEvent"in n?n:n.handler,a=r?t:e.arg?document.querySelector(e.arg):window;a&&(a.addEventListener("scroll",l,s),t._onScroll={handler:l,options:s,target:r?void 0:a})}function y(t){if(t._onScroll){var e=t._onScroll,o=e.handler,i=e.options,r=e.target,n=void 0===r?t:r;n.removeEventListener("scroll",o,i),delete t._onScroll}}var j={inserted:O,unbind:y},x=j,T=o("3a66"),A=o("2b0e"),B=A["a"].extend({name:"scrollable",directives:{Scroll:j},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(c["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),w=o("d10f"),_=o("80d2"),C=Object(a["a"])(g["a"],B,w["a"],l["a"],Object(T["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"])),E=C.extend({name:"v-app-bar",directives:{Scroll:x},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return B.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(n["a"])(Object(n["a"])({},g["a"].options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},computedContentHeight:function(){if(!this.shrinkOnScroll)return g["a"].options.computed.computedContentHeight.call(this);var t=this.computedOriginalHeight,e=this.dense?48:56,o=t,i=o-e,r=i/this.computedScrollThreshold,n=this.currentScroll*r;return Math.max(e,o-n)},computedFontSize:function(){if(this.isProminent){var t=this.dense?96:128,e=t-this.computedContentHeight,o=.00347;return Number((1.5-e*o).toFixed(2))}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll){var t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))}},computedOriginalHeight:function(){var t=g["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:g["a"].options.computed.isCollapsed.call(this)},isProminent:function(){return g["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(n["a"])(Object(n["a"])({},g["a"].options.computed.styles.call(this)),{},{fontSize:Object(_["g"])(this.computedFontSize,"rem"),marginTop:Object(_["g"])(this.computedMarginTop),transform:"translateY(".concat(Object(_["g"])(this.computedTransform),")"),left:Object(_["g"])(this.computedLeft),right:Object(_["g"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=g["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=g["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),$=o("8336"),k=o("132d"),H=o("2fa4"),P=o("2a7f"),L=o("3a2f"),U=Object(v["a"])(f,i,r,!1,null,null,null);e["default"]=U.exports;b()(U,{VAppBar:E,VBtn:$["a"],VIcon:k["a"],VSpacer:H["a"],VToolbarTitle:P["a"],VTooltip:L["a"]})}}]);
//# sourceMappingURL=chunk-2757354b.431491d6.js.map