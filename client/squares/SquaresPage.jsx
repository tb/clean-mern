import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import SquaresList from './SquaresList.jsx';
import {fetchSquares} from '../actions';

class SquaresPage extends Component {
  componentDidMount() {
    this.props.fetchSquares();
  }

  render() {
    return (
      <div>
        <SquaresList squares={this.props.squares} />
      </div>
    );
  }
}

SquaresPage.propTypes = {
  squares: PropTypes.array.isRequired,
  fetchSquares: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    squares: state.squares,
  };
}

export default connect(mapStateToProps, {fetchSquares})(SquaresPage);
