import { createStore } from 'vuex';
import Gif from '@/models/Gif';

export interface State {
  gifs: Gif[];
  myGifs: Gif[];
}

export default createStore<State>({
  state: {
    gifs: [],
    myGifs: [],
  },
  mutations: {
    ADD_GIF(state, gif: Gif) {
      state.gifs.push(gif);
    },
    ADD_MY_GIF(state, gif: Gif) {
      state.myGifs.push(gif);
    },
  },
  actions: {
    addGif({ commit }, gif: Gif) {
      commit('ADD_GIF', gif);
    },
    addMyGif({ commit }, gif: Gif) {
      commit('ADD_MY_GIF', gif);
    },
  },
  modules: {},
});
