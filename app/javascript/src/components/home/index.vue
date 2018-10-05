<template>
  <layout>
    <div class='col-xs-12'>
      <h2>{{ $t('home.title') }}</h2>
      <p>{{ $t('home.content') }}</p>
      <br />
      <a href='/admin'>{{ $t('home.admin_link') }}</a>
    </div>
  </layout>
</template>

<script>
import Layout from '../shared/layout';

export default {
  components: {
    Layout
  }
}
</script>
