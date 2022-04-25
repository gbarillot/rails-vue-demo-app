<template>
  <div class="row">
    <div class="col-8">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" :class="activeOn(['root_path', 'musicians_path', 'musician_path'])">{{ $t('nav.homepage') }}</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" :class="activeOn(['about_path'])">{{ $t('nav.about') }}</router-link>
        </li>
      </ul>
    </div>
    <div class="col-4">
      <select class="form-select float-end" v-model="locale" style="margin-top: 10px;width: 80px">
        <option v-for="locale in availableLocales" :value="locale" :key="locale">
          {{ locale.toUpperCase() }}
        </option>
      </select> 
    </div>
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