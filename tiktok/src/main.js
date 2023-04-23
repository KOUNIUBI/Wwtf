import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUi from 'element-ui'
import vueRouter from 'vue-router'
import Vant from 'vant';
import 'vant/lib/index.css';
import UtIl from './util/index'
Vue.use(Vant);
Vue.use(ElementUi)
Vue.use(vueRouter)
Vue.component(UtIl.name,UtIl)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
