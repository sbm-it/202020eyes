var React = require('react');
var ReactDOM = require('react-dom');
var Body = require('./Body.jsx');

var App = React.createClass({
  render: function () {
    return (
      <div id='App'>
        App
        <Body />
      </div>
    )
  }
});

module.exports = App;

//ReactDOM.render(<App />, document.getElementById('main-container'));
