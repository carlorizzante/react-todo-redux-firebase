var React = require("react");
var TodoList = require("TodoList");
var TodoSearch = require("TodoSearch");
var AddTodo = require("AddTodo");
var uuid = require("node-uuid");

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: null,
      todos: [
        {
          id: uuid(),
          text: "Walk the dog"
        },
        {
          id: uuid(),
          text: "Water flowers"
        },
        {
          id: uuid(),
          text: "Go to the Moon"
        },
        {
          id: uuid(),
          text: "Ask funny questions"
        }
      ]
    }
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          // id: this.state.todos.length + 1,
          id: uuid(),
          text: text
        }
      ]
    });
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
