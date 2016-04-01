var React = require('react');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var TimeStore = require('../reflux/TimeStore.jsx');


var Start = React.createClass({
    doStart: function() {
      Actions.toggleTimer(true);
    },
    render: function () {
    return (
      <button
        className='button button-blue'
        onClick={this.doStart}
      >
      Start
      </button>
    )
  }
});

module.exports = Start;
