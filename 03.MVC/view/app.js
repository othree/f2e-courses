var AppView = Backbone.View.extend({
 
  el: '.todo-app',

  events: {
    "submit #todo-form":    "create",
    "click .item":	    "go",
    "click .delete":        "destroy"
  },

  initialize: function() {
    this.todos = new Todos();
    this.listenTo(this.todos, "add", this.render);
  },

  go: function (event) {
    event.preventDefault();
    var href = $(event.target).attr('href');
    route.navigate(href, {trigger: true});
  },

  create: function (event) {
    event.preventDefault();
    var title = $(event.target).find('[name=title]').val();
    if (title) {
      this.todos.add(new Todo({title: title}));
    }
  },

  enable: function () {
    this.$el.show();
  },

  disable: function () {
    this.$el.hide();
  },

  template: $('#app-tmpl').html(),

  render: function() {
    var todos = [];
    this.todos.forEach(function (todo) {
      todos.push({
	id: todo.cid,
	title: todo.get('title')
      })
    })
    this.$el.html(Mustache.render(this.template, {todos: todos}));
  }

});

var appView = new AppView();
