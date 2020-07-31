// 文章管理
import { getclassifyList, addClassify } from '@/api/article';
const state = {
    // 文章分类
    classifyList: [],
}
const mutations = {
    // 设置文章分类
    SET_CLASSIFY_LIST: (state, classifyList) => {
        state.classifyList = classifyList;
    },
}

const actions = {
    // 获取文章分类
    getclassifyList({ commit }, options) {
        return new Promise((resolve, reject) => {
            getclassifyList(options)
                .then(response => {
                    const { data } = response;
                    if (data) {
                        commit("SET_CLASSIFY_LIST", data);
                        resolve(response);
                    } else {
                        reject();
                    }
                })
                .catch(error => reject(error))
        })
    },
    // 添加/修改文章分类
    addClassify({ dispatch }, formData) {
        return new Promise((resolve, reject) => {
            addClassify(formData)
                .then(response => {
                    dispatch("getclassifyList", { isdel: 0 });
                    resolve(response);
                })
                .catch(error => reject(error))
        })
    },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}