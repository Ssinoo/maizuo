<template>
  <div>
    <div class="header">
      <span>睡了晚安</span>
      <i class="iconfont iconhamburger"></i>
    </div>
    <!-- 电影轮播组件 -->
    <film-swiper></film-swiper>

    <!-- 选项卡 -->
    <film-header></film-header>
    <router-view></router-view>
  </div>
</template>

<script>
import FilmHeader from './Film/FilmHeader'
import FilmSwiper from './Film/FilmSwiper.vue'
export default {
  components: {
    FilmHeader,
    FilmSwiper
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 50px;
  width: 100%;
  background-color: #e54847;
  position: relative;
  text-align: center;
  line-height: 50px;
  span {
    color: #ffffff;
  }
  i {
    position: absolute;
    right: 10px;
    font-size: 35px;

  }
}

// .swiper {
//   height: 200px;
//   width: 100%;
//   // position: fixed;
//   // background-color: greenyellow;
//   top: 110px;
//   background: url('../assets/swiperimg/swiper1.png') no-repeat ;
//   background-size: 100% 100%;
// }
</style>>
