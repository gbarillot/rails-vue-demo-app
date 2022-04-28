<template>
  <div class="uk-navbar-container uk-navbar-transparent">
    <nav class="uk-container">
      <div class="uk-navbar-left uk-column-1-3">
        <ul class="uk-navbar-nav">
          <li :class="activeOn(['root_path', 'musicians_path', 'musician_path'])">
            <router-link to="/" class="nav-link" >{{ $t('nav.homepage') }}</router-link>
          </li>
          <li :class="activeOn(['pages_path'])">
            <router-link :to="{name: 'pages_path'}" class="nav-link">{{ $t('nav.pages') }}</router-link>
          </li>
          <li class="uk-offcanvas-close" style="padding-right: 20px">
            <select class="uk-select " v-model="locale">
              <option v-for="locale in availableLocales" :value="locale" :key="locale">
                {{ locale.toUpperCase() }}
              </option>
            </select> 
          </li>          
        </ul>
      </div>
    </nav>
  </div>
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
      return paths.includes(this.$route.name) ? 'uk-active' : ''
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