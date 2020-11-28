<template>
  <div class="cinema" :style="{height:height}">
    <ul>
      <li v-for="data in cinemalist" :key="data.cinemaId">
        <div>{{ data.name }}</div>
        <div class="address">{{ data.address }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import http from "@/util/http.js";
export default {
  data() {
    return {
      cinemalist: null,
      height: 0,
    };
  },
  mounted() {
    this.height = document.documentElement.clientHeight -50 + 'px';
    http({
      url: `https://m.maizuo.com/gateway?cityId=430100&ticketFlag=1&k=7668767`,
      headers: {
        "X-Host": "mall.film-ticket.cinema.list",
      },
    }).then((res) => {
      console.log(res.data.data);
      this.cinemalist = res.data.data.cinemas;

      //状态立即改变,但是dom异步渲染
      this.$nextTick(()=>{
        new BetterScroll('.cinema',{
          scrollbar:{
            fade:true
          }
        })
      })
    });
  },
};
</script>

<style lang='less' scoped>
.cinema {
  
  overflow:hidden;
  position: relative;
  .address {
    font-size: 12px;
    color: #797d82;
  }
}
</style>
