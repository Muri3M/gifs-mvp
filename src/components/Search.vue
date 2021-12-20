<template>
  <form @submit.prevent="setSearch" class="Search">
    <input type="text" v-model="search" />
    <button type="submit">load</button>
  </form>
</template>

<script Lang="ts">
import { Options, Vue } from 'vue-class-component';
import GifsApi from '../api/GifApi';
import store from '../store';

@Options({
  methods: { GifsApi },
})
export default class Search extends Vue {
  search = '';

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setSearch() {
    store.dispatch('setSearch', this.search);
    GifsApi();
  }
}
</script>
