// 批量打印
import Layout from '@/layout'; 
export default [
    {
        path: '/batchPrinting',
        component: Layout,
        redirect: '/batchPrinting',
        children: [{
            path: '/batchPrinting',
            component: () => import('@/views/batchPrinting/index'),
            name: "batchPrinting",
            icon: 'iconfont icon-todo-o',
            meta: {
              title: '批量打印'
            }
          }]
      
}]