<template>  
  <span class="error" v-if="message != ''">{{ message }}</span>
</template>

<script>
export default {
  props: ['attr', 'messages'],

  data() {
    return {
      message: ''
    }
  },

  watch: {
    'messages': function() { 
      if(Object.keys(this.messages).length === 0) {
        this.message = '';
      } else {
        this.message = this.messages[this.attr].join(', ');
      }
    }
  }
}
</script>
