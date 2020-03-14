// 加载 Vue
import Vue from 'vue'

// 加载样式初始化
import 'normalize.css/normalize.css' // a modern alternative to CSS resets

// 加载 element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)

// 加载全局样式
import '@/styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'


// 加载路由判断
import './permission'
// 加载过滤函数
import * as filters from './filters'
// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false


 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
