<template>
  <div>
     <header class="top" @click="retu">
         <van-icon name="arrow-left" />返回
       </header>
    <van-empty description="主页功能正在开发" />
    <UtIl :activew='2'/>
  </div>
</template>

<script>
export default {
    name:'MyHome',
    data() {
      return {
        active:0,        
      }
    },
      methods:{
          retu(){
            this.$router.push('/')
        },
    }
}
</script>

<style scoped>
   .top{
        width: 100vw;
        height: 40px;
        background-color: rgb(3, 68, 98);
        padding-top: 20px;
    }
</style>