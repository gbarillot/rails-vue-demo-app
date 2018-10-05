import Vue from 'vue/dist/vue.esm';
import VueI18n from 'vue-i18n';
import store from '../src/vuex';
import router from '../src/routes.js';
import '../src/filters/strings.js';

import NavTop from '../src/components/shared/_nav_top';
Vue.component('nav-top', NavTop);

$.ajaxSetup({
  beforeSend: function(xhr) {
    xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
  },
  complete: function(xhr, status) {
    if(xhr.status === 200 || xhr.status === 422) {
      return true;
    }
    if(xhr.status === 404) {
      return window.location.href = '/404';
    }

    return window.location.href = '/500';
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
