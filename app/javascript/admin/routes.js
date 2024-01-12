import { createWebHistory, createRouter } from 'vue-router'

import DashboardIndex from '@/admin/views/dashboard/index.vue';
import MusicianIndex from '@/admin/views/musicians/index.vue';
import MusicianNew from '@/admin/views/musicians/new.vue';
import MusicianEdit from '@/admin/views/musicians/edit.vue';
import WebsocketIndex from '@/admin/views/websockets/index.vue';

const router = createRouter({
  history: createWebHistory(`/${I18n.prefix}admin`),
  routes: [
    { path: '/', component: DashboardIndex, name: 'root_path' },
    { path: '/musicians', component: MusicianIndex, name: 'musicians_path' },
    { path: '/musicians/new', component: MusicianNew, name: 'new_musician_path' },
    { path: '/musicians/:id/edit', component: MusicianEdit, name: 'edit_musician_path' },
    { path: '/websockets', component: WebsocketIndex, name: 'websockets_path' }
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