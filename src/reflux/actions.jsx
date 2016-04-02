var Reflux = require('reflux');

var Actions = Reflux.createActions([
  'setMinutes',
  'toggleTimer',
  'break'
]);

module.exports = Actions;
