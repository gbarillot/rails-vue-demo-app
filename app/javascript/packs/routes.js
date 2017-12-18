import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import HomeIndex from './components/home/index.vue';
import MusicianIndex from './components/musicians/index.vue';
import MusicianShow from './components/musicians/show.vue';

const router = new VueRouter({
  mode: 'history',
  base: `${I18n.prefix}`,
  routes: [
    { path: '/', component: HomeIndex, name: 'root_path' },
    { path: '/musicians', component: MusicianIndex, name: 'musicians_path' },
    { path: '/musicians/:id', component: MusicianShow, name: 'musician_path' }
  ]
});

export default router;
