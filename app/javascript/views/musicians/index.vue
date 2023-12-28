<template>
  <section class="container">
    <h1>{{ $t('home.title') }}</h1>

    <ul class="breadcrumb">
      <li><span>{{ $t('home.breadcrumb') }}</span></li>
    </ul>

    <div class="row">
      <div v-for="musician in store.musicians" :key="musician.id" class="col-xs-24 col-md-6 card">
        <router-link :to="{ name: 'musician_path', params: {id: musician.id}}">{{ musician.name }}</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>  
import { MusicianStore } from "@/stores/musician_store.js";
const store = MusicianStore();

onMounted(() => {
  store.index()
});
</script>
