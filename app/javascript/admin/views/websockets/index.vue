<template>
  <section class="container">
    <ul class="breadcrumb">
      <li><router-link :to="{name: 'root_path'}">{{ $t('title') }}</router-link></li>
      <li>{{ $t('nav.websockets') }}</li>
    </ul>

    <div class="row">
      <div class="col-xs-12 col-sm-6 card">
        <form @submit.prevent="publish" accept-charset="UTF-8">
          <input type="input" v-model="message" :placeholder="$t('websockets.placeholder')" />
          <br /><br />
          <input type="submit" :value="$t('websockets.publish')" />
        </form>

        <div class="card">
          <p>{{ $t('websockets.comment1') }}</p>
          <code>{{ $t('websockets.code_example') }}</code>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 card">
        <p>{{ $t('websockets.comment2') }}
           <b>{{ $t('websockets.server_side') }}</b>
           {{ $t('websockets.comment3') }}
        </p>
        
        <div v-if="messages.length > 0">
          <p v-for="(message, index) in messages" :key="index"><i>{{ message }}</i></p>
        </div>
        <div v-else>
          <p><i>{{ $t('websockets.waiting_messages') }}</i></p>
        </div> 
      </div>
    </div>
  </section>
</template>

<script setup>
const messages = ref([]);
const message = ref('');
const cable = inject('cable')

const publish = (() => {
  cable.send(message.value);
  message.value = '';
})

onMounted(() => {
  cable.on('chat', (event) => {
    messages.value.unshift(event['message']);
  })
});
</script>
