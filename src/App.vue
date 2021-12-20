<template>
  <div>
    <button @click="GifsApi('hi')">load</button>
    <DisplayGifs />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import DisplayGifs from './components/DisplayGifs.vue';
import GifsApi from './api/GifApi';

@Options({
  components: { DisplayGifs },
  methods: { GifsApi },
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
