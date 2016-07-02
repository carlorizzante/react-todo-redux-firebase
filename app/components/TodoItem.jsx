var React = require("react");
var moment = require("moment");

var TodoItem = React.createClass({
  render: function () {
    var {id, text, completed, createdAt, completedAt} = this.props;
    var renderDate = () => {
      var message = "Created "
      var timestamp = createdAt;
      if (completed) {
        message = "Completed ";
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format("MMM Do Y @ H:mm a");
    };
    return (
      <li data-id={id} onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed} />
        <p>{text}</p>
        <p>{renderDate()}</p>
      </li>
    );
  }
});

module.exports = TodoItem;
