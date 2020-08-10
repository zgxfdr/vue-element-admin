import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Notification } from 'element-ui';
import router from './router';
import store from './store';
import { getUserInfo } from '@/utils/auth';

NProgress.configure({ showSpinner: false });

// 路由白名单
const whiteList = ['/login'];

router.beforeEach(async (to, from, next) => {
    // 动画开始 
    NProgress.start();
    // 检查是否已经登录
    const hasToken ='1';
    const hasAeskey = '1';
    const hasId = '1';
    if (hasToken && hasAeskey && hasId) {
        // 已登录
        if (to.path === '/login') {
            next({ path: '/' });
            NProgress.done();
        } else {
            next();
        }
    } else {
        // 未登录 
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next()
            NProgress.done()
        }
    }
});

router.afterEach(() => {
    NProgress.done();
});