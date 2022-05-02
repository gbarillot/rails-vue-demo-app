import { createApp } from 'vue';
const app = createApp(Layout);

import Router from '@/admin/routes.js';
import Layout from '@/admin/views/shared/layout.vue';

// ActionCable setup
import { createCable } from '@/plugins/cable';
const cable = createCable({channel: 'ChatChannel'})

// Axios base setup
import Axios from "axios";
Axios.defaults.baseURL = `${window.location.protocol}/${window.I18n.prefix}api/admin/`;
Axios.defaults.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    switch (error.response.status) {
      case 500:
        window.location.href = '/500'
        break;
    }
 
    return Promise.reject(error);
  }
);

// Pinia + Axios setup
import { createPinia } from 'pinia';
const Pinia = createPinia();
Pinia.use(({ store }) => { store.axios = Axios })

// I18n loader
import { createI18n } from 'vue-i18n/index'; // Need the /index to avoid warning in console
const I18n = createI18n({locale: 'current',  messages: translations});

// From animations helper
import { createApi } from '@/plugins/api';

app.use(Router)
   .use(Pinia)
   .use(I18n)
   .use(createApi())
   .use(cable)
   .mount('#app')