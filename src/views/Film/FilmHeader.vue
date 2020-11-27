<template>
  <div class="choose">
    <ul>
      <router-link to="/film/nowplaying" tag="li" active-class="myactive"
        >正在热映</router-link
      >
      <router-link to="/film/comingsoon" tag="li" active-class="myactive"
        >即将上映</router-link
      >
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.myactive {
  color: red;
  border-bottom: red 1px solid;
}
.choose {
  position: sticky;
  top: 0px;
  background-color: #ffffff;
  ul {
    height: 40px;
    display: flex;
    li {
      flex: 1;
      display: flex;
      margin-top: 8px;
      justify-content: center;
    }
  }
}
</style>>
