// 加载 Vue
import Vue from 'vue'
// import * as Sentry from '@sentry/browser';
// import * as Integrations from '@sentry/integrations';
import http from '@/utils/http'
import App from './App.vue'
import router from './router'
import store from './store'

// Sentry.init({
//   dsn: 'https://31570ac77a254873a2f6db9efb5ea1e5@sentry.io/5175250',
//   integrations: [new Integrations.Vue({Vue, attachProps: true}), new Integrations.RewriteFrames()],
//   release: process.env.RELEASE_VERSION
// });

// Vue.prototype.Sentry = Sentry
Vue.prototype.http = http
    // 加载样式初始化
import 'normalize.css/normalize.css' // a modern alternative to CSS resets

// 加载 element-ui

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)

// 加载全局样式
import '@/styles/base.css'



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