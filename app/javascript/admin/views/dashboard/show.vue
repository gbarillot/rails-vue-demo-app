<template>  
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-12">
          <h1>{{ $t('home.title') }}</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link :to="{ name: 'root_path' }">{{ $t('home.breadcrumb') }}</router-link></li>
              <li class="breadcrumb-item active">{{ store.musician.name }}</li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h2>{{ $t('musicians.title') }}</h2>
          <p>
            <b>{{ $t('musicians.id') }}:</b> {{ store.musician.id }}<br />
            <b>{{ $t('musicians.name') }}:</b> {{ store.musician.name }}<br /> 
            <b>{{ $t('musicians.band') }}:</b> {{ store.musician.band }}
          </p>
        </div>
      </div>
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
    this.store.show(this.$route.params.id)
  }
}
</script>
