<template>
  <div class="videoall" @mousewheel.prevent >
    <header class="tou">
      <van-icon size="30" @click="search" name="search" color="#ffffff"/>
      <p class="tousize">{{msg}}</p>
      <div class="biao"></div>
      <p v-if="serachshow" class="return" @click="retug">推荐</p>
    </header>
<van-swipe :loop="false"  vertical  class="swipes"  @change="change"   ref="videoplay" :show-indicators='false'>
  <van-swipe-item v-for="(item,index) in mp4all" :key="index" style="height:700px;">
    <div class="videoall1">
        <video class="video1" :src="mp4all[index].src"     controls="controls"  loop='loop'  ref="videoplay"></video>
        <div class="descp">{{mp4all[index].msg}}</div>
    </div>
        <van-icon name="like" size="35" color="#fff"  class="iconlove"/>
        <van-icon name="star" size="35" color="#fff"  class="iconxing"/>
        <van-icon name="share" size="35" color="#fff" class="iconqita"/>
  </van-swipe-item>
</van-swipe>
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000" class="tab">
  <van-tabbar-item icon="home-o" @click="$router.push('/');">首页</van-tabbar-item>
  <van-tabbar-item icon="comment-o" @click="$router.push('/message')">消息</van-tabbar-item>
  <van-tabbar-item icon="video-o" @click="$router.push('/home')">主页</van-tabbar-item>
  <van-tabbar-item icon="friends-o" @click="$router.push('/own')">我的</van-tabbar-item>
</van-tabbar>
  </div>
  
</template>

<script>
import axios from 'axios'
export default {
  name: 'AudioFrequency',
  data() {
    return {
      mp4all:[],
      active: 0,
      index:0,
      msg:'推荐',
      serachshow:false,
    }
  },
  methods: {
    retug(){
      this.loading('yew');
    },
    change(e){
      let resy= this.$refs.videoplay
      if (e > this.index) {
            resy[this.index].pause();
         resy[e].play();
      } else if (e < this.index) {
           resy[this.index].pause();
         resy[e].play();
      }
      this.index = e
    },
    search(){
      this.$router.push({
        path:'/search',
        query:{
          arr:this.mp4all
        }
      })
    },
    loading(e){
      if(JSON.stringify(this.$route.query)=='{}'||e=='yew'){
      axios.post('https://bdb24c6d-8c19-4f80-8e7e-c9c9f037f131.bspapp.com/video',{
        info:'get_video'
      }).then(res=>{
        this.mp4all=res.data.data;
        this.msg='推荐'
        this.serachshow=false;
      })
    }else{
       axios.post('https://bdb24c6d-8c19-4f80-8e7e-c9c9f037f131.bspapp.com/video',{
        info:'get_video'
      }).then(res=>{
        this.$route.query.arr.forEach((key) => {
           this.mp4all.unshift(res.data.data[key])
           this.msg='搜索'
           this.serachshow=true;
        });
      })
    }
    },
  },
  mounted() {
   this.loading();
  },
}
</script>
<style scoped>
.iconlove{
  bottom: 350px;
  left: 340px;
  z-index: 9;
}
.iconxing{
 bottom: 290px;
  left: 305px;
  z-index: 9;
}
.iconqita{
 bottom: 230px;
  left: 270px;
  z-index: 9;
}
.biao{
  width: 30px;
  height: 3px;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
   position: relative;
  right: 315px;
}
.return{
  font-size: 1.1rem;
  color: white;
  position: absolute;
  right: 220px;
  bottom: 8px;
  width: 90px;
}
.tousize{
  font-size: 1.3rem;
  color: white;
  position: absolute;
  right: 280px;
  bottom: 5px;
  width: 90px;
}
.swipes{
  widows: 200px;
  height: 700px;
}
  .descp{
    position: relative;
    top: -100px;
    color: white;
    font-size: 0.9em;
    font-weight: 900;
    width: 80vw;
    left: 30px;
  }
  .videoall1{
    height: 700px;
    width: 400px;
    background-color: rgb(0, 0, 0);
    position: relative;
  }
  .video1{
    position: relative;
    width: 100%;
    height: 94%;
  }
  .tou{
    position: fixed;
    top: 20px;
    left: 340px;
    width: 50px;
    height: 50px;
    z-index: 2;
  } 
</style>
