var React = require("react/addons");

var cors = require('cors');

var UseCors = React.createClass({
  render: function() {
    this.props.app.use(cors(this.props.options));
    return null;
  }
});

exports.UseCors = UseCors;