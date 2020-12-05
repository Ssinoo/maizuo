<template>
  <div>
    <van-index-bar highlight-color="red" @select="handleSelect">
      <div v-for="data in citylist" :key="data.type">
        <van-index-anchor :index="data.type.toUpperCase()" />
        <van-cell
          :title="item.name"
          v-for="(item, index) in data.list"
          :key="index"
          @click="handleChangePage(item.name,item.cityId)"
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
import { mapMutations } from 'vuex';
import {mapState} from 'vuex'
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
    ...mapMutations('CityModule',['ChangeCityName','ChangeCityId']),
    //改造后端传来的数据
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
    //abcd...列表点击事件
    handleSelect(index) {
      console.log(index);
      Toast({
        message: index,
        
      });
    },
    //点击事件，将获取的城市id 提交到 store的mutation 进行state的改变
    handleChangePage(name,cityId){
      // this.$store.state.cityName= name;
      // this.$store.commit('ChangeCityName',name)
      // this.$store.commit('ChangeCityId',cityId)
      //换种写法
      this.ChangeCityName(name)
      this.ChangeCityId(cityId)
      this.$router.back();

    }
  },
};
</script>

<style>
</style>