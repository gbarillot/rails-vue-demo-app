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

export function createApi(data) {
  return new Api();
}