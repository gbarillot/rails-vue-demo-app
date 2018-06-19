import Vue from 'vue/dist/vue.esm';
import VueI18n from 'vue-i18n';
import store from './vuex';
import router from './routes.js';
import './filters/strings.js';

import NavTop from './components/shared/_nav_top';
Vue.component('nav-top', NavTop);

$.ajaxSetup({
  beforeSend: function(xhr) {
    xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
  }
})
$.ajaxPrefilter(function( options ) {
  options.url = `/${I18n.prefix}api/${options.url}`;
});

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'current',
  messages: translations
})

const app = new Vue({
  i18n,
  router,
  store
}).$mount('#app')
