<template>
  <div>
    <div class="uk-container ">
      <router-link :to="{name: 'new_musician_path'}" a class="uk-button uk-button-default uk-button-primary uk-float-right uk-margin-top">{{ $t('musicians.create') }}</router-link>
      <ul class="uk-breadcrumb uk-margin uk-margin-top">
        <li><router-link :to="{name: 'root_path'}">{{ $t('title') }}</router-link></li>
        <li><span>{{ $t('nav.musicians') }}</span></li>
      </ul>
    </div>

    <div class="uk-container uk-margin">
      <filters :bands="store.bands" />
    </div>

    <div v-if="store.loaded == true" class="uk-container">
      <table v-if="store.musicians.length > 0" class="uk-table uk-table-divider">
        <thead>
          <tr>
            <th>{{ $t('musicians.form.id') }}</th>
            <th>{{ $t('musicians.form.name') }}</th>
            <th>{{ $t('musicians.form.band') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="musician in store.musicians" :key="musician.id">
            <td><router-link :to="{ name: 'edit_musician_path', params: {id: musician.id}}">{{ musician.id }}</router-link></td>
            <td><router-link :to="{ name: 'edit_musician_path', params: {id: musician.id}}">{{ musician.name }}</router-link></td>
            <td><router-link :to="{ name: 'edit_musician_path', params: {id: musician.id}}">{{ musician.band }}</router-link></td>
          </tr>
        </tbody>
      </table>
      <div v-else>
        <h3 class="uk-text-center uk-margin-large">{{ $t('no_result') }}</h3>
      </div>
    </div>

    <pagination v-if="store.pagination" :store="store" @clicked="index"></pagination>
  </div>
</template>

<script>
import { MusicianStore } from "@/admin/stores/musician_store";
import Filters from './_filters.vue';
import Pagination from '../shared/_pagination.vue';

export default {
  components: {
    Pagination,
    Filters
  },

  setup() {
    const store = MusicianStore();

    return { store }
  },

  created() {
    this.index();
  },

  methods: {
    index() {
      this.store.index(this.$route.fullPath)
    }
  }
}
</script>
