(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6912a24a"],{"82b1":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"chart-container"},[i("chart",{attrs:{height:"100%",width:"100%"}})],1)},s=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.className,style:{height:t.height,width:t.width},attrs:{id:t.id}})},r=[],l=(i("ac6a"),i("7f7f"),i("313e")),o=i.n(l),h=i("f42c"),c={mixins:[h["a"]],props:{className:{type:String,default:"chart"},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"}},data:function(){return{chart:null,lists:[{channel:"google",clientPlatform:null,createTime:"2019-05-08 12:00:05",hitSection:null,id:25714,ipCount:32,ipSingle:2,qualityScore:6.25,summaryTime:"2019-05-07",type:0},{channel:"google",clientPlatform:null,createTime:"2019-05-08 11:42:11",hitSection:null,id:25640,ipCount:0,ipSingle:0,qualityScore:0,summaryTime:"2019-05-08",type:0},{channel:"google",clientPlatform:null,createTime:"2019-05-07 14:47:57",hitSection:null,id:25565,ipCount:32,ipSingle:2,qualityScore:6.25,summaryTime:"2019-05-07",type:0},{channel:"google",clientPlatform:null,createTime:"2019-05-07 14:46:23",hitSection:null,id:25492,ipCount:0,ipSingle:3,qualityScore:0,summaryTime:"2019-05-06",type:0},{channel:"google",clientPlatform:null,createTime:"2019-05-06 19:31:49",hitSection:null,id:25418,ipCount:45,ipSingle:4,qualityScore:.09,summaryTime:"2019-05-06",type:0}],dataList:[],parameterList:[{name:"ipCount",color:"rgba(193,35,43,1)",show:!0},{name:"ipSingle",color:"rgba(181,195,52,1)",show:!0},{name:"qualityScore",color:"rgba(252,206,16,1)",show:!0}],timeList:[]}},mounted:function(){var t=this;this.changelist(this.parameterList,this.lists[0].channel),this.$nextTick(function(){t.initChart()})},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{changelist:function(t,e){var i=this;this.dataList=[];for(var a=0;a<t.length;a++){var s={name:t[a].name,type:"bar",itemStyle:{normal:{color:t[a].color,label:{show:t[a].show}}},data:[]};this.dataList.push(s)}this.timeList=[],this.dataList.forEach(function(t,e){i.lists.forEach(function(e,a){t.data.push(e[t.name]),i.timeList.length<i.lists.length&&i.timeList.push(e.createTime)})})},initChart:function(){this.chart=o.a.init(document.getElementById(this.id));for(var t=[],e=[],i=[],a=0;a<50;a++)t.push(a),e.push(5*(Math.sin(a/5)*(a/5-10)+a/6)),i.push(3*(Math.sin(a/5)*(a/5+10)+a/6));this.chart.setOption({text:"ECharts2 vs ECharts1",subtext:"Chrome下测试数据",tooltip:{trigger:"axis"},legend:{data:["ipCount2","ipSingle2","qualityScore3","","ipCount1","ipSingle1","qualityScore1","","ipCount","ipSingle","qualityScore"]},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,xAxis:[{type:"category",data:this.timeList},{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitArea:{show:!1},splitLine:{show:!1},data:this.timeList},{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitArea:{show:!1},splitLine:{show:!1},data:this.timeList}],yAxis:[{type:"value",axisLabel:{formatter:"{value} ms"}}],series:this.dataList})}}},u=c,d=i("2877"),m=Object(d["a"])(u,n,r,!1,null,null,null),p=m.exports,g={name:"KeyboardChart",components:{Chart:p}},f=g,y=(i("9426"),Object(d["a"])(f,a,s,!1,null,"16344f90",null));e["default"]=y.exports},9399:function(t,e,i){},9426:function(t,e,i){"use strict";var a=i("9399"),s=i.n(a);s.a},f42c:function(t,e,i){"use strict";var a=i("ed08");e["a"]={data:function(){return{$_sidebarElm:null}},mounted:function(){var t=this;this.__resizeHandler=Object(a["a"])(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHandler),this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},beforeDestroy:function(){window.removeEventListener("resize",this.__resizeHandler),this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)},methods:{$_sidebarResizeHandler:function(t){"width"===t.propertyName&&this.__resizeHandler()}}}}}]);