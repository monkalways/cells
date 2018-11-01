import types from './types';

const defaultAuthenticationState = {
  authenticated: false,
};

const authenticationReducer = (state = defaultAuthenticationState, action) => {
  switch (action.type) {
    case types.AUTHENTICATE:
      return {
        ...state,
        authenticated: action.payload,
      };
    case types.LOG_OUT:
      return {
        authenticated: false,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
