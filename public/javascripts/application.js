var App = {
  templates: JST,

  newBoard: function() {
    new App.NewBoardView();
  },

  indexView: function() {
    new App.ApplicationView();
  },

  fetchCollections: function() {
    for (var collection in this.data) {
      this.data[collection].fetch();
    }
  }
};
