var React = require("react");
var TodoItem = require("TodoItem");

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((item) => {
        return (
          <TodoItem key={item.id} {...item}/>
        );
      });
    }

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
