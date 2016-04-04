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
        type='button'
        className='btn btn-success btn-lg btn-block'
        onClick={this.doStart}
      >
      Start
      </button>
    )
  }
});

module.exports = Start;
