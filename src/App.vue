<template>
  <div>
    <Search />
    <DisplayGifs />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import store from './store';
import GifsApi from './api/GifApi';

import DisplayGifs from './components/DisplayGifs.vue';
import Search from './components/Search.vue';

window.onscroll = () => {
  // eslint-disable-next-line operator-linebreak
  const bottomOfWindow =
    // eslint-disable-next-line operator-linebreak
    document.documentElement.scrollTop + window.innerHeight ===
    document.documentElement.offsetHeight;
  if (bottomOfWindow) {
    store.dispatch('searchCountUp');
    GifsApi();
  }
};

@Options({
  components: { DisplayGifs, Search },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
