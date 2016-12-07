import { SET_SQUARES } from '../actions';

export default function squares(state = [], action = []) {
  switch (action.type) {
    case SET_SQUARES:
      return action.squares;
    default:
      return state;
  }
}
