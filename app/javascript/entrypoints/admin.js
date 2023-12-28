import { createApp } from 'vue';
const app = createApp(Layout);

import Router from '@/admin/routes.js';
import Layout from '@/admin/views/shared/layout.vue';
import Axios from "axios";

// ActionCable setup
import { createCable } from '@/plugins/cable';
const Cable = createCable({channel: 'ChatChannel'})

// API + Axios wrapper
import { createApi } from '@/plugins/api';
const Api = createApi({handler: Axios, namespace: '/admin'});

// Pinia + Axios setup
import { createPinia } from 'pinia';
const Pinia = createPinia();
Pinia.use(({ store }) => { store.Api = Api })

// I18n loader
import { createI18n } from 'vue-i18n';
const I18n = createI18n({locale: 'current',  messages: translations, legacy: false});

// App wide available components
import Pagination from '@/admin/views/shared/_pagination.vue'
app.component('pagination', Pagination);

app.use(Router)
   .use(Pinia)
   .use(I18n)
   .mount('#app')