import request from '@/utils/request';

// 查询文章分类
export const getclassifyList = data => {
    return request({
        url: "/api/article/getClassifyList",
        method: "POST",
        data
    })
}

// 添加或者编辑文章分类
export const addClassify = data => {
    return request({
        url: "/api/article/addClassify",
        method: "POST",
        data
    })
}

// 获取文章列表集合
export const getArticleList = data => {
    return request({
        url: "/api/article/getArticleList",
        method: "POST",
        data
    })
}
// 获取文章详情
export const getArticle = data => {
    return request({
        url: "/api/article/getArticle",
        method: "POST",
        data
    })
}
// 添加或者编辑文章
export const updateArticle = data => {
    return request({
        url: "/api/article/updateArticle",
        method: "POST",
        data
    })
}

// 批量或者单独删除文章
export const delAllArticle = data => {
    return request({
        url: "/api/article/delAllArticle",
        method: "POST",
        data
    })
}
