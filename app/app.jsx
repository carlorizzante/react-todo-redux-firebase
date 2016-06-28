var React = require("react"),
    ReactDOM = require("react-dom");
var {Router, Route, IndexRoute, hashHistory} = require("react-router");

var TodoApp = require("TodoApp");

// Wire up Foundation
$(document).foundation();

// Load style
require("style!css!sass!./style/app.scss");

ReactDOM.render(
  <TodoApp />,
  document.getElementById("app")
);
