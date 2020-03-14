// vue.config.js
'use strict'
const path = require('path')
const deFaultSettings = require('./src/setting.js')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const name = deFaultSettings.title || 'Chank Element Admin' // page title

// 开发端口
const port = process.env.port || process.env.npm_config_port || 10111

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        port: port,
        open: true
    },
    // webpack-merge将合并其中代码
    configureWebpack: {
        name: name,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    // webpack链式编程
    chainWebpack(config) {
        // 设置 vue-loader
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                // 保留模板中的空格输入
                options.compilerOptions.preserveWhitespace = true
                return options
            })
            .end()

        // 设置代码查找器
        config
            .when(process.env.NODE_ENV === 'development',
                config => config.devtool('cheap-source-map')
            )
    }
}
