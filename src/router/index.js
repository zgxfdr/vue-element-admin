import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

// 路由规则: 常量
const constantRoutes = [{
        // 登录
        path: '/login',
        name: "login",
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },
    {
        // 注册
        path: '/register',
        component: () =>
            import ('@/views/register/index'),
        hidden: true
    },

    {
<<<<<<< HEAD
        // dashboard
        path: '/',
        component: Layout,
        children: [{
                path: '/',
                component: () =>
                    import ('@/views/dashboard/index'),
                name: "Dashboard",
                icon: 'iconfont icon-todo-o',
                meta: { title: 'Dashboard' }
            },
            {
                path: '/vuex',
                component: () =>
                    import ('@/views/vuex/index'),
                name: "Vuex",
                icon: 'iconfont icon-todo-o',
                meta: { title: 'Vuex' }
            },
            // {
            //   path: '/fatherson',
            //   component: () => import('@/views/fatherson'),
            //   name: '父子组件传值',
            //   icon: 'iconfont icon-todo-o',
            //   meta: { title: 'Fatherson' }
            // },
            // {
            //   path: '/mixin',
            //   component: () => import('@/views/mixin/index'),
            //   name: '混入',
            //   icon: 'iconfont icon-todo-o',
            //   meta: { title: 'Mixin' }
            // }
        ]
    }

=======
      path: '/mixin',
      component: () => import('@/views/mixin/index'),
      name: '混入',
      icon: 'iconfont icon-todo-o',
      meta: { title: 'Mixin' }
    } ,
  {
      path: '/demo',
      component: () => import('@/views/demo/index'),
      name: 'demo',
      icon: 'iconfont icon-todo-o',
      meta: { title: 'Demo' }
    },
    {
      path: '/set',
      component: () => import('@/views/set/index'),
      name: 'set',
      icon: 'iconfont icon-todo-o',
      meta: { title: 'Set' }
    }  ]
  }
 
>>>>>>> 9cc463012fb5484cd11929eb4e626e5ad2c054f7
]

// 创建 router实例
const createRouter = () => new Router({
        mode: 'history',
        routes: constantRoutes,
        scrollBehavior(to, from, savedPosition) {
            // return 期望滚动位置
            // console.log(to)
            // console.log(from)
            // console.log(savedPosition)
        }
    })
    // 加载实例
const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

// 导出
export default router