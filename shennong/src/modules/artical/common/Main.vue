<template>
  <div class="wrapper">
    <!-- <v-head></v-head> -->
    <v-sidebar v-if="isShowRouter"></v-sidebar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import vSidebar from "./Sidebar.vue";


export default {
  data() {
    return {
      tagsList: [],
      collapse: false,
      isShowRouter: true
    };
  },
  components: {
    vSidebar,
  },
  created() {
   
  },
  methods: {},
  destroyed(){
  }
};
</script>
<style lang="less" scoped>
.content{
  position: fixed;
  top: 0px;
  left: 200px;
  right: 0px;
  height: 100%;
  padding: 10px 10px 30px;
  overflow-y: scroll;
  box-sizing: border-box;

}
</style>
