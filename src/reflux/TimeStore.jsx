var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var TimeStore = Reflux.createStore({
  listenables: [Actions],
  onSetMinutes: function(minutes) {
    this.minutes = minutes;
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
    if (bBreak) {
      this.bgColor = 'green';
    }
    else {
      this.bgColor = 'white';
    }

  }
});

module.exports = TimeStore;
