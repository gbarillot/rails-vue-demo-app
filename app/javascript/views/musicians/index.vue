<template>
  <div class="container">
    <h1>{{ $t('home.title') }}</h1>

    <ul class="uk-breadcrumb uk-margin uk-margin-top">
      <li class="breadcrumb-item"><span>{{ $t('home.breadcrumb') }}</span></li>
    </ul>

    <!-- <ul>
      <li v-for="musician in store.musicians" :key="musician.id">
        <router-link :to="{ name: 'musician_path', params: {id: musician.id}}">{{ musician.name }}</router-link>
      </li>
    </ul> -->
    
    <div class="row">
      <div class="col-xs-24 col-md-4"></div>
      <div class="col-xs-24 col-md-4"></div>
      <div class="col-xs-24 col-md-4"></div>
      <div class="col-xs-24 col-md-4 col-start-md-18"></div>
      <div class="col-xs-24 col-md-4"></div>
      <div class="col-xs-24 col-md-4"></div>
      <div class="col-xs-24 col-md-4"></div>
      <div class="col-xs-24 col-md-4"></div>
      <div class="col-xs-24 col-md-4"></div>
    </div>
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
