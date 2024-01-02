<template>  
  <section class="filters">
    <a href="#" @click.prevent="toggleForm" class="openable">{{ $t('filter') }}</a>

    <form @submit.prevent="search" ref="filters" accept-charset="UTF-8" class="card hidden">  
      <div class="row">      
        <div class="col-xs-12 col-md-6 col-xl-5"> 
          <label>{{ $t('musicians.form.name') }}</label>    
          <input type="text" v-model="form.name_cont" placeholder="name">
        </div>  
        <div class="col-xs-12 col-md-6 col-xl-4">     
          <label>{{ $t('musicians.form.band') }}</label>
          <select v-model="form.band_eq">
            <option :value="null">{{ $t('any') }}</option>
            <option v-for="band in bands" :key="band.key" :value="band.key">{{ band.name }}</option>
          </select>
        </div> 
        
        <div class="col-xs-12 col-md-2 col-xl-3">
          <label class="hidden-sm hidden-md hidden-lg">&nbsp;</label>
          <input type="submit" role="button" class="button button-primary" :value="$t('filter')">
        </div>
        <div class="col-xs-12 col-md-5">
          <a @click="reset" href="#" class="secondary outline fill">{{ $t('reset_filters') }}</a>
        </div>  
      </div>      
    </form>

  </section>
</template>

<script setup>
const location = useRoute();
const router = useRouter();
const props = defineProps(['bands']);
const filters = ref(null);

const form = () => {
  return {
    name_cont: '',
    band_eq: null
  } 
}

const toggleForm = (e) => {
  e.target.classList.toggle('open');
  filters.value.classList.toggle('hidden');  
}

const search = () => {
  const query = Object.fromEntries(
    Object.entries(form).map(entry => [`q[${entry[0]}]`, entry[1]])
  );
  router.push({path: location.path, query: query});
}

const reset = () => {
  form.name_cont = '';
  form.band_eq = null;
  router.push({path: location.path, query: ''})
}
</script>
