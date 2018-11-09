import actions from './actions';
import services from './services';
import utils from '../../utils';

const getVersions = (
  getVersionsService = services.getVersions,
  getVersionsSuccessAction = actions.getVersionsSuccess,
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
    utils.sendErrorMessage({ dispatch, error });
  }
};

export default {
  getVersions,
};
