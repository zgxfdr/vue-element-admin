import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// 访问状态对象
const state = {
    count: 0,
    sayhi:"hello"
}

// 修改state状态
const mutations = {
    add(state) {
        state.count++;
    },
    reduce(state) {
        state.count--;
    }
}

// 看做是store的计算属性，获取数据前对数据进行一种再编辑
// 计算过滤操作
const getters = {
    count: function (state) {
        return state.count += 100;
    }
}

// 异步修改状态
// context：上下文对象，这里你可以理解称store本身。
// {commit}：直接把commit对象传递过来，可以让方法体逻辑和代码更清晰明了。
const actions = {
    addAction(context) {  
        context.commit('add',10)
        setTimeout(() => { context.commit('reduce') }, 3000);
        console.log(context);
    },
    reduceAction({ commit }) {
        console.log(commit)
        commit('reduce')
    }
}

// module
// const moduleA={
//     state,mutations,getters,actions
// }

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    // modules:{a:moduleA}
})

export default store