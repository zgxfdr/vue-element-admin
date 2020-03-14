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

export default store