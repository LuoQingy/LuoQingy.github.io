<template>
  <div  class="J-news" style="padding: 15px 10px" @click="routeJump(itemContent.id)">
    <div class="news-wrap">
      <h3 class="dz-ellipsis-2" :class="!itemContent.images ? 'no-image' : ''">
        {{ itemContent.title }}
      </h3>
      <div v-if="itemContent.images" class="img-wrap">
        <div
          class="img"
          v-for="(itemImage, index) in itemContent.images.slice(0, 3)"
          :key="index"
        >
          <div
            :imgurl="itemImage"
            class="pic"
            style="background-image: url(http://images.prculture.cn/images/loadwap.png)"
          ></div>
        </div>
      </div>
      <p class="tags clearfix">
        <em class="tag tag-src">{{ itemContent.source }}</em>
        <em class="tag tag-view">{{
          itemContent.updateTime.substring(0, 10)
        }}</em>
      </p>
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
    },
  },
  data() {
    return {};
  },
  methods:{
    routeJump(id){
      if(this.$route.name =='Home'){
        const http = window.location.protocol + '//' + location.hostname + ':' + location.port
        window.location.href = http + '/artical.html#/home/artical/'+id+'/'+this.$route.params.type +'/1'
      }else{
        const http = window.location.protocol + '//' + location.hostname + ':' + location.port
        console.log(window.location.protocol + '/ffff/' + location.hostname + ':ffff' + location.port)
        console.log(http)
        console.log(this.$route.params.type)
        //window.location.href = http + '#/home/index/'+this.$route.params.type+'?time='+new Date().getTime();
        this.$router.replace({ name: 'artical', params: {id:id, type: this.$route.params.type ,page:1}})
      }
    }
  }
};
</script>

<style lang="less" scoped>

</style>
