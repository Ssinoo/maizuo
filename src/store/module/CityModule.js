const module = {
  namespaced:true,
  state: {
    cityId: '310100',
    cityName: '上海',
  },
  mutations: {
    ChangeCityName(state, name) {
      state.cityName = name;
    },
    ChangeCityId(state, cityid) {
      state.cityId = cityid;
    },
  },
  actions: {

  }
}

export default module