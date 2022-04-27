<template>
  <div class="uk-container " v-if="store.pagination.next || store.pagination.previous">
    
    <ul class="uk-pagination uk-flex-right">
      <li>
        <router-link :to="{path: $route.path, query: setQuery(store.pagination.previous)}" v-if="store.pagination.previous">
          <span uk-pagination-previous></span>
        </router-link>
      </li>

      <li v-for="page in store.pagination.pages" :key="page" :class="[store.pagination.current == page ? 'uk-active' : '']">
        <router-link :to="{path: $route.path, query: setQuery(page)}" v-if="page != store.pagination.current && (page == 1 || page == 2 || page == 3 || page == store.pagination.pages || page == store.pagination.pages - 1 || page == store.pagination.pages - 2)">{{ page }}</router-link>

        <span v-if="page != store.pagination.current && page == 4">...</span>
        <span v-if="page == store.pagination.current">{{ page }}</span>
        <span v-if="page == store.pagination.current && page == 4">...</span>
      </li>

      <li>
        <router-link :to="{path: $route.path, query: setQuery(store.pagination.next)}"  v-if='store.pagination.next'>
          <span uk-pagination-next></span>
        </router-link>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  props: ['store'],

  methods: {
    setQuery(page) {
      let query = JSON.parse(JSON.stringify(this.$route.query));
      query['page'] = page;

      return query;
    }
  },

  watch: {
    '$route.query': function() {   
      this.$emit('clicked');  
    }
  }
}
</script>