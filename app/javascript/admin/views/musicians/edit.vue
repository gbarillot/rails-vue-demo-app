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
        <div class="col-sm-4">
          <a @click="destroy" href="#" role="button" class="secondary outline">{{ $t('delete') }}</a> 
        </div>
        <div class="col-sm-4 col-start-sm-21">
          <input type="submit" :value="$t('save')" />      
        </div>
      </div>
    </form>
  
  </section>
</template>

<script setup>
const router = useRouter();
const location = useRoute();
const { t } = useI18n({});

import MusicianForm from "./_form.vue";
const store = MusicianStore();

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
