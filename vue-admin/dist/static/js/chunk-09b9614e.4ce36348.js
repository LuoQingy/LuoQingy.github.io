(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09b9614e"],{8682:function(t,e,n){"use strict";var a=n("9b52"),i=n.n(a);i.a},"9b52":function(t,e,n){},b82e:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"channel-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"搜索相关的数据"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchData(e)}},model:{value:t.searchContent,callback:function(e){t.searchContent=e},expression:"searchContent"}}),t._v(" "),n("el-button",{staticStyle:{"margin-left":"20px","margin-top":"0px",height:"40px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.searchData}},[t._v("搜索")])],1),t._v(" "),n("el-table",{attrs:{data:t.list,border:""}},[n("el-table-column",{attrs:{label:"省份",prop:"province",align:"center","min-width":"100px"}}),t._v(" "),n("el-table-column",{attrs:{label:"总IP",prop:"总IP",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"独立IP",prop:"独立IP",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"百分比",prop:"百分比",align:"center"}})],1),t._v(" "),n("div",{staticClass:"block",staticStyle:{padding:"10px 0px"}},[n("el-pagination",{staticStyle:{float:"right"},attrs:{"current-page":t.currentPage,"page-sizes":[10,20,30,40],"page-size":t.currentSize,layout:"total, sizes, prev, pager, next, jumper",total:t.totalList.length},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},i=[],r=(n("5df3"),n("4f7f"),n("75fc")),s=(n("ac6a"),n("bc3a"),{data:function(){return{list:[],totalList:[],subList:[],currentPage:1,currentSize:10,searchContent:""}},created:function(){var t={"泰国":{"总IP":16,"百分比":"0%","独立IP":14},"格鲁吉亚":{"总IP":1,"百分比":"0%","独立IP":1},"台湾":{"总IP":69,"百分比":"0.01%","独立IP":47},"河南":{"总IP":58136,"百分比":"4.64%","独立IP":35714},"湖北":{"总IP":16368,"百分比":"1.31%","独立IP":10476},"江西":{"总IP":17581,"百分比":"1.4%","独立IP":11360},"新西兰":{"总IP":1,"百分比":"0%","独立IP":1},"黑龙江":{"总IP":119907,"百分比":"9.56%","独立IP":59124},"天津":{"总IP":23803,"百分比":"1.9%","独立IP":14992},"澳门":{"总IP":16,"百分比":"0%","独立IP":12},"越南":{"总IP":4,"百分比":"0%","独立IP":3},"美国":{"总IP":7,"百分比":"0%","独立IP":7},"西藏":{"总IP":348,"百分比":"0.03%","独立IP":255},"肯尼亚":{"总IP":1,"百分比":"0%","独立IP":1},"吉林":{"总IP":75936,"百分比":"6.06%","独立IP":36763},"上海":{"总IP":7395,"百分比":"0.59%","独立IP":5028},"山西":{"总IP":143963,"百分比":"11.48%","独立IP":77384},"宁夏":{"总IP":3403,"百分比":"0.27%","独立IP":2345},"香港":{"总IP":72,"百分比":"0.01%","独立IP":50},"韩国":{"总IP":9,"百分比":"0%","独立IP":7},"浙江":{"总IP":13037,"百分比":"1.04%","独立IP":8235},"英国":{"总IP":1,"百分比":"0%","独立IP":1},"匈牙利":{"总IP":2,"百分比":"0%","独立IP":1},"山东":{"总IP":87894,"百分比":"7.01%","独立IP":53245},"福建":{"总IP":11165,"百分比":"0.89%","独立IP":7054},"伊朗":{"总IP":1,"百分比":"0%","独立IP":1},"俄罗斯":{"总IP":5,"百分比":"0%","独立IP":4},"河北":{"总IP":94823,"百分比":"7.56%","独立IP":51756},"重庆":{"总IP":53652,"百分比":"4.28%","独立IP":30049},"湖南":{"总IP":21002,"百分比":"1.67%","独立IP":13617},"海南":{"总IP":1247,"百分比":"0.1%","独立IP":884},"亚太地区":{"总IP":12,"百分比":"0%","独立IP":8},"陕西":{"总IP":22399,"百分比":"1.79%","独立IP":13139},"贵州":{"总IP":5170,"百分比":"0.41%","独立IP":3512},"新疆":{"总IP":7389,"百分比":"0.59%","独立IP":4863},"江苏":{"总IP":49529,"百分比":"3.95%","独立IP":30603},"共享地址":{"总IP":144,"百分比":"0.01%","独立IP":108},"安徽":{"总IP":31269,"百分比":"2.49%","独立IP":19471},"甘肃":{"总IP":16127,"百分比":"1.29%","独立IP":10602},"四川":{"总IP":100923,"百分比":"8.05%","独立IP":58053},"加拿大":{"总IP":4,"百分比":"0%","独立IP":3},"广西":{"总IP":43536,"百分比":"3.47%","独立IP":26182},"日本":{"总IP":20,"百分比":"0%","独立IP":11},"云南":{"总IP":8788,"百分比":"0.7%","独立IP":5775},"内蒙古":{"总IP":35714,"百分比":"2.85%","独立IP":18138},"马来西亚":{"总IP":1,"百分比":"0%","独立IP":1},"辽宁":{"总IP":117800,"百分比":"9.39%","独立IP":63950},"广东":{"总IP":43983,"百分比":"3.51%","独立IP":23215},"局域网":{"总IP":322,"百分比":"0.03%","独立IP":273},"青海":{"总IP":1526,"百分比":"0.12%","独立IP":930},"中国":{"总IP":1868,"百分比":"0.15%","独立IP":921},"新加坡":{"总IP":29,"百分比":"0%","独立IP":20},"澳大利亚":{"总IP":3,"百分比":"0%","独立IP":3},"菲律宾":{"总IP":1,"百分比":"0%","独立IP":1},"北京":{"总IP":17597,"百分比":"1.4%","独立IP":10375}};this.analysisData(t)},methods:{analysisData:function(t){var e=this;if(this.totalList=[],t instanceof Object){for(var n in t){var a={province:n};if(t[n]instanceof Object)for(var i in t[n])a[i]=t[n][i];this.totalList.push(a);var r=JSON.parse(JSON.stringify(a));this.subList.push(r)}this.list=[],this.totalList.forEach(function(t,n){n>=(e.currentPage-1)*e.currentSize&&n<e.currentPage*e.currentSize&&e.list.push(t)})}},handleSizeChange:function(t){var e=this;console.log("每页 ".concat(t," 条")),this.list=[],this.currentSize=t,this.totalList.forEach(function(t,n){n>=(e.currentPage-1)*e.currentSize&&n<e.currentPage*e.currentSize&&e.list.push(t)})},handleCurrentChange:function(t){var e=this;console.log("当前页: ".concat(t)),this.currentPage=t,this.list=[],this.totalList.forEach(function(t,n){n>=(e.currentPage-1)*e.currentSize&&n<e.currentPage*e.currentSize&&e.list.push(t)})},searchData:function(){var t=this,e=[];if(!this.searchContent)return this.totalList=this.subList,this.list=[],void this.totalList.forEach(function(e,n){n>=(t.currentPage-1)*t.currentSize&&n<t.currentPage*t.currentSize&&t.list.push(e)});this.subList.forEach(function(n,a){for(var i in n){var r=n[i];r=String(r),r.indexOf(t.searchContent)>-1&&e.push(n.province)}}),console.log(e),e=Object(r["a"])(new Set(e)),console.log(e),this.totalList=[],this.subList.forEach(function(n,a){e.forEach(function(e,a){n.province==e&&t.totalList.push(n)})}),this.list=[],this.totalList.forEach(function(e,n){n>=(t.currentPage-1)*t.currentSize&&n<t.currentPage*t.currentSize&&t.list.push(e)})}}}),P=s,c=(n("8682"),n("2877")),I=Object(c["a"])(P,a,i,!1,null,"4e83cfcd",null);e["default"]=I.exports}}]);