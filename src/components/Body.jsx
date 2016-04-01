var React = require('react');

var Panel = require('./Panel.jsx');

var Body = React.createClass({
  render: function () {
    return (
      <div id='Body'>
        Body
        <Panel />
      </div>
    )
  }
});

module.exports = Body;
