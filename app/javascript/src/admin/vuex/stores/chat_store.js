const ChatStore = {
  namespaced: true,
  state: {
    message: "",
    messages: []
  },
  mutations: {
    addMessage(state, msg) {
      state.message = "";
      state.messages.push(msg);
      return state;
    }
  },
  actions: {
    talk(context, msg) {
      context.commit('addMessage', msg)
    }
  }
};

export default ChatStore;
