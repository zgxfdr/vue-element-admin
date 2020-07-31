// 文章管理
import Layout from '@/layout';
export default [{
    path: '/article',
    component: Layout,
    name: 'Article',
    redirect: '/article/articles',
    meta: {
        title: '文章管理',
        icon: 'el-icon-menu',
        code: "SUCCESS_SYS1005",
    },
    children: [
        {
            path: '/article/articles',
            component: () =>
                import(/* webpackChunkName: "ArticlesArticle" */ "@/views/article/articles"),
            name: 'ArticlesArticle',
            redirect: '/article/articles/list',
            meta: {
                title: '文章管理',
                breadcrumb: false,
                code: "SUCCESS_SYS1022",
            },
            children: [
                {
                    path: '/article/articles/list',
                    component: () =>
                        import(/* webpackChunkName: "ListArticlesArticle" */ "@/views/article/articles/list"),
                    name: 'ListArticlesArticle',
                    meta: {
                        title: '文章管理',
                    }
                },
                {
                    path: '/article/articles/addOrUpdate',
                    component: () =>
                        import(/* webpackChunkName: "AddOrUpdateArticlesArticle" */ "@/views/article/articles/addOrUpdate"),
                    name: 'AddOrUpdateArticlesArticle',
                    hidden: true,
                    meta: {
                        title: '添加或者编辑文章信息',
                    }
                }
            ]
        } 
    ]
}]