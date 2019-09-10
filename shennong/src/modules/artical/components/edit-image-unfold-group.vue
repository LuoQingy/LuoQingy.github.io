<template>
  <div >
      <el-form ref="form" :model="itemContent" label-width="80px">
        <el-form-item label="背景颜色">
          <template>
            <div class="background-control contorl-compontent">
              <el-color-picker v-model="itemContent.background_color" style='width:40px;' @change='colorEvent' ></el-color-picker>
              <el-button  @click="reset(0)">重置</el-button>
            </div>
          </template>
        </el-form-item>
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
       
         <el-form-item label="数量">
          <template>
            <el-radio-group v-model="itemContent.layout">
              <el-radio label="one_column">1个</el-radio>
              <el-radio label="two_column">2个</el-radio>
              <el-radio label="three_column">3个</el-radio>
              <el-radio label="four_column">4个</el-radio>
              <el-radio label="window">5个</el-radio>
            </el-radio-group>
          </template>
        </el-form-item>
      </el-form>

      <div class="first-items">
        <el-form ref="form" :model="itemContent.component_detail" label-width="100px">
          <el-form-item label="上标题颜色">
            <template>
              <div class="background-control contorl-compontent">
                <el-color-picker v-model="itemContent.component_detail.top_title_color" style='width:40px;' @change='colorEvent' ></el-color-picker>
                <el-button  @click="reset(1)">重置</el-button>
              </div>
            </template>
          </el-form-item>

          <el-form-item label="下标题颜色">
          <template>
              <div class="background-control contorl-compontent">
                <el-color-picker v-model="itemContent.component_detail.bottom_title_color" style='width:40px;' @change='colorEvent' ></el-color-picker>
                <el-button  @click="reset(2)">重置</el-button>
              </div>
            </template>
          </el-form-item>

          <el-form-item label="上标题对齐">
            <template>
            <el-radio-group v-model="itemContent.component_detail.top_title_align">
              <el-radio label="left">左对齐</el-radio>
              <el-radio label="center">居中显示</el-radio>
              <el-radio label="right">右对齐</el-radio>
            </el-radio-group>
          </template>
          </el-form-item>
          <el-form-item label="下标题对齐">
           <template>
            <el-radio-group v-model="itemContent.component_detail.bottom_title_align">
              <el-radio label="left">左对齐</el-radio>
              <el-radio label="center">居中显示</el-radio>
              <el-radio label="right">右对齐</el-radio>
            </el-radio-group>
          </template>
          </el-form-item>
        </el-form>

        <div v-for="(item,index) in itemContent.component_detail.image_list" :key="index" class="first-item">
          <span class="btn-del el-icon-error" title='删除' @click="openDelete(index)"></span>
          <div class="item-image">
            <img :src="item.image_url" alt="">
          </div>
          <div class="item-form">
            <div style="overflow: hidden;" class="title-item">
              <span>上标题</span>
              <input placeholder="请输入上标题" style="width: 105px;" v-model="item.top_title"/>
               
              <span style='border-left:1px solid #DCDFE6;'>下标题</span>
              <input placeholder="请输入下标题" style="width: 105px;" v-model="item.bottom_title"/>

            </div>
            <div style="margin-top: 10px;">
              <el-input placeholder="请选择图片或输入图片地址" style="min-width: 115px;" v-model="item.image_url">
                <template slot="append">
                  <el-button @click="dialogEvent(index)">选择图片</el-button>
                </template>
              </el-input>
            </div>
            <div style="margin-top: 10px;">
              <el-input placeholder="请输入链接地址" style="min-width: 115px;"  v-model="item.to_url">
                <template slot="append">
                  <el-button>输入链接</el-button>
                </template>
              </el-input>
            </div>
          </div>
        </div>

        <div>
            <el-button icon="el-icon-plus" @click="openAdd"> 添加一个</el-button>
        </div>
      </div>




      <el-dialog title="上传图片" :modal-append-to-body='false' :modal='true' :visible="dialogTableVisible" @close='dialogTableVisible=false'>
          <div>
            <el-upload
              class="avatar-uploader"
              :action="baseURL"
              :show-file-list="false"
              accept='image/jpeg,image/gif,image/png,image/bmp,image/webp,image/svg,image/jpg'
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
          <span slot="footer" class="dialog-footer" v-if="imageUrl">
            <el-button type="primary" @click="btnEvent">确定使用</el-button>
            <el-button @click="dialogTableVisible = false">取 消</el-button>
          </span>
      </el-dialog>
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
        dialogTableVisible:false,
        recordIndex:null,
        baseURL:this.$baseUrl+'/admin/page/upload',
        imageUrl: '',
        dialogVisible: false,
        newImg:{'image_url':require('./../../../assets/image/9.jpg'),'to_url':'assets/image/9.jpg','top_title':'','bottom_title':'下标题'},
      }
    },
    methods:{
      reset(ev){//重置
        if(ev==0){
          this.itemContent.background_color = '#fafafa';
        }else if(ev==1){
          this.itemContent.component_detail.top_title_color = '#ffffff';
        }else if(ev==2){
          this.itemContent.component_detail.bottom_title_color = '#666666';
        }
        
      },
      colorEvent(){//背景颜色选择
          //console.log(this.itemContent.background_color);
      },
      dialogEvent(ev){
        this.recordIndex  = ev;
        this.dialogTableVisible = true;
        this.imageUrl = null;
        console.log(this.recordIndex)
      },
      handleAvatarSuccess(res, file) {
        //console.log(res);
        if(res.code ==10000){
            this.imageUrl = res.data;
        }else{
          this.$message({
            type: 'error',
            message: '上传失败'
          });
        }
        
      },
      beforeAvatarUpload(file) {
        let isIMAGE;
        let tyleList = this.typeList;
        if (tyleList) {
          for (let i = 0; i < tyleList.length; i++) {
            if (file.type === tyleList[i]) isIMAGE = true;
          }
        }
        //console.log(file)
      },
      btnEvent(){//确定使用图片
        this.itemContent.component_detail.image_list[this.recordIndex].image_url = this.imageUrl;
        this.dialogTableVisible = false;
      },
      openDelete(index){//删除组件
        if(this.itemContent.component_detail.image_list.length>1){
          this.$confirm('确定删除吗？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then(() => {
            console.log(index)
            this.itemContent.component_detail.image_list.splice(index,1)
          }).catch(() => {
                      
          });
        }else{
          this.$message({
            message: '至少保留一个',
            type: 'warning'
          });
        }
       
      },
      openAdd(){
        this.itemContent.component_detail.image_list.push(this.newImg)
      }
    }
}
</script>

<style lang="less" scoped>
.first-items{
  margin: 0 14px;
  border-top: 1px dashed #999;
  padding-top: 20px;
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
    position: relative;
    .item-image{
      height: 112px;
      width: auto;
      min-width: 40px;
      width: 80px;
      background: #eee;
      float: left;
      margin-right: 10px;
      border: 1px solid #e7eaec;
      position: relative;

      img{
          vertical-align: middle;
          height: 110px;
          width: auto;
          width: 80px;
          display: block;
          border: none;
      }
    }
    .item-form{
      width: 350px;
      height: auto;
      display: block;
      overflow: hidden;
      .title-item{
        height: 28px;
        line-height: 28px;
        border: 1px solid #DCDFE6;
        border-radius: 3px;
        -webkit-border-radius: 3px;
        display: flex;
        display: -webkit-flex;
        span{
          width: 60px;
          text-align: center;
          border-right:  1px solid #DCDFE6;
          
        }
        input{
          border: none;
          cursor: none;
          text-align: center;
          cursor: pointer;
        }
      }
    }
    .btn-del{
      height: 0;
      width: 18px;
      display: block;
      position: absolute;
      top: 2px;
      right: 2px;
      z-index: 10000;
      color: #999999;
      font-size: 18px;
    }
  }
}
.avatar-uploader {
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  &:hover{
      border-color: #409eff;
  }
}
.avatar-uploader-icon{
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px !important;
  background: rgb(250, 250, 250);
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>