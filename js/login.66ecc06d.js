(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{2017:function(t,e,n){"use strict";var s=n("29a88"),a=n.n(s);a.a},"29a88":function(t,e,n){t.exports={subMenuBg:"#1f2d3d",subMenuHover:"#001528",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuText:"#bfcbd9",menuActiveText:"#409EFF"}},"4f34":function(t,e,n){},"5e53":function(t,e,n){},"733d":function(t,e,n){"use strict";var s=n("5e53"),a=n.n(s);a.a},"73d4":function(t,e,n){"use strict";var s=n("4f34"),a=n.n(s);a.a},"9ed6":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,"auto-complete":"on","label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[t._v("\n        "+t._s(t.$t("login.title"))+"\n      ")]),n("lang-select",{staticClass:"set-language"})],1),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{name:"user"}})],1),n("el-input",{ref:"username",attrs:{placeholder:t.$t("login.username"),name:"username",type:"text","auto-complete":"on"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{name:"password"}})],1),n("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,placeholder:t.$t("login.password"),name:"password","auto-complete":"on"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}}),n("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[n("svg-icon",{attrs:{name:"password"===t.passwordType?"eye-off":"eye-on"}})],1)],1),n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("\n      "+t._s(t.$t("login.logIn"))+"\n    ")]),n("div",{staticStyle:{position:"relative"}},[n("div",{staticClass:"tips"},[n("span",[t._v(t._s(t.$t("login.username"))+" : admin ")]),n("span",[t._v(t._s(t.$t("login.password"))+" : "+t._s(t.$t("login.any"))+" ")])]),n("div",{staticClass:"tips"},[n("span",[t._v(t._s(t.$t("login.username"))+" : editor ")]),n("span",[t._v(t._s(t.$t("login.password"))+" : "+t._s(t.$t("login.any"))+" ")])]),n("el-button",{staticClass:"thirdparty-button",attrs:{type:"primary"},on:{click:function(e){t.showDialog=!0}}},[t._v("\n        "+t._s(t.$t("login.thirdparty"))+"\n      ")])],1)],1),n("el-dialog",{attrs:{title:t.$t("login.thirdparty"),visible:t.showDialog},on:{"update:visible":function(e){t.showDialog=e}}},[t._v("\n    "+t._s(t.$t("login.thirdpartyTips"))+"\n    "),n("br"),n("br"),n("br"),n("social-sign")],1)],1)},a=[],i=(n("ac6a"),n("456d"),n("d225")),o=n("b0b4"),r=n("308d"),l=n("6bb5"),c=n("4e2b"),u=n("9ab4"),d=n("60a3"),p=n("9dba"),g=n("75fb"),f=n("1131"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"social-signup-container"},[n("div",{staticClass:"sign-btn",on:{click:function(e){return t.wechatHandleClick("wechat")}}},[n("span",{staticClass:"wx-svg-container"},[n("svg-icon",{staticClass:"icon",attrs:{name:"wechat"}})],1),t._v(" 微信\n  ")]),n("div",{staticClass:"sign-btn",on:{click:function(e){return t.tencentHandleClick("tencent")}}},[n("span",{staticClass:"qq-svg-container"},[n("svg-icon",{staticClass:"icon",attrs:{name:"qq"}})],1),t._v(" QQ\n  ")])])},h=[],v=function(t){function e(){return Object(i["a"])(this,e),Object(r["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(o["a"])(e,[{key:"wechatHandleClick",value:function(t){alert("ok")}},{key:"tencentHandleClick",value:function(t){alert("ok")}}]),e}(d["c"]);v=u["a"]([d["a"]],v);var w=v,b=w,y=(n("73d4"),n("0c7c")),k=Object(y["a"])(b,m,h,!1,null,"df66bd32",null),C=k.exports,_=function(t,e,n){Object(g["c"])(e)?n():n(new Error("Please enter the correct user name"))},$=function(t,e,n){e.length<6?n(new Error("The password can not be less than 6 digits")):n()},O=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(r["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.loginForm={username:"admin",password:"111111"},t.loginRules={username:[{required:!0,trigger:"blur",validator:_}],password:[{required:!0,trigger:"blur",validator:$}]},t.passwordType="password",t.loading=!1,t.showDialog=!1,t.otherQuery={},t}return Object(c["a"])(e,t),Object(o["a"])(e,[{key:"OnRouteChange",value:function(t){var e=t.query;e&&(this.redirect=e.redirect,this.otherQuery=this.getOtherQuery(e))}},{key:"mounted",value:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()}},{key:"showPwd",value:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick(function(){t.$refs.password.focus()})}},{key:"handleLogin",value:function(){var t=this;this.$refs.loginForm.validate(function(e){if(!e)return!1;t.loading=!0,p["a"].Login(t.loginForm).then(function(){t.loading=!1,t.$router.push({path:t.redirect||"/",query:t.otherQuery})}).catch(function(){t.loading=!1})})}},{key:"getOtherQuery",value:function(t){return Object.keys(t).reduce(function(e,n){return"redirect"!==n&&(e[n]=t[n]),e},{})}}]),e}(d["c"]);u["a"]([Object(d["d"])("$route",{immediate:!0})],O.prototype,"OnRouteChange",null),O=u["a"]([Object(d["a"])({components:{LangSelect:f["a"],SocialSign:C}})],O);var j=O,F=j,x=(n("2017"),n("733d"),Object(y["a"])(F,s,a,!1,null,"0ebd6147",null));e["default"]=x.exports}}]);