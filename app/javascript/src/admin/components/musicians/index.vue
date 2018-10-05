<template>
  <layout>
    <div class="col-xs-12">
      <ul class="breadcrumb pull-left">
        <li><router-link :to="{ name: 'root_path' }">{{ $t('dashboard.title') }}</router-link>
        <li>{{ $t('musicians.title') }}</li>
      </ul>
      <div class="pull-right">
        <router-link :to="{ name: 'new_musician_path' }" class="add-link">{{ $t('musicians.create') }}</router-link>
      </div>
      <div class="clearfix"></div>

      <filters :bands="bands"></filters>

      <table class="table table-striped table-thin">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Band</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='musician in musicians'>
            <td><router-link :to="{ name: 'edit_musician_path', params: { id: musician.id }}">{{ musician.id }}</router-link></td>
            <td><router-link :to="{ name: 'edit_musician_path', params: { id: musician.id }}">{{ musician.name }}</router-link></td>
            <td>{{ musician.band }}</td>
            <td><a href="#" @click="destroy(musician.id)">×</a></td>
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
import Filters from './_filters.vue';

export default {
  components: {
    'layout': Layout,
    'pagination': Pagination,
    'filters': Filters
  },

  data: function() {
    return this.$store.state.MusicianStore;
  },

  mounted: function() {
    this.$store.dispatch('MusicianStore/index', this.$route.query);
  },

  methods: {
    destroy: function(user_id) {
      if(confirm(this.$t('confirmation'))) {
        this.$store.dispatch('MusicianStore/destroy', user_id).then(
            () => {
            this.$store.dispatch('MusicianStore/index');
          }
        )
      }
    }
  }
}
</script>
