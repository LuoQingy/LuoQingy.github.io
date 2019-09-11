<template>
  <div class="error-page">
      <div class="error-code">4<span>0</span>4</div>
      <div class="error-desc">啊哦~ 页面出错了</div>
  </div>
</template>

<script>
export default {
  methods: {

  }
}
</script>


<style lang="less" scoped>
    .error-page{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background: #fff;
        box-sizing: border-box;
        padding-top: 3rem;
    }
    .error-code{
        line-height: 1;
        font-size: 1.4rem;
        font-weight: bolder;
        color: #2d8cf0;
    }
    .error-code span{
        color: #00a854;
    }
    .error-desc{
        font-size: .44rem;
        color: #777;
        text-align: center;
        margin: .4rem;
    }
    .error-handle{
        font-size: .44rem;
        margin-top:  .44rem;
        padding-bottom:  1.4rem;
        text-align: center;
        div{
            width: 3rem;
            border-radius: .2rem;
            height: 1.2rem;
            line-height: 1.2rem;
            color: #996633;
            background: linear-gradient(90deg, #eaddbb 0%, #ddc993 100%);
        }
    }
    .error-btn{
        margin-left:  1.4rem;
    }
</style>
