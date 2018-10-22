<template>
  <layout>
    <div class='col-xs-12'>
      <ul class='breadcrumb pull-left'>
        <li><router-link :to="{ name: 'root_path' }">{{ $t('dashboard.title') }}</router-link>
        <li><router-link :to="{ name: 'musicians_path' }">{{ $t('musicians.title') }}</router-link>
        <li>{{ $t('musicians.editing_musician')}}</li>
      </ul>
    </div>
    <div class='col-xs-12'>
      <form v-on:submit.prevent="update" accept-charset="UTF-8" class="form">
        <form-musician></form-musician>
      </form>
    </div>
  </layout>
</template>

<script>
import Layout from '../shared/layout';
import FormMusician from './_form.vue';

export default {
  components: {
    'layout': Layout,
    'form-musician': FormMusician
  },

  data: function() {
    return this.$store.state.MusicianStore;
  },

  mounted: function() {
    this.$store.dispatch('MusicianStore/edit', this.$route.params.id)
  },

  methods: {
    update: function() {
      this.$store.dispatch('MusicianStore/update', this.musician)
    }
  }
}
</script>
