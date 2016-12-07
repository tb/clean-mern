import React, {Component, PropTypes} from 'react';

class SquaresList extends Component {
  render() {
    return (
      <div>
        {this.props.squares.length ? 'There are no squares' : 'yep here are the sequares'}
      </div>
    );
  }
}

SquaresList.propTypes = {
  squares: PropTypes.array.isRequired,
};

export default SquaresList;
