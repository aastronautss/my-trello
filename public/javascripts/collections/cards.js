App.Cards = Backbone.Collection.extend({
  model: App.Card,
  localStorage: new Backbone.LocalStorage('cards')
});

App.data = App.data || {};
App.data.cards = new App.Cards();
