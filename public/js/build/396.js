"use strict";(self.webpackChunkDooTask=self.webpackChunkDooTask||[]).push([[396],{84396:(e,t,o)=>{o.r(t),o.d(t,{default:()=>c});var n=o(20629),i=o(80641);function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const l={data:function(){return{loadIng:0,codeNeed:!1,codeUrl:$A.apiUrl("users/login/codeimg"),loginType:"login",loginJump:!1,email:$A.getStorageString("cacheLoginEmail")||"",password:"",password2:"",code:"",invite:"",demoAccount:{},needInvite:!1,subscribe:null}},mounted:function(){var e=this;this.getDemoAccount(),this.$Electron?this.chackServerUrl().catch((function(){})):this.clearServerUrl(),this.subscribe=i.Store.subscribe("useSSOLogin",(function(){e.inputServerUrl()}))},beforeDestroy:function(){this.subscribe&&(this.subscribe.unsubscribe(),this.subscribe=null)},activated:function(){this.loginType="login"},deactivated:function(){this.loginJump=!1,this.password="",this.password2="",this.code="",this.invite=""},computed:r(r({},(0,n.rn)(["cacheServerUrl","themeMode","themeList"])),{},{currentLanguage:function(){return this.languageList[this.languageType]||"Language"},welcomeTitle:function(){var e=window.systemInfo.title||"Dootask";return"PublicDooTask"==e?"Public DooTask":"Welcome "+e},loginText:function(){var e="login"==this.loginType?"登录":"注册";return this.loginJump&&(e+="成功..."),e}}),watch:{loginType:function(e){"reg"==e&&this.getNeedInvite()}},methods:{setTheme:function(e){this.$store.dispatch("setTheme",e)},getDemoAccount:function(){var e=this;this.isNotServer()||this.$store.dispatch("call",{url:"system/demo"}).then((function(t){var o=t.data;e.demoAccount=o,o.account&&(e.email=o.account,e.password=o.password)})).catch((function(){e.demoAccount={}}))},getNeedInvite:function(){var e=this;this.$store.dispatch("call",{url:"users/reg/needinvite"}).then((function(t){var o=t.data;e.needInvite=!!o.need})).catch((function(){e.needInvite=!1}))},forgotPassword:function(){$A.modalWarning("请联系管理员！")},reCode:function(){this.codeUrl=$A.apiUrl("users/login/codeimg?_="+Math.random())},inputServerUrl:function(){var e=this;$A.modalInput({title:"使用 SSO 登录",value:this.cacheServerUrl,placeholder:"请输入服务器地址",onOk:function(t,o){if(t)return $A.leftExists(t,"http://")||$A.leftExists(t,"https://")||(t="http://"+t),$A.rightExists(t,"/api/")||(t+=$A.rightExists(t,"/")?"api/":"/api/"),void e.$store.dispatch("call",{url:t+"system/setting"}).then((function(){e.setServerUrl(t),o()})).catch((function(e){var t=e.msg;$A.modalError(t||"服务器地址无效",301),o()}));e.clearServerUrl()}})},chackServerUrl:function(e){var t=this;return new Promise((function(o,n){t.$Electron&&t.isNotServer()?(!0===e&&$A.messageWarning("请设置服务器"),t.inputServerUrl(),n()):o()}))},setServerUrl:function(e){e!=this.cacheServerUrl&&($A.setStorage("cacheServerUrl",e),window.location.reload())},clearServerUrl:function(){this.setServerUrl("")},isNotServer:function(){var e=$A.getDomain(window.systemInfo.apiUrl);return""==e||"public"==e},onBlur:function(){var e=this;"login"==this.loginType&&this.email?(this.loadIng++,this.$store.dispatch("call",{url:"users/login/needcode",data:{email:this.email}}).then((function(){e.loadIng--,e.reCode(),e.codeNeed=!0})).catch((function(){e.loadIng--,e.codeNeed=!1}))):this.codeNeed=!1},onLogin:function(){var e=this;this.chackServerUrl(!0).then((function(){e.email=$A.trim(e.email),e.password=$A.trim(e.password),e.password2=$A.trim(e.password2),e.code=$A.trim(e.code),e.invite=$A.trim(e.invite),$A.isEmail(e.email)?e.password?"reg"!=e.loginType||e.password==e.password2?(e.loadIng++,e.$store.dispatch("call",{url:"users/login",data:{type:e.loginType,email:e.email,password:e.password,code:e.code,invite:e.invite}}).then((function(t){var o=t.data;e.loadIng--,$A.setStorage("cacheLoginEmail",e.email),e.$store.dispatch("handleClearCache",o).then((function(){e.goNext1()})).catch((function(){e.goNext1()}))})).catch((function(t){var o=t.data,n=t.msg;e.loadIng--,1e3===o.code?$A.modalSuccess(n):$A.modalError(n),"need"===o.code&&(e.reCode(),e.codeNeed=!0)}))):$A.messageWarning("确认密码输入不一致"):$A.messageWarning("请输入密码"):$A.messageWarning("请输入正确的邮箱地址")}))},goNext1:function(){var e=this;this.loginJump=!0,"login"==this.loginType?this.goNext2():this.$store.dispatch("call",{url:"project/add",data:{name:this.$L("个人项目"),desc:this.$L("注册时系统自动创建项目，你可以自由删除。")}}).then((function(){e.goNext2()})).catch((function(){e.goNext2()}))},goNext2:function(){var e=decodeURIComponent($A.getObject(this.$route.query,"from"));e?window.location.replace(e):this.goForward({path:"/manage/dashboard"},!0)}}};const c=(0,o(51900).Z)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page-login"},[o("PageTitle",{attrs:{title:e.$L("登录")}}),e._v(" "),o("div",{staticClass:"login-body"},[o("div",{staticClass:"login-logo no-dark-mode"}),e._v(" "),o("div",{staticClass:"login-box"},[o("div",{staticClass:"login-title"},[e._v(e._s(e.welcomeTitle))]),e._v(" "),"reg"==e.loginType?o("div",{staticClass:"login-subtitle"},[e._v(e._s(e.$L("输入您的信息以创建帐户。")))]):o("div",{staticClass:"login-subtitle"},[e._v(e._s(e.$L("输入您的凭证以访问您的帐户。")))]),e._v(" "),o("div",{staticClass:"login-input"},[e.$Electron&&e.cacheServerUrl?o("Input",{attrs:{value:e.$A.getDomain(e.cacheServerUrl),prefix:"ios-globe-outline",size:"large",readonly:"",clearable:""},on:{"on-clear":e.clearServerUrl}}):e._e(),e._v(" "),o("Input",{attrs:{prefix:"ios-mail-outline",placeholder:e.$L("输入您的电子邮件"),size:"large"},on:{"on-enter":e.onLogin,"on-blur":e.onBlur},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),o("Input",{attrs:{prefix:"ios-lock-outline",placeholder:e.$L("输入您的密码"),type:"password",size:"large"},on:{"on-enter":e.onLogin},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),"reg"==e.loginType?o("Input",{attrs:{prefix:"ios-lock-outline",placeholder:e.$L("输入确认密码"),type:"password",size:"large"},on:{"on-enter":e.onLogin},model:{value:e.password2,callback:function(t){e.password2=t},expression:"password2"}}):e._e(),e._v(" "),"reg"==e.loginType&&e.needInvite?o("Input",{staticClass:"login-code",attrs:{placeholder:e.$L("请输入注册邀请码"),type:"text",size:"large"},on:{"on-enter":e.onLogin},model:{value:e.invite,callback:function(t){e.invite=t},expression:"invite"}},[o("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v(" "+e._s(e.$L("邀请码"))+" ")])]):e._e(),e._v(" "),"login"==e.loginType&&e.codeNeed?o("Input",{staticClass:"login-code",attrs:{placeholder:e.$L("输入图形验证码"),size:"large"},on:{"on-enter":e.onLogin},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}},[o("Icon",{staticClass:"login-icon",attrs:{slot:"prepend",type:"ios-checkmark-circle-outline"},slot:"prepend"}),e._v(" "),o("div",{staticClass:"login-code-end",attrs:{slot:"append"},on:{click:e.reCode},slot:"append"},[o("img",{attrs:{src:e.codeUrl}})])],1):e._e(),e._v(" "),o("Button",{attrs:{type:"primary",loading:e.loadIng>0||e.loginJump,size:"large",long:""},on:{click:e.onLogin}},[e._v(e._s(e.$L(e.loginText)))]),e._v(" "),"reg"==e.loginType?o("div",{staticClass:"login-switch"},[e._v(e._s(e.$L("已经有帐号？"))),o("a",{attrs:{href:"javascript:void(0)"},on:{click:function(t){e.loginType="login"}}},[e._v(e._s(e.$L("登录帐号")))])]):o("div",{staticClass:"login-switch"},[e._v(e._s(e.$L("还没有帐号？"))),o("a",{attrs:{href:"javascript:void(0)"},on:{click:function(t){e.loginType="reg"}}},[e._v(e._s(e.$L("注册帐号")))])])],1)]),e._v(" "),o("div",{staticClass:"login-bottom"},[o("Dropdown",{attrs:{trigger:"click",placement:"bottom-start"}},[o("div",{staticClass:"login-setting"},[e._v("\n                    "+e._s(e.$L("设置"))+"\n                    "),o("i",{staticClass:"taskfont"},[e._v("")])]),e._v(" "),o("Dropdown-menu",{staticClass:"login-setting-menu",attrs:{slot:"list"},slot:"list"},[o("Dropdown",{attrs:{placement:"right"},on:{"on-click":e.setTheme}},[o("DropdownItem",[o("div",{staticClass:"login-setting-item"},[e._v("\n                                "+e._s(e.$L("主题皮肤"))+"\n                                "),o("Icon",{attrs:{type:"ios-arrow-forward"}})],1)]),e._v(" "),o("DropdownMenu",{attrs:{slot:"list"},slot:"list"},e._l(e.themeList,(function(t,n){return o("Dropdown-item",{key:n,attrs:{name:t.value,selected:e.themeMode===t.value}},[e._v(e._s(e.$L(t.name)))])})),1)],1),e._v(" "),o("Dropdown",{attrs:{placement:"right"},on:{"on-click":e.setLanguage}},[o("DropdownItem",{attrs:{divided:""}},[o("div",{staticClass:"login-setting-item"},[e._v("\n                                "+e._s(e.currentLanguage)+"\n                                "),o("Icon",{attrs:{type:"ios-arrow-forward"}})],1)]),e._v(" "),o("DropdownMenu",{attrs:{slot:"list"},slot:"list"},e._l(e.languageList,(function(t,n){return o("Dropdown-item",{key:n,attrs:{name:n,selected:e.getLanguage()===n}},[e._v(e._s(t))])})),1)],1)],1)],1),e._v(" "),o("div",{staticClass:"login-forgot"},[e._v(e._s(e.$L("忘记密码了？"))),o("a",{attrs:{href:"javascript:void(0)"},on:{click:e.forgotPassword}},[e._v(e._s(e.$L("重置密码")))])])],1)])],1)}),[],!1,null,null,null).exports}}]);