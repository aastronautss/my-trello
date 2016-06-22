var App = {
  templates: JST,

  fetchCollections: function() {
    for (var collection in this.data) {
      this.data[collection].fetch();
    }
  }
};
