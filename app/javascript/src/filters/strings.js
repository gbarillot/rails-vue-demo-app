import Vue from 'vue/dist/vue.esm';

Vue.filter('uppercase', function (value) {
	return value.toUpperCase()
})
