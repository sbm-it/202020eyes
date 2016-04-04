var React = require('react');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var TimeStore = require('../reflux/TimeStore.jsx');

var Timer = require('./Timer.jsx');
var Number = require('./Number.jsx');
var Start = require('./Start.jsx');
var Reset = require('./Reset.jsx');

var Panel = React.createClass({
  render: function () {
    return (
      <div id='Panel'>
        Panel
        <Timer />
        <Number /><br />
        <Start /><br />
        <Reset />
      </div>
    )
  }
});

module.exports = Panel;
