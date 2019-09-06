<template>
  <div class="home">
    <m-header @headLoad="headLoad"></m-header>
    <suspension></suspension>

    <router-view v-if="routerShow"/>
    
  </div>
</template>

<script>
import mHeader from '@/components/m-header/m-header.vue'
import suspension from '@/components/m-header/suspension.vue'
export default {
  components: { mHeader,suspension},
  data() {
    return {
      routerShow: false,
    }
  },
  methods: {
    headLoad() {//顶部导航栏加载完成
      this.routerShow = true
    }
  },
}
</script>

<style lang="less" scoped>
.home {
  margin: 0 auto;
}
</style>

