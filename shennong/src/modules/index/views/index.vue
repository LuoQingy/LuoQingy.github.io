<template>
  <div class="mescroll"  id="mescroll">
    <template v-for="(item,index) in dataList" >
      <div class="drag " :key="index">
        <div :is="item.component_type|getPage" :itemContent='item'></div>  
        
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
        }
    },
    mounted(){
      if(this.$route.query.pageId){
        console.log(this.$route.query.pageId)
        this.pageId = this.$route.query.pageId;
        this.getPage(this.pageId);
      }    
    },
    methods: {
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
  -webkit-overflow-scrolling: touch;
  padding-bottom: 45px;
}

</style>