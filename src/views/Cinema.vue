<template>
  <div>
    <van-nav-bar 
    title="电影院"
    @click-left='hanldClick()'
    @click-right="hanldRightClick()"
    >
      <template #left >
        {{cityName}}<van-icon name="arrow-down" color="black" />
      </template>
      <template #right>
        <van-icon name="search" size="18" color="black" />
      </template>
    </van-nav-bar>
    <div class="cinema" :style="{ height: height }">
      <van-list>
        <van-cell v-for="data in cinemaList" :key="data.cinemaId">
          <div>{{ data.name }}</div>
          <div class="address">{{ data.address }}</div>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import Vue from "vue";
import { NavBar, Icon ,List,Cell} from "vant";
import { mapActions, mapMutations, mapState } from 'vuex';

Vue.use(NavBar).use(Icon).use(List).use(Cell);
export default {
  methods:{
    ...mapActions('CinemaModule',['getCinemaList']),
    ...mapMutations('CinemaModule',['clearCinemaList']),
    hanldClick(){
      // this.$store.commit('clearCinemaList')
      this.clearCinemaList(),
      this.$router.push('/city')
    },
    hanldRightClick(){
      // console.log("right");
      this.$router.push('/cinema/search')
      
    }
  },
  data() {
    return {
      cinemalist: null,
      height: 0,
    };
  },
  computed:{
    ...mapState('CinemaModule',['cinemaList']),
    ...mapState('CityModule',['cityId','cityName'])
  },
  mounted() {
    //高度是减去了NavBar和底部的TabBer cinemalist
    this.height = document.documentElement.clientHeight - 100 + "px";
    if(this.cinemaList.length === 0 ){
      //vuex 异步
      this.getCinemaList(this.cityId).then(res=>{
        //状态立即改变,但是dom异步渲染
        this.$nextTick(() => {
          new BetterScroll(".cinema", {
            scrollbar: {
              fade: true,
            },
          });
        });
      })
    }else{
      console.log('缓存');
        //状态立即改变,但是dom异步渲染
        this.$nextTick(() => {
          new BetterScroll(".cinema", {
            scrollbar: {
              fade: true,
            },
          });
        });
    }
    
  },
};
</script>

<style lang='less' scoped>
.cinema {
  overflow: hidden;
  position: relative;
  .address {
    font-size: 12px;
    color: #797d82;
  }
}
</style>
