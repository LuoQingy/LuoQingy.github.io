<template>
  <div >
    <div class="fui-picture"  :style="top_bottomEvent" :class="(itemContent.component_detail.image_list.length>4&&itemContent.layout=='window')?'new-fui-picture':''">
      <div v-for="(item,index) in itemContent.component_detail.image_list" :class="className(index)" class="item"   :style="paddingEvent" :key="index" >
        <img :src="item.image_url" v-if="item.image_url" alt="">
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
      let num = 'window'+index
      if(this.itemContent.component_detail.image_list.length<3){
        num = 'windowFirst'
      }else if(this.itemContent.component_detail.image_list.length<4){
        if(index == 0){
          num = 'windowFirst'
        }else{
          num = 'windowSecond'
        }
      }else{
        if(index == 0){
          num = 'windowFirst'
        }else if(index==1){
          num = 'windowSecond'
        }else{
          num = 'windowThird'
        }
      }
      console.log(num)
      return this.itemContent.layout=='window'?num:this.itemContent.layout
    },
  },
  computed:{
    
    paddingEvent(){
      // console.log(this.itemContent.margin_top_bottom +'px  ' + this.itemContent.margin_left_right +'px 0px')
      return {
        'padding':'0px ' + this.itemContent.margin_left_right +'px'
      }
    },
    top_bottomEvent(){
      return {
        'padding':this.itemContent.margin_top_bottom + 'px',
        'background':this.itemContent.background_color,
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
    img{
        display: block;
        width: 100%;
        height: 100%;
      }
  }
  .windowFirst{
    height: 4.86rem;
    width: 50%;
  }
  .windowSecond{
    width: 50%;
    height: 2.43rem;
  }
  .windowThird{
    width: 25%;
    height: 2.43rem;
  }
  .two_column{
    height: 4.86rem;
    width: 50%;
  }
  .three_column{
    height:3.23rem;
    width: 33.3%;
  }
  .four_column{
    height: 2.43rem;
    width: 25%;
  }
}
.new-fui-picture{
  width: 304px;
  height: 152px;
  display: block;
  overflow: hidden;
}
</style>