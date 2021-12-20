<template>
  <div class="ui centered card">
    <img :src="gif.images.fixed_height.url" :alt="gif.title" />
    <input class="transparent" v-model="gif.images.fixed_height.url" v-if="edit" />
    <div class="content">
      <div class="header" v-if="edit">
        <input class="transparent" v-model="gif.title" />
      </div>
      <a class="header" :href="gif.url" v-else>{{ gif.title }}</a>

      <div v-if="edit">url: <input class="transparent-url" v-model="gif.url" /></div>

      <div class="meta" v-if="edit">
        Imported on <input class="transparent-time" v-model="gif.import_datetime" />
      </div>

      <div class="meta" v-else>
        <span class="date">Imported on {{ gif.import_datetime }}</span>

        <button class="circular ui icon button" @click="edit = true">
          <i class="edit icon"></i>
        </button>
      </div>
    </div>
    <div class="ui bottom attached button green" @click="editMyGif, (edit = false)" v-if="edit">
      <i class="confirm icon"></i>> Comfirm changes
    </div>
    <div class="ui bottom attached button red" @click="deleteMyGif" v-else>
      <i class="remove icon"></i>
      Delete From Colection
    </div>
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
export default class MyGif extends Vue {
  edit = false;
}
</script>

<style scoped>
.transparent {
  border: none;
  width: 100%;
  padding: 2px;
}
.transparent-url {
  border: none;
  width: 85%;
  margin: 2px;
}
.transparent-time {
  border: none;
  width: 55%;
  margin: 2px;
}
</style>
