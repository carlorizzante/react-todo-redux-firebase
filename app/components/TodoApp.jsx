var React = require("react");
var uuid = require("node-uuid");
var moment = require("moment");

// var TodoList = require("TodoList");
import TodoList from "TodoList";
// var TodoSearch = require("TodoSearch");
import TodoSearch from "TodoSearch";
// var AddTodo = require("AddTodo");
import AddTodo from "AddTodo";
var TodoAPI = require("TodoAPI");

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: TodoAPI.getTodos(),
      showCompleted: false,
      searchText: ""
    }
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  // handleToggle: function (id) {
  //   // console.log("Toggle!");
  //   var updatedTodos = this.state.todos.map((todo) => {
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed;
  //       todo.completedAt = todo.completed ? moment().unix() : undefined;
  //     }
  //     return todo;
  //   });
  //   this.setState({
  //     todos: updatedTodos
  //   });
  // },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    // return (
    //   <div className="row">
    //     <div className="column small-centered small-11 medium-6 large-5">
    //       <h1 className="page-title">Todo App</h1>
    //       <div className="container">
    //         <TodoSearch onSearch={this.handleSearch}/>
    //         <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
    //         <AddTodo onAddTodo={this.handleAddTodo}/>
    //       </div>
    //     </div>
    //   </div>
    // );

    return (
      <div className="row">
        <div className="column small-centered small-11 medium-6 large-5">
          <h1 className="page-title">Todo App <small><i>with Redux</i></small></h1>
          <div className="container">
            <TodoSearch onSearch={this.handleSearch}/>
            <TodoList />
            <AddTodo onAddTodo={this.handleAddTodo}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
