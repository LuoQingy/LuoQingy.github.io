<template>
  <div >
    <ul class="fui-picture" :style="top_bottomEvent">
      <li v-for="(item,index) in itemContent.component_detail.image_list" :style="paddingEvent" :key="index" >
        <img :src="item.image_url" alt="">
      </li>
    </ul>
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
    li{
      list-style: none;
    }
    li img{
      display: block;
      width: 100%;
      
    }
  }
</style>