var React = require("react");
var {connect} = require("react-redux");
var actions = require("actions");

export var AddTodo = React.createClass({

  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = null;
      // this.props.onAddTodo(todoText);
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
    // this.props.onNewTodo(todoText);
  },
  render: function () {
    return (
      <footer className="footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What else do you need to do?" />
          <button className="button expanded">Add New Todo</button>
        </form>
      </footer>
    );
  }
});

export default connect()(AddTodo);
