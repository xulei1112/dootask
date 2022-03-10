"use strict";(self.webpackChunkDooTask=self.webpackChunkDooTask||[]).push([[907],{51907:(t,s,i)=>{i.r(s),i.d(s,{default:()=>e});const a={data:function(){return{screenWidth:document.body.clientWidth,needStartHome:!1,homeFooter:""}},watch:{screenWidth:function(t){}},computed:{currentLanguage:function(){return this.languageList[this.languageType]||"Language"}},mounted:function(){this.getNeedStartHome();var t=this;window.onresize=function(){window.screenWidth=document.body.clientWidth,t.screenWidth=window.screenWidth}},methods:{login:function(){this.goForward({path:"/login"},!1)},register:function(){this.goForward({path:"/login",query:{type:"reg"}},!1)},getNeedStartHome:function(){var t=this;this.$store.dispatch("call",{url:"system/get/starthome"}).then((function(s){var i=s.data;t.homeFooter=i.home_footer,t.$store.state.userId>0?t.goForward({path:"/manage/dashboard"},!0):(t.needStartHome=!!i.need_start,!1===t.needStartHome&&t.goForward({path:"/login"},!0))})).catch((function(){t.needStartHome=!1}))}},deactivated:function(){}};const e=(0,i(51900).Z)(a,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.needStartHome?i("div",[i("div",{staticClass:"page-warp"},[i("div",{staticClass:"page-header"},[i("div",{staticClass:"header-nav"},[t._m(0),t._v(" "),i("div",{staticClass:"header-nav-box"},[i("div",{staticClass:"header-right-one"},[i("Dropdown",{attrs:{trigger:"click"},on:{"on-click":t.setLanguage}},[i("Icon",{staticClass:"header-right-one-language",attrs:{type:"md-globe"}}),t._v(" "),t.screenWidth>441?i("a",{staticClass:"header-right-one-dropdown",attrs:{href:"javascript:void(0)"}},[t._v("\n                                "+t._s(t.currentLanguage)+"\n                                "),i("Icon",{attrs:{type:"ios-arrow-down"}})],1):t._e(),t._v(" "),i("DropdownMenu",{attrs:{slot:"list"},slot:"list"},t._l(t.languageList,(function(s,a){return i("Dropdown-item",{key:a,attrs:{name:a,selected:t.getLanguage()===a}},[t._v(t._s(s)+"\n                                ")])})),1)],1)],1),t._v(" "),i("div",{staticClass:"header-right-two",on:{click:t.register}},[t._v("\n                        "+t._s(t.$L("注册账号"))+"\n                    ")]),t._v(" "),i("div",{staticClass:"header-right-three",on:{click:t.login}},[t._v("\n                        "+t._s(t.$L("登录"))+"\n                    ")])])]),t._v(" "),i("div",{staticClass:"header-content"},[i("div",{staticClass:"header-title header-title-one"},[t._v("Dootask")]),t._v(" "),i("div",{staticClass:"header-title"},[t._v("\n                    "+t._s(t.$L("轻量级任务管理工具"))+"\n                ")]),t._v(" "),i("div",{staticClass:"header-tips"},[t._v("\n                    "+t._s(t.$L("DooTask是一款轻量级的开源在线项目任务管理工具，提供各类文档协作工具、在线思维导图、在线流程图、项目管理、任务分发、即时IM，文件管理等工具。"))+"\n                ")]),t._v(" "),i("div",{staticClass:"login-buttom",on:{click:t.login}},[t._v("\n                    "+t._s(t.$L("登录"))+"\n                ")])]),t._v(" "),i("div",{staticClass:"header-bg"}),t._v(" "),i("div",{staticClass:"header-pic"})]),t._v(" "),i("div",{staticClass:"page-main"},[i("div",{staticClass:"main-box-one"},[i("div",{staticClass:"box-one-square"}),t._v(" "),t.screenWidth<1920?i("div",{staticClass:"box-pic"},[i("img",{staticClass:"box-img",attrs:{src:"images/index/box-pic1.png"}})]):i("div",{staticClass:"box-one-pic1"}),t._v(" "),i("div",{staticClass:"box-one-tips"},[i("div",{staticClass:"box-square"}),t._v(" "),i("div",{staticClass:"box-title"},[t._v("\n                        "+t._s(t.$L("高效便捷的团队沟通工具"))+"\n                    ")]),t._v(" "),i("div",{staticClass:"box-tips"},[t._v("\n                        "+t._s(t.$L("针对项目和任务建立群组，工作问题可及时沟通，促进团队快速协作，提高团队工作效率。"))+"\n                    ")])])]),t._v(" "),t.screenWidth>=1920?i("div",{staticClass:"main-box-two"},[i("div",{staticClass:"box-two-tips"},[i("div",{staticClass:"box-square"}),t._v(" "),i("div",{staticClass:"box-title"},[t._v("\n                        "+t._s(t.$L("强大易用的协同创作云文档"))+"\n                    ")]),t._v(" "),i("div",{staticClass:"box-tips"},[t._v("\n                        "+t._s(t.$L("汇集文档、电子表格、思维笔记等多种在线工具，汇聚企业知识资源于一处，支持多人实时协同编辑，让团队协作更便捷。"))+"\n                    ")])]),t._v(" "),i("div",{staticClass:"box-two-square"}),t._v(" "),i("div",{staticClass:"box-two-pic2"})]):i("div",{staticClass:"main-box-two"},[i("div",{staticClass:"box-two-tips"},[t._m(1),t._v(" "),i("div",{staticClass:"box-square"}),t._v(" "),i("div",{staticClass:"box-title"},[t._v("\n                        "+t._s(t.$L("强大易用的协同创作云文档"))+"\n                    ")]),t._v(" "),i("div",{staticClass:"box-tips"},[t._v("\n                        "+t._s(t.$L("汇集文档、电子表格、思维笔记等多种在线工具，汇聚企业知识资源于一处，支持多人实时协同编辑，让团队协作更便捷。"))+"\n                    ")])])]),t._v(" "),i("div",{staticClass:"main-box-one"},[i("div",{staticClass:"box-one-square"}),t._v(" "),t.screenWidth<1920?i("div",{staticClass:"box-pic"},[i("img",{staticClass:"box-img",attrs:{src:"images/index/box-pic3.png"}})]):i("div",{staticClass:"box-one-pic3"}),t._v(" "),i("div",{staticClass:"box-one-tips"},[i("div",{staticClass:"box-square"}),t._v(" "),i("div",{staticClass:"box-title"},[t._v("\n                        "+t._s(t.$L("便捷易用的项目管理模板"))+"\n                    ")]),t._v(" "),i("div",{staticClass:"box-tips"},[t._v("\n                        "+t._s(t.$L("模版满足多种团队协作场景，同时支持自定义模版，满足团队个性化场景管理需求，可直观的查看项目的进展情况，团队协作更方便。"))+"\n                    ")])])]),t._v(" "),t.screenWidth>=1920?i("div",{staticClass:"main-box-two"},[i("div",{staticClass:"box-two-tips"},[i("div",{staticClass:"box-square"}),t._v(" "),i("div",{staticClass:"box-title"},[t._v("\n                        "+t._s(t.$L("清晰直观的任务日历"))+"\n                    ")]),t._v(" "),i("div",{staticClass:"box-tips"},[t._v("\n                        "+t._s(t.$L("通过灵活的任务日历，轻松安排每一天的日程，把任务拆解到每天，让工作目标更清晰，时间分配更合理。"))+"\n                    ")])]),t._v(" "),i("div",{staticClass:"box-two-square"}),t._v(" "),i("div",{staticClass:"box-two-pic4"})]):i("div",{staticClass:"main-box-two"},[i("div",{staticClass:"box-two-tips"},[t._m(2),t._v(" "),i("div",{staticClass:"box-square"}),t._v(" "),i("div",{staticClass:"box-title"},[t._v("\n                        "+t._s(t.$L("清晰直观的任务日历"))+"\n                    ")]),t._v(" "),i("div",{staticClass:"box-tips"},[t._v("\n                        "+t._s(t.$L("通过灵活的任务日历，轻松安排每一天的日程，把任务拆解到每天，让工作目标更清晰，时间分配更合理。"))+"\n                    ")])])])]),t._v(" "),i("div",{staticClass:"page-footer"},[i("div",{staticClass:"footer-service"},[i("div",{staticClass:"footer-bg-box"},[i("div",{staticClass:"box-title"},[t._v("\n                        "+t._s(t.$L("开启您的 Dootask 团队协作"))+"\n                    ")]),t._v(" "),i("div",{staticClass:"buttom-box"},[i("div",{staticClass:"login-btn",on:{click:t.login}},[t._v("\n                            "+t._s(t.$L("立即登录"))+"\n                        ")]),t._v(" "),i("div",{staticClass:"contact-btn"},[t._v(t._s(t.$L("联系我们")))])])])]),t._v(" "),i("div",{staticClass:"footer-opyright",domProps:{innerHTML:t._s(this.homeFooter)}})])])]):t._e()}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"header-nav-box"},[s("div",{staticClass:"logo"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"box-pic"},[s("img",{staticClass:"box-img",attrs:{src:"images/index/box-pic2.png"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"box-pic"},[s("img",{staticClass:"box-img",attrs:{src:"images/index/box-pic4.png"}})])}],!1,null,null,null).exports}}]);