<template>
  <div>
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000" class="tab">
    <van-tabbar-item icon="home-o" @click="$router.push('/')">首页</van-tabbar-item>
    <van-tabbar-item icon="comment-o" @click="$router.push('/message')">消息</van-tabbar-item>
    <van-tabbar-item icon="video-o" @click="$router.push('/home')">主页</van-tabbar-item>
  <van-tabbar-item icon="friends-o" @click="$router.push('/own')">我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
    name:'UtIl',
    props:['activew'],
    data() {
      return {
        active:this.activew,
      }
    },
}
</script>

<style scoped>

</style>