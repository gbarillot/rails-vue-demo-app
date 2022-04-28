function Messenger() {}

Messenger.prototype.call = function(e, request) {
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

Messenger.prototype.install = function (app) {
  app.plugin = this;
  app.config.globalProperties.$messenger = this;
}

export function createMessenger(data) {
  return new Messenger();
}