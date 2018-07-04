<template>
  <layout>
    <div class='col-xs-12'>
      <ul class='breadcrumb pull-left'>
        <li><router-link :to="{ name: 'root_path' }">{{ $t('dashboard.title') }}</router-link>
        <li><router-link :to="{ name: 'users_path' }">{{ $t('users.title')}}</router-link>
        <li>{{ $t('users.creating_user')}}</li>
      </ul>
    </div>
    <div class='col-xs-12'>
      <form v-on:submit.prevent="create" accept-charset="UTF-8" class="form">
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
    this.$store.dispatch('UserStore/new', this.$route.params.id)
  },

  methods: {
    create: function() {
      this.$store.dispatch('UserStore/create', this.user).then(
        response => {
          this.$router.push({name: 'edit_user_path', params: {id: response.user.id}})
        }
      )
    }
  }
}
</script>
