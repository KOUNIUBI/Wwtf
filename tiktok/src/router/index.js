import Vue from 'vue'
import Router  from 'vue-router'
Vue.use(Router)
import Af from '../components/Af/Audiofrequency.vue';
import Os from '../components/search/index.vue';
import My from '../components/home/index.vue';
import Ms from '../components/message/index.vue';
import Mo from '../components/own/index.vue'
const router=new Router({
    routes:[
        {
            path:'/',
            name:'首页',
            component:Af,
        },
        {
            path:'/search',
            name:'搜索',
            component:Os,
        },
        {
            path:'/home',
            name:'主页',
            component:My,
        },
        {
            path:'/message',
            name:'消息',
            component:Ms,
        },
        {
            path:'/own',
            name:'我的',
            component:Mo,
        },
    ]
})
export default router