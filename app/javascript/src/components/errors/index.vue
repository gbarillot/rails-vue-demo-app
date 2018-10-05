<template>
  <layout>
    <div class="col-xs-12">
      <h2>Trigger error pages:</h2>
      <br />
      <ul>
        <li>404 from client side: <a href="/foo-bar-baz">/foo-bar-baz</a></li>
        <li>404 from server side: <a href="/musicians/10000">/musicians/10000</a></li>
        <li>500 from server side: <a href="/musicians/this-will-trigger-an-error">/musicians/this-will-trigger-an-error</a></li>
      </ul>
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
