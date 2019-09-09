<template>
  <div >
    <div class="phone-title" >{{form.title}}</div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props: { 
        form: { 
            type: Object ,
            defalut:{}
        } 
    },
}
</script>

<style lang="less" scoped>

</style>