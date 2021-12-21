<template>
  <div class="Container">
    <div class="Header">
      <img class="logo" src="./assets/Rebel_Alliance_logo.png" />
      <h1>Alliance of Gifs</h1>
    </div>
    <div class="ui grey two item inverted menu">
      <a :class="gifsClass" @click="(myGifs = false), (myGifsClass = inative), (gifsClass = active)"
        >Gifs</a
      >
      <a
        :class="myGifsClass"
        @click="(myGifs = true), (myGifsClass = active), (gifsClass = inative)"
        >My Gifs</a
      >
    </div>
    <div class="Spacing" v-if="myGifs" />
    <Search v-else />
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

  myGifsClass = 'item';

  gifsClass = 'item active';

  active = 'item active';

  inative = 'item';
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
  background: #2c3e50;
  background-size: cover;
  min-height: 100vh;
}
.Spacing {
  height: 67px;
}
.Header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 30px;
}
.logo {
  width: 40px;
  height: 40px;
  margin-top: 20px;
  margin-right: 20px;
}
</style>
