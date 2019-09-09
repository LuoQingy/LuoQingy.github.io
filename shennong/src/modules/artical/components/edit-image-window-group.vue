<template>
  <div >
      <el-form ref="form" :model="itemContent" label-width="80px">
        <el-form-item label="上下边距">
          <div class="contorl-compontent">
            <el-slider v-model="itemContent.margin_top_bottom" :max='50' style="width:240px; "></el-slider>
            <span style="padding-left:26px;">{{itemContent.margin_top_bottom}}px(像素)</span>
          </div>
        </el-form-item>
        <el-form-item label="左右边距">
          <div class="contorl-compontent">
            <el-slider v-model="itemContent.margin_left_right" :max='50' style="width:240px;"></el-slider> 
            <span style="padding-left:26px;">{{itemContent.margin_left_right}}px(像素)</span>
          </div>
        </el-form-item>
        <el-form-item label="背景颜色">
          <template>
            <div class="background-control contorl-compontent">
              <el-color-picker v-model="itemContent.background_color" style='width:40px;' @change='colorEvent' ></el-color-picker>
              <el-button  @click="reset">重置</el-button>
            </div>
          </template>
        </el-form-item>
         <el-form-item label="布局方式">
          <template>
            <el-radio-group v-model="itemContent.layout">
              <el-radio-button label="window">橱窗样式</el-radio-button>
              <el-radio-button label="two_column">堆积两列</el-radio-button>
              <el-radio-button label="three_column">堆积三列</el-radio-button>
              <el-radio-button label="four_column">堆积四列</el-radio-button>
            </el-radio-group>
            <div v-if="itemContent.layout=='window'">橱窗样式布局，单组最多显示四个，超出隐藏</div>
            <div v-else>图片大小限制，但也请确保所有图片的尺寸/比例相同。</div>
          </template>
        </el-form-item>
      </el-form>
      <div class="first-items">
        <div v-for="(item,index) in itemContent.component_detail.image_list" :key="index" class="first-item">
          <div class="item-image">
            <img :src="item.image_url" alt="">
          </div>
          <div class="item-form">
            <div>
              <el-input placeholder="请选择图片或输入图片地址" style="min-width: 115px;" v-model="item.image_url">
                <template slot="append">
                  <el-button>选择图片</el-button>
                </template>
              </el-input>
            </div>
            <div style="margin-top: 10px;">
              <el-input placeholder="请选择链接或输入链接地址" style="min-width: 115px;"  v-model="item.to_url">
                <template slot="append">
                  <el-button>选择链接</el-button>
                </template>
              </el-input>
            </div>
          </div>
        </div>

        <div>
            <el-button icon="el-icon-plus"> 添加一个</el-button>
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
    data(){
      return{
        radio:3
      }
    },
    methods:{
      reset(){//重置
        this.itemContent.background_color = '#fafafa';
      },
      colorEvent(){//背景颜色选择
          //console.log(this.itemContent.background_color);
      },
    }
}
</script>

<style lang="less" scoped>
.first-items{
  margin: 0 14px;

  .first-item{
    height: auto;
    background: #fff;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #e7eaec;
    border-radius: 3px;
    overflow: hidden;
    display: flex;
    display: -webkit-flex;
    .item-image{
      height: 70px;
      width: auto;
      min-width: 40px;
      max-width: 130px;
      background: #eee;
      float: left;
      margin-right: 10px;
      border: 1px solid #e7eaec;
      position: relative;

      img{
          vertical-align: middle;
          height: 68px;
          width: auto;
          max-width: 130px;
          display: block;
          border: none;
      }
    }
    .item-form{
      height: auto;
      display: block;
      overflow: hidden;
    }
  }
}
</style>