import React, { Component }  from 'react';
import ServerCaller from './components/ServerCaller';

export default class MyWebApp extends Component {
  static propTypes = {  };
  static defaultProps = {  };
  state = { };

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <hr />
        <span>Hello World! - This is static content via MyWebApp component!</span>
        <hr />
        <ServerCaller />
        <hr />
      </div>

    );
  };
}