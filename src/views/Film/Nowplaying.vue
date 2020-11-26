<template>
  <div>
    <ul>
      <li v-for="data in datalist" :key='data.filmId' @click="handleChangePage(data)">
        <img :src="data.poster" alt="">
        <div>
          <p><h4>{{data.name}}</h4></p>
          <p>{{data.grade}}</p>
          <p>导演:{{data.director}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      datalist: [],
    };
  },
  methods: {
    handleChangePage(id) {
      // console.log(id);
      //编程式导航
      //通过路径跳转
      // this.$router.push(`/detail/${id}`)
      //里面是一个对象 前一个id是动态路由绑定的id 后者是传过来的id
      // this.$router.push({name:'Detail',params:{id:id}})

      //query跳转
      this.$router.push(`/detail?id=${id.filmId}`)
    },
  },
  mounted() {
    axios({
      url:
        "https://m.maizuo.com/gateway?cityId=430100&pageNum=1&pageSize=10&type=1&k=5998332",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606313308132504036048897"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      this.datalist = res.data.data.films;
      console.log(this.datalist);
    });
  },
};
</script>

<style lang="less" scoped>
ul {
  display: flex;
  flex-direction: column;
  li {
    display: flex;
    margin: 15px;
    img {
      width: 66px;
      height: 92px;
    }
    p {
      // 设定宽度
      width: 270px;
      overflow: hidden;
      text-overflow: ellipsis;
      /* 弹性伸缩盒子模型显示 */
      display: -webkit-box;
      /* 限制在一个块元素显示的文本的行数 */
      -webkit-line-clamp: 1;
      /* 设置或检索伸缩盒对象的子元素的排列方式 */
      -webkit-box-orient: vertical;
    }
  }
}
</style>>

