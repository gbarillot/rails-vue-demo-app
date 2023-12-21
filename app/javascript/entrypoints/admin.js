import { createApp } from 'vue';
const app = createApp(Layout);

import Router from '@/admin/routes.js';
import Layout from '@/admin/views/shared/layout.vue';
import Axios from "axios";

// ActionCable setup
import { createCable } from '@/plugins/cable';
const Cable = createCable({channel: 'ChatChannel'})

// Form animations + Axios wrapper
import { createBpi } from '@/plugins/bpi';
const Bpi = createBpi({handler: Axios, namespace: '/admin'});

// Pinia + Axios setup
import { createPinia } from 'pinia';
const Pinia = createPinia();
Pinia.use(({ store }) => { store.Bpi = Bpi })

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