import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
Vue.use(Vuex)

// 文件目录遍历 (webpack)
// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

// 合成文件对应路径对象
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // 处理 './app.js' => 'app
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules,
  getters
})

// 上面的代码是遍历modules文件，合成modules，避免要一个个module引入的麻烦
// const moduleA = {};
// const moduleB = {};

// const store = new Vuex.Store({
//   modules:{
//     a:moduleA,
//     b:moduleB
//   },
//   getters
// })



export default store 