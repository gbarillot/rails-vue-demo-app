<template>
  <section clas="container">    
    <div v-if="store.pagination.next || store.pagination.previous">      
      <ul class="pagination">
        <li v-if="store.pagination.previous != null">
          <router-link :to="{path: $route.path, query: setQuery(store.pagination.previous)}" v-if="store.pagination.previous">
            <span>&laquo;</span>
          </router-link>
        </li>

        <li v-for="page in store.pagination.pages" :key="page" :class="[store.pagination.current == page ? 'active' : '']">
          <router-link :to="{path: $route.path, query: setQuery(page)}" v-if="page != store.pagination.current && (page == 1 || page == 2 || page == 3 || page == store.pagination.pages || page == store.pagination.pages - 1 || page == store.pagination.pages - 2)">{{ page }}</router-link>

          <span v-if="page != store.pagination.current && page == 4">...</span>
          <span v-if="page == store.pagination.current">{{ page }}</span>
          <span v-if="page == store.pagination.current && page == 4">...</span>
        </li>

        <li v-if="store.pagination.next != null && store.pagination.pages > 0">
          <router-link :to="{path: $route.path, query: setQuery(store.pagination.next)}"  v-if="store.pagination.next">
            <span>&raquo;</span>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
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