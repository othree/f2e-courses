import Backbone from 'backbone';
import Todo from '../model/todo';

var Todos = Backbone.Collection.extend({
  model: Todo
});

export default Todos;
