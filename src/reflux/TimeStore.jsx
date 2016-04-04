var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var TimeStore = Reflux.createStore({
  listenables: [Actions],
  onSetMinutes: function(minutes) {
    this.minutes = minutes;
    this.defaultMinutes = minutes;
    this.trigger('change', this);
  },
  onToggleTimer: function(bCountdown) {
    this.bCountdown = bCountdown;
    if (bCountdown) {
      this.bgColor = 'green';
    }
    else {
      this.bgColor = 'white';
    }
    this.trigger('change', this);
  },
  onBreak: function(bBreak) {
console.log('onBreak111 - ', typeof(bBreak));
    if (bBreak || typeof(bBreak) == null) {
      this.minutes = .4;    // 20 seconds
      this.bgColor = 'red';
    }
    else {
      this.minutes = this.defaultMinutes;
      this.bCountdown = true;
      this.bgColor = 'green';
    }
    this.bBreak = !bBreak;
    this.trigger('change', this);
  }
});

module.exports = TimeStore;
