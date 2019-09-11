<template>
  <div class="mescroll"  id="mescroll">
    <template v-for="(item,index) in dataList" >
      <div class="drag " :key="index" :style="index>0&&item.component_type=='single_image_group'?'margin-top: -1px;':''">
        <div :is="item.component_type|getPage" :itemContent='item' :reIndex='index'></div>  
        
      </div>
    </template>
  </div>
</template>
<script>
import singleImageGroup from "@/modules/index/components/single-image-group.vue"

import imageWindowGroup from "@/modules/index/components/image-window-group.vue"

import imageUnfoldGroup from "@/modules/index/components/image-unfold-group.vue"
export default {
    components: {singleImageGroup,imageWindowGroup,imageUnfoldGroup},
    data(){
        return{
            dataList: [],//数据列表
            pageId:null,
            title:'',
            name:'',
            mescroll:null,
        }
    },
    mounted(){
      //this.mescrollEvent();//初始化
      if(this.$route.query.pageId){
        console.log(this.$route.query.pageId)
        this.pageId = this.$route.query.pageId;
        this.getPage(this.pageId);
      }else{
        document.title = '首页';
      }   
    },
    methods: {
      mescrollEvent(){
          let self = this;
          this.mescroll = new MeScroll("mescroll", {
              //请至少在vue的mounted生命周期初始化mescroll,以确保您配置的id能够被找到
              down: {
                  use: false,//是否启用下拉刷新
                  auto: false, //是否在初始化完毕之后自动执行下拉回调callback; 默认true
                  callback: self.downCallback, //下拉刷新的回调
                  lazyLoad: {
                  use: true,
                  attr: "imgurl", // 网络地址的属性名 (图片加载成功会移除该属性): <img imgurl='网络图  src='占位图''/>
                  // showClass: '', // 图片加载成功的显示动画: 渐变显示,参见mescroll.css
                  delay: 0, // 列表滚动的过程中每500ms检查一次图片是否在可视区域,如果在可视区域则加载图片
                  offset: 200 // 超出可视区域200px的图片仍可触发懒加载,目的是提前加载部分图片
                  }
              },
              up: {
                  auto: false, //初始化完毕,是否自动触发上拉加载的回调
                  isBoth: false, //上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新;默认false,两者不可同时触发; 这里为了演示改为true,不必等列表加载完毕才可下拉;
                  isBounce: true, //此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
                  callback: self.upCallback, //上拉加载的回调
                  // toTop: {
                  // //配置回到顶部按钮
                  // src: require('./../assets/img/mescroll-totop.png'), //默认滚动到1000px显示,可配置offset修改
                  // //offset : 1000
                  // warpClass : "mescroll-totop" ,
                  // },
                  lazyLoad: {
                    use: true,
                    attr: "imgurl", // 网络地址的属性名 (图片加载成功会移除该属性): <img imgurl='网络图  src='占位图''/>
                    // showClass: '', // 图片加载成功的显示动画: 渐变显示,参见mescroll.css
                    delay: 0, // 列表滚动的过程中每500ms检查一次图片是否在可视区域,如果在可视区域则加载图片
                    offset: 200 // 超出可视区域200px的图片仍可触发懒加载,目的是提前加载部分图片
                  }
              }
          });
      },
      downCallback(){},
      upCallback(){},
      getPage(pageId){//获取页面的详情
        this.$http({
          url: '/admin/page/get',
          method: 'post',
          data:{"pageId": pageId,}
        }).then((res)=>{
          if(res.data.code==10000){
            this.pageId = res.data.data.id;
            this.name = res.data.data.page_name;
            document.title = res.data.data.page_title;
            this.title = res.data.data.page_title;
            this.dataList = [];
            res.data.data.componentes.forEach((item,index) => {
              item.component_detail = JSON.parse(item.component_detail)
              this.dataList.push(item)
            });
            // this.mescroll.endSuccess()
            // this.mescroll.lazyLoad(100)
          }
          console.log(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })
      },
    },
    filters: {
      getPage(id) {
        let component;
        switch (id) {
          case 'single_image_group':
            component = "singleImageGroup";
            break;
          case 'image_window_group':
            component = "imageWindowGroup";
            break;
          case 'image_unfold_group':
            component = "imageUnfoldGroup";
            break;
        }
        return component;
      }
    }
};
</script>

<style lang="less">
.mescroll {
  max-width: 750px;
  padding-bottom: 10px;
  -webkit-overflow-scrolling: touch;
}

</style>