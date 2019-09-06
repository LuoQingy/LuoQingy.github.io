<template>
  <div  class="J-news" style="padding: 15px 10px" @click="routeJump(itemContent.id,itemContent.category)">
    <div class="news-wrap" v-if="itemContent.images && itemContent.images == 'userdata: NULL'">
      <div class="txt-wrap" style="width: 100%">
        <h3 class="dz-ellipsis-2 no-image">{{ itemContent.title }}</h3>
        <p class="tags clearfix">
          <em class="tag tag-src">{{ itemContent.source }}</em>
          <em class="tag tag-view">{{
            itemContent.updateTime.substring(0, 10)
          }}</em>
        </p>
      </div>
    </div>
    <div class="news-wrap" v-else>
      <div
        class="img-wrap"
        v-for="(itemImage, index) in itemContent.images.slice(0, 1)"
        :key="index"
      >
        <div
          :imgurl="itemImage"
          class="pic"
          style="background-image: url(http://images.prculture.cn/images/loadwap.png)"
        ></div>
      </div>
      <div class="txt-wrap">
        <h3 class="dz-ellipsis-2">{{ itemContent.title }}</h3>
        <p class="tags clearfix">
          <em class="tag tag-src">{{ itemContent.source }}</em>
          <em class="tag tag-view">{{
            itemContent.updateTime.substring(0, 10)
          }}</em>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemContent: {
      type: Object,
      default: () => {
        return {
          url: "",
          title: "",
          images: "",
          source: "",
          updateTime: ""
        };
      }
    }
  },
  data() {
    return {};
  },
  methods:{
    routeJump(id,type){
      if(this.$route.name =='Home'){
        const http = window.location.protocol + '//' + location.hostname + ':' + location.port
        window.location.href = http + '/artical.html#/home/artical/'+id+'/'+type +'/1'
      }else{
        const http = window.location.protocol + '//' + location.hostname + ':' + location.port
        console.log(window.location.protocol + '/ffff/' + location.hostname + ':ffff' + location.port)
        console.log(http)
        console.log(this.$route.params.type)
        //window.location.href = http + '#/home/index/'+this.$route.params.type+'?time='+new Date().getTime();
        this.$router.replace({ name: 'artical', params: {id:id, type: type ,page:1}})
      }
    }
  }
};
</script>

<style lang="less" scoped>
.news-item-s1 {
  .J-news {
    .news-wrap {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      display: -webkit-flex;
      min-height: 0;
      .txt-wrap {
        position: relative;
        width: 67%;
        h3 {
          // font-size: 15px;
          font-size: 18px;
          line-height: 1.3em;
          margin-right: 12px;
          // height: 38px;
          color: #222;
          font-weight: 800;

          .tags {
            position: absolute;
            bottom: 0;
            color: #999;
            overflow: hidden;
            // font-size: 12px;
            font-size: 14px;
            font-family: PingFang-SC-Medium;
          }
        }
        p {
          width: 100%;
          position: absolute;
          bottom: 0;
          .tag-view {
            float: right;
            font-family: PingFang-SC-Medium;
          }
        }
      }
      .img-wrap {
        overflow: hidden;
        width: 33%;
        height: 2rem;
        margin-right: 10px;
        div {
          width: 100%;
          background-color: rgba(150, 150, 150, 0.1);
          // background-image: url(//mini.eastday.com/toutiaoh5/img/img_preview.png);
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          height: 100%;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>
