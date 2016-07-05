var React = require("react");
var {connect} = require("react-redux");
var moment = require("moment");

var actions = require("actions");

export var Todo = React.createClass({
  render: function () {
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClass = completed ? "todo todo-completed" : "todo todo-not-completed";
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
      <li data-id={id} className={todoClass} onClick={() => {
          dispatch(actions.toggleTodo(id));
          // this.props.onToggle(id);
        }}>
        <div className="todo-checkbox">
          <input type="checkbox" checked={completed} />
        </div>
        <div>
          <p>{text}</p>
          <p className="todo-meta">{renderDate()}</p>
        </div>
      </li>
    );
  }
});

export default connect()(Todo);
