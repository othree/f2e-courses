import React from 'react';

var TodoItem = React.createClass({
  render: function() {
    var item = this.props.item;
    return (
      <li id={item.id}>
        {item.title}
      </li>
    );
  }
});

export default TodoItem;
