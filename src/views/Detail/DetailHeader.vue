<template>
  <div>
    <router-link to="/film/nowplaying" >
      <i class="iconfont iconleft"></i>
    </router-link>
    {{filminfoname}}
  </div>
</template>

<script>
export default {
props:['filminfoname']
}
</script>

<style lang='less' scoped>
div{
  position: fixed;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: #ffffff;
  i{
    float: left;
    margin-left: 5px;
    font-size: 20px;
  }
}
</style>