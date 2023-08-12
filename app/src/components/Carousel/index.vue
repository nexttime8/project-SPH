<!-- eslint-disable vue/no-unused-vars -->
<template>
  <div class="focus">
    <div class="focus_loading skeleton-wrapper" ref="loading_animation">
        <div class="focus-slider">
          <div class="focus-item skeleton-elementDark"></div>
        </div>
      </div>
      <div class="swiper-container" ref="mySwiper">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(carousel, _) in list"
            :key="carousel.id"
          >
            <img :src="carousel.imgUrl" ref="CarouselImg"/>
            <!-- <img src="./images/banner1.jpg" /> -->
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/css/swiper.min.css"
export default {
  name: "CarouselComp",
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

<style scoped lang="css">
/* 预设高度，防止图片未加载出来，分页器和切换按钮偏移 */
.swiper-container{
  height: 455px;
}
.focus {
    position: relative;
    height: 455px;
    overflow: hidden;
}
.skeleton-wrapper {
    position: absolute;
    font-size: 0;
    line-height: 0;
    overflow: hidden
}
.skeleton-wrapper:before {
    position: absolute;
    width: 100%;
    height: 100%;
    background: -webkit-gradient(linear,right top,left top,from(rgba(255,255,255,0)),color-stop(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));
    background: linear-gradient(270deg,rgba(255,255,255,0),rgba(255,255,255,.5),rgba(255,255,255,0));
    left: 0;
    top: 0;
    z-index: 1;
    -webkit-animation: skeletonLoading 2s ease-in-out infinite;
    animation: skeletonLoading 2s ease-in-out infinite;
    content: ""
}
.image-no-animation:before{
  display: none;
}
@-webkit-keyframes skeletonLoading {
    0% {
        -webkit-transform: translate(-100%);
        transform: translate(-100%)
    }
    80%,to {
        -webkit-transform: translate(100%);
        transform: translate(100%)
    }
}
@keyframes skeletonLoading {
    0% {
        -webkit-transform: translate(-100%);
        transform: translate(-100%)
    }
    80%,to {
        -webkit-transform: translate(100%);
        transform: translate(100%)
    }
}
.skeleton-elementDark {
    background: none!important;
    background-color: #eee!important;
    border-color: #eee!important;
}
.focus .focus-slider {
    width: 100%;
    display: inline-block;
    position: relative
}

.focus .focus-slider .focus-item {
    display: inline-block;
    margin-right: 10px;
    width: 721px;
    height: 455px;
}
.swiper-slide img{
  z-index: 9;
}
</style>
