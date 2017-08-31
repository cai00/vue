//引入一些依赖模块
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.dev.conf');
var port = 8888;

//创建一个express的实例
var app = express();

var compiler = webpack(config);

//实时编译文件webpack-dev-middleware插件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    pulicPath: config.output.publicPath,
    stats: {
        color: true,
        chunks: false
    }
});

//热加载，自动刷新浏览器
var hotMiddleware = require('webpack-hot-middleware')(compiler);

//监听HTML文件变化
compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data,cb) {
        hotMiddleware.publish({action:'reload'});
        cb();
    });
});

//以下应用的是express的模块
// 加载用于解析 devMiddleware、hotMiddleware的中间件
app.use(devMiddleware);
app.use(hotMiddleware);

//监听端口
app.listen(port, function(err) {
    if(err) {
        console.log(err);
        return;
    }
    console.log('listening at http://localhost:'+port);
})