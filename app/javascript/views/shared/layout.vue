<template>
  <div>
    <nav-bar />
    <div class='container-fluid'>
      <div class='row'>
        <router-view />
      </div>
    </div>
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
