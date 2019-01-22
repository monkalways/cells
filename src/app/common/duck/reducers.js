import { combineReducers } from 'redux';
import types from './types';

const defaultAuthenticationTimeoutReducerState = {
  logout: null,
  timeout: null,
};

export const authenticationTimeoutReducer = (
  state = defaultAuthenticationTimeoutReducerState,
  action,
) => {
  switch (action.type) {
    case types.REFRESH_AUTHENTICATION_TIMEOUT:
      if (!state.timeout) {
        return defaultAuthenticationTimeoutReducerState;
      }

      clearTimeout(state.timeout);
      return {
        ...state,
        timeout: setTimeout(() => {
          state.logout();
        }, process.env.REACT_APP_AUTHENTICATION_TIMEOUT_SEC * 1000),
      };

    case types.START_AUTHENTICATION_TIMEOUT:
      clearTimeout(state.timeout);
      return {
        logout: action.payload,
        timeout: setTimeout(() => {
          action.payload();
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
