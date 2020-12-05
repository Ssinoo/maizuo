import http from "@/util/http.js";

const module = {
  namespaced: true,

  state: {
    cinemaList: [],
  },
  mutations: {
    setCinemaList(state, cinemaList) {
      state.cinemaList = cinemaList
    },
    clearCinemaList(state) {
      state.cinemaList = [];
    }
  },
  actions: {
    getCinemaList(store, cityId) {
      return http({
        url: `https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=7668767`,
        headers: {
          "X-Host": "mall.film-ticket.cinema.list",
        },
      }).then((res) => {
        // console.log(res.data);
        store.commit('setCinemaList', res.data.data.cinemas)
      });
    }
  }
}

export default module