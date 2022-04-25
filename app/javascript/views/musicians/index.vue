<template>
  <h1>{{ $t('home.title') }}</h1>
  <ul>
    <li v-for="musician in store.musicians" :key="musician.id">
      <router-link :to="{ name: 'musician_path', params: {id: musician.id}}">{{ musician.name }}</router-link>
    </li>
  </ul>
</template>

<script>
import { MusicianStore } from "@/stores/musician_store";

export default {
  setup() {
    const store = MusicianStore();

    return { store }
  },

  created() {
    this.store.index()
  }
}
</script>
