function Api() {}

Api.prototype.call = function(e, request) {
  e.classList.add('loading');
  return new Promise((resolve) => {
    request.then((response) => {
      e.classList.remove('loading');
      let status = null;
      if(response === true)  { status = 'success' }
      if(response === false) { status = 'failed' }

      e.classList.add(status);
      setTimeout(function(){
        e.classList.remove(status);
      }, 1000) 

      resolve(response);
    })
  })
}

Api.prototype.install = function (app) {
  app.plugin = this;
  app.config.globalProperties.$api = this;
}

export function createApi(args) {
  args.handler.defaults.baseURL = `${window.location.protocol}/${window.I18n.prefix}api${args.namespace}/`;
  args.handler.defaults.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  args.handler.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      switch (error.response.status) {
        case 500:
          window.location.href = '/500'
          break;
        case 401:
          alert('not authenticated')  
          break;
      }
   
      return Promise.reject(error);
    }
  );

  return new Api();
}