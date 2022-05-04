<template>  
  <section>
    <a href="#" @click.prevent="toggleForm">&nbsp;{{ $t('filter') }}</a>

    <form @submit.prevent="search" ref="filters" accept-charset="UTF-8" class="card hidden">  
      <div class="row">      
        <div class="col-xs-24 col-md-10"> 
          <label>{{ $t('musicians.form.name') }}</label>    
          <input type="text" v-model="form.name_cont" placeholder="name">
        </div>  
        <div class="col-xs-24 col-md-10">     
          <label>{{ $t('musicians.form.band') }}</label>
          <select v-model="form.band_eq">
            <option :value="null">{{ $t('any') }}</option>
            <option v-for="band in bands" :key="band.key" :value="band.key">{{ band.name }}</option>
          </select>
        </div> 
      </div>
      <div class="row">
        <div class="col-xs-24 col-md-5">
          <input type="submit" role="button" class="button button-primary" :value="$t('filter')">
        </div>
        <div class="col-xs-24 col-md-5">
          <a @click="reset" href="#" role="button" class="secondary outline fill">{{ $t('reset_filters') }}</a>
        </div>  
      </div>      
    </form>

  </section>
</template>

<script>

export default {
  props: ['bands'],
  
  data: function() {
    return {
      form: {
        name_cont: '',
        band_eq: null
      }
    }
  },

  methods: {
    toggleForm() {
      this.$refs.filters.classList.toggle('hidden');
    },
    search() {
      const query = Object.fromEntries(
        Object.entries(this.form).map(entry => [`q[${entry[0]}]`, entry[1]])
      );
      this.$router.push({path: this.$route.path, query: query});
      this.$emit('index');
    },
    reset() {
      this.form = {
        name_cont: '',
        band_eq: null
      }
      this.$router.push({path: this.$route.path, query: ''})
    },
  }
}
</script>
