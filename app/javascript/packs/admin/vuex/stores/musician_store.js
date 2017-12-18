import helpers from '../../helpers';

const MusicianStore = {
  namespaced: true,
  state: {
    musicians: [],
    musician: {},
    errors: {},
    bands: [],
    progress: '',
    pagination: {}
  },
  mutations: {
    one(state, data) {
      state.errors = {}
      state.musician = data.musician;
      return state;
    },
    many(state, data) {
      state.bands = data.bands;
      state.musicians= data.musicians;
      state.pagination = data.pagination;
      return state;
    },
    progress(state, step) {
      state.progress = step;
      return state.progress;
    },
    errors(state, data) {
      state.errors = helpers.showErrors(data);
      return state.errors;
    }
  },
  actions: {
    index(context, query) {
      $.ajax({
        url: `musicians?${query}`,
        type: 'get',
        data: query,
        success: function(data) {
          context.commit('many', data)
        }
      })
    },
    new(context, id) {
      $.ajax({
        url: `musicians/new`,
        type: 'get',
        success: function(data) {
          context.commit('one', data)
        }
      })
    },
    create(context, form) {
      context.commit('progress', 'loading')
      return new Promise((resolve, reject) => {
        $.ajax({
          url: `musicians`,
          type: 'post',
          data: {
            musician: form
          },
          success: function(data) {
            context.commit('progress', 'success')
            resolve(data);
          },
          error: function(data) {
            context.commit('progress', 'failed')
            context.commit('errors', data)
          }
        })
      })
    },
    edit(context, id) {
      $.ajax({
        url: `musicians/${id}/edit`,
        type: 'get',
        success: function(data) {
          context.commit('one', data);
        }
      });
    },
    update(context, musician) {
      context.commit('progress', 'loading')
      $.ajax({
        url: `musicians/${musician.id}`,
        type: 'put',
        data: {
          musician: musician
        },
        success: function(data) {
          context.commit('progress', 'success')
          context.commit('one', data);
        },
        error: function(data) {
          context.commit('progress', 'failed')
          context.commit('errors', data);
        }
      })
    },
    destroy(context, musician_id) {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: `musicians/${musician_id}`,
          type: 'delete',
          success: function(data) {
            resolve(data);
          },
          error: function(data) {
            reject(data);
          }
        });
      });
    }
  }
};

export default MusicianStore;
