var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var TimeStore = Reflux.createStore({
  listenables: [Actions],
  onSetMinutes: function(minutes) {
    this.minutes = minutes;
    this.trigger('change', this.minutes);
  },
  onToggleTimer: function(bCountdown) {
    this.bCountdown = bCountdown;
    this.trigger('timer', this.bCountdown);
  },
  // Refresh function
  fireUpdate: function() {
    this.trigger('change', this.minutes);
  }
});

module.exports = TimeStore;
