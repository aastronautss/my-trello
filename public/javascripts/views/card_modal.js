App.CardModalView = Backbone.View.extend({
  tagName: 'div',
  className: 'modal',
  template: App.templates.card_modal,
  events: {
    'click .overlay': 'remove',
    'click .edit-description': 'editDescription'
  },

  editDescription: function() {

  },

  showComments: function() {

  },

  showComment: function(comment) {

  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.showComments();
  },

  initialize: function() {
    this.render();
  }
});
