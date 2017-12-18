<template>
  <div class="filters">
    <a href='#' @click='toggleFilters' class='toggle'>+ {{ $t('filter') }}</a>
    <div class='col-xs-12 well hidden'>
      <div class='form-group col-md-5'>
        <label>{{ $t('activerecord.models.musician.name') }}</label>
        <input type="text" v-model="form.name_cont" class="form-control">
      </div>
      <div class='form-group col-md-5'>
        <label>{{ $t('activerecord.models.musician.band') }}</label>
        <select v-model="form.band_eq" class="form-control">
          <option v-for="band in bands" :value="band.key">{{ band.name }}</option>
        </select>
      </div>
      <div class='form-group col-md-2'>
        <label></label>
        <a href='#' @click='filterResults' class='btn btn-primary'>{{ $t('filter') }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['bands'],

  data: function() {
    return {
      form: Object
    }
  },

  mounted: function() {
    this.form = {
      name_cont: '',
      band_eq: null
    }
  },

  methods: {
    toggleFilters: function() {
      window.$('.filters .well').toggleClass('hidden');
    },
    filterResults: function() {
      let query = {}
      for(let el in this.form) {
        query["q["+el+"]"] = this.form[el];
      };
      this.$router.push({path: this.$route.path, query: query})
    }
  }
}
</script>
