import Vue from "vue"
import App from "./App.vue"
import router from "@/router"

import TypeNav from "@/pages/Home/TypeNav"
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false

import { reqCategoryList } from "@/api" // 为什么只需要指定文件夹，不需要指定request.js?
reqCategoryList()

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app")
