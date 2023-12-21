<template>  
  <section class="container">
    <ul class="breadcrumb">
      <li><router-link :to="{ name: 'root_path' }">{{ $t('title') }}</router-link></li>
      <li><router-link :to="{ name: 'musicians_path' }">{{ $t('nav.musicians') }}</router-link></li>
      <li><span>{{ $t('musicians.new') }}</span></li>
    </ul>

    <div ref="animation">
      <form @submit.prevent="create" accept-charset="UTF-8" class="card">
        <MusicianForm :data="store" /> 

        <div class="row">
          <div class="col-sm-4 col-start-sm-21 ta-right">
            <input type="submit" :value="$t('save')" />      
          </div>
        </div>
      </form>
    </div> 
  </section>
</template>

<script setup>
import MusicianForm from "./_form.vue";
const store = MusicianStore();
const location = useRoute();

const create = (event => {
  store.create(location.params.id);
});

onMounted(() => {
  store.new(location.params.id)
});
</script>
