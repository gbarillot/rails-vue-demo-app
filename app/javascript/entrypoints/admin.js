import { createApp } from 'vue';
const app = createApp(Layout);

import Router from '@/admin/routes.js';
import Layout from '@/admin/views/shared/layout.vue';
import Axios from "axios";

// ActionCable setup
import { createCable } from '@/plugins/cable';
const Cable = createCable({channel: 'ChatChannel'})

// Pinia + Axios setup
import { createApi } from '@/plugins/api';
import { createPinia } from 'pinia';
const Pinia = createPinia();
Pinia.use(({ store }) => { store.Api = createApi({handler: Axios, namespace: '/admin'}) })

// I18n loader
import { createI18n } from 'vue-i18n';
const I18n = createI18n({locale: 'current',  messages: translations, legacy: false});

app.use(Router)
   .use(Pinia)
   .use(I18n)
   .use(Cable)
   .mount('#app')