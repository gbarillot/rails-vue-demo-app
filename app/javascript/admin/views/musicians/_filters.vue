<template>  
  <section>
    <a href="#" @click.prevent="toggleForm"><span uk-icon="icon: search; ratio: 1"></span>&nbsp;{{ $t('filter') }}</a>

    <div ref="filters" class="uk-padding uk-background-muted uk-panel uk-hidden uk-margin-top">
      <form @submit.prevent="search" accept-charset="UTF-8" class="uk-grid" uk-grid>        
        <div class="uk-width-1-2@s"> 
          <label class="uk-form-label">{{ $t('musicians.form.name') }}</label>    
          <input type="text" v-model="form.name_cont" class="uk-input" placeholder="name">
        </div>  
        <div class="uk-width-1-2@s">     
          <label class="uk-form-label">{{ $t('musicians.form.band') }}</label>
          <select v-model="form.band_eq" class="uk-select">
            <option :value="null">{{ $t('any') }}</option>
            <option v-for="band in bands" :key="band.key" :value="band.key">{{ band.name }}</option>
          </select>
        </div> 
        <div>
          <input type="submit" class="uk-button uk-button-primary" :value="$t('filter')">
          &nbsp;
          <a @click="reset" href="#" class="uk-button uk-button-default">{{ $t('reset_filters') }}</a>
        </div>        
      </form>
    </div>
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
      this.$refs.filters.classList.toggle('uk-hidden');
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
