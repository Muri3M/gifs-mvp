<template>
  <div class="Display-My-Gifs">
    <MyGif v-for="(gif, i) in $store.state.myGifs" :key="i" :gif="gif" />
  </div>
</template>

<script Lang="ts">
import { Options, Vue } from 'vue-class-component';
import MyGif from './MyGif.vue';

@Options({
  components: { MyGif },
})
export default class DisplayGifs extends Vue {}
</script>
