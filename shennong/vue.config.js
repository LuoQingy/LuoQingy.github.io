const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
    devServer: {
        open: true,
        port: 8080,
        proxy: {
            '/admin':{
                target: 'http://diy.lssnst.com/index.php',
                ws: true,
                changeOrigin: true
            },
          '/getip':{
                target:'https://recommend.funzixun.com/api/ip ',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/getip': ''
                }
            }
        },
    },
    pages: {
        index: {
            // 应用入口配置，相当于单页面应用的main.js，必需项
            entry: 'src/modules/index/main.js',

            // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
            template: 'public/index.html',

            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
            filename: 'index.html',

            // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
            // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'index page',

            // 包含的模块，可选项
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // 只有entry属性时，直接用字符串表示模块入口
        artical: 'src/modules/artical/main.js'
    },
    productionSourceMap: true,
    configureWebpack: {
        optimization: {
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        ecma: undefined,
                        warnings: false,
                        parse: {},
                        compress: {
                          drop_console: true,
                          drop_debugger: false,
                          pure_funcs: ['console.log'] // 移除console
                        }
                    },
                })
            ]
        },
        externals: {
        },
    }
}