// 入口entry 指示webpack应该使用哪个模块 来作为构建其内部依赖图的开始 webpack找到哪些模块和图是入口起点直接或间接依赖的
// 出口output 告诉webpack在哪里输出他创建的bundles以及如何命名这些文件 
// loader能将非javascript文件转化为webpack可以识别的文件(webpack自身只能理解js文件)。例如less-loader sass-loader
// 插件plugins 插件范围包括打包压缩 一直到定义环境中的变量 require()使用插件 并放到plugins配置中
// mode模式  development 或 production
//================================================
//可拓展的webpack配置 使用webpack-merge合并 
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件


module.exports = {
    mode: 'production',
    entry: 'src/main.js',
    // entry:{
    //     app: './src/app.js',
    //     vendors: './src/vendors.js'
    // },
    output: {
        filename: 'bundle.js',
        path: '/bundles'
    },
    module: {
        rules: [{
            test: /\.txt$/,
            use: 'raw-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    rules: [{
        test: /\.css$/,
        use: [{
                loader: 'style-loader'
            },
            {
                loader: 'css-loader',
                options: {
                    modules: true
                }
            }
        ]
    }]
};