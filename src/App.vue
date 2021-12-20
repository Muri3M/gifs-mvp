<template>
  <div class="Container">
    <button @click="myGifs = !myGifs" />
    <Search />
    <DisplayMyGifs v-if="myGifs" />
    <DisplayGifs v-else />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import store from './store';
import GifsApi from './api/GifApi';

import DisplayGifs from './components/DisplayGifs.vue';
import DisplayMyGifs from './components/DisplayMyGifs.vue';

import Search from './components/Search.vue';

window.addEventListener('scroll', () => {
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    store.dispatch('searchCountUp');
    GifsApi();
  }
});

@Options({
  components: { DisplayGifs, DisplayMyGifs, Search },
})
export default class App extends Vue {
  myGifs = false;
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 40px;
  background: #2c3e50;
  background-size: cover;
}
.Container {
  flex: 1;
}
</style>
