<template>
  <div>
    <ToolBar />
    <TypeNav />
    <Main :goodsList="goodsList" />
  </div>
</template>

<script>
import Main from "@/pages/Search/Main"
import ToolBar from "@/pages/Search/ToolBar"
import { mapState } from "vuex"
export default {
  name: "SearchComp",
  // 组件注册是对象形式
  components: {
    ToolBar,
    Main,
  },
  mounted() {
    this.$store.dispatch("getSearchList", {})
  },
  computed: {
    ...mapState({
      // **********为什么这里写的是小写的search？*****************
      goodsList: (state) => state.search.SearchList.goodsList,
    }),
  },
}
</script>

<style scoped></style>
