App.List = Backbone.Model.extend({
  idAttribute: 'id',
  defaults: {
    title: '',
    cards: []
  },

  getCard: function(id) {
    if (_(this.get('cards')).includes(id)) {
      return App.data.cards.get(id);
    }
    return undefined;
  }
});
