<template>
  <div class="ui centered card">
    <img :src="gif.images.fixed_height.url" :alt="gif.title" />

    <div class="content">
      <a class="header" :href="gif.url">{{ gif.title }}</a>
      <div class="meta">
        <span class="date">Imported on {{ gif.import_datetime }}</span>
      </div>
    </div>
    <div class="ui bottom attached button" @click="addMyGif">
      <i class="add icon"></i>
      Add To Colection
    </div>
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
  },
})
export default class Gif extends Vue {}
</script>
