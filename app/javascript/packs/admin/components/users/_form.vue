<template>
  <div>
    <div class="form-group">
      <label for="">{{ $t('activerecord.models.user.email') }}</label>
      <span class='error'>{{errors.email}}</span></label>
      <input type="text" v-model="user.email" class="form-control">
    </div>
    <div class="form-group">
      <label for="">{{ $t('activerecord.models.user.password') }}</label>
      <span class='error'>{{errors.password}}</span></label>
      <input type="password" v-model="user.password" class="form-control">
    </div>
    <div class="form-group">
      <label for="">{{ $t('activerecord.models.user.password_confirmation') }}</label>
      <span class='error'>{{errors.password_confirmation}}</span></label>
      <input type="password" v-model="user.password_confirmation" class="form-control">
    </div>
    <router-link :to="{ name: 'users_path' }" class="btn btn-default pull-left">{{ $t('cancel')}}</router-link>
    <submit-tag :value="$t('save')" klass="btn btn-warning pull-right" :progress="progress"></submit-tag>
  </div>
</template>

<script>
export default {
  data: function() {
    return this.$store.state.UserStore;
  }
}
</script>
