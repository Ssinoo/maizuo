<template>
  <div v-if="filminfo">
    <!-- 电影顶部信息 用组件封装-->
    <detail-header v-top :filminfoname="filminfo.name"></detail-header>
    <!-- 电影海报 -->
    <div class="film-header">
      <img :src="filminfo.poster" />
    </div>
    <!-- 电影基本信息 -->
    <div class="film-detail">
      <!-- 电影名字 -->
      <div class="film-name">
        <span>{{ filminfo.name }}</span>
        <span> {{ filminfo.filmType.name }}</span>
        <span>{{ filminfo.grade }}分</span>
      </div>
      <!-- 电影分类 -->
      <div class="film-category">
        <span>{{ filminfo.category }}</span>
      </div>
      <!-- 电影上映时间 -->
      <div class="film-time">
        <!-- 因为是给的时间戳，所以需要过滤器来过滤一下 -->
        <span>{{ filminfo.premiereAt | dataFilter }}</span>
      </div>
      <!-- 电影的地区和时长 -->
      <div class="film-nation-runtime">
        <span>{{ filminfo.nation }}|{{ filminfo.runtime }}分钟</span>
      </div>
      <!-- 电影详情 -->
      <div :class="isShow ? '' : 'synopsis'">
        {{ filminfo.synopsis }}
      </div>
      <div style="text-align: center">
        <i
          class="iconfont"
          :class="isShow ? 'iconup' : 'icondown-o'"
          @click="isShow = !isShow"
        ></i>
      </div>
    </div>

    <!-- 电影演职人员 -->
    <div class="actors">
      <div><h3>演职人员</h3></div>
      <!-- 演职人员的图片 用swiper.js来制作 有那边预留的插槽 通过父传子 传需要一页传几个 自定义class名-->
      <detail-swiper :slidesPerView="4" swiperclass="swiper-actors">
        <div v-for="(data, index) in filminfo.actors" class="swiper-slide">
          <img :src="data.avatarAddress" alt="" />
          <div style="text-align: center">
            <div style="font-size: 12px">
              {{ data.name }}
            </div>
            <div style="font-size: 10px; color: #797d82">
              {{ data.role }}
            </div>
          </div>
        </div>
      </detail-swiper>
    </div>

    <!-- 电影剧照 -->
    <div class="photos">
      <div><h3>电影剧照</h3></div>
      <detail-swiper :slidesPerView="2" swiperclass="swiper-photos">
        <div v-for="(data, index) in filminfo.photos" class="swiper-slide">
          <img :src="data" alt="" @click="handlePreview(index)" />
        </div>
      </detail-swiper>
    </div>
  </div>
</template> 

<script>
//导入封装好的axios ,http是自己封装好的
import http from "@/util/http";
import Vue from "vue";
import moment from "moment";
import DetailSwiper from "./Detail/DetailSwiper.vue";
import DetailHeader from "./Detail/DetailHeader.vue";
import { ImagePreview} from "vant";
//改变时间样式
Vue.filter("dataFilter", (data) => {
  moment.locale("zh-ch");
  return moment(data * 1000).format("YYYY-MM-DD");
});
//定义指令名
Vue.directive("top", {
  //获取原生Dom节点
  inserted(el) {
    window.onscroll = () => {
      //原生js获取滚动兼容性的写法
      if (
        (document.body.scrollTop || document.documentElement.scrollTop) > 50
      ) {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    };
  },
  unbind() {
    window.onscroll = null;
  },
});
export default {
  components: { DetailSwiper, DetailHeader },
  data() {
    return {
      filminfo: null,
      isShow: false,
    };
  },
  methods: {
    handlePreview(index) {
      ImagePreview({
        images: this.filminfo.photos,
        startPosition: index,
        closeable: true,
        closeIconPosition: "top-left",
      });
    },
  },
  mounted() {
    
    console.log(this.$route.query.id);
    http({
      // 路径直接从 base路径之后开始写
      url: `/gateway?filmId=${this.$route.query.id}&k=110640`,
      headers: {
        //已经写了一个了
        "X-Host": "mall.film-ticket.film.info",
      },
    }).then((res) => {
      console.log(res.data.data.film);
      //将axios请求的数据赋值给 filminfo
      this.filminfo = res.data.data.film;
      
    });
  },
};
</script>

<style lang="less" scoped>
.film-header {
  img {
    width: 100%;
    background: center;
    height: 200px;
    background-size: cover;
  }
}
.film-detail {
  background-color: #ffffff;
  .film-name {
    display: flex;
    margin: 5px 2px;
    span:nth-child(3) {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      margin-right: 8px;
      font-size: 20px;
      color: #ffb232;
      font-style: italic;
    }
    span:nth-child(-n + 2) {
      margin-left: 10px;
    }
    span:nth-child(2) {
      margin-top: 5px;
      margin-left: 3px;
      font-size: 10px;
      height: 14px;
      line-height: 14px;
      background-color: #d2d6dc;
      border-radius: 2px;
    }
  }
  .synopsis {
    height: 50px;
    overflow: hidden;
  }
}
</style>