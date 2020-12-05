<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @cancel="onCancel"
        
      />
    </form>

    <van-list>
        <van-cell v-for="data in computeCinemaList" :key="data.cinemaId">
          <div>{{ data.name }}</div>
          <div class="address">{{ data.address }}</div>
        </van-cell>
    </van-list>
  </div>
</template>

<script>
import Vue from "vue";
import { Search ,List,Cell} from "vant";
import { mapActions,mapState } from 'vuex';

Vue.use(Search).use(List).use(Cell);
export default {
  data() {
    return {
      value: "",
    };
  },
  mounted(){
    if(this.cinemaList.length === 0 ){
      //vuex 异步
      this.getCinemaList(this.cityId)
    }else{
       
    }
  },
  computed:{
    ...mapState('CinemaModule',['cinemaList']),
    ...mapState('CityModule',['cityId','cityName']),

    computeCinemaList(){
      // console.log(this.$store.state.cinemaList);
      if(this.value === '') return this.cinemaList.slice(0,3)
      //给数据过滤
      return this.cinemaList.filter(item=>item.name.toUpperCase().includes(this.value.toUpperCase())|| item.address.toUpperCase().includes(this.value.toUpperCase()))
    }
  },
  methods: {
    ...mapActions('CinemaModule',['getCinemaList']),
    onCancel() {
      this.$router.replace('/cinema')
    },
  },
};
</script>

<style lang='less' scoped>
.address {
    font-size: 12px;
    color: #797d82;
  }
</style>