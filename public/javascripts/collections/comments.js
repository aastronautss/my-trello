App.Comments = Backbone.Collection.extend({
  model: App.Comment,
  localStorage: new Backbone.LocalStorage('comments')
});

App.data = App.data || {};
App.data.comments = new App.Comments();
