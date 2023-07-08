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

### 非路由组件创建（footer、header）

0. 基于静态页面，项目的实现不关注 html+css，关注项目业务与逻辑
1. 项目开发的流程
   1. 首先写静态页面，html+css
   2. 拆分组件——为什么要拆分组件？怎么拆分组件？怎么创建组件？
   3. 获取服务器的数据动态展示——axios
   4. 实现相应的动态业务逻辑——？
2. 创建非路由组件组件流程(以 header 为例)
   1. components 文件夹下创建两个文件夹 Footer、Header，并创建 index.vue 文件
      - 创建组件时，要确定组件结构+组件样式+图片资源
   2. 把静态页面的结构放好
      - 把静态页面里面的 html 结构*代码复制*，放到上述 index.vue 的 template 标签中
   3. 把静态页面的样式放好
      - 因为本项目采用 less 构建样式，安装 less、less-loader 才能被浏览器识别
        - less-loader 版本过高会报错
        - 直接指定版本号`[c]npm install --save less less-loader@5`
        - `npm uninstall -g less-loader`卸载
        - 让组件识别 less 样式，需要设定 style 属性为 lang = less
      1. less 样式*代码复制*，放到上述 index.vue 的 style 标签中
         1. 将组件引入到 App.vue 文件中
            - 引入：import 导入组件`import Header from './components/Header'`
            - 注册：export 指定 components`export default {name:,components:{}}`
            - 使用：组件名称创建标签`<Header></Header>`写在 template 中
         2. 将组件中用到的静态资源放到组件文件夹下，如 Header/images/logo.png
      2. 将通用样式的 reset.css*文件复制*，放到 public 中
         - 将 reset.css 文件 link 引入到 public/index.html 中
3. 简易流程
   - 创建或者定义组件
   - App.vue 中
     - 引入
     - 注册
     - 使用
4. 操作过程中发现 eslint 校验没有被关闭？
   - 如提示 `Component name "Header" should always be multi-word.eslint`
   - Header/index.vue 文件中 script 的 export default 部分

### 路由组件创建（home、search、login、register）

0. 路由组件的创建不同于非路由组件，需要 vue-router 插件
   - 安装命令`npm install --save vue-router`
1. 路由组件和非路由组件缩放的位置也不同
   - components 文件夹：非路由组件——全局公用组件
   - pages 或 views 文件夹：路由组件
   - 同样是在 src 文件夹下，
2.
