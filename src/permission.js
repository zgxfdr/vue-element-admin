import router from './router'
// import store from './store'
// import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

// 设置 Nprogress
NProgress.configure({ showSpinner: false })

// 设置路由白名单
const whiteList = ['/login','/register'];

// 导航守卫
router.beforeEach((to, from, next) => {
    // 开启进度条
    NProgress.start()
    // token判断
    if (!getToken()) {
        // 跳转是否登录页判断
        if (to.path === '/login') {
            next({ path: '/' })
            NProgress.done()
        } else {
            next()
        }
    } else {
        // 白名单判断
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
            NProgress.done()
        }
    }
})

// 导航守卫
router.afterEach(() => {
    // 关闭进度条
    NProgress.done()
})