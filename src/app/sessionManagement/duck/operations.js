import actions from './actions';
import services from './services';

const userAuthentication = (cardSerialNumber) => async (dispatch) => {
  try {
    const data = await services.userAuthentication(cardSerialNumber);
    dispatch(actions.userAuthenticationSuccess(data));
  } catch (error) {
    dispatch(actions.userAuthenticationFailure(error));
  }
};

const logout = () => (dispatch) => {
  dispatch(actions.userLogout());
};

const resetRedirectLogout = () => (dispatch) => {
  dispatch(actions.resetLogoutRedirect());
};

export default {
  userAuthentication,
  logout,
  resetRedirectLogout,
};
