<template>
  <div>
    <van-index-bar>
      <van-index-anchor index="A"  v-for="(data,index) in citieslist" :key="index">
      <van-cell :title=data.name />
      

      </van-index-anchor>


    </van-index-bar>
  </div>
</template>

<script>
import Vue from "vue";
import { IndexBar, IndexAnchor,Cell } from "vant";

Vue.use(IndexBar);
Vue.use(IndexAnchor);
import http from "@/util/http.js";
export default {
  data(){
    return{
      citieslist: []
    }
  },
  mounted() {
    http({
      url: "/gateway?k=2094900",
      headers: {
        "X-Host": "mall.film-ticket.city.list",
      },
    }).then((res) => {
      console.log(res.data.data.cities);
      this.citieslist=res.data.data.cities;
    });
  },
};
</script>

<style>
</style>