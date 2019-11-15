import { RECEIVE_API_VERSION } from '../actions';

export default function apiVersionReducer(state = {"version": ""}, action) {
  switch (action.type) {
    case RECEIVE_API_VERSION:
      return action.version;
    default:
      return state;
  }
};
