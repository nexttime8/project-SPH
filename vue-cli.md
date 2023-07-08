## Vue CLI 介绍

1.  Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统，提供：
    1. 通过 @vue/cli 实现的交互式的项目脚手架。
    2. 通过 @vue/cli + @vue/cli-service-global 实现的零配置原型开发。
    3. 一个运行时依赖 (@vue/cli-service)，该依赖：
       - 可升级；
       - 基于 webpack 构建，并带有合理的默认配置；
       - 可以通过项目内的配置文件进行配置；
       - 可以通过插件进行扩展。
    4. 一个丰富的官方插件集合，集成了前端生态中最好的工具。
    5. 一套完全图形化的创建和管理 Vue.js 项目的用户界面。
2.  Vue CLI 致力于将 Vue 生态中的工具基础标准化。它确保了各种构建工具能够基于智能的默认配置即可平稳衔接，这样你可以专注在撰写应用上，而不必花好几天去纠结配置的问题。与此同时，它也为每个工具提供了调整配置的灵活性，无需 eject。

### 该项目的组件

#### @vue/cli

1. 一个全局安装的 npm 包，提供了终端里的 vue 命令
2. vue create
   - 快速搭建一个新项目
3. vue serve
   - 构建新想法的原型
4. vue ui
   - 通过一套图形化界面管理所有项目

#### @vue/cli-service

1. 是一个开发环境依赖。它是一个 npm 包，局部安装在每个 @vue/cli 创建的项目中。
2. CLI 服务是构建于 webpack 和 webpack-dev-server 之上的
3. 包含内容
   1. 加载其它 CLI 插件的核心服务；
   2. 一个针对绝大部分应用优化过的内部的 webpack 配置；
   3. 项目内部的 vue-cli-service 命令，提供 serve、build 和 inspect 命令。
4. @vue/cli-service 实际上大致等价于 react-scripts

#### @vue/cli-plugin- (内建插件) 或 vue-cli-plugin- (社区插件)

1. CLI 插件是向你的 Vue 项目提供可选功能的 npm 包，例如 Babel/TypeScript 转译、ESLint 集成、单元测试和 end-to-end 测试等
2. 当你在项目内部运行 vue-cli-service 命令时，它会自动解析并加载 package.json 中列出的所有 CLI 插件。
3. 插件可以作为项目创建过程的一部分，或在后期加入到项目中。它们也可以被归成一组可复用的 preset。

## 安装 vue-cli3.x

1. 命令：`npm install -g @vue/cli`
2. 安装成功测试：`vue --version`
   - @vue/cli 5.0.8
3. 升级：`npm update -g @vue/cli`

## 创建 vue 项目

1. 创建项目命令：`vue create hello-world`
2. 建议安装淘宝镜像 cnpm
3. 文件结构
   1. 三个文件夹
   - node_modules
     - 项目依赖的包文件，在项目中使用的所有第三方库和插件
     - 这个目录通常是由包管理器（如 npm 或 yarn）自动管理的，无需手动修改其中的内容
     - 如 bin、babel、vue 框架等
   - public 静态资源/本地服务文件夹
     - webpack 打包将其原封不动打包到 dist，而不会当作模块放到 JS 文件夹中
     - HTML 文件、图标、字体等
     - index.html
       - 静态页面
       - Vue 或 React 通常用于开发单页面结构
     - favicon.ico
   - src 源代码目录
     - 包含了所有的 Vue 组件、JavaScript 文件、样式文件和其他资源文件。你将在这里编写和组织你的应用程序代码。
     - assets 文件夹
       - 多个组件公用的静态资源，webpack 打包时当作模块打包到 JS 文件夹中
     - components 文件夹 非路由组件/全局组件
       - Vue 中的组件都是.vue 格式
     - App.vue 唯一的根组件
       - 分为三部分 template、script、style
         - template 写组件-结构层
         - script 写 js 文件-行为层
         - style 写样式-样式层
     - main.js 程序入口文件 程序中最先执行的文件
   2. package.json 项目配置说明
      - 包含了项目的元数据（如名称、版本、描述等）以及依赖的第三方库和插件
      - 在这里定义项目的脚本命令、配置构建选项
      - 记录：项目名|版本|项目依赖|如何运行等
   3. .git 文件
      - 隐藏文件，git init 出来的
   4. .gitignore 指定不需要上传到仓库中的文件/文件夹配置
   5. babel.config.js 有关 babel 的配置文件，提升兼容性
      - 如 ES6 语法转换成 ES5 语法
      - 指定代码转换和语法转换的规则。
   6. README.md 项目说明
   7. package-lock.json 缓存性文件
      - 记录：依赖来源
   8. 还有 vue.config.js 和 jsconfig.json
   9. dist 目录
      - 构建输出目录，也称为发布目录。当你运行构建命令后，最终生成的应用程序文件会被放置在这个目录中。
      - 通常包含了压缩和优化后的 JavaScript、CSS 文件以及其他资源文件，可以用于部署到服务器上。

## 项目启动

1. 进入到 app 目录
2. `npm run serve`，运行项目
