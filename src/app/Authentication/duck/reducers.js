import types from './types';

const defaultAuthenticationState = {
  authenticated: false,
  signInDialogOpen: false,
  authenticating: false,
  authenticationFailed: false,
  cardId: null,
  userName: null,
};

const authenticationReducer = (state = defaultAuthenticationState, action) => {
  switch (action.type) {
    case types.START_SIGN_IN:
      return {
        ...state,
        signInDialogOpen: true,
      };
    case types.START_AUTHENTICATE:
      return {
        ...state,
        cardId: action.payload.cardId,
        authenticating: true,
      };
    case types.AUTHENTICATE_SUCCESS:
      return {
        ...state,
        authenticating: false,
        authenticated: true,
        signInDialogOpen: false,
        userName: action.payload.userName,
      };
    case types.AUTHENTICATE_FAIL:
      return {
        ...state,
        authenticating: false,
        authenticationFailed: true,
      };
    case types.CANCEL_AUTHENTICATE:
      return defaultAuthenticationState;
    case types.LOG_OUT:
      return {
        ...state,
        authenticated: false,
        userName: null,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
