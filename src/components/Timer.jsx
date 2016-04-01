var React = require('react');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var TimeStore = require('../reflux/TimeStore.jsx');


var Timer = React.createClass({
  mixins:[Reflux.listenTo(TimeStore, 'onChange'),
    Reflux.listenTo(TimeStore, 'onTimer')
  ],
  getInitialState: function() {
    return {
      secondsRemaining: 0
    };
  },
  tick: function() {
//  console.log('sec - ', this.state.secondsRemaining);
    this.setState({secondsRemaining: this.state.secondsRemaining - 1});
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
    }
  },
  componentDidMount: function() {
    this.setState({ secondsRemaining: this.state.secondsRemaining });

  //  this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  onChange: function(event, time) {
    this.setState({secondsRemaining: time * 60});
  console.log('onchange - ', this.state.secondsRemaining);

  },
  onTimer: function(event, bCountdown) {
    console.log('ontimer - ', this.state.secondsRemaining);
  this.setState({bTick: bCountdown});
    if (this.state.bTick) {
      this.interval = setInterval(this.tick, 1000);
    }
  },
  render: function() {
    return (
      <div>here {this.state.secondsRemaining} Seconds Remaining: {this.state.secondsRemaining}</div>
    );
  }
});


module.exports = Timer;
