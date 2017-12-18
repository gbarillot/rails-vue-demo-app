const helpers = {}

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

export default helpers;
