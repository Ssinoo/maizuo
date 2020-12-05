<template>
  <div>
    <h1>获取密码</h1>
    <van-slider v-model="slivalue" @change="onChange" />
    <van-cell-group>
      <van-field v-model="name" label="账号" placeholder="请输入账号" />
      <van-field v-model="password" label="密码" placeholder="请输入密码" />
    </van-cell-group>
    <van-button type="primary" block @click="hanleButton()">登入</van-button>
  </div>
</template>

<script>
import Vue from "vue";
import { Field, CellGroup, Notify, Slider, Toast, Button } from "vant";

Vue.use(Field).use(CellGroup).use(Notify).use(Slider).use(Toast).use(Button);
export default {
  data() {
    return {
      name: "",
      password: "",
      slivalue: 10,
    };
  },
  methods: {
    onChange(slivalue) {
      if (slivalue === 100) {
        Toast("账号密码都是 admin");
      }
    },
    hanleButton(){
      if(this.name === 'admin' && this.password === 'admin'){
        this.$router.push('/bug');
      }else{
        Toast("请打完 ok？");

      }
    }
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  
}
.van-slider {
  width: 96%;
  height: 20px;
}
.van-button {
  border: 0 ;
  background: #00c3ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffff1c,
    #00c3ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffff1c,
    #00c3ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
