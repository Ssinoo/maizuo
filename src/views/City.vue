<template>
  <div>
    <van-index-bar highlight-color="red" @select="handleSelect">
      <div v-for="data in citylist" :key="data.type">
        <van-index-anchor :index="data.type.toUpperCase()" />
        <van-cell
          :title="item.name"
          v-for="(item, index) in data.list"
          :key="index"
        />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import Vue from "vue";
import { IndexBar, IndexAnchor, Cell, Toast } from "vant";

Vue.use(IndexBar);
Vue.use(IndexAnchor);
import http from "@/util/http.js";
export default {
  data() {
    return {
      citylist: [],
    };
  },
  mounted() {
    http({
      url: "/gateway?k=2094900",
      headers: {
        "X-Host": "mall.film-ticket.city.list",
      },
    }).then((res) => {
      console.log(res.data.data.cities);
      // this.citieslist=res.data.data.cities;
      //将数据传出来
      this.citylist = this.handleCityData(res.data.data.cities);
    });
  },
  methods: {
    handleCityData(cities) {
      const newcitylist = [];
      const letterArr = [];
      for (let code = 97; code < 123; code++) {
        letterArr.push(String.fromCharCode(code));
      }
      // console.log(letterArr);
      letterArr.forEach((letter) => {
        const list = cities.filter(
          (item) => item.pinyin.substring(0, 1) === letter
        );
        // console.log(list);
        if (list.length > 0) {
          newcitylist.push({
            type: letter,
            list: list,
          });
        }
      });
      console.log(newcitylist);
      return newcitylist;
    },
    handleSelect(index) {
      console.log(index);
      Toast({
        message: index,
        
      });
    },
  },
};
</script>

<style>
</style>