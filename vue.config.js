// vue.config.js
'use strict'
const path = require('path')
const deFaultSettings = require('./src/setting.js')
const SentryCliPlugin  = require('@sentry/webpack-plugin');


function resolve(dir) {
    return path.join(__dirname, dir)
}

const name = deFaultSettings.title || 'Vue Element Admin' // page title

// 开发端口
const port = process.env.port || process.env.npm_config_port || 10111


console.log(process.env);

module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    productionSourceMap: false,// 开发环境源码配置项
    devServer: {
        port: port,
        open: true
    },
   
    
    // configureWebpack: config => {
    //     if (process.env.NODE_ENV === 'production') {
    //       // 为生产环境修改配置...
    //     } else {
    //       // 为开发环境修改配置...
    //     }
    //   }
    // webpack-merge将合并其中代码
    configureWebpack: {
        name: name,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
        // plugins:[
        //     new SentryCliPlugin ({
        //      include: "./dist",
        //      release: process.env.RELEASE_VERSION,
        //      configFile: "sentry.properties",
        //      ignore: ['node_modules'] ,
        //      urlPrefix: "/websites/vue-source-map-test"  // 注意这个，解释往下看。
        //     })
        //    ]
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
