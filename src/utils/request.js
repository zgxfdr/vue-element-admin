// 网络请求文件
import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { Message } from 'element-ui'

// 创建 axios实例
const service = axios.create({
    // 基地址
    baseURL: process.env.VUE_APP_BASE_API,
    // 请求时间
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {
 
    if (store.getters.token) {
        // 需要设置token请求头
        // 修搞 ['token']
        config.headers['Authorization'] = getToken()
    }
    return config
}, error => {
    // 可以在请求前报错时做相应处理
    console.log("请求报错", error)
    return Promise.reject(error)
})


// 响应拦截器
service.interceptors.response.use(response => {
    const result = response.data
    // 可以在请求返回响应前做相应处理
    if (result.code !== 200) {
        Message({
            message: result.message || 'Error',
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(new Error(result.message || 'Error'))
    } else {
        return result
    }
}, error => {
    console.log('响应报错', error)
    Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(error)
})

// 导出
export default service