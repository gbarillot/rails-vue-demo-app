<template>
  <layout>
    <div class='col-xs-12'>
      <ul class='breadcrumb pull-left'>
        <li><router-link :to="{ name: 'root_path' }">{{ $t('dashboard.title') }}</router-link>
        <li><router-link :to="{ name: 'users_path' }">{{ $t('users.title')}}</router-link>
        <li>{{ $t('users.editing_user')}}</li>
      </ul>
    </div>
    <div class='col-xs-12'>
      <form v-on:submit.prevent="update" accept-charset="UTF-8" class="form">
        <form-user></form-user>
      </form>
    </div>
  </layout>
</template>

<script>
import Layout from '../shared/layout';
import FormUser from './_form.vue';

export default {
  components: {
    'layout': Layout,
    'form-user': FormUser
  },

  data: function() {
    return this.$store.state.UserStore;
  },

  mounted: function() {
    this.$store.dispatch('UserStore/edit', this.$route.params.id)
  },

  methods: {
    update: function() {
      this.$store.dispatch('UserStore/update', this.user).then(
        response => {
          this.$router.push({name: 'users_path'})
      });
    }
  }
}
</script>
