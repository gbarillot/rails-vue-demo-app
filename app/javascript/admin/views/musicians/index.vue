<template>
  <section class="container">
    <div class="row">
      <div class="col-xs-12">      
        <ul class="breadcrumb">
          <li><router-link :to="{name: 'root_path'}">{{ $t('title') }}</router-link></li>
          <li>{{ $t('nav.musicians') }}</li>
        </ul>
      </div>
      <div class="col-xs-12 ta-right">
        <router-link :to="{name: 'new_musician_path'}" role="button" class="outline">{{ $t('musicians.create') }}</router-link> 
      </div>
    </div>

    <filters :bands="store.bands" />
 
    <div ref="listing" >
      <table v-if="store.musicians && store.musicians.length > 0">
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
        <h3 class="card ta-center">{{ $t('no_result') }}</h3>
      </div>

      <pagination v-if="store.pagination" :store="store" @clicked="index"></pagination>
    </div>

    <p>This whole CRUD section is deliberatly slowed down so you can actually see the animations. Comment out the "slow" method in Api::Admin::MusiciansController to use the app at full speed</p>
  </section>
</template>

<script>
import { MusicianStore } from "@/admin/stores/musician_store";
import Filters from './_filters.vue';

export default {
  components: {
    Filters
  },

  setup() {
    const store = MusicianStore();

    return { store }
  },

  mounted() {
    this.index();
  },

  methods: {
    index() {
      this.$api.call(this.store.index(this.$route.fullPath), this.$refs.listing);
    }
  }
}
</script>
