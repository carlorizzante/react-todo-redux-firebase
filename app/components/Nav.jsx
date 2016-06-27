var React = require("react");
var {Link, IndexLink} = require("react-router");

var Nav = React.createClass({
  render: function () {
    return (
      <nav id="site-navigation" className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li><IndexLink to="/" className="active-menu-link">React Boilerplate</IndexLink></li>
            <li><IndexLink to="/" activeClassName="active-menu-link">About</IndexLink></li>
            <li><Link to="/contact" activeClassName="active-menu-link">Contact</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>by <a href="http://carlorizzante.com">Carlo Rizzante</a></li>
          </ul>
        </div>
      </nav>
    );
  }
})

module.exports = Nav;
