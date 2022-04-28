<template>  
  <div>
    <div class="uk-container ">
      <ul class="uk-breadcrumb uk-margin uk-margin-top">
        <li><router-link :to="{ name: 'root_path' }">{{ $t('title') }}</router-link></li>
        <li><router-link :to="{ name: 'musicians_path' }">{{ $t('nav.musicians') }}</router-link></li>
        <li><span>{{ $t('musicians.new') }}</span></li>
      </ul>

      <form @submit.prevent="create" accept-charset="UTF-8" class="uk-form-stacked uk-padding-large uk-background-muted">
        <MusicianForm :data="store" /> 

        <a @click="destroy" href="#" class="uk-button uk-button-danger uk-button-large uk-margin">{{ $t('delete') }}</a> 
        <input type="submit" value="Save" class="uk-button uk-button-primary uk-button-large uk-margin uk-float-right" />      
      </form>
    </div>
  </div>
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

  created() {
    this.store.new();
  },

  methods: {
    create(form) {
      this.$messenger.call(form, this.store.create()).then(response => {
        if(response === true) {
          this.$router.push({name: 'edit_musician_path', params: {id: this.store.musician.id}})
        }
      })
    }
  }
}
</script>
