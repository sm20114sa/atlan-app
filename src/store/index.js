import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedQuery: "",
    selectedQueryIndex: -1,
    queries:[],
  },
  getters: {
    getSelectedQuery: (state) => state.selectedQuery,
    getSelectedQueryIndex: (state) => state.selectedQueryIndex,
    getQueries: (state) => state.queries,
  },
  mutations: {
    SET_SELECTED_QUERY(state, payload) {
      state.selectedQuery = payload;
    },
    SET_SELECTED_QUERY_INDEX(state, payload) {
      state.selectedQueryIndex = payload;
    },
    UPDATE_QUERIES(state, payload) {
      state.queries.push(payload);
    },
  },
  actions: {
    setSelectedQuery({commit}, query) {
      commit("SET_SELECTED_QUERY", query);
    },
    setSelectedQueryIndex({commit}, index) {
      commit("SET_SELECTED_QUERY_INDEX", index);
    },
    updateQueries({commit}, query) {
      commit("UPDATE_QUERIES", query);
    },
  },
});
