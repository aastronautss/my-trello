App.BoardView = Backbone.View.extend({
  tagName: 'div',
  template: App.templates.board,
  events: {
    'click .idle': 'showNewListForm',
    'submit #new-list-form': 'addList',
    'click .cancel-new-list': 'hideNewListForm'
  },

  addList: function(e) {
    e.preventDefault();
    var title = $(e.currentTarget).find('[name="title"]').val();
    var new_list = App.data.lists.create({ title: title });

    this.model.save({ lists: this.model.get('lists').concat([new_list.id]) });
    new App.ListView({ model: new_list });
    this.hideNewListForm();
  },

  showNewListForm: function(e) {
    e.preventDefault();
    var $e = $(e.currentTarget);

    $e.removeClass('idle');
    $e.find('[type="text"]').focus().select();
  },

  hideNewListForm: function(e) {
    if (e) { e.preventDefault(); }
    $('.new-list').addClass('idle');
  },

  showLists: function() {
    var listIDs = this.model.get('lists');

    _(listIDs).each(function(id) {
      var list = App.data.lists.get(id);
      new App.ListView({ model: list });
    });
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    $('main').html(this.$el);
    this.showLists();
  },

  initialize: function() {
    this.render();
  }
});
