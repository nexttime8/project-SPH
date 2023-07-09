<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <TodayRecommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Phone/>
    <Brand/>
  </div>
</template>

<script>

import ListContainer from '@/pages/Home/ListContainer'
import TodayRecommend from '@/pages/Home/TodayRecommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Phone from '@/pages/Home/Phone'
import Brand from '@/pages/Home/Brand'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: '',
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Phone,
    Brand,
  }
}
</script>

<style scoped>

</style>
