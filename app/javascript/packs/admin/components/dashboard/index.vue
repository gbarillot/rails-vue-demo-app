<template>
  <layout>
    <div class='col-xs-12 col-md-6 wrapper'>
      <router-link :to="{name: 'musicians_path'}" class='circle success'>
        {{ metrics.musicians }}<br />{{ $tc('dashboard.musician', metrics.musicians) }}
      </router-link>
    </div>
    <div class='col-xs-12 col-md-6 wrapper'>
      <router-link :to="{name: 'users_path'}" class='circle warning'>
        {{ metrics.users }}<br />{{ $tc('dashboard.user', metrics.users) }}
      </router-link>
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
    return this.$store.state.DashboardStore;
  },

  mounted: function() {
    this.$store.dispatch('DashboardStore/index');
  }
}
</script>
