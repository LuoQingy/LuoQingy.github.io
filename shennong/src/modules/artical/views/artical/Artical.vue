<template>
  <more-content ref="moreContent">
    <div class="artical" >
        <h1>{{ dataList.title }}</h1>
        <div class="source">
          <span>{{ dataList.sourceName }}</span>
          <span>{{ dataList.pubTime }}</span>
        </div>
        <ad-box :key="reIndex" :adSrc="$root.adSrcList[0]['src']" :adClass="$root.adSrcList[0]['class']"></ad-box>
        <div v-html="content[currentPage - 1]" id="content" class="content"></div>
        <div v-if="currentPage == content.length" class="copyright">
          版权声明：本文内容的组织和采编均来自{{ dataList.sourceName }}。
        </div>
        <pagination
          @pageForward="pageForward"
          @scollToTop="scollToTop"
          @refreshAd="refreshAd"
          v-model="currentPage"
          :page-size="content.length"
        ></pagination>
        <button @click="backHome" class="backhome-btn align-center">
          返回首页查看更多
          <img src="@/assets/image/组 7@2x.png" width="20" height="20" alt />
        </button>
        <ad-box :key="reIndex" :adSrc="$root.adSrcList[1]['src']" :adClass="$root.adSrcList[1]['class']"></ad-box>

        <h3 class="more-list">猜你喜欢</h3>

        <ad-box border :key="reIndex" :adSrc="$root.adSrcList[2]['src']" :adClass="$root.adSrcList[2]['class']"></ad-box>
        <ad-box border :key="reIndex" :adSrc="$root.adSrcList[3]['src']" :adClass="$root.adSrcList[3]['class']"></ad-box>

        <h3 class="more-list">热点推荐</h3>
        <ad-box border :key="reIndex" :adSrc="$root.adSrcList[4]['src']" :adClass="$root.adSrcList[4]['class']"></ad-box>
    </div>
    
    
    <youmengsys :key="reIndexyoumeng" v-if="startSys" :adSrc="$root.youmengsrc" :iframeSrc="$root.iframe4g"></youmengsys>
  </more-content>
</template>

<script>
import MoreContent from "./contentList.vue"
import Pagination from "@/components/pagination.vue"
import adBox from "@/components/adBox.vue"
import youmengsys from "@/components/youmengsys.vue"
import information from "@/plugin/information";
export default {
  components: { MoreContent, Pagination,adBox,youmengsys},
    data(){
        return{
          dataList: {},
          currentPage: 1,
          content: [],
          mescroll:null,
          reIndex: new Date().getTime(), //控制刷新广告
          reIndexyoumeng: 1,
          startSys: false,
        }
    },
    watch: {
      $route(to, from) {
        if (to.name === 'artical') {
          if(to.params.id != from.params.id){
            this.freshPage(to.params.id, to.params.type)
            // this.$refs.moreContent.getDataList(to.params.type, to.params.id, false)
            this.getMoreContent()
            // 刷新文章内容页广告
            this.$set(this, 'reIndex', this.reIndex + 1)
            this.scollToTop()
          }
        }else{

        }
      }
    },
    created() {
      this.reIndexyoumeng = 1;
      this.startSys = false;
      this.startSys = true;
      let id = this.$route.params.id,
      type = this.$route.params.type;
      this.getDataDetails(id, type);
    },
    mounted(){
      this.getMoreContent()
    },
    methods:{
      mescrollEvent(){//初始化
        let self = this;
        this.mescroll = new MeScroll("mescroll", {
            //请至少在vue的mounted生命周期初始化mescroll,以确保您配置的id能够被找到
            down: {
                use: false,//是否启用下拉刷新
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
      async getDataDetails(id, type) {//获取文章信息  
        await this.$http.get("/a/news-" + id + ".html", { params: { type, id, tpl: "json" }, headers: { zone: encodeURI(this.$root.cityObj.city) } })
          .then(res => {
            if (res.status === 200) {
              this.$set(this, "dataList", res.data);
              // 修改浏览器标题
              document.title = res.data.title
              information(0, false, id)
              
              /**
               * 正则替换：1.替换data-src=>imgurl，使用mescroll lazyload格式
               *          2.匹配<img>，增加占位图
               *          3.替换figure标签为p标签
               */
              res.data.content = res.data.content
                // .replace(/data-src="([\s\S]*?)"/g, "v-lazy=\"'$1'\"")
                .replace(/data-src/g, "imgurl")
                .replace(/<img/g, "<img src\=\'http\:\/\/images\.prculture\.cn\/images\/loadwap\.png\'")
                .replace(/figure/g, "p");
              // this.content = res.data.content.match(
              //   /(<p\b[^<>]*?>[\s\S]*?<\/p>[\s\S]*?<p\b[^<>]*?>[\s\S]*?<\/p>)|(<p\b[^<>]*?>[\s\S]*?<\/p>)|(<img[\s\S]*?>)/g
              // );
              /**
               * 正则匹配：规则1：匹配两个<p>，并且两个<p>其中不含单独Img标签，
               *          规则2：匹配单个<p>,
               *          规则3：匹配无<p>包裹的单独<img>
               */
              let tempArr = res.data.content.match(
                /(<p\b[^<>]*?>[\s\S]*?<\/p>[\s\S]*?[^<img[\s\S]*?>][\s\S]*?<p\b[^<>]*?>[\s\S]*?<\/p>)|(<p\b[^<>]*?>[\s\S]*?<\/p>)|(<img[\s\S]*?>)/g
              );
              // 图片无<p>包裹特殊处理
              let regP = /<p\b[^<>]*?>[\s\S]*?<\/p>/,
                regImg = /<img[\s\S]*?>/
              tempArr.forEach((item, index) => {
                let res = regImg.test(item)
                if (regImg.test(item) && !regP.test(item)) {
                  // this.log(index, res)
                  tempArr[index] = item.replace(/(<img[\s\S]*?>)/, "<p> $1 <\/p>")
                }
              })
              this.content = tempArr.join("").match(
                /(<p\b[^<>]*?>[\s\S]*?<\/p>[\s\S]*?<p\b[^<>]*?>[\s\S]*?<\/p>)|(<p\b[^<>]*?>[\s\S]*?<\/p>)|(<img[\s\S]*?>)/g
              )
              if(this.$route.params.page<=this.content.length && typeof(Number(this.$route.params.page))=='number'){
                this.$set(this, "currentPage", Number(this.$route.params.page))
              }else{
                this.$set(this, "currentPage", 1)
                this.$router.push({
                  name: 'artical',
                  params: { id: this.$route.params.id, type: this.$route.params.type,page: 1}
                })
              }
              /** js替换方法 */
              // this.content = res.data.content.split(/<p\b[^<>]*>.*?<\/p>/);
              // let tempArr = res.data.content.split(/<\/p>/);
              // tempArr.forEach((item, index) => {
              //   if (index % 2 != 0) {
              //     this.content.push(tempArr[index - 1] + tempArr[index]);
              //   }
              // });
              // if (tempArr.length % 2 != 0) {
              //   this.content.push(tempArr[tempArr.length - 1]);
              // }
              this.mescroll.endSuccess()
            }
          }).catch((err) =>{

          });
          this.loadingDialog("hide")
      },

      backHome(){//返回更多
        let randomNum = Math.floor(Math.random() * this.$root.newList.length);
        let type = this.$root.newList[randomNum];
        //console.log( this.$root.newList,randomNum,type)
        const http = window.location.protocol + '//' + location.hostname + ':' + location.port
        //console.log(http)
        window.location.href = http + '#/home/index/'+type+'?time='+new Date().getTime();
      },

      refreshAd(){//刷新广告
        this.$set(this, 'reIndex', this.reIndex + 1)
        this.getMoreContent();
        
      },

      getMoreContent(){
        let typeData = this.$root.newsList;
        // let type = typeData.indexOf(this.$route.params.type)>-1?this.$route.params.type:this.$root.cityObj.city
        // console.log(type)
        if(typeData.indexOf(this.$route.params.type)>-1){//正常打开本地
          //console.log("type")
          this.$refs.moreContent.getDataList(this.$route.params.type, this.$route.params.id)
        }else{//分享页面打开本地栏目
          if(this.$root.cityObj.city) {//本地城市有数据
            this.$refs.moreContent.getDataList(this.$root.cityObj.city)
          } else {
            let type = this.$root.newsList[Math.floor(Math.random() * this.$root.newsList.length)]
            this.$refs.moreContent.getDataList(type)
          }
        }
      },

      pageForward(){ //下一篇
        // console.log(this.$root.id)
        this.$router.push({
          name: 'artical',
          params: { id: this.$root.id, type: this.$root.type ,page: 1}
        })
      },
      async freshPage(id, type) {//刷新页面视图
        this.loadingDialog("show")
        await this.getDataDetails(id, type);
        this.$set(this, "currentPage", 1);
      },
      scollToTop(){//回到顶部
        this.$refs.moreContent.scollToTop();
      },
    }
};
</script>

<style lang="less" scoped>
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
.artical {
  padding: 12px;
  h1 {
    font-size: 22px;
    color: #333;
    font-weight: bolder;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  .source {
    font-size: 15px;
    color: #666;

    margin-bottom: 17px;
    > span:first-child {
      margin-right: 15px;
    }
  }

  .backhome-btn {
    background-color: transparent;
    width: 100%;
    height: 40px;
    border: 1px solid #007dd5;
    border-radius: 4px;
    color: #007dd5;
    font-size: 16px;
    margin: 20px 0;
  }

  .more-list {
    font-size: 18px;
    line-height: 18px;
    font-weight: bold;
    color: #333333;
    text-indent: 7px;
    position: relative;
    margin-bottom: 10px;
    &:after {
      content: "";
      display: block;
      width: 2px;
      height: 13px;
      background: #007dd5;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
<style scoped>
.artical >>> .news-ad {
  padding: 10px 0;
}

.artical >>> .news-ad-border:before {
  width: 200%;
  left: 0;
}

#content >>> p {
  word-wrap: break-word;
  font-size: 19px;
  color: #333;
  line-height: 30px;
  margin-bottom: 30px;
}

#content >>> img {
  width: 100%;
  border-radius: 4px;
}

.copyright {
  margin-bottom: 10px;
  font-size: 18px;
}
.align-between {
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  justify-content: space-between;
  align-items: center;
}
</style>