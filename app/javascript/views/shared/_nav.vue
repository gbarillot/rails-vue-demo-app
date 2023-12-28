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

<script setup>
const location = useRoute();
const { t } = useI18n({});

const availableLocales = ref(window.I18n.availableLocales);
const locale = ref(window.I18n.locale);

const activeOn = ((paths) => {
  return paths.includes(location.name) ? 'active' : ''
})

watch(locale, (newLocale, _oldLocale) => {
  let redirectTo = `/${newLocale}${location.path}`;
  if (newLocale === availableLocales.value[0]) {
    redirectTo = `${location.path}`;
  }
  window.location.href = redirectTo;
});
</script>
