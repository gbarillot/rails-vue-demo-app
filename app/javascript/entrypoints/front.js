import { createApp } from 'vue';
import { createI18n } from 'vue-i18n/index'; // Need the /index to avoid warning in console
import { createPinia } from 'pinia';

import Router from '@/routes.js';
import Layout from '@/views/shared/layout.vue';

import Axios from "axios";
Axios.defaults.baseURL = `${window.location.protocol}/${window.I18n.prefix}api/`;
Axios.defaults.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

const Pinia = createPinia();
Pinia.use(({ store }) => { store.axios = Axios })

const I18n = createI18n({locale: 'current',  messages: translations});

createApp(Layout).use(Router)
                 .use(I18n)
                 .use(Pinia)
                 .mount('#app')

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    switch (error.response.status) {
      case 401:
        alert("not authentified")
        break;
      case 500:
        window.location.href = '/500'
        break;
    }
 
    return Promise.reject(error);
  }
);