var React = require("react");
var Nav = require("./Nav");
var Footer = require("./Footer");

var Main = (props) => {
  return (
    <div>
      <Nav></Nav>
      <div className="row">
        <div className="columns small-centered medium-4 large-3">
          {props.children}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

module.exports = Main;
