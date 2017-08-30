# vue.js
# 用webpack搭建Vue2.x开发框架 #
上一周看了一下腾讯课堂的学习视频，然后学习到了如何搭建Vue2.x开发框架，刚好让我了解到我这半年接触到的商品库项目的开发内容里的配置文件，原来是这样子的配置，所以，我在这里总结记录一下，也为那些还不懂的同学，作为借鉴吧~

## 一、vue以及vue-cli简介 

#### 1、vue介绍： 

   Vue.js（读音 /vjuː/，类似于 view） 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。 

   Vue.js 不支持 IE8 及其以下版本，因为 Vue.js 使用了 IE8 不能模拟的 ECMAScript 5 特性。 Vue.js 支持所有兼容 ECMAScript 5 的浏览器。 

   vue官网：https://cn.vuejs.org/ 

#### 2、vue-cli命令行工具： 

   Vue.js 提供一个官方命令行工具，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目：
   ##### 全局安装 vue-cli
   $ npm install --global vue-cli
   ##### 创建一个基于 webpack 模板的新项目
   $ vue init webpack my-project
   ##### 安装依赖，走你
   $ cd my-project
   $ npm install
   $ npm run dev
   
vue-cli学习地址：https://github.com/vuejs/vue-cli 

在执行npm run dev这条命令的时候其实执行的是package.json文件中的 


build文件中的dev-server.js文件的内容~

## 二、搭建项目结构安装依赖 
