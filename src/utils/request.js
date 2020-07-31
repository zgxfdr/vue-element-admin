import axios from 'axios';
import { BASE_URL } from '@/config';
import { Notification } from 'element-ui';
import router from '@/router';
import store from '@/store';

const service = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
    headers: {
        "content-type": "application/json",
        // 'content-type': 'application/x-www-form-urlencoded'
    }
});

// 添加请求拦截器
service.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    if (store.getters.id && store.getters.token) {
        config.headers['userId'] = store.getters.id;
        config.headers['userToken'] = store.getters.token;
        config.headers['source'] = "Web_Server";
    }
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(response => {
    // 对响应数据做点什么
    const { data } = response;
    const { code, msg } = data;
    if (code == 100 || code == "SUCCESS_SYS1001") {
        return data;
    } else {
        Notification({
            title: "失败",
            message: msg || 'Error',
            type: 'error',
            showClose: true,
            duration: 5 * 1000
        })
        if (code == '503' || code == '504' || code == '505') {
            router.push("/");
        }
        return Promise.reject(data);
    }
}, error => {
    // 对响应错误做点什么
    Notification({
        title: "失败",
        message: error || 'Error',
        type: 'error',
        showClose: true,
        duration: 5 * 1000
    })
    return Promise.reject(error);
});

export default service;