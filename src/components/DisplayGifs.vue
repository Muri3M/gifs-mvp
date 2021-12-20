<template>
  <div class="Display-Gifs">
    <gif v-for="(gif, i) in $store.state.gifs" :key="i" :gif="gif" />
  </div>
</template>

<script Lang="ts">
import { Options, Vue } from 'vue-class-component';
import Gif from './Gif.vue';

@Options({
  components: { Gif },
})
export default class DisplayGifs extends Vue {}
</script>
