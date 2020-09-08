import { SET_TOKEN, UNSET_TOKEN } from '../types';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.token;
    case UNSET_TOKEN:
      return INITIAL_STATE;
    default:
      return state;
  }
};
