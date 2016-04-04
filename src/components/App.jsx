var React = require('react');
var ReactDOM = require('react-dom');
var Body = require('./Body.jsx');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var TimeStore = require('../reflux/TimeStore.jsx');

var App = React.createClass({
  mixins:[Reflux.listenTo(TimeStore, 'changeBackground')],
  getInitialState: function () {
    return { color: "white" };
  },
  changeBackground: function (event, data) {
    this.setState({ bgColor: data.bgColor });
  },
  render: function () {
    var style = { backgroundColor : this.state.bgColor };

    return (
      <div id='App' style={style}>
        <Body />
      </div>
    )
  }
});

module.exports = App;

//ReactDOM.render(<App />, document.getElementById('main-container'));
