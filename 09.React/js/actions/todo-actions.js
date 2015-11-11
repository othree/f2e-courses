import todosDispatcher from '../dispatchers/todos-dispatcher';

var TodoActions = {
  add: title => {
    todosDispatcher.dispatch({
      action: 'add',
      item: {
        title: title
      }
    });
  }
};

export default TodoActions;
