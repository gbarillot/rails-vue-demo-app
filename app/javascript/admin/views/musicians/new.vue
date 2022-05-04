<template>  
  <section class="container">
    <ul class="breadcrumb">
      <li><router-link :to="{ name: 'root_path' }">{{ $t('title') }}</router-link></li>
      <li><router-link :to="{ name: 'musicians_path' }">{{ $t('nav.musicians') }}</router-link></li>
      <li><span>{{ $t('musicians.new') }}</span></li>
    </ul>

    <div ref="animation">
      <form @submit.prevent="create" accept-charset="UTF-8" class="card">
        <MusicianForm :data="store" /> 

        <div class="row">
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
    MusicianForm,
  },

  setup() {
    const store = MusicianStore();
    
    return { store }
  },

  mounted() {
    this.$api.call(this.store.new(), this.$refs.animation) 
  },

  methods: {
    create(form) {
      this.$api.call(this.store.create(), form.target).then(response => {
        if(response === true) {
          this.$router.push({name: 'edit_musician_path', params: {id: this.store.musician.id}})
        }
      })
    }
  }
}
</script>
