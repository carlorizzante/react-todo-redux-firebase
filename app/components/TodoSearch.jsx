var React = require("react");

var TodoSearch = React.createClass({
  handleSearch: function () {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;
    // console.log(searchText);
    // console.log(showCompleted);
    this.props.onSearch(showCompleted, searchText);
  },
  render: function () {
    return (
      <header className="header">
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
      </header>
    );
  }
});

module.exports = TodoSearch;
