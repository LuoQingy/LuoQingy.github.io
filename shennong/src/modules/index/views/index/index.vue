<template>
  <div class="mescroll"  id="mescroll">
    <div style="padding:0 0px;">
        <template v-for="(item, index) in dataList">
          <section
            :key="index"
            class="news-item"
            :class="!item.images || item.images.length >= 3? 'news-item-s2': 'news-item-s1' "
          >
          <modular-second
              v-if="!item.images || item.images.length >= 3"
              :itemContent="item"
            ></modular-second>
            <modular-first v-else :itemContent="item"></modular-first>
          </section>

          <template >
            <ad-box :key="index" :adSrc="$root.adSrcList[getAdIndex(index)]['src']"
              :adClass="$root.adSrcList[getAdIndex(index)]['class']" border></ad-box>
          </template>

        </template>
    </div>
    <youmengsys :key="reIndexyoumeng" v-if="startSys" :adSrc="$root.youmengsrc" :iframeSrc="$root.iframe4g"></youmengsys>
  </div>
</template>
<script>
import modularFirst from '@/components/modular/modularFirst'
import modularSecond from '@/components/modular/modularSecond'
import adBox from '@/components/adBox.vue'
import youmengsys from "@/components/youmengsys.vue"
export default {
    components: { modularFirst, modularSecond,adBox,youmengsys},
    data(){
        return{
            mescroll:null,
            lastScrollTop: 0, //滚动条距离顶部距离
            reIndex: 1, //控制广告重绘
            timer: null, //定时器
            stepTimer:null,
            // 自动上拉加载
            randomStep: 3000, //随机自动上拉加载时间
            loopIndex: 0, //当前循环次数

            dataList: [],//数据列表
            startSys: false,
            reIndexyoumeng: 1,
            judgeAreaSwitch: true,
        }
    },
    async mounted(){
     
        this.mescrollEvent();//初始化
        if(this.judgeAreaSwitch) {
          this.judgeArea()//栏目判断
        }
        await this.getDataList(this.$route.params.type);
        this.judgeAreaSwitch = true;
        this.startSys = false
        this.startSys = true
    },
    watch: {
        $route: async function (to, from) {
            // 监控导航栏点击事件导致的路由切换
            if (to.name === "Home" && from.name === "Home") {
                this.$set(this, 'reIndexyoumeng', this.reIndexyoumeng + 1)
                console.log('switch',new Date().getTime());
                if(this.judgeAreaSwitch) {
                  this.judgeArea()//栏目判断
                }
                this.loadingDialog("show")
                document.querySelector(".mescroll-upwarp").style.display = "none";
                this.loadingDialog("show"); 
                clearTimeout(this.stepTimer)
                this.scollToTop();
                this.getDataList(to.params.type)
                
            }
        }
    },
    methods: {
        mescrollEvent(){
            let self = this;
            this.mescroll = new MeScroll("mescroll", {
                //请至少在vue的mounted生命周期初始化mescroll,以确保您配置的id能够被找到
                down: {
                    use: true,//是否启用下拉刷新
                    auto: false, //是否在初始化完毕之后自动执行下拉回调callback; 默认true
                    callback: self.downCallback, //下拉刷新的回调
                    lazyLoad: {
                    use: true,
                    attr: "imgurl", // 网络地址的属性名 (图片加载成功会移除该属性): <img imgurl='网络图  src='占位图''/>
                    // showClass: '', // 图片加载成功的显示动画: 渐变显示,参见mescroll.css
                    delay: 0, // 列表滚动的过程中每500ms检查一次图片是否在可视区域,如果在可视区域则加载图片
                    offset: 200 // 超出可视区域200px的图片仍可触发懒加载,目的是提前加载部分图片
                    }
                },
                up: {
                    auto: false, //初始化完毕,是否自动触发上拉加载的回调
                    isBoth: false, //上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新;默认false,两者不可同时触发; 这里为了演示改为true,不必等列表加载完毕才可下拉;
                    isBounce: true, //此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
                    callback: self.upCallback, //上拉加载的回调
                    // toTop: {
                    // //配置回到顶部按钮
                    // src: require('./../assets/img/mescroll-totop.png'), //默认滚动到1000px显示,可配置offset修改
                    // //offset : 1000
                    // warpClass : "mescroll-totop" ,
                    // },
                    lazyLoad: {
                    use: true,
                    attr: "imgurl", // 网络地址的属性名 (图片加载成功会移除该属性): <img imgurl='网络图  src='占位图''/>
                    // showClass: '', // 图片加载成功的显示动画: 渐变显示,参见mescroll.css
                    delay: 0, // 列表滚动的过程中每500ms检查一次图片是否在可视区域,如果在可视区域则加载图片
                    offset: 200 // 超出可视区域200px的图片仍可触发懒加载,目的是提前加载部分图片
                    }
                }
            });
        },
      
        async getDataList(type, beforeId = null, isUpback = false) {//获取数据
            if (!isUpback) {//非下拉加载重置数组
              document.querySelector(".mescroll-upwarp").style.display = "none";
              this.dataList = [];
              //console.log('outside',new Date().getTime());
            }
            let reqObj = beforeId ? { params: { type, beforeId }, headers: { zone: encodeURI(this.$root.cityObj.city) } } : { params: { type }, headers: { zone: encodeURI(this.$root.cityObj.total) } }
            await this.$http.get("/a/news.html", reqObj).then(res => {
                let resArr = []

                res.data.data.forEach((item, index) => {
                if (item.type == 'news') {
                    resArr.push(item);
                }
                });
                if (!isUpback) {//非下拉加载重置数组
                    this.dataList = [];
                    //this.$root.id = resArr[0]['id'];
                    this.$set(this.$root, 'id', resArr[0]['id'])
                    this.$set(this.$root, 'type', type)
                    console.log(this.$root.id)
                    console.log('inside',new Date().getTime());
                }
                this.$set(this, 'dataList', this.dataList.concat(resArr))
                
                // 设置当地位置
                if (type === this.$root.cityObj.city) {
                    this.$set(this.$root.cityObj, 'city', this.dataList[0]['category'])
                }

                this.loadingDialog("hide")

                // 结束mescroll的刷新动画
                
                this.mescroll.endSuccess()
                if (!beforeId && resArr && resArr.length < 10) { //初次请求返回数据不足10时重新发送请求
                  this.getDataList(type, resArr[resArr.length - 1]['id'], true)
                }
            }).catch(err => {
                this.loadingDialog("hide");
                this.mescroll.endErr()
            })
            if (!isUpback) {
              console.log('!isUpback',new Date().getTime());
              this.mescroll.lazyLoad(100)
              this.loopIndex = 0;
              this.getRandomStep()
            }
        },
        
        downCallback() {//下拉刷新的回调
            //console.log('out downback',new Date().getTime());
            setTimeout(() => {
                let type = this.$route.params.type;//刷新的类型
                let beforeId = this.dataList[this.dataList.length - 1].id;//刷新前列表最后广告id\
                console.log('in downback',new Date().getTime());  
                this.getDataList(type, beforeId, false)
                //this.getRandomStep()
            }, 100)
        },

        upCallback() {//上拉加载的回调
            let type = this.$root.type;//刷新的类型
            // this.log('dataList',this.dataList)
            if(this.dataList.length>0){
                let beforeId = this.dataList[this.dataList.length - 1].id;//刷新前列表最后广告id
                this.getDataList(type, beforeId, true);
            }
        },

        scollToTop() { //滚动到顶部
            this.mescroll.scrollTo(0, 0)
        },

        getRandomStep(){
          let timeArr = [3000, 4000, 5000, 6000];
          let randomStep = timeArr[Math.floor(Math.random() * 4)];    
          if (this.loopIndex < 3) {
            this.loopIndex++;
            this.stepTimer = setTimeout(() => { 
              this.upCallback();
              console.log('this.getRandomStep()',this.loopIndex)
              this.getRandomStep()
            }, randomStep)
          }
        },

        getAdIndex(index) { //计算当前广告组件index
            return index%this.$root.adSrcList.length;
        },
        judgeArea() {
          if(this.$route.params.type != undefined&&this.$root.cityObj['city']) {
            //直接有路由的情况打开网页的情况
            if(this.$root.cityObj['city'] != this.$route.params.type) {
              let arr = this.$root.newsList.indexOf(this.$route.params.type)
              //console.log(this.$root.newsList)
              console.log
              if(arr == -1) {
                // let query = this.$route.params.type;
                let path = this.$route.path;
                console.log(path.split('/'))
                console.log(path)
                if(path.indexOf("index") != -1) {//首页
                  console.log(136)
                  this.$router.replace({ name: 'Home', params: { 'type': this.$root.cityObj['city'] } })
                } else {//详情页面
                  console.log("详情页面打开")
                }
              }
            } else {
              let type = this.$root.newsList[Math.floor(Math.random() * this.$root.newsList.length)]
              //this.$router.replace({ name: 'Home', params: { 'type': type } })
            }
          } else {
            console.log("首页直接进行的跳转路由")
            let arr2 = this.$root.newsList.indexOf(this.$route.params.type)
            if(arr2 == -1) {
              let type = this.$root.newsList[Math.floor(Math.random() * this.$root.newsList.length)]
              this.$router.replace({ name: 'Home', params: { 'type': type } })
              this.judgeAreaSwitch = false
            }
            
          }
        }
    },
    beforeDestroy(){
      clearTimeout(this.timer);
      clearTimeout(this.stepTimer)
    }
};
</script>

<style lang="less">
.mescroll {
  position: fixed;
  top: 45px;
  bottom: 0;
  height: auto;
  max-width: 750px;
  -webkit-overflow-scrolling: touch
}
.mescroll-totop {
  width: 48px;
  height: 48px;
}

.news-item,
.news-item-s2 {
  height: auto;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 187.5%;
    height: 1px;
    bottom: 0;
    left: 3%;
    right: 0;
    top: 0;
    margin: 0 auto;
    border-bottom: 1px solid #e6e6e6;
    transform-origin: 0 0;
    transform: scale(0.5, 0.5);
    box-sizing: border-box;
  }

  .J-news {
    display: block;
    padding: 10px 0;
    color: #333;
    text-decoration: none;

    .news-wrap {
      position: relative;
      h3 {
        font-size: 18px;
        line-height: 1.3em;
        overflow: hidden;
        width: 100%;
        margin-bottom: 15px;
        font-weight: 800;
        color: #222222;
      }

      h3.no-image {
        margin-bottom: 80px;
      }

      .img-wrap {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        display: -webkit-flex;
        overflow: hidden;
        height: 2rem;

        .img {
          width: 33.33%;
          padding-right: 2px;

          div {
            width: 100%;
            background-color: rgba(150, 150, 150, 0.1);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            height: 100%;
            border-radius: 2px;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }

      .tags {
        margin-top: 15px;
        color: #999999;
        overflow: hidden;
        font-size: 14px;
        font-family: PingFang-SC-Medium;

        .tag {
          display: inline-block;
          line-height: 12px;
          margin-right: 5px;
        }

        .tag-view {
          float: right;
          margin-right: 0px;
        }
      }
    }
  }
}

.news-item:first-child,
.news-item-s2:first-child {
  height: auto;
  position: relative;

  &:before {
    content: "";
    display: none;
  }
}
</style>