<template>  
  <span class="error" v-if="message != ''">{{ message }}</span>
</template>

<script setup>
const props = defineProps(['attr', 'messages'])

const message = computed(() => {
  return !!props.messages[props.attr] ? props.messages[props.attr].join(',') : ''
})
</script>
