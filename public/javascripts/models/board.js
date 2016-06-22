App.Board = Backbone.Model.extend({
  idAttribute: 'id',
  defaults: {
    title: '',
    lists: []
  },

  containsLists() {
    var ids = [].slice.call(arguments);
    return _(ids).all(function(id) {
      _(this.get('lists')).includes(id);
    });
  },

  getList: function(id) {
    if (this.containsLists(id)) {
      return App.data.lists.get(id);
    }
    return undefined;
  },

  moveCard: function(from_list_id, to_list_id, card_id) {
    var from_list,
        from_list_cards,
        to_list,
        to_list_cards;

    if(this.containsLists(from_list_id, to_list_id)) {
      from_list = App.data.lists.get(from_list_id);
      from_list_cards = from_list.get('cards');
      to_list = App.data.lists.get(to_list_id);
      to_list_cards = from_list.get('cards');

      if (_(from_list_cards).includes(card_id)) {
        from_list.set('cards', _(from_list_cards).without(card_id));
        to_list.set('cards', to_list_cards.push(card_id));
        return this;
      }
    }
    return undefined;
  }
});
