<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/admin">{{ $t('title') }}</a>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <ul class="nav navbar-nav">
            <li><router-link :to="'/'">{{ $t('nav.dashboard') }}</router-link></li>
            <li><router-link :to="'/musicians'">{{ $t('nav.musicians') }}</router-link></li>
            <li><router-link :to="'/users'">{{ $t('nav.users') }}</router-link></li>
            <li><a href='#' @click.prevent="startChat">{{ $t('nav.chat') }}</a></li>
            <li><a href="#" @click.prevent="logout">{{ $t('nav.logout') }}</a></li>
          </ul>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ locale | uppercase }}<span class="caret"></span></a>
            <ul class="dropdown-menu locales">
              <li v-for='loc in availableLocales' v-if='loc != locale'><a href="#" @click.prevent="setLocale(loc)">{{ loc | uppercase}}</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <modal-chat></modal-chat>
  </nav>
</template>

<script>
import ModalChat from '../modals/chat';

export default {
  components: {
    'modal-chat': ModalChat
  },

  data: function() {
    return this.$store.state.NavTopStore;
  },

  methods: {
    logout: function() {
      this.$store.dispatch('NavTopStore/logout').then(
        response => {
          window.location.href= '/';
        }
      );
    },
    setLocale: function(locale) {
      let redirectTo = `/${locale}/admin${this.$route.path}`;
      if(locale == this.availableLocales[0]) {
        redirectTo = `/admin${this.$route.path}`
      }

      window.location.href = redirectTo;
    },
    startChat: function() {
      $("[data-is='modalChat']").modal()
    }
  }
}
</script>
