var React = require("react");

var Footer = React.createClass({
  render: function () {
    return (
      <footer>
        <div className="row">
          <div className="columns small-12">
            <small>Some &copy;copy here.</small>
          </div>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
