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

  clear: function() {
    var arrays = _(this.attributes).pick(function(val) {
      return _.isArray(val);
    });

    for (var key in arrays) {
      var collection = App.data[key];
      _(arrays[key]).each(function(id) {
        collection.get(id).destroy();
      });
    }
  }
});
