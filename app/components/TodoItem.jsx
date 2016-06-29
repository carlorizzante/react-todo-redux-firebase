var React = require("react");

var TodoItem = React.createClass({
  render: function () {
    var {id, text} = this.props;
    return (
      <li data-id={id}>{text}</li>
    );
  }
});

module.exports = TodoItem;
