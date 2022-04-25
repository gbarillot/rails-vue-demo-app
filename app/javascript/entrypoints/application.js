import { createApp } from 'vue';
import { createI18n } from 'vue-i18n/index'; // Need the /index to avoid warning in console
import { createPinia } from 'pinia';

import Router from '@/routes.js';
import App from '@/views/shared/layout.vue';

createApp(App).use(Router)
              .use(createI18n({locale: 'current',  messages: translations}))
              .use(createPinia())
              .mount('#app')