<template>
  <layout>
    <div class='col-xs-12'>
      <div class="col-xs-24">
        <ul class='breadcrumb pull-left'>
          <li><router-link :to="{ name: 'root_path' }">{{ $t('dashboard.title') }}</router-link>
          <li>{{ $t('users.title') }}</li>
        </ul>
        <div class='pull-right'>
          <router-link :to="{ name: 'new_user_path' }" class='add-link'>{{ $t('users.create') }}</router-link>
        </div>
      </div>
      <table class='table table-striped table-thin'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Created at</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='user in users'>
            <td><router-link :to="{ name: 'edit_user_path', params: { id: user.id }}">{{ user.id }}</router-link></td>
            <td><router-link :to="{ name: 'edit_user_path', params: { id: user.id }}">{{ user.created_at }}</router-link></td>
            <td><router-link :to="{ name: 'edit_user_path', params: { id: user.id }}">{{ user.email }}</router-link></td>
            <td><a href="#" @click="destroy(user.id)">×</a></td>
          </tr>
        </tbody>
      </table>
      <pagination :pagination='pagination'></pagination>
    </div>
  </layout>
</template>

<script>
import Layout from '../shared/layout';
import Pagination from '../shared/_pagination.vue';

export default {
  components: {
    'layout': Layout,
    'pagination': Pagination
  },

  data: function() {
    return this.$store.state.UserStore;
  },

  mounted: function() {
    this.$store.dispatch('UserStore/index');
  },

  methods: {
    destroy: function(user_id) {
      if(confirm(this.$t('confirmation'))) {
        this.$store.dispatch('UserStore/destroy', user_id).then(
          response => {
            this.$store.dispatch('UserStore/index');
          }
        )
      }
    }
  }
}
</script>
