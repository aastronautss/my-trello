App.CardModalView = Backbone.View.extend({
  tagName: 'div',
  className: 'modal',
  template: App.templates.card_modal,
  events: {
    'click .overlay': 'remove',
    'click .edit-description': 'editDescription',
    'submit .new-comment': 'addComment'
  },

  editDescription: function() {

  },

  addComment: function(e) {
    e.preventDefault();
    var body = $(e.currentTarget).find('[name=comment-body]').val();
    var new_comment;

    if (body) {
      new_comment = App.data.comments.create({ body: body });
      this.model.save({ comments: this.model.get('comments').concat([new_comment.id]) })
      this.showComment(new_comment);
    }
    e.currentTarget.reset();
  },

  showComments: function() {
    var commentIDs = this.model.get('comments');

    _(commentIDs).each(function(id) {
      var comment = App.data.comments.get(id);
      this.showComment(comment);
    }, this);
  },

  showComment: function(comment) {
    var view = new App.CommentView({ model: comment });
    this.$el.find('.comment-list').append(view.el);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.showComments();
  },

  initialize: function() {
    this.render();
  }
});
