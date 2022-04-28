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
      this.message = '';
      if(!!this.messages[this.attr]) {
        this.message = this.messages[this.attr].join(',');
      } 
    }
  }
}
</script>
