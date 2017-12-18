<template>
  <div class='container'>
    <nav-top></nav-top>

    <div class='row'>
      <div class='col-xs-12'>
        <h2>{{ musician.name }}</h2>
        <p>{{ $t('musicians.details') }}</p>
        <ul>
          <li>{{ $t('musicians.id') }}: {{ musician.id }}</li>
          <li>{{ $t('musicians.name') }}: {{ musician.name }}</li>
          <li>{{ $t('musicians.band') }}: {{  musician.band }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data: function() {
    return this.$store.state.MusicianStore;
  },

  mounted: function() {
    this.$store.dispatch('MusicianStore/show', this.$route.params.id)
  }
}
</script>
