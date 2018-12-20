import types from './types';

const defaultAuthenticationState = {
  authenticated: false,
  signInDialogOpen: false,
  authenticating: false,
  authenticationFailed: false,
  cardId: null,
  userName: null,
  errorMessage: null,
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
        cardId: action.cardId,
        authenticating: true,
      };
    case types.AUTHENTICATE_SUCCESS:
      return {
        ...state,
        authenticating: false,
        authenticated: true,
        signInDialogOpen: false,
        userName: action.userName,
        errorMessage: null,
      };
    case types.AUTHENTICATE_FAIL:
      return {
        ...state,
        authenticating: false,
        authenticationFailed: true,
        errorMessage: action.errorMessage,
      };
    case types.CANCEL_AUTHENTICATE:
    case types.LOG_OUT:
      return defaultAuthenticationState;
    default:
      return state;
  }
};

export default authenticationReducer;
