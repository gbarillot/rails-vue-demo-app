import Vue from 'vue/dist/vue.esm';
import VueI18n from 'vue-i18n';
import store from '../../src/admin/vuex';
import router from '../../src/admin/routes.js';
import '../../src/admin/filters/strings.js';
import helpers from '../../src/admin/helpers';
import EventBus from '../../src/admin/event_bus';
// Expose EventBus to window for JQuery access (ActionCable)
window.EventBus = EventBus;

import NavTop from '../../src/admin/components/shared/_nav_top';
Vue.component('nav-top', NavTop);

import SubmitTag from '../../src/admin/components/shared/_submit_tag';
Vue.component('submit-tag', SubmitTag);

$.ajaxSetup({
  beforeSend: function(xhr) {
    xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
  },
  complete: function(xhr, status) {
    if(xhr.status === 200 || xhr.status === 422) {
      return true;
    }
    if(xhr.status === 401) {
      return window.location.href = '/users/sign_in';
    }
    if(xhr.status === 404) {
      return window.location.href = '/404';
    }

    return window.location.href = '/500';
  }
})
$.ajaxPrefilter(function( options ) {
  options.url = `/${I18n.prefix}api/admin/${options.url}`;
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
