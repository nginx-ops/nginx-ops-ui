(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b290b5f"],{"09c7":function(e,t,o){"use strict";o("7df7")},"7df7":function(e,t,o){},dd7b:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login"},[o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules}},[o("h3",{staticClass:"title"},[e._v("nginx后台管理系统")]),o("el-form-item",{attrs:{prop:"loginName"}},[o("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.loginForm.loginName,callback:function(t){e.$set(e.loginForm,"loginName",t)},expression:"loginForm.loginName"}},[o("svg-icon",{staticClass:"el-input__icon input-icon",attrs:{slot:"prefix","icon-class":"user"},slot:"prefix"})],1)],1),o("el-form-item",{attrs:{prop:"password"}},[o("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}},[o("svg-icon",{staticClass:"el-input__icon input-icon",attrs:{slot:"prefix","icon-class":"password"},slot:"prefix"})],1)],1),o("el-form-item",{attrs:{prop:"verCode"}},[o("el-input",{staticStyle:{width:"63%"},attrs:{"auto-complete":"off",placeholder:"验证码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.verCode,callback:function(t){e.$set(e.loginForm,"verCode",t)},expression:"loginForm.verCode"}},[o("svg-icon",{staticClass:"el-input__icon input-icon",attrs:{slot:"prefix","icon-class":"validCode"},slot:"prefix"})],1),o("div",{staticClass:"login-code"},[o("img",{staticClass:"login-code-img",attrs:{src:e.codeUrl},on:{click:e.getCode}})])],1),o("el-checkbox",{staticStyle:{margin:"0px 0px 25px 0px"},model:{value:e.loginForm.rememberMe,callback:function(t){e.$set(e.loginForm,"rememberMe",t)},expression:"loginForm.rememberMe"}},[e._v("记住密码")]),o("el-form-item",{staticStyle:{width:"100%"}},[o("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,size:"medium",type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e.loading?o("span",[e._v("登 录 中...")]):o("span",[e._v("登 录")])]),e.register?o("div",{staticStyle:{float:"right"}},[o("router-link",{staticClass:"link-type",attrs:{to:"/register"}},[e._v("立即注册")])],1):e._e()],1)],1),e._m(0)],1)},n=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"el-login-footer"},[o("span",[e._v("Copyright © 2018-2022 ruoyi.vip All Rights Reserved.")])])}],r=o("dfaf"),l={name:"Login",data:function(){return{codeUrl:"",loginForm:{loginName:"",password:"",rememberMe:!1,verId:"",verCode:"",device:""},loginRules:{loginName:[{required:!0,trigger:"blur",message:"请输入您的账号"}],password:[{required:!0,trigger:"blur",message:"请输入您的密码"}],verCode:[{required:!0,trigger:"change",message:"请输入验证码"}]},loading:!1,register:!1,redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},created:function(){this.getCode(),this.getCookie()},methods:{getCode:function(){var e=this;r["a"].captcha().then((function(t){e.codeUrl=t.data.image,e.loginForm.verId=t.data.id}))},getCookie:function(){},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){t&&(e.loginForm.device=navigator.userAgent.toLowerCase(),e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/"}).catch((function(){}))})).catch((function(){e.loading=!1,e.captchaEnabled&&e.getCode()})))}))}}},s=l,a=(o("09c7"),o("2877")),c=Object(a["a"])(s,i,n,!1,null,null,null);t["default"]=c.exports}}]);