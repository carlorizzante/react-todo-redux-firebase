var React = require("react");

var TodoItem = React.createClass({
  render: function () {
    var {id, text, completed} = this.props;
    return (
      <li data-id={id} onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed} />
        {text}
      </li>
    );
  }
});

module.exports = TodoItem;
