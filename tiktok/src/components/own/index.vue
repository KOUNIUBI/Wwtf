<template>
  <div>
     <header class="top" @click="retu">
         <van-icon name="arrow-left" />返回
       </header>
    <van-empty  description="个人功能正在开发" />
    <UtIl :activew='3'/>
  </div>
</template>

<script>
export default {
    name:'MyOwn',
    data() {
      return {
        active:3,
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