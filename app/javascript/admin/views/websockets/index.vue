<template>
  <section class="uk-container uk-margin-top">

    <ul class="uk-breadcrumb uk-margin">
      <li><router-link :to="{name: 'root_path'}">{{ $t('title') }}</router-link></li>
      <li><span>{{ $t('nav.websockets') }}</span></li>
    </ul>

    <div class="uk-child-width-1-2@m" uk-grid>
      <div>
        <div class="uk-card uk-card-default uk-card-large uk-card-body uk-card-hover">
          <form @submit.prevent="publish" accept-charset="UTF-8">
            <input type="input" v-model="message" class="uk-input" placeholder="Type in a message" />
            <br /><br />
            <input type="submit" value="Publish" class="uk-button uk-button-primary"/>
          </form>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-large uk-card-body uk-card-hover uk-margin-top">
            <p>You can also push messages here from the server using the Rails console:</p>
            <pre class="uk-background-muted">ActionCable.server.broadcast("ChatChannel", { message: "hey!" })</pre>
          </div>
        </div>
      </div>

      <div>
        <div class="uk-card uk-card-default uk-card-large uk-card-body uk-card-hover">
          <p>All messages you type are upcased <b>server side</b> after a round trip. If you open multiple tabs, messages are broadcasted on all tabs.</p>
          
          <div v-if="messages.length > 0">
            <p v-for="(mes, index) in messages" :key="index"><i>{{ mes }}</i></p>
          </div>
          <div v-else>
            <p><i>Waiting for messages...</i></p>
          </div>
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
