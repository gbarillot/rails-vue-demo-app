<template>
  <div class="uk-container">
    <h1>{{ $t('home.title') }}</h1>

    <ul class="uk-breadcrumb uk-margin uk-margin-top">
      <li class="breadcrumb-item"><span>{{ $t('home.breadcrumb') }}</span></li>
    </ul>

    <ul>
      <li v-for="musician in store.musicians" :key="musician.id">
        <router-link :to="{ name: 'musician_path', params: {id: musician.id}}">{{ musician.name }}</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
import { MusicianStore } from "@/stores/musician_store";

export default {
  setup() {
    const store = MusicianStore();

    return { store }
  },

  created() {
    this.$api.call(this.store.index());    
  }
}
</script>
