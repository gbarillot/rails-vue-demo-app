<template>
  <div class="modal fade" data-is="modalChat" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">Live Chat</h4>
        </div>
        <div class="modal-body">
          <p>{{ $t('modals.chat.description') }}</p>
          <div class="chat">
            <p v-for="message in messages">{{ message }}</p>
          </div>
          <form @submit.prevent="talk" accept-charset="UTF-8" class="form">
            <div class="form-group">
              <input type="text" v-model="message" :placeholder="$t('modals.chat.placeholder')" class="form-control" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '../../event_bus';

export default {
  data: function() {
    return this.$store.state.ChatStore;
  },

  methods: {
    talk: function() {
      window.App.chat.talk({message: this.message})
    }
  },

  mounted: function() {
    EventBus.$on('newMessage', (message) =>
      this.$store.dispatch('ChatStore/talk', message)
    );
  },

  beforeDestroy: function () {
    EventBus.$off('newMessage')
  }
}
</script>
