const DashboardStore = {
  namespaced: true,
  state: {
    metrics: {}
  },
  mutations: {
    one(state, data) {
      state.metrics = data.metrics;
      return state;
    }
  },
  actions: {
    index(context, query) {
      $.ajax({
        url: 'dashboard',
        type: 'get',
        data: query,
        success: function(data) {
          context.commit('one', data)
        }
      })
    }
  }
};

export default DashboardStore;
