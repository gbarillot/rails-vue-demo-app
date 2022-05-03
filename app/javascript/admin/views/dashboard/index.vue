<template>
  <section class="uk-container uk-margin-top">
    <div class="uk-child-width-1-4@s" uk-grid>
      <div>
        <div class="uk-card uk-card-default uk-card-small uk-card-body uk-card-hover">
          <h3 class="uk-card-title">Rails 7</h3>
          <p><a href="https://edgeguides.rubyonrails.org/" target="_blank">An awesome server side Framework</a></p>
      </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-small uk-card-body uk-card-hover">
          <h3 class="uk-card-title">Vue 3</h3>
          <p><a href="https://vuejs.org/guide/" target="_blank">SPA without the pain</a></p>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-small uk-card-body uk-card-hover">
          <h3 class="uk-card-title">Pinia</h3>
          <p><a href="https://pinia.vuejs.org/" target="_blank">State manager</a></p>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-small uk-card-body uk-card-hover">
          <h3 class="uk-card-title">Vue Router</h3>
          <p><a href="https://router.vuejs.org/" target="_blank">Flexible</a></p>
        </div>
      </div>
    </div>

    <div class="uk-child-width-1-4@s" uk-grid>
      <div>
        <div class="uk-card uk-card-default uk-card-small uk-card-body uk-card-hover">
          <h3 class="uk-card-title">Axios</h3>
          <p><a href="https://axios-http.com/docs/intro" target="_blank">Handles AJAX requests, no JQuery</a></p>
      </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-small uk-card-body uk-card-hover">
          <h3 class="uk-card-title">Vite</h3>
          <p><a href="https://vitejs.dev/" target="_blank">Next generation Frontend tooling</a></p>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-small uk-card-body uk-card-hover">
          <h3 class="uk-card-title">Devise</h3>
          <p><a href="https://github.com/heartcombo/devise" target="_blank">Simple authentication using regular cookies that just works</a></p>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-small uk-card-body uk-card-hover">
          <h3 class="uk-card-title">I18n</h3>
          <p><a href="https://kazupon.github.io/vue-i18n/" target="_blank">
            {{ $tc('dashboard.musicians', 0) }}, 
            {{ $tc('dashboard.musicians', 1) }}, 
            {{ store.metrics.musicians + ' ' + $tc('dashboard.musicians', 14) }}</a>
          </p>
        </div>
      </div>
    </div>

    <div class="uk-child-width-1-4@s" uk-grid>
      <div>
        <div class="uk-card uk-card-default uk-card-small uk-card-body uk-card-hover">
          <h3 class="uk-card-title">ActionCable</h3>
          <p><a href="https://guides.rubyonrails.org/action_cable_overview.html" target="_blank">Websockets with 2 way bindings</a></p>
      </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-small uk-card-body uk-card-hover">
          <h3 class="uk-card-title">Kaminari</h3>
          <p><a href="https://github.com/kaminari/kaminari" target="_blank">Efficient Pagination</a></p>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-small uk-card-body uk-card-hover">
          <h3 class="uk-card-title">Ransack</h3>
          <p><a href="https://github.com/activerecord-hackery/ransack" target="_blank">ActiveRecord wizardry for dynamic search filters</a></p>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-small uk-card-body uk-card-hover">
          <h3 class="uk-card-title">UIKit</h3>
          <p><a href="https://getuikit.com/docs/introduction" target="_blank">Gorgeous CSS out of the box</a></p>
        </div>
      </div>
    </div>

    <p>The whole "musicians" section is deliberatly slowed down so you can actually see the animations. Comment out the "slow" method in Api::Admin::MusiciansController to use the app at full speed</p>
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
