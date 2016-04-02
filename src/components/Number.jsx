var React = require('react');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var TimeStore = require('../reflux/TimeStore.jsx');

var Number = React.createClass({
  getInitialState: function() {
    return {minutes: .3};
  },
  componentDidMount: function() {
    Actions.setMinutes(this.state.minutes);
  },
  onInputChange: function(e) {
    this.setState({minutes: e.target.value});
    Actions.setMinutes(e.target.value);
  },
  render: function () {
    return (
      <input
        type="number"
        value={this.state.minutes}
        onChange={this.onInputChange}
      />
    )
  }
});

module.exports = Number;
