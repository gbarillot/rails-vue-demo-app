<template>
  <div>
    <div class="uk-container ">
      <ul class="uk-breadcrumb uk-margin uk-margin-top">
        <li><router-link :to="{ name: 'root_path' }">{{ $t('title') }}</router-link></li>
        <li><span>{{ $t('nav.musicians') }}</span></li>
      </ul>
    </div>

    <div class="uk-container uk-margin">
      <filters />
    </div>

    <div class="uk-container">
      <table class="uk-table uk-table-divider">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Band</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="musician in store.musicians" :key="musician.id">
            <td><router-link :to="{ name: 'musician_path', params: {id: musician.id}}">{{ musician.id }}</router-link></td>
            <td><router-link :to="{ name: 'musician_path', params: {id: musician.id}}">{{ musician.name }}</router-link></td>
            <td><router-link :to="{ name: 'musician_path', params: {id: musician.id}}">{{ musician.band }}</router-link></td>
          </tr>
        </tbody>
      </table>
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
