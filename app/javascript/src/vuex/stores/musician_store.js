const MusicianStore = {
  namespaced: true,
  state: {
    musicians: [],
    musician: {}
  },
  mutations: {
    one(state, data) {
      state.musician = data.musician;
      return state;
    },
    many(state, data) {
      state.musicians= data.musicians;
      return state;
    }
  },
  actions: {
    index(context, query) {
      $.ajax({
        url: `musicians`,
        type: 'get',
        data: query,
        success: function(data) {
          context.commit('many', data)
        }
      })
    },
    show(context, id) {
      $.ajax({
        url: `musicians/${id}`,
        type: 'get',
        success: function(data) {
          context.commit('one', data)
        }
      })
    },
  }
};

export default MusicianStore;
