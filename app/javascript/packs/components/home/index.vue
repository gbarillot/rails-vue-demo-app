<template>
  <div class='container'>
    <nav-top></nav-top>
    <div class='row'>
      <div class='col-xs-12'>
        <h2>{{ $t('home.title') }}</h2>
        <p>{{ $t('home.content') }}</p>
        <br />
        <h4>Trigger error pages:</h4>
        <ul>
          <li><a href="/foo-bar-baz">404 from client side</a></li>
          <li><a href="/musicians/10000">404 from server side</a></li>
          <li><a href="/musicians/this-will-trigger-an-error">500 from server side</a></li>
        </ul>
        <br />
        <br />
        <a href='/admin'>{{ $t('home.admin_link') }}</a>
      </div>
    </div>
  </div>
</template>
