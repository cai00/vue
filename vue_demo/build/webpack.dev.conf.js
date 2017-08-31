var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

//引用一些基本的配置
var config = require('./webpack.base.conf');
//在这里修改publicPath属性
config.output.publicPath = '/'

config.plugins = [
    //添加了三个插件
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
 
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, '../index.html'),
        inject: true
    })
]

//热加载，自动刷新浏览器
// var devClient = 'webpack-hot-middleware/client';
var devClient = './build/dev-client';   //引入新的文件监听HTML文件变化

Object.keys(config.entry).forEach(function(name,i) {
    var extras = [devClient];
    config.entry[name] = extras.concat(config.entry[name]);
})

module.exports = config;