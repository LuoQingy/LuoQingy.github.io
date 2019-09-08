<template>
    <div class="homeClass">
        <div class="pc-phone">
          <div class="phone-header"></div>
          <div class="phone-body">
            <!-- 标题 -->
            <div class="phone-title" @click="selectEvent(0)">乐山神农生态农场</div>

            <div class="phone-main" :style="phoneMainStyle">

              <div class="drag " :class="controlList[1].className" @click="selectEvent(1)">
                <ul class="fui-picture">
                  <li>
                    <img src="./../../../assets/image/shen1.gif" alt="">
                  </li>
                  <li>
                    <img src="./../../../assets/image/shen2.jpg" alt="">
                  </li>
                </ul>
              </div>

              <div class="drag " :class="controlList[2].className" @click="selectEvent(2)">
                <div class="fui-picture">

                </div>
              </div>

              <div class="drag " :class="controlList[3].className" @click="selectEvent(3)">
                <div class="fui-picture">

                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="pc-editor" :style="'margin-top:'+marginTop">
          <!-- 标题 -->
          <div class="all-component" >
            <div class="editor-arrow"></div>
            <div  v-if="controlList[0].check">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="页面名称">
                  <el-input v-model="form.name" style="max-width:320px;" placeholder="请输入名称"></el-input>
                  <div style="font-size:12px;">注意：页面名称是便于后台查找，页面标题是手机端标题。</div>
                </el-form-item>
                <el-form-item label="页面标题">
                  <el-input v-model="form.title" style="max-width:320px;" placeholder="请输入标题"></el-input>
                </el-form-item>
                <el-form-item label="背景颜色">
                  <template>
                    <div class="background-control">
                      <el-color-picker v-model="form.color" style='width:40px;' @change='colorEvent'  ></el-color-picker>
                      <el-button  @click="reset">重置</el-button>
                    </div>
                  </template>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
    </div>
</template>
  
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        title:'',
        color:'#fafafa',
        color1:'#fafafa'
      },
      phoneMainStyle:{//全局的背景颜色
        background:'#fafafa',
        
      },
      marginTop:'55px',//编辑的顶部高度
      controlList:[
        {className:'',check:true,},
        {className:'',check:false,},
        {className:'',check:false,},
        {className:'',check:false,},
      ],
    };
  },
  methods: {
    reset(){//重置
      this.form.color = '#fafafa';
      this.phoneMainStyle.background = this.form.color;
    },
    colorEvent(){//背景颜色选择
      console.log(this.form.color);
      this.phoneMainStyle.background = this.form.color;
    },
    selectEvent(ev){//选中那个模块
      this.controlList.forEach((item,index) => {
        item.className = '';
        item.check = false;
      });
      this.controlList[ev].className ='selected';
      this.controlList[ev].check = true;
    }
  },
  mounted() {
   
  }
};
</script>
  
<style scoped lang="less">
.homeClass{
  width: 840px;
  
  margin: 0 auto;
  display: flex;
  margin-top: 50px;
  display: -webkit-flex;
  .pc-phone{
    width: 328px;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 10px;
    background: #fff;
    padding: 10px;
    overflow: hidden;
    margin-bottom: 150px;
    
    .phone-header{
      height: 44px;
      background: #fff;
      position: relative;
      &:before{
        content: "";
        position: absolute;
        top: 15px;
        left: 112px;
        height: 8px;
        width: 8px;
        background: #ddd;
        border-radius: 8px;
      }
      &:after{
        content: "";
        position: absolute;
        top: 15px;
        left: 128px;
        height: 8px;
        width: 50px;
        background: #ddd;
        border-radius: 8px;
      }
    }
    .phone-body{
      .phone-title{
        height: 54px;
        background: url('../../../assets/image/wx-top.png') 0 0 no-repeat;
        background-size: 100% auto;
        padding: 0 50px;
        font-size: 15px;
        color: #fff;
        text-align: center;
        line-height: 68px;
        cursor: default;
        overflow: hidden;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .phone-main{
        min-height: 400px;
        border: 1px solid #ddd;
        border-top: 0;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        
        .drag{
          position: relative;
          min-height: 20px;
          display: block;
          overflow: hidden;
          .fui-picture{
            display: block;
            margin: 0;
            padding: 0;
            height: auto;
            overflow: hidden;
            li img{
              display: block;
              width: 100%;
            }
          }
          &:hover:before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border: 2px dashed #00a0e9;
            cursor: move;
            z-index: 10;
          }
        }
        .selected{
          &:before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border: 2px dashed #00a0e9;
            cursor: move;
            z-index: 10;
            box-sizing: border-box;
          }
        }
      }
    }
  }
  .pc-editor{
    width: 494px;
    height: auto;
    background: #fdfdfd;
    padding: 15px 10px;
    margin-left: 18px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 150px;
    box-sizing: border-box;
    .all-component{
      .editor-arrow{
        height: 0;
        position: relative;
        box-sizing: border-box;
        &:before{
          position: absolute;
          font-family: simsun;
          content: "◆";
          top: 8px;
          left: -21px;
          display: block;
          width: 9px;
          height: 18px;
          font-size: 24px;
          color: #fdfdfd;
          z-index: 111;
        }
        &:after{
          position: absolute;
          font-family: simsun;
          content: "◆";
          top: 8px;
          left: -21px;
          display: block;
          width: 9px;
          height: 18px;
          font-size: 24px;
          color: #fdfdfd;
          z-index: 111;
          left: -22px;
          color: #ddd;
          z-index: 11;
        }
      }
      .background-control{
        width: 130px;
        display: flex;
        display: -webkit-flex;
      }
    }
  }
}
</style>