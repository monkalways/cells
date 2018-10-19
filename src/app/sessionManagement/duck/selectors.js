import { createSelector } from 'reselect';

const sessionSelector = (state) => state.sessionManagementData.session;

const getAuthenticationFlag = createSelector(
  sessionSelector,
  (session) => session.isAuthenticated,
);

const getCurrentUserCardNumber = createSelector(
  sessionSelector,
  (session) => session.userCardNumber,
);

const getCurrentUserName = createSelector(
  sessionSelector,
  (session) => session.userName,
);

const getRedirectLogoutFlag = createSelector(
  sessionSelector,
  (session) => session.redirectLogout,
);

export default {
  getAuthenticationFlag,
  getCurrentUserCardNumber,
  getCurrentUserName,
  getRedirectLogoutFlag,
};
