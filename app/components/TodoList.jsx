var React = require("react");
var TodoItem = require("TodoItem");

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="message">Nothing to do.</p>
        )
      }
      return todos.map((item) => {
        return (
          <TodoItem key={item.id} {...item} onToggle={this.props.onToggle}/>
        );
      });
    }

    return (
      <div>
        <ol className="todo-list">
          {renderTodos()}
        </ol>
      </div>
    );
  }
});

module.exports = TodoList;
