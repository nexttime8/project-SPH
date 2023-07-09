import Vue from "vue"
import VueRouter from "vue-router"
// 保存会自动添加上分号怎么消除？
Vue.use(VueRouter)
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"

export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      meta: { show: true },
    },
    {
      path: "/login",
      component: Login,
      meta: { show: false },
    },
    {
      path: "/register",
      component: Register,
      meta: { show: false },
    },
    {
      path: "/search/:keyword?",
      component: Search,
      meta: { show: true },
      name: "search",
    },
    {
      path: "*",
      redirect: "/home",
    },
  ],
})
