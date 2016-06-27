var React = require("react"),
    ReactDOM = require("react-dom");
var {Router, Route, IndexRoute, hashHistory} = require("react-router");
var Main = require("./components/Main");
var About = require("./components/About");
var Contact = require("./components/Contact");

// Wire up Foundation
$(document).foundation();

// Load style
require("style!css!sass!./style/app.scss");

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="contact" component={Contact}/>
      <IndexRoute component={About}/>
    </Route>
  </Router>,
    document.getElementById("app")
);
