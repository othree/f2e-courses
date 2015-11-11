import React from 'react';
import TodoItem from './todo-item.jsx';
import TodoForm from './todo-form.jsx';
import TodoStore from '../stores/todos.js';
import TodoActions from '../actions/todo-actions';

var TodoApp = React.createClass({
  getInitialState: () => { 
    return {
      todos: TodoStore.tojson()
    };
  },
  componentDidMount: function () {
    TodoStore.on('change', () => {
      this.setState({todos: TodoStore.tojson()});
    });
  },
  add: title => {
    TodoActions.add(title);
  },
  render: function() {
    var items = this.state.todos;
    return (
      <div>
        <ol>
          {items.map(function(item) {
            return <TodoItem item={item} />;
          })}
        </ol>
        <TodoForm onSubmit={this.add} />
      </div>
    );
  }
});

export default TodoApp;
