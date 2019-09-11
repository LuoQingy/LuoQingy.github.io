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
                        <span @click="openDelete(index)">删除</span>
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


        <div class="footer-compont">
          <div class="module-item">
            <el-button icon="el-icon-s-tools" @click="selectEvent(0)">页面设置</el-button>
            <el-button icon="el-icon-plus" @click="addList('single_image_group')">单图组</el-button>
            <el-button icon="el-icon-plus" @click="addList('image_window_group')">图片橱窗</el-button>
            <el-button icon="el-icon-plus" @click="addList('image_unfold_group')">图片展播</el-button>
          </div>
          <div class="subit-item">
            <!-- <el-button type="warning" @click="saveAsEvent">另存为模板</el-button> -->
            <el-button type="success" @click="saveEvent">保存</el-button>
            
          </div>
        </div>
    </div>
</template>
  
<script>
import titleComponent from "@/modules/artical/components/title-component.vue"
import editTitle from "@/modules/artical/components/edit-title.vue"
import singleImageGroup from "@/modules/artical/components/single-image-group.vue"

import imageWindowGroup from "@/modules/artical/components/image-window-group.vue"

import imageUnfoldGroup from "@/modules/artical/components/image-unfold-group.vue"
import editImageWindowGroup from "@/modules/artical/components/edit-image-window-group.vue"
import editImageUnfoldGroup from  "@/modules/artical/components/edit-image-unfold-group.vue"
import editSingleImageGroup from "@/modules/artical/components/edit-single-image-group.vue"
export default {
  
  components: {
    titleComponent,editTitle,editSingleImageGroup,
    singleImageGroup,imageWindowGroup,editImageWindowGroup,
    imageUnfoldGroup,editImageUnfoldGroup,
  },
  data() {
    return {
      pageId:null,
      form: {
        name: '未命名页面',
        title:'请输入页面标题',
        color:'#fafafa',
        color1:'#fafafa'
      },
      listCompontent:[],//组件列表
      getPageList:[],//获取的原来的组件列表
      single_image_group:{
        "component_type": "single_image_group", //单图组
        "margin_top_bottom": 0,
        "margin_left_right":0,
        "background_color":"#ffffff",
        "layout":null,
        "rank":1,//排序值，越小越在前
        "component_detail":{
          'image_list':[
            {'image_url':'http://diy.lssnst.com/img/shen1.78bf7dbc.gif','to_url':'http://diy.lssnst.com/img/shen1.78bf7dbc.gif'},
            {'image_url':'http://diy.lssnst.com/img/shen2.483b665e.jpg','to_url':'http://diy.lssnst.com/img/shen2.483b665e.jpg'}
          ]
        }
      },

      image_window_group:{
        "component_type": "image_window_group",//图片橱窗
        "margin_top_bottom": 0,
        "margin_left_right":0,
        "background_color":"#ffffff",
        "layout":'three_column',
        "rank":2,//排序值，越小越在前
        "component_detail":{
          'image_list':[
            {'image_url':'http://diy.lssnst.com/img/shen3.0b501a48.gif','to_url':'http://diy.lssnst.com/img/shen3.0b501a48.gif'},
            {'image_url':'http://diy.lssnst.com/img/shen4.ce0ae355.gif','to_url':'http://diy.lssnst.com/img/shen4.ce0ae355.gif'},
            {'image_url':'http://diy.lssnst.com/img/shen5.eb8ea2e4.jpg','to_url':'http://diy.lssnst.com/img/shen5.eb8ea2e4.jpg'},
          ]
        }
      },

      image_unfold_group:{
        "component_type": "image_unfold_group",//图片展播
        "margin_top_bottom": 0,
        "margin_left_right":1,
        "background_color":"#ffffff",
        "layout":'three_column',
        "rank":3,//排序值，越小越在前
        "component_detail":{
          'top_title_color':'#ffffff',
          'bottom_title_color':'#666666',
          'top_title_align':'left',
          'bottom_title_align':'center',
          'image_list':[
              {'image_url':'http://diy.lssnst.com/img/9.e244e45b.jpg',
              'to_url':'http://diy.lssnst.com/img/9.e244e45b.jpg',
              'top_title':'','bottom_title':'下标题'},

              {'image_url':'http://diy.lssnst.com/img/11.dac8a190.jpg',
              'to_url':'http://diy.lssnst.com/img/11.dac8a190.jpg',
              'top_title':'','bottom_title':'下标题'},

              {'image_url':'http://diy.lssnst.com/img/10.ba57eb99.jpg',
              'to_url':'http://diy.lssnst.com/img/10.ba57eb99.jpg',
              'top_title':'','bottom_title':'下标题'}
          ]
        }
      },

      allBackground:'#fafafa',//全局背景色
      marginTop:'55px',//编辑的顶部高度
      controlList:[
        {className:'',check:true,existCheck:true},
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

    saveAsEvent(){//另存为模板
      let list  = JSON.parse(JSON.stringify(this.listCompontent))
      list.forEach((item,index) => {
        //console.log(item.component_detail)
        delete item.id;
        delete item.page_id;
        delete item.page_name;
        delete item.page_title;
        item.component_detail = JSON.stringify(item.component_detail)
        //console.log(item.component_detail)
      });
      let data = {
        page_name:this.form.name,
        page_title:this.form.title,
        components:list
      }
      console.log(data)
      this.$http({
        url: '/admin/page/add',
        method: 'post',
        data:data
      }).then((res)=>{
        if(res.data.code==10000){
          this.$message({
            type: 'success',
            message: '保存成功!'
          });
          this.$router.push({
            name: 'pagemanagement',
          })
        }else{
          this.$message({
            type: 'err',
            message: '保存失败!'
          });
        }
        //console.log(res.data.data)
      }).catch((err)=>{
          console.log(err)
      })
    },

    saveEvent(){//保存模板
      if(this.pageId){
        this.updateEvent()
      }else{
        this.saveAsEvent()
      }
    },

    updateEvent(){//更新页面
      let list  = JSON.parse(JSON.stringify(this.listCompontent))
      let allList = [];
      let updateList = [];
      let deleteList = [];
      list.forEach((item,index) => {
        //console.log(item.component_detail)
        let flag = false;
        this.getPageList.forEach((ev,second) => {
          if(item.id == ev.id){
            flag = true;
          }
        });
        item.component_detail = JSON.stringify(item.component_detail)
        if(flag){
          updateList.push(item)
        }else{
          allList.push(item)
        }
        //console.log(item.component_detail)
      });
      console.log( this.getPageList)
      this.getPageList.forEach((ev,second) => {
        let flag = false;
        updateList.forEach((item,index) => {
          if(item.id == ev.id){
            flag = true;
          }
        });
        if(!flag){
          deleteList.push({id:ev.id})
        }
        
      });

      let data = {
        id:this.pageId,
        page_name:this.form.name,
        page_title:this.form.title,
        add_components:allList,
        update_components:updateList,
        delete_components:deleteList
      }
      console.log(data)
      // return;
      this.$http({
        url: '/admin/page/update',
        method: 'post',
        data:data
      }).then((res)=>{
        if(res.data.code==10000){
          this.$message({
            type: 'success',
            message: '保存成功!'
          });
          this.$router.push({
            name: 'pagemanagement',
          })
        }else{
          this.$message({
            type: 'err',
            message: '保存失败!'
          });
        }
        console.log(res.data.data)
      }).catch((err)=>{
          console.log(err)
      })
    },

    getPage(pageId){//获取页面的详情
      this.$http({
        url: '/admin/page/get',
        method: 'post',
        data:{"pageId": pageId,}
      }).then((res)=>{
        if(res.data.code==10000){
          this.pageId = res.data.data.id;
          this.form.name = res.data.data.page_name;
          this.form.title = res.data.data.page_title;
          this.listCompontent = [];
          res.data.data.componentes.forEach((item,index) => {
            item.component_detail = JSON.parse(item.component_detail)
            this.listCompontent.push(item)
            this.controlList.push({className:'',check:false,existCheck:true})
          });
          
          this.getPageList = JSON.parse(JSON.stringify(res.data.data.componentes))
        }
        console.log(res.data.data)
      }).catch((err)=>{
          console.log(err)
      })
    },

    addList(ev){//添加组件
      this.listCompontent.forEach((item,index) => {
        item.rank = index+1;
      });
      this[ev].rank = this.listCompontent.length+1;
      console.log(this[ev].component_type,this[ev].rank)
      let item = JSON.parse(JSON.stringify(this[ev]))
      this.listCompontent.push(item)
      this.controlList.push({className:'',check:false,existCheck:true})
    },

    openDelete(index){//删除组件
      this.$confirm('确定删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(() => {
        console.log(index)
        this.listCompontent.splice(index,1)
        this.selectEvent(index)
      }).catch(() => {
                  
      });
    },
  },
  mounted() {
    if(this.$route.query.pageId){
      
      this.pageId = Number(this.$route.query.pageId)
      console.log(this.pageId)
      this.getPage(this.pageId )
    }
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

  .footer-compont{
    width: 800px;
    height: 130px;
    position: fixed;
    border: 1px solid #DCDFE6;
    border-bottom: none;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    bottom: 0px;
    margin: 0 auto;
    overflow: hidden;
    background: #ffffff;
    z-index: 100000;
    .module-item{
      padding: 15px 30px;
      border-bottom: 1px dashed #DCDFE6;
    }
    .subit-item{
      
      padding: 15px 30px;
      float:right;
    }
  }
}
</style>