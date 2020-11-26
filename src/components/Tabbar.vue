<template>
  <div>
    <ul>
      <router-link to='/film' tag="li" active-class="myactive"> 
      <i class="iconfont iconsay"></i>
      film
      </router-link>
      <router-link to='/cinema' tag="li" active-class="myactive">
      <i class="iconfont iconmovies"></i>
      cinema
      </router-link>
      <router-link to='/center' tag="li" active-class="myactive">
      <i class="iconfont iconmine"></i>
      center
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style  lang='less' scoped>
  .myactive{
    color: red;
  }
  ul{
    border-top:#f9f9f9 solid 1px  ;
    background-color: #ffffff;
    position:fixed;
    bottom: 0;
    left:0;
    width: 100%;
    display: flex;
    
    li{
      flex: 1;
      display: flex;
      flex-direction: column;
      height: 50px;
      justify-content: center;
      align-items: center;
    }
  }
</style>