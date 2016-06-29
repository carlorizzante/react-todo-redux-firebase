var React = require("react");

var TodoItem = React.createClass({
  render: function () {
    var {id, text} = this.props;
    return (
      <div>{text}</div>
    );
  }
});

module.exports = TodoItem;
