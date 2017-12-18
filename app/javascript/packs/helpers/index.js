const helpers = {}

helpers.logger = function(e){
  console.log(e)
};

helpers.showErrors = function(data){
  let errors = {};

  if(data.responseJSON.errors){
    var error, i, len, message, messages, msg, ref;
    ref = data.responseJSON.errors;
    for (error in ref) {
      messages = ref[error];
      for (i = 0, len = messages.length; i < len; i++) {
        message = messages[i];
        msg = message;
      }
      errors[error] = msg;
    }
  }
  return errors;
};

helpers.delay = function(callback, ms) {
  var timer;
  timer = 0;
  return function(callback, ms) {
    clearTimeout(timer);
    return timer = setTimeout(callback, ms);
  };
};

export default helpers;
