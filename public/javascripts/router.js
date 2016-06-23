var TrelloRouter = Backbone.Router.extend({
  routes: {
    'new': App.newBoard,
    ':boardID': 'showBoard'
  },

  index: function() {
    App.indexView();
  },

  showBoard: function(boardID) {
    App.data.boards.trigger('display', boardID);
  },

  initialize: function() {
    this.route(/^\/?$/, 'index', this.index);
  }
});

App.router = new TrelloRouter();
Backbone.history.start({ pushState: true });

$(document).on('change', 'select.boards', function(e) {
  e.preventDefault();
  App.router.navigate($(e.currentTarget).find(':selected').attr('value'), { trigger: true });
});

$(document).on('click', "a[href^='/']", function(e) {
  e.preventDefault();
  App.router.navigate($(e.currentTarget).attr('href').replace(/^\//, ''), { trigger: true });
});
