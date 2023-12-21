<template>  
  <fieldset>
    <label>{{ $t('musicians.form.name') }}</label>
    <errors attr="name" :messages="data.errors" />
    <input type="text" v-model="data.musician.name" :aria-invalid="data.errors.name ? true : ''">
  </fieldset>

  <fieldset>
    <label>{{ $t('musicians.form.band') }}</label>
    <errors attr="band" :messages="data.errors" />
    <select v-model="data.musician.band" :aria-invalid="data.errors.band ? true : ''">
      <option v-for="band in data.musician.bands" :key="band.key" :value="band.key">{{ band.name }}</option>
    </select>
  </fieldset>       
</template>

<script setup>
import Errors from "../shared/_errors.vue";
defineProps(['data'])
</script>
