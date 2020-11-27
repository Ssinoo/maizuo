<template>
  <div id="app">
    <tabber></tabber>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import tabber from "./components/Tabbar";

export default {
  components: {
    tabber,
  },
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
