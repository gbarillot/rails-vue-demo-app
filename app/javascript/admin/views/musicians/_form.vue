<template>  
  <div>
    <fieldset>
      <label class="uk-form-label">Name</label>
      <errors attr="name" :messages="data.errors" />
      <input type="text" v-model="data.musician.name" class="uk-input" :class="{'uk-form-danger': data.errors.name}">
    </fieldset>

    <fieldset class="uk-margin">
      <label class="uk-form-label ">Band</label>
      <select class="uk-select" v-model="data.musician.band">
          <option v-for="band in data.musician.bands" :key="band.key" :value="band.key">{{ band.name }}</option>
      </select>
    </fieldset>

    <a href="#" class="uk-button uk-button-danger uk-button-large uk-margin">Delete</a> 
    <input type="submit" value="Save" class="uk-button uk-button-primary uk-button-large uk-margin uk-float-right" />        
  </div>
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
