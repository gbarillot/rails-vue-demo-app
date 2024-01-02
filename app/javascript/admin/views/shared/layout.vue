<template>    
  <main>
    <nav-bar />
    <router-view />
  </main>
  <bottom />
</template>

<script setup>
import NavBar from './_nav.vue';
import Bottom from '@/views/shared/_footer.vue';
</script>
