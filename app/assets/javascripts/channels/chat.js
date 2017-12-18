App.chat = App.cable.subscriptions.create(
  {channel: 'ChatChannel'},
  {
    received: function(message) {
      window.EventBus.$emit('newMessage', message);
    },
    connected: function() {
      console.log("connected :-)")
    },
    talk: function(message) {
      this.perform('talk', message);
    }
  }
)
