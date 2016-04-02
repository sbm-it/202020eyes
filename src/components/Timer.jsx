var React = require('react');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var TimeStore = require('../reflux/TimeStore.jsx');


var Timer = React.createClass({
  mixins:[Reflux.listenTo(TimeStore, 'onChange')],
  getInitialState: function() {
    return {
      secondsRemaining: 0,
      bBreak: false
    };
  },
  tick: function() {
    this.setState({secondsRemaining: this.state.secondsRemaining - 1});

    if (this.state.secondsRemaining <= 0) {
      console.log('1', this.state.bBreak);
      clearInterval(this.state.interval);
      // 20 second break
      // blink 2 TimeS
      Actions.break(this.state.bBreak);
      this.setState({ secondsRemaining: 20 });
    }
  },
  componentDidMount: function() {
//    this.setState({ secondsRemaining: this.state.secondsRemaining });
//    this.setState({ bBreak: this.state.bBreak });
//    console.log('secondsRemaining', this.state.secondsRemaining);
//    console.log('bBreak', this.state.bBreak);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  onChange: function(event, data) {
  //  console.log('data', data);
    this.setState({secondsRemaining: data.minutes * 60});
    this.setState({bTick: data.bCountdown});
    this.setState({bBreak: data.bBreak});
    if (this.state.bTick) {
      this.state.interval = setInterval(this.tick, 1000);
    }
    else {
      clearInterval(this.state.interval);
    }
  },
  render: function() {
    return (
      <div>Seconds Remaining: {this.state.secondsRemaining}</div>
    );
  }
});


module.exports = Timer;
