import { createApp } from 'vue';
const app = createApp(Layout);

import Router from '@/front/routes.js';
import Layout from '@/front/views/shared/layout.vue';
import Axios from "axios";

// API + Axios wrapper
import { createApi } from '@/plugins/api';
const Api = createApi({handler: Axios, namespace: ''});

// Pinia + Axios setup
import { createPinia } from 'pinia';
const Pinia = createPinia();
Pinia.use(({ store }) => { store.Api = Api })

// I18n loader
import { createI18n } from 'vue-i18n';
const I18n = createI18n({locale: 'current',  messages: translations, legacy: false});

app.use(Router)
   .use(Pinia)
   .use(I18n)
   .mount('#app')