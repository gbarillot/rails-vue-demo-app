import { createWebHistory, createRouter } from 'vue-router'

import PageIndex from '@/views/pages/index.vue';
import MusicianIndex from '@/views/musicians/index.vue';
import MusicianShow from '@/views/musicians/show.vue';

const router = createRouter({
  history: createWebHistory(`/${I18n.prefix}`),
  routes: [
    { path: '/', component: MusicianIndex, name: 'root_path' },
    { path: '/pages', component: PageIndex, name: 'pages_path' },
    { path: '/musicians', component: MusicianIndex, name: 'musicians_path' },
    { path: '/musicians/:id', component: MusicianShow, name: 'musician_path' },
  ]
});

// Handles 404 Not found
router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    window.location.href = '/404'
  } else {
    next();
  }
});

export default router;