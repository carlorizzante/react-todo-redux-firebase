var React = require("react");
// var uuid = require("node-uuid");
var moment = require("moment");

import TodoList from "TodoList";
import TodoSearch from "TodoSearch";
import AddTodo from "AddTodo";

var TodoApp = React.createClass({
  render: function () {
    return (
      <div className="row">
        <div className="column small-centered small-11 medium-6 large-5">
          <h1 className="page-title">Todo App<br /><small className="small"><i>with Redux</i></small></h1>
          <div className="container">
            <TodoSearch/>
            <TodoList/>
            <AddTodo/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
