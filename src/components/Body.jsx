var React = require('react');

var Panel = require('./Panel.jsx');

var Body = React.createClass({
  render: function () {
    return (
      <div id='Body'>
        <Panel />
      </div>
    )
  }
});

module.exports = Body;
