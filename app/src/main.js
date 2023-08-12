import Vue from "vue"
import App from "./App.vue"
import router from "@/router"
import store from "@/store"

// 注册全局组件
import TypeNav from "@/components/TypeNav"
import CarouselComp from "@/components/Carousel"
Vue.component(TypeNav.name, TypeNav)
Vue.component(CarouselComp.name, CarouselComp)

Vue.config.productionTip = false

// import { reqCategoryList } from "@/api" // 为什么只需要指定文件夹，不需要指定request.js?
// reqCategoryList()

import "@/mock/mockServe"

import "swiper/css/swiper.css"

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app")
