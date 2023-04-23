<template>
    <div>
       <header class="top" @click="retu">
         <van-icon name="arrow-left" />返回
       </header>
        <van-search
  v-model="value"
  show-action
  placeholder="搜你想看的标签类型"
  @search="onSearch"
>
  <template #action>
    <div @click="onSearch" >搜索</div>
  </template>
</van-search>
<van-empty v-if="show" description="搜索无结果" />
    </div>
</template>

<script>
export default {
    name:'OaSearch',
    data() {
        return {
            value:'',
            show:false,
            arr:[],
        }
    },
    mounted() {
        this.arr=this.$route.query.arr
    },
    methods: {
        onSearch(){
        let ins=[];
        this.arr.forEach((key,index) => {
                       if(this.arr[index].msg.includes(this.value)){
                        ins.unshift(index)
                       }
                });
            if(this.value==''||ins.length==0){
                this.show=true;
            }else{
                this.$router.push({
                path:'/',
                query:{
                    arr:ins
                }
            })
            }
        },
        retu(){
            this.$router.push('/')
        },
    },
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