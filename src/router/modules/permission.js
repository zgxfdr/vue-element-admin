import { asyncRoutes, constantRoutes } from '@/router';

/**
 * 使用meta.code确定当前用户是否具有权限
 * @param auths
 * @param route
 */
function hasPermission(auths, route) {
    if (route.meta && route.meta.code) {
        return auths.some(role => route.meta.code === role);
    } else {
        return true;
    }
}

/**
 * 通过递归过滤异步路由表
 * @param routes asyncRoutes
 * @param auths
 */
export function filterAsyncRoutes(routes) {
    
    const res = [];
    routes.forEach(route => {
        const tmp = { ...route };
        if (hasPermission(auths, tmp)) {
            if (tmp.children) {
                tmp.children = tmp.children;
            }
            console.log(res)
            res.push(tmp);
        }
    });
    return res;
}

const state = {
    routes: [],
    addRoutes: [],
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes;
        state.routes = constantRoutes.concat(routes);
    }
}

const actions = {
    // 过滤权限路由
    generateRoutes({ commit }) {
        return new Promise(resolve => {
            const accessedRoutes = filterAsyncRoutes(asyncRoutes);
        //    commit('SET_ROUTES', accessedRoutes);
        console.log(accessedRoutes);
            resolve(accessedRoutes);
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}