<template>
  <div>
    <div class="form-group">
      <label for="">{{ $t('activerecord.models.musician.name') }}</label>
      <span class='error'>{{errors.name}}</span>
      <input type="text" v-model="musician.name" class="form-control">
    </div>
    <div class="form-group">
      <label for="">{{ $t('activerecord.models.musician.band') }}</label>
      <span class='error'>{{errors.band}}</span>
      <select v-model="musician.band" class="form-control">
        <option v-for="band in musician.bands" :value="band.key">{{ band.name }}</option>
      </select>
    </div>
    <router-link :to="{ name: 'musicians_path' }" class="btn btn-default pull-left">{{ $t('cancel')}}</router-link>
    <submit-tag :value="$t('save')" klass="btn btn-warning pull-right" :progress="progress"></submit-tag>
  </div>
</template>

<script>
export default {
  data: function() {
    return this.$store.state.MusicianStore;
  }
}
</script>
