import { createApp } from 'vue';
const app = createApp(Layout);

import Router from '@/admin/routes.js';
import Layout from '@/admin/views/shared/layout.vue';
import Axios from "axios";

// ActionCable setup
import { createCable } from '@/plugins/cable';
const Cable = createCable({channel: 'ChatChannel'})

// From animations + Axios wrapper
import { createApi } from '@/plugins/api';
const Api = createApi({handler: Axios, namespace: '/admin'});

// Pinia + Axios setup
import { createPinia } from 'pinia';
const Pinia = createPinia();
Pinia.use(({ store }) => { store.axios = Axios })

// I18n loader
import { createI18n } from 'vue-i18n/index'; // Need the /index to avoid warning in console
const I18n = createI18n({locale: 'current',  messages: translations});

// App wide available components
import Spinner from '@/admin/views/shared/_spinner.vue'
app.component('spinner', Spinner);

app.use(Router)
   .use(Pinia)
   .use(I18n)
   .use(Api)
   .use(Cable)
   .mount('#app')