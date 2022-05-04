<template>
  <section class="top-nav">
    <div class="container">
      <div class="row">
        <div class="col-md-16 col-lg-21">
          <nav>
            <ul>
              <li :class="activeOn(['root_path', 'musicians_path', 'musician_path'])">
                <router-link to="/" >{{ $t('nav.homepage') }}</router-link>
              </li>
              <li :class="activeOn(['pages_path'])">
                <router-link :to="{name: 'pages_path'}">{{ $t('nav.pages') }}</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-md-8 col-lg-3">
          <select v-model="locale">
            <option v-for="locale in availableLocales" :value="locale" :key="locale">
              {{ locale.toUpperCase() }}
            </option>
          </select> 
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      availableLocales: window.I18n.availableLocales,
      locale: window.I18n.locale
    }
  },

  methods: {
    activeOn(paths) {
      return paths.includes(this.$route.name) ? 'active' : ''
    }
  },

  watch: {
    locale: function(locale) {
      let redirectTo = `/${locale}${this.$route.path}`;
      if(locale == this.availableLocales[0]) {
        redirectTo = `${this.$route.path}`
      }
      window.location.href = redirectTo;
    }
  }
}
</script>