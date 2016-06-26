App.Card = Backbone.Model.extend({
  idAttribute: 'id',
  defaults: {
    title: '',
    description: '',
    components: [],
    comments: []
  },
  events: {
    'clear': 'clear'
  },

  currentList: function() {
    return App.data.lists.find(function(model) {
      var cardIDs = model.get('cards');
      return _(cardIDs).include(this.id);
    }, this);
  },

  clear: function() {
    var arrays = _(this.attributes).pick(function(val) {
      return _.isArray(val);
    });

    for (var key in arrays) {
      var collection = App.data[key];

      this.set(key, []).save();

      _(arrays[key]).each(function(id) {
        collection.get(id).destroy();
      });
    }
  },

  removeFromList: function() {
    var list = this.currentList();
    list.save({ cards: _(list.get('cards')).without(this.id) });
  },

  initialize: function() {
    this.on('destroy', this.removeFromList);
  }
});
