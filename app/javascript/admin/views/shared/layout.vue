<template>    
  <div class="container-fluid">
    <nav-bar />
    <router-view />
  </div>
</template>


<script>
import NavBar from './_nav.vue';

export default {
  components: {
    'nav-bar': NavBar
  }
}
</script>
