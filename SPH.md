## 项目结构

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
1. 创建非路由组件组件流程(以 header 为例)
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
2. 简易流程
   - 创建或者定义组件
   - App.vue 中
     - 引入
     - 注册
     - 使用
3. 【eslint 使用问题】操作过程中发现 eslint 校验没有被关闭？
   - 如提示 `Component name "Header" should always be multi-word.eslint`
   - Header/index.vue 文件中 script 的 export default 部分
   - gpt 回答：
     - 确保 vue.config.js 文件在项目根目录下
     - 删除 node_modules 文件夹，重新 npm install 进行安装
     - 如果你的项目中使用了其他 lint 工具，例如 ESLint 或 Prettier，它们可能会覆盖或修改 lintOnSave 配置。请检查其他配置文件，如 .eslintrc.js 或 .prettierrc.js，确保没有与 lintOnSave 冲突的配置。
   - 可以是给代码添加`// eslint-disable-next-line no-unused-vars`，指定对下一行禁用 eslint
   - 可以关闭 eslint 插件
   - 可以在 eslint 配置文件中修改，设置`rules: {"no-unused-vars": "off",},`
4. 【eslint 使用问题】eslint 如何配置？
   - 保存会自动添加上分号怎么消除？
   - 发现是 prettier 插件的问题，设置取消勾选 semicolo 即可

### 路由组件创建（home、search、login、register）

0. 路由组件的创建不同于非路由组件，需要 vue-router 插件
   - 安装命令`npm install --save vue-router`
1. 路由组件与非路由组件创建的区别
   - components 文件夹：非路由组件——全局公用组件
   - 命名为 pages 或 views 文件夹：路由组件
     - 在路由组件文件夹下同样是创建 index.vue 文件
   - 同样是在 src 文件夹下，同样组件都是以文件夹的形式
2. 项目路由配置文件
   - 路由组件除了组件放在 pages 文件夹以外，还要配置项目路由，命名为 router 文件夹，和 components 和 pages 文件夹同级
   - 创建 index.js 文件在 router 文件夹中
   - 项目配置文件内容
     1. 引入 vue`import Vue from 'vue'`
     2. 引入 vue-router`import VueRouter from 'vue-router' `
     3. 使用插件`Vue.use(VueRouter)`
     4. 引入路由组件`import Home from '@/pages/Home'等`
     5. 配置路由
        ```js
        export default new VueRouter({
          routes: [
            {
              path: "/home",
              component: Home,
            },
            {
              // 类似
            },
          ],
        })
        ```
        - 这里的都属于一级路由？
     6. 在 main.js 入口文件注册
        - 引入路由
          - `import router from "@/router"`
        - 注册路由
          - Vue 实例里面写`router,`
        - 原来有的
          - 引入 vue
            - `import Vue from "vue"`
          - 引入 app.vue
            - `import App from "./App.vue"`
          - Vue 实例里面 render 渲染页面，并挂载到 id 为 app 的元素上
            ```js
            new Vue({
              render: (h) => h(App),
              router,
            }).$mount("#app")
            ```
     7. 路由组件出口
        - 在 App.vue 文件的 template 标签中添加 rooter-view 标签
3. 路由组件一切完毕，出现报错 export 'default' (imported as 'VueRouter') was not found in 'vue-router'
   1. 问题及其解答
      - vue 和 vue-router 版本不兼容问题
      - vue2 搭配 vue-router3
      - vue3 搭配 vue-router4
      - 重新安装 vue-router3 解决
      - `npm uninstall vue-router`
      - `npm install vue-router@3`
   2. 路由组件项目配置完毕，便可通过直接在网页添加路由？进行跳转
4. 路由组件和非路由组件的区别
   1. 放置位置不同
   2. 使用方式不同
      - 路由组件需要在 router 文件夹中进行注册，使用的是组件的名字；非路由组件以标签的形式使用。
      - 路由组件在 main.js 入口文件中注册 router
5. 路由组件和非路由组件的相同点
   1. 注册完，组件身上都拥有了$route和$router 属性
      - $route 是获取路由信息，有path、query 、 params、fullPath 和 meta 属性，非路由组件上也有$route
      - $router 是一般进行编程式导航
6. 进行路由重定向
   - 要在项目跑起来的时候，访问/，立马定向到首页
   - 路由配置都是在 router 文件夹下的 index.js 文件中配置
   ```js
   {
      path: "*",
      redirect: "/home",// 重定向
   },
   ```
7. 路由的跳转
   1. 声明式导航 router-link
      - 必须有 to 属性，`to="/login"`
      - 实质就是 a 标签，但是不需要 title、href 和 target 属性
   2. 编程式导航 push|replace
      - 编程式导航除了可以进行路由跳转，还有其他业务逻辑
      - 声明式导航能做的，编程式导航都能做
   3. 将 register、login、home 用声明式导航，search 用编程式导航
      - 声明式导航，将 a 标签改成 router-link 标签
        - class 保留，href、target、title 等删除
      - 编程式导航，给标签添加@click="函数名"
        - 在 script 标签的 export default 中添加 methods:{}
        - 定义函数为 `函数名(){this.$router.push('/search')}`

### 组件的显示与隐藏（footer 非路由组件可选）

1. 进入 login 和 register 路由组件的时候，footer 这个非路由组件不显示
2. 显示与隐藏？
   - v-if 是真正的操作 dom，频繁操作 dom 会导致性能下降
   - v-show 是通过样式让样式显示与隐藏
3. v-show 依据什么，boolean 值
   1. 路由信息？
      - $route.path 为 `'/home'` 或 `'/search'` 时显示
   2. 路由元信息
      - 配置 meta 字段
      - 是与 routes 配置的路由中的 path、component 同级的属性
        - home 和 search 的路由中设置`meta:{show:true}`，login 和 register 的路由中设置为 false
      - 属性名是固定的，只能有 path、query 、params、fullPath 、name 和 meta 属性
   3. 设置 v-show
      - App.vue 中设置<Footer v-show="$route.meta.show"></Footer>
4. 路由传参-路由参数，参数写法
   1. params：属于路径中的一部分，在配置路由的时候，需要占位？
   2. query 参数：不属于路径中的一部分，类似于 ajax 中的 queryString？/home?k=v&kv=，不需要占位？
5. 路由传参
   - 给 input 标签设置 v-model 为"keyword"，export default 里面
   ```js
   data(){
      return {
         keyword:''
      }
    },
   ```
   - 为什么$route 可以获取到 input 输入的值？
6. 路由传参方法
   - 在路由中配置占位 `path: "/search/:keyword`
   - 无论一下那种方法，都需要配置占位符！才能在 url 中显示 keyword
   1. 字符串形式传递
      1. params 参数
         - push 改成`this.$router.push("/search"+this.keyword)`
      2. query 参数
         - push 改成`this.$router.push("/search"+this.keyword+"?k="+this.keyword.toUpperCase())`
         - 这样传递了两个参数，params 和 query
      3. 可以获取到传入的参数
         - `$route.params.keyword`
         - `$route.query.k`
   2. 模板字符串形式传递
      ```js
      this.$router.push(
        `/search/${this.keyword}?k=${this.keyword.toUpperCase()}`
      )
      ```
   3. 对象形式传递
      - 需要在路由中配置 name 属性
        - `name:"search"`
      ```js
      this.$router.push({
        name: "search",
        params: { keyword: this.keyword },
        query: { k: this.keyword.toUpperCase() },
      })
      ```
      - 不能用 path 写法
7. 设置完了，也获取到了 params 和 query，但是网址显示不正确？没有显示 params？
   - http://localhost:8080/#/search?k=ASDFASD
   - 一直没有关注 console！
   - 因为没有在目标路由正确定义 keyword 参数！
   - `path: '/search/:keyword'`
8. 为什么 data 写成函数的形式？
   ```js
   export default {
     // eslint-disable-next-line vue/multi-word-component-names
     name: "Header",
     data() {
       return {
         keyword: "",
       }
     },
   }
   ```
9. 报错 Refused to apply style from 'http://localhost:8080/iconfont.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.
10. 路由传参相关面试题

- 路由传递参数（对象写法）path 是否可以结合 params 参数一起使用？
  - 不可以，
- 如何指定 params 参数可传可不传？
  - 对象指定的时候如果不传 params，会导致 search 消失
  - 应该通过占位的时候指定 params 可传可不传
  - `path: '/search/:keyword?'`也就是加一个问号
  - 类似于正则
- params 参数可以传递也可以不传递，但是如果传递是空串，如何解决？
  - 对象指定的时候如果 params 为空串，会导致 search 消失
  - 用 undefined 解决''||undefined
  - this.$router.push({name:"search",params:{ keyword:''||undefined} })
- 路由组件能不能传递 props 数据？
  - 可以，有三种写法（路由组件可以传递 props）
    - 布尔值写法，给路由组件传递参数 `props:true`， 路由组件本身可以接收 `props:['keyword']`（只能 params 参数）；之后路由组件身上多了一个$attrs ，有 keyword 属性
    - 对象写法，给路由组件传递对象 `props:{k:v}`，路由组件本身可以接收 `props:['k']`；之后路由组件身上多了一个$attrs ，有 k 属性
    - 函数写法，params 参数和 query 参数都通过 props 传递给路由组件`props:(route)=>{return keyword:$route.params.keyword,k:$route.query.k}`或者`props:(route)=>({keyword:$route.params.keyword,k:$route.query.k})`；之后路由组件身上多了一个$attrs ，有 k 属性，同时 props 里面有 keyword

### 问题引入：编程式路由跳转到当前路由（参数不变），多次执行会抛出 NavigationDuplicated 的警告错误

1. vue-router3.6.5 有 promise，查看 this.$route.push 的返回值，是 promise 有成功还是失败的回调，resolve 和 reject
   - 解决 1：push 参数最后添加两个回调()=>{},()=>{}或者()=>{},(e)=>{console.log(e)}
   - 解决 2：重写 push 方法
2. 明确：this 是当前组件实例，this.$router 是当前组件实例的属性值 VueRouter 类的一个实例，main.js 入口文件注册路由时给组件实例添加的 router，this.$route.push 在 this.$router 实例上没有，但是在其 VueRouter 原型对象上有
3. 其实就是要在 router 的 index.js 文件中重写 `VueRouter.prototype.push = function(){}`
   - 这里面的 this 是 VueRouter 类的实例
   - 在 router 的 index.js 文件中重写
   - 重写步骤
     1. 先保存原型里面的 push 方法 `let originPush = VueRouter.prototype.push;`
     2. 重写
        - 传参：location 跳转位置，resolve 成功回调，reject 失败回调
        - 当 resolve 和 reject 都存在时，调用 originPush 方法
          - 该方法需要通过 call/apply 方法调用，因为函数本身的 this 是 window，而我们要让上下文为 VueRouter 类实例
          - `originPush.call(this,location,resolve,reject)`
          - 引申：apply 方法和 call 方法的相同和不同点
        - 当 resolve 和 reject 都不存在时
          - `originPush.call(this,location,()=>{},()=>{})`

### 拆分 home 模块组件

1. 流程
   1. 编写静态页面 html+css
   2. 拆分静态组件——为什么要拆分组件？怎么拆分组件？怎么创建组件？
   3. 获取服务器的数据动态展示——axios
   4. 实现相应的动态业务逻辑——？
2. home 模块拆分
   1. 三级联动？home 用到了、search 用到了、商品详情页用到了
      - 全局组件：注册一次项目任意地方使用，多个模块使用
   2. 轮播图+尚品汇快报=》一个整体组件
   3. 今日推荐=》一个组件
   4. 热卖排行=》一个组件
   5. 猜你喜欢=》一个组件
   6. 家用电器=手机通讯=》复用的一个组件
   7. logo=》一个组件

## 组件实现

1. 全局组件创建流程
   1. 在 pages 中的对应模块，创建组件名文件夹，并创建 index.vue 文件
   2. 同样的注意（无论是否全局组件）：html 结构、css 样式、静态资源放到 index.vue 文件中
   3. 在 main.js 文件中注册全局组件
      1. 先引入`import TypeNav from '@/pages/Home/TypeNav`
      2. 再注册为全局组件
   4. 使用
      1. 全局组件不需要再 Home/index.vue 中引入
      2. 直接使用<TypeNav/>
      3. 为什么是单标签？为什么前面 header 等都是双标签？
2. 其余静态组件创建流程——以 ListContainer 为例
   1. html+css+静态资源
      - 静态组件下的 index.vue 不需要写 name
      ```js
      export default {
        name: "",
      }
      ```
   2. 引入
      - 在 Home/index.vue 的 script 中引入`import ListContainer from '@/pages/Home/ListContainer'`
   3. 注册
      - 在 Home/index.vue 中注册
      ```js
      export default {
        name: "", // 为什么这里不用写？
        components: {
          // 必须要s
          ListContainer,
        },
      }
      ```
   4. 使用
      - 出现报错 Errors compiling template:Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.
      ```html
      <template>
        <TypeNav />
        <ListContainer />
      </template>
      ```
      应该改成
      ```html
      <template>
        <div>
          <TypeNav />
          <ListContainer />
        </div>
      </template>
      ```
   5. 显示问题
      - 因为是静态资源，所以轮播图在 home 的 index.vue 中暂时只显示一个！
3. 其余静态组件创建尝试
   - 出现报错：Unknown custom element: <TodayRecommend> - did you register the component correctly? For recursive components, make sure to provide the "name" option.
   - 页面只有>=`00%的时候才会显示 TodayRecommend 组件

## 接口测试

1. vue.config.js 文件，配置代理跨域，设置最新的接口地址
   ```js
   module.exports = defineConfig({
     devServer: {
       proxy: {
         "/api": {
           target: "http://gmall-h5-api.atguigu.cn",
         },
       },
     },
   })
   ```
2. 接口到底是什么？可以自己写吗？要买吗？
3. postman 工具测试接口能否使用
   - code 为 200 表示返回数据成功
   - 所有的接口都有/api 前缀

## axios 二次封装

1.  面试会要求手写原生 axios ，会问会用 axios 是不是自己重写的
2.  发请求、获取数据、展示数据
    - 发请求：XMLHttpRequest fetch JQuery Axios
    - 项目中一般选择 Axios
3.  为什么要对 Axios 进行二次封装？
    - 主要要用到 axios 的请求拦截器和响应拦截器
    - 请求拦截器：发请求之前处理业务
    - 响应拦截器：服务器返回数据之后处理业务
4.  进入到 app 目录下，安装 axios
    - `npm install --save axios`
    - 在 package.json 文件中查看是否安装成功，及其版本
5.  项目中的 api 文件夹，就是关于 axios 的
    - 在 src 文件夹下创建 api 文件夹
    - 在 api 文件夹中创建 request.js 文件
    - 在 request.js 文件中对 axios 进行封装
6.  axios 封装流程
    1. 引入 axios`import axios from "axios"`
    2. 利用 axios 对象的 create 方法，创建 axios 实例，create 方法里面传入配置对象
       - 配置基础路径`baseURL:"/api"`
       - 配置请求超时的时间`time:5000`
    3. 请求拦截器 interceptors
    ```js
    axios对象.interceptors.request.use((config) => {
      return config // 配置对象config，里面的headers请求头属性很重要
    })
    ```
    - 在请求发出之前处理业务
    4. 响应拦截器
    ```js
    axios对象.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return Promise.reject(new Error("false"))
      }
    )
    ```
        - 直接看 git 或者 npm 的 axios 文档
    5. 对外暴露
       - `export default axios对象`
7.  对 axios 二次封装，就是引入 axios 后，创建 axios 对象，传入一定的配置项如超时时间、基础路径，设置请求拦截器和响应拦截器，再将这个 aixos 对象对外暴露

## 接口统一管理

1. 两种情形
   1. 项目小、接口少、组件少，可以直接在组件的生命周期函数中发请求
   2. 项目大，axios.get('')统一管理接口
2. api 文件夹下创建 index.js 文件，用于统一管理接口
   1. 引入二次封装的 axios
   2. 对外暴露一个箭头函数
   3. 箭头函数里面发请求，用 axios 的函数的形式，传入配置对象
      - `requests({url:'',method:'get'})`
      - 并用上述作为返回结果
      - axios 发请求返回结果是 Promise 对象
3. 使用接口
   1. 在 main.js 文件中引入
      - `import { reqCategoryList } from "@/api"`
      - 为什么不需要指定文件名？
      - 分别暴露，所以用{}
   2. 调用 index.js 中的函数
4. 解决跨域问题
   1. 协议、域名、端口号不同
   2. webpack 提供功能 DevServer，vue.config.js 文件当作是 webpack.config.js 文件，在里面配置
   ```js
   devServer: {
      proxy: {
         "/api": {
         target: "http://gmall-h5-api.atguigu.cn",
         // pathRewrite:{'^/api':''}
         },
      },
   }
   ```
   3. 解决方法：proxy、CORS、JSONP
   4. 服务器和服务器之间没有跨域问题，浏览器才有跨域问题

## nprogress 进度条插件

1. 进入到 app 路径下，安装 nprogress 包，在 package.json 中验证是否安装了依赖
   - `cd api`
   - `npm install --save nprogress`
2. 进度条在拦截器中使用
   1. 引入 nprogress，done、start 方法代表进度条结束和开始
      - `import nprogress from 'nprogress'`
   2. 引入进度条样式
      - `import "nprogress/nprogress.css"`
   3. 可以直接在 node_modules 文件夹中的 nprogress/nprogress.css 中直接修改进度条的样式
   4. 请求拦截器中调用 start，相应拦截其中调用 done

## Vuex 状态管理库（据说很重要

1. 是什么？Vuex 是官方提供的状态管理库插件，类似于 Redux，集中管理项目中
2. 什么时候用？组件多、项目大、数据多、维护数据复杂、组件间关系复杂
3. 核心概念
   1. state——仓库存储数据的地方
   2. mutations
   3. actions
   4. getters
   5. modules
4. 安装
   1. 在 app 文件夹下
   2. npm 安装
5. vuex 基本使用
   1. src 文件夹下创建 store 文件夹
   2. 创建 index.js 文件
   3. 引入 vue
      - `import Vue from 'vue'`
   4. 引入 vuex
      - `import Vuex from 'vuex'`
   5. 使用插件一次
      - `Vue.use(Vuex)`
   6. 对外暴露 Store 类实例
      - `export default new Vuex.Store({state,mutations,actions,getters})`
   7. 对 Store 实例配置对象
      1. state——仓库存储数据
      2. mutations——修改 state 的唯一手段
      3. actions——处理 action，书写自己的业务逻辑，处理异步任务
      4. getters——理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更方便
      5. modules——
   8. main.js 文件中
      1. 引入仓库
         - `import store from '@/store'`
      2. 注册仓库，类似注册路由，从而组件身上多了个$store 属性
         - `new Vue({store})`
6. 获取仓库 Store 中的数据
   1. 需要用到 vuex 中的辅助函数 mapState，在组件的 index.vue 文件中引入
      - `import {mapState} from 'vuex'`
   2. 之后才能用到 state 里面的数据 count，在 export default 中写计算属性
      - `computed:{...mapState(['count'])}`
   3. 在组件中写上上述数据的插值表达式
   4. 绑定一定的时间，操作仓库数据
      1. 直接在组件的 index.vue 文件中的 export default 中直接书写
         - `methods:{方法名(){this.$store.dispatch('add')}}`
      2. 此外，还要在 store 仓库的 action 配置项中书写上述对应函数
         - `const actions = {方法名({commit}){commit("ADD")}}`
      3. 由于 actions 配置项不能直接修改 state，需要在 mutations 里面进行秀嘎
         - `const mutations = {ADD(state){state.count++}}`
7. 上述尝试报错
   1. 报错：TypeError: Cannot read properties of undefined (reading 'state')
   2. 本质：vue2 的版本和 vuex 的版本不匹配导致的，vuex4 版本只能在 vue3 中使用，vue2 中，要用 vuex3 的版本
   3. 解决：app 文件夹下执行`npm install vuex@3 --save`
   4. 事实证明 gpt 不适合解决报错，csdn 上往往会分享报错解决方案
   5. 重装 vuex 后，需要重装 nprogress，否则显示查不到 nprogress，且显示是生产模式
8. Vuex 可以模块式开发
   1. 大仓库数据差分成多个小仓库
   2. 在 store 文件夹下创建文件夹，路由组件命名的文件夹，里面创建 index.js 文件
   3. 里面创建 Store 实例配置对象里面的属性对象，并暴露
      ```js
      const state = {}
      const mutations = {}
      const actions = {}
      const getters = {}
      export default {
        state,
        mutations,
        actions,
        getters,
      }
      ```
   4. 在 store 文件夹的 index.js 文件下，引入小仓库
      - `import search from './search'`
      - `import home from './home'`
   5. 在 store 文件夹的 index.js 文件下，注册模块
      ```js
      export default new Vuex.Store({
        modules: {
          home,
          search,
        },
      })
      ```
   6. 使用模块式开发的时候，如何将事件绑定？
      - 不同点就是：要说明数据和函数所在的模块
      ```js
      methods:{
         ...mapActions('home',['add'])
      },
      computed:{
         ...mapState('home',['count'])
      }
      ```
      - 最终问题就是：需要在模块的暴露中，添加`namespaced:true`，确保模块有命名空间

## 示例：TypeNav 三级联动展示数据业务

1. 首先把所有全局组件放到 components 文件夹中
   - 记得修改 main.js 中的路径
   - 原本 pages/Home/TypeNav 放到 components 里面
2. 通知 Vuex 发请求，获取数据并防止在仓库中
   1. 在全局组件的 index.vue 文件中的 export default 中派发一个 action，如名为'categoryList'
      - `this.$store.dispatch('home/categoryList')`
      - 作用是通知 Vuex 发请求，获取数据，存储于仓库中
   2. 找到对应的仓库的 index.js 文件
      - `const actions = {categoryList(){}}`
      - 这个 categoryList 里面调用发起请求的函数
      - 前提是引入这个 api，在@/api 下，直接写`from '@/api'`，一般都是从该文件夹下的 index.js 文件中获取
      - 作用是通过 API 里面的接口函数调用，向服务器发起请求，获取服务器数据
3. 在 actions 里面调用发请求函数，返回的是一个 Promise 对象
   1. async？
   2. await？必须和 asynce 同时存在
   3. 提交数据
   4. 应该写成如下，reqCategoryList 的返回值就会被等待，并赋值给 result
   ```js
   async categoryList(){
      let result = await reqCategoryList()
   }
   ```
4. 从 home 里面讲三级联动移走了，为什么还是使用 home 的 store？
5. store 的 index.js 里面的 namespace 到底是什么？为什么不加反而出现请求结果，加了报错：unknown action type: categoryList？不加的时候显示 module namespace not found in mapState(): home/？
   1. 在 Vuex 中，dispatch 是用于触发（dispatch）一个 action。当你在 Vuex 的某个模块中定义了一个 action，并且这个模块启用了命名空间，那么你需要使用模块的命名空间来 dispatch 这个 action。所以应该加上这个模块的名称 home/，即`this.$store.dispatch('moduleName/categoryList')`
   2. 这样 Vuex 就能找到你定义的 categoryList action 并执行它。如果没有提供命名空间，Vuex 将会在全局的 actions 中查找 categoryList，这就是为什么你会看到 "unknown action type: categoryList"
6. 要修改仓库中的数据，因此要解构出 commit 提交 mutation（只有 mutations 能够修改 state）
   ```js
   async categoryList({commit}){ // 解构！
      let result = await reqCategoryList()
      if(resulte.code===200){ // promise成功
         commit("CATEGORYLIST",result.data) // CATEGORYLIST是取的名字，在mutation中用，提交的数据是resulte.data
      }
   }
   ```
7. 在 mutation 中写，修改 state 数据
   ```js
   const mutations = {
     CATEGORYLIST(state, categoryList) {
       state.categoryList = categoryList
     },
   }
   ```
8. state 初始化数据
   ```js
   const state = {
     categoryList: [], // 因为服务器返回的数据是一个数组
   }
   ```
   - 根据结构的初始值进行初始化类型
9. 请求的数据已经放到仓库中，要再将仓库中数据获取到全局组件 TypeNav 身上
   1. 引入 vuex 中的 mapState
      - `import {mapState} from 'vuex'`
   2. 计算属性
      ```js
      // 看不懂
      computed:{
        ...mapState({
            categoryList:state=>state.home.categoryList
        })
      }
      ```
   3. 之后在组件中就获取到了数据，是一个三级菜单
10. 把重复结构删除
    1. v-for="(c1,index) in categoryList"
    2. :key="c1.categoryId"
    3. 三层重复分别是<div class="item bo">、<div class="subitem">和<em>
    4. 注意使用 c1.categoryChild，总是数组
    5. 学会看页面结构猜数据结构

## 一级分类动态添加背景颜色

1. 解决方法
   1. 样式 hover
   2. JS
2. 用到上述三级联动的最外层数组的 index，不然直接`v-for="c1 in categoryList"`即可
   1. 现在需要`v-for="(c1,index in categoryList"`
   2. 鼠标移入 h3，就动态绑定 data 同步
3. 通过动态添加类名来控制样式
   1. :class = "{cur:currentIndex==index}"
   2. 这个样式放在最外层的 item 身上，因为样式是 item！
   3. 样式写成{}形式
4. 再添加一个鼠标移出，事件绑定
   1. 需要 div.sort 下的 h2 和 h3 都要，也就是从 h3 移到全部商品分类 h2 不会移除效果
   2. 事件委派、事件代理，将两个放在一个父元素下，将子元素的事件放到父元素身上
   3. div.sort 和 h2 是兄弟关系
   4. 没有意义

## JS 控制二三级分类的显示与隐藏

1. 用 js 实现 css 实现的显示与否
2. 直接不写类名，用动态绑定样式实现
   - `:style="{display:currentIndex===index?'block':'none'}"`
   - 而不是继续式样和上面添加背景颜色一样的方法：
     - `:class="{dis:currentIndex===index}"`
     - 同时添加类名 dis

## 演示卡顿现象：节流防抖

1. 一级分类从上到下快速划过，mouseenter 不能全部检测到
2. 防抖
   1. 前面所有触发都会取消，最后一次执行在规定时间之后才会触发，连续触发只执行一次
   2. 王者荣耀回城重复点击只执行最后一次，输入框输入只检测/请求规定时间内最后一次
3. 节流
   1. 超过时间间隔
   2. 技能冷却超过时间间隔才能触发，鼠标移动滚动条拖动超过规定时间间隔才触发
   3. 频繁触发变成少量触发
4. lodash 插件，里面封装了防抖节流
   1. 自己写：闭包+延迟器
   2. 引入 lodash：npm 或者官网下载，script
   3. 暴露的是\_xxx，函数对象
   4. script 标签引入
5. lodash 中的\_.debounce，返回一个 debounced()
   1. 传入需要防抖的函数
   2. 传入延迟时间
   3. 使用
      1. input.oninput = \_.debounce(function(){},1000)
      2. 输入完毕之后，延迟一秒再触发
6. lodash 中的\_.throttle，
   1. 传入需要节流的函数
   2. 传入节流时间
7. 区别
   1. 防抖是规定时间内一直触发，时间之后才会执行一次
   2. 节流是规定时间多次触发，时间之内执行一次

## 三级联动节流

1. 一级分类从上到下快速划过，mouseenter 不能全部检测到
2. 在 TypeNav 组件中引入 lodash
   - `import _ from 'lodash'`引入了所有的函数
   - `import throttle from 'lodash/throttle'`按需加载
3. 把 enterIndex 函数放入 throttle 的 function 里面，设置适当的延迟时间
   - 不需要\_.，因为 lodash 下直接是 throttle.js 文件，从文件中引入 throttle 函数，而且是默认暴露，不需要写成对象的形式解构
   - function 不要用箭头函数，涉及 this 问题
4. 算性能优化

## 点击二级三级分类，路由跳转 search，并传递参数

1. Home 模块跳转到 Search 模块
2. 把用户选中的产品名称、ID 进行参数传递
3. 编程式跳转
   1. push
   2. replace
4. 声明式跳转
   1. 把 a 标签换成 router-link
   2. 添加 to 进行路由跳转
   3. 最终会导致卡顿现象，router-link 是一个组件，每次移到哪里都会生成组件实例
5. 编程式跳转
   1. 保持 a 标签，@click，在函数里面写 `this.$router.push('/search')`
   2. 使用事件委派！放在就近的父元素上，没有 v-for 循环语句，只有一个，更优秀
      1. 问题：如何找到子元素 a 标签，如何获取参数各级分类的名称+id
      2. 问题：如何区分各级分类
6. 解决：自定义属性——找到 a 标签
   1. 给所有的 a 标签，添加上自定义属性
      - `:data-categoryName="ci.categoryName"`
      - `:data-categoryiId="ci.categoryId"`
      - 这里的 i 是变量 1、2、3
      - 自定义属性名在浏览器中解析成全小写
   2. 并赋值为当前 a 标签所在的级别的 categoryName
7. 解决：得到自定义属性的属性值
   1. 获取事件对象，判断事件节点 e.target
   2. 解构出需要的属性名
      - `let {categoryname,category1id,category2id,category3id} = e.target.dataset`
      - 自定义属性名在浏览器中解析成全小写
   3. 解构可能不成功，所以后续的操作都是在 categoryname 不为 undefined 的情况下及逆行
      1. 还要在里面整理路由跳转的参数
         ```js
         let location = { name: "search" }
         let query = { categoryName }
         ```
      2. 多级 if 语句判断级别，在函数里中进行 query 的赋值
      3. 将 location 和 query 合并
         - `location.query = query`
      4. 最后进行路由的跳转
         - `this.$router.push(location)`

## Search 模块三级分类实现

1. TypeNav 分类菜单，过渡动画，全局组件直接用！默认不展开，显示隐藏状态，v-show/v-if
   - 添加一个 data，show
2. 在 home 中全局组件 TypeNav 的 mounted 会执行一次，从 home 跳转到 search，TypeNav 的 mounted 又会执行一次
   1. 如何区分两个模块的 show？
      - data 里面的 show 初始值设置为 true
   2. 如何让 search 中 show 初始值为 true 的情况下，初始不显示？mounted+判断路由
      - 页面挂载完毕里面判断路由路径，不是 home 就不显示
      - `this.$route.path!='/home'`
3. 给全部商品分类这个 h2，加上鼠标移入移出的事件处理
   1. 也要判断路由（移入可以不判断
   2. 添加两个函数
4. 过渡动画
   1. 前提：组件或元素必须要有 v-if 或者 v-show
   2. 用 transition 标签包裹上述标签
      1. 要写一个 name 属性
         - `name="sort"`
      2. 过渡动画写 name 属性值-xx
         - `.sort-enter{height:0px}`过渡动画开始状态
         - `.sort-enter-to{height:461px}`过渡动画结束状态
         - `.sort-enter-active{}`过渡动画时间、速率
           - `transition:all .2s linear`
5. 最终效果瑕疵
   1. 重复刷新 home，一级菜单部分会出现空
   2. 从 home 进入 search，一级菜单部分会有不显示的过渡
      - 因此：移开不要过渡动画更好

## 三级分类列表-性能优化！

1. 问题：home 跳转到 search，会再次发起请求获取三级列表数据，只要组件相互切换用到全局组件 TypeNav，都会重新发起请求
2. 解决：只发起一次请求
   1. 本地存储
   2. 哪个地方只会执行一次？全局组件中？App.vue 中的 mounted 只会执行一次
   3. App.vue 最先执行，且执行一次
3. 在 App.vue 的 mounted 中派发一个获取三级列表的 action
   1. `this.$store.dispatch('getxxxxx')`
4. `this.$store.dispatch('getxxxxx')`不能放到 main.js 中，this 是组件，组件上才有$store
   - main.js 不是一个组件

## 合并参数

1. 除了点击 a 标签会跳到 search，点击搜索按钮也会跳转到 search
2. 都要传一些参数过去，但是要么只有 params 参数，要么只有 query 参数；而在点击了 a 标签之后会有 query 参数，如果再输入并搜索，需要将两个参数都显示；也就是需要相互判断存在性
   1. 一方面，在三级分类那里，需要判断 params 参数，将其并入
   2. 另一方面，在 header 那里，需要判断 query 参数，将其并入
   3. 问题：为什么明明是只有在`if(this.$route.query)或者params`成立的时候才会 push，为什么在没有 this.$route.query 的时候还是正常？
      1. 三级分类那里，是 params 有，keyword 键存在，只是值为空字符串
      2. header 搜索那里，query 就是一个空对象
3. query 参数是等于&连接，params 参数是问号

## home 首页开发-轮播图+家用电器等

1. 轮播图属于 ListContainer 组件，家用电器属于 Floor 组件，服务器没有提供这些数据
2. mock？模拟，mockjs 模拟数组，“生成随机数据，拦截 ajax 请求”，mock 的数据和后端无关，浏览器不会让 ajax 请求发到后端
3. 安装 mockjs
   - `cnpm install --save mockjs`
4. 使用 mockjs
   1. 在 src 文件夹创建 mock 文件夹
   2. 准备 JSON 文件，`mock/xxx.json`
   3. 把上述 JSON 文件内所需的静态资源放到`public/images`文件夹（public 打包直接会放到 dist
      - 从原本组件中复制到 public 中
   4. mock 虚拟数据，`mock/mockServe.js`
      1. 引入 mock
         - `import Mock from 'mockjs'`
      2. 引入 JSON 数据
         - `import xx from './xx.json'`
      3. 为什么上面两个文件不用暴露直接引
         - 图片、JSON 数据格式默认对外暴露，不需要自己暴露
      4. 调用 mock 方法，传入请求地址参数，传入数据参数
         - `Mock.mock("/mock/xx",{code:200,data:xx})`
         - 后面是请求之后返回的参数
      5. 在 main.js 文件中引入 mockServe.js，执行
         - `import '@/mock/mockServe'`
         - 不用在 mockServe.js 中暴露，因为在其他文件用不到，只要在其他文件引入执行
5. 发起请求，获取数据
   1. 用 mock 而不是服务器数据，改 api 接口
      - `src/api/requests.js`是真实的向服务器发起请求，baseURL 为"/api"，要向 mock 发请求，就改为"/mock"，或者直接复制一遍 ajax.js 文件，改一下 baseURL 部分，形成新的`mockRequests.js`；
      - 之后在 `src/api/index.js`中引入`mockRequests.js`，用 mock 的数据，并像对外暴露接口`requests.js`一样
      - `import mock from "./mockRequests.js"`
      - `export const reqBannerList = () => mock({ url: "/banners"})`
      - 为什么 requests 里面要写 methods:"get"，mockRequests 不要写？？
   2. 在组件中发起请求
      1. mounted 挂载完毕后直接派发 action，通过 vuex 发起 ajax 请求，将数据存储到仓库中
         - `mounted(){this.$store.dispatch('reqBannerList')}`
   3. 在仓库中获取数据并接收数据修改数据
      1. 在 store 的对应模块小仓库中获取数据
         1. 从@/api 中引入
            - `import { reqBannerList } from "@/api"`
         2. 在 actions 中获取数据
            ```js
            async bannerList({ commit }) {
               let result = await reqBannerList()
               if (result.code === 200) {
                  commit("BANNERLIST", result.data)
               }
            },
            ```
         3. 是 Promise 对象，要用 async 和 await
      2. 在 store 对应模块小仓库中用数组等接收数据
         1. 在 state 中初始化数组等数据
            - `bannerList: [],`
         2. 根据获取到的数据，判断是否成功接收后用 commit 提交数据
      3. 在 store 对应模块小仓库中用 mutation 修改数据
         - `BANNERLIST(state, bannerList) {state.bannerList bannerList},`
   4. 仓库中有数据了，组件获取仓库中的数据
      1. 引入 vuex 的 mapState
         - `import {mapState} from 'vuex'`
      2. computed 计算属性
         ```js
         computed:{
            ...mapState({
                  bannerList:state=>state.home.bannerList
            })
         }
         ```
         - 等价于以下代码
         ```js
         computed: {
            bannerList() {
               return this.$store.state.home.bannerList;
            }
         }
         ```
      3. mapState 是 Vuex 的辅助函数，在计算属性中生成一些返回 Vuex Store 中状态的函数，以便在组件中直接使用这些状态
      4. mapState 函数可以接受一个对象或数组，该对象或数组定义了如何从 Vuex Store 中的状态映射到组件的计算属性。
6. 一些问题
   1. `this.$store.dispatch('home/getBannerList')` 这里写 home/是因为命名空间
   2. 组件的 mounted 里面的`this.$store.dispatch('home/getBannerList')`要和仓库里面的函数名一致！以及 mutations 里面的全大写一致，应该写成动作的形式，避免与变量同名

## 轮播图 swiper

1. 使用
   1. 安装 swiper
      - 不安装最新版本
      - `cnpm install --save swiper@6`
      - 所有安装都在 app 文件夹下
   2. 引入 js
      - `<script src="swiper.min.js"></script>`
   3. 引入 css
      - `<link rel="stylesheet" href="swiper.min.css"/>`
   4. 页面结构全部解析完毕
   5. 再 new swiper 实例
2. 多个地方要用轮播图，所以在 main.js 中引入
   - `import Swiper from 'swiper'`
3. 将轮播图部分用 v-for 实现
   ```html
   <div
     class="swiper-slide"
     v-for="(carousel,index) in bannerList"
     :key="carousel.id"
   >
     <img :src="carousel.imgUrl" />
   </div>
   ```
   - 这里的数组 bannerList 是 computed 里面的从仓库中获取到的数据
4. 直接在组件的 mounted 中 new Swiper 实例？
   1. 没用，因为 v-for 是动态生成的，异步获取数据再生成轮播图图片
   2. 也就是 swiper 实例的初始化是在修改仓库中的数据之前，也就是组件还没有获取到数据
   3. 总之不能再 mounted 中 new Swiper
   ```js
   var mySwiper = new Swiper(document.querySelector(".swiper-container"), {
     loop: true,
     pagination: {
       el: ".swiper-pagination",
     },
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
   })
   ```
5. 直接在 updated 钩子里面？
   - 但凡有响应式数据更新，都会重新创建 swiper 实例
6. 在 mounted 里面设置 2s 定时器？0
   - 没用
7. 要在 main.js 中引入样式，在组件中引入 swiper
   - `import 'swiper/css/swiper.css'`样式直接引入就好了
   - `import Swiper from "swiper"`
8. swiper 引入有问题，swiper 的版本问题，需要 5 版本或更低
