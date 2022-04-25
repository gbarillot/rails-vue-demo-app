<template>
  <h1>{{ store.musician.id }}: {{ store.musician.name }} / {{ store.musician.band }}</h1>
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
