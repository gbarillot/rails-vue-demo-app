<template>    
  <section>
    <nav-bar />
    <router-view />
  </section>
</template>


<script>
import NavBar from './_nav.vue';

export default {
  components: {
    'nav-bar': NavBar
  }
}
</script>
