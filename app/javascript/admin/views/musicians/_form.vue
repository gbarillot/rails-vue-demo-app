<template>  
  <section>
    <fieldset>
      <label class="uk-form-label">{{ $t('musicians.form.name') }}</label>
      <errors attr="name" :messages="data.errors" />
      <input type="text" v-model="data.musician.name" class="uk-input" :class="{'uk-form-danger': data.errors.name}">
    </fieldset>

    <fieldset class="uk-margin">
      <label class="uk-form-label ">{{ $t('musicians.form.band') }}</label>
      <errors attr="band" :messages="data.errors" />
      <select v-model="data.musician.band" class="uk-select" :class="{'uk-form-danger': data.errors.band}">
        <option v-for="band in data.musician.bands" :key="band.key" :value="band.key">{{ band.name }}</option>
      </select>
    </fieldset>       
  </section>
</template>

<script>

import Errors from "../shared/_errors.vue";

export default {
  props: ['data'],

  components: {
    Errors
  }
}
</script>
