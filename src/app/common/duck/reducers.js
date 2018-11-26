import types from './types';

const defaultState = [];

const versionsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_VERSIONS_SUCCESS:
      return [...action.versions];
    default:
      return state;
  }
};

export default versionsReducer;
