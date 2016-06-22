var TrelloRouter = Backbone.Router.extend({
  routes: {
    ':boardID': 'showBoard'
  },

  showBoard: function(boardID) {
    App.data.boards.trigger('display', boardID);
  }
});

App.router = new TrelloRouter();
Backbone.history.start({ pushState: true });

$(document).on('change', 'select.boards', function(e) {
  e.preventDefault();
  App.router.navigate($(e.currentTarget).find(':selected').attr('value'), { trigger: true });
});
