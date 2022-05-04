<template>  
  <section class="container">
    <ul class="breadcrumb">
      <li><router-link :to="{ name: 'root_path' }">{{ $t('title') }}</router-link></li>
      <li><router-link :to="{ name: 'musicians_path' }">{{ $t('nav.musicians') }}</router-link></li>
      <li>{{ store.musician.name }}</li>
    </ul>

    <div ref="animation">
      <form ref="form" @submit.prevent="update" accept-charset="UTF-8" class="card">
        <MusicianForm :data="store" /> 

        <div class="row">
          <div class="col-sm-4 secondary outline">
            <a @click="destroy" href="#" role="button" class="secondary outline">{{ $t('delete') }}</a> 
          </div>
          <div class="col-sm-4 col-start-sm-21 ta-right">
            <input type="submit" :value="$t('save')" />      
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { MusicianStore } from "@/admin/stores/musician_store";
import MusicianForm from "./_form.vue";

export default {
  components: {
    MusicianForm
  },

  setup() {
    const store = MusicianStore();
    
    return { store }
  },

  mounted() {
    this.$api.call(this.store.edit(this.$route.params.id), this.$refs.animation);
  },

  methods: {
    update(form) {
      this.$api.call(this.store.update(this.$route.params.id), form.target);
    },
    destroy() {
      if(confirm(this.$t('confirm'))) {
        this.$api.call(this.store.destroy(this.$route.params.id), this.$refs.animation).then(response => {
          if(response === true) {
            this.$router.push({name: 'musicians_path'})
          } 
        })
      }      
    }
  }
}
</script>
