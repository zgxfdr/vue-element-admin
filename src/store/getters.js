const getters = {
    token: state => state.user.token,
    name: state => state.user.name,
    isCollapse: state => state.user.isCollapse,
    sidewidth: state => state.user.sidewidth,

    // count: state => state.user.count
    count: (state, getters) => { return state.user.count = 999; }

}


export default getters