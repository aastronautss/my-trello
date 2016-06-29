App.ApplicationView = Backbone.View.extend({
  el: '#my-trello',
  template: App.templates.application,

  refreshBoardSelect: function() {
    this.render();
  },

  showBoard: function(boardID) {
    new App.BoardView({ model: App.data.boards.get(boardID) });
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
