<template>  
  <div class="uk-container">
    <h1>{{ $t('home.title') }}</h1>

    <ul class="uk-breadcrumb uk-margin uk-margin-top">
      <li><router-link :to="{ name: 'root_path' }">{{ $t('home.breadcrumb') }}</router-link></li>
      <li><span>{{ store.musician.name }}</span></li>
    </ul>

    <div class="col-12">
      <h2>{{ $t('musicians.title') }}</h2>
      <p>
        <b>{{ $t('musicians.id') }}:</b> {{ store.musician.id }}<br />
        <b>{{ $t('musicians.name') }}:</b> {{ store.musician.name }}<br /> 
        <b>{{ $t('musicians.band') }}:</b> {{ store.musician.band }}
      </p>
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
    this.$api.call(this.store.show(this.$route.params.id));   
  }
}
</script>
