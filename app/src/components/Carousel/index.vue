<template>
  <div class="swiper-container" ref="mySwiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(carousel, index) in list"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" />
        <!-- <img src="./images/banner1.jpg" /> -->
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/css/swiper.min.css"
export default {
  name: "Carousel",
  props: ["list"],
  watch: {
    // 这里变成监听list
    list: {
      /* list有变化，从空到有 */
      /* 对象写法 */
      /* 对象写法必须要有handler，是在发生变化之后执行（只能保证list数据已经有了，无法保证结构渲染完成） */
      immediate: true,
      handler() {
        this.$nextTick(() => {
          new Swiper(this.$refs.mySwiper, {
            loop: true,
            slidesPerView: 1,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          })
        })
      },
    },
  },
}
</script>

<style></style>
