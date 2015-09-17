import React, { Component }  from 'react';

export default class ServerCaller extends Component {
  static propTypes = {  };
  static defaultProps = {  };
  state = {
    message: "Pending...",
    error: false
  };

  componentDidMount() {
    //Do the ajax call
    $.ajax({
      url: "http://localhost:9090/hi"
    }).done(function( data ) {
      console.log( "Data:", data );
      this.setState({
        message: data,
        error: false
      })
    }.bind(this)).error(function(e) {
      console.log( "Error:", e.error );
      this.setState({
        message: "Error - check console!",
        error: true
      })
    }.bind(this));
  }
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <span><span style={{color: (this.state.error ? "red" : "green")}}>{this.state.message}!</span> - This is dynamic content via ServerCaller component!</span>
      </div>

    );
  };
}