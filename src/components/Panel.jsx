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
        <Timer />
        <Number /><br />
        <div className="row buttons20">
          <Start />
          <Reset />
        </div>
      </div>
    )
  }
});

module.exports = Panel;
