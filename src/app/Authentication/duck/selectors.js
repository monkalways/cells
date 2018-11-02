import { createSelector } from 'reselect';

// Basic selectors
const isAuthenticated = (state) => state.authentication.authenticated;

// Reselect selectors
const isAuthenticatedState = createSelector(
  [isAuthenticated],
  (authenticated) => authenticated,
);

export default {
  isAuthenticatedState,
};
