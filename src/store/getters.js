const getters = {
    token: state => state.user.token,
    name: state => state.user.name,
    isCollapse: state => state.user.isCollapse,
    sidewidth: state => state.user.sidewidth
}


export default getters