var React = require("react"),
    ReactDOM = require("react-dom");
var {Router, Route, IndexRoute, hashHistory} = require("react-router");

var TodoApp = require("TodoApp");

var actions = require("actions");
var store = require("configureStore").configure();
console.log(store);

// Wire up Foundation
$(document).foundation();

// Load style
require("style!css!sass!./style/app.scss");

var unsubscribe = store.subscribe(() => {
  console.log("New state:", store.getState());
});

store.dispatch(actions.addTodo("Clean the yard"));
store.dispatch(actions.setSearchText("yard"));
store.dispatch(actions.toggleShowCompleted());

ReactDOM.render(
  <TodoApp />,
  document.getElementById("app")
);
