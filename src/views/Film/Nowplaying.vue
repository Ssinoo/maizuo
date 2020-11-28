<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="wdnmd,没数据了别刷了"
      @load="onLoad"
      :immediate-check="false"
    >
      <van-cell
        v-for="data in datalist"
        :key="data.filmId"
        @click="handleChangePage(data)"
      >
        <div>
          <img :src="data.poster" alt="" />
        </div>
        <div>
          <p>{{ data.name }}</p>
          <p>主演:{{ data.actors | actorsFilter }}</p>
          <p>{{ data.nation }} | {{ data.runtime }}分钟</p>
        </div>
        <div>
          <button>购票</button>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import Vue from "vue";
//import axios from "axios";
import http from "@/util/http.js";
import { List, Cell } from "vant";

Vue.use(List).use(Cell);
Vue.filter("actorsFilter", (actors) => {
  if (!actors) return "暂无主演";
  return actors.map((item) => item.name).join(" ");
});
export default {
  data() {
    return {
      datalist: [],
      loading: false, //是否正在加载中，防止多次触发
      finished: false,
      current: 1, //记录第几页
      total: 0, //记录全部的数据
    };
  },
  methods: {
    handleChangePage(id) {
      // console.log(id);
      // 编程式导航
      // 通过路径跳转
      // this.$router.push(`/detail/${id}`)
      // 里面是一个对象 前一个id是动态路由绑定的id 后者是传过来的id
      // this.$router.push({name:'Detail',params:{id:id}})
      // query跳转
      this.$router.push(`/detail?id=${id.filmId}`);
    },
    onLoad() {
      // 1.ajax请求页面
      // 2.合并新数据到老数据下面
      // 3.让this.loading=false
      // 4.判断请求到的所有 数据是否等于总数，等于停止加载 给this.finished=true
      if (this.datalist.length === this.total) {
        this.finished = true;
        return;
      }
      this.current++;
      http({
        url: `/gateway?cityId=430100&pageNum=${this.current}&pageSize=10&type=1&k=5998332`,
        headers: {
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        this.datalist = [...this.datalist, ...res.data.data.films];
        this.loading = false;
      });
    },
  },
  mounted() {
    http({
      url: "/gateway?cityId=430100&pageNum=1&pageSize=10&type=1&k=5998332",
      headers: {
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      this.datalist = res.data.data.films;
      this.total = res.data.data.total;
      console.log(this.total);
      console.log(res.data);
    });
  },
};
</script>

<style lang="less" scoped>
.van-list {
  display: flex;
  flex-direction: column;
  .van-cell__value {
    display: flex;
    img {
      height: 100px;
      width: 66px;
    }
    div:nth-child(2) {
      margin: 10px 3px;
      p:nth-child(1) {
        font-size: 18px;
      }
      p {
        width: 270px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    div:nth-child(3) {
      display: flex;

      align-items: center;
      button {
        border: 1px solid #ff5f16;
        border-radius: 4px;
        background-color: #ffffff;
        width: 40px;
      }
    }
  }
}
</style>>
