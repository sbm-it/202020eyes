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
      <button className='button button-blue'
        className='button button-blue'
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
