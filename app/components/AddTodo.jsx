var React = require("react");

var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;
    if (todoText.length > 0) {
      this.refs.todoText.value = null;
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
    // this.props.onNewTodo(todoText);
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What else do you need to do?" />
          <button className="button expanded">Add New Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
