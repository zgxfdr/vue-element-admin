// 加载 api
import { register, login, logout, getInfo } from '@/api/user';
import { getToken, setToken, removeToken } from '@/utils/auth';
import router, { resetRouter } from '@/router';
import { Message } from 'element-ui';

const state = {
    token: getToken(),
    id: '',
    email: '',
    isCollapse: false,
    sidewidth: "200px",
    count: 100
};

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token;
    },
    SET_ID: (state, id) => {
        state.id = id;
    },
    SET_EMAIL: (state, email) => {
        state.email = email;
    },
    SET_ISCOLLAPSE: (state) => {
        state.isCollapse = !state.isCollapse;
    },
    SET_SIDEWIDTH: (state, sidewidth) => {
        state.sidewidth = sidewidth;
    },

    SET_COUNT: (state, count) => {
        state.count = count;
    },

};

const actions = {
    // 注册操作
    register({ commit }, registerForm) {
        return new Promise((resolve, rejcet) => {
            register(registerForm)
                .then(response => {

                    Message({
                        message: response.message || '注册成功!',
                        type: 'success',
                        duration: 3 * 1000,
                    });
                    resolve(response);
                })
                .catch(error => {
                    rejcet(error);
                });
        });
    },
    // 登录操作
    login({ commit }, loginForm) {
        const { email, password } = loginForm;
        return new Promise((resolve, reject) => {
            login({ email: email, password: password }).then(response => {
                Message({
                    message: response.message || '登录成功!',
                    type: 'success',
                    duration: 3 * 1000
                })
                const { data } = response
                commit('SET_TOKEN', data.token)
                setToken(data.token)
                resolve()
            }).catch(error => {
                reject(error)
            })
        });
    },
    // 获取用户信息
    getInfo({ commit, state }) {
        return new Promise((resolve, rejcet) => {
            getInfo()
                .then(response => {
                    const { data } = response;
                    if (!data) {
                        rejcet('未找到此用户 请重新登录!');
                    }
                    const { _id, email } = data;
                    commit('SET_ID', _id);
                    commit('SET_EMAIL', email);
                    resolve(data);
                })
                .catch(error => {
                    rejcet(error);
                });
        });
    },
    // 登出操作
    logout({ commit, state }) {
        return new Promise((resolve, rejcet) => {
            logout(state.token)
                .then(() => {
                    commit('SET_TOKEN', '');
                    removeToken();
                })
                .catch(error => {
                    rejcet(error);
                });
        });
    },
    // 前端登出
    weblogout({ commit }) {
        commit('SET_TOKEN', '');
        removeToken();
    },
    checkoutCollapse({ commit }) {
        commit("SET_ISCOLLAPSE")
    },
    // addCount({ commit }) {
    //     commit("SET_COUNT")
    // }
};

// 导出
export default {
    namespaced: true,
    state,
    mutations,
    actions,
};