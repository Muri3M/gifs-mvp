import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';

import Gif from '@/models/Gif';

export interface State {
  gifs: Gif[];
  myGifs: Gif[];
  search: string;
  searchCount: number;
}

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

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
    RESET_GIF_STATE(state) {
      state.gifs = [];
    },

    ADD_MY_GIF(state, gif: Gif) {
      if (state.myGifs.find((g) => g === gif) === undefined) {
        state.myGifs.push(gif);
      }
    },
    EDIT_MY_GIF(state, gif: Gif) {
      const index = state.myGifs.findIndex((g) => g.id === gif.id);
      state.myGifs[index] = gif;
    },
    DELETE_MY_GIF(state, gif: Gif) {
      state.myGifs = state.myGifs.filter((g) => g.id !== gif.id);
    },

    SET_SEARCH(state, search: string) {
      state.search = search;
      state.searchCount = 0;
    },
    SEARCH_COUNT_UP(state) {
      state.searchCount += 25;
    },
  },
  actions: {
    addGif({ commit }, gif: Gif) {
      commit('ADD_GIF', gif);
    },
    resetGifState({ commit }) {
      commit('RESET_GIF_STATE');
    },

    addMyGif({ commit }, gif: Gif) {
      commit('ADD_MY_GIF', gif);
    },
    editMyGif({ commit }, gif: Gif) {
      commit('EDIT_MY_GIF', gif);
    },
    deleteMyGif({ commit }, gif: Gif) {
      commit('DELETE_MY_GIF', gif);
    },

    setSearch({ commit }, search: string) {
      commit('SET_SEARCH', search);
    },
    searchCountUp({ commit }) {
      commit('SEARCH_COUNT_UP');
    },
  },
  plugins: [vuexLocal.plugin],
});
