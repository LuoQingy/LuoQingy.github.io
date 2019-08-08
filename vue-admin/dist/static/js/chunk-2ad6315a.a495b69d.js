(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ad6315a"],{"01e6":function(t,n,s){},2017:function(t,n,s){"use strict";var e=s("3b76"),o=s.n(e);o.a},"3b76":function(t,n,s){},"608d":function(t,n,s){"use strict";var e=s("c674"),o=s.n(e);o.a},"9ed6":function(t,n,s){"use strict";s.r(n);var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"login-container"},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[t._v("系统登录")])]),t._v(" "),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),t._v(" "),s("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:t.loginForm.username,callback:function(n){t.$set(t.loginForm,"username",n)},expression:"loginForm.username"}})],1),t._v(" "),s("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:t.capsTooltip,callback:function(n){t.capsTooltip=n},expression:"capsTooltip"}},[s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),t._v(" "),s("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},on:{blur:function(n){t.capsTooltip=!1}},nativeOn:{keyup:[function(n){return t.checkCapslock(n)},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.handleLogin(n)}]},model:{value:t.loginForm.password,callback:function(n){t.$set(t.loginForm,"password",n)},expression:"loginForm.password"}}),t._v(" "),s("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===t.passwordType?"eye":"eye-open"}})],1)],1)],1),t._v(" "),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(n){return n.preventDefault(),t.handleLogin(n)}}},[t._v("登录")]),t._v(" "),s("div",{staticStyle:{position:"relative",height:"30px"}},[s("el-button",{staticClass:"thirdparty-button",attrs:{type:"primary"},on:{click:function(n){t.showDialog=!0}}},[t._v("\n                第三方登录\n            ")])],1)],1),t._v(" "),s("el-dialog",{attrs:{title:"第三方登录",visible:t.showDialog},on:{"update:visible":function(n){t.showDialog=n}}},[t._v("\n        本地不能模拟，请结合自己业务进行模拟! ! !\n        "),s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("social-sign")],1)],1)},o=[],i=s("61f7"),a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"social-signup-container"},[s("div",{staticClass:"sign-btn",on:{click:function(n){return t.wechatHandleClick("wechat")}}},[s("span",{staticClass:"wx-svg-container"},[s("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),t._v("\n    WeChat\n  ")]),t._v(" "),s("div",{staticClass:"sign-btn",on:{click:function(n){return t.tencentHandleClick("tencent")}}},[s("span",{staticClass:"qq-svg-container"},[s("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),t._v("\n    QQ\n  ")])])},r=[],c={name:"SocialSignin",methods:{wechatHandleClick:function(t){alert("ok")},tencentHandleClick:function(t){alert("ok")}}},l=c,u=(s("edc1"),s("2877")),p=Object(u["a"])(l,a,r,!1,null,"c817cede",null),d=p.exports,g={name:"Login",components:{socialSign:d},data:function(){var t=function(t,n,s){Object(i["b"])(n)?s():s(new Error("请输入正确的用户名"))},n=function(t,n,s){n.length<6?s(new Error("密码不能少于6位")):s()};return{loginForm:{username:"admin",password:"111111"},loginRules:{username:[{required:!0,trigger:"blur",validator:t}],password:[{required:!0,trigger:"blur",validator:n}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},methods:{checkCapslock:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.shiftKey,s=t.key;console.log(n,s),s&&1===s.length&&(this.capsTooltip=!!(n&&s>="a"&&s<="z"||!n&&s>="A"&&s<="Z")),"CapsLock"===s&&!0===this.capsTooltip&&(this.capsTooltip=!1)},showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick(function(){t.$refs.password.focus()})},handleLogin:function(){var t=this;this.$refs.loginForm.validate(function(n){if(!n)return console.log("error submit!!"),!1;t.loading=!0,t.$store.dispatch("user/login",t.loginForm).then(function(){t.$router.push({path:t.redirect||"/"}),t.loading=!1}).catch(function(){t.$router.push({path:t.redirect||"/"}),t.loading=!1})})}}},h=g,f=(s("2017"),s("608d"),Object(u["a"])(h,e,o,!1,null,"6378eddd",null));n["default"]=f.exports},c674:function(t,n,s){},edc1:function(t,n,s){"use strict";var e=s("01e6"),o=s.n(e);o.a}}]);