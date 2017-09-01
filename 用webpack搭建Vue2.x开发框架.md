# 用webpack搭建Vue2.x开发框架 #

上一周看了一下腾讯课堂的学习视频，然后学习到了如何搭建Vue2.x开发框架，刚好让我了解到我这半年接触到的商品库项目的开发内容里的配置文件，原来是这样子的配置，所以，我在这里总结记录一下，也为那些还不懂的同学，作为借鉴吧~

### 一、vue以及vue-cli简介 ###

#### 1、vue介绍： ####

Vue.js（读音 /vjuː/，类似于 view） 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。
		
Vue.js 不支持 IE8 及其以下版本，因为 Vue.js 使用了 IE8 不能模拟的 ECMAScript 5 特性。 Vue.js 支持所有兼容 ECMAScript 5 的浏览器。
vue官网：https://cn.vuejs.org/

#### 2、vue-cli命令行工具： ####

Vue.js 提供一个官方命令行工具，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目：	
	
```
# 全局安装 vue-cli
$ npm install --global vue-cli
# 创建一个基于 webpack 模板的新项目
$ vue init webpack my-project
# 安装依赖，走你
$ cd my-project
$ npm install
$ npm run dev
```
vue-cli学习地址：https://github.com/vuejs/vue-cli

在执行npm run dev这条命令的时候其实执行的是package.json文件中的

![配置文件执行的命令](http://img.blog.csdn.net/20170829103545824?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

build文件中的dev-server.js文件的内容~

### 二、搭建项目结构安装依赖 ###

#### 1、新建项目vue_demo： ####

![新建项目vue_demo](http://img.blog.csdn.net/20170829110020472?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

#### 2、安装初始化项目： ####

![安装初始化项目](http://img.blog.csdn.net/20170829110127078?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

#### 3、安装依赖vue： ####

![安装依赖vue](http://img.blog.csdn.net/20170829110224060?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

（注意：如何vue安装出现错误安装不了的话，可以用淘宝镜像的cnpm去安装）

（npm 默认的官方镜像速度缓慢，因此可选择使用国内淘宝的镜像。通过以下命令安装：

`$npm install -g cnpm --registry=https://registry.npm.taobao.org`

安装之后，在本文档里面所有出现使用 npm 的地方，你都可以使用 cnpm 代替）

#### 4、安装项目依赖： ####

![这里写图片描述](http://img.blog.csdn.net/20170829110614478?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

#### 5、新建项目文件目录及内容： ####

（1）项目目录基本结构-index.html

![项目目录基本结构-index.html](http://img.blog.csdn.net/20170829112736766?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

（2）项目目录基本结构-App.vue

![项目目录基本结构-App.vue](http://img.blog.csdn.net/20170829112836589?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

（3）项目目录基本结构-main.js

![项目目录基本结构-main.js](http://img.blog.csdn.net/20170829112905227?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

（4）项目目录基本结构-alw.vue

![项目目录基本结构-alw.vue](http://img.blog.csdn.net/20170829112957310?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

### 三、配置webpack ###

#### 1、新建文件build和webpack-webpack.base.conf.js文件，然后配置webpack-webpack.base.conf.js ####

![webpack.base.conf.js配置](http://img.blog.csdn.net/20170829120127032?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

#### 2、执行命令： ####

```
webpack --config build/webpack.base.conf.js
```

(可以用webpack -help查看有哪些命令)

![webpack -help查看](http://img.blog.csdn.net/20170829115718787?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

![执行命令](http://img.blog.csdn.net/20170829115752920?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

查看执行命令后打包生成的文件：

![打包生成的文件](http://img.blog.csdn.net/20170829120045597?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

效果预览：

![效果](http://img.blog.csdn.net/20170829150316036?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

### 四、实时编译文件 ###

#### 1、安装webpack-dev-middleware 插件和express插件： ####

![实时编译文件安装插件](http://img.blog.csdn.net/20170829150403628?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

#### 2、新建配置文件dev-server.js及内容： ####

![配置文件dev-server.js](http://img.blog.csdn.net/20170829153157767?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

（webpack-dev-middleware 学习地址：https://github.com/webpack/webpack-dev-middleware）

（express 学习地址：http://www.expressjs.com.cn/）

#### 3、执行命令： ####

```
node build/dev-server.js
```

![执行命令node](http://img.blog.csdn.net/20170829153325774?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

![效果图报错](http://img.blog.csdn.net/20170829153753940?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

然后修改一下webpack-base-conf.js配置文件：

![修改配置](http://img.blog.csdn.net/20170829153942526?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

再次执行命令：

![再次执行命令](http://img.blog.csdn.net/20170829154244523?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

刷新效果图：

![刷新效果图](http://img.blog.csdn.net/20170829154328718?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

（注意：一般webpack-base-conf.js配置文件中的publicpath属性都不会去修改，所以，我们需要再次新建一个配置文件webpack.dev.conf.js）

配置webpack.dev.conf.js

![配置webpack.dev.conf.js](http://img.blog.csdn.net/20170829155638295?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

修改dev-server.js

![修改dev-server.js](http://img.blog.csdn.net/20170829155752969?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

修改配置webpack.base.conf.js

![修改配置webpack.base.conf.js](http://img.blog.csdn.net/20170829155830770?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

再次执行命令 node build/dev-server.js

![再次执行命令](http://img.blog.csdn.net/20170829155944710?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

更改刷新效果图：

![更改刷新效果图](http://img.blog.csdn.net/20170829160018890?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

### 五、热加载，自动刷新浏览器 ###

#### 1、安装插件webpack-hot-middleware ####

![安装插件webpack-hot-middleware](http://img.blog.csdn.net/20170829161141363?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

#### 2、配置webpack.dev.conf.js ####

(wepack-hot-middleware学习网址： https://github.com/glenjamin/webpack-hot-middleware)

![修改webpack.dev.conf.js](http://img.blog.csdn.net/20170829164116316?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

#### 3、修改dev-server.js ####

![修改dev-server.js](http://img.blog.csdn.net/20170829164211656?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

#### 4、执行命令 ####
![执行命令](http://img.blog.csdn.net/20170829164243553?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

#### 5、实时更新效果 ####

![实时更新效果](http://img.blog.csdn.net/20170829164311831?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

### 六、监听HTML文件变化 ###

#### 1、监听的地方是title ####

![监听的地方是title](http://img.blog.csdn.net/20170829165727340?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

#### 2、修改dev-server.js ####

![修改dev-server.js](http://img.blog.csdn.net/20170829165754100?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

#### 3、修改webpack-dev-conf.js ####

![修改webpack-dev-conf.js](http://img.blog.csdn.net/20170829165831949?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

#### 4、新建dev-client.js ####

![新建dev-client.js](http://img.blog.csdn.net/20170829165912793?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

#### 5、效果 ####

![效果](http://img.blog.csdn.net/20170829165940396?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2FpMF8w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)


以上便是我的一步一步实践过程，当然还有很多知识点需要去深究的学习一下，希望这是一个不错的开始吧！

源码地址：https://github.com/cai00/vue
