<template>
  <div class="home">

    <router-view />
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      routerShow: false,
    }
  },
  methods: {
  },
}
</script>

<style lang="less" scoped>
.home {
  margin: 0 auto;
}
</style>

