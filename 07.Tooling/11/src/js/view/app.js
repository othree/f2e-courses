import $ from 'jquery';
import Backbone from 'backbone';
import Mustache from 'mustache.js';
import Todos from '../collection/todos';
import Todo from '../model/todo';

var AppView = Backbone.View.extend({
 
  el: '.todo-app',

  events: {
    "submit #todo-form":    "create",
    "click .item":	    "go",
    "click .delete":        "remove"
  },

  initialize: function() {
    this.todos = new Todos();
    this.listenTo(this.todos, "add", this.render);
    this.listenTo(this.todos, "remove", this.render);
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

  remove: function (event) {
    event.preventDefault();
    var id = $(event.target).data('cid');
    this.todos.remove(id);
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

export default appView;
