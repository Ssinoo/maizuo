<template>
  <div id="app">
    <!-- <tabber v-show="this.$store.state.isTabbarShow"></tabber> -->
    <tabber v-show="isTabbarShow"></tabber>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import tabber from "./components/Tabbar";
//隐射状态
import {mapState} from 'vuex'

export default {
  components: {
    tabber,
  },
  computed:{
    ...mapState('TabbarModule',['isTabbarShow'])
  },
  mounted(){
    console.log(mapState('TabbarModule',['isTabbarShow']));
  }
};
</script>

<style lang='less' >
body{ 
  background-color: #f4f4f4;
}
* {
  margin: 0;
  padding: 0;
  ul,
  li {
    list-style: none;
  }
}


section{
  margin-bottom: 50px;
}
</style>
