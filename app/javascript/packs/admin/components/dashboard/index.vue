<template>
  <div>
    <nav-top></nav-top>
    <div class='container-fluid'>

      <div class='row'>
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
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return this.$store.state.DashboardStore;
  },

  mounted: function() {
    this.$store.dispatch('DashboardStore/index');
  }
}
</script>
