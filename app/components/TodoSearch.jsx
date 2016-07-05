var React = require("react");
var {connect} = require("react-redux");
var actions = require("actions");

export var TodoSearch = React.createClass({
  // handleSearch: function () {
  //   var showCompleted = this.refs.showCompleted.checked;
  //   var searchText = this.refs.searchText.value;
  //   // console.log(searchText);
  //   // console.log(showCompleted);
  //   this.props.onSearch(showCompleted, searchText);
  // },
  render: function () {
    var {dispatch, showCompleted, searchText} = this.props;
    return (
      <header className="header">
        <form>
          <div>
            <input type="text" ref="searchText" value={searchText} placeholder="Search todo..." onChange={() => {
                var searchText = this.refs.searchText.value;
                dispatch(actions.setSearchText(searchText));
              }} />
          </div>
          <div>
            <label>
              <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                  dispatch(actions.toggleShowCompleted());
                }} />
              <span>Show completed todos</span>
            </label>
          </div>
        </form>
      </header>
    );
  }
});

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
