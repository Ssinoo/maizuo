<template>
  <div class="swiper-container" :class="swiperclass">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/swiper-bundle.css";
export default {
  props: {
    slidesPerView: {
      type: Number,
      default: 1,
    },
    swiperclass: {
      type: String,
      default: "swiper-container",
    },
  },
  mounted() {
    new Swiper("." + this.swiperclass, {
      slidesPerView: this.slidesPerView,
      spaceBetween: 30,
      freeMode: true,
    });
  },
};
</script>

<style lang="less">
.swiper-wrapper {
  img {
    width: 100%;
  }
}
</style>