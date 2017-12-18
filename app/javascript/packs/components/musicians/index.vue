<template>
  <div class='container'>
    <nav-top></nav-top>

    <div class='row'>
      <div class='col-xs-12'>
        <table class='table table-striped table-thin'>
          <thead>
            <tr>
              <th>{{ $t('musicians.name') }}</th>
              <th>{{ $t('musicians.band') }}</th>
            </tr>
          </thead>
          <tbody>
             <tr v-for='musician in musicians'>
               <td><router-link :to="{ name: 'musician_path', params: {id: musician.id} }">{{ musician.name }}</router-link></td>
               <td>{{ musician.band }}</td>
             </tr>
           </tbody>
         </table>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data: function() {
    return this.$store.state.MusicianStore;
  },

  mounted: function() {
    this.$store.dispatch('MusicianStore/index');
  }
}
</script>
