function Api() {}

Api.prototype.call = function(e, request) {
  e.target.classList.add('loading');
  return new Promise((resolve) => {
    request.then((response) => {
      e.target.classList.remove('loading');
      const status = response === true ? 'success' : 'failed'
      e.target.classList.add(status);
      setTimeout(function(){
        e.target.classList.remove(status);
      }, 1000) 

      resolve(response);
    })
  })
}

Api.prototype.install = function (app) {
  app.plugin = this;
  app.config.globalProperties.$api = this;
}

export function createApi(data) {
  return new Api();
}