<template>
  <div class="Search">
    <gif v-for="(gif, i) in $store.state.gifs" :key="i" :gif="gif" />
  </div>
</template>

<script Lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})
export default class Search extends Vue {}
</script>
