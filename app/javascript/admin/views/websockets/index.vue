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
            <input type="input" v-model="message" class="uk-input" />
            <br /><br />
            <input type="submit" value="Publish" class="uk-button uk-button-primary"/>
          </form>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-large uk-card-body uk-card-hover">
          <p v-for="(message, index) in messages.reverse()" :key="index">{{ message }}</p>
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
    this.emitter.on('chat', (event) => {
      this.messages.push(event['message']);
    })
  },

  methods: {
    publish() {
      console.log(this.message)
    }
  }
}
</script>
