App.ApplicationView = Backbone.View.extend({
  el: '#my-trello',
  template: App.templates.application,

  displayNewBoard: function(model) {
    var id = model.id;
    this.render();
    this.$el.find('.boards > option[value="' + id + '"]')
            .prop('selected', true)
            .change();
  },

  showBoard: function() {
    var current_board = App.current_board;
    new App.BoardView({ model: App.data.boards.get(current_board) });
  },

  render: function() {
    this.$el.html(this.template({
      boards: App.data.boards.toJSON()
    }));
  },

  initialize: function() {
    App.fetchCollections();

    this.listenTo(App.data.boards, 'add', this.displayNewBoard);
    this.listenTo(App.data.boards, 'display', this.showBoard);

    this.render();
  }
});
