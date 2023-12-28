<template>  
  <section class="container">
    <h1>{{ $t('home.title') }}</h1>

    <ul class="breadcrumb">
      <li><router-link :to="{ name: 'root_path' }">{{ $t('home.breadcrumb') }}</router-link></li>
      <li>{{ store.musician.name }}</li>
    </ul>

    <h2>{{ $t('musicians.title') }}</h2>
    <p>
      <b>{{ $t('musicians.id') }}:</b> {{ store.musician.id }}<br />
      <b>{{ $t('musicians.name') }}:</b> {{ store.musician.name }}<br /> 
      <b>{{ $t('musicians.band') }}:</b> {{ store.musician.band }}
    </p>
  </section>
</template>

<script setup>
import { MusicianStore } from "@/stores/musician_store.js";
const store = MusicianStore();
const location = useRoute();

onMounted(() => {
  store.show(location.params.id)
});
</script>