<template>
  <section class="container">
    <div class="row">
      <div class="col-xs-24 col-md-6 card">
        <h3>Rails 7</h3>
        <p><a href="https://edgeguides.rubyonrails.org/" target="_blank">An awesome server side Framework</a></p>
      </div>
      <div class="col-xs-24 col-md-6 card">
        <h3>Vue 3</h3>
        <p><a href="https://vuejs.org/guide/" target="_blank">SPA without the pain</a></p>
      </div>
      <div class="col-xs-24 col-md-6 card">
        <h3>Pinia</h3>
        <p><a href="https://pinia.vuejs.org/" target="_blank">State manager</a></p>
      </div>
      <div class="col-xs-24 col-md-6 card">
        <h3>Vue Router</h3>
        <p><a href="https://router.vuejs.org/" target="_blank">Flexible</a></p>
      </div>
      <div class="col-xs-24 col-md-6 card">
        <h3>Axios</h3>
        <p><a href="https://axios-http.com/docs/intro" target="_blank">Handles AJAX requests, no JQuery</a></p>
      </div>
      <div class="col-xs-24 col-md-6 card">
        <h3>Vite</h3>
        <p><a href="https://vitejs.dev/" target="_blank">Next generation Frontend tooling</a></p>
      </div>
      <div class="col-xs-24 col-md-6 card">
        <h3>Devise</h3>
        <p><a href="https://github.com/heartcombo/devise" target="_blank">Simple authentication using regular cookies that just works</a></p>
      </div>
      <div class="col-xs-24 col-md-6 card">
        <h3>I18n</h3>
        <p><a href="https://kazupon.github.io/vue-i18n/" target="_blank">
          {{ $tc('dashboard.musicians', 0) }}, 
          {{ $tc('dashboard.musicians', 1) }}, 
          {{ store.metrics.musicians + ' ' + $tc('dashboard.musicians', 14) }}</a>
        </p>
      </div>
      <div class="col-xs-24 col-md-6 card">
        <h3>ActionCable</h3>
        <p><a href="https://guides.rubyonrails.org/action_cable_overview.html" target="_blank">Websockets with 2 way bindings</a></p>
      </div>
      <div class="col-xs-24 col-md-6 card">
        <h3>Kaminari</h3>
        <p><a href="https://github.com/kaminari/kaminari" target="_blank">Efficient Pagination</a></p>
      </div>
      <div class="col-xs-24 col-md-6 card">
        <h3>Ransack</h3>
        <p><a href="https://github.com/activerecord-hackery/ransack" target="_blank">ActiveRecord wizardry for dynamic search filters</a></p>
      </div>
      <div class="col-xs-24 col-md-6 card">
        <h3>Bootstrap grid</h3>
        <p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout" target="_blank">... but using native CSS Grid layout</a></p>
      </div>
    </div>
  </section>
</template>

<script>
import { DashboardStore } from "@/admin/stores/dashboard_store";

export default {
  setup() {
    const store = DashboardStore();

    return { store }
  },

  created() {
    this.$api.call(this.store.index());    
  }
}
</script>
