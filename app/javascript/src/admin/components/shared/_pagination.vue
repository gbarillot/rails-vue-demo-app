<template>
  <div class='col-xs-12' v-if="pagination.next || pagination.previous">
    <nav class='pull-right'>
      <ul class="pagination">
        <li>
          <router-link :to="{path: $route.path, query: {page: pagination.previous}}" v-if='pagination.previous'>
            <span>&laquo;</span>
          </router-link>
        </li>

        <li v-for="page in pagination.pages" :class="[pagination.current == page ? 'active' : '']">
          <router-link :to="{path: $route.path, query: {page: page}}" v-if="page != pagination.current && (page == 1 || page == 2 || page == 3 || page == pagination.pages || page == pagination.pages - 1 || page == pagination.pages - 2)">{{ page }}</router-link>

          <span v-if="page != pagination.current && page == 4">...</span>
          <span v-if="page == pagination.current">{{ page }}</span>
          <span v-if="page == pagination.current && page == 4">...</span>
        </li>

        <li>
          <router-link :to="{path: $route.path, query: {page: pagination.next}}"  v-if='pagination.next'>
            <span>&raquo;</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['pagination'],

  watch: {
    '$route.query': function() {
      this.$store.dispatch(this.$props.pagination.callback, this.$route.query)
    }
  }
}
</script>
