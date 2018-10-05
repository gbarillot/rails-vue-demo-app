const NavTopStore = {
  namespaced: true,
  state: {
    locale: window.I18n.locale,
    availableLocales: window.I18n.availableLocales
  },
  actions: {
    logout(context) {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: `sign_out`,
          type: 'delete',
          success: function() {
            resolve();
          }
        })
      });
    }
  }
};

export default NavTopStore;
