import React, {Component} from 'react';
import {Link, Match} from 'react-router';
import Dragula from 'react-dragula';

import SquaresPage from './squares/SquaresPage.jsx';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          The grid
        </header>
        <div>
          <Link to="squares">Lets play</Link>
        </div>
        <div className="dragula-zone">
          <div>Swap me around</div>
          <div>Swap her around</div>
          <div>Swap him around</div>
          <div>Swap them around</div>
          <div>Swap us around</div>
          <div>Swap things around</div>
          <div>Swap everything around</div>
        </div>
        <Match pattern="/squares" component={SquaresPage} />
      </div>
    );
  }
}
