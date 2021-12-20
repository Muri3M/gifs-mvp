import { createStore } from 'vuex';
import Gif from '@/models/Gif';

export interface State {
  gifs: Gif[];
  myGifs: Gif[];
  search: string;
  searchCount: number;
}

export default createStore<State>({
  state: {
    gifs: [],
    myGifs: [],
    search: '',
    searchCount: 0,
  },
  mutations: {
    ADD_GIF(state, gif: Gif) {
      state.gifs.push(gif);
    },
    ADD_MY_GIF(state, gif: Gif) {
      state.myGifs.push(gif);
    },
    SET_SEARCH(state, search: string) {
      state.search = search;
      state.searchCount = 0;
    },
    RESET_GIF_STATE(state) {
      state.gifs = [];
    },
    SEARCH_COUNT_UP(state) {
      state.searchCount += 25;
    },
  },
  actions: {
    addGif({ commit }, gif: Gif) {
      commit('ADD_GIF', gif);
    },
    addMyGif({ commit }, gif: Gif) {
      commit('ADD_MY_GIF', gif);
    },
    setSearch({ commit }, search: string) {
      commit('SET_SEARCH', search);
    },
    resetGifState({ commit }) {
      commit('RESET_GIF_STATE');
    },
    searchCountUp({ commit }) {
      commit('SEARCH_COUNT_UP');
    },
  },
  modules: {},
});
