import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "Julinux",
    aulasCompletas: 0,
    totalAulas: 0
  },
  mutations: {
    CHANGE_USER(state, payload) {
      state.user = payload.user;
    },
    COMPLETAR_AULA(state) {
      state.aulasCompletas++;
    }
  },
  actions: {},
  modules: {}
});
