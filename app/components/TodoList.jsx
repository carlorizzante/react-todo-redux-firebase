var React = require("react");
var {connect} = require("react-redux");
// var Todo = require("Todo");
import Todo from "Todo";
var TodoAPI = require("TodoAPI");

export var TodoList = React.createClass({
  render: function () {
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="message">Nothing to do.</p>
        )
      }
      // return todos.map((item) => {
      //   return (
      //     <Todo key={item.id} {...item} onToggle={this.props.onToggle}/>
      //   );
      // });
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (
          <Todo key={todo.id} {...todo} />
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

export default connect(
  (state) => {
    return state; // all properties
  }
)(TodoList);
