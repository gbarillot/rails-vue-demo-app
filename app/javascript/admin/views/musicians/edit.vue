<template>  
  <div>
    <div class="uk-container ">
      <ul class="uk-breadcrumb uk-margin uk-margin-top">
        <li><router-link :to="{ name: 'root_path' }">{{ $t('title') }}</router-link></li>
        <li><router-link :to="{ name: 'musicians_path' }">{{ $t('nav.musicians') }}</router-link></li>
        <li><span>{{ store.musician.name }}</span></li>
      </ul>

      <form @submit.prevent="update" accept-charset="UTF-8" class="uk-form-stacked uk-padding-large uk-background-muted">
        <MusicianForm :data="store" />       
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
    this.store.show(this.$route.path)
  },

  methods: {
    update(form) {
      this.$messenger.call(form, this.store.update(this.$route.path));
    }
  }
}
</script>
