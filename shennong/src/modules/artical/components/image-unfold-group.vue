<template>
  <div >
    <div class="fui-picture"  :style="top_bottomEvent" >
      <div v-for="(item,index) in itemContent.component_detail.image_list" :class="className(index)" class="item"    :style="paddingEvent" :key="index" >
        <div class="image">
            <img :src="item.image_url" v-if="item.image_url" alt="">
        </div>
        <div class="text"></div>
      </div>
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
    className(index){
      //console.log(index)
      return this.itemContent.layout
    },
  },
  computed:{
    
    paddingEvent(){
      // console.log(this.itemContent.margin_top_bottom +'px  ' + this.itemContent.margin_left_right +'px 0px')
      return {
        'padding':this.itemContent.margin_top_bottom +'px ' + this.itemContent.margin_left_right +'px'
      }
    },
    top_bottomEvent(){
      return {
        'padding':this.itemContent.margin_top_bottom + 'px',
        // 'background':this.itemContent.background_color,
      }
    }
  },
  
}
</script>

<style lang="less" scoped>
.fui-picture{
  height: auto;
  display: block;
  overflow: hidden;
  .item{
    position: relative;
    display: block;
    float: left;
    box-sizing: border-box;
    -webkit-box-sizing: border-box; 
    .image{
      width: 100%;
      height: 100%;
      img{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    
  }
  .one_column{
    height: 436px;
    width: 100%;
    
  }
  .two_column{
    height: 227px;
    width: 50%;
  
  }
  .three_column{
    height: 157px;
    width: 33.3%;
   
  }
  .four_column{
    height: 122px;
    width: 25%;
   
  }
  .window{
    height: 101px;
    width: 20%;

  }
}
</style>