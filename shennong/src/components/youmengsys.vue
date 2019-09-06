<template>
  <div style="display: none;">
    <ad-script :adSrc="adSrc"  ></ad-script>
    <iframe-script :iframeSrc="iframeSrc" ></iframe-script>
  </div>
</template>
<script>
export default {
  props: { adSrc: { type: String }, iframeSrc: {type: String} },
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
          },
        );
      },
    },
    iframeScript: {
      props: { iframeSrc: { type: String }},
      render(createElement) {
        return createElement(
          'script',
          {
            attrs: {
              src: this.iframeSrc,
            },
          },
        );
      },
    }
  },
  created() {
  },
  data() {
    return {

    };
  },
  mounted() {
  	console.log(33)
    console.log(this.adSrc)

    if(window.iframeSwitch == true) {
  	  console.log("开始加载 4g")
  	  console.log(document.getElementById('div-container'))
  	  if(document.getElementById('div-container') != null) {
  	  	document.body.removeChild(document.getElementById('div-container'))
  	  }
  	}
  }
 };
</script>
<style lang="less" scoped>

</style>


