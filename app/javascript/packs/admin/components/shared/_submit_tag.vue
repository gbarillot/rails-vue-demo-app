<template>
  <div>
    <input type="submit" :class="btn_class" :value="value" :disabled="disabled" />
  </div>
</template>

<script>
export default {
  props: ['klass', 'value', 'progress'],

  data: function() {
    return {
      disabled: false,
      btn_class: this.klass
    }
  },

  watch: {
    progress: function (value) {
      if(value == 'loading') {
        this.disabled = true
        this.btn_class = `${this.klass} loading`
      }
      if(value == 'success') {
        this.disabled = false
        this.btn_class = `${this.klass} loaded success`
        setTimeout(() => this.btn_class = `${this.klass}`, 1000)
      }
      if(value == 'failed') {
        this.disabled = false
        this.btn_class = `${this.klass} loaded failed`
        setTimeout(() => this.btn_class = `${this.klass}`, 1000)
      }
    }
  }
}
</script>
