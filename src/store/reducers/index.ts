import state, { State } from '../state';
import { SET_ERROR_STATE } from '../actions/login';

const replaceMe = (state: State, { type, payload }) => {
  switch (type) {
    case SET_ERROR_STATE:
      return {
        ...state,
        login: {
          ...state.login,
          error: payload.value
        }
      }
    default:
      return state;
  }
};
/**
 * Application root reducer
 */
export default replaceMe;
