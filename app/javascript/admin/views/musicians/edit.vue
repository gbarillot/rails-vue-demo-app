<template>  
  <section>
    <div class="uk-container ">
      <ul class="uk-breadcrumb uk-margin uk-margin-top">
        <li><router-link :to="{ name: 'root_path' }">{{ $t('title') }}</router-link></li>
        <li><router-link :to="{ name: 'musicians_path' }">{{ $t('nav.musicians') }}</router-link></li>
        <li><span>{{ store.musician.name }}</span></li>
      </ul>

      <div ref="formSection">
        <form ref="form" @submit.prevent="update" accept-charset="UTF-8" class="uk-form-stacked uk-padding-large uk-background-muted">
          <MusicianForm :data="store" /> 

          <a @click="destroy" href="#" class="uk-button uk-button-danger uk-button-large uk-margin">{{ $t('delete') }}</a> 
          <input type="submit" value="Save" class="uk-button uk-button-primary uk-button-large uk-margin uk-float-right" />      
        </form>
      </div>
      <spinner />

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
    this.$api.call(this.$refs.formSection, this.store.edit(this.$route.params.id));
  },

  methods: {
    update(form) {
      this.$api.call(form.target, this.store.update(this.$route.params.id));
    },
    destroy(e) {
      if(confirm(this.$t('confirmation'))) {
        this.$api.call(e.target.parentNode, this.store.destroy(this.$route.params.id)).then(response => {
          if(response === true) {
            this.$router.push({name: 'musicians_path'})
          } 
        })
      }      
    }
  }
}
</script>
