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
    this.model.removeFromBoard();
    this.model.clearCards();
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

  moveCard: function(event, ui) {
    var cardID = ui.draggable.data('id');
    var card = App.data.cards.get(cardID);

    card.removeFromList();
    this.model.save({ cards: this.model.get('cards').concat([cardID]) });

    ui.draggable.appendTo(this.$el.find('ul')).removeClass('noclick');
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo('ul#lists');
    this.showCards();
  },

  initialize: function() {
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'save', this.render);

    this.$el.attr('data-id', this.model.get('id'));

    this.$el.droppable({
      accept: 'li.card',
      hoverClass: 'hovered',
      drop: this.moveCard.bind(this)
    });

    this.render();
  }
});
