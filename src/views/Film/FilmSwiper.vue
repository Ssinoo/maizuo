<template>
  <div>
    <div class="swiper-container">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide" v-for="(data, index) in imglist" :key="index">
          <img :src="data" alt="" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <!-- If we need navigation buttons -->

      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->

      <!-- If we need scrollbar -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
export default {
  data() {
    return {
      imglist: [
        "https://static.maizuo.com/pc/v5/usr/movie/116ac5df56deb1b0e8688e6e2de71ba0.jpg",
        "https://pic.maizuo.com/usr/movie/070da81f4a5e8d603da1cd537376dcfd.jpg",
        "https://pic.maizuo.com/usr/movie/e8bd96531f01c1d2f64d45e847433c89.jpg",
      ],
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  },
};
</script>

<style lang="less" scoped>
.swiper-slide {
  height: 200px;
  img {
    width: 100%;
    
    background-size: cover;
  }
}
</style>