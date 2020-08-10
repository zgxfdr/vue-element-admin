const getters = {
    token: state => state.user.token,
    name: state => state.user.name,
    isCollapse: state => state.user.isCollapse,
    sidewidth: state => state.user.sidewidth,

    // count: state => state.user.count
    count: (state, getters) => {
        return state.user.count = 999;
    },
    // 页面参数
    params: state => state.router.params

}


export default getters