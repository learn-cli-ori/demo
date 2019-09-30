const path = require('path');

const TIMESTAMP = new Date().getTime();
const resolve = dir => {
    return path.join(__dirname, dir);
};

const ASSETSDIR = 'static';
const PUBLIC_FILE_NAME = `[name].${process.env.VUE_APP_TYPE}.${TIMESTAMP}`;
console.log(process.env.VUE_APP_API_URL);
module.exports = {
    publicPath: './',

    lintOnSave: true,

    productionSourceMap: false,

    configureWebpack: {
        entry: './src/main.js',
        output: {
            filename: `${ASSETSDIR}/js/${PUBLIC_FILE_NAME}.js`,
            chunkFilename: `${ASSETSDIR}/js/${PUBLIC_FILE_NAME}.js`
        },
        resolve: {
            // 配置别名
            alias: {
                '@': resolve('src')
            }
        }

    },
    css: {
        extract: {
            filename: `${ASSETSDIR}/css/${PUBLIC_FILE_NAME}.css`,
            chunkFilename: `${ASSETSDIR}/css/${PUBLIC_FILE_NAME}.css`
        }
    },
    devServer: {
        port: 8085, // 端口号
        disableHostCheck: true,
        https: false,
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
            '/api': {
                target: process.env.VUE_APP_API_URL,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        } // 配置多个代理
    }
};