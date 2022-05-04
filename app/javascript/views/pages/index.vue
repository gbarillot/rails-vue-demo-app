<template>
  <section class="container">
    <h1>{{ $t('pages.title') }}</h1>

    <p><a href="/dead-link">{{ $t('pages.server_404') }}</a></p>
    <p><router-link to="/dead-link">{{ $t('pages.client_404') }}</router-link></p>
    <p><a @click.prevent="unauthorized" href="#">{{ $t('pages.server_401') }}</a></p>
    <p><a @click.prevent="crash" href="#">{{ $t('pages.server_500') }}</a></p>
    <br />
    <p><a href="/admin">{{ $t('pages.admin_link') }}</a></p>
  </section>
</template>


<script>
import { MusicianStore } from "@/stores/musician_store";

export default {
  setup() {
    const store = MusicianStore();

    return { store }
  },

  methods: {
    unauthorized() {
      this.$api.call(this.store.show('this-will-trigger-a-401'));        
    },
    crash() {
      this.$api.call(this.store.show('this-will-trigger-a-500')); 
    }
  }

}
</script>