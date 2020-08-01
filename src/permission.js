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
            const hasAuths = store.getters.auths && store.getters.auths.length > 0;
            if (hasAuths) {
                next();
            } else {
                try {
                    console.log("11") 
                   // const auths = await store.dispatch('user/getAllUserAuth');
                   // if (auths && auths.length > 0) {
                    const auths = 0;
                    if (!auths) {
                        console.log(router);
                        const accessRoutes = router.options.routes;
                        console.log(accessRoutes)
                        router.addRoutes(accessRoutes);
                        next({ ...to, replace: true });
                    } else {
                        next();
                    }
                } catch (error) {
                    // await store.dispatch('user/logout');
                    // Notification.error({
                    //     title: '错误',
                    //     message: error
                    // });
                    // next({ path: '/login' });
                    // NProgress.done();
                }
            }
        }
    } else {
        // 未登录 
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next({ path: '/login' })
            NProgress.done()
        }
    }
});

router.afterEach(() => {
    NProgress.done();
});