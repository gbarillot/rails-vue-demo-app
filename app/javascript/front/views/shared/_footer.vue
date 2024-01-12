<template>    
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-lg-8">
          Guillaume Barillot 2024 - 
          <a href="https://github.com/gbarillot">Github</a> | 
          <a href="https://twitter.com/gbarillot">Twitter</a>
        </div>
        <div class="col-xs-12 col-lg-4 ta-right">
          <b>Theme: </b> 
          <a href="#" @click.prevent="setTheme('light')">light</a> | 
          <a href="#" @click.prevent="setTheme('dark')">dark</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const setTheme = ((theme) => {
  let root = document.querySelector('html');
  root.setAttribute('data-theme', theme);
  document.cookie = `theme=${theme}; path=/`;
})

const getCookie = ((name) => {
	let value = '; ' + document.cookie;
	let parts = value.split(`; ${name}=`);
	if (parts.length == 2) return parts.pop().split(';').shift();
})

onMounted(() => {
  const theme = getCookie('theme');
  theme ? setTheme(theme) : setTheme('light');
})
</script>
