import actions from './actions';
import services from './services';
import utils from '../../utils';

const getVersions = (
  getVersionsService = services.getVersions,
  getVersionsSuccessAction = actions.getVersionsSuccess,
  sendErrorMessage = utils.sendErrorMessage,
) => async (dispatch) => {
  try {
    const payload = await getVersionsService();
    const versions = [
      {
        name: 'Cell App',
        version: process.env.REACT_APP_VERSION,
      },
      ...payload,
    ];
    dispatch(getVersionsSuccessAction(versions));
  } catch (error) {
    sendErrorMessage({ dispatch, error });
  }
};

const {
  refreshAuthenticationTimeout,
  startAuthenticationTimeout,
  stopAuthenticationTimeout,
} = actions;

export default {
  getVersions,
  refreshAuthenticationTimeout,
  startAuthenticationTimeout,
  stopAuthenticationTimeout,
};
