webpackJsonp([4],{"5g+z":function(t,e){},"9n10":function(t,e){},IjqB:function(t,e,n){"use strict";var i=n("lRwf");new(n.n(i).a)},JMLk:function(t,e){},M6Sr:function(t,e){},NHnr:function(t,e,n){"use strict";function i(t){return new _.a(function(e,n){h()(t).then(function(t){200===Number(t.data.code)&&e(t.data)}).catch(function(t){t.response||t.request&&4===t.request.readyState&&t.request.status})})}Object.defineProperty(e,"__esModule",{value:!0});var o=n("lRwf"),a=n.n(o),s=(n("IjqB"),{data:function(){return{newList:[],scrollDivWidth:""}},computed:{getUserIcons:function(){}},methods:{getNewList:function(){},sendList:function(){},addClass:function(t){document.title=this.newList[t],this.scrollDivWidth=document.querySelector(".top-menu-list a").getBoundingClientRect().width;var e=this.scrollDivWidth/2,n=document.querySelectorAll(".top-menu-list a"),i=document.body.clientWidth/2;document.querySelector(".top-menu-list").scrollLeft=n[t].offsetLeft-i+e}},mounted:function(){var t=this,e=this;localStorage.getItem("localSelectList")?(localStorage.getItem("List"),setTimeout(function(){for(var t=window.location.href.split("/"),n=decodeURI(t[t.length-1]),i="",o=document.querySelectorAll(".top-menu-list>a"),a=0;a<o.length;a++){var s=o[a].innerText;"推荐"==s?i=0:s==n&&(i=a)}e.addClass(i),document.title=s},500)):this.$ajax({url:"/a/news.list",method:"get"}).then(function(n){t.newList=n.list;for(var i=0;i<t.newList.length;i++)"看点"==t.newList[i]&&(t.newList[i]="推荐");setTimeout(function(){for(var t=window.location.href.split("/"),n=decodeURI(t[t.length-1]),i="",o=document.querySelectorAll(".top-menu-list>a"),a=0;a<o.length;a++){var s=o[a].innerText;"推荐"==s?i=0:s==n&&(i=a)}e.addClass(i)},500)})},watch:{getUserIcons:function(t){this.newList=t}}}),l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("section",{staticClass:"top-menu"},[n("div",{staticClass:"top-menu-list",attrs:{id:"J_top_menu"}},t._l(t.newList,function(e,i){return n("router-link",{key:i,staticClass:"tab-item",attrs:{tag:"a",to:"/home/"+e},nativeOn:{click:function(e){t.addClass(i)}}},["看点"==e?[t._v("推荐")]:[t._v(t._s(e))]],2)}))])])},staticRenderFns:[]},c={data:function(){return{newList:["拖动滑块验证","滑动拼图验证","文字点选验证"],scrollDivWidth:""}},computed:{getUserIcons:function(){}},methods:{getNewList:function(){},sendList:function(){},addClass:function(t){document.title=this.newList[t],this.scrollDivWidth=document.querySelector(".top-menu-list a").getBoundingClientRect().width;var e=this.scrollDivWidth/2,n=document.querySelectorAll(".top-menu-list a"),i=document.body.clientWidth/2;document.querySelector(".top-menu-list").scrollLeft=n[t].offsetLeft-i+e}},mounted:function(){},watch:{getUserIcons:function(t){this.newList=t}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("section",{staticClass:"top-menu"},[n("div",{staticClass:"top-menu-list",attrs:{id:"J_top_menu"}},t._l(t.newList,function(e,i){return n("router-link",{key:i,staticClass:"tab-item",attrs:{tag:"a",to:"/newhome/"+e},nativeOn:{click:function(e){t.addClass(i)}}},["看点"==e?[t._v("推荐")]:[t._v(t._s(e))]],2)}))])])},staticRenderFns:[]},d={name:"App",components:{MHeader:n("VU/8")(s,l,!1,function(t){n("5g+z")},"data-v-52b4dc02",null).exports,newHeader:n("VU/8")(c,r,!1,function(t){n("JMLk")},"data-v-63df9afe",null).exports}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("new-header"),this._v(" "),e("keep-alive",{attrs:{include:"Home"}},[e("router-view")],1),this._v(" "),e("div",{staticClass:"test"})],1)},staticRenderFns:[]},m=n("VU/8")(d,u,!1,function(t){n("jaLx")},null,null).exports,p=(n("9n10"),n("M6Sr"),n("mtWM")),h=n.n(p),f={getUserId:function(){return window.android?window.android.getAndroidData(1):""},isEquipment:function(){var t=navigator.userAgent,e=/android|adr|linux/gi.test(t),n=/iphone|ipod|ipad/gi.test(t)&&!e,i=/BlackBerry/i.test(t),o=/IEMobile/i.test(t),a=e||n||i||o;return{isAndroid:e,isIOS:n,isMobile:a,isWeixin:/MicroMessenger/gi.test(t),isQQ:/QQ/gi.test(t),isPC:!a,isWeibo:/WeiBo/gi.test(t)}},getVersion:function(){try{var t=window.android.getAndroidData(3).replace(/\./g,"");return t}catch(t){return!0}},lanmu:function(){h()({method:"get",url:"http://test.prculture.cn/a/news.list"}).then(function(t){var e=Math.floor(Math.random()*t.data.list.length);return t.data.list[e]})}},g=n("pRNm");a.a.use(g);var w=["拖动滑块验证","滑动拼图验证","文字点选验证"],v=w[Math.floor(Math.random()*w.length)],y=new g({routes:[{path:"/",redirect:"/newhome/"+v},{path:"/newhome",redirect:"/newhome/"+v},{path:"/home/:id",name:"Home",component:function(t){n.e(1).then(n.bind(null,"RBGi")).then(function(e){t(e)})},meta:{keepAlive:!0}},{path:"/newhome/:type",name:"newHome",component:function(t){return n.e(0).then(function(){var e=[n("jzcA")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{keepAlive:!0}},{path:"/list",name:"List",component:function(t){n.e(2).then(n.bind(null,"CHEl")).then(function(e){t(e)})}}]}),L=n("//Fk"),_=n.n(L);h.a.defaults.timeout=5e3;var C={install:function(t,e){t.prototype.$ajax=i}};a.a.use(C),a.a.config.productionTip=!1,a.a.prototype.common=f,new a.a({el:"#app",router:y,components:{App:m},template:"<App/>"}),a.a.prototype.loadingDialog=function(t,e){switch(t){case"show":if(document.getElementById("loadingDialog"))document.getElementById("loadingDialog").style.opacity="1",document.getElementById("loadingDialog").style.display="block";else{var n=document.createElement("div");n.className="js_dialog",n.id="loadingDialog";var i=document.createElement("div");i.className="weui-mask_transparent",i.style.zIndex="1000";var o=document.createElement("div");o.className="weui-toast",o.style.zIndex="1001";var a=document.createElement("i");a.className="weui-loading weui-icon_toast";var s=document.createElement("p");s.className="toast__content",s.innerHTML=e||"正在加载",o.appendChild(a),o.appendChild(s),n.appendChild(i),n.appendChild(o),document.body.appendChild(n)}break;case"hide":document.getElementById("loadingDialog")&&window.setTimeout(function(){document.getElementById("loadingDialog").style.opacity="0",document.getElementById("loadingDialog").style.display="none"},300)}}},jaLx:function(t,e){},lRwf:function(t,e){t.exports=Vue},pRNm:function(t,e){t.exports=VueRouter}},["NHnr"]);
//# sourceMappingURL=app.642638e419e4a45d5218.js.map