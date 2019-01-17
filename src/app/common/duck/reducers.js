import { combineReducers } from 'redux';
import types from './types';

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
  versions: versionsReducer,
});

export default commonReducer;
