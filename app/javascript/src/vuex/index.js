import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex';
Vue.use(Vuex);

import MusicianStore from './stores/musician_store';

const store = new Vuex.Store({
  modules: {
    MusicianStore
  }
});

export default store;
