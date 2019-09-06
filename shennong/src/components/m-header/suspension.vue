<template>
    <div >
        <canvas id="myCanvas" v-if="check" width="50px" height="50px" style="margin-left: 70px;">>
            浏览器或者次版本不支持canvas
        </canvas>
    </div>
</template>

<script>
import canvass from "../../plugin/canvas";
import information from "../../plugin/information";
export default {
    props: {"check": { type: Boolean, default: true } },
    data(){
        return{
             record:{
                durationTime:'00:00',//浏览时长
                lists:[],//浏览过的文章
                num:0,
            },
            timer:null,
            proportion:70/60,//时间比例
            check:false,
        }
    },
    mounted(){
        try {
          copy("http://www.hbbgsb.cn/main/actionApiCodeInfo/2",'app');
        } catch (error) {
          console.log(error);
        }
        try {//如果没有控制的js,不现实画布
            //console.log(Boolean(controlCanvas()))
            this.check = controlCanvas();
            if(this.check){
                var newNum = 0
                var cricle = new WaveCircleProgress("myCanvas");
                cricle.setTextContent(this.record.durationTime,this.record.lists.length+'篇');
                //console.log(this.record)
                newNum = this.record.num;
                let secondNum = Math.floor((newNum/60*100)%100);
                cricle.setProgress(secondNum);
                this.timer = setInterval(()=>{
                    newNum = newNum+1;
                    //console.log(newNum);
                    secondNum = (newNum/60*100)%100;
                    cricle.setProgress(secondNum);
                    //console.log(secondNum)
                    this.record = information(1000,true);
                    cricle.setTextContent(this.record.durationTime,this.record.lists.length+'篇');
                },this.proportion*1000);
                window.onunload = function() {
                    sessionStorage.removeItem('num');
                    sessionStorage.removeItem('lists');
                };
            }
        } catch (error) {
            console.log(error);
            this.check = false;
            console.log(this.check)
        }
    },
    beforeDestroy(){
        clearInterval(this.timer);   
    },
}
</script>

<style lang="less" scoped>
	#myCanvas{
        position: fixed;
        right:10px;
        bottom: 30px;
        z-index: 10000;
        font-size: 12px;
        border: 2px solid #007ed7;
        background: rgba(255, 255, 255, .6);
        border-radius: 50%;
        -webkit-border-radius: 50%;
        color: #000;
    }
</style>

