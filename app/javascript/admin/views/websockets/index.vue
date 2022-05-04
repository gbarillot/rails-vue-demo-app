<template>
  <section class="container">
    <ul class="breadcrumb">
      <li><router-link :to="{name: 'root_path'}">{{ $t('title') }}</router-link></li>
      <li>{{ $t('nav.websockets') }}</li>
    </ul>

    <div class="row">
      <div class="col-xs-24 col-sm-12 card">
        <form @submit.prevent="publish" accept-charset="UTF-8">
          <input type="input" v-model="message" placeholder="Type in a message" />
          <br /><br />
          <input type="submit" value="Publish" />
        </form>

        <div class="card">
          <p>You can also push messages here from the server using the Rails console:</p>
          <code>ActionCable.server.broadcast("ChatChannel", { message: "hey!" })</code>
        </div>
      </div>

      <div class="col-xs-24 col-sm-12 card">
        <p>All messages you type are upcased <b>server side</b> after a round trip. If you open multiple tabs, messages are broadcasted on all tabs.</p>
        
        <div v-if="messages.length > 0">
          <p v-for="(mes, index) in messages" :key="index"><i>{{ mes }}</i></p>
        </div>
        <div v-else>
          <p><i>Waiting for messages...</i></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      messages: []
    }
  },

  created() {
    this.$cable.on('chat', (event) => {
      this.messages.unshift(event['message']);
    })
  },

  methods: {
    publish() {
      this.$cable.send(this.message);
      this.message = '';
    }
  }
}
</script>
