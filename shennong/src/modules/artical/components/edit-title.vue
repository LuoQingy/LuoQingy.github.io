<template>
    <div >
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="页面名称">
                <el-input v-model="form.name" style="max-width:320px;" placeholder="请输入名称"></el-input>
                <div style="font-size:12px;">注意：页面名称是便于后台查找，页面标题是手机端标题。</div>
            </el-form-item>
            <el-form-item label="页面标题">
                <el-input v-model="form.title" style="max-width:320px;" placeholder="请输入标题"></el-input>
            </el-form-item>
            <!-- <el-form-item label="背景颜色">
                <template>
                <div class="background-control contorl-compontent">
                    <el-color-picker v-model="form.color" style='width:40px;' @change='colorEvent'  ></el-color-picker>
                    <el-button  @click="reset">重置</el-button>
                </div>
                </template>
            </el-form-item> -->
        </el-form>
    </div>
</template>

<script>
export default {
    props: { 
        form: { 
            type: Object ,
            defalut:{}
        } 
    },
    data(){
        return{

        }
    },
    methods:{
        reset(){//重置
            this.form.color = '#fafafa';
        },
        colorEvent(){//背景颜色选择
            console.log(this.form.color);
        },
    }
}
</script>

<style lang="less" scoped>

</style>