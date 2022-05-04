import { createApp } from 'vue';
const app = createApp(Layout);

import Router from '@/routes.js';
import Layout from '@/views/shared/layout.vue';
import Axios from "axios";

// ActionCable setup
import { createCable } from '@/plugins/cable';
const Cable = createCable({channel: 'ChatChannel'})

// From animations + Axios
import { createApi } from '@/plugins/api';
const Api = createApi({handler: Axios, namespace: ''});

// Pinia + Axios setup
import { createPinia } from 'pinia';
const Pinia = createPinia();
Pinia.use(({ store }) => { store.axios = Axios })

// I18n loader
import { createI18n } from 'vue-i18n/index'; // Need the /index to avoid warning in console
const I18n = createI18n({locale: 'current',  messages: translations});

app.use(Router)
   .use(Pinia)
   .use(I18n)
   .use(Api)
   .use(Cable)
   .mount('#app')