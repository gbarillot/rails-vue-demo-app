import { createWebHistory, createRouter } from 'vue-router'

import PageIndex from '@/views/pages/index.vue';
import MusicianIndex from '@/views/musicians/index.vue';
import MusicianShow from '@/views/musicians/show.vue';
import Error500 from '@/views/pages/error_500.vue';
import Error404 from '@/views/pages/error_404.vue';

const router = createRouter({
  history: createWebHistory(`/${I18n.prefix}`),
  routes: [
    { path: '/', component: MusicianIndex, name: 'root_path' },
    { path: '/pages', component: PageIndex, name: 'pages_path' },
    { path: '/musicians', component: MusicianIndex, name: 'musicians_path' },
    { path: '/musicians/:id', component: MusicianShow, name: 'musician_path' },
    { path: '/500', component: Error500 },
    { path: '/404', component: Error404 },
    { path: '/:catchAll(.*)', redirect: '/404' }
  ]
});

export default router;