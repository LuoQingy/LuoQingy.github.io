<template>
  <header v-if="isLoad">
    <section class="top-menu">
      <ul id="J_top_menu" ref="menuList" class="top-menu-list">
        <li
          v-for="(item, index) of typeData"
          :key="index"
          @click="addClass(index)"
          :class="$route.params.type == item ? 'activeClass' : ''"
        >
          <template lang="html">{{ item | formatType }}</template>
        </li>
      </ul>
    </section>
  </header>
</template>

<script>
export default {
  name: 'dzheader',
  data() {
    return {
      scrollDivWidth: '',
      isLoad: false,
      typeData: []
    }
  },
  filters: {
    formatType(val) {
      return val === '看点' ? '推荐' : val
    }
  },
  async beforeCreate() {
    //this.loadingDialog('show')
    let city = '', typeShow = false
    // let cip = window.returnCitySN['cip'], city = ''
    // let url = process.env.NODE_ENV === "development" ? '/getip' : 'https://recommend.dzkandian.com/api/ip'
    try {
      await this.$http.get('https://recommend.funzixun.com/api/ip').then(res => {
        if (res.status === 200) {
          let tmpArr = res.data.data.split('-')
          city = tmpArr[1] || tmpArr[0]
          this.$root.cityObj = { total: res.data.data }
          // this.log('city', res.data.data)
        }
      })
      await this.$http.get("/a/news.html", { params: { type: city }, headers: { zone: encodeURI(this.$root.cityObj.total) } }).then(res => {
        // this.log('type', res)
        typeShow = res.data.data.length > 0 ? true : false
        if (typeShow) {
          city = res.data.data[0]['category'] //同步后台返回city
        }
      })
    } catch (error) {
      
    }
    await this.$http.get('/a/news.list', { params: { version: '1' } }).then(res => {
      let typeData = res.data.list
      typeData.map((item, index) => {
        if (item === '本地') {
          if (typeShow) {
            // 修改栏目
            typeData[index] = city
            this.$root.cityObj['city'] = city
          } else {
            // 空数据删除本地栏目
            typeData.splice(index, 1)
          }
        }
      })
      // let type = this.$route.params.type || typeData[Math.floor(Math.random() * typeData.length)]
      let type = typeShow ? city : typeData[Math.floor(Math.random() * typeData.length)]
      
      this.$set(this, 'typeData', typeData)
      this.$set(this.$root, 'newsList', typeData)
      //console.log(this.$root.newsList)
      this.loadingDialog('hide')
      this.isLoad = true
      if (!this.$route.params.type) {
        this.$router.replace({ name: 'Home', params: { 'type': type } })
      }else{
        if(this.$route.name == 'Home'){
          type =  typeData.indexOf(this.$route.params.type)>-1?this.$route.params.type:type ;
          this.$router.replace({ name: 'Home', params: { 'type': type } })
        } 
      }
      this.$nextTick(() => {
        //console.log('首次加载导航栏', this.$route)
        this.findIndex(type)
      })
    })
    this.$emit('headLoad')
  },
  getTypeList() { //设置栏位

  },
  watch: {//route切换tab跟踪切换
    $route(to, from) {
      if (document.querySelector(".top-menu-list li") && to.name === "Home") {
        let type = to.params.type
        this.findIndex(type)
      }
    }
  },
  methods: {
    findIndex(type) {//获取当前nav选中项
      this.typeData.forEach((item, index) => {
        if (item === type) {
          document.title = this.typeData[index];
          this.scrollDivWidth = document
            .querySelector(".top-menu-list li")
            .getBoundingClientRect().width;
          let odivW = this.scrollDivWidth / 2;
          let oNavDiv = document.querySelectorAll(".top-menu-list li");
          let oClienWidth = document.body.clientWidth / 2 || document.documentElement.clientWidth / 2;
          //console.log(oNavDiv[index].offsetLeft,oClienWidth,odivW,document.querySelectorAll(".top-menu-list li"),type)
          document.querySelector(".top-menu-list").scrollLeft = oNavDiv[index].offsetLeft - oClienWidth + odivW;
        }
      })
    },
    addClass(index) {//滚动至点击项
      document.title = this.typeData[index];
      this.scrollDivWidth = document
        .querySelector(".top-menu-list li")
        .getBoundingClientRect().width;
      let odivW = this.scrollDivWidth / 2;
      let oNavDiv = document.querySelectorAll(".top-menu-list li");
      let oClienWidth = document.body.clientWidth / 2 || document.documentElement.clientWidth / 2;
      document.querySelector(".top-menu-list").scrollLeft = oNavDiv[index].offsetLeft - oClienWidth + odivW;
      if(this.$route.name =='Home'){
        this.$router.replace({ name: 'Home', params: { 'type': this.typeData[index] }, query: { time: new Date().getTime()}})
      }else{
        const http = window.location.protocol + '//' + location.hostname + ':' + location.port
        console.log(http)
        console.log(this.$route.params.type)
        window.location.href = http + '#/home/index/'+this.typeData[index]+'?time='+new Date().getTime();
      }
    },
  }
}
</script>

<style lang="less" scoped>
header {
  position: fixed;
  z-index: 10;
  top: 0;
  width: 10rem;
  max-width: 750px;
  height: 45px;
  .top-menu {
    position: relative;
    height: 45px;
    background-color: #fff;
    overflow-y: hidden;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-image: -webkit-linear-gradient(
        top,
        transparent,
        transparent 40%,
        #ddd 0
      );
      background-size: 100% 1px;
      background-position: bottom;
      background-repeat: no-repeat;
    }
    .top-menu-list {
      overflow: hidden;
      overflow-x: scroll;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      li {
        font-size: 18px;
        line-height: 35px;
        display: inline-block;
        height: 35px;
        margin: 0 10px 0 15px;
        padding: 5px 0;
        -webkit-animation: fadeout 0.4s;
        animation: fadeout 0.4s;
        vertical-align: baseline;
        white-space: nowrap;
        color: #333;
        text-decoration: none;
      }
      .router-link-active {
        color: #007dd5;
        font-size: 20px;
        position: relative;
        font-weight: bold;
      }
      .activeClass {
        color: #007dd5;
        font-size: 20px;
        position: relative;
        font-weight: bold;
        position: relative;

        &:after {
          position: absolute;
          content: "";
          width: 100%;
          height: 2px;
          border-radius: 2px;
          left: 0;
          bottom: 0;
          background-color: #007dd5;
        }
      }
    }
  }
}
header .top-menu .top-menu-list::-webkit-scrollbar {
  display: none;
}
</style>
