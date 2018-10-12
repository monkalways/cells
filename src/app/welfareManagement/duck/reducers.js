import { combineReducers } from 'redux';
import types from './types';

/* WelfareManagement State shape
{
    welfareFlagData : { 
      isMeal: boolean,
      isMedication: boolean,
      isCellCheck: boolean,
    },
    cellWelfareData: [],
}
*/

const unloadedState = {
  isMeal: false,
  isMedication: false,
  isCellCheck: false,
}
const welfareFlagReducer = (state = unloadedState, action) => {
  switch (action.type) {
    case types.SET_ISMEAL:
      return {
        isMeal: true,
        isMedication: false,
        isCellCheck: false
      };
    case types.SET_ISMEDICATION:
      return {
        isMeal: false,
        isMedication: true,
        isCellCheck: false
      };
    case types.SET_ISCELLCHECK:
      return {
        isMeal: false,
        isMedication: false,
        isCellCheck: true
      };
    case types.RESET_CELL_WELFARE:
      return {
        isMeal: false,
        isMedication: false,
        isCellCheck: false
      };
    default:
      return state;
  }
};

const welfareManagementReducer = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_DETAINEE_WELFARE_DATA:
      return [...state, action.payload.detaineeWelfareData];
    case types.EDIT_DETAINEE_WELFARE_DATA:
      {
        const arrestId = action.payload.detaineeWelfareData.arrestId;
        const detaineeWelfareDataExists =
          state.some(wlf => wlf.arrestId === arrestId);

        if (detaineeWelfareDataExists) {
          const newState =
            state.filter(wlf => wlf.arrestId !== arrestId);

          return [...newState, action.payload.detaineeWelfareData];
        }
        return state;
      }
    case types.DELETE_DETAINEE_WELFARE_DATA:
      {
        const arrestId = action.payload.detaineeWelfareData.arrestId;
        const detaineeWelfareDataExists =
          state.some(wlf => wlf.arrestId === arrestId);

        if (detaineeWelfareDataExists) {
          const newState =
            state.filter(wlf => wlf.arrestId !== arrestId);

          return [...newState];
        }
        return state;
      }
    case types.DELETE_CELL_WELFARE_DATA:
      return [];
    default:
      return state;
  }
};

const reducer = combineReducers({
  welfareFlagData: welfareFlagReducer,
  cellWelfareData: welfareManagementReducer,
});

export default reducer;