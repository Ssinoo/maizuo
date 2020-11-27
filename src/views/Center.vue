<template>
  <div>
    Center
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    if(false) {
      next()
    } else {
      console.log('成功使用局部路由')
      next('/login')
    }
  }
}
</script>

<style>

</style>
