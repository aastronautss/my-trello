App.Boards = Backbone.Collection.extend({
  model: App.Board,
  localStorage: new Backbone.LocalStorage('boards')
});

App.data = App.data || {};
App.data.boards = new App.Boards();
