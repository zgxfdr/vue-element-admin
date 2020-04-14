import axios from 'axios'
import { Message } from 'element-ui'


// 创建 axios实例
const service = axios.create({
    // 基地址
    //http.js baseURL: process.env.VUE_APP_BASE_API,
    baseURL: "https://wxapi.dq.anhuayw.com",
    // 请求时间
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {

    // if (store.getters.token) {
    //     // 需要设置token请求头
    //     // 修改['token']
    //     config.headers['Authorization'] = getToken()
    // }
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
    if (result.code != 100) {
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


const http = {
    async get(url, param) {
        try {
            const response = await service.get(url, param);
            const { data, code, msg } = response.data;
            if (code != 100) {
                Message({
                    message: msg || 'Error',
                    type: 'error',
                    duration: 5 * 1000
                })
            } else {
                console.log("resolve")
                return data
            }
        } catch (e) { console.log(e) }



    }, 
    async post(url, param) {
        try {
            const response = await service.post(url, param);
            const { data, code, msg } = response;
            if (code != 100) {
                Message({
                    message: msg || 'Error',
                    type: 'error',
                    duration: 5 * 1000
                })
            } else {
                console.log("resolve")
                return data
            }
        } catch (e) {
            console.log(e)
        }

    }

}
export default http;