<template>
import { nextTick } from 'q';
    <div style="padding:50px 50px;">
        <el-table
            
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%;min-width:700px;"
            border
            :cell-style="center" :header-cell-style="center">

            <!-- <el-table-column
            type="selection"
            width="55">
            ref="multipleTable"
            @selection-change="handleSelectionChange"
            </el-table-column> -->

            <el-table-column
            label="页面名称"
            width="240">
            <template slot-scope="scope">{{ scope.row.page_name }}</template>
            </el-table-column>

            <el-table-column
            prop="create_time"
            label="创建时间"
            width="200">
            </el-table-column>

            <el-table-column
            label="操作"
            show-overflow-tooltip>
              <template slot-scope="scope">
                  <el-button type="primary" icon="el-icon-edit">编辑</el-button>
                  <el-button type="danger" @click="openDelete(scope.row.id)" icon="el-icon-delete">删除</el-button>
                  <el-tooltip class="item" effect="dark" content="复制链接" placement="bottom-start">
                    <el-button style="margin:0px 5px;" icon="el-icon-link"></el-button>
                  </el-tooltip>
                  <el-popover
                    placement="right-start"
                    width="150"
                    trigger="hover">
                    <div :id="'qrcode'+scope.row.id" class="qrcode"></div>
                    <el-button slot="reference" icon="el-icon-menu"></el-button>
                  </el-popover>
              </template>
            </el-table-column>

        </el-table>
    </div>
</template>

<script>
import QRCode from 'qrcodejs2'
  export default {
    data() {
      return {
        tableData: [],
        multipleSelection: [],
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },

    methods: {
      center() {
        return "text-align: center;";
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log(this.multipleSelection)
      },
      getPageList(){//获取页面列表
        this.$http({
            url: '/admin/page/getList',
            method: 'post',
            data:{"pageNum": 1,"pageSize": 10}
        }).then((res)=>{
          if(res.data.code==10000){
            this.tableData = res.data.data.data;
            this.$nextTick(()=>{
                this.tableData.forEach((item,index) => {
                  this.qrcode(item.id)
                });
            })
          }
          console.log(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })
      },
      qrcode(pageId){//生成二维码
          let id = 'qrcode'+pageId;
          let qrcode = new QRCode('qrcode', {
            width: '140px',
            height:'140px', // 高度
            text:pageId, // 二维码内容
        })
      },
      openDelete(pageId){
        this.$confirm('确定要删除该页面吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(() => {
          this.deletePageEvent(pageId)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      deletePageEvent(pageId){//删除某个页面
        console.log(pageId)
        return;
        this.$http({
            url: '/admin/page/delete',
            method: 'post',
            data:{"pageId": pageId}
        }).then((res)=>{
          console.log(res.data.data)
          if(res.data.code==10000){
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          
          }else{
            this.$message({
              type: 'success',
              message: '删除失败!'
            });
          }
          
        }).catch((err)=>{
          this.$message({
            type: 'success',
            message: '删除失败!'
          });
            console.log(err)
        })
      },
    },
    mounted(){
      this.getPageList()
    }
  }
</script>

<style lang="less" scoped>
.qrcode{
  width: 140px;
  height: 140px;
}
</style>
