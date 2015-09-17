var React = require("react/addons");

var Get = React.createClass({
  render: function() {
    this.props.app.get(this.props.pattern, this.props.handler);
    return null;
  }
});

exports.Get = Get;