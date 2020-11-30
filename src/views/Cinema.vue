<template>
  <div>
    <van-nav-bar 
    title="标题"
    @click-left='hanldClick()'
    >
      <template #left >
        长沙<van-icon name="arrow-down" color="black" />
      </template>
      <template #right>
        <van-icon name="search" size="18" color="black" />
      </template>
    </van-nav-bar>
    <div class="cinema" :style="{ height: height }">
      <ul>
        <li v-for="data in cinemalist" :key="data.cinemaId">
          <div>{{ data.name }}</div>
          <div class="address">{{ data.address }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import http from "@/util/http.js";
import Vue from "vue";
import { NavBar, Icon } from "vant";

Vue.use(NavBar).use(Icon);
export default {
  methods:{
    hanldClick(){
    
      this.$router.push('/city')
    }
  },
  data() {
    return {
      cinemalist: null,
      height: 0,
    };
  },
  mounted() {
    //高度是减去了NavBar和底部的TabBer
    this.height = document.documentElement.clientHeight - 100 + "px";
    http({
      url: `https://m.maizuo.com/gateway?cityId=430100&ticketFlag=1&k=7668767`,
      headers: {
        "X-Host": "mall.film-ticket.cinema.list",
      },
    }).then((res) => {
      // console.log(res.data.data);
      this.cinemalist = res.data.data.cinemas;

      //状态立即改变,但是dom异步渲染
      this.$nextTick(() => {
        new BetterScroll(".cinema", {
          scrollbar: {
            fade: true,
          },
        });
      });
    });
  },
};
</script>

<style lang='less' scoped>
.cinema {
  overflow: hidden;
  position: relative;
  .address {
    font-size: 12px;
    color: #797d82;
  }
}
</style>
