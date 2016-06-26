App.CardView = Backbone.View.extend({
  tagName: 'li',
  className: 'card',
  template: App.templates.card,
  events: {
    'click': 'showModal',
  },

  showModal: function(e) {
    e.preventDefault();
    var modal_view = new App.CardModalView({ model: this.model });
    modal_view.$el.appendTo('#my-trello');
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    // this.$el.draggable();
    return this;
  },

  initialize: function() {
    this.listenTo(this.model, 'save', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.render();
  }
});
