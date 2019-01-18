import { combineReducers } from 'redux';
import types from './types';

const defaultAuthenticationTimeoutReducerState = {
  timeout: null,
};

export const authenticationTimeoutReducer = (
  state = defaultAuthenticationTimeoutReducerState,
  action,
) => {
  switch (action.type) {
    case types.REFRESH_AUTHENTICATION_TIMEOUT:
      // If timer is null we received this refresh event after logout already happened.
      // Timer must not be refreshed in this case.
      if (!state.timeout) {
        return defaultAuthenticationTimeoutReducerState;
      }

      clearTimeout(state.timeout);
      return {
        timeout: setTimeout(() => {
          // console.log(`Timeout expired after ${
          //   process.env.REACT_APP_AUTHENTICATION_TIMEOUT_SEC
          // } seconds. Logging out happens now. This came from a refresh.`);
        }, process.env.REACT_APP_AUTHENTICATION_TIMEOUT_SEC * 1000),
      };
    case types.START_AUTHENTICATION_TIMEOUT:
      return {
        timeout: setTimeout(() => {
          // Logout action goes here
          // console.log(`Timeout expired after ${
          //   process.env.REACT_APP_AUTHENTICATION_TIMEOUT_SEC
          // } seconds. Logging out happens now.`);
        }, process.env.REACT_APP_AUTHENTICATION_TIMEOUT_SEC * 1000),
      };
    case types.STOP_AUTHENTICATION_TIMEOUT:
      clearTimeout(state.timeout);
      return defaultAuthenticationTimeoutReducerState;
    default:
      return state;
  }
};

const defaultVersionsReducerState = {
  data: [],
};

export const versionsReducer = (
  state = defaultVersionsReducerState,
  action,
) => {
  switch (action.type) {
    case types.GET_VERSIONS_SUCCESS:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

const commonReducer = combineReducers({
  authenticationTimeout: authenticationTimeoutReducer,
  versions: versionsReducer,
});

export default commonReducer;
