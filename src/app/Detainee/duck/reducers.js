import types from './types';

const defaultDetaineeState = {
  data: {},
  loaded: false,
};

const detaineeReducer = (state = defaultDetaineeState, action) => {
  switch (action.type) {
    case types.GET_DETAINEE:
      return {
        ...state,
        loaded: false,
      };
    case types.GET_DETAINEE_SUCCESS:
      return {
        data: action.payload,
        loaded: true,
      };
    default:
      return state;
  }
};

export default detaineeReducer;
