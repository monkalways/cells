import { createSelector } from 'reselect';

// Basic selectors
const isAuthenticated = (state) => state.authentication.authenticated;
const isSignInDialogOpen = (state) => state.authentication.signInDialogOpen;
const isAuthenticating = (state) => state.authentication.authenticating;
const isAuthenticationFailed = (state) => state.authentication.authenticationFailed;

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

export default {
  isAuthenticatedState,
  isSignInDialogOpenState,
  isAuthenticatingState,
  isAuthenticationFailedState,
};
