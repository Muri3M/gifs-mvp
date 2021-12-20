<template>
  <div class="Gif">
    <img :src="gif.images.fixed_height.url" :alt="gif.title" />
    <button @click="editMyGif">edit</button>
    <button @click="deleteMyGif">delete</button>
  </div>
</template>

<script Lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: ['gif'],
  methods: {
    deleteMyGif() {
      this.$store.dispatch('deleteMyGif', this.gif);
    },
    editMyGif() {
      this.$store.dispatch('editMyGif', this.gif);
    },
  },
})
export default class MyGif extends Vue {}
</script>
