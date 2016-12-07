export const SET_SQUARES = 'SET_SQUARES';

export function setSquares(squares) {
  return {
    type: SET_SQUARES,
    squares,
  };
}

export function fetchSquares() {
  const data = [
    {
      title: 'Some SQ',
      value: 'S45',
      const: 'Const Sq',
    },
    {
      title: 'Some SQ 2',
      value: 'S35',
      const: 'Const S11',
    },
  ];
  return dispatch => dispatch(setSquares(data));
}
