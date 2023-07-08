# 项目概要

1. Vue 前台项目

   - Vue 前台项目，尚品汇电商平台，类似于京东电商类项目

2. Vue 后台管理系统
   - Vue 后台项目，后台管理系统，市场当中比较火热项目之一
3. 数据可视化
   - 数据可视化技术 ECharts、Canvas、SVG 等

## Vue 前台项目

### 技术架构

Vue+Webpack+VueX+Vue-router+Axios+Less

### 功能概要

- 封装通用组件
- 登陆注册
- token
- 守卫
- 购物车
- 支付
- 性能优化

## Vue 后台项目

### 技术架构

Vue+Webpack+VueX+Vue-router+Axios+SCSS+ElementUI

### 功能概要

- ElementUI
- 菜单权限
- 按钮权限
- 数据可视化

## 数据可视化

- ECharts 数据可视化开源库
- Canvas 画布
- SVG 矢量图

## 项目配置

1. 解决 App.vue 文件下的报错，package.json 文件，禁用对 Babel 配置文件的检查（前提是没有使用 Babel 进行代码转换）
   - ![Alt text](image.png)
2. - 在 package.json 文件中配置
   - `"eslintConfig": {"parserOptions": {}}`中
   - 添加`"requireConfigFile" : false`
3. 项目运行起来的时候，浏览器自动打开
   - package.json 文件`"scripts":{"serve":"vue-cli-service serve --open"}`
4. eslint 校验功能关闭
   - 因为它声明了的变量如果没使用就会报 error 错误
   - 在 vue.config.js 文件中配置
   - `module.exports = {}`表示对外暴露的是一个对象
   - 添加`lintOnSave : false`就关闭了校验功能
   - 键值对的形式，是冒号！
5. 给 src 文件夹取一个别名/简称为@

```js
{
   "compilerOptions":{
      "baseUrl":"./",
      "paths":{
         "@/*":["src/*"]
      }
   },
   "exclude":["node_modules","dist"]
}
```

## 项目路由分析

1. 前端路由-vue-router
   - 理解为键值对？
     - key 为 URL，地址栏中的路径
     - value 为相应的路由组件
2. 尚品汇项目上中下结构如何拆分路由？
   - 中间路由组件分为：主页路由组件 home 、搜索路由组件 search、登录路由组件 login、注册路由组件 register
   - 上下结构为非路由组件：头部和底部 header 和 footer（login、register 没有）；非路由组件被路由组件所共用

## 开始实现

### header 和 footer 非路由组件创建

1.
