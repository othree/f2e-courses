var AppView = Backbone.View.extend({

  className: "document-row",

  events: {
    "click .submit":        "create",
    "click .button.delete": "destroy"
  },

  initialize: function() {
    this.todos = new Todos();
    this.listenTo(this.todos, "change", this.render);
  },

  render: function() {
  }

});
