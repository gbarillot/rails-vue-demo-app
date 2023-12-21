import Axios from "axios";

function Bpi() {
  const errors = [];
  const put = function(route, params) {
    return Axios.put(route, params)
  }
  
  const post = function(route, params) {
    return Axios.post(route, params)
  }

  const get = function(route) {
    return Axios.get(route);
  }

  const destroy = function(route) {
    return Axios.delete(route);
  }

  return {get, post, put, destroy};
}

export function createBpi(args) {
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

  return new Bpi();
}