App.ApplicationView = Backbone.View.extend({
  el: '#my-trello',
  template: App.templates.application,

  refreshBoardSelect: function() {
    this.render();
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
    this.listenTo(App.data.boards, 'create', this.refreshBoardSelect);
    this.listenTo(App.data.boards, 'display', this.showBoard);

    App.fetchCollections();
    this.render();
  }
});
