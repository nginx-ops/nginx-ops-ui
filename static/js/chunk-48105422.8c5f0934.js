(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48105422"],{"0f34":function(e,r,t){"use strict";t("97ad")},7803:function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"register"},[t("el-form",{ref:"registerForm",staticClass:"register-form",attrs:{model:e.registerForm,rules:e.registerRules}},[t("h3",{staticClass:"title"},[e._v("nginx后台管理系统")]),t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.registerForm.username,callback:function(r){e.$set(e.registerForm,"username",r)},expression:"registerForm.username"}},[t("svg-icon",{staticClass:"el-input__icon input-icon",attrs:{slot:"prefix","icon-class":"user"},slot:"prefix"})],1)],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.handleRegister(r)}},model:{value:e.registerForm.password,callback:function(r){e.$set(e.registerForm,"password",r)},expression:"registerForm.password"}},[t("svg-icon",{staticClass:"el-input__icon input-icon",attrs:{slot:"prefix","icon-class":"password"},slot:"prefix"})],1)],1),t("el-form-item",{attrs:{prop:"confirmPassword"}},[t("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"确认密码"},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.handleRegister(r)}},model:{value:e.registerForm.confirmPassword,callback:function(r){e.$set(e.registerForm,"confirmPassword",r)},expression:"registerForm.confirmPassword"}},[t("svg-icon",{staticClass:"el-input__icon input-icon",attrs:{slot:"prefix","icon-class":"password"},slot:"prefix"})],1)],1),t("el-form-item",{attrs:{prop:"nickName"}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"昵称"},model:{value:e.registerForm.nickName,callback:function(r){e.$set(e.registerForm,"nickName",r)},expression:"registerForm.nickName"}},[t("svg-icon",{staticClass:"el-input__icon input-icon",attrs:{slot:"prefix","icon-class":"form"},slot:"prefix"})],1)],1),t("el-form-item",{staticStyle:{width:"100%"}},[t("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,size:"medium",type:"primary"},nativeOn:{click:function(r){return r.preventDefault(),e.handleRegister(r)}}},[e.loading?t("span",[e._v("注 册 中...")]):t("span",[e._v("注 册")])]),t("div",{staticStyle:{float:"right"}},[t("router-link",{staticClass:"link-type",attrs:{to:"/login"}},[e._v("使用已有账户登录")])],1)],1)],1),e._m(0)],1)},i=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"el-register-footer"},[t("span",[e._v("Copyright © 2018-2022 ruoyi.vip All Rights Reserved.")])])}],n=t("dfaf"),o={name:"Register",data:function(){var e=this,r=function(r,t,s){e.registerForm.password!==t?s(new Error("两次输入的密码不一致")):s()};return{registerForm:{username:"",password:"",confirmPassword:"",nickName:""},registerRules:{username:[{required:!0,trigger:"blur",message:"请输入您的账号"},{min:2,max:20,message:"用户账号长度必须介于 2 和 20 之间",trigger:"blur"}],password:[{required:!0,trigger:"blur",message:"请输入您的密码"},{min:5,max:20,message:"用户密码长度必须介于 5 和 20 之间",trigger:"blur"}],confirmPassword:[{required:!0,trigger:"blur",message:"请再次输入您的密码"},{required:!0,validator:r,trigger:"blur"}],nickName:[{required:!0,trigger:"blur",message:"请输入您的昵称"},{min:5,max:20,message:"用户昵称长度必须介于 5 和 20 之间",trigger:"blur"}]},loading:!1}},created:function(){this.getCode()},methods:{getCode:function(){n["a"].captcha().then((function(e){}))},handleRegister:function(){var e=this;this.$refs.registerForm.validate((function(r){r&&(e.loading=!0,register(e.registerForm).then((function(r){var t=e.registerForm.username;e.$alert("<font color='red'>恭喜你，您的账号 "+t+" 注册成功！</font>","系统提示",{dangerouslyUseHTMLString:!0,type:"success"}).then((function(){e.$router.push("/login")})).catch((function(){}))})).catch((function(){e.loading=!1,e.captchaEnabled&&e.getCode()})))}))}}},a=o,l=(t("0f34"),t("2877")),c=Object(l["a"])(a,s,i,!1,null,null,null);r["default"]=c.exports},"97ad":function(e,r,t){}}]);