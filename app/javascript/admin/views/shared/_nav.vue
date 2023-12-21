<template>
  <section class="top-nav">
    <div class="container">
      <div class="row">
        <div class="col-md-16 col-lg-21">
          <nav>
            <ul>
              <li :class="activeOn(['root_path'])">
                <router-link :to="{name: 'root_path'}">{{ $t('nav.dashboard') }}</router-link>
              </li>
              <li :class="activeOn(['musicians_path', 'edit_musician_path', 'new_musician_path'])">
                <router-link :to="{name: 'musicians_path'}">{{ $t('nav.musicians') }}</router-link>
              </li>
              <li :class="activeOn(['websockets_path'])">
                <router-link :to="{name: 'websockets_path'}">{{ $t('nav.websockets') }}</router-link>
              </li>
              <li>
                <a href="/users/sign_out">{{ $t('nav.logout') }}</a>
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

<script setup>
const location = useRoute();
const { t } = useI18n({});

const availableLocales = ref(window.I18n.availableLocales);
const locale = ref(window.I18n.locale);

const activeOn = ((paths) => {
  return paths.includes(location.name) ? 'active' : ''
})

watch(locale, (newLocale, _oldLocale) => {
  let redirectTo = `/${newLocale}/admin${location.path}`;
  if (newLocale === availableLocales.value[0]) {
    redirectTo = `/admin${location.path}`;
  }
  window.location.href = redirectTo;
});
</script>
