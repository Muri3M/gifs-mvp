<template>
  <div class="Gif">
    <img :src="gif.images.fixed_height.url" :alt="gif.title" />
    <button @click="addMyGif">add</button>
  </div>
</template>

<script Lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: ['gif'],
  methods: {
    addMyGif() {
      this.$store.dispatch('addMyGif', this.gif);
    },
    View() {
      return this.gif.fullName();
    },
  },
})
export default class Gif extends Vue {}
</script>
