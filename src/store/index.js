import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: "",
    nickname: "",
  },
  mutations: {
    setUser(state, { userId, nickname }) {
      state.userId = userId;
      state.nickname = nickname;
    },
  },
  actions: {},
  modules: {},
});
