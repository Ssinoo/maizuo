<template>
  <div id="app">
    <tabber></tabber>
    <router-view/>
  </div>
</template>


<script>
import axios from 'axios'
import tabber from './components/Tabbar'

export default {
  components:{
    tabber
  },
  
  


};
</script>

<style lang='less' >
*{
  margin: 0;
  padding: 0;
  ul ,li {
  list-style: none;
}
}

html{
  height: 100%;
}
</style>