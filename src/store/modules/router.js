import router from '@/router';
import {
    getParams,
    setParams,
    removeParams
} from '@/utils/auth';

const state = {
    params: JSON.parse(getParams()) || {}
}
const mutations = {
    SET_PARAMS: (state, params) => {
        state.params = params;
    },
}

const actions = {
    push({ commit }, { path, params }) {
        return new Promise((resolve, reject) => {
            console.log(router.push({ path }))
            router.push({ path })
                .then(res => {
                    if (params) {
                        commit('SET_PARAMS', params);
                        setParams(JSON.stringify(params));
                    } else {
                        commit('SET_PARAMS', ''); 
                        removeParams();
                    }
                    resolve(res);
                }).catch(err => {
                    console.log(err);
                    commit('SET_PARAMS', '');
                    removeParams();
                    reject(err);
                })
        })
    },
    resolve({ commit }, { path, params }) {
        return new Promise((resolve) => {
            if (params) {
                commit('SET_PARAMS', params);
                setParams(JSON.stringify(params));
            } else {
                commit('SET_PARAMS', '');
                removeParams();
            }
            resolve(router.resolve({ path }).href);
        })
    },
    replace({ commit }, { path, params }) {
        return new Promise((resolve, reject) => {
            router.replace({ path })
                .then(res => {
                    if (params) {
                        commit('SET_PARAMS', params);
                        setParams(JSON.stringify(params));
                    } else {
                        commit('SET_PARAMS', '');
                        removeParams();
                    }
                    resolve(res);
                }).catch(err => {
                    console.log(err);
                    commit('SET_PARAMS', '');
                    removeParams();
                    reject(err);
                })
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}