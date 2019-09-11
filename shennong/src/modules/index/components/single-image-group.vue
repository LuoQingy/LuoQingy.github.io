<template>
  <div >
    <div class="fui-picture" :style="top_bottomEvent">
      <div v-for="(item,index) in itemContent.component_detail.image_list" @click="routerTo(item.to_url)" :style="paddingEvent" :key="index" >
        <img :src="item.image_url" alt=""></div>
    </div>
  </div>
</template>

<script>
export default {
  props: { 
    itemContent: { 
        type: Object ,
        defalut:{}
    } 
  },
  methods:{
    routerTo(src){
      window.location.href = src;
    }
  },
  computed:{
    paddingEvent(){
      // console.log(this.itemContent.margin_top_bottom +'px  ' + this.itemContent.margin_left_right +'px 0px')
      return {
        'padding':this.itemContent.margin_top_bottom +'px ' + this.itemContent.margin_left_right +'px 0px'
      }
    },
    top_bottomEvent(){
      return {
        'padding-bottom':this.itemContent.margin_top_bottom + 'px',
        'background':this.itemContent.background_color,
      }
    }
  }
}
</script>

<style lang="less" scoped>
 .fui-picture{
    display: block;
    margin: 0;
    padding: 0;
    height: auto;
    overflow: hidden;
    div{
      list-style: none;
      overflow: hidden;
      font-size: 0;
    }
    div img{
      width: 100%;
      margin:0;
      border: 0 !important;
      // 更改img为block，无法解决问题
      // 不更改display属性，按照如下属性也无法解决问题
      line-height: 0;
      vertical-align: middle;
      margin-top: -1px;
      overflow: hidden;
    }
  }
</style>