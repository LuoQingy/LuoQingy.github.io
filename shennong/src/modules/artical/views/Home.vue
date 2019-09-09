<template>
    <div class="homeClass">
        <div>
          <div class="pc-phone">

            <div class="phone-header"></div>

            <div class="phone-body">
              <!-- 标题 --> 
              <div @click="selectEvent(0)">
                <title-component :form='form' ></title-component>
              </div>  
              <!-- 内容 -->
              <div class="phone-main" :style="'background:'+allBackground">
                <template v-for="(item,index) in listCompontent" >
                  <div class="drag " :id="'secondContent'+index" :key="index" :class="controlList[index+1].className"  @click="selectEvent(index+1)">
                    <div :is="item.component_type|getPage" :itemContent='item'></div>  
                    <div class="btn-edit-del">
                        <span>编辑</span>
                        <span>删除</span>
                    </div>
                  </div>
                </template>
              </div>

            </div>

            <div class="phone-foot"> </div>
          </div>
        </div>

        

        <div class="pc-editor" :style="'margin-top:'+marginTop">
          <div class="all-component" >
            <div class="editor-arrow"></div>
            <!-- 标题控件 -->
            <div  v-if="controlList[0].check">
              <edit-title :form='form'></edit-title>
            </div>

            <template v-for="(item,index) in listCompontent" >
              <div :is="item.component_type|getCom" :itemContent='item'  v-if="controlList[index+1].check" :key="index"></div>
            </template>
          </div>
        </div>
    </div>
</template>
  
<script>
import titleComponent from "@/modules/artical/components/title-component.vue"
import editTitle from "@/modules/artical/components/edit-title.vue"
import singleImageGroup from "@/modules/artical/components/single-image-group.vue"
import editSingleImageGroup from "@/modules/artical/components/edit-single-image-group.vue"
import imageWindowGroup from "@/modules/artical/components/image-window-group.vue"
import editImageWindowGroup from "@/modules/artical/components/edit-image-window-group.vue"
import imageUnfoldGroup from "@/modules/artical/components/image-unfold-group.vue"
import editImageUnfoldGroup from  "@/modules/artical/components/edit-image-unfold-group.vue"
export default {
  
  components: {
    titleComponent,editTitle,editSingleImageGroup,
    singleImageGroup,imageWindowGroup,editImageWindowGroup,
    imageUnfoldGroup,editImageUnfoldGroup,
  },
  data() {
    return {
      form: {
        name: '乐山神农生态馆',
        title:'乐山神农生态农场',
        color:'#fafafa',
        color1:'#fafafa'
      },
      listCompontent:[
        {
          "component_type": "single_image_group", //单图组
          "margin_top_bottom": 0,
          "margin_left_right":0,
          "background_color":"#ffffff",
          "layout":null,
          "rank":1,//排序值，越小越在前
          "component_detail":{
            'image_list':[
              {'image_url':require('./../../../assets/image/shen1.gif'),'to_url':'assets/image/shen1.gif'},
              {'image_url':require('./../../../assets/image/shen2.jpg'),'to_url':'assets/image/shen1.gif'}
            ]
          }
        },
        {
          "component_type": "image_window_group",//图片橱窗
          "margin_top_bottom": 0,
          "margin_left_right":0,
          "background_color":"#ffffff",
          "layout":'three_column',
          "rank":2,//排序值，越小越在前
          "component_detail":{
            'image_list':[
              {'image_url':require('./../../../assets/image/shen3.gif'),'to_url':'assets/image/shen3.gif'},
              {'image_url':require('./../../../assets/image/shen4.gif'),'to_url':'assets/image/shen4.gif'},
              {'image_url':require('./../../../assets/image/shen5.jpg'),'to_url':'assets/image/shen5.jpg'},
            ]
          }
        },
        {
          "component_type": "image_unfold_group",//图片展播
          "margin_top_bottom": 0,
          "margin_left_right":0,
          "background_color":"#ffffff",
          "layout":'three_column',
          "rank":1,//排序值，越小越在前
          "component_detail":{
            'image_list':[
              {'image_url':require('./../../../assets/image/shen6.gif'),'to_url':'assets/image/shen6.gif'},
              {'image_url':require('./../../../assets/image/shen7.jpg'),'to_url':'assets/image/shen7.gif'},
            ]
          }
        },
      ],
      allBackground:'#fafafa',//全局背景色
      marginTop:'55px',//编辑的顶部高度
      controlList:[
        {className:'',check:true,existCheck:true},
        {className:'',check:false,existCheck:true},
        {className:'',check:false,existCheck:true},
        {className:'',check:false,existCheck:true},
      ],
    };
  },
  methods: {
    reset(){//重置
      this.form.color = '#fafafa';
      this.allBackground = this.form.color;
    },
    colorEvent(){//背景颜色选择
      console.log(this.form.color);
      this.allBackground = this.form.color;
    },

    marginEvent(ev){
      if(ev==0){
        this.marginTop = '55px';
      }else if(ev==1){
        this.marginTop = '105px';
      }else if(ev>=2){
        let heightOne = 0;
        //console.log(ev)
        for(let i =0;i<ev-1;i++){
          let id = "secondContent"+i;
          heightOne  += document.getElementById(id).offsetHeight;
          //console.log(heightOne)
        }
        //console.log(heightOne)
        let height = heightOne + 105;
        //console.log(height)
        this.marginTop = height + 'px';
        //console.log(this.$refs.firstContent.offsetHeight)
      }
    },

    selectEvent(ev){//选中那个模块
      this.controlList.forEach((item,index) => {
        item.className = '';
        item.check = false;
      });
      this.marginEvent(ev);
      this.controlList[ev].className ='selected';
      this.controlList[ev].check = true;
    },

  },
  mounted() {
   
  },
  filters: {
    getCom(id) {
      let component;
      switch (id) {
        case 'single_image_group':
          component = "editSingleImageGroup";
          break;
        case 'image_window_group':
          component = "editImageWindowGroup";
          break;
        case 'image_unfold_group':
          component = "editImageUnfoldGroup";
          break;
      }
      return component;
    },
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
  
<style  lang="less">

.homeClass{
  width: 840px;
  
  margin: 0 auto;
  display: flex;
  margin-top: 50px;
  display: -webkit-flex;
  overflow: auto;
  .pc-phone{
    width: 328px;
    // height: auto;
    border: 1px solid #ddd;
    border-radius: 10px;
    background: #fff;
    padding: 10px;
    overflow: hidden;
    margin-bottom: 150px;
    box-sizing: border-box;
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
          li{
            list-style: none;
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
           &:hover .btn-edit-del{
             display: block;
           }
          .btn-edit-del{
            height: 16px;
            position: absolute;
            right: 2px;
            bottom: 2px;
            display: none;
            span{
              width: 32px;
              height: 16px;
              line-height: 16px;
              display: inline-block;
              text-align: center;
              font-size: 10px;
              color: #fff;
              background: rgba(0,0,0,.4);
              margin-left: 2px;
              cursor: pointer;
              position: relative;
              z-index: 11;
            }
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
          .btn-edit-del{
            display: block;
          }
        }
      }
    }
    .phone-foot{
      height: 24px;
      width: 60px;
      margin: 15px auto 5px;
      border: 1px solid #ddd;
      border-radius: 5px;
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
      }
      .contorl-compontent{
        display: flex;
        display: -webkit-flex;
      }
    }
  }
}
</style>