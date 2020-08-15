import {getAssetList,getAssetTypes} from '@/api/batchPrinting'

const state = {
    // 资产分类
    assetsTypes: [],
     
}
const mutations = {
    // 设置资产分类
    SET_TYPES_LIST: (state, assetsTypes) => {
        state.assetsTypes = assetsTypes;
    },
}

const actions = { 

    // 获取资产分类
    getAssetTypes({commit},options){
        return new Promise((resolve, reject) => {
            getAssetTypes(options)
                .then(response => {
                    const { data } = response;
                    if (data) { 
                        commit("SET_TYPES_LIST",data);
                        resolve(response);
                    } else {
                        reject();
                    }
                })
                .catch(error => reject(error))
        })
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
