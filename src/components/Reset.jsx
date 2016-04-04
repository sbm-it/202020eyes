var React = require('react');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var TimeStore = require('../reflux/TimeStore.jsx');


var Reset = React.createClass({
    doReset: function() {
      Actions.toggleTimer(false);
    },
    render: function () {
    return (
      <button
        className='btn btn-danger btn-lg'
        onClick={this.doReset}
      >
        <b>
          Reset
        </b>
      </button>
    )
  }
});

module.exports = Reset;
