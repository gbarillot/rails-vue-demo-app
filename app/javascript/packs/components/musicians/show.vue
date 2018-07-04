<template>
  <layout>
    <div class='col-xs-12'>
      <h2>{{ musician.name }}</h2>
      <p>{{ $t('musicians.details') }}</p>
      <ul>
        <li>{{ $t('musicians.id') }}: {{ musician.id }}</li>
        <li>{{ $t('musicians.name') }}: {{ musician.name }}</li>
        <li>{{ $t('musicians.band') }}: {{  musician.band }}</li>
      </ul>
    </div>
  </layout>
</template>

<script>
import Layout from '../shared/layout';

export default {
  components: {
    Layout
  },

  data: function() {
    return this.$store.state.MusicianStore;
  },

  mounted: function() {
    this.$store.dispatch('MusicianStore/show', this.$route.params.id)
  }
}
</script>
