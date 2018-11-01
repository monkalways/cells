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
    default:
      return state;
  }
};

export default authenticationReducer;
