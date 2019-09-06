<template>
  <div class="news-ad" :class="border ? 'news-ad-border' : ''">
    <div :class='adClass+"-new"'></div> 

    <ad-script :adSrc="adSrc" v-if="adClass!='nb_80'" :adClass="adClass"></ad-script>
    <ad-iframe class="iframe" :adSrc="adSrc" v-else frameborder="no"  :adClass="adClass" :style="'height: 400px'"></ad-iframe>
  </div>
  
</template>
<script>
export default {
  props: { adSrc: { type: String }, adClass: { type: String }, border: { type: Boolean, default: false } },
  components: {
    adScript: {
      props: { adSrc: { type: String }, adClass: { type: String } },
      render(createElement) {
        return createElement(
          'script',
          {
            attrs: {
              type: 'application/javascript',
              src: this.adSrc,
            },
            class: this.adClass
          },
        );
      },
    },
    adIframe: {
      props: { adSrc: { type: String }, adClass: { type: String } },
      render(createElement) {
        return createElement(
          'iframe',
          {
            attrs: {
              src: this.adSrc,
            },
            class: this.adClass
          },
        );
      },
    },
  },
  data() {
    return {
    };
  },
};
</script>
<style lang="less" scoped>
.iframe {
  width: 100%;
}
.news-ad {
  padding: 15px 10px;
  // height: auto;
  height: 102px;
  position: relative;
}
.news-ad-border:before {
  content: "";
  position: absolute;
  width: 187.5%;
  height: 1px;
  bottom: 0;
  left: 3%;
  right: 0;
  top: 0;
  margin: 0 auto;
  // transform: translateX(-50%);
  border-bottom: 1px solid #e6e6e6;
  transform-origin: 0 0;
  transform: scale(0.5, 0.5);
  box-sizing: border-box;
}
</style>