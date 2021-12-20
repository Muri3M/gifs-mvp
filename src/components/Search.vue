<template>
  <div class="ui sticky">
    <form @submit.prevent="setSearch" class="Search">
      <div class="ui search">
        <div class="ui icon input">
          <input
            class="prompt"
            type="text"
            placeholder="Enter with your search..."
            v-model="search"
          />
          <i class="search icon"></i>
        </div>
      </div>
    </form>
  </div>
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
    this.search = '';
  }
}
</script>

<style scoped>
.Search {
  margin-bottom: 30px;
}
</style>
