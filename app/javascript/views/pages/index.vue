<template>
  <section class="container">
    <h1>{{ $t('pages.title') }}</h1>

    <p><a href="/dead-link">{{ $t('pages.server_404') }}</a></p>
    <p><router-link to="/dead-link">{{ $t('pages.client_404') }}</router-link></p>
    <p><a @click.prevent="unauthorized" href="#">{{ $t('pages.server_401') }}</a></p>
    <p><a @click.prevent="crash" href="#">{{ $t('pages.server_500') }}</a></p>
    <br />
    <b><a href="admin">{{ $t('pages.admin_link') }}</a></b>
  </section>
</template>

<script setup>
import { MusicianStore } from "@/stores/musician_store";
const store = MusicianStore();

const unauthorized = (() => {
  store.show('this-will-trigger-a-401');        
})
const crash = (() => {
  store.show('this-will-trigger-a-500'); 
})
</script>
