App.NewBoardView = Backbone.View.extend({
  tagName: "div",
  className: "modal",
  template: App.templates.new_board,

  events: {
    "submit form": "createBoard",
    'click .overlay': 'popState'
  },

  popState: function() {
    this.remove();
    window.history.back();
  },

  createBoard: function(e) {
    e.preventDefault();
    var title = $(e.currentTarget).find('[type=text]').val();
    var new_board = App.data.boards.create({ title: title });
    this.remove();
    App.router.navigate('/');
    window.location.reload(true);
  },

  render: function() {
    this.$el.html(this.template());
    $('#my-trello').append(this.$el);
    $('[type=text]').select();
  },

  initialize: function() {
    this.render();
  }
});
