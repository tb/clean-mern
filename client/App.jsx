import React, {Component} from 'react';
import {Link, Match} from 'react-router';

import Hello from './hello/Hello';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <Link to="hello">Hello Im your computer</Link>
        </div>
        <Match pattern="/hello" component={Hello} />
      </div>
    );
  }
}
