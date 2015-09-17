var React = require("react/addons");

var express = require('express');
var expressApp = express();

var Express = React.createClass({
  getInitialState: function() {
    var stateObj = {};
    stateObj[this.props.name] = expressApp;
    if (this.props.serveStatic) {
      stateObj[this.props.name].use(express.static(this.props.serveStatic));
    }
    return stateObj;
  },

  //should be serve
  render: function() {
    this.state[this.props.name].listen(this.props.port, function() {
      console.log('Listening on port ' + this.props.port + '...');
      if (this.props.onReady) {
        this.props.onReady();
      }
    }.bind(this));

    var children = null;
    if (this.props.children) {
      if (this.props.children instanceof Array) {
        children = this.props.children.map(function (item, i) {
          return React.addons.cloneWithProps(item, {
            app: this.state[this.props.name]
          });
        }, this);
      } else {
        var item = this.props.children;
        children = React.addons.cloneWithProps(item, {
          app: this.state[this.props.name]
        });
      }
    }

    return <div>{children}</div>;
  }
});

exports.Express = Express;