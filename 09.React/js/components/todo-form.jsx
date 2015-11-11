import React from 'react';

var TodoForm = React.createClass({
  handleSubmit: function (event) {
    this.props.onSubmit(this.refs.title.getDOMNode().value);
    event.preventDefault();
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title" ref="title" />
      </form>
    );
  }
});

export default TodoForm;
