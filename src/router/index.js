import Vue from "vue";
import Router from "vue-router";
import { ROUTER_MODE } from '@/config'

/**
 * 重写路由的push方法
 * 解决，相同路由跳转时，报错
 */
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router); 

import Layout from '@/layout'

// 路由规则: 常量
const constantRoutes = [{ 
    // 登录
    path: '/login',
    name: "login",
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    // 注册
    path: '/register',
    component: () => import('@/views/register/index'),
    hidden: true
  },
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard',
    children: [{
        path: '/dashboard',
        component: () => import('@/views/dashboard/index'),
        name: "Dashboard",
        icon: 'iconfont icon-todo-o',
        meta: {
          title: '系统首页'
        }
      },
      {
        path: '/table',
        component: () => import('@/views/table/index'),
        name: "Table",
        icon: 'iconfont icon-todo-o',
        meta: {
          title: '表格'
        }
      }  
    ]
  } 
  
]


import article from './modules/article';

const asyncRoutes = [
  ...constantRoutes,
  ...article
]
 
console.log(ROUTER_MODE);
// 创建路由
const createRouter = () => new Router({
  mode: ROUTER_MODE || "hash",
  scrollBehavior: () => ({ y: 0 }),
  routes: asyncRoutes
});

const router = createRouter();

export const resetRouter = () => {
  const newRouter = createRouter();
  console.log(newRouter);
  router.matcher = newRouter.matcher;
}

export default router;
 
