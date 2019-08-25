import Vue from 'vue'
import App from './App.vue'

// 引入element-ui
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// 加载ElementUi
Vue.use(ElementUi)

// 引入mockjs
import mockdata from './mock/index.js';

// 引入vue-router
import VueRouter from 'vue-router'
import routeConfig from './router-config.js'
// 加载VueRouter
Vue.use(VueRouter);
const router = new VueRouter({
  routes: routeConfig
})



new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
