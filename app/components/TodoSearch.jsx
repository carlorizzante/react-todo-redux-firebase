var React = require("react");

var TodoSearch = React.createClass({
  handleSearch: function () {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;
    // console.log(searchText);
    // console.log(showCompleted);
    this.props.onSearch(showCompleted, searchText);
  },
  // handleCheckbox: function () {
  //   // console.log("check!");
  // },
  render: function () {
    return (
      <div>
        <form>
          <div>
            <input type="text" ref="searchText" onChange={this.handleSearch} placeholder="Search todo..." />
          </div>
          <div>
            <label>
              <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
              <span>Show completed todos</span>
            </label>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = TodoSearch;
