<template>
  <div>
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <Rank />
    <Like />
    <Floor
      v-for="floorData in floorList"
      :key="floorData.id"
      :floorData="floorData"
    />
    <!-- <Floor /> -->
    <Brand />
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer"
import TodayRecommend from "@/pages/Home/TodayRecommend"
import Rank from "@/pages/Home/Rank"
import Like from "@/pages/Home/Like"
import Floor from "@/pages/Home/Floor"
import Brand from "@/pages/Home/Brand"

import { mapState } from "vuex"

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "",
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  methods: {},
  mounted() {
    // 为什么要指定home路径下？
    // 如果store/home/index.js里面没有指定命名空间为true，就不需要home路径，指定了就需要
    this.$store.dispatch("getFloorList")
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
}
</script>

<style scoped></style>
