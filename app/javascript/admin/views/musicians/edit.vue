<template>  
  <section class="container">
    <ul class="breadcrumb">
      <li><router-link :to="{ name: 'root_path' }">{{ $t('title') }}</router-link></li>
      <li><router-link :to="{ name: 'musicians_path' }">{{ $t('nav.musicians') }}</router-link></li>
      <li>{{ store.musician.name }}</li>
    </ul>

    <form @submit.prevent="update" class="card" :class="store.progress">
      <MusicianForm :data="store" /> 

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-md-9 col-lg-10 hidden-xs">
          <a @click="destroy" href="#" role="button" class="secondary outline">{{ $t('delete') }}</a> 
        </div>
        <div class="col-xs-12 col-sm-4 col-md-3 col-lg-2 ta-right">
          <input type="submit" :value="$t('save')" />      
        </div>
        <a @click="destroy" href="#" class="visible-xs">{{ $t('delete') }}</a>
      </div>
    </form>
  
  </section>
</template>

<script setup>
import MusicianForm from "./_form.vue";
import { MusicianStore } from "@/admin/stores/musician_store.js";
const store = MusicianStore();

const router = useRouter();
const location = useRoute();
const { t } = useI18n({});

const update = (event => {
  store.update(location.params.id);
});

const destroy = (event => {
  if(confirm(t('confirm'))) {
    store.destroy(location.params.id).then(response => {
      router.push({name: 'musicians_path'});
    })
  }  
});

onMounted(() => {
  store.edit(location.params.id)
});
</script>
