App.Lists = Backbone.Collection.extend({
  model: App.List,
  localStorage: new Backbone.LocalStorage('lists')
});

App.data = App.data || {};
App.data.lists = new App.Lists();
