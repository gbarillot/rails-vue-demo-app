<template>
  <div class="uk-navbar-container">
    <nav class="uk-container">
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li :class="activeOn(['root_path'])">
            <router-link :to="{name: 'root_path'}"  aria-current="page">{{ $t('nav.dashboard') }}</router-link>
          </li>
          <li :class="activeOn(['musicians_path', 'edit_musician_path', 'new_musician_path'])">
            <router-link :to="{name: 'musicians_path'}">{{ $t('nav.musicians') }}</router-link>
          </li>
          <li :class="activeOn(['websockets_path'])">
            <router-link :to="{name: 'websockets_path'}">{{ $t('nav.websockets') }}</router-link>
          </li>
          <li >
            <a href="/users/sign_out">{{ $t('nav.logout') }}</a>
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