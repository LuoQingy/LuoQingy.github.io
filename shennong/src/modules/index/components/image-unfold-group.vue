<template>
  <div >
    <div class="fui-picture"  :style="top_bottomEvent" >
      <div v-for="(item,index) in itemContent.component_detail.image_list" :class="className(index)" class="item" @click="routerTo(item.to_url)"  :style="paddingEvent" :key="index" >
        <div class="image">
            <img :src="item.image_url" v-if="item.image_url" alt="">
            <div v-if="item.top_title" :style="topTitleEvent">{{item.top_title}}</div>
        </div>
        <div class="text-item" :style="bottomTitleEvent">{{item.bottom_title}}</div>
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
    routerTo(src){
      window.location.href = src;
    }
  },
  computed:{
    
    paddingEvent(){
      //console.log(this.itemContent.margin_top_bottom +'px  ' + this.itemContent.margin_left_right +'px')
      return {
        'padding':this.itemContent.margin_top_bottom +'px ' + this.itemContent.margin_left_right +'px'
      }
    },
    top_bottomEvent(){
      return {
        'padding':this.itemContent.margin_top_bottom + 'px',
        'background':this.itemContent.background_color,
      }
    },
    topTitleEvent(){
       return {
          'color':this.itemContent.component_detail.top_title_color,
          'text-align':this.itemContent.component_detail.top_title_align
        }
    },
    bottomTitleEvent(){
        return {
          'color':this.itemContent.component_detail.bottom_title_color,
          'text-align':this.itemContent.component_detail.bottom_title_align
        }
    },
  },
  
}
</script>

<style lang="less" scoped>
.fui-picture{
  height: auto;
  display: block;
  overflow: hidden;
  margin-top: -1px;
  .item{
    position: relative;
    display: block;
    float: left;
    box-sizing: border-box;
    -webkit-box-sizing: border-box; 
    overflow: hidden;
    .image{
      height: auto;
      position: relative;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      img{
        width: 100%;
        height: 100%;
        vertical-align: middle;
        border: 0 !important;
        overflow: hidden;
      }
      div{
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;
        height: 20px;
        line-height: 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #fff;
        font-size: 14px;
      }
    }
    .text-item {
      height: 22px;
      line-height: 26px;
      font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .one_column{
    height: 12.7rem;
    width: 100%;
     .image{
       height: calc(12.7rem - 22px);
     }
  }
  .two_column{
    height: 7.2rem;
    width: 50%;
    .image{
       height:calc(7.2rem - 22px);
    }
  }
  .three_column{
    height: 5rem;
    width:3.33rem;
    .image{
       height:calc(5rem - 22px);
     }

  }
  .three_column:nth-of-type(1){
    width:3.34rem;
  }
  .four_column{
    height: 3.9rem;
    width: 25%;
    .image{
       height: calc(3.9rem - 22px);
     }
  }
  .window{
    height: 3.4rem;
    width: 20%;
      .image{
       height:calc(3.4rem - 22px);
     }
  }
}
</style>