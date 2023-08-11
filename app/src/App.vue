<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"

export default {
  name: "SPH-Header", //Component name "" should always be multi-word.xxx-yyy
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 要不要指定home路径？
    this.$store.dispatch("getCategoryList")
  },
}
</script>

<style></style>
