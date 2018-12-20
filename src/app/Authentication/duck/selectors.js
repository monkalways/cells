import { createSelector } from 'reselect';

// Basic selectors
const isAuthenticated = (state) => state.authentication.authenticated;
const isSignInDialogOpen = (state) => state.authentication.signInDialogOpen;
const isAuthenticating = (state) => state.authentication.authenticating;
const isAuthenticationFailed = (state) => state.authentication.authenticationFailed;
const getUserName = (state) => state.authentication.userName;
const getErrorMessage = (state) => state.authentication.errorMessage;

// Reselect selectors
const isAuthenticatedState = createSelector(
  [isAuthenticated],
  (authenticated) => authenticated,
);

const isSignInDialogOpenState = createSelector(
  [isSignInDialogOpen],
  (signInDialogOpen) => signInDialogOpen,
);

const isAuthenticatingState = createSelector(
  [isAuthenticating],
  (authenticating) => authenticating,
);

const isAuthenticationFailedState = createSelector(
  [isAuthenticationFailed],
  (authenticationFailed) => authenticationFailed,
);

const getUserNameState = createSelector([getUserName], (userName) => userName);

const getErrorMessageState = createSelector(
  [getErrorMessage],
  (errorMessage) => errorMessage,
);

export default {
  isAuthenticatedState,
  isSignInDialogOpenState,
  isAuthenticatingState,
  isAuthenticationFailedState,
  getUserNameState,
  getErrorMessageState,
};
