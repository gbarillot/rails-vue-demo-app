<template>
  <section class="container">
    <div class="row">
      <div class="col-xs-12 col-lg-8 col-xl-9">      
        <ul class="breadcrumb">
          <li><router-link :to="{name: 'root_path'}">{{ $t('title') }}</router-link></li>
          <li>{{ $t('nav.musicians') }}</li>
        </ul>
      </div>
      <div class="col-xs-12 col-lg-4 col-xl-3 ta-right">
        <router-link :to="{name: 'new_musician_path'}" role="button" class="outline" style="width: 100%">{{ $t('musicians.create') }}</router-link> 
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
  </section>
</template>

<script setup>
import Filters from './_filters.vue';
import Pagination from '../shared/_pagination.vue';

import { MusicianStore } from "@/admin/stores/musician_store.js";
const store = MusicianStore();

const location = useRoute();
const index = (event => {  
  store.index(location.fullPath)
});

onMounted(() => {
  index(); 
});
</script>
