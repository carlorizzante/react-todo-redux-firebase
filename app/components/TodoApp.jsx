var React = require("react");
var TodoList = require("TodoList");

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: "Walk the dog"
        },
        {
          id: 2,
          text: "Water flowers"
        },
        {
          id: 3,
          text: "Go to the Moon"
        },
        {
          id: 4,
          text: "Ask funny questions"
        }
      ]
    }
  },
  render: function () {
    var {todos} = this.state;
    return (
      <TodoList todos={todos} />
    );
  }
});

module.exports = TodoApp;
