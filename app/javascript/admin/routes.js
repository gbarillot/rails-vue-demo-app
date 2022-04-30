import { createWebHistory, createRouter } from 'vue-router'

import Dashboard from '@/admin/views/dashboard/index.vue';
import MusicianIndex from '@/admin/views/musicians/index.vue';
import MusicianNew from '@/admin/views/musicians/new.vue';
import MusicianEdit from '@/admin/views/musicians/edit.vue';
import WebsocketIndex from '@/admin/views/websockets/index.vue';
import Error404 from '@/views/pages/error_404.vue';

const router = createRouter({
  history: createWebHistory(`/${I18n.prefix}admin`),
  routes: [
    { path: '/', component: Dashboard, name: 'root_path' },
    { path: '/musicians', component: MusicianIndex, name: 'musicians_path' },
    { path: '/musicians/new', component: MusicianNew, name: 'new_musician_path' },
    { path: '/musicians/:id/edit', component: MusicianEdit, name: 'edit_musician_path' },
    { path: '/websockets', component: WebsocketIndex, name: 'websockets_path' },
    { path: '/404', component: Error404 },
    
    { path: '/:catchAll(.*)', redirect: '/404' }
  ]
});

export default router;