App.ListView = Backbone.View.extend({
  tagName: 'li',
  className: 'list',
  template: App.templates.list,
  events: {
    'click .new-card': 'showNewCardForm',
    'submit .new-card-form form': 'addCard',
    'click .cancel-new-card': 'hideNewCardForm',
    'click .delete': 'delete',
    'blur textarea': 'update'
  },

  update: function(e) {
    var title = $(e.currentTarget).val();
    if (title) {
      this.model.save({ title: title });
    }
    else {
      this.render();
    }
  },

  delete: function(e) {
    e.preventDefault();
    var boardID = location.pathname.replace(/^\//, '');
    var board = App.data.boards.get(boardID);
    var boardLists = board.get('lists');

    board.save({ lists: _(boardLists).without(this.model.id) });
    this.clearCards();
    this.model.destroy();
  },

  addCard: function(e) {
    e.preventDefault();
    var $e = $(e.target);
    var title = $e.find('[name=title]').val();
    var new_card;

    if (title) {
      new_card = App.data.cards.create({ title: title });
      this.model.save({ cards: this.model.get('cards').concat([new_card.id]) });
      this.showCard(new_card);
    }

    this.hideNewCardForm();
  },

  clearCards: function() {
    var cardIDs = this.model.get('cards');
    _(cardIDs).each(function(id) {
      var card = App.data.cards.get(id);
      card.clear();
      card.destroy();
    });
  },

  showNewCardForm: function(e) {
    e.preventDefault();
    var $e = $(e.target);
    $e.hide().prev('.new-card-form').show();
  },

  hideNewCardForm: function(e) {
    if (e) { e.preventDefault() };
    this.$el.find('.new-card-form').hide().next('.new-card').show();
  },

  showCards: function() {
    var cardIDs = this.model.get('cards');

    _(cardIDs).each(function(id) {
      var card = App.data.cards.get(id);
      this.showCard(card);
    }, this);
  },

  showCard: function(card) {
    var view = new App.CardView({ model: card });
    this.$el.find('.cards').append(view.el);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo('ul#lists');
    this.showCards();
  },

  initialize: function() {
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'save', this.render);
    this.render();
  }
});
