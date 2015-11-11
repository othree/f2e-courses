import { EventEmitter } from 'events';
import assign from 'object-assign';
import todosDispatcher from '../dispatchers/todos-dispatcher.js';

var CHANGE_EVENT = 'change';

var _todos = [];

var TodoStore = assign({}, EventEmitter.prototype, {

  tojson: () => _todos,

  dispatchToken: todosDispatcher.register( function(payload) {
    if (payload.action === 'add') {
      var item = payload.item;
      item.id = _todos.length;
      _todos.push(item);
      TodoStore.emit(CHANGE_EVENT);
    }
  })

});

export default TodoStore;
